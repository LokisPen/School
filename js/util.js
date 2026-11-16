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
/* sup(-3) gives the superscript "⁻³", for writing powers. */
function sup(n){ var m={'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'}; return String(n).split('').map(function(c){ return m[c]||c; }).join(''); }
/* commas(52000) gives "52,000". Whole numbers only. */
function commas(n){ var s=String(Math.abs(Math.round(n))), out=''; while(s.length>3){ out=','+s.slice(-3)+out; s=s.slice(0,-3); } return (n<0?'−':'')+s+out; }
/* dec(52,4) gives "0.00052": the digits start k places after the decimal point. */
function dec(d,k){ return '0.'+new Array(k).join('0')+d; }
