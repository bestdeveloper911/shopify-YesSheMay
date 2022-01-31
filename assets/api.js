/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/shopify-theme-api/dist/api.es.js
function k(b){k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return k(b)}function l(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function");}
function m(b,a){for(var c=0;c<a.length;c++){var d=a[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(b,d.key,d)}}function n(b,a,c){a&&m(b.prototype,a);c&&m(b,c);return b}function p(b,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,writable:!0,configurable:!0}});a&&q(b,a)}
function r(b){r=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)};return r(b)}function q(b,a){q=Object.setPrototypeOf||function(a,d){a.__proto__=d;return a};return q(b,a)}function t(b,a){if(a&&("object"===typeof a||"function"===typeof a))return a;if(void 0===b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}
function u(b){if(Array.isArray(b)){var a=0;for(var c=Array(b.length);a<b.length;a++)c[a]=b[a];a=c}else a=void 0;a||(a=Symbol.iterator in Object(b)||"[object Arguments]"===Object.prototype.toString.call(b)?Array.from(b):void 0);if(!(b=a))throw new TypeError("Invalid attempt to spread non-iterable instance");return b}
var v=function(){function b(a){l(this,b);this._api=a;this._registered=[]}n(b,[{key:"register",value:function(a){var c=this,d=a.id,b=a.contact,e=a.values;e=void 0===e?{}:e;var g=a.elements;g=void 0===g?{}:g;a=a.events;a=void 0===a?{}:a;if("string"!==typeof d||""===d)throw Error("Integration ID cannot be empty.");if("string"!==typeof b||""===b)throw Error("Integration contact cannot be empty.");[["values",e],["elements",g],["events",a]].forEach(function(a){if("object"!==k(a[1]))throw Error("Integration ".concat(a[0],
" property must be of type object."));Object.keys(a[1]).forEach(function(c){if("function"!==typeof a[1][c])throw Error("Integration ".concat(a[0]," property must contain a function as the value for each key, value pairing."));})});this._registered=this._registered.filter(function(a){return a.id!==d});this._registered.push({id:d,contact:b,values:e,elements:g,events:a});Object.keys(e).forEach(function(a){return c.updateValue(a)});Object.keys(g).forEach(function(a){return c.updateElement(a)});return!0}},
{key:"updateValue",value:function(a){var c=this;a=this._api.theme.getValues(a);return a.length?Promise.all(a.map(function(a){return a&&a.initialValue?c._api.theme.updateValue(a.value.name,a.initialValue,a.params):Promise.resolve()})).then(function(){return!0}).catch(function(){return!1}):Promise.resolve(!1)}},{key:"updateElement",value:function(a){var c=this;a=this._api.theme.getElements(a);return a.length?Promise.all(a.map(function(a){return a?c._api.theme.updateElement(a.element.name,a.params):
Promise.resolve()})).then(function(){return!0}).catch(function(){return!1}):Promise.resolve(!1)}},{key:"registered",get:function(){return this._registered}}]);return b}();function w(b,a){if(b&&!a)return b;if(!b&&a)return a;if(!b&&!a)return{};var c={};Object.keys(b).forEach(function(a){c[a]=b[a]});Object.keys(a).forEach(function(d){c[d]=a[d]});return c}function x(b){b=b.split(":");return 3===b.length?b[1]:null}
var y=function(){function b(a,c){l(this,b);this._api=a;this._name=c;this._id=x(c);this._handle=(a=x(c))?c.replace(a,"<id>"):c}n(b,[{key:"name",get:function(){return this._name}},{key:"id",get:function(){return this._id}},{key:"handle",get:function(){return this._handle}}]);return b}();function z(b,a){var c=Promise.resolve();b.forEach(function(d){c=c.then(function(){return a(d)})});return c}
var A=function(b){function a(c,d){l(this,a);c=t(this,r(a).call(this,c,d));c._activePromise=Promise.resolve();return c}p(a,b);n(a,[{key:"update",value:function(a,d){function c(){return z(g,function(c){return new Promise(function(f){var e=c.values[b._handle];if(!e)return f();e=e({id:b._id,initialValue:a,value:h,params:d});e instanceof Promise?e.then(function(a){h=a;f()}):(h=e,f())})}).then(function(){return h})}var b=this,g=this._api.integrations.registered,h=a;return this._activePromise.then(function(){return c()})}}]);
return a}(y),Element=function(b){function a(c,d,b){l(this,a);c=t(this,r(a).call(this,c,d));c._container=b;c._results={};c._activePromise=Promise.resolve();return c}p(a,b);n(a,[{key:"update",value:function(a){function c(){var c={},d=[];return z(e,function(f){return new Promise(function(e){var g=f.elements[b._handle];if(!g)return e();g=g({id:b._id,params:a});g instanceof Promise?g.then(function(a){c[f.id]=a;d.push.apply(d,u(a.elements));e()}):(c[f.id]=g,d.push.apply(d,u(g.elements)),e())})}).then(function(){return b.unload()}).then(function(){return d.forEach(function(a){return b._container.appendChild(a)})}).then(function(){b._results=
c}).then(function(){return d})}var b=this,e=this._api.integrations.registered;return this._activePromise.then(function(){return c()})}},{key:"unload",value:function(){var a=this;Object.keys(this._results).forEach(function(c){var b=a._results[c];c=b.elements;b=b.onUnload;b();c.forEach(function(c){a._container.contains(c)&&a._container.removeChild(c)})});this._results={}}}]);return a}(y),B=function(){function b(a){var c=this;l(this,b);this._api=a;this._values={};this._elements={};this._batchUpdate=
{values:[],elements:[]};this._isLoaded=!1;window.addEventListener("DOMContentLoaded",function f(){c._isLoaded=!0;c._batchUpdate.values.forEach(function(a){return a()});c._batchUpdate.elements.forEach(function(a){return a()});window.removeEventListener("DOMContentLoaded",f)})}n(b,[{key:"getValues",value:function(a){var c=this;if(this._values[a])return[this._values[a]];var b=[];Object.keys(this._values).forEach(function(d){d=c._values[d];d.value.handle===a&&b.push(d)});return b}},{key:"getElements",
value:function(a){var c=this;if(this._elements[a])return[this._elements[a]];var b=[];Object.keys(this._elements).forEach(function(d){d=c._elements[d];d.element.handle===a&&b.push(d)});return b}},{key:"useValue",value:function(a,c){var b={name:null,handler:null};a&&"object"===k(a)&&!c?b=a:a&&"string"===typeof a&&c&&"function"===typeof c&&(b.name=a,b.handler=c);return this._useValue(b)}},{key:"useElement",value:function(a,c){var b={name:null,container:null};a&&"object"===k(a)&&!c?b=a:a&&"string"===
typeof a&&c&&c instanceof HTMLElement&&(b.name=a,b.container=c);return this._useElement(b)}},{key:"updateValue",value:function(a,b,d){var c=this,e=this._values[a];if(!this._isLoaded&&-1===this._batchUpdate.values.indexOf(e))return new Promise(function(b){c._batchUpdate.values.push(function(){return c.updateValue(a).then(function(a){return b(a)})})});if(e&&e.initialValue){var g=e.value,h=e.instances;if(h.length)return g.update(b,d).then(function(a){return Promise.all(h.map(function(b){return b.handler(a,
d)})).then(function(){return a})})}return Promise.resolve()}},{key:"updateElement",value:function(a,b){var c=this,f=this._elements[a];return this._isLoaded||-1!==this._batchUpdate.elements.indexOf(f)?f?f.element.update(b):Promise.resolve():new Promise(function(b){c._batchUpdate.elements.push(function(){return c.updateElement(a).then(function(a){return b(a)})})})}},{key:"triggerEvent",value:function(a,b){function c(){}var f=!1,e=!1;b&&"function"===typeof b.cancel&&(f=!0,c=function(){e=!0;b.cancel()});
return Promise.all(this._api.integrations.registered.map(function(d){return d.events[a]&&(d=d.events[a]({cancellable:f,cancel:c,params:b||{}}),d instanceof Promise)?d:Promise.resolve()})).then(function(){return e})}},{key:"_useValue",value:function(a){var b=this,d=a.name,f=a.handler,e=a.initialValue;a=this._createOrUpdateValue(d,e,a.params).value;a={name:a.name,id:a.id,handle:a.handle,handler:f,unload:function(){b._values[d].instances=b._values[d].instances.filter(function(a){return a.handler!==f});
b._values[d].instances.length||delete b._values[d]}};this._values[d].instances.push(a);e&&this.updateValue(d,e);return a}},{key:"_useElement",value:function(a){var b=this,d=a.name,f=a.params,e=this._createOrUpdateElement(d,a.container,f).element;a={name:e.name,id:e.id,handle:e.handle,unload:function(){e.unload();delete b._elements[d]}};this.updateElement(d,f);return a}},{key:"_createOrUpdateValue",value:function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},f=this._values[a];
this._values[a]?(f.initialValue=b,f.params=w(f.params,c)):(f={value:new A(this._api,a),initialValue:b,params:c,instances:[]},this._values[a]=f);return f}},{key:"_createOrUpdateElement",value:function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},f=this._elements[a];this._elements[a]?f.params=w(f.params,c):(f={element:new Element(this._api,a,b),params:c},this._elements[a]=f);return f}}]);return b}(),C=new (function(){function b(){l(this,b);this._integrations=new v(this);this._theme=
new B(this)}n(b,[{key:"version",get:function(){return 0}},{key:"integrations",get:function(){return this._integrations}},{key:"theme",get:function(){return this._theme}}]);return b}());/* harmony default export */ var api_es = (C);

// CONCATENATED MODULE: ./source/scripts/api.js

window.api = api_es;

/***/ })
/******/ ]);
//# sourceMappingURL=api.js.map?1585842023851