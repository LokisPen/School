# Rebuild: project guide

Offline study app (PWA) served by GitHub Pages from the repository root. Plain HTML, CSS and JavaScript: no build step, no dependencies. The owner has no coding experience, so explain any step they must take in plain language.

## Files

- `index.html` loads the scripts in order: `js/util.js`, `js/placement.js`, the `js/lessons-*.js` files, `js/reference.js`, then `js/app.js`.
- `js/app.js` is the engine. `TRACKS` at the top lists the subjects and their units.
- `js/lessons-<subject>.js` holds Unit 1 of a subject; `js/lessons-<subject>-2.js` holds Unit 2, and so on.
- `js/placement.js` is the placement test. `js/reference.js` is the Library and Notes content.
- `sw.js` caches every file for offline use.
- `tests/e2e.js` drives the whole app in a headless phone-sized browser.

## Rules that are easy to forget

1. **Every release must change `VERSION` in `sw.js`** and `APPV` in `js/app.js`. Installed phones only fetch new files when `VERSION` changes.
2. **Every new file must be added in two places:** a `<script>` tag in `index.html` and the `FILES` list in `sw.js`.
3. Saved progress lives in `localStorage` under `rebuild.pwa.v1`. Never rename lesson ids or the key, and keep `upgrade()` in `app.js` able to read older saves. Unit 1 checkpoints are stored under the track letter (`M`), later units under letter plus number (`M2`).
4. Run the test before committing:
   ```
   python3 -m http.server 8765 --bind 127.0.0.1   # from the repository root, in the background
   node tests/e2e.js
   ```
   It must end with `ALL CHECKS PASSED`. Pipe the output through `grep -E "^(ok|FAIL|TEST|ALL)"`; a crash prints very long lines.

## Lesson format

A lesson's track is the first letter of its id (`c1` is Chemistry; Biology uses `g`). Unit 1 is the default; later units set `unit:2` etc. See `js/lessons-math-2.js` for a full example.

```js
{id:'m8', unit:2, title:'...', sub:'one-line summary',
 learn:[ ['h','Heading'], ['p','Paragraph'], ['m','formula line'], ['l',[numbered items]], ['u',[bullets]],
         ['ex','Worked example question',[steps]], ['n','Neuro thread: title',[paragraphs]], ['o','Older-textbook note'] ],
 explain:{q:'...', model:'...', pts:['point','point','point']},   // gate part 1, self-graded
 gens:[ function(){ return {q:'...', a:42, sol:['step','step']}; } ],   // fresh numeric problems
 bank:[ ['Question?', ['right answer','wrong','wrong','wrong'], 'explanation'] ] }   // right answer always first
```

- Every lesson needs exactly one `n` block (neuroscience or clinical thread) and one `o` block. The test checks this.
- Generators return a numeric `a`. Add `tol` for decimals, and `ans` (a display string) when `f(a)` would show it badly: `f()` rounds to three decimals, so small numbers need `ans`. Do not put thousands commas inside a fraction string.
- Helpers in `js/util.js`: `ri, nz, pk, f, pn, fr, cx, plus, gcd, lcm, lst, srt, mix, sup, commas, dec`.
- Each lesson needs at least five question sources (generators plus bank items); eight or more is better, since the gate asks for eight in a row.
- To add a unit: write the file, then add `{title:'...', per:N}` to that track's `units` in `app.js`. `per` is checkpoint questions per lesson.

## Content standards

- Audience: an adult beginner. Build each idea from first principles in plain language, then worked examples.
- Only state well-established facts. For the "older textbooks" note, prefer findings that are widely accepted and give the approximate year; do not invent studies, numbers or citations. If unsure, choose a safer note.
- `js/reference.js` notes were carried over from the owner's earlier file and cite some sources dated 2026 that have not been independently checked.

## Where things stand

Built: placement test (8 subjects), Unit 1 for all eight subjects, Math Unit 2.

Next, in rough priority order (each a new `-2.js` file, 3 to 5 lessons):

- Physics 2: circuits and the membrane (series and parallel resistors, capacitance, RC time constant, diffusion).
- Chemistry 2: acids, bases and buffers; equilibrium; energy and reaction direction (ΔG).
- Neuroscience 2: synaptic integration, plasticity, sensory and motor pathways, major brain regions.
- Biology 2: membranes and transport, cell division, mutation and gene regulation.
- Biochemistry 2: amino acids and protein structure, enzyme kinetics, metabolism in fed and fasting states.
- Anatomy and physiology 2: kidney and fluid balance, hormones, digestion, the autonomic nervous system.
- Statistics 2: distributions and standard deviation, sampling and confidence intervals, p-values, sensitivity and specificity.
- Math 3: functions and graphs, leading into rates of change.

Ideas not yet built: letting the placement level open later units directly once they exist; a "Disease and drugs" subject (lessons existed in the owner's original `rebuild.html`).
