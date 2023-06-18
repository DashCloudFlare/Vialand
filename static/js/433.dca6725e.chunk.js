"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[433],{6791:function(e,n,t){t.d(n,{r:function(){return o}});var r=t(4165),u=t(5861),a=t(9439),c=t(7313),i=t(9225);function o(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,c.useState)("idle"),o=(0,a.Z)(t,2),s=o[0],l=o[1],f=(0,c.useState)(null),d=(0,a.Z)(f,2),p=d[0],v=d[1],h=(0,c.useState)(null),g=(0,a.Z)(h,2),m=g[0],x=g[1],Z="pending"===s,b="error"===s,E=(0,c.useCallback)(function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l("pending"),v(null),x(null),n.prev=3,n.next=6,e();case 6:return u=n.sent,t&&(v(u),l("success")),n.abrupt("return",u);case 11:n.prev=11,n.t0=n.catch(3),t&&(l("error"),x(n.t0));case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e){return n.apply(this,arguments)}}(),[e]);return(0,i.u)((function(e){n&&E(e())}),[n]),(0,c.useEffect)((function(){return function(){l("idle"),v(null),x(null)}}),[]),{isLoading:Z,isError:b,status:s,data:p,error:m,execute:function(){return E(!0)}}}},3737:function(e,n,t){t.d(n,{M:function(){return a}});var r=t(9439),u=t(7313);function a(e){var n=e.ref,t=e.offset,a=void 0===t?50:t,c=e.loading,i=e.canLoadMore,o=e.fetchFn,s=(0,u.useState)(!1),l=(0,r.Z)(s,2),f=l[0],d=l[1];(0,u.useEffect)((function(){if(null!==n&&void 0!==n&&n.current){var e=function(e){var n=e.target,t=n.getBoundingClientRect().height;n.scrollTop+t>=n.scrollHeight-a?d(!0):d(!1)};return null===n||void 0===n||n.current.addEventListener("scroll",e),function(){var t;null===n||void 0===n||null===(t=n.current)||void 0===t||t.removeEventListener("scroll",e)}}if(document){var t=function(e){var n=e.currentTarget,t=n.getElementById("footer"),r=n.scrollingElement,u=r.scrollHeight,c=r.scrollTop,i=r.clientHeight;Math.abs(u-i-c)<t.getBoundingClientRect().height+a?d(!0):d(!1)};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}}),[]),(0,u.useEffect)((function(){f&&!c&&i&&(null===o||void 0===o||o())}),[f])}},9225:function(e,n,t){t.d(n,{u:function(){return u}});var r=t(7313);function u(e,n){var t=(0,r.useRef)(e);t.current=e;var u=(0,r.useRef)(!1);(0,r.useEffect)((function(){return u.current=!0,t.current((function(){return u.current})),function(){u.current=!1}}),n)}},6243:function(e,n,t){t.d(n,{db:function(){return Z}});var r=t(271),u=t(995),a=t(573),c=t(6797),i=t(8941),o=i.Z.firebase,s=o.apiKey,l=o.appId,f=o.databaseURL,d=o.projectId,p=o.storageBucket,v=o.authDomain,h=o.messagingSenderId,g=i.Z.google.recaptchaSiteKey,m={apiKey:s,authDomain:v,databaseURL:f,projectId:d,storageBucket:p,messagingSenderId:h,appId:l},x=(0,r.ZF)(m),Z=(0,a.ad)(x);(0,c.cF)(x),(0,u.yu)(x,{provider:new u.z9(g),isTokenAutoRefreshEnabled:!0})},8433:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(7313),u=t(4511),a=t(7864),c=t(7890),i=t(2419),o=t(887),s=t(6462),l=t(6417),f=r.memo((function(e){var n=e.data,t=void 0===n?[]:n;return(0,l.jsx)(l.Fragment,{children:t.map((function(e){return(0,l.jsx)(i.YE,{data:e},e.id)}))})}));function d(){var e=(0,c.TH)().pathname,n=(0,u.$)().t,t=e.endsWith("/du-an")?o.Bs.project:e.endsWith("/tin-tuc")?o.Bs.news:void 0,r=(0,s._)(t,20,!0),d=r.data,p=r.isLoading;return t?(0,l.jsx)("div",{className:"p-2 md:p-5 h-full flex items-center flex-col",children:(0,l.jsxs)("div",{className:"max-w-[1000px] w-full flex-1 overflow-y-auto",children:[(0,l.jsx)(f,{data:d}),p&&(0,l.jsx)(i.x4,{title:(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(a.Z7b,{className:"animate-spin"})," ",n("searching")]})})]})}):(0,l.jsx)(c.Fg,{to:"/"})}},6462:function(e,n,t){t.d(n,{_:function(){return g}});var r=t(3433),u=t(1413),a=t(4165),c=t(5861),i=t(4925),o=t(9439),s=t(573),l=t(7313),f=t(7890),d=t(6791),p=t(3737),v=t(6243),h=["execute"],g=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],g=(0,f.TH)(),m=g.pathname,x=(0,l.useState)([]),Z=(0,o.Z)(x,2),b=Z[0],E=Z[1],w=(0,d.r)(F,!1),y=w.execute,k=(0,i.Z)(w,h),j=(0,l.useState)(void 0),L=(0,o.Z)(j,2),S=L[0],I=L[1];(0,p.M)({canLoadMore:!!S,loading:k.isLoading,fetchFn:t?R:void 0});var B=function(){E([]),I(void 0)};function R(){return T.apply(this,arguments)}function T(){return(T=(0,c.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:(n=e.sent)&&E((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function F(){return C.apply(this,arguments)}function C(){return C=(0,c.Z)((0,a.Z)().mark((function t(){var r,c,i,o;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],c=[],t.prev=2,S&&c.push((0,s.TQ)(S)),i=s.IO.apply(void 0,[(0,s.hJ)(v.db,"ads"),(0,s.Xo)("createdAt","desc")].concat(c,[(0,s.ar)("type","==",e),(0,s.b9)(n)])),t.next=7,(0,s.PL)(i);case 7:return o=t.sent,I(o.docs[o.docs.length-1]),o.docs.forEach((function(e){r.push((0,u.Z)({id:e.id},e.data()))})),t.abrupt("return",r);case 13:return t.prev=13,t.t0=t.catch(2),t.abrupt("return",[]);case 16:case"end":return t.stop()}}),t,null,[[2,13]])}))),C.apply(this,arguments)}return(0,l.useEffect)((function(){function e(){return(e=(0,c.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:n=e.sent,E(null!==n&&void 0!==n?n:[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,l.useEffect)((function(){return function(){B()}}),[m]),(0,u.Z)((0,u.Z)({},k),{},{data:b})}}}]);