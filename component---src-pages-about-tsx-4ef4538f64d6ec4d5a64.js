(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{185:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return l}),n.d(e,"pageQuery",function(){return u});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(192),s=n(193),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{title:t},i.a.createElement(s.a,{title:"All tags",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement("article",null,"About Nathan Stromberg... "))},e}(i.a.Component),u="1097489062"},188:function(t,e,n){"use strict";n.d(e,"b",function(){return p});var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=n(57),s=n.n(c);n.d(e,"a",function(){return s.a});n(189);var l=r.a.createContext({});function u(t){var e=t.staticQueryData,n=t.data,a=t.query,o=t.render,i=n?n.data:e[a]&&e[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(t){var e=t.data,n=t.query,a=t.render,o=t.children;return r.a.createElement(l.Consumer,null,function(t){return r.a.createElement(u,{data:e,query:n,render:a||o,staticQueryData:t})})};p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},189:function(t,e,n){var a;t.exports=(a=n(191))&&a.default||a},191:function(t,e,n){"use strict";n.r(e);n(16);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=n(83),s=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},192:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(188),s=n(190),l=s.a.nav.withConfig({displayName:"layout__StyledNav",componentId:"sc-1syuscs-0"})(["ul{list-style-type:none;margin:0;padding:0;}li{display:inline-block;margin:16px;a{background:none;}}"]),u=s.a.footer.withConfig({displayName:"layout__StyledFooter",componentId:"sc-1syuscs-1"})(["padding-bottom:36px;"]),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{className:"navigation"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.a,{to:"/"},"±")),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/tags"},"Categories")),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/about"},"About")))),i.a.createElement("div",{className:"content"},t),i.a.createElement(u,{className:"footer"},"Built with"," ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")," ","and"," ",i.a.createElement("a",{href:"https://typescriptlang.org"},"Typescript")))},e}(i.a.Component)},193:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n(7),r=n.n(a),o=n(194),i=n(0),c=n.n(i),s=n(195),l=n.n(s),u=n(188),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this;return c.a.createElement(u.b,{query:"872482878",render:function(e){var n=t.props.description||e.site.siteMetadata.description,a=t.props.lang||"en",r=t.props.title,o=t.props.keywords||[];return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:r},{property:"og:description",content:n},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[])})},data:o})},e}(c.a.Component)},194:function(t){t.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-4ef4538f64d6ec4d5a64.js.map