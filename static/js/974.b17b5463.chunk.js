"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[974],{7629:function(e,n,t){t.d(n,{PU:function(){return c},ZE:function(){return u},vh:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",u="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",c="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},6791:function(e,n,t){t.d(n,{r:function(){return a}});var r=t(4165),u=t(5861),c=t(9439),i=t(7313),s=t(9225);function a(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,i.useState)("idle"),a=(0,c.Z)(t,2),o=a[0],l=a[1],f=(0,i.useState)(null),p=(0,c.Z)(f,2),d=p[0],h=p[1],v=(0,i.useState)(null),x=(0,c.Z)(v,2),m=x[0],Z=x[1],g="pending"===o,b="error"===o,w="error"===o||"success"===o,k=(0,i.useCallback)(function(){var n=(0,u.Z)((0,r.Z)().mark((function n(t){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l("pending"),h(null),Z(null),n.prev=3,n.next=6,e();case 6:return u=n.sent,t&&(h(u),l("success")),n.abrupt("return",u);case 11:n.prev=11,n.t0=n.catch(3),t&&(l("error"),Z(n.t0));case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e){return n.apply(this,arguments)}}(),[e]);return(0,s.u)((function(e){n&&k(e())}),[n]),(0,i.useEffect)((function(){return function(){l("idle"),h(null),Z(null)}}),[]),{isLoading:g,isError:b,status:o,data:d,error:m,isComplete:w,execute:function(){return k(!0)}}}},3737:function(e,n,t){t.d(n,{M:function(){return c}});var r=t(9439),u=t(7313);function c(e){var n=e.ref,t=e.offset,c=void 0===t?50:t,i=e.loading,s=e.canLoadMore,a=e.fetchFn,o=(0,u.useState)(!1),l=(0,r.Z)(o,2),f=l[0],p=l[1];(0,u.useEffect)((function(){if(null!==n&&void 0!==n&&n.current){var e=function(e){var n=e.target,t=n.getBoundingClientRect().height;n.scrollTop+t>=n.scrollHeight-c?p(!0):p(!1)};return null===n||void 0===n||n.current.addEventListener("scroll",e),function(){var t;null===n||void 0===n||null===(t=n.current)||void 0===t||t.removeEventListener("scroll",e)}}if(document){var t=function(e){var n=e.currentTarget,t=n.getElementById("footer"),r=n.scrollingElement,u=r.scrollHeight,i=r.scrollTop,s=r.clientHeight;Math.abs(u-s-i)<t.getBoundingClientRect().height+c?p(!0):p(!1)};return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}}),[]),(0,u.useEffect)((function(){f&&!i&&s&&(null===a||void 0===a||a())}),[f])}},9225:function(e,n,t){t.d(n,{u:function(){return u}});var r=t(7313);function u(e,n){var t=(0,r.useRef)(e);t.current=e;var u=(0,r.useRef)(!1);(0,r.useEffect)((function(){return u.current=!0,t.current((function(){return u.current})),function(){u.current=!1}}),n)}},8468:function(e,n,t){t.d(n,{K:function(){return i}});var r=t(1172),u=t(7313),c=t(7890);function i(e){var n=(0,c.TH)(),t=n.pathname,i=n.search,s=(0,c.s0)(),a=(0,u.useMemo)((function(){return r.parse(i)}),[i]),o=(0,u.useCallback)((function(e){s(t+"?"+r.stringify(e,{skipEmptyString:!0,skipNull:!0}),{replace:!0})}),[t,s]);return(0,u.useEffect)((function(){e&&o(e)}),[]),[a,o]}},3974:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(9439),u=t(3061),c=t(7313),i=t(4511),s=t(7864),a=t(8512),o=t(1110),l=t(8468),f=t(3433),p=t(4165),d=t(1413),h=t(5861),v=t(4925),x=t(573),m=t(6404),Z=t(7629),g=t(5884),b=t(6791),w=t(3737),k=t(5565),y=["execute"];var E=t(6417),N=(0,c.memo)((function(e){var n=e.user,t=e.data,r=void 0===t?[]:t,u=e.pushNews;return(0,E.jsx)(E.Fragment,{children:r.map((function(e){return(0,E.jsx)(o.eu,{data:e,user:n,onPushNews:u},e.id)}))})}));function j(e){var n=e.readOnly,t=void 0!==n&&n,j=e.user,L=(0,i.$)().t,C=(0,c.useRef)(null),_=(0,c.useRef)(null),S=(0,l.K)(),R=(0,r.Z)(S,2),A=R[0],M=R[1],P=function(e,n,t){var u=(0,g.P)().refetchProfile,s=(0,i.$)().t,o=(0,c.useState)(!1),l=(0,r.Z)(o,2),E=l[0],N=l[1],j=(0,c.useState)([]),L=(0,r.Z)(j,2),C=L[0],_=L[1],S=(0,c.useState)(void 0),R=(0,r.Z)(S,2),A=R[0],M=R[1],P=(0,b.r)((function(){return K.apply(this,arguments)}),!1),T=P.execute,H=(0,v.Z)(P,y);function B(){return(B=(0,h.Z)((0,p.Z)().mark((function e(){var n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:(n=e.sent)&&_((function(e){return[].concat((0,f.Z)(e),(0,f.Z)(n))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function K(){return(K=(0,h.Z)((0,p.Z)().mark((function e(){var r,u,c,i,s;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=[],n&&r.push((0,x.ar)("contactNumber","==",n)),A&&r.push((0,x.TQ)(A)),t||r.push((0,x.ar)("published","==",!0),(0,x.b9)(10)),u=x.IO.apply(void 0,[(0,x.hJ)(k.db,"properties"),(0,x.Xo)("createdAt","desc")].concat(r)),c=[],e.next=9,(0,x.PL)(u);case 9:return i=e.sent,s=i.docs[i.docs.length-1],i.forEach((function(e){c.push((0,d.Z)({id:e.id},e.data()))})),M(s),N(!1),e.abrupt("return",c);case 17:e.prev=17,e.t0=e.catch(0);case 19:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}(0,w.M)({ref:e,canLoadMore:!!A,loading:H.isLoading,fetchFn:function(){return B.apply(this,arguments)}});var Q=function(){var e=(0,h.Z)((0,p.Z)().mark((function e(n,r){var c,i,o,l,f,v,g;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=29;break}return c=(0,x.JU)(k.db,"profiles",t.uid),e.next=4,(0,x.QT)(c);case 4:if((i=e.sent).exists()){e.next=9;break}return a.Am.error(Z.PU),r(),e.abrupt("return");case 9:if(o=i.data(),!((l=o.coins)<m.z1)){e.next=14;break}return a.Am.error(s("not_enough_money_please_deposit_more")),r(),e.abrupt("return");case 14:if(f=C.slice(),!((v=f.findIndex((function(e){return e.id===n.id})))>-1)){e.next=29;break}return f[v]=(0,d.Z)((0,d.Z)({},f[v]),{},{createdAt:x.EK.now().seconds}),e.prev=18,g=(0,x.JU)(k.db,"properties",n.id),e.next=22,(0,x.i3)(k.db,function(){var e=(0,h.Z)((0,p.Z)().mark((function e(n){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.set(g,f[v]),n.set(c,{coins:l-m.z1});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 22:return e.next=24,u();case 24:a.Am.success(s("push_news_successfully")),_(f);case 26:return e.prev=26,r(),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[18,,26,29]])})));return function(n,t){return e.apply(this,arguments)}}(),U=(0,c.useCallback)((function(){_([]),M(void 0),N(!0)}),[]);return(0,c.useEffect)((function(){U()}),[n]),(0,c.useEffect)((function(){function e(){return(e=(0,h.Z)((0,p.Z)().mark((function e(){var n;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,_(null!==n&&void 0!==n?n:[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}E&&function(){e.apply(this,arguments)}()}),[E]),(0,d.Z)((0,d.Z)({},H),{},{data:C,clear:U,pushNews:Q})}(C,A.phoneNumber,j),T=P.data,H=P.isLoading,B=P.pushNews;return(0,E.jsxs)("div",{className:(0,u.Z)("h-full flex items-center flex-col",!t&&"p-2 md:p-5"),children:[!t&&(0,E.jsxs)("div",{className:"flex gap-2 mb-3",children:[(0,E.jsx)("input",{ref:_,defaultValue:A.phoneNumber,placeholder:"0911xxxxxx",className:"input",type:"text",maxLength:12}),(0,E.jsxs)("button",{className:"btn",type:"button",onClick:function(){if(_.current){var e=_.current.value;e&&e.match(/^[0-9]*$/)?M({phoneNumber:e.trim()}):a.Am.warn("".concat(L("invalid_phone_number")))}},children:[(0,E.jsx)(s.RB5,{}),L("search")]})]}),!H&&!(null!==T&&void 0!==T&&T.length)&&(0,E.jsx)(o.x4,{title:"Kh\xf4ng c\xf3 th\xf4ng tin"}),(0,E.jsxs)("div",{className:"max-w-[1000px] w-full flex-1 overflow-y-auto",ref:C,children:[(0,E.jsx)(N,{data:T,user:j,pushNews:B}),H&&(0,E.jsx)(o.x4,{title:(0,E.jsxs)("div",{className:"flex items-center gap-2",children:[(0,E.jsx)(s.Z7b,{className:"animate-spin"})," ",L("searching")]})})]})]})}}}]);