"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[910],{6791:function(e,t,n){n.d(t,{r:function(){return l}});var r=n(4165),a=n(5861),s=n(9439),c=n(7313),i=n(9225);function l(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,c.useState)("idle"),l=(0,s.Z)(n,2),u=l[0],o=l[1],d=(0,c.useState)(null),f=(0,s.Z)(d,2),m=f[0],p=f[1],x=(0,c.useState)(null),h=(0,s.Z)(x,2),v=h[0],b=h[1],g="pending"===u,j="error"===u,N="error"===u||"success"===u,y=(0,c.useCallback)(function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o("pending"),p(null),b(null),t.prev=3,t.next=6,e();case 6:return a=t.sent,n&&(p(a),o("success")),t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(3),n&&(o("error"),b(t.t0));case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,i.u)((function(e){t&&y(e())}),[t]),(0,c.useEffect)((function(){return function(){o("idle"),p(null),b(null)}}),[]),{isLoading:g,isError:j,status:u,data:m,error:v,isComplete:N,execute:function(){return y(!0)}}}},9225:function(e,t,n){n.d(t,{u:function(){return a}});var r=n(7313);function a(e,t){var n=(0,r.useRef)(e);n.current=e;var a=(0,r.useRef)(!1);(0,r.useEffect)((function(){return a.current=!0,n.current((function(){return a.current})),function(){a.current=!1}}),t)}},1910:function(e,t,n){n.r(t),n.d(t,{PROJECT_NEWS_LIMIT:function(){return C},default:function(){return O}});var r=n(4165),a=n(5861),s=n(1413),c=n(9439),i=n(573),l=n(7313),u=n(5627),o=n(4511),d=n(7864),f=n(8467),m=n(2135),p=n(4021),x=n(5895),h=n(4800),v=n(8941),b=n(5884),g=n(887),j=n(5565),N=n(8469),y=n(6462),Z=n(6417),w=(0,l.memo)((function(e){var t=e.adType,n=(0,y._)(t,3,!0).data,r=(0,o.$)().t,a=t===g.Bs.news?"/danh-muc/tin-tuc":t===g.Bs.project?"/danh-muc/du-an":void 0;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("div",{className:"relative",children:[(0,Z.jsx)("div",{className:"w-fit mx-auto py-2 px-5 text-lg text-black bg-white uppercase border",children:r(g.Bs[t])}),(0,Z.jsx)("div",{className:"absolute top-1/2 left-0 -translate-y-1/2 w-full h-[0.1px] bg-gray-300 -z-[1]"})]}),(0,Z.jsx)("div",{className:"mt-5 overflow-y-auto",children:null===n||void 0===n?void 0:n.map((function(e){return(0,Z.jsx)(h.YE,{data:e},e.id)}))}),(0,Z.jsx)(m.rU,{to:a,children:(0,Z.jsxs)("button",{className:"btn px-10 mt-5 mx-auto rounded-full bg-gray-200 text-black",children:[r("see_more_news"),(0,Z.jsx)(d.mGl,{className:"text-gray-600"})]})})]})})),k=n(4942),S=n(3061),E=[{id:1,title:"price_above_2b"},{id:2,title:"price_under_2b"}],_=(0,l.memo)((function(){var e=(0,o.$)().t,t=(0,l.useState)(1),n=(0,c.Z)(t,2),r=n[0],a=n[1],u=(0,l.useState)({1:[],2:[]}),d=(0,c.Z)(u,2),f=d[0],m=d[1];return(0,l.useEffect)((function(){var e=E.map((function(e){return function(e){var t=(0,i.IO)((0,i.hJ)(j.db,"properties"),(0,i.Xo)("createdAt","desc"),(0,i.ar)("published","==",!0),(0,i.ar)("featurePinned","==",!0),(0,i.ar)("above2b","==",1===e),(0,i.b9)(60));return(0,i.cf)(t,(function(t){var n=[];t.forEach((function(e){n.push((0,s.Z)({id:e.id},e.data()))})),m((function(t){return(0,s.Z)((0,s.Z)({},t),{},(0,k.Z)({},e,n))}))}))}(e.id)}));return function(){e.forEach((function(e){return e()}))}}),[]),(0,Z.jsxs)("div",{className:"my-12 border",children:[(0,Z.jsx)("nav",{className:"flex border-b",children:E.map((function(t){return(0,Z.jsx)("button",{className:(0,S.Z)("px-6 py-3 border-b-4 border-transparent cursor-pointer hover:bg-gray-100",r===t.id&&"text-[#ff8900] border-b-[#ff8900]"),onClick:function(){var e;e=t.id,a(e)},children:e(t.title)},t.id)}))}),E.map((function(e){return(0,Z.jsx)(l.Fragment,{children:e.id===r&&(0,Z.jsx)(Z.Fragment,{children:f[e.id].map((function(e){return(0,Z.jsx)(h.eu,{data:e},e.id)}))})},e.id)}))]})})),T=n(4885);function I(e){var t,n,r=e.data,a=(0,o.$)().t,s=(0,f.s0)(),c=r.price,i=r.images,l=r.houseType,u=r.width,m=r.length,p=r.structure,x=r.districtName,h=r.architecture,v=r.slug,b=r.action,j=r.paymentImage,y=u*m;y=Number.isInteger(y)?y:y.toFixed(2);var w=b===g.Hx.trade?(0,T.pF)(1e6*c,1):"".concat(c," tri\u1ec7u/th\xe1ng"),k=(0,N.QW)(null!==(t=null===(n=i[0])||void 0===n?void 0:n.id)&&void 0!==t?t:j.id);return(0,Z.jsxs)("div",{className:"relative w-full mx-auto rounded-2xl shadow bg-white overflow-hidden",children:[(0,Z.jsxs)("div",{className:"relative",children:[(0,Z.jsx)("div",{className:"relative w-full aspect-video overflow-hidden",children:(0,Z.jsx)("img",{referrerPolicy:"no-referrer",onClick:function(){return s("/".concat(v))},className:"absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover bg-black cursor-pointer",src:k,alt:v})}),(0,Z.jsx)("div",{className:"absolute top-[100%] left-3 bg-gray-300 px-2 py-0.5 rounded text-sm  z-10 -translate-y-1/2",children:"VIP \u0111\u0103ng tin"})]}),(0,Z.jsxs)("div",{className:"p-3",children:[(0,Z.jsxs)("h1",{className:"mt-2 flex-shrink-0 font-semibold tracking-tight text-base md:text-lg lg:text-xl",children:[a(g.Hx[b])," ",a(g.tU[l])," ",x]}),(0,Z.jsxs)("h2",{className:"font-semibold tracking-tight text-base md:text-lg lg:text-xl text-orange-500",children:["Gi\xe1 ",w]}),(0,Z.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,Z.jsx)(d.ocf,{className:"text-gray-400 text-sm md:text-base"}),(0,Z.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[a("size"),": ",y,"m\xb2 (",u," x ",m,"m)"]})]}),(0,Z.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,Z.jsx)(d.iqr,{className:"text-gray-400 text-sm md:text-base"}),(0,Z.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[a("architecture"),": ",h]})]}),(0,Z.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,Z.jsx)(d.As9,{className:"text-gray-400 text-sm md:text-base"}),(0,Z.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[a("structure"),": ",p]})]})]})]})}var P=n(6791);var C=30,L={autoplay:!0,autoplaySpeed:5e3,dots:!1,fade:!0,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,arrows:!1,accessibility:!0},A=[x.EA,x.E0,x.sm,x.oN,x.Hr,x.n8];function O(){var e,t=(0,o.$)().t,n=function(){var e=(0,P.r)((function(){return t.apply(this,arguments)}));function t(){return(t=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.IO)((0,i.hJ)(j.db,"ads"),(0,i.ar)("type","==",g.Bs.advertisement),(0,i.ar)("published","==",!0),(0,i.Xo)("createdAt","desc"),(0,i.b9)(1)),e.prev=1,e.next=4,(0,i.PL)(t);case 4:if(!(n=e.sent).empty){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",(0,s.Z)({id:n.docs[0].id},n.docs[0].data()));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return e}(),y=n.data,k=(0,f.s0)(),S=(0,b.P)(),E=S.isAuth,T=S.isLoading,O=S.signIn,B=(0,l.useState)(!1),F=(0,c.Z)(B,2),J=F[0],R=F[1],X=(0,l.useState)([]),$=(0,c.Z)(X,2),z=$[0],H=$[1],U=(0,l.useState)([]),q=(0,c.Z)(U,2),M=q[0],G=q[1],Q=(0,u.cI)(),V=Q.formState.errors,W=Q.handleSubmit,K=Q.register,Y=(0,l.useMemo)((function(){return{autoplay:!0,autoplaySpeed:5e3,fade:!1,infinite:(null===z||void 0===z?void 0:z.length)>3,speed:500,slidesToShow:3,slidesToScroll:1,accessibility:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}}),[null===z||void 0===z?void 0:z.length]);(0,l.useEffect)((function(){document.title="Vialand";var e=function(){var e=(0,i.IO)((0,i.hJ)(j.db,"properties"),(0,i.Xo)("createdAt","desc"),(0,i.ar)("published","==",!0),(0,i.ar)("projectPinned","==",!0),(0,i.b9)(C));return(0,i.cf)(e,(function(e){var t=[];e.forEach((function(e){t.push((0,s.Z)({id:e.id},e.data()))})),H(t)}),(function(e){}))}();return function(){e()}}),[]),(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,i.IO)((0,i.hJ)(j.db,"banners"),(0,i.Xo)("index","asc")),n=[],e.next=5,(0,i.PL)(t);case 5:e.sent.docs.forEach((function(e){n.push((0,s.Z)({id:e.id},e.data()))})),G(n),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=null!==(e=(0,N.sK)("img",null===y||void 0===y?void 0:y.content).map((function(e){return e.src}))[0])&&void 0!==e?e:x.n8;return(0,Z.jsxs)(l.Fragment,{children:[(0,Z.jsxs)("div",{className:"container",children:[(0,Z.jsxs)(p.Z,(0,s.Z)((0,s.Z)({className:"h-[30vh] md:h-[56vh] w-full overflow-hidden"},L),{},{children:[M.map((function(e,t){return(0,Z.jsx)("div",{className:"bg-gray-50",children:(0,Z.jsx)("a",{target:"_blank",rel:"noreferrer",className:"block w-full h-[30vh] md:h-[56vh] bg-no-repeat bg-center bg-cover",href:e.url,style:{backgroundImage:"url(".concat(v.Z.common.baseApiUrl,"/public/").concat(e.picture,".webp)")},children:(0,Z.jsx)("div",{})})},t)})),A.map((function(e,t){return(0,Z.jsx)("div",{children:(0,Z.jsx)("div",{className:"w-full h-[30vh] md:h-[56vh] bg-no-repeat bg-center bg-cover",style:{backgroundImage:"url(".concat(e,")")}})},t)}))]})),(0,Z.jsxs)("div",{className:"mx-2 md:mx-0 my-12",children:[(0,Z.jsxs)("div",{className:"flex gap-2 md:gap-5 items-center",children:[!T&&!E&&(0,Z.jsx)("button",{className:"btn btn--secondary",onClick:O,children:t("sign_in")}),(0,Z.jsx)("div",{className:"flex-grow"}),(0,Z.jsx)("button",{className:"btn btn--secondary",onClick:function(){return k("/dang-tin")},children:t("post_news")}),(0,Z.jsx)("button",{className:"btn btn--secondary",onClick:function(){return R(!0)},children:t("search_by_phone")})]}),(0,Z.jsx)(p.Z,(0,s.Z)((0,s.Z)({className:"md:w-[calc(100%+2rem)] md:-left-5 mx-auto mt-5 normal-slick-arrow"},Y),{},{children:z.map((function(e){return(0,Z.jsx)("div",{className:"px-2 md:px-4",children:(0,Z.jsx)(I,{data:e},e.id)},e.id)}))}))]}),(0,Z.jsx)(m.rU,{className:"block relative w-full h-[35rem] xl:h-[40rem]",target:"_blank",rel:"noreferrer",to:"/quang-cao/"+(null===y||void 0===y?void 0:y.id)||0,children:(0,Z.jsx)("div",{className:"w-full h-full",style:{backgroundImage:"url(".concat("".concat(D),"), url(",x.n8,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:(0,Z.jsx)("div",{className:"absolute bottom-0 left-0 w-full text-white text-xl p-[20px] bg-black bg-opacity-50",children:(0,Z.jsx)("p",{className:"text-center text-base md:text-lg lg:text-xl line-clamp-2",children:(null===y||void 0===y?void 0:y.title)||t("lavender_project")})})})}),(0,Z.jsx)(_,{})]}),(0,Z.jsxs)("div",{className:"relative grid grid-cols-2 gap-10 mb-5 gap-y-12 mx-5 md:mx-10",children:[(0,Z.jsx)("div",{className:"col-span-2 lg:col-span-1",children:(0,Z.jsx)(w,{adType:g.Bs.news})}),(0,Z.jsx)("div",{className:"col-span-2 lg:col-span-1",children:(0,Z.jsx)(w,{adType:g.Bs.project})})]}),(0,Z.jsx)(h.u_,{closeOnClickOutside:!0,open:J,title:t("search_by_phone"),onClose:function(){return R(!1)},children:(0,Z.jsxs)("form",{className:"space-y-5",onSubmit:W((function(e){var t=e.phoneNumber;k("/tim-kiem?phoneNumber="+t.trim())})),children:[(0,Z.jsx)(h.cw,{label:t("phone_number"),htmlFor:"phoneNumber",error:V.phoneNumber,children:(0,Z.jsx)("input",(0,s.Z)((0,s.Z)({},K("phoneNumber",{required:!0,pattern:/^[0-9]*$/,minLength:10})),{},{maxLength:12,placeholder:"0911xxxxxx",className:"input",type:"text"}))}),(0,Z.jsx)("div",{className:"flex justify-end",children:(0,Z.jsxs)("button",{className:"btn",type:"submit",onClick:function(){},children:[(0,Z.jsx)(d.RB5,{}),(0,Z.jsx)("span",{children:t("search")})]})})]})})]})}},6462:function(e,t,n){n.d(t,{_:function(){return v}});var r=n(4165),a=n(3433),s=n(1413),c=n(5861),i=n(4925),l=n(9439),u=n(573),o=n(7313),d=n(8467),f=n(8576),m=n(6791),p=n(1754),x=n(5565),h=["execute"],v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],v=(0,d.TH)(),b=v.pathname,g=(0,o.useRef)(void 0),j=(0,f.y)(),N=j.set,y=j.get,Z=(0,o.useState)([]),w=(0,l.Z)(Z,2),k=w[0],S=w[1],E=(0,m.r)(F,!1),_=E.execute,T=(0,i.Z)(E,h),I=(0,o.useState)(void 0),P=(0,l.Z)(I,2),C=P[0],L=P[1],A=function(){S([]),L(void 0)};function O(){return B.apply(this,arguments)}function B(){return(B=(0,c.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:(t=e.sent)&&S((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(t))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function F(){return J.apply(this,arguments)}function J(){return(J=(0,c.Z)((0,r.Z)().mark((function n(){var c,i,l,o,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=[],i=[],n.prev=2,C&&i.push((0,u.TQ)(C)),l=u.IO.apply(void 0,[(0,u.hJ)(x.db,"ads"),(0,u.Xo)("createdAt","desc")].concat(i,[(0,u.ar)("type","==",e),(0,u.b9)(t)])),n.next=7,(0,u.PL)(l);case 7:return(o=n.sent).docs.forEach((function(e){c.push((0,s.Z)({id:e.id},e.data()))})),d=o.docs[o.docs.length-1],L(d),g.current={data:[].concat((0,a.Z)(k),c),cursor:d},n.abrupt("return",c);case 15:return n.prev=15,n.t0=n.catch(2),n.abrupt("return",[]);case 18:case"end":return n.stop()}}),n,null,[[2,15]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){var e=y(b);if(e){var t=e.data,n=e.cursor;return g.current={data:t,cursor:n},S(t),void L(n)}O()}),[]),(0,o.useEffect)((function(){return function(){A()}}),[b]),(0,o.useEffect)((function(){var e=y(b);k&&void 0!=(null===e||void 0===e?void 0:e.scrollPos)&&document.scrollingElement.scroll({top:e.scrollPos,left:0,behavior:"instant"});var t=setTimeout((function(){e&&void 0!=e.scrollPos&&N(b,(0,s.Z)((0,s.Z)({},e),{},{scrollPos:void 0}))}),0);return function(){clearTimeout(t)}}),[k]),(0,p.Z)((function(){return function(){!n&&g.current&&N(b,(0,s.Z)((0,s.Z)({},g.current),{},{scrollPos:document.scrollingElement.scrollTop}))}}),[b]),(0,s.Z)((0,s.Z)({},T),{},{data:k,canLoadMore:!!C,cursor:C,load:O})}}}]);