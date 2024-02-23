"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[289],{4396:function(e,n,t){t.d(n,{pM:function(){return r},uq:function(){return o},aq:function(){return h}});var r={};t.r(r),t.d(r,{deleteById:function(){return l},deposit:function(){return c},getAll:function(){return u},getById:function(){return f},verify:function(){return d}});var o={};t.r(o),t.d(o,{pinProject:function(){return x},renewToken:function(){return m}});var s=t(8941),a=t(9869),i=s.Z.common.baseApiUrl,u=function(e){return(0,a.Z)("GET",i+"/deposit",e).then((function(e){return e.data}))},c=function(e){return(0,a.Z)("POST",i+"/deposit",e)},d=function(e){return(0,a.Z)("PATCH",i+"/deposit/".concat(e,"/verify"))},l=function(e){return(0,a.Z)("DELETE",i+"/deposit/".concat(e))},f=function(e){return(0,a.Z)("GET",i+"/deposit/".concat(e))},p=s.Z.common.baseApiUrl,m=function(){return(0,a.Z)("GET",p+"/renew")},x=function(e,n,t){return(0,a.Z)("POST",p+"/news",{fbId:e,pinned:n,projectPinnedExpiredAt:t})},h=t(1716)},9869:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(4165),o=t(5861),s=t(2540),a=t(1172);function i(e,n,t){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,r.Z)().mark((function e(n,t,o){var i,u,c,d,l,f,p,m,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,s.v0)(),e.next=3,null===(i=u.currentUser)||void 0===i?void 0:i.getIdToken();case 3:return c=e.sent,d=new Headers({"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}),c&&d.set("Authorization",c),l={method:n,mode:"cors",headers:d},f=t,o&&("GET"===n?(p=a.stringify(o),f+="?"+p):(l.body=o instanceof FormData?o:JSON.stringify(o),o instanceof FormData&&(l.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),e.next=11,fetch(f,l);case 11:if(!(m=e.sent).ok){e.next=18;break}return e.next=15,m.json();case 15:return e.abrupt("return",e.sent);case 18:return e.prev=18,e.next=21,m.json();case 21:throw x=e.sent,new Error(x.message||m.statusText);case 25:throw e.prev=25,e.t0=e.catch(18),e.t0;case 28:case"end":return e.stop()}}),e,null,[[18,25]])})))).apply(this,arguments)}},1716:function(e,n,t){t.r(n),t.d(n,{deleteImages:function(){return l},deleteMany:function(){return i},deleteVideos:function(){return d},upload:function(){return a},uploadImg:function(){return u},uploadVid:function(){return c}});var r=t(8941),o=t(9869),s=r.Z.common.baseApiUrl+"/upload",a=function(e){var n=new FormData;return n.append("file",e),(0,o.Z)("POST",s,n)},i=function(e){if(e.length)return(0,o.Z)("DELETE",s,{ids:e})},u=function(e){var n=new FormData;return n.append("file",e),(0,o.Z)("POST",s+"/image",n)},c=function(e,n){var t=new FormData;return t.append("file",e),t.append("newsId",n),(0,o.Z)("POST",s+"/video",t)},d=function(e){return(0,o.Z)("DELETE",s+"/videos",{ids:e})},l=function(e){return(0,o.Z)("DELETE",s+"/images",{ids:e})}},9323:function(e,n,t){t.d(n,{H:function(){return p}});var r=t(4165),o=t(5861),s=t(9439),a=t(2751),i=t(6316),u=t(7313),c=t(5798),d=t(5831),l=t(8469),f=t(2440);function p(e){var n=(0,u.useState)(""),t=(0,s.Z)(n,2),p=t[0],m=t[1],x=(0,d.s)().socket;return(0,u.useEffect)((function(){var n=(0,a.x0)(8);x.emit(c.Q.initNewsAdd,n);var t="".concat(window.location.origin,"/upload?sessionId=").concat(n);i.toString(t,(function(e,n){e||m(n)})),x.on(c.Q.imageUploaded(n),function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=new File([t],"payment-image.webp",{type:"image/webp"}),n.next=3,(0,f.vZ)(o);case 3:o.src=n.sent,o.id=(0,l.Wb)(),e(o);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[]),{sessionQR:p}}},289:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(1413),o=t(4165),s=t(5861),a=t(9439),i=t(3061),u=t(7313),c=t(5627),d=t(4511),l=t(7864),f=t(7890),p=t(9466),m=t(8512),x=t(4396),h=t(1110),v=t(6404),Z=t(5884),w=t(9323),g=t(2440),b=t(6417);function j(){var e=(0,d.$)().t,n=(0,u.useState)(!1),t=(0,a.Z)(n,2),j=t[0],y=t[1],E=(0,u.useState)(),T=(0,a.Z)(E,2),N=T[0],k=T[1],I=(0,u.useState)(""),S=(0,a.Z)(I,2),A=S[0],F=S[1],U=(0,w.H)((function(e){k(e),F(URL.createObjectURL(e))})).sessionQR,D=(0,f.s0)();(0,Z.P)(!0);var P=(0,c.cI)({defaultValues:{amount:v.z1}}),C=P.handleSubmit,_=P.register;(0,u.useEffect)((function(){document.title=e("deposit")}),[]);var O=!N||j;return(0,b.jsx)("div",{className:"max-w-[1024px] px-5 xl:px-0 py-5 mx-auto h-full flex flex-col xl:flex-row gap-2",children:(0,b.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-5",children:[(0,b.jsx)("div",{className:"col-span-1 self-center",children:(0,b.jsx)(h.qv,{isDeposit:!0,sessionQR:U})}),(0,b.jsxs)("div",{className:"col-span-1 space-y-5",children:[(0,b.jsxs)(p.rU,{className:"flex items-center gap-2 link w-fit",to:"/ho-so",children:[(0,b.jsx)(l.CF5,{className:"text-2xl"}),e("back")]}),(0,b.jsx)(h.cw,{htmlFor:"amount",label:"".concat(e("amount")," (VN\u0110)"),children:(0,b.jsx)("input",(0,r.Z)((0,r.Z)({},_("amount",{required:!0,min:v.z1})),{},{step:1e3,className:"input",placeholder:e("enter_deposit_amount"),type:"number",min:v.z1}))}),A&&(0,b.jsxs)("div",{className:"relative mx-auto w-full md:w-[259px]",children:[(0,b.jsx)("img",{className:"w-full rounded",src:A,alt:""}),(0,b.jsx)(l.oHP,{color:"#000",size:21,className:"absolute select-none rounded-full shadow cursor-pointer bg-white top-1 right-1 p-1",onClick:function(){k(null),F("")}})]}),!A&&(0,b.jsx)(h.cw,{htmlFor:"images",label:e("receipt_screenshot"),children:(0,b.jsx)(h.Ur,{accepts:g.Gs,limitMb:v.Te,className:"mx-auto w-full",placeholder:e("upload_receipt_screenshot"),onChange:function(e){k(e[0])}})}),(0,b.jsx)("button",{type:"button",disabled:O,className:(0,i.Z)("btn w-full mt-5",O&&"btn--disabled"),onClick:function(){y(!0),C((function(n){var t=n.amount;N&&m.Am.promise((0,s.Z)((0,o.Z)().mark((function e(){var n,r,s,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.aq.uploadImg(N);case 2:return n=e.sent,r=n.data.id,e.next=6,x.pM.deposit({amount:t,paymentImageId:r});case 6:s=e.sent,a=s.data,y(!1),D("/ho-so/nap-tien/".concat(a._id));case 10:case"end":return e.stop()}}),e)}))),{pending:e("loading"),success:e("deposit_successfully"),error:e("deposit_failed")})}))()},children:e("deposit")})]})]})})}}}]);