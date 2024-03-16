"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[629],{6791:function(e,t,n){n.d(t,{r:function(){return l}});var r=n(4165),s=n(5861),a=n(9439),c=n(7313),i=n(9225);function l(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,c.useState)("idle"),l=(0,a.Z)(n,2),u=l[0],o=l[1],d=(0,c.useState)(null),f=(0,a.Z)(d,2),m=f[0],p=f[1],h=(0,c.useState)(null),x=(0,a.Z)(h,2),v=x[0],b=x[1],g="pending"===u,j="error"===u,N="error"===u||"success"===u,y=(0,c.useCallback)(function(){var t=(0,s.Z)((0,r.Z)().mark((function t(n){var s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o("pending"),p(null),b(null),t.prev=3,t.next=6,e();case 6:return s=t.sent,n&&(p(s),o("success")),t.abrupt("return",s);case 11:t.prev=11,t.t0=t.catch(3),n&&(o("error"),b(t.t0));case 14:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,i.u)((function(e){t&&y(e())}),[t]),(0,c.useEffect)((function(){return function(){o("idle"),p(null),b(null)}}),[]),{isLoading:g,isError:j,status:u,data:m,error:v,isComplete:N,execute:function(){return y(!0)}}}},9225:function(e,t,n){n.d(t,{u:function(){return s}});var r=n(7313);function s(e,t){var n=(0,r.useRef)(e);n.current=e;var s=(0,r.useRef)(!1);(0,r.useEffect)((function(){return s.current=!0,n.current((function(){return s.current})),function(){s.current=!1}}),t)}},5629:function(e,t,n){n.r(t),n.d(t,{PROJECT_NEWS_LIMIT:function(){return T},default:function(){return I}});var r=n(4165),s=n(5861),a=n(1413),c=n(9439),i=n(573),l=n(7313),u=n(5627),o=n(4511),d=n(7864),f=n(8467),m=n(2135),p=n(4021),h=n(5895),x=n(1110),v=n(8941),b=n(5884),g=n(887),j=n(5565),N=n(8469),y=n(6462),w=n(6417),Z=(0,l.memo)((function(e){var t=e.adType,n=(0,y._)(t,3,!0).data,r=(0,o.$)().t,s=t===g.Bs.news?"/danh-muc/tin-tuc":t===g.Bs.project?"/danh-muc/du-an":void 0;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"relative",children:[(0,w.jsx)("div",{className:"w-fit mx-auto py-2 px-5 text-lg text-black bg-white uppercase border",children:r(g.Bs[t])}),(0,w.jsx)("div",{className:"absolute top-1/2 left-0 -translate-y-1/2 w-full h-[0.1px] bg-gray-300 -z-[1]"})]}),(0,w.jsx)("div",{className:"mt-5 overflow-y-auto",children:null===n||void 0===n?void 0:n.map((function(e){return(0,w.jsx)(x.YE,{data:e},e.id)}))}),(0,w.jsx)(m.rU,{to:s,children:(0,w.jsxs)("button",{className:"btn px-10 mt-5 mx-auto rounded-full bg-gray-200 text-black",children:[r("see_more_news"),(0,w.jsx)(d.mGl,{className:"text-gray-600"})]})})]})})),k=n(4885);function S(e){var t,n=e.data,r=(0,o.$)().t,s=(0,f.s0)(),a=n.price,c=n.images,i=n.houseType,l=n.width,u=n.length,m=n.structure,p=n.districtName,x=n.architecture,v=n.slug,b=n.action,j=l*u;j=Number.isInteger(j)?j:j.toFixed(2);var y=b===g.Hx.trade?(0,k.pF)(1e6*a,1):"".concat(a," tri\u1ec7u/th\xe1ng"),Z=c[0]?(0,N.QW)(null===(t=c[0])||void 0===t?void 0:t.id):h.l_;return(0,w.jsxs)("div",{className:"relative w-full mx-auto rounded-2xl shadow bg-white overflow-hidden",children:[(0,w.jsxs)("div",{className:"relative",children:[(0,w.jsx)("div",{className:"relative w-full aspect-video overflow-hidden",children:(0,w.jsx)("img",{referrerPolicy:"no-referrer",onClick:function(){return s("/".concat(v))},className:"absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover bg-black cursor-pointer",src:Z,onError:function(e){e.currentTarget.src=h.l_,e.currentTarget.onerror=null},alt:v})}),(0,w.jsx)("div",{className:"absolute top-[100%] left-3 bg-gray-300 px-2 py-0.5 rounded text-sm  z-10 -translate-y-1/2",children:"VIP \u0111\u0103ng tin"})]}),(0,w.jsxs)("div",{className:"p-3",children:[(0,w.jsxs)("h1",{className:"mt-2 flex-shrink-0 font-semibold tracking-tight text-base md:text-lg lg:text-xl",children:[r(g.Hx[b])," ",r(g.tU[i])," ",p]}),(0,w.jsxs)("h2",{className:"font-semibold tracking-tight text-base md:text-lg lg:text-xl text-orange-500",children:["Gi\xe1 ",y]}),(0,w.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,w.jsx)(d.ocf,{className:"text-gray-400 text-sm md:text-base"}),(0,w.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[r("size"),": ",j,"m\xb2 (",l," x ",u,"m)"]})]}),(0,w.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,w.jsx)(d.iqr,{className:"text-gray-400 text-sm md:text-base"}),(0,w.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[r("architecture"),": ",x]})]}),(0,w.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,w.jsx)(d.As9,{className:"text-gray-400 text-sm md:text-base"}),(0,w.jsxs)("span",{className:"text-sm md:text-base font-medium w-full truncate",children:[r("structure"),": ",m]})]})]})]})}var E=n(6791);var T=30,_={autoplay:!0,autoplaySpeed:5e3,dots:!1,fade:!0,infinite:!0,speed:300,slidesToShow:1,slidesToScroll:1,arrows:!1,accessibility:!0},P=[h.EA,h.E0,h.sm,h.oN,h.Hr,h.n8];function I(){var e,t=(0,o.$)().t,n=function(){var e=(0,E.r)((function(){return t.apply(this,arguments)}));function t(){return(t=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.IO)((0,i.hJ)(j.db,"ads"),(0,i.ar)("type","==",g.Bs.advertisement),(0,i.ar)("published","==",!0),(0,i.Xo)("createdAt","desc"),(0,i.b9)(1)),e.prev=1,e.next=4,(0,i.PL)(t);case 4:if(!(n=e.sent).empty){e.next=7;break}return e.abrupt("return",null);case 7:return e.abrupt("return",(0,a.Z)({id:n.docs[0].id},n.docs[0].data()));case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return e}(),y=n.data,k=(0,f.s0)(),I=(0,b.P)(),C=I.isAuth,A=I.isLoading,L=I.signIn,O=(0,l.useState)(!1),B=(0,c.Z)(O,2),J=B[0],R=B[1],X=(0,l.useState)([]),F=(0,c.Z)(X,2),z=F[0],H=F[1],U=(0,l.useState)([]),$=(0,c.Z)(U,2),q=$[0],M=$[1],G=(0,l.useState)([]),Q=(0,c.Z)(G,2),V=Q[0],W=Q[1],K=(0,l.useState)([]),Y=(0,c.Z)(K,2),D=Y[0],ee=Y[1],te=(0,u.cI)(),ne=te.formState.errors,re=te.handleSubmit,se=te.register,ae=(0,l.useMemo)((function(){return{autoplay:!0,autoplaySpeed:5e3,fade:!1,infinite:(null===z||void 0===z?void 0:z.length)>3,speed:500,slidesToShow:3,slidesToScroll:1,accessibility:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}}),[null===z||void 0===z?void 0:z.length]),ce=function(){var e=(0,i.IO)((0,i.hJ)(j.db,"properties"),(0,i.Xo)("createdAt","desc"),(0,i.ar)("published","==",!0),(0,i.ar)("featurePinned","==",!0),(0,i.b9)(60));return(0,i.cf)(e,(function(e){var t=[];e.forEach((function(e){t.push((0,a.Z)({id:e.id},e.data()))})),W(t)}),(function(e){}))},ie=function(){var e=(0,i.IO)((0,i.hJ)(j.db,"properties"),(0,i.Xo)("createdAt","desc"),(0,i.ar)("published","==",!0),(0,i.ar)("featurePinned","==",!1),(0,i.ar)("projectPinned","==",!1),(0,i.b9)(60));return(0,i.cf)(e,(function(e){var t=[];e.forEach((function(e){t.push((0,a.Z)({id:e.id},e.data()))})),ee(t)}),(function(e){}))},le=function(){var e=(0,i.IO)((0,i.hJ)(j.db,"properties"),(0,i.Xo)("createdAt","desc"),(0,i.ar)("published","==",!0),(0,i.ar)("projectPinned","==",!0),(0,i.b9)(T));return(0,i.cf)(e,(function(e){var t=[];e.forEach((function(e){t.push((0,a.Z)({id:e.id},e.data()))})),H(t)}),(function(e){}))};(0,l.useEffect)((function(){document.title="Vialand";var e=[ce(),ie(),le()];return function(){e.forEach((function(e){return e()}))}}),[]),(0,l.useEffect)((function(){function e(){return(e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=(0,i.IO)((0,i.hJ)(j.db,"banners"),(0,i.Xo)("index","asc")),n=[],e.next=5,(0,i.PL)(t);case 5:e.sent.docs.forEach((function(e){n.push((0,a.Z)({id:e.id},e.data()))})),M(n),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var ue=null!==(e=(0,N.sK)("img",null===y||void 0===y?void 0:y.content).map((function(e){return e.src}))[0])&&void 0!==e?e:h.n8;return(0,w.jsxs)(l.Fragment,{children:[(0,w.jsxs)("div",{className:"container",children:[(0,w.jsxs)(p.Z,(0,a.Z)((0,a.Z)({className:"h-[30vh] md:h-[56vh] w-full overflow-hidden"},_),{},{children:[q.map((function(e,t){return(0,w.jsx)("div",{className:"bg-gray-50",children:(0,w.jsx)("a",{target:"_blank",rel:"noreferrer",className:"block w-full h-[30vh] md:h-[56vh] bg-no-repeat bg-center bg-cover",href:e.url,style:{backgroundImage:"url(".concat(v.Z.common.baseApiUrl,"/public/").concat(e.picture,".webp)")},children:(0,w.jsx)("div",{})})},t)})),P.map((function(e,t){return(0,w.jsx)("div",{children:(0,w.jsx)("div",{className:"w-full h-[30vh] md:h-[56vh] bg-no-repeat bg-center bg-cover",style:{backgroundImage:"url(".concat(e,")")}})},t)}))]})),(0,w.jsxs)("div",{className:"mx-2 md:mx-0",children:[(0,w.jsxs)("div",{className:"my-12",children:[(0,w.jsxs)("div",{className:"flex gap-2 md:gap-5 items-center",children:[!A&&!C&&(0,w.jsx)("button",{className:"btn btn--secondary",onClick:L,children:t("sign_in")}),(0,w.jsx)("div",{className:"flex-grow"}),(0,w.jsx)("button",{className:"btn btn--secondary",onClick:function(){return k("/dang-tin")},children:t("post_news")}),(0,w.jsx)("button",{className:"btn btn--secondary",onClick:function(){return R(!0)},children:t("search_by_phone")})]}),(0,w.jsx)(p.Z,(0,a.Z)((0,a.Z)({className:"md:w-[calc(100%+2rem)] md:-left-5 mx-auto mt-5 normal-slick-arrow"},ae),{},{children:z.map((function(e){return(0,w.jsx)("div",{className:"px-2 md:px-4",children:(0,w.jsx)(S,{data:e},e.id)},e.id)}))}))]}),(0,w.jsx)(m.rU,{className:"block relative w-full h-[35rem] xl:h-[40rem]",target:"_blank",rel:"noreferrer",to:"/quang-cao/"+(null===y||void 0===y?void 0:y.id)||0,children:(0,w.jsx)("div",{className:"w-full h-full",style:{backgroundImage:"url(".concat("".concat(ue),"), url(",h.n8,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:(0,w.jsx)("div",{className:"absolute bottom-0 left-0 w-full text-white text-xl p-[20px] bg-black bg-opacity-50",children:(0,w.jsx)("p",{className:"text-center text-base md:text-lg lg:text-xl line-clamp-2",children:(null===y||void 0===y?void 0:y.title)||t("lavender_project")})})})}),(0,w.jsx)("div",{className:"my-10 w-full h-[40rem] overflow-y-auto",children:V.concat(D).map((function(e){return(0,w.jsx)(x.eu,{data:e},e.id)}))})]})]}),(0,w.jsxs)("div",{className:"relative grid grid-cols-2 gap-5 mb-5 gap-y-12 mx-2 md:mx-10",children:[(0,w.jsx)("div",{className:"col-span-2 lg:col-span-1",children:(0,w.jsx)(Z,{adType:g.Bs.news})}),(0,w.jsx)("div",{className:"col-span-2 lg:col-span-1",children:(0,w.jsx)(Z,{adType:g.Bs.project})})]}),(0,w.jsx)(x.u_,{closeOnClickOutside:!0,open:J,title:t("search_by_phone"),onClose:function(){return R(!1)},children:(0,w.jsxs)("form",{className:"space-y-5",onSubmit:re((function(e){var t=e.phoneNumber;k("/tim-kiem?phoneNumber="+t.trim())})),children:[(0,w.jsx)(x.cw,{label:t("phone_number"),htmlFor:"phoneNumber",error:ne.phoneNumber,children:(0,w.jsx)("input",(0,a.Z)((0,a.Z)({},se("phoneNumber",{required:!0,pattern:/^[0-9]*$/,minLength:10})),{},{maxLength:12,placeholder:"0911xxxxxx",className:"input",type:"text"}))}),(0,w.jsx)("div",{className:"flex justify-end",children:(0,w.jsxs)("button",{className:"btn",type:"submit",onClick:function(){},children:[(0,w.jsx)(d.RB5,{}),(0,w.jsx)("span",{children:t("search")})]})})]})})]})}},6462:function(e,t,n){n.d(t,{_:function(){return v}});var r=n(4165),s=n(3433),a=n(1413),c=n(5861),i=n(4925),l=n(9439),u=n(573),o=n(7313),d=n(8467),f=n(8576),m=n(6791),p=n(1754),h=n(5565),x=["execute"],v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],v=(0,d.TH)(),b=v.pathname,g=(0,o.useRef)(void 0),j=(0,f.y)(),N=j.set,y=j.get,w=(0,o.useState)([]),Z=(0,l.Z)(w,2),k=Z[0],S=Z[1],E=(0,m.r)(J,!1),T=E.execute,_=(0,i.Z)(E,x),P=(0,o.useState)(void 0),I=(0,l.Z)(P,2),C=I[0],A=I[1],L=function(){S([]),A(void 0)};function O(){return B.apply(this,arguments)}function B(){return(B=(0,c.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:(t=e.sent)&&S((function(e){return[].concat((0,s.Z)(e),(0,s.Z)(t))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function J(){return R.apply(this,arguments)}function R(){return(R=(0,c.Z)((0,r.Z)().mark((function n(){var c,i,l,o,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=[],i=[],n.prev=2,C&&i.push((0,u.TQ)(C)),l=u.IO.apply(void 0,[(0,u.hJ)(h.db,"ads"),(0,u.Xo)("createdAt","desc")].concat(i,[(0,u.ar)("type","==",e),(0,u.b9)(t)])),n.next=7,(0,u.PL)(l);case 7:return(o=n.sent).docs.forEach((function(e){c.push((0,a.Z)({id:e.id},e.data()))})),d=o.docs[o.docs.length-1],A(d),g.current={data:[].concat((0,s.Z)(k),c),cursor:d},n.abrupt("return",c);case 15:return n.prev=15,n.t0=n.catch(2),n.abrupt("return",[]);case 18:case"end":return n.stop()}}),n,null,[[2,15]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){var e=y(b);if(e){var t=e.data,n=e.cursor;return g.current={data:t,cursor:n},S(t),void A(n)}O()}),[]),(0,o.useEffect)((function(){return function(){L()}}),[b]),(0,o.useEffect)((function(){var e=y(b);k&&void 0!=(null===e||void 0===e?void 0:e.scrollPos)&&document.scrollingElement.scroll({top:e.scrollPos,left:0,behavior:"instant"});var t=setTimeout((function(){e&&void 0!=e.scrollPos&&N(b,(0,a.Z)((0,a.Z)({},e),{},{scrollPos:void 0}))}),0);return function(){clearTimeout(t)}}),[k]),(0,p.Z)((function(){return function(){!n&&g.current&&N(b,(0,a.Z)((0,a.Z)({},g.current),{},{scrollPos:document.scrollingElement.scrollTop}))}}),[b]),(0,a.Z)((0,a.Z)({},_),{},{data:k,canLoadMore:!!C,cursor:C,load:O})}}}]);