(()=>{"use strict";var e,t,r,o,n,i={},a={};function f(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=i,f.c=a,e=[],f.O=(t,r,o,n)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],n=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(f.O).every((e=>f.O[e](r[c])))?r.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[r,o,n]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);f.r(n);var i={};t=t||[null,r({}),r([]),r(r)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,f.d(n,i),n},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",92:"dc204bf1",258:"b445e8bc",514:"1be78505",617:"c50209df",671:"0e384e19",817:"14eb3368",918:"17896441",959:"507dc17c"}[e]||e)+"."+{53:"6959d13a",92:"52abc08b",258:"cf9830d7",514:"2376a91c",617:"f1f1f7ad",671:"40c58eeb",817:"4911a7a5",918:"b694a1bc",959:"037c5fbd",972:"dabe71f1"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="wiki:",f.l=(e,t,r,i)=>{if(o[e])o[e].push(t);else{var a,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.setAttribute("data-webpack",n+r),a.src=e),o[e]=[t];var s=(t,r)=>{a.onerror=a.onload=null,clearTimeout(b);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/wiki/",f.gca=function(e){return e={17896441:"918","935f2afb":"53",dc204bf1:"92",b445e8bc:"258","1be78505":"514",c50209df:"617","0e384e19":"671","14eb3368":"817","507dc17c":"959"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=f.p+f.u(t),a=new Error;f.l(i,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,i=r[0],a=r[1],c=r[2],u=0;if(i.some((t=>0!==e[t]))){for(o in a)f.o(a,o)&&(f.m[o]=a[o]);if(c)var l=c(f)}for(t&&t(r);u<i.length;u++)n=i[u],f.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return f.O(l)},r=self.webpackChunkwiki=self.webpackChunkwiki||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();