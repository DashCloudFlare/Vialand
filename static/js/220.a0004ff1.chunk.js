"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[220,543],{6243:function(e,t,n){n.d(t,{db:function(){return j}});var i=n(271),r=n(995),a=n(573),c=n(6797),s=n(8941),o=s.Z.firebase,d=o.apiKey,l=o.appId,u=o.databaseURL,h=o.projectId,p=o.storageBucket,x=o.authDomain,m=o.messagingSenderId,f=s.Z.google.recaptchaSiteKey,v={apiKey:d,authDomain:x,databaseURL:u,projectId:h,storageBucket:p,messagingSenderId:m,appId:l},g=(0,i.ZF)(v),j=(0,a.ad)(g);(0,c.cF)(g),(0,r.yu)(g,{provider:new r.z9(f),isTokenAutoRefreshEnabled:!0})},220:function(e,t,n){n.r(t),n.d(t,{_renderVideo:function(){return y},default:function(){return N}});var i=n(4165),r=n(1413),a=n(5861),c=n(9439),s=n(573),o=n(1172),d=n(7313),l=n(4511),u=n(7890),h=n(9466),p=n(4021),x=n(753),m=n(887),f=n(6243),v=n(8469),g=n(4885),j=n(7543),b=n(6417),y=function(e){var t=e.vidSrc,n=e.hideVideo;e.isMobile;return t?n?(0,b.jsx)(x.x4,{title:"Video \u0111\xe3 b\u1ecb \u1ea9n do ch\u1ee9a n\u1ed9i dung kh\xf4ng ph\xf9 h\u1ee3p"}):(0,b.jsx)("video",{className:"aspect-video bg-black","webkit-playsinline":"true",playsInline:!0,controls:!0,title:"video",children:(0,b.jsx)("source",{src:"https://drive.google.com/uc?export=download&id=".concat(t),type:"video/mp4"})}):(0,b.jsx)(x.x4,{title:"Video hi\u1ec7n kh\xf4ng kh\u1ea3 d\u1ee5ng"})},k={autoplay:!1,fade:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,accessibility:!0,prevArrow:(0,b.jsx)(x.gQ,{}),nextArrow:(0,b.jsx)(x.gQ,{next:!0})},w={};function N(){var e=(0,l.$)().t,t=(0,u.UO)().slug,n=(0,d.useState)(void 0),N=(0,c.Z)(n,2),Z=N[0],S=N[1],I=(0,d.useState)((function(){return w[t]})),U=(0,c.Z)(I,2),F=U[0],H=U[1],V=(0,d.useState)(!1),T=(0,c.Z)(V,2),A=T[0],C=T[1];if((0,d.useEffect)((function(){function e(){return e=(0,a.Z)((0,i.Z)().mark((function e(){var n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,n=(0,s.hJ)(f.db,"properties"),a=(0,s.IO)(n,(0,s.ar)("slug","==",t),(0,s.ar)("published","==",!0)),e.next=6,(0,s.PL)(a);case 6:e.sent.forEach((function(e){var t=(0,r.Z)({id:e.id},e.data());H(t),w[t.slug]=t,document.title=e.data().subject})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:return e.prev=12,C(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,10,12,15]])}))),e.apply(this,arguments)}!w[t]&&function(){e.apply(this,arguments)}()}),[t]),A)return(0,b.jsx)("div",{children:"Loading..."});if(!F)return(0,b.jsx)(j.default,{});var K=F.subject,L=F.structure,R=F.wardName,_=F.districtName,z=F.provinceName,E=F.description,B=F.contactName,D=F.contactNumber,M=F.direction,O=F.video,P=F.hideVideo,Q=F.price,q=F.action,J=F.province,$=F.ward,G=F.district,W=F.length,X=F.width,Y=F.address,ee=F.images,te=F.architecture,ne="".concat(K," - ").concat(Y,", ").concat(R,", ").concat(_,", ").concat(z),ie=X*W,re=1e6*Q/(ie=Number.isInteger(ie)?ie:ie.toFixed(2)),ae=q===m.Hx.trade?(0,g.pF)(1e6*Q,2):"".concat(Q," tri\u1ec7u/th\xe1ng");return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(x.pU,{}),(0,b.jsxs)(p.Z,(0,r.Z)((0,r.Z)({className:"mx-auto max-w-full xl:max-w-[720px] aspect-video"},k),{},{children:[y({vidSrc:null===O||void 0===O?void 0:O.id,hideVideo:P,isMobile:(0,v.tq)()}),ee.map((function(e,t){return(0,b.jsx)("div",{onClick:function(){return S(t)},children:(0,b.jsx)("div",{className:"my-auto aspect-video",style:{backgroundImage:"url(https://lh3.googleusercontent.com/d/".concat(e.id,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})},e.id)}))]})),(0,b.jsxs)("div",{className:"my-2 py-2 bg-[#f4f4f4] text-center font-light text-sm space-x-2",children:[(0,b.jsx)(h.rU,{className:"link",to:{pathname:q===m.Hx.trade?"/mua-ban":"/cho-thue",search:o.stringify({province:J})},children:z})," ","/",(0,b.jsx)(h.rU,{className:"link",to:{pathname:q===m.Hx.trade?"/mua-ban":"/cho-thue",search:o.stringify({district:G,province:J})},children:_})," ","/",(0,b.jsx)(h.rU,{className:"link",to:{pathname:q===m.Hx.trade?"/mua-ban":"/cho-thue",search:o.stringify({province:J,ward:$,district:G})},children:R})]}),(0,b.jsxs)("div",{className:"m-5 flex flex-col space-y-5 items-center overflow-hidden",children:[(0,b.jsxs)("span",{className:"text-center",children:[(0,b.jsx)("h1",{className:"font-medium",children:ne}),Q&&(0,b.jsx)("b",{className:"font-medium text-red-500",children:ae})]}),(0,b.jsxs)("div",{className:"mx-auto max-w-[500px] p-2 font-sans text-justify text-base space-y-5",children:[q===m.Hx.trade&&(0,b.jsxs)("p",{children:[e("estimate_price"),": ",(0,g.pF)(re,1),"/m\xb2"]}),(0,b.jsxs)("p",{children:[e("size"),": ",ie,"m\xb2 (",X," x ",W,"m)"]}),(0,b.jsxs)("p",{children:[e("structure")," | ",e("floor"),": ",L]}),!!te&&(0,b.jsxs)("p",{children:[e("architecture"),": ",te]}),(0,b.jsxs)("p",{children:[e("location"),": ",e("direction")," ",M||e("update_later")]}),(0,b.jsx)("p",{className:"line-clamp-[15] whitespace-pre-wrap",children:E}),(0,b.jsxs)("p",{children:[e("contact_phone"),": ",D," (",B,")"]})]})]})]}),(0,b.jsx)(x.eT,{open:void 0!=Z,initialActiveIdx:Z,onClose:function(){return S(void 0)},images:ee.map((function(e){return"https://lh3.googleusercontent.com/d/".concat(e.id)}))})]})}},7543:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var i=n(3061),r=n(9466),a=n(6417);function c(e){var t=e.hScreen;return(0,a.jsxs)("div",{className:(0,i.Z)("w-full grid place-content-center items-center space-y-5",t&&"h-screen"),style:{minHeight:"inherit"},children:[(0,a.jsxs)("div",{className:"text-xl",children:[(0,a.jsx)("b",{children:"404"})," ",(0,a.jsx)("span",{children:"Kh\xf4ng t\xecm th\u1ea5y trang"})]}),(0,a.jsx)(r.rU,{className:"text-center text-blue-500 hover:text-blue-400",to:"/",children:"Tr\u1edf v\u1ec1 trang ch\u1ee7"})]})}}}]);