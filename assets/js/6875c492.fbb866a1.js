"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[8610],{1052:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(1614),a=n(6948),i=n(5893);function r(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.Z,{permalink:n,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.Z,{permalink:r,title:(0,i.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},6903:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(7762),a=n(1827),i=n(5893);function r(e){var t=e.items,n=e.component,r=void 0===n?a.Z:n;return(0,i.jsx)(i.Fragment,{children:t.map((function(e){var t=e.content;return(0,i.jsx)(s.n,{content:t,children:(0,i.jsx)(r,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},5462:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(7294);var s=n(512),a=n(1614),i=n(7880),r=n(4873),l=n(8015),o=n(8746),c=n(8762),g=n(1052),d=n(6145),u=n(6903),h=n(4007),p=n(4055),m=n(5893);function x(e){var t,n=(t=(0,i.c)().selectMessage,function(e){return t(e,(0,a.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,a.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function j(e){var t=x(e.tag);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:t}),(0,m.jsx)(d.Z,{tag:"blog_tags_posts"})]})}function b(e){var t=e.tag,n=e.items,s=e.sidebar,i=e.listMetadata,r=x(t);return(0,m.jsxs)(c.Z,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.Z,{as:"h1",children:r}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.Z,{items:n}),(0,m.jsx)(g.Z,{metadata:i})]})}function f(e){return(0,m.jsxs)(r.FG,{className:(0,s.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(j,Object.assign({},e)),(0,m.jsx)(b,Object.assign({},e))]})}},4007:(e,t,n)=>{n.d(t,{Z:()=>h});n(7294);var s=n(512),a=n(1614),i=n(2411),r=n(5893);function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var g=n(8015),d=n(8555);function u(e){var t=e.className;return(0,r.jsx)(d.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.Z)(t,g.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,Object.assign({},e))]})}}}]);