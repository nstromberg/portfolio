(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"pageQuery",function(){return m});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(187),c=n(189),s=n(191),u=n(192),p=Object(c.a)("ul").withConfig({displayName:"project__StyledUl",componentId:"sc-17h8ne6-0"})(["list-style-type:none;li::before{content:'' !important;padding-right:0 !important;}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.pageContext,a=n.previous,r=n.next;return o.a.createElement(s.a,{title:t},o.a.createElement(u.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",null,e.frontmatter.date)),o.a.createElement("div",{className:"page-content"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement(p,null,a&&o.a.createElement("li",null,o.a.createElement(l.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r&&o.a.createElement("li",null,o.a.createElement(l.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))))},t}(o.a.Component),m="1284548601"},187:function(e,t,n){"use strict";n.d(t,"b",function(){return p});var a=n(0),r=n.n(a),i=n(13),o=n.n(i),l=n(57),c=n.n(l);n.d(t,"a",function(){return c.a});n(188);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:a||i,staticQueryData:e})})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},188:function(e,t,n){var a;e.exports=(a=n(190))&&a.default||a},190:function(e,t,n){"use strict";n.r(t);n(16);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),l=n(82),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},191:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(187),c=n(189),s=c.a.nav.withConfig({displayName:"layout__StyledNav",componentId:"sc-1syuscs-0"})(["ul{list-style-type:none;margin:0;padding:0;}li{display:inline-block;margin:16px;a{background:none;}}"]),u=c.a.footer.withConfig({displayName:"layout__StyledFooter",componentId:"sc-1syuscs-1"})(["padding-bottom:36px;"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{className:"navigation"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.a,{to:"/"},"±")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/tags"},"Categories")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/about"},"About")))),o.a.createElement("div",{className:"content"},e),o.a.createElement(u,{className:"footer"},"Built with"," ",o.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")," ","and"," ",o.a.createElement("a",{href:"https://typescriptlang.org"},"Typescript")))},t}(o.a.Component)},192:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(7),r=n.n(a),i=n(193),o=n(0),l=n.n(o),c=n(194),s=n.n(c),u=n(187),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(u.b,{query:"872482878",render:function(t){var n=e.props.description||t.site.siteMetadata.description,a=e.props.lang||"en",r=e.props.title,i=e.props.keywords||[];return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:r},{property:"og:description",content:n},{property:"og:type",content:"website"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[])})},data:i})},t}(l.a.Component)},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}}}]);
//# sourceMappingURL=component---src-templates-project-tsx-2241176ceb8e4f983e78.js.map