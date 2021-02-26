(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(211)),i={title:"Getting Started"},s={unversionedId:"graphql/getting-started",id:"graphql/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The @nestjs-query/query-graphql package provided base Resolvers and graphql type classes to make creating code-first graphql CRUD applications easy.",source:"@site/docs/graphql/getting-started.md",slug:"/graphql/getting-started",permalink:"/nestjs-query/docs/graphql/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/mongoose/serialization"},next:{title:"DTOs",permalink:"/nestjs-query/docs/graphql/dtos"}},c=[{value:"Installation",id:"installation",children:[{value:"Docs",id:"docs",children:[]}]}],l={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," package provided base ",Object(o.b)("inlineCode",{parentName:"p"},"Resolvers")," and graphql type classes to make creating code-first graphql CRUD applications easy."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-graphql"},"Installation Docs")),Object(o.b)("h3",{id:"docs"},"Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/dtos"},"DTOs")," - Documentation about the use of DTOs and associated annotations."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/resolvers"},"Resolvers")," - Documentation about crud resolvers and their usage."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/queries"},"Queries")," - Documentation about the provided graphql query endpoints."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/mutations"},"Mutations")," -  Documentation about the provided graphql mutation endpoints."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/hooks"},"Hooks")," -  Documentation about hooks (e.g before create one)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/hooks"},"Authorization")," -  Documentation about authorization."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/subscriptions"},"Subscriptions")," -  Documentation about enabling subscriptions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations"},"Relations")," -  Documentation about specifying relations in your resolvers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/types"},"Types")," - Documentation for the provided graphql types."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/federation"},"Federation")," - Documentation for using ",Object(o.b)("inlineCode",{parentName:"li"},"nestjs-query")," with federation.")))}p.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);