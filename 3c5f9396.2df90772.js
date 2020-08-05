(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(252)),i={},l={id:"version-1.x.x/nodes/interpolate",title:"interpolate",description:"interpolate",source:"@site/versioned_docs/version-1.x.x/nodes/interpolate.md",permalink:"/react-native-reanimated/docs/nodes/interpolate",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/versioned_docs/version-1.x.x/nodes/interpolate.md",version:"1.x.x",sidebar:"version-1.x.x/docs",previous:{title:"event",permalink:"/react-native-reanimated/docs/nodes/event"},next:{title:"interpolateColors",permalink:"/react-native-reanimated/docs/nodes/interpolateColors"}},p=[{value:"<code>interpolate</code>",id:"interpolate",children:[]}],c={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"interpolate"},Object(o.b)("inlineCode",{parentName:"h2"},"interpolate")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"interpolate(node, {\n  // Input range for the interpolation. Should be monotonically increasing.\n  inputRange: [nodeOrValue...],\n  // Output range for the interpolation, should be the same length as the input range.\n  outputRange: [nodeOrValue...],\n  // Sets the left and right extrapolate modes.\n  extrapolate?: Extrapolate.EXTEND | Extrapolate.CLAMP | Extrapolate.IDENTITY,\n  // Set the left extrapolate mode, the behavior if the input is less than the first value in inputRange.\n  extrapolateLeft?: Extrapolate.EXTEND | Extrapolate.CLAMP | Extrapolate.IDENTITY,\n  // Set the right extrapolate mode, the behavior if the input is greater than the last value in inputRange.\n  extrapolateRight?: Extrapolate.EXTEND | Extrapolate.CLAMP | Extrapolate.IDENTITY,\n})\n\nExtrapolate.EXTEND; // Will extend the range linearly.\nExtrapolate.CLAMP; // Will clamp the input value to the range.\nExtrapolate.IDENTITY; // Will return the input value if the input value is out of range.\n")),Object(o.b)("p",null,"Maps an input value within a range to an output value within a range. Also supports different types of extrapolation for when the value falls outside the range and mapping to strings. For example, if you wanted to animate a rotation you could do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"concat(\n  interpolate(node, { inputRange: [0, 360], outputRange: [0, 360] }),\n  'deg'\n);\n")),Object(o.b)("h5",{id:"note-in-order-to-interpolate-color-output-values-use-interpolatecolors-instead"},"Note: In order to interpolate color output values, use ",Object(o.b)("a",Object(r.a)({parentName:"h5"},{href:"interpolate-colors.html"}),Object(o.b)("inlineCode",{parentName:"a"},"interpolateColors"))," instead."))}u.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(b,l(l({ref:t},c),{},{components:n})):a.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);