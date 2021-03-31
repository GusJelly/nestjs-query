(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),l=n(7),r=(n(0),n(219)),o=n(223),i=n(224),p={title:"Mutations"},c={unversionedId:"graphql/mutations",id:"graphql/mutations",isDocsHomePage:!1,title:"Mutations",description:"The CRUDResolver automatically exposes six mutation endpoints. The endpoints names will be derived",source:"@site/docs/graphql/mutations.mdx",slug:"/graphql/mutations",permalink:"/nestjs-query/docs/graphql/mutations",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/mutations.mdx",version:"current",sidebar:"docs",previous:{title:"Queries",permalink:"/nestjs-query/docs/graphql/queries"},next:{title:"Paging",permalink:"/nestjs-query/docs/graphql/paging"}},b=[{value:"Create One",id:"create-one",children:[]},{value:"Create Many",id:"create-many",children:[]},{value:"Update One",id:"update-one",children:[]},{value:"Update Many",id:"update-many",children:[]},{value:"Delete One",id:"delete-one",children:[]},{value:"Delete Many",id:"delete-many",children:[]}],d={toc:b};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/resolvers"},"CRUDResolver")," automatically exposes six mutation endpoints. The endpoints names will be derived\nfrom name provided to ",Object(r.b)("inlineCode",{parentName:"p"},"@ObjectType")," or the class name."),Object(r.b)("p",null,"The following examples are based on the following ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemDTO")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.dto.ts"',title:'"todo-item.dto.ts"'},"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem')\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(r.b)("p",null,"In the following examples you will see the following endpoints referenced"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"createOneTodoItem")," - graphql endpoint to create a single record.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"createManyTodoItems")," - graphql endpoint to create multiple records,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"updateOneTodoItem")," - graphql endpoint to update a single record by id.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"updateManyTodoItems")," - graphql endpoint update multiple records with a filter,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"deleteOneTodoItem")," - graphql endpoint to delete one record by id.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"deleteManyTodoItems")," - graphql endpoint to delete multiple records with a filter."))),Object(r.b)("h3",{id:"create-one"},"Create One"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",Object(r.b)("inlineCode",{parentName:"p"},"createOne")," mutation using the name of the DTO to name the mutation."),Object(r.b)("p",null,"In this example we create a single ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem"),", the input by default will be a ",Object(r.b)("inlineCode",{parentName:"p"},"Partial")," of the DTO."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createOneTodoItem(\n    input: { todoItem: { title: "Create One Todo Item", completed: false } }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-14T09:01:35.834Z",\n      "updated": "2020-01-14T09:01:35.834Z"\n    }\n  }\n}\n')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create-many"},"Create Many"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",Object(r.b)("inlineCode",{parentName:"p"},"createMany")," mutation using the name of the DTO to name the mutation."),Object(r.b)("p",null,"In this example we create multiple ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItems"),", the each record is a ",Object(r.b)("inlineCode",{parentName:"p"},"Partial")," of the DTO."),Object(r.b)("h4",{id:"examples"},"Examples"),Object(r.b)("p",null,"The following example creates two ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItems"),"."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createManyTodoItems(\n    input: {\n      todoItems: [\n        { title: "Create Many Todo Items - 1", completed: false }\n        { title: "Create Many Todo Items - 2", completed: true }\n      ]\n    }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "createManyTodoItems": [\n      {\n        "id": "2",\n        "title": "Create Many Todo Items - 1",\n        "completed": false,\n        "created": "2020-01-14T09:01:55.110Z",\n        "updated": "2020-01-14T09:01:55.110Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Many Todo Items - 2",\n        "completed": true,\n        "created": "2020-01-14T09:01:55.110Z",\n        "updated": "2020-01-14T09:01:55.110Z"\n      }\n    ]\n  }\n}\n')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"update-one"},"Update One"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose an ",Object(r.b)("inlineCode",{parentName:"p"},"updateOne")," mutation that takes two fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id"),": The id of the record to update."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"update"),": The values to update on the record. This is a partial so you only have to pass in the values you want to\nchange.")),Object(r.b)("h4",{id:"examples-1"},"Examples"),Object(r.b)("p",null,"The following example updates the record with ",Object(r.b)("inlineCode",{parentName:"p"},"id")," equal to ",Object(r.b)("inlineCode",{parentName:"p"},"1")," to ",Object(r.b)("inlineCode",{parentName:"p"},"completed=true")),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  updateOneTodoItem(input: { id: 1, update: { completed: true } }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T09:02:28.167Z"\n    }\n  }\n}\n')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"update-many"},"Update Many"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose an ",Object(r.b)("inlineCode",{parentName:"p"},"updateMany")," mutation that takes two fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filter"),": The filter to use to find the records to update.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NOTE")," The filter ",Object(r.b)("strong",{parentName:"li"},"CANNOT")," be an empty object. This prevents accidental updating of all records."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"update"),": The values to update on the record. This is a partial so you only have to pass in the values you want to\nchange.")),Object(r.b)("p",null,"The response contains the number of records updated."),Object(r.b)("h4",{id:"examples-2"},"Examples"),Object(r.b)("p",null,"The following example updates records with an ",Object(r.b)("inlineCode",{parentName:"p"},"id")," equal to 1 or 2 to ",Object(r.b)("inlineCode",{parentName:"p"},"completed=true"),"."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  updateManyTodoItems(\n    input: { filter: { id: { in: [1, 2] } }, update: { completed: true } }\n  ) {\n    updatedCount\n  }\n}\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "updateManyTodoItems": {\n      "updatedCount": 2\n    }\n  }\n}\n')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"delete-one"},"Delete One"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose a ",Object(r.b)("inlineCode",{parentName:"p"},"deleteOne")," mutation that allows you to delete a record by id:"),Object(r.b)("h4",{id:"examples-3"},"Examples"),Object(r.b)("p",null,"The following example deletes the record with an id equal to 1."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"mutation {\n  deleteOneTodoItem(input: { id: 1 }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deleteOneTodoItem": {\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-14T07:00:31.763Z",\n      "updated": "2020-01-14T09:02:51.429Z"\n    }\n  }\n}\n')))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"delete-many"},"Delete Many"),Object(r.b)("p",null,"The CRUDResolver will by default expose a ",Object(r.b)("inlineCode",{parentName:"p"},"deleteMany")," mutation that takes a ",Object(r.b)("inlineCode",{parentName:"p"},"filter"),":"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," The filter ",Object(r.b)("strong",{parentName:"p"},"CANNOT")," be an empty object. This prevents accidental deletion of all records."),Object(r.b)("h4",{id:"examples-4"},"Examples"),Object(r.b)("p",null,"The following example deletes all records that start with ",Object(r.b)("inlineCode",{parentName:"p"},"Create Many Todo Items"),"."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  deleteManyTodoItems(\n    input: { filter: { title: { like: "Create Many Todo Items%" } } }\n  ) {\n    deletedCount\n  }\n}\n'))),Object(r.b)(i.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "deleteManyTodoItems": {\n      "deletedCount": 6\n    }\n  }\n}\n')))))}s.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||r;return n?l.a.createElement(m,i(i({ref:t},c),{},{components:n})):l.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},221:function(e,t,n){"use strict";var a=n(0),l=n(222);t.a=function(){const e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},222:function(e,t,n){"use strict";var a=n(0);const l=Object(a.createContext)(void 0);t.a=l},223:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(221),o=n(220),i=n(56),p=n.n(i);const c=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:d,groupId:s,className:u}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(r.a)(),[j,h]=Object(a.useState)(i),f=a.Children.toArray(e.children),T=[];if(null!=s){const e=m[s];null!=e&&e!==j&&d.some((t=>t.value===e))&&h(e)}const g=e=>{const t=e.target,n=T.indexOf(t),a=f[n].props.value;h(a),null!=s&&(O(s,a),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:a,right:l}=e.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return t>=0&&l<=o&&a<=r&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p.a.tabItemActive),setTimeout((()=>t.classList.remove(p.a.tabItemActive)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case b:{const t=T.indexOf(e.target)+1;n=T[t]||T[0];break}case c:{const t=T.indexOf(e.target)-1;n=T[t]||T[T.length-1];break}}null===(t=n)||void 0===t||t.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},u)},d.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,className:Object(o.a)("tabs__item",p.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>T.push(e),onKeyDown:y,onFocus:g,onClick:g},t)))),t?Object(a.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}},224:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function({children:e,hidden:t,className:n}){return l.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);