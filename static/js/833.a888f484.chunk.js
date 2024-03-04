"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[833],{9869:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(4165),a=t(5861),s=t(2540),c=t(1172);function u(e,n,t){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var u,i,o,l,d,h,f,p,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,s.v0)(),e.next=3,null===(u=i.currentUser)||void 0===u?void 0:u.getIdToken();case 3:return o=e.sent,l=new Headers({"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}),o&&l.set("Authorization",o),d={method:n,mode:"cors",headers:l},h=t,a&&("GET"===n?(f=c.stringify(a),h+="?"+f):(d.body=a instanceof FormData?a:JSON.stringify(a),a instanceof FormData&&(d.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),e.next=11,fetch(h,d);case 11:if(!(p=e.sent).ok){e.next=18;break}return e.next=15,p.json();case 15:return e.abrupt("return",e.sent);case 18:return e.prev=18,e.next=21,p.json();case 21:throw x=e.sent,new Error(x.message||p.statusText);case 25:throw e.prev=25,e.t0=e.catch(18),e.t0;case 28:case"end":return e.stop()}}),e,null,[[18,25]])})))).apply(this,arguments)}},1716:function(e,n,t){t.r(n),t.d(n,{deleteImages:function(){return d},deleteMany:function(){return u},deleteVideos:function(){return l},upload:function(){return c},uploadImg:function(){return i},uploadVid:function(){return o}});var r=t(8941),a=t(9869),s=r.Z.common.baseApiUrl+"/upload",c=function(e){var n=new FormData;return n.append("file",e),(0,a.Z)("POST",s,n)},u=function(e){if(e.length)return(0,a.Z)("DELETE",s,{ids:e})},i=function(e){var n=new FormData;return n.append("file",e),(0,a.Z)("POST",s+"/image",n)},o=function(e,n){var t=new FormData;return t.append("file",e),t.append("newsId",n),(0,a.Z)("POST",s+"/video",t)},l=function(e){return(0,a.Z)("DELETE",s+"/videos",{ids:e})},d=function(e){return(0,a.Z)("DELETE",s+"/images",{ids:e})}},7629:function(e,n,t){t.d(n,{PU:function(){return s},ZE:function(){return a},vh:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",a="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",s="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},6791:function(e,n,t){t.d(n,{r:function(){return i}});var r=t(4165),a=t(5861),s=t(9439),c=t(7313),u=t(9225);function i(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=(0,c.useState)("idle"),i=(0,s.Z)(t,2),o=i[0],l=i[1],d=(0,c.useState)(null),h=(0,s.Z)(d,2),f=h[0],p=h[1],x=(0,c.useState)(null),m=(0,s.Z)(x,2),v=m[0],g=m[1],b="pending"===o,j="error"===o,Z="error"===o||"success"===o,w=(0,c.useCallback)(function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l("pending"),p(null),g(null),n.prev=3,n.next=6,e();case 6:return a=n.sent,t&&(p(a),l("success")),n.abrupt("return",a);case 11:n.prev=11,n.t0=n.catch(3),t&&(l("error"),g(n.t0));case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e){return n.apply(this,arguments)}}(),[e]);return(0,u.u)((function(e){n&&w(e())}),[n]),(0,c.useEffect)((function(){return function(){l("idle"),p(null),g(null)}}),[]),{isLoading:b,isError:j,status:o,data:f,error:v,isComplete:Z,execute:function(){return w(!0)}}}},9225:function(e,n,t){t.d(n,{u:function(){return a}});var r=t(7313);function a(e,n){var t=(0,r.useRef)(e);t.current=e;var a=(0,r.useRef)(!1);(0,r.useEffect)((function(){return a.current=!0,t.current((function(){return a.current})),function(){a.current=!1}}),n)}},3833:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(4165),a=t(3433),s=t(5861),c=t(9439),u=t(3061),i=t(658),o=t.n(i),l=t(573),d=t(7313),h=t(4511),f=t(7864),p=t(2539),x=t(9466),m=t(8512),v=t(1716),g=t(1110),b=t(7629),j=t(887),Z=t(5565),w=t(8469),N=t(1413),k=t(4925),y=t(6791),T=t(9225),E=["execute"];var D=t(6417);function S(){var e=(0,h.$)().t,n=function(){var e=(0,y.r)((function(){return m.apply(this,arguments)}),!1),n=e.execute,t=(0,k.Z)(e,E),a=(0,d.useState)(!1),u=(0,c.Z)(a,2),i=u[0],o=u[1],h=(0,d.useState)(void 0),f=(0,c.Z)(h,2),p=f[0],x=f[1];function m(){return(m=(0,s.Z)((0,r.Z)().mark((function e(){var n,t,a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,p&&n.push((0,l.TQ)(p)),t=l.IO.apply(void 0,[(0,l.hJ)(Z.db,"ads"),(0,l.Xo)("createdAt","desc")].concat(n,[(0,l.b9)(30)])),a=[],e.next=7,(0,l.PL)(t);case 7:return s=e.sent,x(s.docs[s.docs.length-1]),s.docs.forEach((function(e){a.push((0,N.Z)({id:e.id},e.data()))})),e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}(0,T.u)((function(e){!i&&e()&&(n(),o(!0))}),[i]);var v=(0,d.useCallback)((function(){o(!1)}),[]),g=(0,d.useCallback)((function(){x(void 0),o(!1)}),[]);return(0,N.Z)((0,N.Z)({},t),{},{refetch:v,clear:g})}(),t=n.data,i=n.isLoading,S=n.refetch,C=n.clear,A=(0,d.useState)([]),I=(0,c.Z)(A,2),L=I[0],U=I[1],F=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){var s,c,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(0,a.Z)(L),!((c=s.findIndex((function(e){return e.id===n})))>-1)){e.next=18;break}return s[c][t]=!s[c][t],U(s),e.prev=6,u=(0,l.JU)(Z.db,"ads",n),e.next=10,(0,l.pl)(u,s[c]);case 10:m.Am.success("Thao t\xe1c th\xe0nh c\xf4ng"),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(6),s[c][t]=!s[c][t],U(s);case 18:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){t&&U(t)}),[t]),i?(0,D.jsx)(g.x4,{title:"\u0110ang l\u1ea5y th\xf4ng tin"}):(0,D.jsxs)("div",{className:"min-h-screen p-5",children:[(0,D.jsxs)("div",{className:"flex flex-wrap items-center gap-3 mb-5",children:[(0,D.jsx)("h1",{className:"font-medium text-base md:text-lg",children:"Qu\u1ea3ng c\xe1o"}),(0,D.jsx)("div",{className:"flex-grow"}),(0,D.jsx)(x.rU,{to:"/chothue/tao-quang-cao",children:(0,D.jsxs)("button",{className:"btn",children:[(0,D.jsx)(f.Lfi,{}),"T\u1ea1o qu\u1ea3ng c\xe1o"]})})]}),(0,D.jsx)("div",{className:"overflow-x-auto",children:(0,D.jsxs)("table",{className:"mt-5 table-auto",children:[(0,D.jsx)("thead",{children:(0,D.jsxs)("tr",{children:[(0,D.jsx)("th",{children:"ID"}),(0,D.jsx)("th",{className:"min-w-[200px] max-w-[300px]",children:"Ti\xeau \u0111\u1ec1"}),(0,D.jsx)("th",{className:"min-w-[130px] max-w-[300px]",children:"Ng\xe0y \u0111\u0103ng"}),(0,D.jsx)("th",{className:"min-w-[80px]",children:"Lo\u1ea1i tin"}),(0,D.jsx)("th",{className:"min-w-[80px]",children:"Tr\u1ea1ng th\xe1i"}),(0,D.jsx)("th",{children:"Thao t\xe1c"})]})}),(0,D.jsx)("tbody",{children:L.map((function(n){return(0,D.jsxs)("tr",{children:[(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:"mx-auto text-sm",children:(0,D.jsx)("a",{className:"text-blue-500 hover:text-blue-400",href:"/quang-cao/".concat(n.id),target:"_blank",rel:"noreferrer",children:n.id})})}),(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:"mx-auto text-sm",children:n.title})}),(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:"mx-auto text-sm",children:o()(1e3*n.createdAt).format("DD/MM/YYYY HH:mm")})}),(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:"mx-auto text-sm",children:e(j.Bs[n.type])})}),(0,D.jsx)("td",{children:(0,D.jsx)("p",{className:(0,u.Z)("mx-auto text-sm rounded-full px-2 whitespace-nowrap",n.published?"bg-green-500 text-white":"bg-gray-400 text-white"),children:e(n.published?"published":"unpublished")})}),(0,D.jsx)("td",{children:(0,D.jsx)(g.o1,{toggleText:n.published?"Nh\xe1p":"Xu\u1ea5t b\u1ea3n",booleanVal:!n.published,onToggle:function(){return F(n.id,"published")},onDelete:function(){return e=n.id,void m.Am.promise((0,s.Z)((0,r.Z)().mark((function n(){var t,s,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=(0,a.Z)(L),!((s=t.findIndex((function(n){return n.id===e})))>-1)){n.next=10;break}return n.next=5,(0,l.oe)((0,l.JU)(Z.db,"ads",e));case 5:return c=(0,w.ih)(t[s].content),n.next=8,v.deleteMany(c);case 8:t.splice(s,1),U(t);case 10:case"end":return n.stop()}}),n)}))),{pending:"\u0110ang ti\u1ebfn h\xe0nh x\xf3a qu\u1ea3ng c\xe1o",success:"X\xf3a qu\u1ea3ng c\xe1o th\xe0nh c\xf4ng",error:b.vh});var e}})})]},n.id)}))})]})}),(0,D.jsxs)("div",{className:"flex gap-3 mt-5",children:[(0,D.jsxs)("button",{className:"btn",onClick:C,children:[(0,D.jsx)(p.b2E,{}),"Trang \u0111\u1ea7u"]}),(0,D.jsxs)("button",{className:(0,u.Z)("btn",!(null!==t&&void 0!==t&&t.length)||t.length<30&&"btn--disabled"),onClick:S,children:["Trang sau",(0,D.jsx)(p.sOJ,{})]})]})]})}}}]);