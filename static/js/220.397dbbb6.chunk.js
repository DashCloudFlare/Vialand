"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[220,543],{887:function(e,t,n){var a,r,i;n.d(t,{Hx:function(){return i},tU:function(){return r}}),function(e){e[e.east=1]="east",e[e.west=2]="west",e[e.south=3]="south",e[e.north=4]="north",e[e.northEast=5]="northEast",e[e.northSouth=6]="northSouth",e[e.southEase=7]="southEase",e[e.southWest=8]="southWest"}(a||(a={})),function(e){e[e.house=1]="house",e[e.land=2]="land",e[e.apartment=3]="apartment",e[e.villa=4]="villa",e[e.resort=5]="resort",e[e.factory=6]="factory",e[e.plan=7]="plan",e[e.bedsit=8]="bedsit"}(r||(r={})),function(e){e[e.trade=1]="trade",e[e.rent=2]="rent"}(i||(i={}))},6243:function(e,t,n){n.d(t,{db:function(){return p}});var a=n(271),r=n(4457),i=n(6797),s=n(8941).Z.firebase,c=s.apiKey,o=s.appId,d=s.databaseURL,l=s.projectId,u=s.storageBucket,h={apiKey:c,authDomain:s.authDomain,databaseURL:d,projectId:l,storageBucket:u,messagingSenderId:s.messagingSenderId,appId:o},x=(0,a.ZF)(h),p=(0,r.ad)(x);(0,i.cF)(x)},8469:function(e,t,n){n.d(t,{t:function(){return a}});var a=function(){var e=navigator.userAgent;return!!/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)||(!!/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)||!!(navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)))}},220:function(e,t,n){n.r(t),n.d(t,{_renderVideo:function(){return w},default:function(){return N}});var a=n(4165),r=n(1413),i=n(5861),s=n(9439),c=n(7313),o=n(4457),d=n(7890),l=n(9466),u=n(4511),h=n(1172),x=n(6672),p=n(8471),f=n(887),m=n(6243),v=n(7543),b=n(8469),j=n(4885),g=n(6417),w=function(e){var t=e.vidSrc,n=e.hideVideo,a=e.isMobile;return t?n?(0,g.jsx)(p.x4,{title:"Video \u0111\xe3 b\u1ecb \u1ea9n do ch\u1ee9a n\u1ed9i dung kh\xf4ng ph\xf9 h\u1ee3p"}):a?(0,g.jsxs)("div",{className:"relative max-w-[768px] h-full mx-auto w-full ",children:[(0,g.jsx)("div",{className:"aspect-vid bg-black"}),(0,g.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,g.jsx)(x.gmG,{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl shadow text-white"})})]}):(0,g.jsx)("iframe",{title:"video",loading:"lazy",allowFullScreen:!0,className:"mx-auto my-5 max-w-[720px] w-full aspect-video",src:t}):(0,g.jsx)(p.x4,{title:"Video hi\u1ec7n kh\xf4ng kh\u1ea3 d\u1ee5ng"})};function N(){var e=(0,u.$)().t,t=(0,d.UO)().slug,n=(0,c.useState)(null),x=(0,s.Z)(n,2),N=x[0],y=x[1],k=(0,c.useState)(!1),S=(0,s.Z)(k,2),I=S[0],U=S[1];if((0,c.useEffect)((function(){function e(){return(e=(0,i.Z)((0,a.Z)().mark((function e(){var n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.prev=1,n=(0,o.hJ)(m.db,"properties"),i=(0,o.IO)(n,(0,o.ar)("slug","==",t),(0,o.ar)("published","==",!0)),e.next=6,(0,o.PL)(i);case 6:e.sent.forEach((function(e){y((0,r.Z)({id:e.id},e.data())),document.title=e.data().subject})),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:return e.prev=12,U(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,10,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),I)return(0,g.jsx)("div",{children:"Loading..."});if(!N)return(0,g.jsx)(v.default,{});var Z=N.subject,E=N.structure,F=N.architecture,M=N.wardName,V=N.districtName,H=N.provinceName,B=N.description,K=N.contactName,L=N.contactNumber,O=N.direction,P=N.video,A=N.hideVideo,T=N.price,_=N.action,z=N.province,C=N.ward,D=N.district,R=N.length,W=N.width,G=N.address,J="".concat(Z," - ").concat(G,", ").concat(M,", ").concat(V,", ").concat(H),$=W*R,q=1e6*T/($=Number.isInteger($)?$:$.toFixed(2)),Q=(0,j.pF)(1e6*T,2);return(0,g.jsxs)("div",{children:[(0,g.jsx)(p.pU,{}),w({vidSrc:null===P||void 0===P?void 0:P.value,hideVideo:A,isMobile:(0,b.t)()}),(0,g.jsxs)("div",{className:"my-2 py-2 bg-[#f4f4f4] text-center font-light text-sm space-x-2",children:[(0,g.jsx)(l.rU,{className:"link",to:{pathname:_===f.Hx.trade?"/mua-ban":"/cho-thue",search:h.stringify({province:z})},children:H})," ","/",(0,g.jsx)(l.rU,{className:"link",to:{pathname:_===f.Hx.trade?"/mua-ban":"/cho-thue",search:h.stringify({district:D,province:z})},children:V})," ","/",(0,g.jsx)(l.rU,{className:"link",to:{pathname:_===f.Hx.trade?"/mua-ban":"/cho-thue",search:h.stringify({province:z,ward:C,district:D})},children:M})]}),(0,g.jsxs)("div",{className:"m-5 flex flex-col space-y-5 items-center overflow-hidden",children:[(0,g.jsxs)("span",{className:"text-center",children:[(0,g.jsx)("h1",{className:"font-medium",children:J}),T&&(0,g.jsx)("b",{className:"font-medium text-red-500",children:Q})]}),(0,g.jsxs)("div",{className:"mx-auto max-w-[500px] p-2 font-sans text-justify text-base space-y-5",children:[(0,g.jsxs)("p",{children:[e("size"),": ",$,"m\xb2 (",W," x ",R,"m)"]}),_===f.Hx.trade&&(0,g.jsxs)("p",{children:[e("price")," /m\xb2: ",(0,j.pF)(q,2),"/m\xb2"]}),(0,g.jsxs)("p",{children:[e("structure"),": ",E]}),(0,g.jsxs)("p",{children:[e("architecture"),": ",F]}),(0,g.jsxs)("p",{children:[e("location"),": ",e("direction")," ",O]}),(0,g.jsx)("p",{children:B}),(0,g.jsxs)("p",{children:[e("contact_phone"),": ",L," (",K,")"]})]})]})]})}},7543:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(9466),r=n(6417);function i(){return(0,r.jsxs)("div",{className:"h-screen w-full grid place-content-center items-center space-y-5",children:[(0,r.jsxs)("div",{className:"text-xl",children:[(0,r.jsx)("b",{children:"404"})," ",(0,r.jsx)("span",{children:"Kh\xf4ng t\xecm th\u1ea5y trang"})]}),(0,r.jsx)(a.rU,{className:"text-center text-blue-500 hover:text-blue-400",to:"/",children:"Tr\u1edf v\u1ec1 trang ch\u1ee7"})]})}}}]);