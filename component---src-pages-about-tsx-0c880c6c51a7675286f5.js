(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{230:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",function(){return h});var n=r(16),a=r.n(n),o=r(0),i=r.n(o),p=r(269),s=r(267),c=r(295),u=r(268),l=r(296),m=r(238),d=r(240),f=r(241),g=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props,e=t.data,r=t.classes,n=e.site.siteMetadata.title;return i.a.createElement(d.a,{title:n},i.a.createElement(f.a,{title:"All tags",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(p.a,null,i.a.createElement(s.a,{maxWidth:"sm"},i.a.createElement(c.a,{className:r.title,variant:"h3",align:"center"},"About Nathan",i.a.createElement(u.a,{className:r.divider,variant:"middle"}))),i.a.createElement(s.a,{className:r.content},i.a.createElement("ul",{className:r.grouping},i.a.createElement("li",null,i.a.createElement(c.a,{variant:"h4",gutterBottom:!0},"Education"),i.a.createElement(c.a,{paragraph:!0},"Currently pursuing a Bachelor's of Engineering in Computer Science and Mathematics")),i.a.createElement("li",null,i.a.createElement(c.a,{variant:"h4",gutterBottom:!0},"Achievements"),i.a.createElement(c.a,{paragraph:!0},i.a.createElement("ul",null,i.a.createElement("li",null,"National Merit Scholar"))))))))},e}(i.a.Component);e.default=Object(m.a)(function(t){return Object(l.a)({divider:{margin:t.spacing(2)},title:{padding:t.spacing(8,0,6)},content:{},grouping:{"list-style-type":"none",margin:0,padding:0}})})(g);var h="1097489062"},234:function(t,e,r){"use strict";r.d(e,"b",function(){return l});var n=r(0),a=r.n(n),o=r(12),i=r.n(o),p=r(81),s=r.n(p);r.d(e,"a",function(){return s.a});r(235);var c=a.a.createContext({});function u(t){var e=t.staticQueryData,r=t.data,n=t.query,o=t.render,i=r?r.data:e[n]&&e[n].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(t){var e=t.data,r=t.query,n=t.render,o=t.children;return a.a.createElement(c.Consumer,null,function(t){return a.a.createElement(u,{data:e,query:r,render:n||o,staticQueryData:t})})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},235:function(t,e,r){var n;t.exports=(n=r(239))&&n.default||n},237:function(t,e,r){"use strict";r(24);var n=r(0),a=r.n(n),o=r(294),i=r(234),p=a.a.forwardRef(function(t,e){return a.a.createElement(o.a,Object.assign({component:i.a,ref:e},t))});e.a=p},239:function(t,e,r){"use strict";r.r(e);r(24);var n=r(0),a=r.n(n),o=r(12),i=r.n(o),p=r(116),s=function(t){var e=t.location,r=t.pageResources;return r?a.a.createElement(p.a,Object.assign({location:e,pageResources:r},r.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},240:function(t,e,r){"use strict";r(17),r(114);var n=r(16),a=r.n(n),o=r(0),i=r.n(o),p=r(237),s=r(296),c=r(238),u=r(297),l=r(299),m=r(295),d=r(298),f=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props,e=t.children,r=t.classes;return i.a.createElement("div",{className:r.root},i.a.createElement(u.a,{position:"sticky"},i.a.createElement(l.a,null,i.a.createElement(m.a,{variant:"h6"},i.a.createElement(p.a,{color:"inherit",className:r.link,to:"/"},"±"),i.a.createElement(p.a,{color:"inherit",className:r.link,to:"/tags"},"Categories"),i.a.createElement(p.a,{color:"inherit",className:r.link,to:"/about"},"About")),i.a.createElement(m.a,{variant:"h6",align:"right",className:r.name},"Nathan Stromberg"))),i.a.createElement(d.a,{className:r.main},e),i.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center",className:r.footer},"Built with love using ",i.a.createElement(p.a,{color:"inherit",href:"https://gatsbyjs.com/"},"Gatsby")," and ",i.a.createElement(p.a,{color:"inherit",href:"https://typescriptlang.org/"},"Typescript")))},e}(i.a.Component);e.a=Object(c.a)(function(t){return Object(s.a)({root:{flexGrow:1},link:{marginRight:t.spacing(2)},name:{flexGrow:1},footer:{margin:t.spacing(4)},main:{margin:t.spacing(4),padding:t.spacing(4)}})})(f)},241:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var n=r(16),a=r.n(n),o=r(242),i=r(0),p=r.n(i),s=r(246),c=r.n(s),u=r(234),l=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this;return p.a.createElement(u.b,{query:"872482878",render:function(e){var r=t.props.description||e.site.siteMetadata.description,n=t.props.lang||"en",a=t.props.title,o=t.props.keywords||[];return p.a.createElement(c.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:a},{property:"og:description",content:r},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[])})},data:o})},e}(p.a.Component)},242:function(t){t.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}},244:function(t,e,r){var n=r(250),a=r(251),o=r(252);t.exports=function(t){return n(t)||a(t)||o()}},250:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},251:function(t,e,r){r(32),r(165),r(28),r(1),r(29),r(21),r(5),t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},252:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},253:function(t,e,r){"use strict";r(164)("fixed",function(t){return function(){return t(this,"tt","","")}})},267:function(t,e,r){"use strict";r(253),r(5),r(6),r(1),r(22);var n=r(2),a=r.n(n),o=r(20),i=r.n(o),p=r(83),s=r.n(p),c=r(0),u=r.n(c),l=(r(12),r(82)),m=r(238),d=r(255),f=u.a.forwardRef(function(t,e){var r=t.classes,n=t.className,o=t.component,p=void 0===o?"div":o,s=t.fixed,c=void 0!==s&&s,m=t.maxWidth,f=void 0===m?"lg":m,g=i()(t,["classes","className","component","fixed","maxWidth"]);return u.a.createElement(p,a()({className:Object(l.a)(r.root,n,c&&r.fixed,!1!==f&&r["maxWidth".concat(Object(d.a)(String(f)))]),ref:e},g))});e.a=Object(m.a)(function(t){var e;return{root:(e={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},s()(e,t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),s()(e,t.breakpoints.up("md"),{paddingLeft:t.spacing(4),paddingRight:t.spacing(4)}),e),fixed:Object.keys(t.breakpoints.values).reduce(function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:n}),e},{}),maxWidthXs:s()({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:s()({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:s()({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:s()({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:s()({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}},{name:"MuiContainer"})(f)},268:function(t,e,r){"use strict";var n=r(2),a=r.n(n),o=r(20),i=r.n(o),p=r(0),s=r.n(p),c=(r(12),r(82)),u=r(238),l=r(249),m=s.a.forwardRef(function(t,e){var r=t.absolute,n=void 0!==r&&r,o=t.classes,p=t.className,u=t.component,l=void 0===u?"hr":u,m=t.light,d=void 0!==m&&m,f=t.role,g=void 0===f?"hr"!==l?"separator":void 0:f,h=t.variant,y=void 0===h?"fullWidth":h,b=i()(t,["absolute","classes","className","component","light","role","variant"]);return s.a.createElement(l,a()({className:Object(c.a)(o.root,p,"inset"===y&&o.inset,"middle"===y&&o.middle,n&&o.absolute,d&&o.light),role:g,ref:e},b))});e.a=Object(u.a)(function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.b)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}}},{name:"MuiDivider"})(m)},269:function(t,e,r){"use strict";r(5),r(6),r(1),r(22);var n=r(244),a=r.n(n),o=r(2),i=r.n(o),p=(r(12),r(115)),s=r.n(p);var c=function(t,e){return e?s()(t,e,{clone:!1}):t};var u=function(t){var e=function(e){var r=t(e);return e.css?i()({},c(r,t(i()({theme:e.theme},e.css))),function(t,e){var r={};return Object.keys(t).forEach(function(n){-1===e.indexOf(n)&&(r[n]=t[n])}),r}(e.css,[t.filterProps])):r};return e.propTypes={},e.filterProps=["css"].concat(a()(t.filterProps)),e};var l=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=function(t){return e.reduce(function(e,r){var n=r(t);return n?c(e,n):e},{})};return n.propTypes={},n.filterProps=e.reduce(function(t,e){return t.concat(e.filterProps)},[]),n},m=(r(27),r(83)),d=r.n(m),f=r(162),g=r.n(f),h=(r(38),{xs:0,sm:600,md:960,lg:1280,xl:1920}),y={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(h[t],"px)")}};function b(t,e,r){if(Array.isArray(e)){var n=t.theme.breakpoints||y;return e.reduce(function(t,a,o){return t[n.up(n.keys[o])]=r(e[o]),t},{})}if("object"===g()(e)){var a=t.theme.breakpoints||y;return Object.keys(e).reduce(function(t,n){return t[a.up(n)]=r(e[n]),t},{})}return r(e)}function v(t,e){return e&&"string"==typeof e?e.split(".").reduce(function(t,e){return t&&t[e]?t[e]:null},t):null}var x=function(t){var e=t.prop,r=t.cssProperty,n=void 0===r?t.prop:r,a=t.themeKey,o=t.transform,i=function(t){if(null==t[e])return null;var r=t[e],i=v(t.theme,a)||{};return b(t,r,function(t){var e;return"function"==typeof i?e=i(t):Array.isArray(i)?e=i[t]:(e=v(i,t)||t,o&&(e=o(e))),!1===n?e:d()({},n,e)})};return i.propTypes={},i.filterProps=[e],i};function E(t){return"number"!=typeof t?t:"".concat(t,"px solid").concat(0===t?" !important":"")}var k=l(x({prop:"border",themeKey:"borders",transform:E}),x({prop:"borderTop",themeKey:"borders",transform:E}),x({prop:"borderRight",themeKey:"borders",transform:E}),x({prop:"borderBottom",themeKey:"borders",transform:E}),x({prop:"borderLeft",themeKey:"borders",transform:E}),x({prop:"borderColor",themeKey:"palette",transform:function(t){return"".concat(t," !important")}}),x({prop:"borderRadius",themeKey:"shape"})),w=l(x({prop:"displayPrint",cssProperty:!1,transform:function(t){return{"@media print":{display:t}}}}),x({prop:"display"}),x({prop:"overflow"}),x({prop:"textOverflow"}),x({prop:"visibility"}),x({prop:"whiteSpace"})),j=l(x({prop:"flexBasis"}),x({prop:"flexDirection"}),x({prop:"flexWrap"}),x({prop:"justifyContent"}),x({prop:"alignItems"}),x({prop:"alignContent"}),x({prop:"order"}),x({prop:"flex"}),x({prop:"flexGrow"}),x({prop:"flexShrink"}),x({prop:"alignSelf"}),x({prop:"justifyItems"}),x({prop:"justifySelf"})),O=l(x({prop:"position"}),x({prop:"zIndex",themeKey:"zIndex"}),x({prop:"top"}),x({prop:"right"}),x({prop:"bottom"}),x({prop:"left"})),N=l(x({prop:"color",themeKey:"palette"}),x({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),A=x({prop:"boxShadow",themeKey:"shadows"});function R(t){return t<=1?"".concat(100*t,"%"):t}var S=x({prop:"width",transform:R}),W=x({prop:"maxWidth",transform:R}),P=x({prop:"minWidth",transform:R}),K=x({prop:"height",transform:R}),T=x({prop:"maxHeight",transform:R}),C=x({prop:"minHeight",transform:R}),L=(x({prop:"size",cssProperty:"width",transform:R}),x({prop:"size",cssProperty:"height",transform:R}),l(S,W,P,K,T,C)),M=r(245),B=r.n(M);var q,z,X={m:"margin",p:"padding"},G={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},I={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},D=(q=function(t){if(t.length>2){if(!I[t])return[t];t=I[t]}var e=t.split(""),r=B()(e,2),n=r[0],a=r[1],o=X[n],i=G[a]||"";return Array.isArray(i)?i.map(function(t){return o+t}):[o+i]},z={},function(t){return void 0===z[t]&&(z[t]=q(t)),z[t]}),Q=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function Y(t,e){return function(r){return t.reduce(function(t,n){return t[n]=function(t,e){if("string"==typeof e)return e;var r=t(Math.abs(e));return e>=0?r:"number"==typeof r?-r:"-".concat(r)}(e,r),t},{})}}function H(t){var e=function(t){var e=t.spacing||8;return"number"==typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"==typeof e?e:function(){}}(t.theme);return Object.keys(t).map(function(r){if(-1===Q.indexOf(r))return null;var n=Y(D(r),e),a=t[r];return b(t,a,n)}).reduce(c,{})}H.propTypes={},H.filterProps=Q;var F=H,J=l(x({prop:"fontFamily",themeKey:"typography"}),x({prop:"fontSize",themeKey:"typography"}),x({prop:"fontStyle",themeKey:"typography"}),x({prop:"fontWeight",themeKey:"typography"}),x({prop:"letterSpacing"}),x({prop:"lineHeight"}),x({prop:"textAlign"})),U=r(148),V=r(256),Z=function(t){var e=Object(U.a)(t);return function(t,r){return e(t,i()({defaultTheme:V.a},r))}},$=u(l(k,w,j,O,N,A,L,F,J)),_=Z("div")($,{name:"MuiBox"});e.a=_}}]);
//# sourceMappingURL=component---src-pages-about-tsx-0c880c6c51a7675286f5.js.map