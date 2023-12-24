"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[9972],{433:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var r=n(512);const o={tabItem:"tabItem_Ymn6"};var i=n(5893);function a(e){var t=e.children,n=e.hidden,a=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:n,children:t})}},2808:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(7294),o=n(512),i=n(3735),a=n(6550),l=n(613),s=n(4423),u=n(636),c=n(9200);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,i=(0,a.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:o});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function h(e){var t,n,o,i,a=e.defaultValue,s=e.queryString,u=void 0!==s&&s,d=e.groupId,h=p(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:h})})),g=v[0],y=v[1],b=f({queryString:u,groupId:d}),x=b[0],T=b[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),o=n[0],i=n[1],[o,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),I=j[0],w=j[1],S=function(){var e=null!=x?x:I;return m({value:e,tabValues:h})?e:null}();return(0,l.Z)((function(){S&&y(S)}),[S]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);y(e),T(e),w(e)}),[T,w,h]),tabValues:h}}var v=n(5730);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(5893);function b(e){var t=e.className,n=e.block,r=e.selectedValue,a=e.selectValue,l=e.tabValues,s=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=s.indexOf(t),o=l[n].value;o!==r&&(u(t),a(o))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,o=s.indexOf(e.currentTarget)+1;n=null!=(r=s[o])?r:s[0];break;case"ArrowLeft":var i,a=s.indexOf(e.currentTarget)-1;n=null!=(i=s[a])?i:s[s.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,o=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var a=i.find((function(e){return e.props.value===o}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function T(e){var t=h(e);return(0,y.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,y.jsx)(b,Object.assign({},e,t)),(0,y.jsx)(x,Object.assign({},e,t))]})}function j(e){var t=(0,v.Z)();return(0,y.jsx)(T,Object.assign({},e,{children:d(e.children)}),String(t))}},20:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(5893),o=n(1151);n(2808),n(433);const i={title:"v0.23.x to v0.24.x"},a=void 0,l={id:"migration-guides/v0.23.x-to-v0.24.x",title:"v0.23.x to v0.24.x",description:"Removed Public ConnectionType and SortType function.",source:"@site/docs/migration-guides/v0.23.x-to-v0.24.x.mdx",sourceDirName:"migration-guides",slug:"/migration-guides/v0.23.x-to-v0.24.x",permalink:"/nestjs-query/docs/migration-guides/v0.23.x-to-v0.24.x",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/migration-guides/v0.23.x-to-v0.24.x.mdx",tags:[],version:"current",frontMatter:{title:"v0.23.x to v0.24.x"},sidebar:"docs",previous:{title:"v0.24.x to v0.25.x",permalink:"/nestjs-query/docs/migration-guides/v0.24.x-to-v0.25.x"},next:{title:"v0.22.x to v0.23.x",permalink:"/nestjs-query/docs/migration-guides/v0.22.x-to-v0.23.x"}},s={},u=[{value:"Removed Public ConnectionType and SortType function.",id:"removed-public-connectiontype-and-sorttype-function",level:2},{value:"Old",id:"old",level:3},{value:"New",id:"new",level:3},{value:"<code>@QueryOptions</code> Decorator",id:"queryoptions-decorator",level:2},{value:"Old",id:"old-1",level:3},{value:"New",id:"new-1",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"removed-public-connectiontype-and-sorttype-function",children:"Removed Public ConnectionType and SortType function."}),"\n",(0,r.jsxs)(t.p,{children:["In versions prior to ",(0,r.jsx)(t.code,{children:"v0.24.0"})," the ",(0,r.jsx)(t.code,{children:"ConnectionType"})," and ",(0,r.jsx)(t.code,{children:"SortType"})," functions could be used to get a reference to a\n",(0,r.jsx)(t.code,{children:"Connection"})," and ",(0,r.jsx)(t.code,{children:"Sort"})," graphql implementation. In ",(0,r.jsx)(t.code,{children:"v0.24.0"})," there public methods were removed in favor of pulling\nthem off of the ",(0,r.jsx)(t.code,{children:"QueryArgs"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"This change was made to remove possibility of creating ConnectionTypes and SortTypes that are incompatible with the\nQueryArgsType."}),"\n",(0,r.jsx)(t.h3,{id:"old",children:"Old"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { ConnectionType, SortType } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemConnection = ConnectionType(TodoItemDTO);\nexport const TodoItemSort = SortType(TodoItemDTO);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"new",children:"New"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { QueryArgsType } from '@ptc-org/nestjs-query-graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\nexport const TodoItemQueryArgs = QueryArgsType(TodoItemDTO)\nexport const TodoItemConnection = TodoItemQueryArgs.ConnectionType;\nexport const TodoItemSort = TodoItemQueryArgs.SortType;\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"queryoptions-decorator",children:[(0,r.jsx)(t.code,{children:"@QueryOptions"})," Decorator"]}),"\n",(0,r.jsxs)(t.p,{children:["In previous versions you had to specify options for querying and connections in your resolver. In ",(0,r.jsx)(t.code,{children:"v0.24.0"})," a new\n",(0,r.jsx)(t.code,{children:"@QueryOptions"})," decorator was  introduced to allow specifying all query related options along side the DTO, instead of splitting the configuration between the resolver and ",(0,r.jsx)(t.code,{children:"DTO"}),".  The new ",(0,r.jsx)(t.code,{children:"@QueryOptions"})," provides a few benefits."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Better re-use across types by avoiding passing configuration options all the way through the code to each piece that may need them."}),"\n",(0,r.jsx)(t.li,{children:"Decoupling query options from the resolver. This puts us in a better position to decouple the DTO definition from the transport layer (e.g. graphql)"}),"\n",(0,r.jsx)(t.li,{children:"Keeps DTO configuration options closer to the source."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"old-1",children:"Old"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.module.ts"',children:"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{\n        DTOClass: TodoItemDTO,\n        EntityClass: TodoItemEntity,\n        pagingStrategy: PagingStrategies.OFFSET,\n        enableTotalCount: true,\n        defaultResultSize: 5,\n        maxResultSize: 100,\n        defaultFilter: { completed: { is: true } },\n        defaultSort: [{ field: 'title', direction: SortDirection.ASC }],\n      }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"new-1",children:"New"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="todo-item.dto.ts"',children:"import { FilterableField, QueryOptions, PagingStrategies } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\n@QueryOptions({\n  pagingStrategy: PagingStrategies.OFFSET, // use offset based paging for this DTO\n  enableTotalCount: true, // enable querying for totalCount\n  defaultResultSize: 5, // return 5 records by default\n  maxResultSize: 100, // do not allow querying for more than 100 records at a time\n  defaultFilter: { completed: { is: true } }, // default filter when one is not provided\n  defaultSort: [{ field: 'title', direction: SortDirection.ASC }], // default sort when one is not provided.\n})\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var r=n(7294);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);