(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{227:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",function(){return y});var n=r(16),a=r.n(n),o=r(0),i=r.n(o),p=r(296),c=r(238),s=r(295),u=r(269),l=r(236),f=r(240),m=r(241),d=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,r=this.props.pageContext,n=r.previous,a=r.next,o=this.props.classes;return i.a.createElement(f.a,{title:e},i.a.createElement(m.a,{title:t.frontmatter.title,description:t.excerpt}),i.a.createElement(u.a,null,i.a.createElement(s.a,{align:"center"},i.a.createElement(s.a,{variant:"h4"},t.frontmatter.title),i.a.createElement(s.a,{color:"textSecondary",className:o.date},t.frontmatter.date)),i.a.createElement(u.a,{className:o.content},i.a.createElement(s.a,{paragraph:!0,dangerouslySetInnerHTML:{__html:t.html}}),i.a.createElement(s.a,null,n&&i.a.createElement(l.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title),a&&i.a.createElement(l.a,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))))},e}(i.a.Component);e.default=Object(c.a)(function(t){return Object(p.a)({date:{marginBottom:12},content:{}})})(d);var y="1284548601"},234:function(t,e,r){"use strict";r.d(e,"b",function(){return l});var n=r(0),a=r.n(n),o=r(12),i=r.n(o),p=r(81),c=r.n(p);r.d(e,"a",function(){return c.a});r(235);var s=a.a.createContext({});function u(t){var e=t.staticQueryData,r=t.data,n=t.query,o=t.render,i=r?r.data:e[n]&&e[n].data;return a.a.createElement(a.a.Fragment,null,i&&o(i),!i&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(t){var e=t.data,r=t.query,n=t.render,o=t.children;return a.a.createElement(s.Consumer,null,function(t){return a.a.createElement(u,{data:e,query:r,render:n||o,staticQueryData:t})})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},235:function(t,e,r){var n;t.exports=(n=r(239))&&n.default||n},236:function(t,e,r){"use strict";r(24);var n=r(0),a=r.n(n),o=r(294),i=r(234),p=a.a.forwardRef(function(t,e){return a.a.createElement(o.a,Object.assign({component:i.a,ref:e},t))});e.a=p},239:function(t,e,r){"use strict";r.r(e);r(24);var n=r(0),a=r.n(n),o=r(12),i=r.n(o),p=r(116),c=function(t){var e=t.location,r=t.pageResources;return r?a.a.createElement(p.a,Object.assign({location:e,pageResources:r},r.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=c},240:function(t,e,r){"use strict";r(17),r(114);var n=r(16),a=r.n(n),o=r(0),i=r.n(o),p=r(236),c=r(296),s=r(238),u=r(297),l=r(299),f=r(295),m=r(298),d=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props,e=t.children,r=t.classes;return i.a.createElement("div",{className:r.root},i.a.createElement(u.a,{position:"sticky"},i.a.createElement(l.a,null,i.a.createElement(f.a,{variant:"h6"},i.a.createElement(p.a,{color:"inherit",className:r.link,to:"/"},"±"),i.a.createElement(p.a,{color:"inherit",className:r.link,to:"/tags"},"Categories"),i.a.createElement(p.a,{color:"inherit",className:r.link,to:"/about"},"About")),i.a.createElement(f.a,{variant:"h6",align:"right",className:r.name},"Nathan Stromberg"))),i.a.createElement(m.a,{className:r.main},e),i.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center",className:r.footer},"Built with love using ",i.a.createElement(p.a,{color:"inherit",href:"https://gatsbyjs.com/"},"Gatsby")," and ",i.a.createElement(p.a,{color:"inherit",href:"https://typescriptlang.org/"},"Typescript")))},e}(i.a.Component);e.a=Object(s.a)(function(t){return Object(c.a)({root:{flexGrow:1},link:{marginRight:t.spacing(2)},name:{flexGrow:1},footer:{margin:t.spacing(4)},main:{margin:t.spacing(4),padding:t.spacing(4)}})})(d)},241:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var n=r(16),a=r.n(n),o=r(242),i=r(0),p=r.n(i),c=r(246),s=r.n(c),u=r(234),l=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this;return p.a.createElement(u.b,{query:"872482878",render:function(e){var r=t.props.description||e.site.siteMetadata.description,n=t.props.lang||"en",a=t.props.title,o=t.props.keywords||[];return p.a.createElement(s.a,{htmlAttributes:{lang:n},title:a,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:a},{property:"og:description",content:r},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[])})},data:o})},e}(p.a.Component)},242:function(t){t.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}},244:function(t,e,r){var n=r(250),a=r(251),o=r(252);t.exports=function(t){return n(t)||a(t)||o()}},250:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},251:function(t,e,r){r(32),r(165),r(28),r(1),r(29),r(21),r(5),t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},252:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},269:function(t,e,r){"use strict";r(5),r(6),r(1),r(22);var n=r(244),a=r.n(n),o=r(2),i=r.n(o),p=(r(12),r(115)),c=r.n(p);var s=function(t,e){return e?c()(t,e,{clone:!1}):t};var u=function(t){var e=function(e){var r=t(e);return e.css?i()({},s(r,t(i()({theme:e.theme},e.css))),function(t,e){var r={};return Object.keys(t).forEach(function(n){-1===e.indexOf(n)&&(r[n]=t[n])}),r}(e.css,[t.filterProps])):r};return e.propTypes={},e.filterProps=["css"].concat(a()(t.filterProps)),e};var l=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=function(t){return e.reduce(function(e,r){var n=r(t);return n?s(e,n):e},{})};return n.propTypes={},n.filterProps=e.reduce(function(t,e){return t.concat(e.filterProps)},[]),n},f=(r(27),r(83)),m=r.n(f),d=r(162),y=r.n(d),h=(r(38),{xs:0,sm:600,md:960,lg:1280,xl:1920}),g={keys:["xs","sm","md","lg","xl"],up:function(t){return"@media (min-width:".concat(h[t],"px)")}};function v(t,e,r){if(Array.isArray(e)){var n=t.theme.breakpoints||g;return e.reduce(function(t,a,o){return t[n.up(n.keys[o])]=r(e[o]),t},{})}if("object"===y()(e)){var a=t.theme.breakpoints||g;return Object.keys(e).reduce(function(t,n){return t[a.up(n)]=r(e[n]),t},{})}return r(e)}function b(t,e){return e&&"string"==typeof e?e.split(".").reduce(function(t,e){return t&&t[e]?t[e]:null},t):null}var x=function(t){var e=t.prop,r=t.cssProperty,n=void 0===r?t.prop:r,a=t.themeKey,o=t.transform,i=function(t){if(null==t[e])return null;var r=t[e],i=b(t.theme,a)||{};return v(t,r,function(t){var e;return"function"==typeof i?e=i(t):Array.isArray(i)?e=i[t]:(e=b(i,t)||t,o&&(e=o(e))),!1===n?e:m()({},n,e)})};return i.propTypes={},i.filterProps=[e],i};function E(t){return"number"!=typeof t?t:"".concat(t,"px solid").concat(0===t?" !important":"")}var w=l(x({prop:"border",themeKey:"borders",transform:E}),x({prop:"borderTop",themeKey:"borders",transform:E}),x({prop:"borderRight",themeKey:"borders",transform:E}),x({prop:"borderBottom",themeKey:"borders",transform:E}),x({prop:"borderLeft",themeKey:"borders",transform:E}),x({prop:"borderColor",themeKey:"palette",transform:function(t){return"".concat(t," !important")}}),x({prop:"borderRadius",themeKey:"shape"})),j=l(x({prop:"displayPrint",cssProperty:!1,transform:function(t){return{"@media print":{display:t}}}}),x({prop:"display"}),x({prop:"overflow"}),x({prop:"textOverflow"}),x({prop:"visibility"}),x({prop:"whiteSpace"})),k=l(x({prop:"flexBasis"}),x({prop:"flexDirection"}),x({prop:"flexWrap"}),x({prop:"justifyContent"}),x({prop:"alignItems"}),x({prop:"alignContent"}),x({prop:"order"}),x({prop:"flex"}),x({prop:"flexGrow"}),x({prop:"flexShrink"}),x({prop:"alignSelf"}),x({prop:"justifyItems"}),x({prop:"justifySelf"})),A=l(x({prop:"position"}),x({prop:"zIndex",themeKey:"zIndex"}),x({prop:"top"}),x({prop:"right"}),x({prop:"bottom"}),x({prop:"left"})),P=l(x({prop:"color",themeKey:"palette"}),x({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),T=x({prop:"boxShadow",themeKey:"shadows"});function K(t){return t<=1?"".concat(100*t,"%"):t}var S=x({prop:"width",transform:K}),O=x({prop:"maxWidth",transform:K}),R=x({prop:"minWidth",transform:K}),C=x({prop:"height",transform:K}),N=x({prop:"maxHeight",transform:K}),B=x({prop:"minHeight",transform:K}),q=(x({prop:"size",cssProperty:"width",transform:K}),x({prop:"size",cssProperty:"height",transform:K}),l(S,O,R,C,N,B)),L=r(245),M=r.n(L);var I,z,G={m:"margin",p:"padding"},H={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Q={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},W=(I=function(t){if(t.length>2){if(!Q[t])return[t];t=Q[t]}var e=t.split(""),r=M()(e,2),n=r[0],a=r[1],o=G[n],i=H[a]||"";return Array.isArray(i)?i.map(function(t){return o+t}):[o+i]},z={},function(t){return void 0===z[t]&&(z[t]=I(t)),z[t]}),X=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function Y(t,e){return function(r){return t.reduce(function(t,n){return t[n]=function(t,e){if("string"==typeof e)return e;var r=t(Math.abs(e));return e>=0?r:"number"==typeof r?-r:"-".concat(r)}(e,r),t},{})}}function D(t){var e=function(t){var e=t.spacing||8;return"number"==typeof e?function(t){return e*t}:Array.isArray(e)?function(t){return e[t]}:"function"==typeof e?e:function(){}}(t.theme);return Object.keys(t).map(function(r){if(-1===X.indexOf(r))return null;var n=Y(W(r),e),a=t[r];return v(t,a,n)}).reduce(s,{})}D.propTypes={},D.filterProps=X;var F=D,J=l(x({prop:"fontFamily",themeKey:"typography"}),x({prop:"fontSize",themeKey:"typography"}),x({prop:"fontStyle",themeKey:"typography"}),x({prop:"fontWeight",themeKey:"typography"}),x({prop:"letterSpacing"}),x({prop:"lineHeight"}),x({prop:"textAlign"})),_=r(148),U=r(256),V=function(t){var e=Object(_.a)(t);return function(t,r){return e(t,i()({defaultTheme:U.a},r))}},Z=u(l(w,j,k,A,P,T,q,F,J)),$=V("div")(Z,{name:"MuiBox"});e.a=$}}]);
//# sourceMappingURL=component---src-templates-project-tsx-f250bbe610b7fa99d529.js.map