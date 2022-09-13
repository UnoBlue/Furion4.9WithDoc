"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6526],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},684:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=n(4996),s=["components"],l={id:"jsonschema",title:"2.7 JSON Schema \u4f7f\u7528",sidebar_label:"2.7 JSON Schema \u4f7f\u7528 \u2728"},p=void 0,c={unversionedId:"jsonschema",id:"jsonschema",title:"2.7 JSON Schema \u4f7f\u7528",description:"",source:"@site/docs/jsonschema.mdx",sourceDirName:".",slug:"/jsonschema",permalink:"/furion/docs/jsonschema",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/jsonschema.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1656465890,formattedLastUpdatedAt:"Jun 29, 2022",frontMatter:{id:"jsonschema",title:"2.7 JSON Schema \u4f7f\u7528",sidebar_label:"2.7 JSON Schema \u4f7f\u7528 \u2728"},sidebar:"docs",previous:{title:"2.6 GlobalUsing \u4f7f\u7528",permalink:"/furion/docs/globalusing"},next:{title:"2.8 Visual Studio \u9ad8\u6548\u7387 \u2728",permalink:"/furion/docs/vsfast"}},m={},u=[{value:"2.7.1 \u5173\u4e8e <code>JSON Schema</code>",id:"271-\u5173\u4e8e-json-schema",level:2},{value:"2.7.2 \u5b66\u4e60 <code>JSON Schema</code> \u7f16\u5199",id:"272-\u5b66\u4e60-json-schema-\u7f16\u5199",level:2},{value:"2.7.3 \u6846\u67b6\u63d0\u4f9b",id:"273-\u6846\u67b6\u63d0\u4f9b",level:2},{value:"2.7.4 \u5982\u4f55\u4f7f\u7528",id:"274-\u5982\u4f55\u4f7f\u7528",level:2},{value:"2.7.5 <code>JSON Schema</code> \u5931\u6548\u89e3\u51b3",id:"275-json-schema-\u5931\u6548\u89e3\u51b3",level:2},{value:"2.7.5.1 <code>Visual Studio</code>",id:"2751-visual-studio",level:3},{value:"2.7.5.2 <code>Visual Studio Code</code>",id:"2752-visual-studio-code",level:3},{value:"2.7.6 \u5982\u4f55\u66f4\u65b0 <code>JSON Schema</code>",id:"276-\u5982\u4f55\u66f4\u65b0-json-schema",level:2},{value:"2.7.6.1 <code>Visual Studio</code>",id:"2761-visual-studio",level:3},{value:"2.7.6.2 <code>Visual Studio Code</code>",id:"2762-visual-studio-code",level:3},{value:"2.7.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"277-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"271-\u5173\u4e8e-json-schema"},"2.7.1 \u5173\u4e8e ",(0,o.kt)("inlineCode",{parentName:"h2"},"JSON Schema")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JSON Schema")," \u662f\u7528\u4e8e\u9a8c\u8bc1 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," \u6570\u636e\u7ed3\u6784\u7684\u5f3a\u5927\u5de5\u5177\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Schema")," \u53ef\u4ee5\u7406\u89e3\u4e3a\u6a21\u5f0f\u6216\u8005\u89c4\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6709\u4e86 ",(0,o.kt)("inlineCode",{parentName:"strong"},"JSON Schema")," \u518d\u4e5f\u4e0d\u6015\u914d\u7f6e\u5199\u9519\u7684\u60c5\u51b5\u4e86\uff01")),(0,o.kt)("h2",{id:"272-\u5b66\u4e60-json-schema-\u7f16\u5199"},"2.7.2 \u5b66\u4e60 ",(0,o.kt)("inlineCode",{parentName:"h2"},"JSON Schema")," \u7f16\u5199"),(0,o.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u6846\u67b6\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON Schema")," \u662f\u975e\u5e38\u6709\u5fc5\u8981\u7684\uff0c\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u5728\u6dfb\u52a0\u914d\u7f6e\u7684\u65f6\u5019\u80fd\u591f\u6709\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\u529f\u80fd\uff0c\u5982\u679c\u60f3\u5b66\u4e60 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON Schema")," \u7f16\u5199\u53ef\u4ee5\u67e5\u770b\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://json-schema.apifox.cn/"},"https://json-schema.apifox.cn/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/355175938"},"https://zhuanlan.zhihu.com/p/355175938"))),(0,o.kt)("p",null,"\u8fd9\u91cc\u4e5f\u63d0\u4f9b\u4e00\u4e2a\u975e\u5e38\u4fbf\u6377\u7684\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON Schema")," \u7684\u5728\u7ebf\u7f51\u7ad9\uff0c\u53ef\u4ee5\u6839\u636e ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," \u6587\u4ef6\u5185\u5bb9\u81ea\u52a8\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON Schema"),"\uff0c\u4e4b\u540e\u8fdb\u884c\u5c0f\u91cf\u4fee\u6539\u5373\u53ef\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://hellosean1025.github.io/json-schema-visual-editor/"},"https://hellosean1025.github.io/json-schema-visual-editor/")),(0,o.kt)("h2",{id:"273-\u6846\u67b6\u63d0\u4f9b"},"2.7.3 \u6846\u67b6\u63d0\u4f9b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON Schema")," \u6587\u4ef6\uff0c\u901a\u8fc7\u8be5\u6587\u4ef6\u53ef\u4ee5\u5728\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u65f6\u63d0\u4f9b\u5b8c\u6574\u7684\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json"},"\u67e5\u770b ",(0,o.kt)("inlineCode",{parentName:"a"},"JSON Schema")," \u6e90\u7801\u5730\u5740"))),(0,o.kt)("h2",{id:"274-\u5982\u4f55\u4f7f\u7528"},"2.7.4 \u5982\u4f55\u4f7f\u7528"),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u7684\u5934\u90e8\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},'"$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json",')," \u5373\u53ef\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},'{\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json",\n\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information",\n      "Microsoft.EntityFrameworkCore": "Information",\n      "Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware": "Information"\n    }\n  },\n  "AllowedHosts": "*"\n}\n')),(0,o.kt)("img",{src:(0,r.Z)("img/js1.png")}),(0,o.kt)("img",{src:(0,r.Z)("img/js2.png")}),(0,o.kt)("img",{src:(0,r.Z)("img/js3.png")}),(0,o.kt)("img",{src:(0,r.Z)("img/js4.png")}),(0,o.kt)("img",{src:(0,r.Z)("img/js7.png")}),(0,o.kt)("h2",{id:"275-json-schema-\u5931\u6548\u89e3\u51b3"},"2.7.5 ",(0,o.kt)("inlineCode",{parentName:"h2"},"JSON Schema")," \u5931\u6548\u89e3\u51b3"),(0,o.kt)("p",null,"\u5982\u679c\u6dfb\u52a0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},'"$schema": "https://gitee.com/dotnetchina/Furion/raw/v4/schemas/v4/furion-schema.json",')," \u4f9d\u7136\u65e0\u6cd5\u8fdb\u884c\u667a\u80fd\u63d0\u793a\u6821\u9a8c\uff0c\u53ef\u5c1d\u8bd5\u5173\u95ed ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u518d\u91cd\u65b0\u6253\u5f00\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4e0a\u9762\u6b65\u9aa4\u4f9d\u7136\u65e0\u6548\uff0c\u90a3\u4e48\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u65b9\u5f0f\uff1a"),(0,o.kt)("h3",{id:"2751-visual-studio"},"2.7.5.1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Visual Studio")),(0,o.kt)("img",{src:(0,r.Z)("img/js5.png")}),(0,o.kt)("img",{src:(0,r.Z)("img/js6.png")}),(0,o.kt)("h3",{id:"2752-visual-studio-code"},"2.7.5.2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Visual Studio Code")),(0,o.kt)("p",null,"\u91cd\u542f ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Studio Code")," \u5373\u53ef\u3002"),(0,o.kt)("h2",{id:"276-\u5982\u4f55\u66f4\u65b0-json-schema"},"2.7.6 \u5982\u4f55\u66f4\u65b0 ",(0,o.kt)("inlineCode",{parentName:"h2"},"JSON Schema")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"JSON Schema")," \u5728\u7b2c\u4e00\u6b21\u83b7\u53d6\u4e4b\u540e\u4f1a\u81ea\u52a8\u7f13\u5b58\u8d77\u6765\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u63d0\u793a\u9519\u8bef\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ea\u9700\u8981\u5220\u9664\u7f13\u5b58\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"2761-visual-studio"},"2.7.6.1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Visual Studio")),(0,o.kt)("p",null,"\u6253\u5f00\u7535\u8111\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c")," \u5e76\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"%AppData%"),"\uff0c\u4e4b\u540e\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\\u4f60\u7684\u7535\u8111\u7528\u6237\u540d\\AppData\\Local\\Microsoft\\VisualStudio")," \u4e0b"),(0,o.kt)("img",{src:(0,r.Z)("img/js8.png")}),(0,o.kt)("img",{src:(0,r.Z)("img/js9.png")}),(0,o.kt)("img",{src:(0,r.Z)("img/js10.png")}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e4b\u540e\u5220\u9664 ",(0,o.kt)("inlineCode",{parentName:"strong"},"http/https")," \u5f00\u5934\u7684\u6587\u4ef6\u5373\u53ef\u3002")),(0,o.kt)("h3",{id:"2762-visual-studio-code"},"2.7.6.2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Visual Studio Code")),(0,o.kt)("p",null,"\u540c\u4e0a\uff0c\u8fd0\u884c\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"%AppData%"),"\uff0c\u4e4b\u540e\u8fdb\u5165\u4e0b\u5217\u8def\u5f84\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\\u4f60\u7684\u7535\u8111\u7528\u6237\u540d\\AppData\\Roaming\\Code\\User\\globalStorage\\vscode.json-language-features\\json-schema-cache")),(0,o.kt)("img",{src:(0,r.Z)("img/js11.png")}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e4b\u540e\u5220\u9664\u8fd9\u4e9b\u6587\u4ef6\u5373\u53ef\u3002")),(0,o.kt)("h2",{id:"277-\u53cd\u9988\u4e0e\u5efa\u8bae"},"2.7.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}h.isMDXComponent=!0}}]);