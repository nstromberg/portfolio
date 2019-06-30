(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return m});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(190),c=n(192),s=n(193),p=n(196),d=l.a.div.withConfig({displayName:"tag__StyledGrid",componentId:"sc-93msgf-0"})(["{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;padding-bottom:36px;}"]),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.pageContext,n=e.data,a=t.tag,r=n.site.siteMetadata.title,o=n.allMarkdownRemark.edges;return i.a.createElement(c.a,{title:r},i.a.createElement(s.a,{title:'Projects tagged "${tag}"',keywords:["portfolio","gatsby","typescript","react",a]}),i.a.createElement("article",null,i.a.createElement("header",null,i.a.createElement("h1",null,"Projects tagged ",a)),i.a.createElement(d,null,o.map(function(e){var t=e.node;return i.a.createElement(p.a,{node:t})}))))},t}(i.a.Component),m="3858307031"},188:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),o=n(13),i=n.n(o),l=n(57),c=n.n(l);n.d(t,"a",function(){return c.a});n(189);var s=r.a.createContext({});function p(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(p,{data:t,query:n,render:a||o,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},189:function(e,t,n){var a;e.exports=(a=n(191))&&a.default||a},191:function(e,t,n){"use strict";n.r(t);n(16);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),l=n(83),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},192:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(188),c=n(190),s=c.a.nav.withConfig({displayName:"layout__StyledNav",componentId:"sc-1syuscs-0"})(["ul{list-style-type:none;margin:0;padding:0;}li{display:inline-block;margin:16px;a{background:none;}}"]),p=c.a.footer.withConfig({displayName:"layout__StyledFooter",componentId:"sc-1syuscs-1"})(["padding-bottom:36px;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{className:"navigation"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/"},"±")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/tags"},"Categories")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/about"},"About")))),i.a.createElement("div",{className:"content"},e),i.a.createElement(p,{className:"footer"},"Built with"," ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")," ","and"," ",i.a.createElement("a",{href:"https://typescriptlang.org"},"Typescript")))},t}(i.a.Component)},193:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(7),r=n.n(a),o=n(194),i=n(0),l=n.n(i),c=n(195),s=n.n(c),p=n(188),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(p.b,{query:"872482878",render:function(t){var n=e.props.description||t.site.siteMetadata.description,a=e.props.lang||"en",r=e.props.title,o=e.props.keywords||[];return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:r},{property:"og:description",content:n},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[])})},data:o})},t}(l.a.Component)},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}},196:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(188),c=n(190),s=c.a.div.withConfig({displayName:"projectcard__CardWrapper",componentId:"fl5bkt-0"})(["overflow:hidden;padding:0 0 32px;margin:48px auto 0;width:300px;font-family:sans-serif;box-shadow:0 0 20px rgba(0,0,0,.05),0 0px 40px rgba(0,0,0,.08);border-radius:5px;"]),p=c.a.header.withConfig({displayName:"projectcard__CardHeader",componentId:"fl5bkt-1"})(["padding-top:32px;padding-bottom:32px;"]),d=c.a.h1.withConfig({displayName:"projectcard__CardHeading",componentId:"fl5bkt-2"})(["font-size:24px;font-weight:bold;text-align:center;"]),u=c.a.div.withConfig({displayName:"projectcard__CardBody",componentId:"fl5bkt-3"})(["padding-right:32px;padding-left:32px;"]),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.node,t=e.frontmatter.title||e.fields.slug;return i.a.createElement(s,{key:e.fields.slug},i.a.createElement(d,null,i.a.createElement(p,null,i.a.createElement(l.a,{to:e.fields.slug},t))),i.a.createElement(u,null,i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-ba2df193b0a073417fc5.js.map