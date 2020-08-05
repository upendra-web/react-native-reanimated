(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),i=(n(0),n(252)),o={id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},l={id:"migration",title:"Migrating from Reanimated 1.x",description:"Before you consider migrating, note that Reanimated 2 is an alpha release, and that we cannot guarantee the new API will remain unchanged before the stable release of version 2.",source:"@site/docs/migration.md",permalink:"/react-native-reanimated/docs/next/migration",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/migration.md",version:"next",sidebar_label:"Migration from v1",sidebar:"docs",previous:{title:"Reanimated 2.x architecture",permalink:"/react-native-reanimated/docs/next/architecture"},next:{title:"useSharedValue",permalink:"/react-native-reanimated/docs/next/api/useSharedValue"}},c=[{value:"Renamed methods:",id:"renamed-methods",children:[]}],d={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Before you consider migrating, note that Reanimated 2 is an alpha release, and that we cannot guarantee the new API will remain unchanged before the stable release of version 2.")),Object(i.b)("p",null,"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.\nWhen installing Reanimated 2, you will be able to use the old API as well as the new one.\nWe made the latest stable Reanimated 1 available from the same package with a few exceptions, as we needed to address some naming collisions.\nWhenever there was a naming collision with Reanimated 1, we'd rename the Reanimated 1 version of such method in order to keep the naming in Reanimated 2 cleaner.\nThis strategy made the most sense to us, as we are planning to slowly phase out the old API (we will keep making fixes to Reanimated 1 core but most likely stop new feature development).\nUnfortunately, it means that Reanimated 2 introduces some breaking changes to the API, where some methods pulled from Reanimated 1 changed there name.\nThankfully the list of the renamed methods is relatively short, and the renamed methods weren't too frequently used anyways."),Object(i.b)("h3",{id:"renamed-methods"},"Renamed methods:"),Object(i.b)("h4",{id:"1-interpolate-renamed-to-interpolatenode"},"1. ",Object(i.b)("inlineCode",{parentName:"h4"},"interpolate")," renamed to ",Object(i.b)("inlineCode",{parentName:"h4"},"interpolateNode")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"interpolate")," imported directly from ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",Object(i.b)("inlineCode",{parentName:"p"},"interpolateNode")," instead.\nIf you were using a class member method ",Object(i.b)("inlineCode",{parentName:"p"},"AnimatedValue.interpolate"),", no change is necessary."),Object(i.b)("h4",{id:"2-easing-renamed-to-easingnode"},"2. ",Object(i.b)("inlineCode",{parentName:"h4"},"Easing")," renamed to ",Object(i.b)("inlineCode",{parentName:"h4"},"EasingNode")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"Easing")," imported from ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",Object(i.b)("inlineCode",{parentName:"p"},"EasingNode")," instead."))}s.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,b=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?r.a.createElement(b,l(l({ref:t},d),{},{components:n})):r.a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);