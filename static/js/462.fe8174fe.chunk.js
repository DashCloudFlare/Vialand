"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[462],{8468:function(r,e,t){t.d(e,{K:function(){return i}});var n=t(1172),a=t(7313),o=t(8467);function i(r){var e=(0,o.TH)(),t=e.pathname,i=e.search,c=(0,o.s0)(),s=(0,a.useMemo)((function(){return n.parse(i)}),[i]),u=(0,a.useCallback)((function(r){c(t+"?"+n.stringify(r,{skipEmptyString:!0,skipNull:!0}),{replace:!0})}),[t,c]);return(0,a.useEffect)((function(){r&&u(r)}),[]),[s,u]}},4462:function(r,e,t){t.r(e),t.d(e,{default:function(){return y}});var n=t(9439),a=t(7313),o=t(4511),i=t(8467),c=t(1110),s=t(6404),u=t(5798),l=t(5831),f=t(8468),p=t(8469),d=t(2440),m=t(6417);function y(){var r=(0,i.s0)(),e=(0,l.s)().socket,t=(0,o.$)().t,y=(0,a.useState)(!1),g=(0,n.Z)(y,2),v=g[0],b=g[1],h=(0,f.K)(),x=(0,n.Z)(h,1)[0];return(0,a.useEffect)((function(){x.sessionId&&e.emit(u.Q.checkSessionExist,x.sessionId)}),[x.sessionId]),(0,a.useEffect)((function(){x.sessionId&&e.on(u.Q.sessionNotFound(x.sessionId),(function(){r("/")}))}),[x.sessionId]),(0,p.tq)()?(0,m.jsx)("div",{className:"my-5 mx-2 md:mx-10 lg:mx-20 xl:mx-32 flex gap-5 md:gap-10 lg:gap-20 xl:gap-32 text-xs sm:text-sm md:text-base",children:(0,m.jsx)(c.cw,{className:"w-full",htmlFor:"images",label:t(v?"please_return_to_computer":"receipt_screenshot"),children:(0,m.jsx)(c.Ur,{accepts:d.Gs,limitMb:s.Te,className:"mx-auto w-full",placeholder:t("upload_receipt_screenshot"),onChange:function(r){var t=r[0];b(!!t),t&&e.compress(!0).emit(u.Q.imageUpload,{file:t,sessionId:x.sessionId})}})})}):(0,m.jsx)(i.Fg,{to:"/"})}},8271:function(r){var e="%[a-f0-9]{2}",t=new RegExp(e,"gi"),n=new RegExp("("+e+")+","gi");function a(r,e){try{return decodeURIComponent(r.join(""))}catch(o){}if(1===r.length)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],a(t),a(n))}function o(r){try{return decodeURIComponent(r)}catch(o){for(var e=r.match(t),n=1;n<e.length;n++)e=(r=a(e,n).join("")).match(t);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return function(r){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},a=n.exec(r);a;){try{t[a[0]]=decodeURIComponent(a[0])}catch(e){var i=o(a[0]);i!==a[0]&&(t[a[0]]=i)}a=n.exec(r)}t["%C2"]="\ufffd";for(var c=Object.keys(t),s=0;s<c.length;s++){var u=c[s];r=r.replace(new RegExp(u,"g"),t[u])}return r}(r)}}},2214:function(r){r.exports=function(r,e){for(var t={},n=Object.keys(r),a=Array.isArray(e),o=0;o<n.length;o++){var i=n[o],c=r[i];(a?-1!==e.indexOf(i):e(i,c,r))&&(t[i]=c)}return t}},1172:function(r,e,t){var n=t(8416).default,a=t(7424).default,o=t(4704).default,i=t(861).default,c=t(2376),s=t(8271),u=t(4266),l=t(2214),f=Symbol("encodeFragmentIdentifier");function p(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(r,e){return e.encode?e.strict?c(r):encodeURIComponent(r):r}function m(r,e){return e.decode?s(r):r}function y(r){return Array.isArray(r)?r.sort():"object"===typeof r?y(Object.keys(r)).sort((function(r,e){return Number(r)-Number(e)})).map((function(e){return r[e]})):r}function g(r){var e=r.indexOf("#");return-1!==e&&(r=r.slice(0,e)),r}function v(r){var e=(r=g(r)).indexOf("?");return-1===e?"":r.slice(e+1)}function b(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!e.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function h(r,e){p((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);var t=function(r){var e;switch(r.arrayFormat){case"index":return function(r,t,n){e=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),e?(void 0===n[r]&&(n[r]={}),n[r][e[1]]=t):n[r]=t};case"bracket":return function(r,t,n){e=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"colon-list-separator":return function(r,t,n){e=/(:list)$/.exec(r),r=r.replace(/:list$/,""),e?void 0!==n[r]?n[r]=[].concat(n[r],t):n[r]=[t]:n[r]=t};case"comma":case"separator":return function(e,t,n){var a="string"===typeof t&&t.includes(r.arrayFormatSeparator),o="string"===typeof t&&!a&&m(t,r).includes(r.arrayFormatSeparator);t=o?m(t,r):t;var i=a||o?t.split(r.arrayFormatSeparator).map((function(e){return m(e,r)})):null===t?t:m(t,r);n[e]=i};case"bracket-separator":return function(e,t,n){var a=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),a){var o=null===t?[]:t.split(r.arrayFormatSeparator).map((function(e){return m(e,r)}));void 0!==n[e]?n[e]=[].concat(n[e],o):n[e]=o}else n[e]=t?m(t,r):t};default:return function(r,e,t){void 0!==t[r]?t[r]=[].concat(t[r],e):t[r]=e}}}(e),n=Object.create(null);if("string"!==typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var i,c=o(r.split("&"));try{for(c.s();!(i=c.n()).done;){var s=i.value;if(""!==s){var l=u(e.decode?s.replace(/\+/g," "):s,"="),f=a(l,2),d=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?g:m(g,e),t(m(d,e),g,n)}}}catch(O){c.e(O)}finally{c.f()}for(var v=0,h=Object.keys(n);v<h.length;v++){var x=h[v],k=n[x];if("object"===typeof k&&null!==k)for(var j=0,F=Object.keys(k);j<F.length;j++){var I=F[j];k[I]=b(k[I],e)}else n[x]=b(k,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((function(r,e){var t=n[e];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?r[e]=y(t):r[e]=t,r}),Object.create(null))}e.extract=v,e.parse=h,e.stringify=function(r,e){if(!r)return"";p((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);for(var t=function(t){return e.skipNull&&(null===(n=r[t])||void 0===n)||e.skipEmptyString&&""===r[t];var n},n=function(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var a=t.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),"[",a,"]"].join("")]:[[d(e,r),"[",d(a,r),"]=",d(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),"[]"].join("")]:[[d(e,r),"[]=",d(n,r)].join("")])}};case"colon-list-separator":return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[[d(e,r),":list="].join("")]:[[d(e,r),":list=",d(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var e="bracket-separator"===r.arrayFormat?"[]=":"=";return function(t){return function(n,a){return void 0===a||r.skipNull&&null===a||r.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[d(t,r),e,d(a,r)].join("")]:[[n,d(a,r)].join(r.arrayFormatSeparator)])}};default:return function(e){return function(t,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?t:[].concat(i(t),null===n?[d(e,r)]:[[d(e,r),"=",d(n,r)].join("")])}}}}(e),a={},o=0,c=Object.keys(r);o<c.length;o++){var s=c[o];t(s)||(a[s]=r[s])}var u=Object.keys(a);return!1!==e.sort&&u.sort(e.sort),u.map((function(t){var a=r[t];return void 0===a?"":null===a?d(t,e):Array.isArray(a)?0===a.length&&"bracket-separator"===e.arrayFormat?d(t,e)+"[]":a.reduce(n(t),[]).join("&"):d(t,e)+"="+d(a,e)})).filter((function(r){return r.length>0})).join("&")},e.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var t=u(r,"#"),n=a(t,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(r),e)},e&&e.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,e)}:{})},e.stringifyUrl=function(r,t){t=Object.assign(n({encode:!0,strict:!0},f,!0),t);var a=g(r.url).split("?")[0]||"",o=e.extract(r.url),i=e.parse(o,{sort:!1}),c=Object.assign(i,r.query),s=e.stringify(c,t);s&&(s="?".concat(s));var u=function(r){var e="",t=r.indexOf("#");return-1!==t&&(e=r.slice(t)),e}(r.url);return r.fragmentIdentifier&&(u="#".concat(t[f]?d(r.fragmentIdentifier,t):r.fragmentIdentifier)),"".concat(a).concat(s).concat(u)},e.pick=function(r,t,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var o=e.parseUrl(r,a),i=o.url,c=o.query,s=o.fragmentIdentifier;return e.stringifyUrl({url:i,query:l(c,t),fragmentIdentifier:s},a)},e.exclude=function(r,t,n){var a=Array.isArray(t)?function(r){return!t.includes(r)}:function(r,e){return!t(r,e)};return e.pick(r,a,n)}},4266:function(r){r.exports=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[r];var t=r.indexOf(e);return-1===t?[r]:[r.slice(0,t),r.slice(t+e.length)]}},2376:function(r){r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}}}]);