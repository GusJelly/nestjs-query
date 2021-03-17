(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=(n(0),n(216)),l=n(220),r=n(221);const o={title:"Queries"},c={unversionedId:"concepts/queries",id:"concepts/queries",isDocsHomePage:!1,title:"Queries",description:"The core of nestjs-query is the Query, it is used by @nestjs-query/query-graphql, @nestjs-query/query-typeorm",source:"@site/docs/concepts/queries.mdx",slug:"/concepts/queries",permalink:"/nestjs-query/docs/concepts/queries",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/concepts/queries.mdx",version:"current",sidebar:"docs",previous:{title:"DTOs",permalink:"/nestjs-query/docs/concepts/dtos"},next:{title:"QueryService",permalink:"/nestjs-query/docs/concepts/services"}},s=[{value:"Filtering",id:"filtering",children:[{value:"Simple",id:"simple",children:[]},{value:"Multiple Fields",id:"multiple-fields",children:[]},{value:"Multiple Comparisons on a single field.",id:"multiple-comparisons-on-a-single-field",children:[]},{value:"And/Or",id:"andor",children:[]}]},{value:"Paging",id:"paging",children:[]},{value:"Sorting",id:"sorting",children:[]},{value:"Filter Reference",id:"filter-reference",children:[{value:"Common Comparisons",id:"common-comparisons",children:[]},{value:"String Comparisons",id:"string-comparisons",children:[]}]}],b={toc:s};function p({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The core of ",Object(i.b)("inlineCode",{parentName:"p"},"nestjs-query")," is the ",Object(i.b)("inlineCode",{parentName:"p"},"Query"),", it is used by ",Object(i.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typeorm"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-sequelize")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-mongoose"),"."),Object(i.b)("p",null,"The query interface contains three optional fields."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"sorting"))),Object(i.b)("p",null,"All examples will be based on the following class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"interface MyClass {\n  title: string;\n  completed: boolean;\n  age: number;\n}\n")),Object(i.b)("h2",{id:"filtering"},"Filtering"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," field allows the filtering of fields based on the shape of the object the filter is used for."),Object(i.b)("p",null,"See the ",Object(i.b)("a",{parentName:"p",href:"#filter-reference"},"filter reference")," for a complete list of comparisons available."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"Filter")," interface is typesafe and the typescript compiler will complain if you include extra fields that are not present on the type you are creating the query for."))),Object(i.b)("p",null,"Lets create a simple filter that would allow us to filter for titles equal to ",Object(i.b)("inlineCode",{parentName:"p"},"'Foo Bar'")),Object(i.b)("h3",{id:"simple"},"Simple"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { Query } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n  filter: {\n    title: { eq: 'Foo Bar' },\n  },\n};\n")),Object(i.b)("h3",{id:"multiple-fields"},"Multiple Fields"),Object(i.b)("p",null,"You can also filter on multiple fields."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { Query } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n  filter: {\n    // title = 'Foo Bar' AND completed IS TRUE and age > 10\n    title: { eq: 'Foo Bar' },\n    completed: { is: true },\n    age: { gt: 10 },\n  },\n};\n")),Object(i.b)("h3",{id:"multiple-comparisons-on-a-single-field"},"Multiple Comparisons on a single field."),Object(i.b)("p",null,"If you include multiple comparisons for a single field they will be ORed together."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"import { Query } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n  filter: {\n    // title = 'Foo Bar' OR field LIKE '%foo%'\n    title: { eq: 'Foo Bar', like: '%foo%' },\n  },\n};\n")),Object(i.b)("h3",{id:"andor"},"And/Or"),Object(i.b)("p",null,"The filter also allows for more complex ",Object(i.b)("inlineCode",{parentName:"p"},"and")," and ",Object(i.b)("inlineCode",{parentName:"p"},"or")," filters. The ",Object(i.b)("inlineCode",{parentName:"p"},"and")," and ",Object(i.b)("inlineCode",{parentName:"p"},"or")," accept an array of filters allowing\nfor nested complex queries."),Object(i.b)("p",null,"In this example we ",Object(i.b)("inlineCode",{parentName:"p"},"AND")," two filters for the same property together: ",Object(i.b)("inlineCode",{parentName:"p"},"age >= 10 AND age <= 20"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const q: Query<MyClass> = {\n  filter: {\n    and: [{ age: { gte: 10 } }, { age: { lte: 20 } }],\n  },\n};\n")),Object(i.b)("p",null,"In this example a simple ",Object(i.b)("inlineCode",{parentName:"p"},"OR")," condition is created: ",Object(i.b)("inlineCode",{parentName:"p"},"age >= 10 OR title NOT LIKE '%bar'")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const q: Query<MyClass> = {\n  filter: {\n    or: [{ age: { gte: 10 } }, { title: { notLike: '%bar' } }],\n  },\n};\n")),Object(i.b)("p",null,"This example combines ",Object(i.b)("inlineCode",{parentName:"p"},"AND")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OR")," filters: ",Object(i.b)("inlineCode",{parentName:"p"},"age >= 10 AND (title LIKE '%bar' OR title = 'foobar')"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const q: Query<MyClass> = {\n  filter: {\n    and: [\n      { age: { gte: 10 } },\n      {\n        or: [{ title: { like: '%bar' } }, { title: { eq: 'foobar' } }],\n      },\n    ],\n  },\n};\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"paging"},"Paging"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"core")," package defines a basic paging interface has two optional fields ",Object(i.b)("inlineCode",{parentName:"p"},"limit")," and ",Object(i.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(i.b)(l.a,{defaultValue:"limit-offset",values:[{label:"Limit And Offset",value:"limit-offset"},{label:"Limit",value:"limit"},{label:"Offset",value:"offset"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"limit-offset",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const q: Query<MyClass> = {\n  paging: {\n    limit: 10,\n    offset: 10,\n  },\n};\n"))),Object(i.b)(r.a,{value:"limit",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const q: Query<MyClass> = {\n  paging: {\n    limit: 20,\n  },\n};\n"))),Object(i.b)(r.a,{value:"offset",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"const q: Query<MyClass> = {\n  paging: {\n    offset: 10,\n  },\n};\n")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"When using filters on relations with ",Object(i.b)("inlineCode",{parentName:"p"},"typeorm")," in combination with paging, performance can be degraded on large result\nsets. For more info see this ",Object(i.b)("a",{parentName:"p",href:"https://github.com/doug-martin/nestjs-query/issues/954"},"issue")),Object(i.b)("p",{parentName:"div"},"In short two queries will be executed:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"The first one fetching a distinct list of primary keys with paging applied."),Object(i.b)("li",{parentName:"ul"},"The second uses primary keys from the first query to fetch the actual records.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"sorting"},"Sorting"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"sorting")," field allows to specify the sort order for your query."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"sorting")," field is an array of object containing:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"field")," - the field to sort on"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"direction")," - ",Object(i.b)("inlineCode",{parentName:"li"},"ASC")," or ",Object(i.b)("inlineCode",{parentName:"li"},"DESC")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nulls?")," - Optional nulls sort, ",Object(i.b)("inlineCode",{parentName:"li"},"NULLS_FIRST")," or ",Object(i.b)("inlineCode",{parentName:"li"},"NULLS_LAST"))),Object(i.b)(l.a,{defaultValue:"single",values:[{label:"Single-Sort",value:"single"},{label:"Multi-Sort",value:"multi"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"single",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// import { SortDirection } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n  sorting: [{ field: 'title', direction: SortDirection.DESC }],\n};\n"))),Object(i.b)(r.a,{value:"multi",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// import { SortDirection } from '@nestjs-query/core';\n\nconst q: Query<MyClass> = {\n  sorting: [\n    { field: 'title', direction: SortDirection.DESC },\n    { field: 'age', direction: SortDirection.ASC },\n  ],\n};\n")))),Object(i.b)("h2",{id:"filter-reference"},"Filter Reference"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"filter")," option supports the following field comparisons."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The following examples show an approximation of the SQL that will be generated. The ORM will take care of handling the dialect specifics"))),Object(i.b)("h3",{id:"common-comparisons"},"Common Comparisons"),Object(i.b)("p",null,"All types support the following comparisons."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"is")," - Check is a field is ",Object(i.b)("inlineCode",{parentName:"li"},"null"),", ",Object(i.b)("inlineCode",{parentName:"li"},"true")," or ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title IS NULL\n{\n  title: {\n    is: null;\n  }\n}\n// completed IS TRUE\n{\n  completed: {\n    is: true;\n  }\n}\n// completed IS false\n{\n  completed: {\n    is: false;\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"isNot")," - Check is a field is not ",Object(i.b)("inlineCode",{parentName:"li"},"null"),", ",Object(i.b)("inlineCode",{parentName:"li"},"true")," or ",Object(i.b)("inlineCode",{parentName:"li"},"false"),".",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title IS NOT NULL\n{\n  title: {\n    isNot: null;\n  }\n}\n// completed IS NOT TRUE\n{\n  completed: {\n    isNot: true;\n  }\n}\n// completed IS NOT false\n{\n  completed: {\n    isNot: false;\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"neq")," - field is not equal to a value.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title != 'foo'\n{\n  title: {\n    neq: 'foo';\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gt")," - field is greater than a value.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title > 'foo'\n{\n  title: {\n    gt: 'foo';\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gte")," - field is greater than or equal to a value.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title >= 'foo'\n{\n  title: {\n    gte: 'foo';\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lt")," - field is less than a value.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title < 'foo'\n{\n  title: {\n    lt: 'foo';\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lte")," - field is less than or equal to a value.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title <= 'foo'\n{\n  title: {\n    lte: 'foo';\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"in")," - field is in a list of values.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title IN ('foo', 'bar', 'baz')\n{ title: { in: ['foo', 'bar', 'baz'] } }\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notIn")," - field is not in a list of values.",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title NOT IN ('foo', 'bar', 'baz')\n{\n  title: {\n    notIn: ['foo', 'bar', 'baz'];\n  }\n}\n")))),Object(i.b)("h3",{id:"string-comparisons"},"String Comparisons"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"like")," - field is like a value (case sensitive).",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title LIKE 'Foo%'\n{\n  title: {\n    like: 'Foo%';\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notLike")," - field is not like a value (case sensitive).",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title NOT LIKE 'Foo%'\n{\n  title: {\n    notLike: 'Foo%';\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"iLike")," - field is like a value (case insensitive).",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title ILIKE 'Foo%'\n{\n  title: {\n    iLike: 'Foo%';\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notILike")," - field is not like a value (case insensitive).",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-ts"},"// title NOT ILIKE 'Foo%'\n{\n  title: {\n    notILike: 'Foo%';\n  }\n}\n")))))}p.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(r,".").concat(u)]||p[u]||m[u]||l;return n?i.a.createElement(d,o(o({ref:t},s),{},{components:n})):i.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},217:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},218:function(e,t,n){"use strict";var a=n(0),i=n(219);t.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},219:function(e,t,n){"use strict";var a=n(0);const i=Object(a.createContext)(void 0);t.a=i},220:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(218),r=n(217),o=n(55),c=n.n(o);const s=37,b=39;t.a=function(e){const{lazy:t,block:n,defaultValue:o,values:p,groupId:m,className:u}=e,{tabGroupChoices:d,setTabGroupChoices:O}=Object(l.a)(),[f,j]=Object(a.useState)(o),N=a.Children.toArray(e.children);if(null!=m){const e=d[m];null!=e&&e!==f&&p.some((t=>t.value===e))&&j(e)}const g=e=>{j(e),null!=m&&O(m,e)},h=[];return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},u)},p.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(a.cloneElement)(N.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},N.map(((e,t)=>Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},221:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);