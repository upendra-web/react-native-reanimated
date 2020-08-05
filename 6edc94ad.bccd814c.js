(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),i=(n(0),n(252)),o={id:"value",title:"Value",sidebar_label:"Value"},c={id:"version-1.x.x/value",title:"Value",description:"Animated.Value is a container for storing values. It's is initialized with new Value(0) constructor. For backward compatibility there are provided API for setting value after it has been initialized:",source:"@site/versioned_docs/version-1.x.x/value.md",permalink:"/react-native-reanimated/docs/value",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/value.md",version:"1.x.x",sidebar_label:"Value",sidebar:"version-1.x.x/docs",previous:{title:"Additional configuration",permalink:"/react-native-reanimated/docs/config"},next:{title:"Clock",permalink:"/react-native-reanimated/docs/clock"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Animated.Value")," is a container for storing values. It's is initialized with ",Object(i.b)("inlineCode",{parentName:"p"},"new Value(0)")," constructor. For backward compatibility there are provided API for setting value after it has been initialized:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const v = new Value(0);\n/// ...\nv.setValue(100);\n")),Object(i.b)("p",null,"While using ",Object(i.b)("inlineCode",{parentName:"p"},"Animated.Value")," in functional components it's recommended that one should wrap instantiation with ",Object(i.b)("inlineCode",{parentName:"p"},"useRef(...)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"useMemo(...)")," to use the same instance on re-render, or just simply use ",Object(i.b)("inlineCode",{parentName:"p"},"useValue")," hook:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const v = useValue(0);\n/// ...\nv.setValue(100);\n")))}s.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);