/*! For license information please see e68576ac.5f5aa6f9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var a=n(1),r=(n(0),n(206)),o=n(212),l=n(211),p=n(214);const i={title:"Example",sidebar_label:"Example"},c={id:"introduction/example",title:"Example",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/introduction/example.mdx",permalink:"/nestjs-query/docs/introduction/example",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/introduction/example.mdx",sidebar_label:"Example",sidebar:"docs",previous:{title:"Install",permalink:"/nestjs-query/docs/introduction/install"},next:{title:"DTOs",permalink:"/nestjs-query/docs/concepts/dtos"}},d=[{value:"Set up a new nest app",id:"set-up-a-new-nest-app",children:[]},{value:"Install Dependencies",id:"install-dependencies",children:[]},{value:"Generate the Module",id:"generate-the-module",children:[]},{value:"Create the Entity",id:"create-the-entity",children:[]},{value:"Create the DTO",id:"create-the-dto",children:[]},{value:"Create the Resolver",id:"create-the-resolver",children:[]},{value:"Wire everything up.",id:"wire-everything-up",children:[]},{value:"Running the Example",id:"running-the-example",children:[]},{value:"Exploring The GraphQL Endpoint",id:"exploring-the-graphql-endpoint",children:[{value:"Create a TodoItem",id:"create-a-todoitem",children:[]},{value:"Create Multiple TodoItems",id:"create-multiple-todoitems",children:[]},{value:"Query For Multiple TodoItems",id:"query-for-multiple-todoitems",children:[]},{value:"Query For One TodoItem",id:"query-for-one-todoitem",children:[]},{value:"Update a TodoItem",id:"update-a-todoitem",children:[]},{value:"Update Multiple TodoItems",id:"update-multiple-todoitems",children:[]},{value:"Delete One TodoItem",id:"delete-one-todoitem",children:[]},{value:"Delete Many TodoItems",id:"delete-many-todoitems",children:[]}]}],s={rightToc:d};function b({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Let's create a simple todo-item graphql example."),Object(r.b)("h2",{id:"set-up-a-new-nest-app"},"Set up a new nest app"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i -g @nestjs/cli\nnest new nestjs-query-getting-started\n")),Object(r.b)("h2",{id:"install-dependencies"},"Install Dependencies"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./install"}),"Install all packages")),Object(r.b)("p",null,"Install extra dependencies for the example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i pg apollo-server-express\n")),Object(r.b)("h2",{id:"generate-the-module"},"Generate the Module"),Object(r.b)("p",null,"From the root of your project run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g mo todo-item\n")),Object(r.b)("h2",{id:"create-the-entity"},"Create the Entity"),Object(r.b)("p",null,"From the root of your project run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g cl todo-item.entity todo-item\n")),Object(r.b)("p",null,"Now lets fill out the entity that will be used by ",Object(r.b)("inlineCode",{parentName:"p"},"typeorm"),"."),Object(r.b)("p",null,"Add the following to ",Object(r.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.entity.ts"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  Column,\n  CreateDateColumn,\n  Entity,\n  PrimaryGeneratedColumn,\n  UpdateDateColumn,\n} from 'typeorm';\n\n@Entity()\nexport class TodoItemEntity {\n  @PrimaryGeneratedColumn()\n  id!: string;\n\n  @Column()\n  title!: string;\n\n  @Column()\n  completed!: boolean;\n\n  @CreateDateColumn()\n  created!: Date;\n\n  @UpdateDateColumn()\n  updated!: Date;\n}\n")),Object(r.b)("h2",{id:"create-the-dto"},"Create the DTO"),Object(r.b)("p",null,"The DTO (Data Transfer Object) is used by the resolver to represent incoming requests and outgoing responses."),Object(r.b)("p",null,"The DTO is where you can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Define fields that should be rendered by graphql."),Object(r.b)("li",{parentName:"ul"},"Define fields that should be filterable using the ",Object(r.b)("inlineCode",{parentName:"li"},"@FilterableField")," decorator."),Object(r.b)("li",{parentName:"ul"},"Define validation that will be used by mutations.")),Object(r.b)("p",null,"In this example the DTO and entity are two different classes to clearly demonstrate what is required for ",Object(r.b)("inlineCode",{parentName:"p"},"graphql")," vs\n",Object(r.b)("inlineCode",{parentName:"p"},"typeorm"),". However, you can combine the two into a single class."),Object(r.b)("p",null,"From the root of your project run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g cl todo-item.dto todo-item\n")),Object(r.b)("p",null,"Now lets fill out the DTO. Add the following to ",Object(r.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.dto.ts"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { FilterableField } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\n\n@ObjectType('TodoItem') // Name that will be used in the graphql schema.\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n\n")),Object(r.b)("p",null,"Notice the use of ",Object(r.b)("inlineCode",{parentName:"p"},"@FilterableField")," this will let ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," know to allow filtering on the\ncorresponding field. If you just use ",Object(r.b)("inlineCode",{parentName:"p"},"@Field")," then you will not be able to filter on the corresponding field."),Object(r.b)("h2",{id:"create-the-resolver"},"Create the Resolver"),Object(r.b)("p",null,"To create the resolver extend ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql"),"."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will by default expose expose the following graphql queries and mutations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Queries")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItems")," - find multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"s."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"todoItem")," - find one ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),".")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Mutations")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createManyTodoItems")," - create multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"s."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createOneTodoItems")," - create one ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateManyTodoItems")," - update multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateOneTodoItems")," - update one ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleteManyTodoItems")," - delete multiple ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItems"),"s."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleteOneTodoItems")," - delete one ",Object(r.b)("inlineCode",{parentName:"li"},"TodoItem"),".")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE")," By default ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," will use the name used by ",Object(r.b)("inlineCode",{parentName:"p"},"@nestjs/graphql")," when the DTO is annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@ObjectType"),"."),Object(r.b)("p",null,"Generate the resolver file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npx nest g r todo-item\n")),Object(r.b)("p",null,"Once the resolver is generated paste the following into ",Object(r.b)("inlineCode",{parentName:"p"},"src/todo-item/todo-item.resolver.ts"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { QueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { InjectTypeOrmQueryService } from '@nestjs-query/query-typeorm';\nimport { Resolver, Query, Args } from '@nestjs/graphql';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n    @InjectTypeOrmQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n  ) {\n    super(service);\n  }\n}\n")),Object(r.b)("p",null,"Lets break this down a little bit."),Object(r.b)("p",null,"When creating the resolver notice how ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItemResolver")," extends ",Object(r.b)("inlineCode",{parentName:"p"},"CRUDResolver")," and the class is annotated with ",Object(r.b)("inlineCode",{parentName:"p"},"@Resolver"),". Without the annotation the resolver ",Object(r.b)("strong",{parentName:"p"},"WILL NOT")," be exposed in the graphql schema."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO)\n")),Object(r.b)("p",null,"In the constructor we inject a QueryService using the ",Object(r.b)("inlineCode",{parentName:"p"},"InjectTypeOrmQueryService"),". This will automatically create a QueryService for your entity that your resolver can use. To read more about the service take a look at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../concepts/services"}),"the Services docs")," and the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../typeorm/usage"}),"TypeOrmQueryService docs"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"constructor(\n  @InjectTypeOrmQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n) {\n  super(service);\n}\n")),Object(r.b)("h2",{id:"wire-everything-up"},"Wire everything up."),Object(r.b)("p",null,"Update the ",Object(r.b)("inlineCode",{parentName:"p"},"todo-item.module")," to register the entities."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Module } from '@nestjs/common';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { TodoItemResolver } from './todo-item.resolver';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  providers: [TodoItemResolver],\n  // add this line.\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n")),Object(r.b)("p",null,"Update ",Object(r.b)("inlineCode",{parentName:"p"},"app.module")," to import the ",Object(r.b)("inlineCode",{parentName:"p"},"typeorm")," and ",Object(r.b)("inlineCode",{parentName:"p"},"graphql")," nest modules."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { Module } from '@nestjs/common';\nimport { GraphQLModule } from '@nestjs/graphql';\nimport { TypeOrmModule } from '@nestjs/typeorm';\nimport { AppController } from './app.controller';\nimport { AppService } from './app.service';\nimport { TodoItemModule } from './todo-item/todo-item.module';\nimport { TodoItemEntity } from './todo-item/todo-item.entity';\n\n@Module({\n  imports: [\n    TypeOrmModule.forRoot({\n      // use in memory sqlite\n      type: 'postgres',\n      database: 'gettingstarted',\n      username: 'gettingstarted',\n      entities: [TodoItemEntity],\n      synchronize: true,\n      logging: true,\n    }),\n    GraphQLModule.forRoot({\n      // set to true to automatically generate schema\n      autoSchemaFile: true,\n    }),\n    TodoItemModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n\n")),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file in the root of the project"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-dockerfile"}),'version: "3"\n\nservices:\n  postgres:\n    image: "postgres:11.5"\n    environment:\n      - "POSTGRES_USER=gettingstarted"\n      - "POSTGRES_DB=gettingstarted"\n    expose:\n      - "5432"\n    ports:\n      - "5432:5432"\n\n')),Object(r.b)("h2",{id:"running-the-example"},"Running the Example"),Object(r.b)("p",null,"Start the backing services"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker-compose up -d\n")),Object(r.b)("p",null,"Start the app"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm start\n")),Object(r.b)("p",null,"Visit ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000/graphql"}),"http://localhost:3000/graphql")," where you should see the playground"),Object(r.b)("img",{alt:"Example playground",src:Object(p.a)("img/introduction/getting-started-playground.png")}),Object(r.b)("h2",{id:"exploring-the-graphql-endpoint"},"Exploring The GraphQL Endpoint"),Object(r.b)("h3",{id:"create-a-todoitem"},"Create a TodoItem"),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createOneTodoItem(\n    input: { todoItem: { title: "Create One Todo Item", completed: false } }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "createOneTodoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-01T00:43:16.000Z",\n      "updated": "2020-01-01T00:43:16.000Z"\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"create-multiple-todoitems"},"Create Multiple TodoItems"),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  createManyTodoItems(\n    input: {\n      todoItems: [\n        { title: "Create Many Todo Items - 1", completed: false }\n        { title: "Create Many Todo Items - 2", completed: true }\n      ]\n    }\n  ) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "createManyTodoItems": [\n      {\n        "id": "2",\n        "title": "Create Many Todo Items - 1",\n        "completed": false,\n        "created": "2020-01-01T00:49:01.000Z",\n        "updated": "2020-01-01T00:49:01.000Z"\n      },\n      {\n        "id": "3",\n        "title": "Create Many Todo Items - 2",\n        "completed": true,\n        "created": "2020-01-01T00:49:01.000Z",\n        "updated": "2020-01-01T00:49:01.000Z"\n      }\n    ]\n  }\n}\n')))),Object(r.b)("h3",{id:"query-for-multiple-todoitems"},"Query For Multiple TodoItems"),Object(r.b)("h4",{id:"query-for-all-todo-items"},"Query for all todo items"),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjI="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "1",\n            "title": "Create One Todo Item",\n            "completed": false,\n            "created": "2020-01-01T00:43:16.000Z",\n            "updated": "2020-01-01T00:43:16.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        },\n        {\n          "node": {\n            "id": "2",\n            "title": "Create Many Todo Items - 1",\n            "completed": false,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjE="\n        },\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjI="\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("h4",{id:"query-for-completed-todo-items"},"Query for completed todo items"),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItems(filter: { completed: { is: true } }) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        created\n        updated\n      }\n      cursor\n    }\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItems": {\n      "pageInfo": {\n        "hasNextPage": false,\n        "hasPreviousPage": false,\n        "startCursor": "YXJyYXljb25uZWN0aW9uOjA=",\n        "endCursor": "YXJyYXljb25uZWN0aW9uOjA="\n      },\n      "edges": [\n        {\n          "node": {\n            "id": "3",\n            "title": "Create Many Todo Items - 2",\n            "completed": true,\n            "created": "2020-01-01T00:49:01.000Z",\n            "updated": "2020-01-01T00:49:01.000Z"\n          },\n          "cursor": "YXJyYXljb25uZWN0aW9uOjA="\n        }\n      ]\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"query-for-one-todoitem"},"Query For One TodoItem"),Object(r.b)("h4",{id:"query-by-id"},"Query by id"),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"{\n  todoItem(id: 1) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "todoItem": {\n      "id": "1",\n      "title": "Create One Todo Item",\n      "completed": false,\n      "created": "2020-01-13T06:19:17.543Z",\n      "updated": "2020-01-13T06:19:17.543Z"\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"update-a-todoitem"},"Update a TodoItem"),Object(r.b)("p",null,"Lets update the completed ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," we created earlier to not be completed."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateOneTodoItem(input: { id: "3", update: { completed: false } }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateOneTodoItem": {\n      "id": "3",\n      "title": "Create Many Todo Items - 2",\n      "completed": false,\n      "created": "2020-01-13T09:19:46.727Z",\n      "updated": "2020-01-13T09:23:37.658Z"\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"update-multiple-todoitems"},"Update Multiple TodoItems"),Object(r.b)("p",null,"Lets update the completed ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," we created earlier to not be completed."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  updateManyTodoItems(\n    input: { filter: { id: { in: ["1", "2"] } }, update: { completed: true } }\n  ) {\n    updatedCount\n  }\n}\n\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateManyTodoItems": {\n      "updatedCount": 2\n    }\n  }\n}\n')))),Object(r.b)("p",null,"You can check this by running the completed query from above."),Object(r.b)("h3",{id:"delete-one-todoitem"},"Delete One TodoItem"),Object(r.b)("p",null,"Lets update delete the first ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem"),"."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"mutation {\n  deleteOneTodoItem(input: { id: 1 }) {\n    id\n    title\n    completed\n    created\n    updated\n  }\n}\n"))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "deleteOneTodoItem": {\n      "id": null,\n      "title": "Create One Todo Item",\n      "completed": true,\n      "created": "2020-01-13T09:44:41.176Z",\n      "updated": "2020-01-13T09:44:54.822Z"\n    }\n  }\n}\n')))),Object(r.b)("h3",{id:"delete-many-todoitems"},"Delete Many TodoItems"),Object(r.b)("p",null,"Lets update delete the create many todo items ",Object(r.b)("inlineCode",{parentName:"p"},"TodoItem")," using a filter."),Object(r.b)(o.a,{defaultValue:"graphql",values:[{label:"GraphQL",value:"graphql"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"graphql",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'mutation {\n  deleteManyTodoItems(\n    input: { filter: { title: { like: "Create Many Todo Items%" } } }\n  ) {\n    deletedCount\n  }\n}\n'))),Object(r.b)(l.a,{value:"response",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "deleteManyTodoItems": {\n      "deletedCount": 2\n    }\n  }\n}\n')))))}b.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p({},t,{},e)),n},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(l,".").concat(u)]||s[u]||b[u]||o;return n?r.a.createElement(m,p({ref:t},c,{components:n})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},207:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var l=r.apply(null,a);l&&e.push(l)}else if("object"===o)for(var p in a)n.call(a,p)&&a[p]&&e.push(p)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},208:function(e,t,n){"use strict";var a=n(0),r=n(37);t.a=function(){return Object(a.useContext)(r.a)}},209:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},211:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},212:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(209);var l=function(){return Object(a.useContext)(o.a)},p=n(207),i=n.n(p),c=n(93),d=n.n(c);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:p,groupId:c}=e,{tabGroupChoices:u,setTabGroupChoices:m}=l(),[O,j]=Object(a.useState)(o);if(null!=c){const e=u[c];null!=e&&e!==O&&j(e)}const h=e=>{j(e),null!=c&&m(c,e)},g=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:i()("tab-item",d.a.tabItem,{"tab-item--active":O===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>h(e),onClick:()=>h(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===O)[0]))}},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(208);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);