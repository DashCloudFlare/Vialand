"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[34],{9869:function(r,e,t){t.d(e,{Z:function(){return c}});var n=t(4165),a=t(5861),o=t(9489),i=t(1172);function c(r,e,t){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function r(e,t,a){var c,u,s,l,f,p,d,m,v;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u=(0,o.v0)(),r.next=3,null===(c=u.currentUser)||void 0===c?void 0:c.getIdToken();case 3:return s=r.sent,l=new Headers({"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}),s&&l.set("Authorization",s),f={method:e,mode:"cors",headers:l},p=t,a&&("GET"===e?(d=i.stringify(a),p+="?"+d):(f.body=a instanceof FormData?a:JSON.stringify(a),a instanceof FormData&&(f.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),r.next=11,fetch(p,f);case 11:if(!(m=r.sent).ok){r.next=18;break}return r.next=15,m.json();case 15:return r.abrupt("return",r.sent);case 18:return r.prev=18,r.next=21,m.json();case 21:throw v=r.sent,new Error(v.message||m.statusText);case 25:throw r.prev=25,r.t0=r.catch(18),r.t0;case 28:case"end":return r.stop()}}),r,null,[[18,25]])})))).apply(this,arguments)}},1716:function(r,e,t){t.r(e),t.d(e,{deleteImages:function(){return f},deleteMany:function(){return c},deleteVideos:function(){return l},upload:function(){return i},uploadImg:function(){return u},uploadVid:function(){return s}});var n=t(8941),a=t(9869),o=n.Z.common.baseApiUrl+"/upload",i=function(r){var e=new FormData;return e.append("file",r),(0,a.Z)("POST",o,e)},c=function(r){if(r.length)return(0,a.Z)("DELETE",o,{ids:r})},u=function(r){var e=new FormData;return e.append("file",r),(0,a.Z)("POST",o+"/image",e)},s=function(r,e){var t=new FormData;return t.append("file",r),t.append("newsId",e),(0,a.Z)("POST",o+"/video",t)},l=function(r){return(0,a.Z)("DELETE",o+"/videos",{ids:r})},f=function(r){return(0,a.Z)("DELETE",o+"/images",{ids:r})}},7629:function(r,e,t){t.d(e,{PU:function(){return o},ZE:function(){return a},vh:function(){return n}});var n="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",a="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",o="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},34:function(r,e,t){t.r(e),t.d(e,{default:function(){return k}});var n=t(1413),a=t(4165),o=t(5861),i=t(9439),c=t(573),u=t(7313),s=t(5627),l=t(4511),f=t(7864),p=t(2135),d=t(8512),m=t(1716),v=t(1110),h=t(7629),g=t(200),y=t(887),b=t(5565),x=t(8469),j=t(6417);function k(){var r=(0,l.$)().t,e=(0,s.cI)({defaultValues:{content:"",published:!0,type:y.Bs.advertisement}}),t=e.register,k=e.handleSubmit,F=e.reset,w=e.control,N=e.formState.errors,E=u.useState([]),S=(0,i.Z)(E,2),Z=S[0],O=S[1],I=function(){var r=(0,o.Z)((0,a.Z)().mark((function r(e){return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.Am.promise((0,o.Z)((0,a.Z)().mark((function r(){var t,n,o,i,u,s;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.content,n=e.title,o=e.type,i=e.published,r.next=3,(0,c.ET)((0,c.hJ)(b.db,"ads"),{title:n,content:t,type:o,published:"true"===String(i),createdAt:c.EK.now().seconds});case 3:return u=(0,x.ih)(t),s=Z.filter((function(r){return!u.includes(r)})),r.next=7,m.deleteMany(s);case 7:O([]),F();case 8:case"end":return r.stop()}}),r)}))),{pending:"\u0110ang t\u1ea1o qu\u1ea3ng c\xe1o",success:"T\u1ea1o qu\u1ea3ng c\xe1o th\xe0nh c\xf4ng",error:h.vh});case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,j.jsxs)("div",{className:"min-h-screen p-5",children:[(0,j.jsxs)("div",{className:"flex items-center mb-5",children:[(0,j.jsx)("h1",{className:"font-medium text-base md:text-lg",children:"T\u1ea1o qu\u1ea3ng c\xe1o"}),(0,j.jsx)("div",{className:"flex-grow"}),(0,j.jsx)(p.rU,{to:"/chothue/quang-cao",children:(0,j.jsxs)("button",{className:"btn",children:[(0,j.jsx)(f.CF5,{}),"Tr\u1edf v\u1ec1"]})})]}),(0,j.jsxs)("form",{className:"grid grid-cols-4 gap-3",onSubmit:k(I),children:[(0,j.jsx)(v.cw,{className:"col-span-4",htmlFor:"subject",label:"Ti\xeau \u0111\u1ec1",error:N.title,children:(0,j.jsx)("input",(0,n.Z)((0,n.Z)({},t("title",{required:!0,maxLength:200})),{},{className:"input",type:"text"}))}),(0,j.jsx)(v.cw,{className:"col-span-4 md:col-span-2",htmlFor:"subject",label:"Lo\u1ea1i tin",error:N.type,children:(0,j.jsx)("select",(0,n.Z)((0,n.Z)({},t("type",{valueAsNumber:!0})),{},{className:"input",children:g.aj.map((function(e){return(0,j.jsx)("option",{value:e.value,children:r(e.name)},e.value)}))}))}),(0,j.jsx)(v.cw,{className:"col-span-4 md:col-span-2",htmlFor:"published",label:"Tr\u1ea1ng th\xe1i",error:N.published,children:(0,j.jsx)("select",(0,n.Z)((0,n.Z)({},t("published")),{},{className:"input",children:g.Df.map((function(e,t){return(0,j.jsx)("option",{value:String(e.value),children:r(e.name)},t)}))}))}),(0,j.jsx)(s.Qr,{control:w,name:"content",render:function(r){var e=r.field,t=e.onChange,n=e.onBlur,a=e.value,o=r.fieldState.error;return(0,j.jsx)(v.cw,{className:"col-span-4",htmlFor:"content",label:"N\u1ed9i dung",error:o,children:(0,j.jsx)(v.ML,{value:a,onBlur:function(r){!function(r){var e=(0,x.ih)(r);O((function(r){return Array.from(new Set(r.concat(e)))}))}(r),n()},onChange:t})})}}),(0,j.jsx)("div",{className:"col-span-4 col-start-1",children:(0,j.jsx)("button",{className:"btn",type:"submit",children:"T\u1ea1o qu\u1ea3ng c\xe1o"})})]})]})}},8271:function(r){var e="%[a-f0-9]{2}",t=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function a(r,e){try{return decodeURIComponent(r.join(""))}catch(o){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],a(t),a(n))}function o(r){try{return decodeURIComponent(r)}catch(o){for(var e=r.match(t),n=1;n<e.length;n++)e=(r=a(e,n).join("")).match(t);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=n.exec(r);a;){try{t[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(t[a[0]]=i)}a=n.exec(r)}t["%C2"]="\ufffd";for(var c=Object.keys(t),u=0;u<c.length;u++){var s=c[u];r=r.replace(new RegExp(s,"g"),t[s])}return r}(r)}}},2214:function(r){r.exports=function(r,e){for(var t={},n=Object.keys(r),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],c=r[i];(a?-1!==e.indexOf(i):e(i,c,r))&&(t[i]=c)}return t}},1172:function(r,e,t){var n=t(8416).default,a=t(7424).default,o=t(4704).default,i=t(861).default,c=t(2376),u=t(8271),s=t(4266),l=t(2214),f=Symbol("encodeFragmentIdentifier");function p(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(r,e){return e.encode?e.strict?c(r):encodeURIComponent(r):r}function m(r,e){return e.decode?u(r):r}function v(r){return Array.isArray(r)?r.sort():"object"===typeof r?v(Object.keys(r)).sort((function(r,e){return Number(r)-Number(e)})).map((function(e){return r[e]})):r}function h(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function g(r){var e=(r=h(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function y(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function b(r,e){p((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var t=function(r){var e;switch(r.arrayFormat){case"index":return function(r,t,n){e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return function(r,t,n){e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return function(r,t,n){e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return function(e,t,n){var a="string"===typeof t&&t.includes(r.arrayFormatSeparator),o="string"===typeof t&&!a&&m(t,r).includes(r.arrayFormatSeparator);t=o?m(t,r):t;var i=a||o?t.split(r.arrayFormatSeparator).map((function(e){return m(e,r)})):null===t?t:m(t,r);n[e]=i};case"bracket-separator":return function(e,t,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===t?[]:t.split(r.arrayFormatSeparator).map((function(e){return m(e,r)}));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o}else n[e]=t?m(t,r):t};default:return function(r,e,t){void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!==typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var i,c=o(r.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value;if(""!==u){var l=s(e.decode?u.replace(/\+/g," "):u,"="),f=a(l,2),d=f[0],h=f[1];h=void 0===h?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?h:m(h,e),t(m(d,e),h,n)}}}catch(N){c.e(N)}finally{c.f()}for(var g=0,b=Object.keys(n);g<b.length;g++){var x=b[g],j=n[x];if("object"===typeof j&&null!==j)for(var k=0,F=Object.keys(j);k<F.length;k++){var w=F[k];j[w]=y(j[w],e)}else n[x]=y(j,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(r,e){var t=n[e];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?r[e]=v(t):r[e]=t,r}),Object.create(null))}e.extract=g,e.parse=b,e.stringify=function(r,e){if(!r)return"";p((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var t=function(t){return e.skipNull&&(null===(n=r[t])||void 0===n)||e.skipEmptyString&&""===r[t];var n},n=function(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var a=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),"[",a,"]"].join("")]:[[d(e,r),"[",d(a,r),"]=",d(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),"[]"].join("")]:[[d(e,r),"[]=",d(n,r)].join("")])}};case"colon-list-separator":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),":list="].join("")]:[[d(e,r),":list=",d(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===r.arrayFormat?"[]=":"=";return function(t){return function(n,a){return void 0===a||r.skipNull&&null===a||r.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[d(t,r),e,d(a,r)].join("")]:[[n,d(a,r)].join(r.arrayFormatSeparator)])}};default:return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[d(e,r)]:[[d(e,r),"=",d(n,r)].join("")])}}}}(e),a={},o=0,c=Object.keys(r);o<c.length;o++){var u=c[o];t(u)||(a[u]=r[u])}var s=Object.keys(a);return!1!==e.sort&&s.sort(e.sort),s.map((function(t){var a=r[t];return void 0===a?"":null===a?d(t,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?d(t,e)+"[]":a.reduce(n(t),[]).join("&"):d(t,e)+"="+d(a,e)})).filter((function(r){return r.length>0})).join("&")},e.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var t=s(r,"#"),n=a(t,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:b(g(r),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,e)}:{})},e.stringifyUrl=function(r,t){t=Object.assign(n({encode:!0,strict:!0},f,!0),t);var a=h(r.url).split("?")[0]||"",o=e.extract(r.url),i=e.parse(o,{sort:!1}),c=Object.assign(i,r.query),u=e.stringify(c,t);u&&(u="?".concat(u));var s=function(r){var e="",t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(s="#".concat(t[f]?d(r.fragmentIdentifier,t):r.fragmentIdentifier)),"".concat(a).concat(u).concat(s)},e.pick=function(r,t,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var o=e.parseUrl(r,a),i=o.url,c=o.query,u=o.fragmentIdentifier;return e.stringifyUrl({url:i,query:l(c,t),fragmentIdentifier:u},a)},e.exclude=function(r,t,n){var a=Array.isArray(t)?function(r){return!t.includes(r)}:function(r,e){return!t(r,e)};return e.pick(r,a,n)}},4266:function(r){r.exports=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];var t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},2376:function(r){r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}}}]);