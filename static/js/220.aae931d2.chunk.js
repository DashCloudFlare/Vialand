"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[220,543],{6243:function(e,r,t){t.d(r,{db:function(){return x}});var n=t(271),a=t(995),i=t(573),c=t(6797),o=t(8941),s=o.Z.firebase,u=s.apiKey,l=s.appId,d=s.databaseURL,p=s.projectId,f=s.storageBucket,m=s.authDomain,h=s.messagingSenderId,g=o.Z.google.recaptchaSiteKey,v={apiKey:u,authDomain:m,databaseURL:d,projectId:p,storageBucket:f,messagingSenderId:h,appId:l},y=(0,n.ZF)(v),x=(0,i.ad)(y);(0,c.cF)(y),(0,a.yu)(y,{provider:new a.z9(g),isTokenAutoRefreshEnabled:!0})},220:function(e,r,t){t.r(r),t.d(r,{_renderVideo:function(){return b},default:function(){return w}});var n=t(4165),a=t(1413),i=t(5861),c=t(9439),o=t(573),s=t(1172),u=t(7313),l=t(4511),d=t(7890),p=t(9466),f=t(4021),m=t(753),h=t(887),g=t(6243),v=t(8469),y=t(4885),x=t(7543),j=t(6417),b=function(e){var r=e.vidSrc,t=e.hideVideo;e.isMobile;return r?t?(0,j.jsx)(m.x4,{title:"Video \u0111\xe3 b\u1ecb \u1ea9n do ch\u1ee9a n\u1ed9i dung kh\xf4ng ph\xf9 h\u1ee3p"}):(0,j.jsx)("video",{className:"aspect-video bg-black","webkit-playsinline":"true",playsInline:!0,controls:!0,title:"video",children:(0,j.jsx)("source",{src:"https://drive.google.com/uc?export=download&id=".concat(r),type:"video/mp4"})}):(0,j.jsx)(m.x4,{title:"Video hi\u1ec7n kh\xf4ng kh\u1ea3 d\u1ee5ng"})},k={autoplay:!1,fade:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,accessibility:!0,prevArrow:(0,j.jsx)(m.gQ,{}),nextArrow:(0,j.jsx)(m.gQ,{next:!0})},N={};function w(){var e=(0,l.$)().t,r=(0,d.UO)().slug,t=(0,u.useState)(void 0),w=(0,c.Z)(t,2),F=w[0],S=w[1],I=(0,u.useState)((function(){return N[r]})),O=(0,c.Z)(I,2),U=O[0],E=O[1],A=(0,u.useState)(!1),C=(0,c.Z)(A,2),R=C[0],Z=C[1];if((0,u.useEffect)((function(){function e(){return e=(0,i.Z)((0,n.Z)().mark((function e(){var t,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,t=(0,o.hJ)(g.db,"properties"),i=(0,o.IO)(t,(0,o.ar)("slug","==",r),(0,o.ar)("published","==",!0)),e.next=6,(0,o.PL)(i);case 6:e.sent.forEach((function(e){var r=(0,a.Z)({id:e.id},e.data());E(r),N[r.slug]=r,document.title=e.data().subject})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,10,12,15]])}))),e.apply(this,arguments)}!N[r]&&function(){e.apply(this,arguments)}()}),[r]),R)return(0,j.jsx)("div",{children:"Loading..."});if(!U)return(0,j.jsx)(x.default,{});var $=U.subject,T=U.structure,L=U.wardName,V=U.districtName,q=U.provinceName,B=U.description,H=U.contactName,K=U.contactNumber,_=U.direction,z=U.video,D=U.hideVideo,M=U.price,P=U.action,Q=U.province,J=U.ward,G=U.district,W=U.length,X=U.width,Y=U.address,ee=U.images,re=U.architecture,te="".concat($," - ").concat(Y,", ").concat(L,", ").concat(V,", ").concat(q),ne=X*W,ae=1e6*M/(ne=Number.isInteger(ne)?ne:ne.toFixed(2)),ie=P===h.Hx.trade?(0,y.pF)(1e6*M,2):"".concat(M," tri\u1ec7u/th\xe1ng");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(m.pU,{}),(0,j.jsxs)(f.Z,(0,a.Z)((0,a.Z)({className:"mx-auto max-w-full xl:max-w-[720px] aspect-video"},k),{},{children:[b({vidSrc:null===z||void 0===z?void 0:z.id,hideVideo:D,isMobile:(0,v.tq)()}),ee.map((function(e,r){return(0,j.jsx)("div",{onClick:function(){return S(r)},children:(0,j.jsx)("div",{className:"my-auto aspect-video",style:{backgroundImage:"url(https://lh3.googleusercontent.com/d/".concat(e.id,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})},e.id)}))]})),(0,j.jsxs)("div",{className:"my-2 py-2 bg-[#f4f4f4] text-center font-light text-sm space-x-2",children:[(0,j.jsx)(p.rU,{className:"link",to:{pathname:P===h.Hx.trade?"/mua-ban":"/cho-thue",search:s.stringify({province:Q})},children:q})," ","/",(0,j.jsx)(p.rU,{className:"link",to:{pathname:P===h.Hx.trade?"/mua-ban":"/cho-thue",search:s.stringify({district:G,province:Q})},children:V})," ","/",(0,j.jsx)(p.rU,{className:"link",to:{pathname:P===h.Hx.trade?"/mua-ban":"/cho-thue",search:s.stringify({province:Q,ward:J,district:G})},children:L})]}),(0,j.jsxs)("div",{className:"m-5 flex flex-col space-y-5 items-center overflow-hidden",children:[(0,j.jsxs)("span",{className:"text-center",children:[(0,j.jsx)("h1",{className:"font-medium",children:te}),M&&(0,j.jsx)("b",{className:"font-medium text-red-500",children:ie})]}),(0,j.jsxs)("div",{className:"mx-auto max-w-[500px] p-2 font-sans text-justify text-base space-y-5",children:[P===h.Hx.trade&&(0,j.jsxs)("p",{children:[e("estimate_price"),": ",(0,y.pF)(ae,1),"/m\xb2"]}),(0,j.jsxs)("p",{children:[e("size"),": ",ne,"m\xb2 (",X," x ",W,"m)"]}),(0,j.jsxs)("p",{children:[e("structure")," | ",e("floor"),": ",T]}),!!re&&(0,j.jsxs)("p",{children:[e("architecture"),": ",re]}),(0,j.jsxs)("p",{children:[e("location"),": ",e("direction")," ",_||e("update_later")]}),(0,j.jsx)("p",{className:"line-clamp-[10] whitespace-pre-wrap",children:B}),(0,j.jsxs)("p",{children:[e("contact_phone"),": ",K," (",H,")"]})]})]})]}),(0,j.jsx)(m.eT,{open:void 0!=F,initialActiveIdx:F,onClose:function(){return S(void 0)},images:ee.map((function(e){return"https://lh3.googleusercontent.com/d/".concat(e.id)}))})]})}},7543:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var n=t(9466),a=t(6417);function i(){return(0,a.jsxs)("div",{className:"h-screen w-full grid place-content-center items-center space-y-5",children:[(0,a.jsxs)("div",{className:"text-xl",children:[(0,a.jsx)("b",{children:"404"})," ",(0,a.jsx)("span",{children:"Kh\xf4ng t\xecm th\u1ea5y trang"})]}),(0,a.jsx)(n.rU,{className:"text-center text-blue-500 hover:text-blue-400",to:"/",children:"Tr\u1edf v\u1ec1 trang ch\u1ee7"})]})}},8271:function(e){var r="%[a-f0-9]{2}",t=new RegExp(r,"gi"),n=new RegExp("("+r+")+","gi");function a(e,r){try{return decodeURIComponent(e.join(""))}catch(i){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],a(t),a(n))}function i(e){try{return decodeURIComponent(e)}catch(i){for(var r=e.match(t),n=1;n<r.length;n++)r=(e=a(r,n).join("")).match(t);return e}}e.exports=function(e){if("string"!==typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=n.exec(e);a;){try{t[a[0]]=decodeURIComponent(a[0])}catch(r){var c=i(a[0]);c!==a[0]&&(t[a[0]]=c)}a=n.exec(e)}t["%C2"]="\ufffd";for(var o=Object.keys(t),s=0;s<o.length;s++){var u=o[s];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},2214:function(e){e.exports=function(e,r){for(var t={},n=Object.keys(e),a=Array.isArray(r),i=0;i<n.length;i++){var c=n[i],o=e[c];(a?-1!==r.indexOf(c):r(c,o,e))&&(t[c]=o)}return t}},1172:function(e,r,t){var n=t(9713).default,a=t(3038).default,i=t(3269).default,c=t(319).default,o=t(2376),s=t(8271),u=t(4266),l=t(2214),d=Symbol("encodeFragmentIdentifier");function p(e){if("string"!==typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(e,r){return r.encode?r.strict?o(e):encodeURIComponent(e):e}function m(e,r){return r.decode?s(e):e}function h(e){return Array.isArray(e)?e.sort():"object"===typeof e?h(Object.keys(e)).sort((function(e,r){return Number(e)-Number(r)})).map((function(r){return e[r]})):e}function g(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function v(e){var r=(e=g(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function y(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"===typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function x(e,r){p((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var t=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"colon-list-separator":return function(e,t,n){r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return function(r,t,n){var a="string"===typeof t&&t.includes(e.arrayFormatSeparator),i="string"===typeof t&&!a&&m(t,e).includes(e.arrayFormatSeparator);t=i?m(t,e):t;var c=a||i?t.split(e.arrayFormatSeparator).map((function(r){return m(r,e)})):null===t?t:m(t,e);n[r]=c};case"bracket-separator":return function(r,t,n){var a=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),a){var i=null===t?[]:t.split(e.arrayFormatSeparator).map((function(r){return m(r,e)}));void 0!==n[r]?n[r]=[].concat(n[r],i):n[r]=i}else n[r]=t?m(t,e):t};default:return function(e,r,t){void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),n=Object.create(null);if("string"!==typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var c,o=i(e.split("&"));try{for(o.s();!(c=o.n()).done;){var s=c.value;if(""!==s){var l=u(r.decode?s.replace(/\+/g," "):s,"="),d=a(l,2),f=d[0],g=d[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?g:m(g,r),t(m(f,r),g,n)}}}catch(F){o.e(F)}finally{o.f()}for(var v=0,x=Object.keys(n);v<x.length;v++){var j=x[v],b=n[j];if("object"===typeof b&&null!==b)for(var k=0,N=Object.keys(b);k<N.length;k++){var w=N[k];b[w]=y(b[w],r)}else n[j]=y(b,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((function(e,r){var t=n[r];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?e[r]=h(t):e[r]=t,e}),Object.create(null))}r.extract=v,r.parse=x,r.stringify=function(e,r){if(!e)return"";p((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var t=function(t){return r.skipNull&&(null===(n=e[t])||void 0===n)||r.skipEmptyString&&""===e[t];var n},n=function(e){switch(e.arrayFormat){case"index":return function(r){return function(t,n){var a=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[[f(r,e),"[",a,"]"].join("")]:[[f(r,e),"[",f(a,e),"]=",f(n,e)].join("")])}};case"bracket":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[[f(r,e),"[]"].join("")]:[[f(r,e),"[]=",f(n,e)].join("")])}};case"colon-list-separator":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[[f(r,e),":list="].join("")]:[[f(r,e),":list=",f(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var r="bracket-separator"===e.arrayFormat?"[]=":"=";return function(t){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[f(t,e),r,f(a,e)].join("")]:[[n,f(a,e)].join(e.arrayFormatSeparator)])}};default:return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(c(t),null===n?[f(r,e)]:[[f(r,e),"=",f(n,e)].join("")])}}}}(r),a={},i=0,o=Object.keys(e);i<o.length;i++){var s=o[i];t(s)||(a[s]=e[s])}var u=Object.keys(a);return!1!==r.sort&&u.sort(r.sort),u.map((function(t){var a=e[t];return void 0===a?"":null===a?f(t,r):Array.isArray(a)?0===a.length&&"bracket-separator"===r.arrayFormat?f(t,r)+"[]":a.reduce(n(t),[]).join("&"):f(t,r)+"="+f(a,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var t=u(e,"#"),n=a(t,2),i=n[0],c=n[1];return Object.assign({url:i.split("?")[0]||"",query:x(v(e),r)},r&&r.parseFragmentIdentifier&&c?{fragmentIdentifier:m(c,r)}:{})},r.stringifyUrl=function(e,t){t=Object.assign(n({encode:!0,strict:!0},d,!0),t);var a=g(e.url).split("?")[0]||"",i=r.extract(e.url),c=r.parse(i,{sort:!1}),o=Object.assign(c,e.query),s=r.stringify(o,t);s&&(s="?".concat(s));var u=function(e){var r="",t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(u="#".concat(t[d]?f(e.fragmentIdentifier,t):e.fragmentIdentifier)),"".concat(a).concat(s).concat(u)},r.pick=function(e,t,a){a=Object.assign(n({parseFragmentIdentifier:!0},d,!1),a);var i=r.parseUrl(e,a),c=i.url,o=i.query,s=i.fragmentIdentifier;return r.stringifyUrl({url:c,query:l(o,t),fragmentIdentifier:s},a)},r.exclude=function(e,t,n){var a=Array.isArray(t)?function(e){return!t.includes(e)}:function(e,r){return!t(e,r)};return r.pick(e,a,n)}},4266:function(e){e.exports=function(e,r){if("string"!==typeof e||"string"!==typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},2376:function(e){e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}}}]);