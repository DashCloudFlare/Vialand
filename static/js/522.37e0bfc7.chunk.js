"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[522],{1716:function(e,t,n){n.d(t,{Cj:function(){return i},Pe:function(){return o},hF:function(){return u},ws:function(){return s},wt:function(){return l}});var a=n(8941),r=n(9869),c=a.Z.common.baseApiUrl+"/upload",s=function(e){var t=new FormData;return t.append("file",e),(0,r.Z)("POST",c,t)},l=function(e){return(0,r.Z)("DELETE",c,{ids:e})},i=function(e){var t=new FormData;return t.append("file",e),(0,r.Z)("POST",c+"/google-img",t)},o=function(e,t){var n=new FormData;return n.append("file",e),n.append("newsId",t),(0,r.Z)("POST",c+"/google-vid",n)},u=function(e){return(0,r.Z)("DELETE",c+"/google",{ids:e})}},7629:function(e,t,n){n.d(t,{PU:function(){return c},ZE:function(){return r},vh:function(){return a}});var a="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat",r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean",c="Qu\xe1 tr\xecnh t\u1ea3i l\xean \u0111\xe3 b\u1ecb l\u1ed7i. Qu\xfd kh\xe1ch vui l\xf2ng li\xean h\u1ec7 tr\u1ef1c ti\u1ebfp v\u1edbi s\u1ed1 Hotline 0868113025 (ho\u1eb7c Zalo) \u0111\u1ec3 \u0111\u01b0\u1ee3c x\u1eed l\xfd k\u1ecbp th\u1eddi"},9522:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(1413),r=n(4165),c=n(5861),s=n(9439),l=n(3061),i=n(658),o=n.n(i),u=n(573),d=n(9548),p=n(2751),m=n(6316),x=n(7313),h=n(5627),f=n(4511),w=n(7864),g=n(8512),v=n(1716),b=n(7265),_=n(753),j=n(8298),N=n(8941),Z=n(6404),y=n(7629),k=n(200),S=n(5831),F=n(887),T=n(6243),E=n(5993),C=n(699),P=n(3027),I=function(e){var t=e.province,n=e.ward,r=e.district,c=C.find((function(e){return parseInt(e.id,10)===t})),s=P.find((function(e){return parseInt(e.id,10)===r})),l=E.find((function(e){return parseInt(e.id,10)===n})),i="".concat(s.typeName," ").concat(s.name.startsWith("Qu\u1eadn")?s.name.substring(5):s.name);return(0,a.Z)((0,a.Z)({},e),{},{provinceName:"".concat(c.typeName," ").concat(null===c||void 0===c?void 0:c.name),districtName:i,wardName:null===l||void 0===l?void 0:l.name})},A=n(8469),L=n(2440),U=n(4885),q=n(5629),D=n(6417),M=N.Z.common,H=function(e){var t=e.action,n=e.houseType,a=e.width,r=e.length,c=e.address,s=a*r;s=Number.isInteger(s)?s:s.toFixed(2);var l=I(c),i=l.address,o=l.wardName,u=l.districtName,p=l.provinceName;return["".concat((0,d.t)(k.m3.find((function(e){return e.value===t})).name)," ").concat((0,d.t)(k.Wm.find((function(e){return e.value===n})).name)," ").concat(s,"m\xb2 (").concat(a," x ").concat(r,"m)"),"".concat(i,", ").concat(o,", ").concat(u,", ").concat(p)]};function O(){var e=(0,f.$)().t,t=(0,h.cI)({defaultValues:{action:F.Hx.trade,houseType:F.tU.house,architecture:""}}),n=t.control,i=t.formState.errors,d=t.register,N=t.handleSubmit,E=t.watch,C=(0,S.s)().socket,P=(0,x.useState)(!1),O=(0,s.Z)(P,2),W=O[0],z=O[1],J=(0,x.useState)(!1),R=(0,s.Z)(J,2),V=R[0],K=R[1],Q=(0,x.useState)(!1),Y=(0,s.Z)(Q,2),G=Y[0],X=Y[1],$=(0,x.useState)(""),B=(0,s.Z)($,2),ee=B[0],te=B[1],ne=(0,x.useState)(null),ae=(0,s.Z)(ne,2),re=ae[0],ce=ae[1],se=(0,x.useState)(""),le=(0,s.Z)(se,2),ie=le[0],oe=le[1],ue=(0,x.useState)([]),de=(0,s.Z)(ue,2),pe=de[0],me=de[1],xe=(0,x.useState)(null),he=(0,s.Z)(xe,2),fe=he[0],we=he[1],ge=E("action"),ve=E("houseType"),be=ve===F.tU.apartment?"".concat(e("eg"),": ").concat(e("apartment_structure_placeholder")):ve===F.tU.land?"".concat(e("eg"),": ").concat(e("land_structure_placeholder")):"".concat(e("eg"),": ").concat(e("structure_placeholder")),_e=(0,x.useMemo)((function(){return ge===F.Hx.trade?"billion":"million"}),[ge]),je=+ge===F.Hx.rent?k.Wm:k.Wm.filter((function(e){return e.value!==F.tU.office})),Ne=ge===F.Hx.trade;function Ze(e){return ye.apply(this,arguments)}function ye(){return(ye=(0,c.Z)((0,r.Z)().mark((function e(t){var n,c,l,i,o,d,p,m,x,h,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.length=+String(t.length).replaceAll(",","."),t.width=+String(t.width).replaceAll(",","."),n=H(t),c=(0,s.Z)(n,2),l=c[0],i=c[1],o=(0,U.lV)(l+"-"+i)+"-"+Date.now().toString(),d=+String(t.price).replaceAll(",","."),p=Ne?1e3*d:d,e.next=8,(0,v.Cj)(re);case 8:return m=e.sent,x=m.data,e.next=12,Promise.all(pe.map((function(e){return(0,v.Cj)(e)})));case 12:return h=e.sent,e.next=15,(0,u.ET)((0,u.hJ)(T.db,"properties"),(0,a.Z)((0,a.Z)((0,a.Z)({},t),I(t.address)),{},{price:p,slug:o,published:!1,hideVideo:!1,images:h.map((function(e){return e.data})),paymentImage:x,subject:l,featurePinned:!1,projectPinned:!1,createdAt:u.EK.now().seconds}));case 15:return f=e.sent,e.next=18,fetch(M.baseApiUrl+"/news-submission",{headers:{"Content-Type":"application/json",secret:M.secret},method:"POST",body:JSON.stringify({name:l,link:window.location.origin+"/chothue?slug=".concat(o)})});case 18:if(!fe){e.next=21;break}return e.next=21,(0,v.Pe)(fe,f.id);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ke=function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.prev=1,e.next=4,g.Am.promise(Ze(t),{pending:"\u0110ang \u0111\u0103ng tin, vui l\xf2ng kh\xf4ng \u0111\xf3ng tab hi\u1ec7n t\u1ea1i",success:"\u0110\u0103ng tin BDS th\xe0nh c\xf4ng",error:y.PU});case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,"undefined"!==typeof window&&"location"in window&&window.location.reload(),X(!1),e.finish(8);case 12:case"end":return e.stop()}}),e,null,[[1,6,8,12]])})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n,c,s,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=(0,u.IO)((0,u.hJ)(T.db,"properties"),(0,u.Xo)("projectPinnedExpiredAt","desc"),(0,u.ar)("published","==",!0),(0,u.ar)("projectPinned","==",!0),(0,u.b9)(q.PROJECT_NEWS_LIMIT)),t.next=4,(0,u.PL)(n);case 4:if((c=t.sent).size!==q.PROJECT_NEWS_LIMIT){t.next=10;break}return s=c.docs[q.PROJECT_NEWS_LIMIT-1],l=(0,a.Z)({id:s.id},s.data()),g.Am.info("".concat(e("news_board_is_full_latest_news_will_expire_at")," ").concat(o()(1e3*l.projectPinnedExpiredAt).format("DD/MM/YYYY HH:mm A"))),t.abrupt("return");case 10:g.Am.info(e("news_board_is_empty_can_post_news_right_away")),K(!0),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}();return(0,x.useEffect)((function(){document.title="\u0110\u0103ng tin"}),[]),(0,x.useEffect)((function(){var e=(0,p.x0)(8);C.emit("init-news-add",e);var t="".concat(window.location.origin,"/upload?sessionId=").concat(e);m.toString(t,(function(e,t){e||te(t)})),C.on("".concat(e,"-image-uploaded"),function(){var e=(0,c.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new File([t],"payment-image.webp",{type:"image/webp"}),e.next=3,(0,L.vZ)(n);case 3:n.src=e.sent,n.id=Math.floor(1e5*Math.random()).toString(),ce(n),oe(URL.createObjectURL(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),(0,D.jsxs)("div",{className:"my-5 mx-2 md:mx-10 lg:mx-20 xl:mx-32 flex gap-5 md:gap-10 lg:gap-20 xl:gap-32 text-xs sm:text-sm md:text-base",children:[(0,D.jsx)("div",{className:"sticky top-[100px] w-full h-[80vh] mx-auto hidden lg:block",style:{background:"url(".concat(b.E0,") center no-repeat"),backgroundSize:"cover"},children:(0,D.jsx)("div",{className:"absolute bottom-0 left-0 w-full text-white text-xl p-[20px] bg-black bg-opacity-50",children:(0,D.jsx)("p",{className:"text-center",children:e("post_real_estate_news")})})}),(0,D.jsxs)("form",{className:"grid grid-cols-4 w-full place-content-start gap-5",children:[(0,D.jsxs)("div",{className:"col-span-4 xl:col-span-3",children:[W?(0,D.jsx)("div",{className:"col-span-4 mb-5",children:(0,D.jsx)("p",{className:"text-base md:text-xl xl:text-2xl font-medium",children:e("posting_vip_news_will_continuously_display_on_homepage_please_click_check_news_button",{days:30})})}):(0,D.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium",children:e("fill_in_real_estate_information")}),(0,D.jsxs)("div",{className:"my-2 flex justify-center items-center rounded text-xs md:text-sm",children:[(0,D.jsx)("div",{className:(0,l.Z)("px-3 py-1 bg-gray-200 border-2 border-gray-200 rounded-l cursor-pointer transition-colors",!W&&"!bg-blue-500 text-white"),onClick:function(){return z(!1)},children:e("normal_news_posting")}),(0,D.jsxs)("div",{className:(0,l.Z)("flex items-center gap-1 px-3 py-1 bg-gray-200 border-2 border-gray-200 rounded-r cursor-pointer transition-colors",W&&"!bg-blue-500 text-white"),onClick:function(){return z(!0)},children:[e("vip_news_posting"),(0,D.jsx)(w.dzv,{className:"text-base"})]})]})]}),(0,D.jsx)(_.cw,{className:"col-span-4 xl:col-span-1",htmlFor:"subject",label:e("trade_rent"),error:i.subject,children:(0,D.jsx)("select",(0,a.Z)((0,a.Z)({},d("action",{required:!0,valueAsNumber:!0})),{},{className:"input",children:k.m3.map((function(t){return(0,D.jsx)("option",{value:t.value,children:e(t.name)},t.value)}))}))}),(0,D.jsx)(_.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"type",label:e("type"),error:i.houseType,children:(0,D.jsx)("select",(0,a.Z)((0,a.Z)({},d("houseType",{required:!0,valueAsNumber:!0})),{},{className:"input",children:je.map((function(t){return(0,D.jsx)("option",{value:t.value,children:e(t.name)},t.value)}))}))}),(0,D.jsx)(_.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"width",label:e("width_m"),error:i.width,children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("width",{required:!0,min:0,max:1e4,validate:A.T0})),{},{className:"input",placeholder:e("enter_width"),type:"text",onKeyDown:A.ie,min:0,max:1e4}))}),(0,D.jsx)(_.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"length",label:e("length_m"),error:i.length,children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("length",{required:!0,min:0,max:1e4,validate:A.T0})),{},{className:"input",placeholder:e("enter_length"),type:"text",onKeyDown:A.ie,min:0,max:1e4}))}),(0,D.jsx)(_.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"price",label:ge===F.Hx.trade?"".concat(e("price")," (").concat(e(_e)," \u0111\u1ed3ng)"):"".concat(e("price")," (").concat(e("million"),"/").concat(e("month"),")"),error:i.price,children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("price",{required:!0,min:0,max:1e4,validate:A.T0})),{},{className:"input",placeholder:"".concat(e("eg"),": ").concat(ge===F.Hx.trade?"0,35 (0.35)":"0,5"),type:"text",onKeyDown:A.ie,min:0,max:1e4}))}),(0,D.jsx)(_.cw,{className:"xl:col-span-2 col-span-4",htmlFor:"structure",label:ve===F.tU.apartment?e("floor"):e("structure"),error:i.structure,children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("structure",{required:!0})),{},{className:"input",placeholder:be,type:"text"}))}),(0,D.jsx)(_.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"architecture",label:e("architecture"),error:i.architecture,children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("architecture")),{},{className:"input",placeholder:ve===F.tU.land?"(".concat(e("leave_empty"),")"):"".concat(e("eg"),": ").concat(e("architecture_placeholder")),type:"text"}))}),(0,D.jsx)(_.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"direction",label:e("direction"),error:i.direction,children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("direction",{maxLength:500})),{},{className:"input",placeholder:e("enter_direction"),type:"text"}))}),(0,D.jsx)(_.cw,{className:"col-span-4",htmlFor:"address",label:e("address"),children:(0,D.jsx)(h.Qr,{control:n,name:"address",defaultValue:j.W,rules:{required:!0,validate:function(t){var n,a=Object.entries(t),r=e("pick");return a.forEach((function(t){var a=(0,s.Z)(t,2),c=a[0];if(a[1]);else switch(c){case"ward":return void(n=e("ward"));case"district":return void(n=e("district"));case"province":return void(n=e("province"));case"address":return n=e("address"),void(r=e("enter"))}})),!n||"".concat(e("please")," ").concat(r," ").concat(n)}},render:function(t){var n=t.field,a=n.value,r=n.onChange,c=t.fieldState.error;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(_.i$,{value:a,onChange:r}),(0,D.jsx)(_.Xq,{label:e("address"),error:c})]})}})}),(0,D.jsx)(_.cw,{className:"col-span-2",htmlFor:"contactName",label:e("contact_name"),error:i.contactName,children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("contactName",{required:!0})),{},{className:"input",placeholder:e("contact_name_placeholder"),type:"text"}))}),(0,D.jsx)(_.cw,{className:"col-span-2",htmlFor:"contactNumber",label:e("contact_number"),error:i.contactNumber,children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("contactNumber",{required:!0,pattern:/^0/})),{},{className:"input",maxLength:10,placeholder:"0911xxxxxx",onKeyDown:A.EA,type:"text"}))}),(0,D.jsx)(_.cw,{className:"col-span-4",htmlFor:"description",label:e("description"),error:i.description,children:(0,D.jsx)("textarea",(0,a.Z)((0,a.Z)({},d("description",{required:!0,maxLength:650})),{},{className:"input resize-none",placeholder:"".concat(e("eg"),": ").concat(e("address_placeholder")),rows:5,maxLength:Z.aw}))}),(0,D.jsx)(_.cw,{className:"col-span-4",htmlFor:"addressLink",label:e("address_link"),children:(0,D.jsx)("input",(0,a.Z)((0,a.Z)({},d("addressLink")),{},{className:"input",placeholder:e("enter_address_link"),type:"text"}))}),(0,D.jsx)("div",{className:"col-span-4",children:(0,D.jsx)("label",{htmlFor:"",children:(0,D.jsx)("div",{className:"relative aspect-vid",children:(0,D.jsx)("iframe",{className:"absolute top-0 left-0 w-full h-full",src:"https://www.youtube.com/embed/IJPb7lo6CK4?autoplay=1",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),(0,D.jsxs)("div",{className:"col-span-4",children:[(0,D.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium mb-5",children:e("please_proceed_to_payment_in_order_to_post_news")}),!W&&(0,D.jsx)(_.qv,{sessionQR:ee}),W&&!V&&(0,D.jsx)(D.Fragment,{children:(0,D.jsx)("button",{className:"btn w-full md:w-[259px] mx-auto",type:"button",onClick:Se,children:e("check_news_board")})}),W&&V&&(0,D.jsx)(_.qv,{isVIP:!0,sessionQR:ee}),(W&&V||!W)&&!ie&&(0,D.jsx)(_.cw,{className:"col-span-4",htmlFor:"images",label:"",children:(0,D.jsx)(_.Ur,{accepts:L.Gs,limitMb:Z.Te,className:"mx-auto w-full md:w-[259px]",placeholder:e("upload_receipt_screenshot"),onChange:function(e){var t=e[0];t?ce(t):(ce(null),me([]),we(null))}})})]}),(0,D.jsx)("div",{className:"col-span-4",children:(0,D.jsx)("p",{dangerouslySetInnerHTML:{__html:e("upload_the_screenshot_of_the_receipt_then_click_submit_button")}})}),ie&&(0,D.jsx)("div",{className:"col-span-4",children:(0,D.jsxs)("div",{className:"relative mx-auto w-full md:w-[259px]",children:[(0,D.jsx)("img",{className:"w-full rounded",src:ie,alt:""}),(0,D.jsx)(w.oHP,{color:"#000",size:21,className:"absolute select-none rounded-full shadow cursor-pointer bg-white top-1 right-1 p-1",onClick:function(){ce(null),oe("")}})]})}),!!re&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(_.cw,{className:"col-span-4",htmlFor:"images",label:e("images"),children:(0,D.jsx)(_.Ur,{accepts:L.Gs,multiple:!0,limitMb:Z.Te,max:Z.Vv,uploaderCls:"mx-auto w-full md:w-[259px]",className:"col-span-4 mx-auto w-full",placeholder:e("upload_or_drag_and_drop_image"),onChange:me})}),(0,D.jsxs)(_.cw,{className:"col-span-4",htmlFor:"video",label:e("video"),children:[(0,D.jsx)("small",{children:e("maximum_file_size_limit_mb_video_length",{size:300})}),(0,D.jsx)(_.Ur,{limitMb:300,accept:"video/*",accepts:L.WZ,className:"col-span-4 mx-auto w-full",placeholder:e("upload_or_drag_and_drop_video"),onChange:function(e){var t;return we(null!==(t=e[0])&&void 0!==t?t:null)}})]})]}),(0,D.jsx)("div",{className:"col-span-4 ",children:(0,D.jsx)("button",{type:"button",disabled:G,onClick:function(){N((function(e){re?ke(e):g.Am.warn("Vui l\xf2ng t\u1ea3i l\xean \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n \u0111\u1ec3 \u0111\u0103ng b\xe0i")}))()},className:"btn w-full md:w-[259px] mx-auto mt-5",children:G?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(w.Z7b,{className:"animate-spin"}),e("uploading_news")]}):e("submit")})})]})]})}}}]);