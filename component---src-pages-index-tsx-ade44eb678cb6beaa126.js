(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{231:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return v});a(17);var n=a(16),r=a.n(n),i=a(0),o=a.n(i),c=a(267),s=a(295),l=a(268),u=a(269),m=a(302),p=a(303),d=a(238),f=a(296),g=a(240),h=a(241),y=a(257),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.classes,n=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return o.a.createElement(g.a,{title:n},o.a.createElement(h.a,{title:"Overview of projects",keywords:["portfolio","gatsby","javascript","react","typescript"]}),o.a.createElement("div",{className:a.heroContent},o.a.createElement(c.a,{maxWidth:"sm"},o.a.createElement(s.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Nathan's Portfolio"),o.a.createElement(l.a,{variant:"middle"}),o.a.createElement(s.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},o.a.createElement(u.a,{my:2},o.a.createElement(s.a,{paragraph:!0},t.site.siteMetadata.author.name," is a Computer Science and Math double major at the University of Kentucky focused on ML/AI and their applications to problem solving in all fields."))),o.a.createElement("div",{className:a.heroButtons},o.a.createElement(m.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(m.a,{item:!0},o.a.createElement(p.a,{variant:"contained",color:"primary",href:"mailto:"+t.site.siteMetadata.author.email},"Email")),o.a.createElement(m.a,{item:!0},o.a.createElement(p.a,{variant:"outlined",color:"primary",href:t.site.siteMetadata.social.github},"Github")))))),o.a.createElement(u.a,{className:a.projects},o.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:4},r.map(function(e){var t=e.node;return o.a.createElement(m.a,{item:!0},o.a.createElement(y.a,{node:t}))}))))},t}(o.a.Component);t.default=Object(d.a)(function(e){return Object(f.a)({heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},divider:{margin:e.spacing(2)},projects:{margin:e.spacing(4)}})})(E);var v="1497305837"},234:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=a(81),s=a.n(c);a.d(t,"a",function(){return s.a});a(235);var l=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},235:function(e,t,a){var n;e.exports=(n=a(239))&&n.default||n},237:function(e,t,a){"use strict";a(24);var n=a(0),r=a.n(n),i=a(294),o=a(234),c=r.a.forwardRef(function(e,t){return r.a.createElement(i.a,Object.assign({component:o.a,ref:t},e))});t.a=c},239:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=a(116),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},240:function(e,t,a){"use strict";a(17),a(114);var n=a(16),r=a.n(n),i=a(0),o=a.n(i),c=a(237),s=a(296),l=a(238),u=a(297),m=a(299),p=a(295),d=a(298),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.classes;return o.a.createElement("div",{className:a.root},o.a.createElement(u.a,{position:"sticky"},o.a.createElement(m.a,null,o.a.createElement(p.a,{variant:"h6"},o.a.createElement(c.a,{color:"inherit",className:a.link,to:"/"},"±"),o.a.createElement(c.a,{color:"inherit",className:a.link,to:"/tags"},"Categories"),o.a.createElement(c.a,{color:"inherit",className:a.link,to:"/about"},"About")),o.a.createElement(p.a,{variant:"h6",align:"right",className:a.name},"Nathan Stromberg"))),o.a.createElement(d.a,{className:a.main},t),o.a.createElement(p.a,{variant:"body2",color:"textSecondary",align:"center",className:a.footer},"Built with love using ",o.a.createElement(c.a,{color:"inherit",href:"https://gatsbyjs.com/"},"Gatsby")," and ",o.a.createElement(c.a,{color:"inherit",href:"https://typescriptlang.org/"},"Typescript")))},t}(o.a.Component);t.a=Object(l.a)(function(e){return Object(s.a)({root:{flexGrow:1},link:{marginRight:e.spacing(2)},name:{flexGrow:1},footer:{margin:e.spacing(4)},main:{margin:e.spacing(4)}})})(f)},241:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(16),r=a.n(n),i=a(242),o=a(0),c=a.n(o),s=a(246),l=a.n(s),u=a(234),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return c.a.createElement(u.b,{query:"872482878",render:function(t){var a=e.props.description||t.site.siteMetadata.description,n=e.props.lang||"en",r=e.props.title,i=e.props.keywords||[];return c.a.createElement(l.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:r},{property:"og:description",content:a},{property:"og:type",content:"website"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[])})},data:i})},t}(c.a.Component)},242:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}},257:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(0),o=a.n(i),c=a(296),s=a(238),l=a(300),u=a(301),m=a(295),p=a(237),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.node,a=e.classes,n=t.frontmatter.title||t.fields.slug;return o.a.createElement(l.a,{className:a.card},o.a.createElement(u.a,null,o.a.createElement(m.a,{variant:"h6",component:"h2"},o.a.createElement(p.a,{to:t.fields.slug,color:"inherit"},n)),o.a.createElement(m.a,{color:"textSecondary",className:a.date},t.frontmatter.date),o.a.createElement(m.a,{paragraph:!0,dangerouslySetInnerHTML:{__html:t.excerpt}})))},t}(o.a.Component);t.a=Object(s.a)(function(e){return Object(c.a)({card:{minWidth:250},date:{marginBottom:e.spacing(2)}})})(d)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ade44eb678cb6beaa126.js.map