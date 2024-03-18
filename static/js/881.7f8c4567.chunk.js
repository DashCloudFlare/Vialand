"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[881],{4396:function(e,t,n){n.d(t,{pM:function(){return r},uq:function(){return a},aq:function(){return f}});var r={};n.r(r),n.d(r,{deleteById:function(){return d},deposit:function(){return l},getAll:function(){return o},getById:function(){return p},verify:function(){return u}});var a={};n.r(a),n.d(a,{pinProject:function(){return x},renewToken:function(){return h}});var c=n(8941),s=n(9869),i=c.Z.common.baseApiUrl,o=function(e){return(0,s.Z)("GET",i+"/deposit",e).then((function(e){return e.data}))},l=function(e){return(0,s.Z)("POST",i+"/deposit",e)},u=function(e){return(0,s.Z)("PATCH",i+"/deposit/".concat(e,"/verify"))},d=function(e){return(0,s.Z)("DELETE",i+"/deposit/".concat(e))},p=function(e){return(0,s.Z)("GET",i+"/deposit/".concat(e))},m=c.Z.common.baseApiUrl,h=function(){return(0,s.Z)("GET",m+"/renew")},x=function(e,t,n){return(0,s.Z)("POST",m+"/news",{fbId:e,pinned:t,projectPinnedExpiredAt:n})},f=n(1716)},9869:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4165),a=n(5861),c=n(9489),s=n(1172);function i(e,t,n){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,l,u,d,p,m,h,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,c.v0)(),e.next=3,null===(i=o.currentUser)||void 0===i?void 0:i.getIdToken();case 3:return l=e.sent,u=new Headers({"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}),l&&u.set("Authorization",l),d={method:t,mode:"cors",headers:u},p=n,a&&("GET"===t?(m=s.stringify(a),p+="?"+m):(d.body=a instanceof FormData?a:JSON.stringify(a),a instanceof FormData&&(d.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),e.next=11,fetch(p,d);case 11:if(!(h=e.sent).ok){e.next=18;break}return e.next=15,h.json();case 15:return e.abrupt("return",e.sent);case 18:return e.prev=18,e.next=21,h.json();case 21:throw x=e.sent,new Error(x.message||h.statusText);case 25:throw e.prev=25,e.t0=e.catch(18),e.t0;case 28:case"end":return e.stop()}}),e,null,[[18,25]])})))).apply(this,arguments)}},1716:function(e,t,n){n.r(t),n.d(t,{deleteImages:function(){return d},deleteMany:function(){return i},deleteVideos:function(){return u},upload:function(){return s},uploadImg:function(){return o},uploadVid:function(){return l}});var r=n(8941),a=n(9869),c=r.Z.common.baseApiUrl+"/upload",s=function(e){var t=new FormData;return t.append("file",e),(0,a.Z)("POST",c,t)},i=function(e){if(e.length)return(0,a.Z)("DELETE",c,{ids:e})},o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new FormData;return n.append("file",e),void 0!=t.autoRotate&&n.append("autoRotate",t.autoRotate.toString()),(0,a.Z)("POST",c+"/image",n)},l=function(e,t){var n=new FormData;return n.append("file",e),n.append("newsId",t),(0,a.Z)("POST",c+"/video",n)},u=function(e){return(0,a.Z)("DELETE",c+"/videos",{ids:e})},d=function(e){return(0,a.Z)("DELETE",c+"/images",{ids:e})}},7629:function(e,t,n){n.d(t,{PU:function(){return a},vh:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",a="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},9323:function(e,t,n){n.d(t,{H:function(){return m}});var r=n(4165),a=n(5861),c=n(9439),s=n(2751),i=n(6316),o=n(7313),l=n(5798),u=n(5831),d=n(8469),p=n(2440);function m(e){var t=(0,o.useState)(""),n=(0,c.Z)(t,2),m=n[0],h=n[1],x=(0,u.s)().socket;return(0,o.useEffect)((function(){var t=(0,s.x0)(8);x.emit(l.Q.initNewsAdd,t);var n="".concat(window.location.origin,"/upload?sessionId=").concat(t);i.toString(n,(function(e,t){e||h(t)})),x.on(l.Q.imageUploaded(t),function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new File([n],"payment-image.webp",{type:"image/webp"}),t.next=3,(0,p.vZ)(a);case 3:a.src=t.sent,a.id=(0,d.Wb)(),e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),{sessionQR:m}}},2004:function(e,t,n){n.d(t,{q:function(){return i}});var r=n(1413),a=n(5993),c=n(699),s=n(3027),i=function(e){var t=e.province,n=e.ward,i=e.district,o=c.find((function(e){return parseInt(e.id,10)===t})),l=s.find((function(e){return parseInt(e.id,10)===i})),u=a.find((function(e){return parseInt(e.id,10)===n})),d="".concat(l.typeName," ").concat(l.name.startsWith("Qu\u1eadn")?l.name.substring(5):l.name);return(0,r.Z)((0,r.Z)({},e),{},{provinceName:"".concat(o.typeName," ").concat(null===o||void 0===o?void 0:o.name),districtName:d,wardName:null===u||void 0===u?void 0:u.name})}},438:function(e,t,n){n.d(t,{D5:function(){return u},le:function(){return l},yC:function(){return o}});var r=n(3433),a=n(9548),c=n(4396),s=n(200),i=n(2004),o=function(e){var t=[],n=[];return["video","images","paymentImage"].forEach((function(a){var s=e[a];if(void 0!=s)switch(a){case"video":t.push(c.aq.deleteVideos([s.id]));break;case"images":n.push.apply(n,(0,r.Z)(s.map((function(e){return e.id}))));break;case"paymentImage":n.push(s.id)}})),t.push(c.aq.deleteImages(n)),Promise.all(t)},l=function(e){var t=e.action,n=e.houseType,r=e.width,c=e.length,o=e.address,l=r*c;l=Number.isInteger(l)?l:l.toFixed(2);var u=(0,i.q)(o),d=u.address,p=u.wardName,m=u.districtName,h=u.provinceName;return["".concat((0,a.t)(s.m3.find((function(e){return e.value===t})).name)," ").concat((0,a.t)(s.Wm.find((function(e){return e.value===n})).name)," ").concat(l,"m\xb2 (").concat(r," x ").concat(c,"m)"),"".concat(d,", ").concat(p,", ").concat(m,", ").concat(h)]};function u(e){return e<2?"under_2":e>=2&&e<5?"2_5":e>=5&&e<8?"5_8":e>=8&&e<15?"8_15":e>=15&&e<30?"15_30":"upper_30"}},1881:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(1413),a=n(4165),c=n(5861),s=n(9439),i=n(3061),o=n(658),l=n.n(o),u=n(573),d=n(7313),p=n(5627),m=n(4511),h=n(7864),x=n(8467),f=n(8512),v=n(4396),g=n(5895),w=n(1110),b=n(8298),_=n(8941),j=n(6404),Z=n(7629),N=n(200),y=n(887),k=n(9323),T=n(5565),E=n(2004),F=n(8469),S=n(2440),I=n(438),A=n(4885),P=n(1910),q=n(6417),U=_.Z.common;function C(){var e=(0,m.$)().t,t=(0,x.s0)(),n=(0,p.cI)({defaultValues:{action:y.Hx.trade,houseType:y.tU.house,architecture:""}}),o=n.control,_=n.formState.errors,C=n.register,D=n.handleSubmit,L=n.watch,H=(0,d.useState)(!1),M=(0,s.Z)(H,2),O=M[0],R=M[1],V=(0,d.useState)(!1),Q=(0,s.Z)(V,2),W=Q[0],z=Q[1],J=(0,d.useState)(!1),G=(0,s.Z)(J,2),K=G[0],Y=G[1],B=(0,d.useState)(null),X=(0,s.Z)(B,2),$=X[0],ee=X[1],te=(0,d.useState)(""),ne=(0,s.Z)(te,2),re=ne[0],ae=ne[1],ce=(0,d.useState)([]),se=(0,s.Z)(ce,2),ie=se[0],oe=se[1],le=(0,d.useState)(null),ue=(0,s.Z)(le,2),de=ue[0],pe=ue[1],me=(0,k.H)((function(e){ee(e),ae(URL.createObjectURL(e))})).sessionQR,he=L("action"),xe=L("houseType"),fe=xe===y.tU.apartment?"".concat(e("eg"),": ").concat(e("apartment_structure_placeholder")):xe===y.tU.land?"".concat(e("eg"),": ").concat(e("land_structure_placeholder")):"".concat(e("eg"),": ").concat(e("structure_placeholder")),ve=(0,d.useMemo)((function(){return he===y.Hx.trade?"billion":"million"}),[he]),ge=+he===y.Hx.rent?N.Wm:N.Wm.filter((function(e){return e.value!==y.tU.office})),we=he===y.Hx.trade;function be(e){return _e.apply(this,arguments)}function _e(){return(_e=(0,c.Z)((0,a.Z)().mark((function e(t){var n,c,i,o,l,d,p,m,h,x,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.length=+String(t.length).replaceAll(",","."),t.width=+String(t.width).replaceAll(",","."),n=(0,I.le)(t),c=(0,s.Z)(n,2),i=c[0],o=c[1],l=(0,A.lV)(i+"-"+o)+"-"+Date.now().toString(),d=+String(t.price).replaceAll(",","."),p=we?1e3*d:d,e.next=8,v.aq.uploadImg($,{autoRotate:!0});case 8:return m=e.sent,h=m.data,e.next=12,Promise.all(ie.map((function(e){return v.aq.uploadImg(e)})));case 12:return x=e.sent,e.next=15,(0,u.ET)((0,u.hJ)(T.db,"properties"),(0,r.Z)((0,r.Z)((0,r.Z)({},t),(0,E.q)(t.address)),{},{price:p,slug:l,published:!1,hideVideo:!1,images:x.map((function(e){return e.data})),paymentImage:h,subject:i,featurePinned:!1,projectPinned:!1,createdAt:u.EK.now().seconds,priceRange:(0,I.D5)(d),above2b:p>=2e3}));case 15:return f=e.sent,e.next=18,fetch(U.baseApiUrl+"/news-submission",{headers:{"Content-Type":"application/json",secret:U.secret},method:"POST",body:JSON.stringify({name:i,link:window.location.origin+"/chothue?slug=".concat(l)})});case 18:if(!de){e.next=21;break}return e.next=21,v.aq.uploadVid(de,f.id);case 21:return e.abrupt("return",f);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var je=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(n){var r,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.prev=1,e.next=4,f.Am.promise(be(n),{pending:"\u0110ang \u0111\u0103ng tin, vui l\xf2ng kh\xf4ng \u0111\xf3ng tab hi\u1ec7n t\u1ea1i",success:"\u0110\u0103ng tin BDS th\xe0nh c\xf4ng",error:Z.PU});case 4:r=e.sent,c=r.id,t("/xac-thuc/".concat(c));case 7:return e.prev=7,Y(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(t){return e.apply(this,arguments)}}(),Ze=function(){var t=(0,c.Z)((0,a.Z)().mark((function t(){var n,c,s,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=(0,u.IO)((0,u.hJ)(T.db,"properties"),(0,u.Xo)("projectPinnedExpiredAt","desc"),(0,u.ar)("published","==",!0),(0,u.ar)("projectPinned","==",!0),(0,u.b9)(P.PROJECT_NEWS_LIMIT)),t.next=4,(0,u.PL)(n);case 4:if((c=t.sent).size!==P.PROJECT_NEWS_LIMIT){t.next=10;break}return s=c.docs[P.PROJECT_NEWS_LIMIT-1],i=(0,r.Z)({id:s.id},s.data()),f.Am.info("".concat(e("news_board_is_full_latest_news_will_expire_at")," ").concat(l()(1e3*i.projectPinnedExpiredAt).format("DD/MM/YYYY HH:mm A"))),t.abrupt("return");case 10:f.Am.info(e("news_board_is_empty_can_post_news_right_away")),z(!0),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return(0,d.useEffect)((function(){document.title="\u0110\u0103ng tin"}),[]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(w.pU,{}),(0,q.jsxs)("div",{className:"my-5 mx-2 md:mx-10 lg:mx-20 xl:mx-32 flex gap-5 md:gap-10 lg:gap-20 xl:gap-32 text-xs sm:text-sm md:text-base",children:[(0,q.jsx)("div",{className:"sticky top-[100px] w-full h-[80vh] mx-auto hidden lg:block",style:{background:"url(".concat(g.E0,") center no-repeat"),backgroundSize:"cover"},children:(0,q.jsx)("div",{className:"absolute bottom-0 left-0 w-full text-white text-xl p-[20px] bg-black bg-opacity-50",children:(0,q.jsx)("p",{className:"text-center",children:e("post_real_estate_news")})})}),(0,q.jsxs)("form",{className:"grid grid-cols-4 w-full place-content-start gap-5 text-sm md:text-base",children:[(0,q.jsx)("div",{className:"col-span-4 text-center order-[-3]",children:O?(0,q.jsx)("div",{className:"col-span-4",children:(0,q.jsx)("p",{className:"text-base md:text-xl xl:text-2xl font-medium",children:e("posting_vip_news_will_continuously_display_on_homepage_please_click_check_news_button",{days:30})})}):(0,q.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium",children:e("fill_in_real_estate_information")})}),(0,q.jsx)(w.cw,{className:"col-span-4 xl:col-span-1 order-[-1] xl:order-[-2]",htmlFor:"subject",label:e("trade_rent"),error:_.subject,children:(0,q.jsx)("select",(0,r.Z)((0,r.Z)({},C("action",{required:!0,valueAsNumber:!0})),{},{className:"input",children:N.m3.map((function(t){return(0,q.jsx)("option",{value:t.value,children:e(t.name)},t.value)}))}))}),(0,q.jsxs)("div",{className:"col-span-4 xl:col-span-3 order-[-2] xl:order-[-1] flex justify-center items-center rounded text-sm md:text-base",children:[(0,q.jsx)("div",{className:(0,i.Z)("px-3 py-1 bg-gray-200 border-2 border-gray-200 rounded-l cursor-pointer transition-colors",!O&&"!bg-blue-500 text-white"),onClick:function(){return R(!1)},children:e("normal_news_posting")}),(0,q.jsxs)("div",{className:(0,i.Z)("flex items-center gap-1 px-3 py-1 bg-gray-200 border-2 border-gray-200 rounded-r cursor-pointer transition-colors",O&&"!bg-blue-500 text-white"),onClick:function(){return R(!0)},children:[e("vip_news_posting"),(0,q.jsx)(h.dzv,{className:"text-base"})]})]}),(0,q.jsx)(w.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"type",label:e("type"),error:_.houseType,children:(0,q.jsx)("select",(0,r.Z)((0,r.Z)({},C("houseType",{required:!0,valueAsNumber:!0})),{},{className:"input",children:ge.map((function(t){return(0,q.jsx)("option",{value:t.value,children:e(t.name)},t.value)}))}))}),(0,q.jsx)(w.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"width",label:e("width_m"),error:_.width,children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("width",{required:!0,validate:F.T0})),{},{className:"input",placeholder:e("enter_width"),type:"text",onKeyDown:F.ie}))}),(0,q.jsx)(w.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"length",label:e("length_m"),error:_.length,children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("length",{required:!0,validate:F.T0})),{},{className:"input",placeholder:e("enter_length"),type:"text",onKeyDown:F.ie}))}),(0,q.jsx)(w.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"price",label:he===y.Hx.trade?"".concat(e("price")," (").concat(e(ve)," \u0111\u1ed3ng)"):"".concat(e("price")," (").concat(e("million"),"/").concat(e("month"),")"),error:_.price,children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("price",{required:!0,validate:F.T0})),{},{className:"input",placeholder:"".concat(he===y.Hx.trade?"VD: 0,5 t\u1ef7":"0,5"),title:"VD: 0,5 t\u1ef7",type:"text",onKeyDown:F.ie}))}),(0,q.jsx)(w.cw,{className:"xl:col-span-2 col-span-4",htmlFor:"structure",label:xe===y.tU.apartment?e("floor"):e("structure"),error:_.structure,children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("structure",{required:!0})),{},{className:"input",placeholder:fe,type:"text"}))}),(0,q.jsx)(w.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"architecture",label:e("architecture"),error:_.architecture,children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("architecture")),{},{className:"input",placeholder:xe===y.tU.land?"(".concat(e("leave_empty"),")"):"".concat(e("eg"),": ").concat(e("architecture_placeholder")),type:"text"}))}),(0,q.jsx)(w.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"direction",label:e("direction"),error:_.direction,children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("direction",{maxLength:500})),{},{className:"input",placeholder:e("enter_direction"),type:"text"}))}),(0,q.jsx)(w.cw,{className:"col-span-4",htmlFor:"address",label:e("address"),children:(0,q.jsx)(p.Qr,{control:o,name:"address",defaultValue:b.W,rules:{required:!0,validate:function(t){var n,r=Object.entries(t),a=e("pick");return r.forEach((function(t){var r=(0,s.Z)(t,2),c=r[0];if(r[1]);else switch(c){case"ward":return void(n=e("ward"));case"district":return void(n=e("district"));case"province":return void(n=e("province"));case"address":return n=e("address"),void(a=e("enter"))}})),!n||"".concat(e("please")," ").concat(a," ").concat(n)}},render:function(t){var n=t.field,r=n.value,a=n.onChange,c=t.fieldState.error;return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(w.i$,{value:r,onChange:a}),(0,q.jsx)(w.Xq,{label:e("address"),error:c})]})}})}),(0,q.jsx)(w.cw,{className:"col-span-2",htmlFor:"contactName",label:e("contact_name"),error:_.contactName,children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("contactName",{required:!0})),{},{className:"input",placeholder:e("contact_name_placeholder"),type:"text"}))}),(0,q.jsx)(w.cw,{className:"col-span-2",htmlFor:"contactNumber",label:e("contact_number"),error:_.contactNumber,children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("contactNumber",{required:!0,pattern:/^0/})),{},{className:"input",maxLength:10,placeholder:"0911xxxxxx",onKeyDown:F.EA,type:"text"}))}),(0,q.jsx)(w.cw,{className:"col-span-4",htmlFor:"description",label:e("description"),error:_.description,children:(0,q.jsx)("textarea",(0,r.Z)((0,r.Z)({},C("description",{required:!0,maxLength:650})),{},{className:"input resize-none",placeholder:"".concat(e("eg"),": ").concat(e("address_placeholder")),rows:5,maxLength:j.aw}))}),(0,q.jsx)(w.cw,{className:"col-span-4",htmlFor:"socialLink",label:e("social_link"),children:(0,q.jsx)("input",(0,r.Z)((0,r.Z)({},C("socialLink")),{},{className:"input",placeholder:e("social_link_placeholder"),type:"text"}))}),(0,q.jsx)("div",{className:"col-span-4",children:(0,q.jsx)("label",{htmlFor:"",children:(0,q.jsx)("div",{className:"relative aspect-vid",children:(0,q.jsx)("iframe",{className:"absolute top-0 left-0 w-full h-full",src:"https://www.youtube.com/embed/IJPb7lo6CK4?autoplay=1",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),(0,q.jsxs)("div",{className:"col-span-4",children:[(0,q.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium mb-5",children:e("please_proceed_to_payment_in_order_to_post_news")}),!O&&(0,q.jsx)(w.qv,{sessionQR:me}),O&&!W&&(0,q.jsx)(q.Fragment,{children:(0,q.jsx)("button",{className:"btn w-full md:w-[259px] mx-auto",type:"button",onClick:Ze,children:e("check_news_board")})}),O&&W&&(0,q.jsx)(w.qv,{sessionQR:me}),(O&&W||!O)&&!re&&(0,q.jsx)(w.cw,{className:"col-span-4",htmlFor:"images",label:"",children:(0,q.jsx)(w.Ur,{accepts:S.Gs,limitMb:j.Te,className:"mx-auto w-full md:w-[259px]",placeholder:e("upload_receipt_screenshot"),onChange:function(e){var t=e[0];t?ee(t):(ee(null),oe([]),pe(null))}})})]}),(0,q.jsx)("div",{className:"col-span-4",children:(0,q.jsx)("p",{dangerouslySetInnerHTML:{__html:e("upload_the_screenshot_of_the_receipt_then_click_submit_button")}})}),re&&(0,q.jsx)("div",{className:"col-span-4",children:(0,q.jsxs)("div",{className:"relative mx-auto w-full md:w-[259px]",children:[(0,q.jsx)("img",{className:"w-full rounded",src:re,alt:""}),(0,q.jsx)(h.oHP,{color:"#000",size:21,className:"absolute select-none rounded-full shadow cursor-pointer bg-white top-1 right-1 p-1",onClick:function(){ee(null),ae("")}})]})}),!!$&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(w.cw,{className:"col-span-4",htmlFor:"images",label:e("images"),children:(0,q.jsx)(w.Ur,{accepts:S.Gs,multiple:!0,limitMb:j.Te,max:j.Vv,uploaderCls:"mx-auto w-full md:w-[259px]",className:"col-span-4 mx-auto w-full",placeholder:e("upload_or_drag_and_drop_image"),onChange:oe})}),(0,q.jsxs)(w.cw,{className:"col-span-4",htmlFor:"video",label:e("video"),children:[(0,q.jsx)("small",{children:e("maximum_file_size_limit_mb_video_length",{size:300})}),(0,q.jsx)(w.Ur,{limitMb:300,accept:"video/*",accepts:S.WZ,className:"col-span-4 mx-auto w-full",placeholder:e("upload_or_drag_and_drop_video"),onChange:function(e){var t;return pe(null!==(t=e[0])&&void 0!==t?t:null)}})]})]}),(0,q.jsx)("div",{className:"col-span-4 ",children:(0,q.jsx)("button",{type:"button",disabled:K,onClick:function(){var t=new Date,n=t.getUTCHours()+7,r=t.getMinutes();n<8||n>=22||8===n&&r<30?f.Am.warn(e("news_add_locked_description")):D((function(e){$?je(e):f.Am.warn("Vui l\xf2ng t\u1ea3i l\xean \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n \u0111\u1ec3 \u0111\u0103ng b\xe0i")}))()},className:"btn w-full md:w-[259px] mx-auto mt-5",children:K?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(h.Z7b,{className:"animate-spin"}),e("uploading_news")]}):e("submit")})})]})]})]})}}}]);