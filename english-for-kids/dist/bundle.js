!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},77:function(t,e,r){var n=r(111);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},223:function(t,e,r){var n=r(5112),a=r(30),s=r(3070),o=n("unscopables"),i=Array.prototype;null==i[o]&&s.f(i,o,{configurable:!0,value:a(null)}),t.exports=function(t){i[o][t]=!0}},9670:function(t,e,r){var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},8533:function(t,e,r){"use strict";var n=r(2092).forEach,a=r(9341),s=r(9207),o=a("forEach"),i=s("forEach");t.exports=o&&i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,e,r){var n=r(5656),a=r(7466),s=r(1400),o=function(t){return function(e,r,o){var i,c=n(e),u=a(c.length),l=s(o,u);if(t&&r!=r){for(;u>l;)if((i=c[l++])!=i)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},2092:function(t,e,r){var n=r(9974),a=r(8361),s=r(7908),o=r(7466),i=r(5417),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,d=6==t,p=7==t,f=5==t||d;return function(m,g,v,y){for(var b,h,w=s(m),S=a(w),_=n(g,v,3),x=o(S.length),j=0,A=y||i,O=e?A(m,x):r||p?A(m,0):void 0;x>j;j++)if((f||j in S)&&(h=_(b=S[j],j,w),t))if(e)O[j]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return j;case 2:c.call(O,b)}else switch(t){case 4:return!1;case 7:c.call(O,b)}return d?-1:u||l?l:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},1194:function(t,e,r){var n=r(7293),a=r(5112),s=r(7392),o=a("species");t.exports=function(t){return s>=51||!n((function(){var e=[];return(e.constructor={})[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:function(t,e,r){"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},9207:function(t,e,r){var n=r(9781),a=r(7293),s=r(6656),o=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,e){if(s(i,t))return i[t];e||(e={});var r=[][t],u=!!s(e,"ACCESSORS")&&e.ACCESSORS,l=s(e,0)?e[0]:c,d=s(e,1)?e[1]:void 0;return i[t]=!!r&&!a((function(){if(u&&!n)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,l,d)}))}},5417:function(t,e,r){var n=r(111),a=r(3157),s=r(5112)("species");t.exports=function(t,e){var r;return a(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!a(r.prototype)?n(r)&&null===(r=r[s])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},648:function(t,e,r){var n=r(694),a=r(4326),s=r(5112)("toStringTag"),o="Arguments"==a(function(){return arguments}());t.exports=n?a:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),s))?r:o?a(e):"Object"==(n=a(e))&&"function"==typeof e.callee?"Arguments":n}},9920:function(t,e,r){var n=r(6656),a=r(3887),s=r(1236),o=r(3070);t.exports=function(t,e){for(var r=a(e),i=o.f,c=s.f,u=0;u<r.length;u++){var l=r[u];n(t,l)||i(t,l,c(e,l))}}},920:function(t,e,r){var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},994:function(t,e,r){"use strict";var n=r(383).IteratorPrototype,a=r(30),s=r(9114),o=r(3),i=r(497),c=function(){return this};t.exports=function(t,e,r){var u=e+" Iterator";return t.prototype=a(n,{next:s(1,r)}),o(t,u,!1,!0),i[u]=c,t}},8880:function(t,e,r){var n=r(9781),a=r(3070),s=r(9114);t.exports=n?function(t,e,r){return a.f(t,e,s(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,r){"use strict";var n=r(7593),a=r(3070),s=r(9114);t.exports=function(t,e,r){var o=n(e);o in t?a.f(t,o,s(0,r)):t[o]=r}},654:function(t,e,r){"use strict";var n=r(2109),a=r(994),s=r(518),o=r(674),i=r(3),c=r(8880),u=r(1320),l=r(5112),d=r(1913),p=r(497),f=r(383),m=f.IteratorPrototype,g=f.BUGGY_SAFARI_ITERATORS,v=l("iterator"),y="keys",b="values",h="entries",w=function(){return this};t.exports=function(t,e,r,l,f,S,_){a(r,e,l);var x,j,A,O=function(t){if(t===f&&M)return M;if(!g&&t in k)return k[t];switch(t){case y:case b:case h:return function(){return new r(this,t)}}return function(){return new r(this)}},L=e+" Iterator",E=!1,k=t.prototype,T=k[v]||k["@@iterator"]||f&&k[f],M=!g&&T||O(f),q="Array"==e&&k.entries||T;if(q&&(x=s(q.call(new t)),m!==Object.prototype&&x.next&&(d||s(x)===m||(o?o(x,m):"function"!=typeof x[v]&&c(x,v,w)),i(x,L,!0,!0),d&&(p[L]=w))),f==b&&T&&T.name!==b&&(E=!0,M=function(){return T.call(this)}),d&&!_||k[v]===M||c(k,v,M),p[e]=M,f)if(j={values:O(b),keys:S?M:O(y),entries:O(h)},_)for(A in j)(g||E||!(A in k))&&u(k,A,j[A]);else n({target:e,proto:!0,forced:g||E},j);return j}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,r){var n=r(7854),a=r(111),s=n.document,o=a(s)&&a(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,a,s=r(7854),o=r(8113),i=s.process,c=i&&i.versions,u=c&&c.v8;u?a=(n=u.split("."))[0]+n[1]:o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(a=n[1]),t.exports=a&&+a},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),a=r(1236).f,s=r(8880),o=r(1320),i=r(3505),c=r(9920),u=r(4705);t.exports=function(t,e){var r,l,d,p,f,m=t.target,g=t.global,v=t.stat;if(r=g?n:v?n[m]||i(m,{}):(n[m]||{}).prototype)for(l in e){if(p=e[l],d=t.noTargetGet?(f=a(r,l))&&f.value:r[l],!u(g?l:m+(v?".":"#")+l,t.forced)&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(t.sham||d&&d.sham)&&s(p,"sham",!0),o(r,l,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:function(t,e,r){var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,a){return t.call(e,r,n,a)}}return function(){return t.apply(e,arguments)}}},5005:function(t,e,r){var n=r(857),a=r(7854),s=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?s(n[t])||s(a[t]):n[t]&&n[t][e]||a[t]&&a[t][e]}},246:function(t,e,r){var n=r(648),a=r(497),s=r(5112)("iterator");t.exports=function(t){if(null!=t)return t[s]||t["@@iterator"]||a[n(t)]}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},3501:function(t){t.exports={}},490:function(t,e,r){var n=r(5005);t.exports=n("document","documentElement")},4664:function(t,e,r){var n=r(9781),a=r(7293),s=r(317);t.exports=!n&&!a((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(7293),a=r(4326),s="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?s.call(t,""):Object(t)}:Object},2788:function(t,e,r){var n=r(5465),a=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return a.call(t)}),t.exports=n.inspectSource},9909:function(t,e,r){var n,a,s,o=r(8536),i=r(7854),c=r(111),u=r(8880),l=r(6656),d=r(5465),p=r(6200),f=r(3501),m=i.WeakMap;if(o){var g=d.state||(d.state=new m),v=g.get,y=g.has,b=g.set;n=function(t,e){return e.facade=t,b.call(g,t,e),e},a=function(t){return v.call(g,t)||{}},s=function(t){return y.call(g,t)}}else{var h=p("state");f[h]=!0,n=function(t,e){return e.facade=t,u(t,h,e),e},a=function(t){return l(t,h)?t[h]:{}},s=function(t){return l(t,h)}}t.exports={set:n,get:a,has:s,enforce:function(t){return s(t)?a(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=a(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},659:function(t,e,r){var n=r(5112),a=r(497),s=n("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||o[s]===t)}},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:function(t,e,r){var n=r(7293),a=/#|\.prototype\./,s=function(t,e){var r=i[o(t)];return r==u||r!=c&&("function"==typeof e?n(e):!!e)},o=s.normalize=function(t){return String(t).replace(a,".").toLowerCase()},i=s.data={},c=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},408:function(t,e,r){var n=r(9670),a=r(659),s=r(7466),o=r(9974),i=r(246),c=r(212),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,r){var l,d,p,f,m,g,v,y=r&&r.that,b=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),S=o(e,y,1+b+w),_=function(t){return l&&c(l),new u(!0,t)},x=function(t){return b?(n(t),w?S(t[0],t[1],_):S(t[0],t[1])):w?S(t,_):S(t)};if(h)l=t;else{if("function"!=typeof(d=i(t)))throw TypeError("Target is not iterable");if(a(d)){for(p=0,f=s(t.length);f>p;p++)if((m=x(t[p]))&&m instanceof u)return m;return new u(!1)}l=d.call(t)}for(g=l.next;!(v=g.call(l)).done;){try{m=x(v.value)}catch(t){throw c(l),t}if("object"==typeof m&&m&&m instanceof u)return m}return new u(!1)}},212:function(t,e,r){var n=r(9670);t.exports=function(t){var e=t.return;if(void 0!==e)return n(e.call(t)).value}},383:function(t,e,r){"use strict";var n,a,s,o=r(518),i=r(8880),c=r(6656),u=r(5112),l=r(1913),d=u("iterator"),p=!1;[].keys&&("next"in(s=[].keys())?(a=o(o(s)))!==Object.prototype&&(n=a):p=!0),null==n&&(n={}),l||c(n,d)||i(n,d,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},497:function(t){t.exports={}},133:function(t,e,r){var n=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},8536:function(t,e,r){var n=r(7854),a=r(2788),s=n.WeakMap;t.exports="function"==typeof s&&/native code/.test(a(s))},30:function(t,e,r){var n,a=r(9670),s=r(48),o=r(748),i=r(3501),c=r(490),u=r(317),l=r(6200)("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},f=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;f=n?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=u("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var r=o.length;r--;)delete f.prototype[o[r]];return f()};i[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(d.prototype=a(t),r=new d,d.prototype=null,r[l]=t):r=f(),void 0===e?r:s(r,e)}},48:function(t,e,r){var n=r(9781),a=r(3070),s=r(9670),o=r(956);t.exports=n?Object.defineProperties:function(t,e){s(t);for(var r,n=o(e),i=n.length,c=0;i>c;)a.f(t,r=n[c++],e[r]);return t}},3070:function(t,e,r){var n=r(9781),a=r(4664),s=r(9670),o=r(7593),i=Object.defineProperty;e.f=n?i:function(t,e,r){if(s(t),e=o(e,!0),s(r),a)try{return i(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),a=r(5296),s=r(9114),o=r(5656),i=r(7593),c=r(6656),u=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=o(t),e=i(e,!0),u)try{return l(t,e)}catch(t){}if(c(t,e))return s(!a.f.call(t,e),t[e])}},8006:function(t,e,r){var n=r(6324),a=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},518:function(t,e,r){var n=r(6656),a=r(7908),s=r(6200),o=r(920),i=s("IE_PROTO"),c=Object.prototype;t.exports=o?Object.getPrototypeOf:function(t){return t=a(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},6324:function(t,e,r){var n=r(6656),a=r(5656),s=r(1318).indexOf,o=r(3501);t.exports=function(t,e){var r,i=a(t),c=0,u=[];for(r in i)!n(o,r)&&n(i,r)&&u.push(r);for(;e.length>c;)n(i,r=e[c++])&&(~s(u,r)||u.push(r));return u}},956:function(t,e,r){var n=r(6324),a=r(748);t.exports=Object.keys||function(t){return n(t,a)}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,a=n&&!r.call({1:2},1);e.f=a?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},674:function(t,e,r){var n=r(9670),a=r(77);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,s){return n(r),a(s),e?t.call(r,s):r.__proto__=s,r}}():void 0)},699:function(t,e,r){var n=r(9781),a=r(956),s=r(5656),o=r(5296).f,i=function(t){return function(e){for(var r,i=s(e),c=a(i),u=c.length,l=0,d=[];u>l;)r=c[l++],n&&!o.call(i,r)||d.push(t?[r,i[r]]:i[r]);return d}};t.exports={entries:i(!0),values:i(!1)}},3887:function(t,e,r){var n=r(5005),a=r(8006),s=r(5181),o=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(o(t)),r=s.f;return r?e.concat(r(t)):e}},857:function(t,e,r){var n=r(7854);t.exports=n},1320:function(t,e,r){var n=r(7854),a=r(8880),s=r(6656),o=r(3505),i=r(2788),c=r(9909),u=c.get,l=c.enforce,d=String(String).split("String");(t.exports=function(t,e,r,i){var c,u=!!i&&!!i.unsafe,p=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof r&&("string"!=typeof e||s(r,"name")||a(r,"name",e),(c=l(r)).source||(c.source=d.join("string"==typeof e?e:""))),t!==n?(u?!f&&t[e]&&(p=!0):delete t[e],p?t[e]=r:a(t,e,r)):p?t[e]=r:o(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||i(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,r){var n=r(7854),a=r(8880);t.exports=function(t,e){try{a(n,t,e)}catch(r){n[t]=e}return e}},3:function(t,e,r){var n=r(3070).f,a=r(6656),s=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!a(t=r?t:t.prototype,s)&&n(t,s,{configurable:!0,value:e})}},6200:function(t,e,r){var n=r(2309),a=r(9711),s=n("keys");t.exports=function(t){return s[t]||(s[t]=a(t))}},5465:function(t,e,r){var n=r(7854),a=r(3505),s="__core-js_shared__",o=n[s]||a(s,{});t.exports=o},2309:function(t,e,r){var n=r(1913),a=r(5465);(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.0",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,r){var n=r(9958),a=Math.max,s=Math.min;t.exports=function(t,e){var r=n(t);return r<0?a(r+e,0):s(r,e)}},5656:function(t,e,r){var n=r(8361),a=r(4488);t.exports=function(t){return n(a(t))}},9958:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:function(t,e,r){var n=r(9958),a=Math.min;t.exports=function(t){return t>0?a(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:function(t,e,r){var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,a;if(e&&"function"==typeof(r=t.toString)&&!n(a=r.call(t)))return a;if("function"==typeof(r=t.valueOf)&&!n(a=r.call(t)))return a;if(!e&&"function"==typeof(r=t.toString)&&!n(a=r.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},694:function(t,e,r){var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},9711:function(t){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,r){var n=r(7854),a=r(2309),s=r(6656),o=r(9711),i=r(133),c=r(3307),u=a("wks"),l=n.Symbol,d=c?l:l&&l.withoutSetter||o;t.exports=function(t){return s(u,t)||(i&&s(l,t)?u[t]=l[t]:u[t]=d("Symbol."+t)),u[t]}},2222:function(t,e,r){"use strict";var n=r(2109),a=r(7293),s=r(3157),o=r(111),i=r(7908),c=r(7466),u=r(6135),l=r(5417),d=r(1194),p=r(5112),f=r(7392),m=p("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",y=f>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=d("concat"),h=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)};n({target:"Array",proto:!0,forced:!y||!b},{concat:function(t){var e,r,n,a,s,o=i(this),d=l(o,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(h(s=-1===e?o:arguments[e])){if(p+(a=c(s.length))>g)throw TypeError(v);for(r=0;r<a;r++,p++)r in s&&u(d,p,s[r])}else{if(p>=g)throw TypeError(v);u(d,p++,s)}return d.length=p,d}})},826:function(t,e,r){"use strict";var n=r(2109),a=r(2092).find,s=r(223),o=r(9207),i="find",c=!0,u=o(i);i in[]&&Array(1).find((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!u},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(i)},9554:function(t,e,r){"use strict";var n=r(2109),a=r(8533);n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},992:function(t,e,r){"use strict";var n=r(5656),a=r(223),s=r(497),o=r(9909),i=r(654),c="Array Iterator",u=o.set,l=o.getterFor(c);t.exports=i(Array,"Array",(function(t,e){u(this,{type:c,target:n(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),s.Arguments=s.Array,a("keys"),a("values"),a("entries")},600:function(t,e,r){"use strict";var n=r(2109),a=r(8361),s=r(5656),o=r(9341),i=[].join,c=a!=Object,u=o("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(t){return i.call(s(this),void 0===t?",":t)}})},249:function(t,e,r){"use strict";var n=r(2109),a=r(2092).map,s=r(1194),o=r(9207),i=s("map"),c=o("map");n({target:"Array",proto:!0,forced:!i||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},720:function(t,e,r){var n=r(2109),a=r(699).entries;n({target:"Object",stat:!0},{entries:function(t){return a(t)}})},559:function(t,e,r){var n=r(2109),a=r(408),s=r(6135);n({target:"Object",stat:!0},{fromEntries:function(t){var e={};return a(t,(function(t,r){s(e,t,r)}),{AS_ENTRIES:!0}),e}})},4747:function(t,e,r){var n=r(7854),a=r(8324),s=r(8533),o=r(8880);for(var i in a){var c=n[i],u=c&&c.prototype;if(u&&u.forEach!==s)try{o(u,"forEach",s)}catch(t){u.forEach=s}}}},e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";r(9554),r(4747);var t={verbs:[{image:"assets/images/cards/verbs/force.png",alt:"force",word:"force",translation:"Принуждать",audioSrc:"assets/mp3/verbs/force.mp3"},{image:"assets/images/cards/verbs/get.png",alt:"get",word:"get",translation:"получать",audioSrc:"assets/mp3/verbs/get.mp3"},{alt:"guess",word:"guess",translation:"догадываться",image:"assets/images/cards/verbs/guess.png",audioSrc:"assets/mp3/verbs/guess.mp3"},{alt:"increase",word:"increase",translation:"увеличиваться",image:"assets/images/cards/verbs/increase.png",audioSrc:"assets/mp3/verbs/increase.mp3"},{alt:"inform",word:"inform",translation:"сообщать",image:"assets/images/cards/verbs/inform.png",audioSrc:"assets/mp3/verbs/inform.mp3"},{alt:"keep",word:"keep",translation:"хранить",image:"assets/images/cards/verbs/keep.png",audioSrc:"assets/mp3/verbs/keep.mp3"},{alt:"lead",word:"lead",translation:"вести",image:"assets/images/cards/verbs/lead.png",audioSrc:"assets/mp3/verbs/lead.mp3"},{alt:"reckon",word:"reckon",translation:"полагать",image:"assets/images/cards/verbs/reckon.png",audioSrc:"assets/mp3/verbs/reckon.mp3"}],adverbs:[{alt:"absolutely",word:"absolutely",translation:"абсолютно",image:"assets/images/cards/adverbs/absolutely.jpg",audioSrc:"assets/mp3/adverbs/absolutely.mp3"},{alt:"almost",word:"almost",translation:"почти",image:"assets/images/cards/adverbs/almost.png",audioSrc:"assets/mp3/adverbs/almost.mp3"},{alt:"always",word:"always",translation:"всегда",image:"assets/images/cards/adverbs/always.png",audioSrc:"assets/mp3/adverbs/always.mp3"},{alt:"blindly",word:"blindly",translation:"слепо",image:"assets/images/cards/adverbs/blindly.png",audioSrc:"assets/mp3/adverbs/blindly.mp3"},{alt:"briefly",word:"briefly",translation:"кратко",image:"assets/images/cards/adverbs/briefly.png",audioSrc:"assets/mp3/adverbs/briefly.mp3"},{alt:"broadly",word:"broadly",translation:"широко",image:"assets/images/cards/adverbs/broadly.png",audioSrc:"assets/mp3/adverbs/broadly.mp3"},{alt:"carefully",word:"carefully",translation:"тщательно",image:"assets/images/cards/adverbs/carefully.png",audioSrc:"assets/mp3/adverbs/carefully.mp3"},{alt:"certainly",word:"certainly",translation:"безусловно",image:"assets/images/cards/adverbs/certainly.png",audioSrc:"assets/mp3/adverbs/certainly.mp3"}],adjectives:[{alt:"awful",word:"awful",translation:"ужасный",image:"assets/images/cards/adjectives/awful.png",audioSrc:"assets/mp3/adjectives/awful.mp3"},{alt:"popular",word:"popular",translation:"популярный",image:"assets/images/cards/adjectives/popular.png",audioSrc:"assets/mp3/adjectives/popular.mp3"},{alt:"possible",word:"possible",translation:"возможно",image:"assets/images/cards/adjectives/possible.jpg",audioSrc:"assets/mp3/adjectives/possible.mp3"},{alt:"private",word:"private",translation:"приватный",image:"assets/images/cards/adjectives/private.png",audioSrc:"assets/mp3/adjectives/private.mp3"},{alt:"recent",word:"recent",translation:"недавний",image:"assets/images/cards/adjectives/recent.png",audioSrc:"assets/mp3/adjectives/recent.mp3"},{alt:"responsible",word:"responsible",translation:"ответственный",image:"assets/images/cards/adjectives/responsible.png",audioSrc:"assets/mp3/adjectives/responsible.mp3"},{alt:"safe",word:"safe",translation:"безопасный",image:"assets/images/cards/adjectives/safe.png",audioSrc:"assets/mp3/adjectives/safe.mp3"},{alt:"same",word:"same",translation:"одинаковый",image:"assets/images/cards/adjectives/same.png",audioSrc:"assets/mp3/adjectives/same.mp3"}],preposition:[{alt:"about",word:"about",translation:"около",image:"assets/images/cards/preposition/About.png",audioSrc:"assets/mp3/preposition/About.mp3"},{alt:"above",word:"above",translation:"над",image:"assets/images/cards/preposition/above.png",audioSrc:"assets/mp3/preposition/above.mp3"},{alt:"according to",word:"according to",translation:"в соответствии с",image:"assets/images/cards/preposition/according-to.png",audioSrc:"assets/mp3/preposition/according-to.mp3"},{alt:"across",word:"across",translation:"через",image:"assets/images/cards/preposition/across.png",audioSrc:"assets/mp3/preposition/across.mp3"},{alt:"after",word:"after",translation:"после",image:"assets/images/cards/preposition/after.png",audioSrc:"assets/mp3/preposition/after.mp3"},{alt:"against",word:"against",translation:"против",image:"assets/images/cards/preposition/against.png",audioSrc:"assets/mp3/preposition/against.mp3"},{alt:"along",word:"along",translation:"вдоль",image:"assets/images/cards/preposition/along.png",audioSrc:"assets/mp3/preposition/along.mp3"},{alt:"although",word:"although",translation:"несмотря на то что",image:"assets/images/cards/preposition/although.png",audioSrc:"assets/mp3/preposition/although.mp3"}],itTerms:[{alt:"adapt",word:"adapt",translation:"адаптировать",image:"assets/images/cards/it-terms/adapt.png",audioSrc:"assets/mp3/it-terms/adapt.mp3"},{alt:"archive",word:"archive",translation:"архив",image:"assets/images/cards/it-terms/archive.png",audioSrc:"assets/mp3/it-terms/archive.mp3"},{alt:"attempt",word:"attempt",translation:"попытка",image:"assets/images/cards/it-terms/attempt.png",audioSrc:"assets/mp3/it-terms/attempt.mp3"},{alt:"binary",word:"binary",translation:"двоичный",image:"assets/images/cards/it-terms/binary.png",audioSrc:"assets/mp3/it-terms/binary.mp3"},{alt:"buffer",word:"buffer",translation:"буфер",image:"assets/images/cards/it-terms/buffer.png",audioSrc:"assets/mp3/it-terms/buffer.mp3"},{alt:"cache",word:"cache",translation:"кэш",image:"assets/images/cards/it-terms/cache.png",audioSrc:"assets/mp3/it-terms/cache.mp3"},{alt:"cancel",word:"cancel",translation:"отмена",image:"assets/images/cards/it-terms/cancel.png",audioSrc:"assets/mp3/it-terms/cancel.mp3"},{alt:"capacity",word:"capacity",translation:"емкость",image:"assets/images/cards/it-terms/capacity.png",audioSrc:"assets/mp3/it-terms/capacity.mp3"}],vegetables:[{alt:"anise",word:"anise",translation:"анис",image:"assets/images/cards/vegetables/anise.png",audioSrc:"assets/mp3/vegetables/anise.mp3"},{alt:"artichoke",word:"artichoke",translation:"артишок",image:"assets/images/cards/vegetables/artichoke.png",audioSrc:"assets/mp3/vegetables/artichoke.mp3"},{alt:"arugula",word:"arugula",translation:"руккола",image:"assets/images/cards/vegetables/arugula.png",audioSrc:"assets/mp3/vegetables/arugula.mp3"},{alt:"asparagus",word:"asparagus",translation:"спаржа",image:"assets/images/cards/vegetables/asparagus.png",audioSrc:"assets/mp3/vegetables/asparagus.mp3"},{alt:"avocado",word:"avocado",translation:"авакадо",image:"assets/images/cards/vegetables/avocado.png",audioSrc:"assets/mp3/vegetables/avocado.mp3"},{alt:"basil",word:"basil",translation:"базилик",image:"assets/images/cards/vegetables/basil.png",audioSrc:"assets/mp3/vegetables/basil.mp3"},{alt:"beans",word:"beans",translation:"фасоль",image:"assets/images/cards/vegetables/beans.png",audioSrc:"assets/mp3/vegetables/beans.mp3"},{alt:"bean-sprouts",word:"bean-sprouts",translation:"бобовые ростки",image:"assets/images/cards/vegetables/bean-sprouts.png",audioSrc:"assets/mp3/vegetables/bean-sprouts.mp3"}],collision:[{alt:"behavior",word:"behavior",translation:"анис",image:"assets/images/cards/collision/behavior.png",audioSrc:"assets/mp3/collision/behavior.mp3"},{alt:"bounce",word:"bounce",translation:"подпрыгивать",image:"assets/images/cards/collision/bounce.png",audioSrc:"assets/mp3/collision/bounce.mp3"},{alt:"collision-process",word:"collision-process",translation:"процесс столкновения",image:"assets/images/cards/collision/collision-process.png",audioSrc:"assets/mp3/collision/collision-process.mp3"},{alt:"combination",word:"combination",translation:"сочетание",image:"assets/images/cards/collision/combination.png",audioSrc:"assets/mp3/collision/combination.mp3"},{alt:"concept",word:"concept",translation:"концепция",image:"assets/images/cards/collision/concept.png",audioSrc:"assets/mp3/collision/concept.mp3"},{alt:"cradle",word:"cradle",translation:"колыбель",image:"assets/images/cards/collision/cradle.png",audioSrc:"assets/mp3/collision/cradle.mp3"},{alt:"doubling",word:"doubling",translation:"удвоение",image:"assets/images/cards/collision/doubling.png",audioSrc:"assets/mp3/collision/doubling.mp3"},{alt:"elastic-collision",word:"elastic-collision",translation:"упругое столкновение",image:"assets/images/cards/collision/elastic-collision.png",audioSrc:"assets/mp3/collision/elastic-collision.mp3"}],bones:[{alt:"bone Marrow",word:"bone Marrow",translation:"Костный мозг",image:"assets/images/cards/bones/bone-Marrow.png",audioSrc:"assets/mp3/bones/bone-Marrow.mp3"},{alt:"carpals",word:"carpals",translation:"запястья",image:"assets/images/cards/bones/carpals.png",audioSrc:"assets/mp3/bones/carpals.mp3"},{alt:"clavicle",word:"clavicle",translation:"ключица",image:"assets/images/cards/bones/clavicle.png",audioSrc:"assets/mp3/bones/clavicle.mp3"},{alt:"coccyx",word:"coccyx",translation:"копчик",image:"assets/images/cards/bones/coccyx.png",audioSrc:"assets/mp3/bones/coccyx.mp3"},{alt:"femur",word:"femur",translation:"бедренная кость",image:"assets/images/cards/bones/femur.png",audioSrc:"assets/mp3/bones/femur.mp3"},{alt:"human tissue",word:"human tissue",translation:"человеческая ткань",image:"assets/images/cards/bones/human-tissue.png",audioSrc:"assets/mp3/bones/human-tissue.mp3"},{alt:"humerus",word:"humerus",translation:"плечевая кость",image:"assets/images/cards/bones/humerus.png",audioSrc:"assets/mp3/bones/humerus.mp3"},{alt:"fibula",word:"fibula",translation:"малоберцовая кость",image:"assets/images/cards/bones/fibula.png",audioSrc:"assets/mp3/bones/fibula.mp3"}]};function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r(2222);var n=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.parent=e,this.data=r,this.cardData={asked:0,hit:0,miss:0,wrong:0,train:0}}var r,n;return r=t,(n=[{key:"render",value:function(){var t=this.data,e=t.image,r=t.alt,n=t.word,a=t.translation,s=t.audioSrc,o=document.createElement("div");o.classList.add("card"),o.innerHTML='\n    <div class="card__inner" data-word="'.concat(n,'">\n      <div class="card__front">\n        <img class="card__img" src="').concat(e,'" alt="').concat(r,'">\n        <div class="card__info">\n          <h2 class="card__title">').concat(n,'</h2>\n        </div>\n        <div class="card__rotate--btn">\n          <img class="card__rotate--icon" src="assets/images/rotate.svg" alt="rotate">\n        </div>\n      </div>\n      <div class="card__back">\n        <img class="card__img" src="').concat(e,'" alt="').concat(r,'">\n        <h2 class="card__title">').concat(a,'</h2>\n      </div>\n      <audio src="').concat(s,'"></audio>\n    </div>\n    '),this.parent.append(o)}}])&&e(r.prototype,n),t}();function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,s=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){a=!0,s=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw s}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(){delete localStorage.wordStats}r(826),r(992),r(600),r(249),r(720),r(559);var c=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.parent=e,this.words=JSON.parse(localStorage.wordStats||0)||Object.fromEntries(Object.entries(r).map((function(t){var e=a(t,2);return[e[0],e[1].map((function(t){return{word:t.word,asked:0,hit:0,miss:0,train:0}}))]})))}var e,r;return e=t,(r=[{key:"render",value:function(){var t=document.createElement("section");t.classList.add("statistics");var e=document.createElement("div");e.classList.add("statistics__btns"),t.innerHTML='\n    <div class="statistics__row" data-rev="col">\n      <div class="statistics__title" data-rev="col">Category / Word</div>\n      <div class="statistics__ask" data-rev="col">Asked</div>\n      <div class="statistics__hit" data-rev="col">Hit</div>\n      <div class="statistics__miss" data-rev="col">Miss</div>\n      <div class="statistics__persent" data-rev="col">% Wrong</div>\n      <div class="statistics__train" data-rev="col">Train</div>\n    </div>\n\n    '.concat(Object.entries(this.words).map((function(t){var e=a(t,2),r=e[0],n=e[1];return'\n      <div class="statistics__category">'.concat(r,"</div>\n      ").concat(n.map((function(t){var e=t.word,r=t.asked,n=t.hit,a=t.miss,s=t.train;return'\n        <div class="statistics__row">\n          <div class="name">'.concat(e,'</div>\n          <div class="asked">').concat(r,'</div>\n          <div class="hits">').concat(n,'</div>\n          <div class="miss">').concat(a,'</div>\n          <div class="percents">').concat(Math.round(a/(n+a)*100)||0,'</div>\n          <div class="train">').concat(s,"</div>\n        </div>\n      ")})).join(""),"\n    ")})).join(""),"\n    "),e.innerHTML='\n    <div class="statistics__wrraper">\n      <button class="statistics__btn">Repeat difficult words</button>\n      <button class="statistics__btn-del">Reset</button>\n    </div>\n  ',this.parent.append(t),this.parent.after(e),document.querySelector(".statistics__btn-del").addEventListener("click",i)}},{key:"increase",value:function(t,e,r){this.words[t].find((function(t){return t.word===e}))[r]+=1,localStorage.wordStats=JSON.stringify(this.words)}}])&&o(e.prototype,r),t}();function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=document.querySelector(".cards"),d=document.querySelectorAll(".category"),p=document.querySelector(".navigation"),f=document.querySelector(".switcher"),m=f.querySelector(".switcher__input"),g=document.querySelector(".play"),v=g.querySelector(".play__btn"),y=g.querySelector(".play__slider"),b=g.querySelector(".play__input"),h=document.querySelector(".statistic__link"),w=new Audio("assets/mp3/correct.mp3"),S=new Audio("assets/mp3/error.mp3"),_=new Audio("assets/mp3/success.mp3"),x=new Audio("assets/mp3/failure.mp3"),j=new c(document.querySelector(".container-stat"),t);j.render();var A={index:null,count:0,gameMode:!1,cards:[],correctAnswer:0,wrongAnswer:0};function O(t){t.querySelector("audio").play()}function L(){var t=p.querySelector(".menu__item-selected");return!!t&&t.firstElementChild.dataset.id}function E(){A.cards.length?(A.next=A.cards.pop(),j.increase(L(),A.next.dataset.word,"asked"),O(A.next)):A.wrongAnswer?function(){document.body.classList.add("overflowHidden");var t=document.querySelector(".figlos"),e=document.querySelector(".dialog"),r=document.querySelector(".dialog__answer");t.hidden=!1,x.play(),r.textContent="Wrong answer: ".concat(A.wrongAnswer),e.showModal()}():A.wrongAnswer||function(){document.body.classList.add("overflowHidden");var t=document.querySelector(".figwin"),e=document.querySelector(".dialog-win");t.hidden=!1,_.play(),e.showModal()}()}function k(){var t=document.querySelector(".game__start");l.classList.remove("cards__play"),y.classList.remove("play__active"),g.classList.remove("active"),t.hidden=!0,v.hidden=!0}function T(){var t=document.querySelector(".game__start");A.gameMode&&l.querySelector(".card")?(v.hidden=!1,b.checked=!0,t.hidden=!1):A.gameMode||(t.hidden=!0,v.hidden=!0)}function M(e){var r;d.forEach((function(t){return t.setAttribute("hidden","")})),l.querySelectorAll(".card").forEach((function(t){return t.remove()})),null===(r=p.querySelector(".menu__item-selected"))||void 0===r||r.classList.remove("menu__item-selected"),p.querySelector('[data-id="'.concat(e,'"]')).parentElement.classList.add("menu__item-selected");for(var a=t[e],s=0;s<a.length;s+=1)new n(document.querySelector(".cards"),a[s]).render()}function q(t){null===t.target.closest(".card__rotate")&&(l.querySelector(".card__rotate").classList.remove("card__rotate"),document.body.removeEventListener("mousemove",q))}function P(t){var e=document.querySelector(".answers"),r=document.createElement("img");r.src="./assets/images/star".concat(t?"-win":"",".svg"),r.alt="star",e.prepend(r)}f.addEventListener("click",(function(){var t=document.querySelectorAll(".category__inner"),e=document.querySelectorAll(".card__inner"),r=document.querySelector(".answers");m.checked=!m.checked,A.gameMode=!A.gameMode,r.innerHTML="",l.classList.add("cards__play"),T(),A.gameMode?t.forEach((function(t){return t.classList.add("category__inner-playmode")})):(t.forEach((function(t){return t.classList.remove("category__inner-playmode")})),e.forEach((function(t){return t.classList.remove("card__inner-checked")})),A.wrongAnswer=0,k())})),document.body.addEventListener("click",(function(t){var e=document.querySelector(".humb"),r=document.querySelector(".menu"),n=document.querySelector(".menu__list");t.target.closest(".humb")?(e.classList.toggle("humb__active"),r.classList.toggle("menu__active")):t.target!==n&&t.target!==r&&(e.classList.remove("humb__active"),r.classList.remove("menu__active"))})),l.addEventListener("click",(function(t){if(t.target!==l){var e=t.target.closest(".card__inner");t.target.closest(".category")?(M(t.target.closest(".category").id),T()):"rotate"===t.target.alt?function(t){var e=t;e.classList.add("card__rotate"),e.ontransitionend=function(){document.body.addEventListener("mousemove",q),e.ontransitionend=null}}(e):e&&!A.gameMode?(O(e),j.increase(L(),e.dataset.word,"train")):e&&A.gameMode&&!b.checked&&function(t){if(t===A.next)A.count+=1,A.correctAnswer+=1,P(1),j.increase(L(),t.dataset.word,"hit"),t.classList.add("card__inner-checked"),w.play(),setTimeout((function(){return E()}),500);else{if(t.classList.contains("card__inner-checked"))return;P(),j.increase(L(),A.next.dataset.word,"miss"),A.wrongAnswer+=1,S.play()}}(e)}})),p.addEventListener("click",(function(t){if("A"===t.target.tagName){var e,r=t.target.dataset.id;"main"===r?(l.querySelectorAll(".card").forEach((function(t){return t.remove()})),d.forEach((function(t){return t.removeAttribute("hidden")})),k(),null===(e=p.querySelector(".menu__item-selected"))||void 0===e||e.classList.remove("menu__item-selected")):(M(r),k(),T(),A.gameMode&&l.classList.add("cards__play"))}})),g.addEventListener("click",(function(){var t;b.checked?(v.hidden=!0,b.checked=!1,y.classList.add("play__active"),g.classList.add("active"),A.cards=(t=document.querySelectorAll(".card__inner"),function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort((function(){return Math.random()-.5})),E()):O(A.next)})),h.addEventListener("click",(function(){var t=document.querySelector(".statistics"),e=document.querySelector(".statistics__btns");t.classList.toggle("statistics__active"),e.classList.toggle("statistics__btns-active")}))}()}();
//# sourceMappingURL=bundle.js.map