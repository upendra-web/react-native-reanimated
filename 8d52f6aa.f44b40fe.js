(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{209:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(9),a=(t(0),t(252)),i={},c={id:"version-1.x.x/nodes/not",title:"not",description:"not",source:"@site/versioned_docs/version-1.x.x/nodes/not.md",permalink:"/react-native-reanimated/docs/nodes/not",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/nodes/not.md",version:"1.x.x",sidebar:"version-1.x.x/docs",previous:{title:"neq",permalink:"/react-native-reanimated/docs/nodes/neq"},next:{title:"or",permalink:"/react-native-reanimated/docs/nodes/or"}},p=[{value:"<code>not</code>",id:"not",children:[]}],u={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"not"},Object(a.b)("inlineCode",{parentName:"h2"},"not")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"not(node);\n")),Object(a.b)("p",null,"Returns ",Object(a.b)("inlineCode",{parentName:"p"},"1"),' if the given node evaluates to a "falsy" value and ',Object(a.b)("inlineCode",{parentName:"p"},"0")," otherwise."))}s.isMDXComponent=!0},252:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),f=r,b=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return t?o.a.createElement(b,c(c({ref:n},u),{},{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);