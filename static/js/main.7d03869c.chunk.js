(this.webpackJsonpd3ia=this.webpackJsonpd3ia||[]).push([[3],{11:function(a,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"i",(function(){return l})),n.d(e,"w",(function(){return d})),n.d(e,"r",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"x",(function(){return f})),n.d(e,"m",(function(){return v})),n.d(e,"A",(function(){return h})),n.d(e,"c",(function(){return p})),n.d(e,"q",(function(){return m})),n.d(e,"y",(function(){return T})),n.d(e,"z",(function(){return g})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return j})),n.d(e,"g",(function(){return b})),n.d(e,"s",(function(){return A})),n.d(e,"t",(function(){return D})),n.d(e,"p",(function(){return S})),n.d(e,"o",(function(){return w})),n.d(e,"n",(function(){return k})),n.d(e,"l",(function(){return N})),n.d(e,"j",(function(){return F})),n.d(e,"k",(function(){return P})),n.d(e,"v",(function(){return C})),n.d(e,"u",(function(){return R}));var t=n(52),o=n(80),i="https://data.covid19india.org",r="".concat(i,"/v4/min"),c=1e5,l={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},d={confirmed:{displayName:"confirmed",color:"#ff073a",format:"long",showDelta:!0,hasPrimary:!0},active:{displayName:"active",color:"#007bff",format:"long",hasPrimary:!0},recovered:{displayName:"recovered",color:"#28a745",format:"long",showDelta:!0,hasPrimary:!0},deceased:{displayName:"deceased",color:"#6c757d",format:"long",showDelta:!0,hasPrimary:!0},other:{displayName:"other",format:"long",color:"#fd7e14",showDelta:!0,tableConfig:{notes:"Migrated cases or non-COVID deaths"},hasPrimary:!0},tested:{displayName:"tested",color:"#4b1eaa",format:"short",showDelta:!0,hideZero:!0,category:"tested"},vaccinated1:{displayName:"vaccinated (at least one dose)",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},vaccinated2:{displayName:"fully vaccinated",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},vaccinated:{displayName:"vaccine doses administered",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},tpr:{displayName:"test positivity ratio",format:"%",color:"#fd7e14",nonLinear:!0,onlyDelta7:!0,hideZero:!0,category:"tested",tableConfig:{notes:"Calculated over last 7 days"},hasPrimary:!0},cfr:{displayName:"case fatality ratio",format:"%",color:"#fd7e14",nonLinear:!0,hasPrimary:!0},recoveryRatio:{displayName:"recovery ratio",format:"%",nonLinear:!0,tableConfig:{hide:!0},hasPrimary:!0},activeRatio:{displayName:"active ratio",format:"%",nonLinear:!0,tableConfig:{hide:!0},hasPrimary:!0},caseGrowth:{displayName:"Case Growth",format:"%",nonLinear:!0,canBeInfinite:!0,tableConfig:{notes:"Percentage growth of cases last week compared to the week a fortnight ago"},hasPrimary:!0,mapConfig:{transformFn:function(a){return a<=0?"\u2264 0%":a<=20?"0 - 20%":a<=50?"20 - 50%":a>50?"> 50%":void 0},colorScale:Object(o.a)(["\u2264 0%","0 - 20%","20 - 50%","> 50%"],["#1a9850","#fee08b","#fc8d59","#d73027"])}},population:{displayName:"population",format:"short",color:"#b6854d",hideZero:!0,mapConfig:{spike:!0}}},s=["confirmed","active","recovered","deceased"],u=[].concat(s),f=([].concat(s,["tested","vaccinated"]),Object.keys(d).filter((function(a){var e,n;return!(null===(e=d[a])||void 0===e||null===(n=e.tableConfig)||void 0===n?void 0:n.hide)}))),v=[].concat(s),h=([].concat(s,["tested","vaccinated","tpr"]),5),p=300,m=21,T=7,g="Unknown",y="2020-04-26",j="2021-02-02",b=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,A="T00:00:00+05:30",D={clamp:!0,precision:1},S={CHOROPLETH:0,BUBBLE:1,SPIKE:2},w={STATES:0,DISTRICTS:1},k={COUNTRY:0,STATE:1},E="/mini_maps",N={AP:{geoDataFile:"".concat(E,"/andhrapradesh.json"),mapType:k.STATE},AR:{geoDataFile:"".concat(E,"/arunachalpradesh.json"),mapType:k.STATE},AS:{geoDataFile:"".concat(E,"/assam.json"),mapType:k.STATE},BR:{geoDataFile:"".concat(E,"/bihar.json"),mapType:k.STATE},CT:{geoDataFile:"".concat(E,"/chhattisgarh.json"),mapType:k.STATE},GA:{geoDataFile:"".concat(E,"/goa.json"),mapType:k.STATE},GJ:{geoDataFile:"".concat(E,"/gujarat.json"),mapType:k.STATE},HR:{geoDataFile:"".concat(E,"/haryana.json"),mapType:k.STATE},HP:{geoDataFile:"".concat(E,"/himachalpradesh.json"),mapType:k.STATE},JK:{geoDataFile:"".concat(E,"/jammukashmir.json"),mapType:k.STATE},JH:{geoDataFile:"".concat(E,"/jharkhand.json"),mapType:k.STATE},KA:{geoDataFile:"".concat(E,"/karnataka.json"),mapType:k.STATE},KL:{geoDataFile:"".concat(E,"/kerala.json"),mapType:k.STATE},MP:{geoDataFile:"".concat(E,"/madhyapradesh.json"),mapType:k.STATE},MH:{geoDataFile:"".concat(E,"/maharashtra.json"),mapType:k.STATE},MN:{geoDataFile:"".concat(E,"/manipur.json"),mapType:k.STATE},ML:{geoDataFile:"".concat(E,"/meghalaya.json"),mapType:k.STATE},MZ:{geoDataFile:"".concat(E,"/mizoram.json"),mapType:k.STATE},NL:{geoDataFile:"".concat(E,"/nagaland.json"),mapType:k.STATE},OR:{geoDataFile:"".concat(E,"/odisha.json"),mapType:k.STATE},PB:{geoDataFile:"".concat(E,"/punjab.json"),mapType:k.STATE},RJ:{geoDataFile:"".concat(E,"/rajasthan.json"),mapType:k.STATE},SK:{geoDataFile:"".concat(E,"/sikkim.json"),mapType:k.STATE},TN:{geoDataFile:"".concat(E,"/tamilnadu.json"),mapType:k.STATE},TG:{geoDataFile:"".concat(E,"/telangana.json"),mapType:k.STATE},TR:{geoDataFile:"".concat(E,"/tripura.json"),mapType:k.STATE},UT:{geoDataFile:"".concat(E,"/uttarakhand.json"),mapType:k.STATE},UP:{geoDataFile:"".concat(E,"/uttarpradesh.json"),mapType:k.STATE},WB:{geoDataFile:"".concat(E,"/westbengal.json"),mapType:k.STATE},AN:{geoDataFile:"".concat(E,"/andamannicobarislands.json"),mapType:k.STATE},CH:{geoDataFile:"".concat(E,"/chandigarh.json"),mapType:k.STATE},DN:{geoDataFile:"".concat(E,"/dnh-and-dd.json"),mapType:k.STATE},DL:{geoDataFile:"".concat(E,"/delhi.json"),mapType:k.STATE},LA:{geoDataFile:"".concat(E,"/ladakh.json"),mapType:k.STATE},LD:{geoDataFile:"".concat(E,"/lakshadweep.json"),mapType:k.STATE},PY:{geoDataFile:"".concat(E,"/puducherry.json"),mapType:k.STATE},TT:{geoDataFile:"".concat(E,"/india.json"),mapType:k.COUNTRY}},F=[432,488],P=50,C=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},"UN","Unassigned"),O=[],L={};Object.keys(C).map((function(a,e){return L[C[a]]=a,O.push({code:a,name:C[a]}),null}));var R=L},24:function(a,e,n){"use strict";n.d(e,"i",(function(){return u})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return h})),n.d(e,"j",(function(){return p})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return y})),n.d(e,"a",(function(){return j})),n.d(e,"m",(function(){return b})),n.d(e,"h",(function(){return A})),n.d(e,"b",(function(){return D})),n.d(e,"k",(function(){return S})),n.d(e,"l",(function(){return w}));var t=n(11),o=n(68),i=n(81),r=(n(82),n(69)),c=n(83),l=n(44),d=(n(27),null),s=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}),u=function(){return!1},f=function(){return Object(l.a)(new Date,"Asia/Kolkata")},v=function(){return Object(o.a)(f(),{representation:"date"})},h=function(){return Object(o.a)(Object(i.a)(f(),1),{representation:"date"})},p=function(a){return a?("string"===typeof a&&a.match(t.g)&&(a+=t.s),Object(l.a)(new Date(a),"Asia/Kolkata")):f()},m=function(a,e){if(!a)return"";"string"===typeof a&&a.match(t.g)&&(a+=t.s);var n=Object(l.a)(new Date(a),"Asia/Kolkata");return Object(r.a)(n,e,{locale:d})},T=function(a){return Object(r.a)(a,"yyyy-MM-dd'T'HH:mm:ss+05:30",{locale:d})},g=function(a){var e=Math.round(Math.abs(a));return e<1e3?s.format(Math.floor(a)):e>=1e3&&e<1e5?s.format(a/1e3)+"K":e>=1e5&&e<1e7?s.format(a/1e5)+"L":e>=1e7&&e<1e10?s.format(a/1e7)+"Cr":e>=1e10&&e<1e14?s.format(a/1e10)+"K Cr":e>=1e14?s.format(a/1e14)+"L Cr":void 0},y=function(a){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0;return isNaN(a)||o&&(null===(e=t.w[o])||void 0===e?void 0:e.hideZero)&&0===a?"-":"long"===n?s.format(Math.abs(a)<1?a:Math.round(a)):"short"===n?g(a):"%"===n?"".concat(s.format(a),"%"):""===n?s.format(a):void 0},j=function(a){return"string"!==typeof a?"":a.charAt(0).toUpperCase()+a.slice(1)},b=function(a){return a.replace(/\w\S*/g,(function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}))},A=function(a,e,n){var o,i,r,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=l.expiredDate,s=void 0===d?null:d,u=l.normalizedByPopulationPer,f=void 0===u?null:u,v=l.movingAverage,h=void 0!==v&&v,m=l.canBeNaN,T=void 0!==m&&m;if(null!==s&&("tested"===(null===(o=t.w[n])||void 0===o?void 0:o.category)&&(!(null===a||void 0===a||null===(i=a.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.date)||Object(c.a)(p(s),p(a.meta.tested.date))>t.y)))return 0;var g,y,j=1;if("delta"===e&&h&&(e="delta7",j*=1/7),"million"===f)j*=1e6/(null===a||void 0===a||null===(g=a.meta)||void 0===g?void 0:g.population);else if("lakh"===f){var b;j*=1e5/(null===a||void 0===a||null===(b=a.meta)||void 0===b?void 0:b.population)}else if("hundred"===f){var A;j*=100/(null===a||void 0===a||null===(A=a.meta)||void 0===A?void 0:A.population)}if("active"===n||"activeRatio"===n){var D,S,w,k,E=(null===a||void 0===a||null===(D=a[e])||void 0===D?void 0:D.confirmed)||0,N=(null===a||void 0===a||null===(S=a[e])||void 0===S?void 0:S.deceased)||0,F=(null===a||void 0===a||null===(w=a[e])||void 0===w?void 0:w.recovered)||0,P=(null===a||void 0===a||null===(k=a[e])||void 0===k?void 0:k.other)||0,C=E-N-F-P;"active"===n?y=C:"activeRatio"===n&&(y=C/E*100)}else if("vaccinated"===n){var O,L,R=(null===a||void 0===a||null===(O=a[e])||void 0===O?void 0:O.vaccinated1)||0,M=(null===a||void 0===a||null===(L=a[e])||void 0===L?void 0:L.vaccinated2)||0;y=R+M}else if("tpr"===n){var U,B,H=(null===a||void 0===a||null===(U=a[e])||void 0===U?void 0:U.confirmed)||0,K=(null===a||void 0===a||null===(B=a[e])||void 0===B?void 0:B.tested)||0;y=H/K*100}else if("cfr"===n){var I,W,J=(null===a||void 0===a||null===(I=a[e])||void 0===I?void 0:I.deceased)||0,G=(null===a||void 0===a||null===(W=a[e])||void 0===W?void 0:W.confirmed)||0;y=J/G*100}else if("recoveryRatio"===n){var x,Z,z=(null===a||void 0===a||null===(x=a[e])||void 0===x?void 0:x.recovered)||0,Y=(null===a||void 0===a||null===(Z=a[e])||void 0===Z?void 0:Z.confirmed)||0;y=z/Y*100}else if("caseGrowth"===n){var q,_,V=(null===a||void 0===a||null===(q=a.delta7)||void 0===q?void 0:q.confirmed)||0,$=(null===a||void 0===a||null===(_=a.delta21_14)||void 0===_?void 0:_.confirmed)||0;y="total"===e?(V-$)/$*100:0}else if("population"===n){var Q;y="total"===e?null===a||void 0===a||null===(Q=a.meta)||void 0===Q?void 0:Q.population:0}else{var X;y=null===a||void 0===a||null===(X=a[e])||void 0===X?void 0:X[n]}var aa=t.w[n],ea=(j=(null===aa||void 0===aa?void 0:aa.nonLinear)?1:j)*y;return T||(ea=!isNaN(ea)&&ea||0),(null===aa||void 0===aa?void 0:aa.canBeInfinite)||(ea=(isNaN(ea)||isFinite(ea))&&ea||0),ea},D=function(a){return fetch(a).then((function(a){return a.json()}))};function S(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(t,o){a().then(t).catch((function(i){setTimeout((function(){1!==e?S(a,e-1,n).then(t,o):o(i)}),n)}))}))}var w=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return"M".concat(-e/2,",0L0,").concat(-a,"L").concat(e/2,",0")}},79:function(a,e,n){"use strict";n.r(e);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(a,e){navigator.serviceWorker.register(a).then((function(a){a.onupdatefound=function(){var n=a.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(a)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(a)))})}})).catch((function(a){console.error("Error during service worker registration:",a)}))}var i=n(11),r=n(24),c=n(27),l=n(61),d=n(62),s=n(88);c.a.use(d.a).use(l.a).use(s.e).init({debug:Object(r.i)()&&false,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"".concat(i.a,"/locales/locale_{{lng}}.json"),addPath:"http://localhost:9999/"},saveMissing:Object(r.i)()&&false,interpolation:{escapeValue:!1}});c.a;var u=n(2),f=n(54),v=n(51),h=n(21),p=Object(u.lazy)((function(){return Object(r.k)((function(){return Promise.all([n.e(6),n.e(13)]).then(n.bind(null,235))}))})),m=document.getElementById("root"),T=function(){return Object(f.render)(Object(h.jsx)(u.Suspense,{fallback:Object(h.jsx)("div",{}),children:Object(h.jsx)(v.a,{children:Object(h.jsx)(u.StrictMode,{children:Object(h.jsx)(p,{})})})}),m)};window.requestIdleCallback&&window.IntersectionObserver?T():function(a,e){var n=document.createElement("script");n.src=a,n.onload=function(){e()},n.onerror=function(){e(new Error("Failed to load script "+a))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",T),function(a){if("serviceWorker"in navigator){if(new URL("/Create-a-D3-Dashboard-With-React-",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var e="".concat("/Create-a-D3-Dashboard-With-React-","/service-worker.js");t?(!function(a,e){fetch(a,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(a){a.unregister().then((function(){window.location.reload()}))})):o(a,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,a),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(e,a)}),3e3)}))}}()}},[[79,4,5]]]);
//# sourceMappingURL=main.7d03869c.chunk.js.map