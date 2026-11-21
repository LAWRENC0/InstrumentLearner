var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,re(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+A(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+A(a,u),c+=re(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+A(a,u++),c+=re(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return re(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function j(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,oe)}catch(e){oe(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function M(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else j(M.bind(null,e))}var N={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=N,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=M,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=j,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&te(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&te(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,ee=k.port2;k.port1.onmessage=D,O=function(){ee.postMessage(null)}}else O=function(){_(D,0)};function te(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,te(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),ee=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),A=Symbol.for(`react.strict_mode`),ne=Symbol.for(`react.profiler`),re=Symbol.for(`react.consumer`),ie=Symbol.for(`react.context`),ae=Symbol.for(`react.forward_ref`),oe=Symbol.for(`react.suspense`),j=Symbol.for(`react.suspense_list`),M=Symbol.for(`react.memo`),N=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),P=Symbol.for(`react.legacy_hidden`),ce=Symbol.for(`react.memo_cache_sentinel`),le=Symbol.for(`react.view_transition`),ue=Symbol.for(`react.recoverable`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var pe=Symbol.for(`react.client.reference`);function me(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case ne:return`Profiler`;case A:return`StrictMode`;case oe:return`Suspense`;case j:return`SuspenseList`;case se:return`Activity`;case le:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ee:return`Portal`;case ie:return e.displayName||`Context`;case re:return(e._context.displayName||`Context`)+`.Consumer`;case ae:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case M:return t=e.displayName||null,t===null?me(e.type)||`Memo`:t;case N:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var he=Array.isArray,F=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},_e=[],ve=-1;function ye(e){return{current:e}}function be(e){0>ve||(e.current=_e[ve],_e[ve]=null,ve--)}function L(e,t){ve++,_e[ve]=e.current,e.current=t}var xe=ye(null),Se=ye(null),Ce=ye(null),we=ye(null);function Te(e,t){switch(L(Ce,t),L(Se,e),L(xe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}be(xe),L(xe,e)}function Ee(){be(xe),be(Se),be(Ce)}function De(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,L(we,e)),t=xe.current;var n=dp(t,e.type);t!==n&&(L(Se,e),L(xe,n))}function Oe(e){Se.current===e&&(be(xe),be(Se)),we.current===e&&(be(we),sh._currentValue=ge)}var ke,Ae;function je(e){if(ke===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ke=t&&t[1]||``,Ae=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ke+e+Ae}var Me=!1;function Ne(e,t){if(!e||Me)return``;Me=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Me=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?je(n):``}function Pe(e,t){switch(e.tag){case 26:case 27:case 5:return je(e.type);case 16:return je(`Lazy`);case 13:return e.child!==t&&t!==null?je(`Suspense Fallback`):je(`Suspense`);case 19:return je(`SuspenseList`);case 0:case 15:return Ne(e.type,!1);case 11:return Ne(e.type.render,!1);case 1:return Ne(e.type,!0);case 31:return je(`Activity`);case 30:return je(`ViewTransition`);default:return``}}function Fe(e){try{var t=``,n=null;do t+=Pe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ie=Object.prototype.hasOwnProperty,Le=t.unstable_scheduleCallback,Re=t.unstable_cancelCallback,ze=t.unstable_shouldYield,Be=t.unstable_requestPaint,Ve=t.unstable_now,He=t.unstable_getCurrentPriorityLevel,Ue=t.unstable_ImmediatePriority,We=t.unstable_UserBlockingPriority,Ge=t.unstable_NormalPriority,Ke=t.unstable_LowPriority,qe=t.unstable_IdlePriority,Je=t.log,Ye=t.unstable_setDisableYieldValue,Xe=null,Ze=null;function Qe(e){if(typeof Je==`function`&&Ye(e),Ze&&typeof Ze.setStrictMode==`function`)try{Ze.setStrictMode(Xe,e)}catch{}}var $e=Math.clz32?Math.clz32:nt,et=Math.log,tt=Math.LN2;function nt(e){return e>>>=0,e===0?32:31-(et(e)/tt|0)|0}var rt=256,it=262144,at=4194304;function ot(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function st(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=ot(n))):i=ot(o):i=ot(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=ot(n))):i=ot(o)):i=ot(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function ct(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-$e(n),i=1<<r;t|=e[r],n&=~i}return t}function ut(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dt(){var e=at;return at<<=1,!(at&62914560)&&(at=4194304),e}function ft(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function mt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-$e(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ht(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ht(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-$e(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function gt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$e(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function _t(e,t){var n=t&-t;return n=n&42?1:vt(n),(n&(e.suspendedLanes|t))===0?n:0}function vt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function bt(){var e=I.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function xt(e,t){var n=I.p;try{return I.p=e,t()}finally{I.p=n}}var St=Math.random().toString(36).slice(2),Ct=`__reactFiber$`+St,wt=`__reactProps$`+St,Tt=`__reactContainer$`+St,Et=`__reactEvents$`+St,Dt=`__reactListeners$`+St,Ot=`__reactHandles$`+St,kt=`__reactResources$`+St,At=`__reactMarker$`+St,jt=`__reactLoad$`+St;function Mt(e){delete e[Ct],delete e[wt],delete e[Dt],delete e[Ot]}function Nt(e){var t;if(t=e[Ct])return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Ct])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Pt(e){if(e=e[Ct]||e[Tt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ft(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function It(e){var t=e[kt];return t||=e[kt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Lt(e){e[At]=!0}function Rt(e){e[jt]=void 0}var zt=new Set,Bt={};function Vt(e,t){Ht(e,t),Ht(e+`Capture`,t)}function Ht(e,t){for(Bt[e]=t,e=0;e<t.length;e++)zt.add(t[e])}var Ut=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Wt={},Gt={};function Kt(e){return Ie.call(Gt,e)?!0:Ie.call(Wt,e)?!1:Ut.test(e)?Gt[e]=!0:(Wt[e]=!0,!1)}var R=!1;function qt(){var e=R;return R=!1,e}function Jt(e,t,n){if(Kt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Yt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Xt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Qt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function $t(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function en(e){if(!e._valueTracker){var t=Qt(e)?`checked`:`value`;e._valueTracker=$t(e,t,``+e[t])}}function tn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Qt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var nn=/[\n"\\]/g;function rn(e){return e.replace(nn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function an(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Zt(t)):e.value!==``+Zt(t)&&(e.value=``+Zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):sn(e,Zt(n)):o===`number`&&e.value==t?sn(e,Zt(e.value)):sn(e,Zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Zt(s):e.removeAttribute(`name`)}function on(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){en(e);return}n=n==null?``:``+Zt(n),t=t==null?n:``+Zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),en(e)}function sn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ln(e,t,n){if(t!=null&&(t=``+Zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Zt(n)}function un(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(he(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),en(e)}function dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function pn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||fn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function mn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,R=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(pn(e,a,r),R=!0)}else for(var o in t)t.hasOwnProperty(o)&&pn(e,o,t[o])}function hn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var gn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),_n=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vn(e){return _n.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function yn(){}var bn=null;function xn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sn=null,Cn=null;function wn(e){var t=Pt(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(an(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+rn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[wt]||null;if(!a)throw Error(i(90));an(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&tn(r)}break a;case`textarea`:ln(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&cn(e,!!n.multiple,t,!1)}}}var Tn=!1;function En(e,t,n){if(Tn)return e(t,n);Tn=!0;try{return e(t)}finally{if(Tn=!1,(Sn!==null||Cn!==null)&&(zd(),Sn&&(t=Sn,e=Cn,Cn=Sn=null,wn(t),e)))for(t=0;t<e.length;t++)wn(e[t])}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[wt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var On=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,kn=!1;if(On)try{var An={};Object.defineProperty(An,"passive",{get:function(){kn=!0}}),window.addEventListener(`test`,An,An),window.removeEventListener(`test`,An,An)}catch{kn=!1}var jn=null,Mn=null,Nn=null;function Pn(){if(Nn)return Nn;var e,t=Mn,n=t.length,r,i=`value`in jn?jn.value:jn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Nn=i.slice(e,1<r?1-r:void 0)}function Fn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Ln(){return!1}function Rn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?In:Ln,this.isPropagationStopped=Ln,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Rn(zn),Vn=D({},zn,{view:0,detail:0}),Hn=Rn(Vn),Un,Wn,Gn,Kn=D({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Gn&&(Gn&&e.type===`mousemove`?(Un=e.screenX-Gn.screenX,Wn=e.screenY-Gn.screenY):Wn=Un=0,Gn=e),Un)},movementY:function(e){return`movementY`in e?e.movementY:Wn}}),qn=Rn(Kn),Jn=Rn(D({},Kn,{dataTransfer:0})),Yn=Rn(D({},Vn,{relatedTarget:0})),Xn=Rn(D({},zn,{animationName:0,elapsedTime:0,pseudoElement:0})),Zn=Rn(D({},zn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Qn=Rn(D({},zn,{data:0})),$n={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},er={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},tr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function nr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tr[e])?!!t[e]:!1}function rr(){return nr}var ir=Rn(D({},Vn,{key:function(e){if(e.key){var t=$n[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Fn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?er[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rr,charCode:function(e){return e.type===`keypress`?Fn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Fn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),ar=Rn(D({},Kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),or=Rn(D({},zn,{submitter:0})),sr=Rn(D({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rr})),cr=Rn(D({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0})),lr=Rn(D({},Kn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ur=Rn(D({},zn,{newState:0,oldState:0,source:0})),dr=[9,13,27,32],fr=On&&`CompositionEvent`in window,pr=null;On&&`documentMode`in document&&(pr=document.documentMode);var mr=On&&`TextEvent`in window&&!pr,hr=On&&(!fr||pr&&8<pr&&11>=pr),gr=` `,_r=!1;function vr(e,t){switch(e){case`keyup`:return dr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function yr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var br=!1;function xr(e,t){switch(e){case`compositionend`:return yr(t);case`keypress`:return t.which===32?(_r=!0,gr):null;case`textInput`:return e=t.data,e===gr&&_r?null:e;default:return null}}function Sr(e,t){if(br)return e===`compositionend`||!fr&&vr(e,t)?(e=Pn(),Nn=Mn=jn=null,br=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return hr&&t.locale!==`ko`?null:t.data;default:return null}}var Cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Cr[e.type]:t===`textarea`}function Tr(e,t,n,r){Sn?Cn?Cn.push(r):Cn=[r]:Sn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Bn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Er=null,Dr=null;function Or(e){Vf(e,0)}function kr(e){if(tn(Ft(e)))return e}function Ar(e,t){if(e===`change`)return t}var jr=!1;if(On){var Mr;if(On){var Nr=`oninput`in document;if(!Nr){var Pr=document.createElement(`div`);Pr.setAttribute(`oninput`,`return;`),Nr=typeof Pr.oninput==`function`}Mr=Nr}else Mr=!1;jr=Mr&&(!document.documentMode||9<document.documentMode)}function Fr(){Er&&(Er.detachEvent(`onpropertychange`,Ir),Dr=Er=null)}function Ir(e){if(e.propertyName===`value`&&kr(Dr)){var t=[];Tr(t,Dr,e,xn(e)),En(Or,t)}}function Lr(e,t,n){e===`focusin`?(Fr(),Er=t,Dr=n,Er.attachEvent(`onpropertychange`,Ir)):e===`focusout`&&Fr()}function Rr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return kr(Dr)}function zr(e,t){if(e===`click`)return kr(t)}function Br(e,t){if(e===`input`||e===`change`)return kr(t)}function Vr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Hr=typeof Object.is==`function`?Object.is:Vr;function Ur(e,t){if(Hr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ie.call(t,i)||!Hr(e[i],t[i]))return!1}return!0}function Wr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Gr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kr(e,t){var n=Gr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Gr(n)}}function qr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Xr=On&&`documentMode`in document&&11>=document.documentMode,Zr=null,Qr=null,$r=null,ei=!1;function ti(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ei||Zr==null||Zr!==Wr(r)||(r=Zr,`selectionStart`in r&&Yr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Ur($r,r)||($r=r,r=Jf(Qr,`onSelect`),0<r.length&&(t=new Bn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Zr)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ri={animationend:ni(`Animation`,`AnimationEnd`),animationiteration:ni(`Animation`,`AnimationIteration`),animationstart:ni(`Animation`,`AnimationStart`),transitionrun:ni(`Transition`,`TransitionRun`),transitionstart:ni(`Transition`,`TransitionStart`),transitioncancel:ni(`Transition`,`TransitionCancel`),transitionend:ni(`Transition`,`TransitionEnd`)},ii={},ai={};On&&(ai=document.createElement(`div`).style,`AnimationEvent`in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),`TransitionEvent`in window||delete ri.transitionend.transition);function oi(e){if(ii[e])return ii[e];if(!ri[e])return e;var t=ri[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ai)return ii[e]=t[n];return e}var si=oi(`animationend`),ci=oi(`animationiteration`),li=oi(`animationstart`),ui=oi(`transitionrun`),di=oi(`transitionstart`),fi=oi(`transitioncancel`),pi=oi(`transitionend`),mi=new Map,hi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);hi.push(`scrollEnd`);function gi(e,t){mi.set(e,t),Vt(t,[e])}var _i=0;function vi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=_i++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function yi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function bi(e,t){return e=yi(e),t=yi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var xi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Si=[],Ci=0,wi=0;function Ti(){for(var e=Ci,t=wi=Ci=0;t<e;){var n=Si[t];Si[t++]=null;var r=Si[t];Si[t++]=null;var i=Si[t];Si[t++]=null;var a=Si[t];if(Si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ki(n,i,a)}}function Ei(e,t,n,r){Si[Ci++]=e,Si[Ci++]=t,Si[Ci++]=n,Si[Ci++]=r,wi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Di(e,t,n,r){return Ei(e,t,n,r),Ai(e)}function Oi(e,t){return Ei(e,null,null,t),Ai(e)}function ki(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-$e(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ai(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ji={};function Mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ni(e,t,n,r){return new Mi(e,t,n,r)}function Pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,t){var n=e.alternate;return n===null?(n=Ni(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ii(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Li(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Pi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,xe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case se:return e=Ni(31,n,t,a),e.elementType=se,e.lanes=o,e;case te:return Ri(n.children,a,o,t);case A:s=8,a|=24;break;case ne:return e=Ni(12,n,t,a|2),e.elementType=ne,e.lanes=o,e;case oe:return e=Ni(13,n,t,a),e.elementType=oe,e.lanes=o,e;case j:return e=Ni(19,n,t,a),e.elementType=j,e.lanes=o,e;case P:case le:return e=a|32,e=Ni(30,n,t,e),e.elementType=le,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ie:s=10;break a;case re:s=9;break a;case ae:s=11;break a;case M:s=14;break a;case N:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ni(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ri(e,t,n,r){return e=Ni(7,e,r,t),e.lanes=n,e}function zi(e,t,n){return e=Ni(6,e,null,t),e.lanes=n,e}function Bi(e){var t=Ni(18,null,null,0);return t.stateNode=e,t}function Vi(e,t,n){return t=Ni(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hi=new WeakMap;function Ui(e,t){if(typeof e==`object`&&e){var n=Hi.get(e);return n===void 0?(t={value:e,source:t,stack:Fe(t)},Hi.set(e,t),t):n}return{value:e,source:t,stack:Fe(t)}}var Wi=[],Gi=0,Ki=null,qi=0,Ji=[],Yi=0,Xi=null,Zi=1,Qi=``;function $i(e,t){Wi[Gi++]=qi,Wi[Gi++]=Ki,Ki=e,qi=t}function ea(e,t,n){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Xi=e;var r=Zi;e=Qi;var i=32-$e(r)-1;r&=~(1<<i),n+=1;var a=32-$e(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zi=1<<32-$e(t)+i|n<<i|r,Qi=a+e}else Zi=1<<a|n<<i|r,Qi=e}function ta(e){e.return!==null&&($i(e,1),ea(e,1,0))}function na(e){for(;e===Ki;)Ki=Wi[--Gi],Wi[Gi]=null,qi=Wi[--Gi],Wi[Gi]=null;for(;e===Xi;)Xi=Ji[--Yi],Ji[Yi]=null,Qi=Ji[--Yi],Ji[Yi]=null,Zi=Ji[--Yi],Ji[Yi]=null}function ra(e,t){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Zi=t.id,Qi=t.overflow,Xi=e}var ia=null,z=null,B=!1,aa=null,oa=!1,sa=Error(i(519));function ca(e){throw ma(Ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),sa}function la(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ct]=e,t[wt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),on(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),un(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=yn),t=!0):t=!1,t||ca(e,!0)}function ua(e){for(ia=e.return;ia;)switch(ia.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:ia=ia.return}}function da(e){if(e!==ia)return!1;if(!B)return ua(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&z&&ca(e),ua(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=dm(e)}else t===27?(t=z,Sp(e.type)?(e=um,um=null,z=e):z=t):z=ia?lm(e.stateNode.nextSibling):null;return!0}function fa(){z=ia=null,B=!1}function pa(){var e=aa;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),aa=null),e}function ma(e){aa===null?aa=[e]:aa.push(e)}var ha=ye(null),ga=null,_a=null;function va(e,t,n){L(ha,t._currentValue),t._currentValue=n}function ya(e){e._currentValue=ha.current,be(ha)}function ba(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function xa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ba(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ba(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ba(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Sa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Hr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===we.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&xa(t,e,n,r),t.flags|=262144,e!==null}function Ca(e){for(e=e.firstContext;e!==null;){if(!Hr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){ga=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ta(e){return Da(ga,e)}function Ea(e,t){return ga===null&&wa(e),Da(e,t)}function Da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_a===null){if(e===null)throw Error(i(308));_a=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _a=_a.next=t;return n}var Oa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ka=t.unstable_scheduleCallback,Aa=t.unstable_NormalPriority,ja={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ma(){return{controller:new Oa,data:new Map,refCount:0}}function Na(e){e.refCount--,e.refCount===0&&ka(Aa,function(){e.controller.abort()})}function Pa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Fa=null;function Ia(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var La=null,Ra=0,za=0,Ba=null;function Va(e,t){if(La===null){var n=La=[];Ra=0,za=Pf(),Ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ra++,t.then(Ha,Ha),t}function Ha(){if(--Ra===0&&(Fa=null,La!==null)){Ba!==null&&(Ba.status=`fulfilled`);var e=La;La=null,za=0,Ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ua(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Wa=F.S;F.S=function(e,t){if(hd=Ve(),typeof t==`object`&&t&&typeof t.then==`function`&&Va(e,t),Fa!==null)for(var n=bf;n!==null;)Pa(n,Fa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Pa(r,n),r=r.next;if(za!==0){r=Fa,r===null&&(r=Fa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Wa!==null&&Wa(e,t)};var Ga=ye(null);function Ka(){var e=Ga.current;return e===null?q.pooledCache:e}function qa(e,t){t===null?L(Ga,Ga.current):L(Ga,t.pool)}function Ja(){var e=Ka();return e===null?null:{parent:ja._currentValue,pool:e}}var Ya=Error(i(460)),Xa=Error(i(474)),Za=Error(i(542)),Qa={then:function(){}};function $a(e){return e=e.status,e===`fulfilled`||e===`rejected`}function eo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(yn,yn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,io(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(yn,yn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,io(e),e}throw no=t,Ya}}function to(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(no=e,Ya):e}}var no=null;function ro(){if(no===null)throw Error(i(459));var e=no;return no=null,e}function io(e){if(e===Ya||e===Za)throw Error(i(483))}var ao=null,oo=0;function so(e){var t=oo;return oo+=1,ao===null&&(ao=[]),eo(ao,e,t)}function co(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function lo(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function uo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Fi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=zi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?(e=d(e,t,n.props.children,r,n.key),co(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===N&&to(i)===t.type)?(t=a(t,n.props),co(t,n),t.return=e,t):(t=Li(n.type,n.key,n.props,null,e.mode,r),co(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ri(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=zi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Li(t.type,t.key,t.props,null,e.mode,n),co(n,t),n.return=e,n;case ee:return t=Vi(t,e.mode,n),t.return=e,t;case N:return t=to(t),f(e,t,n)}if(he(t)||fe(t))return t=Ri(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,so(t),n);if(t.$$typeof===ie)return f(e,Ea(e,t),n);lo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case N:return n=to(n),p(e,t,n,r)}if(he(n)||fe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,so(n),r);if(n.$$typeof===ie)return p(e,t,Ea(e,n),r);lo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case N:return r=to(r),m(e,t,n,r,i)}if(he(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,so(r),i);if(r.$$typeof===ie)return m(e,t,n,Ea(t,r),i);lo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&$i(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&$i(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&$i(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&$i(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&$i(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&$i(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===te&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===te){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),co(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===N&&to(l)===r.type){n(e,r.sibling),c=a(r,o.props),co(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===te?(c=Ri(o.props.children,e.mode,c,o.key),co(c,o),c.return=e,e=c):(c=Li(o.type,o.key,o.props,null,e.mode,c),co(c,o),c.return=e,e=c)}return s(e);case ee:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Vi(o,e.mode,c),c.return=e,e=c}return s(e);case N:return o=to(o),_(e,r,o,c)}if(he(o))return h(e,r,o,c);if(fe(o)){if(l=fe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,so(o),c);if(o.$$typeof===ie)return _(e,r,Ea(e,o),c);lo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=zi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{oo=0;var i=_(e,t,n,r);return ao=null,i}catch(t){if(t===Ya||t===Za)throw t;var a=Ni(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var fo=uo(!0),po=uo(!1),mo=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function go(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _o(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function vo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ai(e),ki(e,null,n),t}return Ei(e,r,t,n),Ai(e)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gt(e,n)}}function bo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xo=!1;function So(){if(xo){var e=Ba;if(e!==null)throw e}}function Co(e,t,n,r){xo=!1;var i=e.updateQueue;mo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===za&&(xo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:mo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function wo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function To(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)wo(n[e],t)}var Eo=ye(null),Do=ye(0);function Oo(e,t){e=id,L(Do,e),L(Eo,t),id=e|t.baseLanes}function ko(){L(Do,id),L(Eo,Eo.current)}function Ao(){id=Do.current,be(Eo),be(Do)}var jo=ye(null),Mo=null;function No(e){var t=e.alternate;L(Ro,Ro.current&1),L(jo,e),Mo===null&&(t===null||Eo.current!==null||t.memoizedState!==null)&&(Mo=e)}function Po(e){L(Ro,Ro.current),L(jo,e),Mo===null&&(Mo=e)}function Fo(e){e.tag===22?(L(Ro,Ro.current),L(jo,e),Mo===null&&(Mo=e)):Io()}function Io(){L(Ro,Ro.current),L(jo,jo.current)}function Lo(e){be(jo),Mo===e&&(Mo=null),be(Ro)}var Ro=ye(0);function zo(e,t){L(jo,jo.current),L(Ro,t)}function Bo(e){be(Ro),be(jo),Mo===e&&(Mo=null)}function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ho=0,V=null,H=null,Uo=null,Wo=!1,Go=!1,Ko=!1,qo=0,Jo=0,Yo=null,Xo=0;function Zo(){throw Error(i(321))}function Qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Hr(e[n],t[n]))return!1;return!0}function $o(e,t,n,r,i,a){return Ho=a,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,F.H=e===null||e.memoizedState===null?gc:_c,Ko=!1,a=n(r,i),Ko=!1,Go&&(a=ts(t,n,r,i)),es(e),a}function es(e){F.H=hc;var t=H!==null&&H.next!==null;if(Ho=0,Uo=H=V=null,Wo=!1,Jo=0,Yo=null,t)throw Error(i(300));e===null||Pc||(e=e.dependencies,e!==null&&Ca(e)&&(Pc=!0))}function ts(e,t,n,r){V=e;var a=0;do{if(Go&&(Yo=null),Jo=0,Go=!1,25<=a)throw Error(i(301));if(a+=1,Uo=H=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}F.H=vc,o=t(n,r)}while(Go);return o}function ns(){var e=F.H,t=e.useState()[0];return t=typeof t.then==`function`?ls(t):t,e=e.useState()[0],(H===null?null:H.memoizedState)!==e&&(V.flags|=1024),t}function rs(){var e=qo!==0;return qo=0,e}function is(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function as(e){if(Wo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wo=!1}Ho=0,Uo=H=V=null,Go=!1,Jo=qo=0,Yo=null}function os(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Uo===null?V.memoizedState=Uo=e:Uo=Uo.next=e,Uo}function ss(){if(H===null){var e=V.alternate;e=e===null?null:e.memoizedState}else e=H.next;var t=Uo===null?V.memoizedState:Uo.next;if(t!==null)Uo=t,H=e;else{if(e===null)throw V.alternate===null?Error(i(467)):Error(i(310));H=e,e={memoizedState:H.memoizedState,baseState:H.baseState,baseQueue:H.baseQueue,queue:H.queue,next:null},Uo===null?V.memoizedState=Uo=e:Uo=Uo.next=e}return Uo}function cs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ls(e){var t=Jo;return Jo+=1,Yo===null&&(Yo=[]),e=eo(Yo,e,t),t=V,(Uo===null?t.memoizedState:Uo.next)===null&&(t=t.alternate,F.H=t===null||t.memoizedState===null?gc:_c),e}function us(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ls(e);if(e.$$typeof===ue)return;if(e.$$typeof===ie)return Ta(e)}throw Error(i(438,String(e)))}function ds(e){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=V.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=cs(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ce;return t.index++,n}function fs(e,t){return typeof t==`function`?t(e):t}function ps(e){return ms(ss(),H,e)}function ms(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ho&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===za&&(d=!0);else if((Ho&p)===p){u=u.next,p===za&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,V.lanes|=p,od|=p;f=u.action,Ko&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,V.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Hr(o,e.memoizedState)&&(Pc=!0,d&&(n=Ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hs(e){var t=ss(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Hr(o,t.memoizedState)||(Pc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function gs(e,t,n){var r=V,a=ss(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Hr((H||a).memoizedState,n);if(s&&(a.memoizedState=n,Pc=!0),a=a.queue,Vs(ys.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Uo!==null&&!!(Uo.memoizedState.tag&1),Is(e?9:8,{destroy:void 0},vs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,q===null)throw Error(i(349));o||Ho&127||_s(r,t,n)}return n}function _s(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=cs(),V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vs(e,t,n,r){t.value=n,t.getSnapshot=r,bs(t)&&xs(e)}function ys(e,t,n){return n(function(){bs(t)&&xs(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Hr(e,n)}catch{return!0}}function xs(e){var t=Oi(e,2);t!==null&&Pd(t,e,2)}function Ss(e){var t=os();if(typeof e==`function`){var n=e;if(e=n(),Ko){Qe(!0);try{n()}finally{Qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t}function Cs(e,t,n,r){return e.baseState=n,ms(e,H,typeof r==`function`?r:fs)}function ws(e,t,n,r,a){if(fc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};F.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ts(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ts(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=F.T,o={};o.types=a===null?null:a.types,F.T=o;try{var s=n(i,r),c=F.S;c!==null&&c(o,s),Es(e,t,s)}catch(n){Os(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),F.T=a}}else try{a=n(i,r),Es(e,t,a)}catch(n){Os(e,t,n)}}function Es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ds(e,t,n)},function(n){return Os(e,t,n)}):Ds(e,t,n)}function Ds(e,t,n){t.status=`fulfilled`,t.value=n,ks(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ts(e,n)))}function Os(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ks(t),t=t.next;while(t!==r)}e.action=null}function ks(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function As(e,t){return t}function js(e,t){if(B){var n=q.formState;if(n!==null){a:{var r=V;if(B){if(z){b:{for(var i=z,a=oa;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){z=lm(i.nextSibling),r=i.data===`F!`;break a}}ca(r)}r=!1}r&&(t=n[0])}}return n=os(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},n.queue=r,n=lc.bind(null,V,r),r.dispatch=n,r=Ss(!1),a=dc.bind(null,V,!1,r.queue),r=os(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ws.bind(null,V,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ms(e){return Ns(ss(),H,e)}function Ns(e,t,n){if(t=ms(e,t,As)[0],e=ps(fs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ls(t)}catch(e){throw e===Ya?Za:e}else r=t;t=ss();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(V.flags|=2048,Is(9,{destroy:void 0},Ps.bind(null,i,n),null)),[r,a,e]}function Ps(e,t){e.action=t}function Fs(e){var t=ss(),n=H;if(n!==null)return Ns(t,n,e);ss(),t=t.memoizedState,n=ss();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=V.updateQueue,t===null&&(t=cs(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ls(){return ss().memoizedState}function Rs(e,t,n,r){var i=os();V.flags|=e,i.memoizedState=Is(1|t,{destroy:void 0},n,r===void 0?null:r)}function zs(e,t,n,r){var i=ss();r=r===void 0?null:r;var a=i.memoizedState.inst;H!==null&&r!==null&&Qo(r,H.memoizedState.deps)?i.memoizedState=Is(t,a,n,r):(V.flags|=e,i.memoizedState=Is(1|t,a,n,r))}function Bs(e,t){Rs(8390656,8,e,t)}function Vs(e,t){zs(2048,8,e,t)}function Hs(e){V.flags|=4;var t=V.updateQueue;if(t===null)t=cs(),V.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Us(e){var t=ss().memoizedState;return Hs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Ws(e,t){return zs(4,2,e,t)}function Gs(e,t){return zs(4,4,e,t)}function Ks(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qs(e,t,n){n=n==null?null:n.concat([e]),zs(4,4,Ks.bind(null,t,e),n)}function Js(){}function Ys(e,t){var n=ss();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xs(e,t){var n=ss();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Qo(t,r[1]))return r[0];if(r=e(),Ko){Qe(!0);try{e()}finally{Qe(!1)}}return n.memoizedState=[r,t],r}function Zs(e,t,n){return n===void 0||Ho&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),V.lanes|=e,od|=e,n)}function Qs(e,t,n,r){return Hr(n,t)?n:Eo.current===null?!(Ho&106)||Ho&1073741824&&!(Y&261930)?(Pc=!0,e.memoizedState=n):(e=Md(),V.lanes|=e,od|=e,t):(e=Zs(e,n,r),Hr(e,t)||(Pc=!0),e)}function $s(e,t,n,r,i){var a=I.p;I.p=a!==0&&8>a?a:8;var o=F.T,s={};s.types=o===null?null:o.types,F.T=s,dc(e,!1,t,n);try{var c=i(),l=F.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?uc(e,t,Ua(c,r),jd(e)):uc(e,t,r,jd(e))}catch(n){uc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{I.p=a,o!==null&&s.types!==null&&(o.types=s.types),F.T=o}}function ec(){}function tc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=nc(e).queue;$s(e,a,t,ge,n===null?ec:function(){return rc(e),n(r)})}function nc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:ge},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rc(e){var t=nc(e);t.next===null&&(t=e.alternate.memoizedState),uc(e,t.next.queue,{},jd())}function ic(){return Ta(sh)}function ac(){return ss().memoizedState}function oc(){return ss().memoizedState}function sc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=_o(n);var r=vo(t,e,n);r!==null&&(Pd(r,t,n),yo(r,t,n)),t={cache:Ma()},e.payload=t;return}t=t.return}}function cc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fc(e)?pc(t,n):(n=Di(e,t,n,r),n!==null&&(Pd(n,e,r),mc(n,t,r)))}function lc(e,t,n){uc(e,t,n,jd())}function uc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fc(e))pc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Hr(s,o))return Ei(e,t,i,0),q===null&&Ti(),!1}catch{}if(n=Di(e,t,i,r),n!==null)return Pd(n,e,r),mc(n,t,r),!0}return!1}function dc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fc(e)){if(t)throw Error(i(479))}else t=Di(e,n,r,2),t!==null&&Pd(t,e,2)}function fc(e){var t=e.alternate;return e===V||t!==null&&t===V}function pc(e,t){Go=Wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gt(e,n)}}var hc={readContext:Ta,use:us,useCallback:Zo,useContext:Zo,useEffect:Zo,useImperativeHandle:Zo,useLayoutEffect:Zo,useInsertionEffect:Zo,useMemo:Zo,useReducer:Zo,useRef:Zo,useState:Zo,useDebugValue:Zo,useDeferredValue:Zo,useTransition:Zo,useSyncExternalStore:Zo,useId:Zo,useHostTransitionStatus:Zo,useFormState:Zo,useActionState:Zo,useOptimistic:Zo,useMemoCache:Zo,useCacheRefresh:Zo,useEffectEvent:Zo},gc={readContext:Ta,use:us,useCallback:function(e,t){return os().memoizedState=[e,t===void 0?null:t],e},useContext:Ta,useEffect:Bs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Rs(4194308,4,Ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){Rs(4,2,e,t)},useMemo:function(e,t){var n=os();t=t===void 0?null:t;var r=e();if(Ko){Qe(!0);try{e()}finally{Qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=os();if(n!==void 0){var i=n(t);if(Ko){Qe(!0);try{n(t)}finally{Qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=cc.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=os();return e={current:e},t.memoizedState=e},useState:function(e){e=Ss(e);var t=e.queue,n=lc.bind(null,V,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Js,useDeferredValue:function(e,t){return Zs(os(),e,t)},useTransition:function(){var e=Ss(!1);return e=$s.bind(null,V,e.queue,!0,!1),os().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=V,a=os();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||_s(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Bs(ys.bind(null,r,o,e),[e]),r.flags|=2048,Is(9,{destroy:void 0},vs.bind(null,r,o,n,t),null),n},useId:function(){var e=os(),t=q.identifierPrefix;if(B){var n=Qi,r=Zi;n=(r&~(1<<32-$e(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=qo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:ic,useFormState:js,useActionState:js,useOptimistic:function(e){var t=os();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=dc.bind(null,V,!0,n),n.dispatch=t,[e,t]},useMemoCache:ds,useCacheRefresh:function(){return os().memoizedState=sc.bind(null,V)},useEffectEvent:function(e){var t=os(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},_c={readContext:Ta,use:us,useCallback:Ys,useContext:Ta,useEffect:Vs,useImperativeHandle:qs,useInsertionEffect:Ws,useLayoutEffect:Gs,useMemo:Xs,useReducer:ps,useRef:Ls,useState:function(){return ps(fs)},useDebugValue:Js,useDeferredValue:function(e,t){return Qs(ss(),H.memoizedState,e,t)},useTransition:function(){var e=ps(fs)[0],t=ss().memoizedState;return[typeof e==`boolean`?e:ls(e),t]},useSyncExternalStore:gs,useId:ac,useHostTransitionStatus:ic,useFormState:Ms,useActionState:Ms,useOptimistic:function(e,t){return Cs(ss(),H,e,t)},useMemoCache:ds,useCacheRefresh:oc,useEffectEvent:Us},vc={readContext:Ta,use:us,useCallback:Ys,useContext:Ta,useEffect:Vs,useImperativeHandle:qs,useInsertionEffect:Ws,useLayoutEffect:Gs,useMemo:Xs,useReducer:hs,useRef:Ls,useState:function(){return hs(fs)},useDebugValue:Js,useDeferredValue:function(e,t){var n=ss();return H===null?Zs(n,e,t):Qs(n,H.memoizedState,e,t)},useTransition:function(){var e=hs(fs)[0],t=ss().memoizedState;return[typeof e==`boolean`?e:ls(e),t]},useSyncExternalStore:gs,useId:ac,useHostTransitionStatus:ic,useFormState:Fs,useActionState:Fs,useOptimistic:function(e,t){var n=ss();return H===null?(n.baseState=e,[e,n.queue.dispatch]):Cs(n,H,e,t)},useMemoCache:ds,useCacheRefresh:oc,useEffectEvent:Us};function yc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=_o(r);i.payload=t,n!=null&&(i.callback=n),t=vo(e,i,r),t!==null&&(Pd(t,e,r),yo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=_o(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=vo(e,i,r),t!==null&&(Pd(t,e,r),yo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=_o(n);r.tag=2,t!=null&&(r.callback=t),t=vo(e,r,n),t!==null&&(Pd(t,e,n),yo(t,e,n))}};function xc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,a):!0}function Sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bc.enqueueReplaceState(t,t.state,null)}function Cc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function wc(e){xi(e)}function Tc(e){console.error(e)}function Ec(e){xi(e)}function Dc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function kc(e,t,n){return n=_o(n),n.tag=3,n.payload={element:null},n.callback=function(){Dc(e,t)},n}function Ac(e){return e=_o(e),e.tag=3,e}function jc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Oc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Oc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Mc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Sa(t,n,a,!0),n=jo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Mo===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Qa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Qa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(B)return t=jo.current,t===null?(r!==sa&&(t=Error(i(423),{cause:r}),ma(Ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ui(r,n),a=kc(e.stateNode,r,a),bo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&(e=Error(i(422),{cause:r}),ma(Ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ui(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=kc(n.stateNode,r,e),bo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ac(a),jc(a,e,n,r),bo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Nc=Error(i(461)),Pc=!1;function Fc(e,t,n,r){t.child=e===null?po(t,null,n,r):fo(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return wa(t),r=$o(e,t,n,o,a,i),s=rs(),e!==null&&!Pc?(is(e,t,i),ul(e,t,i)):(B&&s&&ta(t),t.flags|=1,Fc(e,t,r,i),t.child)}function Lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Rc(e,t,a,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!dl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ur:n,n(o,r)&&e.ref===t.ref)return ul(e,t,i)}return t.flags|=1,e=Fi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Rc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ur(a,r)&&e.ref===t.ref){if(Pc=!1,t.pendingProps=r=a,dl(e,i))e.flags&131072&&(Pc=!0);else return t.lanes=e.lanes,ul(e,t,i)}}return Kc(e,t,n,r,i)}function zc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Vc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&qa(t,a===null?null:a.cachePool),a===null?ko():Oo(t,a),Fo(t);else return r=t.lanes=536870912,Vc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&qa(t,null),ko(),Io()):(qa(t,a.cachePool),Oo(t,a),Io(),t.memoizedState=null);return Fc(e,t,i,n),t.child}function Bc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Vc(e,t,n,r,i){var a=Ka();return a=a===null?null:{parent:ja._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&qa(t,null),ko(),Fo(t),e!==null&&Sa(e,t,r,!0),t.childLanes=i,null}function Hc(e,t){return t=tl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Uc(e,t,n){return fo(t,e.child,null,n),e=Hc(t,t.pendingProps),e.flags|=2,Lo(t),t.memoizedState=null,e}function Wc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=Hc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bc(null,e);if(Po(t),(e=z)?(e=am(e,oa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,z=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return Hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Po(t),a){if(t.flags&256)t.flags&=-257,t=Uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Pc||Sa(e,t,n,!1),a=(n&e.childLanes)!==0,Pc||a){if(Eo.current===null){if(r=q,r!==null&&(s=_t(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Oi(e,s),Pd(r,e,s),Nc;Kd()}t=Uc(e,t,n)}else e=o.treeContext,z=lm(s.nextSibling),ia=t,B=!0,aa=null,oa=!1,e!==null&&ra(t,e),t=Hc(t,r),t.flags|=134221824;return t}return e=Fi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Kc(e,t,n,r,i){return wa(t),n=$o(e,t,n,r,void 0,i),r=rs(),e!==null&&!Pc?(is(e,t,i),ul(e,t,i)):(B&&r&&ta(t),t.flags|=1,Fc(e,t,n,i),t.child)}function qc(e,t,n,r,i,a){return wa(t),t.updateQueue=null,n=ts(t,r,n,i),es(e),r=rs(),e!==null&&!Pc?(is(e,t,a),ul(e,t,a)):(B&&r&&ta(t),t.flags|=1,Fc(e,t,n,a),t.child)}function Jc(e,t,n,r,i){if(wa(t),t.stateNode===null){var a=ji,o=n.contextType;typeof o==`object`&&o&&(a=Ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=bc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ho(t),o=n.contextType,a.context=typeof o==`object`&&o?Ta(o):ji,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(yc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&bc.enqueueReplaceState(a,a.state,null),Co(t,r,a,i),So(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Cc(n,s);a.props=c;var l=a.context,u=n.contextType;o=ji,typeof u==`object`&&u&&(o=Ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Sc(t,a,r,o),mo=!1;var f=t.memoizedState;a.state=f,Co(t,r,a,i),So(),l=t.memoizedState,s||f!==l||mo?(typeof d==`function`&&(yc(t,n,d,r),l=t.memoizedState),(c=mo||xc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,go(e,t),o=t.memoizedProps,u=Cc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ji,typeof l==`object`&&l&&(c=Ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Sc(t,a,r,c),mo=!1,f=t.memoizedState,a.state=f,Co(t,r,a,i),So();var p=t.memoizedState;o!==d||f!==p||mo||e!==null&&e.dependencies!==null&&Ca(e.dependencies)?(typeof s==`function`&&(yc(t,n,s,r),p=t.memoizedState),(u=mo||xc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=fo(t,e.child,null,i),t.child=fo(t,null,n,i)):Fc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ul(e,t,i),e}function Yc(e,t,n,r){return fa(),t.flags|=256,Fc(e,t,n,r),t.child}var Xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zc(e){return{baseLanes:e,cachePool:Ja()}}function Qc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function $c(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Ro.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(B){if(i?No(t):Io(),(e=z)?(e=am(e,oa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,z=null)):e=null,e===null)throw ca(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Io(),i=t.mode,a=tl({mode:`hidden`,children:a},i),r=Ri(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Zc(n),r.childLanes=Qc(e,o,n),t.memoizedState=Xc,Bc(null,r)):(No(t),el(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return rl(e,t,a,o,r,c,s,n)}return i?(Io(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Fi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ri(i,a,n,null),i.flags|=2):i=Fi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Bc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Zc(n):(a=i.cachePool,a===null?a=Ja():(s=ja._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Qc(e,o,n),t.memoizedState=Xc,Bc(e.child,r)):(No(t),n=e.child,e=n.sibling,n=Fi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function el(e,t){return t=tl({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function tl(e,t){return e=Ni(22,e,null,t),e.lanes=0,e}function nl(e,t,n){return fo(t,e.child,null,n),e=el(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(No(t),t.flags&=-257,nl(e,t,c)):t.memoizedState===null?(Io(),o=a.fallback,s=t.mode,a=tl({mode:`visible`,children:a.children},s),o=Ri(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,fo(t,e.child,null,c),a=t.child,a.memoizedState=Zc(c),a.childLanes=Qc(e,r,c),t.memoizedState=Xc,Bc(null,a)):(Io(),t.child=e.child,t.flags|=128,null);if(No(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ma({value:a,source:null,stack:null})),nl(e,t,c)}if(Pc||Sa(e,t,c,!1),r=(c&e.childLanes)!==0,Pc||r){if(Eo.current!==null)return nl(e,t,c);if(r=q,r!==null&&(a=_t(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Oi(e,a),Pd(r,e,a),Nc;return om(o)||Kd(),nl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,z=lm(o.nextSibling),ia=t,B=!0,aa=null,oa=!1,e!==null&&ra(t,e),t=el(t,a.children),t.flags|=134221824,t)}function il(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ba(e.return,t,n)}function al(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Vo(n)===null&&(t=e),e=e.sibling}return t}function ol(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function sl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function cl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Ro.current;if(t.flags&128)return zo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,zo(t,o),i===`backwards`&&e!==null?(sl(e),Fc(e,t,r,n),sl(e)):Fc(e,t,r,n),r=B?qi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&il(e,n,t);else if(e.tag===19)il(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=al(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,sl(t)),ol(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,a,r);break;case`together`:ol(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=al(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,a,r)}return t.child}function ll(e,t,n){var r=t.pendingProps;return va(t,t.type,r.value),Fc(e,t,r.children,n),t.child}function ul(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Fi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ca(e)))}function fl(e,t,n){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),va(t,ja,e.memoizedState.cache),fa();break;case 27:case 5:De(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Po(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return No(t),t.flags|=128,null;r=Sa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?$c(e,t,n):(No(t),e=ul(e,t,n),e===null?null:e.sibling)}No(t);break;case 19:if(t.flags&128)return cl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Sa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return cl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),zo(t,Ro.current),r)break;return null;case 22:return t.lanes=0,zc(e,t,n,t.pendingProps);case 24:va(t,ja,e.memoizedState.cache)}return ul(e,t,n)}function pl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Pc=!0;else{if(!dl(e,n)&&!(t.flags&128))return Pc=!1,fl(e,t,n);Pc=!!(e.flags&131072)}}else Pc=!1,B&&t.flags&1048576&&ea(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=to(t.elementType),t.type=e,typeof e==`function`)Pi(e)?(r=Cc(e,r),t.tag=1,t=Jc(null,t,e,r,n)):(t.tag=0,t=Kc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ae){t.tag=11,t=Ic(null,t,e,r,n);break a}if(a===M){t.tag=14,t=Lc(null,t,e,r,n);break a}if(a===ie){t.tag=10,t.type=e,t=ll(null,t,n);break a}}throw t=me(e)||e,Error(i(306,t,``))}}return t;case 0:return Kc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Cc(r,t.pendingProps),Jc(e,t,r,a,n);case 3:a:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,go(e,t),Co(t,r,null,n);var s=t.memoizedState;if(r=s.cache,va(t,ja,r),r!==o.cache&&xa(t,[ja],n,!0),So(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Yc(e,t,r,n);break a}if(r!==a){a=Ui(Error(i(424)),t),ma(a),t=Yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(z=lm(e.firstChild),ia=t,B=!0,aa=null,oa=!0,n=po(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(fa(),r===a){t=ul(e,t,n);break a}Fc(e,t,r,n)}t=t.child}return t;case 26:return Gc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(t.stateNode=fp(t.type,t.pendingProps,Ce.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return De(t),e===null&&B&&(r=t.stateNode=hm(t.type,t.pendingProps,Ce.current),ia=t,oa=!0,a=z,Sp(t.type)?(um=a,z=lm(r.firstChild)):z=a),Fc(e,t,t.pendingProps.children,n),Gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=z)&&(r=rm(r,t.type,t.pendingProps,oa),r===null?a=!1:(t.stateNode=r,ia=t,z=lm(r.firstChild),oa=!1,a=!0)),a||ca(t)),De(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=$o(e,t,ns,null,null,n),sh._currentValue=a),Gc(e,t),Fc(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=z)&&(n=im(n,t.pendingProps,oa),n===null?e=!1:(t.stateNode=n,ia=t,z=null,e=!0)),e||ca(t)),null;case 13:return $c(e,t,n);case 4:return Te(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fo(t,null,r,n):Fc(e,t,r,n),t.child;case 11:return Ic(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Gc(e,t),Fc(e,t,r,n),t.child;case 8:return Fc(e,t,t.pendingProps.children,n),t.child;case 12:return Fc(e,t,t.pendingProps.children,n),t.child;case 10:return ll(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,wa(t),a=Ta(a),r=r(a),t.flags|=1,Fc(e,t,r,n),t.child;case 14:return Lc(e,t,t.type,t.pendingProps,n);case 15:return Rc(e,t,t.type,t.pendingProps,n);case 19:return cl(e,t,n);case 31:return Wc(e,t,n);case 22:return zc(e,t,n,t.pendingProps);case 24:return wa(t),r=Ta(ja),e===null?(a=Ka(),a===null&&(a=q,o=Ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ho(t),va(t,ja,a)):((e.lanes&n)!==0&&(go(e,t),Co(t,null,null,n),So()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,va(t,ja,r),r!==a.cache&&xa(t,[ja],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),va(t,ja,r))),Fc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:B&&ta(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Gc(e,t),Fc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ml(e){e.flags|=4}function hl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw no=Qa,Xa}}else e.flags&=-16777217}function gl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw no=Qa,Xa}}function _l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:dt(),e.lanes|=t,ud|=t)}function vl(e,t){if(!B)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function yl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ya(ja),Ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(da(t)?ml(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pa())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ml(t),o===null?(U(t),hl(t,a,null,r,n)):(U(t),gl(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(ml(t),U(t),gl(t,o)):(e=e.memoizedProps,e!==r&&ml(t),U(t),hl(t,a,e,r,n)),null;case 27:if(Oe(t),n=Ce.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),t.subtreeFlags&=-33554433,null}e=xe.current,da(t)?la(t,e):(e=hm(a,r,n),t.stateNode=e,ml(t))}return U(t),t.subtreeFlags&=-33554433,null;case 5:if(Oe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),t.subtreeFlags&=-33554433,null}if(o=xe.current,da(t))la(t,o);else{var s=lp(Ce.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Ct]=t,o[wt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ml(t)}}return U(t),t.subtreeFlags&=-33554433,hl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ml(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Ce.current,da(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ia,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ct]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ca(t,!0)}else e=lp(e).createTextNode(r),e[Ct]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=da(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Ct]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=pa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Lo(t),t):(Lo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Ct]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=pa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Lo(t),t):(Lo(t),null)}return Lo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_l(t,t.updateQueue),U(t),null);case 4:return Ee(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,U(t),null;case 10:return ya(t.type),U(t),null;case 19:if(Bo(t),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)vl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vo(e),o!==null){for(t.flags|=128,vl(r,!1),e=o.updateQueue,t.updateQueue=e,_l(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ii(n,e),n=n.sibling;return zo(t,Ro.current&1|2),B&&$i(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ve()>gd&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,_l(t,e),vl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!B)return U(t),null}else 2*Ve()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,vl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ve(),e.sibling=null,o=Ro.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||B?zo(t,o):(n=o,L(jo,t),L(Ro,n),Mo===null&&(Mo=t)),B&&$i(t,r.treeForkCount),e}return U(t),null;case 22:case 23:return Lo(t),Ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&_l(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&be(Ga),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya(ja),U(t),null;case 25:return null;case 30:return t.flags|=33554432,U(t),null}throw Error(i(156,t.tag))}function bl(e,t){switch(na(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(ja),Ee(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oe(t),null;case 31:if(t.memoizedState!==null){if(Lo(t),t.alternate===null)throw Error(i(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Lo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Bo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ee(),null;case 10:return ya(t.type),null;case 22:case 23:return Lo(t),Ao(),e!==null&&be(Ga),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(ja),null;case 25:return null;default:return null}}function xl(e,t){switch(na(t),t.tag){case 3:ya(ja),Ee();break;case 26:case 27:case 5:Oe(t);break;case 4:Ee();break;case 31:t.memoizedState!==null&&Lo(t);break;case 13:Lo(t);break;case 19:Bo(t);break;case 10:ya(t.type);break;case 22:case 23:Lo(t),Ao(),e!==null&&be(Ga);break;case 24:ya(ja)}}function Sl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Cl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function wl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{To(t,n)}catch(t){Z(e,e.return,t)}}}function Tl(e,t,n){n.props=Cc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function El(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=vi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Dl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Ol(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function kl(e){for(var t=e.return;t!==null&&(Ml(t)&&em(e.stateNode,t.stateNode),!jl(t));)t=t.return}function Al(e){for(var t=e.return;t!==null&&(Ml(t)&&tm(e.stateNode,t.stateNode),!jl(t));)t=t.return}function jl(e){return e.tag===5||e.tag===3||e.tag===27}function Ml(e){return e&&e.tag===7&&e.stateNode!==null}function Nl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Pl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[wt]=t}catch(t){Z(e,e.return,t)}}function Fl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Il(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yn)),Ol(e,r),R=!0;else if(i!==4&&(i===27&&(Ol(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ol(e,r),R=!0;else if(i!==4&&(i===27&&(Ol(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Rl(e,t,n,r),e=e.sibling;e!==null;)Rl(e,t,n,r),e=e.sibling}function zl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Ct]=e,t[wt]=n}catch(t){Z(e,e.return,t)}}var Bl=!1,Vl=null;function Hl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Bl=!0)}var Ul=null;function Wl(){var e=Ul;return Ul=null,e}var Gl=0;function Kl(e,t,n,r,i){return Gl=0,ql(e.child,t,n,r,i)}function ql(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Bl=!0,Tp(o,Gl===0?t:t+`_`+Gl,n),Gl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||ql(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Jl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Jl(e.child,t)),e=e.sibling}function Yl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Yl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=bi(t.default,t.share),t!==`none`&&(Kl(e,n,t,null,!1)||Jl(e.child,!1))}e=e.sibling}}function Xl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=vi(r,n),a=bi(r.default,n.paired?r.share:r.enter);a===`none`?Yl(e):Kl(e,i,a,null,!1)?(Yl(e),n.paired||t||Nd(e,r.onEnter)):Jl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e,t),e=e.sibling;else Yl(e)}function Zl(e){if(Vl!==null&&Vl.size!==0){var t=Vl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=bi(n.default,n.share);if(a!==`none`&&(Kl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Jl(e.child,!1)),t.delete(r),t.size===0)break}}}Zl(e)}e=e.sibling}}}function Ql(e){if(e.tag===30){var t=e.memoizedProps,n=vi(t,e.stateNode),r=Vl===null?void 0:Vl.get(n),i=bi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Kl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Vl.delete(n),Nd(e,t.onShare)):Jl(e.child,!1)),Vl!==null&&Zl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ql(e),e=e.sibling;else Vl!==null&&Zl(e)}function $l(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=vi(t,e.stateNode);t=bi(t.default,t.update),e.flags&=-5,t!==`none`&&Kl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&$l(e);e=e.sibling}}function eu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Jl(e.child,!1))}eu(e)}e=e.sibling}}function tu(e){if(e.tag===30)e.stateNode.paired=null,Jl(e.child,!1),eu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)tu(e),e=e.sibling;else eu(e)}function nu(e){for(e=e.child;e!==null;)e.tag===30?Jl(e.child,!1):e.subtreeFlags&33554432&&nu(e),e=e.sibling}function ru(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Gl<a.length){var l=a[Gl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Gl===0?n:n+`_`+Gl,i),s&&e.flags&4||(Ul===null&&(Ul=[]),Ul.push(c,Gl===0?r:r+`_`+Gl,t.memoizedProps)),Gl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:ru(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function iu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=vi(n,r),a=bi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Gl=0,i=ru(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&iu(e,t);e=e.sibling}}var au=!1,W=!1,ou=!1,su=!1,cu=typeof WeakSet==`function`?WeakSet:Set,lu=null,uu=!1,du=!1,fu=!1,pu=!1;function mu(e,t,n){if(e=e.containerInfo,sp=gh,e=Jr(e),Yr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,lu=t,t=n?9270:1024;lu!==null;){if(e=lu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Ql(r[a]);if(e.alternate===null&&e.flags&2)n&&Hl(e),hu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Ql(r),hu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Hl(e),hu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,lu=r):(n&&$l(e),hu(n))}}Vl=null}function hu(e){for(;lu!==null;){var t=lu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Cc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=vi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=bi(a.default,a.update),a!==`none`&&Kl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,lu=r;break}lu=t.return}}function gu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fu(e,n),r&4&&Sl(5,n);break;case 1:if(Fu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Cc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&wl(n),r&512&&El(n,n.return);break;case 3:if(Fu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{To(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&zl(n);case 26:case 5:Fu(e,n),t===null&&r&4&&Nl(n),r&512&&El(n,n.return);break;case 12:Fu(e,n);break;case 31:Fu(e,n),r&4&&wu(e,n);break;case 13:Fu(e,n),r&4&&Tu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||au,!r){var a=t!==null&&t.memoizedState!==null||W;t=au,i=W,au=r,(W=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Lu(e,n,r)):Fu(e,n),au=t,W=i}break;case 30:Fu(e,n),r&512&&El(n,n.return);break;case 7:r&512&&El(n,n.return);default:Fu(e,n)}}function _u(e,t){for(e=e.child;e!==null;)vu(e,t),e=e.sibling}function vu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}yu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,R=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&_u(e,t);break;default:_u(e,t)}}function yu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:vu(n,r);break a;case 22:n.memoizedState===null&&yu(n,r);break a;default:yu(n,r)}}e=e.sibling}}function bu(e){var t=e.alternate;t!==null&&(e.alternate=null,bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Mt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,xu=!1;function Su(e,t,n){for(n=n.child;n!==null;)Cu(e,t,n),n=n.sibling}function Cu(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount==`function`)try{Ze.onCommitFiberUnmount(Xe,n)}catch{}switch(n.tag){case 26:W||Dl(n,t),Su(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!W&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:W||Dl(n,t),Al(n);var r=G,i=xu;Sp(n.type)&&(G=n.stateNode,xu=!1),Su(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),G=r,xu=i;break;case 5:W||Dl(n,t),Al(n);case 6:if(n.tag===6&&Al(n),r=G,i=xu,G=null,Su(e,t,n),G=r,xu=i,G!==null){if(xu)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode),R=!0}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode),R=!0}catch(e){Z(n,t,e)}}break;case 18:G!==null&&(xu?(e=G,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(G,n.stateNode));break;case 4:r=G,i=xu,G=n.stateNode.containerInfo,xu=!0,Su(e,t,n),G=r,xu=i;break;case 0:case 11:case 14:case 15:Cl(2,n,t),W||Cl(4,n,t),Su(e,t,n);break;case 1:W||(Dl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Tl(n,t,r)),Su(e,t,n);break;case 21:Su(e,t,n);break;case 22:W=(r=W)||n.memoizedState!==null,Su(e,t,n),W=r;break;case 30:Dl(n,t),Su(e,t,n);break;case 7:W||Dl(n,t),Su(e,t,n);break;default:Su(e,t,n)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Eu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cu),t;default:throw Error(i(435,e.tag))}}function Du(e,t){var n=Eu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Ou(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){G=l.stateNode,xu=!1;break a}break;case 5:G=l.stateNode,xu=!1;break a;case 3:case 4:G=l.stateNode.containerInfo,xu=!0;break a}l=l.return}if(G===null)throw Error(i(160));Cu(s,c,o),G=null,xu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Au(t,e,n),t=t.sibling}var ku=null;function Au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Ou(t,e,n),ju(e),a&4&&(Cl(3,e,e.return),Sl(3,e),Cl(5,e,e.return));break;case 1:Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),a&64&&au&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ku,Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(au)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[At]||r[Ct]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Ct]=e,Lt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Ct]=e,Lt(r),t=r}e.stateNode=t}}else au||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Pl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||W||t.parentNode.removeChild(t)):a.count--,n===null?au||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Ou(t,e,n),ju(e),a&512&&(W||r===null||Dl(r,r.return)),r!==null&&a&4&&Pl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ou,ou=!1,Ou(t,e,n),ou=o,ju(e),a&512&&(W||r===null||Dl(r,r.return)),e.flags&32){t=e.stateNode;try{dn(t,``),R=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Pl(e,t,r===null?t:r.memoizedProps)),a&1024&&(su=!0);break;case 6:if(Ou(t,e,n),ju(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,R=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(R=!1,Wm=null,o=ku,ku=bm(t.containerInfo),Ou(t,e,n),ku=o,ju(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}su&&(su=!1,Mu(e)),R=!1;break;case 4:a=ou,ou=au,r=qt(),o=ku,ku=bm(e.stateNode.containerInfo),Ou(t,e,n),ju(e),ku=o,R&&du&&(fu=!0),R=r,ou=a;break;case 12:Ou(t,e,n),ju(e);break;case 31:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 13:Ou(t,e,n),ju(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Ve()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=au,l=W,u=ou;au=c||o,ou=u||o,W=l||s,Ou(t,e,n),W=l,ou=u,au=c,ju(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||au||W||(t=s||W,n=au,r=W,au=o||au,W=t,Iu(e,2),au=n,W=r),!o&&ou||_u(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Du(e,n))));break;case 19:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 30:a&512&&(W||r===null||Dl(r,r.return)),a=qt(),o=du,s=(n&335544064)===n,c=e.memoizedProps,du=s&&bi(c.default,c.update)!==`none`,Ou(t,e,n),ju(e),s&&r!==null&&R&&(e.flags|=4),du=o,R=a;break;case 21:break;case 7:a&512&&(W||r===null||Dl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ou(t,e,n),ju(e)}}function ju(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Fl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Ml(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(jl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Rl(e,Il(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(dn(l,``),n.flags&=-33),Rl(e,Il(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Ll(e,Il(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Nu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling;else iu(t,!1)}function Pu(e,t){var n=e.alternate;if(n===null)Xl(e,!1);else switch(e.tag){case 3:if(pu=uu=!1,Wl(),Nu(t,e),!uu&&!fu){if(e=Ul,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),pu=!0}Ul=null;break;case 5:Nu(t,e);break;case 4:r=uu,uu=!1,Nu(t,e),uu&&(fu=!0),uu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Nu(t,e):Xl(e,!1));break;case 30:r=uu,i=Wl(),uu=!1,Nu(t,e),uu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=vi(a,o),o=vi(n.memoizedProps,o);var s=bi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Gl=0,t=ru(e,n,t,o,s,a,!0),Gl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Ul=i):i!==null&&(i.push.apply(i,Ul),Ul=i),uu=e.flags&32?!0:r;break;default:Nu(t,e)}}function Fu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gu(e,t.alternate,t),t=t.sibling}function Iu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Cl(4,n,n.return),Iu(n,r);break;case 1:Dl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Tl(n,n.return,i),Iu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Dl(n,n.return),n.tag!==5&&n.tag!==27||Al(n),Iu(n,r);break;case 6:Al(n);break;case 26:Dl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||W||i.parentNode.removeChild(i),Iu(n,r);break;case 22:n.memoizedState===null&&Iu(n,r);break;case 30:Dl(n,n.return),Iu(n,r);break;case 7:Dl(n,n.return);default:Iu(n,r)}e=e.sibling}}function Lu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Lu(i,a,n),Sl(4,a);break;case 1:if(Lu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)wo(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&wl(a),El(a,a.return);break;case 27:n&2&&zl(a);case 5:a.tag!==5&&a.tag!==27||kl(a),Lu(i,a,n),s&&r===null&&o&4&&Nl(a),El(a,a.return);break;case 6:kl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||au||Km(bm(c.ownerDocument),a.type,c),Lu(i,a,n),s&&r===null&&o&4&&Nl(a),El(a,a.return);break;case 12:Lu(i,a,n);break;case 31:Lu(i,a,n),s&&o&4&&wu(i,a);break;case 13:Lu(i,a,n),s&&o&4&&Tu(i,a);break;case 22:a.memoizedState===null&&Lu(i,a,n),El(a,a.return);break;case 30:Lu(i,a,n),El(a,a.return);break;case 7:El(a,a.return);default:Lu(i,a,n)}t=t.sibling}}function Ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Na(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Na(e))}function Bu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Vu(e,t,n,r),t=t.sibling;else i&&nu(t)}function Vu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&tu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bu(e,t,n,r),a&2048&&Sl(9,t);break;case 1:Bu(e,t,n,r);break;case 3:Bu(e,t,n,r),i&&pu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Na(a)));break;case 12:if(a&2048){Bu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Bu(e,t,n,r);break;case 31:Bu(e,t,n,r);break;case 13:Bu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&tu(t),o._visibility&2?Bu(e,t,n,r):(o._visibility|=2,Hu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&tu(s),o._visibility&2?Bu(e,t,n,r):Uu(e,t)),a&2048&&Ru(s,t);break;case 24:Bu(e,t,n,r),a&2048&&zu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Jl(a.child,!0),Jl(t.child,!0))),Bu(e,t,n,r);break;default:Bu(e,t,n,r)}}function Hu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Hu(a,o,s,c,i),Sl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Hu(a,o,s,c,i)):u._visibility&2?Hu(a,o,s,c,i):Uu(a,o),i&&l&2048&&Ru(o.alternate,o);break;case 24:Hu(a,o,s,c,i),i&&l&2048&&zu(o.alternate,o);break;default:Hu(a,o,s,c,i)}t=t.sibling}}function Uu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Uu(n,r),i&2048&&Ru(r.alternate,r);break;case 24:Uu(n,r),i&2048&&zu(r.alternate,r);break;default:Uu(n,r)}t=t.sibling}}var Wu=8192;function Gu(e,t,n){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)Ku(e,t,n),e=e.sibling}function Ku(e,t,n){switch(e.tag){case 26:Gu(e,t,n),e.flags&Wu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ku,e.memoizedState,e.memoizedProps));break;case 5:Gu(e,t,n),e.flags&Wu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ku;ku=bm(e.stateNode.containerInfo),Gu(e,t,n),ku=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wu,Wu=16777216,Gu(e,t,n),Wu=r):Gu(e,t,n));break;case 30:if((e.flags&Wu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Vl===null&&(Vl=new Map),Vl.set(r,i)}Gu(e,t,n);break;default:Gu(e,t,n)}}function qu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];lu=r,Zu(r,e)}qu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yu(e),e=e.sibling}function Yu(e){switch(e.tag){case 0:case 11:case 15:Ju(e),e.flags&2048&&Cl(9,e,e.return);break;case 3:Ju(e);break;case 12:Ju(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Ju(e);break;default:Ju(e)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];lu=r,Zu(r,e)}qu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cl(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function Zu(e,t){for(;lu!==null;){var n=lu;switch(n.tag){case 0:case 11:case 15:Cl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Na(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,lu=r;else a:for(n=e;lu!==null;){r=lu;var i=r.sibling,a=r.return;if(bu(r),r===n){lu=null;break a}if(i!==null){i.return=a,lu=i;break a}lu=a}}}var Qu={getCacheForType:function(e){var t=Ta(ja),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ta(ja).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return K&2&&Y!==0?Y&-Y:F.T===null?bt():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||B){var e=it;it<<=1,!(it&3932160)&&(it=262144),ld=e}else ld=536870912}return e=jo.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(vi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),pt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||ct(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Ve(),10<a)){if(Rd(r,t,ld,!td),st(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:yn},Vl=null,Ku(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Ve():(a&4194048)===a?hd-Ve():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Hr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=lt(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-$e(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ht(e,n,t)}function zd(){return K&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,_a=ga=null,as(e),ao=null,oo=0,e=J;for(;e!==null;)xl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),q=e,J=n=Fi(e.current,null),Y=t,X=0,ed=null,td=!1,nd=ct(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=lt(e,t),Ti(),n}function Hd(e,t){V=null,F.H=hc,t===Ya||t===Za?(t=ro(),X=3):t===Xa?(t=ro(),X=4):X=t===Nc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Dc(e,Ui(t,e.current)))}function Ud(){var e=jo.current;return e===null?!0:(Y&4194048)===Y?Mo===null:(Y&62914560)===Y||Y&536870912?e===Mo:!1}function Wd(){var e=F.H;return F.H=hc,e===null?hc:e}function Gd(){var e=F.A;return F.A=Qu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&jo.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||q===null||Rd(q,Y,ld,!1)}function qd(e,t,n){var r=K;K|=2;var i=Wd(),a=Gd();(q!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:jo.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,_a=ga=null,K=r,F.H=i,F.A=a,J===null&&(q=null,Y=0,Ti()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=K;K|=2;var r=Wd(),a=Gd();q!==e||Y!==t?(_d=null,gd=Ve()+500,Vd(e,t)):nd=ct(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if($a(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:$a(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return _a=ga=null,F.H=r,F.A=a,K=n,J===null?(q=null,Y=0,Ti(),ad):0}function Xd(){for(;J!==null&&!ze();)Zd(J)}function Zd(e){var t=pl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=qc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:as(t);var r=t;r===ia&&(B?(ua(r),r.tag===5&&r.stateNode!=null&&(z=r.stateNode)):(ua(r),B=!0));default:xl(n,t),t=J=Ii(t,id),t=pl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){_a=ga=null,as(t),ao=null,oo=0;var i=t.return;try{if(Mc(e,i,t,n,Y)){ad=1,Dc(e,Ui(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Dc(e,Ui(n,e.current)),J=null;return}t.flags&32768?(B||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=jo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=yl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=bl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===q&&(J=q=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=wi,mt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ia(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Ge,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Bl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=F.T,F.T=null,i=I.p,I.p=2,a=K,K|=4;try{mu(e,t,n)}finally{K=a,I.p=i,F.T=r}}yd=1,Bl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Pu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=F.T,F.T=null;var i=I.p;I.p=2;var a=K;K|=4;try{du=fu=!1,Au(t,e,n),n=cp;var o=Jr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&qr(s.ownerDocument.documentElement,s)){if(c!==null&&Yr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Kr(s,h),v=Kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{K=a,I.p=i,F.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=F.T,F.T=null;var r=I.p;I.p=2;var i=K;K|=4;try{gu(e,t.alternate,t)}finally{K=i,I.p=r,F.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Be();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),yt(r),n=n.stateNode,Ze&&typeof Ze.onCommitFiberRoot==`function`)try{Ze.onCommitFiberRoot(Xe,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=F.T,a=I.p,I.p=2,F.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{F.T=n,I.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Na(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=yt(Sd),r=F.T,a=I.p;try{I.p=32>n?32:n,F.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,K&6)throw Error(i(331));var c=K;if(K|=4,Yu(o.current),Vu(o,o.current,s,n),K=c,Df(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot==`function`)try{Ze.onPostCommitFiberRoot(Xe,o)}catch{}return!0}finally{I.p=a,F.T=r,uf(e,t)}}function pf(e,t,n){t=Ui(n,t),t=kc(e.stateNode,t,2),e=vo(e,t,2),e!==null&&(pt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Ui(n,e),n=Ac(2),r=vo(t,n,2),r!==null&&(jc(n,r,t,e),pt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>Ve()-md?K&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=dt()),e=Oi(e,t),e!==null&&(pt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Le(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-$e(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=st(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||ct(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Ve(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-$e(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ut(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=st(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Re(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ct(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Re(r),yt(n)){case 2:case 8:n=We;break;case 32:n=Ge;break;case 268435456:n=qe;break;default:n=Ge}return r=jf.bind(null,e),n=Le(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Re(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=st(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Ve()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){K&6?Le(Ue,Of):kf()})}function Pf(){if(Tf===0){var e=za;e===0&&(e=rt,rt<<=1,!(rt&261888)&&(rt=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:vn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[wt]||null).action),o=r.submitter;o&&(t=(t=o[wt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Bn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);tc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),tc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<hi.length;Lf++){var Rf=hi[Lf];gi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}gi(si,`onAnimationEnd`),gi(ci,`onAnimationIteration`),gi(li,`onAnimationStart`),gi(`dblclick`,`onDoubleClick`),gi(`focusin`,`onFocus`),gi(`focusout`,`onBlur`),gi(ui,`onTransitionRun`),gi(di,`onTransitionStart`),gi(fi,`onTransitionCancel`),gi(pi,`onTransitionEnd`),Ht(`onMouseEnter`,[`mouseout`,`mouseover`]),Ht(`onMouseLeave`,[`mouseout`,`mouseover`]),Ht(`onPointerEnter`,[`pointerout`,`pointerover`]),Ht(`onPointerLeave`,[`pointerout`,`pointerover`]),Vt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Vt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Vt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Vt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Vt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Vt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){xi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){xi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Et];n===void 0&&(n=t[Et]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,zt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!kn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Nt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}En(function(){var r=a,i=xn(n),s=[];a:{var c=mi.get(e);if(c!==void 0){var l=Bn,u=e;switch(e){case`keypress`:if(Fn(n)===0)break a;case`keydown`:case`keyup`:l=ir;break;case`focusin`:u=`focus`,l=Yn;break;case`focusout`:u=`blur`,l=Yn;break;case`beforeblur`:case`afterblur`:l=Yn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=qn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Jn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=sr;break;case si:case ci:case li:l=Xn;break;case pi:l=cr;break;case`scroll`:case`scrollend`:l=Hn;break;case`wheel`:l=lr;break;case`copy`:case`cut`:case`paste`:l=Zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=ar;break;case`submit`:l=or;break;case`toggle`:case`beforetoggle`:l=ur}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Dn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==bn&&(u=n.relatedTarget||n.fromElement)&&(Nt(u)||u[Tt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Nt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=qn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=ar,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ft(c),h=l==null?u:Ft(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Nt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Ft(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Ar;else if(wr(c)){if(jr)_=Br;else{_=Rr;var v=Lr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&hn(r.elementType)&&(_=Ar):_=zr;if(_&&=_(e,r)){Tr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ft(r):window,e){case`focusin`:(wr(v)||v.contentEditable===`true`)&&(Zr=v,Qr=r,$r=null);break;case`focusout`:$r=Qr=Zr=null;break;case`mousedown`:ei=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ei=!1,ti(s,n,i);break;case`selectionchange`:if(Xr)break;case`keydown`:case`keyup`:ti(s,n,i)}var y;if(fr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else br?vr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(hr&&n.locale!==`ko`&&(br||b!==`onCompositionStart`?b===`onCompositionEnd`&&br&&(y=Pn()):(jn=i,Mn=`value`in jn?jn.value:jn.textContent,br=!0)),v=Jf(r,b),0<v.length&&(b=new Qn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=yr(n),y!==null&&(b.data=y)))),(y=mr?xr(e,n):Sr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new Qn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Dn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Dn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Dn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Dn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||dn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&dn(e,``+r);else return;break;case`className`:Yt(e,`class`,r);break;case`tabIndex`:Yt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Yt(e,n,r);break;case`style`:mn(e,r,o);return;case`data`:if(t!==`object`){Yt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=vn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=vn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=yn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=vn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Jt(e,`popover`,r);break;case`xlinkActuate`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Xt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Xt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Jt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=gn.get(n)||n,Jt(e,n,r);else return}R=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:mn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)dn(e,r);else if(typeof r==`number`||typeof r==`bigint`)dn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=yn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[wt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}R=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Jt(e,n,r)}return}R=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}on(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&cn(e,!!r,n,!0):cn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}un(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(hn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(R=!0),o=m;break;case`name`:m!==f&&(R=!0),a=m;break;case`checked`:m!==f&&(R=!0),u=m;break;case`defaultChecked`:m!==f&&(R=!0),d=m;break;case`value`:m!==f&&(R=!0),s=m;break;case`defaultValue`:m!==f&&(R=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}an(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(R=!0),p=o;break;case`defaultValue`:o!==l&&(R=!0),c=o;break;case`multiple`:o!==l&&(R=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?cn(e,!!n,n?[]:``,!1):cn(e,!!n,t,!0)):cn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(R=!0),p=a;break;case`defaultValue`:a!==o&&(R=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}ln(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(R=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(hn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Ct]=r,n[wt]=t,np(n,e,t),Lt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[At]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Nt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Mt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[At])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===yn&&(e.onclick=null),Mt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Mt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=I.d;I.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Pt(e);t!==null&&t.tag===5&&t.type===`form`?rc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=rn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Lt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+rn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+rn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+rn(n.imageSizes)+`"]`)):i+=`[href="`+rn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[jt]=!0,o.onload=o.onerror=function(){Rt(o)}),Lt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+rn(r)+`"][href="`+rn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Lt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=It(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Lt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=It(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Lt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=It(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Lt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Ce.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=It(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=It(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=It(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+rn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[jt]){r.loading=1;return}}else t=e.createElement(`link`),t[jt]=!0,t.onload=t.onerror=Rt.bind(null,t),np(t,`link`,n),Lt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+rn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+rn(n.href)+`"]`);if(r)return t.instance=r,Lt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Lt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Lt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Lt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Lt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Lt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[At]||a[Ct]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Lt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Lt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ie,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ni(3,null,null,t),e.current=a,a.stateNode=e,t=Ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ho(a),e}function uh(e){return e?(e=ji,e):ji}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=_o(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=vo(e,r,t),n!==null&&(Pd(n,e,t),yo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Oi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=vt(t);var n=Oi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=F.T;F.T=null;var a=I.p;try{I.p=2,yh(e,t,n,r)}finally{I.p=a,F.T=i}}function vh(e,t,n,r){var i=F.T;F.T=null;var a=I.p;try{I.p=8,yh(e,t,n,r)}finally{I.p=a,F.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Pt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=ot(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-$e(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(K&6)&&(gd=Ve()+500,Df(0,!1))}}break;case 31:case 13:s=Oi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=xn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Nt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(He()){case Ue:return 2;case We:return 8;case Ge:case Ke:return 32;case qe:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Pt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Nt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,xt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,xt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bn=r,n.target.dispatchEvent(r),bn=null}else return t=Pt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Pt(n);a!==null&&(e.splice(t,3),t-=3,tc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[wt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[wt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Tt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=bt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:F,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Xe=Jh.inject(qh),Ze=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=wc,s=Tc,c=Ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Tt]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),v=o(((e,t)=>{t.exports=_()})),y=c(g(),1),b=c(u(),1),x=v();function S({open:e,onClose:t,title:n,children:r}){return(0,b.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};return window.addEventListener(`keydown`,n),()=>window.removeEventListener(`keydown`,n)},[e,t]),e?(0,x.jsxs)(`div`,{className:`fixed inset-0 z-50`,style:{animation:`fade-in 0.2s ease both`},children:[(0,x.jsx)(`button`,{type:`button`,"aria-label":`Close ${n}`,onClick:t,className:`absolute inset-0 bg-slate-950/85 backdrop-blur-xl`}),(0,x.jsxs)(`section`,{role:`dialog`,"aria-modal":`true`,"aria-label":n,style:{animation:`sheet-up 0.38s cubic-bezier(0.2, 0.8, 0.2, 1) both`},className:`glass-strong absolute inset-x-2 bottom-2 flex max-h-[85vh] flex-col rounded-[2rem] md:inset-x-auto md:bottom-6 md:left-1/2 md:w-[28rem] md:max-h-[80vh] md:-translate-x-1/2`,children:[(0,x.jsx)(`div`,{className:`flex justify-center pt-3`,children:(0,x.jsx)(`span`,{className:`sheet-grip`,"aria-hidden":`true`})}),(0,x.jsxs)(`div`,{className:`flex items-center justify-between px-6 pb-3 pt-3`,children:[(0,x.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]`,children:n}),(0,x.jsx)(`button`,{type:`button`,onClick:t,className:`glass-btn px-4 py-1.5 text-sm font-semibold text-slate-100`,children:`Done`})]}),(0,x.jsx)(`div`,{className:`overflow-y-auto overscroll-contain px-6 pb-8 pt-2`,children:r})]})]}):null}var C=[{id:`guitar`,label:`Guitar`},{id:`trumpet`,label:`Trumpet`},{id:`piano`,label:`Piano`},{id:`earTraining`,label:`Ear Training`},{id:`theory`,label:`Theory`}],w=[`Register & Intonation`,`Register Graph`,`Scale Fingering Chart`,`Interval Shift`],T=[`Guess the Note`,`Build Scale`,`Guess the Scale`,`Recognize Chord`,`Build Chord`,`Recognize Interval`,`Build Interval`,`Chord Inversions`,`Chord Builder`],E=[`Interval Recognition`,`Diatonic Note Recognition`,`Chord Quality Recognition`,`Chord Inversion Recognition`,`Chord Relation Recognition`];function D(e,t){return e===null?[]:e===`guitar`?t:e===`trumpet`?w:e===`piano`?T:e===`theory`?[`Browse topics`]:E}function O({active:e,onClick:t,children:n,className:r=``}){return(0,x.jsx)(`button`,{type:`button`,onClick:t,"aria-pressed":e,className:`glass-btn rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-100 ${r}`,children:n})}function k({title:e,children:t}){return(0,x.jsxs)(`div`,{className:`mb-6 last:mb-0`,children:[(0,x.jsx)(`p`,{className:`mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400`,children:e}),t]})}function ee(){return(0,x.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-4 w-4`,"aria-hidden":`true`,children:(0,x.jsx)(`path`,{d:`M4 7h16M4 12h16M4 17h10`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`})})}function te({instrument:e,mode:t,guitarModes:n,difficulty:r,difficulties:i,exercise:a,exercises:o,menuOpen:s,onOpenMenu:c,onCloseMenu:l,onInstrumentChange:u,onModeChange:d,onDifficultyChange:f,onExerciseChange:p}){let m=e===null?`Instrument Learner`:C.find(t=>t.id===e)?.label??`Guitar`,h=D(e,n),g=e===`guitar`&&i?.length>0,_=e===`guitar`&&o?.length>0,v=[t,g?r:null,_?a:null].filter(Boolean).join(` · `);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`header`,{className:`sticky top-0 z-40 px-3 pt-3 md:px-6`,children:(0,x.jsxs)(`div`,{className:`glass-strong mx-auto flex max-w-7xl items-center gap-3 rounded-[1.5rem] px-3 py-2.5`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:c,"aria-haspopup":`dialog`,"aria-expanded":s,className:`btn-accent flex shrink-0 items-center gap-2 px-4 py-2.5 text-sm`,children:(0,x.jsxs)(`span`,{className:`relative z-10 flex items-center gap-2`,children:[(0,x.jsx)(ee,{}),`Menu`]})}),(0,x.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,x.jsx)(`p`,{className:`truncate text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]`,children:m}),(0,x.jsx)(`p`,{className:`truncate text-base font-semibold text-white`,children:v})]})]})}),(0,x.jsxs)(S,{open:s,onClose:l,title:`Instrument Learner`,children:[(0,x.jsx)(k,{title:`Instrument`,children:(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:C.map(t=>(0,x.jsx)(O,{active:e===t.id,onClick:()=>u(t.id),children:t.label},t.id))})}),e!==null&&(0,x.jsx)(k,{title:`Mode`,children:(0,x.jsx)(`div`,{className:`flex flex-col gap-2`,children:h.map(e=>(0,x.jsx)(O,{active:t===e,onClick:()=>d(e),children:e},e))})}),g&&(0,x.jsx)(k,{title:`Difficulty`,children:(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:i.map(e=>(0,x.jsx)(O,{active:r===e,onClick:()=>f(e),children:e},e))})}),_&&(0,x.jsx)(k,{title:`Exercise`,children:(0,x.jsx)(`div`,{className:`flex flex-col gap-2`,children:o.map(e=>(0,x.jsx)(O,{active:a===e,onClick:()=>p(e),children:e},e))})})]})]})}var A=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],ne=[`E4`,`B3`,`G3`,`D3`,`A2`,`E2`],re={unison:0,m2:1,M2:2,m3:3,M3:4,P4:5,tritone:6,P5:7,m6:8,M6:9,m7:10,M7:11,octave:12},ie={unison:`unison`,m2:`m2`,M2:`M2`,m3:`m3`,M3:`M3`,P4:`P4`,tritone:`tritone`,P5:`P5`,m6:`m6`,M6:`M6`,m7:`m7`,M7:`M7`,octave:`octave`},ae={major:[0,4,7],minor:[0,3,7],diminished:[0,3,6],augmented:[0,4,8]};function oe(e){return{Cb:`B`,Db:`C#`,Eb:`D#`,Fb:`E`,Gb:`F#`,Ab:`G#`,Bb:`A#`}[e]??e.replace(`b`,`#`)}function j(e){let t=/^([A-G](?:#|b)?)(-?\d)?$/.exec(e.trim());if(!t)throw Error(`Invalid note: ${e}`);let[,n,r]=t,i=oe(n),a=A.indexOf(i),o=r===void 0?4:Number(r);if(a===-1)throw Error(`Unsupported pitch: ${n}`);return(o+1)*12+a}function M(e){let t=(e%12+12)%12,n=Math.floor(e/12)-1;return`${A[t]}${n}`}function N(e,t){return e<0||e>=ne.length?null:M(j(ne[e])+t)}function se(e){let t=[],n=P(e);for(let e=0;e<ne.length;e+=1)for(let r=0;r<=15;r+=1){let i=N(e,r);P(i)===n&&t.push({string:e,fret:r,note:i})}return t.length?t[Math.floor(Math.random()*t.length)]:{string:0,fret:0,note:e}}function P(e){let t=/^([A-G](?:#|b)?)/.exec(e);if(!t)return null;let n=oe(t[1]);return A.indexOf(n)}function ce(e){return A[(e%12+12)%12]??null}function le(e,t,n=`any`,r=0,i=15){let a=(P(e)+t)%12,o=[];for(let e=0;e<ne.length;e+=1)if(n===`any`||String(e+1)===String(n))for(let t=r;t<=i;t+=1){let n=N(e,t);P(n)===a&&o.push({string:e,fret:t,note:n})}return o}function ue(e,t){let n=j(e);return(ae[t]??ae.major).map(e=>M(n+e))}function de(e,t){let n=j(e),r={major:[0,4,7],minor:[0,3,7],7:[0,4,7,10],maj7:[0,4,7,11],m7:[0,3,7,10],minmaj7:[0,3,7,11],sus4:[0,5,7],sus2:[0,2,7],add9:[0,4,7,14],9:[0,4,7,10,14],maj9:[0,4,7,11,14],m9:[0,3,7,10,14],11:[0,4,7,10,14,17],13:[0,4,7,10,14,21],aug:[0,4,8],dim:[0,3,6],dim7:[0,3,6,9],"half-dim7":[0,3,6,10]};return(r[t]??r[7]).map(e=>M(n+e))}function fe(e,t){let n=e===`major`?[`major`,`minor`,`minor`,`major`,`major`,`minor`,`diminished`]:[`minor`,`diminished`,`major`,`minor`,`minor`,`major`,`major`];return n[(t-1)%n.length]}function pe(e,t,n){let r=t===`major`?[0,2,4,5,7,9,11]:[0,2,3,5,7,8,10],i=fe(t,n),a=M(j(e)+r[(n-1)%r.length]);return{root:a,notes:ue(a,i),quality:i}}var me=[0,3,5,7,10];function he(e,t,n=15){let r=((t-1)%5+5)%5,i=ne.length-1,a=j(ne[i]),o=(P(e)-P(ne[i])+12)%12,s=e=>{let t=[],n=a+e;for(let e=0;e<12;e+=1){t.push(n);let i=me[(r+e)%5],a=me[(r+e+1)%5];n+=(a-i+12)%12}let o=[];for(let e=0;e<ne.length;e+=1){let n=i-e,r=j(ne[n]);[t[2*e],t[2*e+1]].forEach(e=>{let t=e-r;o.push({string:n,fret:t,note:N(n,t)})})}return o},c=o+me[r],l=s(c);return Math.max(...l.map(e=>e.fret))>n&&(c-=12,l=s(c)),l.filter(e=>e.fret>=0&&e.fret<=n)}function F(e){return ie[e]??e}var I=`instrumentLearner.showFretNumbers`,ge=new Set;function _e(){try{return window.localStorage.getItem(I)!==`false`}catch{return!0}}var ve=_e();function ye(e){ve=typeof e==`function`?e(ve):e;try{window.localStorage.setItem(I,String(ve))}catch{}ge.forEach(e=>e())}function be(e){return ge.add(e),()=>ge.delete(e)}function L(){return[(0,b.useSyncExternalStore)(be,()=>ve,()=>!0),ye]}var xe=15,Se=[3,5,7,9,15],Ce=[12],we=40,Te=48,Ee=10,De=44,Oe=Array.from({length:xe},(e,t)=>2**(-t/24)-2**(-(t+1)/24)).map(e=>`minmax(0, ${(e*100).toFixed(3)}fr)`).join(` `),ke=`${we}px ${Te}px ${Ee}px ${Oe}`,Ae=98,je=[{px:1,wound:!1},{px:1.5,wound:!1},{px:2,wound:!1},{px:2.5,wound:!0},{px:3.2,wound:!0},{px:4,wound:!0}],Me=ne.map((e,t)=>{let n=e.replace(/-?\d+$/,``);return t===0?n.toLowerCase():n}),Ne={backgroundColor:`#4a2a18`,backgroundImage:[`repeating-linear-gradient(0deg, rgba(0,0,0,0.10) 0 1px, transparent 1px 6px)`,`repeating-linear-gradient(0deg, rgba(255,210,160,0.05) 0 2px, transparent 2px 11px)`,`linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 14%, rgba(0,0,0,0) 86%, rgba(0,0,0,0.35) 100%)`].join(`,`),boxShadow:`inset 0 0 30px rgba(0,0,0,0.5)`},Pe={boxShadow:`inset -2px 0 0 #d4d4d8, inset -3px 0 0 rgba(0,0,0,0.45)`},Fe={background:`linear-gradient(90deg, #cfc2a3, #f4eedd 45%, #cfc2a3)`,boxShadow:`2px 0 4px rgba(0,0,0,0.55)`},Ie={background:`radial-gradient(circle at 30% 30%, #ffffff, #ddd5c3 55%, #a99f88)`,opacity:.85,boxShadow:`0 1px 2px rgba(0,0,0,0.5)`};function Le({px:e,wound:t}){return{top:`calc(50% - ${e/2}px)`,height:`${e}px`,left:we,background:t?`repeating-linear-gradient(90deg, #d2b27a 0 2px, #8c6a34 2px 3px)`:`linear-gradient(180deg, #f8fafc, #94a3b8)`,boxShadow:`0 1px 2px rgba(0,0,0,0.65)`}}var Re={box:`bg-cyan-300/30 ring-2 ring-cyan-200/70`,root:`bg-cyan-400 text-slate-950 ring-2 ring-cyan-100`,selected:`bg-emerald-300 text-slate-950`,correct:`bg-yellow-300 text-slate-950`,wrong:`bg-red-400 text-slate-950`,missed:`border-2 border-dashed border-yellow-300 bg-yellow-300/15 text-yellow-100`,highlighted:`bg-amber-300 text-slate-950 ring-2 ring-amber-100`,allSelected:`bg-amber-100/30 ring-1 ring-amber-100/40`,dragPreview:`bg-cyan-100/25 ring-2 ring-cyan-100/70`,scale:`bg-sky-300/20 ring-1 ring-sky-200/30`};function ze({rootPosition:e,selectedNotes:t=[],answerState:n,onToggle:r,revealNames:i,boxPositions:a=[],requiredString:o=`any`,requiredStrings:s=[],validPositions:c=[],highlightedPosition:l=null,showAllSelectedNotes:u=!1,showScaleNotes:d=!1,scalePitchClasses:f=[],onDragTranspose:p,getExplorerDragPreview:m,displayScaleDegrees:h=!1,scaleRoot:g=null,scaleType:_=`major`,showFretNumbers:v,customMarkers:y=null}){let[S]=L(),C=v??S,w=(0,b.useRef)(null),T=(0,b.useRef)(!1),[E,D]=(0,b.useState)(null),O=e=>{if(!p||!w.current||!e)return;let t=e.closest(`button[data-string][data-fret]`);t&&D({start:w.current,target:{string:Number(t.dataset.string),fret:Number(t.dataset.fret)}})},{selectedKeys:k,validKeys:ee,boxKeys:te,rootKey:A,highlightedKey:re,selectedPitchClasses:ie}=(0,b.useMemo)(()=>{let n=e=>`${e.string}-${e.fret}`;return{selectedKeys:new Set(t.map(n)),validKeys:new Set(c.map(n)),boxKeys:new Set(a.map(n)),rootKey:e?n(e):null,highlightedKey:l?n(l):null,selectedPitchClasses:new Set(t.map(e=>P(e.note)))}},[t,c,a,e,l]),ae=n===`submitted`,oe=_===`minor`?[`1`,`2`,`b3`,`4`,`5`,`b6`,`b7`]:[`1`,`2`,`3`,`4`,`5`,`6`,`7`],j=[`1`,`b2`,`2`,`b3`,`3`,`4`,`b5`,`5`,`b6`,`6`,`b7`,`7`],M=e=>{if(!h||!g)return e.replace(/-?\d+$/,``);let t=(P(e)-P(g)+12)%12,n=(_===`minor`?[0,2,3,5,7,8,10]:[0,2,4,5,7,9,11]).indexOf(t);return n>=0?oe[n]:j[t]},se=(0,b.useMemo)(()=>{if(!E||!m)return new Set;let e=m(E.start,E.target);return new Set((e??[]).map(e=>`${e.string}-${e.fret}`))},[E,m]);function ce(e,t){if(y?.has(e))return`custom`;let n=k.has(e),r=ee.has(e);return ae&&n?r?`correct`:`wrong`:n?`selected`:se.has(e)?`dragPreview`:u&&ie.has(P(t))?`allSelected`:d&&f.includes(P(t))?`scale`:ae&&r?`missed`:e===re?`highlighted`:e===A?`root`:te.has(e)?`box`:null}return(0,x.jsx)(`div`,{className:`overflow-x-auto overscroll-x-contain glass p-2 shadow-2xl shadow-black/40 md:p-4`,children:(0,x.jsxs)(`div`,{className:`min-w-[600px] md:min-w-[820px]`,children:[(0,x.jsxs)(`div`,{className:`relative overflow-hidden rounded-md border border-black/70`,style:Ne,onPointerMove:e=>O(e.target),onPointerUp:()=>{if(!p||!w.current||!E)return;let e=w.current,t=E.target;w.current=null,D(null),(e.string!==t.string||e.fret!==t.fret)&&(T.current=!0,p(e,t))},onPointerCancel:()=>{w.current=null,D(null)},children:[(0,x.jsx)(`div`,{className:`pointer-events-none absolute inset-y-0 right-0 grid`,style:{left:Ae,gridTemplateColumns:Oe},"aria-hidden":`true`,children:Array.from({length:xe},(e,t)=>{let n=t+1,r=Se.includes(n),i=Ce.includes(n);return(0,x.jsxs)(`div`,{className:`relative`,children:[r&&(0,x.jsx)(`span`,{className:`absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full`,style:Ie}),i&&[`33.33%`,`66.67%`].map(e=>(0,x.jsx)(`span`,{className:`absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full`,style:{...Ie,top:e}},e))]},`inlay-${n}`)})}),ne.map((e,t)=>{let n=s.length>0?s.includes(t):o!==`any`&&String(t+1)===String(o);return(0,x.jsxs)(`div`,{className:[`relative grid`,n?`bg-cyan-200/10`:``].join(` `),style:{gridTemplateColumns:ke,height:De},children:[(0,x.jsx)(`div`,{className:[`flex items-center justify-center bg-[#2a170d] text-sm font-semibold`,n?`text-cyan-200`:`text-amber-100/80`].join(` `),title:`String ${t+1}`,children:i?Me[t]:``}),Array.from({length:16},(e,n)=>{let a=`${t}-${n}`,o=a===A,s=N(t,n),c=ce(a,s),l=c===`custom`?y.get(a):null,u=i&&c&&c!==`box`,d=n===0,f=(0,x.jsxs)(`button`,{"data-string":t,"data-fret":n,type:`button`,onPointerDown:e=>{p&&k.has(a)&&(e.preventDefault(),w.current={string:t,fret:n},D({start:{string:t,fret:n},target:{string:t,fret:n}}))},onPointerEnter:e=>O(e.target),onClick:()=>{if(T.current){T.current=!1;return}r(t,n)},"aria-pressed":k.has(a),"aria-label":`${s} on string ${t+1}, ${d?`open`:`fret ${n}`}`,className:[`group relative flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300`,d?`bg-[#2a170d]`:``].join(` `),style:{...d?{}:Pe,touchAction:p&&k.has(a)?`none`:`manipulation`},children:[(0,x.jsx)(`span`,{className:`pointer-events-none absolute z-20 h-6 w-6 rounded-full bg-white/0 transition-colors group-hover:bg-white/20`}),c&&(0,x.jsx)(`span`,{className:[`pointer-events-none absolute z-20 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold shadow-md shadow-black/50`,l?l.className:Re[c],te.has(a)&&c!==`box`?`ring-2 ring-cyan-200/70`:``,o&&c!==`root`&&c!==`box`?`ring-2 ring-cyan-300 ring-offset-1 ring-offset-black/50`:``].join(` `),children:l?l.label:u?M(s):``})]},a);return n===1?(0,x.jsx)(Be,{children:f},a):f}),(0,x.jsx)(`span`,{className:`pointer-events-none absolute right-0 z-10`,style:Le(je[t])})]},`string-${t}`)})]}),C&&(0,x.jsxs)(`div`,{className:`mt-1.5 grid text-xs text-slate-500`,style:{gridTemplateColumns:ke},"aria-hidden":`true`,children:[(0,x.jsx)(`span`,{}),(0,x.jsx)(`span`,{className:`text-center`,children:`open`}),(0,x.jsx)(`span`,{}),Array.from({length:xe},(e,t)=>{let n=t+1,r=Se.includes(n)||Ce.includes(n);return(0,x.jsx)(`span`,{className:[`text-center`,r?`font-semibold text-slate-300`:``].join(` `),children:n},`fret-num-${n}`)})]})]})})}function Be({children:e}){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{style:Fe,"aria-hidden":`true`}),e]})}function Ve({onSubmit:e,onNew:t,newLabel:n=`New Question`,onExtra:r,extraLabel:i,onControls:a}){let o=`min-w-0 flex-1 rounded-2xl px-2 py-3 text-center text-sm font-semibold leading-tight transition`;return(0,x.jsx)(`div`,{className:`sticky bottom-3 z-30 mt-8 px-1 pb-[env(safe-area-inset-bottom)]`,children:(0,x.jsxs)(`div`,{className:`glass-strong mx-auto flex max-w-2xl gap-2 rounded-[1.75rem] p-2`,children:[a&&(0,x.jsx)(`button`,{type:`button`,onClick:a,className:`${o} glass-btn text-slate-100`,children:`Controls`}),e&&(0,x.jsx)(`button`,{type:`button`,onClick:e,className:`${o} btn-success`,children:`Submit`}),r&&(0,x.jsx)(`button`,{type:`button`,onClick:r,className:`${o} glass-btn text-slate-100`,children:i}),t&&(0,x.jsx)(`button`,{type:`button`,onClick:t,className:`${o} btn-accent`,children:n})]})})}var He=[`Intervals`,`Fill in the Chords`,`Guess the Note`,`Scale & Triads`,`Fretboard Explorer`,`Pentatonics`,`Chord Builder`],Ue=[`Easy`,`Hard`],We=[`Find triad`,`Highlight degree`],Ge=[`I`,`II`,`III`,`IV`,`V`,`VI`,`VII`];function Ke(e){return e[Math.floor(Math.random()*e.length)]}function qe(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Je(e,t=`any`,n=0,r=15){return t!==`any`&&(e=e.filter(e=>String(e.string+1)===String(t))),e.filter(e=>e.fret>=n&&e.fret<=r)}var Ye=15;function Xe(e,t,{maxSpan:n=3,maxFret:r=Ye}={}){let i=e.map(P),a=t.map(e=>{let t=[];for(let n=0;n<=r;n+=1){let r=N(e,n),a=i.indexOf(P(r));a!==-1&&t.push({string:e,fret:n,note:r,tone:a})}return t}),o=e=>a[0].flatMap(t=>a[1].flatMap(n=>a[2].flatMap(r=>{if(new Set([t.tone,n.tone,r.tone]).size!==3)return[];let i=[t.fret,n.fret,r.fret],a=Math.max(...i)-Math.min(...i);return a<=e?[{positions:[t,n,r],span:a}]:[]})));for(let e=n;e<=n+2;e+=1){let t=o(e);if(t.length)return t}return[]}function Ze(e){let t=new Map;return e.forEach(e=>t.set(`${e.string}-${e.fret}`,e)),[...t.values()]}var Qe={Easy:[`major`,`minor`,`aug`,`dim`],Hard:[`7`,`maj7`,`m7`,`minmaj7`,`dim7`,`half-dim7`]},$e={major:`major`,minor:`minor`,aug:`augmented`,dim:`diminished`,7:`dominant 7th`,maj7:`major 7th`,m7:`minor 7th`,minmaj7:`minor-major 7th`,dim7:`fully diminished 7th`,"half-dim7":`half-diminished 7th`};function et(e=`Easy`){let t=Ke(A),n=Ke(Qe[e]??Qe.Easy),r=de(t,n),i=qe(0,r.length-1),a=r[i],o=se(a);return{mode:`Fill in the Chords`,difficulty:e,rootNote:t,rootPosition:o,highlightedPosition:o,chordPitchClasses:r.map(P),chordQuality:n,chordToneNames:r.map(e=>e.replace(/-?\d+$/,``)),validPositions:r.flatMap(e=>le(e,0,`any`)),requiredString:`any`,prompt:`The highlighted note is the ${[`root`,`third`,`fifth`,`seventh`][i]} of a ${$e[n]} chord. Find all chord tones.`,boxPositions:[]}}function tt(){let e=se(Ke(A));return{mode:`Guess the Note`,rootPosition:null,highlightedPosition:e,validPositions:[e],boxPositions:[],requiredString:`any`,prompt:`What note is highlighted?`}}function nt(e=`Find triad`,t=null){let n=t?.rootNote??Ke(A),r=t?.scaleType??Ke([`major`,`minor`]),i=qe(0,3),a=[i,i+1,i+2],o=Ke(Xe(pe(n,r,1).notes,a)).positions.map(e=>({...e,highlighted:!0})),s=qe(1,7),c=Math.random()<.8?a:(()=>{let e=qe(0,3);return[e,e+1,e+2]})(),l=pe(n,r,s);if(e===`Highlight degree`){let t=Xe(l.notes,c);return{mode:`Scale & Triads`,scaleTriadExercise:e,rootNote:n,scaleType:r,rootPosition:null,validPositions:Ze(t.flatMap(e=>e.positions)),boxPositions:o,requiredString:`any`,requiredStrings:c,targetStrings:c,targetDegree:s,validShapes:t,prompt:`Highlight the triad on degree ${Ge[s-1]} of the ${n} ${r} scale.`}}let u=Xe(l.notes,c);return{mode:`Scale & Triads`,scaleTriadExercise:e,rootNote:n,scaleType:r,rootPosition:null,validPositions:Ze(u.flatMap(e=>e.positions)),validShapes:u,boxPositions:o,requiredString:`any`,requiredStrings:c,targetStrings:c,targetDegree:s,prompt:`Highlighted is fundamental. Find the triad on degree ${Ge[s-1]} on strings ${c.map(e=>e+1).join(`, `)}.`}}function rt(){let e=Ke([`major`,`minor`]),t=Ke(A),n=qe(1,5),r=e===`major`?[{label:`tonic`,semitones:0},{label:`2nd`,semitones:2},{label:`3rd`,semitones:4},{label:`5th`,semitones:7},{label:`6th`,semitones:9}]:[{label:`tonic`,semitones:0},{label:`minor 3rd`,semitones:3},{label:`4th`,semitones:5},{label:`5th`,semitones:7},{label:`minor 7th`,semitones:10}],i=Ke(r),a=he(e===`major`?M(j(t)-3):t,n),o=e=>(P(e.note)-P(t)+12)%12,s=Math.random(),c=s<.34?`find-degree`:s<.67?`identify-degree`:`identify-fundamental`;if(c===`find-degree`)return{mode:`Pentatonics`,rootNote:t,rootPosition:null,validPositions:a.filter(e=>o(e)===i.semitones),boxPositions:a,requiredString:`any`,pentatonicExercise:`find-degree`,pentatonicScaleType:e,pentatonicAnswer:i.label,prompt:`Find the ${i.label} of the ${t} ${e} pentatonic scale.`};if(c===`identify-fundamental`){let n=Math.max(...a.map(e=>e.string)),i=a.filter(e=>e.string===n).reduce((e,t)=>t.fret<e.fret?t:e),s=r.find(e=>e.semitones===o(i));return{mode:`Pentatonics`,rootNote:t,rootPosition:null,highlightedPosition:i,validPositions:[i],boxPositions:a,requiredString:`any`,pentatonicExercise:`identify-fundamental`,pentatonicScaleType:e,pentatonicAnswer:s.label,prompt:`What degree of the ${t} ${e} pentatonic scale is the lowest note of this box?`}}let l=Ke(a.filter(e=>o(e)===i.semitones));return{mode:`Pentatonics`,rootNote:t,rootPosition:null,highlightedPosition:l,validPositions:[l],boxPositions:a,requiredString:`any`,pentatonicExercise:`identify-degree`,pentatonicScaleType:e,pentatonicAnswer:i.label,prompt:`What degree of the ${t} ${e} pentatonic scale is the highlighted note?`}}function it(e,t=`Easy`,n=`Find triad`,r=null){switch(e){case`Intervals`:{let t=Ke(A),n=Ke(Object.keys(re)),r=se(t),i=Math.random()>.5?`any`:String(qe(1,6));return{mode:e,rootNote:t,rootPosition:r,validPositions:Je(le(t,re[n],i),i),requiredString:i,intervalLabel:F(n),semitones:re[n],prompt:at({intervalLabel:F(n),semitones:re[n],requiredString:i},`both`),boxPositions:[]}}case`Fill in the Chords`:return et(t);case`Guess the Note`:return tt();case`Fretboard Explorer`:return{mode:`Fretboard Explorer`,rootPosition:null,highlightedPosition:null,validPositions:[],boxPositions:[],requiredString:`any`};case`Scale & Triads`:return nt(n,r);case`Pentatonics`:return rt();default:return it(`Intervals`,t)}}function at({intervalLabel:e,semitones:t,requiredString:n=`any`},r=`both`){return`Find the ${r===`name`?e:r===`semitones`?`${t} semitone${t===1?``:`s`}`:`${e} (${t})`} of the highlighted note${n===`any`?``:` on string ${n}`}.`}var ot=[`identify-degree`,`identify-fundamental`],st=[`C`,`C#`,`D`,`D#`,`E`,`F`,`F#`,`G`,`G#`,`A`,`A#`,`B`],ct=`px-3 py-2.5 text-sm font-semibold transition`,lt=`field px-3 py-2.5 text-sm`;function ut({question:e,selectedDegree:t,answerState:n,onSelect:r}){if(!ot.includes(e.pentatonicExercise))return null;let i=e.pentatonicScaleType===`major`?[`tonic`,`2nd`,`3rd`,`5th`,`6th`]:[`tonic`,`minor 3rd`,`4th`,`5th`,`minor 7th`];return(0,x.jsxs)(`div`,{className:`glass p-3`,children:[(0,x.jsx)(`p`,{className:`mb-2 text-xs uppercase tracking-[0.2em] text-cyan-200`,children:`Degree`}),(0,x.jsx)(`div`,{className:`grid grid-cols-3 gap-2 sm:grid-cols-5`,children:i.map(i=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>r(i),className:[`rounded-lg border px-2 py-2.5 text-sm transition`,n===`submitted`&&t===i&&t===e.pentatonicAnswer?`border-yellow-200 bg-yellow-300 text-slate-950`:n===`submitted`&&t===i?`border-red-200 bg-red-400 text-slate-950`:t===i?`border-cyan-300 bg-cyan-400/20 text-cyan-100`:`glass-btn text-slate-200`].join(` `),"aria-pressed":t===i,children:i},i))})]})}function dt({mode:e,question:t,selectedNotes:n,answerState:r,answerMessage:i,revealNames:a,selectedDegree:o,guessAnswer:s,onGuessAnswerChange:c,onToggleNote:l,onSelectDegree:u,onSubmit:d,onNewQuestion:f,onNewScale:p,onClearSelection:m,onOpenControls:h,explorerScaleLocked:g,onExplorerScaleLock:_,explorerScaleType:v,onExplorerScaleTypeChange:y,explorerScaleRoot:b,onExplorerScaleRootChange:S,explorerShift:C,onExplorerShiftChange:w,onExplorerShiftApply:T,explorerShowAll:E,onExplorerShowAll:D,explorerShowScale:O,onExplorerShowScale:k,explorerScalePitchClasses:ee,onExplorerDrag:te,getExplorerDragPreview:A,displayScaleDegrees:ne,displayScaleRoot:re,displayScaleType:ie,intervalDisplay:ae=`both`,showFretNumbers:oe}){let j=e===`Fretboard Explorer`,M=ot.includes(t.pentatonicExercise),N=e===`Scale & Triads`&&t.scaleTriadExercise===`Highlight degree`,se=e===`Intervals`&&t.semitones!==void 0?at(t,ae):t.prompt;return(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`main`,{className:[`grid grid-cols-[minmax(0,1fr)] gap-4 lg:items-end`,M?`lg:grid-cols-[1.2fr_0.8fr]`:``].join(` `),children:[(0,x.jsxs)(`section`,{className:`space-y-4`,children:[(se||i)&&(0,x.jsxs)(`div`,{className:`glass p-4 text-center`,children:[se&&(0,x.jsx)(`p`,{className:`text-lg font-medium text-white`,children:se}),i&&(0,x.jsx)(`p`,{className:`mt-2 text-sm text-cyan-200`,children:i})]}),(0,x.jsx)(ze,{rootPosition:t.rootPosition,selectedNotes:n,answerState:r,onToggle:l,revealNames:a,boxPositions:t.boxPositions,requiredString:t.requiredString,requiredStrings:t.requiredStrings,validPositions:t.validPositions,highlightedPosition:t.highlightedPosition,showAllSelectedNotes:j&&E,showScaleNotes:j&&O,scalePitchClasses:ee,onDragTranspose:j?te:null,getExplorerDragPreview:j?A:null,displayScaleDegrees:ne,scaleRoot:re,scaleType:ie,showFretNumbers:oe}),j&&(0,x.jsxs)(`div`,{className:`space-y-3 glass p-3`,children:[(0,x.jsxs)(`div`,{className:`grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center`,children:[(0,x.jsxs)(`button`,{type:`button`,onClick:_,"aria-pressed":g,className:`${ct} glass-btn text-violet-200`,children:[`Scale lock: `,g?`ON`:`OFF`]}),(0,x.jsxs)(`select`,{value:v,onChange:e=>y(e.target.value),"aria-label":`Scale type`,className:lt,children:[(0,x.jsx)(`option`,{value:`major`,children:`Major`}),(0,x.jsx)(`option`,{value:`minor`,children:`Minor`})]}),(0,x.jsx)(`select`,{value:b,onChange:e=>S(e.target.value),"aria-label":`Scale root`,className:lt,children:st.map(e=>(0,x.jsx)(`option`,{value:e,children:e},e))}),(0,x.jsxs)(`button`,{type:`button`,onClick:D,"aria-pressed":E,className:`${ct} glass-btn text-amber-200`,children:[`Matching notes: `,E?`ON`:`OFF`]}),(0,x.jsxs)(`button`,{type:`button`,onClick:k,"aria-pressed":O,className:`${ct} glass-btn text-sky-200`,children:[`Scale notes: `,O?`ON`:`OFF`]})]}),(0,x.jsxs)(`form`,{className:`flex gap-2`,onSubmit:e=>{e.preventDefault(),T()},children:[(0,x.jsx)(`input`,{type:`number`,value:C,onChange:e=>w(e.target.value),placeholder:g?`Shift in scale steps`:`Shift in semitones`,"aria-label":`Semitone or scale-step shift`,className:`${lt} min-w-0 flex-1 placeholder:text-slate-400`}),(0,x.jsx)(`button`,{type:`submit`,className:`${ct} glass-btn text-cyan-200`,children:`Apply shift`})]})]}),e===`Guess the Note`&&(0,x.jsx)(`input`,{type:`text`,value:s,onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&d()},disabled:r===`submitted`,placeholder:`Type the note (e.g. E, C#, Db)`,"aria-label":`Note answer`,className:`w-full glass-btn px-4 py-3 text-center text-base text-slate-100 placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none`})]}),M&&(0,x.jsx)(`aside`,{className:`space-y-4`,children:(0,x.jsx)(ut,{question:t,selectedDegree:o,answerState:r,onSelect:u})})]}),(0,x.jsx)(Ve,{onControls:h,onSubmit:j?null:d,onNew:j?m:f,newLabel:j?`Clear selection`:`New Question`,onExtra:N?p:null,extraLabel:`New Scale`})]})}var ft=j(`Bb1`),pt=ft,mt=j(`C6`),ht=[0,25,50,75,100],gt={1:-2,2:-1,3:-3},_t={"":0,1:0,2:0,3:0,"1-2":10,"1-3":30,"2-3":15,"1-2-3":45},vt=[`C`,`Db`,`D`,`Eb`,`E`,`F`,`Gb`,`G`,`Ab`,`A`,`Bb`,`B`];function yt(e){let t=(e%12+12)%12,n=Math.floor(e/12)-1;return`${vt[t]}${n}`}function bt(e){return e.reduce((e,t)=>e+(gt[t]??0),0)}function xt(e){return _t[[...e].sort((e,t)=>e-t).join(`-`)]??0}function St(e,t,n){return(e.includes(1)?t*.25:0)+(e.includes(3)?n*.3:0)}function Ct({partial:e,valves:t,pump1:n,pump3:r}){let i=bt(t),a=xt(t),o=St(t,n,r),s=440*2**((ft-69+i)/12)*e*2**((a-o)/1200),c=69+12*Math.log2(s/440),l=Math.round(c);return{frequency:s,exactMidi:c,nearestMidi:l,note:yt(l),centsFromTarget:(c-l)*100,combinationCorrection:a,pumpCorrection:o}}function wt(e,t){let n=Ct(e),r=Math.abs((n.exactMidi-t)*100),i=(!e.pump1||e.valves.includes(1))&&(!e.pump3||e.valves.includes(3));return{...n,targetMidi:t,targetNote:yt(t),distanceCents:r,coherentPumps:i,quality:!i||r>50?`wrong`:r<=20&&n.pumpCorrection===0?`optimal`:`corrected`}}var Tt=[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]];function Et(e,t){let n=Number(e.pump1>0)+Number(e.pump3>0),r=+!![7,11].includes(e.partial);return[n,t.distanceCents,r,e.valves.length,Math.abs(e.partial-4)]}function Dt(e,t){let n=Et(e.configuration,e),r=Et(t.configuration,t);for(let e=0;e<n.length;e+=1)if(n[e]!==r[e])return n[e]-r[e];return 0}function Ot(e){let t=[];for(let n=1;n<=7;n+=1)for(let r of Tt)for(let i of ht)for(let a of ht){let o={partial:n,valves:r,pump1:i,pump3:a},s=wt(o,e);s.coherentPumps&&s.distanceCents<=50&&t.push({...s,configuration:o})}return t.sort(Dt)[0]??null}function kt(e,t=1,n=7){let r=[];for(let i=t;i<=n;i+=1)for(let t of Tt)for(let n of ht)for(let a of ht){let o={partial:i,valves:t,pump1:n,pump3:a},s=wt(o,e);s.coherentPumps&&s.distanceCents<=50&&r.push({...s,configuration:o})}return r.sort(Dt)}function At(e){let t=e.valves.length?e.valves.join(`+`):`open`;return`${e.partial===1?`pedal`:`partial ${e.partial}`}, valves ${t}, 1st slide ${e.pump1}%, 3rd slide ${e.pump3}%`}function jt(){let e=new Set;for(let t=1;t<=7;t+=1)for(let n of Tt)for(let r of ht)for(let i of ht){let a=Ct({partial:t,valves:n,pump1:r,pump3:i}).nearestMidi;a>=pt&&a<=mt&&e.add(a)}return[...e].sort((e,t)=>e-t)}function Mt(e=null,t=null){let n=jt();if(e!==null&&t!==null){let r=e+t;return n.includes(r)?r:n.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,n[0])}return n[Math.floor(Math.random()*n.length)]}function Nt(e){return e+2}function Pt(e,t){return yt(t?Nt(e):e)}var Ft=[1,2,3],It={1:-2,2:-1,3:-3};function Lt(e){return Ft.map(t=>e.includes(t)?`●`:`−`).join(``)}function Rt({configuration:e,showSlides:t=!0,className:n=``}){return(0,x.jsxs)(`div`,{className:n,children:[(0,x.jsx)(`div`,{children:`P${e.partial}  ${Lt(e.valves)}`}),t&&(0,x.jsxs)(`div`,{className:`text-base font-medium`,children:[`S1: `,e.pump1,`% · S3: `,e.pump3,`%`]})]})}function zt(e){if(e.quality===`optimal`)return`Correct: centered pitch with no slide correction.`;let t=e.exactMidi<e.targetMidi?`flat`:`sharp`,n=[`Your configuration produces ${e.note}, ${Math.abs(e.distanceCents).toFixed(1)} cents ${t} of ${e.targetNote}.`];return e.coherentPumps||n.push(`A tuning slide is extended without its corresponding valve being pressed.`),e.quality===`corrected`&&n.push(`The note is in tune, but try the conventional fingering without slide correction.`),e.possibleSolution&&n.push(`Try ${At(e.possibleSolution.configuration)}.`),n.join(` `)}function Bt({partial:e,setPartial:t,valves:n,onToggleValve:r,pump1:i,setPump1:a,pump3:o,setPump3:s}){let c=t=>{let n=12*Math.log2(t/e);return`${n>=0?`+`:``}${n.toFixed(2)}`};return(0,x.jsx)(`section`,{className:`glass p-5 shadow-2xl`,children:(0,x.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-[1fr_1.1fr_1fr] md:items-stretch`,children:[(0,x.jsxs)(`label`,{className:`flex flex-col gap-3 glass-inset p-4`,children:[(0,x.jsx)(`span`,{className:`text-xs uppercase tracking-[0.2em] text-amber-200`,children:`Partial`}),(0,x.jsx)(`input`,{type:`range`,min:`1`,max:7,value:e,onChange:e=>t(Number(e.target.value)),className:`accent-amber-300`}),(0,x.jsxs)(`div`,{className:`flex items-center justify-center gap-4`,children:[(0,x.jsxs)(`div`,{className:`flex w-16 flex-col items-center gap-1`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>t(e=>Math.max(1,e-1)),disabled:e===1,"aria-label":`Decrease partial`,className:`flex h-11 w-11 items-center justify-center rounded-lg border border-amber-200/40 text-amber-100 transition enabled:hover:border-amber-100 enabled:hover:bg-amber-200/10 disabled:cursor-not-allowed disabled:opacity-30`,children:(0,x.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-7 w-7`,"aria-hidden":`true`,children:(0,x.jsx)(`path`,{d:`M15 5 8 12l7 7`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2.5`})})}),(0,x.jsx)(`span`,{className:`text-center text-xs text-amber-100/70`,children:e>1?c(e-1):`—`})]}),(0,x.jsx)(`span`,{className:`min-w-12 text-center text-3xl font-bold text-white`,children:e}),(0,x.jsxs)(`div`,{className:`flex w-16 flex-col items-center gap-1`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>t(e=>Math.min(7,e+1)),disabled:e===7,"aria-label":`Increase partial`,className:`flex h-11 w-11 items-center justify-center rounded-lg border border-amber-200/40 text-amber-100 transition enabled:hover:border-amber-100 enabled:hover:bg-amber-200/10 disabled:cursor-not-allowed disabled:opacity-30`,children:(0,x.jsx)(`svg`,{viewBox:`0 0 24 24`,className:`h-7 w-7`,"aria-hidden":`true`,children:(0,x.jsx)(`path`,{d:`m9 5 7 7-7 7`,fill:`none`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2.5`})})}),(0,x.jsx)(`span`,{className:`text-center text-xs text-amber-100/70`,children:e<7?c(e+1):`—`})]})]})]}),(0,x.jsxs)(`div`,{className:`glass-inset p-3`,children:[(0,x.jsx)(`p`,{className:`mb-2 text-center text-xs uppercase tracking-[0.2em] text-amber-200`,children:`Valves`}),(0,x.jsx)(`div`,{className:`flex justify-center gap-3`,children:Ft.map(e=>(0,x.jsxs)(`button`,{type:`button`,onClick:()=>r(e),className:[`flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 font-bold transition`,n.includes(e)?`border-amber-200 bg-amber-300 text-amber-950 shadow-[0_0_24px_rgba(252,211,77,0.45)]`:`border-white/35 bg-white/5 text-slate-100 backdrop-blur-md hover:border-amber-200`].join(` `),children:[(0,x.jsx)(`span`,{className:`text-2xl`,children:e}),(0,x.jsxs)(`span`,{className:`text-[10px] uppercase`,children:[It[e],` st`]})]},e))})]}),(0,x.jsxs)(`div`,{className:`space-y-3 glass-inset p-4`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-[0.2em] text-amber-200`,children:`Tuning slides`}),(0,x.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-slate-200`,children:[`1st slide: `,i,`%`,(0,x.jsx)(`input`,{type:`range`,min:`0`,max:`4`,step:`1`,value:ht.indexOf(i),onChange:e=>a(ht[Number(e.target.value)]),className:`accent-amber-300`})]}),(0,x.jsxs)(`label`,{className:`flex flex-col gap-1 text-sm text-slate-200`,children:[`3rd slide: `,o,`%`,(0,x.jsx)(`input`,{type:`range`,min:`0`,max:`4`,step:`1`,value:ht.indexOf(o),onChange:e=>s(ht[Number(e.target.value)]),className:`accent-amber-300`})]})]})]})})}var Vt=[`Semitones`,`Named`],Ht={1:`minor 2nd`,2:`major 2nd`,3:`minor 3rd`,4:`major 3rd`,5:`perfect 4th`,6:`tritone`,7:`perfect 5th`,8:`minor 6th`,9:`major 6th`,10:`minor 7th`,11:`major 7th`,12:`octave`},Ut=null;function Wt(){if(!Ut){Ut=new Map;for(let e of jt()){let t=Ot(e);t&&Ut.set(e,t.configuration)}}return Ut}function Gt(e,t){if(t===`Semitones`)return`${e>0?`+`:`-`}${Math.abs(e)}`;let n=Ht[Math.abs(e)];return`${/^[aeiou]/.test(n)?`an`:`a`} ${n} ${e>0?`above`:`below`}`}var Kt=e=>e[Math.floor(Math.random()*e.length)];function R(e,t=new Set(jt())){let n=[];for(let r=-12;r<=12;r+=1)r!==0&&t.has(e+r)&&n.push(r);return n}function qt(){let e=new Set(jt()),[t,n]=Kt([...Wt().entries()].filter(([t])=>R(t,e).length>0)),r=Kt(R(t,e));return{startMidi:t,startConfiguration:n,semitones:r,targetMidi:t+r}}var Jt={Semitones:`semitones from the current note (+ up, - down)`,Named:`above or below the current note`};function Yt(){let[e,t]=(0,b.useState)(()=>qt()),[n,r]=(0,b.useState)(`Semitones`),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(1),[u,d]=(0,b.useState)([]),[f,p]=(0,b.useState)(0),[m,h]=(0,b.useState)(0),[g,_]=(0,b.useState)(null),v=Gt(e.semitones,n),y=yt(e.startMidi),C=yt(e.targetMidi),w=e=>{d(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e].sort((e,t)=>e-t))},T=()=>{t(qt()),_(null),l(1),d([]),p(0),h(0)},E=()=>{let t={partial:c,valves:u,pump1:f,pump3:m},n=wt(t,e.targetMidi);_({...n,configuration:t,possibleSolution:Ot(e.targetMidi)})},D=g?g.quality===`wrong`?`bg-red-500/15 text-red-200`:g.quality===`optimal`?`bg-emerald-500/15 text-emerald-200`:`bg-yellow-500/15 text-yellow-200`:``;return(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`section`,{className:`glass p-5 text-center shadow-xl`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-[0.25em] text-cyan-300`,children:`Current note`}),(0,x.jsx)(Rt,{configuration:e.startConfiguration,className:`mt-2 text-2xl font-bold leading-snug text-cyan-100`}),i&&(0,x.jsxs)(`p`,{className:`mt-1 text-sm text-slate-300`,children:[`Sounds like `,y]})]}),(0,x.jsxs)(`section`,{className:`glass p-5 text-center`,children:[(0,x.jsx)(`p`,{className:`text-xs uppercase tracking-[0.25em] text-amber-200`,children:`Play`}),(0,x.jsx)(`p`,{className:`mt-2 text-3xl font-bold text-white`,children:v}),(0,x.jsx)(`p`,{className:`mt-1 text-sm text-slate-400`,children:Jt[n]})]}),g&&(0,x.jsxs)(`section`,{className:`rounded-2xl px-5 py-4 text-center text-sm ${D}`,children:[(0,x.jsx)(`p`,{children:zt(g)}),(0,x.jsxs)(`p`,{className:`mt-2 text-xs opacity-80`,children:[y,` `,v,` = `,C]}),g.possibleSolution&&(0,x.jsxs)(`p`,{className:`mt-1 text-xs opacity-80`,children:[`Target fingering: P`,g.possibleSolution.configuration.partial,` `,`· `,g.possibleSolution.configuration.valves.length?g.possibleSolution.configuration.valves.join(`+`):`open`,` `,`· S1 `,g.possibleSolution.configuration.pump1,`% · S3 `,g.possibleSolution.configuration.pump3,`%`]})]}),(0,x.jsx)(Bt,{partial:c,setPartial:l,valves:u,onToggleValve:w,pump1:f,setPump1:p,pump3:m,setPump3:h}),(0,x.jsx)(Ve,{onControls:()=>s(!0),onSubmit:E,onNew:T}),(0,x.jsxs)(S,{open:o,onClose:()=>s(!1),title:`Controls`,children:[(0,x.jsx)(`p`,{className:`mb-2 text-xs uppercase tracking-[0.2em] text-slate-400`,children:`Task format`}),(0,x.jsx)(`div`,{className:`mb-6 grid grid-cols-2 gap-2`,children:Vt.map(e=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>r(e),"aria-pressed":n===e,className:`rounded-xl border px-4 py-3 text-sm font-semibold transition ${n===e?`glass-btn is-on text-white`:`glass-btn text-slate-200`}`,children:e},e))}),(0,x.jsxs)(`button`,{type:`button`,onClick:()=>a(e=>!e),className:`w-full glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:[i?`Hide`:`Show`,` current note name`]})]})]})}var Xt=new Set([1,3,6,8,10]);function Zt({targetMidi:e,producedMidi:t,showProducedNote:n,bbNotation:r,result:i}){let a=(0,b.useRef)(null),o=r?2:0,s=pt+o-1,c=mt+o+1,l=Array.from({length:c-s+1},(e,t)=>s+t),u=l.filter(e=>!Xt.has(e%12)),d=e+o,f=d>=s&&d<=c;return(0,b.useEffect)(()=>{let e=a.current;if(!e)return;let t=u.filter(e=>e<d).length;e.scrollTo({left:Math.max(0,t*32-e.clientWidth/2),behavior:`smooth`})},[d]),(0,x.jsx)(`div`,{ref:a,className:`mb-5 overflow-x-auto overscroll-x-contain glass p-3`,children:(0,x.jsxs)(`div`,{className:`relative mx-auto h-24 min-w-fit`,style:{width:`${u.length*32}px`},children:[(0,x.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 flex h-20`,children:u.map(e=>(0,x.jsx)(`div`,{className:[`relative h-full w-8 shrink-0 border-r border-slate-500/70 bg-slate-100`,e===d&&f?`z-[2] border-2 border-emerald-200 bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]`:``].join(` `),children:e%12==0&&(0,x.jsxs)(`span`,{className:`absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-slate-600`,children:[`C`,Math.floor(e/12)-1]})},e))}),l.filter(e=>Xt.has(e%12)).map(e=>{let t=u.filter(t=>t<e).length;return(0,x.jsx)(`div`,{className:[`absolute top-0 z-10 h-12 w-5 -translate-x-1/2 rounded-b border border-slate-950 bg-slate-900`,e===d?`z-20 border-2 border-emerald-200 bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]`:``].join(` `),style:{left:`${t*32}px`}},e)}),n&&(0,x.jsx)(`span`,{className:[`absolute bottom-[-3px] z-20 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-slate-950`,`transition-[left] duration-300 ease-out`,i?i.quality===`wrong`?`bg-red-400`:`bg-amber-300`:`bg-cyan-300`].join(` `),style:{left:`${(e=>{let t=u.reduce((t,n,r)=>n<=e?r:t,0),n=u[t],r=u[t+1]??n,i=r===n?0:(e-n)/(r-n);return Math.max(4,Math.min(u.length*32-4,(t+i)*32+16))})(t)}px`},title:`Produced pitch`})]})})}function Qt(e=null,t=null,n=!1){let r=e!==null&&Math.random()<.5,i=Mt(e,r?t??Math.floor(Math.random()*15)-7:null);return{targetMidi:i,previousMidi:e,offset:r?i-e:null,prompt:Pt(i,n)}}function $t({valves:e,pump1:t,pump3:n,partial:r,bbNotation:i,producedPreview:a,scale:o,onScaleChange:s}){let c=o===`cents`?360:460,l=o===`cents`?{left:156,right:24,top:12,bottom:34}:{left:156,right:24,top:18,bottom:42},u=Array.from({length:7},(r,i)=>{let a=i+1;return{partial:a,...Ct({partial:a,valves:e,pump1:t,pump3:n})}}),d=Math.floor(Math.min(pt,...u.map(e=>e.exactMidi))),f=Math.ceil(Math.max(...u.map(e=>e.exactMidi))),p=(c-l.top-l.bottom)/(f-d+1),m=e=>l.left+(e-1)/6*(900-l.left-l.right),h=e=>o===`keyboard`?l.top+(f+.5-e)*p:l.top+(1-(e- -50)/100)*(c-l.top-l.bottom),g=a.exactMidi,_=Array.from({length:f-d+1},(e,t)=>f-t),v=e=>Xt.has(e%12),y=o===`keyboard`?_:[-50,-25,0,25,50],b=e=>yt(i?e.nearestMidi+2:e.nearestMidi),S={transition:`cy 350ms ease, y 350ms ease, y1 350ms ease, y2 350ms ease`};return(0,x.jsxs)(`section`,{className:`glass p-5 shadow-xl`,children:[(0,x.jsx)(`div`,{className:`mb-3 flex flex-wrap items-baseline justify-end gap-2`,children:(0,x.jsx)(`div`,{className:`flex flex-wrap items-center justify-end`,children:(0,x.jsxs)(`button`,{type:`button`,onClick:()=>s(o===`keyboard`?`cents`:`keyboard`),"aria-pressed":o===`cents`,className:`glass-btn px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20`,children:[`Y axis: `,o===`keyboard`?`keyboard`:`cents`]})})}),(0,x.jsx)(`div`,{className:`overflow-x-auto`,children:(0,x.jsxs)(`svg`,{viewBox:`0 0 900 ${c}`,className:`mx-auto min-w-[560px] w-full md:min-w-[620px]`,role:`img`,"aria-label":`Trumpet register graph`,children:[(0,x.jsx)(`rect`,{x:l.left,y:l.top,width:900-l.left-l.right,height:c-l.top-l.bottom,fill:`rgba(15,23,42,.7)`,rx:`12`}),o===`keyboard`?(0,x.jsx)(`g`,{"aria-label":`Chromatic keyboard`,children:_.map(e=>{let t=l.top+(f-e)*p,n=v(e);return(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`rect`,{x:l.left-128,y:t,width:n?81.92:128,height:p,fill:n?`#1e293b`:`#f8fafc`,stroke:`#64748b`,strokeWidth:`0.6`}),(0,x.jsx)(`text`,{x:l.left-128+(n?81.92:128)-5,y:t+p*.72,textAnchor:`end`,fill:n?`#e2e8f0`:`#334155`,fontSize:`14`,children:yt(e)})]},e)})}):(0,x.jsx)(`g`,{"aria-label":`Cents deviation axis`,children:y.map(e=>(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`line`,{x1:l.left,x2:900-l.right,y1:h(e),y2:h(e),stroke:e===0?`#f8fafc`:`rgba(148,163,184,.3)`,strokeWidth:e===0?2:1}),(0,x.jsxs)(`text`,{x:l.left-12,y:h(e)+4,textAnchor:`end`,fill:`#cbd5e1`,fontSize:`18`,children:[e>0?`+${e}`:e,`¢`]})]},e))}),o===`keyboard`&&u.map(e=>(0,x.jsx)(`line`,{x1:l.left,x2:900-l.right,y1:h(e.exactMidi),y2:h(e.exactMidi),stroke:e.partial===r?`#67e8f9`:`#22d3ee`,strokeWidth:e.partial===r?2:1.5,strokeOpacity:e.partial===r?.8:.25,style:S},`guide-${e.partial}`)),u.map(e=>(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`circle`,{cx:m(e.partial),cy:h(o===`keyboard`?e.exactMidi:e.centsFromTarget),r:e.partial===r?11:8,fill:e.partial===r?`#67e8f9`:`#22d3ee`,fillOpacity:e.partial===r?1:.34,stroke:e.partial===r?`#ecfeff`:`none`,strokeWidth:`2`,style:S}),(0,x.jsx)(`text`,{x:m(e.partial),y:Math.max(l.top+12,h(o===`keyboard`?e.exactMidi:e.centsFromTarget)-15),textAnchor:`middle`,fill:e.partial===r?`#ecfeff`:`#a5f3fc`,fontSize:`17`,style:S,children:b(e)}),(0,x.jsx)(`text`,{x:m(e.partial),y:c-l.bottom+25,textAnchor:`middle`,fill:`#cbd5e1`,fontSize:`19`,children:e.partial})]},e.partial)),(0,x.jsx)(`line`,{x1:m(r),x2:m(r),y1:h(o===`keyboard`?g:a.centsFromTarget),y2:c-l.bottom,stroke:`#67e8f9`,strokeDasharray:`4 4`,opacity:`.7`,style:S})]})}),(0,x.jsxs)(`div`,{className:`flex justify-between px-2 text-xs uppercase tracking-wider text-slate-400`,children:[(0,x.jsx)(`span`,{children:o===`keyboard`?`Keyboard pitch range`:`Distance from closest note (cents)`}),(0,x.jsx)(`span`,{children:`Partial / register`})]})]})}var en={major:[0,2,4,7,9],minor:[0,3,5,7,10]},tn={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10]},nn=[`I`,`bII`,`II`,`bIII`,`III`,`IV`,`bV`,`V`,`bVI`,`VI`,`bVII`,`VII`];function rn(){let[e,t]=(0,b.useState)(`C`),[n,r]=(0,b.useState)(`major`),[i,a]=(0,b.useState)(1),[o,s]=(0,b.useState)(7),[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!0),[f,p]=(0,b.useState)(!1),[m,h]=(0,b.useState)(!1),[g,_]=(0,b.useState)(new Set),v=(0,b.useMemo)(()=>{let t=j(`${e}4`),r=new Set(tn[n].map(e=>(t+e)%12)),i=[];for(let e=pt;e<=mt;e+=1)r.has(e%12)&&i.push({degree:tn[n].findIndex(n=>(t+n)%12==e%12)+1,midi:e});return i},[e,n]),y=(0,b.useMemo)(()=>v.map(t=>{let n=kt(t.midi,i,o),r=((t.midi-j(`${e}4`))%12+12)%12;return{...t,degreeLabel:nn[r],configurations:n,primary:n[0]??null,alternative:n[1]??null}}).filter(e=>e.configurations.length>0),[v,e,i,o]),S=e=>{let t=Number(e);a(Math.min(t,o))},C=e=>{let t=Number(e);s(Math.max(t,i))};return(0,x.jsxs)(`section`,{className:`space-y-3 glass p-3 shadow-xl`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-2`,children:[(0,x.jsx)(`select`,{value:e,onChange:e=>t(e.target.value),className:`glass-btn px-2 py-1.5 text-sm text-cyan-100`,"aria-label":`Scale fundamental`,children:A.map(e=>(0,x.jsx)(`option`,{children:e},e))}),(0,x.jsxs)(`select`,{value:n,onChange:e=>r(e.target.value),className:`glass-btn px-2 py-1.5 text-sm text-cyan-100`,"aria-label":`Scale quality`,children:[(0,x.jsx)(`option`,{value:`major`,children:`Major`}),(0,x.jsx)(`option`,{value:`minor`,children:`Minor`})]}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>l(e=>!e),className:`glass-btn px-2 py-1.5 text-xs text-cyan-100`,children:c?`Show notes`:`Show degrees`}),(0,x.jsxs)(`button`,{type:`button`,onClick:()=>d(e=>!e),className:`glass-btn px-2 py-1.5 text-xs text-cyan-100`,children:[`Slides `,u?`ON`:`OFF`]}),(0,x.jsxs)(`button`,{type:`button`,onClick:()=>p(e=>!e),"aria-pressed":f,className:`glass-btn px-2 py-1.5 text-xs text-amber-100`,children:[`Pentatonic `,f?`ON`:`OFF`]}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>h(e=>!e),className:`glass-btn px-2 py-1.5 text-xs text-cyan-100`,children:m?`Pitch: Bb trumpet`:`Pitch: concert`})]}),(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300`,children:[(0,x.jsxs)(`label`,{children:[`Partial min `,(0,x.jsx)(`input`,{type:`range`,min:`1`,max:o,value:i,onChange:e=>S(e.target.value),className:`mx-1 align-middle accent-cyan-300`}),i]}),(0,x.jsxs)(`label`,{children:[`max `,(0,x.jsx)(`input`,{type:`range`,min:i,max:7,value:o,onChange:e=>C(e.target.value),className:`mx-1 align-middle accent-cyan-300`}),o]})]}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4`,children:y.map(t=>{let r=g.has(t.midi)&&t.alternative?t.alternative:t.primary,i=en[n].includes(((t.midi-j(`${e}4`))%12+12)%12),a=t.midi+(m?2:0);return(0,x.jsxs)(`div`,{className:`relative min-h-[104px] glass-inset p-3 text-sm text-slate-200 ${f&&i?`outline outline-2 -outline-offset-4 outline-dashed outline-amber-300`:``}`,children:[t.alternative&&(0,x.jsx)(`button`,{type:`button`,onClick:()=>_(e=>{let n=new Set(e);return n.has(t.midi)?n.delete(t.midi):n.add(t.midi),n}),className:`absolute right-1 top-1 flex h-9 w-9 items-center justify-center glass-btn text-base font-semibold text-cyan-200`,"aria-label":`Toggle alternative for ${yt(a)}`,children:g.has(t.midi)?`A`:`+`}),(0,x.jsx)(`div`,{className:`text-center text-2xl font-bold leading-tight text-white`,children:c?`${t.degreeLabel}${Math.floor(a/12)-1}`:yt(a)}),(0,x.jsx)(`div`,{className:`mt-2 text-center text-xl font-semibold leading-tight text-cyan-200`,children:`P${r.configuration.partial}  ${Lt(r.configuration.valves)}`}),u&&r&&(0,x.jsxs)(`div`,{className:`mt-1 text-center text-base font-medium leading-tight text-amber-200`,children:[`S1: `,r.configuration.pump1,`% · S3: `,r.configuration.pump3,`%`]})]},t.midi)})})]})}function an({mode:e=`Register & Intonation`}){let[t,n]=(0,b.useState)(!1),[r,i]=(0,b.useState)(()=>Qt()),[a,o]=(0,b.useState)(1),[s,c]=(0,b.useState)([]),[l,u]=(0,b.useState)(0),[d,f]=(0,b.useState)(0),[p,m]=(0,b.useState)(`keyboard`),[h,g]=(0,b.useState)(null),[_,v]=(0,b.useState)(!1),[y,C]=(0,b.useState)(!1),w=Ct({partial:a,valves:s,pump1:l,pump3:d}),T=e===`Register Graph`,E=e===`Scale Fingering Chart`,D=yt(t?Nt(w.nearestMidi):w.nearestMidi),O=t?`written for Bb trumpet`:`concert pitch`;return e===`Interval Shift`?(0,x.jsx)(Yt,{}):(0,x.jsxs)(`div`,{className:`space-y-6`,children:[E?(0,x.jsx)(rn,{}):T?(0,x.jsx)($t,{valves:s,pump1:l,pump3:d,partial:a,bbNotation:t,producedPreview:w,scale:p,onScaleChange:m}):(0,x.jsx)(`section`,{className:`glass p-5`,children:(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center justify-center gap-6`,children:[(0,x.jsx)(`p`,{className:`text-center text-3xl font-bold text-white`,children:Pt(r.targetMidi,t)}),_&&(0,x.jsxs)(`p`,{className:[`text-center text-3xl font-bold`,h?h.quality===`wrong`?`text-red-300`:`text-amber-300`:`text-cyan-200`].join(` `),children:[D,` `,w.centsFromTarget>=0?`+`:``,w.centsFromTarget.toFixed(1),` cents`]})]}),(0,x.jsx)(Zt,{targetMidi:r.targetMidi,producedMidi:w.exactMidi+(t?2:0),showProducedNote:_,bbNotation:t,result:h}),h&&(0,x.jsxs)(`div`,{className:[`mt-4 rounded-xl px-4 py-3 text-center text-sm`,h.quality===`wrong`?`bg-red-500/15 text-red-200`:h.quality===`optimal`?`bg-emerald-500/15 text-emerald-200`:`bg-yellow-500/15 text-yellow-200`].join(` `),children:[(0,x.jsx)(`p`,{children:zt(h)}),(0,x.jsxs)(`p`,{className:`mt-1 text-xs opacity-80`,children:[`Displayed in `,O,`; nearest note: `,yt(t?Nt(h.nearestMidi):h.nearestMidi),`.`]})]}),h?.possibleSolution&&(0,x.jsxs)(`p`,{className:`mt-3 text-center text-sm text-amber-200`,children:[`Possible: `,At(h.possibleSolution.configuration),` `,`· `,h.possibleSolution.distanceCents.toFixed(1),` cents`]})]})}),!E&&(0,x.jsx)(Bt,{partial:a,setPartial:o,valves:s,onToggleValve:e=>{c(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e].sort((e,t)=>e-t))},pump1:l,setPump1:u,pump3:d,setPump3:f}),!E&&(0,x.jsx)(Ve,{onControls:()=>C(!0),onSubmit:T?null:()=>{let e=wt({partial:a,valves:s,pump1:l,pump3:d},r.targetMidi);g({...e,configuration:{partial:a,valves:s,pump1:l,pump3:d},possibleSolution:Ot(r.targetMidi)}),v(!0)},onNew:T?null:()=>{i(Qt(r.targetMidi,null,t)),g(null),o(1),c([]),u(0),f(0)}}),!E&&(0,x.jsx)(S,{open:y,onClose:()=>C(!1),title:`Controls`,children:(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsxs)(`button`,{type:`button`,onClick:()=>n(e=>!e),className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:[`Pitch: `,t?`Bb trumpet`:`concert`]}),!T&&(0,x.jsx)(`button`,{type:`button`,onClick:()=>v(e=>!e),className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:_?`Hide note`:`Show note`})]})})]})}var on={c:0,d:2,e:4,f:5,g:7,a:9,b:11},sn={"#":1,"♯":1,sharp:1,b:-1,"♭":-1,flat:-1};function cn(e){if(typeof e!=`string`)return null;let t=e.trim().toLowerCase().replace(/\s+/g,``),n=/^([a-g])(#|♯|♭|b|sharp|flat)?$/.exec(t);if(!n)return null;let r=n[2]?sn[n[2]]:0;return(on[n[1]]+r+12)%12}function ln(e){return A[(e%12+12)%12]}function un(e){if(typeof e!=`string`)return null;let t=e.trim().toLowerCase(),n=/^(.+?)\s*(major|minor|maj|min|m)?$/.exec(t);if(!n)return null;let r=cn(n[1]);if(r===null)return null;let i=n[2];return{pitchClass:r,type:i===`minor`||i===`min`||i===`m`?`minor`:`major`}}var dn={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10]};function fn(e,t){return dn[t].map(t=>(e+t)%12)}var pn=A.flatMap((e,t)=>[`major`,`minor`].map(n=>({name:`${e} ${n}`,root:t,type:n,pitchClasses:fn(t,n)})));function mn(e){let t=[...new Set(e)];if(t.length<6)return null;let n=null;for(let e of pn){let r=new Set(e.pitchClasses),i=t.filter(e=>!r.has(e)).length,a=e.pitchClasses.filter(e=>!t.includes(e)).length;if(i>1||a>1)continue;let o=i*10+a;(!n||o<n.score)&&(n={...e,extra:i,missing:a,score:o})}return n}var hn=new Set([1,3,6,8,10]),gn={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10]},_n=48,vn=32,yn=[[0,`Unison`],[1,`m2`],[2,`M2`],[3,`m3`],[4,`M3`],[5,`P4`],[6,`Tritone`],[7,`P5`],[8,`m6`],[9,`M6`],[10,`m7`],[11,`M7`],[12,`Octave`]],bn=[[`major`,`Major`],[`minor`,`Minor`],[`aug`,`Augmented`],[`dim`,`Diminished`],[`7`,`Dominant 7`],[`maj7`,`Major 7`],[`m7`,`Minor 7`],[`9`,`Dominant 9`],[`maj9`,`Major 9`],[`m9`,`Minor 9`],[`11`,`Dominant 11`]];function xn(e){return e[Math.floor(Math.random()*e.length)]}function Sn(e,t){let n=P(e);return gn[t].map(e=>(n+e)%12)}function Cn(e,t){let n=t.filter(t=>!e.includes(t)),r=e.filter(e=>!t.includes(e)),i=[];return n.length&&i.push(`Missing: ${n.map(ce).join(`, `)}.`),r.length&&i.push(`Extra: ${r.map(ce).join(`, `)}.`),i.join(` `)}function wn(e){return yn.find(([t])=>t===e)?.[1]??`${e} semitones`}function Tn(e,t,n=0){let r=j(`${e}4`),i=de(`${e}4`,t).map(e=>j(e)-r);return i.map((e,t)=>i[(t+n)%i.length]+(t<n?12:0)).map(e=>r+e)}function En(e){let t=xn(A);if(e===`Recognize Chord`||e===`Build Chord`){let[e]=xn(bn);return{root:t,quality:e,voicing:Tn(t,e),highlightedMidi:j(`${t}4`)}}if(e===`Recognize Interval`||e===`Build Interval`){let[e]=xn(yn.slice(1)),n=j(`${t}4`);return{root:t,semitones:e,voicing:[n,n+e],highlightedMidi:n}}if(e===`Chord Inversions`){let[e]=xn([bn[0],bn[1],bn[2]]),n=Math.floor(Math.random()*3);return{root:t,quality:e,inversion:n,voicing:Tn(t,e,n),highlightedMidi:j(`${t}4`)}}return{root:t,type:xn([`major`,`minor`]),highlightedMidi:_n+Math.floor(Math.random()*36)}}function Dn({highlightedKeys:e,selectedKeys:t,answerState:n,onToggle:r,revealNames:i,missedKeys:a,focusMidi:o,resetKey:s,scaleCheck:c=null}){let l=(0,b.useRef)(null),u=Array.from({length:36},(e,t)=>_n+t),d=u.filter(e=>!hn.has(e%12)),f=new Map(d.map((e,t)=>[e,t]));(0,b.useEffect)(()=>{let e=l.current;if(!e||o==null)return;let t=(f.get(o)??f.get(o-1)??0)*vn+vn/2;e.scrollTo({left:Math.max(0,t-e.clientWidth/2),behavior:`smooth`})},[o,s]);let p=e=>n===`submitted`?c?c.has(e%12)?`!bg-sky-400`:`!bg-red-400`:`!bg-emerald-300`:`!bg-cyan-300`,m=(n,r=!1)=>[r?`border-slate-950`:`relative border-slate-950`,r?`absolute top-0 z-10 h-24 w-5 -translate-x-1/2 rounded-b border bg-slate-900`:`h-full w-8 shrink-0 border-r bg-slate-100 text-slate-700`,e.has(String(n))?`!bg-cyan-300`:``,a.has(String(n))?`!bg-yellow-300`:``,t.has(String(n))?p(n):``].join(` `);return(0,x.jsx)(`div`,{ref:l,className:`overflow-x-auto overscroll-x-contain glass p-3 md:p-4`,children:(0,x.jsxs)(`div`,{className:`relative mx-auto h-44 min-w-fit`,style:{width:`${d.length*vn}px`},children:[(0,x.jsx)(`div`,{className:`absolute inset-x-0 bottom-0 flex h-36`,children:d.map(e=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>r(e),"aria-label":M(e),"aria-pressed":t.has(String(e)),className:m(e),children:i&&(0,x.jsx)(`span`,{className:`absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px]`,children:M(e).replace(/-?\d+$/,``)})},e))}),u.filter(e=>hn.has(e%12)).map(e=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>r(e),"aria-label":M(e),"aria-pressed":t.has(String(e)),className:m(e,!0),style:{left:(f.get(e-1)??0)*vn+vn},children:i&&(0,x.jsx)(`span`,{className:`pointer-events-none absolute top-14 left-1/2 -translate-x-1/2 text-[9px] text-white`,children:M(e).replace(/-?\d+$/,``)})},e))]})})}var On=`rounded-xl border px-3 py-2.5 text-sm transition`;function kn({mode:e=`Guess the Note`}){let[t,n]=(0,b.useState)(()=>En(e)),[r,i]=(0,b.useState)([]),[a,o]=(0,b.useState)(``),[s,c]=(0,b.useState)(`idle`),[l,u]=(0,b.useState)(``),[d,f]=(0,b.useState)(!1),[p,m]=(0,b.useState)(!0),[h,g]=(0,b.useState)(!1),_=(0,b.useRef)(null),v=e.includes(`Chord`),y=e.includes(`Interval`),C=(0,b.useMemo)(()=>t.type?Sn(t.root,t.type):[],[t]),w=e=>{if(!p||typeof window>`u`)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=_.current??new t;_.current=n;let r=n.createOscillator(),i=n.createGain();r.frequency.value=440*2**((e-69)/12),i.gain.setValueAtTime(1e-4,n.currentTime),i.gain.exponentialRampToValueAtTime(.06,n.currentTime+.02),i.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.3),r.connect(i),i.connect(n.destination),r.start(),r.stop(n.currentTime+.32)},T=new Set(e===`Guess the Note`?[String(t.highlightedMidi)]:e===`Guess the Scale`?Array.from({length:36},(e,t)=>_n+t).filter(e=>C.includes(e%12)).map(String):v&&e!==`Build Chord`&&e!==`Chord Inversions`||y&&e!==`Build Interval`?(t.voicing??[]).map(String):e===`Build Interval`?[String(t.highlightedMidi)]:[]),E=new Set(r.map(e=>String(e.midi))),D=s===`submitted`?new Set(e===`Build Scale`?Array.from({length:36},(e,t)=>_n+t).filter(e=>C.includes(e%12)&&!E.has(String(e))).map(String):(t.voicing??[]).filter(e=>!E.has(String(e))).map(String)):new Set,O=()=>{n(En(e)),i([]),o(``),c(`idle`),u(``),f(!1)},k=t=>{(s!==`submitted`||[`Build Scale`,`Build Chord`,`Build Interval`].includes(e))&&(i(e=>e.some(e=>e.midi===t)?e.filter(e=>e.midi!==t):[...e,{midi:t,note:M(t)}]),w(t),c(`idle`),u(``))},ee=new Set(r.map(e=>P(e.note))),te=new Set((t.voicing??[]).map(e=>P(M(e)))),A=()=>{if((e===`Guess the Note`||e===`Guess the Scale`)&&!a.trim()){u(`Type an answer first.`);return}if((e===`Recognize Chord`||e===`Recognize Interval`)&&a===``){u(`Choose an answer first.`);return}let n=!1;if(e===`Guess the Note`){let e=cn(a);n=e!==null&&e===P(M(t.highlightedMidi)),u(e===null?`Enter a note such as E, C#, Db, or g sharp.`:n?`Correct note.`:`Not quite. The note is ${M(t.highlightedMidi).replace(/-?d+$/,``)}.`)}else if(e===`Guess the Scale`){let e=un(a),r=e?fn(e.pitchClass,e.type):[];n=r.length===C.length&&r.every(e=>C.includes(e)),u(n?`Correct scale.`:e?`Not quite. You entered ${ln(e.pitchClass)} ${e.type}; the target is ${t.root} ${t.type}.`:`Enter a scale as a note followed by major or minor, for example E major or g sharp minor.`)}else if(e===`Recognize Chord`)n=a===t.quality,u(n?`Correct chord quality.`:`Not quite. It is ${bn.find(([e])=>e===t.quality)?.[1]}.`);else if(e===`Recognize Interval`)n=Number(a)===t.semitones,u(n?`Correct interval.`:`Not quite. It is ${yn.find(([e])=>e===t.semitones)?.[1]}.`);else if(e===`Build Scale`){let e=[...ee],t=e.filter(e=>!C.includes(e));n=C.filter(e=>!ee.has(e)).length===0&&t.length===0;let r=mn(e),i=Cn(e,C);u(n?`Correct scale.`:`Not quite. ${r?`Maybe you were thinking of ${r.name}? `:``}${i||`Select at least one octave of every scale note.`}`)}else if(n=ee.size===te.size&&[...ee].every(e=>te.has(e))&&r.length===te.size,e===`Chord Inversions`){let e=r.map(e=>e.midi).sort((e,t)=>e-t),i=[...t.voicing].sort((e,t)=>e-t);n=e.length===i.length&&e.every((e,t)=>e===i[t]),u(n?`Correct inversion.`:`Not quite. Expected: ${i.map(e=>M(e).replace(/-?\d+$/,``)).join(`, `)}.`)}else if(e===`Build Interval`){let e=r.map(e=>e.midi).sort((e,t)=>e-t),i=e.length===2?e[1]-e[0]:null;n=i===t.semitones,u(n?`Correct interval.`:i===null?`Select two notes. Expected a ${wn(t.semitones)}.`:`Not quite. You selected a ${wn(i)}; expected a ${wn(t.semitones)}.`)}else u(n?`Correct chord.`:`Not quite. ${Cn([...ee],[...te])||`Select the requested chord tones.`}`);c(`submitted`),f(!0)},ne=e===`Guess the Note`?`What note is highlighted?`:e===`Build Scale`?`Select the notes in the ${t.root} ${t.type} scale.`:e===`Guess the Scale`?`What scale is highlighted?`:e===`Recognize Chord`?`What chord quality is being played?`:e===`Build Chord`?`Build a ${bn.find(([e])=>e===t.quality)?.[1]} chord on ${t.root}.`:e===`Recognize Interval`?`What interval is being played?`:e===`Build Interval`?`Build a ${yn.find(([e])=>e===t.semitones)?.[1]} above ${t.root}.`:`Play the ${[`root position`,`1st inversion`,`2nd inversion`][t.inversion]} of a ${t.root} ${t.quality} triad.`,re=e===`Recognize Chord`?bn.map(([e,t])=>[e,t]):e===`Recognize Interval`?yn.map(([e,t])=>[String(e),t]):null,ie=t.highlightedMidi??t.voicing?.[0]??null;return(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`div`,{className:`glass p-4 text-center`,children:[(0,x.jsx)(`p`,{className:`text-lg font-medium text-white`,children:ne}),l&&(0,x.jsx)(`p`,{className:`mt-2 text-sm text-cyan-200`,children:l})]}),(0,x.jsx)(Dn,{highlightedKeys:T,selectedKeys:E,missedKeys:D,scaleCheck:e===`Build Scale`?new Set(C):null,answerState:s,onToggle:k,revealNames:d,focusMidi:ie,resetKey:t}),re&&(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-2 sm:grid-cols-4`,children:re.map(([e,t])=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>{o(e),c(`idle`),u(``)},className:`${On} ${a===e?`glass-btn is-on text-white`:`glass-btn text-slate-200`}`,children:t},e))}),[`Guess the Note`,`Guess the Scale`].includes(e)&&(0,x.jsx)(`input`,{value:a,onChange:e=>{o(e.target.value),c(`idle`)},onKeyDown:e=>{e.key===`Enter`&&A()},"aria-label":`Your answer`,placeholder:e===`Guess the Note`?`Type a note (e.g. C#, Db)`:`Type a scale (e.g. E major)`,className:`w-full glass-btn px-4 py-3 text-center text-base text-slate-100 placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none`}),(0,x.jsx)(Ve,{onControls:()=>g(!0),onSubmit:A,onNew:O}),(0,x.jsx)(S,{open:h,onClose:()=>g(!1),title:`Controls`,children:(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>f(e=>!e),className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:d?`Hide notes`:`Show notes`}),(0,x.jsxs)(`button`,{type:`button`,onClick:()=>m(e=>!e),className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:[`Audio `,p?`ON`:`OFF`]})]})})]})}var An=[0,2,4,5,7,9,11],jn=[0,2,3,5,7,8,10],Mn=[`major`,`minor`,`minor`,`major`,`major`,`minor`,`diminished`],Nn=[`minor`,`diminished`,`major`,`minor`,`minor`,`major`,`major`],Pn=[`I`,`bII`,`II`,`bIII`,`III`,`IV`,`bV`,`V`,`bVI`,`VI`,`bVII`,`VII`],Fn=[{offset:5,quality:`minor`},{offset:4,quality:`major`},{offset:2,quality:`major`},{offset:9,quality:`major`},{offset:10,quality:`major`}],In=[`major`,`minor`],Ln=[`Easy`,`Medium`,`Hard`];function Rn(e,t,n){let r=Pn[((e-n)%12+12)%12];return t===`major`?r:t===`minor`?r.toLowerCase():`${r.toLowerCase()}°`}function zn(e,t,n,r){return{root:e,quality:t,kind:r,label:Rn(e,t,n)}}function Bn(e,t){let n=t===`major`?An:jn,r=t===`major`?Mn:Nn;return n.map((t,n)=>zn((e+t)%12,r[n],e,`diatonic`))}function Vn(e,t){let n=t===`major`?e:(e+3)%12,r=Bn(e,t);return Fn.map(({offset:t,quality:r})=>zn((n+t)%12,r,e,`borrowed`)).filter(e=>!r.some(t=>t.root===e.root&&t.quality===e.quality))}function Hn(e,t,n){let r=Bn(t,n);return e===`Easy`?r:[...r,...Vn(t,n)]}function Un(e,t,n=4){let r=e+12*(n+1);return(t===`major`?[0,4,7]:t===`minor`?[0,3,7]:t===`diminished`?[0,3,6]:[0,4,8]).map(e=>r+e)}function Wn(e,t){let n=[...e].sort((e,t)=>e-t);for(let e=0;e<t;e+=1)n.push(n.shift()+12);return n}var Gn=[`Root position`,`1st inversion`,`2nd inversion`],Kn=e=>e[Math.floor(Math.random()*e.length)];function qn(e){if(e===`Hard`){let t={root:Math.floor(Math.random()*12),quality:Kn([`major`,`minor`])},n;do n={root:Math.floor(Math.random()*12),quality:Kn([`major`,`minor`])};while(n.root===t.root&&n.quality===t.quality);return{level:e,first:t,second:n}}let t=Math.floor(Math.random()*12),n=Kn(In),r=Kn(Bn(t,n)),i=Hn(e,t,n);return{level:e,tonic:t,type:n,first:r,second:Kn(i.filter(e=>e.root!==r.root||e.quality!==r.quality)),pool:i}}var Jn=[[1,`minor 2nd`],[2,`major 2nd`],[3,`minor 3rd`],[4,`major 3rd`],[5,`perfect 4th`],[6,`tritone`],[7,`perfect 5th`],[8,`minor 6th`],[9,`major 6th`],[10,`minor 7th`],[11,`major 7th`],[12,`octave`]],Yn=[[`2`,2],[`3`,4],[`4`,5],[`5`,7],[`6`,9],[`7`,11]],Xn=[[`major`,`major`],[`minor`,`minor`],[`aug`,`augmented`],[`dim`,`diminished`],[`7`,`dominant 7th`],[`maj7`,`major 7th`],[`m7`,`minor 7th`]],Zn=[[`major`,`major`],[`minor`,`minor`],[`augmented`,`augmented`],[`diminished`,`diminished`]],Qn=e=>e[Math.floor(Math.random()*e.length)],$n=(e,t)=>j(`${e}4`)+t;function er(e,t,n,r=.8){if(!n||typeof window>`u`)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let a=e.current??new i;e.current=a;let o=[[1,1],[2,.45],[3,.25],[4,.12]];t.forEach((e,t)=>{let n=a.currentTime+t*r,i=.16/Math.sqrt(e.length);e.forEach(e=>{let t=440*2**((e-69)/12),r=a.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(i,n+.02),r.gain.exponentialRampToValueAtTime(1e-4,n+1.1),r.connect(a.destination),o.forEach(([e,i])=>{let o=a.createOscillator(),s=a.createGain();o.type=`sine`,o.frequency.value=t*e,s.gain.value=i,o.connect(s),s.connect(r),o.start(n),o.stop(n+1.15)})})})}function tr(e,{level:t=`Easy`,randomInversion:n=!1}={}){let r=Qn(A.map((e,t)=>t)),i=A[r];if(e===`Interval Recognition`){let[e,t]=Qn(Jn);return{semitones:e,label:t,notes:[$n(i,0),$n(i,e)]}}if(e===`Diatonic Note Recognition`){let[e]=Qn(Yn),t=Qn([`major`,`minor`]),n=t===`major`?[0,2,4,5,7,9,11]:[0,2,3,5,7,8,10];return{root:i,degree:e,scaleType:t,notes:[$n(i,0),$n(i,n[Number(e)-1])]}}if(e===`Chord Quality Recognition`){let[e,t]=Qn(Xn),r=de(`${i}4`,e).map(j);return{root:i,quality:e,label:t,groups:[Wn(r,n?Math.floor(Math.random()*r.length):0)]}}if(e===`Chord Inversion Recognition`){let[e,t]=Qn(Zn),n=Math.floor(Math.random()*3);return{root:i,quality:e,label:t,inversion:n,groups:[Wn(Un(r,e,4),n)]}}let a=qn(t),o=[Un(a.first.root,a.first.quality,4),Un(a.second.root,a.second.quality,4)];return{...a,groups:o}}function nr({active:e,onClick:t,children:n}){return(0,x.jsx)(`button`,{type:`button`,onClick:t,"aria-pressed":e,className:`glass-btn px-3 py-2.5 text-sm font-semibold text-slate-100`,children:n})}function rr({mode:e=`Interval Recognition`}){let[t,n]=(0,b.useState)(`Easy`),[r,i]=(0,b.useState)(!1),[a,o]=(0,b.useState)(()=>tr(e,{level:t,randomInversion:r})),[s,c]=(0,b.useState)(``),[l,u]=(0,b.useState)(null),[d,f]=(0,b.useState)(null),[p,m]=(0,b.useState)(`idle`),[h,g]=(0,b.useState)(``),[_,v]=(0,b.useState)(!0),[y,C]=(0,b.useState)(!1),w=(0,b.useRef)(null),T=e===`Chord Relation Recognition`,E=T&&t===`Hard`,D=(n={})=>{o(tr(e,{level:t,randomInversion:r,...n})),c(``),u(null),f(null),m(`idle`),g(``)},O=t=>{n(t),o(tr(e,{level:t,randomInversion:r})),c(``),u(null),f(null),m(`idle`),g(``)},k=()=>{let e=a.groups??a.notes.map(e=>[e]);er(w,e,_,T?1.4:.8)},ee=e=>{c(e),m(`idle`),g(``)},te=()=>{if(E){if(l===null||d===null){g(`Choose a root and a quality first.`);return}let e=l===a.second.root&&d===a.second.quality,t=`${A[a.second.root]} ${a.second.quality}`;g(e?`Correct. The second chord is ${t}.`:`Not quite. The second chord is ${t}.`),m(`submitted`);return}if(s===``){g(`Choose an answer first.`);return}if(T){let e=s===a.second.label;g(e?`Correct. The second chord is ${a.second.label}.`:`Not quite. The second chord is ${a.second.label} (${A[a.second.root]} ${a.second.quality}). The first chord was ${a.first.label}.`),m(`submitted`);return}let t=e===`Interval Recognition`?String(a.semitones):e===`Diatonic Note Recognition`?a.degree:e===`Chord Quality Recognition`?a.quality:String(a.inversion),n=s===t,r;r=e===`Interval Recognition`?a.label:e===`Diatonic Note Recognition`?`degree ${a.degree} of the ${a.root} ${a.scaleType} scale`:e===`Chord Quality Recognition`?`${a.root} ${a.label}`:`${Gn[a.inversion].toLowerCase()} of ${a.root} ${a.label}`,g(n?`Correct.`:`Not quite. The answer is ${r}.`),m(`submitted`)},ne=e===`Interval Recognition`?`Identify the interval.`:e===`Diatonic Note Recognition`?`The first note is the tonic of a ${a.root} ${a.scaleType} scale. Identify the second note.`:e===`Chord Quality Recognition`?`Identify the chord quality${r?` (the inversion varies)`:``}.`:e===`Chord Inversion Recognition`?`This chord is ${a.root} ${a.label}. Which inversion is played?`:E?`Identify the second chord: its root and quality.`:`The first chord belongs to a key. Identify the second chord as a Roman numeral.`,re=e===`Interval Recognition`?Jn.map(([e,t])=>[String(e),t]):e===`Diatonic Note Recognition`?Yn.map(([e])=>[e,`degree ${e}`]):e===`Chord Quality Recognition`?Xn.map(([e,t])=>[e,t]):e===`Chord Inversion Recognition`?Gn.map((e,t)=>[String(t),e]):E?null:a.pool.map(e=>[e.label,e.label]);return(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`section`,{className:`glass p-5 text-center`,children:[(0,x.jsx)(`p`,{className:`text-lg font-medium text-white`,children:ne}),T&&!E&&(0,x.jsxs)(`p`,{className:`mt-2 text-sm text-slate-300`,children:[`Key: `,a.tonic===void 0?``:`${A[a.tonic]} ${a.type}`]}),h&&(0,x.jsx)(`p`,{className:`mt-2 text-sm text-cyan-200`,children:h})]}),(0,x.jsxs)(`section`,{className:`glass p-5 text-center`,children:[(0,x.jsx)(`p`,{className:`text-sm text-slate-300`,children:`Listen, then choose your answer.`}),(0,x.jsx)(`button`,{type:`button`,onClick:k,className:`btn-accent mt-4 px-6 py-3 text-base`,children:`Play exercise`})]}),T&&(0,x.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:Ln.map(e=>(0,x.jsxs)(nr,{active:t===e,onClick:()=>O(e),children:[e,e===`Hard`?` · non-diatonic`:``]},e))}),E?(0,x.jsxs)(`div`,{className:`space-y-3`,children:[(0,x.jsx)(`div`,{className:`grid grid-cols-4 gap-2`,children:A.map((e,t)=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>{u(t),m(`idle`),g(``)},"aria-pressed":l===t,className:`glass-btn px-2 py-3 text-sm font-semibold text-slate-100`,children:e},e))}),(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:[[`major`,`Major`],[`minor`,`Minor`]].map(([e,t])=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>{f(e),m(`idle`),g(``)},"aria-pressed":d===e,className:`glass-btn px-3 py-3 text-sm font-semibold text-slate-100`,children:t},e))})]}):(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4`,children:re.map(([e,t])=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>ee(e),"aria-pressed":s===e,className:`glass-btn px-3 py-3 text-sm font-semibold text-slate-100`,children:t},e))}),(0,x.jsx)(Ve,{onControls:()=>C(!0),onSubmit:te,onNew:()=>D()}),(0,x.jsx)(S,{open:y,onClose:()=>C(!1),title:`Controls`,children:(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsxs)(`button`,{type:`button`,onClick:()=>v(e=>!e),className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:[`Audio `,_?`ON`:`OFF`]}),e===`Chord Quality Recognition`&&(0,x.jsxs)(`button`,{type:`button`,onClick:()=>i(e=>!e),"aria-pressed":r,className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:[`Random inversions: `,r?`ON`:`OFF`]})]})})]})}var ir=`# Music theory

The theory shared by every instrument in the app. Each topic gives the idea, a worked example and an exercise. Diagrams appear only where they show something the text cannot.

## Notes and pitch names
@group Foundations

- Western music uses twelve pitch classes: C, C♯/D♭, D, D♯/E♭, E, F, F♯/G♭, G, G♯/A♭, A, A♯/B♭, B.
- After B the cycle starts again at C.
- Two notes with the same name in different octaves are the same pitch class.
- A **semitone** is one step: one key on a piano, one fret on a guitar.
- A **tone** (whole step) is two semitones.
- **Enharmonic** names describe the same pitch. C♯ and D♭ are both pitch class 1. The context decides the name: in A major you write G♯, not A♭.
- Sharps raise a note by a semitone; flats lower it by one.

Example: E♯ is the same pitch as F, and B♯ is the same as C. These come up in keys with many sharps or flats.

{{scale: C chromatic | piano | All twelve notes of the octave: each black key is one note with two names (C♯ = D♭ and so on).}}

Exercise: write the enharmonic spelling of every note in the A♭ major scale, then in G♯ major. Compare the two.

## Intervals
@group Foundations

- An interval is the distance between two notes.
- Its **number** counts letter names, including both ends. C to E is a third.
- Its **quality** says how big it is: major, minor, perfect, augmented or diminished.
- Semitone sizes:
  - Minor 2nd: 1. Major 2nd: 2.
  - Minor 3rd: 3. Major 3rd: 4.
  - Perfect 4th: 5. Tritone: 6.
  - Perfect 5th: 7. Minor 6th: 8. Major 6th: 9.
  - Minor 7th: 10. Major 7th: 11. Octave: 12.
- To **invert** an interval, move the lower note up an octave. The numbers add to 9, and the qualities flip: major becomes minor, perfect stays perfect, augmented becomes diminished.
- Consonant intervals (3rds, 5ths, 6ths, octaves) sound stable. Dissonant ones (2nds, 7ths, the tritone) want to move.

Example: C to G is a perfect 5th (7 semitones). Inverted, G to C is a perfect 4th (5 semitones). 7 + 5 = 12.

{{notes: C G | guitar piano | Every C and G: on the keyboard count the 7 semitones; on the fretboard each G sits two frets above a C on the next string up (three frets when crossing from G to B).}}

Exercise: name the interval between each pair of adjacent notes in C major. Then invert each one and name the result.

## Ear training with intervals
@group Foundations

- Learn intervals from music you know, and check each reference on your instrument.
- A reliable reference for the perfect 5th: the first leap in "Twinkle, Twinkle, Little Star", from C to G.
- Sing the top note, then the bottom, then fill the gap.
- The tritone is the hardest to place, because it sits between two stable intervals.

Exercise: each day, practise one interval. Listen to ten songs and write down each example you find.

## Scales
@group Foundations

- A **scale** is an ordered set of pitches within an octave. Each scale is listed here as its steps from the tonic.
- **Major:** 0 2 4 5 7 9 11. The steps are whole, whole, half, whole, whole, whole, half.
- **Natural minor:** 0 2 3 5 7 8 10.
- **Harmonic minor:** 0 2 3 5 7 8 11. The raised seventh gives a leading tone and a major dominant chord.
- **Melodic minor:** 0 2 3 5 7 9 11 going up.

{{scale: C major | guitar piano | C major: the half steps fall between E–F and B–C, the white keys with no black key between them.}}

- **Pentatonic scales** have five notes.
  - Major pentatonic: 0 2 4 7 9.
  - Minor pentatonic: 0 3 5 7 10.
- **Blues scale:** the minor pentatonic with a ♭5 added: 0 3 5 6 7 10.
- **Whole-tone scale:** six equal steps (0 2 4 6 8 10). It sounds unresolved.
- **Diminished scale:** alternating whole and half steps (0 2 3 5 6 8 9 11).

{{scale: A minor pentatonic | guitar piano | A minor pentatonic: five notes and no half steps, which is why it is so hard to hit a clashing note with it.}}

Exercise: play each scale from C, then from A. Sing its tonic chord after each one.

## Modes of the major scale
@group Foundations

- A mode uses the notes of a parent scale, but starts on a different degree.
- The seven modes of the major scale are Ionian (the major scale), Dorian, Phrygian, Lydian, Mixolydian, Aeolian (the natural minor) and Locrian.
- Each mode has a **characteristic note**, the one that sets it apart from its parent:
  - Dorian: the major sixth.
  - Phrygian: the flat second.
  - Lydian: the raised fourth.
  - Mixolydian: the flat seventh.
  - Locrian: the flat second and flat fifth.
- Modes can be ordered by **brightness**:
  - Bright modes have a major third: Lydian, Ionian, Mixolydian (brightest first).
  - Dark modes have a minor third: Dorian, Aeolian, Phrygian, Locrian (darkest last).

Example: D Dorian uses exactly the notes of C major, but D is the centre. Its characteristic note is B♮, the major sixth.

{{scale: D dorian | guitar piano | D Dorian uses the same notes as C major (all white keys) with D as the centre. Listen for B♮, its characteristic note.}}

Practical use:
- A minor chord with a major sixth suggests Dorian.
- A dominant chord over a major key suggests Mixolydian.
- A major chord with a raised fourth suggests Lydian.

Exercise: play C major starting on each of its seven notes. Name each mode, then say its characteristic note.

Sources: Open Music Theory v2, "Introduction to Diatonic Modes" and "Diatonic Modes".

## Modes of melodic and harmonic minor
@group Foundations

Each scale can be started on any of its seven notes, like the major scale. The numbers are semitones above the mode's own root.

### Modes of melodic minor (jazz minor)

The **melodic minor** here means the ascending form (A B C D E F♯ G♯), used both up and down, as in jazz.

1. **Melodic minor** (0 2 3 5 7 9 11). Chord: m(maj7) or m6. A minor tonic with a bright top.
2. **Dorian ♭2** (0 1 3 5 7 9 10). Chord: a sus chord with ♭9. Sometimes called Phrygian ♮6.
3. **Lydian augmented** (0 2 4 6 8 9 11). Chord: maj7♯5.
4. **Lydian dominant** (0 2 4 6 7 9 10). Chord: 7♯11. Also called the "overtone" or "acoustic" scale. Fits the tritone substitute and a non-resolving dominant.
5. **Mixolydian ♭6** (0 2 4 5 7 8 10). Chord: 7♭13. Also called the Hindu or Aeolian dominant scale.
6. **Locrian ♮2** (0 2 3 5 6 8 10). Chord: m7♭5 (half-diminished). The usual jazz choice for the iiø7 of a minor ii–V.
7. **Altered**, or super-Locrian (0 1 3 4 6 8 10). Chord: 7alt (♭9, ♯9, ♯11, ♭13). The standard sound of a dominant resolving to a minor or major tonic with maximum tension.

{{scale: G lydian dominant | guitar piano | G Lydian dominant: G Mixolydian with a raised fourth (C♯). The scale for G7♯11 and for tritone substitutes.}}

{{scale: G altered | guitar piano | G altered: every tension a dominant can carry (♭9, ♯9, ♯11, ♭13) around the guide tones B and F.}}

Example: in C, the melodic minor of A♭ (A♭ B♭ C♭ D♭ E♭ F G) contains G altered. One parent scale gives the altered dominant (on G), the Lydian dominant (on D♭, the tritone substitute) and the half-diminished (on F). That is why these three chords share notes so easily.

### Modes of harmonic minor

The **harmonic minor** (A B C D E F G♯) has an augmented second between its sixth and seventh notes, which colours every mode.

1. **Harmonic minor** (0 2 3 5 7 8 11). Chord: m(maj7). The classical minor key, with a leading tone.
2. **Locrian ♮6** (0 1 3 5 6 9 10). Chord: m7♭5.
3. **Ionian ♯5** (0 2 4 5 8 9 11). Chord: maj7♯5.
4. **Dorian ♯4** (0 2 3 6 7 9 10). Chord: m7♯11. Common in Eastern European and klezmer melodies (sometimes called Ukrainian Dorian).
5. **Phrygian dominant** (0 1 4 5 7 8 10). Chord: 7♭9♭13. The V of a minor key, and the home scale of flamenco and much Middle-Eastern music.
6. **Lydian ♯2** (0 3 4 6 7 9 11). Chord: maj7♯11 with a ♯9 colour.
7. **Ultralocrian**, or altered ♭♭7 (0 1 3 4 6 8 9). Chord: diminished seventh.

{{scale: E phrygian dominant | guitar piano | E Phrygian dominant, the fifth mode of A harmonic minor: the V-chord scale in A minor and the home scale of flamenco.}}

Example: over G7♭9 resolving to Cm, play G Phrygian dominant (the fifth mode of C harmonic minor). Over G7 with a raised eleventh that does not resolve, play G Lydian dominant (the fourth mode of D melodic minor).

Exercise: build every harmonic minor mode on A, play each over a drone on its root, and name the note that makes it sound different from the closest major-scale mode.

Exercise: for each melodic minor mode on C, name the chord it fits and one place in a ii–V–I where you could use it.

Sources: Open Music Theory v2, "Chord-Scale Theory"; Novik, Lydian Chromatic Concept thesis (University of Colorado). Names vary between books: "Phrygian ♮6" and "Dorian ♭2" are the same mode, and some writers call Mixolydian ♭6 "Aeolian dominant".

## Keys and key signatures
@group Foundations

- The **key** is the tonal centre of a piece. The **key signature** shows which notes are sharp or flat in that key.
- The full picture of keys, relatives and signatures is in the Circle of fifths topic below.
- The **relative minor** is three semitones below its major. C major and A minor share a key signature.
- The **parallel minor** shares the tonic. C major and C minor are parallel.

{{scale: G major | guitar piano | G major: one sharp (F♯). This is the key signature written out as notes.}}

Exercise: write every key signature from zero to seven sharps and from zero to seven flats, then check them against the circle.

## Circle of fifths
@group Foundations

The circle of fifths puts the twelve keys in a ring, so that neighbours are a perfect fifth apart. One picture shows key signatures, relative keys, chord relationships and the most common harmonic moves.

### The layout

- Start at C at the top. Going clockwise, each key is a perfect fifth higher: C, G, D, A, E, B, F♯, C♯.
- Going counterclockwise, each key is a perfect fifth lower: C, F, B♭, E♭, A♭, D♭, G♭.
- The two directions meet at the bottom, where F♯ and G♭ (and C♯ and D♭) are the same pitches written two ways.
- Each major key has a relative minor on the inside of the ring, three semitones below it.

{{circle: fifths | Each step clockwise adds a sharp; each step anticlockwise adds a flat. The inner ring shows each key's relative minor.}}

Exercise: starting at C, walk clockwise and name each key. Then walk counterclockwise. Each key differs from its neighbour by one note.

### Key signatures

- One step clockwise adds one sharp. One step counterclockwise adds one flat.
- The order of the sharps is F C G D A E B. The order of the flats is B E A D G C F.
- **Sharp keys:** the last sharp added is the leading tone of the key. G major has one sharp (F♯), D major has two (F♯ C♯), A major has three (F♯ C♯ G♯).
- **Flat keys:** the key name is the second-to-last flat. B♭ major has two flats (B♭ E♭), so its name comes from B. E♭ major has three (B♭ E♭ A♭), so its name comes from E. F major has one flat (B♭), and its name is F.

Example: E major has four sharps: F♯, C♯, G♯ and D♯. It sits four steps clockwise from C.

Exercise: write the key signature of every major key from C to F♯, then from C to G♭, without looking at the ring. Check your answers against it.

### Relative keys

- A major key and its relative minor share a key signature.
- To find the relative minor of a major key, go down three semitones. C major gives A minor; D major gives B minor.
- To find the relative major of a minor key, go up three semitones. A minor gives C major.
- On the ring, a relative minor sits directly inside its major key.

Exercise: write the relative minor of every major key on the ring. Play each minor scale and hear that it uses the same notes as its major partner.

### Neighbours and shared notes

- Keys next to each other differ by one note. C major and G major share six notes; G has one extra note, F♯.
- Keys two steps apart differ by two notes. D major has two notes that C major lacks: F♯ and C♯.
- Keys on opposite sides of the ring share very few notes. C major and F♯ major share only B and F.

Smooth key changes go to a neighbour. Dramatic changes jump across the ring.

Exercise: pick a major key. Name its two neighbours and the key opposite it. For each one, count the notes the two scales share.

### Chords in a key

- A key's I chord is the key itself. Its IV chord is one step counterclockwise. Its V chord is one step clockwise.
- In C major: C (I), F (IV, counterclockwise) and G (V, clockwise).
- The V is the strongest pull to the tonic because a dominant always points one step clockwise, toward its target.
- The minor chords of a key (ii, iii, vi) are the relative minors of its neighbours. In C: Dm is the relative minor of F, Em of G, and Am of C.

Example: in C major, Dm (ii) is the relative minor of F major, which sits next to C. Em (iii) belongs to G major. Am (vi) is the relative minor of C itself.

Exercise: pick a key. Find its I, IV and V on the ring, then find its ii, iii and vi and name the relative keys they belong to.

### Secondary dominants on the ring

- A secondary dominant is the V chord of a chord other than the tonic.
- It sits one step clockwise of its target. A7 is one step clockwise of D, so A7 is the secondary dominant of Dm.
- The secondary dominants of C major are A7, B7, C7, D7, E7 and F♯7. Each one is a V chord pointing to a diatonic chord.

Exercise: write the secondary dominants of G major. Check that each one sits one step clockwise of its target.

### Chains of fifths and ii–V moves

- A chain of descending fifths (C – F – B♭ – E♭) moves counterclockwise round the ring. Each chord is the V of the next one.
- A ii–V–I is a short chain of this kind: the ii is the dominant of the V, and the V is the dominant of the I.
- Long chains are common in jazz standards and in classical sequences.

Example: Dm7 – G7 – Cmaj7. The roots move D to G to C, each a fifth up. That is clockwise round the ring, and each root pulls to the next.

Exercise: play the descending chain C7 – F7 – B♭7 – E♭7 – A♭maj7. Then play the shorter Dm7 – G7 – Cmaj7 and hear the same pull to rest.

### Changing key with the ring

- To move to a key next to yours, use the V of the new key. Play that V, then its tonic.
- The V chord of the new key is often a secondary dominant in the old key, so the change feels natural.
- For a wider move, use a chord that belongs to both keys, such as a shared chord between neighbours.

Example: to move from C to G major, play D7 (the V of G), then G. D7 is a secondary dominant in C, so the change is smooth.

Exercise: move from C to F major with C7 (the V of F), then F. Then move from C to D major with A7, then D.

### Enharmonic keys

- F♯ major and G♭ major sound the same but are written differently. So are C♯ and D♭ major.
- Choose the spelling that matches the notation. A piece in F♯ major uses six sharps; the same music in G♭ major uses six flats.

Exercise: write the scales of F♯ major and G♭ major. Compare the notes and their names.

### Practising with the ring

- Learn the ring as a sequence of fifths, not a list of keys.
- Move between keys by neighbours first. Practise the far keys later.
- Check any key signature by counting from C.

Exercise: for one week, practise a different key each day, in ring order. Each day, play the scale, the I, IV and V chords, and the relative minor.

## Triads and their qualities
@group Chords

- A **triad** stacks two thirds: root, third, fifth.
- Major: 0 4 7. Minor: 0 3 7. Diminished: 0 3 6. Augmented: 0 4 8.
- The third sets the brightness or darkness. The fifth sets stability or tension.
- A **suspended** chord replaces the third: sus2 is 0 2 7 and sus4 is 0 5 7. It is neither major nor minor.

{{chords: C Cm Caug Cdim Csus4 | guitar piano | The four triad qualities and sus4 on one root: only the third and the fifth change between them.}}

Exercise: play the four triads on C. Then move each one up a semitone and say what changed.

## Seventh chords and extensions
@group Chords

- A seventh chord adds a seventh to a triad. The five common types:
  - Major seventh: 0 4 7 11 (major triad + major seventh).
  - Dominant seventh: 0 4 7 10 (major triad + minor seventh).
  - Minor seventh: 0 3 7 10 (minor triad + minor seventh).
  - Half-diminished (m7♭5): 0 3 6 10 (diminished triad + minor seventh).
  - Fully diminished seventh: 0 3 6 9 (diminished triad + diminished seventh). It divides the octave into four equal minor thirds, so only three different diminished sevenths exist.
- Two less common types:
  - **Minor-major seventh**, m(maj7): 0 3 7 11. The tonic chord of harmonic and melodic minor, and the second chord of the minor "line cliché" (Cm – Cm(maj7) – Cm7 – Cm6).
  - **Augmented major seventh**, maj7♯5: 0 4 8 11. Built on the third degree of harmonic or melodic minor.
- **Sixth chords** add a major sixth instead of a seventh: C6 is C E G A, Cm6 is C E♭ G A. They act like a tonic and often replace a maj7 or m7 tonic.
- **Extensions** are notes above the octave: ninth (2nd), eleventh (4th), thirteenth (6th).
- **Alterations** change a note of a dominant: ♭9, ♯9, ♯11, ♭13.

{{notes: C Eb G B | piano | The minor-major seventh, C–E♭–G–B: a minor triad under a major seventh.}}

Chord symbols:
- Cmaj7 is major seventh.
- C7 is dominant seventh.
- Cm7 is minor seventh.
- Cø is half-diminished.
- Cdim7 is fully diminished.

{{chords: Cmaj7 C7 Cm7 Cø Cdim7 | guitar piano | The five common seventh chords on C. Compare neighbours to see which single note changes.}}

Exercise: for each chord of C major's diatonic set, write its seventh, ninth, eleventh and thirteenth.

## Diatonic chords and Roman numerals
@group Chords

- A **diatonic chord** is built on each degree, using only the notes of the key.
- In a major key: I major, ii minor, iii minor, IV major, V major, vi minor, vii° diminished.
- In a natural minor key: i minor, ii° diminished, III major, iv minor, v minor, VI major, VII major.
- In a **harmonic minor** key (raised seventh): i, ii°, III+ (augmented), iv, **V** (major), VI, **vii°**. This is the version used for cadences in minor, because V needs the leading tone.
- In a **melodic minor** key (raised sixth and seventh): i, ii, III+, IV, V, vi°, vii°. In practice, minor-key music mixes all three forms.
- **Diatonic seventh chords:**
  - Major key: Imaj7, ii7, iii7, IVmaj7, V7, vi7, viiø7. Only V is a dominant seventh.
  - Harmonic minor: i(maj7), iiø7, III+maj7, iv7, V7, VImaj7, vii°7. The vii°7 is a fully diminished seventh.
- **Roman numerals:** upper case is major, lower case is minor, ° is diminished. A flat before the numeral lowers the root: ♭VII in C is B♭ major.
- **Harmonic function:**
  - Tonic (I, iii, vi).
  - Subdominant (ii, IV).
  - Dominant (V, vii°).
  - The usual motion is tonic, subdominant, dominant, tonic.

{{chords: C Dm Em F G Am Bdim | guitar piano | The seven diatonic chords of C major, I to vii°.}}

{{chords: Am Bdim E Am | guitar piano | ii° – V – i in A minor: the E major chord borrows G♯ from harmonic minor to make the cadence pull.}}

Example: in A minor, Am – Dm – E7 – Am uses the natural-minor i and iv but the harmonic-minor V (E major, with G♯).

Exercise: harmonise the melody of "Ode to Joy" (E E F G G F E D C C D E E D D) with I, IV, V and vi. Write the Roman numeral under each chord.

## Cadences
@group Chords

- **Authentic cadence:** V to I.
  - **Perfect** (PAC): both chords in root position and the tonic in the top voice.
  - **Imperfect** (IAC): any authentic cadence that misses one of those conditions.
- **Plagal cadence:** IV to I, the "Amen" cadence.
- **Half cadence:** any chord to V. It ends a phrase open, like a question.
- **Deceptive cadence:** V to vi. The bass resolves as expected; the harmony moves on.
- **Phrygian half cadence:** iv6 to V, in minor only. The bass falls a half step from the lowered sixth degree to the fifth (in A minor, F to E). Common in baroque music.

{{chords: G C | guitar piano | V – I, the authentic cadence: listen to B rising to C.}}

Exercise: harmonise a four-bar phrase that ends on each cadence type, in C major.

Sources: Open Music Theory v2, "Introduction to Harmony, Cadences, and Phrase Endings" and "La (Scale Degree 6) in the Bass".

## Inversions and figured bass
@group Chords

- An **inversion** puts a chord tone other than the root in the bass.
  - Root position: the root is lowest.
  - First inversion: the third is lowest.
  - Second inversion: the fifth is lowest.
  - Third inversion (seventh chords only): the seventh is lowest.
- **Figured bass** shows the intervals above the bass.
  - Triads:
    - Root position: no figure, or 5/3.
    - First inversion: 6.
    - Second inversion: 6/4.
  - Seventh chords:
    - Root position: 7.
    - First inversion: 6/5.
    - Second inversion: 4/3.
    - Third inversion: 4/2, or just 2. The seventh is in the bass and normally falls by step, so V4/2 goes to I6.
- **Slash chords** name the bass in lead sheets: C/E is first inversion, C/G is second inversion, G7/F is third inversion.
- A **pedal** is a bass note held while the upper voices move.

### The three common six-four chords

A second-inversion triad sounds unstable, so classical harmony uses it in three set ways:
- **Cadential six-four:** I6/4 – V. The six-four decorates the V that follows; many analysts write it as V6/4–5/3. Bass: the dominant, held.
- **Passing six-four:** a six-four on a bass that passes by step, as in I – V6/4 – I6 (bass C – D – E).
- **Pedal (neighbour) six-four:** I – IV6/4 – I over a held bass (C – F/C – C).

{{chords: C C/E C/G | guitar piano | C in root position, first and second inversion: the bass changes, the chord does not.}}

{{chords: G7 G7/B G7/D G7/F | guitar piano | G7 in all four positions (7, 6/5, 4/3, 4/2). The figure names the intervals above each bass.}}

Example: the bass line C – G – G – C, with the chords C, C/G, G and C. The C/G is a cadential six-four, which expects the V to follow.

Example: G7/F (V4/2) – C/E (I6). The F in the bass falls to E, as the seventh of a dominant should.

Exercise: write the figured bass for C, C/E, C/G, Am, Am/C and Am/E.

Exercise: write the figures for G7, G7/B, G7/D and G7/F, then resolve each one to a C chord with correct bass motion (G7/B goes to C, G7/D to C or C/E, G7/F to C/E).

Sources: Open Music Theory v2, "Inversion and Figured Bass" and "Six-Four Chords"; Prout, Harmony: Its Theory and Practice (public domain).

## Voicings
@group Chords

- A **close voicing** packs the notes within an octave.
- An **open voicing** spreads them across more than an octave.
- **Drop 2:** take the second-highest note of a close chord and drop it an octave. The standard guitar voicing on four adjacent strings.
- **Drop 3:** drop the third-highest note an octave. It leaves a gap between the bass and the rest, so on guitar it skips a string (for example strings 6, 4, 3, 2).
- **Drop 2 and 4:** drop both the second and fourth notes. Wide and open, good for big-band and piano left-hand spreads.
- **Shell voicing:** only the third and seventh, which define the quality.
- **Rootless voicing:** no root, because the bass plays it.
- **Quartal voicing:** stacked fourths instead of thirds (D G C F). Common in modal jazz.

Doubling, when a triad has to fill four voices (classical part-writing):
- In root position, double the root.
- Never double the leading tone or a chromatic note that has to resolve. Doubling it would force parallel octaves.
- In first inversion, double whichever note gives the smoothest lines; avoid doubling the bass if it is the leading tone.
- In a cadential six-four, double the bass (the fifth of the tonic chord).
- A seventh chord in four voices needs no doubling. Leave out the fifth if a voice is needed elsewhere, and double the root.

Guidelines for jazz and pop voicings:
- Space chords like the harmonic series: wide intervals low, close intervals high.
- Put extensions (9, 11, 13) in the upper voices.
- If you double a note, double the bass or the root.
- Leaving out the fifth is almost always fine.
- Use "lazy" voice leading: move each voice as little as possible. A common pattern leads the third of one chord to the seventh of the next, while the ninth moves to the thirteenth.
- Break the guidelines only on purpose.

Example: Cmaj7 close is C E G B. Drop 2 moves G down an octave, giving G C E B from low to high. Drop 3 moves the third note from the top (E) down an octave instead, giving E C G B.

Example: in Dm7 – G7, the third of Dm7 (F) stays as the seventh of G7, and the seventh of Dm7 (C) falls a half step to B, the third of G7.

Exercise: voice Dm7 – G7 – Cmaj7 in close position, then in drop-2. Keep the common notes in the same voice.

Sources: Open Music Theory v2, "Jazz Voicings".

## Voice leading
@group Chords

- Voice leading is how each line moves from one chord to the next.
- Move by step where you can, and keep common tones in place.
- The leading tone resolves up to the tonic. The seventh of a dominant resolves down.
- Avoid parallel fifths and octaves between the outer voices.

Example: G7 (G B D F) to C (C E G). B rises to C, F falls to E, D falls to C, and G stays as a common tone.

{{chords: G7 C | guitar piano | G7 to C: follow each voice. B rises to C, F falls to E, G stays.}}

Exercise: write a four-part version of C – Am – F – G – C, where each voice moves the smallest possible distance.

## Secondary dominants
@group Harmonic movement

- A secondary dominant is the V chord of a chord other than the tonic. It is written V/x.
- In C major: A7 (V/ii), B7 (V/iii), C7 (V/IV), D7 (V/V) and E7 (V/vi).
- It briefly tonicises its target. It is not a modulation unless the new key lasts.
- Secondary dominants and **secondary leading-tone chords** (vii°/x or vii°7/x) together are called **applied chords**. Read V/ii as "five of two".
- Another way to see them: an applied chord is a diatonic chord with a raised note. ii (Dm) becomes II♯ (D major), which is V/V.
- Applied chords almost always add accidentals, usually ones that raise a note.
- vii° has no secondary dominant, because a diminished chord cannot act as a temporary tonic.

### Secondary ii–V

- In jazz, a secondary dominant usually brings its own ii chord: the **secondary ii–V**, written ii/x – V/x.
- In C, aiming at Dm7: Em7 – A7 – Dm7. Em7 is "two of two", A7 is "five of two".
- Aiming at a minor target, the ii is often half-diminished: Eø – A7♭9 – Dm7.

### Chains and deceptive resolutions

- **Chains of dominants:** each dominant resolves to another dominant, round the circle of fifths: E7 – A7 – D7 – G7 – C. This is the bridge of rhythm changes and the "ragtime progression".
- **Deceptive resolution:** an applied V can move somewhere other than its target. E7 (V/vi) going to F instead of Am is the applied version of V – vi.

{{chords: A7 B7 C7 D7 E7 | guitar piano | Every secondary dominant in C: the V7 of ii, iii, IV, V and vi.}}

{{chords: Em7 A7 Dm7 G7 C | guitar piano | A secondary ii–V (Em7 – A7) into Dm7, then the main ii–V home to C.}}

Example: C – E7 – Am – A7 – Dm – D7 – G7 – C. E7, A7 and D7 are all secondary dominants.

Exercise: replace each secondary dominant in the example with its target chord, and hear what the V/x was adding.

Exercise: in F major, write the secondary ii–V into each diatonic chord except the diminished one (for example Am7 – D7 into Gm7).

Sources: Open Music Theory v2, "Tonicization".

## Borrowed chords (modal interchange)
@group Harmonic movement

- A borrowed chord comes from the parallel minor, or from another mode with the same tonic. It adds colour; it is not a modulation.
- **Mixture changes a chord's quality, not its function.** Fm in C is still a subdominant, just a darker one.
- Mixture is much more common in major keys, borrowing from the parallel minor.
- A flat before the Roman numeral marks a lowered root: ♭VI is A♭ in C.
- In C major, the common borrowings are iv (Fm), ♭VI (A♭), ♭VII (B♭), ♭III (E♭) and v (Gm).
- In jazz, the most common mixture is iiø7 in place of ii7 (Dø7 for Dm7 in C) and V7♭9 in place of V7 (G7♭9). Both borrow the lowered sixth degree (A♭ in C).
- The borrowings used in this app: IVm (Fm), IIIM (E major), IIM (D major), VIM (A major) and VIIb (B♭ major). In a minor key they are taken from the relative major.

Common uses:
- Ballad colour: C – Am – Fm – C. The Fm adds a bittersweet darkening.
- Rock colour: C – B♭ – C. A plagal sound with no leading tone.
- Pop cadence: A♭ – B♭ – C. The ♭VI and ♭VII lead into the tonic.

{{chords: C Fm C | guitar piano | C – Fm – C: the borrowed minor iv. Only one note changes, A to A♭.}}

Exercise: write four-bar progressions in C, one for each borrowed chord in the list. Circle the borrowed chord.

Sources: Open Music Theory v2, "Modal Mixture" and "Substitutions"; Mount, Fundamentals, Function, and Form (chromatic harmony).

## Chromatic predominants: Neapolitan and augmented sixths
@group Harmonic movement

Two chromatic chords that do the job of a predominant (ii or IV) with more drama. Both lead to V.

### Neapolitan sixth (♭II6)

- A major triad built on the lowered second degree. In C: D♭ major.
- It is almost always in first inversion, with the fourth degree in the bass (F in C), so it is written ♭II6.
- It works like a chromatic ii°6 and appears before a cadence.
- In voice leading, the lowered second (D♭) falls to the leading tone (B) as the music moves to V.
- It is used in major and minor keys, but more often in minor.

{{chords: Db/F G7 C | guitar piano | The Neapolitan in first inversion, then V7 and I: listen to D♭ falling to B.}}

Exercise: in A minor, play B♭/D (the Neapolitan), then E7, then A minor. Listen for B♭ falling to G♯.

### Augmented sixth chords

- A group of chromatic predominants built around one interval: an augmented sixth between the lowered sixth degree and the raised fourth degree. In C: A♭ and F♯.
- They have no root, and they resolve to a root-position V. The two notes of the augmented sixth spread out by half step to the octave on the dominant (A♭ to G, F♯ to G).
- There are three types. Each adds notes to the A♭–F♯ pair:
  - **Italian (It+6):** adds the tonic. In C: A♭ C F♯.
  - **French (Fr+6):** adds the tonic and the second degree. In C: A♭ C D F♯.
  - **German (Ger+6):** adds the tonic and the lowered third degree. In C: A♭ C E♭ F♯.
- They are more common in minor keys.
- The German sixth sounds exactly like a dominant seventh (A♭7) but is spelled and resolved differently. That double identity is a classic way to change key.

{{notes: Ab C F# | piano | The Italian sixth in C: A♭ and F♯ move outward by half step to the two Gs of the V chord.}}

Example: in C minor, play A♭ C E♭ F♯ (German sixth), then a C minor six-four, then G7, then C minor.

Exercise: build the Italian, French and German sixths in A minor, and resolve each to E major.

Sources: Open Music Theory v2, "Neapolitan 6th (♭II6)" and "Augmented Sixth Chords".

## Chord substitution
@group Harmonic movement

- **Dominant on the same root:** when a progression moves by fifth, its first chord can become a dominant seventh on the same root. Dm7 – G7 becomes D7 – G7, which makes D7 an applied chord (V/V).
- **Relative substitution:** replace a major chord with its relative minor, or the reverse. C and Am share two of three notes.
- **Tritone substitution (SubV):** replace a dominant seventh with the one a tritone away. G7 becomes D♭7. Both share the same tritone (B and F), with roles swapped, and both resolve to C with the bass a half step apart.
  - It works on secondary dominants too: A7 (V/ii) becomes E♭7 (SubV/ii), so C – E♭7 – Dm7 has a chromatic bass C – E♭ – D.
  - The substitute can bring its own ii: Dm7 – G7 – C becomes A♭m7 – D♭7 – C. A♭m7 is the "related ii" of D♭7.
  - A whole progression can be tritone-substituted in turn: E7 – A7 – D7 – G7 – C becomes E7 – E♭7 – D7 – D♭7 – C, a chromatic descent.
- **Cycle substitution (back-cycling):** put the dominant of a chord in front of it, then the dominant of that dominant, and so on. A two-bar G7 can become D7 – G7; a four-bar C can end with A7 – D7 – G7. This is how many turnarounds are built.
- **Backdoor dominant:** end ♭VII7 – I instead of V – I, often as iv7 – ♭VII7 – I (Fm7 – B♭7 – C). Common in jazz and gospel.
- **Diminished passing chord:** a diminished seventh between chords whose roots are a whole step apart (C – C♯°7 – Dm7). C♯°7 contains the notes of A7♭9 without its root, so it acts as V/ii.
- **Diminished for dominant:** any diminished seventh a half step above a dominant's root contains that dominant's 3, 5, 7 and ♭9 (B°7 = G7♭9 without G).
- Keep the function. A tonic substitute should sound like a tonic, a dominant substitute like a dominant.

{{chords: G7 Db7 | guitar piano | G7 and its tritone substitute D♭7 share the same tritone (B–F, spelled C♭–F in D♭7).}}

{{chords: Abm7 Db7 C | guitar piano | The tritone substitute with its own ii: A♭m7 – D♭7 – C, a bass line falling by half steps to C.}}

Example: the turnaround C – A7 – Dm7 – G7, tritone-substituted on the second and fourth chords, becomes C – E♭7 – Dm7 – D♭7 – C: a chromatic bass line C – E♭ – D – D♭ – C.

Exercise: take a twelve-bar blues in F. Substitute the V7 in bar 9 with a tritone substitution, then play both versions.

Exercise: start from four bars of Cmaj7 that lead back to Cmaj7. Keep bar 1, then back-cycle A7 – D7 – G7 into bars 2–4. Then tritone-substitute one of the three and compare the bass lines.

Sources: Open Music Theory v2, "Substitutions".

## Chord-scale relationships
@group Chords

- Each chord has scales that fit it:
  - Major seventh: Ionian or Lydian.
  - Dominant seventh: Mixolydian, or Lydian dominant and altered when the chord is altered.
  - Minor seventh: Dorian.
  - Half-diminished: Locrian ♮2.
- Chord tones are the most stable notes. The scale you pick decides which extensions sound right.
- **Chord-scale theory** treats the notes of a thirteenth chord as a seven-note scale. It is an approach to improvising more than a theory of harmony.
- Method:
  - Find the key centre and each chord's Roman numeral.
  - Use the mode with the same number. A ii chord in major takes the second mode (Dorian); a V takes the fifth (Mixolydian).
  - When improvising, place chord tones on the downbeats so the line stays connected to the harmony.
- Its roots are in George Russell's *Lydian Chromatic Concept of Tonal Organization*, the first theoretical system to come out of jazz. Russell built it on the Lydian scale, which he heard as a stack of perfect fifths.

Example: over Dm7 – G7 – Cmaj7 in C, play D Dorian, G Mixolydian and C Ionian. All three use the same seven notes, so the job is to aim at each chord's own tones on the strong beats. If Dm7 has a raised eleventh (G♯), that note is outside the key: the fitting scale is D Dorian ♯4 (the fourth mode of A harmonic minor), which keeps the minor third F and adds G♯.

{{scalemap: D dorian m7 | Over Dm7, D Dorian: the coloured notes are the chord tones to aim for on strong beats.}}
{{scalemap: G mixolydian 7 | Over G7, G Mixolydian: the same seven notes, but now B and F (the guide tones) are the targets.}}
{{scalemap: C major maj7 | Over Cmaj7, C Ionian: again the same notes, with the Cmaj7 tones coloured.}}

Exercise: for each diatonic chord in C major, name two scales that fit it.

Sources: Open Music Theory v2, "Chord-Scale Theory"; Novik, Lydian Chromatic Concept thesis (University of Colorado).

## Genre progressions
@group Form, rhythm and genre

A quick index: one signature progression per style. Each style has a full topic in the **Progression standards** or **Genres and styles** group, with variants, diagrams and sources.

- **Classical / galant:** Prinner IV – I6 – vii°6 – I; lament bass i – v6 – iv6 – V. → Classical and galant schemas
- **Pop:** I – V – vi – IV and I – vi – IV – V. → Pop and rock harmonic schemas
- **Blues:** I7 I7 I7 I7 / IV7 IV7 I7 I7 / V7 IV7 I7 V7. → The blues
- **Jazz:** ii7 – V7 – Imaj7; turnaround I – VI7 – ii – V; backdoor iv7 – ♭VII7 – I. → Jazz standard progressions
- **Gospel:** 3–6–2–5–1 and the 1–4 walk-up. → Gospel progressions
- **Neo-soul / R&B:** IVmaj7 – iv6 – I; Dm9 – G13 – Cmaj9. → Neo-soul and modern R&B progressions
- **Country:** I – IV – V with II7 (V/V). → Country, bluegrass and the Nashville numbers
- **Rock:** I – ♭VII – IV; ♭VI – ♭VII – I. **Metal:** i – ♭VI – ♭VII; i – ♭II. → Rock and metal progressions
- **EDM:** i – VI – III – VII. **J-pop:** IVmaj7 – V7 – iii7 – vi. → Pop loops, EDM and the royal road
- **Reggae:** I – IV with off-beat skank. → Reggae, ska and rocksteady
- **Celtic:** Em – D (Dorian), A – G (Mixolydian). → Celtic and modal folk
- **Salsa:** I – IV – V – IV montuno. **Tango:** i – V7 in minor. → Latin progressions
- **Flamenco:** Am – G – F – E landing on E as home. → Flamenco harmony
- **Brazilian:** I – VI7 – ii – V; Cmaj7 – D7 – Dm7 – D♭7. → Brazilian standard progressions

Exercise: pick three styles from the list and write an eight-bar phrase on each signature progression. Play them in C, then in A minor, and describe what makes each one sound like its style.

## Form and phrase structure
@group Form, rhythm and genre

### Small units

- A **motive** is the smallest recognisable idea: a few notes with a distinctive rhythm or contour. Beethoven's Fifth opens with one (short-short-short-long).
- A **basic idea** is a two-bar unit, often made of one or two motives.
- A **phrase** is a complete musical thought, usually four or eight bars, that ends with a cadence.

### Two phrase archetypes

- **Sentence** (usually eight bars):
  - Presentation (bars 1–4): the basic idea, then its repetition, often over tonic then dominant.
  - Continuation (bars 5–8): the idea breaks into smaller pieces (fragmentation), the harmony speeds up, and a cadence closes it.
  - Proportions 2 + 2 + 4.
- **Period** (two phrases):
  - Antecedent: a basic idea and a contrasting idea, ending on a weak cadence (usually a half cadence).
  - Consequent: the same basic idea again, ending on a stronger cadence (usually a PAC).
  - **Parallel period:** both phrases start the same way. **Contrasting period:** they start differently.
- Not every phrase fits these; many are hybrids or unique forms.

### Larger forms

- Common forms:
  - **Strophic (AAA):** the same multi-phrase unit repeated, as in much early rock and roll.
  - **AABA, or 32-bar song form:** an eight-bar strophe twice, a contrasting eight-bar bridge, then the strophe again. Common before the 1970s, and the basis of many jazz standards.
  - **Verse–chorus:** the main lyric and the most memorable music are split between verse and chorus. Optional sections are prechorus, bridge and postchorus. It has dominated rock since the 1960s.
  - **Rondo (ABACA):** a returning main section, as in traditional Brazilian choro.
  - **Binary (AB) and ternary (ABA):** two parts, or a return to the first part after a contrast. Common in dances and classical movements.
  - **12-bar blues:** a harmonic form, repeated as a chorus. See **The blues**.

Example: "Twinkle, Twinkle, Little Star" opens with a four-bar phrase that ends on the tonic. The first eight bars are made of two-bar ideas.

Example: the opening of "Ode to Joy" is a parallel period. Phrase one ends E – D – D (a half cadence on V), phrase two starts the same and ends D – C – C (an authentic cadence on I).

Exercise: write an eight-bar period in D major: an antecedent that ends on V, then a consequent that ends on I.

Exercise: write an eight-bar sentence: a two-bar idea, the same idea a step higher, then four bars that break it into one-bar pieces and end with a cadence.

Sources: Open Music Theory v2, "Foundational Concepts for Phrase-Level Forms", "The Phrase, Archetypes, and Unique Forms", "AABA Form and Strophic Form" and "Verse-Chorus Form"; Farinha, choro dissertation (York University).

## Rhythm and meter
@group Form, rhythm and genre

- **Simple meter** (2/4, 3/4, 4/4) divides each beat into two. **Compound meter** (6/8, 9/8) divides each beat into three.
- Count the subdivision out loud: "1 e & a 2 e & a".
- **Syncopation** stresses weak beats or off-beats.
- **Hemiola** groups two bars of 3/4 as three bars of 2/4.
- **Swing eighths** are written as straight eighths but played unevenly, roughly 2:1, like the first and third notes of a triplet.
- **Backbeat** is the accent on beats 2 and 4 of a 4/4 bar. It is central to jazz, rock, soul and pop.

Exercise: clap one bar of 4/4 with eighth notes, then with triplets. Count each one out loud.

Exercise: play a scale in straight eighths, then swung. Then clap on 2 and 4 while you play.

Sources: Open Music Theory v2, "Swing Rhythms".

## Notation and lead sheets
@group Form, rhythm and genre

- A lead sheet shows the melody and chord symbols above the staff. Chord symbols name chords directly, without reference to a key.
- **Default qualities.** Unless the symbol says otherwise:
  - A triad is major (C is C E G).
  - An added seventh is minor (C7 is C E G B♭).
  - Every other extension is major or perfect (C9 has D, not D♭).
- **The five parts of a chord symbol**, in order:
  1. The triad: C, C– or Cm (minor), C° or Cdim, C+ or Caug, Csus.
  2. A sixth or seventh: 6, 7, maj7 (or Δ7).
  3. Natural extensions: 9, 11, 13.
  4. Altered notes: ♭9, ♯9, ♯11, ♭5, ♯5, ♭13.
  5. A bass note after a slash.
  - Example with all five: CΔ9♯11/D is C E G B D F♯ with D in the bass.
- **Quirks to memorise:**
  - An extension implies the seventh and the extensions below it. C9 includes B♭; C13 implies B♭, D and F.
  - In practice a C13 with a major third leaves out the eleventh (F clashes with E).
  - C°7 is fully diminished (C E♭ G♭ B♭♭). The half-diminished chord is written Cø7 or Cm7♭5.
  - Do not write CΔ for a plain triad: Δ means a major seventh.
  - C6 is a triad with a major sixth. C6/9 adds the ninth. A 6 chord can usually be treated like a maj7 chord when improvising.
  - Cadd9 is a triad with a ninth and no seventh. C5 is a power chord (no third).
- **Slash chords** are either inversions (C/E) or a non-chord bass for colour (CΔ7/D♭). A polychord, written like a fraction with one chord over another, is different: it stacks two complete chords.
- Read repeats, endings and D.C./D.S. instructions in full before playing.
- To transpose a sheet, move every root by the same interval. Keep the Roman numerals, then rebuild the chords.

{{chords: C Cm7 C7 Cmaj7 Cadd9 Csus4 C/G | guitar piano | One root, seven chord symbols: hear what each suffix adds or changes.}}

Exercise: write the chord symbols for a twelve-bar blues in F with dominant sevenths. Then transpose them up a major third.

Exercise: spell every note of C9, Cm11, C13 (as played, without the eleventh), Cø7 and C6/9.

Sources: Open Music Theory v2, "Chord Symbols"; Jazz Theory (MTC130), "Understanding Chord Symbols".

## Reharmonisation
@group Harmonic movement

- Reharmonising replaces the chords under a melody. Keep the melody notes as chord tones or extensions.
- Method: pick a melody note, find the chords that contain it, then choose the one with the function you want.
- Tools: secondary dominants, tritone substitutions, borrowed chords, passing diminished chords.

Example: "Twinkle, Twinkle" as C – F – C – G – C can become C – A7 – Dm – G7 – C, with the same melody.

Exercise: reharmonise a four-bar melody of your choice in two different ways.

## Counterpoint basics
@group Form, rhythm and genre

- Counterpoint combines independent melodic lines.
- Teaching usually starts from a **cantus firmus**: a given, slow line in whole notes. A second line is written against it.
- Consonances:
  - Perfect: unison, fifth, octave.
  - Imperfect: third, sixth.
  - The fourth counts as a dissonance against the bass.
- Types of motion between two lines: contrary (opposite directions, the best for independence), oblique (one line holds), similar, and parallel.
- Avoid parallel fifths and octaves, and avoid reaching a fifth or octave by similar motion with a leap in the top voice ("hidden" or "direct" fifths and octaves).

### The five species

Each species adds one new rhythmic possibility:
1. **First species:** note against note. Only consonances. Start and end on a perfect consonance; prefer imperfect consonances in between.
2. **Second species:** two notes against one. The downbeat is consonant; the second note may be a dissonance if it is a **passing tone** (filling a third by step).
3. **Third species:** four notes against one. Adds the **neighbour tone** (step away and back) and the **cambiata**, a set figure that leaves a dissonance by leap.
4. **Fourth species:** the line is syncopated, tied over each barline. This creates **suspensions**: a note held over the change, made dissonant, then resolved down by step (7–6, 4–3, and 9–8 or 2–3 against the bass).
5. **Fifth species (florid):** a free mix of all the above, closest to real music.

Example: against the cantus firmus C D F E D C, the line C B A C B C works in first species. The intervals are octave, sixth, third, sixth, sixth, octave. Most moves are contrary, the two sixths in a row are allowed (imperfect consonances), and B rises to C at the end as a leading tone. A line like G A … would fail at once: C–G then D–A are parallel fifths.

Exercise: write a first-species line above the cantus firmus C D F E D C. Label every interval and check for parallel fifths and octaves.

Exercise: rewrite your line in fourth species, tying each note over the barline, and find where a 7–6 suspension appears.

Sources: Open Music Theory v2 (counterpoint unit); Prout, Counterpoint: Strict and Free (public domain).

## Ear training: chord types and inversions
@group Ear and practice

- Chord quality is heard in the third:
  - Major is bright.
  - Minor is dark.
  - Diminished is tense.
  - Augmented is floating.
- A dominant seventh is recognised by its tritone and its pull to resolve.
- Inversions are heard in the bass: the lowest note is the one that sounds like the chord's base.
- Method: play a chord, sing the bass, sing the top note, then name the quality.

{{chords: C Cm Caug Cdim | guitar piano | The four qualities on C for ear practice: play each one, sing its bass and top note, then name it.}}

Exercise: play random triads and identify quality and inversion without looking. Repeat with twenty chords.

## Practice principles
@group Ear and practice

- Play every concept on your instrument. Reading alone is not enough.
- Start slowly with a metronome. Speed comes after accuracy.
- Keep a notebook of progressions you like, and analyse each one with Roman numerals.
- Transpose everything. A concept learned in one key is only half learned.

## Creative chord choices: the seven strands
@group Harmonic movement

Adapted from *Creative Chord Choices* by Michael K. A key centre has more chords available than its seven diatonic ones. Seven families of chords can attach to a key, and each one is a route back home. The strands are equal. Examples are in C major.

The seven strands:
1. Diatonic chords.
2. Secondary dominants.
3. Modal interchange (borrowed chords).
4. ii–V progressions.
5. Tritone substitutions.
6. Diminished chords.
7. V alternatives.

### Strand 1: diatonic chords

- These exist natively in the key. They are the home base.
- Every other strand returns to them.

Exercise: write a four-chord progression in C that ends on C. Play it in G, D and F.

### Strand 2: secondary dominants

- A secondary dominant is the dominant of a diatonic chord, written V/x.
- Each one sits a fifth above its target, so it pulls to it.
- The tonic is the exception: its dominant is already diatonic.

{{chords: C E7 Am7 A7 Dm7 D7 G7 C | guitar piano | The chain C – E7 – Am7 – A7 – Dm7 – D7 – G7 – C: each dominant falls a fifth to its target.}}

Exercise: replace each secondary dominant in the example with its target chord. Listen to what is lost.

### Strand 3: modal interchange

- Modal interchange borrows chords from another mode with the same tonic, then returns home.
- The author mostly uses three minor modes: Dorian, Phrygian and Aeolian.
- Think in scale degrees. The same numbers work in every key.

The most used options, and the mode each one comes from:
- bII maj7 (Phrygian).
- II ø (Aeolian).
- bIII maj7 (Dorian or Aeolian).
- IV m7 (Aeolian or Phrygian).
- V m7 (Aeolian or Dorian).
- V ø (Phrygian; used rarely).
- bVI maj7 (Aeolian or Phrygian).
- bVII 7 (Aeolian).

In C major these are D♭maj7, Dø, E♭maj7, Fm7, Gm7, Gø, A♭maj7 and B♭7.

{{chords: Dbmaj7 Dø Ebmaj7 Fm7 Gm7 Gø Abmaj7 Bb7 | guitar piano | The borrowed chords available in C major, from C minor and the other modes on C.}}

Some of these overlap with diatonic chords, so the list is a set of colours rather than new chords.

Exercise: write a four-bar progression in C with one chord from this list per bar. Name each one's mode.

### Strand 4: ii–V progressions

- Any secondary dominant can be preceded by the ii chord of its target. That pair is a ii–V.
- Major ii–V: in C, heading to F, use Gm7 (the ii of F), then C7 (the V of F).

{{chords: Gm7 C7 F | guitar piano | A ii–V aimed at F (IV) instead of the tonic.}}

- Minor ii–V: when the target is minor, the ii is half-diminished and the V is altered. In C heading to Am: Bø, then E7alt.

{{chords: Bø E7alt Am | guitar piano | A minor ii–V aimed at Am (vi).}}

The author also uses these ii–Vs, named by their relation to each other:
- Backdoor: Fm7 – B♭7 – C. Borrowed from E♭ major.
- Tritone: A♭m7 – D♭7 – C.
- Am7 – D7 – F.
- Bm7 – E7 – F.

{{chords: Fm7 Bb7 C | guitar piano | The backdoor ii–V: Fm7 – B♭7 resolving to C.}}

Exercise: for each non-standard ii–V, find the diatonic ii and V it borrows. Then write one of your own that resolves to F.

### Strand 5: tritone substitutions

- Any dominant seventh can be replaced by the one a tritone away. The two share the same tritone, with roles swapped.
- The tritone is the only interval that is the same whether you go up or down.
- A tritone substitute sits a half step above its target. Habit: play a dominant seventh a half step above the chord you are heading to.

The secondary dominants above, with tritone substitutions: C – B♭7 – Am – G♭7 – F – A♭7 – G. Each substitute leads by a half step.

{{chords: C Bb7 Am Gb7 F Ab7 G | guitar piano | Each secondary dominant replaced by its tritone substitute: every substitute slides down a half step into its target.}}

Exercise: play both versions. Name the half step in each substitution.

### Strand 6: diminished chords

- A diminished seventh is built from stacked minor thirds. It is not diatonic to any major key, so it works like a secondary dominant.
- It is closely related to a dominant seventh: lower one of its notes by a half step and you get a dominant chord.
- Rule: for any chord you are heading to, play a diminished seventh a semitone below it. Its note a semitone below the target resolves up.

Example: C♯°7 leads to Dm, because C♯ resolves up to D.

{{chords: C#o7 Dm | guitar piano | C♯°7 to Dm: the diminished chord acting as a leading-tone chord.}}

Exercise: for each diatonic chord of C, play the diminished seventh a semitone below it, then the chord. Note which bass sounds best.

### Strand 7: V alternatives

- These non-diatonic chords can replace the V (G7 in C) and still lead home.
- Raise the root of G7 by a half step: G♯°7. All four of its spellings lead to C.
- Lower one note of G♯°7 by a half step to get dominant chords:
  - A♭ to G gives G7.
  - B to B♭ gives B♭7.
  - D to D♭ gives D♭7.
  - F to E gives E7, which the author does not use.
- Raising one note of the diminished chord by a half step gives four chords, each with two names: Bø (= Dm6), Dø (= Fm6), Fø (= A♭m6) and G♯ø (= Bm6).

{{chords: Abo7 Bb7 Db7 E7 | guitar piano | G♯°7 (spelled A♭°7) and the dominants you get by lowering one of its notes a half step: B♭7, D♭7 and E7 (the fourth is G7 itself).}}

{{chords: Bø Dø Fø G#ø | guitar piano | The four chords you get by raising one note of G♯°7: each is a half-diminished chord that is also a minor sixth (Bø = Dm6, Dø = Fm6, Fø = A♭m6, G♯ø = Bm6).}}

Exercise: play G7 – C, then each V alternative – C. Rate how strongly each one pulls home.

### Using the strands together

- Keep returning to the key centre. Each strand adds or replaces one chord, which can change a progression a lot.
- Learn the sound of each movement, such as bVI – bVII – I or ii–V/IV. You will then hear them in other music.
- Simple progressions are valid. Different musicians aim for different results.

Practice routine:
- Pick one key and play its seven diatonic chords.
- Add one strand at a time, always returning to the tonic.
- Improvise a four-bar loop with each strand before moving on.

Exercise: spend a week on each strand. At the end of each week, write a progression that uses it.

Sources: [Modal interchange overview, FaChords](https://www.fachords.com/modal-interchanges/), [Figured bass, Wikipedia](https://en.wikipedia.org/wiki/Inversion_(music)), [Figured bass tips, Jade Bultitude](https://jadebultitude.com/figured-bass/).

## Pop and rock harmonic schemas
@group Genres and styles

A **schema** is a chord pattern that stays recognisable even when a chord is swapped or the pattern starts at a different point. Pop harmony is largely built from a few families of schemas.

### Blues-based schemas

All of these use plagal motion (IV to I) rather than V to I.

- **I – IV vamp:** two chords, very common in R&B and soul.
- **Plagal sigh:** IV – iv – I. The top voice falls 6 – ♭6 – 5 (A – A♭ – G in C), often at the end of a phrase.
- **Double plagal:** ♭VII – IV – I. ♭VII is the "IV of IV". The coda of the Beatles' "Hey Jude" is the best-known example.
- **Extended plagal:** ♭VI – ♭III – ♭VII – IV – I, a chain of plagal moves.

{{chords: F Fm C | guitar piano | The plagal sigh IV – iv – I: the top voice falls A – A♭ – G.}}

### Four-chord schemas

All use I, IV, V and vi, so they sound related. The order is what tells them apart.

- **Doo-wop:** I – vi – IV – V, common in 1950s and 1960s pop. Variation: I – vi – ii – V.
- **Singer/songwriter:** I – V – vi – IV or vi – IV – I – V, common in 1990s songwriting. Heard in the relative minor, it is i – VI – III – VII.
- **Hopscotch:** IV – V – vi – I, common since about 2010.

{{chords: C Am F G | guitar piano | Doo-wop, I – vi – IV – V: the four chords every four-chord schema is built from.}}

### Classical, puff and modal schemas

- **Classical schemas in pop:** the lament (a descending bass line) and the circle-of-fifths sequence.
- **Puff schemas:** I – III♯ – IV, where III is major (E major in C), heading for IV like a deceptive move.
- **Modal schemas:**
  - Mixolydian: ♭VII acts like a dominant. The "subtonic shuttle" rocks ♭VII – I (B♭ – C).
  - Aeolian: ♭VI – ♭VII – i, the Aeolian cadence.
  - Dorian: a major IV with a minor tonic (Am – D).
  - Lydian: a major II with a major tonic (C – D).

{{chords: Bb F C | guitar piano | The double plagal ♭VII – IV – I: two falling fourths into C.}}

Exercise: take one song you know and decide which schema its chorus uses. Then rotate the schema (start it on a different chord) and hear whether it still sounds like the same family.

Sources: Open Music Theory v2, "Blues-Based Schemas", "Four-Chord Schemas", "Puff Schemas" and "Modal Schemas".

## The blues
@group Genres and styles

The blues grew up in the United States in the late 1800s. Together with ragtime, it fed directly into jazz, and it still shapes popular music.

### Harmony and form

- In a standard 12-bar blues, **every chord is a dominant seventh**, including the tonic. That is the main difference from classical harmony, where only V is a dominant seventh.
- Blues harmony leans on plagal motion (IV to I) as much as on V to I.
- **Basic 12-bar blues in F:**
  - Bars 1–4: F7 F7 F7 F7.
  - Bars 5–8: B♭7 B♭7 F7 F7.
  - Bars 9–12: C7 B♭7 F7 C7.
- The lyrics often follow **AAB form**: a line, the same line again (bars 5–8), then an answering line (bars 9–12).
- The blues is a schema, so it survives many changes and still sounds like the blues.

{{chords: F7 Bb7 C7 | guitar piano | The three chords of a blues in F, all dominant sevenths: I7, IV7 and V7.}}

### Variations

- **8-bar and 16-bar blues:** many versions exist. Most 16-bar forms extend part of the 12-bar form.
- **24-bar blues:** usually the 12-bar form with every chord held twice as long.
- **Minor blues:** the tonic and subdominant are minor.
- **Jazz blues (in F):** F7 | B♭7 | F7 | F7 | B♭7 | B♭7 | F7 | F7 | Gm7 | C7 | F7 D7 | Gm7 C7. Bar 2 goes to IV early (a "quick change"), bars 9–10 become ii–V, and the last two bars turn around. Some players use Am7 (iii) instead of F7 in bar 11.
- **Bird blues:** Charlie Parker's "Blues for Alice" (1951) fills the form with ii–V chains. It still reaches IV in bar 5 and keeps the jazz-blues ending.

{{chords: Gm7 C7 F7 D7 | guitar piano | The jazz-blues additions in F: the ii–V of bars 9–10 and the D7 turnaround of bar 11.}}

### Improvising on the blues

A practice order that builds from simple to detailed:
1. Play the minor pentatonic of the key over the whole form (in F: F A♭ B♭ C E♭).
2. Play each chord's triad, in different inversions, and improvise only with triad notes.
3. Play the four-note arpeggios (1 3 5 7) up, down and mixed.
4. Find the **guide tones**, the third and seventh of each chord, and connect them from chord to chord.
5. Learn the chord scales: Mixolydian on the dominant chords, Dorian on the minor chords.
6. Connect the guide tones with scale notes in between, by half step where you can.

{{scalemap: F blues 7 | The F blues scale against an F7 chord: R, 5 and ♭7 are chord tones; the grey ♭3 and ♭5 are the blue notes that rub against the chord.}}

Exercise: compose a 12-bar riff blues in F on the F minor pentatonic. Write a three- or four-bar melody, repeat it in bars 5–8, and write new material for bars 9–12 that returns to the opening idea.

Sources: Open Music Theory v2, "Blues Harmony" and "Blues-Based Schemas"; Jazz Theory (MTC130), "The Blues", "Blues Improv Strategies" and "F Blues Composition Assignment"; BYU-Idaho, blues chapter (8-, 16- and 24-bar forms).

## Jazz harmony and improvisation
@group Genres and styles

Jazz harmony is tonal harmony with every chord expanded: sevenths are the default, extensions are common, and substitutions are part of the language. The details of chord symbols, voicings, substitutions and chord scales each have their own topic; this one connects them.

### The core progressions

- **ii – V – I:** ii7 – V7 – Imaj7, the basic cadence. In C: Dm7 – G7 – Cmaj7.
- **Minor ii – V – i:** iiø7 – V7♭9 – i. In C minor: Dø7 – G7♭9 – Cm.
- **Turnaround:** I – vi – ii – V, which loops back to the top of a form. Each chord can be made a dominant (I – VI7 – II7 – V7).

{{chords: Dm7 G7 Cmaj7 | guitar piano | The major ii–V–I in C.}}

{{chords: Dø G7b9 Cm | guitar piano | The minor ii–V–i in C minor: a half-diminished ii and a V7♭9.}}

### Making it sound like jazz

- Substitute: applied dominants, mixture (iiø7 and V7♭9 in major), tritone substitutions. See **Chord substitution**.
- Voice it: shell voicings (third and seventh), rootless voicings, guide tones moving third to seventh. See **Voicings**.
- Think in chord scales: see **Chord-scale relationships**.

### Bebop scales and the Barry Harris approach

- A **bebop scale** adds one chromatic note to a seven-note scale, so that the chord tones fall on the strong beats of a line of eighth notes.
- Pianist and teacher Barry Harris treats that added note as a full member of the scale, not just a passing note. His **major sixth diminished scale** on C is C D E F G A♭ A B: it alternates the notes of C6 (C E G A) with the notes of a diminished seventh chord (D F A♭ B).
- Harris does not think in modes. To play the notes of E Phrygian, he would think of the C major scale started from its third note.

{{notes: C D E F G Ab A B | piano | The C major sixth diminished scale: the notes of C6 alternating with a diminished seventh chord.}}

### Playing outside

- **Playing outside** means leaving the key on purpose, then returning. One well-documented technique is the **side-slip**: moving a phrase a half step away from the key and back. Miles Davis's playing is a classic source of examples.
- **Superimposition** lays a different chord or scale over the written harmony.

Exercise: over a ii – V – I in C, play only the guide tones, as two lines: F – F – E (third of Dm7, seventh of G7, third of Cmaj7) and C – B – B (seventh of Dm7, third of G7, seventh of Cmaj7). Then add one bebop line per chord with chord tones on beats 1 and 3.

Sources: Open Music Theory v2 (jazz unit: "Chord Symbols", "Jazz Voicings", "Substitutions", "Chord-Scale Theory"); Jazz Theory (MTC130) handouts; Kelly, Rasmussen and Roberts, A Guide to Exploring Jazz Improvisation, Book 1; Caldeira, bebop and Barry Harris thesis (Évora, Portuguese); Dean-Lewis, Playing Outside thesis (City, University of London).

## Rhythm changes and the 32-bar song form
@group Genres and styles

After the blues, the most important jazz form is the 32-bar AABA song form, and its most famous progression is **rhythm changes**.

- **AABA:** an eight-bar A section, repeated, then an eight-bar bridge (B), then A again. Thirty-two bars in all.
- **Rhythm changes** are the chords of George and Ira Gershwin's "I Got Rhythm" (1930). Jazz musicians usually play them in B♭.
- **A section:** a chain of I – vi – ii – V turnarounds. In B♭: B♭ – G7 – Cm7 – F7, repeated with small variations.
- **Bridge:** a chain of dominants moving round the circle of fifths, two bars each: III7 – VI7 – II7 – V7. In B♭: D7 – G7 – C7 – F7.
- Players embellish both sections freely. Famous bridge variations include Sonny Stitt's "The Eternal Triangle".
- Tunes on rhythm changes include "Anthropology", "Oleo", "Moose the Mooche", "Cotton Tail", "Lester Leaps In" and "Rhythm-a-Ning".

{{chords: Bb G7 Cm7 F7 | guitar piano | The A-section turnaround of rhythm changes in B♭.}}

{{chords: D7 G7 C7 F7 | guitar piano | The bridge: four dominants moving round the circle of fifths.}}

Exercise: write a Roman numeral analysis of rhythm changes in B♭, then transpose it to F. Compose an eight-bar A-section melody over it.

Sources: Jazz Theory (MTC130), "Rhythm Changes and the 32-bar Song Form"; Open Music Theory v2, "AABA Form and Strophic Form".

## Choro and samba
@group Genres and styles

Choro and samba are two of the main traditions of Brazilian popular music, both from Rio de Janeiro. They share instruments (guitar, seven-string guitar, cavaquinho, pandeiro) and much of their harmony.

### Choro

- Traditional choro is in **rondo form with three sections**. The choro-samba often has only two: Pixinguinha's "Lamentos" (1928) surprised listeners for exactly that reason.
- The harmony is tonal and busy:
  - Harmonic sequences.
  - Chromatic and stepwise lines in the bass and melody.
  - **Diminished passing chords** between chords a step apart (C – C♯°7 – Dm7), or as neighbours (G – G° – G).
  - Secondary dominants.
- **Baixaria** is the countermelody played in the low register of the guitar, a speciality of the seven-string guitar. It answers and decorates the melody between phrases.

{{chords: C C#o7 Dm7 G7 | guitar piano | A diminished passing chord between I and ii, the choro trademark.}}

### Samba rhythm

- Musicologist Carlos Sandroni describes two rhythmic archetypes in samba:
  - The **tresillo paradigm:** 3 + 3 + 2 pulses, shared with many Afro-Atlantic musics.
  - The **Estácio paradigm:** a 16-pulse pattern grouped 7 + 9 (or 9 + 7). It came with the surdo-and-tamborim batucada of Rio's Estácio generation and became established as the samba rhythm from then on.
- On piano and guitar, samba accompaniment imitates the pandeiro and the cavaquinho: short syncopated figures with many **anticipations** (chords that arrive just before the beat).
- **Partido alto** is a samba style built around improvised verses in a group setting, with its own characteristic accompaniment pattern.

Exercise: play C – C♯°7 – Dm7 – G7 – C with a steady syncopated pattern. Make the diminished chord land just before the beat.

Sources: Farinha, choro piano dissertation (York University); Simas, harmony in waltz, choro and samba (UFPE, Portuguese); Borges, seven-string guitar in choro (UnB, Portuguese); Livramento, the guitar in samba (UDESC, Portuguese), citing Sandroni (2001).

## Bossa nova harmony
@group Genres and styles

Bossa nova peaked between about 1958 and 1962, shaped above all by João Gilberto's guitar and singing. Its harmony sounds new, but a detailed study of its songs shows that it stays tonal.

- **Tonal underneath.** The study compares bossa nova harmonisations of songs with older versions. Where the two versions keep the same root (about three-quarters of the chord pairs), about 82% of the bossa nova sound comes simply from adding notes to the same chord and function. The traditional functions (tonic, subdominant, dominant) are all still there.
- **Recurring devices:**
  - A descending chromatic bass.
  - Chromatic motion inside chords of the same root and function.
  - High pedal notes.
  - Substitute dominants.
  - Descending chromatic lines in the top voice, and parallel chromatic motion.
  - Major seventh chords everywhere.
  - Small chromatic "clichés" on added notes: the ninth falling to the flat ninth, and the thirteenth falling to the flat thirteenth.
- **Voice leading on the guitar.** The guitar part moves in four careful voices, and many chord choices follow from that voice leading rather than from the melody. When the guitar leaves out the third, the chord can sound ambiguous.
- **Performance.** The singer and guitarist share the work equally, with a cool, unforced voice instead of virtuoso display.

{{chords: G9 G7b9 Cmaj7 | guitar piano | The 9 → ♭9 cliché on a dominant, then the resolution.}}

Example: Cmaj7 – A7♭9 – Dm9 – G13 – Cmaj7. Each chord keeps its classical function; the extensions give the colour.

Exercise: take a plain progression (C – Am – Dm – G7) and turn it into bossa nova by adding a seventh or ninth to every chord, then add one 9 → ♭9 cliché on a dominant.

Sources: Gava, The Harmonic Language of Bossa Nova (UNESP, 1994, Portuguese).

## Afro-Cuban clave and salsa
@group Genres and styles

In Afro-Cuban music and salsa, the **clave** is the rhythmic skeleton. Every part has to fit with it, even when nobody plays it.

- The clave is a five-note rhythm over two halves, called **sides**:
  - The **3-side** has three onsets.
  - The **2-side** has two onsets.
  - A tune is in **3-2** or **2-3** clave depending on which side comes first. The opposition of the two sides is the core idea.
- **Son clave** is the default in salsa. Rumba clave and Brazilian clave also exist. In 4/4, 3-2 son clave falls on beat 1, the "and" of 2 and beat 4, then on beats 2 and 3 of the next bar. Rumba clave moves the third note of the 3-side half a beat later.
- Other parts are heard as **with-clave** (onsets on the clave's) or **counter-clave** (against it). That push and pull creates tension and release.
- **Piano montuno** (also called guajeo): a repeating, syncopated piano figure that outlines the harmony and lines up with the clave.
- **Tumbao:** the bass ostinato. It repeats the same 3-side-like rhythm in every bar, with its first note tied over from the previous bar, so on its own it doesn't show which side is which.
- **Cascara:** the pattern played on the side of the timbales.
- In some genres, such as mambo, nobody plays the clave. It is carried by the melody and the accompaniment instead.

Exercise: count 1 & 2 & 3 & 4 & over two bars and clap 3-2 son clave. Then switch to 2-3 by starting on the second bar. Then tap a tumbao rhythm (anticipating each downbeat) against it.

Sources: Bin Md Tarip, Theoretical Perspectives on Clave in Salsa Music (University of British Columbia, 2016).

## R&B and soul harmony
@group Genres and styles

- R&B and soul often sit on a **two-chord vamp**, usually I – IV.
- Chords are richer than in rock: major sevenths, minor sevenths and ninths are normal.
- **Borrowed chords** add colour. A common example is I – ♭VIImaj7 – IVmaj7, three major chords that sound bright and wistful at once.
- **Secondary dominants** such as III7 and VI7 appear briefly, for a beat or two, to colour a transition.
- **Passing diminished sevenths**, taken from jazz, fill the gap between two chords a step apart.

{{chords: Cmaj7 Bbmaj7 Fmaj7 | guitar piano | I – ♭VIImaj7 – IVmaj7: three major seventh chords, bright and wistful.}}

Exercise: build an eight-bar vamp on Cmaj7 – Fmaj7, then add a passing diminished seventh and one borrowed ♭VIImaj7.

Sources: Open Music Theory v2, "Blues-Based Schemas"; Jiang, R&B harmony and chord structures (Atlantis Press). Only one R&B-specific source is in the library so far, so this topic is shorter than the others.

## Flamenco harmony
@group Genres and styles

Flamenco is the music of Andalusia in southern Spain. Its harmony mixes a modal system (often traced to Arab and Andalusian practice) with European chords.

### The flamenco mode

- Most flamenco sits in a **Phrygian** mode, but the tonic chord is **major**. On E: the scale is E F G A B C D, and the home chord is E major (E G♯ B).
- So G and G♯ both appear: G in the melody and the chords that lead home, G♯ in the tonic chord itself. One writer describes the music as moving constantly between E Phrygian and E Phrygian dominant.
- Guitarists often add the ♭2 (F) to the tonic chord, which keeps the Phrygian colour even on the major chord.

{{scale: E phrygian dominant | guitar piano | The flamenco mode on E: Phrygian, with the major third G♯ in the home chord.}}

### The Andalusian cadence

- Four chords falling by step: **Am – G – F – E**.
- **Disputed labelling.** Two readings exist:
  - Tonal: i – ♭VII – ♭VI – V in A minor. E is a dominant that wants to go back to Am.
  - Modal: iv – ♭III – ♭II – I in E Phrygian. E is the tonic, and the cadence ends at home.
  - Flamenco musicians hear E as home, so flamenco studies usually use the modal reading. In pop and classical contexts (the lament bass) the tonal reading is normal.

{{chords: Am G F E | guitar piano | The Andalusian cadence por arriba, landing on E.}}

### Positions (keys)

Guitarists name keys by position, not by note name, and change actual pitch with a capo.
- **Por arriba:** the E position. Cadence Am – G – F – E. Used for soleá.
- **Por medio:** the A position. Cadence Dm – C – B♭ – A. Used for bulerías and many other palos.
- Other positions exist (for example on F♯ and on B), each with its own open-string colour.

{{chords: Dm C Bb A | guitar piano | The same cadence por medio, landing on A.}}

### Compás and cambio

- A **palo** is a flamenco form or style; each has its own rhythm (**compás**), mood and usual position.
- Soleá, bulerías and soleá por bulerías use a **12-beat compás**. A common way to count it puts accents on 3, 6, 8, 10 and 12. Chord changes tend to land on those accents.
- A **cambio** is a move to another tonal area, typically to the relative major (C major in por arriba), with its own V – I, before falling back to the Phrygian home through the Andalusian cadence.
- Some palos, such as many fandangos, put the sung verse in a major key and the guitar interludes in the Phrygian mode.

Example: one simple way to fill a 12-beat cycle por arriba, rocking between the tonic and ♭II so that changes fall near the accents: E (beats 1–2), F (3), E (4–5), F (6), G (7), F (8), E (9–12). A cambio could then go G7 – C before returning F – E. (An illustration, not a transcription of a specific palo.)

Exercise: play the Andalusian cadence por arriba and por medio, landing each chord on the accented beats of the 12-beat count. Then add the ♭2 to each final chord.

Sources: Moore, [The Flamenco Key: Phrygian Mode, Andalucian Cadence, and Cambios](https://pages.ucsd.edu/~moore/solbul.pdf) (UCSD); Manuel, [Evolution and Structure in Flamenco Harmony](https://academiccommons.columbia.edu/doi/10.7916/D8902FFS/download) (Columbia Academic Commons); Wikipedia, [Andalusian cadence](https://en.wikipedia.org/wiki/Andalusian_cadence), [Flamenco mode](https://en.wikipedia.org/wiki/Flamenco_mode) and [Palo (flamenco)](https://en.wikipedia.org/wiki/Palo_(flamenco)); Briscoe, [Un Sabor de Flamenco](https://nicbriscoe.substack.com/p/un-sabor-de-flamenco-part-1-of-2); [Berklee](https://www.berklee.edu/node/2352286). The accent pattern and the positions follow Moore; flamenco teachers differ on details.

## Classical and galant schemas
@group Progression standards

Eighteenth-century musicians learned stock patterns by heart and combined them, much as jazz players learn licks. Modern theorists call them **galant schemas**. Each one is a bass line, a melody line and typical chords, laid out in **stages**. Several names come from the theorist Joseph Riepel (Monte, Fonte, Ponte); others are named after modern theorists (the Meyer). Scale degrees are given as numbers (1 = tonic).

### Opening schemas

- **Romanesca:** bass falls 1 – 7 – 6 – 3 (a leaping version uses 1 – 5 – 6 – 3).
  - Chords: I – V6 – vi – I6. In C: C – G/B – Am – C/E.
  - Pachelbel's Canon is built on a closely related falling pattern: I – V – vi – iii – IV – I – IV – V (in D: D A Bm F♯m G D G A).
- **Do–Re–Mi:** melody 1 – 2 – 3 over bass 1 – 7 – 1. Chords I – V6 – I (C – G/B – C).
- **Meyer:** melody 1 – 7 … 4 – 3, bass 1 – 2 … 7 – 1. Chords I – V4/3 – V6/5 – I (C – G7/D – G7/B – C). A question-and-answer pair in four stages.

{{chords: C G/B Am C/E | guitar piano | The Romanesca: the bass falls C – B – A – E under I – V6 – vi – I6.}}

{{chords: C G7/D G7/B C | guitar piano | The Meyer: I – V4/3 – V6/5 – I, a four-stage question and answer.}}

### Answering and sequential schemas

- **Prinner:** the typical answer to an opening.
  - Bass falls 4 – 3 – 2 – 1. Melody falls 6 – 5 – 4 – 3, a tenth above.
  - Chords IV – I6 – vii°6 – I (F – C/E – Bdim/D – C), often with a 7–6 suspension on the third stage.
  - A common variant inserts V before the last stage: F – C/E – Bdim/D – G7 – C.
  - The **modulating Prinner** moves the same shape up a fifth to reach the dominant key: C – G/B – F♯dim/A – G.
- **Monte:** a rising sequence, "climbing the mountain". V7/IV – IV – V7/V – V (C7/E – F – D7/F♯ – G).
- **Fonte:** a falling sequence, "the fountain". First a minor step, then the same a tone lower in major: V7/ii – ii – V7 – I (A7/C♯ – Dm – G7/B – C).
- **Ponte:** "the bridge". A dominant held over a pedal before the return of the opening: G – G7 over a held G.

{{chords: F C/E Bdim/D G7 C | guitar piano | The Prinner with the extra dominant: bass F – E – D – G – C.}}

{{chords: C7/E F D7/F# G | guitar piano | The Monte: climbing by step, each chord preceded by its own dominant.}}

{{chords: A7/C# Dm G7/B C | guitar piano | The Fonte: falling by step, first to Dm, then a tone lower to C.}}

### Closing schemas

- **Quiescenza:** after a cadence, over a held tonic in the bass. The melody turns ♭7 – 6 – 7 – 1. Chords I7 – IV/I – V7/I – I (C7 – F/C – G7/C – C). It says "this is the end" in many classical and baroque pieces.

{{chords: C7 F/C G7/C C | guitar piano | The Quiescenza: closing chords over a held C in the bass.}}

### Basses and sequences used in every style

- **Lament bass:** a bass falling by step from 1 to 5 in minor.
  - Diatonic: A – G – F – E, harmonised i – v6 – iv6 – V (Am – Em/G – Dm/F – E).
  - Chromatic: A – G♯ – G – F♯ – F – E, the "chromatic fourth" of many baroque laments.
  - Replacing iv6 with an augmented sixth chord on F gives a classic chromatic version.
  - In pop the same bass appears as i – ♭VII – ♭VI – V (Am – G – F – E), which flamenco calls the Andalusian cadence.
- **Circle-of-fifths sequence:** every root falls a fifth.
  - Major: I – IV – vii° – iii – vi – ii – V – I (C F Bdim Em Am Dm G C).
  - Minor: i – iv – VII – III – VI – ii° – V – i (Am Dm G C F Bdim E Am).
  - Its jazz form adds sevenths: see **Jazz standard progressions** ("Autumn Leaves").
- **Rule of the octave:** a standard eighteenth-century way to harmonise a scale in the bass. Root-position chords on 1 and 5; first-inversion and 6/5 chords on most other degrees, so the bass can move by step.

{{chords: Am Em/G Dm/F E | guitar piano | The lament bass A – G – F – E, harmonised.}}

{{chords: C F Bdim Em Am Dm G C | guitar piano | The circle-of-fifths sequence in C: every root falls a fifth.}}

Example: an eight-bar phrase built from schemas in C: Romanesca (C – G/B – Am – C/E), then Prinner (F – C/E – Bdim/D – C), then a cadence (F – G7 – C).

Exercise: write a four-bar melody over a Prinner in G major. Keep the melody a tenth above the bass (E – D – C – B over C – B – A – G).

Exercise: harmonise a falling A minor bass A – G – F – E twice: once with the lament chords, once as the Andalusian cadence. Describe the difference.

Sources: Open Music Theory v2, "Galant Schemas", "Galant Schemas – Summary", "The Rule of the Octave", "Augmented Sixth Chords" and "Classical Schemas (in a Pop Context)". The schema names come from Robert Gjerdingen's *Music in the Galant Style* (2007, not freely available); here they are summarised through Open Music Theory.

## Jazz standard progressions
@group Progression standards

The progressions jazz musicians expect to meet in the standard repertoire. Examples are in C unless stated.

### Cadences

- **Major ii – V – I:** Dm7 – G7 – Cmaj7.
- **Minor ii – V – i:** Dø – G7♭9 – Cm6 (or Cm(maj7)).
- **Tritone ii – V:** Dm7 – D♭7 – Cmaj7. With the substitute's own ii: A♭m7 – D♭7 – Cmaj7.
- **Backdoor:** Fm7 – B♭7 – Cmaj7 (iv7 – ♭VII7 – I). Named by educator Jerry Coker. Some tunes use a major IV instead ("Cherokee").
- **Minor plagal:** Fm6 – Cmaj7. Used as a gentle ending.

{{chords: Dm7 G7 Cmaj7 | guitar piano | The basic major ii–V–I.}}

{{chords: Fm7 Bb7 Cmaj7 | guitar piano | The backdoor cadence iv7 – ♭VII7 – I.}}

### Turnarounds

Two-bar patterns that lead back to the top of a form:
- I – vi – ii – V: C – Am7 – Dm7 – G7.
- I – VI7 – ii – V: C – A7 – Dm7 – G7 (A7 is V/ii).
- iii – VI7 – ii – V: Em7 – A7 – Dm7 – G7. The ii is tonicised with its own ii – V.
- I – ♯I°7 – ii – V: C – C♯°7 – Dm7 – G7 (the diminished replaces A7).
- **Tritone turnaround:** I – ♭III7 – ♭VI7 – ♭II7 (C – E♭7 – A♭7 – D♭7). Every chord after I is the tritone substitute of the I – VI7 – II7 – V7 version. Tadd Dameron's "Lady Bird" ends with a close relative (Cmaj7 – E♭7 – A♭maj7 – D♭7).

{{chords: C A7 Dm7 G7 | guitar piano | The turnaround I – VI7 – ii – V.}}

{{chords: C Eb7 Ab7 Db7 | guitar piano | The tritone turnaround: every chord after I is a tritone substitute.}}

### Cycle progressions

- **Ragtime progression:** III7 – VI7 – II7 – V7 – I (E7 – A7 – D7 – G7 – C). Each dominant resolves to the next, round the circle of fifths. Found in ragtime and far beyond: "Sweet Georgia Brown" and Sonny Rollins's "Doxy" use it, and so does the bridge of rhythm changes.
- **Diatonic cycle with the relative minor:** ii – V – I – IV – iiø – V – i. In G minor / B♭ major ("Autumn Leaves"): Cm7 – F7 – B♭maj7 – E♭maj7 – Am7♭5 – D7♭9 – Gm. A circle-of-fifths sequence with sevenths, landing first in the major key, then in its relative minor.
- **Cycle plus a shift:** "All the Things You Are" opens Fm7 – B♭m7 – E♭7 – A♭maj7 – D♭maj7, a cycle in A♭, then G7 – Cmaj7 jumps to a new key a major third away.

{{chords: E7 A7 D7 G7 C | guitar piano | The ragtime progression: dominants round the circle of fifths into C.}}

{{chords: Cm7 F7 Bbmaj7 Ebmaj7 Am7b5 D7b9 Gm | guitar piano | The "Autumn Leaves" cycle: a ii–V–I in B♭, then a minor ii–V–i in G minor.}}

### Minor-key devices

- **Line cliché:** a minor chord held while one voice falls chromatically: Cm – Cm(maj7) – Cm7 – Cm6 (C – B – B♭ – A). Often the line is put in the bass instead.
- **Minor turnaround:** i – VI7 – iiø – V7 (Cm – A♭7 – Dø – G7). A♭7 here doubles as a German augmented sixth.

{{chords: Cm Cm/B Cm/Bb Cm/A | guitar piano | The line cliché with the falling line in the bass: C – B – B♭ – A under a C minor chord.}}

### Coltrane changes

- John Coltrane's "Giant Steps" (1960) moves between three keys a **major third** apart: B, G and E♭. Each new key is reached through its own V7 or ii – V.
  - Opening: Bmaj7 – D7 | Gmaj7 – B♭7 | E♭maj7 | Am7 – D7 | Gmaj7 …
- The same idea can replace a plain ii – V – I. In C: Dm7 – E♭7 – A♭maj7 – B7 – Emaj7 – G7 – Cmaj7. The three tonics C, A♭ and E split the octave into equal major thirds. Coltrane used this in "Countdown", a reworking of "Tune Up".

{{chords: Bmaj7 D7 Gmaj7 Bb7 Ebmaj7 | guitar piano | The opening of "Giant Steps": tonics B, G and E♭, a major third apart.}}

### Modal jazz

- Chords last many bars and are defined by a mode, not by cadences.
- **"So What"** (Miles Davis, 1959): 32-bar AABA. The A sections are D Dorian (Dm7), the bridge moves up a half step to E♭ Dorian (E♭m7). John Coltrane's "Impressions" uses the same plan.
- The **"So What chord"**, associated with Bill Evans: three stacked fourths with a major third on top. Over D: E A D G B.
- Modal tunes favour quartal voicings, sus chords and pedal points.

Example: a 32-bar chorus in C that uses five devices: bars 1–8 a cycle (Cmaj7 – A7 – Dm7 – G7, then Em7 – A7 – Dm7 – G7), bars 9–16 the same with a backdoor ending (Fm7 – B♭7), bridge as the ragtime progression, last A with a tritone turnaround.

Exercise: play each turnaround in the list in three keys (C, F, B♭). Then improvise four bars on each, using only chord tones.

Exercise: rewrite "Dm7 – G7 – Cmaj7" in five ways: tritone ii – V, backdoor, minor ii – V, Coltrane substitution, and minor plagal.

Sources: Open Music Theory v2, "ii–V–I" (turnarounds) and "Chord-Scale Theory" (Giant Steps); Hutchinson, Music Theory for the 21st-Century Classroom ("Mr. P.C." and the German sixth); Wikipedia, [Coltrane changes](https://en.wikipedia.org/wiki/Coltrane_changes), [Giant Steps](https://en.wikipedia.org/wiki/Giant_Steps_(composition)), [Backdoor progression](https://en.wikipedia.org/wiki/Backdoor_progression), [Ragtime progression](https://en.wikipedia.org/wiki/Ragtime_progression) and [So What](https://en.wikipedia.org/wiki/So_What_(Miles_Davis_composition)); [Learn Jazz Standards, backdoor progression](https://www.learnjazzstandards.com/blog/learning-jazz/jazz-theory/backdoor-progression/); Évora jazz piano trio thesis ("Autumn Leaves" transcription). The exact voicing Evans played on "So What" is not confirmed by a transcription; the stacked-fourths shape is the standard description.

## Gospel progressions
@group Progression standards

**Source note:** these come from widely used teaching sites, not from scholarly studies. The library still has no academic gospel source, so treat details as common practice rather than established fact.

Gospel players name chords by scale-degree numbers, so the progressions are known as "1–4", "2–5–1", "7–3–6" and so on. Examples in C.

### Core moves

- **1–4 walk-up:** move from I to IV by step through ii and iii: C – Dm7 – Em7 – F. Often with passing slash chords (C – Dm7 – C/E – F).
- **2–5–1:** Dm7 – G7 – C, usually with extensions and altered dominants (G13, G7♭9).
- **3–6–2–5–1:** Em7 – A7 – Dm7 – G7 – C. A cycle into the tonic; A7 is often altered.
- **7–3–6:** Bø – E7alt – Am7. A minor ii – V into vi, which then often continues into 2–5–1.
- **Plagal "amen" endings:** F – C, and the darker F – Fm6 – C (IV – iv6 – I).
- **Backdoor ending:** B♭7 – C (♭VII7 – I).

{{chords: C Dm7 Em7 F | guitar piano | The 1–4 walk-up: C to F by step through Dm7 and Em7.}}

{{chords: Bø E7alt Am7 | guitar piano | The 7–3–6: a minor ii–V into Am7.}}

### Bass walk-ups

- From 2 up to 4: D – E – F under Dm7 – C/E – F.
- From 2 up to 5: D – E – F – F♯ – G under Dm7 – C/E – F – F♯°7 – C/G (or G7).
- The diminished chord on the raised fourth (F♯°7) is a gospel favourite on the way to the dominant or to C/G.

{{chords: Dm7 C/E F F#o7 C/G | guitar piano | The bass walk-up from 2 to 5: D – E – F – F♯ – G.}}

Example: a full ending in C: C – Em7 – A7 – Dm7 – G7 – C, then the amen: F – Fm6 – C.

Exercise: play the 1–4 walk-up in C, F and G. Then insert a 7–3–6 before the 2–5–1 of a cadence and hear how much further from home it starts.

Sources: [Hear and Play, the 1–4 walk-up](https://www.hearandplay.com/main/classic-1-4-walk-up-chord-progression); [Pianote, gospel piano 101](https://www.pianote.com/blog/gospel-piano-101/); [PianoGroove, gospel progressions](https://www.pianogroove.com/?p=5342).

## Neo-soul and modern R&B progressions
@group Progression standards

### Chord colour first

- Extended chords are the default: minor ninths and elevenths on ii and vi, major ninths on I and IV, thirteenths on dominants.
- Thirds are sometimes left out, so chords float between major and minor.
- Progressions are often familiar (ii – V – I, IV – I) with these colours: Dm9 – G13 – Cmaj9.

{{chords: Dm9 G13 Cmaj9 | guitar piano | ii–V–I with neo-soul colours: minor ninth, thirteenth, major ninth.}}

### Standard moves

- **Minor plagal:** IVmaj7 – iv6 – I. In G: Cmaj7 – Cm6 – G. A softer replacement for V – I.
- **Three major chords:** I – ♭VIImaj7 – IVmaj7 (C – B♭maj7 – Fmaj7), bright and wistful at once.
- **Passing diminished:** a diminished seventh between two chords a whole step apart: Dm7 – E♭°7 – Em7.
- **Dorian vamp:** i9 – IV9 (Cm9 – F9). The major IV with a minor tonic gives the Dorian sound.

{{chords: Cmaj7 Cm6 G | guitar piano | The minor plagal move IVmaj7 – iv6 – I (in G).}}

{{chords: Dm7 D#o7 Em7 | guitar piano | A passing diminished chord between ii and iii.}}

### The "Just the Two of Us" progression

- Grover Washington Jr. and Bill Withers's "Just the Two of Us" (1980) loops D♭maj7 – C7 – Fm7 (often followed by E♭m7 – A♭7 or Fm7 – E♭7 back to the top).
- **Disputed key.** Some analyses read it in F minor (♭VImaj7 – V7 – i7). Japanese pop theory names it from A♭ major (IVmaj7 – III7 – vi7), where it is called the "Just the Two of Us progression", a close relative of the royal road (see **Pop loops, EDM and the royal road**).
- Either way, the core is a major seventh chord falling a half step to a dominant that resolves to a minor chord.

{{chords: Dbmaj7 C7 Fm7 | guitar piano | The "Just the Two of Us" loop.}}

Example: an R&B eight-bar loop in G: Cmaj7 – Cm6 – Gmaj7 – Em9 | Am9 – D13 – Gmaj7 – G7.

Exercise: take a four-chord pop loop (C – G – Am – F) and turn it into neo-soul: add ninths, swap F for Fmaj7 – Fm6, and leave the third out of one chord.

Sources: Jiang, R&B harmony and chord structures (Atlantis Press), for IVmaj7 – iv6 – I, I – ♭VIImaj7 – IVmaj7 and the passing diminished; [Hooktheory, Just the Two of Us](https://www.hooktheory.com/theorytab/view/grover-washington-jr-and-bill-withers/just-the-two-of-us); [MuseScore, the jazz chords of Just the Two of Us](https://musescore.com/news/features/the-jazz-chords-of-just-the-two-of-us-a-guide-to-extensions-and-voice-leading/); [eMastered, neo-soul progressions](https://emastered.com/blog/neo-soul-chord-progressions); Open Music Theory v2, "Modal Schemas" (Dorian IV).

## Country, bluegrass and the Nashville numbers
@group Progression standards

### Progressions

- **I – IV – V** is the core, inherited from old-time and folk music. Chords are mostly major triads and dominant sevenths.
- Common orderings: I – IV – I – V – I; I – V – IV – I; V – IV – I; I – V – IV – V.
- With a minor chord: I – vi – IV – V, vi – IV – I – V, I – ii – V, and I – iii – IV.
- **II7 (V/V):** a major II before V is a country and bluegrass signature: G – A7 – D7 – G.
- **Ragtime progression:** III7 – VI7 – II7 – V7 – I (B7 – E7 – A7 – D7 – G in G). Common in bluegrass and western swing; Reverend Gary Davis's "Salty Dog" uses it.

{{chords: G C D7 | guitar piano | I – IV – V7 in G, the core of country.}}

{{chords: G A7 D7 G | guitar piano | The country II7 (V/V) move: G – A7 – D7 – G.}}

### The Nashville Number System

- Session charts in Nashville write chords as **Arabic numbers** for scale degrees: 1, 4, 5. The same chart works in any key, so a singer can ask for a new key and the band reads the same page.
- Popularised in the late 1950s by Neal Matthews Jr. of the Jordanaires, building on the shape-note and scale-degree traditions.
- Conventions (details vary between players):
  - Minor chords: a dash or "m" after the number (6-).
  - Qualities and extensions are added as usual (5⁷, 4maj7).
  - Inversions use a slash: 1/3 is the I chord with its third in the bass.
  - Each number usually means one bar; several numbers grouped together share a bar.
  - Extra symbols mark pushes (anticipations) and held chords.

Example: a verse chart "1 1 4 1 | 1 1 5 5 | 1 1 4 4 | 1 5 1 1" in G is G G C G | G G D D | G G C C | G D G G. In A it is the same chart read with A, D and E.

Exercise: write a 16-bar country song chart in numbers, using I – IV – V and one II7. Play it in G, then in E without rewriting the chart.

Sources: Wikipedia, [Nashville Number System](https://en.wikipedia.org/wiki/Nashville_Number_System) and [Ragtime progression](https://en.wikipedia.org/wiki/Ragtime_progression); [FaChords, Nashville number system](https://fachords.com/nashville-number-system); [Uberchord, country progressions](https://www.uberchord.com/?p=17072).

## Rock and metal progressions
@group Progression standards

### Rock

- Rock often replaces V – I with **plagal** and **modal** motion:
  - **Mixolydian:** I – ♭VII – IV – I (D – C – G – D). ♭VII is "IV of IV", so this is a double plagal chain.
  - **Aeolian cadence:** ♭VI – ♭VII – I (A♭ – B♭ – C). The tonic can be major (a Picardy-like lift) or minor.
  - **Aeolian shuttle:** i – ♭VII – ♭VI – ♭VII (Am – G – F – G).
  - **Subtonic shuttle:** I – ♭VII rocking back and forth.
  - **Borrowed ♭III:** I – ♭III – IV (E – G – A), a blues-rock staple from the minor pentatonic.
- **Power chords** (root and fifth, written 5) are the default sound of distorted guitar.

{{chords: D C G D | guitar piano | Mixolydian rock: I – ♭VII – IV – I in D.}}

{{chords: Ab Bb C | guitar piano | The Aeolian cadence ♭VI – ♭VII – I.}}

### Metal

- Scholar Esa Lilja argues that metal harmony tends towards **plagal** motion and the darker modes (Aeolian, Phrygian, Locrian), while distortion makes even power chords sound major-tinted. The scale is minor; the chords sound bright and heavy at once.
- Typical progressions and riffs (examples on E, the open low string):
  - **Aeolian:** i – ♭VI – ♭VII (Em – C – D), often as E5 – C5 – D5.
  - **Phrygian:** i – ♭II (E5 – F5). The half step above the tonic is the darkest sound in the style.
  - **Tritone:** i – ♭V (E5 – B♭5), from the Locrian mode and the blues ♭5.
  - **Pedal riffs:** a repeated low tonic with chords or single notes moving above it.
  - **Chromatic riffs:** power chords sliding by half step.
- Each metal subgenre has its own harmonic habits; one recent study found clear signatures per subgenre.

{{chords: E5 C5 D5 | guitar piano | The Aeolian metal riff i – ♭VI – ♭VII on E.}}

{{chords: E5 F5 | guitar piano | The Phrygian move i – ♭II: a half step above the tonic.}}

Example: a riff in E: E5 (two bars, with open-string pedal) – F5 – E5 – C5 – D5 – E5.

Exercise: write one four-bar riff for each of the three metal modes (Aeolian, Phrygian, Locrian) on the open E string. Name the chord that gives each mode away.

Sources: Open Music Theory v2, "Blues-Based Schemas" and "Modal Schemas"; Lilja, [Harmonic function and modality in classic heavy metal](https://uis.brage.unit.no/uis-xmlui/handle/11250/3047843) (2019) and [conference paper](https://iipc.utu.fi/MHM/Lilja2.pdf) (2015); [McGill paper on rock harmony](https://escholarship.mcgill.ca/downloads/73666866p) (double-plagal and Aeolian progressions); [Huddersfield thesis on 21st-century metal](https://pure.hud.ac.uk/en/studentTheses/harmonic-structures-of-21st-century-heavy-metal/). The specific riff types are common practice; the sources discuss modes and function more than named riffs.

## Pop loops, EDM and the royal road
@group Progression standards

For the classic four-chord pop schemas (doo-wop, singer/songwriter, hopscotch), see **Pop and rock harmonic schemas**.

### EDM loops

- Dance music usually repeats one four-bar loop for most of a track. Tension comes from the arrangement (builds, breakdowns, drops), not from changing the chords.
- Most loops are in **minor**. Common ones, in A minor:
  - i – VI – III – VII: Am – F – C – G. The same chords as the pop vi – IV – I – V, started on the minor chord.
  - i – VII – VI – VII: Am – G – F – G (the Aeolian shuttle).
  - i – III – VII – VI: Am – C – G – F.
  - i – VI – iv – VII: Am – F – Dm – G.
- **Source note:** these lists come from producer guides, not corpus studies. One vendor reports that 90% of the tracks in its own dataset use a minor tonic; treat that as one dataset, not a general fact.

{{chords: Am F C G | guitar piano | The common EDM minor loop i – VI – III – VII.}}

### J-pop: the royal road

- The **royal road progression** (ōdō shinkō) is the signature progression of Japanese pop: **IVmaj7 – V7 – iii7 – vi**. In C: Fmaj7 – G7 – Em7 – Am.
  - It avoids the tonic, so it keeps moving. iii7 – vi works like a soft V/vi – vi.
  - Extended form: IVmaj7 – V7 – iii7 – vi – ii7 – V7 – I.
  - A common variant makes iii a dominant (E7), which turns it into a true V/vi.
  - Minor-key forms: ♭VImaj7 – ♭VII7 – v7 – i, and iv7 – v7 – ♭IIImaj7 – ♭VI.
- The **Komuro progression**, vi – IV – V – I (Am – F – G – C), is named after producer Tetsuya Komuro, who used it heavily in the 1990s.

{{chords: Fmaj7 G7 Em7 Am | guitar piano | The royal road IVmaj7 – V7 – iii7 – vi in C.}}

Example: a J-pop chorus in C: Fmaj7 – G7 – Em7 – Am | Dm7 – G7 – C – C.

Exercise: play the royal road in C, then the variant with E7. Then rewrite an EDM loop (Am – F – C – G) as the royal road in A minor's relative major and compare the mood.

Sources: [Violet Recording, EDM progressions](https://violetrecording.com/edm-chord-progressions/); [Sample Focus, popular EDM progressions](https://blog.samplefocus.com/blog/the-most-popular-chord-progressions-in-edm); [Mixed In Key, best chords for EDM](https://mixedinkey.com/captain-plugins/wiki/best-chords-for-edm/); Wikipedia, [Royal road progression](https://en.wikipedia.org/wiki/Royal_road_progression); [Music Theory Online article on the royal road](https://mtosmt.org/issues/mto.26.32.1/mto.26.32.1.li.php); Open Music Theory v2, "Four-Chord Schemas". The Komuro name is common in Japanese theory writing but not covered by the sources above.

## Reggae, ska and rocksteady
@group Progression standards

### Style and rhythm

- **Ska** (early 1960s Jamaica) was fast, with prominent horns. It slowed into **rocksteady** in the mid-1960s, with more romantic lyrics and less horn. **Reggae** followed, with simpler chords and the bass brought to the front.
- The **skank:** short chords on the off-beats, usually on guitar and keyboard, while bass and drums stress the beats.
- The **one drop:** the drummer leaves beat one empty and hits kick and snare (often a rim click) together on beat three.

### Progressions

- Harmony is simple, so the groove and the bass line carry the song.
  - I – IV: G – C (roots and one-drop).
  - I – IV – V – IV: G – C – D – C (roots and ska).
  - I – ii: a two-chord vamp a step apart (G – Am).
  - Minor versions: i – iv (Am – Dm).
- **Sources disagree** on which two-chord vamp is the most typical (I – IV or I – ii), and many famous songs break these patterns.

{{chords: G C D C | guitar piano | The roots and ska progression I – IV – V – IV.}}

Example: an eight-bar roots verse in G: G – C – G – C | G – C – D – C, with every chord played as a short off-beat skank.

Exercise: play I – IV in G with chords only on the "and" of each beat. Then add a one-drop pattern by tapping beat three only.

Sources: Hutchinson, Music Theory for the 21st-Century Classroom, "Accompanimental Textures" (reggae off-beats); [Splice, reggae chord progressions](https://splice.com/blog/reggae-chord-progressions/); [Orphiq, reggae chord progressions](https://orphiq.com/resources/reggae-chord-progressions); [Guitar World, Bob Marley rhythm styles](https://guitarworld.com/lessons/bob-marley-reggae-rhythm-guitar); Wikipedia, [Reggae](https://en.wikipedia.org/wiki/Reggae) and [One drop rhythm](https://en.wikipedia.org/wiki/One_drop_rhythm).

## Celtic and modal folk
@group Progression standards

### Modes

- Irish and Scottish traditional tunes use four modes: **Ionian** (major), **Mixolydian**, **Dorian** and **Aeolian**. When players call a tune "modal", they usually mean Dorian.

### Chords

- **Dorian and Aeolian tunes:** a minor home chord and a major chord a step below.
  - E Dorian: Em – D. A Aeolian: Am – G, sometimes with F.
- **Mixolydian tunes:** two major chords a step apart.
  - A Mixolydian: A – G. D Mixolydian: D – C.
- **Major tunes:** an eight-bar part starts on I and moves to IV or V as the melody demands.
- **Accompaniment is light.** The melody comes first, and there is no set chord progression for most tunes; different players harmonise the same tune differently.
  - Guitar and bouzouki players use drones, power chords and open voicings that leave the mode to the melody.
  - Many play countermelodies instead of block chords.
  - DADGAD tuning (guitar) and GDAD (bouzouki) make these open sounds easy.

{{chords: Em D | guitar piano | Dorian folk harmony: a minor home chord and a major chord a step below.}}

{{chords: A G | guitar piano | Mixolydian folk harmony: two major chords a step apart.}}

Example: an E Dorian reel, eight bars: Em | Em | D | D | Em | Em | D | Em.

Exercise: take a Dorian tune you know and accompany it three ways: with Em – D, with E5 – D5 power chords, and with a held E drone only.

Sources: [Slow Players, modes and keys](https://slowplayers.org/modes-keys/); Wikipedia, [Irish traditional music](https://en.wikipedia.org/wiki/Irish_traditional_music) and [Gaelic folk music](https://en.wikipedia.org/wiki/Gaelic_folk_music). These are teaching and community sources rather than scholarship, and they sometimes label modes differently.

## Latin progressions: son montuno, salsa and tango
@group Progression standards

### Son montuno and salsa

- The **montuno** section of a son or salsa tune repeats a short vamp under improvised vocals or solos. The piano guajeo and the chord changes line up with the clave (see **Afro-Cuban clave and salsa**).
- Common vamps:
  - I – IV – V – IV: C – F – G – F.
  - ii – V: Dm7 – G7.
  - Minor: i – iv – V7 (Am – Dm – E7).
  - Dorian minor: im7 – IV7 (Am7 – D7).
  - i – ♭VI – V – ♭VI (Am – F – E – F).
- Solos often sit on a single one- or two-chord vamp for a long time.

{{chords: C F G F | guitar piano | The montuno vamp I – IV – V – IV.}}

{{chords: Am Dm E7 | guitar piano | A minor montuno vamp i – iv – V7.}}

### Argentine tango

- Tango harmony uses the ordinary chords and progressions of common-practice tonality, with a strong preference for **minor keys** and chromatic colour.
- Typical habits:
  - Long stretches that alternate tonic and dominant (i – V7 – i).
  - Contrasting middle sections in the **relative major**, or in the dominant or subdominant key.
- From the 1950s, Astor Piazzolla brought in jazz harmony (extended chords, tritone substitutes), the basis of tango nuevo.
- **Source note:** the sources describe tango harmony only in general terms. A detailed list of standard tango progressions was not found in free sources.

{{chords: Am E7 Dm Am | guitar piano | A tango phrase alternating tonic and dominant in A minor.}}

Example: a tango phrase in A minor: Am – E7 – Am – E7 | Dm – Am – E7 – Am, then a middle section in C major: C – G7 – C – G7.

Exercise: play I – IV – V – IV in C as a montuno, with each chord change landing just before the beat. Then play the tango phrase above with a strong accent on every beat.

Sources: [Premier Guitar, montunos made easy](https://www.premierguitar.com/montunos-made-easy); [Piano With Jonny, piano montunos](https://pianowithjonny.com/piano-lessons/piano-montunos-the-complete-guide/); Wikipedia, [Guajeo](https://en.wikipedia.org/wiki/Guajeo) and [Tango music](https://en.wikipedia.org/wiki/Tango_music); Turci-Escobar, [review of Link and Wendland, *Tracing Tangueros*](https://mtosmt.org/issues/mto.19.25.3/mto.19.25.3.turciescobar.php) (Music Theory Online); [A Brief Harmony of Tango](https://elvictrolerocastizo.blogspot.com/2017/12/a-brief-harmony-of-tango-part-iii.html) (blog series); Bin Md Tarip, clave in salsa (UBC).

## Brazilian standard progressions
@group Progression standards

For background, see **Choro and samba** and **Bossa nova harmony**. Examples in C.

### Samba and choro

- **I – VI7 – ii – V:** C – A7 – Dm7 – G7. The standard turnaround; A7 is often A7♭9.
- **Diminished ladder:** a rising bass with diminished chords between diatonic ones: C – C♯°7 – Dm7 – D♯°7 – Em7.
- **Neighbour diminished:** G – G°7 – G, decorating a held chord.

{{chords: C A7 Dm7 G7 | guitar piano | The samba and choro turnaround I – VI7 – ii – V.}}

{{chords: C C#o7 Dm7 D#o7 Em7 | guitar piano | The diminished ladder: a rising bass with diminished chords between diatonic ones.}}

### Bossa nova

- **The "Ipanema" move:** I – II7 – ii7 – ♭II7 – I. In C: Cmaj7 – D7 – Dm7 – D♭7 – Cmaj7. D7 is a V/V that does not resolve, often played with a raised eleventh (Lydian dominant); D♭7 is the tritone substitute of G7. "The Girl from Ipanema" opens this way in F (Fmaj7 – G7 – Gm7 – G♭7).
- **I – V7♭5/V:** "Desafinado" opens with a jump from the tonic to D7♭5 (in C), an unusual, non-smooth move.
- **Major and minor ii – Vs together:** tunes such as "Manhã de Carnaval" move between a minor key and its relative major using minor ii – Vs (Bø – E7 into Am) and major ii – Vs (Dm7 – G7 into C).
- **Descending chromatic bass** under one chord or through a cadence: Am – Am/G♯ – Am/G – D/F♯ – Fmaj7 – E7.

{{chords: Cmaj7 D7 Dm7 Db7 Cmaj7 | guitar piano | The "Ipanema" move I – II7 – ii7 – ♭II7 – I.}}

{{chords: Am Am/G# Am/G D/F# Fmaj7 E7 | guitar piano | A descending chromatic bass through a cadence in A minor.}}

Example: an eight-bar bossa in C: Cmaj7 | D7 | Dm7 | D♭7 | Cmaj7 | A7♭9 | Dm9 | G13.

Exercise: play the diminished ladder from C up to F (C – C♯°7 – Dm7 – D♯°7 – Em7 – F) with a samba rhythm. Then play the Ipanema move in F and in C.

Sources: Farinha, choro piano dissertation (York University); Simas, harmony in waltz, choro and samba (UFPE, Portuguese); Gava, The Harmonic Language of Bossa Nova (UNESP, Portuguese); [Jazzadvice, The Girl from Ipanema](https://www.jazzadvice.com/lessons/how-to-play-the-girl-from-ipanema/); [JazzStandards.com, bossa nova](https://www.jazzstandards.com/theory/bossa-nova.htm); [All About Jazz, Desafinado](https://www.allaboutjazz.com/desafinado-by-antonio-carlos-jobim-newton-mendonca-and-jon-hendricks-antonio-carlos-jobim-by-tish-oney.php); [Piano With Jonny, the Jobim progression](https://pianowithjonny.com/piano-lessons/the-jobim-chord-progression/).
`,ar=`# Guitar\r
\r
Everything specific to the six-string guitar in standard tuning: the fretboard, shapes, scale patterns and the technique of both hands. Read the music theory file alongside this one. In this file, "string 1" is the high E, as in the app.\r
\r
How to use this file: learn the fretboard maps first, then the shapes, then the technique. The **Styles and progressions** group applies the theory file's progression library to the guitar: blues, jazz, Brazilian, flamenco and rhythm guitar across styles. Every technique has an exercise. Play them slowly with a metronome; speed comes last.\r
\r
## Standard tuning and string numbers\r
@group Fretboard\r
\r
- Strings from low to high: E2, A2, D3, G3, B3, E4. The guitar sounds an octave lower than it is written on the staff (the usual notation is written an octave higher).\r
- The app numbers strings 1 (high E) to 6 (low E). In real life guitarists often count the other way. Be careful when a teacher or tab uses a different convention.\r
- A **capo** raises all open strings. A capo on fret 2 makes the open strings sound like D A D G B E tuned up a whole step.\r
- Tuning drop D (low E down to D) gives the low string a root that sits below the open chord shapes.\r
\r
Exercise: play each open string and sing its note name. Then play the open strings again, this time naming the interval between each pair (perfect 4ths, except G to B, a major 3rd).\r
\r
## Fret = semitone\r
@group Fretboard\r
\r
- Each fret is one semitone higher than the one before. Fret 12 is an octave above the open string, fret 5 is a perfect 4th, fret 7 is a perfect 5th.\r
- The fret markers are single dots at 3, 5, 7, 9 and 15, and a double dot at 12.\r
- Frets get closer as you go up the neck. Each fret is about 5.6 % narrower than the one before, because of equal temperament.\r
- Pressing a string just behind the fret wire gives a clean note with the least effort. Pressing in the middle of the fret goes flat, and pressing too far back can mute.\r
\r
Exercise: play fret 12 on each string, then fret 7, and sing the note you hear. Confirm the octave and the fifth against the open strings.\r
\r
## Note maps for every string (frets 0 to 12)\r
@group Fretboard\r
\r
{{scale: C major | guitar | Every natural note (no sharps or flats) on the neck: the landmarks from which every other note is one fret away.}}\r
\r
Read a string as a row. The same letter names come back every 12 frets.\r
\r
- **String 6 (E2)**: E F F♯ G G♯ A A♯ B C C♯ D D♯ E\r
- **String 5 (A2)**: A A♯ B C C♯ D D♯ E F F♯ G G♯ A\r
- **String 4 (D3)**: D D♯ E F F♯ G G♯ A A♯ B C C♯ D\r
- **String 3 (G3)**: G G♯ A A♯ B C C♯ D D♯ E F F♯ G\r
- **String 2 (B3)**: B C C♯ D D♯ E F F♯ G G♯ A A♯ B\r
- **String 1 (E4)**: E F F♯ G G♯ A A♯ B C C♯ D D♯ E\r
\r
Memory tip: the natural notes on string 6 (E F G A B C D E) appear at frets 0, 1, 3, 5, 7, 8, 10, 12. Those are your landmarks.\r
\r
Exercise: write the note map for all six strings from memory, then check each row against this list. Do it again from fret 12 down.\r
\r
## Intervals between strings\r
@group Fretboard\r
\r
{{notes: C E | guitar | Every C and E: each E a major third above a C sits on the next string up, one fret lower (the same fret when crossing from G to B).}}\r
{{notes: C G | guitar | Every C and G: each G a fifth above a C sits on the next string up, two frets higher (three when crossing from G to B).}}\r
\r
- Moving from one string up to the next (toward string 1), the open note rises by 5 semitones, except from string 3 (G) to string 2 (B), which rises by 4.\r
- To find an interval on an adjacent string: new fret = old fret + (interval in semitones − string step). The string step is 5, or 4 for the G–B pair.\r
- Example: from string 5 fret 3 (C) to string 4, the major 3rd (4 semitones) lands on fret 3 + 4 − 5 = 2, which is E. C to E is a major 3rd ✓.\r
- On one string: 2 frets is a whole tone, 3 frets a minor 3rd, 4 frets a major 3rd, 5 frets a perfect 4th, 7 frets a perfect 5th, 12 frets an octave.\r
- The same formula works across two strings apart: subtract two string steps (10, or 9 across G–B).\r
\r
Exercise: pick any note on string 6 and find its perfect 5th, major 3rd and minor 7th on strings 5, 4 and 3, using the formula. Check each answer on the note map.\r
\r
## Octaves and unisons\r
@group Fretboard\r
\r
{{notes: C | guitar | Every C on the neck: the octave shape is two strings up and two frets up, or three frets when the shape crosses the B string.}}\r
\r
- An octave shape is the same letter name two strings across, one octave higher. From string 6 open (E2), the octave is string 4 fret 2 (E3): two strings toward string 1, and two frets higher. It is useful for playing a melody with two voices.\r
- Unisons across strings: the same note on two strings, for example string 5 fret 5 (D) and string 4 open (D).\r
- Octave shapes give a fuller sound and make it easy to double a melody.\r
\r
Exercise: play the octave shape of each note of the C major scale on strings 6 and 4. Then do the same on 5 and 3.\r
\r
## Triads\r
@group Chords and shapes\r
\r
A triad on guitar uses three different notes on **three adjacent strings**. There are four such string sets: 6–5–4, 5–4–3, 4–3–2 and 3–2–1. Each set holds every triad in three inversions, so four sets × three inversions gives twelve shapes per chord quality, covering the whole neck.\r
\r
### How to read the diagrams\r
\r
- Each diagram shows **one string set** and **all three inversions** of the triad on it, from the open strings to fret 15:\r
  - Cyan: **root position** (the root is the lowest of the three notes).\r
  - Amber: **1st inversion** (the third is lowest).\r
  - Pink: **2nd inversion** (the fifth is lowest).\r
  - A white ring marks the **root** in every shape.\r
- Labels show chord degrees (R, 3, 5). Use **Show notes** to see note names, and the **Root** menu to move the whole map to another chord.\r
- Going up one string set, the shapes repeat in the same order: root position, then 1st inversion, then 2nd inversion, then root position again 12 frets higher.\r
- **The B string bends the shapes.** Strings are tuned in fourths except G to B (a major third). Any shape that crosses from string 3 to string 2 has its upper note one fret higher than on the other string sets. That is why sets 4–3–2 and 3–2–1 look different from 6–5–4 and 5–4–3.\r
- Triads on adjacent strings sound lighter than full chords or drop-2 voicings. Use them when a bassist or pianist already covers the low end, and to see the chord tones under every scale position.\r
\r
Example: G major on strings 3–2–1, going up the neck. 1st inversion: string 3 fret 4 (B), string 2 fret 3 (D), string 1 fret 3 (G). 2nd inversion: frets 7, 8, 7 (D, G, B). Root position: frets 12, 12, 10 (G, B, D). The familiar open shape (G and B open, G on string 1 fret 3) doubles the root and leaves out the fifth, so it is not a three-note triad on this set.\r
\r
### Major triads (R 3 5)\r
\r
- Major third plus minor third: R – 3 – 5, intervals 0, 4, 7.\r
- The bright, stable chord of I, IV and V in major keys.\r
\r
{{triads: major | 6 5 4 | All three inversions of the major triad on each string set. Pick a root and play the shapes in order up the neck.}}\r
{{triads: major | 5 4 3}}\r
{{triads: major | 4 3 2}}\r
{{triads: major | 3 2 1}}\r
\r
Exercise: choose C as the root. On each string set, play the three shapes in order up the neck and back, saying the bass degree aloud (R, 3, 5) as you play each one.\r
\r
### Minor triads (R ♭3 5)\r
\r
- Minor third plus major third: R – ♭3 – 5, intervals 0, 3, 7.\r
- Every minor shape is its major shape with the **third one fret lower**. Compare each diagram with the one above it.\r
\r
{{triads: minor | 6 5 4 | The same maps for the minor triad: compare with the major maps above, only the third moves.}}\r
{{triads: minor | 5 4 3}}\r
{{triads: minor | 4 3 2}}\r
{{triads: minor | 3 2 1}}\r
\r
Exercise: on strings 3–2–1, alternate C major and C minor in each inversion. Only one finger moves each time: the one on the third.\r
\r
### Diminished triads (R ♭3 ♭5)\r
\r
- Two minor thirds: R – ♭3 – ♭5, intervals 0, 3, 6. The span from root to fifth is a tritone.\r
- The vii° chord of a major key, and the ii° chord of a minor key. It sounds tense and wants to resolve.\r
- Each shape is the minor shape with the **fifth one fret lower**.\r
\r
{{triads: diminished | 6 5 4 | The diminished triad on each string set: the minor shapes with the fifth one fret lower.}}\r
{{triads: diminished | 5 4 3}}\r
{{triads: diminished | 4 3 2}}\r
{{triads: diminished | 3 2 1}}\r
\r
Exercise: in C major, play B diminished (vii°) in each inversion on strings 4–3–2, and resolve each shape to the nearest C major shape on the same strings.\r
\r
### Augmented triads (R 3 ♯5)\r
\r
- Two major thirds: R – 3 – ♯5, intervals 0, 4, 8.\r
- **Symmetrical:** the three notes divide the octave into equal major thirds, so every inversion is itself an augmented triad with a different root. C augmented (C E G♯) in 1st inversion has the same notes as E augmented; in 2nd inversion, the same as G♯ augmented.\r
- So on each string set the three inversions are **the same shape**, moved up four frets each time. Only four augmented triads exist with different notes.\r
- Common as a passing chord (I – I+ – vi, or V+ resolving to I).\r
\r
{{triads: augmented | 6 5 4 | The augmented triad on each string set: one shape repeated every four frets.}}\r
{{triads: augmented | 5 4 3}}\r
{{triads: augmented | 4 3 2}}\r
{{triads: augmented | 3 2 1}}\r
\r
Exercise: play C – C+ – Am on strings 3–2–1, keeping C and E in place while G rises to G♯ and then to A.\r
\r
Exercise: for one root, play all four qualities in root position on the same string set. Name which notes moved each time (major to minor: the third; minor to diminished: the fifth; major to augmented: the fifth).\r
\r
Sources: the theory file, **Triads and their qualities** and **Inversions and figured bass**; Kelly, Rasmussen and Roberts, *A Guide to Exploring Jazz Improvisation, Book 1* (triads through inversions in all keys); Jazz Theory (MTC130), "Jazz Masterclass: Triads". The shapes are generated by the app from the standard tuning.\r
\r
## Seventh chords: drop 2 and drop 3\r
@group Chords and shapes\r
\r
A four-note seventh chord in close position (all notes within an octave) is hard to finger on guitar. Guitarists spread it out by moving one note down an octave, which gives the two standard families of seventh-chord voicings.\r
\r
### The two voicing families\r
\r
- **Drop 2:** take a close voicing and move the **second-highest** note down an octave. The result sits on **four adjacent strings**: 4–3–2–1, 5–4–3–2 or 6–5–4–3.\r
  - Example: Cmaj7 close is C E G B (low to high). Dropping G gives G C E B. On strings 4–1: fret 5 (G), fret 5 (C), fret 5 (E), fret 7 (B).\r
  - The most used jazz and pop voicing on the top four strings.\r
- **Drop 3:** move the **third-highest** note down an octave instead. The bass is now far below the other three notes, so the shape **skips a string**: 6–4–3–2 or 5–3–2–1.\r
  - Example: Cmaj7 close C E G B → drop 3 gives E C G B; in root position (C B E G) on strings 6–4–3–2: frets 8, 9, 9, 8.\r
  - A full, low sound with the root or another chord tone in the bass, common in jazz rhythm guitar.\r
- Each family has **four inversions**, one per chord tone in the bass. Like the triads, they climb the neck in order: root position, 1st, 2nd, 3rd inversion, then root position again 12 frets higher.\r
- **Shell voicings** keep only the root, 3rd and 7th: for G7, G B F. Three notes, very clear in a band.\r
\r
### How to read the maps\r
\r
- One map per string set, all four inversions at once: cyan root position, amber 1st inversion (3rd in the bass), pink 2nd inversion (5th in the bass), green 3rd inversion (7th in the bass). The white ring marks the root.\r
- The first three maps in each section are drop 2, the last two drop 3.\r
- Use **Root** to move the map to any chord and **Show notes** to see note names.\r
\r
### Major seventh (R 3 5 7)\r
\r
{{voicings: maj7 drop2 | 4 3 2 1 | Drop-2 maj7 on the top four strings: the brightest, most common jazz maj7 shapes.}}\r
{{voicings: maj7 drop2 | 5 4 3 2}}\r
{{voicings: maj7 drop2 | 6 5 4 3}}\r
{{voicings: maj7 drop3 | 6 4 3 2 | Drop-3 maj7 with the bass on string 6 or 5 (string 5 or 4 is skipped).}}\r
{{voicings: maj7 drop3 | 5 3 2 1}}\r
\r
### Dominant seventh (R 3 5 ♭7)\r
\r
{{voicings: 7 drop2 | 4 3 2 1 | Drop-2 dominant sevenths: compare with maj7 above, only the 7th has moved down a fret.}}\r
{{voicings: 7 drop2 | 5 4 3 2}}\r
{{voicings: 7 drop2 | 6 5 4 3}}\r
{{voicings: 7 drop3 | 6 4 3 2 | Drop-3 dominant sevenths, the classic jazz rhythm-guitar shapes.}}\r
{{voicings: 7 drop3 | 5 3 2 1}}\r
\r
### Minor seventh (R ♭3 5 ♭7)\r
\r
{{voicings: m7 drop2 | 4 3 2 1 | Drop-2 minor sevenths: the dominant shapes with the 3rd one fret lower.}}\r
{{voicings: m7 drop2 | 5 4 3 2}}\r
{{voicings: m7 drop2 | 6 5 4 3}}\r
{{voicings: m7 drop3 | 6 4 3 2 | Drop-3 minor sevenths.}}\r
{{voicings: m7 drop3 | 5 3 2 1}}\r
\r
### Half-diminished (R ♭3 ♭5 ♭7)\r
\r
{{voicings: m7b5 drop2 | 4 3 2 1 | Drop-2 half-diminished chords: the m7 shapes with the 5th one fret lower. The iiø7 of a minor ii–V.}}\r
{{voicings: m7b5 drop2 | 5 4 3 2}}\r
{{voicings: m7b5 drop2 | 6 5 4 3}}\r
{{voicings: m7b5 drop3 | 6 4 3 2 | Drop-3 half-diminished chords.}}\r
{{voicings: m7b5 drop3 | 5 3 2 1}}\r
\r
### Diminished seventh (R ♭3 ♭5 °7)\r
\r
- Symmetrical, like the augmented triad: the notes divide the octave into four minor thirds, so every inversion is the same shape moved up three frets, and is itself a diminished seventh on another root.\r
\r
{{voicings: dim7 drop2 | 4 3 2 1 | Drop-2 diminished sevenths: one shape repeated every three frets.}}\r
{{voicings: dim7 drop2 | 5 4 3 2}}\r
{{voicings: dim7 drop2 | 6 5 4 3}}\r
{{voicings: dim7 drop3 | 6 4 3 2 | Drop-3 diminished sevenths.}}\r
{{voicings: dim7 drop3 | 5 3 2 1}}\r
\r
Example: a ii–V–I in C on strings 4–1 without leaving frets 5–8: Dm7 at frets 7-7-6-8 (2nd inversion), G7 at 5-7-6-7 (root position), Cmaj7 at 5-5-5-7 (2nd inversion). Only one or two notes move each time, by a step: the 7th of Dm7 (C) falls to the 3rd of G7 (B), and the 7th of G7 (F) falls to the 3rd of Cmaj7 (E).\r
\r
Exercise: on strings 4–1, play Dm7 – G7 – Cmaj7 three times, starting from a different inversion of Dm7 each time. Move each voice as little as possible.\r
\r
Exercise: choose one string set and play all five qualities on one root in root position. Name the note that changes each time (maj7 → 7: the 7th; 7 → m7: the 3rd; m7 → m7♭5: the 5th; m7♭5 → dim7: the 7th).\r
\r
Sources: Open Music Theory v2, "Jazz Voicings" (drop 2 and drop 3); the theory file, **Voicings** and **Seventh chords and extensions**. The shapes are generated by the app from the standard tuning.\r
\r
## Extended chords: 9, 11, 13\r
@group Chords and shapes\r
\r
{{chords: G9 G11 G13 | guitar piano | Dominant ninth, eleventh and thirteenth on G: compare which chord tones each shape leaves out.}}\r
\r
- A **9th chord** adds the 9th (2nd) above the 7th. On guitar the 9th is often played on the top string, one or two frets above the root.\r
- Dominant 9 shape: strings 6–1 with the root low, the 3rd and 7th in the middle, the 9th on top.\r
- **11th and 13th** chords are dense. Omit the 3rd or the 11th to keep clarity: a 13th chord usually leaves out the 11th.\r
- Practice: play the 9 chord, then the 9 without the 5th, then the 13 without the 11th. Hear the difference.\r
\r
Exercise: write the dominant 9, 11 and 13 chords on the string set 4–1 for the root G. List which chord tones you chose to leave out and why.\r
\r
## Power chords\r
@group Chords and shapes\r
\r
{{chords: A5 E5 | guitar piano | Power chords with the root on string 6 and on string 5.}}\r
\r
- A **power chord** is a root and a fifth, played on two or three strings. It has no 3rd, so it is neither major nor minor.\r
- Shapes: the E power chord (string 6 fret n, string 5 fret n + 2, string 4 fret n + 2), the A power chord (string 5 fret n, string 4 fret n + 2, string 3 fret n + 2).\r
- Play them with the first and third finger, or the first and the fourth in a stretch. Use down-strokes for rock and metal.\r
- Distortion amplifies the 5th and the octave, which is why power chords sound strong. Clean power chords sound thin.\r
\r
Exercise: play the power chord on each string from the root A (string 6 fret 5, string 5 fret 7, string 4 fret 7). Then move it up and down the neck, chromatically.\r
\r
## Barre chords\r
@group Chords and shapes\r
\r
{{chords: F Bb Gm | guitar piano | Three chords usually played as barre chords; use Next shape to find the barre version.}}\r
\r
- A **barre chord** uses one finger as a movable nut across several strings. Choose a barre shape (E or A) and move it: the root follows the barred fret.\r
- **E-shape barre** (from the open E major, 0 2 2 1 0 0): with the barre at fret n, string 6 is fret n (root), string 5 is fret n+2 (fifth), string 4 is fret n+2 (octave), string 3 is fret n+1 (third), strings 2 and 1 are fret n. Name the chord by the root on string 6 (fret 5 = A, fret 7 = B).\r
- **A-shape barre** (from the open A major, x 0 2 2 2 0): with the barre at fret n, string 5 is fret n (root), string 4 is fret n+2 (fifth), string 3 is fret n+2 (octave), string 2 is fret n+2 (third), string 1 is fret n. Name the chord by the root on string 5.\r
- Technique: place the barre just behind the fret, with the bony edge of the index finger, not the pad. Keep the thumb behind the neck, around the middle of its back, for leverage.\r
- Tension: if the barre buzzes, roll the finger slightly toward the nut or raise the elbow.\r
\r
Exercise: play the E-shape major barre at frets 1 to 12 (F to E) and the A-shape at frets 1 to 12. Name each chord as you play it.\r
\r
## The CAGED system\r
@group Chords and shapes\r
\r
{{chords: C G A E D | guitar piano | The five open shapes that give the CAGED system its name.}}\r
\r
- The **CAGED** system links five open chord shapes (C, A, G, E, D) to five positions on the neck. Each shape can be moved up and down with a barre, and the scale or arpeggio that goes with each shape covers the neck in a repeating pattern.\r
- Use CAGED to find a chord or scale in any key: find the open shape, slide it to the root you want, and the pattern follows.\r
- Example: G major is available as the open G shape, the E shape at fret 3, the D shape at fret 5, the C shape at fret 7, and the A shape at fret 10. Each is the same chord, with a different voicing.\r
\r
Exercise: play a C major chord in each of the five CAGED shapes, all over the neck, then name the position.\r
\r
## Scale positions (three notes per string)\r
@group Scales and positions\r
\r
{{scalemap: C major maj7 | C major over the whole neck, with the Cmaj7 chord tones coloured as landmarks inside each position.}}\r
\r
- Major scales are often played with three notes on each string in a movable pattern. This is the most common fingering for lead playing, because it is tidy and logical.\r
- Example: C major in a three-notes-per-string position, starting on the low E at fret 8 (C): string 6 frets 8, 10, 12 (C D E); string 5 frets 8, 10, 12 (F G A); string 4 frets 9, 10, 12 (B C D); string 3 frets 9, 10, 12 (E F G); string 2 frets 1, 3, 5 (C D E); string 1 frets 1, 3, 5 (F G A). Check the notes against the note maps before you play it.\r
- The pattern moves to any key by shifting every note the same number of frets (a whole tone up is two frets, and so on).\r
- Fingering: use one finger per fret. On a string with three notes, play 1, 3, 4 on the first string, then shift to 1, 2, 4 on the next.\r
- Modes are the same notes as the parent scale, played from a different starting note. Dorian from D is the C major pattern started on the second degree.\r
\r
Exercise: play the C major scale in one position up and down, naming each note. Then play the D Dorian from the same shape by starting on D.\r
\r
## Pentatonic scales in depth\r
@group Scales and positions\r
\r
{{scalemap: A minor pentatonic m7 | A minor pentatonic over the whole neck: the coloured notes are the Am7 chord tones, so each box shows its chord shape.}}\r
{{scalemap: A blues m7 | The A blues scale: the same boxes plus the ♭5 (grey) between the 4 and the 5.}}\r
\r
- The **minor pentatonic** (1 ♭3 4 5 ♭7) is the core blues and rock scale. Its five boxes cover the whole neck.\r
- Box 1 for A minor (root A on string 6 fret 5): string 6 frets 5 and 8 (A, C); string 5 frets 5 and 7 (D, E); string 4 frets 5 and 7 (G, A); string 3 frets 5 and 7 (C, D); string 2 frets 5 and 8 (E, G); string 1 frets 5 and 8 (A, C).\r
- The five boxes connect at their shared notes. Box 1 is the lowest position; each box uses the next root note.\r
- The **major pentatonic** of a root uses the same notes as the minor pentatonic of the note three semitones below it. So C major pentatonic is played with the A minor boxes, starting from the C.\r
- The **blues scale** adds the ♭5 to the minor pentatonic. Play it as the minor pentatonic box with the ♭5 added between the 4th and the 5th.\r
\r
Exercise: play box 1 of A minor pentatonic up and down, then play it in the other four boxes. Then play the blues scale from the same box, adding the ♭5 between the 4th and 5th.\r
\r
## Scales in other positions and modes\r
@group Scales and positions\r
\r
{{scalemap: D dorian m7 | D Dorian with the Dm7 chord tones coloured; the grey 6 (B) is the note that makes it Dorian.}}\r
{{scalemap: G mixolydian 7 | G Mixolydian with the G7 chord tones coloured; the ♭7 (F) is what separates it from G major.}}\r
\r
- Each mode can be played in any position. Use the root note of the mode to find the box, then count the notes of the mode from the root.\r
- Dorian example: D Dorian is the C major shape started on D. Frets are the same as the C major pattern, the sound changes because the tonic changes.\r
- The harmonic minor and melodic minor shapes are one fret different from the major pattern: lower the 3rd, then the 6th or 7th, as the mode requires.\r
- Use the modes over chords: Dm7 with D Dorian, G7 with G Mixolydian (the major pattern with the ♭7), Cmaj7 with C Lydian (the major pattern with the ♯4).\r
\r
Exercise: over a Dm7 – G7 – Cmaj7 progression, play D Dorian, G Mixolydian and C Lydian from the same string pattern, moving with the chords.\r
\r
## Arpeggios across the neck\r
@group Scales and positions\r
\r
An arpeggio is a chord played one note at a time. These maps show every tone of a chord on the whole neck, coloured by degree, so you can see the chord inside any position and connect its shapes.\r
\r
- Cyan is the root, amber the 3rd, pink the 5th and green the 7th.\r
- Read a map in two ways:\r
  - **In one position:** pick a four- or five-fret area and play every coloured note in it, low to high and back. That is the arpeggio in that position.\r
  - **Along one string:** follow a single colour up the neck to see where the root (or 3rd, or 5th) sits on each string.\r
- Compare maps: major and minor differ only in the amber notes; maj7, 7 and m7 differ in the green and amber notes.\r
\r
{{arpeggio: major | Every major-triad tone on the neck: the frame of every major chord shape.}}\r
{{arpeggio: minor | The minor triad: the same frame with each 3rd (amber) one fret lower.}}\r
{{arpeggio: maj7 | The major seventh arpeggio: the major triad plus the 7th, one fret below each root.}}\r
{{arpeggio: 7 | The dominant seventh arpeggio: the ♭7 sits two frets below each root.}}\r
{{arpeggio: m7 | The minor seventh arpeggio.}}\r
{{arpeggio: m7b5 | The half-diminished arpeggio: the m7 with each 5th one fret lower.}}\r
{{arpeggio: dim7 | The diminished seventh arpeggio: four notes a minor third apart, the same pattern every three frets.}}\r
\r
Exercise: choose a position (say frets 5–8) and play the C major, C minor, Cmaj7, C7 and Cm7 arpeggios in that position without moving your hand. Name the note that changes each time.\r
\r
Exercise: play the Am7 arpeggio across the whole neck on one string pair at a time, sliding up to the next position on each root.\r
\r
Sources: the theory file, **Triads and their qualities** and **Seventh chords and extensions**; Kelly, Rasmussen and Roberts, *A Guide to Exploring Jazz Improvisation, Book 1* (arpeggios as the step after triads). The maps are generated by the app from the standard tuning.\r
\r
## Modes with their chord tones\r
@group Scales and positions\r
\r
Each mode of the major scale goes with one diatonic seventh chord. These maps show the mode on the whole neck with that chord's tones coloured and the other notes grey. The grey notes are the mode's colour; the coloured ones are the safe targets.\r
\r
- Each map starts on the root used in the theory file's example (all seven modes are white-key modes of C major); use **Root** to move it.\r
- Look for the **characteristic note** of each mode among the grey notes (named below).\r
\r
{{scalemap: C major maj7 | Ionian over Cmaj7: the grey 4 (F) is the one note to treat with care over the chord.}}\r
{{scalemap: D dorian m7 | Dorian over Dm7: the grey 6 (B) is what makes it Dorian rather than Aeolian.}}\r
{{scalemap: E phrygian m7 | Phrygian over Em7: the grey ♭2 (F) gives its dark, Spanish colour.}}\r
{{scalemap: F lydian maj7 | Lydian over Fmaj7: the grey ♯4 (B) is its bright characteristic note.}}\r
{{scalemap: G mixolydian 7 | Mixolydian over G7: a major scale whose 7th is lowered, so the chord is a dominant.}}\r
{{scalemap: A aeolian m7 | Aeolian (natural minor) over Am7: the grey ♭6 (F) separates it from Dorian.}}\r
{{scalemap: B locrian m7b5 | Locrian over Bm7♭5: the grey ♭2 (C) is why jazz players often prefer Locrian ♮2 here.}}\r
\r
Exercise: over a drone or a held chord, play each map in one position. Start and end every phrase on a coloured note, and lean on the grey characteristic note once per phrase.\r
\r
Sources: the theory file, **Modes of the major scale** and **Chord-scale relationships**; Open Music Theory v2, "Chord-Scale Theory". The maps are generated by the app from the standard tuning.\r
\r
## Picking hand: how to hold the pick\r
@group Picking\r
\r
- Hold the pick between the thumb and the side of the index finger, with the pick resting on the pad of the thumb. The index finger rests on the pick's edge and bends slightly at the knuckle.\r
- Keep the grip light: the pick should be held firmly enough not to slip, but not gripped like a vice. Tension in the wrist and forearm is the most common cause of fatigue and poor tone.\r
- The exposed tip is usually a few millimetres. A longer tip sounds brighter and gives more attack; a shorter tip sounds warmer and is easier to control.\r
- Pick angle: the pick is nearly parallel to the string, with the tip angled so that its leading edge strikes the string. Too flat and the pick scrapes; too steep and it catches.\r
- Pick thickness changes everything: thin picks (0.5 to 0.6 mm) bend and are good for strumming; medium (0.7 to 0.8 mm) suit most players; thick (1 mm and above) give control for lead and metal.\r
\r
Exercise: hold the pick with the grip described above and play open strings with a down-stroke at 60 BPM for one minute. Stop if the forearm tenses; keep the wrist loose and the motion from the wrist and elbow.\r
\r
## Picking motion and anchoring\r
@group Picking\r
\r
- Anchor the picking hand on the bridge or the lower body of the guitar (the pinky or the side of the hand). The anchor gives control; the picking comes from the wrist and forearm, and the fingers stay still.\r
- The stroke is a small arc: the pick moves in and out of the string, not from the arm alone. Keep the motion short for speed.\r
- Strumming: the wrist and forearm move together. Keep the hand steady and relaxed; loose wrists give a more natural rhythm.\r
\r
Exercise: play a steady eighth-note pattern on the open E string (down, up, down, up) for 2 minutes, keeping the wrist still and the forearm moving.\r
\r
## Alternate picking\r
@group Picking\r
\r
- **Alternate picking** alternates down and up strokes on every note. It is the standard technique for single-note lines.\r
- Rules: the down-stroke starts on the beat, the up-stroke fills the gap. Keep the picking hand moving even when the notes are not played (for rests, keep the motion going).\r
- Start slowly. Play each note with the same volume; increase the tempo only when the sound is even.\r
\r
Exercise: play the C major scale in eighth notes at 80 BPM with strict alternate picking. Then do the same at 100, 120 and 140 BPM, one step at a time.\r
\r
## Economy picking\r
@group Picking\r
\r
- **Economy picking** uses the direction of the pick to choose the stroke, so that you move from one string to the next with the least motion. When the next note is on a lower string, use a down-stroke; when it is on a higher string, use an up-stroke, if the notes are in a single direction.\r
- It is faster than alternate picking on scale patterns that cross strings. It needs practice to keep the sound even.\r
- Example: a three-note pattern on strings 3 to 1 (notes going up across strings): use a down-stroke, then up, and the rest follows the direction of the notes.\r
\r
Exercise: play the C major box (three notes per string) with economy picking, then with alternate picking. Compare the speed and the evenness.\r
\r
## Sweep picking\r
@group Picking\r
\r
{{arpeggio: A m7 | Every Am7 chord tone on the neck: a sweep shape takes one or two neighbouring tones per string, in order.}}\r
\r
- **Sweep picking** plays an arpeggio across several strings with one continuous motion of the pick, down or up, without changing the direction of the stroke.\r
- Technique: the pick glides across the strings. Lift the fretting fingers to create a single pick stroke on each string, and keep the stroke light.\r
- Practice: play a minor arpeggio across three strings with one down-stroke, then the reverse with one up-stroke.\r
\r
Exercise: sweep an Am7 arpeggio (A C E G) across strings 4–2, slowly, one stroke per note.\r
\r
## Hybrid picking\r
@group Picking\r
\r
- **Hybrid picking** uses the pick for the main notes and the middle or ring fingers of the picking hand for notes on other strings. Common in country (the "chicken picking" style) and in jazz guitar.\r
- Grip: the pick is held as usual, with the middle finger and ring finger free to pluck the higher strings.\r
- Practice: play a country lick with the pick on the low strings and the middle finger on the high strings.\r
\r
Exercise: play the root and fifth of a G major chord with the pick on the low strings and the middle finger on the high G and B strings. Practise the switch until it is smooth.\r
\r
## Fingerstyle\r
@group Picking\r
\r
- **Fingerstyle** uses the fingers of the picking hand: thumb (p) for the lowest strings, index (i), middle (m) and ring (a). The little finger usually rests on the body.\r
- Common patterns: the Travis picking pattern (thumb on the bass, index and middle on the treble), the arpeggio pattern (p i m a), and the chord-melody approach.\r
- Technique: pluck with the fleshy part of the finger, keep the nail short, and let each finger rest on the next string after it plays.\r
\r
Exercise: play p i m a on the open strings E A D G B E in a steady pattern, then play the Travis pattern over a C major chord.\r
\r
## Fretting hand\r
@group Fretting and legato\r
\r
- The thumb sits behind the neck, roughly opposite the middle or index finger. Keep it relaxed; a thumb that clamps the neck causes tension in the whole hand.\r
- Use the fingertips, close to the fret wire, with the fingers arched. Flat fingers mute adjacent strings.\r
- One finger per fret: index 1, middle 2, ring 3, little finger 4. Keep the fingers spread so they can reach their frets without moving the hand.\r
- Fret with enough pressure to make the note sound clean, and no more. Excess force causes sharp or flat notes and fatigue.\r
\r
Exercise: play 1-2-3-4 across frets 1 to 4 on each string, one finger per fret. Keep all four fingers down while you play, and release them one by one.\r
\r
## Hammer-ons and pull-offs\r
@group Fretting and legato\r
\r
- A **hammer-on** sounds a higher note by fretting it firmly without picking. A **pull-off** sounds a lower note by lifting a finger off a fretted note with a slight downward pluck of the finger.\r
- Technique: the hammer-on comes from the fingertip hitting the string, close to the fret. The pull-off is a snap of the fingertip sideways and downward, not a lift upward.\r
- Power: a strong hammer-on needs real force; a weak one is inaudible. Practice both at a volume you can hear clearly.\r
\r
Exercise: play the pattern 5 (pick), hammer 7, pull-off 5, on each string, slowly, then speed it up. The phrase should be evenly loud.\r
\r
## Trills\r
@group Fretting and legato\r
\r
- A **trill** alternates rapidly between two adjacent notes using hammer-ons and pull-offs, with one pick at the start.\r
- Example: frets 5 and 6 on string 3, using fingers 1 and 2 (or 3 and 4). Pick the first note, then alternate hammer and pull for the length of the note.\r
- Speed comes from the fingertips, not the wrist. Keep the fingers close to the fret.\r
\r
Exercise: trill frets 5 and 6 for four beats, then eight beats, then sixteen. Increase the length and the speed.\r
\r
## Slides\r
@group Fretting and legato\r
\r
- A **slide** moves the fretting finger along the string from one fret to another, with the note sounding continuously. Pick the first note and slide to the target fret.\r
- Types: legato slide (no pick on the second note), shift slide (pick on both notes), and a slide into a note from below.\r
- Practice the slide with a steady pressure, and keep the note in tune at the end.\r
\r
Exercise: slide from fret 5 to fret 7 on the B string, picking only the first note. Then pick both notes and compare.\r
\r
## Bends\r
@group Fretting and legato\r
\r
- A **bend** raises the pitch of a fretted note by pushing the string sideways or up. A full bend is roughly a whole tone (two semitones); a half bend is about a semitone.\r
- Technique: use the strongest fingers (ring finger, or the middle and ring together). Push with the fingertip from the side of the string, not the top.\r
- Check the bend against a reference note: bend fret 7 on the G string toward the note played on fret 9 of the same string, and match the pitch by ear.\r
- Release: bring the string back down smoothly to the original note. Practise bends and releases with a tuner.\r
- **Pre-bend**: bend the string before picking, then pick and release to the target note.\r
- **Unison bend**: bend a note on one string to match the pitch of an open or fretted note on the next string. Common in rock and blues.\r
\r
Exercise: bend the G string at fret 7 up a whole step, holding for two beats, then release. Repeat for a half step. Then do a unison bend: bend the G string at fret 5 (C) up a whole step until it matches the B string at fret 3 (D), and check it by ear.\r
\r
## Vibrato\r
@group Fretting and legato\r
\r
- **Vibrato** is the controlled wobble of pitch. Finger vibrato moves the fingertip along the string, wrist vibrato rotates the hand, arm vibrato moves the whole forearm.\r
- Vibrato width is the distance of the pitch change (narrow for jazz, wide for blues and rock). Speed is the number of waves per second.\r
- Practice: play the note, then rock the fingertip along the string at a steady rate. Start slow and steady, then speed up without losing the centre pitch.\r
\r
Exercise: hold a note at fret 7 on the high E string, and produce a steady vibrato for eight beats at 60 BPM, then 120 BPM.\r
\r
## Muting and palm muting\r
@group Muting and harmonics\r
\r
- **Palm muting** rests the side of the picking hand on the strings just before the bridge. The sound is short and percussive. Used in rock and metal riffs.\r
- Left-hand muting: a finger lightly touching the strings you are not playing stops unwanted noise.\r
- Muting is part of the sound. A good palm mute is consistent in pressure and placement.\r
\r
Exercise: play a palm-muted eighth-note riff on string 6 (E, E, G, E, B, E) at 100 BPM. Keep the mute consistent: same place, same pressure.\r
\r
## Pinch harmonics\r
@group Muting and harmonics\r
\r
- A **pinch harmonic** is produced by touching the string lightly with the side of the picking thumb just after the pick strikes it. The thumb damps the fundamental and lets the harmonic ring.\r
- Technique: the pick hits the string with its tip, and the side of the thumb touches the string at the same instant. The result is a bright, squealing tone.\r
- Practice on the open G string first. Without the left hand, just aim for the change in tone.\r
- The thumb contact should be light, not a forceful stop. Move the thumb slightly away from the pick until you find the harmonic.\r
- The sweet spot differs from guitar to guitar. Once you can do it on open strings, move to fretted notes.\r
- Pitch: the harmonic sounds above the fretted note. The exact pitch depends on where the thumb touches the string, so it can be an octave or more above the fretted note. Use a tuner to find the notes you can produce.\r
\r
Exercise: produce a pinch harmonic on the open G string ten times in a row. Then do it on fret 5 and fret 7 of the same string.\r
\r
## Natural harmonics\r
@group Muting and harmonics\r
\r
- A **natural harmonic** is produced by lightly touching the string directly over fret 12, 7 or 5, then picking. The note sounds an octave (fret 12), an octave and a fifth (fret 7), or two octaves (fret 5) above the open string.\r
- Use them for tuning: the harmonic at fret 12 should match the fretted note at fret 12. If they differ, the intonation is off.\r
- Harmonics sound clear and bell-like. Play them in lines by moving the finger between the harmonic points.\r
\r
Exercise: play the natural harmonics at frets 5, 7 and 12 on each string. Name the notes you hear, then check them against the open string.\r
\r
## Artificial harmonics\r
@group Muting and harmonics\r
\r
- An **artificial harmonic** is made by fretting a note with the fretting hand and touching a point 12 frets above with the picking hand's finger or the side of the index finger. The pick then sounds the harmonic.\r
- Technique: pick with the pick, touch lightly with the other finger, and move it along the string to find the harmonic. It sounds cleanly at the 12-fret point above the fretted note.\r
- Use them for melodic harmonics and for pitch shifts.\r
\r
Exercise: fret the note on string 6 at fret 3, touch the string 12 frets above (fret 15), and pick. Name the harmonic. Repeat on other frets.\r
\r
## Tapping\r
@group Fretting and legato\r
\r
{{arpeggio: A minor | Every A minor chord tone: a tapping arpeggio takes a tapped note high on one string and two fretted notes below it.}}\r
\r
- **Tapping** sounds notes by hammering a finger of the picking hand onto a fret, then pulling off or hammering the other hand's fingers.\r
- Two-hand tapping: the fretting hand plays the bass or chords, the picking hand taps the melody. Used in rock and fusion.\r
- Technique: tap with the tip of the middle or index finger of the picking hand, firm and close to the fret. Lift quickly to avoid buzzing. The tapping finger stays on the fretboard.\r
- Single-hand tapping: the picking hand taps and pulls off, the fretting hand holds a chord. Good for arpeggios.\r
- Practice: a three-note pattern (tap 12, pull to 10, pull to 8) on one string. Then add the second finger.\r
\r
Exercise: play the arpeggio of A minor (A C E) using tapping on the 12th fret of strings 1 and 2 with pull-offs. Start at 60 BPM, increase slowly.\r
\r
## Legato and sweep combinations\r
@group Fretting and legato\r
\r
- Combining hammer-ons, pull-offs and slides with alternate picking gives a legato line. Use the picking hand only for the notes that need a fresh attack.\r
- Typical legato lick: pick 5, hammer 7, pull 5, slide 9. The sound flows.\r
\r
Exercise: play a legato lick in A minor pentatonic, picking only every fourth note.\r
\r
## Tremolo picking\r
@group Picking\r
\r
- **Tremolo picking** repeats one note very fast with the pick. Technique: relax the wrist, and let the pick move in a small arc.\r
- Use it for rock and metal sustains and for flamenco.\r
\r
Exercise: tremolo-pick the open G string for eight beats at 120 BPM, then 140 BPM.\r
\r
## Whammy and tremolo bar\r
@group Fretting and legato\r
\r
- A **tremolo bar** (whammy bar) changes the pitch of all the strings. Press and release smoothly. Overuse goes out of tune; keep the movement small.\r
\r
Exercise: play a chord and move the bar gently up and down, returning to the original pitch.\r
\r
## Chord-melody and comping\r
@group Chords and shapes\r
\r
{{chords: Dm7 G7 Cmaj7 | guitar piano | ii–V–I shapes for comping; use Next shape to find voicings that stay in one area of the neck.}}\r
\r
- **Comping** is accompanying: playing chords in the rhythm of the music. Use shell voicings, drop-2 chords or rootless chords so that the bass and the melody have room.\r
- **Chord-melody** plays the melody and the harmony at the same time, with the melody on top. Use the top string for the melody note and the lower strings for the chord.\r
\r
Exercise: play a simple melody (Twinkle Twinkle) with chords underneath: the melody on string 1, the chords on strings 2 to 5.\r
\r
## Progressions on the fretboard\r
@group Styles and progressions\r
\r
The music theory file lists the standard progressions of each style (group **Progression standards**). This topic shows how a guitarist finds them quickly.\r
\r
### Roots on strings 6 and 5\r
\r
- With a root on string 6 at fret n:\r
  - **IV** is on string 5 at the same fret n.\r
  - **V** is on string 5 at fret n + 2.\r
  - **vi** (relative minor) is on string 6 at fret n − 3 (or n + 9).\r
- So I – IV – V is one E-shape barre and two A-shape barres a whole step apart. In G: G at fret 3 (string 6), C at fret 3 (string 5), D at fret 5 (string 5).\r
- This box is the same in every key. It is the guitarist's version of the **Nashville numbers**: think 1 – 4 – 5 – 6, not letter names.\r
\r
{{chords: G C D Em | guitar | The 1–4–5–6 box in G: roots on strings 6 and 5, all within two frets.}}\r
\r
### Circle-of-fifths movement\r
\r
- When roots fall by fifths (ii – V – I, the ragtime progression, "Autumn Leaves"), alternate shapes: root on string 6, then root on string 5, then string 6 again. The hand barely moves.\r
- Example in C: Dm7 (root string 5, fret 5) – G7 (root string 6, fret 3) – Cmaj7 (root string 5, fret 3).\r
- With drop-2 voicings on strings 4–1, every chord of a cycle can be reached within two frets.\r
\r
{{chords: Dm7 G7 Cmaj7 | guitar | Use Next shape to find Dm7, G7 and Cmaj7 with roots on strings 5, 6 and 5.}}\r
\r
{{chords: E7 A7 D7 G7 C | guitar | A full cycle of fifths to practise alternating string 6 and string 5 roots.}}\r
\r
### Open-string keys\r
\r
- Many styles are built around open strings:\r
  - Rock, country, folk and bluegrass favour **E, A, D and G**, where the open strings ring as roots and drones.\r
  - Flamenco uses the **E position** (por arriba) and **A position** (por medio), and a capo to change pitch without changing shapes.\r
  - Celtic accompanists often retune to **DADGAD**, so open strings make drones in D.\r
- A **capo** turns any open-string progression into another key with the same shapes: C – Am – F – G with a capo at fret 2 sounds as D – Bm – G – A.\r
\r
Example: the Mixolydian rock progression I – ♭VII – IV – I in D is D – C – G – D, all open chords.\r
\r
Exercise: play I – IV – V – vi in G, C, D and A using only the string 6 / string 5 box. Say the numbers aloud, not the letters.\r
\r
Exercise: play the "Autumn Leaves" cycle (Cm7 – F7 – B♭maj7 – E♭maj7 – Am7♭5 – D7♭9 – Gm) alternating string 5 and string 6 roots, without moving more than three frets.\r
\r
Sources: the music theory file, **Progression standards** group; Wikipedia, [Nashville Number System](https://en.wikipedia.org/wiki/Nashville_Number_System); Moore, [The Flamenco Key](https://pages.ucsd.edu/~moore/solbul.pdf) (positions); [Slow Players, modes and keys](https://slowplayers.org/modes-keys/) (DADGAD).\r
\r
## Blues guitar: inflections and positions\r
@group Styles and progressions\r
\r
### String inflections\r
\r
- A **string bend** raises a fretted note by pushing the string sideways. Blues players bend most often by a semitone or a whole tone, and sometimes by a tone and a half.\r
- A **bend and release** gives three pitches from one pluck: the note, the bent note, and the note again.\r
- Many blues bends are **between** the equal-tempered notes. One study counts over a hundred inflections in a single period of Lonnie Johnson's recordings, many of them not matching equal temperament.\r
- **The "blue third":** the third of the key, played somewhere between minor and major. Ethnomusicologist Gerhard Kubik describes this "neutral" third as roughly 320 to 360 cents above the root (a minor third is 300, a major third 400). On guitar this is a quarter-tone bend of the minor third.\r
- T-Bone Walker changed his wound G string for a plain one so that he could bend more: an early example of choosing strings for the style.\r
\r
### Positions and motion\r
\r
- The pentatonic boxes are tied to chord shapes. The study maps the scale onto the C, A and G shapes of the CAGED system, each within a four-fret span.\r
- Lonnie Johnson often linked two of these areas by **sliding with the third finger** along one string.\r
- The study's central idea: blues lines come from the **layout of the fretboard and the movements of the hand** as much as from scales. Players develop motives (short figures) for each of the I, IV and V chords and vary them.\r
- The **blue fifth** (♭5) is used sparingly but in an attention-drawing way, which may be why writers have given it so much weight.\r
\r
{{scalemap: A blues 7 | The A blues scale against an A7 chord: R, 5 and ♭7 are chord tones; the grey ♭3 sits a half step below the chord's third (C♯), the note blues players bend toward.}}\r
\r
Example: over A7 in an A blues, bend C (string 3, fret 5) up a quarter tone toward C♯ and release. Over D7, aim for C as the seventh of D7 without bending.\r
\r
Exercise: write one short motive for each chord of a 12-bar blues in A (A7, D7, E7). Play the whole form using only those three motives, varied each time.\r
\r
Exercise: play C on string 3 (fret 5), then bend it slowly from C to C♯ and stop at three points on the way. Sing each pitch. Decide which one sounds most "blue" over an A7 chord.\r
\r
Sources: Nelson, *Melodic Improvisation on a Twelve-Bar Blues Model* thesis (City, University of London), on Lonnie Johnson and T-Bone Walker, citing Kubik (1999); Open Music Theory v2, "Blues Harmony".\r
\r
## Jazz guitar: comping the standard progressions\r
@group Styles and progressions\r
\r
- **Shell voicings** on the low strings: root on string 6 or 5, plus the third and seventh. They outline the harmony and leave room for a pianist or soloist.\r
  - For a ii – V – I in C: Dm7 (D on string 5, F and C above), G7 (G on string 6, F and B), Cmaj7 (C on string 5, E and B).\r
- **Drop-2 voicings** on strings 4–1 or 3–1 for a lighter, higher sound. Keep common tones on the same string and move other voices by step.\r
- **Guide-tone line:** in a ii – V – I, the seventh of each chord falls a half step to the third of the next. Play only those two notes on strings 3 and 2 and listen to the line.\r
- Apply the same shapes to the jazz progressions in the theory file:\r
  - **Turnarounds:** C – A7 – Dm7 – G7, then the tritone version C – E♭7 – Dm7 – D♭7 (the bass moves by half step).\r
  - **Backdoor:** Fm7 – B♭7 – Cmaj7.\r
  - **Minor ii – V:** Dø – G7♭9 – Cm6.\r
  - **"So What":** quartal voicings (stacked fourths) on strings 4–1 over Dm7 and E♭m7.\r
\r
{{chords: Dm7 G7 Cmaj7 | guitar | ii–V–I in C for shell and drop-2 practice.}}\r
\r
{{chords: C Eb7 Dm7 Db7 | guitar | The turnaround with tritone substitutes: a bass line falling by half steps.}}\r
\r
{{chords: Dø G7b9 Cm6 | guitar | The minor ii–V–i in C minor.}}\r
\r
Example: comp a two-bar turnaround in C: Cmaj7 (two beats), A7 (two beats), Dm7 (two beats), G7 (two beats), with each chord short and on beats 2 and 4.\r
\r
Exercise: play the "Autumn Leaves" cycle with shell voicings only, then with drop-2 voicings on strings 4–1. Record both and compare.\r
\r
Sources: Open Music Theory v2, "Jazz Voicings" and "ii–V–I"; the music theory file, **Jazz standard progressions**.\r
\r
## Brazilian guitar: samba, choro and the seven-string\r
@group Styles and progressions\r
\r
### The samba levada\r
\r
- A **levada** is the rhythmic accompaniment pattern played by the guitarist's right hand.\r
- The roles are split, like a percussion section:\r
  - The **thumb** plays the bass notes, in the role of the surdo (bass drum).\r
  - The **fingers** play short block chords on the higher strings, in the rhythm of the tamborim.\r
- The best-known tamborim pattern, called **teleco-teco** by musicians, groups 16 pulses as 2 + 2 + 3 + 2 + 2 + 2 + 3. The name itself is the rhythm: "te-co" is a group of two, "te-le-co" a group of three.\r
- In partido alto, the same pattern appears in the pandeiro, rotated, so guitar and percussion cross and complete each other.\r
- Chord changes are often **anticipated**: they arrive a sixteenth before the bar. In a progression such as F – D7 – Gm – C7, the guitarist's chord pulls fall on the three-pulse groups.\r
\r
{{chords: F D7 Gm C7 | guitar | The progression from the samba levada example.}}\r
\r
### Choro and the seven-string guitar\r
\r
- The **seven-string guitar** adds a low string below the sixth. Traditionally it is tuned to **C**; some players argue for **B**, which continues the fourths between the bass strings. Modern strings make C, B and even A possible.\r
- **Dino Sete Cordas** (from the 1950s–60s) defined the traditional style, with a steel seventh string played with a thumbpick for volume. Later players moved to nylon strings for more tone colour; Raphael Rabello extended the style with solo virtuosity.\r
- **Baixaria** is the bass counter-melody that answers the melody:\r
  - It works as **question and answer** with the soloist.\r
  - It leads the changes between sections and the returns to the A section.\r
  - Some baixarias are fixed by the composer ("baixaria de obrigação") and appear in the score.\r
  - **Slurs** (hammer-ons and pull-offs) are essential: the note is plucked once and the left hand links it to the next.\r
  - Modern players colour baixarias with substitutions, for example an arpeggio of G♭7 (the tritone substitute) before F instead of the diatonic C7.\r
- Choro harmony (diminished passing chords, secondary dominants, I – VI7 – ii – V) is covered in the theory file under **Brazilian standard progressions**.\r
\r
{{chords: C C#o7 Dm7 G7 | guitar | I – ♯I°7 – ii – V, the choro move a baixaria often links.}}\r
\r
### Bossa nova guitar\r
\r
- The guitar moves in **four careful voices**, and many chord choices follow from smooth voice leading rather than from the melody.\r
- Leaving out the third of a chord makes it ambiguous, a sound bossa nova guitarists use on purpose.\r
- The thumb keeps a steady bass on beats 1 and 2 (in 2/4), while the fingers play syncopated chords.\r
\r
Example: a samba levada on F – D7 – Gm – C7: thumb on the root of each chord on the beat, fingers on the top three strings following 2 + 2 + 3 + 2 + 2 + 2 + 3, with each new chord arriving a sixteenth early.\r
\r
Exercise: clap the 2 + 2 + 3 + 2 + 2 + 2 + 3 pattern while saying "te-co te-co te-le-co te-co te-co te-co te-le-co". Then play it with your fingers on one chord, with your thumb on beats 1 and 2.\r
\r
Exercise: write a two-bar baixaria that leads from G7 to C, ending on the C in the bass. Use at least one slur.\r
\r
Sources: Livramento, the guitar in samba (UDESC, Portuguese), for the levada, teleco-teco and partido alto; Borges, the seven-string guitar in choro (UnB, Portuguese), for tuning, strings and baixaria, citing Braga (2004) and Carrilho; Gava, The Harmonic Language of Bossa Nova (UNESP, Portuguese).\r
\r
## Flamenco guitar: positions, compás and right hand\r
@group Styles and progressions\r
\r
### Positions\r
\r
- Flamenco guitarists think in **positions**, not keys. Each position has its own chord shapes and open-string colours; a capo moves it to suit the singer.\r
  - **Por arriba** (E position): Am – G – F – E. The home chord is E major, over a Phrygian scale.\r
  - **Por medio** (A position): Dm – C – B♭ – A.\r
- See **Flamenco harmony** in the theory file for the mode, the Andalusian cadence and the 12-beat compás.\r
\r
{{chords: Am G F E | guitar | The Andalusian cadence por arriba (E position).}}\r
\r
{{chords: Dm C Bb A | guitar | The same cadence por medio (A position).}}\r
\r
### Right-hand techniques\r
\r
- **Rasgueado:** strumming with the fingers, often flicking them out one after another for a rolling burst. Used to accompany song and dance.\r
- **Picado:** single-note runs played with rest strokes, alternating index and middle fingers.\r
- **Tremolo:** the flamenco pattern is p – i – a – m – i (thumb, then four notes on the treble string). The classical tremolo is p – a – m – i, with three treble notes.\r
- **Alzapúa:** a thumb technique that uses down- and up-strokes, thought to come from plectrum playing. Considered one of the hardest techniques.\r
- **Golpe:** tapping the soundboard with a finger, usually on a tap-plate (golpeador) that protects the top.\r
- Many flamenco players support the guitar with the upper right arm at the elbow, which frees the hand for these techniques.\r
\r
Example: in por arriba, rock between E and F with rasgueados on the accents of the compás (3, 6, 8, 10, 12), then play the Andalusian cadence once to close.\r
\r
Exercise: play the flamenco tremolo (p – i – a – m – i) on string 1 over an open E bass, slowly, until all four treble notes are even. Then compare with the classical p – a – m – i.\r
\r
Sources: [Richter Guitar, flamenco techniques and definitions](https://richterguitar.com/flamenco-guitar/flamenco-guitar-techniques-and-definitions/); Wikipedia, [Rasgueado](https://en.wikipedia.org/wiki/Rasgueado) and [Flamenco guitar](https://en.wikipedia.org/wiki/Flamenco_guitar); Moore, [The Flamenco Key](https://pages.ucsd.edu/~moore/solbul.pdf). The techniques are described here only in outline; learning them properly needs a teacher or a dedicated method.\r
\r
## Rhythm guitar across styles\r
@group Styles and progressions\r
\r
How the same few chords change character with the right-hand pattern. Each style's progressions are in the theory file's **Progression standards** group.\r
\r
- **Reggae:** short chords on the off-beats (the skank), usually small triads on the top three or four strings, cut short by releasing the left-hand pressure. Bass and drums carry the beats. Progressions are simple: I – IV, I – IV – V – IV.\r
- **Rock:** power chords and open chords, often on modal progressions such as I – ♭VII – IV (D – C – G) or ♭VI – ♭VII – I (A♭ – B♭ – C).\r
- **Metal:** palm-muted power chords on a low pedal tone, with Aeolian (E5 – C5 – D5), Phrygian (E5 – F5) or tritone (E5 – B♭5) moves.\r
- **Country and bluegrass:** "boom-chick" (bass note on the beat, chord strum after), with alternating bass between root and fifth, on I – IV – V and II7.\r
- **Celtic:** open drones and power chords in DADGAD, with a minor home chord and a major chord a step below (Em – D) for Dorian tunes.\r
- **Salsa and Latin:** guitar parts follow the clave and the piano montuno; see **Afro-Cuban clave and salsa** in the theory file.\r
\r
{{chords: G C D C | guitar | The progression to play in each rhythm style.}}\r
\r
{{chords: E5 F5 | guitar | The Phrygian metal move i – ♭II on power chords.}}\r
\r
Exercise: play G – C – D – C four times, once in each style: reggae skank, rock eighth notes, country boom-chick, and a palm-muted metal version (G5 – C5 – D5 – C5). Keep the tempo the same.\r
\r
Sources: [Guitar World, Bob Marley rhythm styles](https://guitarworld.com/lessons/bob-marley-reggae-rhythm-guitar); [Splice, reggae chord progressions](https://splice.com/blog/reggae-chord-progressions/); Lilja, [Harmonic function and modality in classic heavy metal](https://uis.brage.unit.no/uis-xmlui/handle/11250/3047843); Open Music Theory v2, "Modal Schemas"; [Slow Players, modes and keys](https://slowplayers.org/modes-keys/).\r
\r
## Genre-specific technique\r
@group Genres and practice\r
\r
- **Blues**: bends (half and full), vibrato, the minor pentatonic with the blue note (♭5), call and response, the shuffle rhythm (triplet feel).\r
- **Rock**: power chords, palm muting, pentatonic riffs, double-stop bends, hammer-ons and pull-offs for speed.\r
- **Metal**: gallop picking (down-up-down pattern on fast eighths), palm muting, pinch harmonics, tremolo, down-tuned strings.\r
- **Jazz**: ii–V–I voicings with extensions, the guide-tone (3rd and 7th) line, single-note lines in modes, the chord-melody approach.\r
- **Country**: hybrid picking, bends with the pedal steel feel, the Travis picking pattern, the open chords.\r
- **Flamenco**: rasgueado (fanned strumming with the fingers), tremolo, golpe (tapping the body), Phrygian scales, the Andalusian cadence.\r
- **Fingerstyle folk**: Travis picking, alternate bass patterns, open tunings.\r
\r
For each style's chord progressions and a deeper look at blues, jazz, Brazilian and flamenco guitar, see the **Styles and progressions** group.\r
\r
Exercise: choose one genre above and learn one signature technique, then play a short phrase in that style over a I–IV–V progression in A.\r
\r
## Practice map\r
@group Genres and practice\r
\r
- Name every note on the neck within the first position (frets 0 to 4). Then name the notes on frets 5 to 9, and then 9 to 12.\r
- Play a major scale in one position, then the next. Say each note aloud, and sing the interval to the next.\r
- Practise one triad on every string set, and name the chord tones and their roles.\r
- Use the metronome: start at 60 BPM, increase by 5 when the tempo is clean for a full minute.\r
- Record yourself at each tempo. Listen for uneven volume and buzzing.\r
\r
Sources: the fretboard, shapes and scale patterns are standard guitar references. The pinch harmonic and tapping descriptions were checked against lesson sites (for example [Rockschool pinch harmonics lessons, MusicGurus](https://www.musicgurus.com/courses/rockschool-guitar-online-video-tutorial-grade-6/lessons/pinched-harmonics-rockschool-guitar-grade6) and [Loudwire guitar terms](https://loudwire.com/guitar-terms-every-player-should-know/)).\r
`,or=`# Trumpet\r
\r
Everything specific to the B♭ trumpet: transposition, valves and slides, the harmonic series, embouchure, air, tonguing, range, pedal tones, flexibility, intonation, mutes and practice. Read the music theory file alongside this one, especially the sections on intervals and the harmonic series.\r
\r
How to use this file: read a topic, do its exercise with a tuner and a metronome, and write down what you hear. The **Styles and improvisation** group applies the theory file's progression library to the trumpet: chord symbols in written pitch, a blues practice order, jazz articulation and progression drills. Many trumpet skills are physical, so short daily sessions beat one long one.\r
\r
A note on sources: this file mixes well-established principles with approaches that teachers disagree about. Where that happens, both views are given and marked **(disputed)**. Settle those questions with a method book such as Farkas's *The Art of Brass Playing* or a qualified teacher.\r
\r
## Transposition: written and sounding pitch\r
@group Basics\r
\r
{{notes: C E G | piano | The same chord twice: concert C–E–G, and below it the trumpet's written D–F♯–A, a whole step higher.}}\r
{{notes: D F# A | piano}}\r
\r
- A B♭ trumpet is a transposing instrument. The written note sounds a major second (whole step) lower. Written C sounds B♭; written D sounds C.\r
- Concert pitch is what the listener hears. Written pitch is what the player reads. The app shows concert pitch by default; the "Bb trumpet" option shows written pitch.\r
- A trumpet part is written a major second higher than the concert line. A concert C major part is written in D major for trumpet, so the key signature has two more sharps (or two fewer flats).\r
- Intervals are identical in written and concert pitch, because both notes move by the same amount. This is why the Interval Shift game does not change with the Bb option.\r
\r
Example: a concert line C – E – G – C (C major triad) is written D – F♯ – A – D for the trumpet.\r
\r
Exercise: write a concert C major scale, then write the trumpet part in D major. Check that the intervals between notes are unchanged.\r
\r
## Valves and slides\r
@group Basics\r
\r
- Three piston valves change the length of tubing. Valve 1 lowers the pitch by 2 semitones, valve 2 by 1, valve 3 by 3.\r
- Combinations add the lowerings: 1+2 lowers by 3, 2+3 by 4, 1+3 by 5, 1+2+3 by 6.\r
- Each valve loop has a slide ring: pulling a slide lengthens its tube. The 1st and 3rd slides are the ones used for intonation in most charts. The main tuning slide sets the overall pitch.\r
- A lower-pitched note needs more tube length. The valve loops and the slides are measured in the same unit (the effect of a slide is the same as adding tubing), which is why a slide correction changes every note played with that valve.\r
\r
Exercise: play the open G, then press valve 1 and valve 2 separately, then together. Write down the pitch of each.\r
\r
## The harmonic series and partials\r
@group Basics\r
\r
{{notes: Bb Bb F Bb D F Ab Bb | piano | The pitch classes of the open (no valves) harmonic series: a B♭ major chord plus A♭, the flat seventh partial.}}\r
\r
- A trumpet is a brass instrument with a tube of about 1.47 m. The bore is mostly cylindrical and flares at the bell. The pitch you produce depends on how you buzz your lips and on the tube length the valves select.\r
- Each note is a **partial** of the harmonic series: partial 1 is the fundamental (the pedal), partial 2 is an octave above, partial 3 a fifth above that, and so on. Partial n sounds at n times the fundamental frequency.\r
- With the same valves, changing the lip buzz moves to a different partial. Valves and slides move the whole series.\r
- The harmonics are not equal to equal temperament. Partial 7 is about 31 cents flat of the equal-tempered note, which is why the app's seventh partial is shown as out of tune.\r
\r
Example: with no valves, the partials sound roughly B♭ (fundamental), B♭ (octave), F (fifth), B♭ (two octaves), D (major third above that), F, A♭ (flat), B♭. The notes of a B♭ major chord appear naturally.\r
\r
Exercise: play open partials 2 to 6 (lip slurs, no valves) and tune each one with a tuner. Note which one is most out of tune.\r
\r
## Embouchure: the lip setup\r
@group Embouchure and air\r
\r
- The **embouchure** is the set of lip, jaw and facial muscles that controls the buzz. It is the single most important skill on the trumpet.\r
- Mouthpiece placement: the rim sits on the lips with the upper lip and lower lip sharing the pressure. Many players place more of the mouthpiece on the upper lip; the exact ratio varies from player to player.\r
- Lip aperture: the opening between the lips when they buzz. A smaller aperture gives higher pitch with more resistance; a larger one gives lower pitch and more air.\r
- The corners (the sides of the mouth) hold the embouchure firm. A firm but not tight corner gives the most stable tone.\r
- **Disputed:** whether the lips should be centred on the mouthpiece or placed with more upper lip. Sources disagree. Centred placement is common in many schools; upper-lip placement is also used by many professional players. Choose the setup that gives you a stable, centred tone and a clear attack.\r
\r
Exercise: buzz on the mouthpiece alone, starting with a low, relaxed buzz. Find the most stable buzz at a medium volume, then hold it for 30 seconds. Repeat each day, and do not force the pitch.\r
\r
## Air and breath support\r
@group Embouchure and air\r
\r
- Breath support comes from the diaphragm and the lower abdomen, not the chest or shoulders. Breathe low: the stomach expands and the ribs widen.\r
- Air speed controls pitch as much as the lips do. Faster air moves the note up through the partials; slower air moves it down.\r
- Blow a steady stream of air, not a burst. The pressure should feel supported, not pushed.\r
- Corner breathing: taking a quick breath through the corners of the mouth (the sides) when the lips are on the mouthpiece is a technique used in some schools. It is disputed as a regular practice; try it only if your teacher recommends it.\r
\r
Exercise: breathe in for four counts and out for eight, very slowly, with a hiss. Then play a long tone on one note, aiming for a steady airflow for 20 seconds.\r
\r
## Tonguing and articulation\r
@group Embouchure and air\r
\r
- Tonguing starts a note cleanly. The tongue touches just behind the upper front teeth (the alveolar ridge), then releases to start the buzz.\r
- Syllables: "too", "tah" or "dah" for a normal attack. "Doo" softens the attack; "tu" is clear and fast. Try each to hear the change.\r
- Single tonguing: one stroke per note. Double tonguing ("tu-ku") and triple tonguing ("tu-tu-ku") are used in fast passages. Practise them slowly, with the tongue returning to the same place each time.\r
- Legato means the tongue barely interrupts the airflow. Slurs are played with no tonguing between notes.\r
- **Disputed:** the tongue position for high and low notes. Some sources describe the tongue arched high (a closer "ee" shape) for higher notes and a lower "ah" shape for low notes, and say the tip strikes behind the top teeth for high register. Other teachers describe the tongue as staying at the same position, moving only the air and lips. Try both on your instrument and keep what gives the cleaner sound.\r
\r
Exercise: play one note eight times, tonguing each time with "tu" at the same tempo. Then do the same with "du", then "ta". Listen for the clearest attack.\r
\r
## Range: low, middle and high\r
@group Range and tone\r
\r
- Practical range for most players runs from about F♯3 (written, sounding E3) to about C6 (written, sounding B♭5). The app's range covers concert B♭1 to C6.\r
- **Low register** (roughly the pedal up to the first partials): the lips are relaxed and vibrate more, the air moves slowly and steadily, and the mouthpiece pressure is light. Low notes need air more than pressure.\r
- **Middle register** (about the staff range): the most common playing area. The balance of air and lip tension is at its most efficient here.\r
- **High register** (above the staff): higher partials need more lip compression and faster air. Teachers describe lip compression as squeezing the lips together, not pushing the mouthpiece harder into the face. Excess mouthpiece pressure makes the lips tire quickly.\r
- **Disputed:** the pivot. Some players move the trumpet slightly as they go up (bell moving down), which changes the angle of the lips on the mouthpiece. Others say the pivot should be kept small or avoided. Test with a mirror and a tuner.\r
\r
Exercise: play a single slur from middle C upwards in half steps as high as you can keep a clean tone, with a fast, supported air stream. Stop when the tone breaks. Each day, aim for one extra note; never force it.\r
\r
## Pedal tones\r
@group Range and tone\r
\r
- A **pedal tone** is a fundamental (partial 1) played with the valves. Pedals sit in the bottom of the register.\r
- **Disputed:** their value for range. One view holds that pedals help set a good lip position and help build a stable embouchure. A counter view notes that many pedal players let their lips roll out and that pedals alone do not build the muscles needed for the high register.\r
- Practical routine most teachers accept: play pedals softly, with a relaxed embouchure and steady air, for short sessions. Then return to the middle register with the same setup.\r
- Pedal tones are played with the valves shown in the app's fingering charts: the pedal is the lowest note of each combination.\r
\r
Exercise: play the pedal B♭ (no valves, soft), then the pedal with valve 2 (A), then valves 1+2 (G). Use a tuner. Hold each for four beats.\r
\r
## Lip slurs\r
@group Range and tone\r
\r
- A **lip slur** changes partial without changing valves. The lips alone move the pitch up or down the harmonic series.\r
- Slur exercise: play open partials 2 to 6 in one slurred phrase, then back down. Keep the air steady and the tone even.\r
- Lip slurs train the embouchure's flexibility and help you hear the harmonic series.\r
\r
Exercise: slur from the open B♭ up to the octave and back, then add valves to shift the whole pattern to other keys (press valves 1+2 for G, valve 2 for A, and so on).\r
\r
## Valve combinations and fingering alternatives\r
@group Fingerings and effects\r
\r
- Many notes have several valve combinations, each with a different tuning. The conventional fingering is the one most in tune without slide help.\r
- Combinations 1+3 and 1+2+3 are the most out of tune; they often need the 1st and 3rd slides. Learn your own corrections.\r
- Alternative fingerings: a note can be played with an open valve on a higher partial, or with valves on a lower partial. The two may differ in tone colour and tuning.\r
- The app's Scale Fingering Chart lists the alternatives for each note in a scale. Pentatonic notes can be outlined to find the common fingerings.\r
\r
Exercise: choose one note (for example the D). Play it on every partial and valve combination that produces it, and rank them by tuning and ease.\r
\r
## Half valves, trills and valve effects\r
@group Fingerings and effects\r
\r
- **Half valve** (or half-valve) technique: the valve is pressed partway. It can change tuning and tone colour, and is used for special effects (a "shake" or a bent note). Keep the valve controlled, not loose.\r
- **Valve trill**: alternate two valve combinations quickly, for example open and valve 1 (a whole step between them), or valves 2 and 1+2. Press with the fingers, not the wrist.\r
- Fall (the note drops in pitch as the air slows) and doit (the note rises at the end): used as expressive ends. Practise by slowing the air and lowering the lips, or by raising the air speed.\r
\r
Exercise: trill open and valve 2 (a semitone apart) for eight beats, then valve 1 and open (a whole step) for eight beats. Keep the trill even and in tune.\r
\r
## Flutter tongue, growl and effects\r
@group Fingerings and effects\r
\r
- **Flutter tongue**: the tongue rolls or vibrates as the air passes, producing a rough, fluttering sound. Practice by saying "rrr" into the mouthpiece with a steady air stream.\r
- **Growl** (singing and buzzing): sing a note while playing it. The effect is a split sound, used in jazz and contemporary music.\r
- **Mutes**: straight mute (sharper, quieter, slightly sharp in pitch), cup mute (softer, warmer), harmon mute (nasal, classic jazz). A mute changes the tuning, so adjust the slides and listen again.\r
\r
Exercise: play one note with a straight mute, then with a cup mute, then with a harmon. Tune each with the tuner and note the slide change needed.\r
\r
## Dynamics and articulation control\r
@group Range and tone\r
\r
- Louder playing needs faster air and a firm but relaxed embouchure, not more mouthpiece pressure.\r
- Softer playing needs slow, steady air and a smaller aperture. Avoid letting the lips collapse.\r
- Crescendo and diminuendo: change the air speed smoothly. Practice by holding a long note and varying the dynamic over eight beats.\r
\r
Exercise: play a long note from pianissimo to fortissimo over eight beats, then back to pianissimo. Keep the pitch stable throughout.\r
\r
## Intonation and tuning\r
@group Intonation and practice\r
\r
{{notes: Bb C D Eb F G A | piano | The concert B♭ major scale to check note by note with a tuner.}}\r
\r
- Intonation is measured in cents from equal temperament. A note 20 cents sharp is audible; 50 cents is a quarter of a semitone and clearly wrong.\r
- Most intonation problems come from valve combinations, not from the lips. Pull a slide to make a note flatter, push it in to make it sharper.\r
- Use a tuner in practice. Play a long tone, adjust the slide only for the valves that need it, then check the whole range.\r
- Good intonation also depends on air speed: a note played too softly often goes flat.\r
\r
Exercise: play a B♭ major scale with a tuner, noting each note's cents deviation. Correct only the notes outside 10 cents, then play it again.\r
\r
## Practice routine: warm-up, long tones, flexibility\r
@group Intonation and practice\r
\r
- Warm-up (5 minutes): breathe, buzz on the mouthpiece, play long tones on the middle register, then slur from low to high.\r
- Long tones (10 minutes): hold each note of a scale for eight beats, steady and in tune. Vary the dynamic.\r
- Flexibility (10 minutes): lip slurs between partials, then lip slurs with valves.\r
- Technique (15 minutes): scales in all keys, articulation patterns, one register study.\r
- Repertoire (rest of session): the music you need for your playing.\r
- Rest: take two minutes between sections. Stop before the lips tire; fatigue causes bad habits.\r
\r
Exercise: write your own 40-minute routine using the sections above. Keep it for two weeks, then review what improved.\r
\r
## Common problems and fixes\r
@group Intonation and practice\r
\r
- Lips tire quickly: check mouthpiece pressure (too much), check air (too little), and rest more often.\r
- Notes are flat in the high register: increase air speed; do not push the mouthpiece in.\r
- Notes crack when you move between registers: practise the slur across the break slowly, with a steady air stream.\r
- Sharp in the low register: check the air, which may be too fast; relax the lips.\r
- Buzzing on the mouthpiece is unstable: check the embouchure setup in a mirror; relax the corners.\r
\r
Exercise: record yourself on a scale, then name one problem in the recording and work on it for five minutes each day.\r
\r
## Ear training for trumpet\r
@group Intonation and practice\r
\r
- Identify intervals by the lip and valve shape: a major third and a minor third feel different in the embouchure as well as the ear.\r
- Sing before you play: sing each note of a scale before playing it, then check.\r
- Use the Interval Shift game in the app to practise intervals from a given fingering.\r
\r
Exercise: play a random note, sing the note a perfect fifth above, then play it. Check by tuner.\r
\r
## Reading chord symbols on B♭ trumpet\r
@group Styles and improvisation\r
\r
- Chord symbols on a trumpet part are transposed like the notes: **up a whole step** from concert pitch. A concert F7 is written G7.\r
- Rhythm-section players read concert pitch, so check which version a chart shows before you improvise.\r
- Common jazz keys and what the trumpet reads:\r
  - Concert F → written G.\r
  - Concert B♭ → written C.\r
  - Concert E♭ → written F.\r
  - Concert C → written D.\r
- The Roman numerals do not change. A concert ii – V – I in B♭ (Cm7 – F7 – B♭maj7) is written Dm7 – G7 – Cmaj7, still ii – V – I.\r
\r
### The blues in written pitch\r
\r
- **Basic blues, concert F, written G:** G7 (4 bars) | C7 (2) | G7 (2) | D7 | C7 | G7 | D7.\r
- **Jazz blues, written G:** G7 | C7 | G7 | G7 | C7 | C7 | G7 | G7 | Am7 | D7 | G7 E7 | Am7 D7. Some players use Bm7 (iii) instead of G7 in bar 11.\r
- **Bird blues** (Charlie Parker's "Blues for Alice"), written G: it opens Gmaj7 | F♯ø B7 | Em7 A7 | Dm7 G7 | C7 …, a chain of ii – Vs that still reaches IV (C7) in bar 5 and ends like the jazz blues.\r
\r
{{chords: G7 C7 D7 | piano | The three chords of the blues in written G (concert F).}}\r
\r
### Other standard progressions, written\r
\r
- **Rhythm changes,** concert B♭, written C: C – A7 – Dm7 – G7 (A sections), E7 – A7 – D7 – G7 (bridge).\r
- **Minor ii – V – i,** concert G minor, written A minor: Bø – E7♭9 – Am.\r
- **Andalusian cadence,** concert A minor, written B minor: Bm – A – G – F♯.\r
\r
Exercise: write out a concert F jazz blues in written pitch, bar by bar. Then do the same for concert B♭ (written C).\r
\r
Sources: Jazz Theory (MTC130), "The Blues" and "The Blues: Improv Strategies" (B♭ instrument editions); the music theory file, **The blues** and **Jazz standard progressions**.\r
\r
## Improvising on the blues: a trumpet practice order\r
@group Styles and improvisation\r
\r
This order comes from the course handouts for B♭ instruments. Concert F blues = **written G blues**.\r
\r
1. **Minor pentatonic** of the written key over the whole form: G B♭ C D F.\r
2. **Triads** of each chord (G, C, D), in different inversions. Improvise with triad notes only.\r
3. **Four-note arpeggios** (1 3 5 7): up, down, and up one chord, down the next.\r
4. **Guide tones:** the third and seventh of each chord, connected chord to chord.\r
   - G7: B and F. C7: E and B♭. D7: F♯ and C. Am7: C and G.\r
   - From G7 to C7, the seventh F falls a half step to the third E; the third B falls a half step to B♭, the seventh of C7.\r
5. **Chord scales:** Mixolydian on the dominant chords, Dorian on the minor chords.\r
6. **Connect the guide tones** with scale notes in between, by half step where possible. Write out your own solos this way.\r
\r
{{scale: G blues | piano | The written G blues scale (concert F blues).}}\r
\r
### Building blocks to practise every day\r
\r
From *A Guide to Exploring Jazz Improvisation*, which is written for any instrument:\r
- **Scales:** all twelve major scales, plus Dorian and Mixolydian, at quarter note = 92 or slower. Cycle through keys in different orders (round the circle, by half step, by whole step).\r
- **Triads:** 1 3 5 up through the keys in half steps, then 5 3 1, then alternating up and down, then spaced in whole steps and in fourths. Then minor, diminished and augmented, then seventh chords.\r
- **Intervals:** one interval a week, from minor thirds up to major sevenths, moved through the keys.\r
- **Rhythm:** off-beats; groups of four or five eighth notes followed by an eighth rest (so the pattern moves across the beat); triplets. Apply each rhythm to scales and triads, then to a tune.\r
\r
Example: over written G7 – C7, play the line D – E – F (G7) then E (C7): the last note of G7 is its seventh, falling by half step to the third of C7.\r
\r
Exercise: play a whole written G blues using only guide tones as long notes. Then fill the gaps with scale notes, keeping the guide tones on beat 1 of each bar.\r
\r
Sources: Jazz Theory (MTC130), "The Blues: Improv Strategies" (B♭ trumpet edition); Kelly, Rasmussen and Roberts, *A Guide to Exploring Jazz Improvisation, Book 1* (CC BY 4.0).\r
\r
## Jazz articulation and swing on trumpet\r
@group Styles and improvisation\r
\r
- Jazz articulation is lighter and more legato than classical. Teachers often replace the classical "ta" with a softer **"da"** or **"doo"**.\r
- A common set of syllables (conventions differ between teachers):\r
  - **"Doo":** long notes on the beat.\r
  - **"Dah":** accented long notes, on or off the beat.\r
  - **"Dn"** (or "nn"): **ghost notes**, swallowed so they are barely heard.\r
- Swing eighths are played long–short (roughly 2:1, see **Rhythm and meter** in the theory file). Many teachers say the special jazz articulation rules apply **only to eighth notes**.\r
- A widely taught habit: tongue the off-beat eighths and slur into the next on-beat, so the off-beats are lightly accented. This gives the line its swing.\r
- Lead trumpeter Mike Lovatt teaches using a soft "d" tongue to accent notes inside a legato line, rather than slurring everything.\r
- Dynamics move constantly inside a phrase; jazz phrasing is shaped by small changes of volume.\r
- Expressive effects (falls, doits, shakes, growl, mutes) are covered in **Half valves, trills and valve effects** and **Flutter tongue, growl and effects**.\r
\r
Example: a swung written-G scale: G (doo) A (dah, tongued off-beat) slurred to B, C (tongued off-beat) slurred to D, and so on, with every off-beat slightly accented.\r
\r
Exercise: play a written G major scale in swung eighths three ways: all tongued, all slurred, then tonguing the off-beats and slurring to the on-beats. Record all three and listen for which one swings.\r
\r
Sources: Florida Bandmasters Association, [How to "Doo-Dit": classical vs jazz articulation](https://fba.flmusiced.org/media/2648/how-to-doo-dit-classical-vs-jazz-articulation.pdf); [Mike Lovatt, articulation in swing style (MusicGurus)](https://www.musicgurus.com/courses/explore-swing-style-on-the-trumpet-mike-lovatt/lessons/articulation-slinky-swing-style-trumpet-mike-lovatt); [Hickey's jazz method sample](https://www.hickeys.com/samples/094/sku94937.pdf); Open Music Theory v2, "Swing Rhythms". These are teaching materials rather than research, and teachers disagree on the exact syllables.\r
\r
## Playing the progression library on trumpet\r
@group Styles and improvisation\r
\r
A trumpet plays one note at a time, so the way to learn a progression is to **arpeggiate it** and to find a **guide-tone line** through it. All examples are in written pitch.\r
\r
- **Arpeggio drill:** play each chord of the progression as 1 3 5 7, one chord per bar, then 7 5 3 1, then alternate. Keep the time steady.\r
- **Guide-tone drill:** play only the third or seventh of each chord, choosing whichever is closest to the last note.\r
- Progressions to work through (from the theory file's **Progression standards**):\r
  - **ii – V – I:** Dm7 – G7 – Cmaj7. Guide tones F – F – E, C – B – B.\r
  - **Minor ii – V – i:** Bø – E7♭9 – Am. Over E7♭9 use E Phrygian dominant (the fifth mode of A harmonic minor).\r
  - **Turnaround:** C – A7 – Dm7 – G7. The C♯ in A7 leads up to D.\r
  - **Ragtime progression:** E7 – A7 – D7 – G7 – C. Each third falls a half step to the next seventh.\r
  - **Andalusian cadence:** Am – G – F – E (in E Phrygian with G♯ on the last chord).\r
  - **Bossa nova "Ipanema" move:** Cmaj7 – D7 – Dm7 – D♭7. Over D7 play D Lydian dominant (with G♯); over D♭7, aim for C♭ (B) and F, the guide tones shared with G7.\r
- Brass and the harmonic series: arpeggios that sit on one valve combination (for example C – E – G on open valves, written) are the natural starting point; the others need clean valve changes.\r
\r
{{chords: Dm7 G7 Cmaj7 | piano | ii–V–I in written C, for the arpeggio and guide-tone drills.}}\r
\r
{{chords: E7 A7 D7 G7 C | piano | The ragtime progression in written C.}}\r
\r
Example: the guide-tone line through written C – A7 – Dm7 – G7 – C: E (third of C) – C♯ (third of A7) – C (seventh of Dm7) – B (third of G7) – C.\r
\r
Exercise: choose three progressions from the list. Play each one as arpeggios for four choruses, then as a guide-tone line, then improvise using only chord tones on the beat.\r
\r
Sources: the music theory file, **Jazz standard progressions**, **Brazilian standard progressions** and **Flamenco harmony**; Jazz Theory (MTC130) handouts; Kelly, Rasmussen and Roberts, *A Guide to Exploring Jazz Improvisation, Book 1*.\r
\r
## Practice map\r
@group Intonation and practice\r
\r
- Learn the pentatonic fingerings and their slide positions first.\r
- Use the scale fingering chart to learn a major scale in one octave, then extend it.\r
- Play the partials 2 to 6 as lip slurs and tune each one with a tuner.\r
- Practise intervals with the Interval Shift game.\r
- Keep a practice notebook: date, what you played, and one thing that improved.\r
\r
Sources: the transposition, valve lowering and harmonic series are standard, and were checked against web sources ([Transposition for Trumpet, Jade Bultitude](https://jadebultitude.com/transposition-for-trumpet/); [Reading transposing instruments, teoria.com](https://www.teoria.com/en/articles/transposing/02.php)). The embouchure, range, tongue and pedal-tone points were checked against trumpet pedagogy sites, which disagree on several points; those points are marked **(disputed)** above (for example [Trumpet Embouchures, bbtrumpet.com](https://www.bbtrumpet.com/?p=1300) and [Extend Your Trumpet Range with Pedal Tones, bbtrumpet.com](https://www.bbtrumpet.com/?p=1646)). For the core embouchure and range method, Farkas's *The Art of Brass Playing* is the standard reference.\r
`,sr=`# Piano

Everything specific to the piano keyboard: layout, hand position, fingering, touch and tone, pedalling, ornaments, the common accompaniment patterns, chord voicings and inversions, and comping. Read the music theory file alongside this one.

How to use this file: learn the layout and hand position first, then work through the technique sections slowly. The **Styles and progressions** group applies the theory file's progression library to the keyboard: jazz voicings from stride to Bill Evans, choro, salsa montuno, gospel and R&B. Every section has an exercise, and the diagrams show chord shapes on a keyboard.

A note on sources: where experienced teachers disagree, both views are given and marked **(disputed)**.

## Keyboard layout
@group Basics

{{scale: C major | piano | The white keys are exactly the C major scale.}}

- A piano has 88 keys, from A0 to C8. The app's keyboard shows three octaves at a time for exercises.
- An octave is 12 keys: seven white and five black. Black keys come in groups of two and three.
- Each white key is a natural. E and F have no black key between them, and neither do B and C. So E♯ is F and B♯ is C.
- Middle C (C4) sits near the centre of the keyboard, just left of a group of two black keys. It is the reference point for reading the staff.

Exercise: find every C on the keyboard by sight, then play them from the lowest to the highest. Count the octaves between them.

## Hand position and posture
@group Basics

- Sit with the bench at a height where the forearms are roughly level with the keys. Feet flat on the floor, the back upright but relaxed.
- Curve the fingers as if holding a ball. The fingertips touch the keys, not the flat pads.
- Keep the wrist level with the forearm. A raised or dropped wrist causes tension and limits speed.
- The "bridge" of the hand (the knuckles) stays firm and stable; the fingers do the moving.
- Fingers are numbered 1 (thumb) to 5 (little finger) in both hands.

Exercise: play a five-finger pattern (C D E F G) with the hand held still and only the fingers moving. Check that the wrist stays level and the knuckles hold their shape.

## Finger independence
@group Basics

- Independence means one finger can move while the others stay still. It is the basis of all piano technique.
- Exercise: press one key with each finger in turn, while the other fingers rest on their keys. Then play two fingers at once, and vary which ones move.
- Traditional drill books (Hanon's *The Virtuoso Pianist* is the best known) use patterns that build independence through repetition.

Exercise: play a five-finger pattern on C with the fingers 1-2-3-4-5, then 5-4-3-2-1, with each finger lifting only when it must. Repeat for 10 minutes, slowly.

## Touch and tone
@group Basics

- Tone depends on how the key is pressed, not how hard. Weight comes from the arm, which rests on the keys; the finger shapes the sound.
- **Legato**: each note sounds until the next begins. Use finger-to-finger overlap: the next finger lands before the previous one lifts.
- **Staccato**: short, separated notes. Lift quickly, and keep the wrist loose so the key springs back.
- **Tenuto**: a note held to its full value, slightly emphasised.
- **Portato**: between legato and staccato, each note lightly separated.
- **Accent**: a firm press from the arm, not a stab from the finger.
- Avoid squeezing the keys. Tension in the shoulders and forearm is the main cause of poor tone.

Exercise: play a C major scale in legato, then in staccato, then in portato. Listen to the difference in the sound.

## Scales and fingering
@group Scales and chords

{{scale: C major | piano | C major (white keys only) and B major (five black keys), whose fingering is different.}}
{{scale: B major | piano}}

- C major: right hand 1 2 3 1 2 3 4 5 going up, and 5 4 3 2 1 3 2 1 for the left hand going up.
- The thumb tucks under the hand (or the hand crosses over) at the point where the fingers reach the 3rd or 4th note. Keep the wrist quiet and move the arm so the thumb is ready.
- Most major scales follow the same finger pattern as C major, transposed to the new starting note. The thumb crosses at the same point in both hands.
- Black-key scales (for example E♭ or A major) have their own fingering: the thumb plays on black keys in some scales, and the 3rd finger crosses over. Learn them separately.
- Minor scales use the same patterns as major, with the 3rd note in a different position.

Exercise: play the C major scale hands separately, then together, at a steady tempo. Then play the B major scale, which uses black keys and needs its own fingering. Mark the fingering you chose for every note.

## Arpeggios and broken chords
@group Scales and chords

{{chords: C Dm G7 | piano | Three chords to practise as arpeggios in both hands.}}

- An **arpeggio** plays the notes of a chord one after another. A **broken chord** plays them in a fixed pattern.
- Common fingering for an arpeggio of C major (right hand): 1 3 5 1 3 5 going up, then reversed going down.
- Practise each arpeggio in all keys, then add a fingering pattern: thumb on the root, the other fingers in order.
- Arpeggios make chord inversions easy to hear: the bass note changes, and the shape changes with it.

Exercise: play the C major, D minor and G7 arpeggios in both hands, right hand going up and left hand going down.

## Chord voicings
@group Scales and chords

{{chords: Cmaj7 Dm7 G7 | piano | Three seventh chords to voice: use Next inversion to compare their positions.}}

- **Close voicing**: all notes packed within an octave. Bright and dense.
- **Open voicing**: notes spread across more than an octave. Clearer, more resonant.
- **Drop 2**: take the second-highest note of a close chord and drop it an octave. The most common shape for four-note chords on piano.
- **Spread voicing**: a wide interval in the bass with close notes above. Full and warm in the low register.
- **Doubling**: double the root in both hands for a fuller sound. Double the third only when needed.


Exercise: voice the progression ii–V–I (Dm7 – G7 – Cmaj7) in close position, then in drop-2. Keep the common notes in the same hand and finger.

## Inversions
@group Scales and chords

{{chords: C C/E C/G | piano | C and F in root position, first and second inversion.}}
{{chords: F F/A F/C | piano}}

- **Root position**: the root is the lowest note. Figured bass: no figure, or 5/3.
- **First inversion**: the third is the lowest note. Figured bass: 6. A C major triad in first inversion is E – G – C (E in the bass).
- **Second inversion**: the fifth is the lowest note. Figured bass: 6/4. Second inversion chords often sit before a dominant, because the bass stays on the fifth.
- Chord symbols show the bass with a slash: C/E is first inversion, C/G is second inversion.

Exercise: play each triad (C, F, G, Am) in root, first and second inversion, naming the bass note aloud before each chord.

## Pedalling
@group Pedalling and ornaments

{{chords: C F G C | piano | I – IV – V – I, for practising a pedal change on every chord.}}

- **Sustain pedal** (right pedal): lifts the dampers so the strings ring. It is the most used pedal. Change it with each new harmony to keep the sound clear.
- **Half pedalling**: pressing the pedal partway, so the dampers lightly touch the strings. Used to blend chords while keeping some clarity. Good for a smoothing effect.
- **Pedal changes**: lift the pedal a little before each chord change, then press again after the new chord is played. This avoids blur.
- **Una corda** (soft pedal, left): on a grand piano it shifts the action so the hammers strike fewer strings, changing the tone colour as well as the volume. On an upright, it moves the hammers closer to the strings and works differently.
- **Sostenuto** (middle pedal): on many grand pianos it holds only the notes already pressed when the pedal goes down. On some pianos the middle pedal is a practice pedal that softens the sound instead. Check what your instrument does.

Exercise: play a slow I–IV–V–I progression. Change the sustain pedal with each chord, then try half-pedalling on the same progression. Listen for the difference in clarity.

## Ornaments
@group Pedalling and ornaments

- **Trill**: rapid alternation between a note and the note above, with an even rhythm. Use strong fingers (2-3 or 3-4), with the forearm rotating to drive the trill.
- **Mordent**: a single quick alternation with the note below (or above) the main note, then back. Short and crisp.
- **Turn**: the main note surrounded by the notes above and below it. Four quick notes in a fixed order.
- **Appoggiatura**: a leaning note that takes part of the main note's value and resolves onto it. Used to add tension.
- **Acciaccatura**: a crushed grace note played almost at the same time as the main note, then released at once.
- **Tremolo**: a rapid repetition of a note or chord. Keep the wrist loose and the motion small.

Exercise: play a trill on D and E for eight beats, then a mordent on C, then a turn on G. Each one should sound clear and in time.

## Accompaniment patterns
@group Accompaniment and jazz

- **Alberti bass**: a repeating broken-chord figure in the left hand, root–fifth–third–fifth (for example C–G–E–G). Common in classical music.
- **Stride**: a bass note on the first and third beats (root or fifth), with a chord on the second and fourth. Used in ragtime and jazz.
- **Boogie-woogie**: a walking left-hand pattern, root–sixth–flat seventh–sixth. Fast, rhythmic and repetitive.
- **Block chords**: the notes of a chord played together in both hands. Common in pop and gospel.
- **Rolled chords**: the notes of a chord played quickly from bottom to top. Used to give a chord emphasis.
- **Blues shuffle**: a triplet feel with the root and the fifth alternating in the left hand.

Exercise: play a C major chord with each pattern above, in turn. Hold the chord for eight beats per pattern and keep the tempo steady.

## Comping and jazz voicings
@group Accompaniment and jazz

{{chords: Dm7 G7 Cmaj7 | piano | The ii–V–I to comp with shells and rootless voicings.}}

- **Comping** is accompanying: playing chords in rhythm while leaving space for other players.
- **Shell voicings**: only the third and seventh of the chord, sometimes with the root. Clear and light, used with a bassist. For a G7, the shell is B and F.
- **Rootless voicings**: no root; the bass plays it. The chord is built from the third, fifth, seventh and an extension above. Used in jazz.
- **Upper structures**: a triad played above a different bass note, to create extensions. For example, a D major triad over a C bass gives C9♯11: the D is the 9th and the F♯ is the raised 11th.
- Left-hand voicings are usually lower and simpler. Right-hand voicings sit higher and move more freely.

For the history of these voicings (stride, locked hands, Bud Powell, Bill Evans) and two complete rootless voicing sets, see **Jazz piano: from stride to rootless voicings**.

Exercise: comp a ii–V–I (Dm7 – G7 – Cmaj7) with shell voicings in the left hand and rootless voicings in the right. Keep the chords moving smoothly.

## Voice leading at the keyboard
@group Accompaniment and jazz

{{chords: C Am F G C | piano | I – vi – IV – V – I, to voice-lead with the smallest moves.}}

- Keep common tones in the same voice when moving between chords. A I–IV move often keeps the C in place.
- Move the other voices by step where possible. Whole and half steps are smoother than leaps.
- When the bass moves by a fifth, check that the upper voices move in the opposite direction. Avoid parallel fifths and octaves in the outer voices.

Exercise: write a four-part version of I–vi–IV–V–I in C, where each voice moves by the smallest possible distance.

## Secondary dominants, tritone subs and borrowed chords on the keyboard
@group Accompaniment and jazz

- A secondary dominant is played exactly like the dominant 7th chord it is: A7 is A C♯ E G.
- A tritone substitution changes the dominant chord to the one a tritone away, with the same two inner notes swapped. G7 (G B D F) and D♭7 (D♭ F A♭ B) share the B and F.
- A borrowed chord uses notes from the parallel minor. Fm in C is F A♭ C, the iv chord.

{{chords: G7 Db7 Fm | piano | A secondary dominant, a tritone substitute and a borrowed chord, as keyboard shapes.}}

Exercise: play G7 and D♭7 one after the other, with the same hand position, and listen for the half step to C.

## Progressions at the keyboard
@group Styles and progressions

The music theory file lists the standard progressions of each style (group **Progression standards**). This topic is about playing them well on the piano.

### Split the jobs between the hands

- **Left hand:** the bass, or the bass plus a shell (root and seventh, or root and third).
- **Right hand:** the rest of the chord, the melody, or both.
- Keep the hands out of each other's register: a left hand that sits too high blurs the right; a left-hand chord too low (below about the C an octave below middle C) sounds muddy.

### Voice-lead every progression

- Keep common notes in place and move the others by the smallest step.
- In any chain of roots falling by fifths (ii – V – I, the ragtime progression, "Autumn Leaves"), the seventh of one chord falls a half step to the third of the next. Practise just those two notes in the right hand while the left plays roots.
- In C: Dm7 – G7 – Cmaj7 gives the lines C – B – B (seventh, third, seventh) and F – F – E (third, seventh, third).

{{chords: Dm7 G7 Cmaj7 | piano | The ii–V–I whose guide-tone lines are described above.}}

### Classical schemas at the keyboard

- Eighteenth-century keyboard players learned harmony by playing stock bass lines and adding the upper voices (the **partimento** tradition). The galant schemas in the theory file are exactly those patterns.
- Practise them with the bass in the left hand and the melody plus one inner voice in the right:
  - **Prinner:** bass F – E – D – C, right hand A – G – F – E above it (parallel tenths).
  - **Romanesca:** bass C – B – A – E, chords C – G/B – Am – C/E.
  - **Lament bass:** A – G – F – E in the left hand, chords Am – Em/G – Dm/F – E.

{{chords: F C/E Bdim/D C | piano | The Prinner at the keyboard.}}

{{chords: Am Em/G Dm/F E | piano | The lament bass at the keyboard.}}

Exercise: play I – vi – ii – V – I in all twelve keys with the left hand on roots and the right hand on three-note voicings that move by step.

Exercise: play the Prinner in C, G and F. Keep the right hand a tenth above the left throughout.

Sources: Open Music Theory v2, "Galant Schemas", "The Rule of the Octave" and "Jazz Voicings"; the music theory file, **Progression standards**.

## Jazz piano: from stride to rootless voicings
@group Styles and progressions

The jazz piano trio study traces how the pianist's left hand moved from playing the beat to playing colour.

### Stride and swing left hands

- In **stride**, the left hand plays low notes on beats 1 and 3 and mid-range chords on 2 and 4, while the right hand plays the melody.
- Teacher John Mehegan points out that stride uses a **single note or a tenth** in the bass instead of the octave of ragtime. That makes the left hand lighter and faster.
- Swing-era pianists turned the tenth into a pattern of its own: tenth – chord – tenth – chord, or **streams of tenths** moving in parallel (diatonic or chromatic), sometimes played with the thumb's upper note first ("backward tenths").
- Boogie-woogie, from the blues, uses a repeating walking bass figure in the left hand.

### Locked hands (block chords)

- The melody note is doubled an octave lower, and the notes of the chord are packed between the two, so the whole texture moves in parallel with the melody.
- Pianist **Milt Buckner** created the style around 1942 (with Lionel Hampton). George Shearing made it famous and credited Buckner. Nat King Cole, Bud Powell and Bill Evans all used it.
- Example: for a Cmaj7 under melody note B, play C E G B with B doubled.

### Shells and rootless voicings

- **Bud Powell** reduced the left hand to sparse **shells** (root and third, or root and seventh) and used distinctive four-note voicings; in "Un Poco Loco" he harmonises the melody with a major seventh ♭5 voicing (1 – 3 – ♭5 – 7).
- **Bill Evans** moved the left hand up to just below and above middle C with **four-note rootless voicings**: guide tones (thirds and sevenths) plus colour notes and extensions. They voice-lead smoothly and leave the root to the bassist.
- Two voicing sets for ii – V – I in C (names vary; Mehegan called one of them the "A form"):
  - **Third on the bottom:** Dm9 = F A C E, G13 = F A B E, Cmaj9 = E G B D.
  - **Seventh on the bottom:** Dm9 = C E F A, G13 = B E F A, Cmaj9 = B D E G.
  - Alternating the two sets keeps every voice within a step.
- Opening up these voicings as "drop 2" gives a wider, shimmering sound.

{{notes: F A C E | piano | The notes of the third-on-bottom Dm9 voicing (F A C E); play them as one close group above middle C.}}

{{notes: F A B E | piano | G13 in the same set (F A B E): only C has moved, down to B.}}

{{notes: E G B D | piano | Cmaj9 (E G B D): every voice moves by a step or less.}}

Example: the "Autumn Leaves" cycle (Cm7 – F7 – B♭maj7 – E♭maj7 – Am7♭5 – D7♭9 – Gm) with left-hand rootless voicings alternating third-on-bottom and seventh-on-bottom, right hand playing the melody.

Exercise: play ii – V – I in all twelve keys with both rootless sets. Then play a melody in locked hands over the same progression.

Sources: Muscarella, *The Twentieth Century Jazz Piano Trio* (thesis, University of Évora), citing Mehegan, LaVerne and Billy Taylor; Open Music Theory v2, "Jazz Voicings".

## Choro and Brazilian piano
@group Styles and progressions

### Background

- Choro piano was shaped by two composers, **Ernesto Nazareth** and **Chiquinha Gonzaga**, and by the **pianeiros**: popular pianists who played in shops, cinemas and dance halls and wrote the rhythms of choro down for piano.
- Choro grew from European dances (polka, waltz) mixed with the Cuban **habanera** and Afro-Brazilian syncopation.
- A typical choro is in **rondo form with three sections** (A, B, C). B and C usually change key, and each returns to A.
- The bass line is expressive and active, held in the pianist's left hand, just as the seven-string guitar's baixaria does in a band.

### The four subgenres

- **Waltz:** left hand oom-pah-pah (bass, chord, chord), strongly influenced by Chopin in Nazareth's case.
- **Maxixe:** a lively syncopated dance; its rhythmic cells sit in both hands.
- **Brazilian tango:** a duple-metre dance built on the **habanera rhythm** (in 2/4: dotted eighth, sixteenth, two eighths). It is a cousin of the maxixe, not of the Argentine tango.
- **Choro-samba:** samba rhythm patterns, diminished passing chords and melodic anticipations.

{{chords: C C#o7 Dm7 G7 | piano | The choro-samba move with a diminished passing chord.}}

### Keyboard habits

- Chromatic scales and runs in the left hand under chords in the right (a Nazareth trademark, and hard for pianists trained only in popular styles).
- Diminished passing chords between chords a step apart (C – C♯°7 – Dm7).
- Anticipated chords that arrive just before the beat.

Example: a Brazilian tango left hand in C: C (dotted eighth) – G (sixteenth) – E – G (eighths), with the right hand playing a syncopated melody above.

Exercise: play C – C♯°7 – Dm7 – G7 – C with a habanera left hand, then with a waltz left hand in 3/4, and hear how the same chords change style.

Sources: Farinha, *Choro piano* dissertation (York University), on Nazareth, Gonzaga, the pianeiros and the choro subgenres; Simas, harmony in waltz, choro and samba (UFPE, Portuguese).

## Salsa montuno and Latin piano
@group Styles and progressions

- The **piano montuno** (also called guajeo) is a repeating two-bar figure that outlines the harmony in a syncopated rhythm. It is the piano's main job in salsa.
- It must line up with the **clave**: a montuno written for 3-2 clave starts on the other bar for 2-3. The study analyses a standard montuno in C in both versions.
- With the clave, the montuno makes the downbeat of the 2-side bar as strong as the first downbeat, so the two bars balance.
- The **tumbao** is the bass part, with its anticipated notes; the piano stays above it.
- Common montuno harmonies: I – IV – V – IV (C – F – G – F), ii – V (Dm7 – G7), minor i – iv – V7 (Am – Dm – E7). Pianists often play montunos in octaves in the right hand with chord notes filled in.
- Tango piano (Argentine) is mostly common-practice minor-key harmony; see **Latin progressions** in the theory file.

{{chords: C F G F | piano | The montuno vamp I – IV – V – IV.}}

{{chords: Am Dm E7 | piano | A minor montuno vamp.}}

Example: in 2-3 clave, start the montuno on the bar with two clave notes. Play broken C and F chords on the off-beats of bar one, then G and F in bar two, so a chord change falls just before each downbeat.

Exercise: clap 3-2 son clave with your left hand on your knee and play a two-bar montuno on C – F – G – F with the right. Then switch to 2-3 by starting the montuno on its second bar.

Sources: Bin Md Tarip, *Theoretical Perspectives on Clave in Salsa Music* (University of British Columbia), citing Mauleón's *Salsa Guidebook*; [Piano With Jonny, piano montunos](https://pianowithjonny.com/piano-lessons/piano-montunos-the-complete-guide/).

## Gospel and R&B at the keyboard
@group Styles and progressions

**Source note:** the gospel moves come from teaching sites, not scholarly studies.

- **Bass walk-ups in the left hand:** from I to IV, step through ii and iii (C – D – E – F) with matching right-hand chords (C – Dm7 – Em7 – F). From 2 to 5: D – E – F – F♯ – G under Dm7 – C/E – F – F♯°7 – C/G.
- **7–3–6:** Bø – E7alt – Am7, a minor ii – V into vi, usually followed by Dm7 – G7 – C.
- **Amen endings:** F – C, or F – Fm6 – C.
- **Right-hand triads over left-hand bass:** many gospel and R&B colours are a simple triad over a different bass note (an upper structure). D major over C gives C with ♯11 colour; B♭ over C gives C9sus.
- **R&B and neo-soul:** IVmaj7 – iv6 – I (Cmaj7 – Cm6 – G in G), and ii9 – V13 – Imaj9 with rootless voicings.

{{chords: Dm7 C/E F F#o7 C/G | piano | The gospel walk-up from 2 to 5.}}

{{chords: Bø E7alt Am7 | piano | The 7–3–6.}}

{{chords: Cmaj7 Cm6 G | piano | The minor plagal R&B move (in G).}}

Exercise: play a 3–6–2–5–1 (Em7 – A7 – Dm7 – G7 – C) with right-hand triads over left-hand roots, then insert a 7–3–6 before it and finish with an amen ending.

Sources: [Hear and Play, the 1–4 walk-up](https://www.hearandplay.com/main/classic-1-4-walk-up-chord-progression); [Pianote, gospel piano 101](https://www.pianote.com/blog/gospel-piano-101/); [PianoGroove, gospel progressions](https://www.pianogroove.com/?p=5342); Jiang, R&B harmony (Atlantis Press).

## Accompaniment textures across styles
@group Styles and progressions

The same chords sound like a different style with a different left- and right-hand pattern. These add to **Accompaniment patterns**.

- **Polka:** bass on the beats, short chords on the off-beats ("oom-pah") in 2/4.
- **Reggae:** short chords on the off-beats, with the bass carrying the downbeats. On keyboards the off-beat chord is often played as a quick double stab.
- **Habanera / Brazilian tango:** the habanera rhythm in the left hand (dotted eighth, sixteenth, two eighths).
- **Waltz:** bass on beat 1, chord on beats 2 and 3.
- **Montuno:** a syncopated two-bar figure tied to the clave.
- **Stride:** bass (single note or tenth) on 1 and 3, chord on 2 and 4.
- **Boogie-woogie:** a walking left-hand ostinato on the blues progression.
- **Gospel and pop ballad:** sustained block chords, with octaves in the left hand and the melody on top.

{{chords: G C D C | piano | The progression to play in each texture.}}

Exercise: play G – C – D – C in each texture above. Keep the tempo the same and decide which texture suits which progression from the theory file.

Sources: Hutchinson, *Music Theory for the 21st-Century Classroom*, "Accompanimental Textures" (polka, reggae off-beats); Farinha, choro piano dissertation (habanera, waltz); Muscarella, jazz piano trio thesis (stride, boogie-woogie); Bin Md Tarip, clave in salsa (montuno).

## Pianistic technique: arm weight, wrist and fingers
@group Basics

- Arm weight: let the arm drop into the key. The forearm is heavy; the fingers only guide it.
- Wrist: keep it loose and level for most playing. A slightly raised wrist helps with light notes; a lower wrist with weight helps with loud notes.
- Fingers: the finger pad and tip touch the key. Strong fingers (2, 3, 4) are the ones for most passages.
- Shoulders and neck: relaxed. Tension travels into the hands.

Exercise: play a slow scale and drop the arm for each note in turn. Feel the weight travel from the shoulder to the key.

## Practice routine
@group Practice

- Warm-up (5 minutes): five-finger patterns, slow and even.
- Scales and arpeggios (10 minutes): all keys, with fingering written in.
- Chords and voicings (10 minutes): one voicing type at a time, all keys.
- Technique (10 minutes): one ornament or one pattern.
- Repertoire: the music you need to learn.
- Recording: listen back once a week to check your tone and evenness.

Exercise: write your own 40-minute routine. Keep it for two weeks, then review it.

## Common problems and fixes
@group Practice

- Uneven scales: check the thumb crossing; slow down and mark every fingering.
- Tense hands: check the shoulders and arms; play with a lighter touch and let the arm weight do the work.
- Blurry pedalling: change the pedal with each harmony, and lift it slightly before a change.
- Weak left hand: play the left hand alone, slowly, with a metronome, for five minutes a day.

Exercise: play a short passage that causes trouble, first very slowly, then at speed. Record both and listen.

## Ear training for piano
@group Practice

- Learn to hear the bass note of a chord before the rest. In an inversion, the bass note is the one the ear picks out first.
- Play a short phrase and identify the interval by hand distance before naming it, then check by ear.
- Sing the root and the third of each chord you play. This links the sound to the keyboard shape.
- Use the Build Chord and Chord Inversions exercises in the app to check your shapes against the theory.

Exercise: play a random chord, sing its bass note, then identify its quality. Check with the keyboard.

## Practice map
@group Practice

- Play each triad in root position, first and second inversion, and name the notes aloud.
- Play I–IV–V–I in all twelve keys, using the same voice leading.
- Practise one ornament each day.
- Learn one accompaniment pattern per week, and use it with a real song.

Sources: the layout, fingering, pedal and ornament descriptions are standard keyboard teaching, and were cross-checked against piano pedal references ([Piano pedals, Wikipedia](https://en.wikipedia.org/wiki/Piano_pedals); [Piano pedals explained, flowkey](https://flowkey.com/en/piano-guide/piano-pedals)). The sostenuto pedal is described as it varies between pianos. The inversion conventions follow the figured bass checks in the music theory file.
`,cr={major:[0,2,4,5,7,9,11],ionian:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],aeolian:[0,2,3,5,7,8,10],"harmonic minor":[0,2,3,5,7,8,11],"melodic minor":[0,2,3,5,7,9,11],dorian:[0,2,3,5,7,9,10],phrygian:[0,1,3,5,7,8,10],lydian:[0,2,4,6,7,9,11],mixolydian:[0,2,4,5,7,9,10],locrian:[0,1,3,5,6,8,10],"lydian dominant":[0,2,4,6,7,9,10],altered:[0,1,3,4,6,8,10],"phrygian dominant":[0,1,4,5,7,8,10],"minor pentatonic":[0,3,5,7,10],"major pentatonic":[0,2,4,7,9],blues:[0,3,5,6,7,10],"whole tone":[0,2,4,6,8,10],diminished:[0,2,3,5,6,8,9,11],chromatic:[0,1,2,3,4,5,6,7,8,9,10,11]};function lr(e){let t=e.trim().toLowerCase(),n=/^([a-g](?:#|b|♯|♭)?)\s+(.+)$/.exec(t);if(!n)return null;let r=cn(n[1]),i=n[2].trim(),a=cr[i];return r===null||!a?null:{root:r,name:i,pcs:a.map(e=>(r+e)%12)}}function ur(e){let t=e.trim().split(/\s+/).filter(Boolean),n=t.map(cn);return!t.length||n.some(e=>e===null)?null:{pcs:[...new Set(n)],names:t}}var dr=[{id:`music-theory`,title:`General theory`,text:ir},{id:`guitar`,title:`Guitar`,text:ar},{id:`trumpet`,title:`Trumpet`,text:or},{id:`piano`,title:`Piano`,text:sr}],fr=[`guitar`,`piano`];function pr(e){let t=(e??``).trim().split(/\s+/).filter(Boolean);return t.length?t:fr}var mr=[`major`,`minor`,`diminished`,`augmented`,`maj7`,`7`,`m7`,`m7b5`,`dim7`],hr=e=>({type:`p`,text:`(Unknown diagram: ${e})`});function gr(e){let t=/^\{\{(chords?|scale|notes|circle|triads|voicings|arpeggio|scalemap):(.*)\}\}$/.exec(e.trim());if(!t)return null;let n=t[1],r=t[2].split(`|`).map(e=>e.trim()),i=r[0];if(n===`circle`)return{type:`circle`,description:r[1]||``};if(n===`arpeggio`||n===`scalemap`){let t=i.split(/\s+/),a=t.length>1&&/^[A-G][#b]?$/.test(t[0])?cn(t.shift()):0,o=t.pop();if(!mr.includes(o))return hr(e.trim());let s=r[1]||``;if(n===`arpeggio`)return{type:`arpeggio`,chord:o,root:a,label:`${o} arpeggio`,instruments:[`guitar`],description:s};let c=t.join(` `);return cr[c]?{type:`scalemap`,scale:c,chord:o,root:a,label:`${c} + ${o}`,instruments:[`guitar`],description:s}:hr(e.trim())}if(n===`triads`||n===`voicings`){let[t,n=`close`]=i.split(/\s+/),a=(r[1]??``).split(/\s+/).filter(Boolean).map(Number),o=[`maj7`,`7`,`m7`,`m7b5`,`dim7`].includes(t)?4:3;return mr.includes(t)&&[`close`,`drop2`,`drop3`].includes(n)&&a.length===o&&a.every(e=>e>=1&&e<=6)&&a.every((e,t)=>t===0||e<a[t-1])?{type:`voicings`,chord:t,voicing:n,strings:a,label:`${n===`close`?``:`${n.replace(`drop`,`drop `)} · `}strings ${a.join(`–`)}`,instruments:[`guitar`],description:r[2]||``}:hr(e.trim())}let a=pr(r[1]),o=r[2]||``;if(n.startsWith(`chord`))return{type:`shapes`,items:i.split(/\s+/).filter(Boolean).map(e=>({name:e})),instruments:a,description:o};let s=n===`scale`?lr(i):ur(i);return s?{type:`pitches`,label:n===`scale`?i:s.names.join(` `),pcs:s.pcs,instruments:a,description:o}:hr(e.trim())}function _r(e){let t=/^(Example|Exercise)(?:\s*\d*)?:\s*(.*)$/s.exec(e);return t?{type:`callout`,label:t[1],text:t[2]}:{type:`p`,text:e}}function vr(e){let t=[],n=[],r=null,i=()=>{n.length&&t.push(_r(n.join(` `))),n=[]},a=()=>{r&&t.push(r),r=null};for(let o of e){let e=o.replace(/\s+$/,``);if(!e.trim()){i(),a();continue}if(e.startsWith(`### `)){i(),a(),t.push({type:`h3`,text:e.slice(4).trim()});continue}let s=gr(e);if(s){i(),a(),t.push(s);continue}let c=/^(\s*)- (.*)$/.exec(e),l=/^(\s*)\d+\. (.*)$/.exec(e);if(c||l){i();let e=c??l,t=c?`ul`:`ol`,n=e[1].length>=2;if((!r||r.type!==t)&&(a(),r={type:t,items:[]}),n&&r.items.length){let t=r.items[r.items.length-1];t.children=[...t.children??[],e[2]]}else r.items.push({text:e[2],children:[]});continue}a(),n.push(e.trim())}return i(),a(),t}function yr({id:e,title:t,text:n}){let r=n.split(`
`),i=[],a=null,o=[];for(let e of r)if(!e.startsWith(`# `)){if(e.startsWith(`## `)){a={title:e.slice(3).trim(),group:`Other`,lines:[]},i.push(a);continue}if(a&&a.lines.every(e=>!e.trim())&&e.startsWith(`@group `)){a.group=e.slice(7).trim();continue}(a?a.lines:o).push(e)}return{id:e,title:t,intro:vr(o),topics:i.map(e=>({title:e.title,group:e.group,blocks:vr(e.lines)}))}}var br=dr.map(yr);function xr(e){let t=[],n=/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g,r=0,i;for(;(i=n.exec(e))!==null;){i.index>r&&t.push({kind:`text`,text:e.slice(r,i.index)});let n=i[0];if(n.startsWith(`**`))t.push({kind:`bold`,text:n.slice(2,-2)});else if(n.startsWith("`"))t.push({kind:`code`,text:n.slice(1,-1)});else{let e=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(n);t.push({kind:`link`,text:e[1],href:e[2]})}r=i.index+n.length}return r<e.length&&t.push({kind:`text`,text:e.slice(r)}),t}function Sr(e){return[e.title,...e.blocks.flatMap(e=>e.items?e.items.flatMap(e=>[e.text,...e.children??[]]):e.type===`shapes`?[...e.items.map(e=>e.name),e.description??``]:e.type===`pitches`||[`voicings`,`arpeggio`,`scalemap`].includes(e.type)?[e.label,e.description??``]:[e.text??``])].join(` `).toLowerCase()}var Cr={"":[0,4,7],maj:[0,4,7],m:[0,3,7],aug:[0,4,8],dim:[0,3,6],o:[0,3,6,9],ø:[0,3,6,10],m7b5:[0,3,6,10],5:[0,7],sus4:[0,5,7],add9:[0,4,7,2],6:[0,4,7,9],m6:[0,3,7,9],7:[0,4,7,10],maj7:[0,4,7,11],m7:[0,3,7,10],"7#9":[0,4,7,10,3],"7alt":[0,4,6,10,1,8],"7b9":[0,4,7,10,1],9:[0,4,7,10,2],m9:[0,3,7,10,2],maj9:[0,4,7,11,2],11:[0,4,7,10,2,5],13:[0,4,7,10,2,9]},wr={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Tr(e){let t=/^([A-G])([#b]?)(.*)$/.exec(e.trim());if(!t)return null;let n=(wr[t[1]]+(t[2]===`#`?1:t[2]===`b`?-1:0)+12)%12,r=t[3];return(r===`M`||r===`Δ`)&&(r=``),(r===`M7`||r===`Δ7`)&&(r=`maj7`),(r===`min`||r===`-`)&&(r=`m`),(r===`o`||r===`°`||r===`dim`)&&(r=`dim`),(r===`o7`||r===`°7`||r===`dim7`)&&(r=`o`),(r===`Ø`||r===`ø7`||r===`Ø7`)&&(r=`ø`),(r===`mb5`||r===`m7♭5`||r===`m7-5`)&&(r=`m7b5`),r in Cr?{root:n,quality:r,name:e.trim()}:null}function Er(e){return Cr[e.quality].map(t=>(e.root+t)%12)}var Dr=(()=>{let e=[];for(let t=1;t<64;t+=1){let n=[];for(let e=0;e<6;e+=1)t&1<<e&&n.push(e);n.length>=3&&e.push(n)}return e})();function Or(e,t,n,r=200){let i=new Set(e),a=[...t],o=new Map;for(let e of Dr){let t=e.map(e=>{let t=[];for(let n=0;n<=12;n+=1){let r=j(N(e,n))%12;i.has(r)&&t.push(n)}return t});if(t.some(e=>e.length===0))continue;let r=e[e.length-1]-e[0]+1-e.length,s=6-e.length,c=[],l=i=>{if(i===e.length){let t=c.filter(e=>e>0),i=t.length?Math.max(...t)-Math.min(...t):0;if(i>4)return;let l=e.map((e,t)=>({string:e,fret:c[t],note:N(e,c[t])})),u=new Set(l.map(e=>j(e.note)%12));if(!a.every(e=>u.has(e))||j(l.reduce((e,t)=>j(t.note)<j(e.note)?t:e).note)%12!==n)return;let d=l.map(e=>`${e.string}:${e.fret}`).join(` `),f=i*2+r*3+s*1.5+c.reduce((e,t)=>e+t,0)/10;(!o.has(d)||o.get(d).cost>f)&&o.set(d,{cost:f,positions:l});return}for(let e of t[i])c[i]=e,l(i+1)};l(0)}return[...o.values()].sort((e,t)=>e.cost-t.cost).slice(0,r).map(e=>e.positions)}function kr(e,t){let n=[...new Set(e)],r=48+(t+12)%12,i=[r];return n.forEach(e=>{if(e===t)return;let n=r+(e-t+12)%12;for(;n<=i[i.length-1];)n+=12;i.push(n)}),i}function Ar(e,t=null){let n=Er(e),r=new Set(n);return t!==null&&r.add(t),Or(r,new Set(r),t??e.root,500)}function jr(e,t=null){return kr(Er(e),t??e.root)}var Mr=()=>{},Nr=[`root position`,`1st inversion`,`2nd inversion`,`3rd inversion`,`4th inversion`],Pr=48,Fr=83;function Ir(e){return A[(e%12+12)%12]}function Lr({name:e,instruments:t}){let[n,r]=e.split(`/`),i=Tr(n);if(!i)return(0,x.jsxs)(`p`,{className:`text-sm text-rose-300`,children:[`Unknown chord: `,e]});let a=Er(i),o=r?cn(r):null,s=o!==null&&!a.includes(o),[c,l]=(0,b.useState)(0),[u,d]=(0,b.useState)(()=>o!==null&&a.includes(o)?a.indexOf(o):0),f=s?o:a[u%a.length],p=!s&&a.length>1,m=Nr[u]??`inversion ${u}`,h=t.includes(`guitar`)?Ar(i,f):[],g=h.length?h[c%h.length]:[],_=t.includes(`piano`)?jr(i,f):[];return(0,x.jsxs)(`figure`,{className:`glass-inset p-3`,children:[(0,x.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center justify-between gap-2`,children:[(0,x.jsxs)(`figcaption`,{className:`text-sm font-semibold text-white`,children:[e,(0,x.jsxs)(`span`,{className:`ml-2 text-xs font-normal text-slate-400`,children:[`bass `,Ir(f),s?``:` · ${m}`]})]}),(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[p&&(0,x.jsx)(`button`,{type:`button`,onClick:()=>{d(e=>(e+1)%a.length),l(0)},className:`glass-btn px-3 py-1.5 text-xs font-semibold text-slate-100`,children:`Next inversion`}),t.includes(`guitar`)&&h.length>1&&(0,x.jsxs)(`button`,{type:`button`,onClick:()=>l(e=>e+1),className:`glass-btn px-3 py-1.5 text-xs font-semibold text-slate-100`,children:[`Next shape (`,c%h.length+1,`/`,h.length,`)`]})]})]}),t.includes(`guitar`)&&(g.length?(0,x.jsx)(`div`,{className:`overflow-x-auto overscroll-x-contain`,children:(0,x.jsx)(ze,{rootPosition:null,selectedNotes:g,answerState:`idle`,onToggle:Mr,revealNames:!0,boxPositions:[],validPositions:[],highlightedPosition:null,requiredString:`any`,requiredStrings:[],scalePitchClasses:[],displayScaleDegrees:!1,scaleType:`major`})}):(0,x.jsx)(`p`,{className:`text-xs text-slate-400`,children:`No guitar shape found for this bass within four frets.`})),t.includes(`piano`)&&(0,x.jsx)(`div`,{className:`mt-3`,children:(0,x.jsx)(Dn,{highlightedKeys:new Set(_.map(String)),selectedKeys:new Set(_.map(String)),missedKeys:new Set,answerState:`idle`,onToggle:Mr,revealNames:!0,focusMidi:null,resetKey:`${e}-${f}`})})]})}function Rr({items:e,instruments:t}){return(0,x.jsx)(`div`,{className:`mt-4 space-y-4`,children:e.map((e,n)=>(0,x.jsx)(Lr,{name:e.name,instruments:t},`${n}-${e.name}`))})}function zr({label:e,pcs:t,instruments:n}){let r=new Set(t),i=[];for(let e=Pr;e<=Fr;e+=1)r.has(e%12)&&i.push(e);let a=[];for(let e=0;e<6;e+=1)for(let t=0;t<=12;t+=1){let n=N(e,t);r.has(j(n)%12)&&a.push({string:e,fret:t,note:n})}return(0,x.jsxs)(`figure`,{className:`glass-inset p-3`,children:[(0,x.jsxs)(`figcaption`,{className:`mb-2 text-sm font-semibold text-white`,children:[e,(0,x.jsx)(`span`,{className:`ml-2 text-xs font-normal text-slate-400`,children:t.map(Ir).join(` `)})]}),n.includes(`guitar`)&&(0,x.jsx)(`div`,{className:`overflow-x-auto overscroll-x-contain`,children:(0,x.jsx)(ze,{rootPosition:null,selectedNotes:a,answerState:`idle`,onToggle:Mr,revealNames:!1,boxPositions:[],validPositions:[],highlightedPosition:null,requiredString:`any`,requiredStrings:[],scalePitchClasses:[],displayScaleDegrees:!1,scaleType:`major`})}),n.includes(`piano`)&&(0,x.jsx)(`div`,{className:`mt-3`,children:(0,x.jsx)(Dn,{highlightedKeys:new Set(i.map(String)),selectedKeys:new Set,missedKeys:new Set,answerState:`idle`,onToggle:Mr,revealNames:!1,focusMidi:null,resetKey:e})})]})}var Br=[`C`,`G`,`D`,`A`,`E`,`B`,`F♯ / G♭`,`C♯ / D♭`,`A♭`,`E♭`,`B♭`,`F`],Vr=[`a`,`e`,`b`,`f♯`,`c♯`,`g♯`,`d♯ / e♭`,`b♭`,`f`,`c`,`g`,`d`],Hr=[`0`,`1♯`,`2♯`,`3♯`,`4♯`,`5♯`,`6`,`7♯`,`4♭`,`3♭`,`2♭`,`1♭`],Ur=340,Wr=Ur/2,Gr=128,Kr=80;function qr(e,t){let n=(e*30-90)*(Math.PI/180);return{x:Wr+t*Math.cos(n),y:Wr+t*Math.sin(n)}}function Jr(){return(0,x.jsxs)(`figure`,{className:`glass-inset p-3`,children:[(0,x.jsxs)(`figcaption`,{className:`mb-2 text-sm font-semibold text-white`,children:[`The circle of fifths`,(0,x.jsx)(`span`,{className:`ml-2 text-xs font-normal text-slate-400`,children:`clockwise = up a fifth`})]}),(0,x.jsxs)(`svg`,{viewBox:`0 0 ${Ur} ${Ur}`,role:`img`,"aria-label":`Circle of fifths with major keys outside and relative minors inside`,className:`mx-auto w-full max-w-[340px]`,children:[(0,x.jsx)(`circle`,{cx:Wr,cy:Wr,r:150,fill:`none`,stroke:`rgba(255,255,255,0.12)`,strokeWidth:`1`}),(0,x.jsx)(`circle`,{cx:Wr,cy:Wr,r:56,fill:`none`,stroke:`rgba(255,255,255,0.08)`,strokeWidth:`1`}),Br.map((e,t)=>{let n=qr(t,Gr),r=qr(t,Kr),i=qr(t,150),a=t===0;return(0,x.jsxs)(`g`,{children:[(0,x.jsx)(`line`,{x1:qr(t,56).x,y1:qr(t,56).y,x2:qr(t,150).x,y2:qr(t,150).y,stroke:`rgba(255,255,255,0.06)`}),(0,x.jsx)(`text`,{x:n.x,y:n.y,textAnchor:`middle`,dominantBaseline:`middle`,style:{fill:a?`var(--accent)`:`#f8fafc`},fontSize:`16`,fontWeight:`700`,children:e}),(0,x.jsx)(`text`,{x:r.x,y:r.y,textAnchor:`middle`,dominantBaseline:`middle`,fill:`#cbd5e1`,fontSize:`12`,children:Vr[t]}),(0,x.jsx)(`text`,{x:i.x,y:i.y,textAnchor:`middle`,dominantBaseline:`middle`,fill:`#94a3b8`,fontSize:`10`,children:Hr[t]})]},e)})]}),(0,x.jsx)(`p`,{className:`mt-3 text-xs leading-relaxed text-slate-400`,children:`The small numbers are each key's signature. Sharps grow clockwise from C; flats grow counterclockwise.`})]})}var Yr=()=>{},Xr=15,Zr={major:{intervals:[0,4,7],degrees:[`R`,`3`,`5`],name:`major`,symbol:``},minor:{intervals:[0,3,7],degrees:[`R`,`♭3`,`5`],name:`minor`,symbol:`m`},diminished:{intervals:[0,3,6],degrees:[`R`,`♭3`,`♭5`],name:`diminished`,symbol:`°`},augmented:{intervals:[0,4,8],degrees:[`R`,`3`,`♯5`],name:`augmented`,symbol:`+`},maj7:{intervals:[0,4,7,11],degrees:[`R`,`3`,`5`,`7`],name:`maj7`,symbol:`maj7`},7:{intervals:[0,4,7,10],degrees:[`R`,`3`,`5`,`♭7`],name:`7`,symbol:`7`},m7:{intervals:[0,3,7,10],degrees:[`R`,`♭3`,`5`,`♭7`],name:`m7`,symbol:`m7`},m7b5:{intervals:[0,3,6,10],degrees:[`R`,`♭3`,`♭5`,`♭7`],name:`m7♭5`,symbol:`m7♭5`},dim7:{intervals:[0,3,6,9],degrees:[`R`,`♭3`,`♭5`,`°7`],name:`dim7`,symbol:`°7`}},Qr={close:{label:`close`,order:(e,t)=>Array.from({length:t},(n,r)=>(e+r)%t)},drop2:{label:`drop 2`,order:e=>[e,(e+2)%4,(e+3)%4,(e+1)%4]},drop3:{label:`drop 3`,order:e=>[e,(e+3)%4,(e+1)%4,(e+2)%4]}},$r=[{className:`bg-cyan-400 text-slate-950`,swatch:`bg-cyan-400`},{className:`bg-amber-300 text-slate-950`,swatch:`bg-amber-300`},{className:`bg-fuchsia-300 text-slate-950`,swatch:`bg-fuchsia-300`},{className:`bg-emerald-300 text-slate-950`,swatch:`bg-emerald-300`}],ei=[`Root position`,`1st inversion`,`2nd inversion`,`3rd inversion`],ti=`ring-2 ring-white ring-offset-1 ring-offset-black/60`,ni=`bg-slate-500 text-white ring-1 ring-slate-300/60`,ri=[`R`,`♭2`,`2`,`♭3`,`3`,`4`,`♯4`,`5`,`♭6`,`6`,`♭7`,`7`];function ii(e,t,n,r){let{intervals:i}=Zr[t],a=i.length,o=r.map(e=>e-1),s=o.map(e=>j(N(e,0))),c=(e,t)=>((t-e)%12+12)%12||12,l=[];for(let t=0;t<a;t+=1){let r=Qr[n].order(t,a),u=r.map(t=>(e+i[t])%12);for(let e=0;e<=Xr;e+=1){let n=[s[0]+e];if(n[0]%12!==u[0])continue;for(let e=1;e<u.length;e+=1)n.push(n[e-1]+c(u[e-1],u[e]));let i=n.map((e,t)=>e-s[t]);i.some(e=>e<0||e>Xr)||l.push({inversion:t,positions:i.map((e,t)=>({string:o[t],fret:e,tone:r[t]}))})}}return l}function ai({title:e,subtitle:t,root:n,onRoot:r,showNotes:i,onToggleNotes:a}){return(0,x.jsxs)(`div`,{className:`mb-2 flex flex-wrap items-center justify-between gap-2`,children:[(0,x.jsxs)(`figcaption`,{className:`text-sm font-semibold text-white`,children:[e,t&&(0,x.jsx)(`span`,{className:`ml-2 text-xs font-normal text-slate-400`,children:t})]}),(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,x.jsxs)(`label`,{className:`flex items-center gap-1.5 text-xs text-slate-400`,children:[`Root`,(0,x.jsx)(`select`,{value:n,onChange:e=>r(Number(e.target.value)),className:`field px-2 py-1.5 text-xs`,children:A.map((e,t)=>(0,x.jsx)(`option`,{value:t,children:e},e))})]}),(0,x.jsx)(`button`,{type:`button`,onClick:a,className:`glass-btn px-3 py-1.5 text-xs font-semibold text-slate-100`,children:i?`Show degrees`:`Show notes`})]})]})}function oi({items:e,root:t=!0}){return(0,x.jsxs)(`div`,{className:`mt-2 flex flex-wrap gap-3 text-xs text-slate-300`,children:[e.map(e=>(0,x.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,x.jsx)(`span`,{className:`h-3 w-3 rounded-full ${e.swatch}`,"aria-hidden":`true`}),e.label]},e.label)),t&&(0,x.jsxs)(`span`,{className:`flex items-center gap-1.5`,children:[(0,x.jsx)(`span`,{className:`h-3 w-3 rounded-full bg-slate-500 ${ti}`,"aria-hidden":`true`}),`ring = root`]})]})}function si({markers:e,focusStrings:t=[]}){return(0,x.jsx)(`div`,{className:`overflow-x-auto overscroll-x-contain`,children:(0,x.jsx)(ze,{rootPosition:null,selectedNotes:[],customMarkers:e,answerState:`idle`,onToggle:Yr,revealNames:!0,requiredStrings:t})})}var ci=(e,t)=>A[(e+t)%12];function li({type:e,voicing:t=`close`,strings:n}){let[r,i]=(0,b.useState)(0),[a,o]=(0,b.useState)(!1),{intervals:s,degrees:c,name:l}=Zr[e],u=(0,b.useMemo)(()=>{let i=new Map;return ii(r,e,t,n).forEach(({inversion:e,positions:t})=>{t.forEach(({string:t,fret:n,tone:o})=>{i.set(`${t}-${n}`,{label:a?ci(r,s[o]):c[o],className:`${$r[e].className} ${o===0?ti:``}`})})}),i},[r,e,t,n,a,s,c]),d=ei.slice(0,s.length).map((e,t)=>({label:e,swatch:$r[t].swatch}));return(0,x.jsxs)(`figure`,{className:`glass-inset p-3`,children:[(0,x.jsx)(ai,{title:`${A[r]} ${l}`,subtitle:`${t===`close`?``:`${Qr[t].label} · `}strings ${n.join(`–`)}`,root:r,onRoot:i,showNotes:a,onToggleNotes:()=>o(e=>!e)}),(0,x.jsx)(si,{markers:u,focusStrings:n.map(e=>e-1)}),(0,x.jsx)(oi,{items:d})]})}function ui({type:e,initialRoot:t=0}){let[n,r]=(0,b.useState)(t),[i,a]=(0,b.useState)(!1),{intervals:o,degrees:s,name:c}=Zr[e],l=(0,b.useMemo)(()=>{let e=new Map;return ne.forEach((t,r)=>{for(let t=0;t<=Xr;t+=1){let a=j(N(r,t))%12,c=o.findIndex(e=>(n+e)%12===a);c<0||e.set(`${r}-${t}`,{label:i?ci(n,o[c]):s[c],className:`${$r[c].className} ${c===0?ti:``}`})}}),e},[n,i,o,s]);return(0,x.jsxs)(`figure`,{className:`glass-inset p-3`,children:[(0,x.jsx)(ai,{title:`${A[n]} ${c} arpeggio`,root:n,onRoot:r,showNotes:i,onToggleNotes:()=>a(e=>!e)}),(0,x.jsx)(si,{markers:l}),(0,x.jsx)(oi,{items:s.map((e,t)=>({label:e,swatch:$r[t].swatch})),root:!1})]})}function di({scale:e,chord:t,initialRoot:n=0}){let[r,i]=(0,b.useState)(n),[a,o]=(0,b.useState)(!1),{intervals:s,degrees:c,symbol:l}=Zr[t],u=cr[e],d=(0,b.useMemo)(()=>{let e=new Map;return ne.forEach((t,n)=>{for(let t=0;t<=Xr;t+=1){let i=j(N(n,t))%12,o=(i-r+12)%12;if(!u.includes(o))continue;let l=s.indexOf(o);e.set(`${n}-${t}`,{label:a?A[i]:l>=0?c[l]:ri[o],className:l>=0?`${$r[l].className} ${l===0?ti:``}`:ni})}}),e},[r,a,u,s,c]),f=[...c.map((e,t)=>({label:`chord ${e}`,swatch:$r[t].swatch})),{label:`other scale notes`,swatch:`bg-slate-500 ring-1 ring-slate-300/60`}];return(0,x.jsxs)(`figure`,{className:`glass-inset p-3`,children:[(0,x.jsx)(ai,{title:`${A[r]} ${e}`,subtitle:`chord tones of ${A[r]}${l}`,root:r,onRoot:i,showNotes:a,onToggleNotes:()=>o(e=>!e)}),(0,x.jsx)(si,{markers:d}),(0,x.jsx)(oi,{items:f,root:!1})]})}function fi({text:e}){return xr(e).map((e,t)=>e.kind===`bold`?(0,x.jsx)(`strong`,{className:`font-semibold text-white`,children:e.text},t):e.kind===`code`?(0,x.jsx)(`code`,{className:`rounded-md bg-slate-950/60 px-1.5 py-0.5 text-[0.9em] text-[var(--accent)]`,children:e.text},t):e.kind===`link`?(0,x.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,className:`text-[var(--accent)] underline underline-offset-4`,children:e.text},t):(0,x.jsx)(`span`,{children:e.text},t))}function pi({items:e,ordered:t}){return(0,x.jsx)(t?`ol`:`ul`,{className:`mt-3 space-y-2 text-[15px] leading-relaxed text-slate-300 ${t?`list-decimal pl-6`:`list-none`}`,children:e.map((e,n)=>(0,x.jsxs)(`li`,{className:t?``:`relative pl-5 before:absolute before:left-1 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)]`,children:[(0,x.jsx)(fi,{text:e.text}),e.children?.length>0&&(0,x.jsx)(`ul`,{className:`mt-2 space-y-1.5 border-l border-white/10 pl-4 text-[14px] text-slate-400`,children:e.children.map((e,t)=>(0,x.jsx)(`li`,{className:`relative pl-3 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-slate-500`,children:(0,x.jsx)(fi,{text:e})},t))})]},n))})}function mi({label:e,text:t}){let n=e===`Exercise`;return(0,x.jsxs)(`aside`,{className:`mt-4 rounded-2xl border-l-4 bg-slate-950/40 px-4 py-3 text-[15px] leading-relaxed text-slate-200 ${n?`border-amber-300`:`border-[var(--accent)]`}`,children:[(0,x.jsx)(`p`,{className:`mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${n?`text-amber-200`:`text-[var(--accent)]`}`,children:e}),(0,x.jsx)(`p`,{children:(0,x.jsx)(fi,{text:t})})]})}var hi=e=>e.type===`shapes`?e.items.map(e=>e.name):[e.label];function gi({block:e}){let t;return t=e.type===`shapes`?(0,x.jsx)(Rr,{items:e.items,instruments:e.instruments}):e.type===`voicings`?(0,x.jsx)(`div`,{className:`mt-4`,children:(0,x.jsx)(li,{type:e.chord,voicing:e.voicing,strings:e.strings})}):e.type===`arpeggio`?(0,x.jsx)(`div`,{className:`mt-4`,children:(0,x.jsx)(ui,{type:e.chord,initialRoot:e.root})}):e.type===`scalemap`?(0,x.jsx)(`div`,{className:`mt-4`,children:(0,x.jsx)(di,{scale:e.scale,chord:e.chord,initialRoot:e.root})}):(0,x.jsx)(`div`,{className:`mt-4`,children:(0,x.jsx)(zr,{label:e.label,pcs:e.pcs,instruments:e.instruments})}),(0,x.jsxs)(x.Fragment,{children:[e.description&&(0,x.jsx)(`p`,{className:`mt-4 text-sm leading-relaxed text-slate-300`,children:(0,x.jsx)(fi,{text:e.description})}),t]})}function _i(e){let t=[];return e.forEach(e=>{let n=t[t.length-1];e.description||!n?t.push({description:e.description,labels:[...hi(e)]}):n.labels.push(...hi(e))}),t}function vi({blocks:e}){let[t,n]=(0,b.useState)(!1),[r,i]=L(),a=[...new Set(e.flatMap(e=>e.instruments))],o=e.reduce((e,t)=>e+hi(t).length,0);return(0,x.jsxs)(`div`,{className:`mt-4 rounded-2xl border border-white/10 bg-slate-950/30 p-3`,children:[!t&&(0,x.jsx)(`div`,{className:`mb-3 space-y-2`,children:_i(e).map((e,t)=>(0,x.jsxs)(`div`,{children:[e.description&&(0,x.jsx)(`p`,{className:`text-sm leading-relaxed text-slate-300`,children:(0,x.jsx)(fi,{text:e.description})}),(0,x.jsx)(`div`,{className:`mt-1.5 flex flex-wrap gap-1.5`,children:e.labels.map((e,t)=>(0,x.jsx)(`span`,{className:`rounded-lg bg-white/5 px-2 py-1 text-xs font-medium text-slate-400`,children:e},`${e}-${t}`))})]},t))}),(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>n(e=>!e),"aria-expanded":t,className:`glass-btn shrink-0 px-3 py-1.5 text-xs font-semibold text-slate-100`,children:t?`Hide diagrams`:`Show ${o===1?`diagram`:`${o} diagrams`}`}),(0,x.jsx)(`span`,{className:`text-[11px] uppercase tracking-[0.15em] text-slate-500`,children:a.join(` · `)}),t&&a.includes(`guitar`)&&(0,x.jsx)(`button`,{type:`button`,onClick:()=>i(e=>!e),"aria-pressed":r,className:`glass-btn ml-auto px-3 py-1.5 text-xs font-semibold text-slate-100`,children:r?`Hide fret numbers`:`Show fret numbers`})]}),t&&e.map((e,t)=>(0,x.jsx)(gi,{block:e},t))]})}var yi=[`shapes`,`pitches`,`voicings`,`arpeggio`,`scalemap`],bi=e=>yi.includes(e.type);function xi({blocks:e}){let t=[];return e.forEach(e=>{let n=t[t.length-1];bi(e)&&n?.type===`diagram-group`?n.blocks.push(e):bi(e)?t.push({type:`diagram-group`,blocks:[e]}):t.push(e)}),t.map((e,t)=>e.type===`diagram-group`?(0,x.jsx)(vi,{blocks:e.blocks},t):e.type===`circle`?(0,x.jsxs)(`div`,{children:[e.description&&(0,x.jsx)(`p`,{className:`mt-4 text-sm leading-relaxed text-slate-300`,children:(0,x.jsx)(fi,{text:e.description})}),(0,x.jsx)(Jr,{})]},t):e.type===`h3`?(0,x.jsxs)(`h3`,{className:`mt-7 flex items-center gap-3 text-[17px] font-semibold text-white first:mt-0`,children:[(0,x.jsx)(`span`,{className:`h-5 w-1 rounded-full bg-[var(--accent)]`,"aria-hidden":`true`}),e.text]},t):e.type===`callout`?(0,x.jsx)(mi,{label:e.label,text:e.text},t):e.type===`p`?(0,x.jsx)(`p`,{className:`mt-3 text-[15px] leading-relaxed text-slate-300`,children:(0,x.jsx)(fi,{text:e.text})},t):(0,x.jsx)(pi,{items:e.items,ordered:e.type===`ol`},t))}function Si(){let[e,t]=(0,b.useState)(br[0].id),[n,r]=(0,b.useState)(null),[i,a]=(0,b.useState)(``),o=br.find(t=>t.id===e),s=i.trim().toLowerCase(),c=(0,b.useMemo)(()=>o.topics.map((e,t)=>({topic:e,index:t})).filter(({topic:e})=>!s||Sr(e).includes(s)),[o,s]),l=(0,b.useMemo)(()=>{let e=[],t=new Map;return c.forEach(n=>{let r=n.topic.group??`Other`;t.has(r)||(t.set(r,[]),e.push(r)),t.get(r).push(n)}),e.map(e=>({name:e,items:t.get(e)}))},[c]);if(n!==null){let e=o.topics[n];return(0,x.jsxs)(`article`,{className:`space-y-4`,children:[(0,x.jsxs)(`button`,{type:`button`,onClick:()=>r(null),className:`glass-btn px-4 py-2.5 text-sm font-semibold text-slate-100`,children:[`← Back to `,o.title]}),(0,x.jsxs)(`section`,{className:`glass p-5 md:p-8`,children:[(0,x.jsxs)(`p`,{className:`text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]`,children:[o.title,e.group?` · ${e.group}`:``]}),(0,x.jsx)(`h2`,{className:`mt-1 text-2xl font-bold text-white`,children:e.title}),(0,x.jsx)(`div`,{className:`mt-2 border-t border-white/10 pt-2`,children:(0,x.jsx)(xi,{blocks:e.blocks})})]})]})}return(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`section`,{className:`glass p-4`,children:[(0,x.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:br.map(n=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>{t(n.id),a(``)},"aria-pressed":e===n.id,className:`glass-btn px-4 py-2.5 text-sm font-semibold text-slate-100`,children:n.title},n.id))}),(0,x.jsx)(`input`,{type:`search`,value:i,onChange:e=>a(e.target.value),placeholder:`Search ${o.title.toLowerCase()} topics`,"aria-label":`Search topics`,className:`field mt-3 w-full px-4 py-3 text-sm`})]}),!s&&o.intro.length>0&&(0,x.jsx)(`section`,{className:`glass p-5`,children:(0,x.jsx)(xi,{blocks:o.intro})}),c.length===0&&(0,x.jsxs)(`p`,{className:`glass p-5 text-sm text-slate-300`,children:[`No topic matches “`,i,`”.`]}),l.map(e=>(0,x.jsxs)(`section`,{className:`space-y-2`,children:[(0,x.jsx)(`h2`,{className:`px-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]`,children:e.name}),(0,x.jsx)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:e.items.map(({topic:e,index:t})=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>r(t),className:`glass-btn px-4 py-4 text-left text-sm font-semibold text-slate-100`,children:e.title},e.title))})]},e.name))]})}var Ci=[{id:`major`,label:`Major`,third:4,fifth:7},{id:`minor`,label:`Minor`,third:3,fifth:7},{id:`dim`,label:`Diminished`,third:3,fifth:6},{id:`aug`,label:`Augmented`,third:4,fifth:8},{id:`sus2`,label:`Sus2`,third:2,fifth:7},{id:`sus4`,label:`Sus4`,third:5,fifth:7},{id:`power`,label:`Power (5)`,third:null,fifth:7}],wi=[{id:`none`,label:`None`,offset:null},{id:`b7`,label:`♭7`,offset:10},{id:`maj7`,label:`maj7`,offset:11},{id:`dim7`,label:`dim7`,offset:9}],Ti=[[[0,4,7],``],[[0,3,7],`m`],[[0,3,6],`dim`],[[0,4,8],`aug`],[[0,2,7],`sus2`],[[0,5,7],`sus4`],[[0,7],`5`],[[0,4,7,9],`6`],[[0,3,7,9],`m6`],[[0,4,7,10],`7`],[[0,3,7,10],`m7`],[[0,4,7,11],`maj7`],[[0,3,7,11],`mMaj7`],[[0,3,6,10],`m7♭5`],[[0,3,6,9],`dim7`],[[0,4,8,10],`7♯5`],[[0,2,4,7],`add9`],[[0,2,3,7],`m add9`],[[0,2,4,7,10],`9`],[[0,2,3,7,10],`m9`],[[0,2,4,7,11],`maj9`],[[0,1,4,7,10],`7♭9`],[[0,3,4,7,10],`7♯9`]],Ei=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]);function Di(e,t){return[...new Set(e.map(e=>((e-t)%12+12)%12))].sort((e,t)=>e-t)}function Oi(e,t,n){let r=[],i=[...new Set(e)];for(let e of i){let n=Di(i,e),a=null,o=Ti.find(([e])=>Ei(e,n));if(o&&(a=o[1]),a===null&&n.includes(7)){let e=n.filter(e=>e!==7),t=Ti.find(([t])=>Ei(t,e));t&&(a=`${t[1]}(no5)`)}if(a===null)continue;let s=t!==null&&t!==e?`/${A[t]}`:``;r.push({root:e,name:`${A[e]}${a}${s}`})}return r.sort((e,t)=>e.root===n?-1:+(t.root===n)),r}function ki(e){let t=Ci.find(t=>t.id===e.colour),n=[0];t.third!==null&&n.push(t.third),(e.fifth||t.id===`power`||t.id===`dim`||t.id===`aug`)&&n.push(t.fifth);let r=wi.find(t=>t.id===e.seventh);return r.offset!==null&&n.push(r.offset),e.ninth&&n.push(2),n.map(t=>(e.root+t)%12)}function Ai(e){let t=Oi(ki(e),e.bass,e.root),n=t.find(t=>t.root===e.root),r=n?n.name.slice(A[e.root].length).split(`/`)[0]:`(custom)`,i=e.bass!==null&&e.bass!==e.root?`/${e.bassName}`:``;return{primary:`${e.rootName}${r}${i}`,alternatives:t.filter(t=>t.root!==e.root).map(e=>e.name)}}function ji(e){let t=ki(e);if(e.bass===null)return{...e,bass:t[1]??null,bassName:t[1]===void 0?null:A[t[1]]};let n=t.indexOf(e.bass),r=n>=0&&n+1<t.length?t[n+1]:null;return{...e,bass:r,bassName:r===null?null:A[r]}}function Mi(e){return e.bass===null||e.bass===e.root?`root position`:[`root position`,`1st inversion`,`2nd inversion`,`3rd inversion`,`4th inversion`][ki(e).indexOf(e.bass)]??`inversion`}var Ni={bass:null,bassName:null},Pi=(e,t)=>({root:t,rootName:A[t]}),Fi=[{id:`up5`,label:`Up a 5th (its dominant)`,hint:`The V of the chord: pulls to it`,available:()=>!0,apply:e=>({...e,...Ni,...Pi(e,(e.root+7)%12),colour:`major`,seventh:`b7`,ninth:!1,fifth:!0})},{id:`down5`,label:`Down a 5th`,hint:`Same quality, the chord a fifth below`,available:()=>!0,apply:e=>({...e,...Ni,...Pi(e,(e.root+5)%12)})},{id:`tritone`,label:`Tritone substitution`,hint:`Replaces this chord's dominant (its V) with the dominant a tritone away: a half step above the target`,available:e=>e.colour===`major`||e.seventh===`b7`,apply:e=>({...e,...Ni,...Pi(e,(e.root+1)%12),colour:`major`,seventh:`b7`,ninth:!1,fifth:!0})},{id:`relative`,label:`Relative minor / major`,hint:`Same key signature: minor 3rd below, or major 3rd above`,available:e=>e.colour===`major`||e.colour===`minor`,apply:e=>e.colour===`major`?{...e,...Ni,...Pi(e,(e.root+9)%12),colour:`minor`}:{...e,...Ni,...Pi(e,(e.root+3)%12),colour:`major`}},{id:`parallel`,label:`Parallel minor / major`,hint:`Same root, the other mode`,available:e=>e.colour===`major`||e.colour===`minor`,apply:e=>({...e,...Ni,colour:e.colour===`major`?`minor`:`major`})},{id:`dim7below`,label:`Diminished 7th a semitone below`,hint:`A diminished chord whose note a semitone below resolves up to this chord`,available:()=>!0,apply:e=>({...e,...Ni,...Pi(e,(e.root+11)%12),colour:`dim`,seventh:`dim7`,ninth:!1,fifth:!0})}],Ii=[`C`,`D`,`E`,`F`,`G`,`A`,`B`],Li={C:0,D:2,E:4,F:5,G:7,A:9,B:11},Ri=[{id:-1,label:`♭`,suffix:`b`},{id:0,label:`♮`,suffix:``},{id:1,label:`♯`,suffix:`#`}],zi=()=>{};function Bi(e,t){let n=Ri.find(e=>e.id===t).suffix;return{root:(Li[e]+t+12)%12,rootName:`${e}${n}`}}function Vi(e){return e.endsWith(`#`)?1:e.endsWith(`b`)?-1:0}var Hi={root:0,rootName:`C`,colour:`major`,seventh:`none`,ninth:!1,fifth:!0,bass:null,bassName:null};function Ui({active:e,onClick:t,children:n,disabled:r=!1,title:i}){return(0,x.jsx)(`button`,{type:`button`,onClick:t,"aria-pressed":e,disabled:r,title:i,className:`glass-btn px-3 py-2.5 text-sm font-semibold text-slate-100 disabled:opacity-40`,children:n})}function Wi({title:e,children:t}){return(0,x.jsxs)(`div`,{className:`space-y-2`,children:[(0,x.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400`,children:e}),t]})}function Gi({instrument:e}){let[t,n]=(0,b.useState)([Hi]),[r,i]=(0,b.useState)(0),[a,o]=L(),s=t[t.length-1],c=Ai(s),l=ki(s),u=s.bass??s.root,d=new Set(l);d.add(u);let f=new Set(d),p=e===`guitar`?Or(d,f,u,500):[],m=p.length?p[r%p.length]:[],h=e=>{n(t=>[...t,{...t[t.length-1],...e}]),i(0)},g=e=>{n(t=>[...t,e]),i(0)},_=()=>{n(e=>e.length>1?e.slice(0,-1):e),i(0)},v=s.rootName[0],y=Vi(s.rootName),S=(e,t)=>{let{root:n,rootName:r}=Bi(e,t);h({root:n,rootName:r,bass:null,bassName:null})},C=(e,t)=>{let{root:n,rootName:r}=Bi(e,t);h({bass:n,bassName:r})},w=()=>h({bass:null,bassName:null}),T=e===`piano`?kr([...l,u],u):[],E=e===`guitar`&&p.length===0,D=s.bass===null?null:A[s.bass][0],O=s.bass===null?0:Vi(A[s.bass]);return(0,x.jsxs)(`div`,{className:`space-y-4`,children:[(0,x.jsxs)(`section`,{className:`glass p-5 text-center`,children:[(0,x.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]`,children:`Chord builder`}),(0,x.jsx)(`p`,{className:`mt-2 text-4xl font-bold text-white`,children:c.primary}),c.alternatives.length>0&&(0,x.jsxs)(`p`,{className:`mt-2 text-sm text-slate-300`,children:[`(also: `,c.alternatives.join(`, `),`)`]}),(0,x.jsxs)(`p`,{className:`mt-2 text-xs text-slate-400`,children:[s.bass===null||s.bass===s.root?`Root position`:Mi(s),` · `,`notes: `,l.map(e=>A[e]).join(` `)]})]}),(0,x.jsxs)(`section`,{className:`glass space-y-5 p-5`,children:[(0,x.jsxs)(Wi,{title:`Root`,children:[(0,x.jsx)(`div`,{className:`grid grid-cols-7 gap-1`,children:Ii.map(e=>(0,x.jsx)(Ui,{active:v===e,onClick:()=>S(e,y),children:e},e))}),(0,x.jsx)(`div`,{className:`grid grid-cols-3 gap-1`,children:Ri.map(e=>(0,x.jsx)(Ui,{active:y===e.id,onClick:()=>S(v,e.id),children:e.label},e.id))})]}),(0,x.jsx)(Wi,{title:`Colour`,children:(0,x.jsx)(`div`,{className:`grid grid-cols-2 gap-2 sm:grid-cols-4`,children:Ci.map(e=>(0,x.jsx)(Ui,{active:s.colour===e.id,onClick:()=>h({colour:e.id}),children:e.label},e.id))})}),(0,x.jsx)(Wi,{title:`Seventh`,children:(0,x.jsx)(`div`,{className:`grid grid-cols-4 gap-2`,children:wi.map(e=>(0,x.jsx)(Ui,{active:s.seventh===e.id,onClick:()=>h({seventh:e.id}),children:e.label},e.id))})}),(0,x.jsx)(Wi,{title:`Extensions`,children:(0,x.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,x.jsxs)(Ui,{active:s.ninth,onClick:()=>h({ninth:!s.ninth}),children:[`9th: `,s.ninth?`on`:`off`]}),(0,x.jsxs)(Ui,{active:s.fifth,onClick:()=>h({fifth:!s.fifth}),children:[`5th: `,s.fifth?`on`:`off`]})]})}),(0,x.jsxs)(Wi,{title:`Bass (slash chord)`,children:[(0,x.jsxs)(`div`,{className:`grid grid-cols-8 gap-1`,children:[(0,x.jsx)(Ui,{active:s.bass===null,onClick:w,children:`Root`}),Ii.map(e=>(0,x.jsx)(Ui,{active:D===e,onClick:()=>C(e,O),children:e},e))]}),(0,x.jsx)(`div`,{className:`grid grid-cols-3 gap-1`,children:Ri.map(e=>(0,x.jsx)(Ui,{active:s.bass!==null&&O===e.id,disabled:s.bass===null,onClick:()=>C(D,e.id),children:e.label},e.id))})]})]}),(0,x.jsxs)(`section`,{className:`glass space-y-4 p-5`,children:[(0,x.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,x.jsxs)(`p`,{className:`text-sm text-slate-300`,children:[`Inversion: `,(0,x.jsx)(`span`,{className:`font-semibold text-white`,children:s.bass===null||s.bass===s.root?`root position`:Mi(s)}),e===`guitar`&&p.length>0&&(0,x.jsxs)(`span`,{className:`ml-2 text-xs text-slate-400`,children:[`shape `,r%p.length+1,` of `,p.length]})]}),(0,x.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>g(ji(s)),className:`btn-accent px-4 py-2.5 text-sm`,children:`Next inversion`}),e===`guitar`&&p.length>1&&(0,x.jsx)(`button`,{type:`button`,onClick:()=>i(e=>e+1),className:`glass-btn px-4 py-2.5 text-sm font-semibold text-slate-100`,children:`Next shape`}),(0,x.jsx)(`button`,{type:`button`,onClick:_,disabled:t.length===1,className:`glass-btn px-4 py-2.5 text-sm font-semibold text-slate-100 disabled:opacity-40`,children:`Undo`})]})]}),(0,x.jsx)(Wi,{title:`Move to…`,children:(0,x.jsx)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:Fi.map(e=>(0,x.jsxs)(`button`,{type:`button`,disabled:!e.available(s),title:e.hint,onClick:()=>g(e.apply(s)),className:`glass-btn px-4 py-3 text-left disabled:opacity-40`,children:[(0,x.jsx)(`span`,{className:`block text-sm font-semibold text-slate-100`,children:e.label}),(0,x.jsx)(`span`,{className:`mt-0.5 block text-xs leading-snug text-slate-400`,children:e.hint})]},e.id))})})]}),(0,x.jsxs)(`section`,{className:`glass p-4`,children:[(0,x.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center justify-between gap-2`,children:[(0,x.jsx)(`p`,{className:`text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400`,children:e===`guitar`?`Shape on the fretboard`:`Keys`}),e===`guitar`&&(0,x.jsx)(`button`,{type:`button`,onClick:()=>o(e=>!e),"aria-pressed":a,className:`glass-btn px-3 py-1.5 text-xs font-semibold text-slate-100`,children:a?`Hide fret numbers`:`Show fret numbers`})]}),e===`guitar`?E?(0,x.jsx)(`p`,{className:`text-sm text-slate-400`,children:`No guitar shape for these notes within the neck. Try another inversion or colour.`}):(0,x.jsx)(`div`,{className:`overflow-x-auto overscroll-x-contain`,children:(0,x.jsx)(ze,{rootPosition:null,selectedNotes:m,answerState:`idle`,onToggle:zi,revealNames:!0,boxPositions:[],validPositions:[],highlightedPosition:null,requiredString:`any`,requiredStrings:[],scalePitchClasses:[],displayScaleDegrees:!1,scaleType:`major`})}):(0,x.jsx)(Dn,{highlightedKeys:new Set(T.map(String)),selectedKeys:new Set(T.map(String)),missedKeys:new Set,answerState:`idle`,onToggle:zi,revealNames:!0,focusMidi:null,resetKey:t.length})]}),(0,x.jsx)(Ve,{onNew:()=>n([Hi]),newLabel:`Start over`})]})}var Ki=15,qi=e=>j(N(e,0)),Ji=e=>(e%12+12)%12;function Yi(e){return[...new Set(e)].map(ce).join(`, `)}function Xi(e,t,n=null){let r=new Set(e.map(e=>P(e.note))),i=[...t].filter(e=>!r.has(e)),a=[...r].filter(e=>!t.has(e)),o=n?` Expected strings: ${[...n].map(e=>e+1).join(`, `)}.`:``,s=[];return i.length&&s.push(`Missing: ${Yi(i)}.`),a.length&&s.push(`Extra: ${Yi(a)}.`),`${s.join(` `)}${o}`.trim()}function Zi(e,t){return[...new Set(e.map(e=>(P(e.note)-P(t)+12)%12))].map(e=>ie[Object.keys(re).find(t=>re[t]===e)]??`${e} semitones`).join(`, `)}function Qi(e,t,n=0){if(!e.length)return e;let r=new Set(t),i=e.map(e=>{let t=j(e.note),n=qi(e.string),i=null,a=null;for(let e=0;e<=Ki;e+=1){let o=n+e;r.has(Ji(o))&&(o<=t&&(i=o),o>=t&&a===null&&(a=o))}let o=[...new Set([i,a].filter(e=>e!==null))];return{position:e,midi:t,open:n,options:o.length?o:[t]}}),a=e=>{let t=0,r=0,a=0;for(let n=0;n<i.length;n+=1){let o=e[n]-i[n].midi;r+=Math.abs(o),a+=o;for(let r=n+1;r<i.length;r+=1)t+=Math.abs(e[r]-e[n]-(i[r].midi-i[n].midi))}return t+.5*r-.001*n*a},o=e=>e.options.reduce((t,r)=>{let i=Math.abs(t-e.midi),a=Math.abs(r-e.midi);return a<i||a===i&&n>0&&r>t?r:t},e.options[0]),s=i.filter(e=>e.options.length>1).length,c;if(s>10)c=i.map(o);else{let e=1/0,t=[],n=r=>{if(r===i.length){let n=a(t);n<e&&(e=n,c=[...t]);return}i[r].options.forEach(e=>{t[r]=e,n(r+1)})};n(0)}return i.map((e,t)=>{let n=c[t]-e.open;return{...e.position,fret:n,note:N(e.position.string,n)}})}function $i(){let[e,t]=(0,b.useState)(He[0]),[n,r]=(0,b.useState)(Ue[0]),[i,a]=(0,b.useState)(We[0]),[o,s]=(0,b.useState)(()=>it(He[0],Ue[0],We[0])),[c,l]=(0,b.useState)([]),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(!1),[m,h]=(0,b.useState)(`idle`),[g,_]=(0,b.useState)(``),[v,y]=(0,b.useState)(``),[x,S]=(0,b.useState)(``),[C,w]=(0,b.useState)(!0),[T,E]=(0,b.useState)(!1),[D,O]=(0,b.useState)(`major`),[k,ee]=(0,b.useState)(`C`),[te,A]=(0,b.useState)(``),[ne,ae]=(0,b.useState)(!1),[oe,M]=(0,b.useState)(!1),se=(0,b.useRef)(null),ce=(t=e,r=n,a=i,c=null)=>{let u=c??(a===`Highlight degree`&&o.mode===`Scale & Triads`?{rootNote:o.rootNote,scaleType:o.scaleType}:null);s(it(t,r,a,u)),l([]),d(!1),p(!1),h(`idle`),_(``),y(``),S(``)},le=t=>{r(t),ce(e,t)},ue=t=>{a(t),ce(e,n,t)},de=()=>{ce(e,n,i,{})},fe=e=>{if(!C||typeof window>`u`)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=se.current??new t;se.current=n;let r=440*2**((j(e)-69)/12),i=n.createOscillator(),a=n.createGain();i.type=`sine`,i.frequency.value=r,a.gain.setValueAtTime(1e-4,n.currentTime),a.gain.exponentialRampToValueAtTime(.07,n.currentTime+.02),a.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.36),i.connect(a),a.connect(n.destination),i.start(),i.stop(n.currentTime+.38)},pe=(e=D,t=k)=>{let n=e===`major`?[0,2,4,5,7,9,11]:[0,2,3,5,7,8,10],r=P(t);return n.map(e=>(r+e)%12)},me=(t,n)=>{if(m===`submitted`)return;let r={string:t,fret:n,note:N(t,n)};e===`Fretboard Explorer`&&T&&([r]=Qi([r],pe()));let i=`${r.string}-${r.fret}`;l(e=>e.some(e=>`${e.string}-${e.fret}`===i)?e.filter(e=>`${e.string}-${e.fret}`!==i):[...e,r]),C&&fe(r.note)},he=(e,t,n)=>{let r=Math.floor(n/t.length),i=(n%t.length+t.length)%t.length;return e+r*12+t[i]},F=(e,t,n)=>{let r=D===`major`?[0,2,4,5,7,9,11]:[0,2,3,5,7,8,10],i=j(k),a=j(e.note),o=Math.floor((a-i)/12)*r.length,s=Array.from({length:r.length*2+1},(e,t)=>o-r.length+t),c=s.reduce((e,t)=>Math.abs(he(i,r,t)-a)<Math.abs(he(i,r,e)-a)?t:e,s[0]),l=he(i,r,c+n),u=j(N(e.string,0)),d=[l-u,l-u-12,l-u+12].filter(e=>e>=0&&e<=15);if(!d.length)return null;let f=d[0];return{...e,fret:f,note:N(e.string,f)}},I=(e,t=!1)=>{if(!Number.isInteger(e)||c.length===0)return;let n=pe();if(T&&!t){l(t=>t.map(t=>F(t,n,e)??t));return}l(t=>{let n=t.map(t=>({...t,fret:t.fret+e})),r=[0,-12,12].find(e=>n.every(t=>t.fret+e>=0&&t.fret+e<=Ki));return r===void 0?t:n.map(e=>{let t=e.fret+r;return{...e,fret:t,note:N(e.string,t)}})})},ge=()=>{l([]),h(`idle`),_(``),d(!1)},_e=(e,t)=>{if(!e||!t)return null;let n=t.string-e.string,r=j(N(e.string,e.fret)),i=j(N(t.string,t.fret))-r;if(n===0&&i===0||!c.every(e=>e.string+n>=0&&e.string+n<6))return null;let a=c.map(e=>{let t=e.string+n,r=j(e.note)+i-qi(t);return{...e,string:t,fret:r}}),o=[0,-12,12].find(e=>a.every(t=>t.fret+e>=0&&t.fret+e<=Ki));if(o===void 0)return null;let s=a.map(e=>{let t=e.fret+o;return{...e,fret:t,note:N(e.string,t)}});return T?Qi(s,pe(),Math.sign(i)):s};return{mode:e,setMode:t,difficulty:n,changeDifficulty:le,scaleTriadExercise:i,changeScaleTriadExercise:ue,requestNewScale:de,question:o,selectedNotes:c,revealNames:u,answerState:m,answerMessage:g,guessAnswer:x,setGuessAnswer:S,selectedDegree:v,setSelectedDegree:y,audioEnabled:C,setAudioEnabled:w,requestNewQuestion:ce,handleToggleNote:me,handleSubmit:()=>{let t=new Set(c.map(e=>`${e.string}-${e.fret}`));if(e===`Guess the Note`){let e=cn(x),t=P(o.highlightedPosition.note);if(e===null){_(`Enter a note name such as E, C#, Db, or g sharp.`);return}_(e===t?`Correct note.`:`Not quite. You entered ${x.trim()}; the highlighted note is ${o.highlightedPosition.note.replace(/\d+$/,``)}.`),h(`submitted`),d(!0);return}if(e===`Pentatonics`&&[`identify-degree`,`identify-fundamental`].includes(o.pentatonicExercise)){if(!v){_(`Choose a degree before submitting.`);return}let e=v===o.pentatonicAnswer;_(e?`Correct degree.`:`Not quite. You chose ${v}; the highlighted note is the ${o.pentatonicAnswer}.`),h(`submitted`),d(!0);return}if(c.length===0){_(`No notes selected. Select the note or notes requested by the question.`),h(`submitted`),d(!0);return}if(e===`Intervals`){let e=o.validPositions.length?(P(o.validPositions[0].note)-P(o.rootNote)+12)%12:null,t=Zi(c,o.rootNote),n=c.every(e=>P(e.note)===P(o.validPositions[0]?.note));_(n?`Correct interval.`:`Not quite. You selected: ${t||`no recognizable interval`}. Expected: ${ie[Object.keys(re).find(t=>re[t]===e)]??`the requested interval`}.`)}if(e===`Pentatonics`&&o.pentatonicExercise===`find-degree`){let e=new Set(o.validPositions.map(e=>P(e.note))),t=new Set(c.map(e=>P(e.note))),n=c.length>0&&[...t].every(t=>e.has(t))&&[...e].every(e=>t.has(e));_(n?`Correct ${o.pentatonicAnswer}.`:`Not quite. Find the ${o.pentatonicAnswer}; ${Xi(c,e)}`)}if(e===`Fill in the Chords`){let e=new Set(c.map(e=>P(e.note))),n=new Set(o.chordPitchClasses),r=`${o.highlightedPosition.string}-${o.highlightedPosition.fret}`,i=c.length===n.size&&e.size===n.size&&[...e].every(e=>n.has(e)),a=t.has(r);_(i&&a?`Correct chord, including the highlighted note.`:`Not quite. ${Xi(c,n)} The highlighted note must also be selected.`)}if(e===`Scale & Triads`&&o.scaleTriadExercise===`Highlight degree`){let e=new Set(o.targetStrings),t=c.map(e=>e.string),n=new Set(c.map(e=>P(e.note))),r=new Set(o.validPositions.map(e=>P(e.note))),i=c.length===3&&new Set(t).size===3&&t.every(t=>e.has(t))&&n.size===r.size&&[...n].every(e=>r.has(e));_(i?`Correct triad.`:`Not quite. ${Xi(c,r,e)} Select one note on each requested string.`)}if(e===`Scale & Triads`&&o.scaleTriadExercise!==`Highlight degree`){let e=new Set(o.targetStrings),t=c.map(e=>e.string),n=new Set(c.map(e=>P(e.note))),r=new Set(o.validPositions.map(e=>P(e.note))),i=c.length===3&&new Set(t).size===3&&t.every(t=>e.has(t)),a=n.size===r.size&&[...n].every(e=>r.has(e));_(i&&a?`Correct triad and string set.`:`Not quite. ${Xi(c,r,e)} The three notes must form one playable shape.`)}h(`submitted`),d(!0)},clearSelection:ge,setRevealNames:d,setAnswerState:h,setAnswerMessage:_,explorerScaleLocked:T,setExplorerScaleLocked:E,explorerScaleType:D,setExplorerScaleType:O,explorerScaleRoot:k,setExplorerScaleRoot:ee,explorerShift:te,setExplorerShift:A,explorerShowAll:ne,setExplorerShowAll:ae,applyExplorerShift:I,handleExplorerDrag:(e,t)=>{let n=_e(e,t);n&&l(n)},displayScaleDegrees:f,setDisplayScaleDegrees:p,displayScaleRoot:e===`Fretboard Explorer`?k:o.rootNote,displayScaleType:e===`Fretboard Explorer`?D:o.scaleType??`major`,explorerShowScale:oe,setExplorerShowScale:M,explorerScalePitchClasses:pe(),toggleExplorerScaleLock:()=>{let e=!T;E(e),e&&l(e=>Qi(e,pe()))},changeExplorerScaleType:e=>{O(e),T&&l(t=>Qi(t,pe(e,k)))},changeExplorerScaleRoot:e=>{ee(e),T&&l(t=>Qi(t,pe(D,e)))},getExplorerDragPreview:_e}}function ea(){let[e,t]=(0,b.useState)(null),[n,r]=(0,b.useState)(`Register & Intonation`),[i,a]=(0,b.useState)(`Guess the Note`),[o,s]=(0,b.useState)(`Interval Recognition`),[c,l]=(0,b.useState)(!0),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(`both`),[m,h]=L(),g=$i(),_={guitar:e=>{g.setMode(e),g.requestNewQuestion(e)},trumpet:r,piano:a,earTraining:s,theory:()=>{}},v=e===null?null:{guitar:g.mode,trumpet:n,piano:i,earTraining:o,theory:`Browse topics`}[e],y=()=>l(!1),C=()=>d(!1),w=e=>{t(e),d(!1)},T=t=>{_[e]?.(t),l(!1)},E=e===`guitar`;return(0,x.jsxs)(`div`,{className:`app-root min-h-screen text-slate-100`,"data-instrument":e,children:[(0,x.jsx)(te,{instrument:e,mode:v,guitarModes:He,difficulty:g.difficulty,difficulties:E&&g.mode===`Fill in the Chords`?Ue:[],exercise:g.scaleTriadExercise,exercises:E&&g.mode===`Scale & Triads`?We:[],menuOpen:c,onOpenMenu:()=>l(!0),onCloseMenu:y,onInstrumentChange:w,onModeChange:T,onDifficultyChange:e=>{g.changeDifficulty(e),l(!1)},onExerciseChange:e=>{g.changeScaleTriadExercise(e),l(!1)}}),(0,x.jsx)(`div`,{className:`mx-auto max-w-7xl px-4 py-6 md:px-8`,children:e===null?(0,x.jsxs)(`section`,{className:`glass mx-auto max-w-md p-8 text-center`,children:[(0,x.jsx)(`p`,{className:`text-lg font-semibold text-white`,children:`Choose an instrument to begin`}),(0,x.jsx)(`p`,{className:`mt-2 text-sm text-slate-400`,children:`Open the menu and pick an instrument, then a mode.`}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>l(!0),className:`btn-accent mt-5 px-6 py-3 text-sm`,children:`Open menu`})]}):e===`trumpet`?(0,x.jsx)(an,{mode:n}):e===`piano`&&i===`Chord Builder`?(0,x.jsx)(Gi,{instrument:`piano`},`piano-builder`):e===`piano`?(0,x.jsx)(kn,{mode:i},i):e===`earTraining`?(0,x.jsx)(rr,{mode:o},o):e===`theory`?(0,x.jsx)(Si,{}):g.mode===`Chord Builder`?(0,x.jsx)(Gi,{instrument:`guitar`},`guitar-builder`):(0,x.jsx)(dt,{...g,onGuessAnswerChange:e=>{g.setGuessAnswer(e),g.setAnswerState(`idle`),g.setAnswerMessage(``)},onToggleNote:g.handleToggleNote,onToggleReveal:()=>g.setRevealNames(e=>!e),onSelectDegree:e=>{g.setSelectedDegree(e),g.setAnswerState(`idle`),g.setAnswerMessage(``)},onSubmit:g.handleSubmit,onNewQuestion:()=>g.requestNewQuestion(g.mode),onNewScale:g.requestNewScale,onClearSelection:g.clearSelection,onOpenControls:()=>d(!0),explorerScaleLocked:g.explorerScaleLocked,onExplorerScaleLock:g.toggleExplorerScaleLock,explorerScaleType:g.explorerScaleType,onExplorerScaleTypeChange:g.changeExplorerScaleType,explorerScaleRoot:g.explorerScaleRoot,onExplorerScaleRootChange:g.changeExplorerScaleRoot,explorerShift:g.explorerShift,onExplorerShiftChange:g.setExplorerShift,onExplorerShiftApply:()=>g.applyExplorerShift(Number(g.explorerShift)),explorerShowAll:g.explorerShowAll,onExplorerShowAll:()=>g.setExplorerShowAll(e=>!e),explorerShowScale:g.explorerShowScale,onExplorerShowScale:()=>g.setExplorerShowScale(e=>!e),explorerScalePitchClasses:g.explorerScalePitchClasses,onExplorerDrag:g.handleExplorerDrag,getExplorerDragPreview:g.getExplorerDragPreview,displayScaleDegrees:g.displayScaleDegrees,onToggleDisplayScaleDegrees:()=>g.setDisplayScaleDegrees(e=>!e),displayScaleRoot:g.displayScaleRoot,displayScaleType:g.displayScaleType,intervalDisplay:f,showFretNumbers:m})}),E&&(0,x.jsx)(S,{open:u,onClose:C,title:`Controls`,children:(0,x.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>g.setRevealNames(e=>!e),className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:g.revealNames?`Hide notes`:`Show notes`}),g.revealNames&&(0,x.jsxs)(`button`,{type:`button`,onClick:()=>g.setDisplayScaleDegrees(e=>!e),className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:[g.displayScaleDegrees?`Show notes`:`Show degrees`,` (`,g.displayScaleRoot,` `,g.displayScaleType===`minor`?`min`:`maj`,`)`]}),g.mode===`Intervals`&&(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`p`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400`,children:`Interval shown as`}),(0,x.jsx)(`div`,{className:`grid grid-cols-3 gap-2`,children:[[`both`,`Both`],[`name`,`Name`],[`semitones`,`Semitones`]].map(([e,t])=>(0,x.jsx)(`button`,{type:`button`,onClick:()=>p(e),"aria-pressed":f===e,className:`glass-btn px-2 py-3 text-sm font-semibold text-slate-100`,children:t},e))})]}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>h(e=>!e),"aria-pressed":m,className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:m?`Hide fret numbers`:`Show fret numbers`}),(0,x.jsxs)(`button`,{type:`button`,onClick:()=>g.setAudioEnabled(e=>!e),className:`glass-btn px-4 py-3 text-left text-sm font-semibold text-slate-100`,children:[`Audio `,g.audioEnabled?`ON`:`OFF`]})]})})]})}y.createRoot(document.getElementById(`root`)).render((0,x.jsx)(b.StrictMode,{children:(0,x.jsx)(ea,{})}));