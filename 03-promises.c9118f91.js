!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return i.default(e)||a.default(e,t)||f.default(e,t)||l.default()};var i=c(o("8slrw")),a=c(o("7AJDX")),l=c(o("ifqQW")),f=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s=o("h6c0i"),d={form:document.querySelector(".form"),createBtn:document.querySelector("button[data-create]")},p=d.form;function y(e,t){return new Promise((function(r,n){setTimeout((function(){Math.random()>.3?r({position:e,delay:t}):n({position:e,delay:t})}),t)}))}function m(e){var t=e.position,r=e.delay;s.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))}function v(e){var t=e.position,r=e.delay;s.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))}d.createBtn.addEventListener("click",(function(t){t.preventDefault();var r=new FormData(p),n={},o=!0,i=!1,a=void 0;try{for(var l,f=r.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var c=e(u)(l.value,2),s=c[0],d=c[1];n[s]=Number(d)}}catch(e){i=!0,a=e}finally{try{o||null==f.return||f.return()}finally{if(i)throw a}}for(var b=n.amount,_=n.step,x=n.delay,g=1;g<=b;g+=1)y(g,x+=_).then(v).catch(m),p.reset()}))}();
//# sourceMappingURL=03-promises.c9118f91.js.map