"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[7810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,y=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={title:"v0.7.5",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},l=void 0,u={permalink:"/nestjs-query/blog/2020/04/03/v0.7.5",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-04-03-v0.7.5.md",source:"@site/blog/2020-04-03-v0.7.5.md",title:"v0.7.5",description:"* [FIXED] Tables with composite primary keys are not quoted properly.",date:"2020-04-03T00:00:00.000Z",formattedDate:"April 3, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],readingTime:.115,truncated:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.7.5",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},prevItem:{title:"v0.8.0",permalink:"/nestjs-query/blog/2020/04/07/v0.8.0"},nextItem:{title:"v0.7.4",permalink:"/nestjs-query/blog/2020/04/02/v0.7.4"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"[FIXED]"," Tables with composite primary keys are not quoted properly."),(0,a.kt)("li",{parentName:"ul"},"[DOCS]"," Added docs for working with multiple connections ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tripss/nestjs-query/pull/73"},"#73")," - ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/johannesschobel"},"@johannesschobel"))))}h.isMDXComponent=!0}}]);