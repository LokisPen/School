// End-to-end check of the app in a phone-sized browser.
// Run from the repository root:
//   python3 -m http.server 8765 --bind 127.0.0.1      (leave running in another terminal)
//   node tests/e2e.js
// Optional: SHOTS=/some/folder node tests/e2e.js   saves screenshots there.
const { chromium, devices } = require('playwright');
const U = (process.env.BASE || 'http://127.0.0.1:8765/') + '#debug';
const SHOTS = process.env.SHOTS || '';
let failed = 0;
function check(name, ok, extra) { if (!ok) failed++; console.log((ok ? 'ok   ' : 'FAIL ') + name + (extra !== undefined ? '  [' + extra + ']' : '')); }

(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ ...devices['iPhone 13'] });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  const shot = async (n, full) => { if (SHOTS) await p.screenshot({ path: SHOTS + '/' + n + '.png', fullPage: !!full }); };
  const R = fn => p.evaluate(fn);

  await p.goto(U);
  check('first launch shows the placement test with no tabs', (await p.locator('h2').first().innerText()) === 'Placement test' && (await p.locator('#tabs button').count()) === 0);
  await shot('01-start');

  // Placement: both level-1 math questions right, "I don't know" everywhere else.
  await p.click('[data-act=start]');
  for (let g = 0; g < 200; g++) {
    if ((await R(() => window.__rebuild.state().test.status)) === 'done') break;
    if (await p.locator('[data-act=begin]').count()) { await p.click('[data-act=begin]'); continue; }
    const t = await R(() => { const t = window.__rebuild.state().test; return { d: t.d, l: t.l, i: t.i }; });
    if (t.d === 0 && t.l === 0) { await p.fill('#num', t.i === 0 ? '6' : '350'); await p.click('#lockbtn'); continue; }
    await p.click('[data-act=idk]');
  }
  const lv = await R(() => window.__rebuild.DOMAINS.map(d => d.id + window.__rebuild.placement(d.id).lvl).join(' '));
  check('placement scored', lv === 'M1 P0 C0 G0 B0 A0 S0 N0', lv);
  check('results shown, four tabs', (await p.locator('h2').first().innerText()) === 'Your placement' && (await p.locator('#tabs button').count()) === 4);
  await shot('02-results');

  await p.click('.btn[data-tab=home]');
  check('home lists eight subjects', (await p.locator('[data-act=track]').count()) === 8);
  await shot('03-home', true);

  // Locks.
  await p.click('[data-act=track][data-id=M]');
  await shot('04-math', true);
  check('lesson 2 locked at the start', await p.locator('[data-act=lesson][data-id=m2]').isDisabled());
  check('unit 2 locked at the start', await p.locator('[data-act=lesson][data-id=m8]').isDisabled() && await p.locator('[data-act=cp][data-u="2"]').isDisabled());
  check('math checkpoint open for testing out (placement level 1)', !(await p.locator('[data-act=cp][data-u="1"]').isDisabled()));
  await p.click('[data-act=tracks]');
  await p.click('[data-act=track][data-id=P]');
  check('physics checkpoint locked (placement level 0)', await p.locator('[data-act=cp][data-u="1"]').isDisabled());
  await p.click('[data-act=tracks]');
  await p.click('[data-act=track][data-id=M]');

  async function answer(wrong) {
    const pr = await R(() => { const q = window.__rebuild.prob(); return { o: !!q.o, a: q.a }; });
    if (pr.o) await p.click(`[data-act=mcpick][data-idx="${wrong ? 1 : 0}"]`);
    else await p.fill('#pin', String(wrong ? pr.a + 1 : pr.a));
    await p.click('#chk');
  }
  async function passGate(id, slip) {
    await p.click(`[data-act=lesson][data-id=${id}]`);
    await p.click('[data-act=mode][data-mode=gate]');
    await p.fill('#gx', 'This is my own explanation of the idea in words.');
    await p.click('#gxbtn');
    for (const c of await p.locator('input[data-gpt]').all()) await c.check();
    await p.click('[data-act=gxlock]');
    let n = 0;
    while (n++ < 60) {
      await answer(slip && n === 3);
      if (await p.locator('text=Lesson mastered').count()) break;
      await p.click('[data-act=next]');
    }
    return n;
  }
  async function runCheckpoint(sel, missAll) {
    await p.click(sel);
    const n = await R(() => window.__rebuild.ses().queue.length);
    for (let k = 0; k < n; k++) await answer(missAll);
    return n;
  }

  const used = await passGate('m1', true);
  check('gate needs eight in a row; one slip restarts the streak', used === 11, used + ' questions');
  await shot('05-mastered');
  await p.click('[data-act=lessons]');
  check('lesson 2 opens after lesson 1 is mastered, lesson 3 stays locked', !(await p.locator('[data-act=lesson][data-id=m2]').isDisabled()) && await p.locator('[data-act=lesson][data-id=m3]').isDisabled());

  // A failed test-out changes nothing.
  await runCheckpoint('[data-act=cp][data-u="1"]', true);
  check('failed checkpoint does not unlock anything', !(await R(() => window.__rebuild.cpPassed('M', 1))) && (await R(() => !window.__rebuild.state().L.m2.done)));
  await p.click('[data-act=lessons]');

  // Passing the unit 1 checkpoint tests out and opens unit 2.
  const cpn = await runCheckpoint('[data-act=cp][data-u="1"]', false);
  check('math unit 1 checkpoint has 14 questions', cpn === 14, cpn);
  check('passing it marks unit 1 mastered', await R(() => ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7'].every(id => window.__rebuild.state().L[id].done > 0)));
  await shot('06-checkpoint');
  await p.click('[data-act=lessons]');
  check('unit 2 opens: first lesson open, second locked', !(await p.locator('[data-act=lesson][data-id=m8]').isDisabled()) && await p.locator('[data-act=lesson][data-id=m9]').isDisabled());
  check('unit 2 lesson gate works', (await passGate('m8', false)) === 8);
  await p.click('[data-act=lessons]');
  await p.click('[data-act=tracks]');
  await p.click('[data-act=track][data-id=A]');
  check('concept-only lesson gate works', (await passGate('a1', false)) === 8);

  // Saving.
  await p.reload();
  check('progress survives a restart', await R(() => { const s = window.__rebuild.state(); return s.placed && s.L.m8.done > 0 && s.L.a1.done > 0; }));

  // Review.
  await R(() => { const s = window.__rebuild.state(); s.L.m1.due = 0; s.L.a1.due = 0; window.__rebuild.save(); });
  await p.click('#tabs [data-tab=home]');
  await p.click('[data-act=review]');
  for (let k = 0; k < 6; k++) { await answer(false); await p.click('[data-act=next]'); }
  check('review moves lessons to a longer gap', await R(() => window.__rebuild.state().L.m1.stage === 1 && window.__rebuild.state().L.a1.stage === 1));
  await p.click('[data-act=revdone]');

  // Every lesson opens and can produce questions.
  await R(() => { const r = window.__rebuild, s = r.state(), now = Date.now(); r.LESSONS.forEach(l => { if (!s.L[l.id]) s.L[l.id] = { pr: [0, 0], miss: {}, tries: 0, ex: true, best: 0, done: 0, stage: 0, due: 0 }; s.L[l.id].done = now; s.L[l.id].due = now + 9e9; }); r.TRACKS.forEach(t => t.units.forEach((u, i) => { s.cps[i ? t.id + (i + 1) : t.id] = { best: 999, last: 999 }; })); r.save(); r.render(); });
  await p.click('#tabs [data-tab=learn]');
  let opened = 0;
  const ids = await R(() => window.__rebuild.LESSONS.map(l => [l.id, l.track, l.title]));
  for (const [id, track, title] of ids) {
    await R(() => document.querySelector('[data-act=tracks]') && document.querySelector('[data-act=tracks]').click());
    await p.click(`[data-act=track][data-id=${track}]`);
    await p.click(`[data-act=lesson][data-id=${id}]`);
    if ((await p.locator('h2').first().innerText()) === title && (await p.locator('.neuro').count()) === 1 && (await p.locator('.old').count()) === 1) opened++;
    await p.click('[data-act=lessons]');
  }
  check('every lesson opens with a neuroscience thread and a textbook note', opened === ids.length, opened + ' of ' + ids.length);
  await p.click('[data-act=tracks]');
  await p.click('[data-act=track][data-id=M]');
  await p.click('[data-act=lesson][data-id=m12]');
  await shot('07-lesson', true);

  const fuzz = await R(() => {
    const r = window.__rebuild; let bad = [], n = 0;
    r.LESSONS.forEach(l => {
      l.gens.forEach((g, gi) => { for (let k = 0; k < 400; k++) { const q = g(); n++; const txt = q.q + ' ' + q.sol.join(' ') + ' ' + (q.ans || ''); if (typeof q.a !== 'number' || !isFinite(q.a) || /NaN|undefined|Infinity|null/.test(txt)) { bad.push(l.id + ':' + gi + ' ' + txt); break; }
        const shown = q.ans || String(q.a); const back = r.parse(shown); const tol = (q.tol === undefined ? 1e-9 : q.tol) + 1e-9; if (isNaN(back) || Math.abs(back - q.a) > tol) { bad.push(l.id + ':' + gi + ' shown answer "' + shown + '" would be marked wrong'); break; } } });
      l.bank.forEach((x, bi) => { if (x.length !== 3 || x[1].length < 3 || new Set(x[1]).size !== x[1].length) bad.push(l.id + ' bank ' + bi); });
      if (!l.explain || !l.explain.pts.length || !l.learn.length || l.gens.length + l.bank.length < 5) bad.push(l.id + ' structure');
      for (let k = 0; k < 50; k++) r.makeProb(l.id, -1, {});
    });
    return { n, bad };
  });
  check('generated problems are well formed and their shown answers are accepted', fuzz.bad.length === 0, fuzz.n + ' problems' + (fuzz.bad.length ? ' ' + JSON.stringify(fuzz.bad.slice(0, 5)) : ''));

  // More tab, backup, offline.
  await p.click('#tabs [data-tab=more]');
  await shot('08-more', true);
  await p.click('[data-act=go][data-tab=library]');
  check('library opens', (await p.locator('h2').first().innerText()) === 'Library');
  await p.click('#tabs [data-tab=more]');
  await p.click('[data-act=go][data-tab=notes]');
  check('notes open', (await p.locator('h2').first().innerText()) === 'Beyond the books');
  await p.click('#tabs [data-tab=more]');
  const code = await p.inputValue('#bk');
  await R(() => localStorage.clear());
  await p.reload();
  check('wiping storage returns to the placement test', (await p.locator('#tabs button').count()) === 0);
  await R(() => navigator.serviceWorker.ready);
  await p.waitForTimeout(1500);
  await ctx.setOffline(true);
  await p.reload();
  check('loads with no internet', (await p.locator('h1').first().innerText()) === 'Rebuild' && (await R(() => window.__rebuild.LESSONS.length)) === ids.length);
  await ctx.setOffline(false);
  await R(() => { window.__rebuild.state().placed = true; window.__rebuild.state().tab = 'more'; window.__rebuild.render(); });
  await p.click('summary:has-text("Back up or restore")');
  await p.fill('#imp', code);
  await p.click('[data-act=import]');
  check('backup code restores progress', await R(() => window.__rebuild.state().L.m8.done > 0 && document.getElementById('flash').textContent === 'Progress restored.'));

  check('no page errors', errs.length === 0, errs.join(' | '));
  console.log(failed ? failed + ' CHECK(S) FAILED' : 'ALL CHECKS PASSED (' + ids.length + ' lessons)');
  await b.close();
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error('TEST CRASHED', e); process.exit(1); });
