"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[398],{9023:function(e,n,t){t.d(n,{iy:function(){return d},dD:function(){return o},$m:function(){return u}});var r=t(4165),a=t(5861),i=t(1172);function c(e,n,t){return s.apply(this,arguments)}function s(){return(s=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var c,s,l,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:n,mode:"cors",headers:{"Content-Type":"application/json",secret:"!k9Ud&5ZqVM@x3CjsF0io"}},s=t,a&&("GET"===n?(l=i.stringify(a),s+="?"+l):c.body=JSON.stringify(a)),e.next=5,fetch(s,c);case 5:if(!(o=e.sent).ok){e.next=10;break}return e.next=9,o.json();case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",void 0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l="https://mail.vialand.vn",o=function(e){return c("GET","https://mail.vialand.vn/news",e)},u=function(){return c("GET",l+"/renew")},d=function(){return c("POST",l+"/notification")}},7629:function(e,n,t){t.d(n,{v:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat"},6243:function(e,n,t){t.d(n,{db:function(){return m}});var r=t(271),a=t(4457),i=t(8941).Z.firebase,c=i.apiKey,s=i.appId,l=i.databaseURL,o=i.projectId,u=i.storageBucket,d={apiKey:c,authDomain:i.authDomain,databaseURL:l,projectId:o,storageBucket:u,messagingSenderId:i.messagingSenderId,appId:s},p=(0,r.ZF)(d),m=(0,a.ad)(p)},3278:function(e,n,t){t.d(n,{Fp:function(){return a},Qm:function(){return r},yC:function(){return i}});var r=function(e,n){return Promise.all(e.map((function(e){return fetch("https://www.googleapis.com/drive/v2/files/".concat(e.id,"?fields=thumbnailLink,embedLink,id"),{method:"GET",headers:{Authorization:"Bearer ".concat(n)}})}))).then((function(e){return Promise.all(e.map((function(e){return e.json()}))).then((function(e){return e.map((function(e){return{id:e.id,thumbnailLink:e.thumbnailLink,embedLink:e.embedLink,webViewLink:e.webViewLink}}))}))})).catch()},a=function(e,n){return fetch("https://www.googleapis.com/drive/v3/files/".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(n)}}).then((function(){return!0})).catch((function(){return!1}))},i=function(e,n){var t=[];return["video","images","paymentImage"].forEach((function(r){var i=e[r];i&&(Array.isArray(i)?i.forEach((function(e){return t.push(a(e.id,n))})):Object.keys(i).length&&null!==i&&void 0!==i&&i.id&&t.push(a(null===i||void 0===i?void 0:i.id,n)))})),t}},9398:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var r=t(3433),a=t(4165),i=t(1413),c=t(5861),s=t(9439),l=t(7313),o=t(9548),u=t(4457),d=t(1868),p=t.n(d),m=t(5627),h=t(7864),x=t(4511),f=t(8512),v=t(9023),b=t(3646),g=t(5398),w=t(8298),N=t(8941),j=t(7629),y=t(5857),Z=t(887),k=[{name:"house",value:Z.tU.house},{name:"land",value:Z.tU.land},{name:"apartment",value:Z.tU.apartment},{name:"villa",value:Z.tU.villa},{name:"resort",value:Z.tU.resort},{name:"factory",value:Z.tU.factory},{name:"plan",value:Z.tU.plan},{name:"bedsit",value:Z.tU.bedsit}],F=[{name:"trading",value:Z.Hx.trade},{name:"rent",value:Z.Hx.rent}],T=t(6243),L=t(3278),S=t(5993),C=t(699),I=t(3027),q=function(e){var n=e.province,t=e.ward,r=e.district,a=C.find((function(e){return parseInt(e.id,10)===n})),c=I.find((function(e){return parseInt(e.id,10)===r})),s=S.find((function(e){return parseInt(e.id,10)===t})),l="".concat(c.typeName," ").concat(c.name.startsWith("Qu\u1eadn")?c.name.substring(5):c.name);return(0,i.Z)((0,i.Z)({},e),{},{provinceName:"".concat(a.typeName," ").concat(null===a||void 0===a?void 0:a.name),districtName:l,wardName:null===s||void 0===s?void 0:s.name})},A=t(2713),V=t.n(A),E=t(6417),D=N.Z.google,U=D.apiKey,P=D.clientId,H=N.Z.common,K=function(e){var n=e.action,t=e.houseType,r=e.width,a=e.length,i=e.address,c=r*a;c=Number.isInteger(c)?c:c.toFixed(2);var s=q(i),l=s.address,u=s.wardName,d=s.districtName,p=s.provinceName;return"".concat((0,o.t)(F.find((function(e){return e.value===n})).name)," ").concat((0,o.t)(k.find((function(e){return e.value===t})).name)," ").concat(c,"m\xb2 (").concat(r," x ").concat(a,"m) - ").concat(l,", ").concat(u,", ").concat(d,", ").concat(p)};function z(){var e=(0,x.$)().t,n=(0,m.cI)(),t=n.control,o=n.formState.errors,d=n.register,N=n.handleSubmit,S=n.watch,C=p()(),I=(0,s.Z)(C,1)[0],A=(0,y.E)().token,D=(0,l.useState)(!1),z=(0,s.Z)(D,2),G=z[0],O=z[1],B=(0,l.useState)([]),M=(0,s.Z)(B,2),J=M[0],Q=M[1],W=(0,l.useState)(null),X=(0,s.Z)(W,2),R=X[0],$=X[1],Y=(0,l.useState)(null),_=(0,s.Z)(Y,2),ee=_[0],ne=_[1],te=(0,l.useRef)(void 0),re=S("action"),ae=(0,l.useMemo)((function(){return re===Z.Hx.trade?"billion":"million"}),[re]),ie=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(n){var t,r,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,t=K(n),a=t,r=V()(a,{replacement:"-",lower:!0,strict:!0,locale:"vi",trim:!0})+"-"+Date.now().toString(),c=[(0,u.ET)((0,u.hJ)(T.db,"properties"),(0,i.Z)((0,i.Z)((0,i.Z)({},n),q(n.address)),{},{slug:r,published:!1,hideVideo:!1,images:J,video:R,paymentImage:ee,subject:t,createdAt:u.EK.now().seconds})),fetch(H.baseApiUrl+"/news-submission",{headers:{"Content-Type":"application/json",secret:H.secret},method:"POST",body:JSON.stringify({name:t,link:window.location.origin+"/chothue?slug=".concat(r)})})],e.next=7,f.Am.promise(Promise.all(c),{pending:"\u0110ang \u0111\u0103ng tin",success:"\u0110\u0103ng tin BDS th\xe0nh c\xf4ng",error:j.v});case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.prev=11,"undefined"!==typeof window&&"location"in window&&window.location.reload(),O(!1),e.finish(11);case 15:case"end":return e.stop()}var a}),e,null,[[1,9,11,15]])})));return function(n){return e.apply(this,arguments)}}(),ce=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.count("handleSendNotification"),e.next=3,(0,v.iy)();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(e){A?(te.current=setTimeout((function(){ce()}),5e3),I({clientId:P,developerKey:U,token:A,showUploadView:!0,showUploadFolders:!0,supportDrives:!0,setParentFolder:H.isDev?void 0:"1ffWn9rpAhl7KOkaEzIcFhuT8k_GvHbfS",multiselect:"images"===e,disableDefaultView:!0,callbackFunction:function(){var n=(0,c.Z)((0,a.Z)().mark((function n(t){var r,i,c,s,l,o,u,d,p;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("cancel"===(r=t.action)&&clearTimeout(te.current),"picked"!==r||!t){n.next=17;break}return i=t.docs,n.next=6,(0,L.Qm)(i,A);case 6:c=n.sent,n.t0=e,n.next="video"===n.t0?10:"images"===n.t0?12:"paymentImage"===n.t0?14:16;break;case 10:return null!==c&&void 0!==c&&c.length&&(s=c[0],l=s.id,o=s.embedLink,$({id:l,value:o})),n.abrupt("break",17);case 12:return Q(c.map((function(e){var n=e.embedLink;return{id:e.id,value:n}}))),n.abrupt("break",17);case 14:return null!==c&&void 0!==c&&c.length&&(u=c[0],d=u.id,p=u.embedLink,ne({id:d,value:p})),n.abrupt("break",17);case 16:return n.abrupt("break",17);case 17:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()})):f.Am.error(j.v)},le=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(n){var t,i,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,r.Z)(J),i=t.findIndex((function(e){return e.id===n})),c=f.Am.promise((0,L.Fp)(n,A),{pending:"\u0110ang x\xf3a \u1ea3nh",success:"X\xf3a \u1ea3nh th\xe0nh c\xf4ng",error:j.v}),i>-1&&c&&(t.splice(i,1),Q(t));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),oe=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Am.promise((0,L.Fp)(R.id,A),{pending:"\u0110ang x\xf3a video",success:"X\xf3a video th\xe0nh c\xf4ng",error:j.v});case 2:e.sent&&$(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.Am.promise((0,L.Fp)(ee.id,A),{pending:"\u0110ang x\xf3a \u1ea3nh",success:"X\xf3a \u1ea3nh th\xe0nh c\xf4ng",error:j.v})&&ne(null);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){return function(){te.current&&clearTimeout(te.current)}}),[]),(0,E.jsxs)("div",{className:"my-5 mx-5 md:mx-10 lg:mx-20 xl:mx-32 flex gap-5 md:gap-10 kg:gap-20 xl:gap-32 text-xs sm:text-sm md:text-base",children:[(0,E.jsx)("div",{className:"sticky top-[100px] w-full h-[80vh] mx-auto hidden lg:block",style:{background:"url(".concat(b.E0,") center no-repeat"),backgroundSize:"cover"},children:(0,E.jsx)("div",{className:"absolute bottom-0 left-0 w-full text-white text-xl p-[20px] bg-black bg-opacity-50",children:(0,E.jsx)("p",{className:"text-center",children:"\u0110\u0103ng tin b\u1ea5t \u0111\u1ed9ng s\u1ea3n"})})}),(0,E.jsxs)("form",{className:"grid grid-cols-4 w-full place-content-start gap-5",children:[(0,E.jsx)("div",{className:"col-span-4 xl:col-span-3",children:(0,E.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium",children:"\u0110i\u1ec1n th\xf4ng tin b\u1ea5t \u0111\u1ed9ng s\u1ea3n"})}),(0,E.jsx)(g.cw,{className:"col-span-4 xl:col-span-1",htmlFor:"subject",label:"B\xe1n (Cho thu\xea)",error:o.subject,children:(0,E.jsx)("select",(0,i.Z)((0,i.Z)({},d("action",{required:!0,valueAsNumber:!0})),{},{className:"input",children:F.map((function(n){return(0,E.jsx)("option",{value:n.value,children:e(n.name)},n.value)}))}))}),(0,E.jsx)(g.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"type",label:"Lo\u1ea1i h\xecnh",error:o.houseType,children:(0,E.jsx)("select",(0,i.Z)((0,i.Z)({},d("houseType",{required:!0,valueAsNumber:!0})),{},{className:"input",children:k.map((function(n){return(0,E.jsx)("option",{value:n.value,children:e(n.name)},n.value)}))}))}),(0,E.jsx)(g.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"width",label:"Chi\u1ec1u ngang (m)",error:o.width,children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("width",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"Nh\u1eadp chi\u1ec1u ngang",type:"number",step:"0.01",min:0,max:1e4}))}),(0,E.jsx)(g.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"length",label:"Chi\u1ec1u d\xe0i (m)",error:o.length,children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("length",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"Nh\u1eadp chi\u1ec1u d\xe0i",type:"number",step:"0.01",min:0,max:1e4}))}),(0,E.jsx)(g.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"price",label:"Gi\xe1 (".concat(e(ae)," \u0111\u1ed3ng)"),error:o.price,children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("price",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"VD: 0.35",type:"number",step:"0.01",min:0,max:1e4}))}),(0,E.jsx)(g.cw,{className:"xl:col-span-2 col-span-4",htmlFor:"structure",label:"K\u1ebft c\u1ea5u",error:o.structure,children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("structure",{required:!0})),{},{className:"input",placeholder:"VD: 1 tr\u1ec7t 1 l\u1eedng 1 l\u1ea7u",type:"text"}))}),(0,E.jsx)(g.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"architecture",label:"Ki\u1ebfn tr\xfac",error:o.architecture,children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("architecture",{required:!0})),{},{className:"input",placeholder:"VD: 2PN 1WC",type:"text"}))}),(0,E.jsx)(g.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"direction",label:"H\u01b0\u1edbng",error:o.direction,children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("direction",{required:!0})),{},{className:"input",placeholder:"Nh\u1eadp h\u01b0\u1edbng",type:"text"}))}),(0,E.jsx)(g.cw,{className:"col-span-4",htmlFor:"address",label:"\u0110\u1ecba ch\u1ec9",children:(0,E.jsx)(m.Qr,{control:t,name:"address",defaultValue:w.W,rules:{required:!0,validate:function(e){var n,t=Object.entries(e),r="ch\u1ecdn";return t.forEach((function(e){var t=(0,s.Z)(e,2),a=t[0];if(t[1]);else switch(a){case"ward":return void(n="ph\u01b0\u1eddng / x\xe3");case"district":return void(n="qu\u1eadn / huy\u1ec7n");case"province":return void(n="t\u1ec9nh / th\xe0nh");case"address":return n="\u0111\u1ecba ch\u1ec9",void(r="nh\u1eadp")}})),!n||"Vui l\xf2ng ".concat(r," ").concat(n)}},render:function(e){var n=e.field,t=n.value,r=n.onChange,a=e.fieldState.error;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(g.i$,{value:t,onChange:r}),(0,E.jsx)(g.Xq,{label:"\u0110\u1ecba ch\u1ec9",error:a})]})}})}),(0,E.jsx)(g.cw,{className:"col-span-2",htmlFor:"contactName",label:"T\xean li\xean h\u1ec7",error:o.contactName,children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("contactName",{required:!0})),{},{className:"input",placeholder:"Nguy\u1ec5n V\u0103n A",type:"text"}))}),(0,E.jsx)(g.cw,{className:"col-span-2",htmlFor:"contactNumber",label:"S\u0110T li\xean h\u1ec7",error:o.contactNumber,children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("contactNumber",{required:!0,pattern:/^0/})),{},{className:"input",maxLength:10,placeholder:"0911xxxxxx",onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()},type:"text"}))}),(0,E.jsx)(g.cw,{className:"col-span-4",htmlFor:"description",label:"Th\xf4ng tin",error:o.description,children:(0,E.jsx)("textarea",(0,i.Z)((0,i.Z)({},d("description",{required:!0,maxLength:255})),{},{className:"input resize-none",placeholder:"VD: G\u1ea7n ch\u1ee3, tr\u01b0\u1eddng h\u1ecdc...",rows:5,maxLength:255}))}),(0,E.jsx)(g.cw,{className:"col-span-4",htmlFor:"addressLink",label:"Link google map",children:(0,E.jsx)("input",(0,i.Z)((0,i.Z)({},d("addressLink")),{},{className:"input",placeholder:"Nh\u1eadp link google map...",type:"text"}))}),(0,E.jsx)("div",{className:"col-span-4",children:(0,E.jsx)("label",{htmlFor:"",children:(0,E.jsx)("div",{className:"relative aspect-vid",children:(0,E.jsx)("iframe",{className:"absolute top-0 left-0 w-full h-full",src:"https://www.youtube.com/embed/IJPb7lo6CK4?autoplay=1",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),(0,E.jsxs)("div",{className:"col-span-4",children:[(0,E.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium mb-5",children:"Vui l\xf2ng ti\u1ebfn h\xe0nh thanh to\xe1n \u0111\u1ec3 \u0111\u0103ng tin"}),(0,E.jsx)("p",{children:"H\u01b0\u1edbng d\u1eabn thanh to\xe1n"}),(0,E.jsx)("p",{children:"Chuy\u1ec3n ti\u1ec1n qua Vietcombank"}),(0,E.jsx)("p",{children:"S\u1ed1 ti\u1ec1n 20.000\u0111"}),(0,E.jsx)("p",{children:"Ng\u01b0\u1eddi nh\u1eadn STK 0531002582311"}),(0,E.jsxs)("p",{children:["Sau \u0111\xf3 t\u1ea3i \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n \u0111\xe3 thanh to\xe1n l\xean v\xe0o \xf4 b\xean d\u01b0\u1edbi r\u1ed3i b\u1ea5m n\xfat ",(0,E.jsx)("b",{children:"Ho\xe0n t\u1ea5t"})]}),(0,E.jsx)("img",{className:"w-[175px] md:w-[259px] h-[175px] md:h-[259px] mx-auto my-5 shadow",src:b.qr,alt:""}),(0,E.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){se("paymentImage")},children:"T\u1ea3i l\xean \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n"}),!!ee&&(0,E.jsxs)("div",{className:"relative mx-auto w-[120px] my-2",children:[(0,E.jsx)("iframe",{title:"Payment image",className:"w-full overflow-hidden aspect-square border",src:ee.value}),(0,E.jsx)(h.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:ue})]})]}),!!ee&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(g.cw,{className:"col-span-4",htmlFor:"video",label:"Link video",children:[(0,E.jsx)("small",{children:"Maximum file size limit is 300Mb.(Video Length 12-13 Minutes)"}),(0,E.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){se("video")},children:"T\u1ea3i l\xean video"})]}),(0,E.jsx)("div",{className:"col-span-4 flex flex-wrap gap-2",children:!!R&&(0,E.jsxs)("div",{className:"relative mx-auto",children:[(0,E.jsx)("iframe",{className:"w-full overflow-hidden aspect-video border",title:"video",scrolling:"no",src:R.value}),(0,E.jsx)(h.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:oe})]})}),(0,E.jsx)(g.cw,{className:"col-span-4",htmlFor:"images",label:"H\xecnh \u1ea3nh",children:(0,E.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){se("images")},children:"T\u1ea3i l\xean h\xecnh \u1ea3nh"})}),(0,E.jsx)("div",{className:"col-span-4 flex flex-wrap gap-2",children:J.map((function(e){return(0,E.jsxs)("div",{className:"relative",children:[(0,E.jsx)("iframe",{className:"w-[60px] md:w-[80px] lg:w-[96px] overflow-hidden aspect-square border",title:e.id,scrolling:"no",src:e.value}),(0,E.jsx)(h.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:function(){return le(e.id)}})]},e.id)}))})]}),(0,E.jsx)("div",{className:"col-span-4 ",children:(0,E.jsxs)("button",{type:"button",onClick:function(){N((function(e){ee?ie(e):f.Am.warn("Vui l\xf2ng t\u1ea3i l\xean \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n \u0111\u1ec3 \u0111\u0103ng b\xe0i")}))()},className:"btn w-full md:w-[259px] mx-auto mt-5",children:[G&&(0,E.jsx)(h.Z7b,{className:"animate-spin"}),"Ho\xe0n t\u1ea5t"]})})]})]})}}}]);