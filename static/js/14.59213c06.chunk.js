(this.webpackJsonpd3ia=this.webpackJsonpd3ia||[]).push([[14],{111:function(e,t,a){"use strict";var n=a(102),s=a(140),c=a(2),i=(a(127),a(128),a(21));t.a=function(e){var t=e.children,a=e.message,d=e.hold,o=void 0!==d&&d,l=e.childProps,r=void 0===l?{}:l,j=Object(c.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(i.jsx)(s.a,{className:"Tooltip",content:"string"===typeof a?Object(i.jsx)("p",{className:"message",dangerouslySetInnerHTML:{__html:a.trim().split("\n").map((function(e){return"<div>".concat(e,"</div>")})).join("")}}):a,arrow:!1,animation:"shift-away",touch:!o||["hold",300],children:Object(i.jsx)("div",Object(n.a)(Object(n.a)({onClick:j},r),{},{children:t}))})}},237:function(e,t,a){"use strict";a.r(t);var n=a(46),s=a(111),c=a(24),i=a(95),d=a(2),o=a(236),l=a(21),r=Object(d.lazy)((function(){return Object(c.k)((function(){return a.e(11).then(a.bind(null,226))}))})),j=function(e){var t=e.lastUpdatedDate,a=e.newUpdate,n=e.isTimelineMode,j=e.setIsTimelineMode,b=e.showUpdates,u=e.date,O=e.setDate,p=e.dates,m=e.setNewUpdate,f=e.setShowUpdates,h=Object(o.a)().t,v=Object(d.useMemo)((function(){var e=[];return[0,0,0].map((function(t,a){return e.push({animationDelay:"".concat(500+250*a,"ms")}),null})),e}),[]),x=Object(d.useCallback)((function(){j(!0),b&&f(!b)}),[j,f,b]),U=Object(d.useCallback)((function(){b||m(!1),f(!b)}),[b,f,m]);return Object(l.jsxs)("div",{className:"ActionsPanel",children:[Object(l.jsxs)("div",{className:"actions",style:{opacity:n?0:1,transform:"perspective(600px) rotateX(".concat(n?90:0,"deg)"),pointerEvents:n?"none":""},children:[Object(l.jsx)("h5",{className:"fadeInUp",style:v[0],children:"".concat(Object(c.c)(t,"dd MMM, p")," ").concat(h("IST"))}),Object(l.jsxs)("div",{className:"bell-icon fadeInUp",style:v[1],onClick:U,children:[b?Object(l.jsx)(i.d,{size:15}):Object(l.jsx)(i.c,{size:15}),a&&Object(l.jsx)("div",{className:"indicator"})]}),Object(l.jsx)(s.a,{message:"Timeline",hold:!0,children:Object(l.jsx)("div",{className:"timeline-icon fadeInUp",onClick:x,style:v[2],children:Object(l.jsx)(i.i,{})})})]}),n&&Object(l.jsx)(d.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(r,{date:u,setDate:O,dates:p,isTimelineMode:n,setIsTimelineMode:j})})]})},b=a(11),u=a(194),O=a(96),p=a.n(O),m=a(192),f=a(116),h=Object(d.lazy)((function(){return Object(c.k)((function(){return a.e(23).then(a.bind(null,203))}))})),v=function(e){var t=e.date,a=e.setDate,s=e.dates,i=e.lastUpdatedDate,o=Object(d.useState)(!1),r=Object(n.a)(o,2),O=r[0],p=r[1],v=Object(m.a)("newUpdate",!1),x=Object(n.a)(v,2),U=x[0],w=x[1],k=Object(m.a)("lastViewedLog",0),M=Object(n.a)(k,2),g=M[0],y=M[1],D=Object(d.useState)(!1),N=Object(n.a)(D,2),T=N[0],I=N[1],S=Object(f.a)("".concat(b.a,"/updatelog/log.json"),c.b,{refreshInterval:b.b}).data;Object(d.useEffect)((function(){if(void 0!==S){var e=1e3*S.slice().reverse()[0].timestamp;e!==g&&(w(!0),y(e))}}),[g,S,y,w]);var C=Object(d.useMemo)((function(){return Object(c.d)(Object(u.a)([g,i].filter((function(e){return e})).map((function(e){return Object(c.j)(e)}))))}),[g,i]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{lastUpdatedDate:C,newUpdate:U,isTimelineMode:T,setIsTimelineMode:I,showUpdates:O,date:t,setDate:a,dates:s,setNewUpdate:w,setShowUpdates:p}),O&&Object(l.jsx)(d.Suspense,{fallback:Object(l.jsx)("div",{}),children:Object(l.jsx)(h,{updates:S})})]})},x=function(e,t){return!!p()(t.date,e.date)&&(!!p()(t.lastUpdatedDate,e.lastUpdatedDate)&&!!p()(t.dates,e.dates))};t.default=Object(d.memo)(v,x)}}]);
//# sourceMappingURL=14.59213c06.chunk.js.map