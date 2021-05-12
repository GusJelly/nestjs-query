(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(219)),i=(n(223),n(224),{title:"Authorization"}),l={unversionedId:"graphql/authorization",id:"graphql/authorization",isDocsHomePage:!1,title:"Authorization",description:"The following section assumes you are familiar with authentication in nestjs.",source:"@site/docs/graphql/authorization.mdx",slug:"/graphql/authorization",permalink:"/nestjs-query/docs/graphql/authorization",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/authorization.mdx",version:"current",sidebar:"docs",previous:{title:"Hooks",permalink:"/nestjs-query/docs/graphql/hooks"},next:{title:"Aggregations",permalink:"/nestjs-query/docs/graphql/aggregations"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"@Authorize Decorator",id:"authorize-decorator",children:[{value:"Relation Filtering",id:"relation-filtering",children:[]},{value:"Customizing Relation Authorization",id:"customizing-relation-authorization",children:[]},{value:"Custom Authorizer",id:"custom-authorizer",children:[]}]},{value:"Using Authorizers In Your Resolver",id:"using-authorizers-in-your-resolver",children:[]},{value:"@InjectAuthorizer Decorator",id:"injectauthorizer-decorator",children:[]},{value:"Authorize depending on operation",id:"authorize-depending-on-operation",children:[]},{value:"Complete Example",id:"complete-example",children:[]}],c={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The following section assumes you are familiar with ",Object(a.b)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/authentication"},"authentication in nestjs"),"."))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," provides authorization helpers out of the box to reduce the amount of boilerplate typically required."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query")," graphql package exposes decorators and options to allow the following"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Additional filtering for objects based on the graphql context."),Object(a.b)("li",{parentName:"ul"},"Filtering relations based on the graphql context."),Object(a.b)("li",{parentName:"ul"},"Low level authorization service support when your authorizer needs to use other services or additional information\nthat is not in the graphql context.")),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you are looking to modify incoming requests based on the context, take a look at the ",Object(a.b)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/hooks"},"hooks documentation")))),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Authorization is invoked as the last step before calling the ",Object(a.b)("inlineCode",{parentName:"p"},"QueryService"),"."))),Object(a.b)("h2",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,"All examples assume you have a guard that adds a ",Object(a.b)("inlineCode",{parentName:"p"},"user")," to the req on the context."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"type AuthenticatedUser = {\n  id: number;\n  username: string;\n};\n\ntype UserContext = {\n  req: {\n    user: AuthenticatedUser;\n  };\n};\n")),Object(a.b)("p",null,"For the sake of this example we'll use a ",Object(a.b)("inlineCode",{parentName:"p"},"JWTAuthGuard")," described in ",Object(a.b)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/authentication#implementing-passport-jwt"},"implementing passport jwt")," nestjs docs."),Object(a.b)("p",null,"To enable the guard on your resolver endpoints you use the ",Object(a.b)("inlineCode",{parentName:"p"},"guards")," option when setting up your resolver."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"guards")," option will ensure that all queries and mutations will have the ",Object(a.b)("inlineCode",{parentName:"p"},"guard")," added so the user is added to\nthe request."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.module.ts" {19}',title:'"todo-item/todo-item.module.ts"',"{19}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemInputDTO } from './dto/todo-item-input.dto';\nimport { TodoItemUpdateDTO } from './dto/todo-item-update.dto';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { JwtAuthGuard } from '../auth/jwt-auth.guard';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          CreateDTOClass: TodoItemInputDTO,\n          UpdateDTOClass: TodoItemUpdateDTO,\n          guards: [JwtAuthGuard],\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")),Object(a.b)("h2",{id:"authorize-decorator"},"@Authorize Decorator"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," package includes a ",Object(a.b)("inlineCode",{parentName:"p"},"@Authorize")," decorator that allows you to add additional filter\ncriteria to authorize an incoming request."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@Authorize")," decorator accepts the following types."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("inlineCode",{parentName:"li"},"object")," that has an ",Object(a.b)("inlineCode",{parentName:"li"},"authorize")," method that returns a Filter for the DTO."),Object(a.b)("li",{parentName:"ul"},"An instance of an ",Object(a.b)("inlineCode",{parentName:"li"},"Authorizer")," that implements the ",Object(a.b)("inlineCode",{parentName:"li"},"authorize")," and ",Object(a.b)("inlineCode",{parentName:"li"},"authorizeRelation")," methods."),Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("inlineCode",{parentName:"li"},"Authorizer")," class reference that implements the ",Object(a.b)("inlineCode",{parentName:"li"},"Authorizer")," interface. The ",Object(a.b)("inlineCode",{parentName:"li"},"Authorizer")," class will be\ninstantiated using the ",Object(a.b)("inlineCode",{parentName:"li"},"nestjs"),"'s dependency injection.")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@Authorize")," decorator does not return an unauthorized error instead the following will occur:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"queryMany")," results will not include any DTOs that do not match the filter criteria."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"findOne")," will return a not found for a DTO that is cannot be found for the ",Object(a.b)("inlineCode",{parentName:"li"},"id")," and auth filter."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"updateOne")," will return a not found error if the DTO to update cannot be found for the ",Object(a.b)("inlineCode",{parentName:"li"},"id")," and auth filter."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"updateMany")," will exclude any records that do not match the user provided filter and the auth filter from being\nupdated."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"deleteOne")," will return a not found error if the DTO to delete cannot be found for the ",Object(a.b)("inlineCode",{parentName:"li"},"id")," and auth filter."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"deleteMany")," will exclude any records that do not match the user provided filter and the auth filter from being\ndeleted.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"You can throw an ",Object(a.b)("inlineCode",{parentName:"p"},"UnauthorizedException")," or return a rejected promise with an ",Object(a.b)("inlineCode",{parentName:"p"},"UnauthorizedException")," in your\nauthorize function, if you can determine at that point that the user should not be able to access the endpoint."))),Object(a.b)("p",null,"In the following example the ",Object(a.b)("inlineCode",{parentName:"p"},"authorize")," function returns a ",Object(a.b)("inlineCode",{parentName:"p"},"Filter")," that includes the ",Object(a.b)("inlineCode",{parentName:"p"},"ownerId")," to ensure that only\n",Object(a.b)("inlineCode",{parentName:"p"},"TodoItems")," that belong to the authenticated user are returned."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/dto/todo-item.dto.ts" {15}',title:'"todo-item/dto/todo-item.dto.ts"',"{15}":!0},"import {\n  FilterableField,\n  IDField,\n  FilterableConnection,\n  FilterableRelation,\n  Authorize\n} from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../../sub-task/dto/sub-task.dto';\nimport { TagDTO } from '../../tag/dto/tag.dto';\nimport { UserDTO } from '../../user/user.dto';\nimport { UserContext } from '../../auth/auth.interfaces';\n\n@ObjectType('TodoItem')\n@Authorize({ authorize: (context: UserContext) => ({ ownerId: { eq: context.req.user.id } }) })\n@FilterableRelation('owner', () => UserDTO, { disableRemove: true, disableUpdate: true })\n@FilterableConnection('subTasks', () => SubTaskDTO, { disableRemove: true })\n@FilterableConnection('tags', () => TagDTO)\nexport class TodoItemDTO {\n  @IDField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @Field()\n  age!: number;\n\n  @FilterableField()\n  priority!: number;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n\n  @FilterableField()\n  ownerId!: number;\n}\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The above example is pretty straight forward, however your authorize function can be as complex as you need it to be\nbased on information in the context."))),Object(a.b)("h3",{id:"relation-filtering"},"Relation Filtering"),Object(a.b)("p",null,"By default when relations are queried any additional filters defined using the ",Object(a.b)("inlineCode",{parentName:"p"},"@Authorize")," decorator on the relation\nDTO will also be included."),Object(a.b)("p",null,"When mutating relations"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If the DTO that is having a relation(s) added or removed cannot be found for the ",Object(a.b)("inlineCode",{parentName:"li"},"id")," and\nauth filter a not found error will be returned."),Object(a.b)("li",{parentName:"ul"},"When adding or removing a single relation if the relation cannot be found for the ",Object(a.b)("inlineCode",{parentName:"li"},"id")," and auth filter a not found\nerror will be returned."),Object(a.b)("li",{parentName:"ul"},"When adding or removing multiple relations if all relations cannot be found a not found error will be throw.")),Object(a.b)("p",null,"For example given the following ",Object(a.b)("inlineCode",{parentName:"p"},"SubTaskDTO")," definition whenever the ",Object(a.b)("inlineCode",{parentName:"p"},"subTasks")," connection is queried through a\n",Object(a.b)("inlineCode",{parentName:"p"},"todoItem"),", only ",Object(a.b)("inlineCode",{parentName:"p"},"subTasks")," that belong to the user will be returned."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="sub-task/dto/sub-task.dto.ts"',title:'"sub-task/dto/sub-task.dto.ts"'},"import { FilterableField, IDField, FilterableRelation, Authorize } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';\nimport { UserContext } from '../../auth/auth.interfaces';\n\n@ObjectType('SubTask')\n@Authorize({ authorize: (context: UserContext) => ({ ownerId: { eq: context.req.user.id } }) })\n@FilterableRelation('todoItem', () => TodoItemDTO, { disableRemove: true })\nexport class SubTaskDTO {\n  @IDField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n}\n")),Object(a.b)("h3",{id:"customizing-relation-authorization"},"Customizing Relation Authorization"),Object(a.b)("p",null,"If you run into a case where you need to handle authorization for a relation differently from the ",Object(a.b)("inlineCode",{parentName:"p"},"@Authorize"),"\ndecorator on the relation DTO you can specify the ",Object(a.b)("inlineCode",{parentName:"p"},"auth")," option in your relation/connection decorator."),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"auth")," option will take precedence over the ",Object(a.b)("inlineCode",{parentName:"p"},"@Authorize")," decorator on the relation DTO."))),Object(a.b)("p",null,"For example you could define the subtasks with the ",Object(a.b)("inlineCode",{parentName:"p"},"auth")," option, only allowing completed subtasks to be returned."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@FilterableConnection('subTasks', () => SubTaskDTO, {\n  disableRemove: true,\n  auth: {\n    authorize: (context: UserContext) => ({ ownerId: { eq: context.req.user.id }, completed: { is: true }}),\n  },\n})\n")),Object(a.b)("h3",{id:"custom-authorizer"},"Custom Authorizer"),Object(a.b)("p",null,"When you need more control over authorization you can create a custom ",Object(a.b)("inlineCode",{parentName:"p"},"Authorizer"),". You may want to use a custom\n",Object(a.b)("inlineCode",{parentName:"p"},"Authorizer")," if you need to use additional services to do authorization for a DTO."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Authorizer")," interface requires two methods to be implemented"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"authorize")," - Should return a filter that should be used for all queries and mutations for the DTO."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"authorizeRelation")," - Should return a filter for the relation that will be used when querying the relation or\nadding/removing relations to/from the DTO.")),Object(a.b)("p",null,"In this example we'll create a simple authorizer for ",Object(a.b)("inlineCode",{parentName:"p"},"SubTasks"),". You can use this as a base to create a more complex\nauthorizers that depends on other services."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:"title='sub-task/sub-task.authorizer.ts'",title:"'sub-task/sub-task.authorizer.ts'"},"import { Injectable } from '@nestjs/common';\nimport { Authorizer } from '@nestjs-query/query-graphql';\nimport { Filter } from '@nestjs-query/core';\nimport { UserContext } from '../auth/auth.interfaces';\nimport { SubTaskDTO } from './dto/sub-task.dto';\n\n@Injectable()\nexport class SubTaskAuthorizer implements Authorizer<SubTaskDTO> {\n  authorize(context: UserContext): Promise<Filter<SubTaskDTO>> {\n    return Promise.resolve({ ownerId: { eq: context.req.user.id } });\n  }\n\n  authorizeRelation(relationName: string, context: UserContext): Promise<Filter<unknown>> {\n    if (relationName === 'todoItem') {\n      return Promise.resolve({ ownerId: { eq: context.req.user.id } });\n    }\n    return Promise.resolve({});\n  }\n}\n")),Object(a.b)("p",null,"To use the ",Object(a.b)("inlineCode",{parentName:"p"},"SubTaskAuthorizer")," you only need to provide it as an argument to the ",Object(a.b)("inlineCode",{parentName:"p"},"@Authorize")," decorator"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:"title='sub-task/sub-task.dto.ts' {8}",title:"'sub-task/sub-task.dto.ts'","{8}":!0},"import { Authorize, FilterableField, IDField, FilterableRelation } from '@nestjs-query/query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../../todo-item/dto/todo-item.dto';\nimport { UserDTO } from '../../user/user.dto';\nimport { SubTaskAuthorizer } from '../sub-task.authorizer';\n\n@ObjectType('SubTask')\n@Authorize(SubTaskAuthorizer)\n@FilterableRelation('owner', () => UserDTO, { disableRemove: true, disableUpdate: true })\n@FilterableRelation('todoItem', () => TodoItemDTO, { disableRemove: true })\nexport class SubTaskDTO {\n  @IDField(() => ID)\n  id!: number;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField({ nullable: true })\n  description?: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n\n  @FilterableField({ nullable: true })\n  createdBy?: string;\n\n  @FilterableField({ nullable: true })\n  updatedBy?: string;\n\n  ownerId!: number;\n}\n")),Object(a.b)("h2",{id:"using-authorizers-in-your-resolver"},"Using Authorizers In Your Resolver"),Object(a.b)("p",null,"The easiest way to leverage ",Object(a.b)("inlineCode",{parentName:"p"},"Authorizers")," in a custom resolver is to use the ",Object(a.b)("inlineCode",{parentName:"p"},"AuthorizerInterceptor")," and\n",Object(a.b)("inlineCode",{parentName:"p"},"AuthorizerFilter")," param decorator."),Object(a.b)("p",null,"In this example there are two important additions:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"AuthorizerInterceptor")," is added to the ",Object(a.b)("inlineCode",{parentName:"li"},"TodoItemResolver")," as an interceptor, this interceptor will add the\nauthorizer to the context so it can be used down stream"),Object(a.b)("li",{parentName:"ol"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"AuthorizerFilter")," param decorator uses the authorizer added by the interceptor to create an authorizer filter.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.resolver.ts" {9,17}',title:'"todo-item/todo-item.resolver.ts"',"{9,17}":!0},"import { Filter, InjectQueryService, mergeFilter, mergeQuery, QueryService } from '@nestjs-query/core';\nimport { AuthorizerInterceptor, AuthorizerFilter, ConnectionType } from '@nestjs-query/query-graphql';\nimport { Args, Query, Resolver } from '@nestjs/graphql';\nimport { UseInterceptors } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemConnection, TodoItemQuery } from './types';\n\n@Resolver(() => TodoItemDTO)\n@UseInterceptors(AuthorizerInterceptor(TodoItemDTO))\nexport class TodoItemResolver {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {}\n\n  // Set the return type to the TodoItemConnection\n  @Query(() => TodoItemConnection)\n  async uncompletedTodoItems(\n    @Args() query: TodoItemQuery,\n    @AuthorizerFilter() authFilter: Filter<TodoItemDTO>,\n  ): Promise<ConnectionType<TodoItemDTO>> {\n    // add the completed filter the user provided filter\n    const filter: Filter<TodoItemDTO> = mergeFilter(query.filter ?? {}, { completed: { is: false } });\n    const uncompletedQuery = mergeQuery(query, { filter: mergeFilter(filter, authFilter) });\n    return TodoItemConnection.createFromPromise(\n      (q) => this.service.query(q),\n      uncompletedQuery,\n      (q) => this.service.count(q),\n    );\n  }\n}\n")),Object(a.b)("h2",{id:"injectauthorizer-decorator"},"@InjectAuthorizer Decorator"),Object(a.b)("p",null,"If you need access to an authorizer for a DTO you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectAuthorizer")," decorator."),Object(a.b)("p",null,"The most common use case for using the ",Object(a.b)("inlineCode",{parentName:"p"},"@InjectAuthorizer")," decorator is when you are not using the autogenerated\nresolvers provided by ",Object(a.b)("inlineCode",{parentName:"p"},"nestjs-query"),"."),Object(a.b)("p",null,"In this example the ",Object(a.b)("inlineCode",{parentName:"p"},"Authorizer")," is injected as a ",Object(a.b)("inlineCode",{parentName:"p"},"readonly")," property you can then use it for any custom methods."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item/todo-item.resolver.ts"',title:'"todo-item/todo-item.resolver.ts"'},"import { QueryService, InjectQueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver, Query, Args } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n    @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>,\n    @InjectAuthorizer(TodoItemDTO) readonly authorizer: Authorizer<TodoItemDTO>,\n  ) {\n    super(service);\n  }\n}\n")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If you are extending the ",Object(a.b)("inlineCode",{parentName:"p"},"CRUDResolver")," directly be sure to ",Object(a.b)("a",{parentName:"p",href:"/nestjs-query/docs/graphql/resolvers#crudresolver"},"register your DTOs with the ",Object(a.b)("inlineCode",{parentName:"a"},"NestjsQueryGraphQLModule"))))),Object(a.b)("h2",{id:"authorize-depending-on-operation"},"Authorize depending on operation"),Object(a.b)("p",null,"Sometimes it might be necessary to perform different authorization based on the kind of operation an user wants to execute.\nE.g. some users could be allowed to read all todo items but only update/delete their own."),Object(a.b)("p",null,"In this case we can make use of the second parameter of the ",Object(a.b)("inlineCode",{parentName:"p"},"authorize")," function in our custom ",Object(a.b)("inlineCode",{parentName:"p"},"Authorizer")," or the one passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"@Authorizer")," decorator which gets passed additional ",Object(a.b)("inlineCode",{parentName:"p"},"AuthorizationContext")," such as the name of the operation that should be authorized:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:"title='sub-task/sub-task.authorizer.ts'",title:"'sub-task/sub-task.authorizer.ts'"},"import { Injectable } from '@nestjs/common';\nimport { Authorizer } from '@nestjs-query/query-graphql';\nimport { Filter } from '@nestjs-query/core';\nimport { UserContext } from '../auth/auth.interfaces';\nimport { SubTaskDTO } from './dto/sub-task.dto';\n\n@Injectable()\nexport class SubTaskAuthorizer implements Authorizer<SubTaskDTO> {\n  authorize(context: UserContext, authorizationContext?: AuthorizationContext): Promise<Filter<SubTaskDTO>> {\n    if (authorizationContext?.readonly) {\n      return Promise.resolve({});\n    }\n\n    return Promise.resolve({ ownerId: { eq: context.req.user.id } });\n  }\n\n  authorizeRelation(relationName: string, context: UserContext): Promise<Filter<unknown>> {\n    if (relationName === 'todoItem') {\n      return Promise.resolve({ ownerId: { eq: context.req.user.id } });\n    }\n    return Promise.resolve({});\n  }\n}\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"AuthorizationContext")," has the following shape:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:"title='authorizer.ts'",title:"'authorizer.ts'"},"export enum OperationGroup {\n  READ = 'read',\n  AGGREGATE = 'aggregate',\n  CREATE = 'create',\n  UPDATE = 'update',\n  DELETE = 'delete',\n}\n\ninterface AuthorizationContext {\n  /** The name of the method that uses the @AuthorizeFilter decorator */\n  operationName: string;\n\n  /** The group this operation belongs to */\n  operationGroup: OperationGroup;\n\n  /** If the operation does not modify any entities */\n  readonly: boolean;\n\n  /** If the operation can affect multiple entities */\n  many: boolean;\n}\n")),Object(a.b)("p",null,"This context is automatially created for you when using the built-in resolvers.\nIf you authorize custom methods by using the ",Object(a.b)("inlineCode",{parentName:"p"},"@AuthorizerFilter()"),", you should pass the context as argument to the decorator:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"@AuthorizerFilter({\n  operationName: 'completedTodoItems',\n  operationGroup: OperationGroup.READ,\n  readonly: true,\n  many: true\n})\n")),Object(a.b)("p",null,"You can leave out the ",Object(a.b)("inlineCode",{parentName:"p"},"operationName")," to let the context use the name of the decorated Method.\nIf you leave out the ",Object(a.b)("inlineCode",{parentName:"p"},"readonly")," property, it's inferred from the ",Object(a.b)("inlineCode",{parentName:"p"},"operationGroup"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"operationNames")," of the generated CRUD resolver methods are similar to the ones of the ",Object(a.b)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/services"},"QueryService"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"queryMany")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"findById")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"aggregate")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"createOne")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"createMany")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"updateOne")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"updateMany")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"deleteOne")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"deleteMany"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Relations")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"query{PluralRelationName}")," (e.g. querySubTasks)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"find{SingularRelationName}")," (e.g. findTodoItem)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"aggregate{PluralRelationName}")," (e.g. aggregateSubTasks)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"remove{SingularRelationName}from{SingularParentName}")," (e.g. removeSubTaskFromTodoItem)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"remove{PluralRelationName}from{SingularParentName}")," (e.g. removeSubTasksFromTodoItem)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"set{SingularRelationName}On{SingularParentName}")," (e.g. setSubTaskOnTodoItem)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"add{PluralRelationName}On{SingularParentName}")," (e.g. addSubTasksOnTodoItem)")),Object(a.b)("h2",{id:"complete-example"},"Complete Example"),Object(a.b)("p",null,"You can find a complete example in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/doug-martin/nestjs-query/tree/master/examples/auth"},Object(a.b)("inlineCode",{parentName:"a"},"examples/auth"))))}d.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,p=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(p,l(l({ref:t},c),{},{components:n})):o.a.createElement(p,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},220:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},221:function(e,t,n){"use strict";var r=n(0),o=n(222);t.a=function(){const e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},222:function(e,t,n){"use strict";var r=n(0);const o=Object(r.createContext)(void 0);t.a=o},223:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(221),i=n(220),l=n(56),s=n.n(l);const c=37,d=39;t.a=function(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:b,className:m}=e,{tabGroupChoices:p,setTabGroupChoices:h}=Object(a.a)(),[O,j]=Object(r.useState)(l),g=r.Children.toArray(e.children),f=[];if(null!=b){const e=p[b];null!=e&&e!==O&&u.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.target,n=f.indexOf(t),r=g[n].props.value;j(r),null!=b&&(h(b,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:o}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:i}=window;return t>=0&&o<=i&&r<=a&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((()=>t.classList.remove(s.a.tabItemActive)),2e3))}),150))},v=e=>{var t;let n;switch(e.keyCode){case d:{const t=f.indexOf(e.target)+1;n=f[t]||f[0];break}case c:{const t=f.indexOf(e.target)-1;n=f[t]||f[f.length-1];break}}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>f.push(e),onKeyDown:v,onFocus:N,onClick:N},t)))),t?Object(r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},224:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function({children:e,hidden:t,className:n}){return o.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)}}}]);