"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3353],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=n,v=s["".concat(u,".").concat(f)]||s[f]||p[f]||o;return r?a.createElement(v,l(l({ref:t},d),{},{components:r})):a.createElement(v,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7094:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"datavalidator",title:"3. DataValidator \u9759\u6001\u7c7b",sidebar_label:"3. DataValidator \u9759\u6001\u7c7b"},u=void 0,c={unversionedId:"global/datavalidator",id:"version-v2/global/datavalidator",isDocsHomePage:!1,title:"3. DataValidator \u9759\u6001\u7c7b",description:"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",source:"@site/versioned_docs/version-v2/global/datavalidator.mdx",sourceDirName:"global",slug:"/global/datavalidator",permalink:"/furion/docs/global/datavalidator",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/versioned_docs/version-v2/global/datavalidator.mdx",version:"v2",frontMatter:{id:"datavalidator",title:"3. DataValidator \u9759\u6001\u7c7b",sidebar_label:"3. DataValidator \u9759\u6001\u7c7b"},sidebar:"version-v2/global",previous:{title:"2. Db \u9759\u6001\u7c7b",permalink:"/furion/docs/global/db"},next:{title:"4. Oops \u9759\u6001\u7c7b",permalink:"/furion/docs/global/oops"}},d=[{value:"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",id:"31-\u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e",children:[]},{value:"3.2 \u9a8c\u8bc1\u5355\u4e2a\u503c",id:"32-\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]},{value:"3.3 \u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c",id:"33-\u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]},{value:"3.4 \u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c",id:"34-\u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c",children:[]}],p={toc:d};function s(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"31-\u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e"},"3.1 \u9a8c\u8bc1\u5bf9\u8c61\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"var result = DataValidator.TryValidateObject(obj);\n")),(0,o.kt)("h2",{id:"32-\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.2 \u9a8c\u8bc1\u5355\u4e2a\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"var result = DataValidator.TryValidateValue(value, typeof(RequiredAttribure), typeof(RangeAttribute));\n")),(0,o.kt)("h2",{id:"33-\u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.3 \u6b63\u5219\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u5355\u4e2a\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'var result = DataValidator.TryValidateValue(value,"\u6b63\u5219\u8868\u8fbe\u5f0f");\n')),(0,o.kt)("h2",{id:"34-\u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c"},"3.4 \u9a8c\u8bc1\u7c7b\u578b\u9a8c\u8bc1\u5355\u4e2a\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"var result = DataValidator.TryValidateValue(value, ValidationTypes.Number);\n\nvar result2 = DataValidator.TryValidateValue(value, ValidationPattern.AllOfThem, ValidationTypes.Number, ValidationTypes.Required);\n")))}s.isMDXComponent=!0}}]);