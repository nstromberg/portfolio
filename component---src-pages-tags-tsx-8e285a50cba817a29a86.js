(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{230:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(265),o=a(300),s=a(251),c=a(295),l=a(252),u=a(296),d=a(232),p=a(238),m=a(239),g=a(263),f=a(264),v=a(236);var x=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.tag,a=t.classes;return r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement(c.a,{variant:"h6",component:"h2",align:"center"},r.a.createElement(v.a,{color:"inherit",to:"/tags/"+e.fieldValue},e.fieldValue)),r.a.createElement(c.a,{paragraph:!0,className:a.subHeading,align:"center"},e.totalCount," post",1===e.totalCount?"":"s")))},n}(r.a.Component),h=Object(d.a)(function(t){return Object(u.a)({card:{minWidth:250},subHeading:{marginTop:t.spacing(2)}})})(x);a.d(e,"pageQuery",function(){return y});var b=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.data,a=t.classes,n=e.site.siteMetadata.title,u=e.allMarkdownRemark.group;return r.a.createElement(p.a,{title:n},r.a.createElement(m.a,{title:"All tags",keywords:["blog","gatsby","javascript","react"]}),r.a.createElement(o.a,null,r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(c.a,{className:a.title,variant:"h3",align:"center"},"All tags",r.a.createElement(l.a,{className:a.divider,variant:"middle"}))),r.a.createElement(i.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:4},u.map(function(t){return t&&r.a.createElement(i.a,{item:!0},r.a.createElement(h,{tag:t}))}))))},n}(r.a.Component),y=(e.default=Object(d.a)(function(t){return Object(u.a)({divider:{margin:t.spacing(2)},title:{padding:t.spacing(8,0,6)}})})(b),"2900016769")},234:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),i=a(12),o=a.n(i),s=a(82),c=a.n(s);a.d(e,"a",function(){return c.a});a(235);var l=r.a.createContext({});function u(t){var e=t.staticQueryData,a=t.data,n=t.query,i=t.render,o=a?a.data:e[n]&&e[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,n=t.render,i=t.children;return r.a.createElement(l.Consumer,null,function(t){return r.a.createElement(u,{data:e,query:a,render:n||i,staticQueryData:t})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},235:function(t,e,a){var n;t.exports=(n=a(237))&&n.default||n},236:function(t,e,a){"use strict";a(32);var n=a(0),r=a.n(n),i=a(294),o=a(234),s=r.a.forwardRef(function(t,e){return r.a.createElement(i.a,Object.assign({component:o.a,ref:e},t))});e.a=s},237:function(t,e,a){"use strict";a.r(e);a(32);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),s=a(114),c=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},238:function(t,e,a){"use strict";a(16),a(113);var n=a(0),r=a.n(n),i=a(236),o=a(296),s=a(232),c=a(297),l=a(299),u=a(295),d=a(300);var p=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.children,a=t.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(c.a,{position:"sticky"},r.a.createElement(l.a,null,r.a.createElement(u.a,{variant:"h6"},r.a.createElement(i.a,{color:"inherit",className:a.link,to:"/"},"±"),r.a.createElement(i.a,{color:"inherit",className:a.link,to:"/tags"},"Categories"),r.a.createElement(i.a,{color:"inherit",className:a.link,to:"/about"},"About")),r.a.createElement(u.a,{variant:"h6",align:"right",className:a.name},"Nathan Stromberg"))),r.a.createElement(d.a,{className:a.main},e),r.a.createElement(u.a,{variant:"body2",color:"textSecondary",align:"center",className:a.footer},"Built with love using ",r.a.createElement(i.a,{color:"inherit",href:"https://gatsbyjs.com/"},"Gatsby")," and ",r.a.createElement(i.a,{color:"inherit",href:"https://typescriptlang.org/"},"Typescript")))},n}(r.a.Component);e.a=Object(s.a)(function(t){return Object(o.a)({root:{flexGrow:1},link:{marginRight:t.spacing(2)},name:{flexGrow:1},footer:{margin:t.spacing(4)},main:{margin:t.spacing(4)}})})(p)},239:function(t,e,a){"use strict";a.d(e,"a",function(){return l});var n=a(240),r=a(0),i=a.n(r),o=a(244),s=a.n(o),c=a(234);var l=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this;return i.a.createElement(c.b,{query:"872482878",render:function(e){var a=t.props.description||e.site.siteMetadata.description,n=t.props.lang||"en",r=t.props.title,o=t.props.keywords||[];return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:r},{property:"og:description",content:a},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[])})},data:n})},r}(i.a.Component)},240:function(t){t.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}},242:function(t,e,a){"use strict";a(158)("fixed",function(t){return function(){return t(this,"tt","","")}})},251:function(t,e,a){"use strict";a(242),a(9),a(6),a(2),a(21);var n=a(1),r=a.n(n),i=a(19),o=a.n(i),s=a(84),c=a.n(s),l=a(0),u=a.n(l),d=(a(12),a(83)),p=a(232),m=a(249),g=u.a.forwardRef(function(t,e){var a=t.classes,n=t.className,i=t.component,s=void 0===i?"div":i,c=t.fixed,l=void 0!==c&&c,p=t.maxWidth,g=void 0===p?"lg":p,f=o()(t,["classes","className","component","fixed","maxWidth"]);return u.a.createElement(s,r()({className:Object(d.a)(a.root,n,l&&a.fixed,!1!==g&&a["maxWidth".concat(Object(m.a)(String(g)))]),ref:e},f))});e.a=Object(p.a)(function(t){var e;return{root:(e={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},c()(e,t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),c()(e,t.breakpoints.up("md"),{paddingLeft:t.spacing(4),paddingRight:t.spacing(4)}),e),fixed:Object.keys(t.breakpoints.values).reduce(function(e,a){var n=t.breakpoints.values[a];return 0!==n&&(e[t.breakpoints.up(a)]={maxWidth:n}),e},{}),maxWidthXs:c()({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:c()({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:c()({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:c()({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:c()({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}},{name:"MuiContainer"})(g)},252:function(t,e,a){"use strict";var n=a(1),r=a.n(n),i=a(19),o=a.n(i),s=a(0),c=a.n(s),l=(a(12),a(83)),u=a(232),d=a(243),p=c.a.forwardRef(function(t,e){var a=t.absolute,n=void 0!==a&&a,i=t.classes,s=t.className,u=t.component,d=void 0===u?"hr":u,p=t.light,m=void 0!==p&&p,g=t.role,f=void 0===g?"hr"!==d?"separator":void 0:g,v=t.variant,x=void 0===v?"fullWidth":v,h=o()(t,["absolute","classes","className","component","light","role","variant"]);return c.a.createElement(d,r()({className:Object(l.a)(i.root,s,"inset"===x&&i.inset,"middle"===x&&i.middle,n&&i.absolute,m&&i.light),role:f,ref:e},h))});e.a=Object(u.a)(function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(d.b)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)}}},{name:"MuiDivider"})(p)},263:function(t,e,a){"use strict";var n=a(1),r=a.n(n),i=a(19),o=a.n(i),s=a(0),c=a.n(s),l=(a(12),a(83)),u=a(298),d=a(232),p=c.a.forwardRef(function(t,e){var a=t.classes,n=t.className,i=t.raised,s=void 0!==i&&i,d=o()(t,["classes","className","raised"]);return c.a.createElement(u.a,r()({className:Object(l.a)(a.root,n),elevation:s?8:1,ref:e},d))});e.a=Object(d.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(p)},264:function(t,e,a){"use strict";var n=a(1),r=a.n(n),i=a(19),o=a.n(i),s=a(0),c=a.n(s),l=(a(12),a(83)),u=a(232),d=c.a.forwardRef(function(t,e){var a=t.classes,n=t.className,i=t.component,s=void 0===i?"div":i,u=o()(t,["classes","className","component"]);return c.a.createElement(s,r()({className:Object(l.a)(a.root,n),ref:e},u))});e.a=Object(u.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(d)},265:function(t,e,a){"use strict";var n=a(19),r=a.n(n),i=a(1),o=a.n(i),s=a(0),c=a.n(s),l=(a(12),a(83)),u=a(232),d=a(250),p=[0,1,2,3,4,5,6,7,8,9,10],m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var g=c.a.forwardRef(function(t,e){var a=t.alignContent,n=void 0===a?"stretch":a,i=t.alignItems,s=void 0===i?"stretch":i,u=t.classes,d=t.className,p=t.component,m=void 0===p?"div":p,g=t.container,f=void 0!==g&&g,v=t.direction,x=void 0===v?"row":v,h=t.item,b=void 0!==h&&h,y=t.justify,w=void 0===y?"flex-start":y,j=t.lg,E=void 0!==j&&j,k=t.md,W=void 0!==k&&k,C=t.sm,N=void 0!==C&&C,O=t.spacing,S=void 0===O?0:O,R=t.wrap,M=void 0===R?"wrap":R,_=t.xl,q=void 0!==_&&_,G=t.xs,L=void 0!==G&&G,z=t.zeroMinWidth,I=void 0!==z&&z,D=r()(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),T=Object(l.a)(u.root,d,f&&[u.container,0!==S&&u["spacing-xs-".concat(String(S))]],b&&u.item,I&&u.zeroMinWidth,"row"!==x&&u["direction-xs-".concat(String(x))],"wrap"!==M&&u["wrap-xs-".concat(String(M))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==n&&u["align-content-xs-".concat(String(n))],"flex-start"!==w&&u["justify-xs-".concat(String(w))],!1!==L&&u["grid-xs-".concat(String(L))],!1!==N&&u["grid-sm-".concat(String(N))],!1!==W&&u["grid-md-".concat(String(W))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==q&&u["grid-xl-".concat(String(q))]);return c.a.createElement(m,o()({className:T,ref:e},D))});var f=Object(u.a)(function(t){return o()({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var a={};return p.forEach(function(n){var r=t.spacing(n);0!==r&&(a["spacing-".concat(e,"-").concat(n)]={margin:-r/2,width:"calc(100% + ".concat(r,"px)"),"& > $item":{padding:r/2}})}),a}(t,"xs"),d.b.reduce(function(e,a){return function(t,e,a){var n={};m.forEach(function(t){var e="grid-".concat(a,"-").concat(t);if(!0!==t)if("auto"!==t){var r="".concat(Math.round(t/12*1e8)/1e6,"%");n[e]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===a?o()(t,n):t[e.breakpoints.up(a)]=n}(e,t,a),e},{}))},{name:"MuiGrid"})(g);e.a=f}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-8e285a50cba817a29a86.js.map