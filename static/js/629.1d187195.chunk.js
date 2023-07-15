"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[629],{6791:function(e,t,n){n.d(t,{r:function(){return l}});var r=n(4165),a=n(5861),s=n(9439),c=n(7313),i=n(9225);function l(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,c.useState)("idle"),l=(0,s.Z)(n,2),o=l[0],u=l[1],d=(0,c.useState)(null),f=(0,s.Z)(d,2),p=f[0],m=f[1],h=(0,c.useState)(null),x=(0,s.Z)(h,2),v=x[0],b=x[1],g="pending"===o,j="error"===o,y=(0,c.useCallback)(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u("pending"),m(null),b(null),t.prev=3,t.next=6,e();case 6:return a=t.sent,n&&(m(a),u("success")),t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(3),n&&(u("error"),b(t.t0));case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,i.u)((function(e){t&&y(e())}),[t]),(0,c.useEffect)((function(){return function(){u("idle"),m(null),b(null)}}),[]),{isLoading:g,isError:j,status:o,data:p,error:v,execute:function(){return y(!0)}}}},9225:function(e,t,n){n.d(t,{u:function(){return a}});var r=n(7313);function a(e,t){var n=(0,r.useRef)(e);n.current=e;var a=(0,r.useRef)(!1);(0,r.useEffect)((function(){return a.current=!0,n.current((function(){return a.current})),function(){a.current=!1}}),t)}},6243:function(e,t,n){n.d(t,{db:function(){return g}});var r=n(271),a=n(995),s=n(573),c=n(6797),i=n(8941),l=i.Z.firebase,o=l.apiKey,u=l.appId,d=l.databaseURL,f=l.projectId,p=l.storageBucket,m=l.authDomain,h=l.messagingSenderId,x=i.Z.google.recaptchaSiteKey,v={apiKey:o,authDomain:m,databaseURL:d,projectId:f,storageBucket:p,messagingSenderId:h,appId:u},b=(0,r.ZF)(v),g=(0,s.ad)(b);(0,c.cF)(b),(0,a.yu)(b,{provider:new a.z9(x),isTokenAutoRefreshEnabled:!0})},5629:function(e,t,n){n.r(t),n.d(t,{PROJECT_NEWS_LIMIT:function(){return E},default:function(){return _}});var r=n(4165),a=n(5861),s=n(1413),c=n(9439),i=n(573),l=n(7313),o=n(5627),u=n(4511),d=n(7864),f=n(9466),p=n(7890),m=n(4021),h=n(7265),x=n(753),v=n(8941),b=n(887),g=n(6243),j=n(8469),y=n(6462),N=n(6417),w=(0,l.memo)((function(e){var t=e.adType,n=(0,y._)(t,3,!0).data,r=(0,u.$)().t,a=t===b.Bs.news?"/danh-muc/tin-tuc":t===b.Bs.project?"/danh-muc/du-an":void 0;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"relative",children:[(0,N.jsx)("div",{className:"w-fit mx-auto py-2 px-5 text-lg text-black bg-white uppercase border",children:r(b.Bs[t])}),(0,N.jsx)("div",{className:"absolute top-1/2 left-0 -translate-y-1/2 w-full h-[0.1px] bg-gray-300 -z-[1]"})]}),(0,N.jsx)("div",{className:"mt-5 overflow-y-auto",children:null===n||void 0===n?void 0:n.map((function(e){return(0,N.jsx)(x.YE,{data:e},e.id)}))}),(0,N.jsx)(f.rU,{to:a,children:(0,N.jsxs)("button",{className:"btn px-10 mt-5 mx-auto rounded-full bg-gray-200 text-black",children:[r("see_more_news"),(0,N.jsx)(d.mGl,{className:"text-gray-600"})]})})]})})),Z=n(4885);function k(e){var t,n=e.data,r=(0,u.$)().t,a=(0,p.s0)(),s=n.price,c=n.images,i=n.houseType,l=n.width,o=n.length,f=n.structure,m=n.districtName,x=n.architecture,v=n.slug,g=n.action,j=l*o;j=Number.isInteger(j)?j:j.toFixed(2);var y=g===b.Hx.trade?(0,Z.pF)(1e6*s,1):"".concat(s," tri\u1ec7u/th\xe1ng"),w=c[0]?"https://lh3.googleusercontent.com/d/".concat(null===(t=c[0])||void 0===t?void 0:t.id):h.l_;return(0,N.jsxs)("div",{className:"relative w-full mx-auto rounded-2xl shadow bg-white overflow-hidden",children:[(0,N.jsxs)("div",{className:"relative",children:[(0,N.jsx)("div",{className:"relative w-full aspect-video overflow-hidden",children:(0,N.jsx)("img",{referrerPolicy:"no-referrer",onClick:function(){return a("/".concat(v))},className:"absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover bg-black cursor-pointer",src:w,onError:function(e){e.currentTarget.src=h.l_,e.currentTarget.onerror=null},alt:v})}),(0,N.jsx)("div",{className:"absolute top-[100%] left-3 bg-gray-300 px-2 py-0.5 rounded text-sm  z-10 -translate-y-1/2",children:"VIP \u0111\u0103ng tin"})]}),(0,N.jsxs)("div",{className:"p-3",children:[(0,N.jsxs)("h1",{className:"font-semibold tracking-tight text-base md:text-lg lg:text-xl text-orange-500 mt-2",children:["Gi\xe1 t\u1eeb ",y]}),(0,N.jsxs)("h2",{className:"font-semibold tracking-tight text-base md:text-lg lg:text-xl truncate",children:[r(b.tU[i])," ",m]}),(0,N.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,N.jsx)(d.ocf,{className:"text-gray-400 text-sm md:text-base"}),(0,N.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[r("size"),": ",j,"m\xb2 (",l," x ",o,"m)"]})]}),(0,N.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,N.jsx)(d.iqr,{className:"text-gray-400 text-sm md:text-base"}),(0,N.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[r("architecture"),": ",x]})]}),(0,N.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,N.jsx)(d.As9,{className:"text-gray-400 text-sm md:text-base"}),(0,N.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[r("structure"),": ",f]})]})]})]})}var S=n(6791);var E=15,I={autoplay:!0,autoplaySpeed:5e3,dots:!1,fade:!0,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,arrows:!1,accessibility:!0},T=[h.EA,h.E0,h.sm,h.oN,h.Hr,h.n8];function _(){var e,t=(0,u.$)().t,n=function(){var e=(0,S.r)((function(){return t.apply(this,arguments)}));function t(){return(t=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.IO)((0,i.hJ)(g.db,"ads"),(0,i.ar)("type","==",b.Bs.advertisement),(0,i.ar)("published","==",!0),(0,i.Xo)("createdAt","desc"),(0,i.b9)(1)),e.prev=1,e.next=4,(0,i.PL)(t);case 4:if(!(n=e.sent).empty){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",(0,s.Z)({id:n.docs[0].id},n.docs[0].data()));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return e}(),y=n.data,Z=(0,p.s0)(),_=(0,l.useState)(!1),P=(0,c.Z)(_,2),L=P[0],A=P[1],B=(0,l.useState)([]),C=(0,c.Z)(B,2),O=C[0],R=C[1],F=(0,l.useState)([]),J=(0,c.Z)(F,2),U=J[0],X=J[1],z=(0,l.useState)([]),K=(0,c.Z)(z,2),$=K[0],q=K[1],H=(0,l.useState)([]),M=(0,c.Z)(H,2),D=M[0],G=M[1],V=(0,o.cI)(),Q=V.formState.errors,W=V.handleSubmit,Y=V.register,ee=(0,l.useMemo)((function(){return{autoplay:!0,autoplaySpeed:5e3,fade:!1,infinite:(null===O||void 0===O?void 0:O.length)>3,speed:500,slidesToShow:3,slidesToScroll:1,accessibility:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}}),[null===O||void 0===O?void 0:O.length]),te=function(){var e=(0,i.IO)((0,i.hJ)(g.db,"properties"),(0,i.Xo)("createdAt","desc"),(0,i.ar)("published","==",!0),(0,i.ar)("featurePinned","==",!0),(0,i.b9)(15));return(0,i.cf)(e,(function(e){var t=[];e.forEach((function(e){t.push((0,s.Z)({id:e.id},e.data()))})),q(t)}),(function(e){}))},ne=function(){var e=(0,i.IO)((0,i.hJ)(g.db,"properties"),(0,i.Xo)("createdAt","desc"),(0,i.ar)("published","==",!0),(0,i.ar)("featurePinned","==",!1),(0,i.ar)("projectPinned","==",!1),(0,i.b9)(15));return(0,i.cf)(e,(function(e){var t=[];e.forEach((function(e){t.push((0,s.Z)({id:e.id},e.data()))})),G(t)}),(function(e){}))},re=function(){var e=(0,i.IO)((0,i.hJ)(g.db,"properties"),(0,i.Xo)("createdAt","desc"),(0,i.ar)("published","==",!0),(0,i.ar)("projectPinned","==",!0),(0,i.b9)(E));return(0,i.cf)(e,(function(e){var t=[];e.forEach((function(e){t.push((0,s.Z)({id:e.id},e.data()))})),R(t)}),(function(e){}))};(0,l.useEffect)((function(){document.title="Vialand";var e=[te(),ne(),re()];return function(){e.forEach((function(e){return e()}))}}),[]),(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,i.IO)((0,i.hJ)(g.db,"banners"),(0,i.Xo)("index","asc")),n=[],e.next=5,(0,i.PL)(t);case 5:e.sent.docs.forEach((function(e){n.push((0,s.Z)({id:e.id},e.data()))})),X(n),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var ae=null!==(e=(0,j.sK)("img",null===y||void 0===y?void 0:y.content).map((function(e){return e.src}))[0])&&void 0!==e?e:h.n8;return(0,N.jsxs)(l.Fragment,{children:[(0,N.jsxs)(m.Z,(0,s.Z)((0,s.Z)({className:"h-[30vh] md:h-[56vh] w-full overflow-hidden"},I),{},{children:[U.map((function(e,t){return(0,N.jsx)("div",{className:"bg-gray-50",children:(0,N.jsx)("a",{target:"_blank",rel:"noreferrer",className:"block w-full h-[30vh] md:h-[56vh] bg-no-repeat bg-center bg-cover",href:e.url,style:{backgroundImage:"url(".concat(v.Z.common.baseApiUrl,"/public/").concat(e.picture,".webp)")},children:(0,N.jsx)("div",{})})},t)})),T.map((function(e,t){return(0,N.jsx)("div",{children:(0,N.jsx)("div",{className:"w-full h-[30vh] md:h-[56vh] bg-no-repeat bg-center bg-cover",style:{backgroundImage:"url(".concat(e,")")}})},t)}))]})),(0,N.jsxs)("div",{className:"mx-2 md:mx-10",children:[(0,N.jsxs)("div",{className:"my-12",children:[(0,N.jsxs)("div",{className:"flex gap-2 md:gap-5 items-center",children:[(0,N.jsx)("h1",{className:"font-bold text-sm md:text-xl",children:t("real_estate_project")}),(0,N.jsx)("div",{className:"flex-grow"}),(0,N.jsx)(f.rU,{to:"/dang-tin",children:(0,N.jsx)("button",{className:"btn btn--secondary",children:t("post_news")})}),(0,N.jsx)("button",{className:"btn btn--secondary",onClick:function(){return A(!0)},children:t("search_by_phone")})]}),(0,N.jsx)(m.Z,(0,s.Z)((0,s.Z)({className:"md:w-[calc(100%+2rem)] md:-left-5 mx-auto mt-5 normal-slick-arrow"},ee),{},{children:O.map((function(e){return(0,N.jsx)("div",{className:"px-2 md:px-4",children:(0,N.jsx)(k,{data:e},e.id)},e.id)}))}))]}),(0,N.jsxs)("div",{className:"flex flex-col xl:flex-row gap-16 my-12",children:[(0,N.jsx)(f.rU,{className:"block relative max-w-[80vh] w-full h-[59vh] mx-auto",target:"_blank",rel:"noreferrer",to:"/quang-cao/"+(null===y||void 0===y?void 0:y.id)||0,children:(0,N.jsx)("div",{className:"w-full h-full",style:{backgroundImage:"url(".concat("".concat(ae),"), url(",h.n8,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:(0,N.jsx)("div",{className:"absolute bottom-0 left-0 w-full text-white text-xl p-[20px] bg-black bg-opacity-50",children:(0,N.jsx)("p",{className:"text-center text-base md:text-lg lg:text-xl line-clamp-2",children:(null===y||void 0===y?void 0:y.title)||t("lavender_project")})})})}),(0,N.jsx)("div",{className:"flex-1 w-full xl:w-2/3 h-auto xl:h-[59vh] overflow-y-auto",children:$.concat(D).map((function(e){return(0,N.jsx)(x.eu,{data:e},e.id)}))})]}),(0,N.jsxs)("div",{className:"relative grid grid-cols-2 gap-5 mb-5 gap-y-12",children:[(0,N.jsx)("div",{className:"col-span-2 lg:col-span-1",children:(0,N.jsx)(w,{adType:b.Bs.news})}),(0,N.jsx)("div",{className:"col-span-2 lg:col-span-1",children:(0,N.jsx)(w,{adType:b.Bs.project})})]})]}),(0,N.jsx)(x.u_,{closeOnClickOutside:!0,open:L,title:t("search_by_phone"),onClose:function(){return A(!1)},children:(0,N.jsxs)("form",{className:"space-y-5",onSubmit:W((function(e){var t=e.phoneNumber;Z("/tim-kiem?phoneNumber="+t.trim())})),children:[(0,N.jsx)(x.cw,{label:t("phone_number"),htmlFor:"phoneNumber",error:Q.phoneNumber,children:(0,N.jsx)("input",(0,s.Z)((0,s.Z)({},Y("phoneNumber",{required:!0,pattern:/^[0-9]*$/,minLength:10})),{},{maxLength:12,placeholder:"0911xxxxxx",className:"input",type:"text"}))}),(0,N.jsx)("div",{className:"flex justify-end",children:(0,N.jsxs)("button",{className:"btn",type:"submit",onClick:function(){},children:[(0,N.jsx)(d.RB5,{}),(0,N.jsx)("span",{children:t("search")})]})})]})})]})}},6462:function(e,t,n){n.d(t,{_:function(){return v}});var r=n(4165),a=n(3433),s=n(1413),c=n(5861),i=n(4925),l=n(9439),o=n(573),u=n(7313),d=n(7890),f=n(8576),p=n(6791),m=n(1754),h=n(6243),x=["execute"],v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],v=(0,d.TH)(),b=v.pathname,g=(0,u.useRef)(void 0),j=(0,f.y)(),y=j.set,N=j.get,w=(0,u.useState)([]),Z=(0,l.Z)(w,2),k=Z[0],S=Z[1],E=(0,p.r)(R,!1),I=E.execute,T=(0,i.Z)(E,x),_=(0,u.useState)(void 0),P=(0,l.Z)(_,2),L=P[0],A=P[1],B=function(){S([]),A(void 0)};function C(){return O.apply(this,arguments)}function O(){return(O=(0,c.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:(t=e.sent)&&S((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(t))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function R(){return F.apply(this,arguments)}function F(){return(F=(0,c.Z)((0,r.Z)().mark((function n(){var c,i,l,u,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=[],i=[],n.prev=2,L&&i.push((0,o.TQ)(L)),l=o.IO.apply(void 0,[(0,o.hJ)(h.db,"ads"),(0,o.Xo)("createdAt","desc")].concat(i,[(0,o.ar)("type","==",e),(0,o.b9)(t)])),n.next=7,(0,o.PL)(l);case 7:return(u=n.sent).docs.forEach((function(e){c.push((0,s.Z)({id:e.id},e.data()))})),d=u.docs[u.docs.length-1],A(d),g.current={data:[].concat((0,a.Z)(k),c),cursor:d},n.abrupt("return",c);case 15:return n.prev=15,n.t0=n.catch(2),n.abrupt("return",[]);case 18:case"end":return n.stop()}}),n,null,[[2,15]])})))).apply(this,arguments)}return(0,u.useEffect)((function(){var e=N(b);if(e){var t=e.data,n=e.cursor;return g.current={data:t,cursor:n},S(t),void A(n)}C()}),[]),(0,u.useEffect)((function(){return function(){B()}}),[b]),(0,u.useEffect)((function(){var e=N(b);k&&void 0!=(null===e||void 0===e?void 0:e.scrollPos)&&document.scrollingElement.scroll({top:e.scrollPos,left:0,behavior:"instant"});var t=setTimeout((function(){e&&void 0!=e.scrollPos&&y(b,(0,s.Z)((0,s.Z)({},e),{},{scrollPos:void 0}))}),0);return function(){clearTimeout(t)}}),[k]),(0,m.Z)((function(){return function(){!n&&g.current&&y(b,(0,s.Z)((0,s.Z)({},g.current),{},{scrollPos:document.scrollingElement.scrollTop}))}}),[b]),(0,s.Z)((0,s.Z)({},T),{},{data:k,canLoadMore:!!L,cursor:L,load:C})}}}]);