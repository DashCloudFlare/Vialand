"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[598],{1716:function(n,e,r){r.d(e,{Cj:function(){return u},Pe:function(){return l},hF:function(){return o},ws:function(){return s},wt:function(){return c}});var t=r(8941),a=r(9869),i=t.Z.common.baseApiUrl+"/upload",s=function(n){var e=new FormData;return e.append("file",n),(0,a.Z)("POST",i,e)},c=function(n){return(0,a.Z)("DELETE",i,{ids:n})},u=function(n){var e=new FormData;return e.append("file",n),(0,a.Z)("POST",i+"/google-img",e)},l=function(n,e){var r=new FormData;return r.append("file",n),r.append("newsId",e),(0,a.Z)("POST",i+"/google-vid",r)},o=function(n){return(0,a.Z)("DELETE",i+"/google",{ids:n})}},7629:function(n,e,r){r.d(e,{PU:function(){return i},ZE:function(){return a},vh:function(){return t}});var t="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",a="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",i="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},1598:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t=r(1413),a=r(4165),i=r(5861),s=r(9439),c=r(573),u=r(7313),l=r(5627),o=r(7864),d=r(9466),p=r(8512),h=r(1716),m=r(1110),f=r(6404),x=r(7629),v=r(5565),b=r(2440),g=r(6417);function Z(){var n=(0,l.cI)({defaultValues:{index:0}}),e=n.register,r=n.handleSubmit,Z=n.reset,j=n.formState.errors,w=u.useState(void 0),N=(0,s.Z)(w,2),T=N[0],k=N[1],E=function(){var n=(0,i.Z)((0,a.Z)().mark((function n(e){return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Am.promise((0,i.Z)((0,a.Z)().mark((function n(){var r,t,i,s;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.url,t=e.index,n.prev=1,n.next=4,h.ws(T);case 4:return i=n.sent,s=i.data,n.next=8,(0,c.ET)((0,c.hJ)(v.db,"banners"),{url:r,index:t,picture:s.id});case 8:Z(),k(void 0),n.next=13;break;case 11:n.prev=11,n.t0=n.catch(1);case 13:case"end":return n.stop()}}),n,null,[[1,11]])}))),{pending:"\u0110ang t\u1ea1o banner",success:"T\u1ea1o banner th\xe0nh c\xf4ng",error:x.vh});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"min-h-screen p-5",children:[(0,g.jsxs)("div",{className:"flex items-center mb-5",children:[(0,g.jsx)("h1",{className:"font-medium text-base md:text-lg",children:"T\u1ea1o banner"}),(0,g.jsx)("div",{className:"flex-grow"}),(0,g.jsx)(d.rU,{to:"/chothue/banner",children:(0,g.jsxs)("button",{className:"btn",children:[(0,g.jsx)(o.CF5,{}),"Tr\u1edf v\u1ec1"]})})]}),(0,g.jsxs)("form",{className:"grid grid-cols-6 gap-3",onSubmit:r(E),children:[(0,g.jsx)(m.cw,{className:"col-span-2 md:col-span-1",htmlFor:"index",label:"Th\u1ee9 t\u1ef1",error:j.index,children:(0,g.jsx)("input",(0,t.Z)((0,t.Z)({},e("index",{required:!0,valueAsNumber:!0})),{},{className:"input",type:"number",step:1,min:0}))}),(0,g.jsx)(m.cw,{className:"col-span-4 md:col-span-5",htmlFor:"url",label:"URL",error:j.url,children:(0,g.jsx)("input",(0,t.Z)((0,t.Z)({},e("url",{required:!0,maxLength:300})),{},{className:"input",type:"text"}))}),(0,g.jsx)(m.cw,{className:"col-span-6 md:col-span-3 lg:col-span-2",htmlFor:"picture",label:"H\xecnh \u1ea3nh",children:(0,g.jsx)(m.Ur,{accepts:b.Gs,limitMb:f.Te,onChange:function(n){var e;return k(null!==(e=n[0])&&void 0!==e?e:void 0)}})}),(0,g.jsx)("div",{className:"col-span-4 col-start-1",children:(0,g.jsx)("button",{className:"btn",type:"submit",children:"T\u1ea1o banner"})})]})]})}}}]);