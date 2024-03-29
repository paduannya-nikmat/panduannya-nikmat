(()=>{"use strict";var e,v={},g={};function r(e){var f=g[e];if(void 0!==f)return f.exports;var t=g[e]={exports:{}};return v[e].call(t.exports,t,t.exports,r),t.exports}r.m=v,e=[],r.O=(f,t,d,b)=>{if(!t){var a=1/0;for(n=0;n<e.length;n++){for(var[t,d,b]=e[n],u=!0,o=0;o<t.length;o++)(!1&b||a>=b)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(u=!1,b<a&&(a=b));if(u){e.splice(n--,1);var i=d();void 0!==i&&(f=i)}}return f}b=b||0;for(var n=e.length;n>0&&e[n-1][2]>b;n--)e[n]=e[n-1];e[n]=[t,d,b]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,d){if(1&d&&(t=this(t)),8&d||"object"==typeof t&&t&&(4&d&&t.__esModule||16&d&&"function"==typeof t.then))return t;var b=Object.create(null);r.r(b);var n={};f=f||[null,e({}),e([]),e(e)];for(var a=2&d&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(u=>n[u]=()=>t[u]);return n.default=()=>t,r.d(b,n),b}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{14:"cc5ba64130b859a2",125:"c1515c048788a467",169:"4e5c560eac4d95c8",242:"35b4d615c2b7eb37",248:"59f3c94540ef93bc",299:"6c7241e682c23885",305:"ae5c6ce0131b52be",324:"0cf606fb88347099",341:"1f02484446635238",352:"074fc9dfc32be5e5",362:"25a3cd34816afd25",407:"95b45b4c4d2255dd",477:"263fee7f4b7bce1f",506:"8bd0e66321f9d087",518:"831877c27edaf0a3",525:"b73b918513199263",562:"f055303edb15b47f",563:"0f003f80e53c8d12",578:"316dcad3e3f33721",586:"58601edde9652c3f",590:"d1452a72a45655cf",592:"46a60b9084dc4c24",644:"926feb70e80b3453",675:"3474cc76eb49a7d3",701:"42ed57c42a182cea",706:"7baaf445ddbf9bdf",711:"cbf6d1de65dcd871",754:"e7d54c701cecba55",784:"73604d19f6d68622",798:"721aeaa1f96d80ce",827:"c39692fc6279b12d",862:"c87d4cb26cf7ed17",865:"7f7b4ca911502ffa",890:"9557aeb45e5ad6cc",901:"39db7c9851dc50fe",903:"96846663a397c943",910:"5724a923a6de3e84",926:"6a909598d0a790e6",951:"830d8efe12433edb",952:"4a3045c1aaa07711",998:"da668f48b5a12012"}[e]+".js",r.miniCssF=e=>{},r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="grivy-barcode-web:";r.l=(t,d,b,n)=>{if(e[t])e[t].push(d);else{var a,u;if(void 0!==b)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var c=o[i];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==f+b){a=c;break}}a||(u=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+b),a.src=r.tu(t)),e[t]=[d];var l=(_,p)=>{a.onerror=a.onload=null,clearTimeout(s);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(m=>m(p)),_)return _(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),u&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(d,b)=>{var n=r.o(e,d)?e[d]:void 0;if(0!==n)if(n)b.push(n[2]);else if(666!=d){var a=new Promise((c,l)=>n=e[d]=[c,l]);b.push(n[2]=a);var u=r.p+r.u(d),o=new Error;r.l(u,c=>{if(r.o(e,d)&&(0!==(n=e[d])&&(e[d]=void 0),n)){var l=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.src;o.message="Loading chunk "+d+" failed.\n("+l+": "+s+")",o.name="ChunkLoadError",o.type=l,o.request=s,n[1](o)}},"chunk-"+d,d)}else e[d]=0},r.O.j=d=>0===e[d];var f=(d,b)=>{var o,i,[n,a,u]=b,c=0;if(n.some(s=>0!==e[s])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var l=u(r)}for(d&&d(b);c<n.length;c++)r.o(e,i=n[c])&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},t=self.webpackChunkgrivy_barcode_web=self.webpackChunkgrivy_barcode_web||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();