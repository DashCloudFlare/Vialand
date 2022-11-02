"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[539,220,543],{887:function(e,t,n){var r,a,i;n.d(t,{Hx:function(){return i},tU:function(){return a}}),function(e){e[e.east=1]="east",e[e.west=2]="west",e[e.south=3]="south",e[e.north=4]="north",e[e.northEast=5]="northEast",e[e.northSouth=6]="northSouth",e[e.southEase=7]="southEase",e[e.southWest=8]="southWest"}(r||(r={})),function(e){e[e.house=1]="house",e[e.land=2]="land",e[e.apartment=3]="apartment",e[e.villa=4]="villa",e[e.resort=5]="resort",e[e.factory=6]="factory",e[e.plan=7]="plan",e[e.bedsit=8]="bedsit"}(a||(a={})),function(e){e[e.trade=1]="trade",e[e.rent=2]="rent"}(i||(i={}))},6791:function(e,t,n){n.d(t,{r:function(){return o}});var r=n(4165),a=n(5861),i=n(9439),s=n(7313),c=n(9225);function o(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,s.useState)("idle"),o=(0,i.Z)(n,2),u=o[0],d=o[1],l=(0,s.useState)(null),h=(0,i.Z)(l,2),p=h[0],f=h[1],x=(0,s.useState)(null),m=(0,i.Z)(x,2),v=m[0],b=m[1],g="pending"===u,j="error"===u,w=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d("pending"),f(null),b(null),t.prev=3,t.next=6,e();case 6:a=t.sent,n&&(f(a),d("success")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),n&&(d("error"),b(t.t0));case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}();return(0,c.u)((function(e){t&&w(e())}),[t]),(0,s.useEffect)((function(){return function(){d("idle"),f(null),b(null)}}),[]),{isLoading:g,isError:j,status:u,data:p,error:v,execute:function(){return w(!0)}}}},9225:function(e,t,n){n.d(t,{u:function(){return a}});var r=n(7313);function a(e,t){var n=(0,r.useRef)(e);n.current=e;var a=(0,r.useRef)(!1);(0,r.useEffect)((function(){return a.current=!0,n.current((function(){return a.current})),function(){a.current=!1}}),t)}},6243:function(e,t,n){n.d(t,{db:function(){return f}});var r=n(271),a=n(4457),i=n(6797),s=n(8941).Z.firebase,c=s.apiKey,o=s.appId,u=s.databaseURL,d=s.projectId,l=s.storageBucket,h={apiKey:c,authDomain:s.authDomain,databaseURL:u,projectId:d,storageBucket:l,messagingSenderId:s.messagingSenderId,appId:o},p=(0,r.ZF)(h),f=(0,a.ad)(p);(0,i.cF)(p)},8469:function(e,t,n){n.d(t,{t:function(){return r}});var r=function(){var e=navigator.userAgent;return!!/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)||(!!/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)||!!(navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)))}},3104:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(4165),a=n(1413),i=n(5861),s=n(9439),c=n(4457),o=n(7313),u=n(4511),d=n(7864),l=n(7890),h=n(4021),p=n(2589),f=n(8941),x=n(6791),m=n(6243),v=n(8469),b=n(220),g=n(7543),j=n(6417);function w(){var e=(0,u.$)().t,t=(0,l.UO)().id,n=(0,o.useState)(void 0),w=(0,s.Z)(n,2),k=w[0],y=w[1],N=(0,x.r)((function(){return E.apply(this,arguments)}),!1),Z=N.data,S=N.isLoading,I=N.isError,U=N.execute;function E(){return(E=(0,i.Z)((0,r.Z)().mark((function e(){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,c.JU)(m.db,"ads",t),e.next=4,(0,c.QT)(n);case 4:if(!(i=e.sent).data()){e.next=7;break}return e.abrupt("return",(0,a.Z)({id:i.id},i.data()));case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){t&&U()}),[t]),S?(0,j.jsx)(p.x4,{title:(0,j.jsxs)("div",{className:"flex items-center gap-2",children:[(0,j.jsx)(d.Z7b,{className:"animate-spin"})," ",e("searching")]})}):I||!Z?(0,j.jsx)(g.default,{}):(0,j.jsxs)("div",{className:"container p-5 mx-auto space-y-5",children:[(0,b._renderVideo)({vidSrc:Z.videoUrl,hideVideo:!1,isMobile:(0,v.t)()}),(0,j.jsx)(h.Z,(0,a.Z)((0,a.Z)({className:"mx-auto max-w-[720px] h-[30vh] md:h-[56vh] overflow-hidden"},{autoplay:!0,autoplaySpeed:5e3,fade:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,accessibility:!0}),{},{children:Z.images.map((function(e,t){return(0,j.jsx)("div",{onClick:function(){return y(t)},children:(0,j.jsx)("div",{className:"w-full h-[30vh] md:h-[56vh]",style:{backgroundImage:"url(".concat(f.Z.common.baseApiUrl,"/public/").concat(e.id,".webp)"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})},e.id)}))})),(0,j.jsx)(p.eT,{initialActiveIdx:k,open:void 0!=k,onClose:function(){return y(void 0)},images:Z.images.map((function(e){return"".concat(f.Z.common.baseApiUrl,"/public/").concat(e.id,".webp")}))}),(0,j.jsx)("p",{className:"mx-auto max-w-[380px]",children:Z.content})]})}},220:function(e,t,n){n.r(t),n.d(t,{_renderVideo:function(){return k},default:function(){return N}});var r=n(4165),a=n(1413),i=n(5861),s=n(9439),c=n(4457),o=n(1172),u=n(7313),d=n(4511),l=n(6672),h=n(7890),p=n(9466),f=n(4021),x=n(2589),m=n(887),v=n(6243),b=n(8469),g=n(4885),j=n(7543),w=n(6417),k=function(e){var t=e.vidSrc,n=e.hideVideo,r=e.isMobile;return t?n?(0,w.jsx)(x.x4,{title:"Video \u0111\xe3 b\u1ecb \u1ea9n do ch\u1ee9a n\u1ed9i dung kh\xf4ng ph\xf9 h\u1ee3p"}):r?(0,w.jsxs)("div",{className:"relative max-w-[768px] h-full mx-auto w-full",children:[(0,w.jsx)("div",{className:"aspect-vid bg-black"}),(0,w.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,w.jsx)(l.gmG,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl shadow text-white"})})]}):(0,w.jsx)("iframe",{title:"video",loading:"lazy",allowFullScreen:!0,className:"mx-auto my-5 max-w-[720px] w-full aspect-video",src:t}):(0,w.jsx)(x.x4,{title:"Video hi\u1ec7n kh\xf4ng kh\u1ea3 d\u1ee5ng"})},y={autoplay:!0,autoplaySpeed:5e3,fade:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,accessibility:!0};function N(){var e=(0,d.$)().t,t=(0,h.UO)().slug,n=(0,u.useState)(void 0),l=(0,s.Z)(n,2),N=l[0],Z=l[1],S=(0,u.useState)(null),I=(0,s.Z)(S,2),U=I[0],E=I[1],T=(0,u.useState)(!1),V=(0,s.Z)(T,2),A=V[0],F=V[1];if((0,u.useEffect)((function(){function e(){return(e=(0,i.Z)((0,r.Z)().mark((function e(){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.prev=1,n=(0,c.hJ)(v.db,"properties"),i=(0,c.IO)(n,(0,c.ar)("slug","==",t),(0,c.ar)("published","==",!0)),e.next=6,(0,c.PL)(i);case 6:e.sent.forEach((function(e){E((0,a.Z)({id:e.id},e.data())),document.title=e.data().subject})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:return e.prev=12,F(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,10,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),A)return(0,w.jsx)("div",{children:"Loading..."});if(!U)return(0,w.jsx)(j.default,{});var M=U.subject,C=U.structure,L=U.architecture,P=U.wardName,R=U.districtName,H=U.provinceName,O=U.description,z=U.contactName,B=U.contactNumber,K=U.direction,_=U.video,D=U.hideVideo,J=U.price,W=U.action,$=U.province,G=U.ward,Q=U.district,q=U.length,X=U.width,Y=U.address,ee=U.images,te="".concat(M," - ").concat(Y,", ").concat(P,", ").concat(R,", ").concat(H),ne=X*q,re=1e6*J/(ne=Number.isInteger(ne)?ne:ne.toFixed(2)),ae=(0,g.pF)(1e6*J,2);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(x.pU,{}),(0,w.jsxs)(f.Z,(0,a.Z)((0,a.Z)({className:"mx-auto my-5 max-w-[720px] w-full aspect-video"},y),{},{children:[k({vidSrc:null===_||void 0===_?void 0:_.value,hideVideo:D,isMobile:(0,b.t)()}),ee.map((function(e,t){return(0,w.jsx)("div",{onClick:function(){return Z(t)},children:(0,w.jsx)("div",{className:"max-w-[720px] w-full aspect-video",style:{backgroundImage:"url(https://lh3.googleusercontent.com/d/".concat(e.id,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})},e.id)}))]})),(0,w.jsxs)("div",{className:"my-2 py-2 bg-[#f4f4f4] text-center font-light text-sm space-x-2",children:[(0,w.jsx)(p.rU,{className:"link",to:{pathname:W===m.Hx.trade?"/mua-ban":"/cho-thue",search:o.stringify({province:$})},children:H})," ","/",(0,w.jsx)(p.rU,{className:"link",to:{pathname:W===m.Hx.trade?"/mua-ban":"/cho-thue",search:o.stringify({district:Q,province:$})},children:R})," ","/",(0,w.jsx)(p.rU,{className:"link",to:{pathname:W===m.Hx.trade?"/mua-ban":"/cho-thue",search:o.stringify({province:$,ward:G,district:Q})},children:P})]}),(0,w.jsxs)("div",{className:"m-5 flex flex-col space-y-5 items-center overflow-hidden",children:[(0,w.jsxs)("span",{className:"text-center",children:[(0,w.jsx)("h1",{className:"font-medium",children:te}),J&&(0,w.jsx)("b",{className:"font-medium text-red-500",children:ae})]}),(0,w.jsxs)("div",{className:"mx-auto max-w-[500px] p-2 font-sans text-justify text-base space-y-5",children:[(0,w.jsxs)("p",{children:[e("size"),": ",ne,"m\xb2 (",X," x ",q,"m)"]}),W===m.Hx.trade&&(0,w.jsxs)("p",{children:[e("price")," /m\xb2: ",(0,g.pF)(re,2),"/m\xb2"]}),(0,w.jsxs)("p",{children:[e("structure"),": ",C]}),(0,w.jsxs)("p",{children:[e("architecture"),": ",L]}),(0,w.jsxs)("p",{children:[e("location"),": ",e("direction")," ",K]}),(0,w.jsx)("p",{children:O}),(0,w.jsxs)("p",{children:[e("contact_phone"),": ",B," (",z,")"]})]})]})]}),(0,w.jsx)(x.eT,{open:void 0!=N,initialActiveIdx:N,onClose:function(){return Z(void 0)},images:ee.map((function(e){return"https://lh3.googleusercontent.com/d/".concat(e.id)}))})]})}},7543:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var r=n(9466),a=n(6417);function i(){return(0,a.jsxs)("div",{className:"h-screen w-full grid place-content-center items-center space-y-5",children:[(0,a.jsxs)("div",{className:"text-xl",children:[(0,a.jsx)("b",{children:"404"})," ",(0,a.jsx)("span",{children:"Kh\xf4ng t\xecm th\u1ea5y trang"})]}),(0,a.jsx)(r.rU,{className:"text-center text-blue-500 hover:text-blue-400",to:"/",children:"Tr\u1edf v\u1ec1 trang ch\u1ee7"})]})}}}]);