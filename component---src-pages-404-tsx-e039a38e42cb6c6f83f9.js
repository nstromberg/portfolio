(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{229:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return l}),n.d(e,"pageQuery",function(){return u});var a=n(16),r=n.n(a),i=n(0),o=n.n(i),c=n(240),s=n(241),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{title:t},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"Oh no, that doesn't exist..."))},e}(o.a.Component),u="1097489062"},234:function(t,e,n){"use strict";n.d(e,"b",function(){return p});var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(81),s=n.n(c);n.d(e,"a",function(){return s.a});n(235);var l=r.a.createContext({});function u(t){var e=t.staticQueryData,n=t.data,a=t.query,i=t.render,o=n?n.data:e[a]&&e[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(t){var e=t.data,n=t.query,a=t.render,i=t.children;return r.a.createElement(l.Consumer,null,function(t){return r.a.createElement(u,{data:e,query:n,render:a||i,staticQueryData:t})})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},235:function(t,e,n){var a;t.exports=(a=n(239))&&a.default||a},237:function(t,e,n){"use strict";n(24);var a=n(0),r=n.n(a),i=n(294),o=n(234),c=r.a.forwardRef(function(t,e){return r.a.createElement(i.a,Object.assign({component:o.a,ref:e},t))});e.a=c},239:function(t,e,n){"use strict";n.r(e);n(24);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(116),s=function(t){var e=t.location,n=t.pageResources;return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},240:function(t,e,n){"use strict";n(17),n(114);var a=n(16),r=n.n(a),i=n(0),o=n.n(i),c=n(237),s=n(296),l=n(238),u=n(297),p=n(299),d=n(295),m=n(298),f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=t.classes;return o.a.createElement("div",{className:n.root},o.a.createElement(u.a,{position:"sticky"},o.a.createElement(p.a,null,o.a.createElement(d.a,{variant:"h6"},o.a.createElement(c.a,{color:"inherit",className:n.link,to:"/"},"±"),o.a.createElement(c.a,{color:"inherit",className:n.link,to:"/tags"},"Categories"),o.a.createElement(c.a,{color:"inherit",className:n.link,to:"/about"},"About")),o.a.createElement(d.a,{variant:"h6",align:"right",className:n.name},"Nathan Stromberg"))),o.a.createElement(m.a,{className:n.main},e),o.a.createElement(d.a,{variant:"body2",color:"textSecondary",align:"center",className:n.footer},"Built with love using ",o.a.createElement(c.a,{color:"inherit",href:"https://gatsbyjs.com/"},"Gatsby")," and ",o.a.createElement(c.a,{color:"inherit",href:"https://typescriptlang.org/"},"Typescript")))},e}(o.a.Component);e.a=Object(l.a)(function(t){return Object(s.a)({root:{flexGrow:1},link:{marginRight:t.spacing(2)},name:{flexGrow:1},footer:{margin:t.spacing(4)},main:{margin:t.spacing(4),padding:t.spacing(4)}})})(f)},241:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var a=n(16),r=n.n(a),i=n(242),o=n(0),c=n.n(o),s=n(246),l=n.n(s),u=n(234),p=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this;return c.a.createElement(u.b,{query:"872482878",render:function(e){var n=t.props.description||e.site.siteMetadata.description,a=t.props.lang||"en",r=t.props.title,i=t.props.keywords||[];return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:r},{property:"og:description",content:n},{property:"og:type",content:"website"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[])})},data:i})},e}(c.a.Component)},242:function(t){t.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-e039a38e42cb6c6f83f9.js.map