module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=14)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat.Component},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}r.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},,,,,,,,,function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(5),u=r.n(o),i=(r(4),r(1),r(2)),a=r(3);var c=function(t){Object(i.a)(r,t);var e;e=r;function r(){return t.apply(this,arguments)||this}var n=r.prototype;return n.init=function(){var t=this;this.fields=["src","url","autoinsert","lang"];var e=app.data.settings;this.settingsPrefix="jasper.chevereto",this.values={},this.fields.forEach((function(r){return t.values[r]=m.prop(e[t.addPrefix(r)])}))},n.view=function(){return m("div",{id:"chevereto-pup-container"},[m("div",{id:"chevereto-mark"})])},n.loadChevereto=function(){if(!document.getElementsByClassName("chevereto-pup-button")[0]&&!document.getElementById("chevereto")){var t=document.createElement("script");t.id="chevereto",t.type="text/javascript",t.async=!0,t.setAttribute("data-sibling-pos","after"),t.setAttribute("data-sibling","#chevereto-mark"),this.values.src()&&(t.src=this.values.src()),this.values.url()&&t.setAttribute("data-url",this.values.url()),this.values.lang()&&t.setAttribute("data-lang",this.values.lang()),this.values.autoinsert()&&t.setAttribute("data-auto-insert",this.values.autoinsert()),document.head.appendChild(t)}},n.unloadChevereto=function(){if(!document.getElementsByClassName("chevereto-pup-button")[0]){var t=document.getElementById("chevereto");t&&document.head.removeChild(t)}},n.addPrefix=function(t){return this.settingsPrefix+"."+t},r}(r.n(a).a);app.initializers.add("jasper-chevereto",(function(t){Object(n.extend)(u.a.prototype,"controlItems",(function(e){t.forum.attribute("canCheveretoUpload")&&(CheveretoButton=new c,e.add("jasper-chevereto",CheveretoButton,0),uploadButton.unloadChevereto(),uploadButton.loadChevereto())}))}))}]);
//# sourceMappingURL=forum.js.map