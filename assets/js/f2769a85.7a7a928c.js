"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[6578],{433:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var l=t(512);const a={tabItem:"tabItem_Ymn6"};var r=t(5893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.Z)(a.tabItem,s),hidden:t,children:n})}},2808:(e,n,t)=>{t.d(n,{Z:()=>y});var l=t(7294),a=t(512),r=t(3735),s=t(6550),o=t(613),d=t(4423),i=t(636),c=t(9200);function u(e){var n,t;return null!=(n=null==(t=l.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,l.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,l.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,r=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,l=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:t,groupId:a});return[(0,d._X)(o),(0,l.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function x(e){var n,t,a,r,s=e.defaultValue,d=e.queryString,i=void 0!==d&&d,u=e.groupId,x=h(e),j=(0,l.useState)((function(){return function(e){var n,t=e.defaultValue,l=e.tabValues;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+l.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=l.find((function(e){return e.default})))?n:l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:x})})),v=j[0],f=j[1],g=m({queryString:i,groupId:u}),b=g[0],T=g[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,c.Nk)(n),a=t[0],r=t[1],[a,(0,l.useCallback)((function(e){n&&r.set(e)}),[n,r])]),q=y[0],I=y[1],w=function(){var e=null!=b?b:q;return p({value:e,tabValues:x})?e:null}();return(0,o.Z)((function(){w&&f(w)}),[w]),{selectedValue:v,selectValue:(0,l.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);f(e),T(e),I(e)}),[T,I,x]),tabValues:x}}var j=t(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function g(e){var n=e.className,t=e.block,l=e.selectedValue,s=e.selectValue,o=e.tabValues,d=[],i=(0,r.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=d.indexOf(n),a=o[t].value;a!==l&&(i(n),s(a))},u=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var l,a=d.indexOf(e.currentTarget)+1;t=null!=(l=d[a])?l:d[0];break;case"ArrowLeft":var r,s=d.indexOf(e.currentTarget)-1;t=null!=(r=d[s])?r:d[d.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,r=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:function(e){return d.push(e)},onKeyDown:u,onClick:c},r,{className:(0,a.Z)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":l===n}),children:null!=t?t:n}),n)}))})}function b(e){var n=e.lazy,t=e.children,a=e.selectedValue,r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=r.find((function(e){return e.props.value===a}));return s?(0,l.cloneElement)(s,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function T(e){var n=x(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(g,Object.assign({},e,n)),(0,f.jsx)(b,Object.assign({},e,n))]})}function y(e){var n=(0,j.Z)();return(0,f.jsx)(T,Object.assign({},e,{children:u(e.children)}),String(n))}},12:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=t(5893),a=t(1151),r=t(2808),s=t(433);const o={title:"Mutations"},d=void 0,i={id:"graphql/mutations",title:"Mutations",description:"The CRUDResolver automatically exposes six mutation endpoints. The endpoints names will be derived",source:"@site/docs/graphql/mutations.mdx",sourceDirName:"graphql",slug:"/graphql/mutations",permalink:"/nestjs-query/docs/graphql/mutations",draft:!1,unlisted:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/graphql/mutations.mdx",tags:[],version:"current",frontMatter:{title:"Mutations"},sidebar:"docs",previous:{title:"Sorting",permalink:"/nestjs-query/docs/graphql/queries/sorting"},next:{title:"Hooks",permalink:"/nestjs-query/docs/graphql/hooks"}},c={},u=[{value:"Create One",id:"create-one",level:3},{value:"Create Many",id:"create-many",level:3},{value:"Examples",id:"examples",level:4},{value:"Update One",id:"update-one",level:3},{value:"Examples",id:"examples-1",level:4},{value:"Update Many",id:"update-many",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Delete One",id:"delete-one",level:3},{value:"Examples",id:"examples-3",level:4},{value:"Delete Many",id:"delete-many",level:3},{value:"Examples",id:"examples-4",level:4}];function h(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"/nestjs-query/docs/graphql/resolvers",children:"CRUDResolver"})," automatically exposes six mutation endpoints. The endpoints names will be derived\nfrom name provided to ",(0,l.jsx)(n.code,{children:"@ObjectType"})," or the class name."]}),"\n",(0,l.jsxs)(n.p,{children:["The following examples are based on the following ",(0,l.jsx)(n.code,{children:"TodoItemDTO"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",metastring:'title="todo-item.dto.ts"',children:"import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"In the following examples you will see the following endpoints referenced"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"createOneTodoItem"})," - graphql endpoint to create a single record."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"createManyTodoItems"})," - graphql endpoint to create multiple records,"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"updateOneTodoItem"})," - graphql endpoint to update a single record by id."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"updateManyTodoItems"})," - graphql endpoint update multiple records with a filter,"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"deleteOneTodoItem"})," - graphql endpoint to delete one record by id."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"deleteManyTodoItems"})," - graphql endpoint to delete multiple records with a filter."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"create-one",children:"Create One"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"CRUDResolver"})," will by default expose a ",(0,l.jsx)(n.code,{children:"createOne"})," mutation using the name of the DTO to name the mutation."]}),"\n",(0,l.jsxs)(n.p,{children:["In this example we create a single ",(0,l.jsx)(n.code,{children:"TodoItem"}),", the input by default will be a ",(0,l.jsx)(n.code,{children:"Partial"})," of the DTO."]}),"\n",(0,l.jsxs)(r.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,l.jsx)(s.Z,{value:"graphql",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createOneTodoItem(\n    input: { todoItem: { title: "Create One Todo Item", completed: false } }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'})})}),(0,l.jsx)(s.Z,{value:"response",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "createOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-14T09:01:35.834Z",\n      "updated": "2020-01-14T09:01:35.834Z"\n    }\n  }\n}\n'})})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"create-many",children:"Create Many"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"CRUDResolver"})," will by default expose a ",(0,l.jsx)(n.code,{children:"createMany"})," mutation using the name of the DTO to name the mutation."]}),"\n",(0,l.jsxs)(n.p,{children:["In this example we create multiple ",(0,l.jsx)(n.code,{children:"TodoItems"}),", the each record is a ",(0,l.jsx)(n.code,{children:"Partial"})," of the DTO."]}),"\n",(0,l.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.p,{children:["The following example creates two ",(0,l.jsx)(n.code,{children:"TodoItems"}),"."]}),"\n",(0,l.jsxs)(r.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,l.jsx)(s.Z,{value:"graphql",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  createManyTodoItems(\n    input: {\n      todoItems: [\n        { title: "Create Many Todo Items - 1", completed: false }\n        { title: "Create Many Todo Items - 2", completed: true }\n      ]\n    }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'})})}),(0,l.jsx)(s.Z,{value:"response",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "createManyTodoItems": [\n      {\n        "id": "2",\n        "title": "Create Many Todo Items - 1",\n        "completed": false,\n        "created": "2020-01-14T09:01:55.110Z",\n        "updated": "2020-01-14T09:01:55.110Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Many Todo Items - 2",\n        "completed": true,\n        "created": "2020-01-14T09:01:55.110Z",\n        "updated": "2020-01-14T09:01:55.110Z"\n      }\n    ]\n  }\n}\n'})})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"update-one",children:"Update One"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"CRUDResolver"})," will by default expose an ",(0,l.jsx)(n.code,{children:"updateOne"})," mutation that takes two fields:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"id"}),": The id of the record to update."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"update"}),": The values to update on the record. This is a partial so you only have to pass in the values you want to\nchange."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"examples-1",children:"Examples"}),"\n",(0,l.jsxs)(n.p,{children:["The following example updates the record with ",(0,l.jsx)(n.code,{children:"id"})," equal to ",(0,l.jsx)(n.code,{children:"1"})," to ",(0,l.jsx)(n.code,{children:"completed=true"})]}),"\n",(0,l.jsxs)(r.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,l.jsx)(s.Z,{value:"graphql",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"mutation {\n  updateOneTodoItem(input: { id: 1, update: { completed: true } }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"})})}),(0,l.jsx)(s.Z,{value:"response",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "updateOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T09:02:28.167Z"\n    }\n  }\n}\n'})})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"update-many",children:"Update Many"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"CRUDResolver"})," will by default expose an ",(0,l.jsx)(n.code,{children:"updateMany"})," mutation that takes two fields:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"filter"}),": The filter to use to find the records to update.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"NOTE"})," The filter ",(0,l.jsx)(n.strong,{children:"CANNOT"})," be an empty object. This prevents accidental updating of all records."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"update"}),": The values to update on the record. This is a partial so you only have to pass in the values you want to\nchange."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The response contains the number of records updated."}),"\n",(0,l.jsx)(n.h4,{id:"examples-2",children:"Examples"}),"\n",(0,l.jsxs)(n.p,{children:["The following example updates records with an ",(0,l.jsx)(n.code,{children:"id"})," equal to 1 or 2 to ",(0,l.jsx)(n.code,{children:"completed=true"}),"."]}),"\n",(0,l.jsxs)(r.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,l.jsx)(s.Z,{value:"graphql",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"mutation {\n  updateManyTodoItems(\n    input: { filter: { id: { in: [1, 2] } }, update: { completed: true } }\n  ) {\n    updatedCount\n  }\n}\n"})})}),(0,l.jsx)(s.Z,{value:"response",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "updateManyTodoItems": {\n      "updatedCount": 2\n    }\n  }\n}\n'})})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"delete-one",children:"Delete One"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"CRUDResolver"})," will by default expose a ",(0,l.jsx)(n.code,{children:"deleteOne"})," mutation that allows you to delete a record by id:"]}),"\n",(0,l.jsx)(n.h4,{id:"examples-3",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:"The following example deletes the record with an id equal to 1."}),"\n",(0,l.jsxs)(r.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,l.jsx)(s.Z,{value:"graphql",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:"mutation {\n  deleteOneTodoItem(input: { id: 1 }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"})})}),(0,l.jsx)(s.Z,{value:"response",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "deleteOneTodoItem": {\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T09:02:51.429Z"\n    }\n  }\n}\n'})})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"delete-many",children:"Delete Many"}),"\n",(0,l.jsxs)(n.p,{children:["The CRUDResolver will by default expose a ",(0,l.jsx)(n.code,{children:"deleteMany"})," mutation that takes a ",(0,l.jsx)(n.code,{children:"filter"}),":"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"NOTE"})," The filter ",(0,l.jsx)(n.strong,{children:"CANNOT"})," be an empty object. This prevents accidental deletion of all records."]}),"\n",(0,l.jsx)(n.h4,{id:"examples-4",children:"Examples"}),"\n",(0,l.jsxs)(n.p,{children:["The following example deletes all records that start with ",(0,l.jsx)(n.code,{children:"Create Many Todo Items"}),"."]}),"\n",(0,l.jsxs)(r.Z,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],children:[(0,l.jsx)(s.Z,{value:"graphql",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-graphql",children:'mutation {\n  deleteManyTodoItems(\n    input: { filter: { title: { like: "Create Many Todo Items%" } } }\n  ) {\n    deletedCount\n  }\n}\n'})})}),(0,l.jsx)(s.Z,{value:"response",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "deleteManyTodoItems": {\n      "deletedCount": 6\n    }\n  }\n}\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var l=t(7294);const a={},r=l.createContext(a);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);