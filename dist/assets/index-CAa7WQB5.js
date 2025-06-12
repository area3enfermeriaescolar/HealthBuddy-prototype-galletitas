const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/StudentChat-DJO7x_Lm.js","assets/chatService-Cj2Abw3Q.js","assets/StudentInterface-CbnC_qPa.css","assets/StudentAppointmentBooking-BFLyj161.js","assets/appointmentService-C9QCYLor.js","assets/StudentNotifications-DByS2pF3.js","assets/StudentNotifications-CZ3_D2IZ.css","assets/StudentResources-BlVWAtwF.js","assets/ProfessionalAvailabilityManagement-CH7M0sr2.js","assets/ProfessionalLayout-B9zIaFWN.js","assets/ProfessionalLayout-Dtl8tEdO.css","assets/ProfessionalAvailabilityManagement-BHgk2TwR.css","assets/ProfessionalAppointments-BXQ3rRpC.js","assets/ConsultationForm-BWEK6yKm.js","assets/ProfessionalChat-BFvJTYTI.js","assets/ProfessionalInterconsultation-BIMWTsHi.js","assets/ProfessionalResources-DOqWvaMQ.js","assets/ProfessionalResources-B1uPlZic.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jy={exports:{}},Bl={},zy={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Co=Symbol.for("react.element"),dT=Symbol.for("react.portal"),fT=Symbol.for("react.fragment"),pT=Symbol.for("react.strict_mode"),mT=Symbol.for("react.profiler"),gT=Symbol.for("react.provider"),yT=Symbol.for("react.context"),_T=Symbol.for("react.forward_ref"),vT=Symbol.for("react.suspense"),ET=Symbol.for("react.memo"),wT=Symbol.for("react.lazy"),Xp=Symbol.iterator;function TT(t){return t===null||typeof t!="object"?null:(t=Xp&&t[Xp]||t["@@iterator"],typeof t=="function"?t:null)}var By={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$y=Object.assign,Hy={};function Ki(t,e,n){this.props=t,this.context=e,this.refs=Hy,this.updater=n||By}Ki.prototype.isReactComponent={};Ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wy(){}Wy.prototype=Ki.prototype;function td(t,e,n){this.props=t,this.context=e,this.refs=Hy,this.updater=n||By}var nd=td.prototype=new Wy;nd.constructor=td;$y(nd,Ki.prototype);nd.isPureReactComponent=!0;var Jp=Array.isArray,qy=Object.prototype.hasOwnProperty,rd={current:null},Ky={key:!0,ref:!0,__self:!0,__source:!0};function Gy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qy.call(e,r)&&!Ky.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Co,type:t,key:s,ref:o,props:i,_owner:rd.current}}function IT(t,e){return{$$typeof:Co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Co}function ST(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zp=/\/+/g;function Ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ST(""+t.key):e.toString(36)}function Na(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Co:case dT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ju(o,0):r,Jp(i)?(n="",t!=null&&(n=t.replace(Zp,"$&/")+"/"),Na(i,e,n,"",function(h){return h})):i!=null&&(id(i)&&(i=IT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ju(s,l);o+=Na(s,e,n,u,i)}else if(u=TT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ju(s,l++),o+=Na(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function aa(t,e,n){if(t==null)return t;var r=[],i=0;return Na(t,r,"","",function(s){return e.call(n,s,i++)}),r}function AT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},xa={transition:null},CT={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:xa,ReactCurrentOwner:rd};function Qy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:aa,forEach:function(t,e,n){aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return aa(t,function(){e++}),e},toArray:function(t){return aa(t,function(e){return e})||[]},only:function(t){if(!id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Ki;ee.Fragment=fT;ee.Profiler=mT;ee.PureComponent=td;ee.StrictMode=pT;ee.Suspense=vT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CT;ee.act=Qy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$y({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)qy.call(e,u)&&!Ky.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Co,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:yT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gT,_context:t},t.Consumer=t};ee.createElement=Gy;ee.createFactory=function(t){var e=Gy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:_T,render:t}};ee.isValidElement=id;ee.lazy=function(t){return{$$typeof:wT,_payload:{_status:-1,_result:t},_init:AT}};ee.memo=function(t,e){return{$$typeof:ET,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=xa.transition;xa.transition={};try{t()}finally{xa.transition=e}};ee.unstable_act=Qy;ee.useCallback=function(t,e){return ot.current.useCallback(t,e)};ee.useContext=function(t){return ot.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ot.current.useEffect(t,e)};ee.useId=function(){return ot.current.useId()};ee.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ot.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};ee.useRef=function(t){return ot.current.useRef(t)};ee.useState=function(t){return ot.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ot.current.useTransition()};ee.version="18.3.1";zy.exports=ee;var q=zy.exports;const RT=hT(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT=q,kT=Symbol.for("react.element"),NT=Symbol.for("react.fragment"),xT=Object.prototype.hasOwnProperty,DT=PT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VT={key:!0,ref:!0,__self:!0,__source:!0};function Yy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xT.call(e,r)&&!VT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kT,type:t,key:s,ref:o,props:i,_owner:DT.current}}Bl.Fragment=NT;Bl.jsx=Yy;Bl.jsxs=Yy;jy.exports=Bl;var C=jy.exports,Mc={},Xy={exports:{}},It={},Jy={exports:{}},Zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var ge=J-1>>>1,le=z[ge];if(0<i(le,Q))z[ge]=Q,z[J]=le,J=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var ge=0,le=z.length,Ie=le>>>1;ge<Ie;){var sn=2*(ge+1)-1,on=z[sn],an=sn+1,ln=z[an];if(0>i(on,J))an<le&&0>i(ln,on)?(z[ge]=ln,z[an]=J,ge=an):(z[ge]=on,z[sn]=J,ge=sn);else if(an<le&&0>i(ln,J))z[ge]=ln,z[an]=J,ge=an;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,m=3,R=!1,S=!1,x=!1,V=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=z)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function O(z){if(x=!1,A(z),!S)if(n(u)!==null)S=!0,is(j);else{var Q=n(h);Q!==null&&rn(O,Q.startTime-z)}}function j(z,Q){S=!1,x&&(x=!1,w(y),y=-1),R=!0;var J=m;try{for(A(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||z&&!P());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,m=p.priorityLevel;var le=ge(p.expirationTime<=Q);Q=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(u)&&r(u),A(Q)}else r(u);p=n(u)}if(p!==null)var Ie=!0;else{var sn=n(h);sn!==null&&rn(O,sn.startTime-Q),Ie=!1}return Ie}finally{p=null,m=J,R=!1}}var b=!1,E=null,y=-1,v=5,T=-1;function P(){return!(t.unstable_now()-T<v)}function N(){if(E!==null){var z=t.unstable_now();T=z;var Q=!0;try{Q=E(!0,z)}finally{Q?I():(b=!1,E=null)}}else b=!1}var I;if(typeof _=="function")I=function(){_(N)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Tr=At.port2;At.port1.onmessage=N,I=function(){Tr.postMessage(null)}}else I=function(){V(N,0)};function is(z){E=z,b||(b=!0,I())}function rn(z,Q){y=V(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||R||(S=!0,is(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return z()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=m;m=z;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(z,Q,J){var ge=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ge+J:ge):J=ge,z){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:le,sortIndex:-1},J>ge?(z.sortIndex=J,e(h,z),n(u)===null&&z===n(h)&&(x?(w(y),y=-1):x=!0,rn(O,J-ge))):(z.sortIndex=le,e(u,z),S||R||(S=!0,is(j))),z},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(z){var Q=m;return function(){var J=m;m=Q;try{return z.apply(this,arguments)}finally{m=J}}}})(Zy);Jy.exports=Zy;var OT=Jy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT=q,Tt=OT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e_=new Set,Xs={};function Kr(t,e){Ni(t,e),Ni(t+"Capture",e)}function Ni(t,e){for(Xs[t]=e,t=0;t<e.length;t++)e_.add(e[t])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=Object.prototype.hasOwnProperty,MT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,em={},tm={};function bT(t){return bc.call(tm,t)?!0:bc.call(em,t)?!1:MT.test(t)?tm[t]=!0:(em[t]=!0,!1)}function FT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function UT(t,e,n,r){if(e===null||typeof e>"u"||FT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sd,od);Be[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sd,od);Be[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sd,od);Be[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function ad(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(UT(e,n,i,r)&&(n=null),r||i===null?bT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,la=Symbol.for("react.element"),ai=Symbol.for("react.portal"),li=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),Fc=Symbol.for("react.profiler"),t_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),Uc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),cd=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),r_=Symbol.for("react.offscreen"),nm=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=nm&&t[nm]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Zu;function Cs(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||""}return`
`+Zu+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Cs(t):""}function jT(t){switch(t.tag){case 5:return Cs(t.type);case 16:return Cs("Lazy");case 13:return Cs("Suspense");case 19:return Cs("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case li:return"Fragment";case ai:return"Portal";case Fc:return"Profiler";case ld:return"StrictMode";case Uc:return"Suspense";case jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n_:return(t.displayName||"Context")+".Consumer";case t_:return(t._context.displayName||"Context")+".Provider";case ud:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cd:return e=t.displayName||null,e!==null?e:zc(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return zc(t(e))}catch{}}return null}function zT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zc(e);case 8:return e===ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function i_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BT(t){var e=i_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ua(t){t._valueTracker||(t._valueTracker=BT(t))}function s_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=i_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o_(t,e){e=e.checked,e!=null&&ad(t,"checked",e,!1)}function $c(t,e){o_(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hc(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hc(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function Ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Rs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function a_(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ca,u_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ca=ca||document.createElement("div"),ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$T=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(t){$T.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ms[e]=Ms[t]})});function c_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ms.hasOwnProperty(t)&&Ms[t]?(""+e).trim():e+"px"}function h_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=c_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HT=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(HT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yc=null,wi=null,Ti=null;function am(t){if(t=ko(t)){if(typeof Yc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Kl(e),Yc(t.stateNode,t.type,e))}}function d_(t){wi?Ti?Ti.push(t):Ti=[t]:wi=t}function f_(){if(wi){var t=wi,e=Ti;if(Ti=wi=null,am(t),e)for(t=0;t<e.length;t++)am(e[t])}}function p_(t,e){return t(e)}function m_(){}var nc=!1;function g_(t,e,n){if(nc)return t(e,n);nc=!0;try{return p_(t,e,n)}finally{nc=!1,(wi!==null||Ti!==null)&&(m_(),f_())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Xc=!1;if(En)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{Xc=!1}function WT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var bs=!1,Za=null,el=!1,Jc=null,qT={onError:function(t){bs=!0,Za=t}};function KT(t,e,n,r,i,s,o,l,u){bs=!1,Za=null,WT.apply(qT,arguments)}function GT(t,e,n,r,i,s,o,l,u){if(KT.apply(this,arguments),bs){if(bs){var h=Za;bs=!1,Za=null}else throw Error(F(198));el||(el=!0,Jc=h)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lm(t){if(Gr(t)!==t)throw Error(F(188))}function QT(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return lm(i),t;if(s===r)return lm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function __(t){return t=QT(t),t!==null?v_(t):null}function v_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v_(t);if(e!==null)return e;t=t.sibling}return null}var E_=Tt.unstable_scheduleCallback,um=Tt.unstable_cancelCallback,YT=Tt.unstable_shouldYield,XT=Tt.unstable_requestPaint,Ae=Tt.unstable_now,JT=Tt.unstable_getCurrentPriorityLevel,dd=Tt.unstable_ImmediatePriority,w_=Tt.unstable_UserBlockingPriority,tl=Tt.unstable_NormalPriority,ZT=Tt.unstable_LowPriority,T_=Tt.unstable_IdlePriority,$l=null,Yt=null;function eI(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:rI,tI=Math.log,nI=Math.LN2;function rI(t){return t>>>=0,t===0?32:31-(tI(t)/nI|0)|0}var ha=64,da=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ps(l):(s&=o,s!==0&&(r=Ps(s)))}else o=n&~i,o!==0?r=Ps(o):s!==0&&(r=Ps(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function iI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=iI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Zc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I_(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function oI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function S_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var A_,pd,C_,R_,P_,eh=!1,fa=[],Gn=null,Qn=null,Yn=null,eo=new Map,to=new Map,Un=[],aI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function Es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ko(e),e!==null&&pd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lI(t,e,n,r,i){switch(e){case"focusin":return Gn=Es(Gn,t,e,n,r,i),!0;case"dragenter":return Qn=Es(Qn,t,e,n,r,i),!0;case"mouseover":return Yn=Es(Yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,Es(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,Es(to.get(s)||null,t,e,n,r,i)),!0}return!1}function k_(t){var e=Nr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=y_(n),e!==null){t.blockedOn=e,P_(t.priority,function(){C_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qc=r,n.target.dispatchEvent(r),Qc=null}else return e=ko(n),e!==null&&pd(e),t.blockedOn=n,!1;e.shift()}return!0}function hm(t,e,n){Da(t)&&n.delete(e)}function uI(){eh=!1,Gn!==null&&Da(Gn)&&(Gn=null),Qn!==null&&Da(Qn)&&(Qn=null),Yn!==null&&Da(Yn)&&(Yn=null),eo.forEach(hm),to.forEach(hm)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,uI)))}function no(t){function e(i){return ws(i,t)}if(0<fa.length){ws(fa[0],t);for(var n=1;n<fa.length;n++){var r=fa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&ws(Gn,t),Qn!==null&&ws(Qn,t),Yn!==null&&ws(Yn,t),eo.forEach(e),to.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)k_(n),n.blockedOn===null&&Un.shift()}var Ii=Pn.ReactCurrentBatchConfig,rl=!0;function cI(t,e,n,r){var i=ae,s=Ii.transition;Ii.transition=null;try{ae=1,md(t,e,n,r)}finally{ae=i,Ii.transition=s}}function hI(t,e,n,r){var i=ae,s=Ii.transition;Ii.transition=null;try{ae=4,md(t,e,n,r)}finally{ae=i,Ii.transition=s}}function md(t,e,n,r){if(rl){var i=th(t,e,n,r);if(i===null)fc(t,e,r,il,n),cm(t,r);else if(lI(i,t,e,n,r))r.stopPropagation();else if(cm(t,r),e&4&&-1<aI.indexOf(t)){for(;i!==null;){var s=ko(i);if(s!==null&&A_(s),s=th(t,e,n,r),s===null&&fc(t,e,r,il,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fc(t,e,r,null,n)}}var il=null;function th(t,e,n,r){if(il=null,t=hd(r),t=Nr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return il=t,null}function N_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JT()){case dd:return 1;case w_:return 4;case tl:case ZT:return 16;case T_:return 536870912;default:return 16}default:return 16}}var Wn=null,gd=null,Va=null;function x_(){if(Va)return Va;var t,e=gd,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Va=i.slice(t,1<r?1-r:void 0)}function Oa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function dm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pa:dm,this.isPropagationStopped=dm,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),e}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=St(Gi),Po=ve({},Gi,{view:0,detail:0}),dI=St(Po),ic,sc,Ts,Hl=ve({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(ic=t.screenX-Ts.screenX,sc=t.screenY-Ts.screenY):sc=ic=0,Ts=t),ic)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),fm=St(Hl),fI=ve({},Hl,{dataTransfer:0}),pI=St(fI),mI=ve({},Po,{relatedTarget:0}),oc=St(mI),gI=ve({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),yI=St(gI),_I=ve({},Gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vI=St(_I),EI=ve({},Gi,{data:0}),pm=St(EI),wI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},II={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=II[t])?!!e[t]:!1}function _d(){return SI}var AI=ve({},Po,{key:function(t){if(t.key){var e=wI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(t){return t.type==="keypress"?Oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CI=St(AI),RI=ve({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=St(RI),PI=ve({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),kI=St(PI),NI=ve({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),xI=St(NI),DI=ve({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VI=St(DI),OI=[9,13,27,32],vd=En&&"CompositionEvent"in window,Fs=null;En&&"documentMode"in document&&(Fs=document.documentMode);var LI=En&&"TextEvent"in window&&!Fs,D_=En&&(!vd||Fs&&8<Fs&&11>=Fs),gm=" ",ym=!1;function V_(t,e){switch(t){case"keyup":return OI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function MI(t,e){switch(t){case"compositionend":return O_(e);case"keypress":return e.which!==32?null:(ym=!0,gm);case"textInput":return t=e.data,t===gm&&ym?null:t;default:return null}}function bI(t,e){if(ui)return t==="compositionend"||!vd&&V_(t,e)?(t=x_(),Va=gd=Wn=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D_&&e.locale!=="ko"?null:e.data;default:return null}}var FI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FI[t.type]:e==="textarea"}function L_(t,e,n,r){d_(r),e=sl(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Us=null,ro=null;function UI(t){q_(t,0)}function Wl(t){var e=di(t);if(s_(e))return t}function jI(t,e){if(t==="change")return e}var M_=!1;if(En){var ac;if(En){var lc="oninput"in document;if(!lc){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),lc=typeof vm.oninput=="function"}ac=lc}else ac=!1;M_=ac&&(!document.documentMode||9<document.documentMode)}function Em(){Us&&(Us.detachEvent("onpropertychange",b_),ro=Us=null)}function b_(t){if(t.propertyName==="value"&&Wl(ro)){var e=[];L_(e,ro,t,hd(t)),g_(UI,e)}}function zI(t,e,n){t==="focusin"?(Em(),Us=e,ro=n,Us.attachEvent("onpropertychange",b_)):t==="focusout"&&Em()}function BI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(ro)}function $I(t,e){if(t==="click")return Wl(e)}function HI(t,e){if(t==="input"||t==="change")return Wl(e)}function WI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:WI;function io(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bc.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function wm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tm(t,e){var n=wm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wm(n)}}function F_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U_(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qI(t){var e=U_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&F_(n.ownerDocument.documentElement,n)){if(r!==null&&Ed(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Tm(n,s);var o=Tm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KI=En&&"documentMode"in document&&11>=document.documentMode,ci=null,nh=null,js=null,rh=!1;function Im(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||ci==null||ci!==Ja(r)||(r=ci,"selectionStart"in r&&Ed(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),js&&io(js,r)||(js=r,r=sl(nh,"onSelect"),0<r.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ci)))}function ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hi={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},uc={},j_={};En&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function ql(t){if(uc[t])return uc[t];if(!hi[t])return t;var e=hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j_)return uc[t]=e[n];return t}var z_=ql("animationend"),B_=ql("animationiteration"),$_=ql("animationstart"),H_=ql("transitionend"),W_=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){W_.set(t,e),Kr(e,[t])}for(var cc=0;cc<Sm.length;cc++){var hc=Sm[cc],GI=hc.toLowerCase(),QI=hc[0].toUpperCase()+hc.slice(1);gr(GI,"on"+QI)}gr(z_,"onAnimationEnd");gr(B_,"onAnimationIteration");gr($_,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(H_,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function Am(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GT(r,e,void 0,t),t.currentTarget=null}function q_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Am(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Am(i,l,h),s=u}}}if(el)throw t=Jc,el=!1,Jc=null,t}function de(t,e){var n=e[lh];n===void 0&&(n=e[lh]=new Set);var r=t+"__bubble";n.has(r)||(K_(e,t,2,!1),n.add(r))}function dc(t,e,n){var r=0;e&&(r|=4),K_(n,t,r,e)}var ga="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[ga]){t[ga]=!0,e_.forEach(function(n){n!=="selectionchange"&&(YI.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ga]||(e[ga]=!0,dc("selectionchange",!1,e))}}function K_(t,e,n,r){switch(N_(e)){case 1:var i=cI;break;case 4:i=hI;break;default:i=md}n=i.bind(null,e,n,t),i=void 0,!Xc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}g_(function(){var h=s,f=hd(n),p=[];e:{var m=W_.get(t);if(m!==void 0){var R=yd,S=t;switch(t){case"keypress":if(Oa(n)===0)break e;case"keydown":case"keyup":R=CI;break;case"focusin":S="focus",R=oc;break;case"focusout":S="blur",R=oc;break;case"beforeblur":case"afterblur":R=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=pI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=kI;break;case z_:case B_:case $_:R=yI;break;case H_:R=xI;break;case"scroll":R=dI;break;case"wheel":R=VI;break;case"copy":case"cut":case"paste":R=vI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=mm}var x=(e&4)!==0,V=!x&&t==="scroll",w=x?m!==null?m+"Capture":null:m;x=[];for(var _=h,A;_!==null;){A=_;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,w!==null&&(O=Zs(_,w),O!=null&&x.push(oo(_,O,A)))),V)break;_=_.return}0<x.length&&(m=new R(m,S,null,n,f),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",m&&n!==Qc&&(S=n.relatedTarget||n.fromElement)&&(Nr(S)||S[wn]))break e;if((R||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,R?(S=n.relatedTarget||n.toElement,R=h,S=S?Nr(S):null,S!==null&&(V=Gr(S),S!==V||S.tag!==5&&S.tag!==6)&&(S=null)):(R=null,S=h),R!==S)){if(x=fm,O="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=mm,O="onPointerLeave",w="onPointerEnter",_="pointer"),V=R==null?m:di(R),A=S==null?m:di(S),m=new x(O,_+"leave",R,n,f),m.target=V,m.relatedTarget=A,O=null,Nr(f)===h&&(x=new x(w,_+"enter",S,n,f),x.target=A,x.relatedTarget=V,O=x),V=O,R&&S)t:{for(x=R,w=S,_=0,A=x;A;A=ni(A))_++;for(A=0,O=w;O;O=ni(O))A++;for(;0<_-A;)x=ni(x),_--;for(;0<A-_;)w=ni(w),A--;for(;_--;){if(x===w||w!==null&&x===w.alternate)break t;x=ni(x),w=ni(w)}x=null}else x=null;R!==null&&Cm(p,m,R,x,!1),S!==null&&V!==null&&Cm(p,V,S,x,!0)}}e:{if(m=h?di(h):window,R=m.nodeName&&m.nodeName.toLowerCase(),R==="select"||R==="input"&&m.type==="file")var j=jI;else if(_m(m))if(M_)j=HI;else{j=BI;var b=zI}else(R=m.nodeName)&&R.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=$I);if(j&&(j=j(t,h))){L_(p,j,n,f);break e}b&&b(t,m,h),t==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&Hc(m,"number",m.value)}switch(b=h?di(h):window,t){case"focusin":(_m(b)||b.contentEditable==="true")&&(ci=b,nh=h,js=null);break;case"focusout":js=nh=ci=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,Im(p,n,f);break;case"selectionchange":if(KI)break;case"keydown":case"keyup":Im(p,n,f)}var E;if(vd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ui?V_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(D_&&n.locale!=="ko"&&(ui||y!=="onCompositionStart"?y==="onCompositionEnd"&&ui&&(E=x_()):(Wn=f,gd="value"in Wn?Wn.value:Wn.textContent,ui=!0)),b=sl(h,y),0<b.length&&(y=new pm(y,t,null,n,f),p.push({event:y,listeners:b}),E?y.data=E:(E=O_(n),E!==null&&(y.data=E)))),(E=LI?MI(t,n):bI(t,n))&&(h=sl(h,"onBeforeInput"),0<h.length&&(f=new pm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=E))}q_(p,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Zs(n,s),u!=null&&o.unshift(oo(n,u,l))):i||(u=Zs(n,s),u!=null&&o.push(oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XI=/\r\n?/g,JI=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(XI,`
`).replace(JI,"")}function ya(t,e,n){if(e=Rm(e),Rm(t)!==e&&n)throw Error(F(425))}function ol(){}var ih=null,sh=null;function oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,ZI=typeof clearTimeout=="function"?clearTimeout:void 0,Pm=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof Pm<"u"?function(t){return Pm.resolve(null).then(t).catch(tS)}:ah;function tS(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function km(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Qi,ao="__reactProps$"+Qi,wn="__reactContainer$"+Qi,lh="__reactEvents$"+Qi,nS="__reactListeners$"+Qi,rS="__reactHandles$"+Qi;function Nr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wn]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=km(t);t!==null;){if(n=t[Qt])return n;t=km(t)}return e}t=n,n=t.parentNode}return null}function ko(t){return t=t[Qt]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Kl(t){return t[ao]||null}var uh=[],fi=-1;function yr(t){return{current:t}}function pe(t){0>fi||(t.current=uh[fi],uh[fi]=null,fi--)}function ce(t,e){fi++,uh[fi]=t.current,t.current=e}var lr={},et=yr(lr),dt=yr(!1),Mr=lr;function xi(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function al(){pe(dt),pe(et)}function Nm(t,e,n){if(et.current!==lr)throw Error(F(168));ce(et,e),ce(dt,n)}function G_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,zT(t)||"Unknown",i));return ve({},n,r)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Mr=et.current,ce(et,t),ce(dt,dt.current),!0}function xm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=G_(t,e,Mr),r.__reactInternalMemoizedMergedChildContext=t,pe(dt),pe(et),ce(et,t)):pe(dt),ce(dt,n)}var dn=null,Gl=!1,mc=!1;function Q_(t){dn===null?dn=[t]:dn.push(t)}function iS(t){Gl=!0,Q_(t)}function _r(){if(!mc&&dn!==null){mc=!0;var t=0,e=ae;try{var n=dn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,Gl=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),E_(dd,_r),i}finally{ae=e,mc=!1}}return null}var pi=[],mi=0,ul=null,cl=0,Ct=[],Rt=0,br=null,fn=1,pn="";function Rr(t,e){pi[mi++]=cl,pi[mi++]=ul,ul=t,cl=e}function Y_(t,e,n){Ct[Rt++]=fn,Ct[Rt++]=pn,Ct[Rt++]=br,br=t;var r=fn;t=pn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Ut(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function wd(t){t.return!==null&&(Rr(t,1),Y_(t,1,0))}function Td(t){for(;t===ul;)ul=pi[--mi],pi[mi]=null,cl=pi[--mi],pi[mi]=null;for(;t===br;)br=Ct[--Rt],Ct[Rt]=null,pn=Ct[--Rt],Ct[Rt]=null,fn=Ct[--Rt],Ct[Rt]=null}var Et=null,_t=null,me=!1,bt=null;function X_(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,_t=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,_t=null,!0):!1;default:return!1}}function ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(me){var e=_t;if(e){var n=e;if(!Dm(t,e)){if(ch(t))throw Error(F(418));e=Xn(n.nextSibling);var r=Et;e&&Dm(t,e)?X_(r,n):(t.flags=t.flags&-4097|2,me=!1,Et=t)}}else{if(ch(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,Et=t}}}function Vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function _a(t){if(t!==Et)return!1;if(!me)return Vm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oh(t.type,t.memoizedProps)),e&&(e=_t)){if(ch(t))throw J_(),Error(F(418));for(;e;)X_(t,e),e=Xn(e.nextSibling)}if(Vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=Et?Xn(t.stateNode.nextSibling):null;return!0}function J_(){for(var t=_t;t;)t=Xn(t.nextSibling)}function Di(){_t=Et=null,me=!1}function Id(t){bt===null?bt=[t]:bt.push(t)}var sS=Pn.ReactCurrentBatchConfig;function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function va(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Om(t){var e=t._init;return e(t._payload)}function Z_(t){function e(w,_){if(t){var A=w.deletions;A===null?(w.deletions=[_],w.flags|=16):A.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=tr(w,_),w.index=0,w.sibling=null,w}function s(w,_,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<_?(w.flags|=2,_):A):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,A,O){return _===null||_.tag!==6?(_=Tc(A,w.mode,O),_.return=w,_):(_=i(_,A),_.return=w,_)}function u(w,_,A,O){var j=A.type;return j===li?f(w,_,A.props.children,O,A.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&Om(j)===_.type)?(O=i(_,A.props),O.ref=Is(w,_,A),O.return=w,O):(O=za(A.type,A.key,A.props,null,w.mode,O),O.ref=Is(w,_,A),O.return=w,O)}function h(w,_,A,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=Ic(A,w.mode,O),_.return=w,_):(_=i(_,A.children||[]),_.return=w,_)}function f(w,_,A,O,j){return _===null||_.tag!==7?(_=Lr(A,w.mode,O,j),_.return=w,_):(_=i(_,A),_.return=w,_)}function p(w,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Tc(""+_,w.mode,A),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case la:return A=za(_.type,_.key,_.props,null,w.mode,A),A.ref=Is(w,null,_),A.return=w,A;case ai:return _=Ic(_,w.mode,A),_.return=w,_;case bn:var O=_._init;return p(w,O(_._payload),A)}if(Rs(_)||_s(_))return _=Lr(_,w.mode,A,null),_.return=w,_;va(w,_)}return null}function m(w,_,A,O){var j=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(w,_,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case la:return A.key===j?u(w,_,A,O):null;case ai:return A.key===j?h(w,_,A,O):null;case bn:return j=A._init,m(w,_,j(A._payload),O)}if(Rs(A)||_s(A))return j!==null?null:f(w,_,A,O,null);va(w,A)}return null}function R(w,_,A,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(A)||null,l(_,w,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case la:return w=w.get(O.key===null?A:O.key)||null,u(_,w,O,j);case ai:return w=w.get(O.key===null?A:O.key)||null,h(_,w,O,j);case bn:var b=O._init;return R(w,_,A,b(O._payload),j)}if(Rs(O)||_s(O))return w=w.get(A)||null,f(_,w,O,j,null);va(_,O)}return null}function S(w,_,A,O){for(var j=null,b=null,E=_,y=_=0,v=null;E!==null&&y<A.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var T=m(w,E,A[y],O);if(T===null){E===null&&(E=v);break}t&&E&&T.alternate===null&&e(w,E),_=s(T,_,y),b===null?j=T:b.sibling=T,b=T,E=v}if(y===A.length)return n(w,E),me&&Rr(w,y),j;if(E===null){for(;y<A.length;y++)E=p(w,A[y],O),E!==null&&(_=s(E,_,y),b===null?j=E:b.sibling=E,b=E);return me&&Rr(w,y),j}for(E=r(w,E);y<A.length;y++)v=R(E,w,y,A[y],O),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),_=s(v,_,y),b===null?j=v:b.sibling=v,b=v);return t&&E.forEach(function(P){return e(w,P)}),me&&Rr(w,y),j}function x(w,_,A,O){var j=_s(A);if(typeof j!="function")throw Error(F(150));if(A=j.call(A),A==null)throw Error(F(151));for(var b=j=null,E=_,y=_=0,v=null,T=A.next();E!==null&&!T.done;y++,T=A.next()){E.index>y?(v=E,E=null):v=E.sibling;var P=m(w,E,T.value,O);if(P===null){E===null&&(E=v);break}t&&E&&P.alternate===null&&e(w,E),_=s(P,_,y),b===null?j=P:b.sibling=P,b=P,E=v}if(T.done)return n(w,E),me&&Rr(w,y),j;if(E===null){for(;!T.done;y++,T=A.next())T=p(w,T.value,O),T!==null&&(_=s(T,_,y),b===null?j=T:b.sibling=T,b=T);return me&&Rr(w,y),j}for(E=r(w,E);!T.done;y++,T=A.next())T=R(E,w,y,T.value,O),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?y:T.key),_=s(T,_,y),b===null?j=T:b.sibling=T,b=T);return t&&E.forEach(function(N){return e(w,N)}),me&&Rr(w,y),j}function V(w,_,A,O){if(typeof A=="object"&&A!==null&&A.type===li&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case la:e:{for(var j=A.key,b=_;b!==null;){if(b.key===j){if(j=A.type,j===li){if(b.tag===7){n(w,b.sibling),_=i(b,A.props.children),_.return=w,w=_;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&Om(j)===b.type){n(w,b.sibling),_=i(b,A.props),_.ref=Is(w,b,A),_.return=w,w=_;break e}n(w,b);break}else e(w,b);b=b.sibling}A.type===li?(_=Lr(A.props.children,w.mode,O,A.key),_.return=w,w=_):(O=za(A.type,A.key,A.props,null,w.mode,O),O.ref=Is(w,_,A),O.return=w,w=O)}return o(w);case ai:e:{for(b=A.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(w,_.sibling),_=i(_,A.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Ic(A,w.mode,O),_.return=w,w=_}return o(w);case bn:return b=A._init,V(w,_,b(A._payload),O)}if(Rs(A))return S(w,_,A,O);if(_s(A))return x(w,_,A,O);va(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,A),_.return=w,w=_):(n(w,_),_=Tc(A,w.mode,O),_.return=w,w=_),o(w)):n(w,_)}return V}var Vi=Z_(!0),ev=Z_(!1),hl=yr(null),dl=null,gi=null,Sd=null;function Ad(){Sd=gi=dl=null}function Cd(t){var e=hl.current;pe(hl),t._currentValue=e}function dh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){dl=t,Sd=gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(Sd!==t)if(t={context:t,memoizedValue:e,next:null},gi===null){if(dl===null)throw Error(F(308));gi=t,dl.dependencies={lanes:0,firstContext:t}}else gi=gi.next=t;return e}var xr=null;function Rd(t){xr===null?xr=[t]:xr.push(t)}function tv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tn(t,r)}function Tn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tn(t,n)}return i=r.interleaved,i===null?(e.next=e,Rd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tn(t,n)}function La(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fd(t,n)}}function Lm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var m=l.lane,R=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,x=l;switch(m=e,R=n,x.tag){case 1:if(S=x.payload,typeof S=="function"){p=S.call(R,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,m=typeof S=="function"?S.call(R,p,m):S,m==null)break e;p=ve({},p,m);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else R={eventTime:R,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=p):f=f.next=R,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=p}}function Mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var No={},Xt=yr(No),lo=yr(No),uo=yr(No);function Dr(t){if(t===No)throw Error(F(174));return t}function kd(t,e){switch(ce(uo,e),ce(lo,t),ce(Xt,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qc(e,t)}pe(Xt),ce(Xt,e)}function Oi(){pe(Xt),pe(lo),pe(uo)}function rv(t){Dr(uo.current);var e=Dr(Xt.current),n=qc(e,t.type);e!==n&&(ce(lo,t),ce(Xt,n))}function Nd(t){lo.current===t&&(pe(Xt),pe(lo))}var ye=yr(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function xd(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var Ma=Pn.ReactCurrentDispatcher,yc=Pn.ReactCurrentBatchConfig,Fr=0,_e=null,ke=null,Le=null,ml=!1,zs=!1,co=0,oS=0;function Ke(){throw Error(F(321))}function Dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bt(t[n],e[n]))return!1;return!0}function Vd(t,e,n,r,i,s){if(Fr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ma.current=t===null||t.memoizedState===null?cS:hS,t=n(r,i),zs){s=0;do{if(zs=!1,co=0,25<=s)throw Error(F(301));s+=1,Le=ke=null,e.updateQueue=null,Ma.current=dS,t=n(r,i)}while(zs)}if(Ma.current=gl,e=ke!==null&&ke.next!==null,Fr=0,Le=ke=_e=null,ml=!1,e)throw Error(F(300));return t}function Od(){var t=co!==0;return co=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?_e.memoizedState=Le=t:Le=Le.next=t,Le}function Dt(){if(ke===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=Le===null?_e.memoizedState:Le.next;if(e!==null)Le=e,ke=t;else{if(t===null)throw Error(F(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Le===null?_e.memoizedState=Le=t:Le=Le.next=t}return Le}function ho(t,e){return typeof e=="function"?e(t):e}function _c(t){var e=Dt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Fr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,Ur|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Bt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Bt(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iv(){}function sv(t,e){var n=_e,r=Dt(),i=e(),s=!Bt(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Ld(lv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,fo(9,av.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(F(349));Fr&30||ov(n,e,i)}return i}function ov(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function av(t,e,n,r){e.value=n,e.getSnapshot=r,uv(e)&&cv(t)}function lv(t,e,n){return n(function(){uv(e)&&cv(t)})}function uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bt(t,n)}catch{return!0}}function cv(t){var e=Tn(t,1);e!==null&&jt(e,t,1,-1)}function bm(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=uS.bind(null,_e,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hv(){return Dt().memoizedState}function ba(t,e,n,r){var i=Kt();_e.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function Ql(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&Dd(r,o.deps)){i.memoizedState=fo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function Fm(t,e){return ba(8390656,8,t,e)}function Ld(t,e){return Ql(2048,8,t,e)}function dv(t,e){return Ql(4,2,t,e)}function fv(t,e){return Ql(4,4,t,e)}function pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mv(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,pv.bind(null,e,t),n)}function Md(){}function gv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _v(t,e,n){return Fr&21?(Bt(n,e)||(n=I_(),_e.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function aS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=yc.transition;yc.transition={};try{t(!1),e()}finally{ae=n,yc.transition=r}}function vv(){return Dt().memoizedState}function lS(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ev(t))wv(e,n);else if(n=tv(t,e,n,r),n!==null){var i=st();jt(n,t,r,i),Tv(n,e,r)}}function uS(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ev(t))wv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Bt(l,o)){var u=e.interleaved;u===null?(i.next=i,Rd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=tv(t,e,i,r),n!==null&&(i=st(),jt(n,t,r,i),Tv(n,e,r))}}function Ev(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function wv(t,e){zs=ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,fd(t,n)}}var gl={readContext:xt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},cS={readContext:xt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:Fm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ba(4194308,4,pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return ba(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lS.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:bm,useDebugValue:Md,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=bm(!1),e=t[0];return t=aS.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Kt();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Me===null)throw Error(F(349));Fr&30||ov(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Fm(lv.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,av.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Me.identifierPrefix;if(me){var n=pn,r=fn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hS={readContext:xt,useCallback:gv,useContext:xt,useEffect:Ld,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:fv,useMemo:yv,useReducer:_c,useRef:hv,useState:function(){return _c(ho)},useDebugValue:Md,useDeferredValue:function(t){var e=Dt();return _v(e,ke.memoizedState,t)},useTransition:function(){var t=_c(ho)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:iv,useSyncExternalStore:sv,useId:vv,unstable_isNewReconciler:!1},dS={readContext:xt,useCallback:gv,useContext:xt,useEffect:Ld,useImperativeHandle:mv,useInsertionEffect:dv,useLayoutEffect:fv,useMemo:yv,useReducer:vc,useRef:hv,useState:function(){return vc(ho)},useDebugValue:Md,useDeferredValue:function(t){var e=Dt();return ke===null?e.memoizedState=t:_v(e,ke.memoizedState,t)},useTransition:function(){var t=vc(ho)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:iv,useSyncExternalStore:sv,useId:vv,unstable_isNewReconciler:!1};function Lt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=er(t),s=yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(jt(e,t,i,r),La(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=er(t),s=yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(jt(e,t,i,r),La(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=er(t),i=yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(jt(e,t,r,n),La(e,t,r))}};function Um(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function Iv(t,e,n){var r=!1,i=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=xt(s):(i=ft(e)?Mr:et.current,r=e.contextTypes,s=(r=r!=null)?xi(t,i):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xt(s):(s=ft(e)?Mr:et.current,i.context=xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yl.enqueueReplaceState(i,i.state,null),fl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Li(t,e){try{var n="",r=e;do n+=jT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fS=typeof WeakMap=="function"?WeakMap:Map;function Sv(t,e,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_l||(_l=!0,Ah=r),mh(t,e)},n}function Av(t,e,n){n=yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mh(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=RS.bind(null,t,e,n),e.then(t,t))}function Bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $m(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yn(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var pS=Pn.ReactCurrentOwner,ht=!1;function it(t,e,n,r){e.child=t===null?ev(e,null,n,r):Vi(e,t.child,n,r)}function Hm(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=Vd(t,e,n,r,s,i),n=Od(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(me&&n&&wd(e),e.flags|=1,it(t,e,r,i),e.child)}function Wm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Hd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cv(t,e,s,r,i)):(t=za(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,In(t,e,i)}return gh(t,e,n,r,i)}function Rv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(_i,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(_i,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(_i,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(_i,yt),yt|=r;return it(t,e,i,n),e.child}function Pv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gh(t,e,n,r,i){var s=ft(n)?Mr:et.current;return s=xi(e,s),Si(e,i),n=Vd(t,e,n,r,s,i),r=Od(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(me&&r&&wd(e),e.flags|=1,it(t,e,n,i),e.child)}function qm(t,e,n,r,i){if(ft(n)){var s=!0;ll(e)}else s=!1;if(Si(e,i),e.stateNode===null)Fa(t,e),Iv(e,n,r),ph(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=xt(h):(h=ft(n)?Mr:et.current,h=xi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&jm(e,o,r,h),Fn=!1;var m=e.memoizedState;o.state=m,fl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||dt.current||Fn?(typeof f=="function"&&(fh(e,n,f,r),u=e.memoizedState),(l=Fn||Um(e,n,l,r,m,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,nv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Lt(e.type,l),o.props=h,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xt(u):(u=ft(n)?Mr:et.current,u=xi(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&jm(e,o,r,u),Fn=!1,m=e.memoizedState,o.state=m,fl(e,r,o,i);var S=e.memoizedState;l!==p||m!==S||dt.current||Fn?(typeof R=="function"&&(fh(e,n,R,r),S=e.memoizedState),(h=Fn||Um(e,n,h,r,m,S,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return yh(t,e,n,r,s,i)}function yh(t,e,n,r,i,s){Pv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xm(e,n,!1),In(t,e,s);r=e.stateNode,pS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vi(e,t.child,null,s),e.child=Vi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&xm(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?Nm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nm(t,e.context,!1),kd(t,e.containerInfo)}function Km(t,e,n,r,i){return Di(),Id(i),e.flags|=256,it(t,e,n,r),e.child}var _h={dehydrated:null,treeContext:null,retryLane:0};function vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nv(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zl(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vh(n),e.memoizedState=_h,t):bd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tr(l,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_h,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bd(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ea(t,e,n,r){return r!==null&&Id(r),Vi(e,t.child,null,n),t=bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ec(Error(F(422))),Ea(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zl({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Vi(e,t.child,null,o),e.child.memoizedState=vh(o),e.memoizedState=_h,s);if(!(e.mode&1))return Ea(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Ec(s,r,void 0),Ea(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tn(t,i),jt(r,t,i,-1))}return $d(),r=Ec(Error(F(421))),Ea(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=PS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Xn(i.nextSibling),Et=e,me=!0,bt=null,t!==null&&(Ct[Rt++]=fn,Ct[Rt++]=pn,Ct[Rt++]=br,fn=t.id,pn=t.overflow,br=e),e=bd(e,r.children),e.flags|=4096,e)}function Gm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dh(t.return,e,n)}function wc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,n,e);else if(t.tag===19)Gm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gS(t,e,n){switch(e.tag){case 3:kv(e),Di();break;case 5:rv(e);break;case 1:ft(e.type)&&ll(e);break;case 4:kd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(hl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?Nv(t,e,n):(ce(ye,ye.current&1),t=In(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,Rv(t,e,n)}return In(t,e,n)}var Dv,Eh,Vv,Ov;Dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Eh=function(){};Vv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(Xt.current);var s=null;switch(n){case"input":i=Bc(t,i),r=Bc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Wc(t,i),r=Wc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ol)}Kc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Ov=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ss(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yS(t,e,n){var r=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ft(e.type)&&al(),Ge(e),null;case 3:return r=e.stateNode,Oi(),pe(dt),pe(et),xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_a(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bt!==null&&(Ph(bt),bt=null))),Eh(t,e),Ge(e),null;case 5:Nd(e);var i=Dr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)Vv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ge(e),null}if(t=Dr(Xt.current),_a(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[ao]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)de(ks[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":rm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":sm(r,s),de("invalid",r)}Kc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ya(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ya(r.textContent,l,t),i=["children",""+l]):Xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":ua(r),im(r,s,!0);break;case"textarea":ua(r),om(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ol)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[ao]=r,Dv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)de(ks[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":rm(t,r),i=Bc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":sm(t,r),i=Wc(t,r),de("invalid",t);break;default:i=r}Kc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?h_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&u_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&ad(t,s,u,o))}switch(n){case"input":ua(t),im(t,r,!1);break;case"textarea":ua(t),om(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)Ov(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Dr(uo.current),Dr(Xt.current),_a(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return Ge(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&_t!==null&&e.mode&1&&!(e.flags&128))J_(),Di(),e.flags|=98560,s=!1;else if(s=_a(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Qt]=e}else Di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else bt!==null&&(Ph(bt),bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ne===0&&(Ne=3):$d())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Oi(),Eh(t,e),t===null&&so(e.stateNode.containerInfo),Ge(e),null;case 10:return Cd(e.type._context),Ge(e),null;case 17:return ft(e.type)&&al(),Ge(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ss(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pl(t),o!==null){for(e.flags|=128,Ss(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Mi&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304)}else{if(!r)if(t=pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ss(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ge(e),null}else 2*Ae()-s.renderingStartTime>Mi&&n!==1073741824&&(e.flags|=128,r=!0,Ss(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return Bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function _S(t,e){switch(Td(e),e.tag){case 1:return ft(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oi(),pe(dt),pe(et),xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Oi(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var wa=!1,Xe=!1,vS=typeof WeakSet=="function"?WeakSet:Set,H=null;function yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function wh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Qm=!1;function ES(t,e){if(ih=rl,t=U_(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var R;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(R=p.firstChild)!==null;)m=p,p=R;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=o),m===s&&++f===r&&(u=o),(R=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(sh={focusedElem:t,selectionRange:n},rl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var x=S.memoizedProps,V=S.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?x:Lt(e.type,x),V);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Te(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return S=Qm,Qm=!1,S}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wh(e,n,s)}i=i.next}while(i!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Th(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lv(t){var e=t.alternate;e!==null&&(t.alternate=null,Lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[ao],delete e[lh],delete e[nS],delete e[rS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Mv(t){return t.tag===5||t.tag===3||t.tag===4}function Ym(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ol));else if(r!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}function Sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sh(t,e,n),t=t.sibling;t!==null;)Sh(t,e,n),t=t.sibling}var Fe=null,Mt=!1;function Ln(t,e,n){for(n=n.child;n!==null;)bv(t,e,n),n=n.sibling}function bv(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Xe||yi(n,e);case 6:var r=Fe,i=Mt;Fe=null,Ln(t,e,n),Fe=r,Mt=i,Fe!==null&&(Mt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Mt?(t=Fe,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),no(t)):pc(Fe,n.stateNode));break;case 4:r=Fe,i=Mt,Fe=n.stateNode.containerInfo,Mt=!0,Ln(t,e,n),Fe=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wh(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!Xe&&(yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Ln(t,e,n),Xe=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function Xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vS),e.forEach(function(r){var i=kS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Mt=!1;break e;case 3:Fe=l.stateNode.containerInfo,Mt=!0;break e;case 4:Fe=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(Fe===null)throw Error(F(160));bv(s,o,i),Fe=null,Mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fv(e,t),e=e.sibling}function Fv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),qt(t),r&4){try{Bs(3,t,t.return),Xl(3,t)}catch(x){Te(t,t.return,x)}try{Bs(5,t,t.return)}catch(x){Te(t,t.return,x)}}break;case 1:Ot(e,t),qt(t),r&512&&n!==null&&yi(n,n.return);break;case 5:if(Ot(e,t),qt(t),r&512&&n!==null&&yi(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(x){Te(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&o_(i,s),Gc(l,o);var h=Gc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?h_(i,p):f==="dangerouslySetInnerHTML"?u_(i,p):f==="children"?Js(i,p):ad(i,f,p,h)}switch(l){case"input":$c(i,s);break;case"textarea":a_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?Ei(i,!!s.multiple,R,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ei(i,!!s.multiple,s.defaultValue,!0):Ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[ao]=s}catch(x){Te(t,t.return,x)}}break;case 6:if(Ot(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Te(t,t.return,x)}}break;case 3:if(Ot(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(x){Te(t,t.return,x)}break;case 4:Ot(e,t),qt(t);break;case 13:Ot(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jd=Ae())),r&4&&Xm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(h=Xe)||f,Ot(e,t),Xe=h):Ot(e,t),qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(m=H,R=m.child,m.tag){case 0:case 11:case 14:case 15:Bs(4,m,m.return);break;case 1:yi(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(x){Te(r,n,x)}}break;case 5:yi(m,m.return);break;case 22:if(m.memoizedState!==null){Zm(p);continue}}R!==null?(R.return=m,H=R):Zm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=c_("display",o))}catch(x){Te(t,t.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(x){Te(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ot(e,t),qt(t),r&4&&Xm(t);break;case 21:break;default:Ot(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Mv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=Ym(t);Sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ym(t);Ih(t,l,o);break;default:throw Error(F(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wS(t,e,n){H=t,Uv(t)}function Uv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=wa;var h=Xe;if(wa=o,(Xe=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?eg(i):u!==null?(u.return=o,H=u):eg(i);for(;s!==null;)H=s,Uv(s),s=s.sibling;H=i,wa=l,Xe=h}Jm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Jm(t)}}function Jm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Mm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Mm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Xe||e.flags&512&&Th(e)}catch(m){Te(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Zm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function eg(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Th(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Th(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var TS=Math.ceil,yl=Pn.ReactCurrentDispatcher,Fd=Pn.ReactCurrentOwner,Nt=Pn.ReactCurrentBatchConfig,ie=0,Me=null,Re=null,ze=0,yt=0,_i=yr(0),Ne=0,po=null,Ur=0,Jl=0,Ud=0,$s=null,ut=null,jd=0,Mi=1/0,hn=null,_l=!1,Ah=null,Zn=null,Ta=!1,qn=null,vl=0,Hs=0,Ch=null,Ua=-1,ja=0;function st(){return ie&6?Ae():Ua!==-1?Ua:Ua=Ae()}function er(t){return t.mode&1?ie&2&&ze!==0?ze&-ze:sS.transition!==null?(ja===0&&(ja=I_()),ja):(t=ae,t!==0||(t=window.event,t=t===void 0?16:N_(t.type)),t):1}function jt(t,e,n,r){if(50<Hs)throw Hs=0,Ch=null,Error(F(185));Ro(t,n,r),(!(ie&2)||t!==Me)&&(t===Me&&(!(ie&2)&&(Jl|=n),Ne===4&&jn(t,ze)),pt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Mi=Ae()+500,Gl&&_r()))}function pt(t,e){var n=t.callbackNode;sI(t,e);var r=nl(t,t===Me?ze:0);if(r===0)n!==null&&um(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&um(n),e===1)t.tag===0?iS(tg.bind(null,t)):Q_(tg.bind(null,t)),eS(function(){!(ie&6)&&_r()}),n=null;else{switch(S_(r)){case 1:n=dd;break;case 4:n=w_;break;case 16:n=tl;break;case 536870912:n=T_;break;default:n=tl}n=Kv(n,jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jv(t,e){if(Ua=-1,ja=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(Ai()&&t.callbackNode!==n)return null;var r=nl(t,t===Me?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=El(t,r);else{e=r;var i=ie;ie|=2;var s=Bv();(Me!==t||ze!==e)&&(hn=null,Mi=Ae()+500,Or(t,e));do try{AS();break}catch(l){zv(t,l)}while(!0);Ad(),yl.current=s,ie=i,Re!==null?e=0:(Me=null,ze=0,e=Ne)}if(e!==0){if(e===2&&(i=Zc(t),i!==0&&(r=i,e=Rh(t,i))),e===1)throw n=po,Or(t,0),jn(t,r),pt(t,Ae()),n;if(e===6)jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!IS(i)&&(e=El(t,r),e===2&&(s=Zc(t),s!==0&&(r=s,e=Rh(t,s))),e===1))throw n=po,Or(t,0),jn(t,r),pt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Pr(t,ut,hn);break;case 3:if(jn(t,r),(r&130023424)===r&&(e=jd+500-Ae(),10<e)){if(nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ah(Pr.bind(null,t,ut,hn),e);break}Pr(t,ut,hn);break;case 4:if(jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TS(r/1960))-r,10<r){t.timeoutHandle=ah(Pr.bind(null,t,ut,hn),r);break}Pr(t,ut,hn);break;case 5:Pr(t,ut,hn);break;default:throw Error(F(329))}}}return pt(t,Ae()),t.callbackNode===n?jv.bind(null,t):null}function Rh(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=El(t,e),t!==2&&(e=ut,ut=n,e!==null&&Ph(e)),t}function Ph(t){ut===null?ut=t:ut.push.apply(ut,t)}function IS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Bt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e){for(e&=~Ud,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function tg(t){if(ie&6)throw Error(F(327));Ai();var e=nl(t,0);if(!(e&1))return pt(t,Ae()),null;var n=El(t,e);if(t.tag!==0&&n===2){var r=Zc(t);r!==0&&(e=r,n=Rh(t,r))}if(n===1)throw n=po,Or(t,0),jn(t,e),pt(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,ut,hn),pt(t,Ae()),null}function zd(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Mi=Ae()+500,Gl&&_r())}}function jr(t){qn!==null&&qn.tag===0&&!(ie&6)&&Ai();var e=ie;ie|=1;var n=Nt.transition,r=ae;try{if(Nt.transition=null,ae=1,t)return t()}finally{ae=r,Nt.transition=n,ie=e,!(ie&6)&&_r()}}function Bd(){yt=_i.current,pe(_i)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZI(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Oi(),pe(dt),pe(et),xd();break;case 5:Nd(r);break;case 4:Oi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Cd(r.type._context);break;case 22:case 23:Bd()}n=n.return}if(Me=t,Re=t=tr(t.current,null),ze=yt=e,Ne=0,po=null,Ud=Jl=Ur=0,ut=$s=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xr=null}return t}function zv(t,e){do{var n=Re;try{if(Ad(),Ma.current=gl,ml){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ml=!1}if(Fr=0,Le=ke=_e=null,zs=!1,co=0,Fd.current=null,n===null||n.return===null){Ne=1,po=e,Re=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Bm(o);if(R!==null){R.flags&=-257,$m(R,o,l,s,e),R.mode&1&&zm(s,h,e),e=R,u=h;var S=e.updateQueue;if(S===null){var x=new Set;x.add(u),e.updateQueue=x}else S.add(u);break e}else{if(!(e&1)){zm(s,h,e),$d();break e}u=Error(F(426))}}else if(me&&l.mode&1){var V=Bm(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),$m(V,o,l,s,e),Id(Li(u,l));break e}}s=u=Li(u,l),Ne!==4&&(Ne=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Sv(s,u,e);Lm(s,w);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Zn===null||!Zn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Av(s,l,e);Lm(s,O);break e}}s=s.return}while(s!==null)}Hv(n)}catch(j){e=j,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Bv(){var t=yl.current;return yl.current=gl,t===null?gl:t}function $d(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Me===null||!(Ur&268435455)&&!(Jl&268435455)||jn(Me,ze)}function El(t,e){var n=ie;ie|=2;var r=Bv();(Me!==t||ze!==e)&&(hn=null,Or(t,e));do try{SS();break}catch(i){zv(t,i)}while(!0);if(Ad(),ie=n,yl.current=r,Re!==null)throw Error(F(261));return Me=null,ze=0,Ne}function SS(){for(;Re!==null;)$v(Re)}function AS(){for(;Re!==null&&!YT();)$v(Re)}function $v(t){var e=qv(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?Hv(t):Re=e,Fd.current=null}function Hv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_S(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Re=null;return}}else if(n=yS(n,e,yt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Ne===0&&(Ne=5)}function Pr(t,e,n){var r=ae,i=Nt.transition;try{Nt.transition=null,ae=1,CS(t,e,n,r)}finally{Nt.transition=i,ae=r}return null}function CS(t,e,n,r){do Ai();while(qn!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(oI(t,s),t===Me&&(Re=Me=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ta||(Ta=!0,Kv(tl,function(){return Ai(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,Fd.current=null,ES(t,n),Fv(n,t),qI(sh),rl=!!ih,sh=ih=null,t.current=n,wS(n),XT(),ie=l,ae=o,Nt.transition=s}else t.current=n;if(Ta&&(Ta=!1,qn=t,vl=i),s=t.pendingLanes,s===0&&(Zn=null),eI(n.stateNode),pt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_l)throw _l=!1,t=Ah,Ah=null,t;return vl&1&&t.tag!==0&&Ai(),s=t.pendingLanes,s&1?t===Ch?Hs++:(Hs=0,Ch=t):Hs=0,_r(),null}function Ai(){if(qn!==null){var t=S_(vl),e=Nt.transition,n=ae;try{if(Nt.transition=null,ae=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,vl=0,ie&6)throw Error(F(331));var i=ie;for(ie|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Bs(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var m=f.sibling,R=f.return;if(Lv(f),f===h){H=null;break}if(m!==null){m.return=R,H=m;break}H=R}}}var S=s.alternate;if(S!==null){var x=S.child;if(x!==null){S.child=null;do{var V=x.sibling;x.sibling=null,x=V}while(x!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,H=w;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,H=A;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(j){Te(l,l.return,j)}if(l===o){H=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,H=O;break e}H=l.return}}if(ie=i,_r(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot($l,t)}catch{}r=!0}return r}finally{ae=n,Nt.transition=e}}return!1}function ng(t,e,n){e=Li(n,e),e=Sv(t,e,1),t=Jn(t,e,1),e=st(),t!==null&&(Ro(t,1,e),pt(t,e))}function Te(t,e,n){if(t.tag===3)ng(t,t,n);else for(;e!==null;){if(e.tag===3){ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=Li(n,t),t=Av(e,t,1),e=Jn(e,t,1),t=st(),e!==null&&(Ro(e,1,t),pt(e,t));break}}e=e.return}}function RS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(ze&n)===n&&(Ne===4||Ne===3&&(ze&130023424)===ze&&500>Ae()-jd?Or(t,0):Ud|=n),pt(t,e)}function Wv(t,e){e===0&&(t.mode&1?(e=da,da<<=1,!(da&130023424)&&(da=4194304)):e=1);var n=st();t=Tn(t,e),t!==null&&(Ro(t,e,n),pt(t,n))}function PS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wv(t,n)}function kS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Wv(t,n)}var qv;qv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,gS(t,e,n);ht=!!(t.flags&131072)}else ht=!1,me&&e.flags&1048576&&Y_(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Fa(t,e),t=e.pendingProps;var i=xi(e,et.current);Si(e,n),i=Vd(null,e,r,t,i,n);var s=Od();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,ll(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pd(e),i.updater=Yl,e.stateNode=i,i._reactInternals=e,ph(e,r,t,n),e=yh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&wd(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Fa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xS(r),t=Lt(r,t),i){case 0:e=gh(null,e,r,t,n);break e;case 1:e=qm(null,e,r,t,n);break e;case 11:e=Hm(null,e,r,t,n);break e;case 14:e=Wm(null,e,r,Lt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),gh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),qm(t,e,r,i,n);case 3:e:{if(kv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,nv(t,e),fl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Li(Error(F(423)),e),e=Km(t,e,r,n,i);break e}else if(r!==i){i=Li(Error(F(424)),e),e=Km(t,e,r,n,i);break e}else for(_t=Xn(e.stateNode.containerInfo.firstChild),Et=e,me=!0,bt=null,n=ev(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){e=In(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return rv(e),t===null&&hh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,oh(r,i)?o=null:s!==null&&oh(r,s)&&(e.flags|=32),Pv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&hh(e),null;case 13:return Nv(t,e,n);case 4:return kd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Hm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(hl,r._currentValue),r._currentValue=o,s!==null)if(Bt(s.value,o)){if(s.children===i.children&&!dt.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),dh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=xt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),Wm(t,e,r,i,n);case 15:return Cv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Fa(t,e),e.tag=1,ft(r)?(t=!0,ll(e)):t=!1,Si(e,n),Iv(e,r,i),ph(e,r,i,n),yh(null,e,r,!0,t,n);case 19:return xv(t,e,n);case 22:return Rv(t,e,n)}throw Error(F(156,e.tag))};function Kv(t,e){return E_(t,e)}function NS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new NS(t,e,n,r)}function Hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xS(t){if(typeof t=="function")return Hd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ud)return 11;if(t===cd)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function za(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Hd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case li:return Lr(n.children,i,s,e);case ld:o=8,i|=8;break;case Fc:return t=kt(12,n,e,i|2),t.elementType=Fc,t.lanes=s,t;case Uc:return t=kt(13,n,e,i),t.elementType=Uc,t.lanes=s,t;case jc:return t=kt(19,n,e,i),t.elementType=jc,t.lanes=s,t;case r_:return Zl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t_:o=10;break e;case n_:o=9;break e;case ud:o=11;break e;case cd:o=14;break e;case bn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function Zl(t,e,n,r){return t=kt(22,t,r,e),t.elementType=r_,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wd(t,e,n,r,i,s,o,l,u){return t=new DS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function VS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gv(t){if(!t)return lr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ft(n))return G_(t,n,e)}return e}function Qv(t,e,n,r,i,s,o,l,u){return t=Wd(n,r,!0,t,i,s,o,l,u),t.context=Gv(null),n=t.current,r=st(),i=er(n),s=yn(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,Ro(t,i,r),pt(t,r),t}function eu(t,e,n,r){var i=e.current,s=st(),o=er(i);return n=Gv(n),e.context===null?e.context=n:e.pendingContext=n,e=yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(jt(t,i,o,s),La(t,i,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){rg(t,e),(t=t.alternate)&&rg(t,e)}function OS(){return null}var Yv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}tu.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));eu(t,e,null,null)};tu.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){eu(null,t,null,null)}),e[wn]=null}};function tu(t){this._internalRoot=t}tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=R_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&k_(t)}};function Gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ig(){}function LS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=wl(o);s.call(h)}}var o=Qv(e,r,t,0,null,!1,!1,"",ig);return t._reactRootContainer=o,t[wn]=o.current,so(t.nodeType===8?t.parentNode:t),jr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=wl(u);l.call(h)}}var u=Wd(t,0,!1,null,null,!1,!1,"",ig);return t._reactRootContainer=u,t[wn]=u.current,so(t.nodeType===8?t.parentNode:t),jr(function(){eu(e,u,n,r)}),u}function ru(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=wl(o);l.call(u)}}eu(e,o,t,i)}else o=LS(n,e,t,i,r);return wl(o)}A_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ps(e.pendingLanes);n!==0&&(fd(e,n|1),pt(e,Ae()),!(ie&6)&&(Mi=Ae()+500,_r()))}break;case 13:jr(function(){var r=Tn(t,1);if(r!==null){var i=st();jt(r,t,1,i)}}),qd(t,1)}};pd=function(t){if(t.tag===13){var e=Tn(t,134217728);if(e!==null){var n=st();jt(e,t,134217728,n)}qd(t,134217728)}};C_=function(t){if(t.tag===13){var e=er(t),n=Tn(t,e);if(n!==null){var r=st();jt(n,t,e,r)}qd(t,e)}};R_=function(){return ae};P_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Yc=function(t,e,n){switch(e){case"input":if($c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kl(r);if(!i)throw Error(F(90));s_(r),$c(r,i)}}}break;case"textarea":a_(t,n);break;case"select":e=n.value,e!=null&&Ei(t,!!n.multiple,e,!1)}};p_=zd;m_=jr;var MS={usingClientEntryPoint:!1,Events:[ko,di,Kl,d_,f_,zd]},As={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bS={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=__(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||OS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ia.isDisabled&&Ia.supportsFiber)try{$l=Ia.inject(bS),Yt=Ia}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gd(e))throw Error(F(200));return VS(t,e,null,n)};It.createRoot=function(t,e){if(!Gd(t))throw Error(F(299));var n=!1,r="",i=Yv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Wd(t,1,!1,null,null,n,!1,r,i),t[wn]=e.current,so(t.nodeType===8?t.parentNode:t),new Kd(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=__(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return jr(t)};It.hydrate=function(t,e,n){if(!nu(e))throw Error(F(200));return ru(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!Gd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Yv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qv(e,null,t,1,n??null,i,!1,s,o),t[wn]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tu(e)};It.render=function(t,e,n){if(!nu(e))throw Error(F(200));return ru(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!nu(t))throw Error(F(40));return t._reactRootContainer?(jr(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1};It.unstable_batchedUpdates=zd;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ru(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(t){console.error(t)}}Xv(),Xy.exports=It;var FS=Xy.exports,sg=FS;Mc.createRoot=sg.createRoot,Mc.hydrateRoot=sg.hydrateRoot;const US="modulepreload",jS=function(t){return"/"+t},og={},mt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=jS(u),u in og)return;og[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":US,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((m,R)=>{p.addEventListener("load",m),p.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},Jv={colors:{primary:"#00B7D8",primaryDark:"#0095AF",secondary:"#5ECCC3",secondaryDark:"#4DBBB2",professional:"#1E5F8C",professionalDark:"#174B70",cardBg:"#FFFFFF",lightBg:"#F5FBFD",pageBg:"#F5F5F5",textDark:"#002D3A",textMedium:"#4A6572",textLight:"#6E8CA0",success:"#388E3C",warning:"#F57C00",error:"#D32F2F",info:"#1976D2"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem"},borderRadius:{sm:"4px",md:"8px",lg:"12px",xl:"20px",round:"50%"},typography:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSize:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem"},fontWeight:{regular:400,medium:500,semibold:600,bold:700}},shadows:{sm:"0 2px 4px rgba(0,0,0,0.05)",md:"0 4px 8px rgba(0,0,0,0.08)",lg:"0 8px 16px rgba(0,0,0,0.1)"},transitions:{default:"all 0.2s ease",fast:"all 0.1s ease",slow:"all 0.3s ease"},breakpoints:{xs:"480px",sm:"768px",md:"992px",lg:"1200px"}},Zv=q.createContext(Jv),Wt=()=>q.useContext(Zv),zS=({children:t})=>C.jsx(Zv.Provider,{value:Jv,children:t}),Tx=()=>{const t=Wt();return C.jsx("div",{style:{position:"fixed",top:10,right:10,background:t.colors.primary,color:"white",padding:"4px 12px",borderRadius:20,fontSize:t.typography.fontSize.xs,fontWeight:t.typography.fontWeight.semibold,letterSpacing:.5,zIndex:1e3},children:"DEMO"})},Ix=({active:t,onNavigate:e,userType:n="student"})=>{const r=Wt(),i=n==="student"?[{id:"home",label:"Inicio",icon:"🏠"},{id:"chat",label:"Chat",icon:"💬"},{id:"appointments",label:"Citas",icon:"📅"},{id:"resources",label:"Recursos",icon:"📚"}]:[{id:"dashboard",label:"Inicio",icon:"🏠"},{id:"chat",label:"Chat",icon:"💬"},{id:"appointments",label:"Citas",icon:"📅"},{id:"resources",label:"Recursos",icon:"📚"}];return C.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#fff",boxShadow:"0 -2px 8px rgba(0,0,0,0.08)",display:"flex",justifyContent:"space-around",padding:"0.6rem 0",zIndex:100},children:i.map(s=>C.jsxs("div",{onClick:()=>e&&e(s.id),style:{textAlign:"center",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center"},children:[C.jsx("div",{style:{fontSize:"1.6rem",color:s.id===t?r.colors.primary:r.colors.textMedium},children:s.icon}),C.jsx("span",{style:{fontSize:r.typography.fontSize.xs,color:s.id===t?r.colors.primary:r.colors.textMedium,fontWeight:s.id===t?r.typography.fontWeight.semibold:r.typography.fontWeight.regular},children:s.label})]},s.id))})},Qd=({children:t,style:e,border:n,highlight:r})=>{const i=Wt();return C.jsx("div",{style:{backgroundColor:i.colors.cardBg,borderRadius:i.borderRadius.lg,boxShadow:i.shadows.sm,padding:i.spacing.lg,marginBottom:i.spacing.lg,...n&&{border:`3px solid ${r||i.colors.primary}`},...e},children:t})},Yd=({children:t,onClick:e,variant:n="primary",size:r="medium",fullWidth:i=!1,style:s,disabled:o=!1,icon:l=null})=>{const u=Wt(),h={primary:{backgroundColor:u.colors.primary,color:"white",border:"none","&:hover":{backgroundColor:u.colors.primaryDark}},secondary:{backgroundColor:u.colors.secondary,color:"white",border:"none","&:hover":{backgroundColor:u.colors.secondaryDark}},professional:{backgroundColor:u.colors.professional,color:"white",border:"none","&:hover":{backgroundColor:u.colors.professionalDark}},outline:{backgroundColor:"transparent",color:u.colors.primary,border:`2px solid ${u.colors.primary}`,"&:hover":{backgroundColor:"rgba(0,183,216,0.05)"}},text:{backgroundColor:"transparent",color:u.colors.primary,border:"none","&:hover":{backgroundColor:"rgba(0,183,216,0.05)"}}},f={small:{padding:"0.5rem 1rem",fontSize:u.typography.fontSize.sm},medium:{padding:"0.8rem 1.5rem",fontSize:u.typography.fontSize.md},large:{padding:"1rem 2rem",fontSize:u.typography.fontSize.lg}},p=h[n]||h.primary,m=f[r]||f.medium;return C.jsxs("button",{onClick:e,disabled:o,style:{borderRadius:50,fontWeight:u.typography.fontWeight.semibold,cursor:o?"not-allowed":"pointer",transition:u.transitions.default,display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",width:i?"100%":"auto",opacity:o?.6:1,...p,...m,...s},children:[l&&C.jsx("span",{children:l}),t]})},Sx=({children:t,type:e="default",size:n="medium"})=>{const r=Wt(),i={default:{bg:r.colors.lightBg,color:r.colors.textMedium},success:{bg:"#E8F5E9",color:r.colors.success},warning:{bg:"#FFF8E1",color:r.colors.warning},error:{bg:"#FFEBEE",color:r.colors.error},info:{bg:"#E3F2FD",color:r.colors.info},primary:{bg:"rgba(0,183,216,0.1)",color:r.colors.primary}},s={small:{padding:"2px 8px",fontSize:r.typography.fontSize.xs},medium:{padding:"4px 12px",fontSize:r.typography.fontSize.sm},large:{padding:"6px 16px",fontSize:r.typography.fontSize.md}},o=i[e]||i.default,l=s[n]||s.medium;return C.jsx("span",{style:{borderRadius:20,fontWeight:r.typography.fontWeight.semibold,display:"inline-block",...o,...l},children:t})},Ax=({children:t,type:e="info",icon:n=!0})=>{const r=Wt(),i={info:{bg:"#E3F2FD",color:r.colors.info,icon:"ℹ️"},success:{bg:"#E8F5E9",color:r.colors.success,icon:"✅"},warning:{bg:"#FFF8E1",color:r.colors.warning,icon:"⚠️"},error:{bg:"#FFEBEE",color:r.colors.error,icon:"❌"}},s=i[e]||i.info;return C.jsxs("div",{style:{backgroundColor:s.bg,color:s.color,borderRadius:r.borderRadius.md,padding:r.spacing.md,marginBottom:r.spacing.md,display:"flex",alignItems:"flex-start",gap:r.spacing.sm,borderLeft:`4px solid ${s.color}`},children:[n&&C.jsx("span",{style:{fontSize:"1.2rem"},children:s.icon}),C.jsx("div",{style:{flex:1},children:t})]})},Sc=({size:t="medium",color:e="primary",fullscreen:n=!1})=>{const r=Wt(),i={primary:r.colors.primary,secondary:r.colors.secondary,professional:r.colors.professional,dark:r.colors.textDark,light:"white"},s={small:20,medium:30,large:40},o=s[t]||s.medium,u={border:"3px solid rgba(0, 0, 0, 0.1)",borderTop:`3px solid ${i[e]||i.primary}`,borderRadius:"50%",width:`${o}px`,height:`${o}px`,animation:"spin 1s linear infinite"};if(typeof document<"u"&&!document.getElementById("loader-keyframes")){const h=document.createElement("style");h.id="loader-keyframes",h.innerHTML=`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `,document.head.appendChild(h)}return n?C.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255, 255, 255, 0.8)",zIndex:1e3},children:C.jsx("div",{style:u})}):C.jsx("div",{style:u})},ag=({children:t,style:e})=>{const n=Wt();return C.jsx("div",{style:{padding:n.spacing.md,paddingBottom:80,maxWidth:"600px",margin:"0 auto",...e},children:t})},BS=()=>{};var lg={};/**
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
 */const eE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$S=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(m=64)),r.push(n[f],n[p],n[m],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$S(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new HS;const m=s<<2|l>>4;if(r.push(m),h!==64){const R=l<<4&240|h>>2;if(r.push(R),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class HS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WS=function(t){const e=eE(t);return tE.encodeByteArray(e,!0)},Tl=function(t){return WS(t).replace(/\./g,"")},nE=function(t){try{return tE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KS=()=>qS().__FIREBASE_DEFAULTS__,GS=()=>{if(typeof process>"u"||typeof lg>"u")return;const t=lg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&nE(t[1]);return e&&JSON.parse(e)},iu=()=>{try{return BS()||KS()||GS()||QS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rE=t=>{var e,n;return(n=(e=iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YS=t=>{const e=rE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iE=()=>{var t;return(t=iu())===null||t===void 0?void 0:t.config},sE=t=>{var e;return(e=iu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class XS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Yi(t){return t.endsWith(".cloudworkstations.dev")}async function oE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function JS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Tl(JSON.stringify(n)),Tl(JSON.stringify(o)),""].join(".")}const Ws={};function ZS(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ws))Ws[e]?t.emulator.push(e):t.prod.push(e);return t}function e1(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ug=!1;function aE(t,e){if(typeof window>"u"||typeof document>"u"||!Yi(window.location.host)||Ws[t]===e||Ws[t]||ug)return;Ws[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=ZS().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,R){m.setAttribute("width","24"),m.setAttribute("id",R),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{ug=!0,o()},m}function f(m,R){m.setAttribute("id",R),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=e1(r),R=n("text"),S=document.getElementById(R)||document.createElement("span"),x=n("learnmore"),V=document.getElementById(x)||document.createElement("a"),w=n("preprendIcon"),_=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const A=m.element;l(A),f(V,x);const O=h();u(_,w),A.append(_,S,V,O),document.body.appendChild(A)}s?(S.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function n1(){var t;const e=(t=iu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function r1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function i1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function s1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o1(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function a1(){return!n1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function l1(){try{return typeof indexedDB=="object"}catch{return!1}}function u1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const c1="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=c1,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xo.prototype.create)}}class xo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?h1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new kn(i,l,r)}}function h1(t,e){return t.replace(d1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const d1=/\{\$([^}]+)}/g;function f1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cg(s)&&cg(o)){if(!zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cg(t){return t!==null&&typeof t=="object"}/**
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
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function p1(t,e){const n=new m1(t,e);return n.subscribe.bind(n)}class m1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");g1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ac),i.error===void 0&&(i.error=Ac),i.complete===void 0&&(i.complete=Ac);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ac(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kr="[DEFAULT]";/**
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
 */class y1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v1(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _1(t){return t===kr?void 0:t}function v1(t){return t.instantiationMode==="EAGER"}/**
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
 */class E1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new y1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const w1={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},T1=te.INFO,I1={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},S1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=I1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xd{constructor(e){this.name=e,this._logLevel=T1,this._logHandler=S1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const A1=(t,e)=>e.some(n=>t instanceof n);let hg,dg;function C1(){return hg||(hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R1(){return dg||(dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lE=new WeakMap,kh=new WeakMap,uE=new WeakMap,Cc=new WeakMap,Jd=new WeakMap;function P1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lE.set(n,t)}).catch(()=>{}),Jd.set(e,t),e}function k1(t){if(kh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});kh.set(t,e)}let Nh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function N1(t){Nh=t(Nh)}function x1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return uE.set(r,e.sort?e.sort():[e]),nr(r)}:R1().includes(t)?function(...e){return t.apply(Rc(this),e),nr(lE.get(this))}:function(...e){return nr(t.apply(Rc(this),e))}}function D1(t){return typeof t=="function"?x1(t):(t instanceof IDBTransaction&&k1(t),A1(t,C1())?new Proxy(t,Nh):t)}function nr(t){if(t instanceof IDBRequest)return P1(t);if(Cc.has(t))return Cc.get(t);const e=D1(t);return e!==t&&(Cc.set(t,e),Jd.set(e,t)),e}const Rc=t=>Jd.get(t);function V1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nr(o.result),u.oldVersion,u.newVersion,nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const O1=["get","getKey","getAll","getAllKeys","count"],L1=["put","add","delete","clear"],Pc=new Map;function fg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=L1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||O1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Pc.set(e,s),s}N1(t=>({...t,get:(e,n,r)=>fg(e,n)||t.get(e,n,r),has:(e,n)=>!!fg(e,n)||t.has(e,n)}));/**
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
 */class M1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(b1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function b1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xh="@firebase/app",pg="0.13.1";/**
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
 */const Sn=new Xd("@firebase/app"),F1="@firebase/app-compat",U1="@firebase/analytics-compat",j1="@firebase/analytics",z1="@firebase/app-check-compat",B1="@firebase/app-check",$1="@firebase/auth",H1="@firebase/auth-compat",W1="@firebase/database",q1="@firebase/data-connect",K1="@firebase/database-compat",G1="@firebase/functions",Q1="@firebase/functions-compat",Y1="@firebase/installations",X1="@firebase/installations-compat",J1="@firebase/messaging",Z1="@firebase/messaging-compat",eA="@firebase/performance",tA="@firebase/performance-compat",nA="@firebase/remote-config",rA="@firebase/remote-config-compat",iA="@firebase/storage",sA="@firebase/storage-compat",oA="@firebase/firestore",aA="@firebase/ai",lA="@firebase/firestore-compat",uA="firebase",cA="11.9.0";/**
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
 */const Dh="[DEFAULT]",hA={[xh]:"fire-core",[F1]:"fire-core-compat",[j1]:"fire-analytics",[U1]:"fire-analytics-compat",[B1]:"fire-app-check",[z1]:"fire-app-check-compat",[$1]:"fire-auth",[H1]:"fire-auth-compat",[W1]:"fire-rtdb",[q1]:"fire-data-connect",[K1]:"fire-rtdb-compat",[G1]:"fire-fn",[Q1]:"fire-fn-compat",[Y1]:"fire-iid",[X1]:"fire-iid-compat",[J1]:"fire-fcm",[Z1]:"fire-fcm-compat",[eA]:"fire-perf",[tA]:"fire-perf-compat",[nA]:"fire-rc",[rA]:"fire-rc-compat",[iA]:"fire-gcs",[sA]:"fire-gcs-compat",[oA]:"fire-fst",[lA]:"fire-fst-compat",[aA]:"fire-vertex","fire-js":"fire-js",[uA]:"fire-js-all"};/**
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
 */const Il=new Map,dA=new Map,Vh=new Map;function mg(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bi(t){const e=t.name;if(Vh.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of Il.values())mg(n,t);for(const n of dA.values())mg(n,t);return!0}function Zd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const fA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new xo("app","Firebase",fA);/**
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
 */class pA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Xi=cA;function cE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=iE()),!n)throw rr.create("no-options");const s=Il.get(i);if(s){if(zr(n,s.options)&&zr(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new E1(i);for(const u of Vh.values())o.addComponent(u);const l=new pA(n,r,o);return Il.set(i,l),l}function hE(t=Dh){const e=Il.get(t);if(!e&&t===Dh&&iE())return cE();if(!e)throw rr.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let i=(r=hA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(l.join(" "));return}bi(new Br(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mA="firebase-heartbeat-database",gA=1,mo="firebase-heartbeat-store";let kc=null;function dE(){return kc||(kc=V1(mA,gA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),kc}async function yA(t){try{const n=(await dE()).transaction(mo),r=await n.objectStore(mo).get(fE(t));return await n.done,r}catch(e){if(e instanceof kn)Sn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function gg(t,e){try{const r=(await dE()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,fE(t)),await r.done}catch(n){if(n instanceof kn)Sn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function fE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _A=1024,vA=30;class EA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>vA){const o=IA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yg(),{heartbeatsToSend:r,unsentEntries:i}=wA(this._heartbeatsCache.heartbeats),s=Tl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Sn.warn(n),""}}}function yg(){return new Date().toISOString().substring(0,10)}function wA(t,e=_A){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_g(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_g(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return l1()?u1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _g(t){return Tl(JSON.stringify({version:2,heartbeats:t})).length}function IA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function SA(t){bi(new Br("platform-logger",e=>new M1(e),"PRIVATE")),bi(new Br("heartbeat",e=>new EA(e),"PRIVATE")),ir(xh,pg,t),ir(xh,pg,"esm2017"),ir("fire-js","")}SA("");function ef(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function pE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AA=pE,mE=new xo("auth","Firebase",pE());/**
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
 */const Sl=new Xd("@firebase/auth");function CA(t,...e){Sl.logLevel<=te.WARN&&Sl.warn(`Auth (${Xi}): ${t}`,...e)}function Ba(t,...e){Sl.logLevel<=te.ERROR&&Sl.error(`Auth (${Xi}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw tf(t,...e)}function Jt(t,...e){return tf(t,...e)}function gE(t,e,n){const r=Object.assign(Object.assign({},AA()),{[e]:n});return new xo("auth","Firebase",r).create(e,{appName:t.name})}function _n(t){return gE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mE.create(t,...e)}function K(t,e,...n){if(!t)throw tf(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ba(e),new Error(e)}function An(t,e){t||mn(e)}/**
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
 */function Oh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RA(){return vg()==="http:"||vg()==="https:"}function vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RA()||i1()||"connection"in navigator)?navigator.onLine:!0}function kA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=t1()||s1()}get(){return PA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nf(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DA=new Vo(3e4,6e4);function vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nn(t,e,n,r,i={}){return _E(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Do(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return r1()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Yi(t.emulatorConfig.host)&&(h.credentials="include"),yE.fetch()(await vE(t,t.config.apiHost,n,l),h)})}async function _E(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NA),e);try{const i=new OA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Sa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Sa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw gE(t,f,h);$t(t,f)}}catch(i){if(i instanceof kn)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function Oo(t,e,n,r,i={}){const s=await Nn(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function vE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?nf(t.config,i):`${t.config.apiScheme}://${i}`;return xA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function VA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class OA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),DA.get())})}}function Sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jt(t,e,r);return i.customData._tokenResponse=n,i}function Eg(t){return t!==void 0&&t.enterprise!==void 0}class LA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function MA(t,e){return Nn(t,"GET","/v2/recaptchaConfig",vr(t,e))}/**
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
 */async function bA(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function Al(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FA(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),i=rf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qs(Nc(i.auth_time)),issuedAtTime:qs(Nc(i.iat)),expirationTime:qs(Nc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nc(t){return Number(t)*1e3}function rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ba("JWT malformed, contained fewer than 3 sections"),null;try{const i=nE(n);return i?JSON.parse(i):(Ba("Failed to decode base64 JWT payload"),null)}catch(i){return Ba("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wg(t){const e=rf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&UA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fi(t,Al(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?EE(s.providerUserInfo):[],l=BA(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Lh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function zA(t){const e=Ve(t);await Cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function EE(t){return t.map(e=>{var{providerId:n}=e,r=ef(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $A(t,e){const n=await _E(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await vE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Yi(t.emulatorConfig.host)&&(u.credentials="include"),yE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HA(t,e){return Nn(t,"POST","/v2/accounts:revokeToken",vr(t,e))}/**
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
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=wg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $A(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ci;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Mn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FA(this,e)}reload(){return zA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await Fi(this,bA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:O,isAnonymous:j,providerData:b,stsTokenManager:E}=n;K(A&&E,e,"internal-error");const y=Ci.fromJSON(this.name,E);K(typeof A=="string",e,"internal-error"),Mn(p,e.name),Mn(m,e.name),K(typeof O=="boolean",e,"internal-error"),K(typeof j=="boolean",e,"internal-error"),Mn(R,e.name),Mn(S,e.name),Mn(x,e.name),Mn(V,e.name),Mn(w,e.name),Mn(_,e.name);const v=new Ft({uid:A,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:j,photoURL:S,phoneNumber:R,tenantId:x,stsTokenManager:y,createdAt:w,lastLoginAt:_});return b&&Array.isArray(b)&&(v.providerData=b.map(T=>Object.assign({},T))),V&&(v._redirectEventId=V),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ci;i.updateFromServerResponse(n);const s=new Ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?EE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ci;l.updateFromIdToken(r);const u=new Ft({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Tg=new Map;function gn(t){An(t instanceof Function,"Expected a class definition");let e=Tg.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tg.set(t,e),e)}/**
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
 */class wE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wE.type="NONE";const Ig=wE;/**
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
 */function $a(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$a(this.userKey,i.apiKey,s),this.fullPersistenceKey=$a("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Al(this.auth,{idToken:e}).catch(()=>{});return n?Ft._fromGetAccountInfoResponse(this.auth,n,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(gn(Ig),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||gn(Ig);const o=$a(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await Al(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Ft._fromGetAccountInfoResponse(e,m,f)}else p=Ft._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ri(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ri(s,e,r))}}/**
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
 */function Sg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(TE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RE(e))return"Blackberry";if(PE(e))return"Webos";if(IE(e))return"Safari";if((e.includes("chrome/")||SE(e))&&!e.includes("edge/"))return"Chrome";if(CE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function TE(t=tt()){return/firefox\//i.test(t)}function IE(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SE(t=tt()){return/crios\//i.test(t)}function AE(t=tt()){return/iemobile/i.test(t)}function CE(t=tt()){return/android/i.test(t)}function RE(t=tt()){return/blackberry/i.test(t)}function PE(t=tt()){return/webos/i.test(t)}function sf(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WA(t=tt()){var e;return sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qA(){return o1()&&document.documentMode===10}function kE(t=tt()){return sf(t)||CE(t)||PE(t)||RE(t)||/windows phone/i.test(t)||AE(t)}/**
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
 */function NE(t,e=[]){let n;switch(t){case"Browser":n=Sg(tt());break;case"Worker":n=`${Sg(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${r}`}/**
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
 */class KA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GA(t,e={}){return Nn(t,"GET","/v2/passwordPolicy",vr(t,e))}/**
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
 */const QA=6;class YA{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class XA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ag(this),this.idTokenSubscription=new Ag(this),this.beforeStateQueue=new KA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Al(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(_n(this));const n=e?Ve(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GA(this),n=new YA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qr(t){return Ve(t)}class Ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=p1(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JA(t){su=t}function xE(t){return su.loadJS(t)}function ZA(){return su.recaptchaEnterpriseScript}function eC(){return su.gapiScript}function tC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class nC{constructor(){this.enterprise=new rC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class rC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const iC="recaptcha-enterprise",DE="NO_RECAPTCHA";class sC{constructor(e){this.type=iC,this.auth=Qr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{MA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new LA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Eg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(DE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Eg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ZA();u.length!==0&&(u+=l),xE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Cg(t,e,n,r=!1,i=!1){const s=new sC(t);let o;if(i)o=DE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Mh(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Cg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Cg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function oC(t,e){const n=Zd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zr(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function aC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lC(t,e,n){const r=Qr(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=VE(e),{host:o,port:l}=uC(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(zr(h,r.config.emulator)&&zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Yi(o)?(oE(`${s}//${o}${u}`),aE("Auth",!0)):cC()}function VE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uC(t){const e=VE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rg(o)}}}function Rg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class of{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function hC(t,e){return Nn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dC(t,e){return Oo(t,"POST","/v1/accounts:signInWithPassword",vr(t,e))}/**
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
 */async function fC(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}async function pC(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}/**
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
 */class go extends of{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,n,"signInWithPassword",dC);case"emailLink":return fC(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mh(e,r,"signUpPassword",hC);case"emailLink":return pC(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pi(t,e){return Oo(t,"POST","/v1/accounts:signInWithIdp",vr(t,e))}/**
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
 */const mC="http://localhost";class $r extends of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ef(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $r(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:mC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
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
 */function gC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yC(t){const e=Ns(xs(t)).link,n=e?Ns(xs(e)).deep_link_id:null,r=Ns(xs(t)).deep_link_id;return(r?Ns(xs(r)).link:null)||r||n||e||t}class af{constructor(e){var n,r,i,s,o,l;const u=Ns(xs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=gC((i=u.mode)!==null&&i!==void 0?i:null);K(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=yC(e);try{return new af(n)}catch{return null}}}/**
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
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=af.parseLink(n);return K(r,"argument-error"),go._fromEmailAndCode(e,r.code,r.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class OE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lo extends OE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zn extends Lo{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
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
 */class Bn extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
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
 */class $n extends Lo{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class Hn extends Lo{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */async function _C(t,e){return Oo(t,"POST","/v1/accounts:signUp",vr(t,e))}/**
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
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ft._fromIdTokenResponse(e,r,i),o=Pg(r);return new Hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pg(r);return new Hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Pg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rl extends kn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Rl(e,n,r,i)}}function LE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rl._fromErrorAndOperation(t,s,e,r):s})}async function vC(t,e,n=!1){const r=await Fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
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
 */async function EC(t,e,n=!1){const{auth:r}=t;if(Pt(r.app))return Promise.reject(_n(r));const i="reauthenticate";try{const s=await Fi(t,LE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=rf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),Hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
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
 */async function ME(t,e,n=!1){if(Pt(t.app))return Promise.reject(_n(t));const r="signIn",i=await LE(t,r,e),s=await Hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wC(t,e){return ME(Qr(t),e)}/**
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
 */async function bE(t){const e=Qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FE(t,e,n){if(Pt(t.app))return Promise.reject(_n(t));const r=Qr(t),o=await Mh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_C).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&bE(t),u}),l=await Hr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function TC(t,e,n){return Pt(t.app)?Promise.reject(_n(t)):wC(Ve(t),Ji.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bE(t),r})}/**
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
 */async function IC(t,e){return Nn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function UE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fi(r,IC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function SC(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function AC(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function CC(t){return Ve(t).signOut()}const Pl="__sak";/**
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
 */class jE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pl,"1"),this.storage.removeItem(Pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RC=1e3,PC=10;class zE extends jE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zE.type="LOCAL";const kC=zE;/**
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
 */class BE extends jE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BE.type="SESSION";const $E=BE;/**
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
 */function NC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await NC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ou.receivers=[];/**
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
 */function lf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=lf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zt(){return window}function DC(t){Zt().location.href=t}/**
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
 */function HE(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function VC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LC(){return HE()?self:null}/**
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
 */const WE="firebaseLocalStorageDb",MC=1,kl="firebaseLocalStorage",qE="fbase_key";class Mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function au(t,e){return t.transaction([kl],e?"readwrite":"readonly").objectStore(kl)}function bC(){const t=indexedDB.deleteDatabase(WE);return new Mo(t).toPromise()}function bh(){const t=indexedDB.open(WE,MC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kl,{keyPath:qE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kl)?e(r):(r.close(),await bC(),e(await bh()))})})}async function kg(t,e,n){const r=au(t,!0).put({[qE]:e,value:n});return new Mo(r).toPromise()}async function FC(t,e){const n=au(t,!1).get(e),r=await new Mo(n).toPromise();return r===void 0?null:r.value}function Ng(t,e){const n=au(t,!0).delete(e);return new Mo(n).toPromise()}const UC=800,jC=3;class KE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return HE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ou._getInstance(LC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VC(),!this.activeServiceWorker)return;this.sender=new xC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bh();return await kg(e,Pl,"1"),await Ng(e,Pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ng(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=au(i,!1).getAll();return new Mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KE.type="LOCAL";const zC=KE;new Vo(3e4,6e4);/**
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
 */function BC(t,e){return e?gn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uf extends of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $C(t){return ME(t.auth,new uf(t),t.bypassAuthState)}function HC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),EC(n,new uf(t),t.bypassAuthState)}async function WC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),vC(n,new uf(t),t.bypassAuthState)}/**
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
 */class GE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $C;case"linkViaPopup":case"linkViaRedirect":return WC;case"reauthViaPopup":case"reauthViaRedirect":return HC;default:$t(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qC=new Vo(2e3,1e4);class vi extends GE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qC.get())};e()}}vi.currentPopupAction=null;/**
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
 */const KC="pendingRedirect",Ha=new Map;class GC extends GE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ha.get(this.auth._key());if(!e){try{const r=await QC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ha.set(this.auth._key(),e)}return this.bypassAuthState||Ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QC(t,e){const n=JC(e),r=XC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function YC(t,e){Ha.set(t._key(),e)}function XC(t){return gn(t._redirectPersistence)}function JC(t){return $a(KC,t.config.apiKey,t.name)}async function ZC(t,e,n=!1){if(Pt(t.app))return Promise.reject(_n(t));const r=Qr(t),i=BC(r,e),o=await new GC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eR=10*60*1e3;class tR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!QE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eR&&this.cachedEventUids.clear(),this.cachedEventUids.has(xg(e))}saveEventToCache(e){this.cachedEventUids.add(xg(e)),this.lastProcessedEventTime=Date.now()}}function xg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function QE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QE(t);default:return!1}}/**
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
 */async function rR(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
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
 */const iR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sR=/^https?/;async function oR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rR(t);for(const n of e)try{if(aR(n))return}catch{}$t(t,"unauthorized-domain")}function aR(t){const e=Oh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sR.test(n))return!1;if(iR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lR=new Vo(3e4,6e4);function Dg(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uR(t){return new Promise((e,n)=>{var r,i,s;function o(){Dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dg(),n(Jt(t,"network-request-failed"))},timeout:lR.get()})}if(!((i=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Zt().gapi)===null||s===void 0)&&s.load)o();else{const l=tC("iframefcb");return Zt()[l]=()=>{gapi.load?o():n(Jt(t,"network-request-failed"))},xE(`${eC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Wa=null,e})}let Wa=null;function cR(t){return Wa=Wa||uR(t),Wa}/**
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
 */const hR=new Vo(5e3,15e3),dR="__/auth/iframe",fR="emulator/auth/iframe",pR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gR(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nf(e,fR):`https://${t.config.authDomain}/${dR}`,r={apiKey:e.apiKey,appName:t.name,v:Xi},i=mR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Do(r).slice(1)}`}async function yR(t){const e=await cR(t),n=Zt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:gR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),l=Zt().setTimeout(()=>{s(o)},hR.get());function u(){Zt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const _R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vR=500,ER=600,wR="_blank",TR="http://localhost";class Vg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IR(t,e,n,r=vR,i=ER){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},_R),{width:r.toString(),height:i.toString(),top:s,left:o}),h=tt().toLowerCase();n&&(l=SE(h)?wR:n),TE(h)&&(e=e||TR,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[R,S])=>`${m}${R}=${S},`,"");if(WA(h)&&l!=="_self")return SR(e||"",l),new Vg(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Vg(p)}function SR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AR="__/auth/handler",CR="emulator/auth/handler",RR=encodeURIComponent("fac");async function Og(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xi,eventId:i};if(e instanceof OE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",f1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Lo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${RR}=${encodeURIComponent(u)}`:"";return`${PR(t)}?${Do(l).slice(1)}${h}`}function PR({config:t}){return t.emulator?nf(t,CR):`https://${t.authDomain}/${AR}`}/**
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
 */const xc="webStorageSupport";class kR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$E,this._completeRedirectFn=ZC,this._overrideRedirectResult=YC}async _openPopup(e,n,r,i){var s;An((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Og(e,n,r,Oh(),i);return IR(e,o,lf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Og(e,n,r,Oh(),i);return DC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(An(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yR(e),r=new tR(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xc];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kE()||IE()||sf()}}const NR=kR;var Lg="@firebase/auth",Mg="1.10.7";/**
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
 */class xR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VR(t){bi(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NE(t)},h=new XA(r,i,s,u);return aC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bi(new Br("auth-internal",e=>{const n=Qr(e.getProvider("auth").getImmediate());return(r=>new xR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Lg,Mg,DR(t)),ir(Lg,Mg,"esm2017")}/**
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
 */const OR=5*60,LR=sE("authIdTokenMaxAge")||OR;let bg=null;const MR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LR)return;const i=n==null?void 0:n.token;bg!==i&&(bg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bR(t=hE()){const e=Zd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oC(t,{popupRedirectResolver:NR,persistence:[zC,kC,$E]}),r=sE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MR(s.toString());AC(n,o,()=>o(n.currentUser)),SC(n,l=>o(l))}}const i=rE("auth");return i&&lC(n,`http://${i}`),n}function FR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Jt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VR("Browser");var Fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sr,YE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(T,P,N){for(var I=Array(arguments.length-2),At=2;At<arguments.length;At++)I[At-2]=arguments[At];return y.prototype[P].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)T[P]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(P=0;16>P;++P)T[P]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],P=E.g[2];var N=E.g[3],I=y+(N^v&(P^N))+T[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=N+(P^y&(v^P))+T[1]+3905402710&4294967295,N=y+(I<<12&4294967295|I>>>20),I=P+(v^N&(y^v))+T[2]+606105819&4294967295,P=N+(I<<17&4294967295|I>>>15),I=v+(y^P&(N^y))+T[3]+3250441966&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(N^v&(P^N))+T[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=N+(P^y&(v^P))+T[5]+1200080426&4294967295,N=y+(I<<12&4294967295|I>>>20),I=P+(v^N&(y^v))+T[6]+2821735955&4294967295,P=N+(I<<17&4294967295|I>>>15),I=v+(y^P&(N^y))+T[7]+4249261313&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(N^v&(P^N))+T[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=N+(P^y&(v^P))+T[9]+2336552879&4294967295,N=y+(I<<12&4294967295|I>>>20),I=P+(v^N&(y^v))+T[10]+4294925233&4294967295,P=N+(I<<17&4294967295|I>>>15),I=v+(y^P&(N^y))+T[11]+2304563134&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(N^v&(P^N))+T[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=N+(P^y&(v^P))+T[13]+4254626195&4294967295,N=y+(I<<12&4294967295|I>>>20),I=P+(v^N&(y^v))+T[14]+2792965006&4294967295,P=N+(I<<17&4294967295|I>>>15),I=v+(y^P&(N^y))+T[15]+1236535329&4294967295,v=P+(I<<22&4294967295|I>>>10),I=y+(P^N&(v^P))+T[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=N+(v^P&(y^v))+T[6]+3225465664&4294967295,N=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(N^y))+T[11]+643717713&4294967295,P=N+(I<<14&4294967295|I>>>18),I=v+(N^y&(P^N))+T[0]+3921069994&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^N&(v^P))+T[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=N+(v^P&(y^v))+T[10]+38016083&4294967295,N=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(N^y))+T[15]+3634488961&4294967295,P=N+(I<<14&4294967295|I>>>18),I=v+(N^y&(P^N))+T[4]+3889429448&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^N&(v^P))+T[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=N+(v^P&(y^v))+T[14]+3275163606&4294967295,N=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(N^y))+T[3]+4107603335&4294967295,P=N+(I<<14&4294967295|I>>>18),I=v+(N^y&(P^N))+T[8]+1163531501&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(P^N&(v^P))+T[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=N+(v^P&(y^v))+T[2]+4243563512&4294967295,N=y+(I<<9&4294967295|I>>>23),I=P+(y^v&(N^y))+T[7]+1735328473&4294967295,P=N+(I<<14&4294967295|I>>>18),I=v+(N^y&(P^N))+T[12]+2368359562&4294967295,v=P+(I<<20&4294967295|I>>>12),I=y+(v^P^N)+T[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=N+(y^v^P)+T[8]+2272392833&4294967295,N=y+(I<<11&4294967295|I>>>21),I=P+(N^y^v)+T[11]+1839030562&4294967295,P=N+(I<<16&4294967295|I>>>16),I=v+(P^N^y)+T[14]+4259657740&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^N)+T[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=N+(y^v^P)+T[4]+1272893353&4294967295,N=y+(I<<11&4294967295|I>>>21),I=P+(N^y^v)+T[7]+4139469664&4294967295,P=N+(I<<16&4294967295|I>>>16),I=v+(P^N^y)+T[10]+3200236656&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^N)+T[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=N+(y^v^P)+T[0]+3936430074&4294967295,N=y+(I<<11&4294967295|I>>>21),I=P+(N^y^v)+T[3]+3572445317&4294967295,P=N+(I<<16&4294967295|I>>>16),I=v+(P^N^y)+T[6]+76029189&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(v^P^N)+T[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=N+(y^v^P)+T[12]+3873151461&4294967295,N=y+(I<<11&4294967295|I>>>21),I=P+(N^y^v)+T[15]+530742520&4294967295,P=N+(I<<16&4294967295|I>>>16),I=v+(P^N^y)+T[2]+3299628645&4294967295,v=P+(I<<23&4294967295|I>>>9),I=y+(P^(v|~N))+T[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=N+(v^(y|~P))+T[7]+1126891415&4294967295,N=y+(I<<10&4294967295|I>>>22),I=P+(y^(N|~v))+T[14]+2878612391&4294967295,P=N+(I<<15&4294967295|I>>>17),I=v+(N^(P|~y))+T[5]+4237533241&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~N))+T[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=N+(v^(y|~P))+T[3]+2399980690&4294967295,N=y+(I<<10&4294967295|I>>>22),I=P+(y^(N|~v))+T[10]+4293915773&4294967295,P=N+(I<<15&4294967295|I>>>17),I=v+(N^(P|~y))+T[1]+2240044497&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~N))+T[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=N+(v^(y|~P))+T[15]+4264355552&4294967295,N=y+(I<<10&4294967295|I>>>22),I=P+(y^(N|~v))+T[6]+2734768916&4294967295,P=N+(I<<15&4294967295|I>>>17),I=v+(N^(P|~y))+T[13]+1309151649&4294967295,v=P+(I<<21&4294967295|I>>>11),I=y+(P^(v|~N))+T[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=N+(v^(y|~P))+T[11]+3174756917&4294967295,N=y+(I<<10&4294967295|I>>>22),I=P+(y^(N|~v))+T[2]+718787259&4294967295,P=N+(I<<15&4294967295|I>>>17),I=v+(N^(P|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,T=this.B,P=this.h,N=0;N<y;){if(P==0)for(;N<=v;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<y;)if(T[P++]=E.charCodeAt(N++),P==this.blockSize){i(this,T),P=0;break}}else for(;N<y;)if(T[P++]=E[N++],P==this.blockSize){i(this,T),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)E[v++]=this.g[y]>>>T&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],T=!0,P=E.length-1;0<=P;P--){var N=E[P]|0;T&&N==y||(v[P]=N,T=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return V(h(-E));for(var y=[],v=1,T=0;E>=v;T++)y[T]=E/v|0,v*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return V(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=p,P=0;P<E.length;P+=8){var N=Math.min(8,E.length-P),I=parseInt(E.substring(P,P+N),y);8>N?(N=h(Math.pow(y,N)),T=T.j(N).add(h(I))):(T=T.j(v),T=T.add(h(I)))}return T}var p=u(0),m=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-V(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(x(this))return"-"+V(this).toString(E);for(var y=h(Math.pow(E,6)),v=this,T="";;){var P=O(v,y).g;v=w(v,P.j(y));var N=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=P,S(v))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function x(E){return E.h==-1}t.l=function(E){return E=w(this,E),x(E)?-1:S(E)?0:1};function V(E){for(var y=E.g.length,v=[],T=0;T<y;T++)v[T]=~E.g[T];return new o(v,~E.h).add(m)}t.abs=function(){return x(this)?V(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0,P=0;P<=y;P++){var N=T+(this.i(P)&65535)+(E.i(P)&65535),I=(N>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);T=I>>>16,N&=65535,I&=65535,v[P]=I<<16|N}return new o(v,v[v.length-1]&-2147483648?-1:0)};function w(E,y){return E.add(V(y))}t.j=function(E){if(S(this)||S(E))return p;if(x(this))return x(E)?V(this).j(V(E)):V(V(this).j(E));if(x(E))return V(this.j(V(E)));if(0>this.l(R)&&0>E.l(R))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var P=0;P<E.g.length;P++){var N=this.i(T)>>>16,I=this.i(T)&65535,At=E.i(P)>>>16,Tr=E.i(P)&65535;v[2*T+2*P]+=I*Tr,_(v,2*T+2*P),v[2*T+2*P+1]+=N*Tr,_(v,2*T+2*P+1),v[2*T+2*P+1]+=I*At,_(v,2*T+2*P+1),v[2*T+2*P+2]+=N*At,_(v,2*T+2*P+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function A(E,y){this.g=E,this.h=y}function O(E,y){if(S(y))throw Error("division by zero");if(S(E))return new A(p,p);if(x(E))return y=O(V(E),y),new A(V(y.g),V(y.h));if(x(y))return y=O(E,V(y)),new A(V(y.g),y.h);if(30<E.g.length){if(x(E)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,T=y;0>=T.l(E);)v=j(v),T=j(T);var P=b(v,1),N=b(T,1);for(T=b(T,2),v=b(v,2);!S(T);){var I=N.add(T);0>=I.l(E)&&(P=P.add(v),N=I),T=b(T,1),v=b(v,1)}return y=w(E,P.j(y)),new A(P,y)}for(P=p;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=h(v),I=N.j(y);x(I)||0<I.l(E);)v-=T,N=h(v),I=N.j(y);S(N)&&(N=m),P=P.add(N),E=w(E,I)}return new A(P,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&E.i(T);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|E.i(T);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^E.i(T);return new o(v,this.h^E.h)};function j(E){for(var y=E.g.length+1,v=[],T=0;T<y;T++)v[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(v,E.h)}function b(E,y){var v=y>>5;y%=32;for(var T=E.g.length-v,P=[],N=0;N<T;N++)P[N]=0<y?E.i(N+v)>>>y|E.i(N+v+1)<<32-y:E.i(N+v);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,YE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,sr=o}).apply(typeof Fg<"u"?Fg:typeof self<"u"?self:typeof window<"u"?window:{});var Aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var XE,Ds,JE,qa,Fh,ZE,ew,tw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Aa=="object"&&Aa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in d))break e;d=d[k]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,g=!1,k={next:function(){if(!g&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(c,k)}}return function(){return a.apply(c,arguments)}}function m(a,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,k,D){for(var U=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)U[ue-2]=arguments[ue];return c.prototype[k].apply(g,U)}}function x(a){const c=a.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function V(a,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const k=a.length||0,D=g.length||0;a.length=k+D;for(let U=0;U<D;U++)a[k+U]=g[U]}else a.push(g)}}class w{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var j=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function b(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(d in g)a[d]=g[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function P(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class At{constructor(){this.h=this.g=null}add(c,d){const g=Tr.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Tr=new w(()=>new is,a=>a.reset());class is{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let rn,z=!1,Q=new At,J=()=>{const a=l.Promise.resolve(void 0);rn=()=>{a.then(ge)}};var ge=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){N(d)}var c=Tr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var sn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function on(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{O(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:an[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&on.aa.h.call(this)}}S(on,Ie);var an={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ln="closure_listenable_"+(1e6*Math.random()|0),O0=0;function L0(a,c,d,g,k){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=k,this.key=++O0,this.da=this.fa=!1}function $o(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ho(a){this.src=a,this.g={},this.h=0}Ho.prototype.add=function(a,c,d,g,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=Nu(a,c,g,k);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new L0(c,this.src,D,!!g,k),c.fa=d,a.push(c)),c};function ku(a,c){var d=c.type;if(d in a.g){var g=a.g[d],k=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=k)&&Array.prototype.splice.call(g,k,1),D&&($o(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Nu(a,c,d,g){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return k}return-1}var xu="closure_lm_"+(1e6*Math.random()|0),Du={};function Jf(a,c,d,g,k){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Jf(a,c[D],d,g,k);return null}return d=tp(d),a&&a[ln]?a.K(c,d,h(g)?!!g.capture:!1,k):M0(a,c,d,!1,g,k)}function M0(a,c,d,g,k,D){if(!c)throw Error("Invalid event type");var U=h(k)?!!k.capture:!!k,ue=Ou(a);if(ue||(a[xu]=ue=new Ho(a)),d=ue.add(c,d,g,U,D),d.proxy)return d;if(g=b0(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)sn||(k=U),k===void 0&&(k=!1),a.addEventListener(c.toString(),g,k);else if(a.attachEvent)a.attachEvent(ep(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function b0(){function a(d){return c.call(a.src,a.listener,d)}const c=F0;return a}function Zf(a,c,d,g,k){if(Array.isArray(c))for(var D=0;D<c.length;D++)Zf(a,c[D],d,g,k);else g=h(g)?!!g.capture:!!g,d=tp(d),a&&a[ln]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=Nu(D,d,g,k),-1<d&&($o(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=Ou(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Nu(c,d,g,k)),(d=-1<a?c[a]:null)&&Vu(d))}function Vu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[ln])ku(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(ep(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Ou(c))?(ku(d,a),d.h==0&&(d.src=null,c[xu]=null)):$o(a)}}}function ep(a){return a in Du?Du[a]:Du[a]="on"+a}function F0(a,c){if(a.da)a=!0;else{c=new on(c,this);var d=a.listener,g=a.ha||a.src;a.fa&&Vu(a),a=d.call(g,c)}return a}function Ou(a){return a=a[xu],a instanceof Ho?a:null}var Lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function tp(a){return typeof a=="function"?a:(a[Lu]||(a[Lu]=function(c){return a.handleEvent(c)}),a[Lu])}function He(){le.call(this),this.i=new Ho(this),this.M=this,this.F=null}S(He,le),He.prototype[ln]=!0,He.prototype.removeEventListener=function(a,c,d,g){Zf(this,a,c,d,g)};function nt(a,c){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var k=c;c=new Ie(g,a),T(c,k)}if(k=!0,d)for(var D=d.length-1;0<=D;D--){var U=c.g=d[D];k=Wo(U,g,!0,c)&&k}if(U=c.g=a,k=Wo(U,g,!0,c)&&k,k=Wo(U,g,!1,c)&&k,d)for(D=0;D<d.length;D++)U=c.g=d[D],k=Wo(U,g,!1,c)&&k}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],g=0;g<d.length;g++)$o(d[g]);delete a.g[c],a.h--}}this.F=null},He.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},He.prototype.L=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Wo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,D=0;D<c.length;++D){var U=c[D];if(U&&!U.da&&U.capture==d){var ue=U.listener,be=U.ha||U.src;U.fa&&ku(a.i,U),k=ue.call(be,g)!==!1&&k}}return k&&!g.defaultPrevented}function np(a,c,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function rp(a){a.g=np(()=>{a.g=null,a.i&&(a.i=!1,rp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class U0 extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:rp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ss(a){le.call(this),this.h=a,this.g={}}S(ss,le);var ip=[];function sp(a){b(a.g,function(c,d){this.g.hasOwnProperty(d)&&Vu(c)},a),a.g={}}ss.prototype.N=function(){ss.aa.N.call(this),sp(this)},ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mu=l.JSON.stringify,j0=l.JSON.parse,z0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function bu(){}bu.prototype.h=null;function op(a){return a.h||(a.h=a.i())}function ap(){}var os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fu(){Ie.call(this,"d")}S(Fu,Ie);function Uu(){Ie.call(this,"c")}S(Uu,Ie);var Ir={},lp=null;function qo(){return lp=lp||new He}Ir.La="serverreachability";function up(a){Ie.call(this,Ir.La,a)}S(up,Ie);function as(a){const c=qo();nt(c,new up(c))}Ir.STAT_EVENT="statevent";function cp(a,c){Ie.call(this,Ir.STAT_EVENT,a),this.stat=c}S(cp,Ie);function rt(a){const c=qo();nt(c,new cp(c,a))}Ir.Ma="timingevent";function hp(a,c){Ie.call(this,Ir.Ma,a),this.size=c}S(hp,Ie);function ls(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function us(){this.g=!0}us.prototype.xa=function(){this.g=!1};function B0(a,c,d,g,k,D){a.info(function(){if(a.g)if(D)for(var U="",ue=D.split("&"),be=0;be<ue.length;be++){var se=ue[be].split("=");if(1<se.length){var We=se[0];se=se[1];var qe=We.split("_");U=2<=qe.length&&qe[1]=="type"?U+(We+"="+se+"&"):U+(We+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+c+`
`+d+`
`+U})}function $0(a,c,d,g,k,D,U){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+c+`
`+d+`
`+D+" "+U})}function Jr(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+W0(a,d)+(g?" "+g:"")})}function H0(a,c){a.info(function(){return"TIMEOUT: "+c})}us.prototype.info=function(){};function W0(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<k.length;U++)k[U]=""}}}}return Mu(d)}catch{return c}}var Ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},dp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ju;function Go(){}S(Go,bu),Go.prototype.g=function(){return new XMLHttpRequest},Go.prototype.i=function(){return{}},ju=new Go;function Dn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.R=g||1,this.U=new ss(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new fp}function fp(){this.i=null,this.g="",this.h=!1}var pp={},zu={};function Bu(a,c,d){a.L=1,a.v=Jo(un(c)),a.m=d,a.P=!0,mp(a,null)}function mp(a,c){a.F=Date.now(),Qo(a),a.A=un(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),kp(d.i,"t",g),a.C=0,d=a.j.J,a.h=new fp,a.g=Kp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new U0(m(a.Y,a,a.g),a.O)),c=a.U,d=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(ip[0]=k.toString()),k=ip);for(var D=0;D<k.length;D++){var U=Jf(d,k[D],g||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),as(),B0(a.i,a.u,a.A,a.l,a.R,a.m)}Dn.prototype.ca=function(a){a=a.target;const c=this.M;c&&cn(a)==3?c.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)e:{const qe=cn(this.g);var c=this.g.Ba();const ti=this.g.Z();if(!(3>qe)&&(qe!=3||this.g&&(this.h.h||this.g.oa()||Mp(this.g)))){this.J||qe!=4||c==7||(c==8||0>=ti?as(3):as(2)),$u(this);var d=this.g.Z();this.X=d;t:if(gp(this)){var g=Mp(this.g);a="";var k=g.length,D=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),cs(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(D&&c==k-1)});g.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,$0(this.i,this.u,this.A,this.l,this.R,qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,be=this.g;if((ue=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ue)){var se=ue;break t}}se=null}if(d=se)Jr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hu(this,d);else{this.o=!1,this.s=3,rt(12),Sr(this),cs(this);break e}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<U.length;)if(Vt=q0(this,U),Vt==zu){qe==4&&(this.s=4,rt(14),d=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==pp){this.s=4,rt(15),Jr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Jr(this.i,this.l,Vt,null),Hu(this,Vt);if(gp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),qe!=4||U.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)Jr(this.i,this.l,U,"[Invalid Chunked Response]"),Sr(this),cs(this);else if(0<U.length&&!this.W){this.W=!0;var We=this.j;We.g==this&&We.ba&&!We.M&&(We.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Yu(We),We.M=!0,rt(11))}}else Jr(this.i,this.l,U,null),Hu(this,U);qe==4&&Sr(this),this.o&&!this.J&&(qe==4?$p(this.j,this):(this.o=!1,Qo(this)))}else uT(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Sr(this),cs(this)}}}catch{}finally{}};function gp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function q0(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?zu:(d=Number(c.substring(d,g)),isNaN(d)?pp:(g+=1,g+d>c.length?zu:(c=c.slice(g,g+d),a.C=g+d,c)))}Dn.prototype.cancel=function(){this.J=!0,Sr(this)};function Qo(a){a.S=Date.now()+a.I,yp(a,a.I)}function yp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ls(m(a.ba,a),c)}function $u(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Dn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(H0(this.i,this.A),this.L!=2&&(as(),rt(17)),Sr(this),this.s=2,cs(this)):yp(this,this.S-a)};function cs(a){a.j.G==0||a.J||$p(a.j,a)}function Sr(a){$u(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,sp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Hu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Wu(d.h,a))){if(!a.K&&Wu(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ia(d),na(d);else break e;Qu(d),rt(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=ls(m(d.Za,d),6e3));if(1>=Ep(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Cr(d,11)}else if((a.K||d.g==a)&&ia(d),!_(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let se=k[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const We=se[3];We!=null&&(d.la=We,d.j.info("VER="+d.la));const qe=se[4];qe!=null&&(d.Aa=qe,d.j.info("SVER="+d.Aa));const ti=se[5];ti!=null&&typeof ti=="number"&&0<ti&&(g=1.5*ti,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Vt=a.g;if(Vt){const oa=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oa){var D=g.h;D.g||oa.indexOf("spdy")==-1&&oa.indexOf("quic")==-1&&oa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(qu(D,D.h),D.h=null))}if(g.D){const Xu=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xu&&(g.ya=Xu,he(g.I,g.D,Xu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var U=a;if(g.qa=qp(g,g.J?g.ia:null,g.W),U.K){wp(g.h,U);var ue=U,be=g.L;be&&(ue.I=be),ue.B&&($u(ue),Qo(ue)),g.g=U}else zp(g);0<d.i.length&&ra(d)}else se[0]!="stop"&&se[0]!="close"||Cr(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Cr(d,7):Gu(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}as(4)}catch{}}var K0=class{constructor(a,c){this.g=a,this.map=c}};function _p(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ep(a){return a.h?1:a.g?a.g.size:0}function Wu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function qu(a,c){a.g?a.g.add(c):a.h=c}function wp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}_p.prototype.cancel=function(){if(this.i=Tp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Tp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return x(a.i)}function G0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,g=0;g<d;g++)c.push(a[g]);return c}c=[],d=0;for(g in a)c[d++]=a[g];return c}function Q0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const g in a)c[d++]=g;return c}}}function Ip(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Q0(a),g=G0(a),k=g.length,D=0;D<k;D++)c.call(void 0,g[D],d&&d[D],a)}var Sp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Y0(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),k=null;if(0<=g){var D=a[d].substring(0,g);k=a[d].substring(g+1)}else D=a[d];c(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,Yo(this,a.j),this.o=a.o,this.g=a.g,Xo(this,a.s),this.l=a.l;var c=a.i,d=new fs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Ap(this,d),this.m=a.m}else a&&(c=String(a).match(Sp))?(this.h=!1,Yo(this,c[1]||"",!0),this.o=hs(c[2]||""),this.g=hs(c[3]||"",!0),Xo(this,c[4]),this.l=hs(c[5]||"",!0),Ap(this,c[6]||"",!0),this.m=hs(c[7]||"")):(this.h=!1,this.i=new fs(null,this.h))}Ar.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ds(c,Cp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ds(c,Cp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ds(d,d.charAt(0)=="/"?Z0:J0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ds(d,tT)),a.join("")};function un(a){return new Ar(a)}function Yo(a,c,d){a.j=d?hs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Xo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Ap(a,c,d){c instanceof fs?(a.i=c,nT(a.i,a.h)):(d||(c=ds(c,eT)),a.i=new fs(c,a.h))}function he(a,c,d){a.i.set(c,d)}function Jo(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function hs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ds(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,X0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function X0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Cp=/[#\/\?@]/g,J0=/[#\?:]/g,Z0=/[#\?]/g,eT=/[#\?@]/g,tT=/#/g;function fs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Vn(a){a.g||(a.g=new Map,a.h=0,a.i&&Y0(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=fs.prototype,t.add=function(a,c){Vn(this),this.i=null,a=Zr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Rp(a,c){Vn(a),c=Zr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Pp(a,c){return Vn(a),c=Zr(a,c),a.g.has(c)}t.forEach=function(a,c){Vn(this),this.g.forEach(function(d,g){d.forEach(function(k){a.call(c,k,g,this)},this)},this)},t.na=function(){Vn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const k=a[g];for(let D=0;D<k.length;D++)d.push(c[g])}return d},t.V=function(a){Vn(this);let c=[];if(typeof a=="string")Pp(this,a)&&(c=c.concat(this.g.get(Zr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Vn(this),this.i=null,a=Zr(this,a),Pp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function kp(a,c,d){Rp(a,c),0<d.length&&(a.i=null,a.g.set(Zr(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var k=D;U[g]!==""&&(k+="="+encodeURIComponent(String(U[g]))),a.push(k)}}return this.i=a.join("&")};function Zr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function nT(a,c){c&&!a.j&&(Vn(a),a.i=null,a.g.forEach(function(d,g){var k=g.toLowerCase();g!=k&&(Rp(this,g),kp(this,k,d))},a)),a.j=c}function rT(a,c){const d=new us;if(l.Image){const g=new Image;g.onload=R(On,d,"TestLoadImage: loaded",!0,c,g),g.onerror=R(On,d,"TestLoadImage: error",!1,c,g),g.onabort=R(On,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=R(On,d,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function iT(a,c){const d=new us,g=new AbortController,k=setTimeout(()=>{g.abort(),On(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(k),D.ok?On(d,"TestPingServer: ok",!0,c):On(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),On(d,"TestPingServer: error",!1,c)})}function On(a,c,d,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(d)}catch{}}function sT(){this.g=new z0}function oT(a,c,d){const g=d||"";try{Ip(a,function(k,D){let U=k;h(k)&&(U=Mu(k)),c.push(g+D+"="+encodeURIComponent(U))})}catch(k){throw c.push(g+"type="+encodeURIComponent("_badmap")),k}}function Zo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Zo,bu),Zo.prototype.g=function(){return new ea(this.l,this.j)},Zo.prototype.i=function(a){return function(){return a}}({});function ea(a,c){He.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ea,He),t=ea.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Np(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Np(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ps(this):ms(this),this.readyState==3&&Np(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ps(this))},t.Qa=function(a){this.g&&(this.response=a,ps(this))},t.ga=function(){this.g&&ps(this)};function ps(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ms(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function xp(a){let c="";return b(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Ku(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=xp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function we(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(we,He);var aT=/^https?$/i,lT=["POST","PUT"];t=we.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ju.g(),this.v=this.o?op(this.o):op(ju),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Dp(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)d.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(lT,c,void 0))||g||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Dp(this,D)}};function Dp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Vp(a),ta(a)}function Vp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ta(this,!0)),we.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Op(this):this.bb())},t.bb=function(){Op(this)};function Op(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cn(a)!=4||a.Z()!=2)){if(a.u&&cn(a)==4)np(a.Ea,0,a);else if(nt(a,"readystatechange"),cn(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=U===0){var k=String(a.D).match(Sp)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!aT.test(k?k.toLowerCase():"")}d=g}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var D=2<cn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Vp(a)}}finally{ta(a)}}}}function ta(a,c){if(a.g){Lp(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||nt(a,"ready");try{d.onreadystatechange=g}catch{}}}function Lp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),j0(c)}};function Mp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uT(a){const c={};a=(a.g&&2<=cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=P(a[g]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[k]||[];c[k]=D,D.push(d)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function bp(a){this.Aa=0,this.i=[],this.j=new us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gs("baseRetryDelayMs",5e3,a),this.cb=gs("retryDelaySeedMs",1e4,a),this.Wa=gs("forwardChannelMaxRetries",2,a),this.wa=gs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new _p(a&&a.concurrentRequestLimit),this.Da=new sT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=bp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,g){rt(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=qp(this,null,this.W),ra(this)};function Gu(a){if(Fp(a),a.G==3){var c=a.U++,d=un(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),ys(a,d),c=new Dn(a,a.j,c),c.L=2,c.v=Jo(un(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Kp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Qo(c)}Wp(a)}function na(a){a.g&&(Yu(a),a.g.cancel(),a.g=null)}function Fp(a){na(a),a.u&&(l.clearTimeout(a.u),a.u=null),ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ra(a){if(!vp(a.h)&&!a.s){a.s=!0;var c=a.Ga;rn||J(),z||(rn(),z=!0),Q.add(c,a),a.B=0}}function cT(a,c){return Ep(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ls(m(a.Ga,a,c),Hp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Dn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),T(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=jp(this,k,c),d=un(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),ys(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(xp(D)))+"&"+c:this.m&&Ku(d,this.m,D)),qu(this.h,k),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),k.T=!0,Bu(k,d,null)):Bu(k,d,c),this.G=2}}else this.G==3&&(a?Up(this,a):this.i.length==0||vp(this.h)||Up(this))};function Up(a,c){var d;c?d=c.l:d=a.U++;const g=un(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),ys(a,g),a.m&&a.o&&Ku(g,a.m,a.o),d=new Dn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=jp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),qu(a.h,d),Bu(d,g,c)}function ys(a,c){a.H&&b(a.H,function(d,g){he(c,g,d)}),a.l&&Ip({},function(d,g){he(c,g,d)})}function jp(a,c,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const U=["count="+d];D==-1?0<d?(D=k[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let ue=!0;for(let be=0;be<d;be++){let se=k[be].g;const We=k[be].map;if(se-=D,0>se)D=Math.max(0,k[be].g-100),ue=!1;else try{oT(We,U,"req"+se+"_")}catch{g&&g(We)}}if(ue){g=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,g}function zp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;rn||J(),z||(rn(),z=!0),Q.add(c,a),a.v=0}}function Qu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ls(m(a.Fa,a),Hp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Bp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ls(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),na(this),Bp(this))};function Yu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Bp(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=un(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),ys(a,c),a.m&&a.o&&Ku(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Jo(un(c)),d.m=null,d.P=!0,mp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,na(this),Qu(this),rt(19))};function ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function $p(a,c){var d=null;if(a.g==c){ia(a),Yu(a),a.g=null;var g=2}else if(Wu(a.h,c))d=c.D,wp(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=a.B;g=qo(),nt(g,new hp(g,d)),ra(a)}else zp(a);else if(k=c.s,k==3||k==0&&0<c.X||!(g==1&&cT(a,c)||g==2&&Qu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),k){case 1:Cr(a,5);break;case 4:Cr(a,10);break;case 3:Cr(a,6);break;default:Cr(a,2)}}}function Hp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Cr(a,c){if(a.j.info("Error code "+c),c==2){var d=m(a.fb,a),g=a.Xa;const k=!g;g=new Ar(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Yo(g,"https"),Jo(g),k?rT(g.toString(),d):iT(g.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(c),Wp(a),Fp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Wp(a){if(a.G=0,a.ka=[],a.l){const c=Tp(a.h);(c.length!=0||a.i.length!=0)&&(V(a.ka,c),V(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function qp(a,c,d){var g=d instanceof Ar?un(d):new Ar(d);if(g.g!="")c&&(g.g=c+"."+g.g),Xo(g,g.s);else{var k=l.location;g=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var D=new Ar(null);g&&Yo(D,g),c&&(D.g=c),k&&Xo(D,k),d&&(D.l=d),g=D}return d=a.D,c=a.ya,d&&c&&he(g,d,c),he(g,"VER",a.la),ys(a,g),g}function Kp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new we(new Zo({eb:d})):new we(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gp(){}t=Gp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function sa(){}sa.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){He.call(this),this.g=new bp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ei(this)}S(gt,He),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Gu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Mu(a),a=d);c.i.push(new K0(c.Ya++,a)),c.G==3&&ra(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,Gu(this.g),delete this.g,gt.aa.N.call(this)};function Qp(a){Fu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}S(Qp,Fu);function Yp(){Uu.call(this),this.status=1}S(Yp,Uu);function ei(a){this.g=a}S(ei,Gp),ei.prototype.ua=function(){nt(this.g,"a")},ei.prototype.ta=function(a){nt(this.g,new Qp(a))},ei.prototype.sa=function(a){nt(this.g,new Yp)},ei.prototype.ra=function(){nt(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,tw=function(){return new sa},ew=function(){return qo()},ZE=Ir,Fh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ko.NO_ERROR=0,Ko.TIMEOUT=8,Ko.HTTP_ERROR=6,qa=Ko,dp.COMPLETE="complete",JE=dp,ap.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",He.prototype.listen=He.prototype.K,Ds=ap,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,XE=we}).apply(typeof Aa<"u"?Aa:typeof self<"u"?self:typeof window<"u"?window:{});const Ug="@firebase/firestore",jg="4.7.17";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let Zi="11.9.0";/**
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
 */const Wr=new Xd("@firebase/firestore");function ri(){return Wr.logLevel}function B(t,...e){if(Wr.logLevel<=te.DEBUG){const n=e.map(cf);Wr.debug(`Firestore (${Zi}): ${t}`,...n)}}function Cn(t,...e){if(Wr.logLevel<=te.ERROR){const n=e.map(cf);Wr.error(`Firestore (${Zi}): ${t}`,...n)}}function Ui(t,...e){if(Wr.logLevel<=te.WARN){const n=e.map(cf);Wr.warn(`Firestore (${Zi}): ${t}`,...n)}}function cf(t){if(typeof t=="string")return t;try{/**
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
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,nw(t,r,n)}function nw(t,e,n){let r=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Cn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||nw(e,i,r)}function X(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class jR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class zR{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new rw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class BR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $R{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new BR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new zg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new zg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function WR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function iw(){return new TextEncoder}/**
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
 */class sw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=WR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function Uh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Z(r,i);{const s=iw(),o=qR(s.encode(Bg(t,n)),s.encode(Bg(e,n)));return o!==0?o:Z(r,i)}}n+=r>65535?2:1}return Z(t.length,e.length)}function Bg(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function qR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Z(t[n],e[n]);return Z(t.length,e.length)}function ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const $g=-62135596800,Hg=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Hg);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$g)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hg}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$g;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new xe(0,0))}static max(){return new Y(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Wg="__name__";class Gt{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Gt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Z(e.length,n.length)}static compareSegments(e,n){const r=Gt.isNumericId(e),i=Gt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Gt.extractNumericId(e).compare(Gt.extractNumericId(n)):Uh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sr.fromString(e.substring(4,e.length-2))}}class fe extends Gt{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const KR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Gt{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return KR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wg}static keyField(){return new je([Wg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(fe.fromString(e))}static fromName(e){return new W(fe.fromString(e).popFirst(5))}static empty(){return new W(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new fe(e.slice()))}}/**
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
 */const yo=-1;function GR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new ur(i,W.empty(),e)}function QR(t){return new ur(t.readTime,t.key,yo)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(Y.min(),W.empty(),yo)}static max(){return new ur(Y.max(),W.empty(),yo)}}function YR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const XR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function es(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==XR)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ZR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ts(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}lu.le=-1;/**
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
 */const hf=-1;function uu(t){return t==null}function Nl(t){return t===0&&1/t==-1/0}function eP(t){return typeof t=="number"&&Number.isInteger(t)&&!Nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ow="";function tP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=qg(e)),e=nP(t.get(n),e);return qg(e)}function nP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case ow:n+="";break;default:n+=s}}return n}function qg(t){return t+ow+""}/**
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
 */function Kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gg(this.data.getIterator())}getIteratorFrom(e){return new Gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new vt([])}unionWith(e){let n=new De(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lw("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const rP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=rP.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hr(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
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
 */const uw="server_timestamp",cw="__type__",hw="__previous_value__",dw="__local_write_time__";function df(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[cw])===null||n===void 0?void 0:n.stringValue)===uw}function cu(t){const e=t.mapValue.fields[hw];return df(e)?cu(e):e}function _o(t){const e=cr(t.mapValue.fields[dw].timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class iP{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const xl="(default)";class vo{constructor(e,n){this.projectId=e,this.database=n||xl}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database===xl}isEqual(e){return e instanceof vo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fw="__type__",sP="__max__",Ra={mapValue:{}},pw="__vector__",Dl="value";function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?df(t)?4:aP(t)?9007199254740991:oP(t)?10:11:G(28295,{value:t})}function nn(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cr(i.timestampValue),l=cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return hr(i.bytesValue).isEqual(hr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?Nl(o)===Nl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Kg(o)!==Kg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!nn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Eo(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=dr(t),r=dr(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Qg(t.timestampValue,e.timestampValue);case 4:return Qg(_o(t),_o(e));case 5:return Uh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=hr(s),u=hr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Z(l[h],u[h]);if(f!==0)return f}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Z(Se(s.latitude),Se(o.latitude));return l!==0?l:Z(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},m=o.fields||{},R=(l=p[Dl])===null||l===void 0?void 0:l.arrayValue,S=(u=m[Dl])===null||u===void 0?void 0:u.arrayValue,x=Z(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Yg(R,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ra.mapValue&&o===Ra.mapValue)return 0;if(s===Ra.mapValue)return 1;if(o===Ra.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=Uh(u[p],f[p]);if(m!==0)return m;const R=zi(l[u[p]],h[f[p]]);if(R!==0)return R}return Z(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{Pe:n})}}function Qg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=cr(t),r=cr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Yg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=zi(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function Bi(t){return jh(t)}function jh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=jh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${jh(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function Ka(t){switch(dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cu(t);return e?16+Ka(e):16;case 5:return 2*t.stringValue.length;case 6:return hr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ka(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Er(r.fields,(s,o)=>{i+=s.length+Ka(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function Xg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zh(t){return!!t&&"integerValue"in t}function ff(t){return!!t&&"arrayValue"in t}function Jg(t){return!!t&&"nullValue"in t}function Zg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ga(t){return!!t&&"mapValue"in t}function oP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[fw])===null||n===void 0?void 0:n.stringValue)===pw}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sP}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ga(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=je.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ks(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ga(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ga(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Er(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Ks(this.value))}}function mw(t){const e=[];return Er(t.fields,(n,r)=>{const i=new je([n]);if(Ga(r)){const s=mw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new vt(e)}/**
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
 */class Je{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Je(e,0,Y.min(),Y.min(),Y.min(),ct.empty(),0)}static newFoundDocument(e,n,r,i){return new Je(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Je(e,2,n,Y.min(),Y.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Y.min(),Y.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vl{constructor(e,n){this.position=e,this.inclusive=n}}function ey(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function lP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class gw{}class Pe extends gw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cP(e,n,r):n==="array-contains"?new fP(e,r):n==="in"?new pP(e,r):n==="not-in"?new mP(e,r):n==="array-contains-any"?new gP(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hP(e,r):new dP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(zi(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends gw{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Ht(e,n)}matches(e){return yw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function yw(t){return t.op==="and"}function _w(t){return uP(t)&&yw(t)}function uP(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Bh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(_w(t))return t.filters.map(e=>Bh(e)).join(",");{const e=t.filters.map(n=>Bh(n)).join(",");return`${t.op}(${e})`}}function vw(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&nn(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&vw(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function Ew(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Bi(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(Ew).join(" ,")+"}"}(t):"Filter"}class cP extends Pe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class hP extends Pe{constructor(e,n){super(e,"in",n),this.keys=ww("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class dP extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=ww("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ww(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class fP extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&Eo(n.arrayValue,this.value)}}class pP extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Eo(this.value.arrayValue,n)}}class mP extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Eo(this.value.arrayValue,n)}}class gP extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Eo(this.value.arrayValue,r))}}/**
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
 */class yP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Ie=null}}function ny(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yP(t,e,n,r,i,s,o)}function pf(t){const e=X(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bi(r)).join(",")),e.Ie=n}return e.Ie}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ty(t.startAt,e.startAt)&&ty(t.endAt,e.endAt)}function $h(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ns{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function _P(t,e,n,r,i,s,o,l){return new ns(t,e,n,r,i,s,o,l)}function hu(t){return new ns(t)}function ry(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tw(t){return t.collectionGroup!==null}function Gs(t){const e=X(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new De(je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new wo(s,r))}),n.has(je.keyField().canonicalString())||e.Ee.push(new wo(je.keyField(),r))}return e.Ee}function en(t){const e=X(t);return e.de||(e.de=vP(e,Gs(t))),e.de}function vP(t,e){if(t.limitType==="F")return ny(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new wo(i.field,s)});const n=t.endAt?new Vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vl(t.startAt.position,t.startAt.inclusive):null;return ny(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hh(t,e){const n=t.filters.concat([e]);return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ol(t,e,n){return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function du(t,e){return mf(en(t),en(e))&&t.limitType===e.limitType}function Iw(t){return`${pf(en(t))}|lt:${t.limitType}`}function ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ew(i)).join(", ")}]`),uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function fu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Gs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=ey(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Gs(r),i)||r.endAt&&!function(o,l,u){const h=ey(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Gs(r),i))}(t,e)}function EP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sw(t){return(e,n)=>{let r=!1;for(const i of Gs(t)){const s=wP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function wP(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?zi(u,h):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
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
 */class Yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aw(this.inner)}size(){return this.innerSize}}/**
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
 */const TP=new Ee(W.comparator);function Rn(){return TP}const Aw=new Ee(W.comparator);function Vs(...t){let e=Aw;for(const n of t)e=e.insert(n.key,n);return e}function Cw(t){let e=Aw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return Qs()}function Rw(){return Qs()}function Qs(){return new Yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const IP=new Ee(W.comparator),SP=new De(W.comparator);function ne(...t){let e=SP;for(const n of t)e=e.add(n);return e}const AP=new De(Z);function CP(){return AP}/**
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
 */function gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nl(e)?"-0":e}}function Pw(t){return{integerValue:""+t}}function RP(t,e){return eP(e)?Pw(e):gf(t,e)}/**
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
 */class pu{constructor(){this._=void 0}}function PP(t,e,n){return t instanceof To?function(i,s){const o={fields:{[cw]:{stringValue:uw},[dw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&df(s)&&(s=cu(s)),s&&(o.fields[hw]=s),{mapValue:o}}(n,e):t instanceof Io?Nw(t,e):t instanceof So?xw(t,e):function(i,s){const o=kw(i,s),l=iy(o)+iy(i.Re);return zh(o)&&zh(i.Re)?Pw(l):gf(i.serializer,l)}(t,e)}function kP(t,e,n){return t instanceof Io?Nw(t,e):t instanceof So?xw(t,e):n}function kw(t,e){return t instanceof Ll?function(r){return zh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class To extends pu{}class Io extends pu{constructor(e){super(),this.elements=e}}function Nw(t,e){const n=Dw(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class So extends pu{constructor(e){super(),this.elements=e}}function xw(t,e){let n=Dw(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class Ll extends pu{constructor(e,n){super(),this.serializer=e,this.Re=n}}function iy(t){return Se(t.integerValue||t.doubleValue)}function Dw(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class NP{constructor(e,n){this.field=e,this.transform=n}}function xP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Io&&i instanceof Io||r instanceof So&&i instanceof So?ji(r.elements,i.elements,nn):r instanceof Ll&&i instanceof Ll?nn(r.Re,i.Re):r instanceof To&&i instanceof To}(t.transform,e.transform)}class DP{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mu{}function Vw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lw(t.key,zt.none()):new bo(t.key,t.data,zt.none());{const n=t.data,r=ct.empty();let i=new De(je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new wr(t.key,r,new vt(i.toArray()),zt.none())}}function VP(t,e,n){t instanceof bo?function(i,s,o){const l=i.value.clone(),u=oy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(i,s,o){if(!Qa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=oy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ow(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ys(t,e,n,r){return t instanceof bo?function(s,o,l,u){if(!Qa(s.precondition,o))return l;const h=s.value.clone(),f=ay(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(s,o,l,u){if(!Qa(s.precondition,o))return l;const h=ay(s.fieldTransforms,u,o),f=o.data;return f.setAll(Ow(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Qa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function OP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kw(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function sy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ji(r,i,(s,o)=>xP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends mu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends mu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ow(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function oy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,kP(o,l,n[i]))}return r}function ay(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PP(s,o,e))}return r}class Lw extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LP extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ys(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Rw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Vw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>sy(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>sy(n,r))}}class yf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return IP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yf(e,n,r,i)}}/**
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
 */class bP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class FP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,re;function UP(t){switch(t){case L.OK:return G(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function Mw(t){if(t===void 0)return Cn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ce.OK:return L.OK;case Ce.CANCELLED:return L.CANCELLED;case Ce.UNKNOWN:return L.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return L.INTERNAL;case Ce.UNAVAILABLE:return L.UNAVAILABLE;case Ce.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ce.NOT_FOUND:return L.NOT_FOUND;case Ce.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ce.ABORTED:return L.ABORTED;case Ce.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ce.DATA_LOSS:return L.DATA_LOSS;default:return G(39323,{code:t})}}(re=Ce||(Ce={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const jP=new sr([4294967295,4294967295],0);function ly(t){const e=iw().encode(t),n=new YE;return n.update(e),new Uint8Array(n.digest())}function uy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new sr([n,r],0),new sr([i,s],0)]}class _f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Os(`Invalid padding: ${n}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Os(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=sr.fromNumber(this.pe)}we(e,n,r){let i=e.add(n.multiply(sr.fromNumber(r)));return i.compare(jP)===1&&(i=new sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=ly(e),[r,i]=uy(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);if(!this.be(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _f(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=ly(e),[r,i]=uy(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gu(Y.min(),i,new Ee(Z),Rn(),ne())}}class Fo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fo(r,n,ne(),ne(),ne())}}/**
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
 */class Ya{constructor(e,n,r,i){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=i}}class bw{constructor(e,n){this.targetId=e,this.Ce=n}}class Fw{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cy{constructor(){this.Fe=0,this.Me=hy(),this.xe=$e.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ne(),n=ne(),r=ne();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new Fo(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=hy()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,oe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class zP{constructor(e){this.ze=e,this.je=new Map,this.He=Rn(),this.Je=Pa(),this.Ye=Pa(),this.Ze=new Ee(Z)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,i)=>{this.it(i)&&n(i)})}ot(e){const n=e.targetId,r=e.Ce.count,i=this._t(n);if(i){const s=i.target;if($h(s))if(r===0){const o=new W(s.path);this.tt(n,o,Je.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),u=l?this.lt(l,e,o):1;if(u!==0){this.st(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=hr(r).toUint8Array()}catch(u){if(u instanceof lw)return Ui("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new _f(o,i,s)}catch(u){return Ui(u instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,s,null),i++)}),i}It(e){const n=new Map;this.je.forEach((s,o)=>{const l=this._t(o);if(l){if(s.current&&$h(l.target)){const u=new W(l.target.path);this.Et(u).has(o)||this.dt(o,u)||this.tt(o,u,Je.newNoDocument(u,e))}s.Le&&(n.set(o,s.qe()),s.Qe())}});let r=ne();this.Ye.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this._t(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.He.forEach((s,o)=>o.setReadTime(e));const i=new gu(e,n,this.Ze,this.He,r);return this.He=Rn(),this.Je=Pa(),this.Ye=Pa(),this.Ze=new Ee(Z),i}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,n)?i.$e(n,1):i.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new cy,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new De(Z),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new De(Z),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new cy),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Pa(){return new Ee(W.comparator)}function hy(){return new Ee(W.comparator)}const BP={asc:"ASCENDING",desc:"DESCENDING"},$P={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HP={and:"AND",or:"OR"};class WP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(t,e){return t.useProto3Json||uu(e)?e:{value:e}}function Ml(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qP(t,e){return Ml(t,e.toTimestamp())}function tn(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=cr(n);return new xe(r.seconds,r.nanos)}(t))}function vf(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function jw(t){const e=fe.fromString(t);return oe(Ww(e),10190,{key:e.toString()}),e}function Kh(t,e){return vf(t.databaseId,e.path)}function Dc(t,e){const n=jw(e);if(n.get(1)!==t.databaseId.projectId)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Bw(n))}function zw(t,e){return vf(t.databaseId,e)}function KP(t){const e=jw(t);return e.length===4?fe.emptyPath():Bw(e)}function Gh(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bw(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function dy(t,e,n){return{name:Kh(t,e),fields:n.value.mapValue.fields}}function GP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string",58123),$e.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),$e.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:Mw(h.code);return new $(f,h.message||"")}(o);n=new Fw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dc(t,r.document.name),s=tn(r.document.updateTime),o=r.document.createTime?tn(r.document.createTime):Y.min(),l=new ct({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ya(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dc(t,r.document),s=r.readTime?tn(r.readTime):Y.min(),o=Je.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ya([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dc(t,r.document),s=r.removedTargetIds||[];n=new Ya([],s,i,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FP(i,s),l=r.targetId;n=new bw(l,o)}}return n}function QP(t,e){let n;if(e instanceof bo)n={update:dy(t,e.key,e.value)};else if(e instanceof Lw)n={delete:Kh(t,e.key)};else if(e instanceof wr)n={update:dy(t,e.key,e.data),updateMask:ik(e.fieldMask)};else{if(!(e instanceof LP))return G(16599,{ft:e.type});n={verify:Kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof To)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof So)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function YP(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?tn(i.updateTime):tn(s);return o.isEqual(Y.min())&&(o=tn(s)),new DP(o,i.transformResults||[])}(n,e))):[]}function XP(t,e){return{documents:[zw(t,e.path)]}}function JP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zw(t,i);const s=function(h){if(h.length!==0)return Hw(Ht.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:si(m.field),direction:tk(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:i}}function ZP(t){let e=KP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=$w(p);return m instanceof Ht&&_w(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new wo(oi(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,uu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,R=p.values||[];return new Vl(R,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,R=p.values||[];return new Vl(R,m)}(n.endAt)),_P(e,i,o,s,l,"F",u,h)}function ek(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $w(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=oi(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=oi(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=oi(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oi(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>$w(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function tk(t){return BP[t]}function nk(t){return $P[t]}function rk(t){return HP[t]}function si(t){return{fieldPath:t.canonicalString()}}function oi(t){return je.fromServerFormat(t.fieldPath)}function Hw(t){return t instanceof Pe?function(n){if(n.op==="=="){if(Zg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(Jg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(Jg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:nk(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>Hw(i));return r.length===1?r[0]:{compositeFilter:{op:rk(n.op),filters:r}}}(t):G(54877,{filter:t})}function ik(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ww(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Kn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=$e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sk{constructor(e){this.wt=e}}function ok(t){const e=ZP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ol(e,e.limit,"L"):e}/**
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
 */class ak{constructor(){this.Cn=new lk}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(ur.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class lk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(fe.comparator)).toArray()}}/**
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
 */const fy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qw=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(qw,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
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
 */class $i{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new $i(0)}static lr(){return new $i(-1)}}/**
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
 */const py="LruGarbageCollector",uk=1048576;function my([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class ck{constructor(e){this.Er=e,this.buffer=new De(my),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();my(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){B(py,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ts(n)?B(py,"Ignoring IndexedDB error during garbage collection: ",n):await es(n)}await this.mr(3e5)})}}class dk{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(lu.le);const r=new ck(n);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(fy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fy):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),ri()<=te.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function fk(t,e){return new dk(t,e)}/**
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
 */class pk{constructor(){this.changes=new Yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ys(r.mutation,i,vt.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Vs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Rn();const o=Qs(),l=function(){return Qs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof wr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ys(f.mutation,h,f.mutation.getFieldMask(),xe.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new mk(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Qs();let i=new Ee((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||vt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Rw();f.forEach(m=>{if(!s.has(m)){const R=Vw(n.get(m),r.get(m));R!==null&&p.set(m,R),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Vr());let l=yo,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:Cw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Vs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,m){return new ns(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Je.newInvalidDocument(f)))});let l=Vs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ys(f.mutation,h,vt.empty(),xe.now()),fu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class yk{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(i){return{name:i.name,query:ok(i.bundledQuery),readTime:tn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class _k{constructor(){this.overlays=new Ee(W.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Vr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Vr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Vr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bP(n,r));let s=this.Qr.get(n);s===void 0&&(s=ne(),this.Qr.set(n,s)),this.Qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class vk{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Ef{constructor(){this.$r=new De(Oe.Ur),this.Kr=new De(Oe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Oe(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new W(new fe([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.zr(o),s.push(o.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new W(new fe([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=ne();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return W.comparator(e.key,n.key)||Z(e.Zr,n.Zr)}static Wr(e,n){return Z(e.Zr,n.Zr)||W.comparator(e.key,n.key)}}/**
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
 */class Ek{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new De(Oe.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Xr=this.Xr.add(new Oe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ti(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?hf:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],o=>{const l=this.ei(o.Zr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(Z);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,o],l=>{r=r.add(l.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new W(s),0);let l=new De(Z);return this.Xr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Zr)),!0)},o),M.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Oe(n,0),i=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wk{constructor(e){this.ii=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Je.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Rn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||YR(QR(f),r)<=0||(i.has(f.key)||fu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Tk(this)}getSize(e){return M.resolve(this.size)}}class Tk extends pk{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class Ik{constructor(e){this.persistence=e,this.oi=new Yr(n=>pf(n),mf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this._i=0,this.ai=new Ef,this.targetCount=0,this.ui=$i.cr()}forEachTarget(e,n){return this.oi.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new $i(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
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
 */class Kw{constructor(e,n){this.ci={},this.overlays={},this.li=new lu(0),this.hi=!1,this.hi=!0,this.Pi=new vk,this.referenceDelegate=e(this),this.Ti=new Ik(this),this.indexManager=new ak,this.remoteDocumentCache=function(i){return new wk(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new sk(n),this.Ei=new yk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _k,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new Ek(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new Sk(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class Sk extends JR{constructor(e){super(),this.currentSequenceNumber=e}}class wf{constructor(e){this.persistence=e,this.Vi=new Ef,this.mi=null}static fi(e){return new wf(e)}get gi(){if(this.mi)return this.mi;throw G(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const i=W.fromPath(r);return this.pi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class bl{constructor(e,n){this.persistence=e,this.yi=new Yr(r=>tP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=fk(this,n)}static fi(e,n){return new bl(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ka(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.yi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Tf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ds=r,this.As=i}static Rs(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tf(e,n.fromCache,r,i)}}/**
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
 */class Ak{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ck{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return a1()?8:ZR(tt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ws(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.bs(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ak;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>s.result)}Ds(e,n,r,i){return r.documentReadCount<this.gs?(ri()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(ri()<=te.DEBUG&&B("QueryEngine","Query:",ii(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(ri()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):M.resolve())}ws(e,n){if(ry(n))return M.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ol(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.vs(n,l);return this.Cs(n,h,o,u.readTime)?this.ws(e,Ol(n,null,"F")):this.Fs(e,h,n,u)}))})))}bs(e,n,r,i){return ry(n)||i.isEqual(Y.min())?M.resolve(null):this.ys.getDocuments(e,r).next(s=>{const o=this.vs(n,s);return this.Cs(n,o,r,i)?M.resolve(null):(ri()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ii(n)),this.Fs(e,o,n,GR(i,yo)).next(l=>l))})}vs(e,n){let r=new De(Sw(e));return n.forEach((i,s)=>{fu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return ri()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ii(n)),this.ys.getDocumentsMatchingQuery(e,n,ur.min(),r)}Fs(e,n,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const If="LocalStore",Rk=3e8;class Pk{constructor(e,n,r,i){this.persistence=e,this.Ms=n,this.serializer=i,this.xs=new Ee(Z),this.Os=new Yr(s=>pf(s),mf),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gk(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function kk(t,e,n,r){return new Pk(t,e,n,r)}async function Gw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:l}))})})}function Nk(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,m=p.keys();let R=M.resolve();return m.forEach(S=>{R=R.next(()=>f.getEntry(u,S)).next(x=>{const V=h.docVersions.get(S);oe(V!==null,48541),x.version.compareTo(V)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Qw(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function xk(t,e){const n=X(t),r=e.snapshotVersion;let i=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.xs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ti.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(s,f.addedDocuments,p)));let R=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken($e.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(p,R),function(x,V,w){return x.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Rk?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,R,f)&&l.push(n.Ti.updateTargetData(s,R))});let u=Rn(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Dk(s,o,e.documentUpdates).next(f=>{u=f.qs,h=f.Qs})),!r.isEqual(Y.min())){const f=n.Ti.getLastRemoteSnapshotVersion(s).next(p=>n.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.xs=i,s))}function Dk(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Rn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(If,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{qs:o,Qs:i}})}function Vk(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=hf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ok(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ti.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ti.allocateTargetId(r).next(o=>(i=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=X(t),i=r.xs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ts(o))throw o;B(If,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function gy(t,e,n){const r=X(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=X(u),m=p.Os.get(f);return m!==void 0?M.resolve(p.xs.get(m)):p.Ti.getTargetData(h,f)}(r,o,en(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(l=>(Lk(r,EP(e),l),{documents:l,$s:s})))}function Lk(t,e,n){let r=t.Ns.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ns.set(e,r)}class yy{constructor(){this.activeTargetIds=CP()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mk{constructor(){this.xo=new yy,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new yy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bk{No(e){}shutdown(){}}/**
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
 */const _y="ConnectivityMonitor";class vy{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){B(_y,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){B(_y,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ka=null;function Yh(){return ka===null?ka=function(){return 268435456+Math.round(2147483648*Math.random())}():ka++,"0x"+ka.toString(16)}/**
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
 */const Vc="RestConnection",Fk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Uk{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===xl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,n,r,i,s){const o=Yh(),l=this.jo(e,n.toUriEncodedString());B(Vc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(u,i,s);const{host:h}=new URL(l),f=Yi(h);return this.Jo(e,l,u,r,f).then(p=>(B(Vc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ui(Vc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,i,s,o){return this.zo(e,n,r,i,s)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,n){const r=Fk[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class jk{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Qe="WebChannelConnection";class zk extends Uk{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Yh();return new Promise((l,u)=>{const h=new XE;h.setWithCredentials(!0),h.listenOnce(JE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case qa.NO_ERROR:const p=h.getResponseJson();B(Qe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case qa.TIMEOUT:B(Qe,`RPC '${e}' ${o} timed out`),u(new $(L.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const m=h.getStatus();if(B(Qe,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const x=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(S.status);u(new $(x,S.message))}else u(new $(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(L.UNAVAILABLE,"Connection failed."));break;default:G(9055,{h_:e,streamId:o,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{B(Qe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(Qe,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}I_(e,n,r){const i=Yh(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tw(),l=ew(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Ho(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(Qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.E_(p);let m=!1,R=!1;const S=new jk({Zo:V=>{R?B(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(m||(B(Qe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),B(Qe,`RPC '${e}' stream ${i} sending:`,V),p.send(V))},Xo:()=>p.close()}),x=(V,w,_)=>{V.listen(w,A=>{try{_(A)}catch(O){setTimeout(()=>{throw O},0)}})};return x(p,Ds.EventType.OPEN,()=>{R||(B(Qe,`RPC '${e}' stream ${i} transport opened.`),S.__())}),x(p,Ds.EventType.CLOSE,()=>{R||(R=!0,B(Qe,`RPC '${e}' stream ${i} transport closed`),S.u_(),this.d_(p))}),x(p,Ds.EventType.ERROR,V=>{R||(R=!0,Ui(Qe,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),S.u_(new $(L.UNAVAILABLE,"The operation could not be completed")))}),x(p,Ds.EventType.MESSAGE,V=>{var w;if(!R){const _=V.data[0];oe(!!_,16349);const A=_,O=(A==null?void 0:A.error)||((w=A[0])===null||w===void 0?void 0:w.error);if(O){B(Qe,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let b=function(v){const T=Ce[v];if(T!==void 0)return Mw(T)}(j),E=O.message;b===void 0&&(b=L.INTERNAL,E="Unknown error status: "+j+" with message "+O.message),R=!0,S.u_(new $(b,E)),p.close()}else B(Qe,`RPC '${e}' stream ${i} received:`,_),S.c_(_)}}),x(l,ZE.STAT_EVENT,V=>{V.stat===Fh.PROXY?B(Qe,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Fh.NOPROXY&&B(Qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.a_()},0),S}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function Oc(){return typeof document<"u"?document:null}/**
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
 */function yu(t){return new WP(t,!0)}/**
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
 */class Yw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=i,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Ey="PersistentStream";class Xw{constructor(e,n,r,i,s,o,l,u){this.xi=e,this.S_=r,this.D_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Yw(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===n&&this.z_(r,i)},r=>{e(()=>{const i=new $(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return B(Ey,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(B(Ey,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bk extends Xw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=GP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?tn(o.readTime):Y.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Gh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=$h(u)?{documents:XP(s,u)}:{query:JP(s,u).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Uw(s,o.resumeToken);const h=Wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Ml(s,o.snapshotVersion.toTimestamp());const h=Wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=ek(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Gh(this.serializer),n.removeTarget=e,this.Q_(n)}}class $k extends Xw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=YP(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Gh(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QP(this.serializer,r))};this.Q_(n)}}/**
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
 */class Hk{}class Wk extends Hk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.zo(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(L.UNKNOWN,s.toString())})}Yo(e,n,r,i,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(L.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class qk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Cn(n),this.ua=!1):B("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const qr="RemoteStore";class Kk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(B(qr,"Restarting streams for network reachability change."),await async function(u){const h=X(u);h.da.add(4),await Uo(h),h.Va.set("Unknown"),h.da.delete(4),await _u(h)}(this))})}),this.Va=new qk(r,i)}}async function _u(t){if(Xr(t))for(const e of t.Aa)await e(!0)}async function Uo(t){for(const e of t.Aa)await e(!1)}function Jw(t,e){const n=X(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Rf(n)?Cf(n):rs(n).N_()&&Af(n,e))}function Sf(t,e){const n=X(t),r=rs(n);n.Ea.delete(e),r.N_()&&Zw(n,e),n.Ea.size===0&&(r.N_()?r.k_():Xr(n)&&n.Va.set("Unknown"))}function Af(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}rs(t).Z_(e)}function Zw(t,e){t.ma.Ke(e),rs(t).X_(e)}function Cf(t){t.ma=new zP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),rs(t).start(),t.Va.ca()}function Rf(t){return Xr(t)&&!rs(t).O_()&&t.Ea.size>0}function Xr(t){return X(t).da.size===0}function e0(t){t.ma=void 0}async function Gk(t){t.Va.set("Online")}async function Qk(t){t.Ea.forEach((e,n)=>{Af(t,e)})}async function Yk(t,e){e0(t),Rf(t)?(t.Va.Pa(e),Cf(t)):t.Va.set("Unknown")}async function Xk(t,e,n){if(t.Va.set("Online"),e instanceof Fw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.ma.removeTarget(l))}(t,e)}catch(r){B(qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fl(t,r)}else if(e instanceof Ya?t.ma.Xe(e):e instanceof bw?t.ma.ot(e):t.ma.nt(e),!n.isEqual(Y.min()))try{const r=await Qw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.ma.It(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ea.get(h);f&&s.Ea.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ea.get(u);if(!f)return;s.Ea.set(u,f.withResumeToken($e.EMPTY_BYTE_STRING,f.snapshotVersion)),Zw(s,u);const p=new Kn(f.target,u,h,f.sequenceNumber);Af(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(qr,"Failed to raise snapshot:",r),await Fl(t,r)}}async function Fl(t,e,n){if(!ts(e))throw e;t.da.add(1),await Uo(t),t.Va.set("Offline"),n||(n=()=>Qw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(qr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await _u(t)})}function t0(t,e){return e().catch(n=>Fl(t,n,e))}async function vu(t){const e=X(t),n=fr(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:hf;for(;Jk(e);)try{const i=await Vk(e.localStore,r);if(i===null){e.Ia.length===0&&n.k_();break}r=i.batchId,Zk(e,i)}catch(i){await Fl(e,i)}n0(e)&&r0(e)}function Jk(t){return Xr(t)&&t.Ia.length<10}function Zk(t,e){t.Ia.push(e);const n=fr(t);n.N_()&&n.ea&&n.ta(e.mutations)}function n0(t){return Xr(t)&&!fr(t).O_()&&t.Ia.length>0}function r0(t){fr(t).start()}async function eN(t){fr(t).ia()}async function tN(t){const e=fr(t);for(const n of t.Ia)e.ta(n.mutations)}async function nN(t,e,n){const r=t.Ia.shift(),i=yf.from(r,e,n);await t0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vu(t)}async function rN(t,e){e&&fr(t).ea&&await async function(r,i){if(function(o){return UP(o)&&o!==L.ABORTED}(i.code)){const s=r.Ia.shift();fr(r).L_(),await t0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await vu(r)}}(t,e),n0(t)&&r0(t)}async function wy(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),B(qr,"RemoteStore received new credentials");const r=Xr(n);n.da.add(3),await Uo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await _u(n)}async function iN(t,e){const n=X(t);e?(n.da.delete(2),await _u(n)):e||(n.da.add(2),await Uo(n),n.Va.set("Unknown"))}function rs(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.oa(),new Bk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:Gk.bind(null,t),n_:Qk.bind(null,t),i_:Yk.bind(null,t),Y_:Xk.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),Rf(t)?Cf(t):t.Va.set("Unknown")):(await t.fa.stop(),e0(t))})),t.fa}function fr(t){return t.ga||(t.ga=function(n,r,i){const s=X(n);return s.oa(),new $k(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:eN.bind(null,t),i_:rN.bind(null,t),na:tN.bind(null,t),ra:nN.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await vu(t)):(await t.ga.stop(),t.Ia.length>0&&(B(qr,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class Pf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Pf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kf(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),ts(t))return new $(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ki{static emptySet(e){return new ki(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ty{constructor(){this.pa=new Ee(W.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Hi(e,n,ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&du(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class sN{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class oN{constructor(){this.queries=Iy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=Iy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new $(L.ABORTED,"Firestore shutting down"))}}function Iy(){return new Yr(t=>Iw(t),du)}async function Nf(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Da()&&e.va()&&(r=2):(s=new sN,r=e.va()?0:1);try{switch(r){case 0:s.ba=await n.onListen(i,!0);break;case 1:s.ba=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=kf(o,`Initialization of query '${ii(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.Fa(n.onlineState),s.ba&&e.Ma(s.ba)&&Df(n)}async function xf(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.va()?0:1:!s.Da()&&e.va()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Ma(i)&&(r=!0);o.ba=i}}r&&Df(n)}function lN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Df(t){t.Ca.forEach(e=>{e.next()})}var Xh,Sy;(Sy=Xh||(Xh={})).xa="default",Sy.Cache="cache";class Vf{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Xh.Cache}}/**
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
 */class i0{constructor(e){this.key=e}}class s0{constructor(e){this.key=e}}class uN{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ne(),this.mutatedKeys=ne(),this.Za=Sw(e),this.Xa=new ki(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new Ty,i=n?n.Xa:this.Xa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),R=fu(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),x=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;m&&R?m.data.isEqual(R.data)?S!==x&&(r.track({type:3,doc:R}),V=!0):this.ru(m,R)||(r.track({type:2,doc:R}),V=!0,(u&&this.Za(R,u)>0||h&&this.Za(R,h)<0)&&(l=!0)):!m&&R?(r.track({type:0,doc:R}),V=!0):m&&!R&&(r.track({type:1,doc:m}),V=!0,(u||h)&&(l=!0)),V&&(R?(o=o.add(R),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Xa:o,nu:r,Cs:l,mutatedKeys:s}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((f,p)=>function(R,S){const x=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:V})}};return x(R)-x(S)}(f.type,p.type)||this.Za(f.doc,p.doc)),this.iu(r),i=i!=null&&i;const l=n&&!i?this.su():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Ja;return this.Ja=u,o.length!==0||h?{snapshot:new Hi(this.query,e.Xa,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Ty,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=ne(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new s0(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new i0(r))}),n}au(e){this.Ha=e.$s,this.Ya=ne();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Hi.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Of="SyncEngine";class cN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hN{constructor(e){this.key=e,this.cu=!1}}class dN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new Yr(l=>Iw(l),du),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ee(W.comparator),this.Eu=new Map,this.du=new Ef,this.Au={},this.Ru=new Map,this.Vu=$i.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function fN(t,e,n=!0){const r=h0(t);let i;const s=r.hu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.uu()):i=await o0(r,e,n,!0),i}async function pN(t,e){const n=h0(t);await o0(n,e,!0,!1)}async function o0(t,e,n,r){const i=await Ok(t.localStore,en(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await mN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Jw(t.remoteStore,i),l}async function mN(t,e,n,r,i){t.fu=(p,m,R)=>async function(x,V,w,_){let A=V.view.tu(w);A.Cs&&(A=await gy(x.localStore,V.query,!1).then(({documents:E})=>V.view.tu(E,A)));const O=_&&_.targetChanges.get(V.targetId),j=_&&_.targetMismatches.get(V.targetId)!=null,b=V.view.applyChanges(A,x.isPrimaryClient,O,j);return Cy(x,V.targetId,b.ou),b.snapshot}(t,p,m,R);const s=await gy(t.localStore,e,!0),o=new uN(e,s.$s),l=o.tu(s.documents),u=Fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Cy(t,n,h.ou);const f=new cN(e,n,o);return t.hu.set(e,f),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),h.snapshot}async function gN(t,e,n){const r=X(t),i=r.hu.get(e),s=r.Pu.get(i.targetId);if(s.length>1)return r.Pu.set(i.targetId,s.filter(o=>!du(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sf(r.remoteStore,i.targetId),Jh(r,i.targetId)}).catch(es)):(Jh(r,i.targetId),await Qh(r.localStore,i.targetId,!0))}async function yN(t,e){const n=X(t),r=n.hu.get(e),i=n.Pu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sf(n.remoteStore,r.targetId))}async function _N(t,e,n){const r=AN(t);try{const i=await function(o,l){const u=X(o),h=xe.now(),f=l.reduce((R,S)=>R.add(S.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=Rn(),x=ne();return u.Bs.getEntries(R,f).next(V=>{S=V,S.forEach((w,_)=>{_.isValidDocument()||(x=x.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,S)).next(V=>{p=V;const w=[];for(const _ of l){const A=OP(_,p.get(_.key).overlayedDocument);A!=null&&w.push(new wr(_.key,A,mw(A.value.mapValue),zt.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,w,l)}).next(V=>{m=V;const w=V.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(R,V.batchId,w)})}).then(()=>({batchId:m.batchId,changes:Cw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Au[o.currentUser.toKey()];h||(h=new Ee(Z)),h=h.insert(l,u),o.Au[o.currentUser.toKey()]=h}(r,i.batchId,n),await jo(r,i.changes),await vu(r.remoteStore)}catch(i){const s=kf(i,"Failed to persist write");n.reject(s)}}async function a0(t,e){const n=X(t);try{const r=await xk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.cu=!0:i.modifiedDocuments.size>0?oe(o.cu,14607):i.removedDocuments.size>0&&(oe(o.cu,42227),o.cu=!1))}),await jo(n,r,e)}catch(r){await es(r)}}function Ay(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.hu.forEach((s,o)=>{const l=o.view.Fa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const m of p.Sa)m.Fa(l)&&(h=!0)}),h&&Df(u)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new Ee(W.comparator);o=o.insert(s,Je.newNoDocument(s,Y.min()));const l=ne().add(s),u=new gu(Y.min(),new Map,new Ee(Z),o,l);await a0(r,u),r.Iu=r.Iu.remove(s),r.Eu.delete(e),Lf(r)}else await Qh(r.localStore,e,!1).then(()=>Jh(r,e,n)).catch(es)}async function EN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await Nk(n.localStore,e);u0(n,r,null),l0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,i)}catch(i){await es(i)}}async function wN(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);u0(r,e,n),l0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,i)}catch(i){await es(i)}}function l0(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function u0(t,e,n){const r=X(t);let i=r.Au[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Au[r.currentUser.toKey()]=i}}function Jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||c0(t,r)})}function c0(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(Sf(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),Lf(t))}function Cy(t,e,n){for(const r of n)r instanceof i0?(t.du.addReference(r.key,e),TN(t,r)):r instanceof s0?(B(Of,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||c0(t,r.key)):G(19791,{pu:r})}function TN(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(B(Of,"New document in limbo: "+n),t.Tu.add(r),Lf(t))}function Lf(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new W(fe.fromString(e)),r=t.Vu.next();t.Eu.set(r,new hN(n)),t.Iu=t.Iu.insert(n,r),Jw(t.remoteStore,new Kn(en(hu(n.path)),r,"TargetPurposeLimboResolution",lu.le))}}async function jo(t,e,n){const r=X(t),i=[],s=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,u)=>{o.push(r.fu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Tf.Rs(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.lu.Y_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.ds,R=>f.persistence.referenceDelegate.addReference(p,m.targetId,R)).next(()=>M.forEach(m.As,R=>f.persistence.referenceDelegate.removeReference(p,m.targetId,R)))))}catch(p){if(!ts(p))throw p;B(If,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const R=f.xs.get(m),S=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(S);f.xs=f.xs.insert(m,x)}}}(r.localStore,s))}async function IN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){B(Of,"User change. New user:",e.toKey());const r=await Gw(n.localStore,e);n.currentUser=e,function(s,o){s.Ru.forEach(l=>{l.forEach(u=>{u.reject(new $(L.CANCELLED,o))})}),s.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.ks)}}function SN(t,e){const n=X(t),r=n.Eu.get(e);if(r&&r.cu)return ne().add(r.key);{let i=ne();const s=n.Pu.get(e);if(!s)return i;for(const o of s){const l=n.hu.get(o);i=i.unionWith(l.view.eu)}return i}}function h0(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=a0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vN.bind(null,e),e.lu.Y_=aN.bind(null,e.eventManager),e.lu.gu=lN.bind(null,e.eventManager),e}function AN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wN.bind(null,e),e}class Ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return kk(this.persistence,new Ck,e.initialUser,this.serializer)}Su(e){return new Kw(wf.fi,this.serializer)}bu(e){return new Mk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ul.provider={build:()=>new Ul};class CN extends Ul{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){oe(this.persistence.referenceDelegate instanceof bl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hk(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new Kw(r=>bl.fi(r,n),this.serializer)}}class Zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ay(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IN.bind(null,this.syncEngine),await iN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oN}()}createDatastore(e){const n=yu(e.databaseInfo.databaseId),r=function(s){return new zk(s)}(e.databaseInfo);return function(s,o,l,u){return new Wk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Kk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ay(this.syncEngine,n,0),function(){return vy.C()?new vy:new bk}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new dN(i,s,o,l,u,h);return f&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);B(qr,"RemoteStore shutting down."),s.da.add(5),await Uo(s),s.Ra.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zh.provider={build:()=>new Zh};/**
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
 */class Mf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const pr="FirestoreClient";class RN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=sw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),B(pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Gw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ry(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PN(t);B(pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>wy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>wy(e.remoteStore,i)),t._onlineComponents=e}async function PN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(pr,"Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ui("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new Ul)}}else B(pr,"Using default OfflineComponentProvider"),await Lc(t,new CN(void 0));return t._offlineComponents}async function d0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(pr,"Using user provided OnlineComponentProvider"),await Ry(t,t._uninitializedComponentsProvider._online)):(B(pr,"Using default OnlineComponentProvider"),await Ry(t,new Zh))),t._onlineComponents}function kN(t){return d0(t).then(e=>e.syncEngine)}async function jl(t){const e=await d0(t),n=e.eventManager;return n.onListen=fN.bind(null,e.syncEngine),n.onUnlisten=gN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=yN.bind(null,e.syncEngine),n}function NN(t,e,n={}){const r=new vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Mf({next:m=>{f.xu(),o.enqueueAndForget(()=>xf(s,p));const R=m.docs.has(l);!R&&m.fromCache?h.reject(new $(L.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&m.fromCache&&u&&u.source==="server"?h.reject(new $(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Vf(hu(l.path),f,{includeMetadataChanges:!0,Qa:!0});return Nf(s,p)}(await jl(t),t.asyncQueue,e,n,r)),r.promise}function xN(t,e,n={}){const r=new vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new Mf({next:m=>{f.xu(),o.enqueueAndForget(()=>xf(s,p)),m.fromCache&&u.source==="server"?h.reject(new $(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Vf(l,f,{includeMetadataChanges:!0,Qa:!0});return Nf(s,p)}(await jl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function f0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Py=new Map;/**
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
 */function p0(t,e,n){if(!n)throw new $(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DN(t,e,n,r){if(e===!0&&r===!0)throw new $(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ky(t){if(!W.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ny(t){if(W.isDocumentKey(t))throw new $(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Eu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eu(t);throw new $(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const m0="firestore.googleapis.com",xy=!0;class Dy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=m0,this.ssl=xy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:xy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uk)throw new $(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=f0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UR;switch(r.type){case"firstParty":return new $R(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Py.get(n);r&&(B("ComponentProvider","Removing Datastore"),Py.delete(n),r.terminate())}(this),Promise.resolve()}}function VN(t,e,n,r={}){var i;t=wt(t,wu);const s=Yi(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(oE(`https://${u}`),aE("Firestore",!0)),o.host!==m0&&o.host!==u&&Ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!zr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ye.MOCK_USER;else{f=JS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ye(m)}t._authCredentials=new jR(new rw(f,p))}}/**
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
 */class xn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xn(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class or extends xn{constructor(e,n,r){super(e,n,hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new W(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function Rx(t,e,...n){if(t=Ve(t),p0("collection","path",e),t instanceof wu){const r=fe.fromString(e,...n);return Ny(r),new or(t,null,r)}{if(!(t instanceof Ze||t instanceof or))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return Ny(r),new or(t.firestore,null,r)}}function Wi(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=sw.newId()),p0("doc","path",e),t instanceof wu){const r=fe.fromString(e,...n);return ky(r),new Ze(t,null,new W(r))}{if(!(t instanceof Ze||t instanceof or))throw new $(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return ky(r),new Ze(t.firestore,t instanceof or?t.converter:null,new W(r))}}/**
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
 */const Vy="AsyncQueue";class Oy{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Yw(this,"async_queue_retry"),this.rc=()=>{const r=Oc();r&&B(Vy,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new vn;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!ts(e))throw e;B(Vy,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,Cn("INTERNAL UNHANDLED ERROR: ",Ly(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const i=Pf.createAndSchedule(this,e,n,r,s=>this.uc(s));return this.Zu.push(i),i}oc(){this.Xu&&G(47125,{cc:Ly(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function Ly(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function My(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class mr extends wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Oy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Oy(e),this._firestoreClient=void 0,await e}}}function ON(t,e){const n=typeof t=="object"?t:hE(),r=typeof t=="string"?t:xl,i=Zd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=YS("firestore");s&&VN(i,...s)}return i}function Tu(t){if(t._terminated)throw new $(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LN(t),t._firestoreClient}function LN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new iP(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,f0(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new RN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qi($e.fromBase64String(e))}catch(n){throw new $(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qi($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Iu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Su{constructor(e){this._methodName=e}}/**
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
 */class bf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ff{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const MN=/^__.*__$/;class bN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new bo(e,this.data,n,this.fieldTransforms)}}class g0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function y0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ic:t})}}class Uf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ec(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Uf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.dc({path:r,Rc:!1});return i.Vc(e),i}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.dc({path:r,Rc:!1});return i.Ec(),i}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return zl(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(y0(this.Ic)&&MN.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class FN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yu(e)}bc(e,n,r,i=!1){return new Uf({Ic:e,methodName:n,wc:r,path:je.emptyPath(),Rc:!1,yc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Au(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new FN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _0(t,e,n,r,i,s={}){const o=t.bc(s.merge||s.mergeFields?2:0,e,n,i);zf("Data must be an object, but it was:",o,r);const l=v0(r,o);let u,h;if(s.merge)u=new vt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=ed(e,p,n);if(!o.contains(m))throw new $(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);w0(f,m)||f.push(m)}u=new vt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new bN(new ct(l),u,h)}class Cu extends Su{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cu}}class jf extends Su{_toFieldTransform(e){return new NP(e.path,new To)}isEqual(e){return e instanceof jf}}function UN(t,e,n,r){const i=t.bc(1,e,n);zf("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();Er(r,(u,h)=>{const f=Bf(e,u,n);h=Ve(h);const p=i.mc(f);if(h instanceof Cu)s.push(f);else{const m=zo(h,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new vt(s);return new g0(o,l,i.fieldTransforms)}function jN(t,e,n,r,i,s){const o=t.bc(1,e,n),l=[ed(e,r,n)],u=[i];if(s.length%2!=0)throw new $(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(ed(e,s[m])),u.push(s[m+1]);const h=[],f=ct.empty();for(let m=l.length-1;m>=0;--m)if(!w0(h,l[m])){const R=l[m];let S=u[m];S=Ve(S);const x=o.mc(R);if(S instanceof Cu)h.push(R);else{const V=zo(S,x);V!=null&&(h.push(R),f.set(R,V))}}const p=new vt(h);return new g0(f,p,o.fieldTransforms)}function zN(t,e,n,r=!1){return zo(n,t.bc(r?4:3,e))}function zo(t,e){if(E0(t=Ve(t)))return zf("Unsupported field value:",e,t),v0(t,e);if(t instanceof Su)return function(r,i){if(!y0(i.Ic))throw i.gc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=zo(l,i.fc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=xe.fromDate(r);return{timestampValue:Ml(i.serializer,s)}}if(r instanceof xe){const s=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ml(i.serializer,s)}}if(r instanceof bf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qi)return{bytesValue:Uw(i.serializer,r._byteString)};if(r instanceof Ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ff)return function(o,l){return{mapValue:{fields:{[fw]:{stringValue:pw},[Dl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.gc("VectorValues must only contain numeric values.");return gf(l.serializer,h)})}}}}}}(r,i);throw i.gc(`Unsupported field value: ${Eu(r)}`)}(t,e)}function v0(t,e){const n={};return aw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(t,(r,i)=>{const s=zo(i,e.Ac(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function E0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof bf||t instanceof qi||t instanceof Ze||t instanceof Su||t instanceof Ff)}function zf(t,e,n){if(!E0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Eu(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function ed(t,e,n){if((e=Ve(e))instanceof Iu)return e._internalPath;if(typeof e=="string")return Bf(t,e);throw zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const BN=new RegExp("[~\\*/\\[\\]]");function Bf(t,e,n){if(e.search(BN)>=0)throw zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Iu(...e.split("."))._internalPath}catch{throw zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(L.INVALID_ARGUMENT,l+t+u)}function w0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class T0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $N(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ru("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $N extends T0{data(){return super.data()}}function Ru(t,e){return typeof e=="string"?Bf(t,e):e instanceof Iu?e._internalPath:e._delegate._internalPath}/**
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
 */function I0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $f{}class Hf extends $f{}function Px(t,e,...n){let r=[];e instanceof $f&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Wf).length,l=s.filter(u=>u instanceof Pu).length;if(o>1||o>0&&l>0)throw new $(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Pu extends Hf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pu(e,n,r)}_apply(e){const n=this._parse(e);return S0(e._query,n),new xn(e.firestore,e.converter,Hh(e._query,n))}_parse(e){const n=Au(e.firestore);return function(s,o,l,u,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Fy(p,f);const S=[];for(const x of p)S.push(by(u,s,x));m={arrayValue:{values:S}}}else m=by(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Fy(p,f),m=zN(l,o,p,f==="in"||f==="not-in");return Pe.create(h,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function kx(t,e,n){const r=e,i=Ru("where",t);return Pu._create(i,r,n)}class Wf extends $f{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)S0(o,u),o=Hh(o,u)}(e._query,n),new xn(e.firestore,e.converter,Hh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qf extends Hf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new wo(s,o)}(e._query,this._field,this._direction);return new xn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ns(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Nx(t,e="asc"){const n=e,r=Ru("orderBy",t);return qf._create(r,n)}class Kf extends Hf{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Kf(e,n,r)}_apply(e){return new xn(e.firestore,e.converter,Ol(e._query,this._limit,this._limitType))}}function xx(t){return Kf._create("limit",t,"F")}function by(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new $(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tw(e)&&n.indexOf("/")!==-1)throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(fe.fromString(n));if(!W.isDocumentKey(r))throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xg(t,new W(r))}if(n instanceof Ze)return Xg(t,n._key);throw new $(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eu(n)}.`)}function Fy(t,e){if(!Array.isArray(t)||t.length===0)throw new $(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function S0(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class HN{convertValue(e,n="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Er(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Dl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new Ff(s)}convertGeoPoint(e){return new bf(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=cr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);oe(Ww(r),9688,{name:e});const i=new vo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Cn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function A0(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C0 extends T0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ru("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xa extends C0{data(e={}){return super.data(e)}}class R0{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ls(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xa(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Xa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ls(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Xa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ls(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:WN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
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
 */function Uy(t){t=wt(t,Ze);const e=wt(t.firestore,mr);return NN(Tu(e),t._key).then(n=>P0(e,t,n))}class Gf extends HN{constructor(e){super(),this.firestore=e}convertBytes(e){return new qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function Dx(t){t=wt(t,xn);const e=wt(t.firestore,mr),n=Tu(e),r=new Gf(e);return I0(t._query),xN(n,t._query).then(i=>new R0(e,r,t,i))}function Qf(t,e,n){t=wt(t,Ze);const r=wt(t.firestore,mr),i=A0(t.converter,e,n);return Yf(r,[_0(Au(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function Vx(t,e,n,...r){t=wt(t,Ze);const i=wt(t.firestore,mr),s=Au(i);let o;return o=typeof(e=Ve(e))=="string"||e instanceof Iu?jN(s,"updateDoc",t._key,e,n,r):UN(s,"updateDoc",t._key,e),Yf(i,[o.toMutation(t._key,zt.exists(!0))])}function Ox(t,e){const n=wt(t.firestore,mr),r=Wi(t),i=A0(t.converter,e);return Yf(n,[_0(Au(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Lx(t,...e){var n,r,i;t=Ve(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||My(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(My(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof Ze)h=wt(t.firestore,mr),f=hu(t._key.path),u={next:p=>{e[o]&&e[o](P0(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=wt(t,xn);h=wt(p.firestore,mr),f=p._query;const m=new Gf(h);u={next:R=>{e[o]&&e[o](new R0(h,m,p,R))},error:e[o+1],complete:e[o+2]},I0(t._query)}return function(m,R,S,x){const V=new Mf(x),w=new Vf(R,V,S);return m.asyncQueue.enqueueAndForget(async()=>Nf(await jl(m),w)),()=>{V.xu(),m.asyncQueue.enqueueAndForget(async()=>xf(await jl(m),w))}}(Tu(h),f,l,u)}function Yf(t,e){return function(r,i){const s=new vn;return r.asyncQueue.enqueueAndForget(async()=>_N(await kN(r),i,s)),s.promise}(Tu(t),e)}function P0(t,e,n){const r=n.docs.get(e._key),i=new Gf(t);return new C0(t,i,e._key,r,new Ls(n.hasPendingWrites,n.fromCache),e.converter)}function Mx(){return new jf("serverTimestamp")}(function(e,n=!0){(function(i){Zi=i})(Xi),bi(new Br("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new mr(new zR(r.getProvider("auth-internal")),new HR(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ir(Ug,jg,e),ir(Ug,jg,"esm2017")})();var qN="firebase",KN="11.9.1";/**
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
 */ir(qN,KN,"app");const GN={apiKey:"AIzaSyDDdyGFdOdRWTlMWBzBByfzc39OY2mtZTo",authDomain:"healthbuddy-881bd.firebaseapp.com",databaseURL:"https://healthbuddy-881bd-default-rtdb.europe-west1.firebasedatabase.app",projectId:"healthbuddy-881bd",storageBucket:"healthbuddy-881bd.firebasestorage.app",messagingSenderId:"1052497472413",appId:"1:1052497472413:web:41d564b9e94dc30c2f9d74",measurementId:"G-W82WSQHQCB"},k0=cE(GN),Bo=bR(k0),Ao=ON(k0),N0=async(t,e,n)=>{try{if(!t.endsWith("@alu.murciaeduca.es"))return{success:!1,error:"El correo debe ser institucional (@alu.murciaeduca.es)"};const i=(await FE(Bo,t,e)).user,s=t.split("@")[0];return await Qf(Wi(Ao,"users","students",i.uid),{nre:s,alias:n.alias||"",centerIds:n.centerIds||[],course:n.course||"",age:n.age||null,gender:n.gender||"",createdAt:new Date,lastLogin:new Date,settings:n.settings||{notifications:!0,language:"es"}}),await UE(i,{displayName:n.alias||s}),{success:!0,user:i}}catch(r){return console.error("Error en registro de estudiante:",r),r.code==="auth/email-already-in-use"?{success:!1,error:"Este correo ya está registrado"}:r.code==="auth/weak-password"?{success:!1,error:"La contraseña debe tener al menos 6 caracteres"}:{success:!1,error:r.message}}},QN=async(t,e,n)=>{try{if(!t.endsWith("@carm.es"))return{success:!1,error:"El correo debe ser institucional (@carm.es)"};const i=(await FE(Bo,t,e)).user;return await Qf(Wi(Ao,"users","professionals",i.uid),{email:t,name:n.name||"",role:n.role||"nurse",centerIds:n.centerIds||[],availability:n.availability||{},createdAt:new Date,lastLogin:new Date,settings:n.settings||{notifications:!0,language:"es"}}),await UE(i,{displayName:n.name||t.split("@")[0]}),{success:!0,user:i}}catch(r){return console.error("Error en registro de profesional:",r),r.code==="auth/email-already-in-use"?{success:!1,error:"Este correo ya está registrado"}:{success:!1,error:r.message}}},Xf=async(t,e)=>{try{const r=(await TC(Bo,t,e)).user,i=await D0(r.uid);if(i.success){const s=i.role==="student"?"users/students":"users/professionals";await Qf(Wi(Ao,s,r.uid),{lastLogin:new Date},{merge:!0})}return{success:!0,user:r,userType:i.success?i.role:null}}catch(n){return console.error("Error en inicio de sesión:",n),n.code==="auth/user-not-found"||n.code==="auth/wrong-password"?{success:!1,error:"Credenciales incorrectas"}:{success:!1,error:n.message}}},x0=async()=>{try{return await CC(Bo),{success:!0}}catch(t){return console.error("Error al cerrar sesión:",t),{success:!1,error:t.message}}},D0=async t=>{try{const e=await Uy(Wi(Ao,"users","students",t));if(e.exists())return{success:!0,role:"student",data:e.data()};const n=await Uy(Wi(Ao,"users","professionals",t));return n.exists()?{success:!0,role:"professional",data:n.data()}:{success:!1,error:"Usuario no encontrado"}}catch(e){return console.error("Error al obtener rol de usuario:",e),{success:!1,error:e.message}}},YN=t=>Bo.onAuthStateChanged(t),V0=q.createContext(),XN=()=>q.useContext(V0),JN=({children:t})=>{const[e,n]=q.useState(null),[r,i]=q.useState(null),[s,o]=q.useState(null),[l,u]=q.useState(!0),[h,f]=q.useState(null);q.useEffect(()=>{const V=YN(async w=>{if(n(w),w)try{const _=await D0(w.uid);_.success?(i(_.role),o(_.data)):(console.error("Error al obtener rol de usuario:",_.error),f("Error al cargar datos de usuario"))}catch(_){console.error("Error en verificación de autenticación:",_),f("Error en verificación de autenticación")}else i(null),o(null);u(!1)});return()=>V()},[]);const x={currentUser:e,userRole:r,userData:s,loading:l,error:h,login:async(V,w)=>{f(null);try{const _=await Xf(V,w);return _.success||f(_.error),_}catch(_){return f("Error al iniciar sesión"),{success:!1,error:_.message}}},logout:async()=>{f(null);try{return await x0(),n(null),i(null),o(null),{success:!0}}catch(V){return f("Error al cerrar sesión"),{success:!1,error:V.message}}},registerStudent:async(V,w,_)=>{f(null);try{const A=await N0(V,w,_);return A.success||f(A.error),A}catch(A){return f("Error al registrar estudiante"),{success:!1,error:A.message}}},registerProfessional:async(V,w,_)=>{f(null);try{const A=await QN(V,w,_);return A.success||f(A.error),A}catch(A){return f("Error al registrar profesional"),{success:!1,error:A.message}}},isStudent:r==="student",isProfessional:r==="professional"};return C.jsx(V0.Provider,{value:x,children:!l&&t})},ZN=({onContinue:t})=>{const[e,n]=q.useState(!1);return q.useEffect(()=>{const r=setTimeout(()=>{n(!0)},500);return()=>clearTimeout(r)},[]),C.jsxs("div",{className:"splash-container",children:[C.jsxs("div",{className:"splash-content",style:{opacity:e?1:0,transform:e?"translateY(0)":"translateY(20px)"},children:[C.jsx("div",{className:"logo-container",children:C.jsx("img",{src:"/logo.png",alt:"HealthBuddy Logo",className:"logo-image"})}),C.jsx("h1",{className:"app-title",children:"HealthBuddy"}),C.jsx("p",{className:"app-description",children:"Programa de Consulta Joven del Servicio Murciano de Salud"}),C.jsx("button",{onClick:t,className:"continue-button",children:"Continuar"})]}),C.jsxs("div",{className:"institutional-footer",style:{opacity:e?.7:0},children:[C.jsxs("div",{className:"institutional-logos",children:[C.jsx("span",{className:"institutional-text",children:"Servicio Murciano de Salud"}),C.jsx("span",{className:"institutional-text",children:"Región de Murcia"})]}),C.jsx("p",{className:"copyright-text",children:"© 2025 - Todos los derechos reservados"})]})]})},ex=({onBack:t,onRegister:e,theme:n})=>{const[r,i]=q.useState({alias:"",fechaNacimiento:"",curso:"",sexo:"",centroEducativo:"",nre:"",password:"",confirmPassword:""}),[s,o]=q.useState(!1),[l,u]=q.useState({}),h=(S,x)=>{i(V=>({...V,[S]:x})),l[S]&&u(V=>({...V,[S]:""}))},f=S=>{const x=new Date,V=new Date(S);let w=x.getFullYear()-V.getFullYear();const _=x.getMonth()-V.getMonth();return(_<0||_===0&&x.getDate()<V.getDate())&&w--,w},p=()=>{const S={};if(r.alias.trim()||(S.alias="El alias es obligatorio"),!r.fechaNacimiento)S.fechaNacimiento="La fecha de nacimiento es obligatoria";else{const x=f(r.fechaNacimiento);(x<12||x>18)&&(S.fechaNacimiento="Debes tener entre 12 y 18 años para usar HealthBuddy")}return r.curso||(S.curso="Selecciona tu curso"),r.sexo||(S.sexo="Selecciona una opción"),r.centroEducativo||(S.centroEducativo="Selecciona tu centro educativo"),r.nre.trim()?/^\d{8}[A-Z]$/.test(r.nre)||(S.nre="El NRE debe tener 8 dígitos seguidos de una letra mayúscula"):S.nre="El NRE es obligatorio",r.password?r.password.length<6&&(S.password="La contraseña debe tener al menos 6 caracteres"):S.password="La contraseña es obligatoria",r.password!==r.confirmPassword&&(S.confirmPassword="Las contraseñas no coinciden"),u(S),Object.keys(S).length===0},m=async S=>{if(S.preventDefault(),p())try{const x=`${r.nre}@alu.murciaeduca.es`,V={nre:r.nre,alias:r.alias,centerId:r.centroEducativo,course:r.curso,birthDate:new Date(r.fechaNacimiento),gender:r.sexo,role:"student"};await N0(x,r.password,V),e()}catch(x){console.error("Error al registrar estudiante:",x),u(V=>({...V,general:x.message}))}},R=["IES Ramón Arcas Meca","IES José Ibáñez Martín","IES Francisco Ros Giner","Colegio San Francisco de Asís"];return C.jsxs("div",{className:"registration-container student",children:[C.jsx("button",{className:"back-button",onClick:t,style:{color:n.colors.secondary},children:"← Volver"}),C.jsxs(Qd,{children:[C.jsxs("div",{className:"registration-header",children:[C.jsx("h2",{style:{color:n.colors.secondary},children:"Registro de Estudiante"}),C.jsxs("div",{className:"privacy-notice",style:{backgroundColor:n.colors.backgroundLight,padding:n.spacing.md,borderRadius:n.borderRadius,border:`1px solid ${n.colors.secondary}`,marginBottom:n.spacing.lg},children:[C.jsx("h4",{style:{color:n.colors.secondary,marginBottom:n.spacing.sm},children:"🔒 Tu privacidad es nuestra prioridad"}),C.jsxs("ul",{style:{fontSize:n.typography.fontSize.sm,color:n.colors.textMedium,margin:0,paddingLeft:n.spacing.lg},children:[C.jsx("li",{children:"Tu identidad está protegida: solo usamos tu alias"}),C.jsx("li",{children:"El NRE nos permite verificar que eres estudiante y asignarte al profesional de tu centro"}),C.jsx("li",{children:"Usa una contraseña DIFERENTE a la de tu correo corporativo"}),C.jsx("li",{children:"Ningún dato personal será compartido sin tu consentimiento"})]})]})]}),C.jsxs("form",{onSubmit:m,className:"registration-form",children:[C.jsxs("div",{className:"form-group",children:[C.jsxs("label",{className:"form-label",children:["Alias ",C.jsx("span",{className:"required",children:"*"})]}),C.jsx("input",{type:"text",className:`form-control ${l.alias?"error":""}`,placeholder:"Nombre, apodo o como quieras que te llamemos",value:r.alias,onChange:S=>h("alias",S.target.value),maxLength:20}),l.alias&&C.jsx("span",{className:"error-message",children:l.alias}),C.jsx("small",{className:"form-help",children:"Solo tú y el profesional sanitario verán este nombre"})]}),C.jsxs("div",{className:"form-group",children:[C.jsxs("label",{className:"form-label",children:["Fecha de Nacimiento ",C.jsx("span",{className:"required",children:"*"})]}),C.jsx("input",{type:"date",className:`form-control ${l.fechaNacimiento?"error":""}`,value:r.fechaNacimiento,onChange:S=>h("fechaNacimiento",S.target.value),max:new Date(new Date().setFullYear(new Date().getFullYear()-12)).toISOString().split("T")[0],min:new Date(new Date().setFullYear(new Date().getFullYear()-18)).toISOString().split("T")[0]}),l.fechaNacimiento&&C.jsx("span",{className:"error-message",children:l.fechaNacimiento}),r.fechaNacimiento&&C.jsxs("small",{className:"form-help",children:["Edad: ",f(r.fechaNacimiento)," años"]})]}),C.jsxs("div",{className:"form-group",children:[C.jsxs("label",{className:"form-label",children:["Curso ",C.jsx("span",{className:"required",children:"*"})]}),C.jsxs("select",{className:`form-control ${l.curso?"error":""}`,value:r.curso,onChange:S=>h("curso",S.target.value),children:[C.jsx("option",{value:"",children:"Selecciona tu curso"}),C.jsx("option",{value:"1ESO",children:"1º ESO"}),C.jsx("option",{value:"2ESO",children:"2º ESO"}),C.jsx("option",{value:"3ESO",children:"3º ESO"}),C.jsx("option",{value:"4ESO",children:"4º ESO"}),C.jsx("option",{value:"1BACH",children:"1º Bachillerato"}),C.jsx("option",{value:"2BACH",children:"2º Bachillerato"}),C.jsx("option",{value:"FP",children:"Formación Profesional"})]}),l.curso&&C.jsx("span",{className:"error-message",children:l.curso})]}),C.jsxs("div",{className:"form-group",children:[C.jsxs("label",{className:"form-label",children:["Sexo ",C.jsx("span",{className:"required",children:"*"})]}),C.jsxs("select",{className:`form-control ${l.sexo?"error":""}`,value:r.sexo,onChange:S=>h("sexo",S.target.value),children:[C.jsx("option",{value:"",children:"Selecciona una opción"}),C.jsx("option",{value:"masculino",children:"Masculino"}),C.jsx("option",{value:"femenino",children:"Femenino"}),C.jsx("option",{value:"otro",children:"Otro"}),C.jsx("option",{value:"prefiero-no-decir",children:"Prefiero no decirlo"})]}),l.sexo&&C.jsx("span",{className:"error-message",children:l.sexo})]}),C.jsxs("div",{className:"form-group",children:[C.jsxs("label",{className:"form-label",children:["Centro Educativo ",C.jsx("span",{className:"required",children:"*"})]}),C.jsxs("select",{className:`form-control ${l.centroEducativo?"error":""}`,value:r.centroEducativo,onChange:S=>h("centroEducativo",S.target.value),children:[C.jsx("option",{value:"",children:"Selecciona tu centro"}),R.map(S=>C.jsx("option",{value:S,children:S},S))]}),l.centroEducativo&&C.jsx("span",{className:"error-message",children:l.centroEducativo}),C.jsx("small",{className:"form-help",children:"Esto nos ayuda a asignarte al profesional de tu centro"})]}),C.jsxs("div",{className:"form-group",children:[C.jsxs("label",{className:"form-label",children:["NRE (Número Regional del Estudiante) ",C.jsx("span",{className:"required",children:"*"})]}),C.jsxs("div",{className:"nre-input-group",children:[C.jsx("input",{type:"text",className:`form-control nre-input ${l.nre?"error":""}`,placeholder:"12345678A",value:r.nre,onChange:S=>h("nre",S.target.value.toUpperCase()),maxLength:9}),C.jsx("span",{className:"nre-suffix",children:"@alu.murciaeduca.es"})]}),l.nre&&C.jsx("span",{className:"error-message",children:l.nre}),C.jsx("small",{className:"form-help",children:"Tu NRE es tu identificador único como estudiante. Lo usamos para proteger tu identidad."})]}),C.jsxs("div",{className:"form-group",children:[C.jsxs("label",{className:"form-label",children:["Contraseña para HealthBuddy ",C.jsx("span",{className:"required",children:"*"})]}),C.jsxs("div",{className:"password-input-group",children:[C.jsx("input",{type:s?"text":"password",className:`form-control ${l.password?"error":""}`,placeholder:"Mínimo 6 caracteres",value:r.password,onChange:S=>h("password",S.target.value)}),C.jsx("button",{type:"button",className:"password-toggle",onClick:()=>o(!s),children:s?"👁️":"👁️‍🗨️"})]}),l.password&&C.jsx("span",{className:"error-message",children:l.password}),C.jsxs("div",{className:"password-warning",style:{backgroundColor:"#fff3cd",border:"1px solid #ffd60a",borderRadius:n.borderRadius,padding:n.spacing.sm,marginTop:n.spacing.xs},children:[C.jsx("strong",{children:"⚠️ Importante:"})," Usa una contraseña DIFERENTE a la de tu correo corporativo"]})]}),C.jsxs("div",{className:"form-group",children:[C.jsxs("label",{className:"form-label",children:["Confirmar contraseña ",C.jsx("span",{className:"required",children:"*"})]}),C.jsx("input",{type:"password",className:`form-control ${l.confirmPassword?"error":""}`,placeholder:"Repite la contraseña",value:r.confirmPassword,onChange:S=>h("confirmPassword",S.target.value)}),l.confirmPassword&&C.jsx("span",{className:"error-message",children:l.confirmPassword})]}),C.jsx(Yd,{type:"submit",variant:"secondary",fullWidth:!0,style:{marginTop:n.spacing.lg},children:"Crear cuenta"}),l.general&&C.jsx("p",{className:"error-message",children:l.general})]})]})]})},tx=({onLogin:t,onBack:e,onSkipLogin:n})=>{const r=Wt(),[i,s]=q.useState(""),[o,l]=q.useState(""),[u,h]=q.useState(null),f=async p=>{p.preventDefault(),h(null);try{const m=`${i.replace("NRE","")}@alu.murciaeduca.es`;await Xf(m,o),t()}catch(m){h(m.message),console.error("Error al iniciar sesión:",m)}};return C.jsxs("div",{className:"login-container student",children:[C.jsx("button",{className:"back-button",onClick:e,style:{color:r.colors.secondary},children:"← Volver"}),C.jsxs(Qd,{children:[C.jsx("div",{className:"login-header",children:C.jsx("h2",{style:{color:r.colors.secondary},children:"Acceso Estudiante"})}),C.jsxs("form",{onSubmit:f,className:"login-form",children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"NRE (Número Regional del Estudiante)"}),C.jsxs("div",{className:"nre-input-group",children:[C.jsx("input",{type:"text",className:"form-control nre-input",placeholder:"12345678A",maxLength:9,value:i.replace("@alu.murciaeduca.es","").replace("NRE",""),onChange:p=>s(`NRE${p.target.value}`)}),C.jsx("span",{className:"nre-suffix",children:"@alu.murciaeduca.es"})]})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Contraseña"}),C.jsx("input",{type:"password",className:"form-control",placeholder:"Contraseña",value:o,onChange:p=>l(p.target.value)})]}),C.jsx(Yd,{type:"submit",variant:"secondary",fullWidth:!0,children:"Iniciar Sesión"}),u&&C.jsx("p",{className:"error-message",children:u}),C.jsx("p",{className:"toggle-link",onClick:n,children:"Acceder como Demo Estudiante"})]})]})]})},nx=({onLogin:t,onBack:e,onSkipLogin:n})=>{const r=Wt(),[i,s]=q.useState(""),[o,l]=q.useState(""),[u,h]=q.useState(null),f=async p=>{p.preventDefault(),h(null);try{await Xf(i,o),t()}catch(m){h(m.message),console.error("Error al iniciar sesión:",m)}};return C.jsxs("div",{className:"login-container professional",children:[C.jsx("button",{className:"back-button",onClick:e,style:{color:r.colors.professional},children:"← Volver"}),C.jsxs(Qd,{children:[C.jsx("div",{className:"login-header",children:C.jsx("h2",{style:{color:r.colors.professional},children:"Acceso Profesional Sanitario"})}),C.jsxs("form",{onSubmit:f,className:"login-form",children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Correo electrónico"}),C.jsx("input",{type:"email",className:"form-control",placeholder:"nombre.apellido@carm.es",value:i,onChange:p=>s(p.target.value)})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{className:"form-label",children:"Contraseña"}),C.jsx("input",{type:"password",className:"form-control",placeholder:"Contraseña",value:o,onChange:p=>l(p.target.value)})]}),C.jsx(Yd,{type:"submit",variant:"professional",fullWidth:!0,children:"Iniciar Sesión"}),u&&C.jsx("p",{className:"error-message",children:u}),C.jsx("p",{className:"toggle-link",onClick:n,children:"Acceder como Demo Profesional"})]})]})]})},rx=({selectedAccess:t,onLogin:e,onBack:n,onSkipLogin:r})=>{const i=Wt();return C.jsx("div",{className:"login-forms-wrapper",children:t==="student"?C.jsx(tx,{onLogin:e,onBack:n,onSkipLogin:r}):t==="professional"?C.jsx(nx,{onLogin:e,onBack:n,onSkipLogin:r}):C.jsx(ex,{onRegister:e,onBack:n,theme:i})})},ix=q.lazy(()=>mt(()=>import("./StudentHome-3JBrxOK7.js"),[])),sx=q.lazy(()=>mt(()=>import("./StudentChat-DJO7x_Lm.js"),__vite__mapDeps([0,1,2]))),ox=q.lazy(()=>mt(()=>import("./StudentAppointmentBooking-BFLyj161.js"),__vite__mapDeps([3,4]))),ax=q.lazy(()=>mt(()=>import("./StudentNotifications-DByS2pF3.js"),__vite__mapDeps([5,6,2]))),lx=q.lazy(()=>mt(()=>import("./StudentResources-BlVWAtwF.js"),__vite__mapDeps([7,2]))),ux=q.lazy(()=>mt(()=>import("./ProfessionalDashboard-BOlzRD9S.js"),[])),cx=q.lazy(()=>mt(()=>import("./ProfessionalAvailabilityManagement-CH7M0sr2.js"),__vite__mapDeps([8,9,10,11]))),hx=q.lazy(()=>mt(()=>import("./ProfessionalAppointments-BXQ3rRpC.js"),__vite__mapDeps([12,9,10,4]))),dx=q.lazy(()=>mt(()=>import("./ConsultationForm-BWEK6yKm.js"),__vite__mapDeps([13,9,10]))),fx=q.lazy(()=>mt(()=>import("./ProfessionalChat-BFvJTYTI.js"),__vite__mapDeps([14,1]))),px=q.lazy(()=>mt(()=>import("./MyCentersView-DhAkyXCi.js"),[])),mx=q.lazy(()=>mt(()=>import("./ProfessionalStatistics-BRR2EDBo.js"),[])),gx=q.lazy(()=>mt(()=>import("./ProfessionalInterconsultation-BIMWTsHi.js"),__vite__mapDeps([15,9,10]))),yx=q.lazy(()=>mt(()=>import("./ProfessionalResources-DOqWvaMQ.js"),__vite__mapDeps([16,17])));function _x(){const{user:t,loading:e,userData:n}=XN(),[r,i]=q.useState(!0),[s,o]=q.useState(null),[l,u]=q.useState(!1),[h,f]=q.useState("home"),[p,m]=q.useState("dashboard");q.useEffect(()=>{if(t&&n&&!l){const b=n.userType||"student";o(b)}else!t&&!l&&(o(null),f("home"),m("dashboard"))},[t,n,l]);const R=()=>{i(!1)},S=()=>{t&&!l?V():(l||s)&&(u(!1),o(null),f("home"),m("dashboard"))},x=b=>{console.log("Usuario logueado:",b)},V=async()=>{try{await x0(),u(!1),o(null),f("home"),m("dashboard"),console.log("Sesión cerrada exitosamente")}catch(b){console.error("Error al cerrar sesión:",b),u(!1),o(null),f("home"),m("dashboard")}},w=b=>{o(b),u(!0),f("home"),m("dashboard")},_=b=>{o(b),u(!1)},A=t&&n&&!l||l,O=()=>{const b={onNavigate:f,user:l?{userType:"student",alias:"Demo Student"}:n,demoMode:l};return C.jsxs(q.Suspense,{fallback:C.jsx(ag,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:C.jsx(Sc,{size:"large"})}),children:[h==="home"&&C.jsx(ix,{...b}),h==="chat"&&C.jsx(sx,{...b}),h==="appointments"&&C.jsx(ox,{...b}),h==="notifications"&&C.jsx(ax,{...b}),h==="resources"&&C.jsx(lx,{...b})]})},j=()=>{const b={onNavigate:m,user:l?{userType:"professional",nombre:"Demo",apellidos:"Professional"}:n,demoMode:l};return C.jsxs(q.Suspense,{fallback:C.jsx(ag,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:C.jsx(Sc,{size:"large"})}),children:[p==="dashboard"&&C.jsx(ux,{...b}),p==="availability"&&C.jsx(cx,{...b}),p==="appointments"&&C.jsx(hx,{...b}),p==="consultation-form"&&C.jsx(dx,{...b}),p==="centers"&&C.jsx(px,{...b}),p==="chat"&&C.jsx(fx,{...b}),p==="statistics"&&C.jsx(mx,{...b}),p==="interconsultation"&&C.jsx(gx,{...b}),p==="resources"&&C.jsx(yx,{...b})]})};return e?C.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f8f9fa"},children:[C.jsx(Sc,{size:"large"}),C.jsx("p",{style:{marginLeft:"1rem",color:"#666"},children:"Cargando HealthBuddy..."})]}):r?C.jsx(ZN,{onContinue:R}):C.jsx("div",{className:"app-container",children:s===null?C.jsxs("div",{className:"login-container",children:[C.jsx("img",{src:"/logo.png",alt:"HealthBuddy Logo",className:"logo"}),C.jsx("h1",{className:"app-title",children:"HealthBuddy"}),C.jsx("h2",{className:"app-subtitle",children:"Aplicación de la Consulta Joven del SMS"}),C.jsxs("div",{className:"access-options",children:[C.jsxs("button",{className:"access-button",onClick:()=>_("student"),children:[C.jsx("span",{className:"access-icon",children:"👨‍🎓"})," Acceso Estudiante"]}),C.jsxs("button",{className:"access-button professional",onClick:()=>_("professional"),children:[C.jsx("span",{className:"access-icon",children:"👨‍⚕️"})," Acceso Profesional Sanitario"]})]}),C.jsxs("div",{className:"demo-access",children:[C.jsx("h3",{children:"Modo Demostración"}),C.jsxs("div",{className:"demo-buttons",children:[C.jsxs("button",{className:"demo-button student",onClick:()=>w("student"),children:[C.jsx("span",{className:"demo-icon",children:"🚀"})," Demo Estudiante"]}),C.jsxs("button",{className:"demo-button professional",onClick:()=>w("professional"),children:[C.jsx("span",{className:"demo-icon",children:"🚀"})," Demo Profesional"]})]})]}),C.jsxs("div",{className:"footer",children:[C.jsx("p",{children:"Servicio de comunicación segura entre estudiantes y enfermería escolar"}),C.jsxs("div",{className:"institutional-logos",children:[C.jsx("span",{children:"Servicio Murciano de Salud"}),C.jsx("span",{children:"Región de Murcia"})]})]})]}):A?C.jsxs("div",{className:"main-app",children:[l&&C.jsx("div",{className:"demo-badge",children:"DEMO"}),C.jsxs("div",{className:"app-header",children:[C.jsx("div",{className:"user-info",children:l?C.jsx("span",{className:"user-name",children:s==="student"?"Demo Student":"Demo Professional"}):n?C.jsx("span",{className:"user-name",children:n.alias||`${n.nombre} ${n.apellidos}`||n.email}):null}),C.jsx("button",{className:"logout-button",onClick:l?S:V,title:l?"Salir del modo demo":"Cerrar sesión",children:l?"Salir Demo":"Cerrar Sesión"})]}),C.jsx("div",{className:"app-content",children:s==="student"?O():j()})]}):C.jsxs("div",{className:"login-container",children:[l&&C.jsx("div",{className:"demo-badge",children:"DEMO"}),C.jsx(rx,{selectedAccess:s,onLogin:x,onBack:S,onSkipLogin:()=>w(s==="student"?"student":"professional"),onShowRegistration:()=>o("registration")})]})})}function vx(){return C.jsx(JN,{children:C.jsx(zS,{children:C.jsx(_x,{})})})}const Ex=q.createContext(),wx=({children:t})=>{const[e,n]=q.useState(()=>{try{const p=localStorage.getItem("healthTipsStats");return p?JSON.parse(p):{totalPoints:0,streakDays:0,tipsRead:0,favoriteCount:0,achievements:[],lastReadDate:null,favorites:[],settings:{showOnStartup:!0,enableAnimations:!0,enableSound:!1}}}catch(p){return console.warn("Error loading health tips stats from localStorage:",p),{totalPoints:0,streakDays:0,tipsRead:0,favoriteCount:0,achievements:[],lastReadDate:null,favorites:[],settings:{showOnStartup:!0,enableAnimations:!0,enableSound:!1}}}});q.useEffect(()=>{try{localStorage.setItem("healthTipsStats",JSON.stringify(e))}catch(p){console.warn("Error saving health tips stats to localStorage:",p)}},[e]);const f={userStats:e,updateStats:p=>{n(m=>({...m,...p}))},addToFavorites:p=>{n(m=>({...m,favorites:[...m.favorites,p],favoriteCount:m.favoriteCount+1}))},removeFromFavorites:p=>{n(m=>({...m,favorites:m.favorites.filter(R=>R!==p),favoriteCount:m.favoriteCount-1}))},markTipAsRead:p=>{const m=new Date().toDateString(),R=e.lastReadDate!==m;n(S=>({...S,totalPoints:S.totalPoints+p.points,tipsRead:S.tipsRead+1,streakDays:R?S.streakDays+1:S.streakDays,lastReadDate:m}))},unlockAchievement:(p,m=0)=>{n(R=>R.achievements.includes(p)?R:{...R,achievements:[...R.achievements,p],totalPoints:R.totalPoints+m})},updateSettings:p=>{n(m=>({...m,settings:{...m.settings,...p}}))},resetStats:()=>{const p={totalPoints:0,streakDays:0,tipsRead:0,favoriteCount:0,achievements:[],lastReadDate:null,favorites:[],settings:{showOnStartup:!0,enableAnimations:!0,enableSound:!1}};n(p),localStorage.setItem("healthTipsStats",JSON.stringify(p))}};return C.jsx(Ex.Provider,{value:f,children:t})};Mc.createRoot(document.getElementById("root")).render(C.jsx(RT.StrictMode,{children:C.jsx(wx,{children:C.jsx(vx,{})})}));export{Ax as A,Yd as B,ag as C,Tx as D,Sc as L,Ix as N,RT as R,Qd as a,Sx as b,XN as c,Rx as d,Ao as e,Lx as f,Ox as g,Dx as h,Wi as i,C as j,Uy as k,Vx as l,xx as m,Nx as o,Px as q,q as r,Mx as s,Wt as u,kx as w};
