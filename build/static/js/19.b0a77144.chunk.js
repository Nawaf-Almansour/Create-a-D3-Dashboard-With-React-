(this.webpackJsonpd3ia=this.webpackJsonpd3ia||[]).push([[19],{233:function(e,t,n){"use strict";n.r(t);var a=n(46),i=n(11),c=n(2),r={root:null,rootMargin:"0px 0px 0px 0px",threshold:0},s=function(e){var t=Object(c.useState)(!1),n=Object(a.a)(t,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){e.current&&new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(s(!0),n.unobserve(e.current))}))}),r).observe(e.current)}),[e]),i},l=n(102),d=n(174),j=n(126),o=n(175),u=n(116),b=["data","isValidating","error"];var O=function(e,t,n){for(var i=Object(c.useState)(n),r=Object(a.a)(i,2),s=r[0],O=r[1],v=arguments.length,h=new Array(v>3?v-3:0),m=3;m<v;m++)h[m-3]=arguments[m];var f=u.a.apply(void 0,[e,t,s].concat(h)),x=f.data,p=f.isValidating,g=f.error,T=Object(d.a)(f,b);return Object(o.a)((function(){O(Object(j.a)(s,(function(e){e.initialData=x})))}),[x]),Object(l.a)(Object(l.a)({},T),{},{isValidating:p,error:g,data:x})},v=n(24),h=n(94),m=n.n(h),f=n(68),x=n(56),p=n(194),g=n(155),T=n(5),y=n(192),S=n(193),k=n(232),D=n(21),C=Object(c.lazy)((function(){return Object(v.k)((function(){return Promise.all([n.e(0),n.e(2),n.e(14)]).then(n.bind(null,237))}))})),M=Object(c.lazy)((function(){return Object(v.k)((function(){return n.e(15).then(n.bind(null,196))}))})),z=Object(c.lazy)((function(){return Object(v.k)((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,197))}))})),w=Object(c.lazy)((function(){return Object(v.k)((function(){return Promise.all([n.e(1),n.e(10),n.e(22)]).then(n.bind(null,198))}))})),N=Object(c.lazy)((function(){return Object(v.k)((function(){return n.e(16).then(n.bind(null,238))}))})),H=Object(c.lazy)((function(){return Object(v.k)((function(){return Promise.all([n.e(0),n.e(2),n.e(12)]).then(n.bind(null,229))}))}));t.default=function(){var e,t,n=Object(c.useState)({stateCode:"TT",districtName:null}),r=Object(a.a)(n,2),l=r[0],d=r[1],j=Object(y.a)("anchor",null),o=Object(a.a)(j,2),u=o[0],b=o[1],h=Object(y.a)("expandTable",!1),V=Object(a.a)(h,1)[0],I=Object(S.a)("mapStatistic","active"),F=Object(a.a)(I,2),P=F[0],R=F[1],A=Object(c.useState)(""),E=Object(a.a)(A,2),J=E[0],L=E[1],U=Object(T.h)(),_=Object(y.a)("mapView",i.o.DISTRICTS),q=Object(a.a)(_,2),B=q[0],G=q[1],K=""!==J&&J<i.e,Q=""===J||J>Object(f.a)(Object(x.a)(Object(v.j)(i.f),i.y),{representation:"date"}),W=O("".concat(i.d,"/timeseries.min.json"),v.b,{revalidateOnMount:!0,refreshInterval:i.b}).data,X=O("".concat(i.d,"/data").concat(J?"-".concat(J):"",".min.json"),v.b,{revalidateOnMount:!0,refreshInterval:i.b}).data,Y=Object(c.useRef)(),Z=s(Y),$=Object(k.a)().width,ee=0===Object(v.h)(null===X||void 0===X?void 0:X.TT,"total","vaccinated"),te=Object(c.useMemo)((function(){var e,t,n,a,i,c,r,s,l=[null===X||void 0===X||null===(e=X.TT)||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.date,null===X||void 0===X||null===(n=X.TT)||void 0===n||null===(a=n.meta)||void 0===a||null===(i=a.tested)||void 0===i?void 0:i.date,null===X||void 0===X||null===(c=X.TT)||void 0===c||null===(r=c.meta)||void 0===r||null===(s=r.vaccinated)||void 0===s?void 0:s.date].filter((function(e){return e}));return l.length>0?Object(f.a)(Object(p.a)(l.map((function(e){return Object(v.j)(e)}))),{representation:"date"}):null}),[X]),ne=Object(c.useMemo)((function(){var e=Object.keys(X||{}).map((function(e){var t,n;return null===X||void 0===X||null===(t=X[e])||void 0===t||null===(n=t.meta)||void 0===n?void 0:n.last_updated})).filter((function(e){return e}));return e.length>0?Object(v.d)(Object(p.a)(e.map((function(e){return Object(v.j)(e)})))):null}),[X]),ae=Object(c.useMemo)((function(){return Object.entries(X||{}).reduce((function(e,t){var n,c=Object(a.a)(t,2),r=c[0],s=c[1];return e[r]=!!((null===s||void 0===s?void 0:s.districts)&&(null===(n=s.districts)||void 0===n?void 0:n[i.z])&&i.r.every((function(e){return Object(v.h)(s,"total",e)===Object(v.h)(s.districts[i.z],"total",e)}))),e}),{})}),[X]),ie=(null===l||void 0===l?void 0:l.stateCode)&&(null===l||void 0===l?void 0:l.districtName)&&l.districtName!==i.z&&ae[l.stateCode];return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(g.a,{children:[Object(D.jsx)("title",{children:"Coronavirus Outbreak in Saudia - Saudi.org"}),Object(D.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in Saudia: Latest Map and Case Count"})]}),Object(D.jsxs)("div",{className:"Home",children:[Object(D.jsxs)("div",{className:m()("home-left",{expanded:V}),children:[Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)(c.Suspense,{fallback:Object(D.jsx)("div",{})}),!X&&!W&&Object(D.jsx)("div",{style:{height:"60rem"}}),Object(D.jsxs)(D.Fragment,{children:[!W&&Object(D.jsx)("div",{style:{minHeight:"61px"}}),W&&Object(D.jsx)(c.Suspense,{fallback:Object(D.jsx)("div",{style:{minHeight:"61px"}}),children:Object(D.jsx)(C,{date:J,setDate:L,dates:Object.keys(null===(e=W.TT)||void 0===e?void 0:e.dates),lastUpdatedDate:ne})})]})]}),Object(D.jsxs)("div",{style:{position:"relative",marginTop:"1rem"},children:[X&&Object(D.jsxs)(c.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:[$>=769&&!V&&Object(D.jsx)(M,{mapStatistic:P,setMapStatistic:R}),Object(D.jsx)(z,{data:X.TT})]}),Object(D.jsxs)(D.Fragment,{children:[!W&&Object(D.jsx)("div",{style:{height:"123px"}}),W&&Object(D.jsx)(c.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"123px"}}),children:Object(D.jsx)(w,{timeseries:null===(t=W.TT)||void 0===t?void 0:t.dates,date:J})})]})]})]}),Object(D.jsx)("div",{className:m()("home-right",{expanded:V}),ref:Y,style:{minHeight:"4rem"},children:(Z||U.hash)&&Object(D.jsxs)(D.Fragment,{children:[X&&Object(D.jsx)("div",{className:m()("map-container",{expanded:V,stickied:"mapexplorer"===u||V&&$>=769}),children:Object(D.jsxs)(c.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}}),children:[Object(D.jsx)(N,{data:X.TT,stateCode:"TT"}),Object(D.jsx)(H,{stateCode:"TT",data:X,mapStatistic:P,setMapStatistic:R,mapView:B,setMapView:G,regionHighlighted:l,setRegionHighlighted:d,anchor:u,setAnchor:b,expandTable:V,lastDataDate:te,hideDistrictData:K,hideDistrictTestData:Q,hideVaccinated:ee,noRegionHighlightedDistrictData:ie})]})}),W&&Object(D.jsx)(c.Suspense,{fallback:Object(D.jsx)("div",{style:{height:"50rem"}})})]})})]}),Z&&Object(D.jsx)(c.Suspense,{fallback:Object(D.jsx)("div",{})})]})}}}]);
//# sourceMappingURL=19.b0a77144.chunk.js.map