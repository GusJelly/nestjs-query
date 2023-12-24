"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6585],{6625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var o=a(5893),r=a(1151);const s={title:"Dataloaders",sidebar_label:"Dataloaders"},n=void 0,l={id:"graphql/dataloaders",title:"Dataloaders",description:"Nestjs-query integrates a standard implementation of dataloaders. Dataloaders are there to solve the n+1. Sometimes the default implementation can fail, for example when asynchronous custom authorizers are used and the n+1 problem occurs again despite using dataloaders. Then it may be useful to configure the default implementation of the dataloader, for example to pass a custom batch scheduler.",source:"@site/docs/graphql/dataloaders.mdx",sourceDirName:"graphql",slug:"/graphql/dataloaders",permalink:"/nestjs-query/docs/graphql/dataloaders",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/dataloaders.mdx",tags:[],version:"current",frontMatter:{title:"Dataloaders",sidebar_label:"Dataloaders"},sidebar:"docs",previous:{title:"Resolvers",permalink:"/nestjs-query/docs/graphql/resolvers"},next:{title:"Endpoints",permalink:"/nestjs-query/docs/graphql/queries/endpoints"}},d={},i=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Nestjs-query integrates a standard implementation of ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/dataloader/v/2.1.0",children:"dataloaders"}),". Dataloaders are there to solve the ",(0,o.jsx)(t.code,{children:"n+1"}),". Sometimes the default implementation can fail, for example when asynchronous ",(0,o.jsx)(t.a,{href:"/nestjs-query/docs/graphql/authorization#custom-authorizer",children:"custom authorizers"})," are used and the ",(0,o.jsx)(t.code,{children:"n+1"})," problem occurs again despite using dataloaders. Then it may be useful to configure the default implementation of the dataloader, for example to pass a custom batch scheduler."]}),"\n",(0,o.jsxs)(t.p,{children:["The following example demonstrates how to configure the generated dataloaders. For more information about the dataloader configuration, see the ",(0,o.jsx)(t.a,{href:"https://www.npmjs.com/package/dataloader/v/2.1.0",children:"dataloader documentation"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="app.module.ts"',children:"import { Module } from '@nestjs/common';\nimport { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\n\n@Module({\n  imports: [\n    // ... other imports\n\n    NestjsQueryGraphQLModule.forRoot({\n      dataLoader: {\n        batchScheduleFn(callback) {\n          // Here is an example of a batch scheduler that collects\n          // all requests in a time window of 250ms:\n          setTimeout(callback, 250);\n        },\n      },\n    }),\n\n    // ... other imports\n  ],\n\n  controllers: [],\n  providers: [],\n})\nexport class AppModule {}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>n});var o=a(7294);const r={},s=o.createContext(r);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);