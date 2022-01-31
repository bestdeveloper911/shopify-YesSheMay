!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2)},function(t,e){!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var i=o.element,s=a(i),c=this._rootContainsTarget(i),u=o.entry,h=e&&c&&this._computeTargetAndRootIntersection(i,n),l=o.entry=new r({time:t.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:n,intersectionRect:h});u?e&&c?this._hasCrossedThreshold(u,l)&&this._queuedEntries.push(l):u&&u.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(n,r){if("none"!=t.getComputedStyle(n).display){for(var o,i,s,c,h,l,d,f,p=a(n),m=u(n),g=!1;!g;){var v=null,b=1==m.nodeType?t.getComputedStyle(m):{};if("none"==b.display)return;if(m==this.root||m==e?(g=!0,v=r):m!=e.body&&m!=e.documentElement&&"visible"!=b.overflow&&(v=a(m)),v&&(o=v,i=p,s=void 0,c=void 0,h=void 0,l=void 0,d=void 0,f=void 0,s=Math.max(o.top,i.top),c=Math.min(o.bottom,i.bottom),h=Math.max(o.left,i.left),l=Math.min(o.right,i.right),f=c-s,!(p=(d=l-h)>=0&&f>=0&&{top:s,bottom:c,left:h,right:l,width:d,height:f})))break;m=u(m)}return p}},o.prototype._getRootRect=function(){var t;if(this.root)t=a(this.root);else{var n=e.documentElement,r=e.body;t={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},o.prototype._rootIsInDom=function(){return!this.root||c(e,this.root)},o.prototype._rootContainsTarget=function(t){return c(this.root||e,t)},o.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},o.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=r}function r(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?Number((o/n).toFixed(4)):this.isIntersecting?1:0}function o(t,e){var n,r,o,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout((function(){n(),o=null}),r))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function i(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var n=e;n;){if(n==t)return!0;n=u(n)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)},function(t,e){!function(){"use strict";var t,e,n,r,o=document.createElement("details"),i="undefined"!=typeof HTMLDetailsElement&&o instanceof HTMLDetailsElement,s="open"in o||i,a="ontoggle"in o,c='\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "►";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "▼";\n}\n',u=[],h=u.forEach,l=u.slice;function d(t){(function(t,e){return(t.tagName==e?[t]:[]).concat("function"==typeof t.getElementsByTagName?l.call(t.getElementsByTagName(e)):[])})(t,"SUMMARY").forEach((function(t){var e=g(t,"DETAILS");t.setAttribute("aria-expanded",e.hasAttribute("open")),t.hasAttribute("tabindex")||t.setAttribute("tabindex","0"),t.hasAttribute("role")||t.setAttribute("role","button")}))}function f(t){return!(t.defaultPrevented||t.ctrlKey||t.metaKey||t.shiftKey||t.target.isContentEditable)}function p(t){addEventListener("click",(function(e){if(f(e)&&e.which<=1){var n=g(e.target,"SUMMARY");n&&n.parentNode&&"DETAILS"==n.parentNode.tagName&&t(n.parentNode)}}),!1),addEventListener("keydown",(function(e){if(f(e)&&(13==e.keyCode||32==e.keyCode)){var n=g(e.target,"SUMMARY");n&&n.parentNode&&"DETAILS"==n.parentNode.tagName&&(t(n.parentNode),e.preventDefault())}}),!1)}function m(t){var e=document.createEvent("Event");e.initEvent("toggle",!1,!1),t.dispatchEvent(e)}function g(t,e){if("function"==typeof t.closest)return t.closest(e);for(;t;){if(t.tagName==e)return t;t=t.parentNode}}s||(document.head.insertAdjacentHTML("afterbegin","<style>"+c+"</style>"),t=document.createElement("details").constructor.prototype,e=t.setAttribute,n=t.removeAttribute,r=Object.getOwnPropertyDescriptor(t,"open"),Object.defineProperties(t,{open:{get:function(){return"DETAILS"==this.tagName?this.hasAttribute("open"):r&&r.get?r.get.call(this):void 0},set:function(t){return"DETAILS"==this.tagName?t?this.setAttribute("open",""):this.removeAttribute("open"):r&&r.set?r.set.call(this,t):void 0}},setAttribute:{value:function(t,n){var r=this,o=function(){return e.call(r,t,n)};if("open"==t&&"DETAILS"==this.tagName){var i=this.hasAttribute("open"),s=o();if(!i){var a=this.querySelector("summary");a&&a.setAttribute("aria-expanded",!0),m(this)}return s}return o()}},removeAttribute:{value:function(t){var e=this,r=function(){return n.call(e,t)};if("open"==t&&"DETAILS"==this.tagName){var o=this.hasAttribute("open"),i=r();if(o){var s=this.querySelector("summary");s&&s.setAttribute("aria-expanded",!1),m(this)}return i}return r()}}}),p((function(t){t.hasAttribute("open")?t.removeAttribute("open"):t.setAttribute("open","")})),d(document),window.MutationObserver?new MutationObserver((function(t){h.call(t,(function(t){h.call(t.addedNodes,d)}))})).observe(document.documentElement,{subtree:!0,childList:!0}):document.addEventListener("DOMNodeInserted",(function(t){d(t.target)}))),s&&!a&&(window.MutationObserver?new MutationObserver((function(t){h.call(t,(function(t){var e=t.target,n=t.attributeName;"DETAILS"==e.tagName&&"open"==n&&m(e)}))})).observe(document.documentElement,{attributes:!0,subtree:!0}):p((function(t){var e=t.getAttribute("open");setTimeout((function(){var n=t.getAttribute("open");e!=n&&m(t)}),1)})))}()}]);
//# sourceMappingURL=polyfills.js.map?1585842023899