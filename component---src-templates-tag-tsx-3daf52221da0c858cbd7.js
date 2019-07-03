(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d}),a.d(t,"pageQuery",function(){return f});var n=a(16),r=a.n(n),o=a(0),i=a.n(o),c=a(269),s=a(295),l=a(302),u=a(240),p=a(241),m=a(257),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pageContext,a=e.data,n=t.tag,r=a.site.siteMetadata.title,o=a.allMarkdownRemark.edges;return i.a.createElement(u.a,{title:r},i.a.createElement(p.a,{title:'Projects tagged "${tag}"',keywords:["portfolio","gatsby","typescript","react",n]}),i.a.createElement(c.a,null,i.a.createElement(s.a,{variant:"h3"},"Projects tagged ",n),i.a.createElement(l.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:4},o.map(function(e){var t=e.node;return i.a.createElement(l.a,{item:!0},i.a.createElement(m.a,{node:t}))}))))},t}(i.a.Component),f="387310122"},234:function(e,t,a){"use strict";a.d(t,"b",function(){return p});var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=a(81),s=a.n(c);a.d(t,"a",function(){return s.a});a(235);var l=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||o,staticQueryData:e})})};p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},235:function(e,t,a){var n;e.exports=(n=a(239))&&n.default||n},237:function(e,t,a){"use strict";a(24);var n=a(0),r=a.n(n),o=a(294),i=a(234),c=r.a.forwardRef(function(e,t){return r.a.createElement(o.a,Object.assign({component:i.a,ref:t},e))});t.a=c},239:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=a(116),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},240:function(e,t,a){"use strict";a(17),a(114);var n=a(16),r=a.n(n),o=a(0),i=a.n(o),c=a(237),s=a(296),l=a(238),u=a(297),p=a(299),m=a(295),d=a(298),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.classes;return i.a.createElement("div",{className:a.root},i.a.createElement(u.a,{position:"sticky"},i.a.createElement(p.a,null,i.a.createElement(m.a,{variant:"h6"},i.a.createElement(c.a,{color:"inherit",className:a.link,to:"/"},"±"),i.a.createElement(c.a,{color:"inherit",className:a.link,to:"/tags"},"Categories"),i.a.createElement(c.a,{color:"inherit",className:a.link,to:"/about"},"About")),i.a.createElement(m.a,{variant:"h6",align:"right",className:a.name},"Nathan Stromberg"))),i.a.createElement(d.a,{className:a.main},t),i.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"center",className:a.footer},"Built with love using ",i.a.createElement(c.a,{color:"inherit",href:"https://gatsbyjs.com/"},"Gatsby")," and ",i.a.createElement(c.a,{color:"inherit",href:"https://typescriptlang.org/"},"Typescript")))},t}(i.a.Component);t.a=Object(l.a)(function(e){return Object(s.a)({root:{flexGrow:1},link:{marginRight:e.spacing(2)},name:{flexGrow:1},footer:{margin:e.spacing(4)},main:{margin:e.spacing(4)}})})(f)},241:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(16),r=a.n(n),o=a(242),i=a(0),c=a.n(i),s=a(246),l=a.n(s),u=a(234),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return c.a.createElement(u.b,{query:"872482878",render:function(t){var a=e.props.description||t.site.siteMetadata.description,n=e.props.lang||"en",r=e.props.title,o=e.props.keywords||[];return c.a.createElement(l.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:r},{property:"og:description",content:a},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[])})},data:o})},t}(c.a.Component)},242:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}},257:function(e,t,a){"use strict";var n=a(16),r=a.n(n),o=a(0),i=a.n(o),c=a(296),s=a(238),l=a(300),u=a(301),p=a(295),m=a(237),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.node,a=e.classes,n=t.frontmatter.title||t.fields.slug;return i.a.createElement(l.a,{className:a.card},i.a.createElement(u.a,null,i.a.createElement(p.a,{variant:"h6",component:"h2"},i.a.createElement(m.a,{to:t.fields.slug,color:"inherit"},n)),i.a.createElement(p.a,{color:"textSecondary",className:a.date},t.frontmatter.date),i.a.createElement(p.a,{paragraph:!0,dangerouslySetInnerHTML:{__html:t.excerpt}})))},t}(i.a.Component);t.a=Object(s.a)(function(e){return Object(c.a)({card:{minWidth:250},date:{marginBottom:e.spacing(2)}})})(d)}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-3daf52221da0c858cbd7.js.map