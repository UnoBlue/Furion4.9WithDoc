"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3942],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,v=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(v,o(o({ref:n},l),{},{components:t})):a.createElement(v,o({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9654:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],s={id:"dbcontext-seed-data",title:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e",sidebar_label:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e"},d=void 0,c={unversionedId:"dbcontext-seed-data",id:"dbcontext-seed-data",title:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e",description:"\u4e00\u65e6\u5b9a\u4e49\u4e86\u79cd\u5b50\u6570\u636e\u6216\u6539\u53d8\u4e86\u79cd\u5b50\u6570\u636e\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c Add-Migration \u548c Update-Database \u547d\u4ee4\u3002",source:"@site/docs/dbcontext-seed-data.mdx",sourceDirName:".",slug:"/dbcontext-seed-data",permalink:"/furion/docs/dbcontext-seed-data",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-seed-data.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"dbcontext-seed-data",title:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e",sidebar_label:"9.21 \u5b9e\u4f53\u79cd\u5b50\u6570\u636e"},sidebar:"docs",previous:{title:"9.20 \u6a21\u578b\u751f\u6210\u6570\u636e\u5e93 (Code First)",permalink:"/furion/docs/dbcontext-code-first"},next:{title:"9.22 \u5ba1\u8ba1\u65e5\u5fd7 (Audit)",permalink:"/furion/docs/dbcontext-audit"}},l={},p=[{value:"9.21.1 \u4ec0\u4e48\u662f\u79cd\u5b50\u6570\u636e",id:"9211-\u4ec0\u4e48\u662f\u79cd\u5b50\u6570\u636e",level:2},{value:"9.21.2 \u5982\u4f55\u914d\u7f6e",id:"9212-\u5982\u4f55\u914d\u7f6e",level:2},{value:"9.21.2.1 \u5728\u5b9e\u4f53\u5b9a\u4e49\u4e2d\u4f7f\u7528",id:"92121-\u5728\u5b9e\u4f53\u5b9a\u4e49\u4e2d\u4f7f\u7528",level:3},{value:"9.21.2.2 \u5728\u4efb\u610f\u5bf9\u8c61\u7c7b\u4e2d\u4f7f\u7528",id:"92122-\u5728\u4efb\u610f\u5bf9\u8c61\u7c7b\u4e2d\u4f7f\u7528",level:3},{value:"9.21.3 \u5bfc\u822a\u5c5e\u6027",id:"9213-\u5bfc\u822a\u5c5e\u6027",level:2},{value:"9.21.4 \u591a\u4e2a\u6570\u636e\u5e93\u79cd\u5b50\u6570\u636e",id:"9214-\u591a\u4e2a\u6570\u636e\u5e93\u79cd\u5b50\u6570\u636e",level:2},{value:"9.21.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9215-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],m={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u63d0\u9192")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e00\u65e6\u5b9a\u4e49\u4e86\u79cd\u5b50\u6570\u636e\u6216\u6539\u53d8\u4e86\u79cd\u5b50\u6570\u636e\uff0c\u9700\u8981\u91cd\u65b0\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"Add-Migration")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Update-Database")," \u547d\u4ee4\u3002"))),(0,i.kt)("h2",{id:"9211-\u4ec0\u4e48\u662f\u79cd\u5b50\u6570\u636e"},"9.21.1 \u4ec0\u4e48\u662f\u79cd\u5b50\u6570\u636e"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u79cd\u5b50\u6570\u636e\u901a\u5e38\u6307\u7684\u662f\u901a\u8fc7\u7a0b\u5e8f\u4e3a\u6570\u636e\u5e93\u9884\u5148\u8bbe\u7f6e\u4e00\u4e9b\u521d\u59cb\u5316\u6570\u636e\uff0c\u6bd4\u5982\u6211\u4eec\u7684\u6570\u636e\u5b57\u5178\u8868\uff0c\u6211\u4eec\u53ef\u80fd\u5e0c\u671b\u5728\u7cfb\u7edf\u6784\u5efa\u521d\u671f\u5c31\u81ea\u52a8\u5c06\u4e00\u4e9b\u89c4\u8303\u5316\u6570\u636e\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\u3002"),(0,i.kt)("p",null,"\u5982\u6027\u522b\uff1a\u7537/\u5973\uff0c\u5730\u533a\uff0c\u884c\u4e1a\u4fe1\u606f\u7b49\u7b49\u3002"),(0,i.kt)("h2",{id:"9212-\u5982\u4f55\u914d\u7f6e"},"9.21.2 \u5982\u4f55\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u975e\u5e38\u7075\u6d3b\u65b9\u4fbf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"IEntitySeedData<TEntity>")," \u4f9d\u8d56\u63a5\u53e3\u53ef\u4ee5\u5feb\u901f\u7684\u6784\u5efa\u79cd\u5b50\u6570\u636e\uff0c\u652f\u6301\u4efb\u4f55\u65e0\u53c2\u6784\u9020\u51fd\u6570\u5bf9\u8c61\u7c7b\u4e2d\u4f7f\u7528\u3002\u5982\u6211\u4eec\u9700\u8981\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Person")," \u8868\u63d2\u5165\u521d\u59cb\u5316\u6570\u636e\uff1a"),(0,i.kt)("h3",{id:"92121-\u5728\u5b9e\u4f53\u5b9a\u4e49\u4e2d\u4f7f\u7528"},"9.21.2.1 \u5728\u5b9e\u4f53\u5b9a\u4e49\u4e2d\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {7,16-23}",showLineNumbers:!0,"":!0,"{7,16-23}":!0},'using Furion.DatabaseAccessor;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Person : EntityBase, IEntitySeedData<Person>\n    {\n        public string Name { get; set; }\n\n        public int Age { get; set; }\n\n        public string Address { get; set; }\n\n        // \u914d\u7f6e\u79cd\u5b50\u6570\u636e\n        public IEnumerable<Person> HasData(DbContext dbContext, Type dbContextLocator)\n        {\n            return new List<Person>\n            {\n                new Person { Id = 1, Name = "\u767e\u5c0f\u50e7", Address = "\u5e7f\u4e1c\u7701\u4e2d\u5c71\u5e02" },\n                new Person { Id = 2, Name = "\u65b0\u751f\u5e1d", Address = "\u5e7f\u4e1c\u7701\u73e0\u6d77\u5e02" }\n            };\n        }\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"\u4e3b\u952e")," \u503c\u5fc5\u987b\u624b\u52a8\u63d2\u5165\uff0c\u56e0\u4e3a\u4f1a\u81ea\u52a8\u5173\u95ed\u4e3b\u952e\u6216\u81ea\u589e\u6807\u8bc6\u68c0\u67e5\u3002"))),(0,i.kt)("h3",{id:"92122-\u5728\u4efb\u610f\u5bf9\u8c61\u7c7b\u4e2d\u4f7f\u7528"},"9.21.2.2 \u5728\u4efb\u610f\u5bf9\u8c61\u7c7b\u4e2d\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {6,9-16}",showLineNumbers:!0,"":!0,"{6,9-16}":!0},'using Furion.DatabaseAccessor;\nusing System.Collections.Generic;\n\nnamespace Furion.Application\n{\n    public class PersonSeedData : IEntitySeedData<Person>\n    {\n        // \u914d\u7f6e\u79cd\u5b50\u6570\u636e\n        public IEnumerable<Person> HasData(DbContext dbContext, Type dbContextLocator)\n        {\n            return new List<Person>\n            {\n                new Person { Id = 1, Name = "\u767e\u5c0f\u50e7", Address = "\u5e7f\u4e1c\u7701\u4e2d\u5c71\u5e02" },\n                new Person { Id = 2, Name = "\u65b0\u751f\u5e1d", Address = "\u5e7f\u4e1c\u7701\u73e0\u6d77\u5e02" }\n            };\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"9213-\u5bfc\u822a\u5c5e\u6027"},"9.21.3 \u5bfc\u822a\u5c5e\u6027"),(0,i.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u7684\u5b9e\u4f53\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4e00\u5bf9\u591a"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u591a\u5bf9\u591a"),"\u7b49\u5916\u952e\u5173\u7cfb\uff0c\u90a3\u4e48",(0,i.kt)("strong",{parentName:"p"},"\u6211\u4eec\u9700\u8981\u5355\u72ec\u4e3a\u6bcf\u4e00\u4e2a\u5b9e\u4f53\u6dfb\u52a0\u6570\u636e\u79cd\u5b50\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u5199\u5728\u4e3b\u8868\u4e2d\u3002")),(0,i.kt)("h2",{id:"9214-\u591a\u4e2a\u6570\u636e\u5e93\u79cd\u5b50\u6570\u636e"},"9.21.4 \u591a\u4e2a\u6570\u636e\u5e93\u79cd\u5b50\u6570\u636e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u6cdb\u578b\u7684\u65b9\u5f0f\u652f\u6301\u591a\u4e2a\u6570\u636e\u5e93\u79cd\u5b50\u6570\u636e\u8bbe\u5b9a\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {6,9-16}",showLineNumbers:!0,"":!0,"{6,9-16}":!0},'using Furion.DatabaseAccessor;\nusing System.Collections.Generic;\n\nnamespace Furion.Application\n{\n    public class PersonSeedData : IEntitySeedData<Person, MySqlDbContextLocator, SqliteDbContextLocator>\n    {\n        // \u914d\u7f6e\u79cd\u5b50\u6570\u636e\n        public IEnumerable<Person> HasData(DbContext dbContext, Type dbContextLocator)\n        {\n            return new List<Person>\n            {\n                new Person { Id = 1, Name = "\u767e\u5c0f\u50e7", Address = "\u5e7f\u4e1c\u7701\u4e2d\u5c71\u5e02" },\n                new Person { Id = 2, Name = "\u65b0\u751f\u5e1d", Address = "\u5e7f\u4e1c\u7701\u73e0\u6d77\u5e02" }\n            };\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u8868\u793a\u540c\u65f6\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"MySqlDbContext")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"SqliteDbContext")," \u521b\u5efa\u79cd\u5b50\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"9215-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.21.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u79cd\u5b50")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/ef/core/modeling/data-seeding"},"EF Core - \u6570\u636e\u79cd\u5b50\u8bbe\u5b9a")," \u7ae0\u8282\u3002"))))}u.isMDXComponent=!0}}]);