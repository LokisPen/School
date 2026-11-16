/* App engine: placement test, lessons with mastery gates, spaced review, saving on the device. */
(function(){
'use strict';

/* ---------- Subjects ---------- */
var TRACKS=[
 {id:'M',name:'Math',unit:'Algebra Unit 1: algebra from zero',per:2},
 {id:'P',name:'Physics',unit:'Physics Unit 1: motion, energy and electricity',per:4},
 {id:'A',name:'Anatomy and physiology',unit:'Anatomy Unit 1: body, heart and lungs',per:4}
];
var SOON=['Chemistry','Biology','Biochemistry','Statistics','Neuroscience'];
var STREAK=8, DAY=86400000, INTERVALS=[1,3,7,16,35,75];
LESSONS.forEach(function(l){ l.track=l.id.charAt(0).toUpperCase(); if(!l.gens) l.gens=[]; if(!l.bank) l.bank=[]; });

/* ---------- Saved state ---------- */
var KEY='rebuild.pwa.v1', mem=null, canStore=false;
try{ window.localStorage.setItem(KEY+'.t','1'); canStore=window.localStorage.getItem(KEY+'.t')==='1'; window.localStorage.removeItem(KEY+'.t'); }catch(e){ canStore=false; }
function blankTest(){ return {status:'none',d:0,l:0,i:0,intro:true,partial:0,ans:{}}; }
function fresh(){ return {v:1,tab:'home',track:null,placed:false,test:blankTest(),L:{},cps:{}}; }
function hasTrack(id){ return TRACKS.some(function(t){ return t.id===id; }); }
function upgrade(o){
  if(!o.L) o.L={}; if(!o.cps) o.cps={};
  if(!o.track||!hasTrack(o.track)) o.track=null;
  if(o.test.status==='done') o.placed=true;
  if(o.test.status==='active'&&o.test.d>=DOMAINS.length){ o.test.status='done'; o.placed=true; }
  if(['home','learn','review','test'].indexOf(o.tab)<0) o.tab='home';
  return o;
}
function load(){ try{ var s=window.localStorage.getItem(KEY); if(s){ var o=JSON.parse(s); if(o&&o.v===1&&o.test) return upgrade(o); } }catch(e){} return mem||fresh(); }
function save(){ mem=state; try{ window.localStorage.setItem(KEY,JSON.stringify(state)); }catch(e){} }
var state=load();
var cur=null;      // current placement question
var ses=null;      // current lesson / review / checkpoint session
var armed=null;    // two-tap confirmation
var flash='';

/* ---------- Helpers ---------- */
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function li(s){ return '<li>'+esc(s)+'</li>'; }
function parseNum(s){ var m; s=String(s).replace(/[−–—]/g,'-').replace(/\s/g,'').replace(/^\+/,'');
  m=/^(-?\d+(?:[.,]\d+)?)\/(\d+(?:[.,]\d+)?)$/.exec(s);
  if(m){ var d=parseFloat(m[2].replace(',','.')); return d===0?NaN:parseFloat(m[1].replace(',','.'))/d; }
  if(s.indexOf('/')>=0) return NaN;
  if(/^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)||s.indexOf('.')>=0) s=s.replace(/,/g,''); else s=s.replace(',','.');
  s=s.replace(/[^0-9.\-]/g,''); if(s===''||s==='-'||s==='.'||s.lastIndexOf('-')>0) return NaN; return parseFloat(s); }
function installed(){ try{ return window.navigator.standalone===true||window.matchMedia('(display-mode: standalone)').matches; }catch(e){ return false; } }

/* ---------- Placement test ---------- */
function answers(id){ var t=state.test; if(!t.ans[id]) t.ans[id]=[null,null,null,null,null,null,null,null]; return t.ans[id]; }
function placement(id){
  var a=state.test.ans[id]||[], lvl=0, shaky=[], extra=[], broken=false, l, c;
  for(l=0;l<4;l++){
    if(!a[l*2]||!a[l*2+1]) break;
    c=(a[l*2].r===1?1:0)+(a[l*2+1].r===1?1:0);
    if(c===2){ if(!broken) lvl=l+1; else extra.push(l+1); }
    else { broken=true; if(c===1) shaky.push(l+1); }
  }
  return {lvl:lvl,shaky:shaky,extra:extra};
}
function counts(){ var n=0,c=0; DOMAINS.forEach(function(d){ (state.test.ans[d.id]||[]).forEach(function(x){ if(x){ n++; if(x.r===1) c++; } }); }); return {n:n,c:c}; }
function startTest(){ state.test={status:'active',d:0,l:0,i:0,intro:true,partial:0,ans:{},started:Date.now()}; cur=null; save(); }
function record(r,given){
  var t=state.test, dom=DOMAINS[t.d], a=answers(dom.id), c, end=false;
  a[t.l*2+t.i]={r:r,g:given};
  if(t.i===0){ t.i=1; }
  else{
    c=(a[t.l*2].r===1?1:0)+(a[t.l*2+1].r===1?1:0);
    if(c===0) end=true;
    else if(c===1){ t.partial++; if(t.partial>=2) end=true; }
    if(!end){ t.l++; t.i=0; if(t.l>3) end=true; }
    if(end){ t.d++; t.l=0; t.i=0; t.partial=0; t.intro=true;
      if(t.d>=DOMAINS.length){ t.status='done'; t.finished=Date.now(); state.placed=true; state.tab='test'; } }
  }
  cur=null; save();
}
function hero(){
  return '<header class="hero"><h1>Rebuild</h1><p class="muted" style="margin:4px 0 0">Science from first principles, with the brain in every lesson.</p>'+
   '<svg viewBox="0 0 340 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 70 L108 70 C118 70 122 66 126 50 L134 14 C137 3 141 3 144 15 L156 78 C160 91 170 89 180 81 C195 72 210 70 230 70 L340 70"/></svg></header>';
}
function installCard(){
  if(installed()) return '';
  return '<div class="card"><h3>First, put this on your home screen</h3><p class="small">Do this before you start, so your progress is saved inside the installed app.</p><ul class="small"><li><strong>iPhone:</strong> open this page in Safari, tap the Share button, then “Add to Home Screen”.</li><li><strong>Android:</strong> open it in Chrome, tap the three dots, then “Install app” or “Add to Home screen”.</li></ul><p class="small muted" style="margin:0">Then open Rebuild from the new icon. After that it works with no internet.</p></div>';
}
function viewTest(){
  var t=state.test;
  if(t.status==='none') return viewRules();
  if(t.status==='done') return viewResults();
  if(t.intro) return viewIntro();
  return viewQuestion();
}
function viewRules(){
  return (state.placed?'':hero()+installCard())+'<h2>Placement test</h2><p>Eight subjects, four levels each. Each subject stops as soon as you reach your limit, so it takes between 10 and 40 minutes.</p>'+
   '<div class="card"><h3>Rules</h3><ul><li>No looking anything up. A wrong placement wastes your own time.</li><li>Scratch paper and a calculator are allowed.</li><li>If you would be guessing, choose “I don’t know”. A lucky guess hides a gap you need to fill.</li><li>There is no time limit and no feedback until the end.</li><li>You can close the app and pick up where you left off.</li></ul></div>'+
   '<button class="btn" data-act="start">Start the test</button>'+(canStore?'':'<p class="small muted" style="margin-top:12px">This browser is blocking saved data, so progress may be lost when you close it. Private browsing mode causes this.</p>');
}
function strip(){
  var t=state.test, s='<div class="strip" aria-hidden="true">', k;
  for(k=0;k<DOMAINS.length;k++) s+='<i class="'+(k<t.d?'d':(k===t.d?'c':''))+'"></i>';
  return s+'</div>';
}
function viewIntro(){
  var t=state.test, d=DOMAINS[t.d];
  return '<div class="where"><span>Subject '+(t.d+1)+' of '+DOMAINS.length+'</span></div>'+strip()+
   '<h2>'+esc(d.name)+'</h2><p>'+esc(d.blurb)+'</p><p class="muted small">Up to eight questions, starting easy. The subject ends when you miss both questions at a level.</p>'+
   '<button class="btn" data-act="begin">Begin '+esc(d.name.toLowerCase())+'</button>';
}
function viewQuestion(){
  var t=state.test, d=DOMAINS[t.d], qi=t.l*2+t.i, q=d.q[qi], key=d.id+qi, h, k;
  if(!cur||cur.key!==key) cur={key:key,order:q.t==='mc'?shuffle(q.o.length):null,pick:null,shown:false,text:''};
  h='<div class="where"><span>'+esc(d.name)+'</span><span>Level '+(t.l+1)+' of 4, question '+(t.i+1)+' of 2</span></div>'+strip()+
    '<p class="q">'+esc(q.q)+'</p>';
  if(q.t==='mc'){
    for(k=0;k<cur.order.length;k++){ var oi=cur.order[k];
      h+='<button class="opt'+(cur.pick===oi?' on':'')+'" data-act="pick" data-idx="'+oi+'" aria-pressed="'+(cur.pick===oi)+'">'+esc(q.o[oi])+'</button>'; }
    h+='<button class="btn" data-act="lock"'+(cur.pick===null?' disabled':'')+'>Lock in answer</button>';
  } else if(q.t==='num'){
    h+='<input type="text" id="num" inputmode="text" autocomplete="off" autocapitalize="off" placeholder="Type a number" aria-label="Your answer">'+
       '<button class="btn" id="lockbtn" data-act="locknum" disabled>Lock in answer</button>';
  } else {
    if(!cur.shown){
      h+='<textarea id="rec" placeholder="Write your explanation before you see the model answer." aria-label="Your explanation">'+esc(cur.text)+'</textarea>'+
         '<button class="btn" id="showbtn" data-act="show"'+(cur.text.trim().length<15?' disabled':'')+'>Show the model answer</button>';
    } else {
      h+='<p class="small muted">Your answer</p><p>'+esc(cur.text)+'</p><div class="model"><p class="small muted">Model answer</p><p>'+esc(q.model)+'</p></div>'+
         '<p class="small">Tick only the points your answer clearly made. All three are needed to pass.</p>';
      for(k=0;k<q.pts.length;k++) h+='<label class="check"><input type="checkbox" data-pt="'+k+'"><span>'+esc(q.pts[k])+'</span></label>';
      h+='<button class="btn" data-act="lockrec">Lock in my grade</button>';
    }
  }
  if(!(q.t==='recall'&&cur.shown)) h+='<button class="btn ghost" data-act="idk">I don’t know</button>';
  return h;
}
function pips(p){ var s='<span class="pips" aria-hidden="true">', l; for(l=1;l<=4;l++) s+='<b class="'+(l<=p.lvl||p.extra.indexOf(l)>=0?'f':(p.shaky.indexOf(l)>=0?'h':''))+'"></b>'; return s+'</span>'; }
function advice(id,p){
  if(!hasTrack(id)) return 'Lessons for this subject are coming later. Your level is saved for then.';
  if(p.lvl===0) return 'Unit 1 is built for exactly this starting point. Begin at lesson 1 and take your time.';
  return 'Unit 1 will be partly review for you. You still pass every gate, but you can skim the reading and go straight to it.';
}
function viewResults(){
  var k=counts(), h='<h2>Your placement</h2><p>You answered '+k.c+' of '+k.n+' questions correctly. Bars show the levels you passed; striped means half right.</p><div class="card">';
  DOMAINS.forEach(function(d){ var p=placement(d.id);
    h+='<div class="row"><strong>'+esc(d.name)+'</strong>'+pips(p)+'<span class="note">Level '+p.lvl+' of 4: '+esc(LEVELS[p.lvl].toLowerCase())+'. '+esc(advice(d.id,p))+'</span></div>'; });
  h+='</div><button class="btn" data-act="go" data-tab="home">Start learning</button>';
  h+='<div class="card" style="margin-top:14px"><h3>Review every answer</h3>';
  DOMAINS.forEach(function(d){ var a=state.test.ans[d.id]||[], body='', n=0;
    d.q.forEach(function(q,qi){ var x=a[qi]; if(!x) return; n++;
      var tag=x.r===1?'<span class="tag">Correct</span>':(x.r===2?'<span class="tag skip">Skipped</span>':'<span class="tag miss">Missed</span>');
      var yours=(x.r===2||x.g===null||x.g===undefined)?'':(q.t==='mc'?q.o[x.g]:String(x.g));
      var right=q.t==='mc'?q.o[q.a]:(q.t==='num'?String(q.a).replace('-','−'):q.model);
      body+='<div class="rev"><p><strong>'+esc(q.q)+'</strong>'+tag+'</p>'+(yours!==''&&x.r!==1?'<p class="muted">You answered: '+esc(yours)+'</p>':'')+
            '<p>Answer: '+esc(right)+'</p><p class="muted">'+esc(q.x)+'</p></div>'; });
    h+='<details><summary><span>'+esc(d.name)+'</span></summary><div>'+body+(n<8?'<p class="small muted">'+(8-n)+' harder questions were not reached. They come back as lessons.</p>':'')+'</div></details>'; });
  h+='</div><button class="btn danger" data-act="retake">'+(armed==='retake'?'Tap again to erase these results':'Retake the test')+'</button>';
  return h;
}

/* ---------- Lesson engine ---------- */
function trackById(id){ for(var k=0;k<TRACKS.length;k++) if(TRACKS[k].id===id) return TRACKS[k]; return TRACKS[0]; }
function trackLessons(id){ return LESSONS.filter(function(l){ return l.track===id; }); }
function LS(id){ if(!state.L[id]) state.L[id]={pr:[0,0],miss:{},tries:0,ex:false,best:0,done:0,stage:0,due:0}; return state.L[id]; }
function CP(tid){ if(!state.cps[tid]) state.cps[tid]={best:0,last:null}; return state.cps[tid]; }
function cpSize(tid){ return trackLessons(tid).length*trackById(tid).per; }
function cpPassed(tid){ var c=CP(tid); return c.last!==null&&c.best>=cpSize(tid)-1; }
function lessonById(id){ for(var k=0;k<LESSONS.length;k++) if(LESSONS[k].id===id) return LESSONS[k]; return null; }
function unlockedL(l){ var tl=trackLessons(l.track), i=tl.indexOf(l); return i===0||LS(tl[i-1].id).done>0; }
function nextIn(tid){ var tl=trackLessons(tid), k; for(k=0;k<tl.length;k++) if(!LS(tl[k].id).done) return tl[k]; return null; }
function doneIn(tid){ return trackLessons(tid).filter(function(l){ return LS(l.id).done>0; }).length; }
function masteredList(){ return LESSONS.filter(function(l){ return LS(l.id).done>0; }); }
function dueLessons(){ var now=Date.now(); return LESSONS.filter(function(l){ var s=LS(l.id); return s.done>0&&s.due<=now; }); }
function makeProb(lid,last,used){
  var L=lessonById(lid), ng=L.gens.length, n=ng+L.bank.length, cand=[], gc, bc, k, gi, p, b, all=true;
  if(used&&L.bank.length){ for(k=ng;k<n;k++) if(!used[lid+':'+k]) all=false; if(all) for(k=ng;k<n;k++) delete used[lid+':'+k]; }
  for(k=0;k<n;k++){ if(k===last&&n>1) continue; if(k>=ng&&used&&used[lid+':'+k]) continue; cand.push(k); }
  if(!cand.length) for(k=0;k<n;k++) cand.push(k);
  gc=cand.filter(function(x){ return x<ng; }); bc=cand.filter(function(x){ return x>=ng; });
  if(gc.length&&bc.length) cand=Math.random()<0.6?gc:bc;
  gi=pk(cand);
  if(gi<ng) p=L.gens[gi]();
  else { b=L.bank[gi-ng]; p={q:b[0],o:b[1],sol:[b[2]],order:shuffle(b[1].length)}; if(used) used[lid+':'+gi]=true; }
  p.lid=lid; p.gi=gi; if(p.tol===undefined) p.tol=1e-9; return p;
}
function whenText(ts){ var d=Math.ceil((ts-Date.now())/DAY); return d<=0?'now':(d===1?'tomorrow':'in '+d+' days'); }
function openLesson(id,mode){ var l=lessonById(id); if(!l||!unlockedL(l)) return; ses={kind:'lesson',lid:id,mode:mode||'learn',prob:null,phase:'ask',ok:false,raw:'',pick:null,streak:0,n:0,last:-1,used:{},ex:null,exFail:false,justDone:false}; state.tab='learn'; state.track=l.track; }
function setMode(m){ ses.mode=m; ses.prob=null; ses.phase='ask'; ses.pick=null; ses.streak=0; ses.n=0; ses.used={}; ses.ex=null; ses.exFail=false; ses.justDone=false; }
function startReview(affects){
  var src=affects?dueLessons():masteredList(), q=[], used={}, k, last;
  if(!src.length) return false;
  if(affects){ src.forEach(function(l){ last=-1; for(k=0;k<3;k++){ var p=makeProb(l.id,last,used); last=p.gi; q.push(p); } }); }
  else { for(k=0;k<6;k++) q.push(makeProb(pk(src).id,-1,used)); }
  ses={kind:affects?'review':'mixed',queue:mix(q),idx:0,phase:'ask',ok:false,raw:'',pick:null,results:[],summary:null}; state.tab='review'; return true;
}
function startCheckpoint(tid){ var q=[], used={}, per=trackById(tid).per;
  if(doneIn(tid)!==trackLessons(tid).length) return;
  trackLessons(tid).forEach(function(l){ var last=-1, k, p; for(k=0;k<per;k++){ p=makeProb(l.id,last,used); last=p.gi; q.push(p); } });
  ses={kind:'cp',tid:tid,queue:mix(q),idx:0,phase:'ask',results:[],raw:'',pick:null}; state.tab='learn'; state.track=tid; }
function curProb(){ if(!ses) return null; return ses.kind==='lesson'?ses.prob:ses.queue[ses.idx]; }
function finishReview(){
  var by={}, out=[];
  ses.results.forEach(function(r){ if(!by[r.p.lid]) by[r.p.lid]=[0,0]; by[r.p.lid][1]++; if(r.ok) by[r.p.lid][0]++; });
  LESSONS.forEach(function(l){ var b=by[l.id], s; if(!b) return; s=LS(l.id);
    if(ses.kind==='review'){ if(b[0]===b[1]){ s.stage=Math.min(s.stage+1,INTERVALS.length-1); } else { s.stage=0; } s.due=Date.now()+DAY*INTERVALS[s.stage]; }
    out.push({title:l.title,right:b[0],total:b[1],next:ses.kind==='review'?whenText(s.due):''}); });
  ses.summary=out; ses.phase='done'; save();
}
function finishCheckpoint(){ var c=0, cp=CP(ses.tid); ses.results.forEach(function(r){ if(r.ok) c++; });
  cp.last=c; cp.at=Date.now(); if(c>cp.best) cp.best=c; ses.phase='done'; ses.score=c; save(); }
function doCheck(){
  var el=document.getElementById('pin'), p=curProb(), v, ok, s, g;
  if(!p||ses.phase!=='ask') return;
  if(p.o){ if(ses.pick===null||ses.pick===undefined) return; ok=ses.pick===0; ses.raw=p.o[ses.pick]; }
  else { if(!el) return; v=parseNum(el.value); if(isNaN(v)) return; ok=Math.abs(v-p.a)<=p.tol+1e-9; ses.raw=el.value.trim(); }
  s=LS(p.lid); ses.ok=ok; ses.pick=null;
  if(ses.kind==='lesson'){
    ses.phase='fb';
    if(ses.mode==='practice'){ s.pr[1]++; if(ok) s.pr[0]++; else s.miss[p.gi]=(s.miss[p.gi]||0)+1; }
    else { g=LS(ses.lid);
      if(ok){ ses.streak++; if(ses.streak>g.best) g.best=ses.streak;
        if(ses.streak>=STREAK){ g.done=Date.now(); g.stage=0; g.due=Date.now()+DAY*INTERVALS[0]; ses.justDone=true; } }
      else { ses.streak=0; g.tries++; s.miss[p.gi]=(s.miss[p.gi]||0)+1; } }
  } else if(ses.kind==='cp'){
    ses.results.push({p:p,ok:ok,raw:ses.raw}); ses.idx++; if(ses.idx>=ses.queue.length) finishCheckpoint();
  } else {
    ses.results.push({p:p,ok:ok}); ses.phase='fb'; if(!ok) s.miss[p.gi]=(s.miss[p.gi]||0)+1;
  }
  save();
}
function doNext(){
  if(!ses) return;
  ses.pick=null;
  if(ses.kind==='lesson'){ ses.last=ses.prob?ses.prob.gi:-1; ses.prob=null; ses.phase='ask'; ses.n++; }
  else { ses.idx++; ses.phase='ask'; if(ses.idx>=ses.queue.length) finishReview(); }
}

/* ---------- Lesson views ---------- */
function probUI(p,label){
  var h=(label?'<p class="small muted">'+esc(label)+'</p>':'')+'<p class="q">'+esc(p.q)+'</p>';
  if(p.o){
    p.order.forEach(function(oi){ h+='<button class="opt'+(ses.pick===oi?' on':'')+'" data-act="mcpick" data-idx="'+oi+'" aria-pressed="'+(ses.pick===oi)+'">'+esc(p.o[oi])+'</button>'; });
    return h+'<button class="btn" id="chk" data-act="check"'+(ses.pick===null||ses.pick===undefined?' disabled':'')+'>Check</button>';
  }
  return h+'<div class="ans"><input type="text" id="pin" inputmode="decimal" autocomplete="off" autocapitalize="off" placeholder="Answer" aria-label="Your answer">'+
   '<button class="key" data-act="sign" aria-label="Switch between positive and negative">±</button><button class="key" data-act="slash" aria-label="Fraction bar">/</button></div>'+
   '<button class="btn" id="chk" data-act="check" disabled>Check</button>';
}
function fbUI(p,ok,raw){
  return '<p class="q">'+esc(p.q)+'</p><div class="fb'+(ok?'':' no')+'"><p><strong>'+(ok?'Correct.':'Not yet.')+'</strong> '+
   (ok?'':'You answered: '+esc(raw)+'. ')+'The answer is '+esc(p.o?p.o[0]:(p.ans||f(p.a)))+'.</p>'+(p.o?'<p>'+esc(p.sol[0])+'</p>':'<ol>'+p.sol.map(li).join('')+'</ol>')+'</div>';
}
function learnBody(L){
  var h='';
  L.learn.forEach(function(b){
    if(b[0]==='h') h+='<h3 style="margin-top:18px">'+esc(b[1])+'</h3>';
    else if(b[0]==='p') h+='<p>'+esc(b[1])+'</p>';
    else if(b[0]==='m') h+='<p class="math">'+esc(b[1])+'</p>';
    else if(b[0]==='l') h+='<ol>'+b[1].map(li).join('')+'</ol>';
    else if(b[0]==='u') h+='<ul>'+b[1].map(li).join('')+'</ul>';
    else if(b[0]==='ex') h+='<div class="ex"><p class="small muted" style="margin:0">Worked example</p><p class="math" style="margin:2px 0 0">'+esc(b[1])+'</p><ol>'+b[2].map(li).join('')+'</ol></div>';
    else if(b[0]==='n') h+='<div class="neuro"><h3>'+esc(b[1])+'</h3>'+b[2].map(function(t){ return '<p>'+esc(t)+'</p>'; }).join('')+'</div>';
    else if(b[0]==='o') h+='<div class="old"><strong>Where older textbooks are out of date.</strong> '+esc(b[1])+'</div>';
  });
  return h;
}
function streakBar(n,total){ var s='<div class="streak" aria-hidden="true">', k; for(k=0;k<total;k++) s+='<i class="'+(k<n?'f':'')+'"></i>'; return s+'</div>'; }
function gateBody(L,s){
  var tl=trackLessons(L.track), idx=tl.indexOf(L), nx=tl[idx+1], h='', earlier;
  if(ses.justDone){
    h='<div class="card"><h3>Lesson mastered</h3><p>Eight in a row, with the idea explained in your own words. This lesson comes back for review tomorrow, then at longer and longer gaps.</p>';
    h+=nx?'<button class="btn" data-act="lesson" data-id="'+nx.id+'">Open lesson '+(idx+2)+': '+esc(nx.title)+'</button>':'<button class="btn" data-act="lessons">Go to the checkpoint</button>';
    return h+'</div>';
  }
  if(s.done) return '<div class="card"><h3>Already mastered</h3><p>Next review: '+whenText(s.due)+'. Extra practice never hurts and does not change your schedule.</p><button class="btn" data-act="mode" data-mode="practice">Practice more</button></div>';
  if(!s.ex){
    if(ses.exFail) return '<div class="card"><h3>Not there yet</h3><p>Your explanation missed at least one point. Go back to the lesson, rebuild the idea, then try the gate again.</p><button class="btn" data-act="mode" data-mode="learn">Back to the lesson</button></div>';
    h='<p class="small muted">Gate, part 1 of 2: explain the idea. Part 2 is eight questions right in a row.</p><p class="q">'+esc(L.explain.q)+'</p>';
    if(!ses.ex||!ses.ex.shown){
      h+='<textarea id="gx" placeholder="Write it in your own words before you see the model answer." aria-label="Your explanation">'+esc(ses.ex?ses.ex.text:'')+'</textarea>'+
         '<button class="btn" id="gxbtn" data-act="gxshow"'+((ses.ex?ses.ex.text:'').trim().length<15?' disabled':'')+'>Show the model answer</button>';
    } else {
      h+='<p class="small muted">Your answer</p><p>'+esc(ses.ex.text)+'</p><div class="model"><p class="small muted">Model answer</p><p>'+esc(L.explain.model)+'</p></div><p class="small">Tick only the points your answer clearly made. All are needed.</p>';
      L.explain.pts.forEach(function(t,k){ h+='<label class="check"><input type="checkbox" data-gpt="'+k+'"><span>'+esc(t)+'</span></label>'; });
      h+='<button class="btn" data-act="gxlock">Lock in my grade</button>';
    }
    return h;
  }
  if(!ses.prob){
    earlier=tl.slice(0,idx).filter(function(l){ return LS(l.id).done>0; });
    if(ses.n%4===3&&earlier.length){ ses.prob=makeProb(pk(earlier).id,-1,ses.used); ses.prob.old=true; }
    else ses.prob=makeProb(L.id,ses.last,ses.used);
  }
  h='<div class="where"><span>Gate, part 2 of 2</span><span>Streak '+ses.streak+' of '+STREAK+'</span></div>'+streakBar(ses.streak,STREAK);
  if(ses.phase==='ask') h+=probUI(ses.prob,ses.prob.old?'From an earlier lesson':'');
  else h+=fbUI(ses.prob,ses.ok,ses.raw)+(ses.ok?'':'<p class="small muted" style="margin-top:10px">The streak starts over. Read the explanation, then go again.</p>')+'<button class="btn" data-act="next">Next question</button>';
  return h;
}
function viewLesson(){
  var L=lessonById(ses.lid), s=LS(L.id), names={learn:'Learn',practice:'Practice',gate:'Gate'}, h;
  h='<button class="btn ghost" style="margin:0 0 14px" data-act="lessons">Back to '+esc(trackById(L.track).name)+'</button><h2>'+esc(L.title)+'</h2><div class="seg">'+
    ['learn','practice','gate'].map(function(m){ return '<button data-act="mode" data-mode="'+m+'" class="'+(ses.mode===m?'on':'')+'" aria-pressed="'+(ses.mode===m)+'">'+names[m]+'</button>'; }).join('')+'</div>';
  if(ses.mode==='learn') h+=learnBody(L)+'<button class="btn" data-act="mode" data-mode="practice">Start practice</button>';
  else if(ses.mode==='practice'){
    if(!ses.prob) ses.prob=makeProb(L.id,ses.last,ses.used);
    h+='<p class="small muted">'+(s.pr[1]?s.pr[0]+' of '+s.pr[1]+' right so far. ':'')+'The explanation is shown after each answer.</p>';
    if(ses.phase==='ask') h+=probUI(ses.prob,'');
    else h+=fbUI(ses.prob,ses.ok,ses.raw)+'<button class="btn" data-act="next">Next question</button><button class="btn ghost" data-act="mode" data-mode="gate">Go to the gate</button>';
  } else h+=gateBody(L,s);
  return h;
}
function viewCheckpoint(){
  var h, p, t=trackById(ses.tid), n=ses.queue.length;
  if(ses.phase==='done'){
    h='<h2>'+esc(t.name)+' checkpoint</h2><div class="card"><h3>'+ses.score+' of '+n+'</h3><p>'+(ses.score>=n-1?'Passed. This unit is complete. Unit 2 will be added to the app later; until then, keep up with your reviews.':'Not passed yet. You need '+(n-1)+'. Review the misses below, practice those lessons, and take it again.')+'</p></div>';
    ses.results.forEach(function(r){ if(r.ok) return; h+='<div class="card">'+fbUI(r.p,false,r.raw)+'<p class="small muted" style="margin-top:8px">From: '+esc(lessonById(r.p.lid).title)+'</p></div>'; });
    return h+'<button class="btn" data-act="lessons">Back to '+esc(t.name)+'</button>';
  }
  p=ses.queue[ses.idx];
  return '<div class="where"><span>'+esc(t.name)+' checkpoint</span><span>Question '+(ses.idx+1)+' of '+n+'</span></div><div class="strip" aria-hidden="true">'+ses.queue.map(function(_,k){ return '<i class="'+(k<ses.idx?'d':(k===ses.idx?'c':''))+'"></i>'; }).join('')+'</div>'+
    '<p class="small muted">No feedback until the end. One slip is allowed.</p>'+probUI(p,'');
}
function viewTracks(){
  var h='<h2>Subjects</h2><p>Three subjects are open, side by side. Do some math in every session, because physics leans on it. Take the others in any order.</p>';
  TRACKS.forEach(function(t){ var n=trackLessons(t.id).length, d=doneIn(t.id), pass=cpPassed(t.id);
    h+='<button class="lrow" data-act="track" data-id="'+t.id+'"><span><strong>'+esc(t.name)+'</strong><br><span class="small muted">'+esc(t.unit)+'</span></span><span class="tag'+(pass||d===n?'':' skip')+'">'+(pass?'Unit passed':d+' of '+n)+'</span></button>'; });
  h+='<h3 style="margin-top:22px">Coming later</h3>';
  SOON.forEach(function(n){ h+='<button class="lrow" disabled><span><strong>'+esc(n)+'</strong></span><span class="tag skip">Not built yet</span></button>'; });
  return h;
}
function viewTrack(tid){
  var t=trackById(tid), tl=trackLessons(tid), all=doneIn(tid)===tl.length, cp=CP(tid), n=cpSize(tid), pass=cpPassed(tid);
  var h='<button class="btn ghost" style="margin:0 0 14px" data-act="tracks">All subjects</button><h2>'+esc(t.unit)+'</h2><p>'+tl.length+' lessons, each with a thread of real neuroscience. A lesson opens only when you have mastered the one before it.</p>';
  tl.forEach(function(l,k){ var s=LS(l.id), open=unlockedL(l);
    h+='<button class="lrow" data-act="lesson" data-id="'+l.id+'"'+(open?'':' disabled')+'><span><strong>'+(k+1)+'. '+esc(l.title)+'</strong><br><span class="small muted">'+esc(l.sub)+'</span></span><span class="tag'+(s.done?'':' skip')+'">'+(s.done?'Mastered':(open?'Open':'Locked'))+'</span></button>'; });
  h+='<button class="lrow" data-act="cp" data-id="'+tid+'"'+(all?'':' disabled')+'><span><strong>Checkpoint</strong><br><span class="small muted">'+n+' mixed questions, no feedback until the end. Pass mark '+(n-1)+'.'+(cp.last!==null?' Best so far: '+cp.best+'.':'')+'</span></span><span class="tag'+(pass?'':' skip')+'">'+(pass?'Passed':(all?'Open':'Locked'))+'</span></button>';
  return h+'<p class="small muted" style="margin-top:14px">Unit 2 of this subject will be added later.</p>';
}
function viewLearn(){
  if(ses&&ses.kind==='lesson') return viewLesson();
  if(ses&&ses.kind==='cp') return viewCheckpoint();
  return state.track?viewTrack(state.track):viewTracks();
}
function viewReview(){
  if(ses&&(ses.kind==='review'||ses.kind==='mixed')) return viewReviewRun();
  var due=dueLessons(), m=masteredList(), h='<h2>Review</h2>';
  if(!m.length) return h+'<p>Nothing to review yet. Each lesson you master, in any subject, comes back here after 1, 3, 7, 16, 35 and 75 days, mixed in with the others.</p><p class="muted">Spaced, mixed review is what moves knowledge into long-term memory. Skipping it is the most common reason self-taught learners stall.</p>';
  if(due.length) h+='<div class="card"><h3>'+due.length+' due now</h3><p>'+esc(due.map(function(l){ return l.title; }).join(', '))+'.</p><p class="small muted">Three questions per lesson, shuffled together across subjects. All three right moves a lesson to a longer gap. A miss brings it back tomorrow.</p><button class="btn" data-act="review">Start review</button></div>';
  else h+='<div class="card"><h3>Nothing due right now</h3><p>You are up to date.</p></div>';
  h+='<div class="card"><h3>Schedule</h3>';
  m.forEach(function(l){ h+='<div class="row"><strong>'+esc(l.title)+'</strong><span class="small muted">'+esc(whenText(LS(l.id).due))+'</span></div>'; });
  h+='</div><button class="btn ghost" data-act="mixed">Mixed practice, six questions</button><p class="small muted" style="margin-top:8px">Mixed practice does not change your schedule.</p>';
  return h;
}
function viewReviewRun(){
  var h, p, name=ses.kind==='review'?'Review':'Mixed practice';
  if(ses.phase==='done'){
    h='<h2>'+name+' finished</h2><div class="card">';
    ses.summary.forEach(function(r){ h+='<div class="row"><strong>'+esc(r.title)+'</strong><span class="tag'+(r.right===r.total?'':' miss')+'">'+r.right+' of '+r.total+'</span>'+(r.next?'<span class="note">Next review: '+esc(r.next)+'.</span>':'')+'</div>'; });
    return h+'</div><button class="btn" data-act="revdone">Done</button>';
  }
  p=ses.queue[ses.idx];
  h='<div class="where"><span>'+name+'</span><span>Question '+(ses.idx+1)+' of '+ses.queue.length+'</span></div><div class="strip" aria-hidden="true">'+ses.queue.map(function(_,k){ return '<i class="'+(k<ses.idx?'d':(k===ses.idx?'c':''))+'"></i>'; }).join('')+'</div>';
  if(ses.phase==='ask') h+=probUI(p,'');
  else h+=fbUI(p,ses.ok,ses.raw)+'<button class="btn" data-act="next">'+(ses.idx+1>=ses.queue.length?'See results':'Next question')+'</button>';
  return h;
}

/* ---------- Home ---------- */
function progressText(){
  var lines=['Rebuild progress'], pl=[];
  DOMAINS.forEach(function(d){ pl.push(d.name+' '+placement(d.id).lvl); });
  lines.push('Placement levels (0 to 4): '+pl.join(', '));
  TRACKS.forEach(function(t){ var tl=trackLessons(t.id), cp=CP(t.id), n=cpSize(t.id);
    lines.push(t.name+': '+doneIn(t.id)+'/'+tl.length+' mastered; checkpoint '+(cp.last===null?'not taken':'best '+cp.best+'/'+n));
    tl.forEach(function(l){ var s=LS(l.id), weak=[], g;
      if(!(s.pr[1]||s.tries||s.ex||s.done)) return;
      for(g in s.miss) if(s.miss.hasOwnProperty(g)) weak.push('q'+(parseInt(g,10)+1)+'x'+s.miss[g]);
      lines.push('  '+l.id+' '+l.title+': '+(s.done?'mastered':'in progress')+'; practice '+s.pr[0]+'/'+s.pr[1]+'; gate resets '+s.tries+(s.done?'; review stage '+s.stage:'')+(weak.length?'; misses '+weak.join(' '):'')); }); });
  return lines.join('\n');
}
function exportCode(){ try{ return 'RBK1.'+window.btoa(unescape(encodeURIComponent(JSON.stringify(state)))); }catch(e){ return ''; } }
function importCode(s){ try{ s=String(s).trim(); if(s.indexOf('RBK1.')!==0) return false; var o=JSON.parse(decodeURIComponent(escape(window.atob(s.slice(5))))); if(!o||o.v!==1||!o.test||typeof o.test!=='object') return false; if(!o.test.ans) o.test.ans={}; state=upgrade(o); ses=null; cur=null; state.tab='home'; save(); return true; }catch(e){ return false; } }
function nextCard(tid){
  var t=trackById(tid), nx=nextIn(tid), tl=trackLessons(tid), d=doneIn(tid), bar='<div class="streak" aria-hidden="true">', k;
  for(k=0;k<tl.length;k++) bar+='<i class="'+(LS(tl[k].id).done?'f':'')+'"></i>';
  bar+='</div>';
  if(nx) return '<div class="card"><h2>'+esc(t.name)+'</h2><p><strong>'+esc(nx.title)+'.</strong> '+esc(nx.sub)+'</p><p class="small muted" style="margin:0">'+d+' of '+tl.length+' lessons mastered</p>'+bar+'<button class="btn" data-act="lesson" data-id="'+nx.id+'">Open the lesson</button></div>';
  if(cpPassed(tid)) return '<div class="card"><h2>'+esc(t.name)+': unit complete</h2><p>Unit 2 will be added later. Keep up with your reviews so this one stays sharp.</p>'+bar+'</div>';
  return '<div class="card"><h2>'+esc(t.name)+': ready for the checkpoint</h2><p>Every lesson is mastered. The checkpoint is '+cpSize(tid)+' mixed questions with no feedback until the end.</p>'+bar+'<button class="btn" data-act="cp" data-id="'+tid+'">Take the checkpoint</button></div>';
}
function viewHome(){
  var h=hero(), due=dueLessons();
  if(state.test.status!=='done') h+='<div class="card"><h3>Placement retake in progress</h3><button class="btn ghost" data-act="go" data-tab="test">Continue the placement test</button></div>';
  if(due.length) h+='<div class="card"><h2>'+due.length+(due.length===1?' lesson is':' lessons are')+' due for review</h2><p>Reviews come first. They are what make earlier lessons stick.</p><button class="btn" data-act="review">Start review</button></div>';
  TRACKS.forEach(function(t){ h+=nextCard(t.id); });
  h+='<div class="card"><h3>How this works</h3><ul><li>A lesson is mastered only after you explain the idea in writing and then get eight questions right in a row. The next lesson stays locked until then.</li><li>Number problems are generated fresh each time. Concept questions are shuffled and drawn without repeats.</li><li>Mastered lessons return after 1, 3, 7, 16, 35 and 75 days, shuffled together across subjects.</li><li>Every lesson carries a neuroscience thread and a note on where older textbooks are out of date.</li></ul></div>';
  h+=installCard();
  if(!canStore) h+='<div class="card"><h3>Progress may not be saved</h3><p class="small">This browser is blocking saved data, so closing the app can erase your progress. Copy a backup code below before you leave.</p></div>';
  h+='<div class="card"><details><summary>Back up or restore progress</summary><div><p class="small muted">Your progress lives only on this phone. Copy this code somewhere safe now and then, such as your notes app. To move to a new phone, paste it into the box below.</p>'+
     '<textarea class="code" id="bk" readonly>'+esc(exportCode())+'</textarea><button class="btn ghost" data-act="copy" data-src="bk">Copy backup code</button>'+
     '<textarea class="code" id="imp" placeholder="Paste a backup code here" style="margin-top:14px;min-height:80px"></textarea><button class="btn ghost" data-act="import">Restore from code</button>'+
     '<div class="flash" id="flash">'+esc(flash)+'</div></div></details>'+
     '<details><summary>Progress summary</summary><div><p class="small muted">Paste this into a chat with Claude when you ask for the next units, so the pace can be set from your results.</p><textarea class="code" id="prog" readonly>'+esc(progressText())+'</textarea><button class="btn ghost" data-act="copy" data-src="prog">Copy summary</button><div class="flash"></div></div></details></div>';
  return h;
}

/* ---------- Render ---------- */
var TABS=[['home','Home'],['learn','Learn'],['review','Review'],['test','Placement']];
function render(){
  var gate=!state.placed, pin, keep;
  var v=gate?viewTest:({home:viewHome,learn:viewLearn,review:viewReview,test:viewTest}[state.tab]||viewHome);
  keep=flash!==''&&state.tab==='home';
  document.getElementById('app').innerHTML=v();
  document.getElementById('tabs').innerHTML=gate?'':TABS.map(function(t){ return '<button data-act="go" data-tab="'+t[0]+'" class="'+(state.tab===t[0]?'on':'')+'"'+(state.tab===t[0]?' aria-current="page"':'')+'>'+t[1]+'</button>'; }).join('');
  if(keep){ var det=document.querySelector('#flash'); if(det&&det.closest('details')) det.closest('details').open=true; }
  flash='';
  pin=document.getElementById('pin'); if(pin){ try{ pin.focus(); }catch(e){} }
}
function copyFrom(id){
  var el=document.getElementById(id), ok=false; if(!el) return;
  try{ el.focus(); el.select(); el.setSelectionRange(0,999999); ok=document.execCommand('copy'); }catch(e){}
  if(!ok&&navigator.clipboard&&navigator.clipboard.writeText){ try{ navigator.clipboard.writeText(el.value); ok=true; }catch(e){} }
  var fl=el.parentNode.querySelector('.flash'); if(fl) fl.textContent=ok?'Copied.':'Press and hold the text to copy it.';
}

/* ---------- Events ---------- */
document.addEventListener('click',function(ev){
  var el=ev.target.closest?ev.target.closest('[data-act]'):null; if(!el||el.disabled) return;
  var act=el.getAttribute('data-act'), t=state.test, q, v, pts, all;
  if(act!=='retake') armed=null;
  if(act==='go'){ state.tab=el.getAttribute('data-tab'); if(ses&&ses.phase==='done') ses=null; save(); render(); window.scrollTo(0,0); }
  else if(act==='start'){ startTest(); render(); window.scrollTo(0,0); }
  else if(act==='begin'){ t.intro=false; save(); render(); window.scrollTo(0,0); }
  else if(act==='pick'){ if(cur){ cur.pick=parseInt(el.getAttribute('data-idx'),10); render(); } }
  else if(act==='lock'){ q=DOMAINS[t.d].q[t.l*2+t.i]; if(!cur||cur.pick===null) return; record(cur.pick===q.a?1:0,cur.pick); render(); window.scrollTo(0,0); }
  else if(act==='locknum'){ q=DOMAINS[t.d].q[t.l*2+t.i]; v=parseNum(document.getElementById('num').value); if(isNaN(v)) return;
    record(Math.abs(v-q.a)<=q.tol+1e-9?1:0,v); render(); window.scrollTo(0,0); }
  else if(act==='show'){ cur.text=document.getElementById('rec').value; cur.shown=true; render(); }
  else if(act==='lockrec'){ pts=document.querySelectorAll('input[data-pt]'); all=true; for(v=0;v<pts.length;v++) if(!pts[v].checked) all=false;
    record(all?1:0,cur.text); render(); window.scrollTo(0,0); }
  else if(act==='idk'){ record(2,null); render(); window.scrollTo(0,0); }
  else if(act==='lesson'){ openLesson(el.getAttribute('data-id'),'learn'); save(); render(); window.scrollTo(0,0); }
  else if(act==='lessons'){ ses=null; state.tab='learn'; save(); render(); window.scrollTo(0,0); }
  else if(act==='mode'){ if(ses&&ses.kind==='lesson'){ setMode(el.getAttribute('data-mode')); render(); window.scrollTo(0,0); } }
  else if(act==='check'){ doCheck(); render(); window.scrollTo(0,0); }
  else if(act==='next'){ doNext(); render(); window.scrollTo(0,0); }
  else if(act==='sign'){ v=document.getElementById('pin'); if(v){ v.value=/^\s*[-−]/.test(v.value)?v.value.replace(/^\s*[-−]/,''):'-'+v.value; v.focus(); q=document.getElementById('chk'); if(q) q.disabled=isNaN(parseNum(v.value)); } }
  else if(act==='slash'){ v=document.getElementById('pin'); if(v){ if(v.value.indexOf('/')<0) v.value+='/'; v.focus(); q=document.getElementById('chk'); if(q) q.disabled=isNaN(parseNum(v.value)); } }
  else if(act==='gxshow'){ v=document.getElementById('gx'); ses.ex={shown:true,text:v?v.value:''}; render(); }
  else if(act==='gxlock'){ pts=document.querySelectorAll('input[data-gpt]'); all=true; for(v=0;v<pts.length;v++) if(!pts[v].checked) all=false;
    if(all){ LS(ses.lid).ex=true; ses.ex=null; ses.prob=null; ses.phase='ask'; ses.streak=0; ses.n=0; } else { ses.exFail=true; ses.ex=null; } save(); render(); window.scrollTo(0,0); }
  else if(act==='review'){ if(!startReview(true)) state.tab='review'; save(); render(); window.scrollTo(0,0); }
  else if(act==='mixed'){ startReview(false); render(); window.scrollTo(0,0); }
  else if(act==='revdone'){ ses=null; state.tab='review'; render(); window.scrollTo(0,0); }
  else if(act==='cp'){ startCheckpoint(el.getAttribute('data-id')||state.track||'M'); save(); render(); window.scrollTo(0,0); }
  else if(act==='track'){ ses=null; state.track=el.getAttribute('data-id'); state.tab='learn'; save(); render(); window.scrollTo(0,0); }
  else if(act==='tracks'){ ses=null; state.track=null; state.tab='learn'; save(); render(); window.scrollTo(0,0); }
  else if(act==='mcpick'){ if(ses){ ses.pick=parseInt(el.getAttribute('data-idx'),10); render(); } }
  else if(act==='copy'){ copyFrom(el.getAttribute('data-src')); }
  else if(act==='import'){ v=importCode(document.getElementById('imp').value); flash=v?'Progress restored.':'That code could not be read. Check that you pasted all of it.'; render(); }
  else if(act==='retake'){ if(armed==='retake'){ armed=null; state.test=blankTest(); cur=null; save(); } else armed='retake'; render(); }
});
document.addEventListener('input',function(ev){
  var el=ev.target, b;
  if(el.id==='num'){ b=document.getElementById('lockbtn'); if(b) b.disabled=isNaN(parseNum(el.value)); }
  else if(el.id==='pin'){ b=document.getElementById('chk'); if(b) b.disabled=isNaN(parseNum(el.value)); }
  else if(el.id==='gx'){ if(ses){ if(!ses.ex) ses.ex={shown:false,text:''}; ses.ex.text=el.value; } b=document.getElementById('gxbtn'); if(b) b.disabled=el.value.trim().length<15; }
  else if(el.id==='rec'){ if(cur) cur.text=el.value; b=document.getElementById('showbtn'); if(b) b.disabled=el.value.trim().length<15; }
});
document.addEventListener('keydown',function(ev){
  var b; if(ev.key==='Enter'&&ev.target.id==='num'){ b=document.getElementById('lockbtn'); if(b&&!b.disabled) b.click(); }
  else if(ev.key==='Enter'&&ev.target.id==='pin'){ ev.preventDefault(); b=document.getElementById('chk'); if(b&&!b.disabled) b.click(); }
});

/* ---------- Offline support and storage protection ---------- */
if('serviceWorker' in navigator){ window.addEventListener('load',function(){ navigator.serviceWorker.register('sw.js').catch(function(){}); }); }
if(navigator.storage&&navigator.storage.persist){ try{ navigator.storage.persist(); }catch(e){} }

if(/debug/.test(window.location.hash)) window.__rebuild={DOMAINS:DOMAINS,LESSONS:LESSONS,TRACKS:TRACKS,state:function(){return state;},ses:function(){return ses;},prob:curProb,parse:parseNum,save:save,render:render,placement:placement};
render();
})();
