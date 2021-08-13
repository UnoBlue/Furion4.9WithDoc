"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[7194],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,g=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1783:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=(t(4996),["components"]),l={slug:"console",title:"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528",author:"dotNET China",author_title:"\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",author_url:"https://www.chinadot.net",author_image_url:"https://i.loli.net/2021/01/19/M8q5a3OTZWUKicl.png",tags:["furion","furos",".net",".netcore",".net5",".net6"]},c=void 0,u={permalink:"/furion/blog/console",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/blog/2021-07-24-console.mdx",source:"@site/blog/2021-07-24-console.mdx",title:"5. \u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528",description:"Furion \u4ece v2.15.3+ \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5168\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\uff0c\u5305\u62ec Web\uff0c\u63a7\u5236\u53f0\uff0cWinForm\uff0cWPF\uff0cXamarin/MAUI \u7b49\u3002",date:"2021-07-24T00:00:00.000Z",formattedDate:"2021\u5e747\u670824\u65e5",tags:[{label:"furion",permalink:"/furion/blog/tags/furion"},{label:"furos",permalink:"/furion/blog/tags/furos"},{label:".net",permalink:"/furion/blog/tags/net"},{label:".netcore",permalink:"/furion/blog/tags/netcore"},{label:".net5",permalink:"/furion/blog/tags/net-5"},{label:".net6",permalink:"/furion/blog/tags/net-6"}],readingTime:.475,truncated:!1,prevItem:{title:"5. .NET 6 Preview 7 \u5c1d\u9c9c",permalink:"/furion/blog/net6-preview7"},nextItem:{title:"4. .NET 6 Preview 6 \u5c1d\u9c9c",permalink:"/furion/blog/net6-preview6"}},p=[],s={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.15.3+")," \u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u5168\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\uff0c\u5305\u62ec ",(0,i.kt)("inlineCode",{parentName:"p"},"Web"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u63a7\u5236\u53f0"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"WinForm"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"WPF"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Xamarin/MAUI")," \u7b49\u3002"),(0,i.kt)("p",null,"\u5728\u63a7\u5236\u53f0\u4e2d\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using Furion;\nusing Furion.DependencyInjection;\nusing Furion.RemoteRequest.Extensions;\nusing Microsoft.Extensions.DependencyInjection;\nusing System;\n\nnamespace ConsoleApp1\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u5bb9\u5668\n            var services = Inject.Create();\n            // \u6ce8\u518c\u670d\u52a1\n            services.AddRemoteRequest();\n            // \u6240\u6709\u670d\u52a1\u6ce8\u518c\u5b8c\u6bd5\u540e\u8c03\u7528 Build() \u6784\u5efa\n            services.Build();\n\n            // \u4f7f\u7528\n            var helloService = App.GetService<IHelloService>();\n            Console.WriteLine(helloService.SayHello());\n\n            Console.WriteLine("=============");\n\n            var baidu = "https://www.baidu.com".GetAsStringAsync().GetAwaiter().GetResult();\n            Console.WriteLine(baidu);\n        }\n    }\n\n    public interface IHelloService\n    {\n        string SayHello();\n    }\n    public class HelloService : IHelloService, ITransient\n    {\n        public string SayHello()\n        {\n            return "Hello Furion.";\n        }\n    }\n}\n')),(0,i.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"var services = Inject.Create();")," \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u96c6\u5408\uff0c\u6700\u540e\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"services.Build()")," \u5373\u53ef\u5b8c\u6210\u521d\u59cb\u5316\u3002"))}f.isMDXComponent=!0}}]);