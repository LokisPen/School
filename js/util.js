/* Shared helpers used by the lesson files and the app. */
'use strict';
var LESSONS = [];
function ri(a,b){ return a+Math.floor(Math.random()*(b-a+1)); }
function nz(a,b){ var v; do{ v=ri(a,b); }while(v===0); return v; }
function pk(a){ return a[ri(0,a.length-1)]; }
function f(n){ n=Math.round(n*1000)/1000; return (n<0?'−':'')+String(Math.abs(n)); }
function pn(n){ return n<0?'('+f(n)+')':f(n); }
function gcd(a,b){ a=Math.abs(a); b=Math.abs(b); while(b){ var t=b; b=a%b; a=t; } return a||1; }
function lcm(a,b){ return a*b/gcd(a,b); }
function fr(n,d){ var g=gcd(n,d); n/=g; d/=g; if(d<0){ n=-n; d=-d; } return d===1?f(n):f(n)+'/'+d; }
function cx(a){ return a===1?'x':(a===-1?'−x':f(a)+'x'); }
function plus(b){ return b>0?' + '+b:(b<0?' − '+(-b):''); }
function shuffle(n){ var a=[],k,j,x; for(k=0;k<n;k++) a.push(k); for(k=n-1;k>0;k--){ j=Math.floor(Math.random()*(k+1)); x=a[k]; a[k]=a[j]; a[j]=x; } return a; }
function mix(a){ var o=shuffle(a.length), r=[], k; for(k=0;k<o.length;k++) r.push(a[o[k]]); return r; }
function lst(v){ var s=v.map(function(x){ return f(x); }); return s.slice(0,-1).join(', ')+' and '+s[s.length-1]; }
function srt(v){ return v.slice().sort(function(a,b){ return a-b; }); }
