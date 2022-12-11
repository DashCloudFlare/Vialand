"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[539,543],{6791:function(e,t,n){n.d(t,{r:function(){return i}});var r=n(4165),a=n(5861),s=n(9439),c=n(7313),u=n(9225);function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,c.useState)("idle"),i=(0,s.Z)(n,2),l=i[0],d=i[1],o=(0,c.useState)(null),f=(0,s.Z)(o,2),p=f[0],x=f[1],h=(0,c.useState)(null),v=(0,s.Z)(h,2),m=v[0],g=v[1],b="pending"===l,j="error"===l,Z=(0,c.useCallback)(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d("pending"),x(null),g(null),t.prev=3,t.next=6,e();case 6:return a=t.sent,n&&(x(a),d("success")),t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(3),n&&(d("error"),g(t.t0));case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,u.u)((function(e){t&&Z(e())}),[t]),(0,c.useEffect)((function(){return function(){d("idle"),x(null),g(null)}}),[]),{isLoading:b,isError:j,status:l,data:p,error:m,execute:function(){return Z(!0)}}}},9225:function(e,t,n){n.d(t,{u:function(){return a}});var r=n(7313);function a(e,t){var n=(0,r.useRef)(e);n.current=e;var a=(0,r.useRef)(!1);(0,r.useEffect)((function(){return a.current=!0,n.current((function(){return a.current})),function(){a.current=!1}}),t)}},6243:function(e,t,n){n.d(t,{db:function(){return b}});var r=n(271),a=n(995),s=n(4457),c=n(6797),u=n(8941),i=u.Z.firebase,l=i.apiKey,d=i.appId,o=i.databaseURL,f=i.projectId,p=i.storageBucket,x=i.authDomain,h=i.messagingSenderId,v=u.Z.google.recaptchaSiteKey,m={apiKey:l,authDomain:x,databaseURL:o,projectId:f,storageBucket:p,messagingSenderId:h,appId:d},g=(0,r.ZF)(m),b=(0,s.ad)(g);(0,c.cF)(g),(0,a.yu)(g,{provider:new a.z9(v),isTokenAutoRefreshEnabled:!0})},3104:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(4165),a=n(1413),s=n(5861),c=n(658),u=n.n(c),i=n(4457),l=n(7313),d=n(4511),o=n(7864),f=n(7890),p=n(1571),x=n(6791),h=n(6243),v=n(7543),m=n(6417);function g(){var e=(0,d.$)().t,t=(0,f.UO)().id,n=(0,x.r)((function(){return Z.apply(this,arguments)}),!1),c=n.data,g=n.isLoading,b=n.isError,j=n.execute;function Z(){return(Z=(0,s.Z)((0,r.Z)().mark((function e(){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,i.JU)(h.db,"ads",t),e.next=4,(0,i.QT)(n);case 4:if(!(s=e.sent).data()){e.next=7;break}return e.abrupt("return",(0,a.Z)({id:s.id},s.data()));case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return(0,l.useEffect)((function(){t&&j()}),[t]),g?(0,m.jsx)(p.x4,{title:(0,m.jsxs)("div",{className:"flex items-center gap-2",children:[(0,m.jsx)(o.Z7b,{className:"animate-spin"})," ",e("searching")]})}):b||!c?(0,m.jsx)(v.default,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p.pU,{}),(0,m.jsx)("div",{className:"container p-5 mx-auto space-y-5",children:(0,m.jsxs)("div",{className:"max-w-[720px] mx-auto",children:[(0,m.jsx)("h1",{className:"text-xl md:text-2xl font-semibold",children:c.title}),(0,m.jsx)("div",{className:"text-xs text-gray-500 mb-5",children:u()(1e3*c.createdAt).format("DD/MM/YYYY[ | ]HH:mm")}),(0,m.jsx)("div",{className:"ck-editor-preview",dangerouslySetInnerHTML:{__html:c.content}})]})})]})}},7543:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(9466),a=n(6417);function s(){return(0,a.jsxs)("div",{className:"h-screen w-full grid place-content-center items-center space-y-5",children:[(0,a.jsxs)("div",{className:"text-xl",children:[(0,a.jsx)("b",{children:"404"})," ",(0,a.jsx)("span",{children:"Kh\xf4ng t\xecm th\u1ea5y trang"})]}),(0,a.jsx)(r.rU,{className:"text-center text-blue-500 hover:text-blue-400",to:"/",children:"Tr\u1edf v\u1ec1 trang ch\u1ee7"})]})}}}]);