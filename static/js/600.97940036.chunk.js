"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[600],{1716:function(e,n,t){t.d(n,{Cj:function(){return s},Pe:function(){return o},hF:function(){return l},ws:function(){return a},wt:function(){return c}});var r=t(8941),u=t(9869),i=r.Z.common.baseApiUrl+"/upload",a=function(e){var n=new FormData;return n.append("file",e),(0,u.Z)("POST",i,n)},c=function(e){return(0,u.Z)("DELETE",i,{ids:e})},s=function(e){var n=new FormData;return n.append("file",e),(0,u.Z)("POST",i+"/google-img",n)},o=function(e,n){var t=new FormData;return t.append("file",e),t.append("newsId",n),(0,u.Z)("POST",i+"/google-vid",t)},l=function(e){return(0,u.Z)("DELETE",i+"/google",{ids:e})}},7629:function(e,n,t){t.d(n,{PU:function(){return i},ZE:function(){return u},vh:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",u="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",i="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},6791:function(e,n,t){t.d(n,{r:function(){return s}});var r=t(4165),u=t(5861),i=t(9439),a=t(7313),c=t(9225);function s(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,a.useState)("idle"),s=(0,i.Z)(t,2),o=s[0],l=s[1],d=(0,a.useState)(null),f=(0,i.Z)(d,2),x=f[0],p=f[1],v=(0,a.useState)(null),h=(0,i.Z)(v,2),m=h[0],b=h[1],g="pending"===o,Z="error"===o,j="error"===o||"success"===o,w=(0,a.useCallback)(function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l("pending"),p(null),b(null),n.prev=3,n.next=6,e();case 6:return u=n.sent,t&&(p(u),l("success")),n.abrupt("return",u);case 11:n.prev=11,n.t0=n.catch(3),t&&(l("error"),b(n.t0));case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e){return n.apply(this,arguments)}}(),[e]);return(0,c.u)((function(e){n&&w(e())}),[n]),(0,a.useEffect)((function(){return function(){l("idle"),p(null),b(null)}}),[]),{isLoading:g,isError:Z,status:o,data:x,error:m,isComplete:j,execute:function(){return w(!0)}}}},9225:function(e,n,t){t.d(n,{u:function(){return u}});var r=t(7313);function u(e,n){var t=(0,r.useRef)(e);t.current=e;var u=(0,r.useRef)(!1);(0,r.useEffect)((function(){return u.current=!0,t.current((function(){return u.current})),function(){u.current=!1}}),n)}},7600:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var r=t(4165),u=t(5861),i=t(3433),a=t(9439),c=t(573),s=t(7313),o=t(7864),l=t(9466),d=t(8512),f=t(1716),x=t(7629),p=t(5565),v=t(8469),h=t(3061),m=t(1110),b=t(8941),g=t(6417);function Z(e){var n=e.data,t=e.first,r=e.last,u=e.loadingIds,i=void 0===u?[]:u,c=e.onMove,l=void 0===c?function(){}:c,d=e.onRemove,f=void 0===d?function(){}:d,x=s.useState(""),p=(0,a.Z)(x,2),v=p[0],Z=p[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"p-3 flex items-center gap-3 shadow rounded select-none",children:[(0,g.jsxs)("span",{className:"text-xs md:text-base",children:["#",n.index+1]}),(0,g.jsx)("a",{target:"_blank",rel:"noreferrer",className:"text-xs md:text-base text-blue-500 break-all",href:n.url,children:n.url}),(0,g.jsx)("div",{className:"flex-grow"}),i.includes(n.id)?(0,g.jsx)(o.Z7b,{className:"text-xl text-blue-500 animate-spin"}):(0,g.jsxs)("div",{className:"flex items-center gap-2 text-lg md:text-2xl",children:[(0,g.jsx)(o.w8I,{className:"text-lg md:text-xl text-blue-500 hover:text-blue-600 cursor-pointer",onClick:function(){return Z(n.picture)},title:"Xem"}),(0,g.jsx)(o.Vs3,{className:(0,h.Z)("cursor-pointer",t?"text-gray-400 pointer-events-none":"text-green-500 hover:text-green-600"),title:"L\xean",onClick:function(){return l("up",n.id)}}),(0,g.jsx)(o.Vs3,{className:(0,h.Z)("rotate-180 cursor-pointer",r?"text-gray-400 pointer-events-none":"text-red-500 hover:text-red-600"),title:"Xu\u1ed1ng",onClick:function(){return l("down",n.id)}}),(0,g.jsx)(o.VPh,{className:"text-lg md:text-xl text-red-500 hover:text-red-600 cursor-pointer",title:"X\xf3a",onClick:function(){return f(n.id)}})]})]}),(0,g.jsx)(m.u_,{title:"H\xecnh \u1ea3nh",closeOnClickOutside:!0,open:!!v,onClose:function(){return Z("")},children:(0,g.jsx)("img",{className:"mx-auto",src:"".concat(b.Z.common.baseApiUrl,"/public/").concat(v,".webp"),alt:""})})]})}var j=t(1413),w=t(4925),k=t(6791),N=["execute"];function E(){var e=function(){var e=(0,k.r)((function(){return f.apply(this,arguments)}),!1),n=e.execute,t=(0,w.Z)(e,N),i=s.useState(!1),o=(0,a.Z)(i,2),l=o[0],d=o[1];function f(){return(f=(0,u.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,c.IO)((0,c.hJ)(p.db,"banners"),(0,c.Xo)("index","asc")),t=[],e.next=5,(0,c.PL)(n);case 5:return e.sent.docs.forEach((function(e){t.push((0,j.Z)({id:e.id},e.data()))})),e.abrupt("return",t.sort((function(e,n){return e.index-n.index})));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",[]);case 13:return e.prev=13,d(!0),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}return s.useEffect((function(){!l&&n()}),[l]),(0,j.Z)({},t)}(),n=e.data,t=s.useState([]),h=(0,a.Z)(t,2),m=h[0],b=h[1],E=s.useState([]),C=(0,a.Z)(E,2),y=C[0],S=C[1];s.useEffect((function(){b(n)}),[n]);var P=function(e,n){var t=m?(0,i.Z)(m):[],r=t.findIndex((function(e){return e.id===n}));if(r>-1){var u="up"===e&&0!==r?r-1:"down"===e&&r!==(null===t||void 0===t?void 0:t.length)-1?r:void 0,a=(0,v.iD)(m,u),s=a.arr,o=a.t1,l=a.t2,d=(0,c.JU)(p.db,"banners",o.id),f=(0,c.JU)(p.db,"banners",l.id);S([o.id,l.id]),Promise.all([(0,c.pl)(d,o),(0,c.pl)(f,l)]).then((function(){b(s)})).catch().finally((function(){S([])}))}},D=function(){var e=(0,u.Z)((0,r.Z)().mark((function e(n){var t,u,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S([n]),t=m?(0,i.Z)(m):[],u=t.findIndex((function(e){return e.id===n})),e.prev=3,!(u>-1)){e.next=10;break}return a=(0,c.JU)(p.db,"banners",n),e.next=8,Promise.all([(0,c.oe)(a),f.wt([t[u].picture])]);case 8:t.splice(u,1),d.Am.success("X\xf3a th\xe0nh c\xf4ng");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),d.Am.error(x.vh);case 15:return e.prev=15,b(t),S([]),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[3,12,15,19]])})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"min-h-screen p-5",children:[(0,g.jsxs)("div",{className:"flex flex-wrap items-center gap-3 mb-5",children:[(0,g.jsx)("h1",{className:"font-medium text-base md:text-lg",children:"Danh s\xe1ch banner"}),(0,g.jsx)("div",{className:"flex-grow"}),(0,g.jsx)(l.rU,{to:"/chothue/tao-banner",children:(0,g.jsxs)("button",{className:"btn",children:[(0,g.jsx)(o.Lfi,{}),"T\u1ea1o banner"]})})]}),(0,g.jsx)("div",{className:"space-y-5",children:null===m||void 0===m?void 0:m.map((function(e,n){return(0,g.jsx)(Z,{data:e,first:0===n,last:n===m.length-1,loadingIds:y,onMove:P,onRemove:D},e.id)}))})]})}}}]);