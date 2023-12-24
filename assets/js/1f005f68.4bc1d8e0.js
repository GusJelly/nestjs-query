"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[724],{1621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(5893),s=n(1151);const i={title:"v0.4.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},a=void 0,l={permalink:"/nestjs-query/blog/2020/02/25/v0.4.0",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-02-25-v0.4.0.md",source:"@site/blog/2020-02-25-v0.4.0.md",title:"v0.4.0",description:"* Updated all mutations to take a single input argument with custom fields.",date:"2020-02-25T00:00:00.000Z",formattedDate:"February 25, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"minor",permalink:"/nestjs-query/blog/tags/minor"}],readingTime:.395,hasTruncateMarker:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.4.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},unlisted:!1,prevItem:{title:"v0.5.1",permalink:"/nestjs-query/blog/2020/03/02/v0.5.1"},nextItem:{title:"v0.5.0",permalink:"/nestjs-query/blog/2020/02/25/v0.5.0"}},o={authorsImageUrls:[void 0]},u=[];function c(e){const t={code:"code",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Updated all mutations to take a single ",(0,r.jsx)(t.code,{children:"input"})," argument with custom fields.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"createOne(input: DTO)"})," -> ",(0,r.jsx)(t.code,{children:"createOne(input: { [dtoName]: DTO })"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"createMany(input: DTO[])"})," -> ",(0,r.jsx)(t.code,{children:"createOne(input: { [pluralDTOName]: DTO[] })"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"updateOne(id: ID, input: UpdateDTO)"})," -> ",(0,r.jsx)(t.code,{children:"createOne(input: { id: ID, update: UpdateDTO })"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"updateMany(filter: Filter<DTO>, input: UpdateDTO)"})," -> ",(0,r.jsx)(t.code,{children:"createOne(input: { filter: Filter<DTO>, update: UpdateDTO })"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"deleteOne(input: ID)"})," -> ",(0,r.jsx)(t.code,{children:"deleteOne(input: {id: ID})"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"deleteMany(input: Filter<DTO>)"})," -> ",(0,r.jsx)(t.code,{children:"createOne(input: { filter: Filter<DTO> })"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Updated docs to reflect changes."}),"\n"]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var r=n(7294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);