"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[833],{1716:function(n,e,t){t.d(e,{Cj:function(){return i},Pe:function(){return l},hF:function(){return o},ws:function(){return u},wt:function(){return s}});var r=t(8941),c=t(9869),a=r.Z.common.baseApiUrl+"/upload",u=function(n){var e=new FormData;return e.append("file",n),(0,c.Z)("POST",a,e)},s=function(n){return(0,c.Z)("DELETE",a,{ids:n})},i=function(n){var e=new FormData;return e.append("file",n),(0,c.Z)("POST",a+"/google-img",e)},l=function(n,e){var t=new FormData;return t.append("file",n),t.append("newsId",e),(0,c.Z)("POST",a+"/google-vid",t)},o=function(n){return(0,c.Z)("DELETE",a+"/google",{ids:n})}},7629:function(n,e,t){t.d(e,{PU:function(){return a},ZE:function(){return c},vh:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",c="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",a="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},6791:function(n,e,t){t.d(e,{r:function(){return i}});var r=t(4165),c=t(5861),a=t(9439),u=t(7313),s=t(9225);function i(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,u.useState)("idle"),i=(0,a.Z)(t,2),l=i[0],o=i[1],d=(0,u.useState)(null),h=(0,a.Z)(d,2),f=h[0],x=h[1],p=(0,u.useState)(null),m=(0,a.Z)(p,2),v=m[0],g=m[1],b="pending"===l,j="error"===l,Z=(0,u.useCallback)(function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o("pending"),x(null),g(null),e.prev=3,e.next=6,n();case 6:return c=e.sent,t&&(x(c),o("success")),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(3),t&&(o("error"),g(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(n){return e.apply(this,arguments)}}(),[n]);return(0,s.u)((function(n){e&&Z(n())}),[e]),(0,u.useEffect)((function(){return function(){o("idle"),x(null),g(null)}}),[]),{isLoading:b,isError:j,status:l,data:f,error:v,execute:function(){return Z(!0)}}}},9225:function(n,e,t){t.d(e,{u:function(){return c}});var r=t(7313);function c(n,e){var t=(0,r.useRef)(n);t.current=n;var c=(0,r.useRef)(!1);(0,r.useEffect)((function(){return c.current=!0,t.current((function(){return c.current})),function(){c.current=!1}}),e)}},3833:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r=t(4165),c=t(3433),a=t(5861),u=t(9439),s=t(658),i=t.n(s),l=t(573),o=t(7313),d=t(7864),h=t(9466),f=t(8512),x=t(1716),p=t(1110),m=t(7629),v=t(5565),g=t(8469),b=t(1413),j=t(4925),Z=t(6791),w=t(9225),N=["execute"];var k=t(4511),T=t(887),E=t(3061),y=t(2539),D=t(6417);function S(){var n=(0,k.$)().t,e=function(){var n=(0,Z.r)((function(){return m.apply(this,arguments)}),!1),e=n.execute,t=(0,j.Z)(n,N),c=(0,o.useState)(!1),s=(0,u.Z)(c,2),i=s[0],d=s[1],h=(0,o.useState)(void 0),f=(0,u.Z)(h,2),x=f[0],p=f[1];function m(){return(m=(0,a.Z)((0,r.Z)().mark((function n(){var e,t,c,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=[],n.prev=1,x&&e.push((0,l.TQ)(x)),t=l.IO.apply(void 0,[(0,l.hJ)(v.db,"ads"),(0,l.Xo)("createdAt","desc")].concat(e,[(0,l.b9)(30)])),c=[],n.next=7,(0,l.PL)(t);case 7:return a=n.sent,p(a.docs[a.docs.length-1]),a.docs.forEach((function(n){c.push((0,b.Z)({id:n.id},n.data()))})),n.abrupt("return",c);case 13:return n.prev=13,n.t0=n.catch(1),n.abrupt("return",[]);case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}(0,w.u)((function(n){!i&&n()&&(e(),d(!0))}),[i]);var g=(0,o.useCallback)((function(){d(!1)}),[]),k=(0,o.useCallback)((function(){p(void 0),d(!1)}),[]);return(0,b.Z)((0,b.Z)({},t),{},{refetch:g,clear:k})}(),t=e.data,s=e.isLoading,S=e.refetch,C=e.clear,L=(0,o.useState)([]),q=(0,u.Z)(L,2),P=q[0],A=q[1],I=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){var a,u,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(0,c.Z)(P),!((u=a.findIndex((function(n){return n.id===e})))>-1)){n.next=18;break}return a[u][t]=!a[u][t],A(a),n.prev=6,s=(0,l.JU)(v.db,"ads",e),n.next=10,(0,l.pl)(s,a[u]);case 10:f.Am.success("Thao t\xe1c th\xe0nh c\xf4ng"),n.next=18;break;case 13:n.prev=13,n.t0=n.catch(6),a[u][t]=!a[u][t],A(a);case 18:case"end":return n.stop()}}),n,null,[[6,13]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){t&&A(t)}),[t]),s?(0,D.jsx)(p.x4,{title:"\u0110ang l\u1ea5y th\xf4ng tin"}):(0,D.jsxs)("div",{className:"min-h-screen p-5",children:[(0,D.jsxs)("div",{className:"flex flex-wrap items-center gap-3 mb-5",children:[(0,D.jsx)("h1",{className:"font-medium text-base md:text-lg",children:"Qu\u1ea3ng c\xe1o"}),(0,D.jsx)("div",{className:"flex-grow"}),(0,D.jsx)(h.rU,{to:"/chothue/tao-quang-cao",children:(0,D.jsxs)("button",{className:"btn",children:[(0,D.jsx)(d.Lfi,{}),"T\u1ea1o qu\u1ea3ng c\xe1o"]})})]}),(0,D.jsx)("div",{className:"overflow-x-auto",children:(0,D.jsxs)("table",{className:"mt-5 table-auto",children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"ID"}),(0,D.jsx)("th",{className:"min-w-[200px] max-w-[300px]",children:"Ti\xeau \u0111\u1ec1"}),(0,D.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"Ng\xe0y \u0111\u0103ng"}),(0,D.jsx)("th",{className:"min-w-[80px]",children:"Lo\u1ea1i tin"}),(0,D.jsx)("th",{className:"min-w-[80px]",children:"Tr\u1ea1ng th\xe1i"}),(0,D.jsx)("th",{children:"Thao t\xe1c"})]})}),(0,D.jsx)("tbody",{children:P.map((function(e){return(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:"mx-auto text-sm",children:(0,D.jsx)("a",{className:"text-blue-500 hover:text-blue-400",href:"/quang-cao/".concat(e.id),target:"_blank",rel:"noreferrer",children:e.id})})}),(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:"mx-auto text-sm",children:e.title})}),(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:"mx-auto text-sm",children:i()(1e3*e.createdAt).format("DD/MM/YYYY HH:mm")})}),(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:"mx-auto text-sm",children:n(T.Bs[e.type])})}),(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:(0,E.Z)("mx-auto text-sm rounded-full px-2 whitespace-nowrap",e.published?"bg-green-500 text-white":"bg-gray-400 text-white"),children:n(e.published?"published":"unpublished")})}),(0,D.jsx)("td",{children:(0,D.jsx)(p.o1,{toggleText:e.published?"Nh\xe1p":"Xu\u1ea5t b\u1ea3n",booleanVal:!e.published,onToggle:function(){return I(e.id,"published")},onDelete:function(){return n=e.id,void f.Am.promise((0,a.Z)((0,r.Z)().mark((function e(){var t,a,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=(0,c.Z)(P),!((a=t.findIndex((function(e){return e.id===n})))>-1)){e.next=11;break}return e.next=6,(0,l.oe)((0,l.JU)(v.db,"ads",n));case 6:return u=(0,g.ih)(t[a].content),e.next=9,x.wt(u);case 9:t.splice(a,1),A(t);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])}))),{pending:"\u0110ang ti\u1ebfn h\xe0nh x\xf3a qu\u1ea3ng c\xe1o",success:"X\xf3a qu\u1ea3ng c\xe1o th\xe0nh c\xf4ng",error:m.vh});var n}})})]},e.id)}))})]})}),(0,D.jsxs)("div",{className:"flex gap-3 mt-5",children:[(0,D.jsxs)("button",{className:"btn",onClick:C,children:[(0,D.jsx)(y.b2E,{}),"Trang \u0111\u1ea7u"]}),(0,D.jsxs)("button",{className:(0,E.Z)("btn",!(null!==t&&void 0!==t&&t.length)||t.length<30&&"btn--disabled"),onClick:S,children:["Trang sau",(0,D.jsx)(y.sOJ,{})]})]})]})}}}]);