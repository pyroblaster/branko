(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return u});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(158),c=n(159),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(s.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=l;var u="1097489062"},154:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(33),c=n.n(s);n.d(e,"a",function(){return c.a});n(155),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},155:function(t,e,n){var a;t.exports=(a=n(157))&&a.default||a},157:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(55),c=n(2),l=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},158:function(t,e,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),s=n(154),c=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=(t.location,t.title),n=t.children,a=o.a.createElement("div",null,o.a.createElement("h1",{className:"site-title"},o.a.createElement(s.a,{to:"/"},e)),o.a.createElement("h2",{className:"site-subtitle"},"englesko hrvatski IT rječnik otvorenog koda"));return o.a.createElement("div",{className:"root"},o.a.createElement("header",null,a,o.a.createElement("a",{className:"github-link",href:"https://github.com/marinbenc/branko"},"Dodaj novu riječ")),o.a.createElement("main",null,n),o.a.createElement("footer",null,"Branko je ",o.a.createElement("a",{href:"https://github.com/marinbenc/branko"},"rječnik otvorenog koda i svi su pozvani dodati nove riječi"),".",o.a.createElement("br",null),"Održava ",o.a.createElement("a",{href:"http://marinbenc.com"},"Marin Benčević"),"."))},e}(o.a.Component);e.a=c},159:function(t,e,n){"use strict";var a=n(160),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(163),l=n.n(c);function u(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title,c=a.data.site,u=e||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=u},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Branko",description:"englesko hrvatski IT riječnik otvorenog koda",author:"Marin Bencevic"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-6fde14dd3ce57343b387.js.map