"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[433],{6791:function(n,t,e){e.d(t,{r:function(){return o}});var r=e(4165),u=e(5861),c=e(9439),a=e(7313),s=e(9225);function o(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=(0,a.useState)("idle"),o=(0,c.Z)(e,2),i=o[0],l=o[1],d=(0,a.useState)(null),f=(0,c.Z)(d,2),p=f[0],v=f[1],h=(0,a.useState)(null),x=(0,c.Z)(h,2),m=x[0],Z=x[1],b="pending"===i,g="error"===i,j="error"===i||"success"===i,w=(0,a.useCallback)(function(){var t=(0,u.Z)((0,r.Z)().mark((function t(e){var u;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l("pending"),v(null),Z(null),t.prev=3,t.next=6,n();case 6:return u=t.sent,e&&(v(u),l("success")),t.abrupt("return",u);case 11:t.prev=11,t.t0=t.catch(3),e&&(l("error"),Z(t.t0));case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(n){return t.apply(this,arguments)}}(),[n]);return(0,s.u)((function(n){t&&w(n())}),[t]),(0,a.useEffect)((function(){return function(){l("idle"),v(null),Z(null)}}),[]),{isLoading:b,isError:g,status:i,data:p,error:m,isComplete:j,execute:function(){return w(!0)}}}},9225:function(n,t,e){e.d(t,{u:function(){return u}});var r=e(7313);function u(n,t){var e=(0,r.useRef)(n);e.current=n;var u=(0,r.useRef)(!1);(0,r.useEffect)((function(){return u.current=!0,e.current((function(){return u.current})),function(){u.current=!1}}),t)}},8433:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(3061),u=e(7313),c=e(4511),a=e(7864),s=e(8467),o=e(4800),i=e(887),l=e(6462),d=e(6417),f=u.memo((function(n){var t=n.data,e=void 0===t?[]:t;return(0,d.jsx)(d.Fragment,{children:e.map((function(n){return(0,d.jsx)(o.YE,{data:n},n.id)}))})}));function p(){var n=(0,s.TH)().pathname,t=(0,c.$)().t,e=n.endsWith("/du-an")?i.Bs.project:n.endsWith("/tin-tuc")?i.Bs.news:void 0,u=(0,l._)(e,20),p=u.data,v=u.isLoading,h=u.canLoadMore,x=u.load;return e?(0,d.jsx)("div",{className:"p-2 md:p-5 h-full flex items-center flex-col",children:(0,d.jsxs)("div",{className:"max-w-[1000px] w-full flex-1 overflow-y-auto",children:[(0,d.jsx)(f,{data:p}),v&&(0,d.jsx)(o.x4,{title:(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)(a.Z7b,{className:"animate-spin"})," ",t("searching")]})}),h&&(0,d.jsxs)("button",{className:(0,r.Z)("btn mt-5 mx-auto px-10 rounded-full bg-gray-200 text-black",v&&"btn--disabled"),onClick:x,disabled:v,children:[v&&(0,d.jsx)(a.Z7b,{className:"animate-spin",size:16}),(0,d.jsx)("span",{children:t("load_more")}),(0,d.jsx)(a.mGl,{className:"text-gray-600"})]})]})}):(0,d.jsx)(s.Fg,{to:"/"})}},6462:function(n,t,e){e.d(t,{_:function(){return m}});var r=e(4165),u=e(3433),c=e(1413),a=e(5861),s=e(4925),o=e(9439),i=e(573),l=e(7313),d=e(8467),f=e(8576),p=e(6791),v=e(1754),h=e(5565),x=["execute"],m=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],m=(0,d.TH)(),Z=m.pathname,b=(0,l.useRef)(void 0),g=(0,f.y)(),j=g.set,w=g.get,k=(0,l.useState)([]),y=(0,o.Z)(k,2),E=y[0],N=y[1],P=(0,p.r)(M,!1),T=P.execute,C=(0,s.Z)(P,x),L=(0,l.useState)(void 0),S=(0,o.Z)(L,2),R=S[0],_=S[1],B=function(){N([]),_(void 0)};function F(){return H.apply(this,arguments)}function H(){return(H=(0,a.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T();case 3:(t=n.sent)&&N((function(n){return[].concat((0,u.Z)(n),(0,u.Z)(t))})),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function M(){return W.apply(this,arguments)}function W(){return(W=(0,a.Z)((0,r.Z)().mark((function e(){var a,s,o,l,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],s=[],e.prev=2,R&&s.push((0,i.TQ)(R)),o=i.IO.apply(void 0,[(0,i.hJ)(h.db,"ads"),(0,i.Xo)("createdAt","desc")].concat(s,[(0,i.ar)("type","==",n),(0,i.b9)(t)])),e.next=7,(0,i.PL)(o);case 7:return(l=e.sent).docs.forEach((function(n){a.push((0,c.Z)({id:n.id},n.data()))})),d=l.docs[l.docs.length-1],_(d),b.current={data:[].concat((0,u.Z)(E),a),cursor:d},e.abrupt("return",a);case 15:return e.prev=15,e.t0=e.catch(2),e.abrupt("return",[]);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}return(0,l.useEffect)((function(){var n=w(Z);if(n){var t=n.data,e=n.cursor;return b.current={data:t,cursor:e},N(t),void _(e)}F()}),[]),(0,l.useEffect)((function(){return function(){B()}}),[Z]),(0,l.useEffect)((function(){var n=w(Z);E&&void 0!=(null===n||void 0===n?void 0:n.scrollPos)&&document.scrollingElement.scroll({top:n.scrollPos,left:0,behavior:"instant"});var t=setTimeout((function(){n&&void 0!=n.scrollPos&&j(Z,(0,c.Z)((0,c.Z)({},n),{},{scrollPos:void 0}))}),0);return function(){clearTimeout(t)}}),[E]),(0,v.Z)((function(){return function(){!e&&b.current&&j(Z,(0,c.Z)((0,c.Z)({},b.current),{},{scrollPos:document.scrollingElement.scrollTop}))}}),[Z]),(0,c.Z)((0,c.Z)({},C),{},{data:E,canLoadMore:!!R,cursor:R,load:F})}}}]);