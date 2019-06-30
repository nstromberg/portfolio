(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{185:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(189),c=a(191),s=a(192),p=(a(36),a(211)),u=a(187),d=function(){return o.a.createElement(u.b,{query:"109386375",render:function(e){var t=e.site.siteMetadata,a=t.description,n=t.social,r=t.author,i=r.email,l=r.name;return o.a.createElement("div",null,o.a.createElement("h1",null,a),o.a.createElement("p",null,l," is a Computer Science and Math double major at the University of Kentucky focused on ML/AI and their applications to problem solving in all fields.",o.a.createElement("br",null),o.a.createElement("a",{href:"mailto:"+i},"Email"),o.a.createElement("br",null),o.a.createElement("a",{href:n.github},"Github")))},data:p})},m=a(195);a.d(t,"default",function(){return g}),a.d(t,"pageQuery",function(){return y});var f=l.a.div.withConfig({displayName:"pages__StyledGrid",componentId:"sc-1skyy1d-0"})(["{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:10px;padding-bottom:36px;}"]),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(c.a,{title:t},o.a.createElement(s.a,{title:"Overview of projects",keywords:["portfolio","gatsby","javascript","react","typescript"]}),o.a.createElement(d,null),o.a.createElement("article",null,o.a.createElement(f,null,a.map(function(e){var t=e.node;return o.a.createElement(m.a,{node:t})}))))},t}(o.a.Component),y="3927474892"},187:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(13),o=a.n(i),l=a(57),c=a.n(l);a.d(t,"a",function(){return c.a});a(188);var s=r.a.createContext({});function p(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(p,{data:t,query:a,render:n||i,staticQueryData:e})})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},188:function(e,t,a){var n;e.exports=(n=a(190))&&n.default||n},190:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),l=a(82),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},191:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(187),c=a(189),s=c.a.nav.withConfig({displayName:"layout__StyledNav",componentId:"sc-1syuscs-0"})(["ul{list-style-type:none;margin:0;padding:0;}li{display:inline-block;margin:16px;a{background:none;}}"]),p=c.a.footer.withConfig({displayName:"layout__StyledFooter",componentId:"sc-1syuscs-1"})(["padding-bottom:36px;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{className:"navigation"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.a,{to:"/"},"±")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/tags"},"Categories")),o.a.createElement("li",null,o.a.createElement(l.a,{to:"/about"},"About")))),o.a.createElement("div",{className:"content"},e),o.a.createElement(p,{className:"footer"},"Built with"," ",o.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")," ","and"," ",o.a.createElement("a",{href:"https://typescriptlang.org"},"Typescript")))},t}(o.a.Component)},192:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(7),r=a.n(n),i=a(193),o=a(0),l=a.n(o),c=a(194),s=a.n(c),p=a(187),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(p.b,{query:"872482878",render:function(t){var a=e.props.description||t.site.siteMetadata.description,n=e.props.lang||"en",r=e.props.title,i=e.props.keywords||[];return l.a.createElement(s.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:r},{property:"og:description",content:a},{property:"og:type",content:"website"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[])})},data:i})},t}(l.a.Component)},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Portfolio",description:"Personal Programming Portfolio built in Gatsby and Typescript",author:{name:"Nathan Stromberg"}}}}}},195:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(187),c=a(189),s=c.a.div.withConfig({displayName:"projectcard__CardWrapper",componentId:"fl5bkt-0"})(["overflow:hidden;padding:0 0 32px;margin:48px auto 0;width:300px;font-family:sans-serif;box-shadow:0 0 20px rgba(0,0,0,.05),0 0px 40px rgba(0,0,0,.08);border-radius:5px;"]),p=c.a.header.withConfig({displayName:"projectcard__CardHeader",componentId:"fl5bkt-1"})(["padding-top:32px;padding-bottom:32px;"]),u=c.a.h1.withConfig({displayName:"projectcard__CardHeading",componentId:"fl5bkt-2"})(["font-size:24px;font-weight:bold;text-align:center;"]),d=c.a.div.withConfig({displayName:"projectcard__CardBody",componentId:"fl5bkt-3"})(["padding-right:32px;padding-left:32px;"]),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.node,t=e.frontmatter.title||e.fields.slug;return o.a.createElement(s,{key:e.fields.slug},o.a.createElement(u,null,o.a.createElement(p,null,o.a.createElement(l.a,{to:e.fields.slug},t))),o.a.createElement(d,null,o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}})))},t}(o.a.Component)},211:function(e){e.exports={data:{site:{siteMetadata:{description:"Personal Programming Portfolio built in Gatsby and Typescript",social:{github:"https://github.com/nstromberg"},author:{name:"Nathan Stromberg",email:"nathan.b.stromberg@gmail.com"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6c7e6c86f551d9c01d7d.js.map