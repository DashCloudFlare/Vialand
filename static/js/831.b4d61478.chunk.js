"use strict";(self.webpackChunkvialand=self.webpackChunkvialand||[]).push([[831],{5905:function(e,t,n){n.d(t,{iy:function(){return o},$m:function(){return i}});var r=n(9869),a="https://mail.vialand.vn",i=function(){return(0,r.Z)("GET",a+"/renew")},o=function(){return(0,r.Z)("POST",a+"/notification")}},9869:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4165),a=n(5861),i=n(1172);function o(e,t,n){return c.apply(this,arguments)}function c(){return(c=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var o,c,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={method:t,mode:"cors",headers:{"Content-Type":"application/json",secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}},c=n,a&&("GET"===t?(s=i.stringify(a),c+="?"+s):(o.body=a instanceof FormData?a:JSON.stringify(a),a instanceof FormData&&(o.headers={secret:"h6N&d3ZpiUZ@Mx9sjAF0!"}))),e.next=5,fetch(c,o);case 5:if(!(l=e.sent).ok){e.next=10;break}return e.next=9,l.json();case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",void 0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},7629:function(e,t,n){n.d(t,{v:function(){return r}});var r="\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau \xedt ph\xfat"},887:function(e,t,n){var r,a,i;n.d(t,{Hx:function(){return i},tU:function(){return a}}),function(e){e[e.east=1]="east",e[e.west=2]="west",e[e.south=3]="south",e[e.north=4]="north",e[e.northEast=5]="northEast",e[e.northSouth=6]="northSouth",e[e.southEase=7]="southEase",e[e.southWest=8]="southWest"}(r||(r={})),function(e){e[e.house=1]="house",e[e.land=2]="land",e[e.apartment=3]="apartment",e[e.villa=4]="villa",e[e.resort=5]="resort",e[e.factory=6]="factory",e[e.plan=7]="plan",e[e.bedsit=8]="bedsit"}(a||(a={})),function(e){e[e.trade=1]="trade",e[e.rent=2]="rent"}(i||(i={}))},6243:function(e,t,n){n.d(t,{db:function(){return m}});var r=n(271),a=n(4457),i=n(6797),o=n(8941).Z.firebase,c=o.apiKey,s=o.appId,l=o.databaseURL,u=o.projectId,d=o.storageBucket,p={apiKey:c,authDomain:o.authDomain,databaseURL:l,projectId:u,storageBucket:d,messagingSenderId:o.messagingSenderId,appId:s},h=(0,r.ZF)(p),m=(0,a.ad)(h);(0,i.cF)(h)},3278:function(e,t,n){n.d(t,{Fp:function(){return a},Qm:function(){return r},yC:function(){return i}});var r=function(e,t){return Promise.all(e.map((function(e){return fetch("https://www.googleapis.com/drive/v2/files/".concat(e.id,"?fields=thumbnailLink,embedLink,id"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}})}))).then((function(e){return Promise.all(e.map((function(e){return e.json()}))).then((function(e){return e.map((function(e){return{id:e.id,thumbnailLink:e.thumbnailLink,embedLink:e.embedLink,webViewLink:e.webViewLink}}))}))})).catch()},a=function(e,t){return fetch("https://www.googleapis.com/drive/v3/files/".concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(){return!0})).catch((function(){return!1}))},i=function(e,t){var n=[];return["video","images","paymentImage"].forEach((function(r){var i=e[r];i&&(Array.isArray(i)?i.forEach((function(e){return n.push(a(e.id,t))})):Object.keys(i).length&&null!==i&&void 0!==i&&i.id&&n.push(a(null===i||void 0===i?void 0:i.id,t)))})),n}},3831:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(3433),a=n(4165),i=n(1413),o=n(5861),c=n(9439),s=n(4457),l=n(9548),u=n(7313),d=n(1868),p=n.n(d),h=n(5627),m=n(4511),f=n(7864),v=n(8512),x=n(5905),g=n(809),b=n(2589),w=n(8298),j=n(8941),y=n(7629),k=n(887),N=[{name:"house",value:k.tU.house},{name:"land",value:k.tU.land},{name:"apartment",value:k.tU.apartment},{name:"villa",value:k.tU.villa},{name:"resort",value:k.tU.resort},{name:"factory",value:k.tU.factory},{name:"plan",value:k.tU.plan},{name:"bedsit",value:k.tU.bedsit}],Z=[{name:"trading",value:k.Hx.trade},{name:"rent",value:k.Hx.rent}],F=n(5857),S=n(6243),M=n(3278),E=n(5993),I=n(699),T=n(3027),L=function(e){var t=e.province,n=e.ward,r=e.district,a=I.find((function(e){return parseInt(e.id,10)===t})),o=T.find((function(e){return parseInt(e.id,10)===r})),c=E.find((function(e){return parseInt(e.id,10)===n})),s="".concat(o.typeName," ").concat(o.name.startsWith("Qu\u1eadn")?o.name.substring(5):o.name);return(0,i.Z)((0,i.Z)({},e),{},{provinceName:"".concat(a.typeName," ").concat(null===a||void 0===a?void 0:a.name),districtName:s,wardName:null===c||void 0===c?void 0:c.name})},A=n(4885),C=n(6417),V=j.Z.google,D=V.apiKey,q=V.clientId,P=j.Z.common,U=function(e){var t=e.action,n=e.houseType,r=e.width,a=e.length,i=e.address,o=r*a;o=Number.isInteger(o)?o:o.toFixed(2);var c=L(i),s=c.address,u=c.wardName,d=c.districtName,p=c.provinceName;return["".concat((0,l.t)(Z.find((function(e){return e.value===t})).name)," ").concat((0,l.t)(N.find((function(e){return e.value===n})).name)," ").concat(o,"m\xb2 (").concat(r," x ").concat(a,"m)"),"".concat(s,", ").concat(u,", ").concat(d,", ").concat(p)]};function _(){var e=(0,m.$)().t,t=(0,h.cI)(),n=t.control,l=t.formState.errors,d=t.register,E=t.handleSubmit,I=t.watch,T=p()(),V=(0,c.Z)(T,1)[0],_=(0,F.Eu)(),O=_.token,K=_.getAccessToken,H=(0,u.useState)(!1),z=(0,c.Z)(H,2),B=z[0],G=z[1],Q=(0,u.useState)([]),W=(0,c.Z)(Q,2),R=W[0],J=W[1],X=(0,u.useState)(null),$=(0,c.Z)(X,2),Y=$[0],ee=$[1],te=(0,u.useState)(null),ne=(0,c.Z)(te,2),re=ne[0],ae=ne[1],ie=I("action"),oe=(0,u.useMemo)((function(){return ie===k.Hx.trade?"billion":"million"}),[ie]),ce=ie===k.Hx.trade?"billion":"million",se=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n,r,o,l,u,d,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.prev=1,n=U(t),r=(0,c.Z)(n,2),o=r[0],l=r[1],u=(0,A.lV)(o+"-"+l)+"-"+Date.now().toString(),d=ce?1e3*t.price:t.price,p=[(0,s.ET)((0,s.hJ)(S.db,"properties"),(0,i.Z)((0,i.Z)((0,i.Z)({},t),L(t.address)),{},{price:d,slug:u,published:!1,hideVideo:!1,images:R,video:Y,paymentImage:re,subject:o,createdAt:s.EK.now().seconds})),fetch(P.baseApiUrl+"/news-submission",{headers:{"Content-Type":"application/json",secret:P.secret},method:"POST",body:JSON.stringify({name:o,link:window.location.origin+"/chothue?slug=".concat(u)})})],e.next=8,v.Am.promise(Promise.all(p),{pending:"\u0110ang \u0111\u0103ng tin",success:"\u0110\u0103ng tin BDS th\xe0nh c\xf4ng",error:y.v});case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:return e.prev=12,"undefined"!==typeof window&&"location"in window&&window.location.reload(),G(!1),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[1,10,12,16]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O){e.next=8;break}if(n=window.sessionStorage.getItem(j.Z.common.accessTokenKey),!(0,F.pw)(n)){e.next=5;break}return e.next=5,K();case 5:V({clientId:q,developerKey:D,token:O,showUploadView:!0,showUploadFolders:!0,supportDrives:!0,setParentFolder:P.isDev?void 0:"1ffWn9rpAhl7KOkaEzIcFhuT8k_GvHbfS",multiselect:"images"===t,disableDefaultView:!0,callbackFunction:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n){var r,i,o,c,s,l,u,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("picked"!==n.action||!n){e.next=19;break}return e.next=5,(0,x.iy)();case 5:return r=n.docs,e.next=8,(0,M.Qm)(r,O);case 8:i=e.sent,e.t0=t,e.next="video"===e.t0?12:"images"===e.t0?14:"paymentImage"===e.t0?16:18;break;case 12:return null!==i&&void 0!==i&&i.length&&(o=i[0],c=o.id,s=o.embedLink,ee({id:c,value:s})),e.abrupt("break",19);case 14:return J(i.map((function(e){var t=e.embedLink;return{id:e.id,value:t}}))),e.abrupt("break",19);case 16:return null!==i&&void 0!==i&&i.length&&(l=i[0],u=l.id,d=l.embedLink,ae({id:u,value:d})),e.abrupt("break",19);case 18:return e.abrupt("break",19);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),e.next=9;break;case 8:v.Am.error(y.v);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,r.Z)(R),i=n.findIndex((function(e){return e.id===t})),o=v.Am.promise((0,M.Fp)(t,O),{pending:"\u0110ang x\xf3a \u1ea3nh",success:"X\xf3a \u1ea3nh th\xe0nh c\xf4ng",error:y.v}),i>-1&&o&&(n.splice(i,1),J(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Am.promise((0,M.Fp)(Y.id,O),{pending:"\u0110ang x\xf3a video",success:"X\xf3a video th\xe0nh c\xf4ng",error:y.v});case 2:e.sent&&ee(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.Am.promise((0,M.Fp)(re.id,O),{pending:"\u0110ang x\xf3a \u1ea3nh",success:"X\xf3a \u1ea3nh th\xe0nh c\xf4ng",error:y.v})&&ae(null);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){document.title="\u0110\u0103ng tin"}),[]),(0,C.jsxs)("div",{className:"my-5 mx-2 md:mx-10 lg:mx-20 xl:mx-32 flex gap-5 md:gap-10 kg:gap-20 xl:gap-32 text-xs sm:text-sm md:text-base",children:[(0,C.jsx)("div",{className:"sticky top-[100px] w-full h-[80vh] mx-auto hidden lg:block",style:{background:"url(".concat(g.E0,") center no-repeat"),backgroundSize:"cover"},children:(0,C.jsx)("div",{className:"absolute bottom-0 left-0 w-full text-white text-xl p-[20px] bg-black bg-opacity-50",children:(0,C.jsx)("p",{className:"text-center",children:"\u0110\u0103ng tin b\u1ea5t \u0111\u1ed9ng s\u1ea3n"})})}),(0,C.jsxs)("form",{className:"grid grid-cols-4 w-full place-content-start gap-5",children:[(0,C.jsx)("div",{className:"col-span-4 xl:col-span-3",children:(0,C.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium",children:"\u0110i\u1ec1n th\xf4ng tin b\u1ea5t \u0111\u1ed9ng s\u1ea3n"})}),(0,C.jsx)(b.cw,{className:"col-span-4 xl:col-span-1",htmlFor:"subject",label:"B\xe1n (Cho thu\xea)",error:l.subject,children:(0,C.jsx)("select",(0,i.Z)((0,i.Z)({},d("action",{required:!0,valueAsNumber:!0})),{},{className:"input",children:Z.map((function(t){return(0,C.jsx)("option",{value:t.value,children:e(t.name)},t.value)}))}))}),(0,C.jsx)(b.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"type",label:"Lo\u1ea1i h\xecnh",error:l.houseType,children:(0,C.jsx)("select",(0,i.Z)((0,i.Z)({},d("houseType",{required:!0,valueAsNumber:!0})),{},{className:"input",children:N.map((function(t){return(0,C.jsx)("option",{value:t.value,children:e(t.name)},t.value)}))}))}),(0,C.jsx)(b.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"width",label:"Chi\u1ec1u ngang (m)",error:l.width,children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("width",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"Nh\u1eadp chi\u1ec1u ngang",type:"number",step:"0.01",min:0,max:1e4}))}),(0,C.jsx)(b.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"length",label:"Chi\u1ec1u d\xe0i (m)",error:l.length,children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("length",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"Nh\u1eadp chi\u1ec1u d\xe0i",type:"number",step:"0.01",min:0,max:1e4}))}),(0,C.jsx)(b.cw,{className:"col-span-2 xl:col-span-1",htmlFor:"price",label:"Gi\xe1 (".concat(e(oe)," \u0111\u1ed3ng)"),error:l.price,children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("price",{valueAsNumber:!0,required:!0,min:0,max:1e4})),{},{className:"input",placeholder:"VD: 0.35",type:"number",step:"0.01",min:0,max:1e4}))}),(0,C.jsx)(b.cw,{className:"xl:col-span-2 col-span-4",htmlFor:"structure",label:"K\u1ebft c\u1ea5u",error:l.structure,children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("structure",{required:!0})),{},{className:"input",placeholder:"VD: 1 tr\u1ec7t 1 l\u1eedng 1 l\u1ea7u",type:"text"}))}),(0,C.jsx)(b.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"architecture",label:"Ki\u1ebfn tr\xfac",error:l.architecture,children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("architecture",{required:!0})),{},{className:"input",placeholder:"VD: 2PN 1WC",type:"text"}))}),(0,C.jsx)(b.cw,{className:"xl:col-span-1 col-span-4",htmlFor:"direction",label:"H\u01b0\u1edbng",error:l.direction,children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("direction",{required:!0})),{},{className:"input",placeholder:"Nh\u1eadp h\u01b0\u1edbng",type:"text"}))}),(0,C.jsx)(b.cw,{className:"col-span-4",htmlFor:"address",label:"\u0110\u1ecba ch\u1ec9",children:(0,C.jsx)(h.Qr,{control:n,name:"address",defaultValue:w.W,rules:{required:!0,validate:function(e){var t,n=Object.entries(e),r="ch\u1ecdn";return n.forEach((function(e){var n=(0,c.Z)(e,2),a=n[0];if(n[1]);else switch(a){case"ward":return void(t="ph\u01b0\u1eddng / x\xe3");case"district":return void(t="qu\u1eadn / huy\u1ec7n");case"province":return void(t="t\u1ec9nh / th\xe0nh");case"address":return t="\u0111\u1ecba ch\u1ec9",void(r="nh\u1eadp")}})),!t||"Vui l\xf2ng ".concat(r," ").concat(t)}},render:function(e){var t=e.field,n=t.value,r=t.onChange,a=e.fieldState.error;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(b.i$,{value:n,onChange:r}),(0,C.jsx)(b.Xq,{label:"\u0110\u1ecba ch\u1ec9",error:a})]})}})}),(0,C.jsx)(b.cw,{className:"col-span-2",htmlFor:"contactName",label:"T\xean li\xean h\u1ec7",error:l.contactName,children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("contactName",{required:!0})),{},{className:"input",placeholder:"Nguy\u1ec5n V\u0103n A",type:"text"}))}),(0,C.jsx)(b.cw,{className:"col-span-2",htmlFor:"contactNumber",label:"S\u0110T li\xean h\u1ec7",error:l.contactNumber,children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("contactNumber",{required:!0,pattern:/^0/})),{},{className:"input",maxLength:10,placeholder:"0911xxxxxx",onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()},type:"text"}))}),(0,C.jsx)(b.cw,{className:"col-span-4",htmlFor:"description",label:"Th\xf4ng tin",error:l.description,children:(0,C.jsx)("textarea",(0,i.Z)((0,i.Z)({},d("description",{required:!0,maxLength:255})),{},{className:"input resize-none",placeholder:"VD: G\u1ea7n ch\u1ee3, tr\u01b0\u1eddng h\u1ecdc...",rows:5,maxLength:255}))}),(0,C.jsx)(b.cw,{className:"col-span-4",htmlFor:"addressLink",label:"Link google map",children:(0,C.jsx)("input",(0,i.Z)((0,i.Z)({},d("addressLink")),{},{className:"input",placeholder:"Nh\u1eadp link google map...",type:"text"}))}),(0,C.jsx)("div",{className:"col-span-4",children:(0,C.jsx)("label",{htmlFor:"",children:(0,C.jsx)("div",{className:"relative aspect-vid",children:(0,C.jsx)("iframe",{className:"absolute top-0 left-0 w-full h-full",src:"https://www.youtube.com/embed/IJPb7lo6CK4?autoplay=1",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})}),(0,C.jsxs)("div",{className:"col-span-4",children:[(0,C.jsx)("h1",{className:"text-base md:text-xl xl:text-2xl font-medium mb-5",children:"Vui l\xf2ng ti\u1ebfn h\xe0nh thanh to\xe1n \u0111\u1ec3 \u0111\u0103ng tin"}),(0,C.jsx)("p",{children:"H\u01b0\u1edbng d\u1eabn thanh to\xe1n"}),(0,C.jsx)("p",{children:"Qu\xe9t m\xe3 QR code b\u1eb1ng App b\u1ea5t k\u1ef3 (ho\u1eb7c)"}),(0,C.jsx)("p",{children:"Chuy\u1ec3n ti\u1ec1n qua Vietcombank"}),(0,C.jsx)("p",{children:"S\u1ed1 ti\u1ec1n 20.000\u0111"}),(0,C.jsx)("p",{children:"Ng\u01b0\u1eddi nh\u1eadn STK 0531002582311"}),(0,C.jsxs)("p",{children:["Sau \u0111\xf3 t\u1ea3i \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n \u0111\xe3 thanh to\xe1n l\xean v\xe0o \xf4 b\xean d\u01b0\u1edbi r\u1ed3i b\u1ea5m n\xfat ",(0,C.jsx)("b",{children:"Ho\xe0n t\u1ea5t"})]}),(0,C.jsx)("img",{className:"w-[175px] md:w-[259px] h-[175px] md:h-[259px] mx-auto my-5 shadow",src:g.qr,alt:""}),(0,C.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){le("paymentImage")},children:"T\u1ea3i l\xean \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n"}),!!re&&(0,C.jsxs)("div",{className:"relative mx-auto w-[120px] my-2",children:[(0,C.jsx)("img",{title:"Payment image",className:"w-full object-cover overflow-hidden aspect-square border",src:"https://lh3.googleusercontent.com/d/".concat(re.id),alt:""}),(0,C.jsx)(f.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:pe})]})]}),!!re&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(b.cw,{className:"col-span-4",htmlFor:"video",label:"Link video",children:[(0,C.jsx)("small",{children:"Maximum file size limit is 300Mb.(Video Length 12-13 Minutes)"}),(0,C.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){le("video")},children:"T\u1ea3i l\xean video"})]}),(0,C.jsx)("div",{className:"col-span-4 flex flex-wrap gap-2",children:!!Y&&(0,C.jsxs)("div",{className:"relative mx-auto",children:[(0,C.jsx)("object",{className:"w-full overflow-hidden aspect-video border",title:"video",data:Y.value}),(0,C.jsx)(f.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:de})]})}),(0,C.jsx)(b.cw,{className:"col-span-4",htmlFor:"images",label:"H\xecnh \u1ea3nh",children:(0,C.jsx)("button",{type:"button",className:"btn w-full md:w-[259px] mx-auto",onClick:function(){le("images")},children:"T\u1ea3i l\xean h\xecnh \u1ea3nh"})}),(0,C.jsx)("div",{className:"col-span-4 flex flex-wrap gap-2",children:R.map((function(e){return(0,C.jsxs)("div",{className:"relative",children:[(0,C.jsx)("img",{className:"w-[60px] md:w-[80px] lg:w-[96px] overflow-hidden object-cover aspect-square border",title:e.id,src:"https://lh3.googleusercontent.com/d/".concat(e.id),alt:""}),(0,C.jsx)(f.oHP,{className:"absolute bg-white rounded-full shadow md:text-base lg:text-lg -top-1.5 -right-1.5 cursor-pointer z-10",onClick:function(){return ue(e.id)}})]},e.id)}))})]}),(0,C.jsx)("div",{className:"col-span-4 ",children:(0,C.jsxs)("button",{type:"button",onClick:function(){E((function(e){re?se(e):v.Am.warn("Vui l\xf2ng t\u1ea3i l\xean \u1ea3nh ch\u1ee5p h\xf3a \u0111\u01a1n \u0111\u1ec3 \u0111\u0103ng b\xe0i")}))()},className:"btn w-full md:w-[259px] mx-auto mt-5",children:[B&&(0,C.jsx)(f.Z7b,{className:"animate-spin"}),"Ho\xe0n t\u1ea5t"]})})]})]})}},1868:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(7313),c=n(8239),s=i(n(6847));t.default=function(){var e,t=["https://www.googleapis.com/auth/drive.readonly"],n=(0,s.default)("https://apis.google.com/js/api.js"),i=n[0],l=n[1],u=(0,s.default)("https://accounts.google.com/gsi/client"),d=u[0],p=u[1],h=(0,o.useState)(!1),m=h[0],f=h[1],v=(0,o.useState)(!1),x=v[0],g=v[1],b=(0,o.useState)(!1),w=(b[0],b[1],(0,o.useState)(c.defaultConfiguration)),j=w[0],y=w[1],k=(0,o.useState)(),N=k[0],Z=k[1];(0,o.useEffect)((function(){!i||l||!d||p||m||F()}),[i,l,d,p,m]),(0,o.useEffect)((function(){x&&j.token&&i&&!l&&d&&!p&&m&&(M(j),g(!1))}),[x,j.token,i,l,d,p,m]);var F=function(){window.gapi.load("auth"),window.gapi.load("picker",{callback:S})},S=function(){f(!0)},M=function(t){var n=t.token,r=t.appId,a=void 0===r?"":r,i=t.supportDrives,o=void 0!==i&&i,c=t.developerKey,s=t.viewId,l=void 0===s?"DOCS":s,u=t.disabled,d=t.multiselect,p=t.showUploadView,h=void 0!==p&&p,m=t.showUploadFolders,f=t.setParentFolder,v=void 0===f?"":f,x=t.viewMimeTypes,g=t.customViews,b=t.locale,w=void 0===b?"en":b,j=t.setIncludeFolders,y=t.setSelectFolderEnabled,k=t.disableDefaultView,N=void 0!==k&&k,Z=t.callbackFunction;if(u)return!1;var F=new google.picker.DocsView(google.picker.ViewId[l]);x&&F.setMimeTypes(x),j&&F.setSelectFolderEnabled(!0),y&&F.setSelectFolderEnabled(!0);var S=new google.picker.DocsUploadView;return x&&S.setMimeTypes(x),m&&S.setIncludeFolders(!0),v&&S.setParent(v),e=(new google.picker.PickerBuilder).setAppId(a).setOAuthToken(n).setDeveloperKey(c).setLocale(w).setCallback(Z),N||e.addView(F),g&&g.map((function(t){return e.addView(t)})),d&&e.enableFeature(google.picker.Feature.MULTISELECT_ENABLED),h&&e.addView(S),o&&e.enableFeature(google.picker.Feature.SUPPORT_DRIVES),e.build().setVisible(!0),!0};return[function(e){(y(e),e.token)||google.accounts.oauth2.initTokenClient({client_id:e.clientId,scope:(e.customScopes?a(a([],t,!0),e.customScopes,!0):t).join(" "),callback:function(t){Z(t),M(r(r({},e),{token:t.access_token}))}}).requestAccessToken();if(e.token&&i&&!l&&m)return M(e)},N]}},8239:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultConfiguration=void 0,t.defaultConfiguration={clientId:"",developerKey:"",viewId:"DOCS",callbackFunction:function(){return null}}},6847:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(7313),a={queue:{},injectorMap:{},scriptMap:{}};t.default=function(e){var t=(0,r.useState)({loaded:!1,error:!1}),n=t[0],i=t[1];return(0,r.useEffect)((function(){var t,n,r,o,c;if((null===(t=a.injectorMap)||void 0===t?void 0:t[e])||(a.injectorMap[e]="init"),"loaded"!==a.injectorMap[e]){if("error"!==a.injectorMap[e]){var s=function(t){var n,r,i,o;t&&console.log("error loading the script"),null===(r=null===(n=a.queue)||void 0===n?void 0:n[e])||void 0===r||r.forEach((function(e){return e(t)})),t&&a.scriptMap[e]?(null===(o=null===(i=a.scriptMap)||void 0===i?void 0:i[e])||void 0===o||o.remove(),a.injectorMap[e]="error"):a.injectorMap[e]="loaded",delete a.scriptMap[e]},l=function(e){i({loaded:!0,error:e})};return(null===(n=a.scriptMap)||void 0===n?void 0:n[e])||(a.scriptMap[e]=document.createElement("script"),a.scriptMap[e]&&(a.scriptMap[e].src=e,a.scriptMap[e].async=!0,document.body.append(a.scriptMap[e]),a.scriptMap[e].addEventListener("load",(function(){return s(!1)})),a.scriptMap[e].addEventListener("error",(function(){return s(!0)})),a.injectorMap[e]="loading")),(null===(r=a.queue)||void 0===r?void 0:r[e])?null===(c=null===(o=a.queue)||void 0===o?void 0:o[e])||void 0===c||c.push(l):a.queue[e]=[l],function(){var t,n;a.scriptMap[e]&&(null===(t=a.scriptMap[e])||void 0===t||t.removeEventListener("load",(function(){return s(!0)})),null===(n=a.scriptMap[e])||void 0===n||n.removeEventListener("error",(function(){return s(!0)})))}}i({loaded:!0,error:!0})}else i({loaded:!0,error:!1})}),[e]),[n.loaded,n.error]}}}]);