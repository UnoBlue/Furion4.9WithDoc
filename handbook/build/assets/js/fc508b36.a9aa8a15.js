"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[8429],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6410:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],s={id:"encryption",title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",sidebar_label:"20. \u6570\u636e\u52a0\u89e3\u5bc6"},p=void 0,l={unversionedId:"encryption",id:"encryption",title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",description:"20.1 \u6570\u636e\u52a0\u89e3\u5bc6",source:"@site/docs/encryption.mdx",sourceDirName:".",slug:"/encryption",permalink:"/docs/encryption",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/encryption.mdx",tags:[],version:"current",lastUpdatedBy:"\u5c0f\u5c0f",lastUpdatedAt:1665502274,formattedLastUpdatedAt:"Oct 11, 2022",frontMatter:{id:"encryption",title:"20. \u6570\u636e\u52a0\u89e3\u5bc6",sidebar_label:"20. \u6570\u636e\u52a0\u89e3\u5bc6"},sidebar:"docs",previous:{title:"19. \u8fdc\u7a0b\u8bf7\u6c42 (HttpClient)",permalink:"/docs/http"},next:{title:"21. \u5168\u7403\u5316\u548c\u672c\u5730\u5316\uff08\u591a\u8bed\u8a00\uff09",permalink:"/docs/local-language"}},d={},c=[{value:"20.1 \u6570\u636e\u52a0\u89e3\u5bc6",id:"201-\u6570\u636e\u52a0\u89e3\u5bc6",level:2},{value:"20.2 \u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5",id:"202-\u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5",level:2},{value:"20.3 \u52a0\u89e3\u5bc6\u4f7f\u7528",id:"203-\u52a0\u89e3\u5bc6\u4f7f\u7528",level:2},{value:"20.3.1 <code>MD5</code> \u52a0\u5bc6",id:"2031-md5-\u52a0\u5bc6",level:3},{value:"20.3.2 <code>DESC</code> \u52a0\u89e3\u5bc6",id:"2032-desc-\u52a0\u89e3\u5bc6",level:3},{value:"20.3.3 <code>AES</code> \u52a0\u89e3\u5bc6",id:"2033-aes-\u52a0\u89e3\u5bc6",level:3},{value:"20.3.4 <code>JWT</code> \u52a0\u89e3\u5bc6",id:"2034-jwt-\u52a0\u89e3\u5bc6",level:3},{value:"20.3.5 <code>PBKDF2</code> \u52a0\u5bc6",id:"2035-pbkdf2-\u52a0\u5bc6",level:3},{value:"20.3.6 <code>RSA</code> \u52a0\u5bc6",id:"2036-rsa-\u52a0\u5bc6",level:3},{value:"20.4 \u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f",id:"204-\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f",level:2},{value:"20.5 <code>SM2</code>\u3001<code>SM3</code>\uff0c<code>SM4</code> \u56fd\u5bc6",id:"205-sm2sm3sm4-\u56fd\u5bc6",level:2},{value:"20.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"206-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"201-\u6570\u636e\u52a0\u89e3\u5bc6"},"20.1 \u6570\u636e\u52a0\u89e3\u5bc6"),(0,i.kt)("p",null,"\u7531\u4e8e\u73b0\u5728\u7684\u4e92\u8054\u7f51\u8d8a\u5177\u53d1\u8fbe\uff0c\u6570\u636e\u6210\u4e3a\u4e86\u6211\u4eec\u751f\u6d3b\u7684\u4e00\u90e8\u5206\uff0c\u5f53\u7136\u4e5f\u5e26\u6765\u4e86\u5f88\u591a\u6570\u636e\u5b89\u5168\u6027\u7684\u95ee\u9898\uff0c\u6bd4\u5982\u7528\u6237\u5bc6\u7801\u660e\u6587\u5b58\u50a8\uff0c\u7528\u6237\u4fe1\u606f\u660e\u6587\u5b58\u5728\u5728\u6d4f\u89c8\u5668 ",(0,i.kt)("inlineCode",{parentName:"p"},"cookies")," \u4e2d\u7b49\u7b49\u4e0d\u5b89\u5168\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u5bf9\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u662f\u7cfb\u7edf\u5f00\u53d1\u5fc5\u8981\u7684\u73af\u8282\u3002"),(0,i.kt)("h2",{id:"202-\u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5"},"20.2 \u5185\u7f6e\u52a0\u5bc6\u7b97\u6cd5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MD5")," \u52a0\u5bc6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DESC")," \u52a0\u89e3\u5bc6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AES")," \u52a0\u89e3\u5bc6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JWT")," \u52a0\u89e3\u5bc6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PBKDF2")," \u52a0\u5bc6\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"Furion v2.12 +")," \u7248\u672c\u5df2\u79fb\u9664\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RSA")," \u52a0\u89e3\u5bc6")),(0,i.kt)("h2",{id:"203-\u52a0\u89e3\u5bc6\u4f7f\u7528"},"20.3 \u52a0\u89e3\u5bc6\u4f7f\u7528"),(0,i.kt)("h3",{id:"2031-md5-\u52a0\u5bc6"},"20.3.1 ",(0,i.kt)("inlineCode",{parentName:"h3"},"MD5")," \u52a0\u5bc6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6d4b\u8bd5 MD5 \u52a0\u5bc6\uff0c\u6bd4\u8f83\nvar md5Hash = MD5Encryption.Encrypt("\u767e\u5c0f\u50e7");  // \u52a0\u5bc6\nvar isEqual = MD5Encryption.Compare("\u767e\u5c0f\u50e7", md5Hash); // \u6bd4\u8f83\nreturn (md5Hash, isEqual);\n\n// \u8f93\u51fa\u5927\u5199 MD5 \u52a0\u5bc6\nvar md5Hash = MD5Encryption.Encrypt("\u767e\u5c0f\u50e7", true);\n\n// \u8f93\u51fa 16\u4f4d MD5 \u52a0\u5bc6\uff0cFurion 4.2.6+ \u7248\u672c\nvar md5Hash16 = MD5Encryption.Encrypt("\u767e\u5c0f\u50e7", is16: true);\n')),(0,i.kt)("h3",{id:"2032-desc-\u52a0\u89e3\u5bc6"},"20.3.2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"DESC")," \u52a0\u89e3\u5bc6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6d4b\u8bd5 DESC \u52a0\u89e3\u5bc6\nvar descHash = DESCEncryption.Encrypt("\u767e\u5c0f\u50e7", "Furion"); // \u52a0\u5bc6\nvar str = DESCEncryption.Decrypt(descHash, "Furion");  // \u89e3\u5bc6\nreturn (descHash, str);\n')),(0,i.kt)("h3",{id:"2033-aes-\u52a0\u89e3\u5bc6"},"20.3.3 ",(0,i.kt)("inlineCode",{parentName:"h3"},"AES")," \u52a0\u89e3\u5bc6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6d4b\u8bd5 AES \u52a0\u89e3\u5bc6\nvar key = Guid.NewGuid().ToString("N"); // \u5bc6\u94a5\uff0c\u957f\u5ea6\u5fc5\u987b\u4e3a24\u4f4d\u621632\u4f4d\n\nvar aesHash = AESEncryption.Encrypt("\u767e\u5c0f\u50e7", key); // \u52a0\u5bc6\nvar str2 = AESEncryption.Decrypt(aesHash, key); // \u89e3\u5bc6\nreturn (aesHash, str2);\n')),(0,i.kt)("h3",{id:"2034-jwt-\u52a0\u89e3\u5bc6"},"20.3.4 ",(0,i.kt)("inlineCode",{parentName:"h3"},"JWT")," \u52a0\u89e3\u5bc6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var token = JWTEncryption.Encrypt(new Dictionary<string, object>()  // \u52a0\u5bc6\n            {\n                { "UserId", user.Id },\n                { "Account",user.Account }\n            });\n\nvar tokenData = JWTEncryption.ReadJwtToken("\u4f60\u7684token");  // \u89e3\u5bc6\n\nvar (isValid, tokenData, validationResult) = JWTEncryption.Validate("\u4f60\u7684token"); // \u9a8c\u8bc1token\u6709\u6548\u671f\n')),(0,i.kt)("admonition",{title:"\u7279\u522b\u6ce8\u610f",type:"important"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"JWTEncryption")," \u52a0\u89e3\u5bc6\u5e76\u672a\u5305\u542b\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9700\u8981\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Extras.Authentication.JwtBearer")," \u62d3\u5c55\u5305\u3002")),(0,i.kt)("h3",{id:"2035-pbkdf2-\u52a0\u5bc6"},"20.3.5 ",(0,i.kt)("inlineCode",{parentName:"h3"},"PBKDF2")," \u52a0\u5bc6"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Furion v2.12 +")," \u7248\u672c\u5df2\u79fb\u9664\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6d4b\u8bd5 PBKDF2 \u52a0\u5bc6\uff0c\u6bd4\u8f83\nvar basestring = PBKDF2Encryption.Encrypt("\u767e\u5c0f\u50e7");  // \u52a0\u5bc6\nvar isEqual = PBKDF2Encryption.Compare("\u767e\u5c0f\u50e7", basestring); // \u6bd4\u8f83\n')),(0,i.kt)("admonition",{title:"\u652f\u6301\u9009\u62e9\u66f4\u591a\u53c2\u6570",type:"important"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"PBKDF2")," \u8fd8\u53ef\u4ee5\u914d\u7f6e\u66f4\u591a\u53c2\u6570\uff1a"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u4e2d\u6ce8\u518c\u670d\u52a1")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.AddPBKDF2EncryptionOptions();\n")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"appsettings.json")," \u914d\u7f6e\uff1a")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "PBKDF2EncryptionSettings": {\n    "InitialIterationCount": 110, // \u521d\u59cb\u8fed\u4ee3\u6b21\u6570\u7d2f\u52a0\u503c\n    "KeyDerivation": "HMACSHA256", // \u52a0\u5bc6\u7b97\u6cd5\u89c4\u5219  KeyDerivationPrf.HMACSHA256\n    "NumBytesRequested": 64 // \u6d3e\u751f\u5bc6\u94a5\u7684\u957f\u5ea6 (\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d) 512 / 8\n  }\n}\n')),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"KeyDerivation")," \u53ef\u9009\u503c\u6709\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"HMACSHA1"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"HMACSHA256"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"HMACSHA512")))),(0,i.kt)("h3",{id:"2036-rsa-\u52a0\u5bc6"},"20.3.6 ",(0,i.kt)("inlineCode",{parentName:"h3"},"RSA")," \u52a0\u5bc6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u6d4b\u8bd5 RSA \u52a0\u5bc6\nvar (publicKey, privateKey) = RSAEncryption.GenerateSecretKey(2048);  //\u751f\u6210 RSA \u79d8\u94a5 \u79d8\u94a5\u5927\u5c0f\u5fc5\u987b\u4e3a 2048 \u5230 16384\uff0c\u5e76\u4e14\u662f 8 \u7684\u500d\u6570\nvar basestring = RSAEncryption.Encrypt("\u767e\u5c0f\u50e7", publicKey);  // \u52a0\u5bc6\nvar str2 = RSAEncryption.Decrypt(basestring, privateKey); // \u89e3\u5bc6\nreturn (basestring, str2);\n')),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5173\u4e8e ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"RSA")," \u7b7e\u540d\u548c\u6821\u9a8c"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u5e95\u5c42\u4e0d\u5185\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"RSA")," \u7b7e\u540d\u548c\u6821\u9a8c\u529f\u80fd\uff0c\u5982\u9700\u6dfb\u52a0\u8be5\u529f\u80fd\u53ef\u67e5\u9605\u5f00\u53d1\u8005\u63d0\u4ea4\u7684\u4ee3\u7801\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/pulls/349"},"\u67e5\u770b RSA \u7b7e\u540d\u548c\u6821\u9a8c"))),(0,i.kt)("h2",{id:"204-\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f"},"20.4 \u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e5f\u63d0\u4f9b\u4e86\u5b57\u7b26\u4e32\u62d3\u5c55\u65b9\u5f0f\u8fdb\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"MD5\u52a0\u5bc6\u3001AES/DESC\u52a0\u89e3\u5bc6\u3001RSA\u52a0\u89e3\u5bc6"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'using Furion.DataEncryption.Extensions;\n\n// MD5 \u52a0\u5bc6\nvar s = "Furion".ToMD5Encrypt();\nvar b = "Furion".ToMD5Compare(s);   // \u6bd4\u8f83\n\n// AES\u52a0\u89e3\u5bc6\nvar s = "Furion".ToAESEncrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\nvar str = s.ToAESDecrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\n\n// DESC \u52a0\u89e3\u5bc6\nvar s = "Furion".ToDESCEncrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\nvar str = s.ToDESCDecrypt("sfdsfdsfdsfdsfdsfdsfdsfdsfdfdsfdsfdfdfdfd");\n\n// PBKDF2 \u52a0\u5bc6\uff08`Furion v2.12 +` \u7248\u672c\u5df2\u79fb\u9664\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff01\uff09\nvar s = "Furion".ToPBKDF2Encrypt();\nvar b = "Furion".ToPBKDF2Compare(s);   // \u6bd4\u8f83\n\n// RSA \u52a0\u89e3\u5bc6\nvar (publicKey, privateKey) = RSAEncryption.GenerateSecretKey(2048);  //\u751f\u6210 RSA \u79d8\u94a5 \u79d8\u94a5\u5927\u5c0f\u5fc5\u987b\u4e3a 2048 \u5230 16384\uff0c\u5e76\u4e14\u662f 8 \u7684\u500d\u6570\nvar s= "Furion".ToRSAEncrpyt(publicKey);  // \u52a0\u5bc6\nvar str=s.ToRSADecrypt(privateKey);  // \u89e3\u5bc6\n')),(0,i.kt)("h2",{id:"205-sm2sm3sm4-\u56fd\u5bc6"},"20.5 ",(0,i.kt)("inlineCode",{parentName:"h2"},"SM2"),"\u3001",(0,i.kt)("inlineCode",{parentName:"h2"},"SM3"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"h2"},"SM4")," \u56fd\u5bc6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u672a\u5185\u7f6e\u56fd\u5bc6\u7b97\u6cd5 ",(0,i.kt)("inlineCode",{parentName:"p"},"SM2-4"),"\uff0c\u4f46\u662f\u5df2\u6709\u5f00\u53d1\u8005\u8d21\u732e\u5b9e\u73b0\u5e76\u5f00\u6e90\uff0c\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/xxcxy/SM/tree/master/GfsDemo/Smcrypto"},"Gitee \u4ed3\u5e93"),"\uff0c\u611f\u8c22 ",(0,i.kt)("inlineCode",{parentName:"p"},"QQ\uff08373696184\uff09\u5f62\u5f71\u76f8\u5370\xb2\xba\xb2\xb2")," \u8d21\u732e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var data = "{\\"lx\\":\\"1\\",\\"wxid\\":\\"\\",\\"ehealth_code_id\\":\\"68A018036186B717CC1B051C10996F4EEE805F5F81EB1594C9EB43592545F7F6\\",\\"ehealth_code\\":\\"68A018036186B717CC1B051C10996F4EEE805F5F81EB1594C9EB43592545F7F6\\",\\"xm\\":\\"\u6d4b\u8bd5\\"}";\n\n// SM2\nvar b = SM2Utils.\u52a0\u5bc6("123");\nvar b1 = SM2Utils.\u89e3\u5bc6(b);\n\n// SM3 \u4e00\u822c\u7528\u4e8e\u6570\u5b57\u7b7e\u540d\nvar sM3Utils = new SM3Utils();\nsM3Utils.secretKey = "ASAFSDFDSGSDFSDFSDFSFSF";\nvar token= sM3Utils.\u52a0\u5bc6("123");\n\n// SM4\nvar sM4Utils = new SM4Utils();\nsM4Utils.secretKey = "BDBDBDBDBDBDBDBDBDBDBDBDBDBDBD";\n\nvar a = sM4Utils.\u52a0\u5bc6(data);\nvar a1 = sM4Utils.\u89e3\u5bc6(a);\n')),(0,i.kt)("h2",{id:"206-\u53cd\u9988\u4e0e\u5efa\u8bae"},"20.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}m.isMDXComponent=!0}}]);