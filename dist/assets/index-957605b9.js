function rv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ih(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sh={exports:{}},zo={},kh={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=Symbol.for("react.element"),iv=Symbol.for("react.portal"),sv=Symbol.for("react.fragment"),ov=Symbol.for("react.strict_mode"),av=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),cv=Symbol.for("react.forward_ref"),dv=Symbol.for("react.suspense"),fv=Symbol.for("react.memo"),hv=Symbol.for("react.lazy"),td=Symbol.iterator;function pv(t){return t===null||typeof t!="object"?null:(t=td&&t[td]||t["@@iterator"],typeof t=="function"?t:null)}var Ph={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ch=Object.assign,Rh={};function $r(t,e,n){this.props=t,this.context=e,this.refs=Rh,this.updater=n||Ph}$r.prototype.isReactComponent={};$r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ah(){}Ah.prototype=$r.prototype;function Cu(t,e,n){this.props=t,this.context=e,this.refs=Rh,this.updater=n||Ph}var Ru=Cu.prototype=new Ah;Ru.constructor=Cu;Ch(Ru,$r.prototype);Ru.isPureReactComponent=!0;var nd=Array.isArray,xh=Object.prototype.hasOwnProperty,Au={current:null},Nh={key:!0,ref:!0,__self:!0,__source:!0};function Oh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xh.call(e,r)&&!Nh.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zi,type:t,key:s,ref:o,props:i,_owner:Au.current}}function mv(t,e){return{$$typeof:Zi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zi}function gv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rd=/\/+/g;function Sa(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gv(""+t.key):e.toString(36)}function Ms(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zi:case iv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sa(o,0):r,nd(i)?(n="",t!=null&&(n=t.replace(rd,"$&/")+"/"),Ms(i,e,n,"",function(u){return u})):i!=null&&(xu(i)&&(i=mv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(rd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",nd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Sa(s,a);o+=Ms(s,e,n,l,i)}else if(l=pv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Sa(s,a++),o+=Ms(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fs(t,e,n){if(t==null)return t;var r=[],i=0;return Ms(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ce={current:null},Vs={transition:null},yv={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Vs,ReactCurrentOwner:Au};function bh(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:fs,forEach:function(t,e,n){fs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fs(t,function(){e++}),e},toArray:function(t){return fs(t,function(e){return e})||[]},only:function(t){if(!xu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=$r;D.Fragment=sv;D.Profiler=av;D.PureComponent=Cu;D.StrictMode=ov;D.Suspense=dv;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;D.act=bh;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ch({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Au.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xh.call(e,l)&&!Nh.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Zi,type:t.type,key:i,ref:s,props:r,_owner:o}};D.createContext=function(t){return t={$$typeof:uv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lv,_context:t},t.Consumer=t};D.createElement=Oh;D.createFactory=function(t){var e=Oh.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:cv,render:t}};D.isValidElement=xu;D.lazy=function(t){return{$$typeof:hv,_payload:{_status:-1,_result:t},_init:vv}};D.memo=function(t,e){return{$$typeof:fv,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=Vs.transition;Vs.transition={};try{t()}finally{Vs.transition=e}};D.unstable_act=bh;D.useCallback=function(t,e){return Ce.current.useCallback(t,e)};D.useContext=function(t){return Ce.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return Ce.current.useDeferredValue(t)};D.useEffect=function(t,e){return Ce.current.useEffect(t,e)};D.useId=function(){return Ce.current.useId()};D.useImperativeHandle=function(t,e,n){return Ce.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return Ce.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return Ce.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return Ce.current.useMemo(t,e)};D.useReducer=function(t,e,n){return Ce.current.useReducer(t,e,n)};D.useRef=function(t){return Ce.current.useRef(t)};D.useState=function(t){return Ce.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return Ce.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return Ce.current.useTransition()};D.version="18.3.1";kh.exports=D;var S=kh.exports;const Ne=Ih(S),_v=rv({__proto__:null,default:Ne},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv=S,Ev=Symbol.for("react.element"),Tv=Symbol.for("react.fragment"),Iv=Object.prototype.hasOwnProperty,Sv=wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kv={key:!0,ref:!0,__self:!0,__source:!0};function Lh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Iv.call(e,r)&&!kv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ev,type:t,key:s,ref:o,props:i,_owner:Sv.current}}zo.Fragment=Tv;zo.jsx=Lh;zo.jsxs=Lh;Sh.exports=zo;var g=Sh.exports,pl={},Dh={exports:{}},Ke={},Mh={exports:{}},Vh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,O){var L=C.length;C.push(O);e:for(;0<L;){var B=L-1>>>1,re=C[B];if(0<i(re,O))C[B]=O,C[L]=re,L=B;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],L=C.pop();if(L!==O){C[0]=L;e:for(var B=0,re=C.length,Cn=re>>>1;B<Cn;){var Rn=2*(B+1)-1,Ia=C[Rn],An=Rn+1,ds=C[An];if(0>i(Ia,L))An<re&&0>i(ds,Ia)?(C[B]=ds,C[An]=L,B=An):(C[B]=Ia,C[Rn]=L,B=Rn);else if(An<re&&0>i(ds,L))C[B]=ds,C[An]=L,B=An;else break e}}return O}function i(C,O){var L=C.sortIndex-O.sortIndex;return L!==0?L:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,p=3,y=!1,_=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=C)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function v(C){if(w=!1,h(C),!_)if(n(l)!==null)_=!0,sr(E);else{var O=n(u);O!==null&&or(v,O.startTime-C)}}function E(C,O){_=!1,w&&(w=!1,m(R),R=-1),y=!0;var L=p;try{for(h(O),d=n(l);d!==null&&(!(d.expirationTime>O)||C&&!Te());){var B=d.callback;if(typeof B=="function"){d.callback=null,p=d.priorityLevel;var re=B(d.expirationTime<=O);O=t.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&r(l),h(O)}else r(l);d=n(l)}if(d!==null)var Cn=!0;else{var Rn=n(u);Rn!==null&&or(v,Rn.startTime-O),Cn=!1}return Cn}finally{d=null,p=L,y=!1}}var k=!1,P=null,R=-1,j=5,N=-1;function Te(){return!(t.unstable_now()-N<j)}function kn(){if(P!==null){var C=t.unstable_now();N=C;var O=!0;try{O=P(!0,C)}finally{O?Pn():(k=!1,P=null)}}else k=!1}var Pn;if(typeof f=="function")Pn=function(){f(kn)};else if(typeof MessageChannel<"u"){var cs=new MessageChannel,Ta=cs.port2;cs.port1.onmessage=kn,Pn=function(){Ta.postMessage(null)}}else Pn=function(){T(kn,0)};function sr(C){P=C,k||(k=!0,Pn())}function or(C,O){R=T(function(){C(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,sr(E))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var L=p;p=O;try{return C()}finally{p=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=p;p=C;try{return O()}finally{p=L}},t.unstable_scheduleCallback=function(C,O,L){var B=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?B+L:B):L=B,C){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=L+re,C={id:c++,callback:O,priorityLevel:C,startTime:L,expirationTime:re,sortIndex:-1},L>B?(C.sortIndex=L,e(u,C),n(l)===null&&C===n(u)&&(w?(m(R),R=-1):w=!0,or(v,L-B))):(C.sortIndex=re,e(l,C),_||y||(_=!0,sr(E))),C},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(C){var O=p;return function(){var L=p;p=O;try{return C.apply(this,arguments)}finally{p=L}}}})(Vh);Mh.exports=Vh;var Pv=Mh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv=S,We=Pv;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uh=new Set,Si={};function tr(t,e){xr(t,e),xr(t+"Capture",e)}function xr(t,e){for(Si[t]=e,t=0;t<e.length;t++)Uh.add(e[t])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Rv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,id={},sd={};function Av(t){return ml.call(sd,t)?!0:ml.call(id,t)?!1:Rv.test(t)?sd[t]=!0:(id[t]=!0,!1)}function xv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nv(t,e,n,r){if(e===null||typeof e>"u"||xv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){me[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];me[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){me[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){me[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){me[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){me[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){me[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){me[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){me[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nu=/[\-:]([a-z])/g;function Ou(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nu,Ou);me[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nu,Ou);me[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nu,Ou);me[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){me[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});me.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){me[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function bu(t,e,n,r){var i=me.hasOwnProperty(e)?me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nv(e,n,i,r)&&(n=null),r||i===null?Av(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zt=Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hs=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),Lu=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),jh=Symbol.for("react.provider"),Fh=Symbol.for("react.context"),Du=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),zh=Symbol.for("react.offscreen"),od=Symbol.iterator;function Gr(t){return t===null||typeof t!="object"?null:(t=od&&t[od]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Object.assign,ka;function ii(t){if(ka===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ka=e&&e[1]||""}return`
`+ka+t}var Pa=!1;function Ca(t,e){if(!t||Pa)return"";Pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ii(t):""}function Ov(t){switch(t.tag){case 5:return ii(t.type);case 16:return ii("Lazy");case 13:return ii("Suspense");case 19:return ii("SuspenseList");case 0:case 2:case 15:return t=Ca(t.type,!1),t;case 11:return t=Ca(t.type.render,!1),t;case 1:return t=Ca(t.type,!0),t;default:return""}}function _l(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cr:return"Fragment";case ur:return"Portal";case gl:return"Profiler";case Lu:return"StrictMode";case vl:return"Suspense";case yl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fh:return(t.displayName||"Context")+".Consumer";case jh:return(t._context.displayName||"Context")+".Provider";case Du:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mu:return e=t.displayName||null,e!==null?e:_l(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return _l(t(e))}catch{}}return null}function bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(e);case 8:return e===Lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $h(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lv(t){var e=$h(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ps(t){t._valueTracker||(t._valueTracker=Lv(t))}function Bh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$h(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wl(t,e){var n=e.checked;return Q({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ad(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hh(t,e){e=e.checked,e!=null&&bu(t,"checked",e,!1)}function El(t,e){Hh(t,e);var n=gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tl(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tl(t,e.type,gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ld(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tl(t,e,n){(e!=="number"||Xs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var si=Array.isArray;function Er(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Il(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Q({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ud(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(si(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gn(n)}}function Wh(t,e){var n=gn(e.value),r=gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ms,qh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ms=ms||document.createElement("div"),ms.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ms.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dv=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(t){Dv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),li[e]=li[t]})});function Gh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||li.hasOwnProperty(t)&&li[t]?(""+e).trim():e+"px"}function Qh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Gh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Mv=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(t,e){if(e){if(Mv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Pl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cl=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rl=null,Tr=null,Ir=null;function dd(t){if(t=ns(t)){if(typeof Rl!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ko(e),Rl(t.stateNode,t.type,e))}}function Yh(t){Tr?Ir?Ir.push(t):Ir=[t]:Tr=t}function Jh(){if(Tr){var t=Tr,e=Ir;if(Ir=Tr=null,dd(t),e)for(t=0;t<e.length;t++)dd(e[t])}}function Xh(t,e){return t(e)}function Zh(){}var Ra=!1;function ep(t,e,n){if(Ra)return t(e,n);Ra=!0;try{return Xh(t,e,n)}finally{Ra=!1,(Tr!==null||Ir!==null)&&(Zh(),Jh())}}function Pi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ko(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Al=!1;if(Dt)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{Al=!1}function Vv(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ui=!1,Zs=null,eo=!1,xl=null,Uv={onError:function(t){ui=!0,Zs=t}};function jv(t,e,n,r,i,s,o,a,l){ui=!1,Zs=null,Vv.apply(Uv,arguments)}function Fv(t,e,n,r,i,s,o,a,l){if(jv.apply(this,arguments),ui){if(ui){var u=Zs;ui=!1,Zs=null}else throw Error(I(198));eo||(eo=!0,xl=u)}}function nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function tp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fd(t){if(nr(t)!==t)throw Error(I(188))}function zv(t){var e=t.alternate;if(!e){if(e=nr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fd(i),t;if(s===r)return fd(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function np(t){return t=zv(t),t!==null?rp(t):null}function rp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=rp(t);if(e!==null)return e;t=t.sibling}return null}var ip=We.unstable_scheduleCallback,hd=We.unstable_cancelCallback,$v=We.unstable_shouldYield,Bv=We.unstable_requestPaint,te=We.unstable_now,Hv=We.unstable_getCurrentPriorityLevel,Uu=We.unstable_ImmediatePriority,sp=We.unstable_UserBlockingPriority,to=We.unstable_NormalPriority,Wv=We.unstable_LowPriority,op=We.unstable_IdlePriority,$o=null,_t=null;function Kv(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot($o,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Qv,qv=Math.log,Gv=Math.LN2;function Qv(t){return t>>>=0,t===0?32:31-(qv(t)/Gv|0)|0}var gs=64,vs=4194304;function oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function no(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=oi(a):(s&=o,s!==0&&(r=oi(s)))}else o=n&~i,o!==0?r=oi(o):s!==0&&(r=oi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lt(e),i=1<<n,r|=t[n],e&=~i;return r}function Yv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Yv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ap(){var t=gs;return gs<<=1,!(gs&4194240)&&(gs=64),t}function Aa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function es(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lt(e),t[e]=n}function Xv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ju(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var z=0;function lp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var up,Fu,cp,dp,fp,Ol=!1,ys=[],rn=null,sn=null,on=null,Ci=new Map,Ri=new Map,Gt=[],Zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(t,e){switch(t){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(e.pointerId)}}function Yr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ns(e),e!==null&&Fu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ey(t,e,n,r,i){switch(e){case"focusin":return rn=Yr(rn,t,e,n,r,i),!0;case"dragenter":return sn=Yr(sn,t,e,n,r,i),!0;case"mouseover":return on=Yr(on,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ci.set(s,Yr(Ci.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ri.set(s,Yr(Ri.get(s)||null,t,e,n,r,i)),!0}return!1}function hp(t){var e=Ln(t.target);if(e!==null){var n=nr(e);if(n!==null){if(e=n.tag,e===13){if(e=tp(n),e!==null){t.blockedOn=e,fp(t.priority,function(){cp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Us(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cl=r,n.target.dispatchEvent(r),Cl=null}else return e=ns(n),e!==null&&Fu(e),t.blockedOn=n,!1;e.shift()}return!0}function md(t,e,n){Us(t)&&n.delete(e)}function ty(){Ol=!1,rn!==null&&Us(rn)&&(rn=null),sn!==null&&Us(sn)&&(sn=null),on!==null&&Us(on)&&(on=null),Ci.forEach(md),Ri.forEach(md)}function Jr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ol||(Ol=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,ty)))}function Ai(t){function e(i){return Jr(i,t)}if(0<ys.length){Jr(ys[0],t);for(var n=1;n<ys.length;n++){var r=ys[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rn!==null&&Jr(rn,t),sn!==null&&Jr(sn,t),on!==null&&Jr(on,t),Ci.forEach(e),Ri.forEach(e),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)hp(n),n.blockedOn===null&&Gt.shift()}var Sr=zt.ReactCurrentBatchConfig,ro=!0;function ny(t,e,n,r){var i=z,s=Sr.transition;Sr.transition=null;try{z=1,zu(t,e,n,r)}finally{z=i,Sr.transition=s}}function ry(t,e,n,r){var i=z,s=Sr.transition;Sr.transition=null;try{z=4,zu(t,e,n,r)}finally{z=i,Sr.transition=s}}function zu(t,e,n,r){if(ro){var i=bl(t,e,n,r);if(i===null)ja(t,e,r,io,n),pd(t,r);else if(ey(i,t,e,n,r))r.stopPropagation();else if(pd(t,r),e&4&&-1<Zv.indexOf(t)){for(;i!==null;){var s=ns(i);if(s!==null&&up(s),s=bl(t,e,n,r),s===null&&ja(t,e,r,io,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ja(t,e,r,null,n)}}var io=null;function bl(t,e,n,r){if(io=null,t=Vu(r),t=Ln(t),t!==null)if(e=nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=tp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return io=t,null}function pp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hv()){case Uu:return 1;case sp:return 4;case to:case Wv:return 16;case op:return 536870912;default:return 16}default:return 16}}var en=null,$u=null,js=null;function mp(){if(js)return js;var t,e=$u,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return js=i.slice(t,1<r?1-r:void 0)}function Fs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _s(){return!0}function gd(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_s:gd,this.isPropagationStopped=gd,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_s)},persist:function(){},isPersistent:_s}),e}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=qe(Br),ts=Q({},Br,{view:0,detail:0}),iy=qe(ts),xa,Na,Xr,Bo=Q({},ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(xa=t.screenX-Xr.screenX,Na=t.screenY-Xr.screenY):Na=xa=0,Xr=t),xa)},movementY:function(t){return"movementY"in t?t.movementY:Na}}),vd=qe(Bo),sy=Q({},Bo,{dataTransfer:0}),oy=qe(sy),ay=Q({},ts,{relatedTarget:0}),Oa=qe(ay),ly=Q({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=qe(ly),cy=Q({},Br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dy=qe(cy),fy=Q({},Br,{data:0}),yd=qe(fy),hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},my={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=my[t])?!!e[t]:!1}function Hu(){return gy}var vy=Q({},ts,{key:function(t){if(t.key){var e=hy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?py[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?Fs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yy=qe(vy),_y=Q({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=qe(_y),wy=Q({},ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),Ey=qe(wy),Ty=Q({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=qe(Ty),Sy=Q({},Bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ky=qe(Sy),Py=[9,13,27,32],Wu=Dt&&"CompositionEvent"in window,ci=null;Dt&&"documentMode"in document&&(ci=document.documentMode);var Cy=Dt&&"TextEvent"in window&&!ci,gp=Dt&&(!Wu||ci&&8<ci&&11>=ci),wd=String.fromCharCode(32),Ed=!1;function vp(t,e){switch(t){case"keyup":return Py.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dr=!1;function Ry(t,e){switch(t){case"compositionend":return yp(e);case"keypress":return e.which!==32?null:(Ed=!0,wd);case"textInput":return t=e.data,t===wd&&Ed?null:t;default:return null}}function Ay(t,e){if(dr)return t==="compositionend"||!Wu&&vp(t,e)?(t=mp(),js=$u=en=null,dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gp&&e.locale!=="ko"?null:e.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xy[t.type]:e==="textarea"}function _p(t,e,n,r){Yh(r),e=so(e,"onChange"),0<e.length&&(n=new Bu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var di=null,xi=null;function Ny(t){xp(t,0)}function Ho(t){var e=pr(t);if(Bh(e))return t}function Oy(t,e){if(t==="change")return e}var wp=!1;if(Dt){var ba;if(Dt){var La="oninput"in document;if(!La){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),La=typeof Id.oninput=="function"}ba=La}else ba=!1;wp=ba&&(!document.documentMode||9<document.documentMode)}function Sd(){di&&(di.detachEvent("onpropertychange",Ep),xi=di=null)}function Ep(t){if(t.propertyName==="value"&&Ho(xi)){var e=[];_p(e,xi,t,Vu(t)),ep(Ny,e)}}function by(t,e,n){t==="focusin"?(Sd(),di=e,xi=n,di.attachEvent("onpropertychange",Ep)):t==="focusout"&&Sd()}function Ly(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ho(xi)}function Dy(t,e){if(t==="click")return Ho(e)}function My(t,e){if(t==="input"||t==="change")return Ho(e)}function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:Vy;function Ni(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ml.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pd(t,e){var n=kd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function Tp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ip(){for(var t=window,e=Xs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xs(t.document)}return e}function Ku(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Uy(t){var e=Ip(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&Ku(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Pd(n,s);var o=Pd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jy=Dt&&"documentMode"in document&&11>=document.documentMode,fr=null,Ll=null,fi=null,Dl=!1;function Cd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dl||fr==null||fr!==Xs(r)||(r=fr,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&Ni(fi,r)||(fi=r,r=so(Ll,"onSelect"),0<r.length&&(e=new Bu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fr)))}function ws(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionend:ws("Transition","TransitionEnd")},Da={},Sp={};Dt&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete hr.animationend.animation,delete hr.animationiteration.animation,delete hr.animationstart.animation),"TransitionEvent"in window||delete hr.transitionend.transition);function Wo(t){if(Da[t])return Da[t];if(!hr[t])return t;var e=hr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sp)return Da[t]=e[n];return t}var kp=Wo("animationend"),Pp=Wo("animationiteration"),Cp=Wo("animationstart"),Rp=Wo("transitionend"),Ap=new Map,Rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(t,e){Ap.set(t,e),tr(e,[t])}for(var Ma=0;Ma<Rd.length;Ma++){var Va=Rd[Ma],Fy=Va.toLowerCase(),zy=Va[0].toUpperCase()+Va.slice(1);_n(Fy,"on"+zy)}_n(kp,"onAnimationEnd");_n(Pp,"onAnimationIteration");_n(Cp,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Rp,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$y=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function Ad(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Fv(r,e,void 0,t),t.currentTarget=null}function xp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ad(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ad(i,a,u),s=l}}}if(eo)throw t=xl,eo=!1,xl=null,t}function H(t,e){var n=e[Fl];n===void 0&&(n=e[Fl]=new Set);var r=t+"__bubble";n.has(r)||(Np(e,t,2,!1),n.add(r))}function Ua(t,e,n){var r=0;e&&(r|=4),Np(n,t,r,e)}var Es="_reactListening"+Math.random().toString(36).slice(2);function Oi(t){if(!t[Es]){t[Es]=!0,Uh.forEach(function(n){n!=="selectionchange"&&($y.has(n)||Ua(n,!1,t),Ua(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Es]||(e[Es]=!0,Ua("selectionchange",!1,e))}}function Np(t,e,n,r){switch(pp(e)){case 1:var i=ny;break;case 4:i=ry;break;default:i=zu}n=i.bind(null,e,n,t),i=void 0,!Al||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ja(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ln(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}ep(function(){var u=s,c=Vu(n),d=[];e:{var p=Ap.get(t);if(p!==void 0){var y=Bu,_=t;switch(t){case"keypress":if(Fs(n)===0)break e;case"keydown":case"keyup":y=yy;break;case"focusin":_="focus",y=Oa;break;case"focusout":_="blur",y=Oa;break;case"beforeblur":case"afterblur":y=Oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ey;break;case kp:case Pp:case Cp:y=uy;break;case Rp:y=Iy;break;case"scroll":y=iy;break;case"wheel":y=ky;break;case"copy":case"cut":case"paste":y=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_d}var w=(e&4)!==0,T=!w&&t==="scroll",m=w?p!==null?p+"Capture":null:p;w=[];for(var f=u,h;f!==null;){h=f;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,m!==null&&(v=Pi(f,m),v!=null&&w.push(bi(f,v,h)))),T)break;f=f.return}0<w.length&&(p=new y(p,_,null,n,c),d.push({event:p,listeners:w}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==Cl&&(_=n.relatedTarget||n.fromElement)&&(Ln(_)||_[Mt]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?Ln(_):null,_!==null&&(T=nr(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(w=vd,v="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=_d,v="onPointerLeave",m="onPointerEnter",f="pointer"),T=y==null?p:pr(y),h=_==null?p:pr(_),p=new w(v,f+"leave",y,n,c),p.target=T,p.relatedTarget=h,v=null,Ln(c)===u&&(w=new w(m,f+"enter",_,n,c),w.target=h,w.relatedTarget=T,v=w),T=v,y&&_)t:{for(w=y,m=_,f=0,h=w;h;h=ar(h))f++;for(h=0,v=m;v;v=ar(v))h++;for(;0<f-h;)w=ar(w),f--;for(;0<h-f;)m=ar(m),h--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=ar(w),m=ar(m)}w=null}else w=null;y!==null&&xd(d,p,y,w,!1),_!==null&&T!==null&&xd(d,T,_,w,!0)}}e:{if(p=u?pr(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var E=Oy;else if(Td(p))if(wp)E=My;else{E=Ly;var k=by}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Dy);if(E&&(E=E(t,u))){_p(d,E,n,c);break e}k&&k(t,p,u),t==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&Tl(p,"number",p.value)}switch(k=u?pr(u):window,t){case"focusin":(Td(k)||k.contentEditable==="true")&&(fr=k,Ll=u,fi=null);break;case"focusout":fi=Ll=fr=null;break;case"mousedown":Dl=!0;break;case"contextmenu":case"mouseup":case"dragend":Dl=!1,Cd(d,n,c);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":Cd(d,n,c)}var P;if(Wu)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else dr?vp(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(gp&&n.locale!=="ko"&&(dr||R!=="onCompositionStart"?R==="onCompositionEnd"&&dr&&(P=mp()):(en=c,$u="value"in en?en.value:en.textContent,dr=!0)),k=so(u,R),0<k.length&&(R=new yd(R,t,null,n,c),d.push({event:R,listeners:k}),P?R.data=P:(P=yp(n),P!==null&&(R.data=P)))),(P=Cy?Ry(t,n):Ay(t,n))&&(u=so(u,"onBeforeInput"),0<u.length&&(c=new yd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}xp(d,e)})}function bi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function so(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Pi(t,n),s!=null&&r.unshift(bi(t,s,i)),s=Pi(t,e),s!=null&&r.push(bi(t,s,i))),t=t.return}return r}function ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Pi(n,s),l!=null&&o.unshift(bi(n,l,a))):i||(l=Pi(n,s),l!=null&&o.push(bi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var By=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function Nd(t){return(typeof t=="string"?t:""+t).replace(By,`
`).replace(Hy,"")}function Ts(t,e,n){if(e=Nd(e),Nd(t)!==e&&n)throw Error(I(425))}function oo(){}var Ml=null,Vl=null;function Ul(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,Od=typeof Promise=="function"?Promise:void 0,Ky=typeof queueMicrotask=="function"?queueMicrotask:typeof Od<"u"?function(t){return Od.resolve(null).then(t).catch(qy)}:jl;function qy(t){setTimeout(function(){throw t})}function Fa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ai(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ai(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Hr,Li="__reactProps$"+Hr,Mt="__reactContainer$"+Hr,Fl="__reactEvents$"+Hr,Gy="__reactListeners$"+Hr,Qy="__reactHandles$"+Hr;function Ln(t){var e=t[gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mt]||n[gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bd(t);t!==null;){if(n=t[gt])return n;t=bd(t)}return e}t=n,n=t.parentNode}return null}function ns(t){return t=t[gt]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ko(t){return t[Li]||null}var zl=[],mr=-1;function wn(t){return{current:t}}function W(t){0>mr||(t.current=zl[mr],zl[mr]=null,mr--)}function $(t,e){mr++,zl[mr]=t.current,t.current=e}var vn={},we=wn(vn),Le=wn(!1),Bn=vn;function Nr(t,e){var n=t.type.contextTypes;if(!n)return vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function De(t){return t=t.childContextTypes,t!=null}function ao(){W(Le),W(we)}function Ld(t,e,n){if(we.current!==vn)throw Error(I(168));$(we,e),$(Le,n)}function Op(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,bv(t)||"Unknown",i));return Q({},n,r)}function lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vn,Bn=we.current,$(we,t),$(Le,Le.current),!0}function Dd(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Op(t,e,Bn),r.__reactInternalMemoizedMergedChildContext=t,W(Le),W(we),$(we,t)):W(Le),$(Le,n)}var kt=null,qo=!1,za=!1;function bp(t){kt===null?kt=[t]:kt.push(t)}function Yy(t){qo=!0,bp(t)}function En(){if(!za&&kt!==null){za=!0;var t=0,e=z;try{var n=kt;for(z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kt=null,qo=!1}catch(i){throw kt!==null&&(kt=kt.slice(t+1)),ip(Uu,En),i}finally{z=e,za=!1}}return null}var gr=[],vr=0,uo=null,co=0,Ge=[],Qe=0,Hn=null,Ct=1,Rt="";function xn(t,e){gr[vr++]=co,gr[vr++]=uo,uo=t,co=e}function Lp(t,e,n){Ge[Qe++]=Ct,Ge[Qe++]=Rt,Ge[Qe++]=Hn,Hn=t;var r=Ct;t=Rt;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ct=1<<32-lt(e)+i|n<<i|r,Rt=s+t}else Ct=1<<s|n<<i|r,Rt=t}function qu(t){t.return!==null&&(xn(t,1),Lp(t,1,0))}function Gu(t){for(;t===uo;)uo=gr[--vr],gr[vr]=null,co=gr[--vr],gr[vr]=null;for(;t===Hn;)Hn=Ge[--Qe],Ge[Qe]=null,Rt=Ge[--Qe],Ge[Qe]=null,Ct=Ge[--Qe],Ge[Qe]=null}var $e=null,Fe=null,K=!1,at=null;function Dp(t,e){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Md(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,Fe=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hn!==null?{id:Ct,overflow:Rt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,Fe=null,!0):!1;default:return!1}}function $l(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bl(t){if(K){var e=Fe;if(e){var n=e;if(!Md(t,e)){if($l(t))throw Error(I(418));e=an(n.nextSibling);var r=$e;e&&Md(t,e)?Dp(r,n):(t.flags=t.flags&-4097|2,K=!1,$e=t)}}else{if($l(t))throw Error(I(418));t.flags=t.flags&-4097|2,K=!1,$e=t}}}function Vd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function Is(t){if(t!==$e)return!1;if(!K)return Vd(t),K=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ul(t.type,t.memoizedProps)),e&&(e=Fe)){if($l(t))throw Mp(),Error(I(418));for(;e;)Dp(t,e),e=an(e.nextSibling)}if(Vd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=$e?an(t.stateNode.nextSibling):null;return!0}function Mp(){for(var t=Fe;t;)t=an(t.nextSibling)}function Or(){Fe=$e=null,K=!1}function Qu(t){at===null?at=[t]:at.push(t)}var Jy=zt.ReactCurrentBatchConfig;function Zr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ss(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ud(t){var e=t._init;return e(t._payload)}function Vp(t){function e(m,f){if(t){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=dn(m,f),m.index=0,m.sibling=null,m}function s(m,f,h){return m.index=h,t?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,h,v){return f===null||f.tag!==6?(f=Ga(h,m.mode,v),f.return=m,f):(f=i(f,h),f.return=m,f)}function l(m,f,h,v){var E=h.type;return E===cr?c(m,f,h.props.children,v,h.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ht&&Ud(E)===f.type)?(v=i(f,h.props),v.ref=Zr(m,f,h),v.return=m,v):(v=qs(h.type,h.key,h.props,null,m.mode,v),v.ref=Zr(m,f,h),v.return=m,v)}function u(m,f,h,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Qa(h,m.mode,v),f.return=m,f):(f=i(f,h.children||[]),f.return=m,f)}function c(m,f,h,v,E){return f===null||f.tag!==7?(f=Fn(h,m.mode,v,E),f.return=m,f):(f=i(f,h),f.return=m,f)}function d(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ga(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case hs:return h=qs(f.type,f.key,f.props,null,m.mode,h),h.ref=Zr(m,null,f),h.return=m,h;case ur:return f=Qa(f,m.mode,h),f.return=m,f;case Ht:var v=f._init;return d(m,v(f._payload),h)}if(si(f)||Gr(f))return f=Fn(f,m.mode,h,null),f.return=m,f;Ss(m,f)}return null}function p(m,f,h,v){var E=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(m,f,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case hs:return h.key===E?l(m,f,h,v):null;case ur:return h.key===E?u(m,f,h,v):null;case Ht:return E=h._init,p(m,f,E(h._payload),v)}if(si(h)||Gr(h))return E!==null?null:c(m,f,h,v,null);Ss(m,h)}return null}function y(m,f,h,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(h)||null,a(f,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hs:return m=m.get(v.key===null?h:v.key)||null,l(f,m,v,E);case ur:return m=m.get(v.key===null?h:v.key)||null,u(f,m,v,E);case Ht:var k=v._init;return y(m,f,h,k(v._payload),E)}if(si(v)||Gr(v))return m=m.get(h)||null,c(f,m,v,E,null);Ss(f,v)}return null}function _(m,f,h,v){for(var E=null,k=null,P=f,R=f=0,j=null;P!==null&&R<h.length;R++){P.index>R?(j=P,P=null):j=P.sibling;var N=p(m,P,h[R],v);if(N===null){P===null&&(P=j);break}t&&P&&N.alternate===null&&e(m,P),f=s(N,f,R),k===null?E=N:k.sibling=N,k=N,P=j}if(R===h.length)return n(m,P),K&&xn(m,R),E;if(P===null){for(;R<h.length;R++)P=d(m,h[R],v),P!==null&&(f=s(P,f,R),k===null?E=P:k.sibling=P,k=P);return K&&xn(m,R),E}for(P=r(m,P);R<h.length;R++)j=y(P,m,R,h[R],v),j!==null&&(t&&j.alternate!==null&&P.delete(j.key===null?R:j.key),f=s(j,f,R),k===null?E=j:k.sibling=j,k=j);return t&&P.forEach(function(Te){return e(m,Te)}),K&&xn(m,R),E}function w(m,f,h,v){var E=Gr(h);if(typeof E!="function")throw Error(I(150));if(h=E.call(h),h==null)throw Error(I(151));for(var k=E=null,P=f,R=f=0,j=null,N=h.next();P!==null&&!N.done;R++,N=h.next()){P.index>R?(j=P,P=null):j=P.sibling;var Te=p(m,P,N.value,v);if(Te===null){P===null&&(P=j);break}t&&P&&Te.alternate===null&&e(m,P),f=s(Te,f,R),k===null?E=Te:k.sibling=Te,k=Te,P=j}if(N.done)return n(m,P),K&&xn(m,R),E;if(P===null){for(;!N.done;R++,N=h.next())N=d(m,N.value,v),N!==null&&(f=s(N,f,R),k===null?E=N:k.sibling=N,k=N);return K&&xn(m,R),E}for(P=r(m,P);!N.done;R++,N=h.next())N=y(P,m,R,N.value,v),N!==null&&(t&&N.alternate!==null&&P.delete(N.key===null?R:N.key),f=s(N,f,R),k===null?E=N:k.sibling=N,k=N);return t&&P.forEach(function(kn){return e(m,kn)}),K&&xn(m,R),E}function T(m,f,h,v){if(typeof h=="object"&&h!==null&&h.type===cr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case hs:e:{for(var E=h.key,k=f;k!==null;){if(k.key===E){if(E=h.type,E===cr){if(k.tag===7){n(m,k.sibling),f=i(k,h.props.children),f.return=m,m=f;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ht&&Ud(E)===k.type){n(m,k.sibling),f=i(k,h.props),f.ref=Zr(m,k,h),f.return=m,m=f;break e}n(m,k);break}else e(m,k);k=k.sibling}h.type===cr?(f=Fn(h.props.children,m.mode,v,h.key),f.return=m,m=f):(v=qs(h.type,h.key,h.props,null,m.mode,v),v.ref=Zr(m,f,h),v.return=m,m=v)}return o(m);case ur:e:{for(k=h.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(m,f.sibling),f=i(f,h.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Qa(h,m.mode,v),f.return=m,m=f}return o(m);case Ht:return k=h._init,T(m,f,k(h._payload),v)}if(si(h))return _(m,f,h,v);if(Gr(h))return w(m,f,h,v);Ss(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,h),f.return=m,m=f):(n(m,f),f=Ga(h,m.mode,v),f.return=m,m=f),o(m)):n(m,f)}return T}var br=Vp(!0),Up=Vp(!1),fo=wn(null),ho=null,yr=null,Yu=null;function Ju(){Yu=yr=ho=null}function Xu(t){var e=fo.current;W(fo),t._currentValue=e}function Hl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function kr(t,e){ho=t,Yu=yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(be=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(Yu!==t)if(t={context:t,memoizedValue:e,next:null},yr===null){if(ho===null)throw Error(I(308));yr=t,ho.dependencies={lanes:0,firstContext:t}}else yr=yr.next=t;return e}var Dn=null;function Zu(t){Dn===null?Dn=[t]:Dn.push(t)}function jp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vt(t,r)}function Vt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wt=!1;function ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vt(t,n)}return i=r.interleaved,i===null?(e.next=e,Zu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vt(t,n)}function zs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ju(t,n)}}function jd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function po(t,e,n,r){var i=t.updateQueue;Wt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(p=e,y=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(y,d,p);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,p=typeof _=="function"?_.call(y,d,p):_,p==null)break e;d=Q({},d,p);break e;case 2:Wt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kn|=o,t.lanes=o,t.memoizedState=d}}function Fd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var rs={},wt=wn(rs),Di=wn(rs),Mi=wn(rs);function Mn(t){if(t===rs)throw Error(I(174));return t}function tc(t,e){switch($(Mi,e),$(Di,t),$(wt,rs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sl(e,t)}W(wt),$(wt,e)}function Lr(){W(wt),W(Di),W(Mi)}function zp(t){Mn(Mi.current);var e=Mn(wt.current),n=Sl(e,t.type);e!==n&&($(Di,t),$(wt,n))}function nc(t){Di.current===t&&(W(wt),W(Di))}var q=wn(0);function mo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $a=[];function rc(){for(var t=0;t<$a.length;t++)$a[t]._workInProgressVersionPrimary=null;$a.length=0}var $s=zt.ReactCurrentDispatcher,Ba=zt.ReactCurrentBatchConfig,Wn=0,G=null,ie=null,le=null,go=!1,hi=!1,Vi=0,Xy=0;function ge(){throw Error(I(321))}function ic(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function sc(t,e,n,r,i,s){if(Wn=s,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$s.current=t===null||t.memoizedState===null?n1:r1,t=n(r,i),hi){s=0;do{if(hi=!1,Vi=0,25<=s)throw Error(I(301));s+=1,le=ie=null,e.updateQueue=null,$s.current=i1,t=n(r,i)}while(hi)}if($s.current=vo,e=ie!==null&&ie.next!==null,Wn=0,le=ie=G=null,go=!1,e)throw Error(I(300));return t}function oc(){var t=Vi!==0;return Vi=0,t}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=t:le=le.next=t,le}function et(){if(ie===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=le===null?G.memoizedState:le.next;if(e!==null)le=e,ie=t;else{if(t===null)throw Error(I(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},le===null?G.memoizedState=le=t:le=le.next=t}return le}function Ui(t,e){return typeof e=="function"?e(t):e}function Ha(t){var e=et(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,G.lanes|=c,Kn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,ft(r,e.memoizedState)||(be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,G.lanes|=s,Kn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wa(t){var e=et(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ft(s,e.memoizedState)||(be=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $p(){}function Bp(t,e){var n=G,r=et(),i=e(),s=!ft(r.memoizedState,i);if(s&&(r.memoizedState=i,be=!0),r=r.queue,ac(Kp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ji(9,Wp.bind(null,n,r,i,e),void 0,null),ce===null)throw Error(I(349));Wn&30||Hp(n,e,i)}return i}function Hp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wp(t,e,n,r){e.value=n,e.getSnapshot=r,qp(e)&&Gp(t)}function Kp(t,e,n){return n(function(){qp(e)&&Gp(t)})}function qp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function Gp(t){var e=Vt(t,1);e!==null&&ut(e,t,1,-1)}function zd(t){var e=mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},e.queue=t,t=t.dispatch=t1.bind(null,G,t),[e.memoizedState,t]}function ji(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=G.updateQueue,e===null?(e={lastEffect:null,stores:null},G.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qp(){return et().memoizedState}function Bs(t,e,n,r){var i=mt();G.flags|=t,i.memoizedState=ji(1|e,n,void 0,r===void 0?null:r)}function Go(t,e,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&ic(r,o.deps)){i.memoizedState=ji(e,n,s,r);return}}G.flags|=t,i.memoizedState=ji(1|e,n,s,r)}function $d(t,e){return Bs(8390656,8,t,e)}function ac(t,e){return Go(2048,8,t,e)}function Yp(t,e){return Go(4,2,t,e)}function Jp(t,e){return Go(4,4,t,e)}function Xp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zp(t,e,n){return n=n!=null?n.concat([t]):null,Go(4,4,Xp.bind(null,e,t),n)}function lc(){}function em(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ic(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tm(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ic(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nm(t,e,n){return Wn&21?(ft(n,e)||(n=ap(),G.lanes|=n,Kn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,be=!0),t.memoizedState=n)}function Zy(t,e){var n=z;z=n!==0&&4>n?n:4,t(!0);var r=Ba.transition;Ba.transition={};try{t(!1),e()}finally{z=n,Ba.transition=r}}function rm(){return et().memoizedState}function e1(t,e,n){var r=cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},im(t))sm(e,n);else if(n=jp(t,e,n,r),n!==null){var i=Pe();ut(n,t,r,i),om(n,e,r)}}function t1(t,e,n){var r=cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(im(t))sm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,o)){var l=e.interleaved;l===null?(i.next=i,Zu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=jp(t,e,i,r),n!==null&&(i=Pe(),ut(n,t,r,i),om(n,e,r))}}function im(t){var e=t.alternate;return t===G||e!==null&&e===G}function sm(t,e){hi=go=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function om(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ju(t,n)}}var vo={readContext:Ze,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},n1={readContext:Ze,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:$d,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bs(4194308,4,Xp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bs(4,2,t,e)},useMemo:function(t,e){var n=mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=e1.bind(null,G,t),[r.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:zd,useDebugValue:lc,useDeferredValue:function(t){return mt().memoizedState=t},useTransition:function(){var t=zd(!1),e=t[0];return t=Zy.bind(null,t[1]),mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=G,i=mt();if(K){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ce===null)throw Error(I(349));Wn&30||Hp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$d(Kp.bind(null,r,s,t),[t]),r.flags|=2048,ji(9,Wp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mt(),e=ce.identifierPrefix;if(K){var n=Rt,r=Ct;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Xy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},r1={readContext:Ze,useCallback:em,useContext:Ze,useEffect:ac,useImperativeHandle:Zp,useInsertionEffect:Yp,useLayoutEffect:Jp,useMemo:tm,useReducer:Ha,useRef:Qp,useState:function(){return Ha(Ui)},useDebugValue:lc,useDeferredValue:function(t){var e=et();return nm(e,ie.memoizedState,t)},useTransition:function(){var t=Ha(Ui)[0],e=et().memoizedState;return[t,e]},useMutableSource:$p,useSyncExternalStore:Bp,useId:rm,unstable_isNewReconciler:!1},i1={readContext:Ze,useCallback:em,useContext:Ze,useEffect:ac,useImperativeHandle:Zp,useInsertionEffect:Yp,useLayoutEffect:Jp,useMemo:tm,useReducer:Wa,useRef:Qp,useState:function(){return Wa(Ui)},useDebugValue:lc,useDeferredValue:function(t){var e=et();return ie===null?e.memoizedState=t:nm(e,ie.memoizedState,t)},useTransition:function(){var t=Wa(Ui)[0],e=et().memoizedState;return[t,e]},useMutableSource:$p,useSyncExternalStore:Bp,useId:rm,unstable_isNewReconciler:!1};function st(t,e){if(t&&t.defaultProps){e=Q({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Q({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qo={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=cn(t),s=bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ut(e,t,i,r),zs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=cn(t),s=bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ut(e,t,i,r),zs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),r=cn(t),i=bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=ln(t,i,r),e!==null&&(ut(e,t,r,n),zs(e,t,r))}};function Bd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ni(n,r)||!Ni(i,s):!0}function am(t,e,n){var r=!1,i=vn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=De(e)?Bn:we.current,r=e.contextTypes,s=(r=r!=null)?Nr(t,i):vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qo.enqueueReplaceState(e,e.state,null)}function Kl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ec(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=De(e)?Bn:we.current,i.context=Nr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qo.enqueueReplaceState(i,i.state,null),po(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Dr(t,e){try{var n="",r=e;do n+=Ov(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ka(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ql(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var s1=typeof WeakMap=="function"?WeakMap:Map;function lm(t,e,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_o||(_o=!0,ru=r),ql(t,e)},n}function um(t,e,n){n=bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ql(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ql(t,e),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new s1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_1.bind(null,t,e,n),e.then(t,t))}function Kd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bt(-1,1),e.tag=2,ln(n,e,1))),n.lanes|=1),t)}var o1=zt.ReactCurrentOwner,be=!1;function Se(t,e,n,r){e.child=t===null?Up(e,null,n,r):br(e,t.child,n,r)}function Gd(t,e,n,r,i){n=n.render;var s=e.ref;return kr(e,i),r=sc(t,e,n,r,s,i),n=oc(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ut(t,e,i)):(K&&n&&qu(e),e.flags|=1,Se(t,e,r,i),e.child)}function Qd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cm(t,e,s,r,i)):(t=qs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ni,n(o,r)&&t.ref===e.ref)return Ut(t,e,i)}return e.flags|=1,t=dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function cm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ni(s,r)&&t.ref===e.ref)if(be=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(be=!0);else return e.lanes=t.lanes,Ut(t,e,i)}return Gl(t,e,n,r,i)}function dm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(wr,je),je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$(wr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,$(wr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,$(wr,je),je|=r;return Se(t,e,i,n),e.child}function fm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gl(t,e,n,r,i){var s=De(n)?Bn:we.current;return s=Nr(e,s),kr(e,i),n=sc(t,e,n,r,s,i),r=oc(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Ut(t,e,i)):(K&&r&&qu(e),e.flags|=1,Se(t,e,n,i),e.child)}function Yd(t,e,n,r,i){if(De(n)){var s=!0;lo(e)}else s=!1;if(kr(e,i),e.stateNode===null)Hs(t,e),am(e,n,r),Kl(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=De(n)?Bn:we.current,u=Nr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Hd(e,o,r,u),Wt=!1;var p=e.memoizedState;o.state=p,po(e,r,o,i),l=e.memoizedState,a!==r||p!==l||Le.current||Wt?(typeof c=="function"&&(Wl(e,n,c,r),l=e.memoizedState),(a=Wt||Bd(e,n,a,r,p,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Fp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:st(e.type,a),o.props=u,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ze(l):(l=De(n)?Bn:we.current,l=Nr(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&Hd(e,o,r,l),Wt=!1,p=e.memoizedState,o.state=p,po(e,r,o,i);var _=e.memoizedState;a!==d||p!==_||Le.current||Wt?(typeof y=="function"&&(Wl(e,n,y,r),_=e.memoizedState),(u=Wt||Bd(e,n,u,r,p,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Ql(t,e,n,r,s,i)}function Ql(t,e,n,r,i,s){fm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dd(e,n,!1),Ut(t,e,s);r=e.stateNode,o1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=br(e,t.child,null,s),e.child=br(e,null,a,s)):Se(t,e,a,s),e.memoizedState=r.state,i&&Dd(e,n,!0),e.child}function hm(t){var e=t.stateNode;e.pendingContext?Ld(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ld(t,e.context,!1),tc(t,e.containerInfo)}function Jd(t,e,n,r,i){return Or(),Qu(i),e.flags|=256,Se(t,e,n,r),e.child}var Yl={dehydrated:null,treeContext:null,retryLane:0};function Jl(t){return{baseLanes:t,cachePool:null,transitions:null}}function pm(t,e,n){var r=e.pendingProps,i=q.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),$(q,i&1),t===null)return Bl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xo(o,r,0,null),t=Fn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jl(n),e.memoizedState=Yl,t):uc(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return a1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dn(a,s):(s=Fn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yl,r}return s=t.child,t=s.sibling,r=dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uc(t,e){return e=Xo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ks(t,e,n,r){return r!==null&&Qu(r),br(e,t.child,null,n),t=uc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function a1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ka(Error(I(422))),ks(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xo({mode:"visible",children:r.children},i,0,null),s=Fn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&br(e,t.child,null,o),e.child.memoizedState=Jl(o),e.memoizedState=Yl,s);if(!(e.mode&1))return ks(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Ka(s,r,void 0),ks(t,e,o,r)}if(a=(o&t.childLanes)!==0,be||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(t,i),ut(r,t,i,-1))}return mc(),r=Ka(Error(I(421))),ks(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=w1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Fe=an(i.nextSibling),$e=e,K=!0,at=null,t!==null&&(Ge[Qe++]=Ct,Ge[Qe++]=Rt,Ge[Qe++]=Hn,Ct=t.id,Rt=t.overflow,Hn=e),e=uc(e,r.children),e.flags|=4096,e)}function Xd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hl(t.return,e,n)}function qa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Se(t,e,r.children,n),r=q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xd(t,n,e);else if(t.tag===19)Xd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&mo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&mo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qa(e,!0,n,null,s);break;case"together":qa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ut(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function l1(t,e,n){switch(e.tag){case 3:hm(e),Or();break;case 5:zp(e);break;case 1:De(e.type)&&lo(e);break;case 4:tc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;$(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?($(q,q.current&1),e.flags|=128,null):n&e.child.childLanes?pm(t,e,n):($(q,q.current&1),t=Ut(t,e,n),t!==null?t.sibling:null);$(q,q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(q,q.current),r)break;return null;case 22:case 23:return e.lanes=0,dm(t,e,n)}return Ut(t,e,n)}var gm,Xl,vm,ym;gm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xl=function(){};vm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mn(wt.current);var s=null;switch(n){case"input":i=wl(t,i),r=wl(t,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Il(t,i),r=Il(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=oo)}kl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Si.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Si.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ym=function(t,e,n,r){n!==r&&(e.flags|=4)};function ei(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function u1(t,e,n){var r=e.pendingProps;switch(Gu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(e),null;case 1:return De(e.type)&&ao(),ve(e),null;case 3:return r=e.stateNode,Lr(),W(Le),W(we),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Is(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,at!==null&&(ou(at),at=null))),Xl(t,e),ve(e),null;case 5:nc(e);var i=Mn(Mi.current);if(n=e.type,t!==null&&e.stateNode!=null)vm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ve(e),null}if(t=Mn(wt.current),Is(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gt]=e,r[Li]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<ai.length;i++)H(ai[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ad(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":ud(r,s),H("invalid",r)}kl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ts(r.textContent,a,t),i=["children",""+a]):Si.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":ps(r),ld(r,s,!0);break;case"textarea":ps(r),cd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=oo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gt]=e,t[Li]=r,gm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pl(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<ai.length;i++)H(ai[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":ad(t,r),i=wl(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",t);break;case"textarea":ud(t,r),i=Il(t,r),H("invalid",t);break;default:i=r}kl(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Qh(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&qh(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ki(t,l):typeof l=="number"&&ki(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Si.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",t):l!=null&&bu(t,s,l,o))}switch(n){case"input":ps(t),ld(t,r,!1);break;case"textarea":ps(t),cd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Er(t,!!r.multiple,s,!1):r.defaultValue!=null&&Er(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ve(e),null;case 6:if(t&&e.stateNode!=null)ym(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Mn(Mi.current),Mn(wt.current),Is(e)){if(r=e.stateNode,n=e.memoizedProps,r[gt]=e,(s=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:Ts(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ts(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=e,e.stateNode=r}return ve(e),null;case 13:if(W(q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(K&&Fe!==null&&e.mode&1&&!(e.flags&128))Mp(),Or(),e.flags|=98560,s=!1;else if(s=Is(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[gt]=e}else Or(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ve(e),s=!1}else at!==null&&(ou(at),at=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||q.current&1?oe===0&&(oe=3):mc())),e.updateQueue!==null&&(e.flags|=4),ve(e),null);case 4:return Lr(),Xl(t,e),t===null&&Oi(e.stateNode.containerInfo),ve(e),null;case 10:return Xu(e.type._context),ve(e),null;case 17:return De(e.type)&&ao(),ve(e),null;case 19:if(W(q),s=e.memoizedState,s===null)return ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ei(s,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=mo(t),o!==null){for(e.flags|=128,ei(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(q,q.current&1|2),e.child}t=t.sibling}s.tail!==null&&te()>Mr&&(e.flags|=128,r=!0,ei(s,!1),e.lanes=4194304)}else{if(!r)if(t=mo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ei(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return ve(e),null}else 2*te()-s.renderingStartTime>Mr&&n!==1073741824&&(e.flags|=128,r=!0,ei(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=te(),e.sibling=null,n=q.current,$(q,r?n&1|2:n&1),e):(ve(e),null);case 22:case 23:return pc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(ve(e),e.subtreeFlags&6&&(e.flags|=8192)):ve(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function c1(t,e){switch(Gu(e),e.tag){case 1:return De(e.type)&&ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Lr(),W(Le),W(we),rc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nc(e),null;case 13:if(W(q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Or()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(q),null;case 4:return Lr(),null;case 10:return Xu(e.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Ps=!1,_e=!1,d1=typeof WeakSet=="function"?WeakSet:Set,A=null;function _r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(t,e,r)}else n.current=null}function Zl(t,e,n){try{n()}catch(r){Y(t,e,r)}}var Zd=!1;function f1(t,e){if(Ml=ro,t=Ip(),Ku(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,p=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)p=d,d=y;for(;;){if(d===t)break t;if(p===n&&++u===i&&(a=o),p===s&&++c===r&&(l=o),(y=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vl={focusedElem:t,selectionRange:n},ro=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,T=_.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:st(e.type,w),T);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(v){Y(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return _=Zd,Zd=!1,_}function pi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zl(e,n,s)}i=i.next}while(i!==r)}}function Yo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function eu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _m(t){var e=t.alternate;e!==null&&(t.alternate=null,_m(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gt],delete e[Li],delete e[Fl],delete e[Gy],delete e[Qy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wm(t){return t.tag===5||t.tag===3||t.tag===4}function ef(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oo));else if(r!==4&&(t=t.child,t!==null))for(tu(t,e,n),t=t.sibling;t!==null;)tu(t,e,n),t=t.sibling}function nu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(nu(t,e,n),t=t.sibling;t!==null;)nu(t,e,n),t=t.sibling}var fe=null,ot=!1;function $t(t,e,n){for(n=n.child;n!==null;)Em(t,e,n),n=n.sibling}function Em(t,e,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount($o,n)}catch{}switch(n.tag){case 5:_e||_r(n,e);case 6:var r=fe,i=ot;fe=null,$t(t,e,n),fe=r,ot=i,fe!==null&&(ot?(t=fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(ot?(t=fe,n=n.stateNode,t.nodeType===8?Fa(t.parentNode,n):t.nodeType===1&&Fa(t,n),Ai(t)):Fa(fe,n.stateNode));break;case 4:r=fe,i=ot,fe=n.stateNode.containerInfo,ot=!0,$t(t,e,n),fe=r,ot=i;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zl(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!_e&&(_r(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,e,a)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,$t(t,e,n),_e=r):$t(t,e,n);break;default:$t(t,e,n)}}function tf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new d1),e.forEach(function(r){var i=E1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,ot=!1;break e;case 3:fe=a.stateNode.containerInfo,ot=!0;break e;case 4:fe=a.stateNode.containerInfo,ot=!0;break e}a=a.return}if(fe===null)throw Error(I(160));Em(s,o,i),fe=null,ot=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Y(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tm(e,t),e=e.sibling}function Tm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(it(e,t),pt(t),r&4){try{pi(3,t,t.return),Yo(3,t)}catch(w){Y(t,t.return,w)}try{pi(5,t,t.return)}catch(w){Y(t,t.return,w)}}break;case 1:it(e,t),pt(t),r&512&&n!==null&&_r(n,n.return);break;case 5:if(it(e,t),pt(t),r&512&&n!==null&&_r(n,n.return),t.flags&32){var i=t.stateNode;try{ki(i,"")}catch(w){Y(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hh(i,s),Pl(a,o);var u=Pl(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Qh(i,d):c==="dangerouslySetInnerHTML"?qh(i,d):c==="children"?ki(i,d):bu(i,c,d,u)}switch(a){case"input":El(i,s);break;case"textarea":Wh(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Er(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?Er(i,!!s.multiple,s.defaultValue,!0):Er(i,!!s.multiple,s.multiple?[]:"",!1))}i[Li]=s}catch(w){Y(t,t.return,w)}}break;case 6:if(it(e,t),pt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Y(t,t.return,w)}}break;case 3:if(it(e,t),pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ai(e.containerInfo)}catch(w){Y(t,t.return,w)}break;case 4:it(e,t),pt(t);break;case 13:it(e,t),pt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fc=te())),r&4&&tf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_e=(u=_e)||c,it(e,t),_e=u):it(e,t),pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(A=t,c=t.child;c!==null;){for(d=A=c;A!==null;){switch(p=A,y=p.child,p.tag){case 0:case 11:case 14:case 15:pi(4,p,p.return);break;case 1:_r(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){Y(r,n,w)}}break;case 5:_r(p,p.return);break;case 22:if(p.memoizedState!==null){rf(d);continue}}y!==null?(y.return=p,A=y):rf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gh("display",o))}catch(w){Y(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Y(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(e,t),pt(t),r&4&&tf(t);break;case 21:break;default:it(e,t),pt(t)}}function pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wm(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ki(i,""),r.flags&=-33);var s=ef(t);nu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ef(t);tu(t,a,o);break;default:throw Error(I(161))}}catch(l){Y(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h1(t,e,n){A=t,Im(t)}function Im(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ps;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_e;a=Ps;var u=_e;if(Ps=o,(_e=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?sf(i):l!==null?(l.return=o,A=l):sf(i);for(;s!==null;)A=s,Im(s),s=s.sibling;A=i,Ps=a,_e=u}nf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):nf(t)}}function nf(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_e||Yo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_e)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:st(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ai(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}_e||e.flags&512&&eu(e)}catch(p){Y(e,e.return,p)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function rf(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function sf(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yo(4,e)}catch(l){Y(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Y(e,i,l)}}var s=e.return;try{eu(e)}catch(l){Y(e,s,l)}break;case 5:var o=e.return;try{eu(e)}catch(l){Y(e,o,l)}}}catch(l){Y(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var p1=Math.ceil,yo=zt.ReactCurrentDispatcher,cc=zt.ReactCurrentOwner,Xe=zt.ReactCurrentBatchConfig,U=0,ce=null,ne=null,pe=0,je=0,wr=wn(0),oe=0,Fi=null,Kn=0,Jo=0,dc=0,mi=null,xe=null,fc=0,Mr=1/0,St=null,_o=!1,ru=null,un=null,Cs=!1,tn=null,wo=0,gi=0,iu=null,Ws=-1,Ks=0;function Pe(){return U&6?te():Ws!==-1?Ws:Ws=te()}function cn(t){return t.mode&1?U&2&&pe!==0?pe&-pe:Jy.transition!==null?(Ks===0&&(Ks=ap()),Ks):(t=z,t!==0||(t=window.event,t=t===void 0?16:pp(t.type)),t):1}function ut(t,e,n,r){if(50<gi)throw gi=0,iu=null,Error(I(185));es(t,n,r),(!(U&2)||t!==ce)&&(t===ce&&(!(U&2)&&(Jo|=n),oe===4&&Qt(t,pe)),Me(t,r),n===1&&U===0&&!(e.mode&1)&&(Mr=te()+500,qo&&En()))}function Me(t,e){var n=t.callbackNode;Jv(t,e);var r=no(t,t===ce?pe:0);if(r===0)n!==null&&hd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hd(n),e===1)t.tag===0?Yy(of.bind(null,t)):bp(of.bind(null,t)),Ky(function(){!(U&6)&&En()}),n=null;else{switch(lp(r)){case 1:n=Uu;break;case 4:n=sp;break;case 16:n=to;break;case 536870912:n=op;break;default:n=to}n=Nm(n,Sm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sm(t,e){if(Ws=-1,Ks=0,U&6)throw Error(I(327));var n=t.callbackNode;if(Pr()&&t.callbackNode!==n)return null;var r=no(t,t===ce?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Eo(t,r);else{e=r;var i=U;U|=2;var s=Pm();(ce!==t||pe!==e)&&(St=null,Mr=te()+500,jn(t,e));do try{v1();break}catch(a){km(t,a)}while(1);Ju(),yo.current=s,U=i,ne!==null?e=0:(ce=null,pe=0,e=oe)}if(e!==0){if(e===2&&(i=Nl(t),i!==0&&(r=i,e=su(t,i))),e===1)throw n=Fi,jn(t,0),Qt(t,r),Me(t,te()),n;if(e===6)Qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!m1(i)&&(e=Eo(t,r),e===2&&(s=Nl(t),s!==0&&(r=s,e=su(t,s))),e===1))throw n=Fi,jn(t,0),Qt(t,r),Me(t,te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Nn(t,xe,St);break;case 3:if(Qt(t,r),(r&130023424)===r&&(e=fc+500-te(),10<e)){if(no(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jl(Nn.bind(null,t,xe,St),e);break}Nn(t,xe,St);break;case 4:if(Qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p1(r/1960))-r,10<r){t.timeoutHandle=jl(Nn.bind(null,t,xe,St),r);break}Nn(t,xe,St);break;case 5:Nn(t,xe,St);break;default:throw Error(I(329))}}}return Me(t,te()),t.callbackNode===n?Sm.bind(null,t):null}function su(t,e){var n=mi;return t.current.memoizedState.isDehydrated&&(jn(t,e).flags|=256),t=Eo(t,e),t!==2&&(e=xe,xe=n,e!==null&&ou(e)),t}function ou(t){xe===null?xe=t:xe.push.apply(xe,t)}function m1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~dc,e&=~Jo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lt(e),r=1<<n;t[n]=-1,e&=~r}}function of(t){if(U&6)throw Error(I(327));Pr();var e=no(t,0);if(!(e&1))return Me(t,te()),null;var n=Eo(t,e);if(t.tag!==0&&n===2){var r=Nl(t);r!==0&&(e=r,n=su(t,r))}if(n===1)throw n=Fi,jn(t,0),Qt(t,e),Me(t,te()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nn(t,xe,St),Me(t,te()),null}function hc(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Mr=te()+500,qo&&En())}}function qn(t){tn!==null&&tn.tag===0&&!(U&6)&&Pr();var e=U;U|=1;var n=Xe.transition,r=z;try{if(Xe.transition=null,z=1,t)return t()}finally{z=r,Xe.transition=n,U=e,!(U&6)&&En()}}function pc(){je=wr.current,W(wr)}function jn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Wy(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(Gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:Lr(),W(Le),W(we),rc();break;case 5:nc(r);break;case 4:Lr();break;case 13:W(q);break;case 19:W(q);break;case 10:Xu(r.type._context);break;case 22:case 23:pc()}n=n.return}if(ce=t,ne=t=dn(t.current,null),pe=je=e,oe=0,Fi=null,dc=Jo=Kn=0,xe=mi=null,Dn!==null){for(e=0;e<Dn.length;e++)if(n=Dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dn=null}return t}function km(t,e){do{var n=ne;try{if(Ju(),$s.current=vo,go){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(Wn=0,le=ie=G=null,hi=!1,Vi=0,cc.current=null,n===null||n.return===null){oe=1,Fi=e,ne=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=Kd(o);if(y!==null){y.flags&=-257,qd(y,o,a,s,e),y.mode&1&&Wd(s,u,e),e=y,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){Wd(s,u,e),mc();break e}l=Error(I(426))}}else if(K&&a.mode&1){var T=Kd(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),qd(T,o,a,s,e),Qu(Dr(l,a));break e}}s=l=Dr(l,a),oe!==4&&(oe=2),mi===null?mi=[s]:mi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=lm(s,l,e);jd(s,m);break e;case 1:a=l;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(un===null||!un.has(h)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=um(s,a,e);jd(s,v);break e}}s=s.return}while(s!==null)}Rm(n)}catch(E){e=E,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(1)}function Pm(){var t=yo.current;return yo.current=vo,t===null?vo:t}function mc(){(oe===0||oe===3||oe===2)&&(oe=4),ce===null||!(Kn&268435455)&&!(Jo&268435455)||Qt(ce,pe)}function Eo(t,e){var n=U;U|=2;var r=Pm();(ce!==t||pe!==e)&&(St=null,jn(t,e));do try{g1();break}catch(i){km(t,i)}while(1);if(Ju(),U=n,yo.current=r,ne!==null)throw Error(I(261));return ce=null,pe=0,oe}function g1(){for(;ne!==null;)Cm(ne)}function v1(){for(;ne!==null&&!$v();)Cm(ne)}function Cm(t){var e=xm(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?Rm(t):ne=e,cc.current=null}function Rm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=c1(n,e),n!==null){n.flags&=32767,ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,ne=null;return}}else if(n=u1(n,e,je),n!==null){ne=n;return}if(e=e.sibling,e!==null){ne=e;return}ne=e=t}while(e!==null);oe===0&&(oe=5)}function Nn(t,e,n){var r=z,i=Xe.transition;try{Xe.transition=null,z=1,y1(t,e,n,r)}finally{Xe.transition=i,z=r}return null}function y1(t,e,n,r){do Pr();while(tn!==null);if(U&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Xv(t,s),t===ce&&(ne=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cs||(Cs=!0,Nm(to,function(){return Pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xe.transition,Xe.transition=null;var o=z;z=1;var a=U;U|=4,cc.current=null,f1(t,n),Tm(n,t),Uy(Vl),ro=!!Ml,Vl=Ml=null,t.current=n,h1(n),Bv(),U=a,z=o,Xe.transition=s}else t.current=n;if(Cs&&(Cs=!1,tn=t,wo=i),s=t.pendingLanes,s===0&&(un=null),Kv(n.stateNode),Me(t,te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,t=ru,ru=null,t;return wo&1&&t.tag!==0&&Pr(),s=t.pendingLanes,s&1?t===iu?gi++:(gi=0,iu=t):gi=0,En(),null}function Pr(){if(tn!==null){var t=lp(wo),e=Xe.transition,n=z;try{if(Xe.transition=null,z=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,wo=0,U&6)throw Error(I(331));var i=U;for(U|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var c=A;switch(c.tag){case 0:case 11:case 15:pi(8,c,s)}var d=c.child;if(d!==null)d.return=c,A=d;else for(;A!==null;){c=A;var p=c.sibling,y=c.return;if(_m(c),c===u){A=null;break}if(p!==null){p.return=y,A=p;break}A=y}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,A=h;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yo(9,a)}}catch(E){Y(a,a.return,E)}if(a===o){A=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,A=v;break e}A=a.return}}if(U=i,En(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot($o,t)}catch{}r=!0}return r}finally{z=n,Xe.transition=e}}return!1}function af(t,e,n){e=Dr(n,e),e=lm(t,e,1),t=ln(t,e,1),e=Pe(),t!==null&&(es(t,1,e),Me(t,e))}function Y(t,e,n){if(t.tag===3)af(t,t,n);else for(;e!==null;){if(e.tag===3){af(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){t=Dr(n,t),t=um(e,t,1),e=ln(e,t,1),t=Pe(),e!==null&&(es(e,1,t),Me(e,t));break}}e=e.return}}function _1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pe(),t.pingedLanes|=t.suspendedLanes&n,ce===t&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>te()-fc?jn(t,0):dc|=n),Me(t,e)}function Am(t,e){e===0&&(t.mode&1?(e=vs,vs<<=1,!(vs&130023424)&&(vs=4194304)):e=1);var n=Pe();t=Vt(t,e),t!==null&&(es(t,e,n),Me(t,n))}function w1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Am(t,n)}function E1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Am(t,n)}var xm;xm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Le.current)be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return be=!1,l1(t,e,n);be=!!(t.flags&131072)}else be=!1,K&&e.flags&1048576&&Lp(e,co,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hs(t,e),t=e.pendingProps;var i=Nr(e,we.current);kr(e,n),i=sc(null,e,r,t,i,n);var s=oc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,De(r)?(s=!0,lo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ec(e),i.updater=Qo,e.stateNode=i,i._reactInternals=e,Kl(e,r,t,n),e=Ql(null,e,r,!0,s,n)):(e.tag=0,K&&s&&qu(e),Se(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=I1(r),t=st(r,t),i){case 0:e=Gl(null,e,r,t,n);break e;case 1:e=Yd(null,e,r,t,n);break e;case 11:e=Gd(null,e,r,t,n);break e;case 14:e=Qd(null,e,r,st(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Gl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Yd(t,e,r,i,n);case 3:e:{if(hm(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Fp(t,e),po(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Dr(Error(I(423)),e),e=Jd(t,e,r,n,i);break e}else if(r!==i){i=Dr(Error(I(424)),e),e=Jd(t,e,r,n,i);break e}else for(Fe=an(e.stateNode.containerInfo.firstChild),$e=e,K=!0,at=null,n=Up(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){e=Ut(t,e,n);break e}Se(t,e,r,n)}e=e.child}return e;case 5:return zp(e),t===null&&Bl(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ul(r,i)?o=null:s!==null&&Ul(r,s)&&(e.flags|=32),fm(t,e),Se(t,e,o,n),e.child;case 6:return t===null&&Bl(e),null;case 13:return pm(t,e,n);case 4:return tc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=br(e,null,r,n):Se(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Gd(t,e,r,i,n);case 7:return Se(t,e,e.pendingProps,n),e.child;case 8:return Se(t,e,e.pendingProps.children,n),e.child;case 12:return Se(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,$(fo,r._currentValue),r._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===i.children&&!Le.current){e=Ut(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=bt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hl(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hl(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Se(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,kr(e,n),i=Ze(i),r=r(i),e.flags|=1,Se(t,e,r,n),e.child;case 14:return r=e.type,i=st(r,e.pendingProps),i=st(r.type,i),Qd(t,e,r,i,n);case 15:return cm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:st(r,i),Hs(t,e),e.tag=1,De(r)?(t=!0,lo(e)):t=!1,kr(e,n),am(e,r,i),Kl(e,r,i,n),Ql(null,e,r,!0,t,n);case 19:return mm(t,e,n);case 22:return dm(t,e,n)}throw Error(I(156,e.tag))};function Nm(t,e){return ip(t,e)}function T1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(t,e,n,r){return new T1(t,e,n,r)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function I1(t){if(typeof t=="function")return gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Du)return 11;if(t===Mu)return 14}return 2}function dn(t,e){var n=t.alternate;return n===null?(n=Ye(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cr:return Fn(n.children,i,s,e);case Lu:o=8,i|=8;break;case gl:return t=Ye(12,n,e,i|2),t.elementType=gl,t.lanes=s,t;case vl:return t=Ye(13,n,e,i),t.elementType=vl,t.lanes=s,t;case yl:return t=Ye(19,n,e,i),t.elementType=yl,t.lanes=s,t;case zh:return Xo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jh:o=10;break e;case Fh:o=9;break e;case Du:o=11;break e;case Mu:o=14;break e;case Ht:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ye(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fn(t,e,n,r){return t=Ye(7,t,r,e),t.lanes=n,t}function Xo(t,e,n,r){return t=Ye(22,t,r,e),t.elementType=zh,t.lanes=n,t.stateNode={isHidden:!1},t}function Ga(t,e,n){return t=Ye(6,t,null,e),t.lanes=n,t}function Qa(t,e,n){return e=Ye(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function S1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(t,e,n,r,i,s,o,a,l){return t=new S1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ye(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(s),t}function k1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Om(t){if(!t)return vn;t=t._reactInternals;e:{if(nr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(De(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(De(n))return Op(t,n,e)}return e}function bm(t,e,n,r,i,s,o,a,l){return t=vc(n,r,!0,t,i,s,o,a,l),t.context=Om(null),n=t.current,r=Pe(),i=cn(n),s=bt(r,i),s.callback=e??null,ln(n,s,i),t.current.lanes=i,es(t,i,r),Me(t,r),t}function Zo(t,e,n,r){var i=e.current,s=Pe(),o=cn(i);return n=Om(n),e.context===null?e.context=n:e.pendingContext=n,e=bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ln(i,e,o),t!==null&&(ut(t,i,o,s),zs(t,i,o)),o}function To(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yc(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function P1(){return null}var Lm=typeof reportError=="function"?reportError:function(t){console.error(t)};function _c(t){this._internalRoot=t}ea.prototype.render=_c.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Zo(t,e,null,null)};ea.prototype.unmount=_c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qn(function(){Zo(null,t,null,null)}),e[Mt]=null}};function ea(t){this._internalRoot=t}ea.prototype.unstable_scheduleHydration=function(t){if(t){var e=dp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gt.length&&e!==0&&e<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&hp(t)}};function wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ta(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uf(){}function C1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=To(o);s.call(u)}}var o=bm(e,r,t,0,null,!1,!1,"",uf);return t._reactRootContainer=o,t[Mt]=o.current,Oi(t.nodeType===8?t.parentNode:t),qn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=To(l);a.call(u)}}var l=vc(t,0,!1,null,null,!1,!1,"",uf);return t._reactRootContainer=l,t[Mt]=l.current,Oi(t.nodeType===8?t.parentNode:t),qn(function(){Zo(e,l,n,r)}),l}function na(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=To(o);a.call(l)}}Zo(e,o,t,i)}else o=C1(n,e,t,i,r);return To(o)}up=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oi(e.pendingLanes);n!==0&&(ju(e,n|1),Me(e,te()),!(U&6)&&(Mr=te()+500,En()))}break;case 13:qn(function(){var r=Vt(t,1);if(r!==null){var i=Pe();ut(r,t,1,i)}}),yc(t,1)}};Fu=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var n=Pe();ut(e,t,134217728,n)}yc(t,134217728)}};cp=function(t){if(t.tag===13){var e=cn(t),n=Vt(t,e);if(n!==null){var r=Pe();ut(n,t,e,r)}yc(t,e)}};dp=function(){return z};fp=function(t,e){var n=z;try{return z=t,e()}finally{z=n}};Rl=function(t,e,n){switch(e){case"input":if(El(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ko(r);if(!i)throw Error(I(90));Bh(r),El(r,i)}}}break;case"textarea":Wh(t,n);break;case"select":e=n.value,e!=null&&Er(t,!!n.multiple,e,!1)}};Xh=hc;Zh=qn;var R1={usingClientEntryPoint:!1,Events:[ns,pr,Ko,Yh,Jh,hc]},ti={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A1={bundleType:ti.bundleType,version:ti.version,rendererPackageName:ti.rendererPackageName,rendererConfig:ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=np(t),t===null?null:t.stateNode},findFiberByHostInstance:ti.findFiberByHostInstance||P1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{$o=Rs.inject(A1),_t=Rs}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R1;Ke.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(e))throw Error(I(200));return k1(t,e,null,n)};Ke.createRoot=function(t,e){if(!wc(t))throw Error(I(299));var n=!1,r="",i=Lm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vc(t,1,!1,null,null,n,!1,r,i),t[Mt]=e.current,Oi(t.nodeType===8?t.parentNode:t),new _c(e)};Ke.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=np(e),t=t===null?null:t.stateNode,t};Ke.flushSync=function(t){return qn(t)};Ke.hydrate=function(t,e,n){if(!ta(e))throw Error(I(200));return na(null,t,e,!0,n)};Ke.hydrateRoot=function(t,e,n){if(!wc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Lm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bm(e,null,t,1,n??null,i,!1,s,o),t[Mt]=e.current,Oi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ea(e)};Ke.render=function(t,e,n){if(!ta(e))throw Error(I(200));return na(null,t,e,!1,n)};Ke.unmountComponentAtNode=function(t){if(!ta(t))throw Error(I(40));return t._reactRootContainer?(qn(function(){na(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};Ke.unstable_batchedUpdates=hc;Ke.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ta(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return na(t,e,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function Dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dm)}catch(t){console.error(t)}}Dm(),Dh.exports=Ke;var x1=Dh.exports,cf=x1;pl.createRoot=cf.createRoot,pl.hydrateRoot=cf.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zi(){return zi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zi.apply(this,arguments)}var nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nn||(nn={}));const df="popstate";function N1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return au("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Io(i)}return b1(e,n,null,t)}function X(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function O1(){return Math.random().toString(36).substr(2,8)}function ff(t,e){return{usr:t.state,key:t.key,idx:e}}function au(t,e,n,r){return n===void 0&&(n=null),zi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wr(e):e,{state:n,key:e&&e.key||r||O1()})}function Io(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function b1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(zi({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=nn.Pop;let T=c(),m=T==null?null:T-u;u=T,l&&l({action:a,location:w.location,delta:m})}function p(T,m){a=nn.Push;let f=au(w.location,T,m);n&&n(f,T),u=c()+1;let h=ff(f,u),v=w.createHref(f);try{o.pushState(h,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(v)}s&&l&&l({action:a,location:w.location,delta:1})}function y(T,m){a=nn.Replace;let f=au(w.location,T,m);n&&n(f,T),u=c();let h=ff(f,u),v=w.createHref(f);o.replaceState(h,"",v),s&&l&&l({action:a,location:w.location,delta:0})}function _(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:Io(T);return f=f.replace(/ $/,"%20"),X(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(df,d),l=T,()=>{i.removeEventListener(df,d),l=null}},createHref(T){return e(i,T)},createURL:_,encodeLocation(T){let m=_(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:y,go(T){return o.go(T)}};return w}var hf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hf||(hf={}));function L1(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Wr(e):e,i=Vr(r.pathname||"/",n);if(i==null)return null;let s=Vm(t);D1(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=K1(i);o=H1(s[a],l)}return o}function Vm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(X(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=fn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(X(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Vm(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:$1(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Um(s.path))i(s,o,l)}),e}function Um(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Um(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function D1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:B1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const M1=/^:[\w-]+$/,V1=3,U1=2,j1=1,F1=10,z1=-2,pf=t=>t==="*";function $1(t,e){let n=t.split("/"),r=n.length;return n.some(pf)&&(r+=z1),e&&(r+=U1),n.filter(i=>!pf(i)).reduce((i,s)=>i+(M1.test(s)?V1:s===""?j1:F1),r)}function B1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function H1(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=lu({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:fn([i,c.pathname]),pathnameBase:Y1(fn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fn([i,c.pathnameBase]))}return s}function lu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=W1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:y}=c;if(p==="*"){let w=a[d]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const _=a[d];return y&&!_?u[p]=void 0:u[p]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function W1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function K1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function q1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Wr(t):t;return{pathname:n?n.startsWith("/")?n:G1(n,e):e,search:J1(r),hash:X1(i)}}function G1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ya(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Q1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jm(t,e){let n=Q1(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Fm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Wr(t):(i=zi({},t),X(!i.pathname||!i.pathname.includes("?"),Ya("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),Ya("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),Ya("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=q1(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const fn=t=>t.join("/").replace(/\/\/+/g,"/"),Y1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,X1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Z1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zm=["post","put","patch","delete"];new Set(zm);const e_=["get",...zm];new Set(e_);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $i(){return $i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$i.apply(this,arguments)}const ra=S.createContext(null),$m=S.createContext(null),Tn=S.createContext(null),ia=S.createContext(null),In=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Bm=S.createContext(null);function t_(t,e){let{relative:n}=e===void 0?{}:e;is()||X(!1);let{basename:r,navigator:i}=S.useContext(Tn),{hash:s,pathname:o,search:a}=sa(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:fn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function is(){return S.useContext(ia)!=null}function ss(){return is()||X(!1),S.useContext(ia).location}function Hm(t){S.useContext(Tn).static||S.useLayoutEffect(t)}function n_(){let{isDataRoute:t}=S.useContext(In);return t?v_():r_()}function r_(){is()||X(!1);let t=S.useContext(ra),{basename:e,future:n,navigator:r}=S.useContext(Tn),{matches:i}=S.useContext(In),{pathname:s}=ss(),o=JSON.stringify(jm(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Hm(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Fm(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:fn([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const i_=S.createContext(null);function s_(t){let e=S.useContext(In).outlet;return e&&S.createElement(i_.Provider,{value:t},e)}function sa(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(Tn),{matches:i}=S.useContext(In),{pathname:s}=ss(),o=JSON.stringify(jm(i,r.v7_relativeSplatPath));return S.useMemo(()=>Fm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function o_(t,e){return a_(t,e)}function a_(t,e,n,r){is()||X(!1);let{navigator:i}=S.useContext(Tn),{matches:s}=S.useContext(In),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ss(),c;if(e){var d;let T=typeof e=="string"?Wr(e):e;l==="/"||(d=T.pathname)!=null&&d.startsWith(l)||X(!1),c=T}else c=u;let p=c.pathname||"/",y=p;if(l!=="/"){let T=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(T.length).join("/")}let _=L1(t,{pathname:y}),w=f_(_&&_.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:fn([l,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:fn([l,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,n,r);return e&&w?S.createElement(ia.Provider,{value:{location:$i({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:nn.Pop}},w):w}function l_(){let t=g_(),e=Z1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const u_=S.createElement(l_,null);class c_ extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(In.Provider,{value:this.props.routeContext},S.createElement(Bm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function d_(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(ra);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(In.Provider,{value:e},r)}function f_(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);c>=0||X(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:y}=n,_=d.route.loader&&p[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||_){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,p)=>{let y,_=!1,w=null,T=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,w=d.route.errorElement||u_,l&&(u<0&&p===0?(y_("route-fallback",!1),_=!0,T=null):u===p&&(_=!0,T=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,p+1)),f=()=>{let h;return y?h=w:_?h=T:d.route.Component?h=S.createElement(d.route.Component,null):d.route.element?h=d.route.element:h=c,S.createElement(d_,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:h})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?S.createElement(c_,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Wm=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Wm||{}),So=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(So||{});function h_(t){let e=S.useContext(ra);return e||X(!1),e}function p_(t){let e=S.useContext($m);return e||X(!1),e}function m_(t){let e=S.useContext(In);return e||X(!1),e}function Km(t){let e=m_(),n=e.matches[e.matches.length-1];return n.route.id||X(!1),n.route.id}function g_(){var t;let e=S.useContext(Bm),n=p_(So.UseRouteError),r=Km(So.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function v_(){let{router:t}=h_(Wm.UseNavigateStable),e=Km(So.UseNavigateStable),n=S.useRef(!1);return Hm(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,$i({fromRouteId:e},s)))},[t,e])}const mf={};function y_(t,e,n){!e&&!mf[t]&&(mf[t]=!0)}function __(t){return s_(t.context)}function On(t){X(!1)}function w_(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1,future:a}=t;is()&&X(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:$i({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Wr(r));let{pathname:c="/",search:d="",hash:p="",state:y=null,key:_="default"}=r,w=S.useMemo(()=>{let T=Vr(c,l);return T==null?null:{location:{pathname:T,search:d,hash:p,state:y,key:_},navigationType:i}},[l,c,d,p,y,_,i]);return w==null?null:S.createElement(Tn.Provider,{value:u},S.createElement(ia.Provider,{children:n,value:w}))}function E_(t){let{children:e,location:n}=t;return o_(uu(e),n)}new Promise(()=>{});function uu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,uu(r.props.children,s));return}r.type!==On&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=uu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(this,arguments)}function qm(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function T_(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function I_(t,e){return t.button===0&&(!e||e==="_self")&&!T_(t)}const S_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],k_=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],P_="6";try{window.__reactRouterVersion=P_}catch{}const C_=S.createContext({isTransitioning:!1}),R_="startTransition",gf=_v[R_];function A_(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=N1({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(d=>{u&&gf?gf(()=>l(d)):l(d)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(w_,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const x_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ec=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,p=qm(e,S_),{basename:y}=S.useContext(Tn),_,w=!1;if(typeof u=="string"&&N_.test(u)&&(_=u,x_))try{let h=new URL(window.location.href),v=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=Vr(v.pathname,y);v.origin===h.origin&&E!=null?u=E+v.search+v.hash:w=!0}catch{}let T=t_(u,{relative:i}),m=b_(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function f(h){r&&r(h),h.defaultPrevented||m(h)}return S.createElement("a",ko({},p,{href:_||T,onClick:w||s?r:f,ref:n,target:l}))}),As=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=qm(e,k_),p=sa(l,{relative:d.relative}),y=ss(),_=S.useContext($m),{navigator:w,basename:T}=S.useContext(Tn),m=_!=null&&L_(p)&&u===!0,f=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,h=y.pathname,v=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(h=h.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&T&&(v=Vr(v,T)||v);const E=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let k=h===f||!o&&h.startsWith(f)&&h.charAt(E)==="/",P=v!=null&&(v===f||!o&&v.startsWith(f)&&v.charAt(f.length)==="/"),R={isActive:k,isPending:P,isTransitioning:m},j=k?r:void 0,N;typeof s=="function"?N=s(R):N=[s,k?"active":null,P?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let Te=typeof a=="function"?a(R):a;return S.createElement(Ec,ko({},d,{"aria-current":j,className:N,ref:n,style:Te,to:l,unstable_viewTransition:u}),typeof c=="function"?c(R):c)});var cu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cu||(cu={}));var vf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vf||(vf={}));function O_(t){let e=S.useContext(ra);return e||X(!1),e}function b_(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=n_(),u=ss(),c=sa(t,{relative:o});return S.useCallback(d=>{if(I_(d,n)){d.preventDefault();let p=r!==void 0?r:Io(u)===Io(c);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function L_(t,e){e===void 0&&(e={});let n=S.useContext(C_);n==null&&X(!1);let{basename:r}=O_(cu.useViewTransitionState),i=sa(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Vr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Vr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return lu(i.pathname,o)!=null||lu(i.pathname,s)!=null}const D_="/assets/logo-df0469eb.png";var Gm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kt=Ne.createContext&&Ne.createContext(Gm),hn=globalThis&&globalThis.__assign||function(){return hn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},hn.apply(this,arguments)},M_=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Qm(t){return t&&t.map(function(e,n){return Ne.createElement(e.tag,hn({key:n},e.attr),Qm(e.child))})}function nt(t){return function(e){return Ne.createElement(V_,hn({attr:hn({},t.attr)},e),Qm(t.child))}}function V_(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=M_(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ne.createElement("svg",hn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:hn(hn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ne.createElement("title",null,s),t.children)};return Kt!==void 0?Ne.createElement(Kt.Consumer,null,function(n){return e(n)}):e(Gm)}function U_(t){return nt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}},{tag:"path",attr:{d:"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}},{tag:"path",attr:{d:"M16 19h6"}},{tag:"path",attr:{d:"M19 16l3 3l-3 3"}}]})(t)}function j_(t){return nt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"}}]})(t)}function F_(t){return nt({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,32H152a8,8,0,0,0-6.34,3.12l-64,83.21L72,108.69a16,16,0,0,0-22.64,0l-12.69,12.7a16,16,0,0,0,0,22.63l20,20-28,28a16,16,0,0,0,0,22.63l12.69,12.68a16,16,0,0,0,22.62,0l28-28,20,20a16,16,0,0,0,22.64,0l12.69-12.7a16,16,0,0,0,0-22.63l-9.64-9.64,83.21-64A8,8,0,0,0,224,104V40A8,8,0,0,0,216,32ZM52.69,216,40,203.32l28-28L80.68,188Zm70.61-8L48,132.71,60.7,120,136,195.31ZM208,100.06l-81.74,62.88L115.32,152l50.34-50.34a8,8,0,0,0-11.32-11.31L104,140.68,93.07,129.74,155.94,48H208Z"}}]})(t)}function z_(t){return nt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.00055 3L4.35055 6.34H17.9405L17.5005 8.5H3.92055L3.26055 11.83H16.8505L16.0905 15.64L10.6105 17.45L5.86055 15.64L6.19055 14H2.85055L2.06055 18L9.91055 21L18.9605 18L20.1605 11.97L20.4005 10.76L21.9405 3H5.00055Z"}}]})(t)}function $_(t){return nt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.88401 18.6531C5.58404 18.4523 5.32587 18.1972 5.0239 17.8366C4.91473 17.7062 4.47283 17.1521 4.55811 17.258C4.09533 16.6831 3.80296 16.4168 3.50156 16.3087C2.9817 16.1223 2.7114 15.5497 2.89784 15.0298C3.08428 14.51 3.65685 14.2397 4.17672 14.4261C4.92936 14.696 5.43847 15.1609 6.12425 16.0141C6.03025 15.8972 6.46364 16.4408 6.55731 16.5526C6.74784 16.7802 6.88732 16.918 6.99629 16.9909C7.20118 17.128 7.58451 17.1871 8.14709 17.1308C8.17065 16.7487 8.24136 16.378 8.34919 16.0355C5.38097 15.3101 3.70116 13.3949 3.70116 9.63947C3.70116 8.4006 4.0704 7.28368 4.75917 6.34756C4.5415 5.45368 4.57433 4.37259 5.06092 3.15611C5.1725 2.87715 5.40361 2.66314 5.69031 2.57328C5.77242 2.54949 5.81791 2.5389 5.89878 2.52648C6.70167 2.40319 7.83573 2.69681 9.31449 3.62311C10.181 3.41855 11.0885 3.31476 12.0012 3.31476C12.9129 3.31476 13.8196 3.41835 14.6854 3.62253C16.1619 2.68976 17.2986 2.39625 18.1072 2.52627C18.1919 2.53988 18.2645 2.55758 18.3249 2.57741C18.6059 2.66967 18.8316 2.88155 18.9414 3.15611C19.4279 4.37232 19.4608 5.45319 19.2433 6.34695C19.9342 7.28313 20.3012 8.39184 20.3012 9.63947C20.3012 13.3966 18.627 15.3046 15.6588 16.0318C15.7837 16.4467 15.8496 16.9103 15.8496 17.4118C15.8496 18.0763 15.8471 18.7108 15.8424 19.4223C15.8412 19.6124 15.8397 19.8156 15.8375 20.1279C16.2129 20.2107 16.5229 20.5074 16.6031 20.9086C16.7114 21.4502 16.3602 21.977 15.8186 22.0853C14.6794 22.3132 13.8353 21.5535 13.8353 20.5608C13.8353 20.4705 13.836 20.3414 13.8375 20.1142C13.8398 19.8012 13.8412 19.5987 13.8425 19.4092C13.8471 18.7017 13.8496 18.0714 13.8496 17.4118C13.8496 16.7145 13.6664 16.26 13.4237 16.0508C12.7627 15.481 13.0977 14.3971 13.965 14.2996C16.9314 13.9663 18.3012 12.8174 18.3012 9.63947C18.3012 8.68484 17.9893 7.89547 17.3881 7.23534C17.1301 6.95209 17.0567 6.54634 17.199 6.19062C17.3647 5.77639 17.4354 5.2336 17.2941 4.57678L17.2847 4.57944C16.7928 4.71861 16.1744 5.01956 15.4261 5.52826C15.182 5.69413 14.8772 5.74377 14.5932 5.66388C13.7729 5.43319 12.8913 5.31476 12.0012 5.31476C11.111 5.31476 10.2294 5.43319 9.40916 5.66388C9.12662 5.74335 8.82344 5.69468 8.57997 5.53077C7.8274 5.02414 7.2056 4.72355 6.71079 4.58352C6.56735 5.23672 6.63814 5.77758 6.80336 6.19062C6.94565 6.54634 6.87219 6.95209 6.61423 7.23534C6.01715 7.89096 5.70116 8.69352 5.70116 9.63947C5.70116 12.8114 7.07225 13.9681 10.023 14.2996C10.8883 14.3969 11.2246 15.4767 10.5675 16.048C10.3751 16.2153 10.1384 16.7799 10.1384 17.4118V20.5608C10.1384 21.5472 9.30356 22.2866 8.17878 22.0898C7.63476 21.9946 7.27093 21.4764 7.36613 20.9324C7.43827 20.5201 7.75331 20.2114 8.13841 20.1274V19.1379C7.22829 19.1991 6.47656 19.0496 5.88401 18.6531Z"}}]})(t)}function B_(t){return nt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z"}}]})(t)}function H_(t){return nt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 7H24V9H19V7ZM17 12H24V14H17V12ZM20 17H24V19H20V17ZM2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11Z"}}]})(t)}const ni=48,W_=({color:t="currentColor",direction:e="left",distance:n="md",duration:r=.4,easing:i="cubic-bezier(0, 0, 0, 1)",hideOutline:s=!0,label:o,lines:a=3,onToggle:l,render:u,rounded:c=!1,size:d=32,toggle:p,toggled:y,disabled:_=!1,animateOnMount:w=!1})=>{const[T,m]=S.useState(!1),[f,h]=S.useState(!1);S.useEffect(()=>{h(!0)},[]);const v=Math.max(12,Math.min(ni,d)),E=Math.round((ni-v)/2),k=v/12,P=Math.round(k),j=v/(a*((n==="lg"?.25:n==="sm"?.75:.5)+(a===3?1:1.25))),N=Math.round(j),Te=P*a+N*(a-1),kn=Math.round((ni-Te)/2),Pn=a===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,cs=(k-P+(j-N))/(a===3?1:2),Ta=parseFloat((v/Pn-cs/(4/3)).toFixed(2)),sr=Math.max(0,r),or={cursor:_?"not-allowed":"pointer",height:`${ni}px`,position:"relative",transition:`${sr}s ${i}`,userSelect:"none",width:`${ni}px`},C={background:t,height:`${P}px`,left:`${E}px`,position:"absolute"};s&&(or.outline="none"),c&&(C.borderRadius="9em");const O=()=>{const Cn=y!==void 0?y:T;return w&&!f?!Cn:Cn},L=p||m,B=O();return u({barHeight:P,barStyles:C,burgerStyles:or,easing:i,handler:()=>{L(!B),typeof l=="function"&&l(!B)},isLeft:e==="left",isToggled:B,label:o,margin:N,move:Ta,time:sr,topOffset:kn,width:v})};function du(){return du=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},du.apply(this,arguments)}const K_=t=>Ne.createElement(W_,du({},t,{render:e=>Ne.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:t.disabled?void 0:e.handler,onKeyUp:t.disabled?void 0:n=>n.key==="Enter"&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},Ne.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),Ne.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,opacity:`${e.isToggled?"0":"1"}`}}),Ne.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move*-1}px)`:"none"}`}}))}));function q_(){const[t,e]=S.useState(!1);return g.jsxs("div",{className:"nav-bar",children:[g.jsx(Ec,{className:"logo",to:"/",children:g.jsx("img",{className:"logo",src:D_,alt:"logo"})}),g.jsxs("nav",{className:t?"mobile-show":"",children:[g.jsx(As,{onClick:()=>e(!t),className:"link home-link",exact:"true",activeclassname:"active",to:"/",children:g.jsx(U_,{})}),g.jsx(As,{onClick:()=>e(!t),className:"link about-link",exact:"true",activeclassname:"active",to:"/about",children:g.jsx(H_,{})}),g.jsx(As,{onClick:()=>e(!t),className:"link portfolio-link",exact:"true",activeclassname:"active",to:"/projects",children:g.jsx(F_,{})}),g.jsx(As,{onClick:()=>e(!t),className:"link contact-link",exact:"true",activeclassname:"active",to:"/contact",children:g.jsx(j_,{})})]}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/kevin-pinto-977b8b283/",children:g.jsx(B_,{})})}),g.jsx("li",{children:g.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/KevinPintoCode",children:g.jsx($_,{})})})]}),g.jsx("div",{className:"hamburguer-icon",children:g.jsx(K_,{onClick:()=>e(!t),color:"#a970ff",toggled:t,toggle:e})})]})}const G_="/assets/background-703db3e6.png";function Q_(){return g.jsx(g.Fragment,{children:g.jsx("div",{className:"background-image",children:g.jsx("img",{src:G_,alt:"Background"})})})}function Y_(){return g.jsxs("div",{className:"App",children:[g.jsx(q_,{}),g.jsxs("div",{className:"page",children:[g.jsx("span",{className:"tags top-tags",children:"<body>"}),g.jsx(__,{}),g.jsxs("span",{className:"tags bottom-tags",children:["</body>",g.jsx("br",{}),g.jsx("span",{className:"bottom-tag-html",children:"</html>"})]}),g.jsx(Q_,{})]})]})}const J_="/assets/k_letter-14ab0e76.png";var Ym={exports:{}},Ja={exports:{}},Xa,yf;function X_(){if(yf)return Xa;yf=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Xa=t,Xa}var Za,_f;function Z_(){if(_f)return Za;_f=1;var t=X_();function e(){}function n(){}return n.resetWarningCache=e,Za=function(){function r(o,a,l,u,c,d){if(d!==t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function i(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return s.PropTypes=s,s},Za}var wf;function ew(){return wf||(wf=1,Ja.exports=Z_()()),Ja.exports}var el={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ef;function tw(){return Ef||(Ef=1,function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()}(el)),el.exports}(function(t){t.exports=function(e){var n={};function r(i){if(n[i])return n[i].exports;var s=n[i]={i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=n,r.d=function(i,s,o){r.o(i,s)||Object.defineProperty(i,s,{configurable:!1,enumerable:!0,get:o})},r.n=function(i){var s=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(s,"a",s),s},r.o=function(i,s){return Object.prototype.hasOwnProperty.call(i,s)},r.p="",r(r.s=0)}([function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Types=n.Loader=void 0;var i=function(){function h(v,E){for(var k=0;k<E.length;k++){var P=E[k];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(v,P.key,P)}}return function(v,E,k){return E&&h(v.prototype,E),k&&h(v,k),v}}(),s=r(1),o=d(s),a=r(2),l=d(a),u=r(3),c=d(u);function d(h){return h&&h.__esModule?h:{default:h}}function p(h,v,E){return v in h?Object.defineProperty(h,v,{value:E,enumerable:!0,configurable:!0,writable:!0}):h[v]=E,h}function y(h,v){if(!(h instanceof v))throw new TypeError("Cannot call a class as a function")}function _(h,v){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:h}function w(h,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);h.prototype=Object.create(v&&v.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(h,v):h.__proto__=v)}var T=n.Loader=function(h){w(v,h);function v(){return y(this,v),_(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return i(v,[{key:"renderDiv",value:function(k){var P=this.props.styles||{};return this.props.color&&(P.backgroundColor=this.props.color),o.default.createElement("div",{key:k,style:P})}},{key:"render",value:function(){var k,P=f(m[this.props.type]),R=(0,c.default)((k={loader:!0},p(k,"loader-"+this.props.size,this.props.size!=="md"),p(k,"loader-active",this.props.active),p(k,"loader-hidden",!this.props.active),k),this.props.className),j=(0,c.default)(["loader-inner",this.props.type,this.props.innerClassName]);return o.default.createElement("div",{className:R,style:this.props.style},o.default.createElement("div",{className:j},P.map(this.renderDiv.bind(this))))}}],[{key:"removeType",value:function(k){delete m[key]}},{key:"addType",value:function(k,P){return m[k]=P}}]),v}(s.Component);T.propTypes={type:l.default.string,active:l.default.bool,color:l.default.string,innerClassName:l.default.string},T.defaultProps={type:"ball-pulse",active:!0},n.default=T;var m=n.Types={"ball-pulse":3,"ball-grid-pulse":9,"ball-clip-rotate":1,"ball-clip-rotate-pulse":2,"square-spin":1,"ball-clip-rotate-multiple":2,"ball-pulse-rise":5,"ball-rotate":1,"cube-transition":2,"ball-zig-zag":2,"ball-zig-zag-deflect":2,"ball-triangle-path":3,"ball-scale":1,"line-scale":5,"line-scale-party":4,"ball-scale-multiple":3,"ball-pulse-sync":3,"ball-beat":3,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin-fade-loader":8,"line-spin-fade-loader":8,"triangle-skew-spin":1,pacman:5,"ball-grid-beat":9,"semi-circle-spin":1};function f(h){for(var v=-1,E=[];++v<h;)E.push(v);return E}},function(e,n){e.exports=S},function(e,n){e.exports=ew()},function(e,n){e.exports=tw()}])})(Ym);var nw=Ym.exports;const oa=Ih(nw);function Je({letterClass:t,strArray:e,idx:n}){return g.jsx("span",{children:e.map((r,i)=>g.jsx("span",{className:`${t} _${i+n}`,children:r},r+i))})}const rw="/assets/pxArt3-8b374f42.png";function iw(){return g.jsx(g.Fragment,{children:g.jsx("img",{src:rw,alt:"Logo"})})}function sw(){const[t,e]=S.useState("text-animate"),n="Welcome ".split(""),r="Adventurer!".split(""),i="evin Pinto...".split(""),s="".split("");return S.useEffect(()=>{setTimeout(()=>e("text-animate-hover"),4e3)},[]),g.jsxs(g.Fragment,{children:[g.jsx("div",{children:g.jsxs("div",{className:"container home-page",children:[g.jsxs("div",{className:"text-zone",children:[g.jsx("div",{className:"welcome",children:g.jsxs("h1",{children:[g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:t,strArray:n,idx:15})}),g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:t,strArray:r,idx:22})})]})}),g.jsxs("h2",{children:[g.jsx("span",{className:`${t} _15`,children:"I"}),g.jsx("span",{className:`${t} _16`,children:"'"}),g.jsx("span",{className:`${t} _17`,children:"m"}),g.jsx("img",{className:"k-letter",src:J_,alt:"developer"}),g.jsx(Je,{letterClass:t,strArray:i,idx:19}),g.jsx("br",{}),g.jsx(Je,{letterClass:t,strArray:s,idx:15})]}),g.jsxs("h3",{children:["Frontend Developer / ",g.jsx("span",{className:"gamer",children:"Gamer"})," ",g.jsx("span",{className:"purple",children:"/"})," Designer /"]}),g.jsx(Ec,{to:"/contact",className:"flat_button",children:"CONTACT ME"})]}),g.jsx("div",{className:"logo-container",children:g.jsx(iw,{})})]})}),g.jsx(oa,{type:"pacman"})]})}function ow(t){return nt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"}}]})(t)}function aw(t){return nt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 34 32"},child:[{tag:"path",attr:{d:"M3.556 2.845v27.071h27.53v-27.071h-27.53zM28.896 27.763h-23.151v-22.765h23.151v22.765z"}},{tag:"path",attr:{d:"M16.555 10.442c-0.693-0.599-1.726-0.939-3.173-0.939-1.433 0-3.173 0.046-3.173 0.046l-0 11.103h2.326v-3.568c0 0 0.407-0.005 0.847-0.023 1.593-0.067 2.526-0.549 3.327-1.364 0.616-0.631 0.955-1.53 0.955-2.627s-0.447-2.062-1.109-2.628zM13.32 15.115c-0.375 0.004-0.533 0.016-0.786-0.008v-3.834c0 0 0.493-0.017 0.971 0 1.198 0.044 1.833 0.89 1.833 1.921-0 1.148-0.77 1.906-2.018 1.921z"}},{tag:"path",attr:{d:"M22.205 15.455c-1.005-0.356-1.324-0.559-1.324-0.949 0-0.423 0.352-0.677 0.972-0.677 0.703 0 1.767 0.454 2.136 0.658v-1.871c-0.502-0.254-1.265-0.566-2.22-0.566-2.027 0-3.334 1.169-3.334 2.728-0.017 0.965 0.636 1.655 2.329 2.231 0.955 0.322 1.206 0.767 1.206 1.191s-0.318 0.695-1.089 0.695c-0.754 0-1.86-0.431-2.329-0.718v0 1.847c0.62 0.338 1.518 0.659 2.329 0.684 2.363 0.074 3.551-1.152 3.551-2.694-0.017-1.22-0.67-2.016-2.228-2.558z"}}]})(t)}function lw(t){return nt({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.307 5.376c-1.226 0.312-3.254 0.802-4.502 1.137l-2.295 0.579-0.669 1.181-0.668 1.204h-2.786l-6.686 6.686 6.686 6.686h2.741l0.691 1.204c0.379 0.669 0.847 1.27 1.070 1.337 0.379 0.111 3.254 0.892 7.087 1.916 0.958 0.245 1.76 0.424 1.783 0.401 0.044-0.044 0.379-1.226 0.758-2.63s0.936-3.454 1.226-4.547l0.535-1.961-0.646-1.115c-0.357-0.602-0.646-1.181-0.646-1.292s0.29-0.713 0.669-1.315l0.646-1.114-0.468-1.627c-0.914-3.253-1.738-5.906-2.006-6.574l-0.29-0.669-2.229 0.513zM21.259 8.362c-0.044 0.089-0.913 1.649-1.961 3.432l-1.894 3.254h-3.989c-2.206 0-3.945-0.044-3.9-0.111 0.067-0.045 1.204-1.248 2.496-2.652 2.006-2.139 2.541-2.563 3.232-2.697 0.446-0.067 1.828-0.424 3.053-0.758 2.451-0.669 3.075-0.758 2.964-0.468zM23.733 10.19c0.111 0.401 0.535 1.916 0.936 3.365l0.713 2.652-0.624 2.251c-0.334 1.248-0.758 2.808-0.936 3.454-0.178 0.668-0.423 1.114-0.512 1.003-0.089-0.089-1.003-1.605-2.006-3.365-1.226-2.14-1.783-3.298-1.671-3.566 0.267-0.735 3.566-6.486 3.722-6.508 0.067 0 0.245 0.334 0.379 0.713zM18.362 19.059c2.362 3.967 3.008 5.148 2.897 5.237-0.044 0.044-1.604-0.312-3.454-0.78l-3.365-0.891-2.429-2.474c-1.315-1.36-2.452-2.563-2.474-2.674-0.045-0.134 1.449-0.178 3.878-0.156l3.967 0.067 0.981 1.671z"}}]})(t)}function uw(t){return nt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"}}]})(t)}function cw(t){return nt({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"}}]})(t)}function dw(){const t="About".split(""),e=" me".split(""),[n,r]=S.useState("text-animate");return S.useEffect(()=>{setTimeout(()=>r("text-animate-hover"),3e3)},[]),g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"container about-page",children:[g.jsxs("div",{className:"text-zone",children:[g.jsx("div",{className:"welcome",children:g.jsxs("h1",{children:[g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:n,strArray:t,idx:15})}),g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:n,strArray:e,idx:20})})]})}),g.jsx("p",{children:`Hello there, I'm Kevin Pinto, known as "Goss" in the gaming world. Hailing from Venezuela, I wear multiple hats as a front-end developer, avid gamer, and passionate designer. Beyond the tech realm, I'm also deeply into rap music and photography.`}),g.jsx("p",{children:"I have an insatiable curiosity for new technologies and the art of creative coding. My journey into the world of programming led me to discover the thrilling realm of Unity, where I can bring my ideas to life and add my touch of creativity and originality to the gaming community."}),g.jsx("p",{children:"My background in engineering and my experiences as a world traveler, devoted husband and pet lover, might seem diverse, but in 2021, I decided to channel my passions into a new career. The fusion of gaming and design in coding provided me with the exhilaration I've sought for years. I've found my place, and I'm here to explore, innovate, and make an impact."})]}),g.jsx("div",{className:"stage-cube-cont",children:g.jsxs("div",{className:"cube-spinner",children:[g.jsx("div",{className:"face1",children:g.jsx(Kt.Provider,{value:{color:"#28a4d9"},children:g.jsx("div",{children:g.jsx(z_,{})})})}),g.jsx("div",{className:"face2",children:g.jsx(Kt.Provider,{value:{color:"#1b1790"},children:g.jsx("div",{children:g.jsx(aw,{})})})}),g.jsx("div",{className:"face3",children:g.jsx(Kt.Provider,{value:{color:"#efd81d"},children:g.jsx("div",{children:g.jsx(ow,{})})})}),g.jsx("div",{className:"face4",children:g.jsx(Kt.Provider,{value:{color:"#70e0ff"},children:g.jsx("div",{children:g.jsx(cw,{})})})}),g.jsx("div",{className:"face5",children:g.jsx(Kt.Provider,{value:{color:"#616161"},children:g.jsx("div",{children:g.jsx(lw,{})})})}),g.jsx("div",{className:"face6",children:g.jsx(Kt.Provider,{value:{color:"#41c67d"},children:g.jsx("div",{children:g.jsx(uw,{})})})})]})})]}),g.jsx(oa,{type:"pacman"})]})}function fw(){const[t,e]=S.useState("text-animate"),n=S.useRef();S.useEffect(()=>{setTimeout(()=>e("text-animate-hover"),4e3)},[]);const r=o=>{o.preventDefault(),emailjs.sendForm("service_8j9cphd","contact_form",n.current,"dDPJ2T9MK2J4yZkpw").then(function(a){alert("Your message has been successfully sent!"),window.location.reload(!1)},function(a){alert("Failed to sent your message, please try again.")})},i="Contact ".split(""),s="Me".split("");return g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"container contact-page",children:g.jsxs("div",{className:"text-zone",children:[g.jsx("div",{className:"welcome",children:g.jsxs("h1",{children:[g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:t,strArray:i,idx:15})}),g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:t,strArray:s,idx:22})})]})}),g.jsx("p",{children:"Ready to collaborate on a project or just want to discuss gaming and design? Let's chat!"}),g.jsx("div",{className:"contact-form",children:g.jsx("form",{ref:n,onSubmit:r,children:g.jsxs("ul",{children:[g.jsx("li",{className:"half",children:g.jsx("input",{type:"text",name:"name",placeholder:"Full Name",required:!0})}),g.jsx("li",{className:"half",children:g.jsx("input",{type:"email",name:"email",placeholder:"Email",required:!0})}),g.jsx("li",{children:g.jsx("input",{type:"text",name:"subject",placeholder:"Subject",required:!0})}),g.jsx("li",{children:g.jsx("textarea",{placeholder:"Message",name:"message"})}),g.jsx("li",{children:g.jsx("input",{type:"submit",className:"flat-button",value:"SEND"})})]})})})]})}),g.jsx(oa,{type:"pacman"})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(p=64)),r.push(n[c],n[d],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new pw;const p=s<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mw=function(t){const e=Jm(t);return Xm.encodeByteArray(e,!0)},Po=function(t){return mw(t).replace(/\./g,"")},Zm=function(t){try{return Xm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=()=>gw().__FIREBASE_DEFAULTS__,yw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_w=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zm(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return vw()||yw()||_w()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eg=t=>{var e,n;return(n=(e=Tc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tg=t=>{const e=eg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ng=()=>{var t;return(t=Tc())===null||t===void 0?void 0:t.config},rg=t=>{var e;return(e=Tc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Po(JSON.stringify(n)),Po(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ew(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function sg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iw(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function og(){try{return typeof indexedDB=="object"}catch{return!1}}function ag(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Sw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="FirebaseError";class rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kw,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Pw(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rt(i,a,r)}}function Pw(t,e){return t.replace(Cw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Cw=/\{\$([^}]+)}/g;function Rw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Tf(s)&&Tf(o)){if(!Bi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Tf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Aw(t,e){const n=new xw(t,e);return n.subscribe.bind(n)}class xw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tl),i.error===void 0&&(i.error=tl),i.complete===void 0&&(i.complete=tl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=1e3,bw=2,Lw=4*60*60*1e3,Dw=.5;function If(t,e=Ow,n=bw){const r=e*Math.pow(n,t),i=Math.round(Dw*r*(Math.random()-.5)*2);return Math.min(Lw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t){return t&&t._delegate?t._delegate:t}class tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ww;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uw(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(t){return t===bn?void 0:t}function Uw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Fw={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},zw=F.INFO,$w={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Bw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$w[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class aa{constructor(e){this.name=e,this._logLevel=zw,this._logHandler=Bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Hw=(t,e)=>e.some(n=>t instanceof n);let Sf,kf;function Ww(){return Sf||(Sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kw(){return kf||(kf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lg=new WeakMap,fu=new WeakMap,ug=new WeakMap,nl=new WeakMap,Ic=new WeakMap;function qw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lg.set(n,t)}).catch(()=>{}),Ic.set(e,t),e}function Gw(t){if(fu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fu.set(t,e)}let hu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qw(t){hu=t(hu)}function Yw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rl(this),e,...n);return ug.set(r,e.sort?e.sort():[e]),pn(r)}:Kw().includes(t)?function(...e){return t.apply(rl(this),e),pn(lg.get(this))}:function(...e){return pn(t.apply(rl(this),e))}}function Jw(t){return typeof t=="function"?Yw(t):(t instanceof IDBTransaction&&Gw(t),Hw(t,Ww())?new Proxy(t,hu):t)}function pn(t){if(t instanceof IDBRequest)return qw(t);if(nl.has(t))return nl.get(t);const e=Jw(t);return e!==t&&(nl.set(t,e),Ic.set(e,t)),e}const rl=t=>Ic.get(t);function cg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pn(o.result),l.oldVersion,l.newVersion,pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Xw=["get","getKey","getAll","getAllKeys","count"],Zw=["put","add","delete","clear"],il=new Map;function Pf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(il.get(e))return il.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Zw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return il.set(e,s),s}Qw(t=>({...t,get:(e,n,r)=>Pf(e,n)||t.get(e,n,r),has:(e,n)=>!!Pf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pu="@firebase/app",Cf="0.10.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new aa("@firebase/app"),nE="@firebase/app-compat",rE="@firebase/analytics-compat",iE="@firebase/analytics",sE="@firebase/app-check-compat",oE="@firebase/app-check",aE="@firebase/auth",lE="@firebase/auth-compat",uE="@firebase/database",cE="@firebase/database-compat",dE="@firebase/functions",fE="@firebase/functions-compat",hE="@firebase/installations",pE="@firebase/installations-compat",mE="@firebase/messaging",gE="@firebase/messaging-compat",vE="@firebase/performance",yE="@firebase/performance-compat",_E="@firebase/remote-config",wE="@firebase/remote-config-compat",EE="@firebase/storage",TE="@firebase/storage-compat",IE="@firebase/firestore",SE="@firebase/vertexai-preview",kE="@firebase/firestore-compat",PE="firebase",CE="10.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="[DEFAULT]",RE={[pu]:"fire-core",[nE]:"fire-core-compat",[iE]:"fire-analytics",[rE]:"fire-analytics-compat",[oE]:"fire-app-check",[sE]:"fire-app-check-compat",[aE]:"fire-auth",[lE]:"fire-auth-compat",[uE]:"fire-rtdb",[cE]:"fire-rtdb-compat",[dE]:"fire-fn",[fE]:"fire-fn-compat",[hE]:"fire-iid",[pE]:"fire-iid-compat",[mE]:"fire-fcm",[gE]:"fire-fcm-compat",[vE]:"fire-perf",[yE]:"fire-perf-compat",[_E]:"fire-rc",[wE]:"fire-rc-compat",[EE]:"fire-gcs",[TE]:"fire-gcs-compat",[IE]:"fire-fst",[kE]:"fire-fst-compat",[SE]:"fire-vertex","fire-js":"fire-js",[PE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map,AE=new Map,gu=new Map;function Rf(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ht(t){const e=t.name;if(gu.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Co.values())Rf(n,t);for(const n of AE.values())Rf(n,t);return!0}function Sn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new rr("app","Firebase",xE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=CE;function dg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mn.create("bad-app-name",{appName:String(i)});if(n||(n=ng()),!n)throw mn.create("no-options");const s=Co.get(i);if(s){if(Bi(n,s.options)&&Bi(r,s.config))return s;throw mn.create("duplicate-app",{appName:i})}const o=new jw(i);for(const l of gu.values())o.addComponent(l);const a=new NE(n,r,o);return Co.set(i,a),a}function la(t=mu){const e=Co.get(t);if(!e&&t===mu&&ng())return dg();if(!e)throw mn.create("no-app",{appName:t});return e}function Ve(t,e,n){var r;let i=(r=RE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(a.join(" "));return}ht(new tt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="firebase-heartbeat-database",bE=1,Hi="firebase-heartbeat-store";let sl=null;function fg(){return sl||(sl=cg(OE,bE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw mn.create("idb-open",{originalErrorMessage:t.message})})),sl}async function LE(t){try{const n=(await fg()).transaction(Hi),r=await n.objectStore(Hi).get(hg(t));return await n.done,r}catch(e){if(e instanceof rt)Gn.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Af(t,e){try{const r=(await fg()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,hg(t)),await r.done}catch(n){if(n instanceof rt)Gn.warn(n.message);else{const r=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function hg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=1024,ME=30*24*60*60*1e3;class VE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ME}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xf(),{heartbeatsToSend:r,unsentEntries:i}=UE(this._heartbeatsCache.heartbeats),s=Po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xf(){return new Date().toISOString().substring(0,10)}function UE(t,e=DE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Nf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return og()?ag().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Af(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Nf(t){return Po(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){ht(new tt("platform-logger",e=>new eE(e),"PRIVATE")),ht(new tt("heartbeat",e=>new VE(e),"PRIVATE")),Ve(pu,Cf,t),Ve(pu,Cf,"esm2017"),Ve("fire-js","")}FE("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new aa("@firebase/firestore");function Ro(t,...e){if(Ur.logLevel<=F.DEBUG){const n=e.map(kc);Ur.debug(`Firestore (${Kr}): ${t}`,...n)}}function Sc(t,...e){if(Ur.logLevel<=F.ERROR){const n=e.map(kc);Ur.error(`Firestore (${Kr}): ${t}`,...n)}}function pg(t,...e){if(Ur.logLevel<=F.WARN){const n=e.map(kc);Ur.warn(`Firestore (${Kr}): ${t}`,...n)}}function kc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: `+t;throw Sc(e),new Error(e)}function yn(t,e){t||J()}function ua(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="ok",zE="cancelled",vi="unknown",V="invalid-argument",$E="deadline-exceeded",BE="not-found",HE="permission-denied",vu="unauthenticated",WE="resource-exhausted",jr="failed-precondition",KE="aborted",qE="out-of-range",mg="unimplemented",GE="internal",QE="unavailable";class b extends rt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ae.UNAUTHENTICATED))}shutdown(){}}class JE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XE{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(yn(typeof e.accessToken=="string"),new gg(e.accessToken,new Ae(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class ZE{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class eT{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new ZE(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nT{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(yn(typeof e.token=="string"),new tT(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Wi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}class Ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ki?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Ki{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(V,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const iT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Ki{construct(e,n,r){return new Oe(e,n,r)}static isValidIdentifier(e){return iT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(V,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(V,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(V,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(V,"Unterminated ` in path: "+e);return new Oe(n)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.path=e}static fromPath(e){return new ke(ue.fromString(e))}static fromName(e){return new ke(ue.fromString(e).popFirst(5))}static empty(){return new ke(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ke(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t,e,n){if(!n)throw new b(V,`Function ${t}() cannot be called with an empty ${e}.`)}function bf(t){if(!ke.isDocumentKey(t))throw new b(V,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lf(t){if(ke.isDocumentKey(t))throw new b(V,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Cc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(V,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pc(t);throw new b(V,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs=null;function sT(){return xs===null?xs=function(){return 268435456+Math.round(2147483648*Math.random())}():xs++,"0x"+xs.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){return t==null}function Ao(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Df,M;function Mf(t){if(t===void 0)return Sc("RPC_ERROR","HTTP error has no status"),vi;switch(t){case 200:return Of;case 400:return jr;case 401:return vu;case 403:return HE;case 404:return BE;case 409:return KE;case 416:return qE;case 429:return WE;case 499:return zE;case 500:return vi;case 501:return mg;case 503:return QE;case 504:return $E;default:return t>=200&&t<300?Of:t>=400&&t<500?jr:t>=500&&t<600?GE:vi}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(M=Df||(Df={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";class lT extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get R(){return!1}P(n,r,i,s,o){const a=sT(),l=this.I(n,r.toUriEncodedString());Ro("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(Ro("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw pg("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.P(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=aT[n];return`${this.m}/v1/${r}:${i}`}terminate(){}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new b(Mf(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new b(Mf(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=uT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function _g(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ca(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dT("Invalid base64 string: "+s):s}}(e);return new jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const fT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(yn(!!t),typeof t=="string"){let e=0;const n=fT.exec(t);if(yn(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:se(t.seconds),nanos:se(t.nanos)}}function se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qi(t){return typeof t=="string"?jt.fromBase64String(t):jt.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(V,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(V,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(V,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(V,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Eg(t){const e=t.mapValue.fields.__previous_value__;return wg(e)?Eg(e):e}function Gi(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns={fields:{__type__:{stringValue:"__max__"}}};function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wg(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:J()}function xo(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gi(t).isEqual(Gi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qn(i.timestampValue),a=Qn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return qi(i.bytesValue).isEqual(qi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return se(i.geoPointValue.latitude)===se(s.geoPointValue.latitude)&&se(i.geoPointValue.longitude)===se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return se(i.integerValue)===se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=se(i.doubleValue),a=se(s.doubleValue);return o===a?Ao(o)===Ao(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _g(t.arrayValue.values||[],e.arrayValue.values||[],xo);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Vf(o)!==Vf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xo(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function Qi(t,e){return(t.values||[]).find(n=>xo(n,e))!==void 0}function No(t,e){if(t===e)return 0;const n=Yn(t),r=Yn(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=se(s.integerValue||s.doubleValue),l=se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Uf(t.timestampValue,e.timestampValue);case 4:return Uf(Gi(t),Gi(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=qi(s),l=qi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ae(a[u],l[u]);if(c!==0)return c}return ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(se(s.latitude),se(o.latitude));return a!==0?a:ae(se(s.longitude),se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=No(a[u],l[u]);if(c)return c}return ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ns&&o===Ns)return 0;if(s===Ns)return 1;if(o===Ns)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const p=ae(l[d],c[d]);if(p!==0)return p;const y=No(a[l[d]],u[c[d]]);if(y!==0)return y}return ae(l.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function Uf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Qn(t),r=Qn(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Tg(t){return!!t&&"arrayValue"in t}function jf(t){return!!t&&"nullValue"in t}function Ff(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ol(t){return!!t&&"mapValue"in t}function yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ca(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}class zf{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{}class It extends Ig{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hT(e,n,r):n==="array-contains"?new gT(e,r):n==="in"?new vT(e,r):n==="not-in"?new yT(e,r):n==="array-contains-any"?new _T(e,r):new It(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pT(e,r):new mT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(No(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.matchesComparison(No(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class da extends Ig{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new da(e,n)}matches(e){return function(r){return r.op==="and"}(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}}class hT extends It{constructor(e,n,r){super(e,n,r),this.key=ke.fromName(r.referenceValue)}matches(e){const n=ke.comparator(e.key,this.key);return this.matchesComparison(n)}}class pT extends It{constructor(e,n){super(e,"in",n),this.keys=Sg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mT extends It{constructor(e,n){super(e,"not-in",n),this.keys=Sg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ke.fromName(r.referenceValue))}class gT extends It{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tg(n)&&Qi(n.arrayValue,this.value)}}class vT extends It{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qi(this.value.arrayValue,n)}}class yT extends It{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qi(this.value.arrayValue,n)}}class _T extends It{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Be(0,0))}static max(){return new ye(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.comparator=e,this.root=n||he.EMPTY}insert(e,n){return new Oo(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new Oo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Os(this.root,e,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Os(this.root,e,this.comparator,!0)}}class Os{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??he.RED,this.left=i??he.EMPTY,this.right=s??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new he(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return he.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new he(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.comparator=e,this.data=new Oo(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $f(this.data.getIterator())}getIteratorFrom(e){return new $f(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Yi(this.comparator);return n.data=e,n}}class $f{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Ji([])}unionWith(e){let n=new Yi(Oe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ji(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _g(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=Oe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xo(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ca(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(yi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qt(e,0,ye.min(),ye.min(),ye.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new qt(e,1,n,ye.min(),r,i,0)}static newNoDocument(e,n){return new qt(e,2,n,ye.min(),ye.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new qt(e,3,n,ye.min(),ye.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.C=null}}function Bf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wT(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}function TT(t){const e=ua(t);if(e.S===null){e.S=[];const n=new Set;for(const s of e.explicitOrderBy)e.S.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Yi(Oe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.S.push(new yu(s,r))}),n.has(Oe.keyField().canonicalString())||e.S.push(new yu(Oe.keyField(),r))}return e.S}function IT(t){const e=ua(t);return e.N||(e.N=ST(e,TT(t))),e.N}function ST(t,e){if(t.limitType==="F")return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yu(i.field,s)});const n=t.endAt?new zf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zf(t.startAt.position,t.startAt.inclusive):null;return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Ao(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ao(i)?"-0":i}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this._=void 0}}class PT extends fa{}class CT extends fa{constructor(e){super(),this.elements=e}}class RT extends fa{constructor(e){super(),this.elements=e}}class AT extends fa{constructor(e,n){super(),this.serializer=e,this.q=n}}class _i{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _i}static exists(e){return new _i(void 0,e)}static updateTime(e){return new _i(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ha{}class kg extends ha{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pg extends ha{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class xT extends ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NT extends ha{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),bT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LT=(()=>({and:"AND",or:"OR"}))();class DT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function MT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VT(t,e){return _u(t,e.toTimestamp())}function Hf(t){return yn(!!t),ye.fromTimestamp(function(n){const r=Qn(n);return new Be(r.seconds,r.nanos)}(t))}function Rc(t,e){return wu(t,e).canonicalString()}function wu(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Eu(t,e){return Rc(t.databaseId,e.path)}function UT(t,e){const n=function(i){const s=ue.fromString(i);return yn(Rg(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new b(V,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(V,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ke(function(i){return yn(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(n))}function Wf(t,e,n){return{name:Eu(t,e),fields:n.value.mapValue.fields}}function jT(t,e){let n;if(e instanceof kg)n={update:Wf(t,e.key,e.value)};else if(e instanceof xT)n={delete:Eu(t,e.key)};else if(e instanceof Pg)n={update:Wf(t,e.key,e.data),updateMask:HT(e.fieldMask)};else{if(!(e instanceof NT))return J();n={verify:Eu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof PT)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof CT)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof RT)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof AT)return{fieldPath:o.field.canonicalString(),increment:a.q};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function FT(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=function(u,c){return Rc(u.databaseId,c)}(t,i);const s=function(u){if(u.length!==0)return Cg(da.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(p){return{field:lr(p.field),direction:zT(p.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=function(u,c){return u.useProto3Json||oT(c)?c:{value:c}}(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{B:n,parent:i}}function zT(t){return OT[t]}function $T(t){return bT[t]}function BT(t){return LT[t]}function lr(t){return{fieldPath:t.canonicalString()}}function Cg(t){return t instanceof It?function(n){if(n.op==="=="){if(Ff(n.value))return{unaryFilter:{field:lr(n.field),op:"IS_NAN"}};if(jf(n.value))return{unaryFilter:{field:lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ff(n.value))return{unaryFilter:{field:lr(n.field),op:"IS_NOT_NAN"}};if(jf(n.value))return{unaryFilter:{field:lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lr(n.field),op:$T(n.op),value:n.value}}}(t):t instanceof da?function(n){const r=n.getFilters().map(i=>Cg(i));return r.length===1?r[0]:{compositeFilter:{op:BT(n.op),filters:r}}}(t):J()}function HT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t){return new DT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new b(jr,"The client has already been terminated.")}P(e,n,r,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.P(e,wu(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===vu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(vi,s.toString())})}g(e,n,r,i,s){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.g(e,wu(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===vu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(vi,o.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function KT(t,e){const n=ua(t),r={writes:e.map(i=>jT(n.serializer,i))};await n.P("Commit",n.serializer.databaseId,ue.emptyPath(),r)}async function qT(t,e){const n=ua(t),{B:r,parent:i}=FT(n.serializer,IT(e));return(await n.g("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter(s=>!!s.document).map(s=>function(a,l,u){const c=UT(a,l.name),d=Hf(l.updateTime),p=l.createTime?Hf(l.createTime):ye.min(),y=new vt({mapValue:{fields:l.fields}}),_=qt.newFoundDocument(c,d,p,y);return u&&_.setHasCommittedMutations(),u?_.setHasCommittedMutations():_}(n.serializer,s.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Map;function Ag(t){if(t._terminated)throw new b(jr,"The client has already been terminated.");if(!wi.has(t)){Ro("ComponentProvider","Initializing Datastore");const e=function(s){return new lT(s,fetch.bind(null))}(function(s,o,a,l){return new rT(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,yg(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=Ac(t._databaseId),r=function(s,o,a,l){return new WT(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);wi.set(t,r)}return wi.get(t)}class Kf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(V,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(V,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new b(V,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(V,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(V,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(V,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pa{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(jr,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(jr,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YE;switch(r.type){case"firstParty":return new eT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(V,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wi.get(n);r&&(Ro("ComponentProvider","Removing Datastore"),wi.delete(n),r.terminate())}(this),Promise.resolve()}}function GT(t,e){const n=typeof t=="object"?t:la(),r=typeof t=="string"?t:e||"(default)",i=Sn(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=tg("firestore");s&&QT(i,...s)}return i}function QT(t,e,n,r={}){var i;const s=(t=Cc(t,pa))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&pg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ae.MOCK_USER;else{a=ig(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(V,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ae(u)}t._authCredentials=new JE(new gg(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}}class Lt extends ma{constructor(e,n,r){super(e,n,function(s){return new ET(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new ke(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function xg(t,e,...n){if(t=de(t),vg("collection","path",e),t instanceof pa){const r=ue.fromString(e,...n);return Lf(r),new Lt(t,null,r)}{if(!(t instanceof ct||t instanceof Lt))throw new b(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Lf(r),new Lt(t.firestore,null,r)}}function YT(t,e,...n){if(t=de(t),arguments.length===1&&(e=cT.newId()),vg("doc","path",e),t instanceof pa){const r=ue.fromString(e,...n);return bf(r),new ct(t,null,new ke(r))}{if(!(t instanceof ct||t instanceof Lt))throw new b(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return bf(r),new ct(t.firestore,t instanceof Lt?t.converter:null,new ke(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fr(jt.fromBase64String(e))}catch(n){throw new b(V,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Fr(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(V,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(V,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(V,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=/^__.*__$/;class XT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pg(e,this.data,this.fieldMask,n,this.fieldTransforms):new kg(e,this.data,n,this.fieldTransforms)}}function Og(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Oc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new Oc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.st(e),i}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.rt({path:r,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return bo(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(Og(this.et)&&JT.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class ZT{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ac(e)}ht(e,n,r,i=!1){return new Oc({et:e,methodName:n,lt:r,path:Oe.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eI(t){const e=t._freezeSettings(),n=Ac(t._databaseId);return new ZT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tI(t,e,n,r,i,s={}){const o=t.ht(s.merge||s.mergeFields?2:0,e,n,i);Mg("Data must be an object, but it was:",o,r);const a=Lg(r,o);let l,u;if(s.merge)l=new Ji(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const p=nI(e,d,n);if(!o.contains(p))throw new b(V,`Field '${p}' is specified in your field mask but missing from your input data.`);iI(c,p)||c.push(p)}l=new Ji(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new XT(new vt(a),l,u)}function bg(t,e){if(Dg(t=de(t)))return Mg("Unsupported field value:",e,t),Lg(t,e);if(t instanceof Ng)return function(r,i){if(!Og(i.et))throw i._t(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=bg(a,i.ut(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=de(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kT(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:_u(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_u(i.serializer,s)}}if(r instanceof Nc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fr)return{bytesValue:MT(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i._t(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Rc(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i._t(`Unsupported field value: ${Pc(r)}`)}(t,e)}function Lg(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ca(t,(r,i)=>{const s=bg(i,e.nt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Dg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof Nc||t instanceof Fr||t instanceof ct||t instanceof Ng)}function Mg(t,e,n){if(!Dg(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Pc(n);throw r==="an object"?e._t(t+" a custom object"):e._t(t+" "+r)}}function nI(t,e,n){if((e=de(e))instanceof xc)return e._internalPath;if(typeof e=="string")return Vg(t,e);throw bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const rI=new RegExp("[~\\*/\\[\\]]");function Vg(t,e,n){if(e.search(rI)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xc(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(V,a+t+l)}function iI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ug(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(aI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ug extends sI{data(){return super.data()}}class oI{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function aI(t,e){return typeof e=="string"?Vg(t,e):e instanceof xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class uI extends class{convertValue(n,r="none"){switch(Yn(n)){case 0:return null;case 1:return n.booleanValue;case 2:return se(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,r);case 5:return n.stringValue;case 6:return this.convertBytes(qi(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,r);case 10:return this.convertObject(n.mapValue,r);default:throw J()}}convertObject(n,r){return this.convertObjectMap(n.fields,r)}convertObjectMap(n,r="none"){const i={};return ca(n,(s,o)=>{i[s]=this.convertValue(o,r)}),i}convertGeoPoint(n){return new Nc(se(n.latitude),se(n.longitude))}convertArray(n,r){return(n.values||[]).map(i=>this.convertValue(i,r))}convertServerTimestamp(n,r){switch(r){case"previous":const i=Eg(n);return i==null?null:this.convertValue(i,r);case"estimate":return this.convertTimestamp(Gi(n));default:return null}}convertTimestamp(n){const r=Qn(n);return new Be(r.seconds,r.nanos)}convertDocumentKey(n,r){const i=ue.fromString(n);yn(Rg(i));const s=new Wi(i.get(1),i.get(3)),o=new ke(i.popFirst(5));return s.isEqual(r)||Sc(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),o}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function cI(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new b(mg,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Cc(t,ma))._query);const e=Ag(t.firestore),n=new uI(t.firestore);return qT(e,t._query).then(r=>{const i=r.map(s=>new Ug(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new oI(t,i)})}function dI(t,e){const n=YT(t=Cc(t,Lt)),r=lI(t.converter,e),i=tI(eI(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return KT(Ag(t.firestore),[i.toMutation(n._key,_i.exists(!1))]).then(()=>n)}(function(){(function(n){Kr=n})(`${ir}_lite`),ht(new tt("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new pa(new XE(e.getProvider("auth-internal")),new nT(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new b(V,'"projectId" not provided in firebase.initializeApp.');return new Wi(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Ve("firestore-lite","4.6.3",""),Ve("firestore-lite","4.6.3","esm2017")})();var fI="firebase",hI="10.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ve(fI,hI,"app");const jg="@firebase/installations",bc="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=1e4,zg=`w:${bc}`,$g="FIS_v2",pI="https://firebaseinstallations.googleapis.com/v1",mI=60*60*1e3,gI="installations",vI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Jn=new rr(gI,vI,yI);function Bg(t){return t instanceof rt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg({projectId:t}){return`${pI}/projects/${t}/installations`}function Wg(t){return{token:t.token,requestStatus:2,expiresIn:wI(t.expiresIn),creationTime:Date.now()}}async function Kg(t,e){const r=(await e.json()).error;return Jn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _I(t,{refreshToken:e}){const n=qg(t);return n.append("Authorization",EI(e)),n}async function Gg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wI(t){return Number(t.replace("s","000"))}function EI(t){return`${$g} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Hg(t),i=qg(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:$g,appId:t.appId,sdkVersion:zg},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Gg(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Wg(u.authToken)}}else throw await Kg("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=/^[cdef][\w-]{21}$/,Tu="";function kI(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=PI(t);return SI.test(n)?n:Tu}catch{return Tu}}function PI(t){return II(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Map;function Jg(t,e){const n=ga(t);Xg(n,e),CI(n,e)}function Xg(t,e){const n=Yg.get(t);if(n)for(const r of n)r(e)}function CI(t,e){const n=RI();n&&n.postMessage({key:t,fid:e}),AI()}let Vn=null;function RI(){return!Vn&&"BroadcastChannel"in self&&(Vn=new BroadcastChannel("[Firebase] FID Change"),Vn.onmessage=t=>{Xg(t.data.key,t.data.fid)}),Vn}function AI(){Yg.size===0&&Vn&&(Vn.close(),Vn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="firebase-installations-database",NI=1,Xn="firebase-installations-store";let al=null;function Lc(){return al||(al=cg(xI,NI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xn)}}})),al}async function Lo(t,e){const n=ga(t),i=(await Lc()).transaction(Xn,"readwrite"),s=i.objectStore(Xn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Jg(t,e.fid),e}async function Zg(t){const e=ga(t),r=(await Lc()).transaction(Xn,"readwrite");await r.objectStore(Xn).delete(e),await r.done}async function va(t,e){const n=ga(t),i=(await Lc()).transaction(Xn,"readwrite"),s=i.objectStore(Xn),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Jg(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(t){let e;const n=await va(t.appConfig,r=>{const i=OI(r),s=bI(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Tu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OI(t){const e=t||{fid:kI(),registrationStatus:0};return e0(e)}function bI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Jn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=LI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:DI(t)}:{installationEntry:e}}async function LI(t,e){try{const n=await TI(t,e);return Lo(t.appConfig,n)}catch(n){throw Bg(n)&&n.customData.serverCode===409?await Zg(t.appConfig):await Lo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function DI(t){let e=await qf(t.appConfig);for(;e.registrationStatus===1;)await Qg(100),e=await qf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Dc(t);return r||n}return e}function qf(t){return va(t,e=>{if(!e)throw Jn.create("installation-not-found");return e0(e)})}function e0(t){return MI(t)?{fid:t.fid,registrationStatus:0}:t}function MI(t){return t.registrationStatus===1&&t.registrationTime+Fg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI({appConfig:t,heartbeatServiceProvider:e},n){const r=UI(t,n),i=_I(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:zg,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Gg(()=>fetch(r,a));if(l.ok){const u=await l.json();return Wg(u)}else throw await Kg("Generate Auth Token",l)}function UI(t,{fid:e}){return`${Hg(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(t,e=!1){let n;const r=await va(t.appConfig,s=>{if(!t0(s))throw Jn.create("not-registered");const o=s.authToken;if(!e&&zI(o))return s;if(o.requestStatus===1)return n=jI(t,e),s;{if(!navigator.onLine)throw Jn.create("app-offline");const a=BI(s);return n=FI(t,a),a}});return n?await n:r.authToken}async function jI(t,e){let n=await Gf(t.appConfig);for(;n.authToken.requestStatus===1;)await Qg(100),n=await Gf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mc(t,e):r}function Gf(t){return va(t,e=>{if(!t0(e))throw Jn.create("not-registered");const n=e.authToken;return HI(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function FI(t,e){try{const n=await VI(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Lo(t.appConfig,r),n}catch(n){if(Bg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zg(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Lo(t.appConfig,r)}throw n}}function t0(t){return t!==void 0&&t.registrationStatus===2}function zI(t){return t.requestStatus===2&&!$I(t)}function $I(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mI}function BI(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function HI(t){return t.requestStatus===1&&t.requestTime+Fg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(t){const e=t,{installationEntry:n,registrationPromise:r}=await Dc(e);return r?r.catch(console.error):Mc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(t,e=!1){const n=t;return await qI(n),(await Mc(n,e)).token}async function qI(t){const{registrationPromise:e}=await Dc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){if(!t||!t.options)throw ll("App Configuration");if(!t.name)throw ll("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ll(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ll(t){return Jn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="installations",QI="installations-internal",YI=t=>{const e=t.getProvider("app").getImmediate(),n=GI(e),r=Sn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},JI=t=>{const e=t.getProvider("app").getImmediate(),n=Sn(e,n0).getImmediate();return{getId:()=>WI(n),getToken:i=>KI(n,i)}};function XI(){ht(new tt(n0,YI,"PUBLIC")),ht(new tt(QI,JI,"PRIVATE"))}XI();Ve(jg,bc);Ve(jg,bc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="analytics",ZI="firebase_id",e2="origin",t2=60*1e3,n2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new aa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},He=new rr("analytics","Analytics",r2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t){if(!t.startsWith(Vc)){const e=He.create("invalid-gtag-resource",{gtagURL:t});return Ue.warn(e.message),""}return t}function r0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function s2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function o2(t,e){const n=s2("firebase-js-sdk-policy",{createScriptURL:i2}),r=document.createElement("script"),i=`${Vc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function a2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function l2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await r0(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){Ue.error(a)}t("config",i,s)}async function u2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await r0(n);for(const l of o){const u=a.find(d=>d.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Ue.error(s)}}function c2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await u2(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await l2(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Ue.error(a)}}return i}function d2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=c2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function f2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=30,p2=1e3;class m2{constructor(e={},n=p2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const i0=new m2;function g2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function v2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:g2(r)},s=n2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function y2(t,e=i0,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw He.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw He.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new E2;return setTimeout(async()=>{a.abort()},n!==void 0?n:t2),s0({appId:r,apiKey:i,measurementId:s},o,a,e)}async function s0(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=i0){var s;const{appId:o,measurementId:a}=t;try{await _2(r,e)}catch(l){if(a)return Ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await v2(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!w2(u)){if(i.deleteThrottleMetadata(o),a)return Ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?If(n,i.intervalMillis,h2):If(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,d),Ue.debug(`Calling attemptFetch again in ${c} millis`),s0(t,d,r,i)}}function _2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(He.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function w2(t){if(!(t instanceof rt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class E2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function T2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(){if(og())try{await ag()}catch(t){return Ue.warn(He.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ue.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function S2(t,e,n,r,i,s,o){var a;const l=y2(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&Ue.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Ue.error(y)),e.push(l);const u=I2().then(y=>{if(y)return r.getId()}),[c,d]=await Promise.all([l,u]);f2(s)||o2(s,c.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[e2]="firebase",p.update=!0,d!=null&&(p[ZI]=d),i("config",c.measurementId,p),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.app=e}_delete(){return delete Ei[this.app.options.appId],Promise.resolve()}}let Ei={},Qf=[];const Yf={};let ul="dataLayer",P2="gtag",Jf,o0,Xf=!1;function C2(){const t=[];if(sg()&&t.push("This is a browser extension environment."),Sw()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=He.create("invalid-analytics-context",{errorInfo:e});Ue.warn(n.message)}}function R2(t,e,n){C2();const r=t.options.appId;if(!r)throw He.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(Ei[r]!=null)throw He.create("already-exists",{id:r});if(!Xf){a2(ul);const{wrappedGtag:s,gtagCore:o}=d2(Ei,Qf,Yf,ul,P2);o0=s,Jf=o,Xf=!0}return Ei[r]=S2(t,Qf,Yf,e,Jf,ul,n),new k2(t)}function A2(t=la()){t=de(t);const e=Sn(t,Do);return e.isInitialized()?e.getImmediate():x2(t)}function x2(t,e={}){const n=Sn(t,Do);if(n.isInitialized()){const i=n.getImmediate();if(Bi(e,n.getOptions()))return i;throw He.create("already-initialized")}return n.initialize({options:e})}function N2(t,e,n,r){t=de(t),T2(o0,Ei[t.app.options.appId],e,n,r).catch(i=>Ue.error(i))}const Zf="@firebase/analytics",eh="0.10.4";function O2(){ht(new tt(Do,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return R2(r,i,n)},"PUBLIC")),ht(new tt("analytics-internal",t,"PRIVATE")),Ve(Zf,eh),Ve(Zf,eh,"esm2017");function t(e){try{const n=e.getProvider(Do).getImmediate();return{logEvent:(r,i,s)=>N2(n,r,i,s)}}catch(n){throw He.create("interop-component-reg-failed",{reason:n})}}}O2();function Uc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b2=a0,l0=new rr("auth","Firebase",a0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new aa("@firebase/auth");function L2(t,...e){Mo.logLevel<=F.WARN&&Mo.warn(`Auth (${ir}): ${t}`,...e)}function Gs(t,...e){Mo.logLevel<=F.ERROR&&Mo.error(`Auth (${ir}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Fc(t,...e)}function dt(t,...e){return Fc(t,...e)}function jc(t,e,n){const r=Object.assign(Object.assign({},b2()),{[e]:n});return new rr("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return jc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function D2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),jc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l0.create(t,...e)}function x(t,e,...n){if(!t)throw Fc(e,...n)}function xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gs(e),new Error(e)}function Ft(t,e){t||xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function M2(){return th()==="http:"||th()==="https:"}function th(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M2()||sg()||"connection"in navigator)?navigator.onLine:!0}function U2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Ew()||Tw()}get(){return V2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=new as(3e4,6e4);function $c(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,i={}){return c0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=os(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),u0.fetch()(d0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function c0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},j2),e);try{const i=new $2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bs(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw jc(t,c,u);Tt(t,c)}}catch(i){if(i instanceof rt)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function z2(t,e,n,r,i={}){const s=await qr(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function d0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zc(t.config,i):`${t.config.apiScheme}://${i}`}class $2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),F2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function f0(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H2(t,e=!1){const n=de(t),r=await n.getIdToken(e),i=Bc(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ti(cl(i.auth_time)),issuedAtTime:Ti(cl(i.iat)),expirationTime:Ti(cl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cl(t){return Number(t)*1e3}function Bc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zm(n);return i?JSON.parse(i):(Gs("Failed to decode base64 JWT payload"),null)}catch(i){return Gs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nh(t){const e=Bc(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rt&&W2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function W2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ti(this.lastLoginAt),this.creationTime=Ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xi(t,f0(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?h0(s.providerUserInfo):[],a=G2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function q2(t){const e=de(t);await Vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function h0(t){return t.map(e=>{var{providerId:n}=e,r=Uc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q2(t,e){const n=await c0(t,{},async()=>{const r=os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=d0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",u0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Y2(t,e){return qr(t,"POST","/v2/accounts:revokeToken",$c(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=nh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Q2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Cr;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Su(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return H2(this,e)}reload(){return q2(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await Xi(this,B2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:h,emailVerified:v,isAnonymous:E,providerData:k,stsTokenManager:P}=n;x(h&&P,e,"internal-error");const R=Cr.fromJSON(this.name,P);x(typeof h=="string",e,"internal-error"),Bt(d,e.name),Bt(p,e.name),x(typeof v=="boolean",e,"internal-error"),x(typeof E=="boolean",e,"internal-error"),Bt(y,e.name),Bt(_,e.name),Bt(w,e.name),Bt(T,e.name),Bt(m,e.name),Bt(f,e.name);const j=new Nt({uid:h,auth:e,email:p,emailVerified:v,displayName:d,isAnonymous:E,photoURL:_,phoneNumber:y,tenantId:w,stsTokenManager:R,createdAt:m,lastLoginAt:f});return k&&Array.isArray(k)&&(j.providerData=k.map(N=>Object.assign({},N))),T&&(j._redirectEventId=T),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new Cr;i.updateFromServerResponse(n);const s=new Nt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];x(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?h0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Cr;a.updateFromIdToken(r);const l=new Nt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Su(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Map;function Ot(t){Ft(t instanceof Function,"Expected a class definition");let e=rh.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}p0.type="NONE";const ih=p0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qs(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rr(Ot(ih),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ot(ih);const o=Qs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Nt._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Rr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_0(e))return"Blackberry";if(w0(e))return"Webos";if(Hc(e))return"Safari";if((e.includes("chrome/")||g0(e))&&!e.includes("edge/"))return"Chrome";if(y0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function m0(t=Ee()){return/firefox\//i.test(t)}function Hc(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g0(t=Ee()){return/crios\//i.test(t)}function v0(t=Ee()){return/iemobile/i.test(t)}function y0(t=Ee()){return/android/i.test(t)}function _0(t=Ee()){return/blackberry/i.test(t)}function w0(t=Ee()){return/webos/i.test(t)}function ya(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function J2(t=Ee()){var e;return ya(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function X2(){return Iw()&&document.documentMode===10}function E0(t=Ee()){return ya(t)||y0(t)||w0(t)||_0(t)||/windows phone/i.test(t)||v0(t)}function Z2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t,e=[]){let n;switch(t){case"Browser":n=sh(Ee());break;case"Worker":n=`${sh(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ir}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tS(t,e={}){return qr(t,"GET","/v2/passwordPolicy",$c(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=6;class rS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oh(this),this.idTokenSubscription=new oh(this),this.beforeStateQueue=new eS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await f0(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(zn(this));const n=e?de(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tS(this),n=new rS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Y2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ot(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&L2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _a(t){return de(t)}class oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Aw(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sS(t){Wc=t}function oS(t){return Wc.loadJS(t)}function aS(){return Wc.gapiScript}function lS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t,e){const n=Sn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bi(s,e??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function cS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dS(t,e,n){const r=_a(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=I0(e),{host:o,port:a}=fS(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hS()}function I0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fS(t){const e=I0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ah(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ah(o)}}}function ah(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xt("not implemented")}_getIdTokenResponse(e){return xt("not implemented")}_linkToIdToken(e,n){return xt("not implemented")}_getReauthenticationResolver(e){return xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e){return z2(t,"POST","/v1/accounts:signInWithIdp",$c(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS="http://localhost";class Zn extends S0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Uc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:pS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=os(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends ls{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ls{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends ls{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nt._fromIdTokenResponse(e,r,i),o=lh(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lh(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends rt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uo(e,n,r,i)}}function k0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,s,e,r):s})}async function mS(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e,n=!1){const{auth:r}=t;if(At(r.app))return Promise.reject(zn(r));const i="reauthenticate";try{const s=await Xi(t,k0(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Bc(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t,e,n=!1){if(At(t.app))return Promise.reject(zn(t));const r="signIn",i=await k0(t,r,e),s=await zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function yS(t,e,n,r){return de(t).onIdTokenChanged(e,n,r)}function _S(t,e,n){return de(t).beforeAuthStateChanged(e,n)}function wS(t,e,n,r){return de(t).onAuthStateChanged(e,n,r)}const jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){const t=Ee();return Hc(t)||ya(t)}const TS=1e3,IS=10;class C0 extends P0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ES()&&Z2(),this.fallbackToPolling=E0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);X2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}C0.type="LOCAL";const SS=C0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0 extends P0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}R0.type="SESSION";const A0=R0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await kS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=qc("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function CS(t){Et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function RS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xS(){return x0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="firebaseLocalStorageDb",NS=1,Fo="firebaseLocalStorage",O0="fbase_key";class us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ea(t,e){return t.transaction([Fo],e?"readwrite":"readonly").objectStore(Fo)}function OS(){const t=indexedDB.deleteDatabase(N0);return new us(t).toPromise()}function ku(){const t=indexedDB.open(N0,NS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fo,{keyPath:O0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fo)?e(r):(r.close(),await OS(),e(await ku()))})})}async function uh(t,e,n){const r=Ea(t,!0).put({[O0]:e,value:n});return new us(r).toPromise()}async function bS(t,e){const n=Ea(t,!1).get(e),r=await new us(n).toPromise();return r===void 0?null:r.value}function ch(t,e){const n=Ea(t,!0).delete(e);return new us(n).toPromise()}const LS=800,DS=3;class b0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ku(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wa._getInstance(xS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RS(),!this.activeServiceWorker)return;this.sender=new PS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||AS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ku();return await uh(e,jo,"1"),await ch(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ch(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ea(i,!1).getAll();return new us(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b0.type="LOCAL";const MS=b0;new as(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t,e){return e?Ot(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends S0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VS(t){return vS(t.auth,new Gc(t),t.bypassAuthState)}function US(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),gS(n,new Gc(t),t.bypassAuthState)}async function jS(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),mS(n,new Gc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VS;case"linkViaPopup":case"linkViaRedirect":return jS;case"reauthViaPopup":case"reauthViaRedirect":return US;default:Tt(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=new as(2e3,1e4);async function zS(t,e,n){if(At(t.app))return Promise.reject(dt(t,"operation-not-supported-in-this-environment"));const r=_a(t);D2(t,e,Kc);const i=L0(r,n);return new Un(r,"signInViaPopup",e,i).executeNotNull()}class Un extends D0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FS.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="pendingRedirect",Ys=new Map;class BS extends D0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const r=await HS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HS(t,e){const n=qS(e),r=KS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WS(t,e){Ys.set(t._key(),e)}function KS(t){return Ot(t._redirectPersistence)}function qS(t){return Qs($S,t.config.apiKey,t.name)}async function GS(t,e,n=!1){if(At(t.app))return Promise.reject(zn(t));const r=_a(t),i=L0(r,e),o=await new BS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=10*60*1e3;class YS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!M0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QS&&this.cachedEventUids.clear(),this.cachedEventUids.has(dh(e))}saveEventToCache(e){this.cachedEventUids.add(dh(e)),this.lastProcessedEventTime=Date.now()}}function dh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function M0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return M0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ek=/^https?/;async function tk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XS(t);for(const n of e)try{if(nk(n))return}catch{}Tt(t,"unauthorized-domain")}function nk(t){const e=Iu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ek.test(n))return!1;if(ZS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new as(3e4,6e4);function fh(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ik(t){return new Promise((e,n)=>{var r,i,s;function o(){fh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fh(),n(dt(t,"network-request-failed"))},timeout:rk.get()})}if(!((i=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Et().gapi)===null||s===void 0)&&s.load)o();else{const a=lS("iframefcb");return Et()[a]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},oS(`${aS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Js=null,e})}let Js=null;function sk(t){return Js=Js||ik(t),Js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=new as(5e3,15e3),ak="__/auth/iframe",lk="emulator/auth/iframe",uk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ck=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dk(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zc(e,lk):`https://${t.config.authDomain}/${ak}`,r={apiKey:e.apiKey,appName:t.name,v:ir},i=ck.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${os(r).slice(1)}`}async function fk(t){const e=await sk(t),n=Et().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:dk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),a=Et().setTimeout(()=>{s(o)},ok.get());function l(){Et().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pk=500,mk=600,gk="_blank",vk="http://localhost";class hh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yk(t,e,n,r=pk,i=mk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ee().toLowerCase();n&&(a=g0(u)?gk:n),m0(u)&&(e=e||vk,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[y,_])=>`${p}${y}=${_},`,"");if(J2(u)&&a!=="_self")return _k(e||"",a),new hh(null);const d=window.open(e||"",a,c);x(d,t,"popup-blocked");try{d.focus()}catch{}return new hh(d)}function _k(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="__/auth/handler",Ek="emulator/auth/handler",Tk=encodeURIComponent("fac");async function ph(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ir,eventId:i};if(e instanceof Kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof ls){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Tk}=${encodeURIComponent(l)}`:"";return`${Ik(t)}?${os(a).slice(1)}${u}`}function Ik({config:t}){return t.emulator?zc(t,Ek):`https://${t.authDomain}/${wk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="webStorageSupport";class Sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A0,this._completeRedirectFn=GS,this._overrideRedirectResult=WS}async _openPopup(e,n,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ph(e,n,r,Iu(),i);return yk(e,o,qc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ph(e,n,r,Iu(),i);return CS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fk(e),r=new YS(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dl];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E0()||Hc()||ya()}}const kk=Sk;var mh="@firebase/auth",gh="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rk(t){ht(new tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T0(t)},u=new iS(r,i,s,l);return cS(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ht(new tt("auth-internal",e=>{const n=_a(e.getProvider("auth").getImmediate());return(r=>new Pk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ve(mh,gh,Ck(t)),Ve(mh,gh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=5*60,xk=rg("authIdTokenMaxAge")||Ak;let vh=null;const Nk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xk)return;const i=n==null?void 0:n.token;vh!==i&&(vh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function V0(t=la()){const e=Sn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uS(t,{popupRedirectResolver:kk,persistence:[MS,SS,A0]}),r=rg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Nk(s.toString());_S(n,o,()=>o(n.currentUser)),yS(n,a=>o(a))}}const i=eg("auth");return i&&dS(n,`http://${i}`),n}function Ok(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ok().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rk("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0="firebasestorage.googleapis.com",j0="storageBucket",bk=2*60*1e3,Lk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends rt{constructor(e,n,r=0){super(fl(e),`Firebase Storage: ${n} (${fl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return fl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Z;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Z||(Z={}));function fl(t){return"storage/"+t}function Qc(){const t="An unknown error occurred, please check the error payload for server response.";return new ee(Z.UNKNOWN,t)}function Dk(t){return new ee(Z.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Mk(t){return new ee(Z.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Vk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ee(Z.UNAUTHENTICATED,t)}function Uk(){return new ee(Z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jk(t){return new ee(Z.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Fk(){return new ee(Z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zk(){return new ee(Z.CANCELED,"User canceled the upload/download.")}function $k(t){return new ee(Z.INVALID_URL,"Invalid URL '"+t+"'.")}function Bk(t){return new ee(Z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Hk(){return new ee(Z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+j0+"' property when initializing the app?")}function Wk(){return new ee(Z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Kk(){return new ee(Z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qk(t){return new ee(Z.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Pu(t){return new ee(Z.INVALID_ARGUMENT,t)}function F0(){return new ee(Z.APP_DELETED,"The Firebase app was deleted.")}function Gk(t){return new ee(Z.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ii(t,e){return new ee(Z.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ri(t){throw new ee(Z.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ze.makeFromUrl(e,n)}catch{return new ze(e,"")}if(r.path==="")return r;throw Bk(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",y=new RegExp(`^https?://${d}/${c}/b/${i}/o${p}`,"i"),_={bucket:1,path:3},w=n===U0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",m=new RegExp(`^https?://${w}/${i}/${T}`,"i"),h=[{regex:a,indices:l,postModify:s},{regex:y,indices:_,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<h.length;v++){const E=h[v],k=E.regex.exec(e);if(k){const P=k[E.indices.bucket];let R=k[E.indices.path];R||(R=""),r=new ze(P,R),E.postModify(r);break}}if(r==null)throw $k(e);return r}}class Qk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function d(T){i=setTimeout(()=>{i=null,t(y,l())},T)}function p(){s&&clearTimeout(s)}function y(T,...m){if(u){p();return}if(T){p(),c.call(null,T,...m);return}if(l()||o){p(),c.call(null,T,...m);return}r<64&&(r*=2);let h;a===1?(a=2,h=0):h=(r+Math.random())*1e3,d(h)}let _=!1;function w(T){_||(_=!0,p(),!u&&(i!==null?(T||(a=2),clearTimeout(i),d(0)):T||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function Jk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){return t!==void 0}function Zk(t){return typeof t=="object"&&!Array.isArray(t)}function Yc(t){return typeof t=="string"||t instanceof String}function yh(t){return Jc()&&t instanceof Blob}function Jc(){return typeof Blob<"u"}function _h(t,e,n,r){if(r<e)throw Pu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Pu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function z0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($n||($n={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n,r,i,s,o,a,l,u,c,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,_)=>{this.resolve_=y,this.reject_=_,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ls(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===$n.NO_ERROR,l=s.getStatus();if(!a||eP(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===$n.ABORT;r(!1,new Ls(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ls(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Xk(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Qc();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?F0():zk();o(l)}else{const l=Fk();o(l)}};this.canceled_?n(!1,new Ls(!1,null,!0)):this.backoffId_=Yk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Jk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ls{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function oP(t,e,n,r,i,s,o=!0){const a=z0(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return iP(u,e),nP(u,n),rP(u,s),sP(u,r),new tP(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lP(...t){const e=aP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Jc())return new Blob(t);throw new ee(Z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){if(typeof atob>"u")throw qk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hl{constructor(e,n){this.data=e,this.contentType=n||null}}function dP(t,e){switch(t){case yt.RAW:return new hl($0(e));case yt.BASE64:case yt.BASE64URL:return new hl(B0(t,e));case yt.DATA_URL:return new hl(hP(e),pP(e))}throw Qc()}function $0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function fP(t){let e;try{e=decodeURIComponent(t)}catch{throw Ii(yt.DATA_URL,"Malformed data URL.")}return $0(e)}function B0(t,e){switch(t){case yt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ii(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case yt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ii(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cP(e)}catch(i){throw i.message.includes("polyfill")?i:Ii(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class H0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ii(yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=mP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hP(t){const e=new H0(t);return e.base64?B0(yt.BASE64,e.rest):fP(e.rest)}function pP(t){return new H0(t).contentType}function mP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){let r=0,i="";yh(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(yh(this.data_)){const r=this.data_,i=uP(r,e,n);return i===null?null:new Zt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zt(r,!0)}}static getBlob(...e){if(Jc()){const n=e.map(r=>r instanceof Zt?r.data_:r);return new Zt(lP.apply(null,n))}else{const n=e.map(o=>Yc(o)?dP(yt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Zt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){let e;try{e=JSON.parse(t)}catch{return null}return Zk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function K0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){return e}class Ie{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||yP}}let Ds=null;function _P(t){return!Yc(t)||t.length<2?t:K0(t)}function q0(){if(Ds)return Ds;const t=[];t.push(new Ie("bucket")),t.push(new Ie("generation")),t.push(new Ie("metageneration")),t.push(new Ie("name","fullPath",!0));function e(s,o){return _P(o)}const n=new Ie("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ie("size");return i.xform=r,t.push(i),t.push(new Ie("timeCreated")),t.push(new Ie("updated")),t.push(new Ie("md5Hash",null,!0)),t.push(new Ie("cacheControl",null,!0)),t.push(new Ie("contentDisposition",null,!0)),t.push(new Ie("contentEncoding",null,!0)),t.push(new Ie("contentLanguage",null,!0)),t.push(new Ie("contentType",null,!0)),t.push(new Ie("metadata","customMetadata",!0)),Ds=t,Ds}function wP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ze(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function EP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return wP(r,t),r}function G0(t,e,n){const r=W0(e);return r===null?null:EP(t,r,n)}function TP(t,e,n,r){const i=W0(e);if(i===null||!Yc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,p="/b/"+o(c)+"/o/"+o(d),y=Xc(p,n,r),_=z0({alt:"media",token:u});return y+_})[0]}function IP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Q0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){if(!t)throw Qc()}function SP(t,e){function n(r,i){const s=G0(t,i,e);return Y0(s!==null),s}return n}function kP(t,e){function n(r,i){const s=G0(t,i,e);return Y0(s!==null),TP(s,i,t.host,t._protocol)}return n}function J0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Uk():i=Vk():n.getStatus()===402?i=Mk(t.bucket):n.getStatus()===403?i=jk(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function PP(t){const e=J0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Dk(t.path)),s.serverResponse=i.serverResponse,s}return n}function CP(t,e,n){const r=e.fullServerUrl(),i=Xc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Q0(i,s,kP(t,n),o);return a.errorHandler=PP(e),a}function RP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function AP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RP(null,e)),r}function xP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let h="";for(let v=0;v<2;v++)h=h+Math.random().toString().slice(2);return h}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=AP(e,r,i),c=IP(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",y=Zt.getBlob(d,r,p);if(y===null)throw Wk();const _={name:u.fullPath},w=Xc(s,t.host,t._protocol),T="POST",m=t.maxUploadRetryTime,f=new Q0(w,T,SP(t,n),m);return f.urlParams=_,f.headers=o,f.body=y.uploadData(),f.errorHandler=J0(e),f}class NP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$n.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$n.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$n.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ri("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ri("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ri("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ri("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ri("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OP extends NP{initXhr(){this.xhr_.responseType="text"}}function X0(){return new OP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this._service=e,n instanceof ze?this._location=n:this._location=ze.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new er(e,n)}get root(){const e=new ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return K0(this._location.path)}get storage(){return this._service}get parent(){const e=gP(this._location.path);if(e===null)return null;const n=new ze(this._location.bucket,e);return new er(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Gk(e)}}function bP(t,e,n){t._throwIfRoot("uploadBytes");const r=xP(t.storage,t._location,q0(),new Zt(e,!0),n);return t.storage.makeRequestWithTokens(r,X0).then(i=>({metadata:i,ref:t}))}function LP(t){t._throwIfRoot("getDownloadURL");const e=CP(t.storage,t._location,q0());return t.storage.makeRequestWithTokens(e,X0).then(n=>{if(n===null)throw Kk();return n})}function DP(t,e){const n=vP(t._location.path,e),r=new ze(t._location.bucket,n);return new er(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){return/^[A-Za-z]+:\/\//.test(t)}function VP(t,e){return new er(t,e)}function Z0(t,e){if(t instanceof Zc){const n=t;if(n._bucket==null)throw Hk();const r=new er(n,n._bucket);return e!=null?Z0(r,e):r}else return e!==void 0?DP(t,e):t}function UP(t,e){if(e&&MP(e)){if(t instanceof Zc)return VP(t,e);throw Pu("To use ref(service, url), the first argument must be a Storage instance.")}else return Z0(t,e)}function wh(t,e){const n=e==null?void 0:e[j0];return n==null?null:ze.makeFromBucketSpec(n,t)}function jP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ig(i,t.app.options.projectId))}class Zc{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=U0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bk,this._maxUploadRetryTime=Lk,this._requests=new Set,i!=null?this._bucket=ze.makeFromBucketSpec(i,this._host):this._bucket=wh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ze.makeFromBucketSpec(this._url,e):this._bucket=wh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_h("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_h("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new er(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Qk(F0());{const o=oP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Eh="@firebase/storage",Th="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="storage";function FP(t,e,n){return t=de(t),bP(t,e,n)}function zP(t){return t=de(t),LP(t)}function $P(t,e){return t=de(t),UP(t,e)}function BP(t=la(),e){t=de(t);const r=Sn(t,ev).getImmediate({identifier:e}),i=tg("storage");return i&&HP(r,...i),r}function HP(t,e,n,r={}){jP(t,e,n,r)}function WP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Zc(n,r,i,e,ir)}function KP(){ht(new tt(ev,WP,"PUBLIC").setMultipleInstances(!0)),Ve(Eh,Th,""),Ve(Eh,Th,"esm2017")}KP();const qP={apiKey:"AIzaSyAkWlAQ9FcDGYrJv4QAyPF_ivTvaX0N_ME",authDomain:"reacth-portfolio-dashboard.firebaseapp.com",projectId:"reacth-portfolio-dashboard",storageBucket:"reacth-portfolio-dashboard.appspot.com",messagingSenderId:"665216039004",appId:"1:665216039004:web:e176d0cdfb79a47b0a4e99",measurementId:"G-V232T6K5DR"},ed=dg(qP);A2(ed);const tv=V0(),GP=new Pt,nv=GT(ed),QP=BP(ed),YP=()=>zS(tv,GP);function JP(){const[t,e]=S.useState("text-animate"),[n,r]=S.useState([]),i="Some ".split(""),s="of ".split(""),o="my ".split(""),a="projects...".split("");S.useEffect(()=>{l()},[]),S.useEffect(()=>{setTimeout(()=>e("text-animate-hover"),4e3)},[]);const l=async()=>{const c=await cI(xg(nv,"portfolio"));r(c.docs.map(d=>d.data()))},u=c=>g.jsx(g.Fragment,{children:g.jsx("div",{className:"images-container",children:c.map((d,p)=>g.jsxs("div",{className:"image-box",children:[g.jsx("img",{className:"portfolio-image",src:d.image,alt:"portfolio project"}),g.jsxs("div",{className:"content",children:[g.jsx("p",{className:"title",children:d.name}),g.jsx("h4",{className:"description",children:d.description}),g.jsx("button",{className:"button",onClick:()=>window.open(d.url),children:"View"})]})]},p))})});return g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"container portfolio-page",children:[g.jsx("div",{className:"page-title",children:g.jsx("div",{className:"welcome",children:g.jsxs("h1",{children:[g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:t,strArray:i,idx:15})}),g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:t,strArray:s,idx:19})}),g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:t,strArray:o,idx:21})}),g.jsx("div",{className:"nowrap",children:g.jsx(Je,{letterClass:t,strArray:a,idx:23})})]})})}),g.jsx("div",{children:u(n)})]}),g.jsx(oa,{type:"pacman"})]})}function XP(){const t=n=>{var u,c,d;n.preventDefault();const r=(u=e.current[0])==null?void 0:u.value,i=(c=e.current[1])==null?void 0:c.value,s=(d=e.current[2])==null?void 0:d.value,o=e.current[3].files[0],a=$P(QP,`portfolio/${o.name}`);FP(a,o).then(p=>{zP(p.ref).then(y=>{l({name:r,description:i,url:s,image:y})},()=>{l({name:r,description:i,url:s,image:null})})},()=>{l({name:r,description:i,url:s,image:null})});const l=async p=>{try{await dI(xg(nv,"portfolio"),p),window.location.reload(!1)}catch{alert("Fail to add Portfolio")}}},e=S.useRef();return g.jsx(g.Fragment,{children:g.jsx("div",{className:"dashboard",children:g.jsxs("form",{ref:e,onSubmit:t,children:[g.jsx("p",{children:g.jsx("input",{type:"text",placeholder:"Name"})}),g.jsx("p",{children:g.jsx("textarea",{placeholder:"Description"})}),g.jsx("p",{children:g.jsx("input",{type:"text",placeholder:"Url"})}),g.jsx("p",{children:g.jsx("input",{type:"file",placeholder:"Image"})}),g.jsx("button",{type:"submit",children:"Submit"}),g.jsx("button",{onClick:()=>tv.signOut(),children:"Sign Off"})]})})})}function ZP(){return g.jsx(g.Fragment,{children:g.jsx("div",{className:"dashboard",children:g.jsx("button",{onClick:YP,children:"Sign in with Google"})})})}function eC(){const[t,e]=S.useState(null),n=V0();return S.useEffect(()=>{wS(n,r=>{e(r||null)})}),g.jsx(g.Fragment,{children:g.jsxs("div",{className:"dashboard",children:[" ",t?g.jsx(XP,{}):g.jsx(ZP,{})," "]})})}function tC(){return g.jsx(g.Fragment,{children:g.jsx(E_,{children:g.jsxs(On,{path:"/",element:g.jsx(Y_,{}),children:[g.jsx(On,{path:"/",element:g.jsx(sw,{})}),g.jsx(On,{path:"about",element:g.jsx(dw,{})}),g.jsx(On,{path:"contact",element:g.jsx(fw,{})}),g.jsx(On,{path:"projects",element:g.jsx(JP,{})}),g.jsx(On,{path:"dashboard",element:g.jsx(eC,{})})]})})})}pl.createRoot(document.getElementById("root")).render(g.jsx(Ne.StrictMode,{children:g.jsx(A_,{basename:"/",children:g.jsx(tC,{})})}));
