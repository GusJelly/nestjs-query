"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6162],{8762:(e,t,r)=>{r.d(t,{Z:()=>P});var a=r(102),s=r(7294),n=r(512),i=r(8299),l=r(4980),o=r(8746),c=r(1614),m=r(6550),u=r(8407);function d(e){var t=(0,m.TH)().pathname;return(0,s.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,u.Mg)(e.permalink,t))}(e,t)}))}),[e,t])}const h={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=r(5893);function p(e){var t=e.sidebar,r=d(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,n.Z)(h.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,n.Z)(h.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,n.Z)(h.sidebarItemList,"clean-list"),children:r.map((function(e){return(0,g.jsx)("li",{className:h.sidebarItem,children:(0,g.jsx)(o.Z,{isNavLink:!0,to:e.permalink,className:h.sidebarItemLink,activeClassName:h.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var v=r(2306);function f(e){var t=d(e.sidebar.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((function(e){return(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(o.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function x(e){return(0,g.jsx)(v.Zo,{component:f,props:e})}function j(e){var t=e.sidebar,r=(0,l.i)();return null!=t&&t.items.length?"mobile"===r?(0,g.jsx)(x,{sidebar:t}):(0,g.jsx)(p,{sidebar:t}):null}var b=["sidebar","toc","children"];function P(e){var t=e.sidebar,r=e.toc,s=e.children,l=(0,a.Z)(e,b),o=t&&t.items.length>0;return(0,g.jsx)(i.Z,Object.assign({},l,{children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(j,{sidebar:t}),(0,g.jsx)("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),r&&(0,g.jsx)("div",{className:"col col--2",children:r})]})})}))}},1827:(e,t,r)=>{r.d(t,{Z:()=>M});r(7294);var a=r(512),s=r(7762),n=r(1402),i=r(5893);function l(e){var t,r,a=e.children,l=e.className,o=(0,s.C)(),c=o.frontMatter,m=o.assets,u=o.metadata.description,d=(0,n.C)().withBaseUrl,h=null!=(t=m.image)?t:c.image,g=null!=(r=c.keywords)?r:[];return(0,i.jsxs)("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[u&&(0,i.jsx)("meta",{itemProp:"description",content:u}),h&&(0,i.jsx)("link",{itemProp:"image",href:d(h,{absolute:!0})}),g.length>0&&(0,i.jsx)("meta",{itemProp:"keywords",content:g.join(",")}),a]})}var o=r(8746);const c={title:"title_f1Hy"};function m(e){var t=e.className,r=(0,s.C)(),n=r.metadata,l=r.isBlogPostPage,m=n.permalink,u=n.title,d=l?"h1":"h2";return(0,i.jsx)(d,{className:(0,a.Z)(c.title,t),itemProp:"headline",children:l?u:(0,i.jsx)(o.Z,{itemProp:"url",to:m,children:u})})}var u=r(1614),d=r(7880);const h={container:"container_mt6G"};function g(e){var t,r=e.readingTime,a=(t=(0,d.c)().selectMessage,function(e){var r=Math.ceil(e);return t(r,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))});return(0,i.jsx)(i.Fragment,{children:a(r)})}function p(e){var t=e.date,r=e.formattedDate;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:r})}function v(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function f(e){var t=e.className,r=(0,s.C)().metadata,n=r.date,l=r.formattedDate,o=r.readingTime;return(0,i.jsxs)("div",{className:(0,a.Z)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:n,formattedDate:l}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{}),(0,i.jsx)(g,{readingTime:o})]})]})}function x(e){return e.href?(0,i.jsx)(o.Z,Object.assign({},e)):(0,i.jsx)(i.Fragment,{children:e.children})}function j(e){var t=e.author,r=e.className,s=t.name,n=t.title,l=t.url,o=t.imageURL,c=t.email,m=l||c&&"mailto:"+c||void 0;return(0,i.jsxs)("div",{className:(0,a.Z)("avatar margin-bottom--sm",r),children:[o&&(0,i.jsx)(x,{href:m,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:o,alt:s,itemProp:"image"})}),s&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(x,{href:m,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:s})})}),n&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:n})]})]})}const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function P(e){var t=e.className,r=(0,s.C)(),n=r.metadata.authors,l=r.assets;if(0===n.length)return null;var o=n.every((function(e){return!e.name}));return(0,i.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?b.imageOnlyAuthorRow:"row",t),children:n.map((function(e,t){var r;return(0,i.jsx)("div",{className:(0,a.Z)(!o&&"col col--6",o?b.imageOnlyAuthorCol:b.authorCol),children:(0,i.jsx)(j,{author:Object.assign({},e,{imageURL:null!=(r=l.authorsImageUrls[t])?r:e.imageURL})})},t)}))})}function N(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(f,{}),(0,i.jsx)(P,{})]})}var _=r(9861),Z=r(1550);function k(e){var t=e.children,r=e.className,n=(0,s.C)().isBlogPostPage;return(0,i.jsx)("div",{id:n?_.blogPostContainerID:void 0,className:(0,a.Z)("markdown",r),itemProp:"articleBody",children:(0,i.jsx)(Z.Z,{children:t})})}var I=r(7612),C=r(8045),w=r(102),T=["blogPostTitle"];function y(){return(0,i.jsx)("b",{children:(0,i.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function F(e){var t=e.blogPostTitle,r=(0,w.Z)(e,T);return(0,i.jsx)(o.Z,Object.assign({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r,{children:(0,i.jsx)(y,{})}))}const L={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function B(){var e=(0,s.C)(),t=e.metadata,r=e.isBlogPostPage,n=t.tags,l=t.title,o=t.editUrl,c=t.hasTruncateMarker,m=!r&&c,u=n.length>0;return u||m||o?(0,i.jsxs)("footer",{className:(0,a.Z)("row docusaurus-mt-lg",r&&L.blogPostFooterDetailsFull),children:[u&&(0,i.jsx)("div",{className:(0,a.Z)("col",{"col--9":m}),children:(0,i.jsx)(C.Z,{tags:n})}),r&&o&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(I.Z,{editUrl:o})}),m&&(0,i.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":u}),children:(0,i.jsx)(F,{blogPostTitle:l,to:t.permalink})})]}):null}function M(e){var t=e.children,r=e.className,n=(0,s.C)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,i.jsxs)(l,{className:(0,a.Z)(n,r),children:[(0,i.jsx)(N,{}),(0,i.jsx)(k,{children:t}),(0,i.jsx)(B,{})]})}},7762:(e,t,r)=>{r.d(t,{C:()=>o,n:()=>l});var a=r(7294),s=r(8875),n=r(5893),i=a.createContext(null);function l(e){var t=e.children,r=e.content,s=e.isBlogPostPage,l=function(e){var t=e.content,r=e.isBlogPostPage;return(0,a.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:r}}),[t,r])}({content:r,isBlogPostPage:void 0!==s&&s});return(0,n.jsx)(i.Provider,{value:l,children:t})}function o(){var e=(0,a.useContext)(i);if(null===e)throw new s.i6("BlogPostProvider");return e}},7880:(e,t,r)=>{r.d(t,{c:()=>c});var a=r(7294),s=r(6832),n=["zero","one","two","few","many","other"];function i(e){return n.filter((function(t){return e.includes(t)}))}var l={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,s.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:i(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),l}var t,r}),[e])}function c(){var e=o();return{selectMessage:function(t,r){return function(e,t,r){var a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var s=r.select(t),n=r.pluralForms.indexOf(s);return a[Math.min(n,a.length-1)]}(r,t,e)}}}}}]);