!function(){var e={3099:function(e){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},9670:function(e,t,a){var r=a(111);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},8533:function(e,t,a){"use strict";var r=a(2092).forEach,s=a(9341),n=a(9207),o=s("forEach"),i=n("forEach");e.exports=o&&i?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},1318:function(e,t,a){var r=a(5656),s=a(7466),n=a(1400),o=function(e){return function(t,a,o){var i,c=r(t),u=s(c.length),l=n(o,u);if(e&&a!=a){for(;u>l;)if((i=c[l++])!=i)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===a)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},2092:function(e,t,a){var r=a(9974),s=a(8361),n=a(7908),o=a(7466),i=a(5417),c=[].push,u=function(e){var t=1==e,a=2==e,u=3==e,l=4==e,d=6==e,p=7==e,m=5==e||d;return function(f,g,v,b){for(var y,h,S=n(f),w=s(S),_=r(g,v,3),x=o(w.length),L=0,j=b||i,A=t?j(f,x):a||p?j(f,0):void 0;x>L;L++)if((m||L in w)&&(h=_(y=w[L],L,S),e))if(t)A[L]=h;else if(h)switch(e){case 3:return!0;case 5:return y;case 6:return L;case 2:c.call(A,y)}else switch(e){case 4:return!1;case 7:c.call(A,y)}return d?-1:u||l?l:A}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},1194:function(e,t,a){var r=a(7293),s=a(5112),n=a(7392),o=s("species");e.exports=function(e){return n>=51||!r((function(){var t=[];return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},9341:function(e,t,a){"use strict";var r=a(7293);e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},9207:function(e,t,a){var r=a(9781),s=a(7293),n=a(6656),o=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(n(i,e))return i[e];t||(t={});var a=[][e],u=!!n(t,"ACCESSORS")&&t.ACCESSORS,l=n(t,0)?t[0]:c,d=n(t,1)?t[1]:void 0;return i[e]=!!a&&!s((function(){if(u&&!r)return!0;var e={length:-1};u?o(e,1,{enumerable:!0,get:c}):e[1]=1,a.call(e,l,d)}))}},5417:function(e,t,a){var r=a(111),s=a(3157),n=a(5112)("species");e.exports=function(e,t){var a;return s(e)&&("function"!=typeof(a=e.constructor)||a!==Array&&!s(a.prototype)?r(a)&&null===(a=a[n])&&(a=void 0):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},9920:function(e,t,a){var r=a(6656),s=a(3887),n=a(1236),o=a(3070);e.exports=function(e,t){for(var a=s(t),i=o.f,c=n.f,u=0;u<a.length;u++){var l=a[u];r(e,l)||i(e,l,c(t,l))}}},8880:function(e,t,a){var r=a(9781),s=a(3070),n=a(9114);e.exports=r?function(e,t,a){return s.f(e,t,n(1,a))}:function(e,t,a){return e[t]=a,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6135:function(e,t,a){"use strict";var r=a(7593),s=a(3070),n=a(9114);e.exports=function(e,t,a){var o=r(t);o in e?s.f(e,o,n(0,a)):e[o]=a}},9781:function(e,t,a){var r=a(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,a){var r=a(7854),s=a(111),n=r.document,o=s(n)&&s(n.createElement);e.exports=function(e){return o?n.createElement(e):{}}},8324:function(e){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:function(e,t,a){var r=a(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,a){var r,s,n=a(7854),o=a(8113),i=n.process,c=i&&i.versions,u=c&&c.v8;u?s=(r=u.split("."))[0]+r[1]:o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(s=r[1]),e.exports=s&&+s},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,a){var r=a(7854),s=a(1236).f,n=a(8880),o=a(1320),i=a(3505),c=a(9920),u=a(4705);e.exports=function(e,t){var a,l,d,p,m,f=e.target,g=e.global,v=e.stat;if(a=g?r:v?r[f]||i(f,{}):(r[f]||{}).prototype)for(l in t){if(p=t[l],d=e.noTargetGet?(m=s(a,l))&&m.value:a[l],!u(g?l:f+(v?".":"#")+l,e.forced)&&void 0!==d){if(typeof p==typeof d)continue;c(p,d)}(e.sham||d&&d.sham)&&n(p,"sham",!0),o(a,l,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(e){return!0}}},9974:function(e,t,a){var r=a(3099);e.exports=function(e,t,a){if(r(e),void 0===t)return e;switch(a){case 0:return function(){return e.call(t)};case 1:return function(a){return e.call(t,a)};case 2:return function(a,r){return e.call(t,a,r)};case 3:return function(a,r,s){return e.call(t,a,r,s)}}return function(){return e.apply(t,arguments)}}},5005:function(e,t,a){var r=a(857),s=a(7854),n=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?n(r[e])||n(s[e]):r[e]&&r[e][t]||s[e]&&s[e][t]}},7854:function(e,t,a){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof a.g&&a.g)||function(){return this}()||Function("return this")()},6656:function(e){var t={}.hasOwnProperty;e.exports=function(e,a){return t.call(e,a)}},3501:function(e){e.exports={}},4664:function(e,t,a){var r=a(9781),s=a(7293),n=a(317);e.exports=!r&&!s((function(){return 7!=Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,a){var r=a(7293),s=a(4326),n="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?n.call(e,""):Object(e)}:Object},2788:function(e,t,a){var r=a(5465),s=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return s.call(e)}),e.exports=r.inspectSource},9909:function(e,t,a){var r,s,n,o=a(8536),i=a(7854),c=a(111),u=a(8880),l=a(6656),d=a(5465),p=a(6200),m=a(3501),f=i.WeakMap;if(o){var g=d.state||(d.state=new f),v=g.get,b=g.has,y=g.set;r=function(e,t){return t.facade=e,y.call(g,e,t),t},s=function(e){return v.call(g,e)||{}},n=function(e){return b.call(g,e)}}else{var h=p("state");m[h]=!0,r=function(e,t){return t.facade=e,u(e,h,t),t},s=function(e){return l(e,h)?e[h]:{}},n=function(e){return l(e,h)}}e.exports={set:r,get:s,has:n,enforce:function(e){return n(e)?s(e):r(e,{})},getterFor:function(e){return function(t){var a;if(!c(t)||(a=s(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return a}}}},3157:function(e,t,a){var r=a(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4705:function(e,t,a){var r=a(7293),s=/#|\.prototype\./,n=function(e,t){var a=i[o(e)];return a==u||a!=c&&("function"==typeof t?r(t):!!t)},o=n.normalize=function(e){return String(e).replace(s,".").toLowerCase()},i=n.data={},c=n.NATIVE="N",u=n.POLYFILL="P";e.exports=n},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},133:function(e,t,a){var r=a(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},8536:function(e,t,a){var r=a(7854),s=a(2788),n=r.WeakMap;e.exports="function"==typeof n&&/native code/.test(s(n))},3070:function(e,t,a){var r=a(9781),s=a(4664),n=a(9670),o=a(7593),i=Object.defineProperty;t.f=r?i:function(e,t,a){if(n(e),t=o(t,!0),n(a),s)try{return i(e,t,a)}catch(e){}if("get"in a||"set"in a)throw TypeError("Accessors not supported");return"value"in a&&(e[t]=a.value),e}},1236:function(e,t,a){var r=a(9781),s=a(5296),n=a(9114),o=a(5656),i=a(7593),c=a(6656),u=a(4664),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=o(e),t=i(t,!0),u)try{return l(e,t)}catch(e){}if(c(e,t))return n(!s.f.call(e,t),e[t])}},8006:function(e,t,a){var r=a(6324),s=a(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,a){var r=a(6656),s=a(5656),n=a(1318).indexOf,o=a(3501);e.exports=function(e,t){var a,i=s(e),c=0,u=[];for(a in i)!r(o,a)&&r(i,a)&&u.push(a);for(;t.length>c;)r(i,a=t[c++])&&(~n(u,a)||u.push(a));return u}},5296:function(e,t){"use strict";var a={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!a.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:a},3887:function(e,t,a){var r=a(5005),s=a(8006),n=a(5181),o=a(9670);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(o(e)),a=n.f;return a?t.concat(a(e)):t}},857:function(e,t,a){var r=a(7854);e.exports=r},1320:function(e,t,a){var r=a(7854),s=a(8880),n=a(6656),o=a(3505),i=a(2788),c=a(9909),u=c.get,l=c.enforce,d=String(String).split("String");(e.exports=function(e,t,a,i){var c,u=!!i&&!!i.unsafe,p=!!i&&!!i.enumerable,m=!!i&&!!i.noTargetGet;"function"==typeof a&&("string"!=typeof t||n(a,"name")||s(a,"name",t),(c=l(a)).source||(c.source=d.join("string"==typeof t?t:""))),e!==r?(u?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=a:s(e,t,a)):p?e[t]=a:o(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||i(this)}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,a){var r=a(7854),s=a(8880);e.exports=function(e,t){try{s(r,e,t)}catch(a){r[e]=t}return t}},6200:function(e,t,a){var r=a(2309),s=a(9711),n=r("keys");e.exports=function(e){return n[e]||(n[e]=s(e))}},5465:function(e,t,a){var r=a(7854),s=a(3505),n="__core-js_shared__",o=r[n]||s(n,{});e.exports=o},2309:function(e,t,a){var r=a(1913),s=a(5465);(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,a){var r=a(9958),s=Math.max,n=Math.min;e.exports=function(e,t){var a=r(e);return a<0?s(a+t,0):n(a,t)}},5656:function(e,t,a){var r=a(8361),s=a(4488);e.exports=function(e){return r(s(e))}},9958:function(e){var t=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:t)(e)}},7466:function(e,t,a){var r=a(9958),s=Math.min;e.exports=function(e){return e>0?s(r(e),9007199254740991):0}},7908:function(e,t,a){var r=a(4488);e.exports=function(e){return Object(r(e))}},7593:function(e,t,a){var r=a(111);e.exports=function(e,t){if(!r(e))return e;var a,s;if(t&&"function"==typeof(a=e.toString)&&!r(s=a.call(e)))return s;if("function"==typeof(a=e.valueOf)&&!r(s=a.call(e)))return s;if(!t&&"function"==typeof(a=e.toString)&&!r(s=a.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},9711:function(e){var t=0,a=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+a).toString(36)}},3307:function(e,t,a){var r=a(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,a){var r=a(7854),s=a(2309),n=a(6656),o=a(9711),i=a(133),c=a(3307),u=s("wks"),l=r.Symbol,d=c?l:l&&l.withoutSetter||o;e.exports=function(e){return n(u,e)||(i&&n(l,e)?u[e]=l[e]:u[e]=d("Symbol."+e)),u[e]}},2222:function(e,t,a){"use strict";var r=a(2109),s=a(7293),n=a(3157),o=a(111),i=a(7908),c=a(7466),u=a(6135),l=a(5417),d=a(1194),p=a(5112),m=a(7392),f=p("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=m>=51||!s((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),y=d("concat"),h=function(e){if(!o(e))return!1;var t=e[f];return void 0!==t?!!t:n(e)};r({target:"Array",proto:!0,forced:!b||!y},{concat:function(e){var t,a,r,s,n,o=i(this),d=l(o,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(h(n=-1===t?o:arguments[t])){if(p+(s=c(n.length))>g)throw TypeError(v);for(a=0;a<s;a++,p++)a in n&&u(d,p,n[a])}else{if(p>=g)throw TypeError(v);u(d,p++,n)}return d.length=p,d}})},9554:function(e,t,a){"use strict";var r=a(2109),s=a(8533);r({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},4747:function(e,t,a){var r=a(7854),s=a(8324),n=a(8533),o=a(8880);for(var i in s){var c=r[i],u=c&&c.prototype;if(u&&u.forEach!==n)try{o(u,"forEach",n)}catch(e){u.forEach=n}}}},t={};function a(r){if(t[r])return t[r].exports;var s=t[r]={exports:{}};return e[r](s,s.exports,a),s.exports}a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),function(){"use strict";a(9554),a(4747);var e={verbs:[{image:"assets/images/cards/verbs/force.png",alt:"force",word:"force",translation:"Принуждать",audioSrc:"assets/mp3/verbs/force.mp3"},{image:"assets/images/cards/verbs/get.png",alt:"get",word:"get",translation:"получать",audioSrc:"assets/mp3/verbs/get.mp3"},{alt:"guess",word:"guess",translation:"догадываться",image:"assets/images/cards/verbs/guess.png",audioSrc:"assets/mp3/verbs/guess.mp3"},{alt:"increase",word:"increase",translation:"увеличиваться",image:"assets/images/cards/verbs/increase.png",audioSrc:"assets/mp3/verbs/increase.mp3"},{alt:"inform",word:"inform",translation:"сообщать",image:"assets/images/cards/verbs/inform.png",audioSrc:"assets/mp3/verbs/inform.mp3"},{alt:"keep",word:"keep",translation:"хранить",image:"assets/images/cards/verbs/keep.png",audioSrc:"assets/mp3/verbs/keep.mp3"},{alt:"lead",word:"lead",translation:"вести",image:"assets/images/cards/verbs/lead.png",audioSrc:"assets/mp3/verbs/lead.mp3"},{alt:"reckon",word:"reckon",translation:"полагать",image:"assets/images/cards/verbs/reckon.png",audioSrc:"assets/mp3/verbs/reckon.mp3"}],adverbs:[{alt:"absolutely",word:"absolutely",translation:"абсолютно",image:"assets/images/cards/adverbs/absolutely.jpg",audioSrc:"assets/mp3/adverbs/absolutely.mp3"},{alt:"almost",word:"almost",translation:"почти",image:"assets/images/cards/adverbs/almost.png",audioSrc:"assets/mp3/adverbs/almost.mp3"},{alt:"always",word:"always",translation:"всегда",image:"assets/images/cards/adverbs/always.png",audioSrc:"assets/mp3/adverbs/always.mp3"},{alt:"blindly",word:"blindly",translation:"слепо",image:"assets/images/cards/adverbs/blindly.png",audioSrc:"assets/mp3/adverbs/blindly.mp3"},{alt:"briefly",word:"briefly",translation:"кратко",image:"assets/images/cards/adverbs/briefly.png",audioSrc:"assets/mp3/adverbs/briefly.mp3"},{alt:"broadly",word:"broadly",translation:"широко",image:"assets/images/cards/adverbs/broadly.png",audioSrc:"assets/mp3/adverbs/broadly.mp3"},{alt:"carefully",word:"carefully",translation:"тщательно",image:"assets/images/cards/adverbs/carefully.png",audioSrc:"assets/mp3/adverbs/carefully.mp3"},{alt:"certainly",word:"certainly",translation:"безусловно",image:"assets/images/cards/adverbs/certainly.png",audioSrc:"assets/mp3/adverbs/certainly.mp3"}],adjectives:[{alt:"awful",word:"awful",translation:"ужасный",image:"assets/images/cards/adjectives/awful.png",audioSrc:"assets/mp3/adjectives/awful.mp3"},{alt:"popular",word:"popular",translation:"популярный",image:"assets/images/cards/adjectives/popular.png",audioSrc:"assets/mp3/adjectives/popular.mp3"},{alt:"possible",word:"possible",translation:"возможно",image:"assets/images/cards/adjectives/possible.jpg",audioSrc:"assets/mp3/adjectives/possible.mp3"},{alt:"private",word:"private",translation:"приватный",image:"assets/images/cards/adjectives/private.png",audioSrc:"assets/mp3/adjectives/private.mp3"},{alt:"recent",word:"recent",translation:"недавний",image:"assets/images/cards/adjectives/recent.png",audioSrc:"assets/mp3/adjectives/recent.mp3"},{alt:"responsible",word:"responsible",translation:"ответственный",image:"assets/images/cards/adjectives/responsible.png",audioSrc:"assets/mp3/adjectives/responsible.mp3"},{alt:"safe",word:"safe",translation:"безопасный",image:"assets/images/cards/adjectives/safe.png",audioSrc:"assets/mp3/adjectives/safe.mp3"},{alt:"same",word:"same",translation:"одинаковый",image:"assets/images/cards/adjectives/same.png",audioSrc:"assets/mp3/adjectives/same.mp3"}],preposition:[{alt:"About",word:"About",translation:"около",image:"assets/images/cards/preposition/About.png",audioSrc:"assets/mp3/preposition/About.mp3"},{alt:"above",word:"above",translation:"над",image:"assets/images/cards/preposition/above.png",audioSrc:"assets/mp3/preposition/above.mp3"},{alt:"according to",word:"according to",translation:"в соответствии с",image:"assets/images/cards/preposition/according-to.png",audioSrc:"assets/mp3/preposition/according-to.mp3"},{alt:"across",word:"across",translation:"через",image:"assets/images/cards/preposition/across.png",audioSrc:"assets/mp3/preposition/across.mp3"},{alt:"after",word:"after",translation:"после",image:"assets/images/cards/preposition/after.png",audioSrc:"assets/mp3/preposition/after.mp3"},{alt:"against",word:"against",translation:"против",image:"assets/images/cards/preposition/against.png",audioSrc:"assets/mp3/preposition/against.mp3"},{alt:"along",word:"along",translation:"вдоль",image:"assets/images/cards/preposition/along.png",audioSrc:"assets/mp3/preposition/along.mp3"},{alt:"although",word:"although",translation:"несмотря на то что",image:"assets/images/cards/preposition/although.png",audioSrc:"assets/mp3/preposition/although.mp3"}],itTerms:[{alt:"adapt",word:"adapt",translation:"адаптировать",image:"assets/images/cards/it-terms/adapt.png",audioSrc:"assets/mp3/it-terms/adapt.mp3"},{alt:"archive",word:"archive",translation:"архив",image:"assets/images/cards/it-terms/archive.png",audioSrc:"assets/mp3/it-terms/archive.mp3"},{alt:"attempt",word:"attempt",translation:"попытка",image:"assets/images/cards/it-terms/attempt.png",audioSrc:"assets/mp3/it-terms/attempt.mp3"},{alt:"binary",word:"binary",translation:"двоичный",image:"assets/images/cards/it-terms/binary.png",audioSrc:"assets/mp3/it-terms/binary.mp3"},{alt:"buffer",word:"buffer",translation:"буфер",image:"assets/images/cards/it-terms/buffer.png",audioSrc:"assets/mp3/it-terms/buffer.mp3"},{alt:"cache",word:"cache",translation:"кэш",image:"assets/images/cards/it-terms/cache.png",audioSrc:"assets/mp3/it-terms/cache.mp3"},{alt:"cancel",word:"cancel",translation:"отмена",image:"assets/images/cards/it-terms/cancel.png",audioSrc:"assets/mp3/it-terms/cancel.mp3"},{alt:"capacity",word:"capacity",translation:"емкость",image:"assets/images/cards/it-terms/capacity.png",audioSrc:"assets/mp3/it-terms/capacity.mp3"}],vegetables:[{alt:"anise",word:"anise",translation:"анис",image:"assets/images/cards/vegetables/anise.png",audioSrc:"assets/mp3/vegetables/anise.mp3"},{alt:"artichoke",word:"artichoke",translation:"артишок",image:"assets/images/cards/vegetables/artichoke.png",audioSrc:"assets/mp3/vegetables/artichoke.mp3"},{alt:"arugula",word:"arugula",translation:"руккола",image:"assets/images/cards/vegetables/arugula.png",audioSrc:"assets/mp3/vegetables/arugula.mp3"},{alt:"asparagus",word:"asparagus",translation:"спаржа",image:"assets/images/cards/vegetables/asparagus.png",audioSrc:"assets/mp3/vegetables/asparagus.mp3"},{alt:"avocado",word:"avocado",translation:"авакадо",image:"assets/images/cards/vegetables/avocado.png",audioSrc:"assets/mp3/vegetables/avocado.mp3"},{alt:"basil",word:"basil",translation:"базилик",image:"assets/images/cards/vegetables/basil.png",audioSrc:"assets/mp3/vegetables/basil.mp3"},{alt:"beans",word:"beans",translation:"фасоль",image:"assets/images/cards/vegetables/beans.png",audioSrc:"assets/mp3/vegetables/beans.mp3"},{alt:"bean-sprouts",word:"bean-sprouts",translation:"бобовые ростки",image:"assets/images/cards/vegetables/bean-sprouts.png",audioSrc:"assets/mp3/vegetables/bean-sprouts.mp3"}],collision:[{alt:"behavior",word:"behavior",translation:"анис",image:"assets/images/cards/collision/behavior.png",audioSrc:"assets/mp3/collision/behavior.mp3"},{alt:"bounce",word:"bounce",translation:"подпрыгивать",image:"assets/images/cards/collision/bounce.png",audioSrc:"assets/mp3/collision/bounce.mp3"},{alt:"collision-process",word:"collision-process",translation:"процесс столкновения",image:"assets/images/cards/collision/collision-process.png",audioSrc:"assets/mp3/collision/collision-process.mp3"},{alt:"combination",word:"combination",translation:"сочетание",image:"assets/images/cards/collision/combination.png",audioSrc:"assets/mp3/collision/combination.mp3"},{alt:"concept",word:"concept",translation:"концепция",image:"assets/images/cards/collision/concept.png",audioSrc:"assets/mp3/collision/concept.mp3"},{alt:"cradle",word:"cradle",translation:"колыбель",image:"assets/images/cards/collision/cradle.png",audioSrc:"assets/mp3/collision/cradle.mp3"},{alt:"doubling",word:"doubling",translation:"удвоение",image:"assets/images/cards/collision/doubling.png",audioSrc:"assets/mp3/collision/doubling.mp3"},{alt:"elastic-collision",word:"elastic-collision",translation:"упругое столкновение",image:"assets/images/cards/collision/elastic-collision.png",audioSrc:"assets/mp3/collision/elastic-collision.mp3"}],bones:[{alt:"bone Marrow",word:"bone Marrow",translation:"Костный мозг",image:"assets/images/cards/bones/bone-Marrow.png",audioSrc:"assets/mp3/bones/bone-Marrow.mp3"},{alt:"carpals",word:"carpals",translation:"запястья",image:"assets/images/cards/bones/carpals.png",audioSrc:"assets/mp3/bones/carpals.mp3"},{alt:"clavicle",word:"clavicle",translation:"ключица",image:"assets/images/cards/bones/clavicle.png",audioSrc:"assets/mp3/bones/clavicle.mp3"},{alt:"coccyx",word:"coccyx",translation:"копчик",image:"assets/images/cards/bones/coccyx.png",audioSrc:"assets/mp3/bones/coccyx.mp3"},{alt:"femur",word:"femur",translation:"бедренная кость",image:"assets/images/cards/bones/femur.png",audioSrc:"assets/mp3/bones/femur.mp3"},{alt:"human tissue",word:"human tissue",translation:"человеческая ткань",image:"assets/images/cards/bones/human-tissue.png",audioSrc:"assets/mp3/bones/human-tissue.mp3"},{alt:"humerus",word:"humerus",translation:"плечевая кость",image:"assets/images/cards/bones/humerus.png",audioSrc:"assets/mp3/bones/humerus.mp3"},{alt:"fibula",word:"fibula",translation:"малоберцовая кость",image:"assets/images/cards/bones/fibula.png",audioSrc:"assets/mp3/bones/fibula.mp3"}]};function t(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}a(2222);var r=function(){function e(t,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t,this.data=a}var a,r;return a=e,(r=[{key:"render",value:function(){var e=this.data,t=e.image,a=e.alt,r=e.word,s=e.translation,n=e.audioSrc,o=document.createElement("div");o.classList.add("card"),o.innerHTML='\n    <div class="card__inner">\n      <div class="card__front">\n        <img class="card__img" src="'.concat(t,'" alt="').concat(a,'">\n        <div class="card__info">\n          <h2 class="card__title">').concat(r,'</h2>\n        </div>\n        <div class="card__rotate--btn">\n          <img class="card__rotate--icon" src="assets/images/rotate.svg" alt="rotate">\n        </div>\n      </div>\n      <div class="card__back">\n        <img class="card__img" src="').concat(t,'" alt="').concat(a,'">\n        <h2 class="card__title">').concat(s,'</h2>\n      </div>\n      <audio src="').concat(n,'"></audio>\n    </div>\n    '),this.parent.append(o)}}])&&t(a.prototype,r),e}();function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var n=document.querySelector(".cards"),o=document.querySelectorAll(".category"),i=document.querySelector(".navigation"),c=document.querySelector(".switcher"),u=c.querySelector(".switcher__input"),l=document.querySelector(".play"),d=l.querySelector(".play__btn"),p=l.querySelector(".play__slider"),m=l.querySelector(".play__input"),f=new Audio("assets/mp3/correct.mp3"),g=new Audio("assets/mp3/error.mp3"),v=new Audio("assets/mp3/success.mp3"),b=new Audio("assets/mp3/failure.mp3"),y={index:null,count:0,gameMode:!1,cards:[],correctAnswer:0,wrongAnswer:0};function h(e){e.querySelector("audio").play()}function S(){y.cards.length?(y.next=y.cards.pop(),h(y.next)):y.wrongAnswer?function(){document.body.classList.add("overflowHidden");var e=document.querySelector(".figlos"),t=document.querySelector(".dialog"),a=document.querySelector(".dialog__answer");e.hidden=!1,b.play(),a.textContent="Wrong answer: ".concat(y.wrongAnswer),t.showModal()}():y.wrongAnswer||function(){document.body.classList.add("overflowHidden");var e=document.querySelector(".figwin"),t=document.querySelector(".dialog-win");e.hidden=!1,v.play(),t.showModal()}()}function w(){var e=document.querySelector(".game__start");n.classList.remove("cards__play"),p.classList.remove("play__active"),l.classList.remove("active"),e.hidden=!0,d.hidden=!0}function _(){var e=document.querySelector(".game__start");y.gameMode&&n.querySelector(".card")?(d.hidden=!1,m.checked=!0,e.hidden=!1):y.gameMode||(e.hidden=!0,d.hidden=!0)}function x(t){o.forEach((function(e){return e.setAttribute("hidden","")})),n.querySelectorAll(".card").forEach((function(e){return e.remove()}));for(var a=e[t],s=0;s<a.length;s+=1)new r(document.querySelector(".cards"),a[s]).render()}function L(e){null===e.target.closest(".card__rotate")&&(n.querySelector(".card__rotate").classList.remove("card__rotate"),document.body.removeEventListener("mousemove",L))}c.addEventListener("click",(function(){var e=document.querySelectorAll(".category__inner"),t=document.querySelectorAll(".card__inner");u.checked=!u.checked,y.gameMode=!y.gameMode,n.classList.add("cards__play"),_(),y.gameMode?e.forEach((function(e){return e.classList.add("category__inner-playmode")})):(e.forEach((function(e){return e.classList.remove("category__inner-playmode")})),t.forEach((function(e){return e.classList.remove("card__inner-checked")})),y.wrongAnswer=0,w())})),document.body.addEventListener("click",(function(e){var t=document.querySelector(".humb"),a=document.querySelector(".menu"),r=document.querySelector(".menu__list");e.target.closest(".humb")?(t.classList.toggle("humb__active"),a.classList.toggle("menu__active")):e.target!==r&&e.target!==a&&(t.classList.remove("humb__active"),a.classList.remove("menu__active"))})),n.addEventListener("click",(function(e){if(e.target!==n){var t=e.target.closest(".card__inner");e.target.closest(".category")?(x(e.target.closest(".category").id),_()):"rotate"===e.target.alt?function(e){var t=e;t.classList.add("card__rotate"),t.ontransitionend=function(){document.body.addEventListener("mousemove",L),t.ontransitionend=null}}(t):t&&!y.gameMode?h(t):t&&y.gameMode&&!m.checked&&function(e){var t=document.querySelector(".answers"),a=document.createElement("img");if(e===y.next)a.src="./assets/images/star-win.svg",a.alt="star",t.prepend(a),y.count+=1,y.correctAnswer+=1,e.classList.add("card__inner-checked"),f.play(),setTimeout((function(){return S()}),500);else{if(e.classList.contains("card__inner-checked"))return;a.src="./assets/images/star.svg",a.alt="star",t.prepend(a),y.wrongAnswer+=1,g.play()}}(t)}})),i.addEventListener("click",(function(e){if("A"===e.target.tagName){var t=e.target.dataset.id;"main"===t?(n.querySelectorAll(".card").forEach((function(e){return e.remove()})),o.forEach((function(e){return e.removeAttribute("hidden")})),w()):(x(t),w(),_(),y.gameMode&&n.classList.add("cards__play"))}})),l.addEventListener("click",(function(){var e;m.checked?(d.hidden=!0,m.checked=!1,p.classList.add("play__active"),l.classList.add("active"),y.cards=(e=document.querySelectorAll(".card__inner"),function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort((function(){return Math.random()-.5})),S()):h(y.next)}))}()}();
//# sourceMappingURL=bundle.js.map