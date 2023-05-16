(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function h(){}function se(e){return e()}function J(){return Object.create(null)}function j(e){e.forEach(se)}function oe(e){return typeof e=="function"}function L(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ce(e){return Object.keys(e).length===0}function fe(e,...t){if(e==null)return h;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ae(e,t,n){e.$$.on_destroy.push(fe(t,n))}function R(e){return e??""}const de=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in de;function $(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function U(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function E(){return q(" ")}function me(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.data!==t&&(e.data=t)}let T;function O(e){T=e}function le(){if(!T)throw new Error("Function called outside component initialization");return T}function he(e){le().$$.on_mount.push(e)}function _e(e){le().$$.on_destroy.push(e)}const x=[],B=[];let P=[];const D=[],ge=Promise.resolve();let K=!1;function be(){K||(K=!0,ge.then(ue))}function Q(e){P.push(e)}function ye(e){D.push(e)}const z=new Set;let w=0;function ue(){if(w!==0)return;const e=T;do{try{for(;w<x.length;){const t=x[w];w++,O(t),$e(t.$$)}}catch(t){throw x.length=0,w=0,t}for(O(null),x.length=0,w=0;B.length;)B.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];z.has(n)||(z.add(n),n())}P.length=0}while(x.length);for(;D.length;)D.pop()();K=!1,z.clear(),O(e)}function $e(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Q)}}function ve(e){const t=[],n=[];P.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),P=t}const M=new Set;let we;function N(e,t){e&&e.i&&(M.delete(e),e.i(t))}function W(e,t,n,r){if(e&&e.o){if(M.has(e))return;M.add(e),we.c.push(()=>{M.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const ke=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ke];function xe(e,t,n){const r=e.$$.props[t];r!==void 0&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function G(e){e&&e.c()}function S(e,t,n,r){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),r||Q(()=>{const l=e.$$.on_mount.map(se).filter(oe);e.$$.on_destroy?e.$$.on_destroy.push(...l):j(l),e.$$.on_mount=[]}),s.forEach(Q)}function I(e,t){const n=e.$$;n.fragment!==null&&(ve(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(e,t){e.$$.dirty[0]===-1&&(x.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function C(e,t,n,r,i,s,l,u=[-1]){const a=T;O(e);const o=e.$$={fragment:null,ctx:[],props:s,update:h,not_equal:i,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:J(),dirty:u,skip_bound:!1,root:t.target||a.$$.root};l&&l(o.root);let m=!1;if(o.ctx=n?n(e,t.props||{},(p,d,...f)=>{const b=f.length?f[0]:d;return o.ctx&&i(o.ctx[p],o.ctx[p]=b)&&(!o.skip_bound&&o.bound[p]&&o.bound[p](b),m&&Pe(e,p)),d}):[],o.update(),m=!0,j(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const p=pe(t.target);o.fragment&&o.fragment.l(p),p.forEach(g)}else o.fragment&&o.fragment.c();t.intro&&N(e.$$.fragment),S(e,t.target,t.anchor,t.customElement),ue()}O(a)}class F{$destroy(){I(this,1),this.$destroy=h}$on(t,n){if(!oe(n))return h;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ee(e){let t,n,r,i,s=60-e[0]+"",l;return{c(){t=_("div"),n=_("span"),n.textContent="choose a text",r=E(),i=_("span"),l=q(s),v(t,"class","misc svelte-19zgfwr")},m(u,a){y(u,t,a),$(t,n),$(t,r),$(t,i),$(i,l)},p(u,[a]){a&1&&s!==(s=60-u[0]+"")&&V(l,s)},i:h,o:h,d(u){u&&g(t)}}}function Le(e,t,n){let{timer:r}=t;return e.$$set=i=>{"timer"in i&&n(0,r=i.timer)},[r]}class Ae extends F{constructor(t){super(),C(this,t,Le,Ee,L,{timer:0})}}const H=e=>e.split(" ").map(t=>`${t} `),k=[];function Oe(e,t=h){let n;const r=new Set;function i(u){if(L(e,u)&&(e=u,n)){const a=!k.length;for(const o of r)o[1](),k.push(o,e);if(a){for(let o=0;o<k.length;o+=2)k[o][0](k[o+1]);k.length=0}}}function s(u){i(u(e))}function l(u,a=h){const o=[u,a];return r.add(o),r.size===1&&(n=t(i)||h),u(e),()=>{r.delete(o),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:l}}const Y=Oe(""),Te=(e,t)=>{if(t==="Backspace")return[e.slice(0,-1),!1];let n;return Y.subscribe(r=>n=r),n[e.length]===t?[`${e}${t}`,!1]:[e,!0]};function X(e,t,n){const r=e.slice();return r[9]=t[n],r[11]=n,r}function Z(e,t,n){const r=e.slice();return r[9]=t[n],r[11]=n,r}function ee(e){let t;return{c(){t=_("br")},m(n,r){y(n,t,r)},d(n){n&&g(t)}}}function te(e){let t,n,r=e[9]+"",i,s,l=e[11]%e[0]===0&&ee();return{c(){l&&l.c(),t=E(),n=_("span"),i=q(r),v(n,"class",s=R(e[1]&&e[11]===e[2].length-1?"mistake":"")+" svelte-p0g85a")},m(u,a){l&&l.m(u,a),y(u,t,a),y(u,n,a),$(n,i)},p(u,a){u[11]%u[0]===0?l||(l=ee(),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),a&4&&r!==(r=u[9]+"")&&V(i,r),a&6&&s!==(s=R(u[1]&&u[11]===u[2].length-1?"mistake":"")+" svelte-p0g85a")&&v(n,"class",s)},d(u){l&&l.d(u),u&&g(t),u&&g(n)}}}function ne(e){let t;return{c(){t=_("div"),v(t,"class","beam svelte-p0g85a")},m(n,r){y(n,t,r)},p:h,d(n){n&&g(t)}}}function re(e){let t;return{c(){t=_("br")},m(n,r){y(n,t,r)},d(n){n&&g(t)}}}function ie(e){let t,n,r=e[9]+"",i,s=e[11]%e[0]===0&&re();return{c(){s&&s.c(),t=E(),n=_("span"),i=q(r),v(n,"class","svelte-p0g85a")},m(l,u){s&&s.m(l,u),y(l,t,u),y(l,n,u),$(n,i)},p(l,u){l[11]%l[0]===0?s||(s=re(),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null),u&8&&r!==(r=l[9]+"")&&V(i,r)},d(l){s&&s.d(l),l&&g(t),l&&g(n)}}}function Me(e){let t,n,r=e[2],i,s,l,u,a=e[2],o=[];for(let f=0;f<a.length;f+=1)o[f]=te(Z(e,a,f));let m=ne(),p=H(e[3]),d=[];for(let f=0;f<p.length;f+=1)d[f]=ie(X(e,p,f));return{c(){t=_("div");for(let f=0;f<o.length;f+=1)o[f].c();n=E(),m.c(),i=E(),s=_("div");for(let f=0;f<d.length;f+=1)d[f].c();v(s,"class","placeholder svelte-p0g85a"),v(t,"class","textarea svelte-p0g85a")},m(f,b){y(f,t,b);for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(t,null);$(t,n),m.m(t,null),$(t,i),$(t,s);for(let c=0;c<d.length;c+=1)d[c]&&d[c].m(s,null);l||(u=me(window,"keydown",e[7]),l=!0)},p(f,[b]){if(b&7){a=f[2];let c;for(c=0;c<a.length;c+=1){const A=Z(f,a,c);o[c]?o[c].p(A,b):(o[c]=te(A),o[c].c(),o[c].m(t,n))}for(;c<o.length;c+=1)o[c].d(1);o.length=a.length}if(b&4&&L(r,r=f[2])?(m.d(1),m=ne(),m.c(),m.m(t,i)):m.p(f,b),b&9){p=H(f[3]);let c;for(c=0;c<p.length;c+=1){const A=X(f,p,c);d[c]?d[c].p(A,b):(d[c]=ie(A),d[c].c(),d[c].m(s,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=p.length}},i:h,o:h,d(f){f&&g(t),U(o,f),m.d(f),U(d,f),l=!1,u()}}}function Ne(e,t,n){let r,i;ae(e,Y,d=>n(3,i=d));let s="",l=!1,u;const a=d=>{n(6,[s,l]=Te(s,d.key),s,n(1,l))};let{wordsPerLine:o}=t,{timer:m}=t;_e(()=>{clearInterval(u)});const p=d=>a(d);return e.$$set=d=>{"wordsPerLine"in d&&n(0,o=d.wordsPerLine),"timer"in d&&n(5,m=d.timer)},e.$$.update=()=>{e.$$.dirty&64&&n(2,r=H(s)),e.$$.dirty&96&&s.length===1&&(u=setInterval(()=>n(5,m+=1),1e3))},[o,l,r,i,a,m,s,p]}class Se extends F{constructor(t){super(),C(this,t,Ne,Me,L,{wordsPerLine:0,timer:5})}}function Ie(e){let t,n,r,i,s,l;n=new Ae({props:{timer:e[0]}});function u(o){e[1](o)}let a={wordsPerLine:je};return e[0]!==void 0&&(a.timer=e[0]),i=new Se({props:a}),B.push(()=>xe(i,"timer",u)),{c(){t=_("div"),G(n.$$.fragment),r=E(),G(i.$$.fragment),v(t,"class","form svelte-kivegx")},m(o,m){y(o,t,m),S(n,t,null),$(t,r),S(i,t,null),l=!0},p(o,[m]){const p={};m&1&&(p.timer=o[0]),n.$set(p);const d={};!s&&m&1&&(s=!0,d.timer=o[0],ye(()=>s=!1)),i.$set(d)},i(o){l||(N(n.$$.fragment,o),N(i.$$.fragment,o),l=!0)},o(o){W(n.$$.fragment,o),W(i.$$.fragment,o),l=!1},d(o){o&&g(t),I(n),I(i)}}}let je=9;function qe(e,t,n){let r=0;function i(s){r=s,n(0,r)}return[r,i]}class Ce extends F{constructor(t){super(),C(this,t,qe,Ie,L,{})}}function Fe(e){let t,n,r;return n=new Ce({}),{c(){t=_("main"),G(n.$$.fragment)},m(i,s){y(i,t,s),S(n,t,null),r=!0},p:h,i(i){r||(N(n.$$.fragment,i),r=!0)},o(i){W(n.$$.fragment,i),r=!1},d(i){i&&g(t),I(n)}}}function ze(e){const t=["Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new. ","Questions explained agreeable preferred strangers too him her son. Set put shyness offices his females him distant. Improve has message besides shy himself cheered however how son. Quick judge other leave ask first chief her. Indeed or remark always silent seemed narrow be. Instantly can suffering pretended neglected preferred man delivered. Perhaps fertile brandon do imagine to cordial cottage. ","Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an. "];return he(()=>{Y.set(t[Math.floor(Math.random()*3)].toLowerCase())}),[]}class Be extends F{constructor(t){super(),C(this,t,ze,Fe,L,{})}}new Be({target:document.getElementById("app")});
