(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[96,543],{6791:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(4165),a=n(5861),s=n(9439),c=n(7313),u=n(9225);function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,c.useState)("idle"),i=(0,s.Z)(n,2),l=i[0],o=i[1],d=(0,c.useState)(null),f=(0,s.Z)(d,2),x=f[0],m=f[1],h=(0,c.useState)(null),p=(0,s.Z)(h,2),v=p[0],g=p[1],b="pending"===l,j="error"===l,Z="error"===l||"success"===l,w=(0,c.useCallback)(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o("pending"),m(null),g(null),t.prev=3,t.next=6,e();case 6:return a=t.sent,n&&(m(a),o("success")),t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(3),n&&(o("error"),g(t.t0));case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,u.u)((function(e){t&&w(e())}),[t]),(0,c.useEffect)((function(){return function(){o("idle"),m(null),g(null)}}),[]),{isLoading:b,isError:j,status:l,data:x,error:v,isComplete:Z,execute:function(){return w(!0)}}}},9225:function(e,t,n){"use strict";n.d(t,{u:function(){return a}});var r=n(7313);function a(e,t){var n=(0,r.useRef)(e);n.current=e;var a=(0,r.useRef)(!1);(0,r.useEffect)((function(){return a.current=!0,n.current((function(){return a.current})),function(){a.current=!1}}),t)}},3104:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(4165),a=n(7762),s=n(1413),c=n(5861),u=n(658),i=n.n(u),l=n(573),o=n(7313),d=n(4511),f=n(7864),x=n(7890),m=n(966),h=n.n(m),p=n(1110),v=n(6791),g=n(5565),b=n(7543),j=n(6417);function Z(){var e=(0,d.$)().t,t=(0,x.UO)().id,n=(0,v.r)((function(){return y.apply(this,arguments)}),!1),u=n.data,m=n.isLoading,Z=n.isError,w=n.execute;function y(){return(y=(0,c.Z)((0,r.Z)().mark((function e(){var n,c,u,i,o,d,f,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,l.JU)(g.db,"ads",t),e.next=4,(0,l.QT)(n);case 4:if(!(c=e.sent).data()){e.next=12;break}u=c.data(),i=u.content,(o=document.createElement("div")).innerHTML=i,d=(0,a.Z)(o.querySelectorAll("img[data-src]"));try{for(d.s();!(f=d.n()).done;)(x=f.value).setAttribute("src",x.getAttribute("data-src"))}catch(r){d.e(r)}finally{d.f()}return e.abrupt("return",(0,s.Z)((0,s.Z)({id:c.id},c.data()),{},{content:o.innerHTML}));case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){t&&w()}),[t]),m?(0,j.jsx)(p.x4,{title:(0,j.jsxs)("div",{className:"flex items-center gap-2",children:[(0,j.jsx)(f.Z7b,{className:"animate-spin"})," ",e("searching")]})}):Z||!u?(0,j.jsx)(b.default,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p.pU,{}),(0,j.jsx)("div",{className:"container p-5 mx-auto space-y-5",children:(0,j.jsxs)("div",{className:"max-w-[720px] mx-auto",children:[(0,j.jsx)("h1",{className:"text-xl md:text-3xl font-semibold",children:u.title}),(0,j.jsx)("div",{className:"text-xs text-gray-500 mb-5",children:i()(1e3*u.createdAt).format("DD/MM/YYYY[ | ]HH:mm")}),u.banner&&(0,j.jsx)("img",{className:"my-5",src:u.banner,alt:""}),(0,j.jsx)("div",{className:"ck-editor-preview",dangerouslySetInnerHTML:{__html:h()(u.content,{allowedTags:h().defaults.allowedTags.concat(["img","iframe"]),allowedAttributes:(0,s.Z)((0,s.Z)({},h().defaults.allowedAttributes),{},{iframe:["src","width","height","style","scrolling","frameborder","title"],td:["class"]})})}})]})})]})}},7543:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(3061),a=n(9466),s=n(6417);function c(e){var t=e.hScreen;return(0,s.jsxs)("div",{className:(0,r.Z)("w-full grid place-content-center items-center space-y-5",t&&"h-screen"),style:{minHeight:"inherit"},children:[(0,s.jsxs)("div",{className:"text-xl",children:[(0,s.jsx)("b",{children:"404"})," ",(0,s.jsx)("span",{children:"Kh\xf4ng t\xecm th\u1ea5y trang"})]}),(0,s.jsx)(a.rU,{className:"text-center text-blue-500 hover:text-blue-400",to:"/",children:"Tr\u1edf v\u1ec1 trang ch\u1ee7"})]})}},5347:function(){},1777:function(){},4017:function(){},9905:function(){},4604:function(){}}]);