(function(){const z=document.createElement("link").relList;if(z&&z.supports&&z.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))f(q);new MutationObserver(q=>{for(const j of q)if(j.type==="childList")for(const L of j.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&f(L)}).observe(document,{childList:!0,subtree:!0});function T(q){const j={};return q.integrity&&(j.integrity=q.integrity),q.referrerPolicy&&(j.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?j.credentials="include":q.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function f(q){if(q.ep)return;q.ep=!0;const j=T(q);fetch(q.href,j)}})();var ds={exports:{}},Ci={};var Ef;function lp(){if(Ef)return Ci;Ef=1;var A=Symbol.for("react.transitional.element"),z=Symbol.for("react.fragment");function T(f,q,j){var L=null;if(j!==void 0&&(L=""+j),q.key!==void 0&&(L=""+q.key),"key"in q){j={};for(var Y in q)Y!=="key"&&(j[Y]=q[Y])}else j=q;return q=j.ref,{$$typeof:A,type:f,key:L,ref:q!==void 0?q:null,props:j}}return Ci.Fragment=z,Ci.jsx=T,Ci.jsxs=T,Ci}var Of;function ip(){return Of||(Of=1,ds.exports=lp()),ds.exports}var x=ip(),fs={exports:{}},V={};var Cf;function np(){if(Cf)return V;Cf=1;var A=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),L=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),G=Symbol.iterator;function ce(r){return r===null||typeof r!="object"?null:(r=G&&r[G]||r["@@iterator"],typeof r=="function"?r:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},he=Object.assign,Ge={};function Ue(r,O,M){this.props=r,this.context=O,this.refs=Ge,this.updater=M||ae}Ue.prototype.isReactComponent={},Ue.prototype.setState=function(r,O){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,O,"setState")},Ue.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ia(){}Ia.prototype=Ue.prototype;function Le(r,O,M){this.props=r,this.context=O,this.refs=Ge,this.updater=M||ae}var da=Le.prototype=new Ia;da.constructor=Le,he(da,Ue.prototype),da.isPureReactComponent=!0;var qa=Array.isArray;function Xe(){}var I={H:null,A:null,T:null,S:null},Ze=Object.prototype.hasOwnProperty;function Da(r,O,M){var N=M.ref;return{$$typeof:A,type:r,key:O,ref:N!==void 0?N:null,props:M}}function Kt(r,O){return Da(r.type,O,r.props)}function Ma(r){return typeof r=="object"&&r!==null&&r.$$typeof===A}function Ke(r){var O={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(M){return O[M]})}var Tt=/\/+/g;function Na(r,O){return typeof r=="object"&&r!==null&&r.key!=null?Ke(""+r.key):O.toString(36)}function Ea(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Xe,Xe):(r.status="pending",r.then(function(O){r.status==="pending"&&(r.status="fulfilled",r.value=O)},function(O){r.status==="pending"&&(r.status="rejected",r.reason=O)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function b(r,O,M,N,X){var $=typeof r;($==="undefined"||$==="boolean")&&(r=null);var ne=!1;if(r===null)ne=!0;else switch($){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(r.$$typeof){case A:case z:ne=!0;break;case R:return ne=r._init,b(ne(r._payload),O,M,N,X)}}if(ne)return X=X(r),ne=N===""?"."+Na(r,0):N,qa(X)?(M="",ne!=null&&(M=ne.replace(Tt,"$&/")+"/"),b(X,O,M,"",function(xl){return xl})):X!=null&&(Ma(X)&&(X=Kt(X,M+(X.key==null||r&&r.key===X.key?"":(""+X.key).replace(Tt,"$&/")+"/")+ne)),O.push(X)),1;ne=0;var Ye=N===""?".":N+":";if(qa(r))for(var Oe=0;Oe<r.length;Oe++)N=r[Oe],$=Ye+Na(N,Oe),ne+=b(N,O,M,$,X);else if(Oe=ce(r),typeof Oe=="function")for(r=Oe.call(r),Oe=0;!(N=r.next()).done;)N=N.value,$=Ye+Na(N,Oe++),ne+=b(N,O,M,$,X);else if($==="object"){if(typeof r.then=="function")return b(Ea(r),O,M,N,X);throw O=String(r),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ne}function D(r,O,M){if(r==null)return r;var N=[],X=0;return b(r,N,"","",function($){return O.call(M,$,X++)}),N}function w(r){if(r._status===-1){var O=r._result;O=O(),O.then(function(M){(r._status===0||r._status===-1)&&(r._status=1,r._result=M)},function(M){(r._status===0||r._status===-1)&&(r._status=2,r._result=M)}),r._status===-1&&(r._status=0,r._result=O)}if(r._status===1)return r._result.default;throw r._result}var re=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},ve={map:D,forEach:function(r,O,M){D(r,function(){O.apply(this,arguments)},M)},count:function(r){var O=0;return D(r,function(){O++}),O},toArray:function(r){return D(r,function(O){return O})||[]},only:function(r){if(!Ma(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return V.Activity=C,V.Children=ve,V.Component=Ue,V.Fragment=T,V.Profiler=q,V.PureComponent=Le,V.StrictMode=f,V.Suspense=_,V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,V.__COMPILER_RUNTIME={__proto__:null,c:function(r){return I.H.useMemoCache(r)}},V.cache=function(r){return function(){return r.apply(null,arguments)}},V.cacheSignal=function(){return null},V.cloneElement=function(r,O,M){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var N=he({},r.props),X=r.key;if(O!=null)for($ in O.key!==void 0&&(X=""+O.key),O)!Ze.call(O,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&O.ref===void 0||(N[$]=O[$]);var $=arguments.length-2;if($===1)N.children=M;else if(1<$){for(var ne=Array($),Ye=0;Ye<$;Ye++)ne[Ye]=arguments[Ye+2];N.children=ne}return Da(r.type,X,N)},V.createContext=function(r){return r={$$typeof:L,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:j,_context:r},r},V.createElement=function(r,O,M){var N,X={},$=null;if(O!=null)for(N in O.key!==void 0&&($=""+O.key),O)Ze.call(O,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(X[N]=O[N]);var ne=arguments.length-2;if(ne===1)X.children=M;else if(1<ne){for(var Ye=Array(ne),Oe=0;Oe<ne;Oe++)Ye[Oe]=arguments[Oe+2];X.children=Ye}if(r&&r.defaultProps)for(N in ne=r.defaultProps,ne)X[N]===void 0&&(X[N]=ne[N]);return Da(r,$,X)},V.createRef=function(){return{current:null}},V.forwardRef=function(r){return{$$typeof:Y,render:r}},V.isValidElement=Ma,V.lazy=function(r){return{$$typeof:R,_payload:{_status:-1,_result:r},_init:w}},V.memo=function(r,O){return{$$typeof:y,type:r,compare:O===void 0?null:O}},V.startTransition=function(r){var O=I.T,M={};I.T=M;try{var N=r(),X=I.S;X!==null&&X(M,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(Xe,re)}catch($){re($)}finally{O!==null&&M.types!==null&&(O.types=M.types),I.T=O}},V.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},V.use=function(r){return I.H.use(r)},V.useActionState=function(r,O,M){return I.H.useActionState(r,O,M)},V.useCallback=function(r,O){return I.H.useCallback(r,O)},V.useContext=function(r){return I.H.useContext(r)},V.useDebugValue=function(){},V.useDeferredValue=function(r,O){return I.H.useDeferredValue(r,O)},V.useEffect=function(r,O){return I.H.useEffect(r,O)},V.useEffectEvent=function(r){return I.H.useEffectEvent(r)},V.useId=function(){return I.H.useId()},V.useImperativeHandle=function(r,O,M){return I.H.useImperativeHandle(r,O,M)},V.useInsertionEffect=function(r,O){return I.H.useInsertionEffect(r,O)},V.useLayoutEffect=function(r,O){return I.H.useLayoutEffect(r,O)},V.useMemo=function(r,O){return I.H.useMemo(r,O)},V.useOptimistic=function(r,O){return I.H.useOptimistic(r,O)},V.useReducer=function(r,O,M){return I.H.useReducer(r,O,M)},V.useRef=function(r){return I.H.useRef(r)},V.useState=function(r){return I.H.useState(r)},V.useSyncExternalStore=function(r,O,M){return I.H.useSyncExternalStore(r,O,M)},V.useTransition=function(){return I.H.useTransition()},V.version="19.2.4",V}var zf;function bs(){return zf||(zf=1,fs.exports=np()),fs.exports}var Ee=bs(),ms={exports:{}},zi={},vs={exports:{}},ps={};var Tf;function up(){return Tf||(Tf=1,(function(A){function z(b,D){var w=b.length;b.push(D);e:for(;0<w;){var re=w-1>>>1,ve=b[re];if(0<q(ve,D))b[re]=D,b[w]=ve,w=re;else break e}}function T(b){return b.length===0?null:b[0]}function f(b){if(b.length===0)return null;var D=b[0],w=b.pop();if(w!==D){b[0]=w;e:for(var re=0,ve=b.length,r=ve>>>1;re<r;){var O=2*(re+1)-1,M=b[O],N=O+1,X=b[N];if(0>q(M,w))N<ve&&0>q(X,M)?(b[re]=X,b[N]=w,re=N):(b[re]=M,b[O]=w,re=O);else if(N<ve&&0>q(X,w))b[re]=X,b[N]=w,re=N;else break e}}return D}function q(b,D){var w=b.sortIndex-D.sortIndex;return w!==0?w:b.id-D.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;A.unstable_now=function(){return j.now()}}else{var L=Date,Y=L.now();A.unstable_now=function(){return L.now()-Y}}var _=[],y=[],R=1,C=null,G=3,ce=!1,ae=!1,he=!1,Ge=!1,Ue=typeof setTimeout=="function"?setTimeout:null,Ia=typeof clearTimeout=="function"?clearTimeout:null,Le=typeof setImmediate<"u"?setImmediate:null;function da(b){for(var D=T(y);D!==null;){if(D.callback===null)f(y);else if(D.startTime<=b)f(y),D.sortIndex=D.expirationTime,z(_,D);else break;D=T(y)}}function qa(b){if(he=!1,da(b),!ae)if(T(_)!==null)ae=!0,Xe||(Xe=!0,Ke());else{var D=T(y);D!==null&&Ea(qa,D.startTime-b)}}var Xe=!1,I=-1,Ze=5,Da=-1;function Kt(){return Ge?!0:!(A.unstable_now()-Da<Ze)}function Ma(){if(Ge=!1,Xe){var b=A.unstable_now();Da=b;var D=!0;try{e:{ae=!1,he&&(he=!1,Ia(I),I=-1),ce=!0;var w=G;try{a:{for(da(b),C=T(_);C!==null&&!(C.expirationTime>b&&Kt());){var re=C.callback;if(typeof re=="function"){C.callback=null,G=C.priorityLevel;var ve=re(C.expirationTime<=b);if(b=A.unstable_now(),typeof ve=="function"){C.callback=ve,da(b),D=!0;break a}C===T(_)&&f(_),da(b)}else f(_);C=T(_)}if(C!==null)D=!0;else{var r=T(y);r!==null&&Ea(qa,r.startTime-b),D=!1}}break e}finally{C=null,G=w,ce=!1}D=void 0}}finally{D?Ke():Xe=!1}}}var Ke;if(typeof Le=="function")Ke=function(){Le(Ma)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Na=Tt.port2;Tt.port1.onmessage=Ma,Ke=function(){Na.postMessage(null)}}else Ke=function(){Ue(Ma,0)};function Ea(b,D){I=Ue(function(){b(A.unstable_now())},D)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(b){b.callback=null},A.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ze=0<b?Math.floor(1e3/b):5},A.unstable_getCurrentPriorityLevel=function(){return G},A.unstable_next=function(b){switch(G){case 1:case 2:case 3:var D=3;break;default:D=G}var w=G;G=D;try{return b()}finally{G=w}},A.unstable_requestPaint=function(){Ge=!0},A.unstable_runWithPriority=function(b,D){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var w=G;G=b;try{return D()}finally{G=w}},A.unstable_scheduleCallback=function(b,D,w){var re=A.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?re+w:re):w=re,b){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=w+ve,b={id:R++,callback:D,priorityLevel:b,startTime:w,expirationTime:ve,sortIndex:-1},w>re?(b.sortIndex=w,z(y,b),T(_)===null&&b===T(y)&&(he?(Ia(I),I=-1):he=!0,Ea(qa,w-re))):(b.sortIndex=ve,z(_,b),ae||ce||(ae=!0,Xe||(Xe=!0,Ke()))),b},A.unstable_shouldYield=Kt,A.unstable_wrapCallback=function(b){var D=G;return function(){var w=G;G=D;try{return b.apply(this,arguments)}finally{G=w}}}})(ps)),ps}var qf;function op(){return qf||(qf=1,vs.exports=up()),vs.exports}var hs={exports:{}},we={};var Df;function sp(){if(Df)return we;Df=1;var A=bs();function z(_){var y="https://react.dev/errors/"+_;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)y+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+_+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(){}var f={d:{f:T,r:function(){throw Error(z(522))},D:T,C:T,L:T,m:T,X:T,S:T,M:T},p:0,findDOMNode:null},q=Symbol.for("react.portal");function j(_,y,R){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:C==null?null:""+C,children:_,containerInfo:y,implementation:R}}var L=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Y(_,y){if(_==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,we.createPortal=function(_,y){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(z(299));return j(_,y,null,R)},we.flushSync=function(_){var y=L.T,R=f.p;try{if(L.T=null,f.p=2,_)return _()}finally{L.T=y,f.p=R,f.d.f()}},we.preconnect=function(_,y){typeof _=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,f.d.C(_,y))},we.prefetchDNS=function(_){typeof _=="string"&&f.d.D(_)},we.preinit=function(_,y){if(typeof _=="string"&&y&&typeof y.as=="string"){var R=y.as,C=Y(R,y.crossOrigin),G=typeof y.integrity=="string"?y.integrity:void 0,ce=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;R==="style"?f.d.S(_,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:G,fetchPriority:ce}):R==="script"&&f.d.X(_,{crossOrigin:C,integrity:G,fetchPriority:ce,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},we.preinitModule=function(_,y){if(typeof _=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var R=Y(y.as,y.crossOrigin);f.d.M(_,{crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&f.d.M(_)},we.preload=function(_,y){if(typeof _=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var R=y.as,C=Y(R,y.crossOrigin);f.d.L(_,R,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},we.preloadModule=function(_,y){if(typeof _=="string")if(y){var R=Y(y.as,y.crossOrigin);f.d.m(_,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:R,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else f.d.m(_)},we.requestFormReset=function(_){f.d.r(_)},we.unstable_batchedUpdates=function(_,y){return _(y)},we.useFormState=function(_,y,R){return L.H.useFormState(_,y,R)},we.useFormStatus=function(){return L.H.useHostTransitionStatus()},we.version="19.2.4",we}var Mf;function cp(){if(Mf)return hs.exports;Mf=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(z){console.error(z)}}return A(),hs.exports=sp(),hs.exports}var _f;function rp(){if(_f)return zi;_f=1;var A=op(),z=bs(),T=cp();function f(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function j(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function L(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Y(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function _(e){if(j(e)!==e)throw Error(f(188))}function y(e){var a=e.alternate;if(!a){if(a=j(e),a===null)throw Error(f(188));return a!==e?null:e}for(var t=e,l=a;;){var i=t.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){t=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===t)return _(i),e;if(n===l)return _(i),a;n=n.sibling}throw Error(f(188))}if(t.return!==l.return)t=i,l=n;else{for(var u=!1,o=i.child;o;){if(o===t){u=!0,t=i,l=n;break}if(o===l){u=!0,l=i,t=n;break}o=o.sibling}if(!u){for(o=n.child;o;){if(o===t){u=!0,t=n,l=i;break}if(o===l){u=!0,l=n,t=i;break}o=o.sibling}if(!u)throw Error(f(189))}}if(t.alternate!==l)throw Error(f(190))}if(t.tag!==3)throw Error(f(188));return t.stateNode.current===t?e:a}function R(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=R(e),a!==null)return a;e=e.sibling}return null}var C=Object.assign,G=Symbol.for("react.element"),ce=Symbol.for("react.transitional.element"),ae=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),Ia=Symbol.for("react.consumer"),Le=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),qa=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),Da=Symbol.for("react.activity"),Kt=Symbol.for("react.memo_cache_sentinel"),Ma=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var Tt=Symbol.for("react.client.reference");function Na(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case he:return"Fragment";case Ue:return"Profiler";case Ge:return"StrictMode";case qa:return"Suspense";case Xe:return"SuspenseList";case Da:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ae:return"Portal";case Le:return e.displayName||"Context";case Ia:return(e._context.displayName||"Context")+".Consumer";case da:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return a=e.displayName||null,a!==null?a:Na(e.type)||"Memo";case Ze:a=e._payload,e=e._init;try{return Na(e(a))}catch{}}return null}var Ea=Array.isArray,b=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},re=[],ve=-1;function r(e){return{current:e}}function O(e){0>ve||(e.current=re[ve],re[ve]=null,ve--)}function M(e,a){ve++,re[ve]=e.current,e.current=a}var N=r(null),X=r(null),$=r(null),ne=r(null);function Ye(e,a){switch(M($,a),M(X,e),M(N,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Xd(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Xd(a),e=Zd(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(N),M(N,e)}function Oe(){O(N),O(X),O($)}function xl(e){e.memoizedState!==null&&M(ne,e);var a=N.current,t=Zd(a,e.type);a!==t&&(M(X,e),M(N,t))}function Ti(e){X.current===e&&(O(N),O(X)),ne.current===e&&(O(ne),Si._currentValue=w)}var Kn,Ss;function qt(e){if(Kn===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Kn=a&&a[1]||"",Ss=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kn+e+Ss}var Jn=!1;function $n(e,a){if(!e||Jn)return"";Jn=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(h){var p=h}Reflect.construct(e,[],E)}else{try{E.call()}catch(h){p=h}e.call(E.prototype)}}else{try{throw Error()}catch(h){p=h}(E=e())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(h){if(h&&p&&typeof h.stack=="string")return[h.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),u=n[0],o=n[1];if(u&&o){var s=u.split(`
`),v=o.split(`
`);for(i=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;i<v.length&&!v[i].includes("DetermineComponentFrameRoot");)i++;if(l===s.length||i===v.length)for(l=s.length-1,i=v.length-1;1<=l&&0<=i&&s[l]!==v[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==v[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==v[i]){var g=`
`+s[l].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=l&&0<=i);break}}}finally{Jn=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?qt(t):""}function Nf(e,a){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return e.child!==a&&a!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return $n(e.type,!1);case 11:return $n(e.type.render,!1);case 1:return $n(e.type,!0);case 31:return qt("Activity");default:return""}}function As(e){try{var a="",t=null;do a+=Nf(e,t),t=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fn=Object.prototype.hasOwnProperty,Wn=A.unstable_scheduleCallback,kn=A.unstable_cancelCallback,jf=A.unstable_shouldYield,Bf=A.unstable_requestPaint,ea=A.unstable_now,Hf=A.unstable_getCurrentPriorityLevel,Es=A.unstable_ImmediatePriority,Os=A.unstable_UserBlockingPriority,qi=A.unstable_NormalPriority,Qf=A.unstable_LowPriority,Cs=A.unstable_IdlePriority,Lf=A.log,wf=A.unstable_setDisableYieldValue,Rl=null,aa=null;function et(e){if(typeof Lf=="function"&&wf(e),aa&&typeof aa.setStrictMode=="function")try{aa.setStrictMode(Rl,e)}catch{}}var ta=Math.clz32?Math.clz32:Vf,Gf=Math.log,Yf=Math.LN2;function Vf(e){return e>>>=0,e===0?32:31-(Gf(e)/Yf|0)|0}var Di=256,Mi=262144,_i=4194304;function Dt(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xi(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var i=0,n=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~n,l!==0?i=Dt(l):(u&=o,u!==0?i=Dt(u):t||(t=o&~e,t!==0&&(i=Dt(t))))):(o=l&~n,o!==0?i=Dt(o):u!==0?i=Dt(u):t||(t=l&~e,t!==0&&(i=Dt(t)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,t=a&-a,n>=t||n===32&&(t&4194048)!==0)?a:i}function Ul(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Xf(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zs(){var e=_i;return _i<<=1,(_i&62914560)===0&&(_i=4194304),e}function Pn(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function Nl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zf(e,a,t,l,i,n){var u=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var o=e.entanglements,s=e.expirationTimes,v=e.hiddenUpdates;for(t=u&~t;0<t;){var g=31-ta(t),E=1<<g;o[g]=0,s[g]=-1;var p=v[g];if(p!==null)for(v[g]=null,g=0;g<p.length;g++){var h=p[g];h!==null&&(h.lane&=-536870913)}t&=~E}l!==0&&Ts(e,l,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(u&~a))}function Ts(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-ta(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930}function qs(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-ta(t),i=1<<l;i&a|e[l]&a&&(e[l]|=a),t&=~i}}function Ds(e,a){var t=a&-a;return t=(t&42)!==0?1:In(t),(t&(e.suspendedLanes|a))!==0?0:t}function In(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function eu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ms(){var e=D.p;return e!==0?e:(e=window.event,e===void 0?32:pf(e.type))}function _s(e,a){var t=D.p;try{return D.p=e,a()}finally{D.p=t}}var at=Math.random().toString(36).slice(2),Ne="__reactFiber$"+at,Je="__reactProps$"+at,Jt="__reactContainer$"+at,au="__reactEvents$"+at,Kf="__reactListeners$"+at,Jf="__reactHandles$"+at,xs="__reactResources$"+at,jl="__reactMarker$"+at;function tu(e){delete e[Ne],delete e[Je],delete e[au],delete e[Kf],delete e[Jf]}function $t(e){var a=e[Ne];if(a)return a;for(var t=e.parentNode;t;){if(a=t[Jt]||t[Ne]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Pd(e);e!==null;){if(t=e[Ne])return t;e=Pd(e)}return a}e=t,t=e.parentNode}return null}function Ft(e){if(e=e[Ne]||e[Jt]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Bl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(f(33))}function Wt(e){var a=e[xs];return a||(a=e[xs]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function xe(e){e[jl]=!0}var Rs=new Set,Us={};function Mt(e,a){kt(e,a),kt(e+"Capture",a)}function kt(e,a){for(Us[e]=a,e=0;e<a.length;e++)Rs.add(a[e])}var $f=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ns={},js={};function Ff(e){return Fn.call(js,e)?!0:Fn.call(Ns,e)?!1:$f.test(e)?js[e]=!0:(Ns[e]=!0,!1)}function Ri(e,a,t){if(Ff(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function Ui(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function ja(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}function fa(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bs(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Wf(e,a,t){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return i.call(this)},set:function(u){t=""+u,n.call(this,u)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(u){t=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function lu(e){if(!e._valueTracker){var a=Bs(e)?"checked":"value";e._valueTracker=Wf(e,a,""+e[a])}}function Hs(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=Bs(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kf=/[\n"\\]/g;function ma(e){return e.replace(kf,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function iu(e,a,t,l,i,n,u,o){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+fa(a)):e.value!==""+fa(a)&&(e.value=""+fa(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?nu(e,u,fa(a)):t!=null?nu(e,u,fa(t)):l!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+fa(o):e.removeAttribute("name")}function Qs(e,a,t,l,i,n,u,o){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),a!=null||t!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){lu(e);return}t=t!=null?""+fa(t):"",a=a!=null?""+fa(a):t,o||a===e.value||(e.value=a),e.defaultValue=a}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),lu(e)}function nu(e,a,t){a==="number"&&Ni(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Pt(e,a,t,l){if(e=e.options,a){a={};for(var i=0;i<t.length;i++)a["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=a.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&l&&(e[t].defaultSelected=!0)}else{for(t=""+fa(t),a=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}a!==null||e[i].disabled||(a=e[i])}a!==null&&(a.selected=!0)}}function Ls(e,a,t){if(a!=null&&(a=""+fa(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+fa(t):""}function ws(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(f(92));if(Ea(l)){if(1<l.length)throw Error(f(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=fa(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),lu(e)}function It(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Pf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gs(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||Pf.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function Ys(e,a,t){if(a!=null&&typeof a!="object")throw Error(f(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in a)l=a[i],a.hasOwnProperty(i)&&t[i]!==l&&Gs(e,i,l)}else for(var n in a)a.hasOwnProperty(n)&&Gs(e,n,a[n])}function uu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),em=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ji(e){return em.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ba(){}var ou=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,al=null;function Vs(e){var a=Ft(e);if(a&&(e=a.stateNode)){var t=e[Je]||null;e:switch(e=a.stateNode,a.type){case"input":if(iu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+ma(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var i=l[Je]||null;if(!i)throw Error(f(90));iu(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Hs(l)}break e;case"textarea":Ls(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Pt(e,!!t.multiple,a,!1)}}}var cu=!1;function Xs(e,a,t){if(cu)return e(a,t);cu=!0;try{var l=e(a);return l}finally{if(cu=!1,(el!==null||al!==null)&&(On(),el&&(a=el,e=al,al=el=null,Vs(a),e)))for(a=0;a<e.length;a++)Vs(e[a])}}function Hl(e,a){var t=e.stateNode;if(t===null)return null;var l=t[Je]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(f(231,a,typeof t));return t}var Ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Ha)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Ql,Ql),window.removeEventListener("test",Ql,Ql)}catch{ru=!1}var tt=null,du=null,Bi=null;function Zs(){if(Bi)return Bi;var e,a=du,t=a.length,l,i="value"in tt?tt.value:tt.textContent,n=i.length;for(e=0;e<t&&a[e]===i[e];e++);var u=t-e;for(l=1;l<=u&&a[t-l]===i[n-l];l++);return Bi=i.slice(e,1<l?1-l:void 0)}function Hi(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function Ks(){return!1}function $e(e){function a(t,l,i,n,u){this._reactName=t,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(n):n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Qi:Ks,this.isPropagationStopped=Ks,this}return C(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),a}var _t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=$e(_t),Ll=C({},_t,{view:0,detail:0}),am=$e(Ll),fu,mu,wl,wi=C({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wl&&(wl&&e.type==="mousemove"?(fu=e.screenX-wl.screenX,mu=e.screenY-wl.screenY):mu=fu=0,wl=e),fu)},movementY:function(e){return"movementY"in e?e.movementY:mu}}),Js=$e(wi),tm=C({},wi,{dataTransfer:0}),lm=$e(tm),im=C({},Ll,{relatedTarget:0}),vu=$e(im),nm=C({},_t,{animationName:0,elapsedTime:0,pseudoElement:0}),um=$e(nm),om=C({},_t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=$e(om),cm=C({},_t,{data:0}),$s=$e(cm),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=fm[e])?!!a[e]:!1}function pu(){return mm}var vm=C({},Ll,{key:function(e){if(e.key){var a=rm[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=$e(vm),hm=C({},wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fs=$e(hm),gm=C({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),ym=$e(gm),bm=C({},_t,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=$e(bm),Am=C({},wi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=$e(Am),Om=C({},_t,{newState:0,oldState:0}),Cm=$e(Om),zm=[9,13,27,32],hu=Ha&&"CompositionEvent"in window,Gl=null;Ha&&"documentMode"in document&&(Gl=document.documentMode);var Tm=Ha&&"TextEvent"in window&&!Gl,Ws=Ha&&(!hu||Gl&&8<Gl&&11>=Gl),ks=" ",Ps=!1;function Is(e,a){switch(e){case"keyup":return zm.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tl=!1;function qm(e,a){switch(e){case"compositionend":return ec(a);case"keypress":return a.which!==32?null:(Ps=!0,ks);case"textInput":return e=a.data,e===ks&&Ps?null:e;default:return null}}function Dm(e,a){if(tl)return e==="compositionend"||!hu&&Is(e,a)?(e=Zs(),Bi=du=tt=null,tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Ws&&a.locale!=="ko"?null:a.data;default:return null}}var Mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Mm[e.type]:a==="textarea"}function tc(e,a,t,l){el?al?al.push(l):al=[l]:el=l,a=_n(a,"onChange"),0<a.length&&(t=new Li("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Yl=null,Vl=null;function _m(e){Qd(e,0)}function Gi(e){var a=Bl(e);if(Hs(a))return e}function lc(e,a){if(e==="change")return a}var ic=!1;if(Ha){var gu;if(Ha){var yu="oninput"in document;if(!yu){var nc=document.createElement("div");nc.setAttribute("oninput","return;"),yu=typeof nc.oninput=="function"}gu=yu}else gu=!1;ic=gu&&(!document.documentMode||9<document.documentMode)}function uc(){Yl&&(Yl.detachEvent("onpropertychange",oc),Vl=Yl=null)}function oc(e){if(e.propertyName==="value"&&Gi(Vl)){var a=[];tc(a,Vl,e,su(e)),Xs(_m,a)}}function xm(e,a,t){e==="focusin"?(uc(),Yl=a,Vl=t,Yl.attachEvent("onpropertychange",oc)):e==="focusout"&&uc()}function Rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gi(Vl)}function Um(e,a){if(e==="click")return Gi(a)}function Nm(e,a){if(e==="input"||e==="change")return Gi(a)}function jm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var la=typeof Object.is=="function"?Object.is:jm;function Xl(e,a){if(la(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var i=t[l];if(!Fn.call(a,i)||!la(e[i],a[i]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,a){var t=sc(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sc(t)}}function rc(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?rc(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function dc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Ni(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=Ni(e.document)}return a}function bu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Bm=Ha&&"documentMode"in document&&11>=document.documentMode,ll=null,Su=null,Zl=null,Au=!1;function fc(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Au||ll==null||ll!==Ni(l)||(l=ll,"selectionStart"in l&&bu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zl&&Xl(Zl,l)||(Zl=l,l=_n(Su,"onSelect"),0<l.length&&(a=new Li("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=ll)))}function xt(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var il={animationend:xt("Animation","AnimationEnd"),animationiteration:xt("Animation","AnimationIteration"),animationstart:xt("Animation","AnimationStart"),transitionrun:xt("Transition","TransitionRun"),transitionstart:xt("Transition","TransitionStart"),transitioncancel:xt("Transition","TransitionCancel"),transitionend:xt("Transition","TransitionEnd")},Eu={},mc={};Ha&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function Rt(e){if(Eu[e])return Eu[e];if(!il[e])return e;var a=il[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in mc)return Eu[e]=a[t];return e}var vc=Rt("animationend"),pc=Rt("animationiteration"),hc=Rt("animationstart"),Hm=Rt("transitionrun"),Qm=Rt("transitionstart"),Lm=Rt("transitioncancel"),gc=Rt("transitionend"),yc=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Oa(e,a){yc.set(e,a),Mt(a,[e])}var Yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},va=[],nl=0,Cu=0;function Vi(){for(var e=nl,a=Cu=nl=0;a<e;){var t=va[a];va[a++]=null;var l=va[a];va[a++]=null;var i=va[a];va[a++]=null;var n=va[a];if(va[a++]=null,l!==null&&i!==null){var u=l.pending;u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i}n!==0&&bc(t,i,n)}}function Xi(e,a,t,l){va[nl++]=e,va[nl++]=a,va[nl++]=t,va[nl++]=l,Cu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function zu(e,a,t,l){return Xi(e,a,t,l),Zi(e)}function Ut(e,a){return Xi(e,null,null,a),Zi(e)}function bc(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var i=!1,n=e.return;n!==null;)n.childLanes|=t,l=n.alternate,l!==null&&(l.childLanes|=t),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&a!==null&&(i=31-ta(t),e=n.hiddenUpdates,l=e[i],l===null?e[i]=[a]:l.push(a),a.lane=t|536870912),n):null}function Zi(e){if(50<mi)throw mi=0,jo=null,Error(f(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var ul={};function wm(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ia(e,a,t,l){return new wm(e,a,t,l)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qa(e,a){var t=e.alternate;return t===null?(t=ia(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Sc(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function Ki(e,a,t,l,i,n){var u=0;if(l=e,typeof e=="function")Tu(e)&&(u=1);else if(typeof e=="string")u=Zv(e,t,N.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Da:return e=ia(31,t,a,i),e.elementType=Da,e.lanes=n,e;case he:return Nt(t.children,i,n,a);case Ge:u=8,i|=24;break;case Ue:return e=ia(12,t,a,i|2),e.elementType=Ue,e.lanes=n,e;case qa:return e=ia(13,t,a,i),e.elementType=qa,e.lanes=n,e;case Xe:return e=ia(19,t,a,i),e.elementType=Xe,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:u=10;break e;case Ia:u=9;break e;case da:u=11;break e;case I:u=14;break e;case Ze:u=16,l=null;break e}u=29,t=Error(f(130,e===null?"null":typeof e,"")),l=null}return a=ia(u,t,a,i),a.elementType=e,a.type=l,a.lanes=n,a}function Nt(e,a,t,l){return e=ia(7,e,l,a),e.lanes=t,e}function qu(e,a,t){return e=ia(6,e,null,a),e.lanes=t,e}function Ac(e){var a=ia(18,null,null,0);return a.stateNode=e,a}function Du(e,a,t){return a=ia(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Ec=new WeakMap;function pa(e,a){if(typeof e=="object"&&e!==null){var t=Ec.get(e);return t!==void 0?t:(a={value:e,source:a,stack:As(a)},Ec.set(e,a),a)}return{value:e,source:a,stack:As(a)}}var ol=[],sl=0,Ji=null,Kl=0,ha=[],ga=0,lt=null,_a=1,xa="";function La(e,a){ol[sl++]=Kl,ol[sl++]=Ji,Ji=e,Kl=a}function Oc(e,a,t){ha[ga++]=_a,ha[ga++]=xa,ha[ga++]=lt,lt=e;var l=_a;e=xa;var i=32-ta(l)-1;l&=~(1<<i),t+=1;var n=32-ta(a)+i;if(30<n){var u=i-i%5;n=(l&(1<<u)-1).toString(32),l>>=u,i-=u,_a=1<<32-ta(a)+i|t<<i|l,xa=n+e}else _a=1<<n|t<<i|l,xa=e}function Mu(e){e.return!==null&&(La(e,1),Oc(e,1,0))}function _u(e){for(;e===Ji;)Ji=ol[--sl],ol[sl]=null,Kl=ol[--sl],ol[sl]=null;for(;e===lt;)lt=ha[--ga],ha[ga]=null,xa=ha[--ga],ha[ga]=null,_a=ha[--ga],ha[ga]=null}function Cc(e,a){ha[ga++]=_a,ha[ga++]=xa,ha[ga++]=lt,_a=a.id,xa=a.overflow,lt=e}var je=null,ge=null,ee=!1,it=null,ya=!1,xu=Error(f(519));function nt(e){var a=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jl(pa(a,e)),xu}function zc(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[Ne]=e,a[Je]=l,t){case"dialog":W("cancel",a),W("close",a);break;case"iframe":case"object":case"embed":W("load",a);break;case"video":case"audio":for(t=0;t<pi.length;t++)W(pi[t],a);break;case"source":W("error",a);break;case"img":case"image":case"link":W("error",a),W("load",a);break;case"details":W("toggle",a);break;case"input":W("invalid",a),Qs(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":W("invalid",a);break;case"textarea":W("invalid",a),ws(a,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||Yd(a.textContent,t)?(l.popover!=null&&(W("beforetoggle",a),W("toggle",a)),l.onScroll!=null&&W("scroll",a),l.onScrollEnd!=null&&W("scrollend",a),l.onClick!=null&&(a.onclick=Ba),a=!0):a=!1,a||nt(e,!0)}function Tc(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:je=je.return}}function cl(e){if(e!==je)return!1;if(!ee)return Tc(e),ee=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Wo(e.type,e.memoizedProps)),t=!t),t&&ge&&nt(e),Tc(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));ge=kd(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(317));ge=kd(e)}else a===27?(a=ge,bt(e.type)?(e=as,as=null,ge=e):ge=a):ge=je?Sa(e.stateNode.nextSibling):null;return!0}function jt(){ge=je=null,ee=!1}function Ru(){var e=it;return e!==null&&(Pe===null?Pe=e:Pe.push.apply(Pe,e),it=null),e}function Jl(e){it===null?it=[e]:it.push(e)}var Uu=r(null),Bt=null,wa=null;function ut(e,a,t){M(Uu,a._currentValue),a._currentValue=t}function Ga(e){e._currentValue=Uu.current,O(Uu)}function Nu(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function ju(e,a,t,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;e:for(;n!==null;){var o=n;n=i;for(var s=0;s<a.length;s++)if(o.context===a[s]){n.lanes|=t,o=n.alternate,o!==null&&(o.lanes|=t),Nu(n.return,t,e),l||(u=null);break e}n=o.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(f(341));u.lanes|=t,n=u.alternate,n!==null&&(n.lanes|=t),Nu(u,t,e),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function rl(e,a,t,l){e=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(f(387));if(u=u.memoizedProps,u!==null){var o=i.type;la(i.pendingProps.value,u.value)||(e!==null?e.push(o):e=[o])}}else if(i===ne.current){if(u=i.alternate,u===null)throw Error(f(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Si):e=[Si])}i=i.return}e!==null&&ju(a,e,t,l),a.flags|=262144}function $i(e){for(e=e.firstContext;e!==null;){if(!la(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ht(e){Bt=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return qc(Bt,e)}function Fi(e,a){return Bt===null&&Ht(e),qc(e,a)}function qc(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},wa===null){if(e===null)throw Error(f(308));wa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else wa=wa.next=a;return t}var Gm=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},Ym=A.unstable_scheduleCallback,Vm=A.unstable_NormalPriority,Te={$$typeof:Le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new Gm,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&Ym(Vm,function(){e.controller.abort()})}var Fl=null,Hu=0,dl=0,fl=null;function Xm(e,a){if(Fl===null){var t=Fl=[];Hu=0,dl=Go(),fl={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Hu++,a.then(Dc,Dc),a}function Dc(){if(--Hu===0&&Fl!==null){fl!==null&&(fl.status="fulfilled");var e=Fl;Fl=null,dl=0,fl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Zm(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var i=0;i<t.length;i++)(0,t[i])(a)},function(i){for(l.status="rejected",l.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),l}var Mc=b.S;b.S=function(e,a){fd=ea(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Xm(e,a),Mc!==null&&Mc(e,a)};var Qt=r(null);function Qu(){var e=Qt.current;return e!==null?e:pe.pooledCache}function Wi(e,a){a===null?M(Qt,Qt.current):M(Qt,a.pool)}function _c(){var e=Qu();return e===null?null:{parent:Te._currentValue,pool:e}}var ml=Error(f(460)),Lu=Error(f(474)),ki=Error(f(542)),Pi={then:function(){}};function xc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rc(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Ba,Ba),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Nc(e),e;default:if(typeof a.status=="string")a.then(Ba,Ba);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(f(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=l}},function(l){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Nc(e),e}throw wt=a,ml}}function Lt(e){try{var a=e._init;return a(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(wt=t,ml):t}}var wt=null;function Uc(){if(wt===null)throw Error(f(459));var e=wt;return wt=null,e}function Nc(e){if(e===ml||e===ki)throw Error(f(483))}var vl=null,Wl=0;function Ii(e){var a=Wl;return Wl+=1,vl===null&&(vl=[]),Rc(vl,e,a)}function kl(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function en(e,a){throw a.$$typeof===G?Error(f(525)):(e=Object.prototype.toString.call(a),Error(f(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function jc(e){function a(d,c){if(e){var m=d.deletions;m===null?(d.deletions=[c],d.flags|=16):m.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)a(d,c),c=c.sibling;return null}function l(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(d,c){return d=Qa(d,c),d.index=0,d.sibling=null,d}function n(d,c,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<c?(d.flags|=67108866,c):m):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function u(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function o(d,c,m,S){return c===null||c.tag!==6?(c=qu(m,d.mode,S),c.return=d,c):(c=i(c,m),c.return=d,c)}function s(d,c,m,S){var H=m.type;return H===he?g(d,c,m.props.children,S,m.key):c!==null&&(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ze&&Lt(H)===c.type)?(c=i(c,m.props),kl(c,m),c.return=d,c):(c=Ki(m.type,m.key,m.props,null,d.mode,S),kl(c,m),c.return=d,c)}function v(d,c,m,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Du(m,d.mode,S),c.return=d,c):(c=i(c,m.children||[]),c.return=d,c)}function g(d,c,m,S,H){return c===null||c.tag!==7?(c=Nt(m,d.mode,S,H),c.return=d,c):(c=i(c,m),c.return=d,c)}function E(d,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=qu(""+c,d.mode,m),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ce:return m=Ki(c.type,c.key,c.props,null,d.mode,m),kl(m,c),m.return=d,m;case ae:return c=Du(c,d.mode,m),c.return=d,c;case Ze:return c=Lt(c),E(d,c,m)}if(Ea(c)||Ke(c))return c=Nt(c,d.mode,m,null),c.return=d,c;if(typeof c.then=="function")return E(d,Ii(c),m);if(c.$$typeof===Le)return E(d,Fi(d,c),m);en(d,c)}return null}function p(d,c,m,S){var H=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return H!==null?null:o(d,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ce:return m.key===H?s(d,c,m,S):null;case ae:return m.key===H?v(d,c,m,S):null;case Ze:return m=Lt(m),p(d,c,m,S)}if(Ea(m)||Ke(m))return H!==null?null:g(d,c,m,S,null);if(typeof m.then=="function")return p(d,c,Ii(m),S);if(m.$$typeof===Le)return p(d,c,Fi(d,m),S);en(d,m)}return null}function h(d,c,m,S,H){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return d=d.get(m)||null,o(c,d,""+S,H);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ce:return d=d.get(S.key===null?m:S.key)||null,s(c,d,S,H);case ae:return d=d.get(S.key===null?m:S.key)||null,v(c,d,S,H);case Ze:return S=Lt(S),h(d,c,m,S,H)}if(Ea(S)||Ke(S))return d=d.get(m)||null,g(c,d,S,H,null);if(typeof S.then=="function")return h(d,c,m,Ii(S),H);if(S.$$typeof===Le)return h(d,c,m,Fi(c,S),H);en(c,S)}return null}function U(d,c,m,S){for(var H=null,te=null,B=c,K=c=0,P=null;B!==null&&K<m.length;K++){B.index>K?(P=B,B=null):P=B.sibling;var le=p(d,B,m[K],S);if(le===null){B===null&&(B=P);break}e&&B&&le.alternate===null&&a(d,B),c=n(le,c,K),te===null?H=le:te.sibling=le,te=le,B=P}if(K===m.length)return t(d,B),ee&&La(d,K),H;if(B===null){for(;K<m.length;K++)B=E(d,m[K],S),B!==null&&(c=n(B,c,K),te===null?H=B:te.sibling=B,te=B);return ee&&La(d,K),H}for(B=l(B);K<m.length;K++)P=h(B,d,K,m[K],S),P!==null&&(e&&P.alternate!==null&&B.delete(P.key===null?K:P.key),c=n(P,c,K),te===null?H=P:te.sibling=P,te=P);return e&&B.forEach(function(Ct){return a(d,Ct)}),ee&&La(d,K),H}function Q(d,c,m,S){if(m==null)throw Error(f(151));for(var H=null,te=null,B=c,K=c=0,P=null,le=m.next();B!==null&&!le.done;K++,le=m.next()){B.index>K?(P=B,B=null):P=B.sibling;var Ct=p(d,B,le.value,S);if(Ct===null){B===null&&(B=P);break}e&&B&&Ct.alternate===null&&a(d,B),c=n(Ct,c,K),te===null?H=Ct:te.sibling=Ct,te=Ct,B=P}if(le.done)return t(d,B),ee&&La(d,K),H;if(B===null){for(;!le.done;K++,le=m.next())le=E(d,le.value,S),le!==null&&(c=n(le,c,K),te===null?H=le:te.sibling=le,te=le);return ee&&La(d,K),H}for(B=l(B);!le.done;K++,le=m.next())le=h(B,d,K,le.value,S),le!==null&&(e&&le.alternate!==null&&B.delete(le.key===null?K:le.key),c=n(le,c,K),te===null?H=le:te.sibling=le,te=le);return e&&B.forEach(function(tp){return a(d,tp)}),ee&&La(d,K),H}function me(d,c,m,S){if(typeof m=="object"&&m!==null&&m.type===he&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ce:e:{for(var H=m.key;c!==null;){if(c.key===H){if(H=m.type,H===he){if(c.tag===7){t(d,c.sibling),S=i(c,m.props.children),S.return=d,d=S;break e}}else if(c.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Ze&&Lt(H)===c.type){t(d,c.sibling),S=i(c,m.props),kl(S,m),S.return=d,d=S;break e}t(d,c);break}else a(d,c);c=c.sibling}m.type===he?(S=Nt(m.props.children,d.mode,S,m.key),S.return=d,d=S):(S=Ki(m.type,m.key,m.props,null,d.mode,S),kl(S,m),S.return=d,d=S)}return u(d);case ae:e:{for(H=m.key;c!==null;){if(c.key===H)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){t(d,c.sibling),S=i(c,m.children||[]),S.return=d,d=S;break e}else{t(d,c);break}else a(d,c);c=c.sibling}S=Du(m,d.mode,S),S.return=d,d=S}return u(d);case Ze:return m=Lt(m),me(d,c,m,S)}if(Ea(m))return U(d,c,m,S);if(Ke(m)){if(H=Ke(m),typeof H!="function")throw Error(f(150));return m=H.call(m),Q(d,c,m,S)}if(typeof m.then=="function")return me(d,c,Ii(m),S);if(m.$$typeof===Le)return me(d,c,Fi(d,m),S);en(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(t(d,c.sibling),S=i(c,m),S.return=d,d=S):(t(d,c),S=qu(m,d.mode,S),S.return=d,d=S),u(d)):t(d,c)}return function(d,c,m,S){try{Wl=0;var H=me(d,c,m,S);return vl=null,H}catch(B){if(B===ml||B===ki)throw B;var te=ia(29,B,null,d.mode);return te.lanes=S,te.return=d,te}}}var Gt=jc(!0),Bc=jc(!1),ot=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function st(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ct(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ie&2)!==0){var i=l.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),l.pending=a,a=Zi(e),bc(e,null,t),a}return Xi(e,l,a,t),Zi(e)}function Pl(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,qs(e,t)}}function Yu(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var i=null,n=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,t=t.next}while(t!==null);n===null?i=n=a:n=n.next=a}else i=n=a;t={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var Vu=!1;function Il(){if(Vu){var e=fl;if(e!==null)throw e}}function ei(e,a,t,l){Vu=!1;var i=e.updateQueue;ot=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var s=o,v=s.next;s.next=null,u===null?n=v:u.next=v,u=s;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==u&&(o===null?g.firstBaseUpdate=v:o.next=v,g.lastBaseUpdate=s))}if(n!==null){var E=i.baseState;u=0,g=v=s=null,o=n;do{var p=o.lane&-536870913,h=p!==o.lane;if(h?(k&p)===p:(l&p)===p){p!==0&&p===dl&&(Vu=!0),g!==null&&(g=g.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var U=e,Q=o;p=a;var me=t;switch(Q.tag){case 1:if(U=Q.payload,typeof U=="function"){E=U.call(me,E,p);break e}E=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Q.payload,p=typeof U=="function"?U.call(me,E,p):U,p==null)break e;E=C({},E,p);break e;case 2:ot=!0}}p=o.callback,p!==null&&(e.flags|=64,h&&(e.flags|=8192),h=i.callbacks,h===null?i.callbacks=[p]:h.push(p))}else h={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(v=g=h,s=E):g=g.next=h,u|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);g===null&&(s=E),i.baseState=s,i.firstBaseUpdate=v,i.lastBaseUpdate=g,n===null&&(i.shared.lanes=0),vt|=u,e.lanes=u,e.memoizedState=E}}function Hc(e,a){if(typeof e!="function")throw Error(f(191,e));e.call(a)}function Qc(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Hc(t[e],a)}var pl=r(null),an=r(0);function Lc(e,a){e=Wa,M(an,e),M(pl,a),Wa=e|a.baseLanes}function Xu(){M(an,Wa),M(pl,pl.current)}function Zu(){Wa=an.current,O(pl),O(an)}var na=r(null),ba=null;function rt(e){var a=e.alternate;M(Ce,Ce.current&1),M(na,e),ba===null&&(a===null||pl.current!==null||a.memoizedState!==null)&&(ba=e)}function Ku(e){M(Ce,Ce.current),M(na,e),ba===null&&(ba=e)}function wc(e){e.tag===22?(M(Ce,Ce.current),M(na,e),ba===null&&(ba=e)):dt()}function dt(){M(Ce,Ce.current),M(na,na.current)}function ua(e){O(na),ba===e&&(ba=null),O(Ce)}var Ce=r(0);function tn(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Io(t)||es(t)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ya=0,Z=null,de=null,qe=null,ln=!1,hl=!1,Yt=!1,nn=0,ai=0,gl=null,Km=0;function Se(){throw Error(f(321))}function Ju(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!la(e[t],a[t]))return!1;return!0}function $u(e,a,t,l,i,n){return Ya=n,Z=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,b.H=e===null||e.memoizedState===null?Or:co,Yt=!1,n=t(l,i),Yt=!1,hl&&(n=Yc(a,t,l,i)),Gc(e),n}function Gc(e){b.H=ii;var a=de!==null&&de.next!==null;if(Ya=0,qe=de=Z=null,ln=!1,ai=0,gl=null,a)throw Error(f(300));e===null||De||(e=e.dependencies,e!==null&&$i(e)&&(De=!0))}function Yc(e,a,t,l){Z=e;var i=0;do{if(hl&&(gl=null),ai=0,hl=!1,25<=i)throw Error(f(301));if(i+=1,qe=de=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}b.H=Cr,n=a(t,l)}while(hl);return n}function Jm(){var e=b.H,a=e.useState()[0];return a=typeof a.then=="function"?ti(a):a,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Z.flags|=1024),a}function Fu(){var e=nn!==0;return nn=0,e}function Wu(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function ku(e){if(ln){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ln=!1}Ya=0,qe=de=Z=null,hl=!1,ai=nn=0,gl=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Z.memoizedState=qe=e:qe=qe.next=e,qe}function ze(){if(de===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var a=qe===null?Z.memoizedState:qe.next;if(a!==null)qe=a,de=e;else{if(e===null)throw Z.alternate===null?Error(f(467)):Error(f(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},qe===null?Z.memoizedState=qe=e:qe=qe.next=e}return qe}function un(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ti(e){var a=ai;return ai+=1,gl===null&&(gl=[]),e=Rc(gl,e,a),a=Z,(qe===null?a.memoizedState:qe.next)===null&&(a=a.alternate,b.H=a===null||a.memoizedState===null?Or:co),e}function on(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ti(e);if(e.$$typeof===Le)return Be(e)}throw Error(f(438,String(e)))}function Pu(e){var a=null,t=Z.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=Z.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=un(),Z.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=Kt;return a.index++,t}function Va(e,a){return typeof a=="function"?a(e):a}function sn(e){var a=ze();return Iu(a,de,e)}function Iu(e,a,t){var l=e.queue;if(l===null)throw Error(f(311));l.lastRenderedReducer=t;var i=e.baseQueue,n=l.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}a.baseQueue=i=n,l.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{a=i.next;var o=u=null,s=null,v=a,g=!1;do{var E=v.lane&-536870913;if(E!==v.lane?(k&E)===E:(Ya&E)===E){var p=v.revertLane;if(p===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),E===dl&&(g=!0);else if((Ya&p)===p){v=v.next,p===dl&&(g=!0);continue}else E={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},s===null?(o=s=E,u=n):s=s.next=E,Z.lanes|=p,vt|=p;E=v.action,Yt&&t(n,E),n=v.hasEagerState?v.eagerState:t(n,E)}else p={lane:E,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},s===null?(o=s=p,u=n):s=s.next=p,Z.lanes|=E,vt|=E;v=v.next}while(v!==null&&v!==a);if(s===null?u=n:s.next=o,!la(n,e.memoizedState)&&(De=!0,g&&(t=fl,t!==null)))throw t;e.memoizedState=n,e.baseState=u,e.baseQueue=s,l.lastRenderedState=n}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function eo(e){var a=ze(),t=a.queue;if(t===null)throw Error(f(311));t.lastRenderedReducer=e;var l=t.dispatch,i=t.pending,n=a.memoizedState;if(i!==null){t.pending=null;var u=i=i.next;do n=e(n,u.action),u=u.next;while(u!==i);la(n,a.memoizedState)||(De=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),t.lastRenderedState=n}return[n,l]}function Vc(e,a,t){var l=Z,i=ze(),n=ee;if(n){if(t===void 0)throw Error(f(407));t=t()}else t=a();var u=!la((de||i).memoizedState,t);if(u&&(i.memoizedState=t,De=!0),i=i.queue,lo(Kc.bind(null,l,i,e),[e]),i.getSnapshot!==a||u||qe!==null&&qe.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},Zc.bind(null,l,i,t,a),null),pe===null)throw Error(f(349));n||(Ya&127)!==0||Xc(l,a,t)}return t}function Xc(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=Z.updateQueue,a===null?(a=un(),Z.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Zc(e,a,t,l){a.value=t,a.getSnapshot=l,Jc(a)&&$c(e)}function Kc(e,a,t){return t(function(){Jc(a)&&$c(e)})}function Jc(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!la(e,t)}catch{return!0}}function $c(e){var a=Ut(e,2);a!==null&&Ie(a,e,2)}function ao(e){var a=Ve();if(typeof e=="function"){var t=e;if(e=t(),Yt){et(!0);try{t()}finally{et(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:e},a}function Fc(e,a,t,l){return e.baseState=t,Iu(e,de,typeof l=="function"?l:Va)}function $m(e,a,t,l,i){if(dn(e))throw Error(f(485));if(e=a.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};b.T!==null?t(!0):n.isTransition=!1,l(n),t=a.pending,t===null?(n.next=a.pending=n,Wc(a,n)):(n.next=t.next,a.pending=t.next=n)}}function Wc(e,a){var t=a.action,l=a.payload,i=e.state;if(a.isTransition){var n=b.T,u={};b.T=u;try{var o=t(i,l),s=b.S;s!==null&&s(u,o),kc(e,a,o)}catch(v){to(e,a,v)}finally{n!==null&&u.types!==null&&(n.types=u.types),b.T=n}}else try{n=t(i,l),kc(e,a,n)}catch(v){to(e,a,v)}}function kc(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Pc(e,a,l)},function(l){return to(e,a,l)}):Pc(e,a,t)}function Pc(e,a,t){a.status="fulfilled",a.value=t,Ic(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Wc(e,t)))}function to(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Ic(a),a=a.next;while(a!==l)}e.action=null}function Ic(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function er(e,a){return a}function ar(e,a){if(ee){var t=pe.formState;if(t!==null){e:{var l=Z;if(ee){if(ge){a:{for(var i=ge,n=ya;i.nodeType!==8;){if(!n){i=null;break a}if(i=Sa(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){ge=Sa(i.nextSibling),l=i.data==="F!";break e}}nt(l)}l=!1}l&&(a=t[0])}}return t=Ve(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:a},t.queue=l,t=Sr.bind(null,Z,l),l.dispatch=t,l=ao(!1),n=so.bind(null,Z,!1,l.queue),l=Ve(),i={state:a,dispatch:null,action:e,pending:null},l.queue=i,t=$m.bind(null,Z,i,n,t),i.dispatch=t,l.memoizedState=e,[a,t,!1]}function tr(e){var a=ze();return lr(a,de,e)}function lr(e,a,t){if(a=Iu(e,a,er)[0],e=sn(Va)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=ti(a)}catch(u){throw u===ml?ki:u}else l=a;a=ze();var i=a.queue,n=i.dispatch;return t!==a.memoizedState&&(Z.flags|=2048,yl(9,{destroy:void 0},Fm.bind(null,i,t),null)),[l,n,e]}function Fm(e,a){e.action=a}function ir(e){var a=ze(),t=de;if(t!==null)return lr(a,t,e);ze(),a=a.memoizedState,t=ze();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function yl(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=Z.updateQueue,a===null&&(a=un(),Z.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function nr(){return ze().memoizedState}function cn(e,a,t,l){var i=Ve();Z.flags|=e,i.memoizedState=yl(1|a,{destroy:void 0},t,l===void 0?null:l)}function rn(e,a,t,l){var i=ze();l=l===void 0?null:l;var n=i.memoizedState.inst;de!==null&&l!==null&&Ju(l,de.memoizedState.deps)?i.memoizedState=yl(a,n,t,l):(Z.flags|=e,i.memoizedState=yl(1|a,n,t,l))}function ur(e,a){cn(8390656,8,e,a)}function lo(e,a){rn(2048,8,e,a)}function Wm(e){Z.flags|=4;var a=Z.updateQueue;if(a===null)a=un(),Z.updateQueue=a,a.events=[e];else{var t=a.events;t===null?a.events=[e]:t.push(e)}}function or(e){var a=ze().memoizedState;return Wm({ref:a,nextImpl:e}),function(){if((ie&2)!==0)throw Error(f(440));return a.impl.apply(void 0,arguments)}}function sr(e,a){return rn(4,2,e,a)}function cr(e,a){return rn(4,4,e,a)}function rr(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function dr(e,a,t){t=t!=null?t.concat([e]):null,rn(4,4,rr.bind(null,a,e),t)}function io(){}function fr(e,a){var t=ze();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Ju(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function mr(e,a){var t=ze();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Ju(a,l[1]))return l[0];if(l=e(),Yt){et(!0);try{e()}finally{et(!1)}}return t.memoizedState=[l,a],l}function no(e,a,t){return t===void 0||(Ya&1073741824)!==0&&(k&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=vd(),Z.lanes|=e,vt|=e,t)}function vr(e,a,t,l){return la(t,a)?t:pl.current!==null?(e=no(e,t,l),la(e,a)||(De=!0),e):(Ya&42)===0||(Ya&1073741824)!==0&&(k&261930)===0?(De=!0,e.memoizedState=t):(e=vd(),Z.lanes|=e,vt|=e,a)}function pr(e,a,t,l,i){var n=D.p;D.p=n!==0&&8>n?n:8;var u=b.T,o={};b.T=o,so(e,!1,a,t);try{var s=i(),v=b.S;if(v!==null&&v(o,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=Zm(s,l);li(e,a,g,ca(e))}else li(e,a,l,ca(e))}catch(E){li(e,a,{then:function(){},status:"rejected",reason:E},ca())}finally{D.p=n,u!==null&&o.types!==null&&(u.types=o.types),b.T=u}}function km(){}function uo(e,a,t,l){if(e.tag!==5)throw Error(f(476));var i=hr(e).queue;pr(e,i,a,w,t===null?km:function(){return gr(e),t(l)})}function hr(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:w},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function gr(e){var a=hr(e);a.next===null&&(a=e.alternate.memoizedState),li(e,a.next.queue,{},ca())}function oo(){return Be(Si)}function yr(){return ze().memoizedState}function br(){return ze().memoizedState}function Pm(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ca();e=st(t);var l=ct(a,e,t);l!==null&&(Ie(l,a,t),Pl(l,a,t)),a={cache:Bu()},e.payload=a;return}a=a.return}}function Im(e,a,t){var l=ca();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},dn(e)?Ar(a,t):(t=zu(e,a,t,l),t!==null&&(Ie(t,e,l),Er(t,a,l)))}function Sr(e,a,t){var l=ca();li(e,a,t,l)}function li(e,a,t,l){var i={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(dn(e))Ar(a,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var u=a.lastRenderedState,o=n(u,t);if(i.hasEagerState=!0,i.eagerState=o,la(o,u))return Xi(e,a,i,0),pe===null&&Vi(),!1}catch{}if(t=zu(e,a,i,l),t!==null)return Ie(t,e,l),Er(t,a,l),!0}return!1}function so(e,a,t,l){if(l={lane:2,revertLane:Go(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},dn(e)){if(a)throw Error(f(479))}else a=zu(e,t,l,2),a!==null&&Ie(a,e,2)}function dn(e){var a=e.alternate;return e===Z||a!==null&&a===Z}function Ar(e,a){hl=ln=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function Er(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,qs(e,t)}}var ii={readContext:Be,use:on,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};ii.useEffectEvent=Se;var Or={readContext:Be,use:on,useCallback:function(e,a){return Ve().memoizedState=[e,a===void 0?null:a],e},useContext:Be,useEffect:ur,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,cn(4194308,4,rr.bind(null,a,e),t)},useLayoutEffect:function(e,a){return cn(4194308,4,e,a)},useInsertionEffect:function(e,a){cn(4,2,e,a)},useMemo:function(e,a){var t=Ve();a=a===void 0?null:a;var l=e();if(Yt){et(!0);try{e()}finally{et(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=Ve();if(t!==void 0){var i=t(a);if(Yt){et(!0);try{t(a)}finally{et(!1)}}}else i=a;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Im.bind(null,Z,e),[l.memoizedState,e]},useRef:function(e){var a=Ve();return e={current:e},a.memoizedState=e},useState:function(e){e=ao(e);var a=e.queue,t=Sr.bind(null,Z,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:io,useDeferredValue:function(e,a){var t=Ve();return no(t,e,a)},useTransition:function(){var e=ao(!1);return e=pr.bind(null,Z,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=Z,i=Ve();if(ee){if(t===void 0)throw Error(f(407));t=t()}else{if(t=a(),pe===null)throw Error(f(349));(k&127)!==0||Xc(l,a,t)}i.memoizedState=t;var n={value:t,getSnapshot:a};return i.queue=n,ur(Kc.bind(null,l,n,e),[e]),l.flags|=2048,yl(9,{destroy:void 0},Zc.bind(null,l,n,t,a),null),t},useId:function(){var e=Ve(),a=pe.identifierPrefix;if(ee){var t=xa,l=_a;t=(l&~(1<<32-ta(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=nn++,0<t&&(a+="H"+t.toString(32)),a+="_"}else t=Km++,a="_"+a+"r_"+t.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:oo,useFormState:ar,useActionState:ar,useOptimistic:function(e){var a=Ve();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=so.bind(null,Z,!0,t),t.dispatch=a,[e,a]},useMemoCache:Pu,useCacheRefresh:function(){return Ve().memoizedState=Pm.bind(null,Z)},useEffectEvent:function(e){var a=Ve(),t={impl:e};return a.memoizedState=t,function(){if((ie&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}},co={readContext:Be,use:on,useCallback:fr,useContext:Be,useEffect:lo,useImperativeHandle:dr,useInsertionEffect:sr,useLayoutEffect:cr,useMemo:mr,useReducer:sn,useRef:nr,useState:function(){return sn(Va)},useDebugValue:io,useDeferredValue:function(e,a){var t=ze();return vr(t,de.memoizedState,e,a)},useTransition:function(){var e=sn(Va)[0],a=ze().memoizedState;return[typeof e=="boolean"?e:ti(e),a]},useSyncExternalStore:Vc,useId:yr,useHostTransitionStatus:oo,useFormState:tr,useActionState:tr,useOptimistic:function(e,a){var t=ze();return Fc(t,de,e,a)},useMemoCache:Pu,useCacheRefresh:br};co.useEffectEvent=or;var Cr={readContext:Be,use:on,useCallback:fr,useContext:Be,useEffect:lo,useImperativeHandle:dr,useInsertionEffect:sr,useLayoutEffect:cr,useMemo:mr,useReducer:eo,useRef:nr,useState:function(){return eo(Va)},useDebugValue:io,useDeferredValue:function(e,a){var t=ze();return de===null?no(t,e,a):vr(t,de.memoizedState,e,a)},useTransition:function(){var e=eo(Va)[0],a=ze().memoizedState;return[typeof e=="boolean"?e:ti(e),a]},useSyncExternalStore:Vc,useId:yr,useHostTransitionStatus:oo,useFormState:ir,useActionState:ir,useOptimistic:function(e,a){var t=ze();return de!==null?Fc(t,de,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:br};Cr.useEffectEvent=or;function ro(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:C({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var fo={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=ca(),i=st(l);i.payload=a,t!=null&&(i.callback=t),a=ct(e,i,l),a!==null&&(Ie(a,e,l),Pl(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=ca(),i=st(l);i.tag=1,i.payload=a,t!=null&&(i.callback=t),a=ct(e,i,l),a!==null&&(Ie(a,e,l),Pl(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ca(),l=st(t);l.tag=2,a!=null&&(l.callback=a),a=ct(e,l,t),a!==null&&(Ie(a,e,t),Pl(a,e,t))}};function zr(e,a,t,l,i,n,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,u):a.prototype&&a.prototype.isPureReactComponent?!Xl(t,l)||!Xl(i,n):!0}function Tr(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&fo.enqueueReplaceState(a,a.state,null)}function Vt(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=C({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function qr(e){Yi(e)}function Dr(e){console.error(e)}function Mr(e){Yi(e)}function fn(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function _r(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function mo(e,a,t){return t=st(t),t.tag=3,t.payload={element:null},t.callback=function(){fn(e,a)},t}function xr(e){return e=st(e),e.tag=3,e}function Rr(e,a,t,l){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;e.payload=function(){return i(n)},e.callback=function(){_r(a,t,l)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){_r(a,t,l),typeof i!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function ev(e,a,t,l,i){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&rl(a,t,i,!0),t=na.current,t!==null){switch(t.tag){case 31:case 13:return ba===null?Cn():t.alternate===null&&Ae===0&&(Ae=3),t.flags&=-257,t.flags|=65536,t.lanes=i,l===Pi?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Qo(e,l,i)),!1;case 22:return t.flags|=65536,l===Pi?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Qo(e,l,i)),!1}throw Error(f(435,t.tag))}return Qo(e,l,i),Cn(),!1}if(ee)return a=na.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,l!==xu&&(e=Error(f(422),{cause:l}),Jl(pa(e,t)))):(l!==xu&&(a=Error(f(423),{cause:l}),Jl(pa(a,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=pa(l,t),i=mo(e.stateNode,l,i),Yu(e,i),Ae!==4&&(Ae=2)),!1;var n=Error(f(520),{cause:l});if(n=pa(n,t),fi===null?fi=[n]:fi.push(n),Ae!==4&&(Ae=2),a===null)return!0;l=pa(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=mo(t.stateNode,l,e),Yu(t,e),!1;case 1:if(a=t.type,n=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(pt===null||!pt.has(n))))return t.flags|=65536,i&=-i,t.lanes|=i,i=xr(i),Rr(i,e,t,l),Yu(t,i),!1}t=t.return}while(t!==null);return!1}var vo=Error(f(461)),De=!1;function He(e,a,t,l){a.child=e===null?Bc(a,null,t,l):Gt(a,e.child,t,l)}function Ur(e,a,t,l,i){t=t.render;var n=a.ref;if("ref"in l){var u={};for(var o in l)o!=="ref"&&(u[o]=l[o])}else u=l;return Ht(a),l=$u(e,a,t,u,n,i),o=Fu(),e!==null&&!De?(Wu(e,a,i),Xa(e,a,i)):(ee&&o&&Mu(a),a.flags|=1,He(e,a,l,i),a.child)}function Nr(e,a,t,l,i){if(e===null){var n=t.type;return typeof n=="function"&&!Tu(n)&&n.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=n,jr(e,a,n,l,i)):(e=Ki(t.type,null,l,a,a.mode,i),e.ref=a.ref,e.return=a,a.child=e)}if(n=e.child,!Eo(e,i)){var u=n.memoizedProps;if(t=t.compare,t=t!==null?t:Xl,t(u,l)&&e.ref===a.ref)return Xa(e,a,i)}return a.flags|=1,e=Qa(n,l),e.ref=a.ref,e.return=a,a.child=e}function jr(e,a,t,l,i){if(e!==null){var n=e.memoizedProps;if(Xl(n,l)&&e.ref===a.ref)if(De=!1,a.pendingProps=l=n,Eo(e,i))(e.flags&131072)!==0&&(De=!0);else return a.lanes=e.lanes,Xa(e,a,i)}return po(e,a,t,l,i)}function Br(e,a,t,l){var i=l.children,n=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|t:t,e!==null){for(l=a.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,a.child=null;return Hr(e,a,n,t,l)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wi(a,n!==null?n.cachePool:null),n!==null?Lc(a,n):Xu(),wc(a);else return l=a.lanes=536870912,Hr(e,a,n!==null?n.baseLanes|t:t,t,l)}else n!==null?(Wi(a,n.cachePool),Lc(a,n),dt(),a.memoizedState=null):(e!==null&&Wi(a,null),Xu(),dt());return He(e,a,i,t),a.child}function ni(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Hr(e,a,t,l,i){var n=Qu();return n=n===null?null:{parent:Te._currentValue,pool:n},a.memoizedState={baseLanes:t,cachePool:n},e!==null&&Wi(a,null),Xu(),wc(a),e!==null&&rl(e,a,l,!0),a.childLanes=i,null}function mn(e,a){return a=pn({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Qr(e,a,t){return Gt(a,e.child,null,t),e=mn(a,a.pendingProps),e.flags|=2,ua(a),a.memoizedState=null,e}function av(e,a,t){var l=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(ee){if(l.mode==="hidden")return e=mn(a,l),a.lanes=536870912,ni(null,e);if(Ku(a),(e=ge)?(e=Wd(e,ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:lt!==null?{id:_a,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},t=Ac(e),t.return=a,a.child=t,je=a,ge=null)):e=null,e===null)throw nt(a);return a.lanes=536870912,null}return mn(a,l)}var n=e.memoizedState;if(n!==null){var u=n.dehydrated;if(Ku(a),i)if(a.flags&256)a.flags&=-257,a=Qr(e,a,t);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(f(558));else if(De||rl(e,a,t,!1),i=(t&e.childLanes)!==0,De||i){if(l=pe,l!==null&&(u=Ds(l,t),u!==0&&u!==n.retryLane))throw n.retryLane=u,Ut(e,u),Ie(l,e,u),vo;Cn(),a=Qr(e,a,t)}else e=n.treeContext,ge=Sa(u.nextSibling),je=a,ee=!0,it=null,ya=!1,e!==null&&Cc(a,e),a=mn(a,l),a.flags|=4096;return a}return e=Qa(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function vn(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(f(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function po(e,a,t,l,i){return Ht(a),t=$u(e,a,t,l,void 0,i),l=Fu(),e!==null&&!De?(Wu(e,a,i),Xa(e,a,i)):(ee&&l&&Mu(a),a.flags|=1,He(e,a,t,i),a.child)}function Lr(e,a,t,l,i,n){return Ht(a),a.updateQueue=null,t=Yc(a,l,t,i),Gc(e),l=Fu(),e!==null&&!De?(Wu(e,a,n),Xa(e,a,n)):(ee&&l&&Mu(a),a.flags|=1,He(e,a,t,n),a.child)}function wr(e,a,t,l,i){if(Ht(a),a.stateNode===null){var n=ul,u=t.contextType;typeof u=="object"&&u!==null&&(n=Be(u)),n=new t(l,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=fo,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=l,n.state=a.memoizedState,n.refs={},wu(a),u=t.contextType,n.context=typeof u=="object"&&u!==null?Be(u):ul,n.state=a.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ro(a,t,u,l),n.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&fo.enqueueReplaceState(n,n.state,null),ei(a,l,n,i),Il(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){n=a.stateNode;var o=a.memoizedProps,s=Vt(t,o);n.props=s;var v=n.context,g=t.contextType;u=ul,typeof g=="object"&&g!==null&&(u=Be(g));var E=t.getDerivedStateFromProps;g=typeof E=="function"||typeof n.getSnapshotBeforeUpdate=="function",o=a.pendingProps!==o,g||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o||v!==u)&&Tr(a,n,l,u),ot=!1;var p=a.memoizedState;n.state=p,ei(a,l,n,i),Il(),v=a.memoizedState,o||p!==v||ot?(typeof E=="function"&&(ro(a,t,E,l),v=a.memoizedState),(s=ot||zr(a,t,s,l,p,v,u))?(g||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=v),n.props=l,n.state=v,n.context=u,l=s):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{n=a.stateNode,Gu(e,a),u=a.memoizedProps,g=Vt(t,u),n.props=g,E=a.pendingProps,p=n.context,v=t.contextType,s=ul,typeof v=="object"&&v!==null&&(s=Be(v)),o=t.getDerivedStateFromProps,(v=typeof o=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==E||p!==s)&&Tr(a,n,l,s),ot=!1,p=a.memoizedState,n.state=p,ei(a,l,n,i),Il();var h=a.memoizedState;u!==E||p!==h||ot||e!==null&&e.dependencies!==null&&$i(e.dependencies)?(typeof o=="function"&&(ro(a,t,o,l),h=a.memoizedState),(g=ot||zr(a,t,g,l,p,h,s)||e!==null&&e.dependencies!==null&&$i(e.dependencies))?(v||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,h,s),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,h,s)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=h),n.props=l,n.state=h,n.context=s,l=g):(typeof n.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(a.flags|=1024),l=!1)}return n=l,vn(e,a),l=(a.flags&128)!==0,n||l?(n=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,e!==null&&l?(a.child=Gt(a,e.child,null,i),a.child=Gt(a,null,t,i)):He(e,a,t,i),a.memoizedState=n.state,e=a.child):e=Xa(e,a,i),e}function Gr(e,a,t,l){return jt(),a.flags|=256,He(e,a,t,l),a.child}var ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function go(e){return{baseLanes:e,cachePool:_c()}}function yo(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=sa),e}function Yr(e,a,t){var l=a.pendingProps,i=!1,n=(a.flags&128)!==0,u;if((u=n)||(u=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),u&&(i=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(ee){if(i?rt(a):dt(),(e=ge)?(e=Wd(e,ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:lt!==null?{id:_a,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},t=Ac(e),t.return=a,a.child=t,je=a,ge=null)):e=null,e===null)throw nt(a);return es(e)?a.lanes=32:a.lanes=536870912,null}var o=l.children;return l=l.fallback,i?(dt(),i=a.mode,o=pn({mode:"hidden",children:o},i),l=Nt(l,i,t,null),o.return=a,l.return=a,o.sibling=l,a.child=o,l=a.child,l.memoizedState=go(t),l.childLanes=yo(e,u,t),a.memoizedState=ho,ni(null,l)):(rt(a),bo(a,o))}var s=e.memoizedState;if(s!==null&&(o=s.dehydrated,o!==null)){if(n)a.flags&256?(rt(a),a.flags&=-257,a=So(e,a,t)):a.memoizedState!==null?(dt(),a.child=e.child,a.flags|=128,a=null):(dt(),o=l.fallback,i=a.mode,l=pn({mode:"visible",children:l.children},i),o=Nt(o,i,t,null),o.flags|=2,l.return=a,o.return=a,l.sibling=o,a.child=l,Gt(a,e.child,null,t),l=a.child,l.memoizedState=go(t),l.childLanes=yo(e,u,t),a.memoizedState=ho,a=ni(null,l));else if(rt(a),es(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var v=u.dgst;u=v,l=Error(f(419)),l.stack="",l.digest=u,Jl({value:l,source:null,stack:null}),a=So(e,a,t)}else if(De||rl(e,a,t,!1),u=(t&e.childLanes)!==0,De||u){if(u=pe,u!==null&&(l=Ds(u,t),l!==0&&l!==s.retryLane))throw s.retryLane=l,Ut(e,l),Ie(u,e,l),vo;Io(o)||Cn(),a=So(e,a,t)}else Io(o)?(a.flags|=192,a.child=e.child,a=null):(e=s.treeContext,ge=Sa(o.nextSibling),je=a,ee=!0,it=null,ya=!1,e!==null&&Cc(a,e),a=bo(a,l.children),a.flags|=4096);return a}return i?(dt(),o=l.fallback,i=a.mode,s=e.child,v=s.sibling,l=Qa(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,v!==null?o=Qa(v,o):(o=Nt(o,i,t,null),o.flags|=2),o.return=a,l.return=a,l.sibling=o,a.child=l,ni(null,l),l=a.child,o=e.child.memoizedState,o===null?o=go(t):(i=o.cachePool,i!==null?(s=Te._currentValue,i=i.parent!==s?{parent:s,pool:s}:i):i=_c(),o={baseLanes:o.baseLanes|t,cachePool:i}),l.memoizedState=o,l.childLanes=yo(e,u,t),a.memoizedState=ho,ni(e.child,l)):(rt(a),t=e.child,e=t.sibling,t=Qa(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=t,a.memoizedState=null,t)}function bo(e,a){return a=pn({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function pn(e,a){return e=ia(22,e,null,a),e.lanes=0,e}function So(e,a,t){return Gt(a,e.child,null,t),e=bo(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Vr(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),Nu(e.return,a,t)}function Ao(e,a,t,l,i,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:i,treeForkCount:n}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=t,u.tailMode=i,u.treeForkCount=n)}function Xr(e,a,t){var l=a.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var u=Ce.current,o=(u&2)!==0;if(o?(u=u&1|2,a.flags|=128):u&=1,M(Ce,u),He(e,a,l,t),l=ee?Kl:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vr(e,t,a);else if(e.tag===19)Vr(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=a.child,i=null;t!==null;)e=t.alternate,e!==null&&tn(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=a.child,a.child=null):(i=t.sibling,t.sibling=null),Ao(a,!1,i,t,n,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=a.child,a.child=null;i!==null;){if(e=i.alternate,e!==null&&tn(e)===null){a.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ao(a,!0,t,null,n,l);break;case"together":Ao(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Xa(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),vt|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(rl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(f(153));if(a.child!==null){for(e=a.child,t=Qa(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Qa(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function Eo(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&$i(e)))}function tv(e,a,t){switch(a.tag){case 3:Ye(a,a.stateNode.containerInfo),ut(a,Te,e.memoizedState.cache),jt();break;case 27:case 5:xl(a);break;case 4:Ye(a,a.stateNode.containerInfo);break;case 10:ut(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ku(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(rt(a),a.flags|=128,null):(t&a.child.childLanes)!==0?Yr(e,a,t):(rt(a),e=Xa(e,a,t),e!==null?e.sibling:null);rt(a);break;case 19:var i=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(rl(e,a,t,!1),l=(t&a.childLanes)!==0),i){if(l)return Xr(e,a,t);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(Ce,Ce.current),l)break;return null;case 22:return a.lanes=0,Br(e,a,t,a.pendingProps);case 24:ut(a,Te,e.memoizedState.cache)}return Xa(e,a,t)}function Zr(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)De=!0;else{if(!Eo(e,t)&&(a.flags&128)===0)return De=!1,tv(e,a,t);De=(e.flags&131072)!==0}else De=!1,ee&&(a.flags&1048576)!==0&&Oc(a,Kl,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=Lt(a.elementType),a.type=e,typeof e=="function")Tu(e)?(l=Vt(e,l),a.tag=1,a=wr(null,a,e,l,t)):(a.tag=0,a=po(null,a,e,l,t));else{if(e!=null){var i=e.$$typeof;if(i===da){a.tag=11,a=Ur(null,a,e,l,t);break e}else if(i===I){a.tag=14,a=Nr(null,a,e,l,t);break e}}throw a=Na(e)||e,Error(f(306,a,""))}}return a;case 0:return po(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,i=Vt(l,a.pendingProps),wr(e,a,l,i,t);case 3:e:{if(Ye(a,a.stateNode.containerInfo),e===null)throw Error(f(387));l=a.pendingProps;var n=a.memoizedState;i=n.element,Gu(e,a),ei(a,l,null,t);var u=a.memoizedState;if(l=u.cache,ut(a,Te,l),l!==n.cache&&ju(a,[Te],t,!0),Il(),l=u.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=Gr(e,a,l,t);break e}else if(l!==i){i=pa(Error(f(424)),a),Jl(i),a=Gr(e,a,l,t);break e}else for(e=a.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ge=Sa(e.firstChild),je=a,ee=!0,it=null,ya=!0,t=Bc(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(jt(),l===i){a=Xa(e,a,t);break e}He(e,a,l,t)}a=a.child}return a;case 26:return vn(e,a),e===null?(t=tf(a.type,null,a.pendingProps,null))?a.memoizedState=t:ee||(t=a.type,e=a.pendingProps,l=xn($.current).createElement(t),l[Ne]=a,l[Je]=e,Qe(l,t,e),xe(l),a.stateNode=l):a.memoizedState=tf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return xl(a),e===null&&ee&&(l=a.stateNode=Id(a.type,a.pendingProps,$.current),je=a,ya=!0,i=ge,bt(a.type)?(as=i,ge=Sa(l.firstChild)):ge=i),He(e,a,a.pendingProps.children,t),vn(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&ee&&((i=l=ge)&&(l=Rv(l,a.type,a.pendingProps,ya),l!==null?(a.stateNode=l,je=a,ge=Sa(l.firstChild),ya=!1,i=!0):i=!1),i||nt(a)),xl(a),i=a.type,n=a.pendingProps,u=e!==null?e.memoizedProps:null,l=n.children,Wo(i,n)?l=null:u!==null&&Wo(i,u)&&(a.flags|=32),a.memoizedState!==null&&(i=$u(e,a,Jm,null,null,t),Si._currentValue=i),vn(e,a),He(e,a,l,t),a.child;case 6:return e===null&&ee&&((e=t=ge)&&(t=Uv(t,a.pendingProps,ya),t!==null?(a.stateNode=t,je=a,ge=null,e=!0):e=!1),e||nt(a)),null;case 13:return Yr(e,a,t);case 4:return Ye(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Gt(a,null,l,t):He(e,a,l,t),a.child;case 11:return Ur(e,a,a.type,a.pendingProps,t);case 7:return He(e,a,a.pendingProps,t),a.child;case 8:return He(e,a,a.pendingProps.children,t),a.child;case 12:return He(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,ut(a,a.type,l.value),He(e,a,l.children,t),a.child;case 9:return i=a.type._context,l=a.pendingProps.children,Ht(a),i=Be(i),l=l(i),a.flags|=1,He(e,a,l,t),a.child;case 14:return Nr(e,a,a.type,a.pendingProps,t);case 15:return jr(e,a,a.type,a.pendingProps,t);case 19:return Xr(e,a,t);case 31:return av(e,a,t);case 22:return Br(e,a,t,a.pendingProps);case 24:return Ht(a),l=Be(Te),e===null?(i=Qu(),i===null&&(i=pe,n=Bu(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=t),i=n),a.memoizedState={parent:l,cache:i},wu(a),ut(a,Te,i)):((e.lanes&t)!==0&&(Gu(e,a),ei(a,null,null,t),Il()),i=e.memoizedState,n=a.memoizedState,i.parent!==l?(i={parent:l,cache:l},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),ut(a,Te,l)):(l=n.cache,ut(a,Te,l),l!==i.cache&&ju(a,[Te],t,!0))),He(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(f(156,a.tag))}function Za(e){e.flags|=4}function Oo(e,a,t,l,i){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(yd())e.flags|=8192;else throw wt=Pi,Lu}else e.flags&=-16777217}function Kr(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sf(a))if(yd())e.flags|=8192;else throw wt=Pi,Lu}function hn(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?zs():536870912,e.lanes|=a,El|=a)}function ui(e,a){if(!ee)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ye(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function lv(e,a,t){var l=a.pendingProps;switch(_u(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(a),null;case 1:return ye(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ga(Te),Oe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(cl(a)?Za(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ru())),ye(a),null;case 26:var i=a.type,n=a.memoizedState;return e===null?(Za(a),n!==null?(ye(a),Kr(a,n)):(ye(a),Oo(a,i,null,l,t))):n?n!==e.memoizedState?(Za(a),ye(a),Kr(a,n)):(ye(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Za(a),ye(a),Oo(a,i,e,l,t)),null;case 27:if(Ti(a),t=$.current,i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Za(a);else{if(!l){if(a.stateNode===null)throw Error(f(166));return ye(a),null}e=N.current,cl(a)?zc(a):(e=Id(i,l,t),a.stateNode=e,Za(a))}return ye(a),null;case 5:if(Ti(a),i=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Za(a);else{if(!l){if(a.stateNode===null)throw Error(f(166));return ye(a),null}if(n=N.current,cl(a))zc(a);else{var u=xn($.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?u.createElement(i,{is:l.is}):u.createElement(i)}}n[Ne]=a,n[Je]=l;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=n;e:switch(Qe(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Za(a)}}return ye(a),Oo(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Za(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(f(166));if(e=$.current,cl(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,i=je,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Ne]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Yd(e.nodeValue,t)),e||nt(a,!0)}else e=xn(e).createTextNode(l),e[Ne]=a,a.stateNode=e}return ye(a),null;case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null){if(l=cl(a),t!==null){if(e===null){if(!l)throw Error(f(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(f(557));e[Ne]=a}else jt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ye(a),e=!1}else t=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return a.flags&256?(ua(a),a):(ua(a),null);if((a.flags&128)!==0)throw Error(f(558))}return ye(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=cl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(f(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(f(317));i[Ne]=a}else jt(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ye(a),i=!1}else i=Ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(ua(a),a):(ua(a),null)}return ua(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),hn(a,a.updateQueue),ye(a),null);case 4:return Oe(),e===null&&Zo(a.stateNode.containerInfo),ye(a),null;case 10:return Ga(a.type),ye(a),null;case 19:if(O(Ce),l=a.memoizedState,l===null)return ye(a),null;if(i=(a.flags&128)!==0,n=l.rendering,n===null)if(i)ui(l,!1);else{if(Ae!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(n=tn(e),n!==null){for(a.flags|=128,ui(l,!1),e=n.updateQueue,a.updateQueue=e,hn(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Sc(t,e),t=t.sibling;return M(Ce,Ce.current&1|2),ee&&La(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&ea()>An&&(a.flags|=128,i=!0,ui(l,!1),a.lanes=4194304)}else{if(!i)if(e=tn(n),e!==null){if(a.flags|=128,i=!0,e=e.updateQueue,a.updateQueue=e,hn(a,e),ui(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!ee)return ye(a),null}else 2*ea()-l.renderingStartTime>An&&t!==536870912&&(a.flags|=128,i=!0,ui(l,!1),a.lanes=4194304);l.isBackwards?(n.sibling=a.child,a.child=n):(e=l.last,e!==null?e.sibling=n:a.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ea(),e.sibling=null,t=Ce.current,M(Ce,i?t&1|2:t&1),ee&&La(a,l.treeForkCount),e):(ye(a),null);case 22:case 23:return ua(a),Zu(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(ye(a),a.subtreeFlags&6&&(a.flags|=8192)):ye(a),t=a.updateQueue,t!==null&&hn(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&O(Qt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ga(Te),ye(a),null;case 25:return null;case 30:return null}throw Error(f(156,a.tag))}function iv(e,a){switch(_u(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ga(Te),Oe(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ti(a),null;case 31:if(a.memoizedState!==null){if(ua(a),a.alternate===null)throw Error(f(340));jt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ua(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(f(340));jt()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return O(Ce),null;case 4:return Oe(),null;case 10:return Ga(a.type),null;case 22:case 23:return ua(a),Zu(),e!==null&&O(Qt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ga(Te),null;case 25:return null;default:return null}}function Jr(e,a){switch(_u(a),a.tag){case 3:Ga(Te),Oe();break;case 26:case 27:case 5:Ti(a);break;case 4:Oe();break;case 31:a.memoizedState!==null&&ua(a);break;case 13:ua(a);break;case 19:O(Ce);break;case 10:Ga(a.type);break;case 22:case 23:ua(a),Zu(),e!==null&&O(Qt);break;case 24:Ga(Te)}}function oi(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var i=l.next;t=i;do{if((t.tag&e)===e){l=void 0;var n=t.create,u=t.inst;l=n(),u.destroy=l}t=t.next}while(t!==i)}}catch(o){oe(a,a.return,o)}}function ft(e,a,t){try{var l=a.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){var u=l.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,i=a;var s=t,v=o;try{v()}catch(g){oe(i,s,g)}}}l=l.next}while(l!==n)}}catch(g){oe(a,a.return,g)}}function $r(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Qc(a,t)}catch(l){oe(e,e.return,l)}}}function Fr(e,a,t){t.props=Vt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){oe(e,a,l)}}function si(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(i){oe(e,a,i)}}function Ra(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(i){oe(e,a,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){oe(e,a,i)}else t.current=null}function Wr(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(i){oe(e,e.return,i)}}function Co(e,a,t){try{var l=e.stateNode;Tv(l,e.type,t,a),l[Je]=a}catch(i){oe(e,e.return,i)}}function kr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bt(e.type)||e.tag===4}function zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function To(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=Ba));else if(l!==4&&(l===27&&bt(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(To(e,a,t),e=e.sibling;e!==null;)To(e,a,t),e=e.sibling}function gn(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&bt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(gn(e,a,t),e=e.sibling;e!==null;)gn(e,a,t),e=e.sibling}function Pr(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Qe(a,l,t),a[Ne]=e,a[Je]=t}catch(n){oe(e,e.return,n)}}var Ka=!1,Me=!1,qo=!1,Ir=typeof WeakSet=="function"?WeakSet:Set,Re=null;function nv(e,a){if(e=e.containerInfo,$o=Qn,e=dc(e),bu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{t.nodeType,n.nodeType}catch{t=null;break e}var u=0,o=-1,s=-1,v=0,g=0,E=e,p=null;a:for(;;){for(var h;E!==t||i!==0&&E.nodeType!==3||(o=u+i),E!==n||l!==0&&E.nodeType!==3||(s=u+l),E.nodeType===3&&(u+=E.nodeValue.length),(h=E.firstChild)!==null;)p=E,E=h;for(;;){if(E===e)break a;if(p===t&&++v===i&&(o=u),p===n&&++g===l&&(s=u),(h=E.nextSibling)!==null)break;E=p,p=E.parentNode}E=h}t=o===-1||s===-1?null:{start:o,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fo={focusedElem:e,selectionRange:t},Qn=!1,Re=a;Re!==null;)if(a=Re,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Re=e;else for(;Re!==null;){switch(a=Re,n=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,t=a,i=n.memoizedProps,n=n.memoizedState,l=t.stateNode;try{var U=Vt(t.type,i);e=l.getSnapshotBeforeUpdate(U,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(Q){oe(t,t.return,Q)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Po(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Po(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(f(163))}if(e=a.sibling,e!==null){e.return=a.return,Re=e;break}Re=a.return}}function ed(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:$a(e,t),l&4&&oi(5,t);break;case 1:if($a(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(u){oe(t,t.return,u)}else{var i=Vt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(i,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){oe(t,t.return,u)}}l&64&&$r(t),l&512&&si(t,t.return);break;case 3:if($a(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Qc(e,a)}catch(u){oe(t,t.return,u)}}break;case 27:a===null&&l&4&&Pr(t);case 26:case 5:$a(e,t),a===null&&l&4&&Wr(t),l&512&&si(t,t.return);break;case 12:$a(e,t);break;case 31:$a(e,t),l&4&&ld(e,t);break;case 13:$a(e,t),l&4&&id(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=vv.bind(null,t),Nv(e,t))));break;case 22:if(l=t.memoizedState!==null||Ka,!l){a=a!==null&&a.memoizedState!==null||Me,i=Ka;var n=Me;Ka=l,(Me=a)&&!n?Fa(e,t,(t.subtreeFlags&8772)!==0):$a(e,t),Ka=i,Me=n}break;case 30:break;default:$a(e,t)}}function ad(e){var a=e.alternate;a!==null&&(e.alternate=null,ad(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&tu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Fe=!1;function Ja(e,a,t){for(t=t.child;t!==null;)td(e,a,t),t=t.sibling}function td(e,a,t){if(aa&&typeof aa.onCommitFiberUnmount=="function")try{aa.onCommitFiberUnmount(Rl,t)}catch{}switch(t.tag){case 26:Me||Ra(t,a),Ja(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Me||Ra(t,a);var l=be,i=Fe;bt(t.type)&&(be=t.stateNode,Fe=!1),Ja(e,a,t),gi(t.stateNode),be=l,Fe=i;break;case 5:Me||Ra(t,a);case 6:if(l=be,i=Fe,be=null,Ja(e,a,t),be=l,Fe=i,be!==null)if(Fe)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(t.stateNode)}catch(n){oe(t,a,n)}else try{be.removeChild(t.stateNode)}catch(n){oe(t,a,n)}break;case 18:be!==null&&(Fe?(e=be,$d(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),_l(e)):$d(be,t.stateNode));break;case 4:l=be,i=Fe,be=t.stateNode.containerInfo,Fe=!0,Ja(e,a,t),be=l,Fe=i;break;case 0:case 11:case 14:case 15:ft(2,t,a),Me||ft(4,t,a),Ja(e,a,t);break;case 1:Me||(Ra(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Fr(t,a,l)),Ja(e,a,t);break;case 21:Ja(e,a,t);break;case 22:Me=(l=Me)||t.memoizedState!==null,Ja(e,a,t),Me=l;break;default:Ja(e,a,t)}}function ld(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_l(e)}catch(t){oe(a,a.return,t)}}}function id(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_l(e)}catch(t){oe(a,a.return,t)}}function uv(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Ir),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Ir),a;default:throw Error(f(435,e.tag))}}function yn(e,a){var t=uv(e);a.forEach(function(l){if(!t.has(l)){t.add(l);var i=pv.bind(null,e,l);l.then(i,i)}})}function We(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var i=t[l],n=e,u=a,o=u;e:for(;o!==null;){switch(o.tag){case 27:if(bt(o.type)){be=o.stateNode,Fe=!1;break e}break;case 5:be=o.stateNode,Fe=!1;break e;case 3:case 4:be=o.stateNode.containerInfo,Fe=!0;break e}o=o.return}if(be===null)throw Error(f(160));td(n,u,i),be=null,Fe=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)nd(a,e),a=a.sibling}var Ca=null;function nd(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(a,e),ke(e),l&4&&(ft(3,e,e.return),oi(3,e),ft(5,e,e.return));break;case 1:We(a,e),ke(e),l&512&&(Me||t===null||Ra(t,t.return)),l&64&&Ka&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var i=Ca;if(We(a,e),ke(e),l&512&&(Me||t===null||Ra(t,t.return)),l&4){var n=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,i=i.ownerDocument||i;a:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[jl]||n[Ne]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),Qe(n,l,t),n[Ne]=e,xe(n),l=n;break e;case"link":var u=uf("link","href",i).get(l+(t.href||""));if(u){for(var o=0;o<u.length;o++)if(n=u[o],n.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&n.getAttribute("rel")===(t.rel==null?null:t.rel)&&n.getAttribute("title")===(t.title==null?null:t.title)&&n.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(o,1);break a}}n=i.createElement(l),Qe(n,l,t),i.head.appendChild(n);break;case"meta":if(u=uf("meta","content",i).get(l+(t.content||""))){for(o=0;o<u.length;o++)if(n=u[o],n.getAttribute("content")===(t.content==null?null:""+t.content)&&n.getAttribute("name")===(t.name==null?null:t.name)&&n.getAttribute("property")===(t.property==null?null:t.property)&&n.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&n.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(o,1);break a}}n=i.createElement(l),Qe(n,l,t),i.head.appendChild(n);break;default:throw Error(f(468,l))}n[Ne]=e,xe(n),l=n}e.stateNode=l}else of(i,e.type,e.stateNode);else e.stateNode=nf(i,l,e.memoizedProps);else n!==l?(n===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):n.count--,l===null?of(i,e.type,e.stateNode):nf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Co(e,e.memoizedProps,t.memoizedProps)}break;case 27:We(a,e),ke(e),l&512&&(Me||t===null||Ra(t,t.return)),t!==null&&l&4&&Co(e,e.memoizedProps,t.memoizedProps);break;case 5:if(We(a,e),ke(e),l&512&&(Me||t===null||Ra(t,t.return)),e.flags&32){i=e.stateNode;try{It(i,"")}catch(U){oe(e,e.return,U)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Co(e,i,t!==null?t.memoizedProps:i)),l&1024&&(qo=!0);break;case 6:if(We(a,e),ke(e),l&4){if(e.stateNode===null)throw Error(f(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(U){oe(e,e.return,U)}}break;case 3:if(Nn=null,i=Ca,Ca=Rn(a.containerInfo),We(a,e),Ca=i,ke(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{_l(a.containerInfo)}catch(U){oe(e,e.return,U)}qo&&(qo=!1,ud(e));break;case 4:l=Ca,Ca=Rn(e.stateNode.containerInfo),We(a,e),ke(e),Ca=l;break;case 12:We(a,e),ke(e);break;case 31:We(a,e),ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yn(e,l)));break;case 13:We(a,e),ke(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Sn=ea()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yn(e,l)));break;case 22:i=e.memoizedState!==null;var s=t!==null&&t.memoizedState!==null,v=Ka,g=Me;if(Ka=v||i,Me=g||s,We(a,e),Me=g,Ka=v,ke(e),l&8192)e:for(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(t===null||s||Ka||Me||Xt(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){s=t=a;try{if(n=s.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=s.stateNode;var E=s.memoizedProps.style,p=E!=null&&E.hasOwnProperty("display")?E.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(U){oe(s,s.return,U)}}}else if(a.tag===6){if(t===null){s=a;try{s.stateNode.nodeValue=i?"":s.memoizedProps}catch(U){oe(s,s.return,U)}}}else if(a.tag===18){if(t===null){s=a;try{var h=s.stateNode;i?Fd(h,!0):Fd(s.stateNode,!1)}catch(U){oe(s,s.return,U)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,yn(e,t))));break;case 19:We(a,e),ke(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,yn(e,l)));break;case 30:break;case 21:break;default:We(a,e),ke(e)}}function ke(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(kr(l)){t=l;break}l=l.return}if(t==null)throw Error(f(160));switch(t.tag){case 27:var i=t.stateNode,n=zo(e);gn(e,n,i);break;case 5:var u=t.stateNode;t.flags&32&&(It(u,""),t.flags&=-33);var o=zo(e);gn(e,o,u);break;case 3:case 4:var s=t.stateNode.containerInfo,v=zo(e);To(e,v,s);break;default:throw Error(f(161))}}catch(g){oe(e,e.return,g)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function ud(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;ud(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function $a(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ed(e,a.alternate,a),a=a.sibling}function Xt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:ft(4,a,a.return),Xt(a);break;case 1:Ra(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Fr(a,a.return,t),Xt(a);break;case 27:gi(a.stateNode);case 26:case 5:Ra(a,a.return),Xt(a);break;case 22:a.memoizedState===null&&Xt(a);break;case 30:Xt(a);break;default:Xt(a)}e=e.sibling}}function Fa(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,i=e,n=a,u=n.flags;switch(n.tag){case 0:case 11:case 15:Fa(i,n,t),oi(4,n);break;case 1:if(Fa(i,n,t),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(v){oe(l,l.return,v)}if(l=n,i=l.updateQueue,i!==null){var o=l.stateNode;try{var s=i.shared.hiddenCallbacks;if(s!==null)for(i.shared.hiddenCallbacks=null,i=0;i<s.length;i++)Hc(s[i],o)}catch(v){oe(l,l.return,v)}}t&&u&64&&$r(n),si(n,n.return);break;case 27:Pr(n);case 26:case 5:Fa(i,n,t),t&&l===null&&u&4&&Wr(n),si(n,n.return);break;case 12:Fa(i,n,t);break;case 31:Fa(i,n,t),t&&u&4&&ld(i,n);break;case 13:Fa(i,n,t),t&&u&4&&id(i,n);break;case 22:n.memoizedState===null&&Fa(i,n,t),si(n,n.return);break;case 30:break;default:Fa(i,n,t)}a=a.sibling}}function Do(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&$l(t))}function Mo(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&$l(e))}function za(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)od(e,a,t,l),a=a.sibling}function od(e,a,t,l){var i=a.flags;switch(a.tag){case 0:case 11:case 15:za(e,a,t,l),i&2048&&oi(9,a);break;case 1:za(e,a,t,l);break;case 3:za(e,a,t,l),i&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&$l(e)));break;case 12:if(i&2048){za(e,a,t,l),e=a.stateNode;try{var n=a.memoizedProps,u=n.id,o=n.onPostCommit;typeof o=="function"&&o(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){oe(a,a.return,s)}}else za(e,a,t,l);break;case 31:za(e,a,t,l);break;case 13:za(e,a,t,l);break;case 23:break;case 22:n=a.stateNode,u=a.alternate,a.memoizedState!==null?n._visibility&2?za(e,a,t,l):ci(e,a):n._visibility&2?za(e,a,t,l):(n._visibility|=2,bl(e,a,t,l,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Do(u,a);break;case 24:za(e,a,t,l),i&2048&&Mo(a.alternate,a);break;default:za(e,a,t,l)}}function bl(e,a,t,l,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=e,u=a,o=t,s=l,v=u.flags;switch(u.tag){case 0:case 11:case 15:bl(n,u,o,s,i),oi(8,u);break;case 23:break;case 22:var g=u.stateNode;u.memoizedState!==null?g._visibility&2?bl(n,u,o,s,i):ci(n,u):(g._visibility|=2,bl(n,u,o,s,i)),i&&v&2048&&Do(u.alternate,u);break;case 24:bl(n,u,o,s,i),i&&v&2048&&Mo(u.alternate,u);break;default:bl(n,u,o,s,i)}a=a.sibling}}function ci(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,i=l.flags;switch(l.tag){case 22:ci(t,l),i&2048&&Do(l.alternate,l);break;case 24:ci(t,l),i&2048&&Mo(l.alternate,l);break;default:ci(t,l)}a=a.sibling}}var ri=8192;function Sl(e,a,t){if(e.subtreeFlags&ri)for(e=e.child;e!==null;)sd(e,a,t),e=e.sibling}function sd(e,a,t){switch(e.tag){case 26:Sl(e,a,t),e.flags&ri&&e.memoizedState!==null&&Kv(t,Ca,e.memoizedState,e.memoizedProps);break;case 5:Sl(e,a,t);break;case 3:case 4:var l=Ca;Ca=Rn(e.stateNode.containerInfo),Sl(e,a,t),Ca=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ri,ri=16777216,Sl(e,a,t),ri=l):Sl(e,a,t));break;default:Sl(e,a,t)}}function cd(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function di(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Re=l,dd(l,e)}cd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rd(e),e=e.sibling}function rd(e){switch(e.tag){case 0:case 11:case 15:di(e),e.flags&2048&&ft(9,e,e.return);break;case 3:di(e);break;case 12:di(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,bn(e)):di(e);break;default:di(e)}}function bn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Re=l,dd(l,e)}cd(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:ft(8,a,a.return),bn(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,bn(a));break;default:bn(a)}e=e.sibling}}function dd(e,a){for(;Re!==null;){var t=Re;switch(t.tag){case 0:case 11:case 15:ft(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Re=l;else e:for(t=e;Re!==null;){l=Re;var i=l.sibling,n=l.return;if(ad(l),l===t){Re=null;break e}if(i!==null){i.return=n,Re=i;break e}Re=n}}}var ov={getCacheForType:function(e){var a=Be(Te),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t},cacheSignal:function(){return Be(Te).controller.signal}},sv=typeof WeakMap=="function"?WeakMap:Map,ie=0,pe=null,F=null,k=0,ue=0,oa=null,mt=!1,Al=!1,_o=!1,Wa=0,Ae=0,vt=0,Zt=0,xo=0,sa=0,El=0,fi=null,Pe=null,Ro=!1,Sn=0,fd=0,An=1/0,En=null,pt=null,_e=0,ht=null,Ol=null,ka=0,Uo=0,No=null,md=null,mi=0,jo=null;function ca(){return(ie&2)!==0&&k!==0?k&-k:b.T!==null?Go():Ms()}function vd(){if(sa===0)if((k&536870912)===0||ee){var e=Mi;Mi<<=1,(Mi&3932160)===0&&(Mi=262144),sa=e}else sa=536870912;return e=na.current,e!==null&&(e.flags|=32),sa}function Ie(e,a,t){(e===pe&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),gt(e,k,sa,!1)),Nl(e,t),((ie&2)===0||e!==pe)&&(e===pe&&((ie&2)===0&&(Zt|=t),Ae===4&&gt(e,k,sa,!1)),Ua(e))}function pd(e,a,t){if((ie&6)!==0)throw Error(f(327));var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Ul(e,a),i=l?dv(e,a):Ho(e,a,!0),n=l;do{if(i===0){Al&&!l&&gt(e,a,0,!1);break}else{if(t=e.current.alternate,n&&!cv(t)){i=Ho(e,a,!1),n=!1;continue}if(i===2){if(n=a,e.errorRecoveryDisabledLanes&n)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var o=e;i=fi;var s=o.current.memoizedState.isDehydrated;if(s&&(Cl(o,u).flags|=256),u=Ho(o,u,!1),u!==2){if(_o&&!s){o.errorRecoveryDisabledLanes|=n,Zt|=n,i=4;break e}n=Pe,Pe=i,n!==null&&(Pe===null?Pe=n:Pe.push.apply(Pe,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){Cl(e,0),gt(e,a,0,!0);break}e:{switch(l=e,n=i,n){case 0:case 1:throw Error(f(345));case 4:if((a&4194048)!==a)break;case 6:gt(l,a,sa,!mt);break e;case 2:Pe=null;break;case 3:case 5:break;default:throw Error(f(329))}if((a&62914560)===a&&(i=Sn+300-ea(),10<i)){if(gt(l,a,sa,!mt),xi(l,0,!0)!==0)break e;ka=a,l.timeoutHandle=Kd(hd.bind(null,l,t,Pe,En,Ro,a,sa,Zt,El,mt,n,"Throttled",-0,0),i);break e}hd(l,t,Pe,En,Ro,a,sa,Zt,El,mt,n,null,-0,0)}}break}while(!0);Ua(e)}function hd(e,a,t,l,i,n,u,o,s,v,g,E,p,h){if(e.timeoutHandle=-1,E=a.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ba},sd(a,n,E);var U=(n&62914560)===n?Sn-ea():(n&4194048)===n?fd-ea():0;if(U=Jv(E,U),U!==null){ka=n,e.cancelPendingCommit=U(Cd.bind(null,e,a,n,t,l,i,u,o,s,g,E,null,p,h)),gt(e,n,u,!v);return}}Cd(e,a,n,t,l,i,u,o,s)}function cv(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var i=t[l],n=i.getSnapshot;i=i.value;try{if(!la(n(),i))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function gt(e,a,t,l){a&=~xo,a&=~Zt,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var i=a;0<i;){var n=31-ta(i),u=1<<n;l[n]=-1,i&=~u}t!==0&&Ts(e,t,a)}function On(){return(ie&6)===0?(vi(0),!1):!0}function Bo(){if(F!==null){if(ue===0)var e=F.return;else e=F,wa=Bt=null,ku(e),vl=null,Wl=0,e=F;for(;e!==null;)Jr(e.alternate,e),e=e.return;F=null}}function Cl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Mv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),ka=0,Bo(),pe=e,F=t=Qa(e.current,null),k=a,ue=0,oa=null,mt=!1,Al=Ul(e,a),_o=!1,El=sa=xo=Zt=vt=Ae=0,Pe=fi=null,Ro=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var i=31-ta(l),n=1<<i;a|=e[i],l&=~n}return Wa=a,Vi(),t}function gd(e,a){Z=null,b.H=ii,a===ml||a===ki?(a=Uc(),ue=3):a===Lu?(a=Uc(),ue=4):ue=a===vo?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,oa=a,F===null&&(Ae=1,fn(e,pa(a,e.current)))}function yd(){var e=na.current;return e===null?!0:(k&4194048)===k?ba===null:(k&62914560)===k||(k&536870912)!==0?e===ba:!1}function bd(){var e=b.H;return b.H=ii,e===null?ii:e}function Sd(){var e=b.A;return b.A=ov,e}function Cn(){Ae=4,mt||(k&4194048)!==k&&na.current!==null||(Al=!0),(vt&134217727)===0&&(Zt&134217727)===0||pe===null||gt(pe,k,sa,!1)}function Ho(e,a,t){var l=ie;ie|=2;var i=bd(),n=Sd();(pe!==e||k!==a)&&(En=null,Cl(e,a)),a=!1;var u=Ae;e:do try{if(ue!==0&&F!==null){var o=F,s=oa;switch(ue){case 8:Bo(),u=6;break e;case 3:case 2:case 9:case 6:na.current===null&&(a=!0);var v=ue;if(ue=0,oa=null,zl(e,o,s,v),t&&Al){u=0;break e}break;default:v=ue,ue=0,oa=null,zl(e,o,s,v)}}rv(),u=Ae;break}catch(g){gd(e,g)}while(!0);return a&&e.shellSuspendCounter++,wa=Bt=null,ie=l,b.H=i,b.A=n,F===null&&(pe=null,k=0,Vi()),u}function rv(){for(;F!==null;)Ad(F)}function dv(e,a){var t=ie;ie|=2;var l=bd(),i=Sd();pe!==e||k!==a?(En=null,An=ea()+500,Cl(e,a)):Al=Ul(e,a);e:do try{if(ue!==0&&F!==null){a=F;var n=oa;a:switch(ue){case 1:ue=0,oa=null,zl(e,a,n,1);break;case 2:case 9:if(xc(n)){ue=0,oa=null,Ed(a);break}a=function(){ue!==2&&ue!==9||pe!==e||(ue=7),Ua(e)},n.then(a,a);break e;case 3:ue=7;break e;case 4:ue=5;break e;case 7:xc(n)?(ue=0,oa=null,Ed(a)):(ue=0,oa=null,zl(e,a,n,7));break;case 5:var u=null;switch(F.tag){case 26:u=F.memoizedState;case 5:case 27:var o=F;if(u?sf(u):o.stateNode.complete){ue=0,oa=null;var s=o.sibling;if(s!==null)F=s;else{var v=o.return;v!==null?(F=v,zn(v)):F=null}break a}}ue=0,oa=null,zl(e,a,n,5);break;case 6:ue=0,oa=null,zl(e,a,n,6);break;case 8:Bo(),Ae=6;break e;default:throw Error(f(462))}}fv();break}catch(g){gd(e,g)}while(!0);return wa=Bt=null,b.H=l,b.A=i,ie=t,F!==null?0:(pe=null,k=0,Vi(),Ae)}function fv(){for(;F!==null&&!jf();)Ad(F)}function Ad(e){var a=Zr(e.alternate,e,Wa);e.memoizedProps=e.pendingProps,a===null?zn(e):F=a}function Ed(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=Lr(t,a,a.pendingProps,a.type,void 0,k);break;case 11:a=Lr(t,a,a.pendingProps,a.type.render,a.ref,k);break;case 5:ku(a);default:Jr(t,a),a=F=Sc(a,Wa),a=Zr(t,a,Wa)}e.memoizedProps=e.pendingProps,a===null?zn(e):F=a}function zl(e,a,t,l){wa=Bt=null,ku(a),vl=null,Wl=0;var i=a.return;try{if(ev(e,i,a,t,k)){Ae=1,fn(e,pa(t,e.current)),F=null;return}}catch(n){if(i!==null)throw F=i,n;Ae=1,fn(e,pa(t,e.current)),F=null;return}a.flags&32768?(ee||l===1?e=!0:Al||(k&536870912)!==0?e=!1:(mt=e=!0,(l===2||l===9||l===3||l===6)&&(l=na.current,l!==null&&l.tag===13&&(l.flags|=16384))),Od(a,e)):zn(a)}function zn(e){var a=e;do{if((a.flags&32768)!==0){Od(a,mt);return}e=a.return;var t=lv(a.alternate,a,Wa);if(t!==null){F=t;return}if(a=a.sibling,a!==null){F=a;return}F=a=e}while(a!==null);Ae===0&&(Ae=5)}function Od(e,a){do{var t=iv(e.alternate,e);if(t!==null){t.flags&=32767,F=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){F=e;return}F=e=t}while(e!==null);Ae=6,F=null}function Cd(e,a,t,l,i,n,u,o,s){e.cancelPendingCommit=null;do Tn();while(_e!==0);if((ie&6)!==0)throw Error(f(327));if(a!==null){if(a===e.current)throw Error(f(177));if(n=a.lanes|a.childLanes,n|=Cu,Zf(e,t,n,u,o,s),e===pe&&(F=pe=null,k=0),Ol=a,ht=e,ka=t,Uo=n,No=i,md=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hv(qi,function(){return Md(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=b.T,b.T=null,i=D.p,D.p=2,u=ie,ie|=4;try{nv(e,a,t)}finally{ie=u,D.p=i,b.T=l}}_e=1,zd(),Td(),qd()}}function zd(){if(_e===1){_e=0;var e=ht,a=Ol,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=b.T,b.T=null;var l=D.p;D.p=2;var i=ie;ie|=4;try{nd(a,e);var n=Fo,u=dc(e.containerInfo),o=n.focusedElem,s=n.selectionRange;if(u!==o&&o&&o.ownerDocument&&rc(o.ownerDocument.documentElement,o)){if(s!==null&&bu(o)){var v=s.start,g=s.end;if(g===void 0&&(g=v),"selectionStart"in o)o.selectionStart=v,o.selectionEnd=Math.min(g,o.value.length);else{var E=o.ownerDocument||document,p=E&&E.defaultView||window;if(p.getSelection){var h=p.getSelection(),U=o.textContent.length,Q=Math.min(s.start,U),me=s.end===void 0?Q:Math.min(s.end,U);!h.extend&&Q>me&&(u=me,me=Q,Q=u);var d=cc(o,Q),c=cc(o,me);if(d&&c&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==c.node||h.focusOffset!==c.offset)){var m=E.createRange();m.setStart(d.node,d.offset),h.removeAllRanges(),Q>me?(h.addRange(m),h.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),h.addRange(m))}}}}for(E=[],h=o;h=h.parentNode;)h.nodeType===1&&E.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<E.length;o++){var S=E[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Qn=!!$o,Fo=$o=null}finally{ie=i,D.p=l,b.T=t}}e.current=a,_e=2}}function Td(){if(_e===2){_e=0;var e=ht,a=Ol,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=b.T,b.T=null;var l=D.p;D.p=2;var i=ie;ie|=4;try{ed(e,a.alternate,a)}finally{ie=i,D.p=l,b.T=t}}_e=3}}function qd(){if(_e===4||_e===3){_e=0,Bf();var e=ht,a=Ol,t=ka,l=md;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?_e=5:(_e=0,Ol=ht=null,Dd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(pt=null),eu(t),a=a.stateNode,aa&&typeof aa.onCommitFiberRoot=="function")try{aa.onCommitFiberRoot(Rl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=b.T,i=D.p,D.p=2,b.T=null;try{for(var n=e.onRecoverableError,u=0;u<l.length;u++){var o=l[u];n(o.value,{componentStack:o.stack})}}finally{b.T=a,D.p=i}}(ka&3)!==0&&Tn(),Ua(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===jo?mi++:(mi=0,jo=e):mi=0,vi(0)}}function Dd(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,$l(a)))}function Tn(){return zd(),Td(),qd(),Md()}function Md(){if(_e!==5)return!1;var e=ht,a=Uo;Uo=0;var t=eu(ka),l=b.T,i=D.p;try{D.p=32>t?32:t,b.T=null,t=No,No=null;var n=ht,u=ka;if(_e=0,Ol=ht=null,ka=0,(ie&6)!==0)throw Error(f(331));var o=ie;if(ie|=4,rd(n.current),od(n,n.current,u,t),ie=o,vi(0,!1),aa&&typeof aa.onPostCommitFiberRoot=="function")try{aa.onPostCommitFiberRoot(Rl,n)}catch{}return!0}finally{D.p=i,b.T=l,Dd(e,a)}}function _d(e,a,t){a=pa(t,a),a=mo(e.stateNode,a,2),e=ct(e,a,2),e!==null&&(Nl(e,2),Ua(e))}function oe(e,a,t){if(e.tag===3)_d(e,e,t);else for(;a!==null;){if(a.tag===3){_d(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pt===null||!pt.has(l))){e=pa(t,e),t=xr(2),l=ct(a,t,2),l!==null&&(Rr(t,l,a,e),Nl(l,2),Ua(l));break}}a=a.return}}function Qo(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new sv;var i=new Set;l.set(a,i)}else i=l.get(a),i===void 0&&(i=new Set,l.set(a,i));i.has(t)||(_o=!0,i.add(t),e=mv.bind(null,e,a,t),a.then(e,e))}function mv(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,pe===e&&(k&t)===t&&(Ae===4||Ae===3&&(k&62914560)===k&&300>ea()-Sn?(ie&2)===0&&Cl(e,0):xo|=t,El===k&&(El=0)),Ua(e)}function xd(e,a){a===0&&(a=zs()),e=Ut(e,a),e!==null&&(Nl(e,a),Ua(e))}function vv(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),xd(e,t)}function pv(e,a){var t=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(f(314))}l!==null&&l.delete(a),xd(e,t)}function hv(e,a){return Wn(e,a)}var qn=null,Tl=null,Lo=!1,Dn=!1,wo=!1,yt=0;function Ua(e){e!==Tl&&e.next===null&&(Tl===null?qn=Tl=e:Tl=Tl.next=e),Dn=!0,Lo||(Lo=!0,yv())}function vi(e,a){if(!wo&&Dn){wo=!0;do for(var t=!1,l=qn;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var u=l.suspendedLanes,o=l.pingedLanes;n=(1<<31-ta(42|e)+1)-1,n&=i&~(u&~o),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(t=!0,jd(l,n))}else n=k,n=xi(l,l===pe?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||Ul(l,n)||(t=!0,jd(l,n));l=l.next}while(t);wo=!1}}function gv(){Rd()}function Rd(){Dn=Lo=!1;var e=0;yt!==0&&Dv()&&(e=yt);for(var a=ea(),t=null,l=qn;l!==null;){var i=l.next,n=Ud(l,a);n===0?(l.next=null,t===null?qn=i:t.next=i,i===null&&(Tl=t)):(t=l,(e!==0||(n&3)!==0)&&(Dn=!0)),l=i}_e!==0&&_e!==5||vi(e),yt!==0&&(yt=0)}function Ud(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var u=31-ta(n),o=1<<u,s=i[u];s===-1?((o&t)===0||(o&l)!==0)&&(i[u]=Xf(o,a)):s<=a&&(e.expiredLanes|=o),n&=~o}if(a=pe,t=k,t=xi(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&kn(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ul(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&kn(l),eu(t)){case 2:case 8:t=Os;break;case 32:t=qi;break;case 268435456:t=Cs;break;default:t=qi}return l=Nd.bind(null,e),t=Wn(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&kn(l),e.callbackPriority=2,e.callbackNode=null,2}function Nd(e,a){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Tn()&&e.callbackNode!==t)return null;var l=k;return l=xi(e,e===pe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(pd(e,l,a),Ud(e,ea()),e.callbackNode!=null&&e.callbackNode===t?Nd.bind(null,e):null)}function jd(e,a){if(Tn())return null;pd(e,a,!0)}function yv(){_v(function(){(ie&6)!==0?Wn(Es,gv):Rd()})}function Go(){if(yt===0){var e=dl;e===0&&(e=Di,Di<<=1,(Di&261888)===0&&(Di=256)),yt=e}return yt}function Bd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ji(""+e)}function Hd(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function bv(e,a,t,l,i){if(a==="submit"&&t&&t.stateNode===i){var n=Bd((i[Je]||null).action),u=l.submitter;u&&(a=(a=u[Je]||null)?Bd(a.formAction):u.getAttribute("formAction"),a!==null&&(n=a,u=null));var o=new Li("action","action",null,l,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(yt!==0){var s=u?Hd(i,u):new FormData(i);uo(t,{pending:!0,data:s,method:i.method,action:n},null,s)}}else typeof n=="function"&&(o.preventDefault(),s=u?Hd(i,u):new FormData(i),uo(t,{pending:!0,data:s,method:i.method,action:n},n,s))},currentTarget:i}]})}}for(var Yo=0;Yo<Ou.length;Yo++){var Vo=Ou[Yo],Sv=Vo.toLowerCase(),Av=Vo[0].toUpperCase()+Vo.slice(1);Oa(Sv,"on"+Av)}Oa(vc,"onAnimationEnd"),Oa(pc,"onAnimationIteration"),Oa(hc,"onAnimationStart"),Oa("dblclick","onDoubleClick"),Oa("focusin","onFocus"),Oa("focusout","onBlur"),Oa(Hm,"onTransitionRun"),Oa(Qm,"onTransitionStart"),Oa(Lm,"onTransitionCancel"),Oa(gc,"onTransitionEnd"),kt("onMouseEnter",["mouseout","mouseover"]),kt("onMouseLeave",["mouseout","mouseover"]),kt("onPointerEnter",["pointerout","pointerover"]),kt("onPointerLeave",["pointerout","pointerover"]),Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pi));function Qd(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],i=l.event;l=l.listeners;e:{var n=void 0;if(a)for(var u=l.length-1;0<=u;u--){var o=l[u],s=o.instance,v=o.currentTarget;if(o=o.listener,s!==n&&i.isPropagationStopped())break e;n=o,i.currentTarget=v;try{n(i)}catch(g){Yi(g)}i.currentTarget=null,n=s}else for(u=0;u<l.length;u++){if(o=l[u],s=o.instance,v=o.currentTarget,o=o.listener,s!==n&&i.isPropagationStopped())break e;n=o,i.currentTarget=v;try{n(i)}catch(g){Yi(g)}i.currentTarget=null,n=s}}}}function W(e,a){var t=a[au];t===void 0&&(t=a[au]=new Set);var l=e+"__bubble";t.has(l)||(Ld(a,e,2,!1),t.add(l))}function Xo(e,a,t){var l=0;a&&(l|=4),Ld(t,e,l,a)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function Zo(e){if(!e[Mn]){e[Mn]=!0,Rs.forEach(function(t){t!=="selectionchange"&&(Ev.has(t)||Xo(t,!1,e),Xo(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Mn]||(a[Mn]=!0,Xo("selectionchange",!1,a))}}function Ld(e,a,t,l){switch(pf(a)){case 2:var i=Wv;break;case 8:i=kv;break;default:i=us}t=i.bind(null,a,t,e),i=void 0,!ru||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(a,t,{capture:!0,passive:i}):e.addEventListener(a,t,!0):i!==void 0?e.addEventListener(a,t,{passive:i}):e.addEventListener(a,t,!1)}function Ko(e,a,t,l,i){var n=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var o=l.stateNode.containerInfo;if(o===i)break;if(u===4)for(u=l.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;o!==null;){if(u=$t(o),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){l=n=u;continue e}o=o.parentNode}}l=l.return}Xs(function(){var v=n,g=su(t),E=[];e:{var p=yc.get(e);if(p!==void 0){var h=Li,U=e;switch(e){case"keypress":if(Hi(t)===0)break e;case"keydown":case"keyup":h=pm;break;case"focusin":U="focus",h=vu;break;case"focusout":U="blur",h=vu;break;case"beforeblur":case"afterblur":h=vu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=lm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ym;break;case vc:case pc:case hc:h=um;break;case gc:h=Sm;break;case"scroll":case"scrollend":h=am;break;case"wheel":h=Em;break;case"copy":case"cut":case"paste":h=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Fs;break;case"toggle":case"beforetoggle":h=Cm}var Q=(a&4)!==0,me=!Q&&(e==="scroll"||e==="scrollend"),d=Q?p!==null?p+"Capture":null:p;Q=[];for(var c=v,m;c!==null;){var S=c;if(m=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||m===null||d===null||(S=Hl(c,d),S!=null&&Q.push(hi(c,S,m))),me)break;c=c.return}0<Q.length&&(p=new h(p,U,null,t,g),E.push({event:p,listeners:Q}))}}if((a&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==ou&&(U=t.relatedTarget||t.fromElement)&&($t(U)||U[Jt]))break e;if((h||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,h?(U=t.relatedTarget||t.toElement,h=v,U=U?$t(U):null,U!==null&&(me=j(U),Q=U.tag,U!==me||Q!==5&&Q!==27&&Q!==6)&&(U=null)):(h=null,U=v),h!==U)){if(Q=Js,S="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Fs,S="onPointerLeave",d="onPointerEnter",c="pointer"),me=h==null?p:Bl(h),m=U==null?p:Bl(U),p=new Q(S,c+"leave",h,t,g),p.target=me,p.relatedTarget=m,S=null,$t(g)===v&&(Q=new Q(d,c+"enter",U,t,g),Q.target=m,Q.relatedTarget=me,S=Q),me=S,h&&U)a:{for(Q=Ov,d=h,c=U,m=0,S=d;S;S=Q(S))m++;S=0;for(var H=c;H;H=Q(H))S++;for(;0<m-S;)d=Q(d),m--;for(;0<S-m;)c=Q(c),S--;for(;m--;){if(d===c||c!==null&&d===c.alternate){Q=d;break a}d=Q(d),c=Q(c)}Q=null}else Q=null;h!==null&&wd(E,p,h,Q,!1),U!==null&&me!==null&&wd(E,me,U,Q,!0)}}e:{if(p=v?Bl(v):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var te=lc;else if(ac(p))if(ic)te=Nm;else{te=Rm;var B=xm}else h=p.nodeName,!h||h.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?v&&uu(v.elementType)&&(te=lc):te=Um;if(te&&(te=te(e,v))){tc(E,te,t,g);break e}B&&B(e,p,v),e==="focusout"&&v&&p.type==="number"&&v.memoizedProps.value!=null&&nu(p,"number",p.value)}switch(B=v?Bl(v):window,e){case"focusin":(ac(B)||B.contentEditable==="true")&&(ll=B,Su=v,Zl=null);break;case"focusout":Zl=Su=ll=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,fc(E,t,g);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":fc(E,t,g)}var K;if(hu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else tl?Is(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Ws&&t.locale!=="ko"&&(tl||P!=="onCompositionStart"?P==="onCompositionEnd"&&tl&&(K=Zs()):(tt=g,du="value"in tt?tt.value:tt.textContent,tl=!0)),B=_n(v,P),0<B.length&&(P=new $s(P,e,null,t,g),E.push({event:P,listeners:B}),K?P.data=K:(K=ec(t),K!==null&&(P.data=K)))),(K=Tm?qm(e,t):Dm(e,t))&&(P=_n(v,"onBeforeInput"),0<P.length&&(B=new $s("onBeforeInput","beforeinput",null,t,g),E.push({event:B,listeners:P}),B.data=K)),bv(E,e,v,t,g)}Qd(E,a)})}function hi(e,a,t){return{instance:e,listener:a,currentTarget:t}}function _n(e,a){for(var t=a+"Capture",l=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Hl(e,t),i!=null&&l.unshift(hi(e,i,n)),i=Hl(e,a),i!=null&&l.push(hi(e,i,n))),e.tag===3)return l;e=e.return}return[]}function Ov(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wd(e,a,t,l,i){for(var n=a._reactName,u=[];t!==null&&t!==l;){var o=t,s=o.alternate,v=o.stateNode;if(o=o.tag,s!==null&&s===l)break;o!==5&&o!==26&&o!==27||v===null||(s=v,i?(v=Hl(t,n),v!=null&&u.unshift(hi(t,v,s))):i||(v=Hl(t,n),v!=null&&u.push(hi(t,v,s)))),t=t.return}u.length!==0&&e.push({event:a,listeners:u})}var Cv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function Gd(e){return(typeof e=="string"?e:""+e).replace(Cv,`
`).replace(zv,"")}function Yd(e,a){return a=Gd(a),Gd(e)===a}function fe(e,a,t,l,i,n){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||It(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&It(e,""+l);break;case"className":Ui(e,"class",l);break;case"tabIndex":Ui(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ui(e,t,l);break;case"style":Ys(e,l,n);break;case"data":if(a!=="object"){Ui(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=ji(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(t==="formAction"?(a!=="input"&&fe(e,a,"name",i.name,i,null),fe(e,a,"formEncType",i.formEncType,i,null),fe(e,a,"formMethod",i.formMethod,i,null),fe(e,a,"formTarget",i.formTarget,i,null)):(fe(e,a,"encType",i.encType,i,null),fe(e,a,"method",i.method,i,null),fe(e,a,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=ji(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=Ba);break;case"onScroll":l!=null&&W("scroll",e);break;case"onScrollEnd":l!=null&&W("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=ji(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":W("beforetoggle",e),W("toggle",e),Ri(e,"popover",l);break;case"xlinkActuate":ja(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ja(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ja(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ja(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ja(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ja(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ja(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ja(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ja(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ri(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=If.get(t)||t,Ri(e,t,l))}}function Jo(e,a,t,l,i,n){switch(t){case"style":Ys(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(f(61));if(t=l.__html,t!=null){if(i.children!=null)throw Error(f(60));e.innerHTML=t}}break;case"children":typeof l=="string"?It(e,l):(typeof l=="number"||typeof l=="bigint")&&It(e,""+l);break;case"onScroll":l!=null&&W("scroll",e);break;case"onScrollEnd":l!=null&&W("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ba);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Us.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),a=t.slice(2,i?t.length-7:void 0),n=e[Je]||null,n=n!=null?n[t]:null,typeof n=="function"&&e.removeEventListener(a,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,i);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Ri(e,t,l)}}}function Qe(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",e),W("load",e);var l=!1,i=!1,n;for(n in t)if(t.hasOwnProperty(n)){var u=t[n];if(u!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,a));default:fe(e,a,n,u,t,null)}}i&&fe(e,a,"srcSet",t.srcSet,t,null),l&&fe(e,a,"src",t.src,t,null);return;case"input":W("invalid",e);var o=n=u=i=null,s=null,v=null;for(l in t)if(t.hasOwnProperty(l)){var g=t[l];if(g!=null)switch(l){case"name":i=g;break;case"type":u=g;break;case"checked":s=g;break;case"defaultChecked":v=g;break;case"value":n=g;break;case"defaultValue":o=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(f(137,a));break;default:fe(e,a,l,g,t,null)}}Qs(e,n,o,s,v,u,i,!1);return;case"select":W("invalid",e),l=u=n=null;for(i in t)if(t.hasOwnProperty(i)&&(o=t[i],o!=null))switch(i){case"value":n=o;break;case"defaultValue":u=o;break;case"multiple":l=o;default:fe(e,a,i,o,t,null)}a=n,t=u,e.multiple=!!l,a!=null?Pt(e,!!l,a,!1):t!=null&&Pt(e,!!l,t,!0);return;case"textarea":W("invalid",e),n=i=l=null;for(u in t)if(t.hasOwnProperty(u)&&(o=t[u],o!=null))switch(u){case"value":l=o;break;case"defaultValue":i=o;break;case"children":n=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(f(91));break;default:fe(e,a,u,o,t,null)}ws(e,l,i,n);return;case"option":for(s in t)t.hasOwnProperty(s)&&(l=t[s],l!=null)&&(s==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":fe(e,a,s,l,t,null));return;case"dialog":W("beforetoggle",e),W("toggle",e),W("cancel",e),W("close",e);break;case"iframe":case"object":W("load",e);break;case"video":case"audio":for(l=0;l<pi.length;l++)W(pi[l],e);break;case"image":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"embed":case"source":case"link":W("error",e),W("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in t)if(t.hasOwnProperty(v)&&(l=t[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,a));default:fe(e,a,v,l,t,null)}return;default:if(uu(a)){for(g in t)t.hasOwnProperty(g)&&(l=t[g],l!==void 0&&Jo(e,a,g,l,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(l=t[o],l!=null&&fe(e,a,o,l,t,null))}function Tv(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,o=null,s=null,v=null,g=null;for(h in t){var E=t[h];if(t.hasOwnProperty(h)&&E!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":s=E;default:l.hasOwnProperty(h)||fe(e,a,h,null,l,E)}}for(var p in l){var h=l[p];if(E=t[p],l.hasOwnProperty(p)&&(h!=null||E!=null))switch(p){case"type":n=h;break;case"name":i=h;break;case"checked":v=h;break;case"defaultChecked":g=h;break;case"value":u=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(f(137,a));break;default:h!==E&&fe(e,a,p,h,l,E)}}iu(e,u,o,s,v,g,n,i);return;case"select":h=u=o=p=null;for(n in t)if(s=t[n],t.hasOwnProperty(n)&&s!=null)switch(n){case"value":break;case"multiple":h=s;default:l.hasOwnProperty(n)||fe(e,a,n,null,l,s)}for(i in l)if(n=l[i],s=t[i],l.hasOwnProperty(i)&&(n!=null||s!=null))switch(i){case"value":p=n;break;case"defaultValue":o=n;break;case"multiple":u=n;default:n!==s&&fe(e,a,i,n,l,s)}a=o,t=u,l=h,p!=null?Pt(e,!!t,p,!1):!!l!=!!t&&(a!=null?Pt(e,!!t,a,!0):Pt(e,!!t,t?[]:"",!1));return;case"textarea":h=p=null;for(o in t)if(i=t[o],t.hasOwnProperty(o)&&i!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,a,o,null,l,i)}for(u in l)if(i=l[u],n=t[u],l.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":p=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(f(91));break;default:i!==n&&fe(e,a,u,i,l,n)}Ls(e,p,h);return;case"option":for(var U in t)p=t[U],t.hasOwnProperty(U)&&p!=null&&!l.hasOwnProperty(U)&&(U==="selected"?e.selected=!1:fe(e,a,U,null,l,p));for(s in l)p=l[s],h=t[s],l.hasOwnProperty(s)&&p!==h&&(p!=null||h!=null)&&(s==="selected"?e.selected=p&&typeof p!="function"&&typeof p!="symbol":fe(e,a,s,p,l,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in t)p=t[Q],t.hasOwnProperty(Q)&&p!=null&&!l.hasOwnProperty(Q)&&fe(e,a,Q,null,l,p);for(v in l)if(p=l[v],h=t[v],l.hasOwnProperty(v)&&p!==h&&(p!=null||h!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(f(137,a));break;default:fe(e,a,v,p,l,h)}return;default:if(uu(a)){for(var me in t)p=t[me],t.hasOwnProperty(me)&&p!==void 0&&!l.hasOwnProperty(me)&&Jo(e,a,me,void 0,l,p);for(g in l)p=l[g],h=t[g],!l.hasOwnProperty(g)||p===h||p===void 0&&h===void 0||Jo(e,a,g,p,l,h);return}}for(var d in t)p=t[d],t.hasOwnProperty(d)&&p!=null&&!l.hasOwnProperty(d)&&fe(e,a,d,null,l,p);for(E in l)p=l[E],h=t[E],!l.hasOwnProperty(E)||p===h||p==null&&h==null||fe(e,a,E,p,l,h)}function Vd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var i=t[l],n=i.transferSize,u=i.initiatorType,o=i.duration;if(n&&o&&Vd(u)){for(u=0,o=i.responseEnd,l+=1;l<t.length;l++){var s=t[l],v=s.startTime;if(v>o)break;var g=s.transferSize,E=s.initiatorType;g&&Vd(E)&&(s=s.responseEnd,u+=g*(s<o?1:(o-v)/(s-v)))}if(--l,a+=8*(n+u)/(i.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $o=null,Fo=null;function xn(e){return e.nodeType===9?e:e.ownerDocument}function Xd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zd(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Wo(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ko=null;function Dv(){var e=window.event;return e&&e.type==="popstate"?e===ko?!1:(ko=e,!0):(ko=null,!1)}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,_v=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(e){return Jd.resolve(null).then(e).catch(xv)}:Kd;function xv(e){setTimeout(function(){throw e})}function bt(e){return e==="head"}function $d(e,a){var t=a,l=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(l===0){e.removeChild(i),_l(a);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")gi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,gi(t);for(var n=t.firstChild;n;){var u=n.nextSibling,o=n.nodeName;n[jl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&n.rel.toLowerCase()==="stylesheet"||t.removeChild(n),n=u}}else t==="body"&&gi(e.ownerDocument.body);t=i}while(t);_l(a)}function Fd(e,a){var t=e;e=0;do{var l=t.nextSibling;if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=l}while(t)}function Po(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Po(t),tu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Rv(e,a,t,l){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[jl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=Sa(e.nextSibling),e===null)break}return null}function Uv(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Sa(e.nextSibling),e===null))return null;return e}function Wd(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Sa(e.nextSibling),e===null))return null;return e}function Io(e){return e.data==="$?"||e.data==="$~"}function es(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nv(e,a){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||t.readyState!=="loading")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Sa(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var as=null;function kd(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(a===0)return Sa(e.nextSibling);a--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++}e=e.nextSibling}return null}function Pd(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(a===0)return e;a--}else t!=="/$"&&t!=="/&"||a++}e=e.previousSibling}return null}function Id(e,a,t){switch(a=xn(t),e){case"html":if(e=a.documentElement,!e)throw Error(f(452));return e;case"head":if(e=a.head,!e)throw Error(f(453));return e;case"body":if(e=a.body,!e)throw Error(f(454));return e;default:throw Error(f(451))}}function gi(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);tu(e)}var Aa=new Map,ef=new Set;function Rn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pa=D.d;D.d={f:jv,r:Bv,D:Hv,C:Qv,L:Lv,m:wv,X:Yv,S:Gv,M:Vv};function jv(){var e=Pa.f(),a=On();return e||a}function Bv(e){var a=Ft(e);a!==null&&a.tag===5&&a.type==="form"?gr(a):Pa.r(e)}var ql=typeof document>"u"?null:document;function af(e,a,t){var l=ql;if(l&&typeof a=="string"&&a){var i=ma(a);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),ef.has(i)||(ef.add(i),e={rel:e,crossOrigin:t,href:a},l.querySelector(i)===null&&(a=l.createElement("link"),Qe(a,"link",e),xe(a),l.head.appendChild(a)))}}function Hv(e){Pa.D(e),af("dns-prefetch",e,null)}function Qv(e,a){Pa.C(e,a),af("preconnect",e,a)}function Lv(e,a,t){Pa.L(e,a,t);var l=ql;if(l&&e&&a){var i='link[rel="preload"][as="'+ma(a)+'"]';a==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+ma(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+ma(t.imageSizes)+'"]')):i+='[href="'+ma(e)+'"]';var n=i;switch(a){case"style":n=Dl(e);break;case"script":n=Ml(e)}Aa.has(n)||(e=C({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),Aa.set(n,e),l.querySelector(i)!==null||a==="style"&&l.querySelector(yi(n))||a==="script"&&l.querySelector(bi(n))||(a=l.createElement("link"),Qe(a,"link",e),xe(a),l.head.appendChild(a)))}}function wv(e,a){Pa.m(e,a);var t=ql;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+ma(l)+'"][href="'+ma(e)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ml(e)}if(!Aa.has(n)&&(e=C({rel:"modulepreload",href:e},a),Aa.set(n,e),t.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(bi(n)))return}l=t.createElement("link"),Qe(l,"link",e),xe(l),t.head.appendChild(l)}}}function Gv(e,a,t){Pa.S(e,a,t);var l=ql;if(l&&e){var i=Wt(l).hoistableStyles,n=Dl(e);a=a||"default";var u=i.get(n);if(!u){var o={loading:0,preload:null};if(u=l.querySelector(yi(n)))o.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":a},t),(t=Aa.get(n))&&ts(e,t);var s=u=l.createElement("link");xe(s),Qe(s,"link",e),s._p=new Promise(function(v,g){s.onload=v,s.onerror=g}),s.addEventListener("load",function(){o.loading|=1}),s.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Un(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:o},i.set(n,u)}}}function Yv(e,a){Pa.X(e,a);var t=ql;if(t&&e){var l=Wt(t).hoistableScripts,i=Ml(e),n=l.get(i);n||(n=t.querySelector(bi(i)),n||(e=C({src:e,async:!0},a),(a=Aa.get(i))&&ls(e,a),n=t.createElement("script"),xe(n),Qe(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Vv(e,a){Pa.M(e,a);var t=ql;if(t&&e){var l=Wt(t).hoistableScripts,i=Ml(e),n=l.get(i);n||(n=t.querySelector(bi(i)),n||(e=C({src:e,async:!0,type:"module"},a),(a=Aa.get(i))&&ls(e,a),n=t.createElement("script"),xe(n),Qe(n,"link",e),t.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function tf(e,a,t,l){var i=(i=$.current)?Rn(i):null;if(!i)throw Error(f(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=Dl(t.href),t=Wt(i).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Dl(t.href);var n=Wt(i).hoistableStyles,u=n.get(e);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,u),(n=i.querySelector(yi(e)))&&!n._p&&(u.instance=n,u.state.loading=5),Aa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Aa.set(e,t),n||Xv(i,e,t,u.state))),a&&l===null)throw Error(f(528,""));return u}if(a&&l!==null)throw Error(f(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Ml(t),t=Wt(i).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,e))}}function Dl(e){return'href="'+ma(e)+'"'}function yi(e){return'link[rel="stylesheet"]['+e+"]"}function lf(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Xv(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Qe(a,"link",t),xe(a),e.head.appendChild(a))}function Ml(e){return'[src="'+ma(e)+'"]'}function bi(e){return"script[async]"+e}function nf(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+ma(t.href)+'"]');if(l)return a.instance=l,xe(l),l;var i=C({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xe(l),Qe(l,"style",i),Un(l,t.precedence,e),a.instance=l;case"stylesheet":i=Dl(t.href);var n=e.querySelector(yi(i));if(n)return a.state.loading|=4,a.instance=n,xe(n),n;l=lf(t),(i=Aa.get(i))&&ts(l,i),n=(e.ownerDocument||e).createElement("link"),xe(n);var u=n;return u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),Qe(n,"link",l),a.state.loading|=4,Un(n,t.precedence,e),a.instance=n;case"script":return n=Ml(t.src),(i=e.querySelector(bi(n)))?(a.instance=i,xe(i),i):(l=t,(i=Aa.get(n))&&(l=C({},t),ls(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),xe(i),Qe(i,"link",l),e.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(f(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,Un(l,t.precedence,e));return a.instance}function Un(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,u=0;u<l.length;u++){var o=l[u];if(o.dataset.precedence===a)n=o;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function ts(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function ls(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Nn=null;function uf(e,a,t){if(Nn===null){var l=new Map,i=Nn=new Map;i.set(t,l)}else i=Nn,l=i.get(t),l||(l=new Map,i.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var n=t[i];if(!(n[jl]||n[Ne]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(a)||"";u=e+u;var o=l.get(u);o?o.push(n):l.set(u,[n])}}return l}function of(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function Zv(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(e=a.disabled,typeof a.precedence=="string"&&e==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function sf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kv(e,a,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Dl(l.href),n=a.querySelector(yi(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=jn.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=n,xe(n);return}n=a.ownerDocument||a,l=lf(l),(i=Aa.get(i))&&ts(l,i),n=n.createElement("link"),xe(n);var u=n;u._p=new Promise(function(o,s){u.onload=o,u.onerror=s}),Qe(n,"link",l),t.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=jn.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))}}var is=0;function Jv(e,a){return e.stylesheets&&e.count===0&&Hn(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var l=setTimeout(function(){if(e.stylesheets&&Hn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+a);0<e.imgBytes&&is===0&&(is=62500*qv());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>is?50:800)+a);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function jn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bn=null;function Hn(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bn=new Map,a.forEach($v,e),Bn=null,jn.call(e))}function $v(e,a){if(!(a.state.loading&4)){var t=Bn.get(e);if(t)var l=t.get(null);else{t=new Map,Bn.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),l=u)}l&&t.set(null,l)}i=a.instance,u=i.getAttribute("data-precedence"),n=t.get(u)||l,n===l&&t.set(null,i),t.set(u,i),this.count++,l=jn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),a.state.loading|=4}}var Si={$$typeof:Le,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function Fv(e,a,t,l,i,n,u,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.hiddenUpdates=Pn(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function cf(e,a,t,l,i,n,u,o,s,v,g,E){return e=new Fv(e,a,t,u,s,v,g,E,o),a=1,n===!0&&(a|=24),n=ia(3,null,null,a),e.current=n,n.stateNode=e,a=Bu(),a.refCount++,e.pooledCache=a,a.refCount++,n.memoizedState={element:l,isDehydrated:t,cache:a},wu(n),e}function rf(e){return e?(e=ul,e):ul}function df(e,a,t,l,i,n){i=rf(i),l.context===null?l.context=i:l.pendingContext=i,l=st(a),l.payload={element:t},n=n===void 0?null:n,n!==null&&(l.callback=n),t=ct(e,l,a),t!==null&&(Ie(t,e,a),Pl(t,e,a))}function ff(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function ns(e,a){ff(e,a),(e=e.alternate)&&ff(e,a)}function mf(e){if(e.tag===13||e.tag===31){var a=Ut(e,67108864);a!==null&&Ie(a,e,67108864),ns(e,67108864)}}function vf(e){if(e.tag===13||e.tag===31){var a=ca();a=In(a);var t=Ut(e,a);t!==null&&Ie(t,e,a),ns(e,a)}}var Qn=!0;function Wv(e,a,t,l){var i=b.T;b.T=null;var n=D.p;try{D.p=2,us(e,a,t,l)}finally{D.p=n,b.T=i}}function kv(e,a,t,l){var i=b.T;b.T=null;var n=D.p;try{D.p=8,us(e,a,t,l)}finally{D.p=n,b.T=i}}function us(e,a,t,l){if(Qn){var i=os(l);if(i===null)Ko(e,a,l,Ln,t),hf(e,l);else if(Iv(i,e,a,t,l))l.stopPropagation();else if(hf(e,l),a&4&&-1<Pv.indexOf(e)){for(;i!==null;){var n=Ft(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=Dt(n.pendingLanes);if(u!==0){var o=n;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var s=1<<31-ta(u);o.entanglements[1]|=s,u&=~s}Ua(n),(ie&6)===0&&(An=ea()+500,vi(0))}}break;case 31:case 13:o=Ut(n,2),o!==null&&Ie(o,n,2),On(),ns(n,2)}if(n=os(l),n===null&&Ko(e,a,l,Ln,t),n===i)break;i=n}i!==null&&l.stopPropagation()}else Ko(e,a,l,null,t)}}function os(e){return e=su(e),ss(e)}var Ln=null;function ss(e){if(Ln=null,e=$t(e),e!==null){var a=j(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=L(a),e!==null)return e;e=null}else if(t===31){if(e=Y(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Ln=e,null}function pf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hf()){case Es:return 2;case Os:return 8;case qi:case Qf:return 32;case Cs:return 268435456;default:return 32}default:return 32}}var cs=!1,St=null,At=null,Et=null,Ai=new Map,Ei=new Map,Ot=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hf(e,a){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":Ai.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(a.pointerId)}}function Oi(e,a,t,l,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},a!==null&&(a=Ft(a),a!==null&&mf(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),e)}function Iv(e,a,t,l,i){switch(a){case"focusin":return St=Oi(St,e,a,t,l,i),!0;case"dragenter":return At=Oi(At,e,a,t,l,i),!0;case"mouseover":return Et=Oi(Et,e,a,t,l,i),!0;case"pointerover":var n=i.pointerId;return Ai.set(n,Oi(Ai.get(n)||null,e,a,t,l,i)),!0;case"gotpointercapture":return n=i.pointerId,Ei.set(n,Oi(Ei.get(n)||null,e,a,t,l,i)),!0}return!1}function gf(e){var a=$t(e.target);if(a!==null){var t=j(a);if(t!==null){if(a=t.tag,a===13){if(a=L(t),a!==null){e.blockedOn=a,_s(e.priority,function(){vf(t)});return}}else if(a===31){if(a=Y(t),a!==null){e.blockedOn=a,_s(e.priority,function(){vf(t)});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wn(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=os(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);ou=l,t.target.dispatchEvent(l),ou=null}else return a=Ft(t),a!==null&&mf(a),e.blockedOn=t,!1;a.shift()}return!0}function yf(e,a,t){wn(e)&&t.delete(a)}function ep(){cs=!1,St!==null&&wn(St)&&(St=null),At!==null&&wn(At)&&(At=null),Et!==null&&wn(Et)&&(Et=null),Ai.forEach(yf),Ei.forEach(yf)}function Gn(e,a){e.blockedOn===a&&(e.blockedOn=null,cs||(cs=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,ep)))}var Yn=null;function bf(e){Yn!==e&&(Yn=e,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Yn===e&&(Yn=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],i=e[a+2];if(typeof l!="function"){if(ss(l||t)===null)continue;break}var n=Ft(t);n!==null&&(e.splice(a,3),a-=3,uo(n,{pending:!0,data:i,method:t.method,action:l},l,i))}}))}function _l(e){function a(s){return Gn(s,e)}St!==null&&Gn(St,e),At!==null&&Gn(At,e),Et!==null&&Gn(Et,e),Ai.forEach(a),Ei.forEach(a);for(var t=0;t<Ot.length;t++){var l=Ot[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ot.length&&(t=Ot[0],t.blockedOn===null);)gf(t),t.blockedOn===null&&Ot.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var i=t[l],n=t[l+1],u=i[Je]||null;if(typeof n=="function")u||bf(t);else if(u){var o=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[Je]||null)o=u.formAction;else if(ss(i)!==null)continue}else o=u.action;typeof o=="function"?t[l+1]=o:(t.splice(l,3),l-=3),bf(t)}}}function Sf(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function rs(e){this._internalRoot=e}Vn.prototype.render=rs.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(f(409));var t=a.current,l=ca();df(t,l,e,a,null,null)},Vn.prototype.unmount=rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;df(e.current,2,null,e,null,null),On(),a[Jt]=null}};function Vn(e){this._internalRoot=e}Vn.prototype.unstable_scheduleHydration=function(e){if(e){var a=Ms();e={blockedOn:null,target:e,priority:a};for(var t=0;t<Ot.length&&a!==0&&a<Ot[t].priority;t++);Ot.splice(t,0,e),t===0&&gf(e)}};var Af=z.version;if(Af!=="19.2.4")throw Error(f(527,Af,"19.2.4"));D.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(f(188)):(e=Object.keys(e).join(","),Error(f(268,e)));return e=y(a),e=e!==null?R(e):null,e=e===null?null:e.stateNode,e};var ap={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xn.isDisabled&&Xn.supportsFiber)try{Rl=Xn.inject(ap),aa=Xn}catch{}}return zi.createRoot=function(e,a){if(!q(e))throw Error(f(299));var t=!1,l="",i=qr,n=Dr,u=Mr;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=cf(e,1,!1,null,null,t,l,null,i,n,u,Sf),e[Jt]=a.current,Zo(e),new rs(a)},zi.hydrateRoot=function(e,a,t){if(!q(e))throw Error(f(299));var l=!1,i="",n=qr,u=Dr,o=Mr,s=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(s=t.formState)),a=cf(e,1,!0,a,t??null,l,i,s,n,u,o,Sf),a.context=rf(null),t=a.current,l=ca(),l=In(l),i=st(l),i.callback=null,ct(t,i,l),t=l,a.current.lanes=t,Nl(a,t),Ua(a),e[Jt]=a.current,Zo(e),new Vn(a)},zi.version="19.2.4",zi}var xf;function dp(){if(xf)return ms.exports;xf=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(z){console.error(z)}}return A(),ms.exports=rp(),ms.exports}var fp=dp();function J(A,z,T,f){const q="cb"+Math.random().toString(36).slice(2,7),j=!!z,L=!!T;return`<div class="cb">
    <div class="cb-tabs">
      <div class="ct a" onclick="switchTab('${q}','ts',this)">TypeScript</div>
      ${j?`<div class="ct" onclick="switchTab('${q}','py',this)">Python</div>`:""}
      ${L?`<div class="ct" onclick="switchTab('${q}','java',this)">Java</div>`:""}
    </div>
    <div class="cp a" id="${q}-ts"><pre><code class="language-typescript">${A}</code></pre></div>
    ${j?`<div class="cp" id="${q}-py"><pre><code class="language-python">${z}</code></pre></div>`:""}
    ${L?`<div class="cp" id="${q}-java"><pre><code class="language-java">${T}</code></pre></div>`:""}
  </div>`}function se(A,z,T,f){const q="q"+Math.random().toString(36).slice(2,7),j=["A","B","C","D"],L=z.map((Y,_)=>`<div class="qo" id="${q}-${_}" onclick="answerQuiz('${q}',${_},${T})"><div class="ok">${j[_]}</div>${Y}</div>`).join("");return`<div class="quiz"><div class="quiz-hd"><div class="quiz-badge">Quiz</div></div>
    <div class="quiz-q">${A}</div>
    <div class="quiz-opts" id="${q}-opts">${L}</div>
    <div class="quiz-exp" id="${q}-exp">${f}</div>
  </div>`}function Zn(A,z){const T="pg"+Math.random().toString(36).slice(2,7);return`<div class="pg">
    <div class="pg-hd">
      <div class="pg-title">Playground — JavaScript</div>
      <button class="run-btn" onclick="runPg('${T}')">▶ Executar</button>
    </div>
    <textarea class="pg-ed" id="${T}-ed">${A}</textarea>
    <div class="pg-out" id="${T}-out">${z||"// Clique em Executar para ver o resultado"}</div>
  </div>`}function ra(A,z,T){return`<div class="callout callout-${T||""}"><div class="callout-ic">${A}</div><div class="callout-body"><p>${z}</p></div></div>`}function Ta(A){return`<div class="diag">${A}</div>`}function gs(A,z){return`<div class="card-row">
    <div class="card card-bad"><div class="card-hd">✗ Ruim</div><p>${A}</p></div>
    <div class="card card-good"><div class="card-hd">✓ Bom</div><p>${z}</p></div>
  </div>`}const zt=[{id:"fundamentos",title:"Fundamentos",emoji:"🗺️",color:"#60A5FA",level:"i",sections:[{id:"o-que-e",title:"O que é Arquitetura?",level:"i",content:`
<div class="ph"><div class="pic">🏗️</div><div class="pm">
<div class="pcat">Módulo 1 · Fundamentos</div>
<div class="pname">O que é Arquitetura de Software?</div>
<div class="pint">A base que sustenta tudo — antes de patterns, antes de frameworks, antes de código.</div>
</div></div>
<p class="lead">Arquitetura de software é o conjunto de <strong>decisões estruturais</strong> que moldam como um sistema é organizado, como seus componentes se comunicam e quais trade-offs são aceitos conscientemente.</p>
${ra("🎯","<strong>Definição prática:</strong> Arquitetura é o que define o que é difícil de mudar depois. Se você pode mudar sem dor, é um detalhe de implementação. Se custa caro mudar, é arquitetura.","info")}
<h2>Por que arquitetura importa?</h2>
<p>A maioria dos sistemas começa simples. Com o tempo, cresce a pressão por features, por usuários, por times maiores. Sem arquitetura pensada, o custo de cada mudança cresce exponencialmente — o que chamamos de <em>degradação arquitetural</em>.</p>
<div class="card-row">
  <div class="card card-bad"><div class="card-hd">✗ Sem arquitetura</div><p>Cada feature nova exige entender (e tocar) metade do sistema. Bugs em um lugar surgem em outro.</p></div>
  <div class="card card-good"><div class="card-hd">✓ Com arquitetura</div><p>Mudanças ficam isoladas. Times trabalham em paralelo. Novos membros entendem o sistema rapidamente.</p></div>
</div>
<h2>As três forças fundamentais</h2>
<p>Todo sistema arquitetural lida com três forças em tensão permanente:</p>
<table><tr><th>Força</th><th>O que é</th><th>Impacto</th></tr>
<tr><td><strong>Complexidade</strong></td><td>Complexidade essencial (do domínio) vs acidental (criamos nós mesmos)</td><td>Gerenciar é o trabalho central da arquitetura</td></tr>
<tr><td><strong>Mudança</strong></td><td>O sistema vai mudar — os requisitos, o time, o contexto</td><td>Arquitetura boa abraça mudança, não resiste a ela</td></tr>
<tr><td><strong>Qualidade</strong></td><td>Performance, segurança, manutenibilidade, disponibilidade</td><td>Cada atributo tem custo — todo trade-off é explícito</td></tr>
</table>
<h2>Dívida Técnica</h2>
<p>Dívida técnica é o custo implícito de soluções rápidas e incompletas. Como dívida financeira, ela <strong>acumula juros</strong>: quanto mais tempo sem pagar, mais caro fica.</p>
${ra("⚠️","Dívida técnica não é sempre ruim. Assumir dívida conscientemente (e planejar pagá-la) pode ser uma decisão arquitetural válida. O problema é a dívida <strong>acidental</strong> — criada sem perceber.","warning")}
${se("Qual afirmação melhor descreve a diferença entre arquitetura e detalhe de implementação?",["Arquitetura é o que fica no diagrama, implementação é o que fica no código","Arquitetura abrange decisões de alto custo para mudar; implementação abrange o que pode ser alterado sem impacto estrutural","Arquitetura é responsabilidade do arquiteto sênior; implementação é do dev","Arquitetura é sobre infraestrutura; implementação é sobre aplicação"],1,"✅ A distinção chave é o custo de mudança. Arquitetura são as decisões que, se erradas, custam caro para reverter — estrutura de módulos, dependências entre camadas, protocolos de comunicação.")}
`},{id:"qualidade",title:"Atributos de Qualidade",level:"i",content:`
<h1>Atributos de Qualidade</h1>
<p class="lead">Não basta o sistema funcionar. A arquitetura define <em>como</em> ele vai funcionar — e para quais dimensões de qualidade ele estará otimizado.</p>
<h2>FURPS+</h2>
<table><tr><th>Atributo</th><th>Perguntas-chave</th></tr>
<tr><td><strong>F</strong>unctionality</td><td>O sistema faz o que deve fazer? Segurança? Interoperabilidade?</td></tr>
<tr><td><strong>U</strong>sability</td><td>O usuário consegue usar sem frustração? Curva de aprendizado?</td></tr>
<tr><td><strong>R</strong>eliability</td><td>Frequência de falhas? Recovery time? Disponibilidade?</td></tr>
<tr><td><strong>P</strong>erformance</td><td>Tempo de resposta? Throughput? Uso de recursos?</td></tr>
<tr><td><strong>S</strong>upportability</td><td>Facilidade de manutenção, teste, extensão e deployment?</td></tr>
<tr><td><strong>+</strong> (extras)</td><td>Implementação, interface, operações, legais</td></tr>
</table>
<h2>Trade-offs inevitáveis</h2>
${ra("⚖️","Você <strong>não pode maximizar todos os atributos</strong> ao mesmo tempo. Cada decisão arquitetural é um trade-off. Seu trabalho é torná-los explícitos e conscientes.","warning")}
<table><tr><th>Ganho</th><th>Custo típico</th></tr>
<tr><td>Alta disponibilidade</td><td>Maior complexidade operacional e custo</td></tr>
<tr><td>Alta performance</td><td>Menor manutenibilidade (otimizações obscurecem código)</td></tr>
<tr><td>Alta segurança</td><td>Menor usabilidade e performance</td></tr>
<tr><td>Alta escalabilidade</td><td>Consistência eventual, complexidade de dados</td></tr>
<tr><td>Alta flexibilidade</td><td>Maior complexidade inicial, abstrações custosas</td></tr>
</table>
${se("Um sistema bancário precisa escolher entre consistência forte e alta disponibilidade. O CAP theorem diz que, em presença de partição de rede, é impossível ter as duas. Qual é a escolha arquiteturalmente correta?",["Sempre priorizar disponibilidade — banco não pode cair","Sempre priorizar consistência — dados bancários não podem estar errados","Depende do contexto: transferências críticas exigem consistência; consulta de saldo pode tolerar eventual consistency","O CAP theorem não se aplica a sistemas bancários modernos"],2,"✅ A resposta correta é: depende. Sistemas modernos como o Nubank usam consistência eventual para leituras e consistência forte para escritas críticas — é uma decisão arquitetural deliberada por operação.")}
`}]},{id:"solid",title:"SOLID",emoji:"📐",color:"#D4A017",level:"m",sections:[{id:"srp",title:"S — Single Responsibility",level:"i",content:`
<div class="ph"><div class="pic">☝️</div><div class="pm">
<div class="pcat">SOLID · Princípio 1/5</div>
<div class="pname">Single Responsibility Principle</div>
<div class="pint">Uma classe deve ter apenas um motivo para mudar.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">"Uma classe deve ter apenas <strong>um motivo para mudar</strong>." — Robert C. Martin</div></div>
<p>Na prática: cada módulo/classe/função é responsável por <em>um único ator</em> — uma pessoa, papel ou sistema que pode pedir mudanças nele.</p>
<h2>O problema: God Class</h2>
<p>Quando uma classe acumula responsabilidades de múltiplos atores, qualquer mudança para um pode quebrar o outro — e a classe vira um ponto central de conflito.</p>
${J(`// ✗ RUIM — UserService faz tudo
class UserService {
  constructor(private db: Database, private mailer: Mailer) {}

  // Responsabilidade 1: regras de negócio
  register(email: string, password: string) {
    if (!email.includes('@')) throw new Error('Email inválido');
    const hash = bcrypt.hash(password);
    this.db.save({ email, password: hash });
    // Responsabilidade 2: envio de email
    this.mailer.send(email, 'Bem-vindo!');
    // Responsabilidade 3: log/auditoria
    console.log(\`[AUDIT] User registered: \${email}\`);
  }
}`,`# ✗ RUIM
class UserService:
    def register(self, email, password):
        if '@' not in email: raise ValueError('Invalid email')
        self.db.save({'email': email, 'pass': hash(password)})
        self.mailer.send(email, 'Welcome!')
        print(f'[AUDIT] User: {email}')`,`// ✗ RUIM
class UserService {
    void register(String email, String password) {
        if (!email.contains("@")) throw new RuntimeException("Invalid");
        db.save(email, BCrypt.hash(password));
        mailer.send(email, "Welcome!");
        System.out.println("[AUDIT] User: " + email);
    }
}`)}
${J(`// ✓ BOM — cada classe tem uma responsabilidade
class UserRegistrar {
  constructor(private repo: UserRepository) {}
  register(email: string, password: string): User {
    if (!email.includes('@')) throw new Error('Email inválido');
    return this.repo.save({ email, password: hash(password) });
  }
}

class WelcomeEmailSender {
  constructor(private mailer: Mailer) {}
  sendWelcome(email: string) {
    this.mailer.send(email, 'Bem-vindo!');
  }
}

class AuditLogger {
  log(event: string) { console.log(\`[AUDIT] \${event}\`); }
}

// Orquestração na camada de aplicação
class RegisterUserUseCase {
  constructor(
    private registrar: UserRegistrar,
    private emailSender: WelcomeEmailSender,
    private audit: AuditLogger
  ) {}

  execute(email: string, password: string) {
    const user = this.registrar.register(email, password);
    this.emailSender.sendWelcome(email);
    this.audit.log(\`User registered: \${email}\`);
    return user;
  }
}`,`# ✓ BOM
class UserRegistrar:
    def register(self, email, password): ...

class WelcomeEmailSender:
    def send_welcome(self, email): ...

class AuditLogger:
    def log(self, event): ...

class RegisterUserUseCase:
    def execute(self, email, password):
        user = self.registrar.register(email, password)
        self.email_sender.send_welcome(email)
        self.audit.log(f'User registered: {email}')
        return user`,`// ✓ BOM
class UserRegistrar { User register(String email, String pw) {...} }
class WelcomeEmailSender { void sendWelcome(String email) {...} }
class AuditLogger { void log(String event) {...} }`)}
${se("Qual sinal indica que uma classe está violando o SRP?",["Ela tem mais de 100 linhas de código","Ela importa mais de 5 dependências",'Você consegue descrever o que ela faz usando "e também" — ela registra usuários E envia email E loga',"Ela tem mais de um método público"],2,'✅ O "e também" é o indicador clássico de múltiplas responsabilidades. Se a descrição da classe precisa de conjunções, ela provavelmente tem mais de uma razão para mudar.')}
`},{id:"ocp",title:"O — Open/Closed",level:"m",content:`
<div class="ph"><div class="pic">🔓</div><div class="pm">
<div class="pcat">SOLID · Princípio 2/5</div>
<div class="pname">Open/Closed Principle</div>
<div class="pint">Aberto para extensão, fechado para modificação.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">Entidades de software devem ser <strong>abertas para extensão</strong>, mas <strong>fechadas para modificação</strong>. — Bertrand Meyer / Robert C. Martin</div></div>
<p>Na prática: você deve conseguir adicionar comportamento novo sem alterar código existente. Alterações em código existente são perigosas — podem quebrar comportamentos que já funcionam.</p>
<h2>O problema: switch/if em cascata</h2>
${J(`// ✗ RUIM — cada novo tipo de desconto exige modificar esta função
function calcularDesconto(tipo: string, valor: number): number {
  if (tipo === 'estudante') return valor * 0.8;
  if (tipo === 'senior') return valor * 0.7;
  if (tipo === 'vip') return valor * 0.5;
  // Para adicionar 'funcionario', precisamos modificar aqui ↑
  return valor;
}`,`def calcular_desconto(tipo, valor):
    if tipo == 'estudante': return valor * 0.8
    if tipo == 'senior': return valor * 0.7
    # Cada novo tipo → modifica aqui
    return valor`,void 0)}
${J(`// ✓ BOM — Strategy + polimorfismo
interface DescontoStrategy {
  calcular(valor: number): number;
}

class DescontoEstudante implements DescontoStrategy {
  calcular(valor: number) { return valor * 0.8; }
}
class DescontoSenior implements DescontoStrategy {
  calcular(valor: number) { return valor * 0.7; }
}
class DescontoVIP implements DescontoStrategy {
  calcular(valor: number) { return valor * 0.5; }
}
// Novo tipo? Só criar nova classe — sem tocar no existente
class DescontoFuncionario implements DescontoStrategy {
  calcular(valor: number) { return valor * 0.6; }
}

class Carrinho {
  calcularTotal(itens: Item[], desconto: DescontoStrategy): number {
    const subtotal = itens.reduce((s, i) => s + i.preco, 0);
    return desconto.calcular(subtotal);
  }
}`,`from abc import ABC, abstractmethod

class DescontoStrategy(ABC):
    @abstractmethod
    def calcular(self, valor: float) -> float: ...

class DescontoEstudante(DescontoStrategy):
    def calcular(self, valor): return valor * 0.8

class DescontoSenior(DescontoStrategy):
    def calcular(self, valor): return valor * 0.7

# Adicionar novo tipo: só nova classe, zero modificação`,void 0)}
${se("Por que o OCP reduz riscos em produção?",["Porque impede a criação de código duplicado","Porque código existente (testado, em produção) não é modificado ao adicionar features — apenas novas classes são criadas","Porque torna o código mais fácil de ler","Porque elimina a necessidade de testes"],1,"✅ O OCP protege código que já funciona. Ao estender via novas classes em vez de modificar as existentes, o risco de regressão cai drasticamente — o código testado e validado fica intocado.")}
`},{id:"lsp",title:"L — Liskov Substitution",level:"m",content:`
<div class="ph"><div class="pic">🔄</div><div class="pm">
<div class="pcat">SOLID · Princípio 3/5</div>
<div class="pname">Liskov Substitution Principle</div>
<div class="pint">Subtipos devem ser substituíveis por seus tipos base.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">Se <code>S</code> é subtipo de <code>T</code>, objetos do tipo <code>T</code> podem ser substituídos por <code>S</code> <strong>sem alterar o comportamento correto do programa</strong>. — Barbara Liskov, 1987</div></div>
<p>Na prática: herança não é sobre reusar código — é sobre contrato comportamental. A subclasse deve honrar todas as garantias da classe pai.</p>
${J(`// ✗ RUIM — o clássico "Retângulo/Quadrado"
class Retangulo {
  largura = 0; altura = 0;
  setLargura(l: number) { this.largura = l; }
  setAltura(a: number) { this.altura = a; }
  area() { return this.largura * this.altura; }
}

class Quadrado extends Retangulo {
  // Viola LSP: alterar largura também altera altura — quebra expectativa
  setLargura(l: number) { this.largura = l; this.altura = l; }
  setAltura(a: number) { this.largura = a; this.altura = a; }
}

function testar(r: Retangulo) {
  r.setLargura(5); r.setAltura(10);
  // Para Retangulo: area = 50 ✓
  // Para Quadrado: area = 100 ✗ — comportamento inesperado!
  console.log(r.area());
}`,`# ✗ RUIM
class Retangulo:
    def set_largura(self, l): self.largura = l
    def set_altura(self, a): self.altura = a

class Quadrado(Retangulo):  # Viola LSP
    def set_largura(self, l):
        self.largura = self.altura = l  # Efeito colateral inesperado`,void 0)}
${J(`// ✓ BOM — composição e interface comum sem herança forçada
interface Forma {
  area(): number;
}

class Retangulo implements Forma {
  constructor(private l: number, private a: number) {}
  area() { return this.l * this.a; }
}

class Quadrado implements Forma {
  constructor(private lado: number) {}
  area() { return this.lado ** 2; }
}

// Qualquer Forma pode ser usada onde Forma é esperado — LSP respeitado
function exibirArea(f: Forma) {
  console.log('Área:', f.area());
}`,`# ✓ BOM
from abc import ABC, abstractmethod

class Forma(ABC):
    @abstractmethod
    def area(self) -> float: ...

class Retangulo(Forma):
    def __init__(self, l, a): self.l, self.a = l, a
    def area(self): return self.l * self.a

class Quadrado(Forma):
    def __init__(self, lado): self.lado = lado
    def area(self): return self.lado ** 2`,void 0)}
${se("Qual é o sinal mais claro de violação do LSP?",["A subclasse tem mais métodos que a classe pai","Código que usa a classe pai precisa checar com instanceof/typeof antes de chamar um método","A subclasse não chama super() no construtor","A herança vai mais de dois níveis"],1,"✅ Ter que verificar o tipo concreto em tempo de execução (instanceof) é o sintoma clássico de LSP violado. Se você precisar de if (obj instanceof Quadrado) para tratar diferente, o polimorfismo está quebrado.")}
`},{id:"isp",title:"I — Interface Segregation",level:"m",content:`
<div class="ph"><div class="pic">✂️</div><div class="pm">
<div class="pcat">SOLID · Princípio 4/5</div>
<div class="pname">Interface Segregation Principle</div>
<div class="pint">Nenhum cliente deve depender de métodos que não usa.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">Clientes não devem ser forçados a depender de interfaces que não utilizam. Interfaces gordas devem ser separadas em interfaces menores e focadas. — Robert C. Martin</div></div>
${J(`// ✗ RUIM — interface gorda
interface Trabalhador {
  trabalhar(): void;
  comer(): void;      // Robôs não comem!
  dormir(): void;     // Robôs não dormem!
  tirarFerias(): void;
}

class Robo implements Trabalhador {
  trabalhar() { console.log('beep boop'); }
  comer() { throw new Error('Robô não come!'); }       // Força método inútil
  dormir() { throw new Error('Robô não dorme!'); }     // Força método inútil
  tirarFerias() { throw new Error('Robô não tira férias!'); }
}`,`# ✗ RUIM
class Trabalhador(ABC):
    @abstractmethod
    def trabalhar(self): ...
    @abstractmethod
    def comer(self): ...    # Robô não come
    @abstractmethod
    def dormir(self): ...   # Robô não dorme`,void 0)}
${J(`// ✓ BOM — interfaces segregadas e focadas
interface Trabalhavel { trabalhar(): void; }
interface Alimentavel { comer(): void; }
interface Descansavel { dormir(): void; tirarFerias(): void; }

// Humano implementa tudo
class Humano implements Trabalhavel, Alimentavel, Descansavel {
  trabalhar() { console.log('trabalhando...'); }
  comer() { console.log('almoçando...'); }
  dormir() { console.log('zzz...'); }
  tirarFerias() { console.log('na praia!'); }
}

// Robô só implementa o que faz sentido
class Robo implements Trabalhavel {
  trabalhar() { console.log('beep boop'); }
}`,`# ✓ BOM
class Trabalhavel(ABC):
    @abstractmethod
    def trabalhar(self): ...

class Alimentavel(ABC):
    @abstractmethod
    def comer(self): ...

class Humano(Trabalhavel, Alimentavel):
    def trabalhar(self): print('trabalhando')
    def comer(self): print('comendo')

class Robo(Trabalhavel):
    def trabalhar(self): print('beep boop')`,void 0)}
${se("Qual o principal benefício do ISP na prática?",["Reduz o número total de interfaces no sistema","Módulos só dependem do que realmente precisam — mudanças em funcionalidades não usadas não causam recompilação ou quebra","Torna o código mais fácil de testar por reduzir mock","Elimina a necessidade de herança"],1,"✅ O benefício real é o isolamento: se UserRepository não usa métodos de backup, mudanças no contrato de backup não forçam UserRepository a ser atualizado. Isso reduz acoplamento e o impacto de mudanças.")}
`},{id:"dip",title:"D — Dependency Inversion",level:"m",content:`
<div class="ph"><div class="pic">🔃</div><div class="pm">
<div class="pcat">SOLID · Princípio 5/5</div>
<div class="pname">Dependency Inversion Principle</div>
<div class="pint">Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição</div><div class="pbox-def">1. Módulos de alto nível não devem depender de módulos de baixo nível — ambos devem depender de abstrações.<br>2. Abstrações não devem depender de detalhes — detalhes devem depender de abstrações. — Robert C. Martin</div></div>
${ra("💡","DIP é o princípio por trás de todo sistema de <strong>Injeção de Dependência (DI)</strong>. Frameworks como NestJS, Spring, e Angular são construídos sobre ele.","info")}
${J(`// ✗ RUIM — alto nível (OrderService) depende de baixo nível (MySQLDatabase)
class MySQLDatabase {
  save(data: any) { /* mysql query */ }
}

class OrderService {
  private db = new MySQLDatabase(); // Acoplamento direto!

  createOrder(order: Order) {
    this.db.save(order); // OrderService sabe que existe MySQL
  }
}`,`# ✗ RUIM
class MySQLDatabase:
    def save(self, data): pass  # mysql

class OrderService:
    def __init__(self):
        self.db = MySQLDatabase()  # Acoplamento direto

    def create_order(self, order):
        self.db.save(order)`,void 0)}
${J(`// ✓ BOM — ambos dependem da abstração (interface)
interface OrderRepository {
  save(order: Order): Promise<void>;
}

// Alto nível depende de abstração
class OrderService {
  constructor(private repo: OrderRepository) {} // DI via construtor

  async createOrder(order: Order) {
    await this.repo.save(order);
  }
}

// Detalhes dependem de abstração
class MySQLOrderRepository implements OrderRepository {
  async save(order: Order) { /* mysql query */ }
}

class InMemoryOrderRepository implements OrderRepository {
  private orders: Order[] = [];
  async save(order: Order) { this.orders.push(order); }
}

// Produção:
const service = new OrderService(new MySQLOrderRepository());
// Testes:
const serviceTest = new OrderService(new InMemoryOrderRepository());`,`# ✓ BOM
from abc import ABC, abstractmethod

class OrderRepository(ABC):
    @abstractmethod
    async def save(self, order): ...

class OrderService:
    def __init__(self, repo: OrderRepository):
        self.repo = repo  # DI via construtor

class MySQLOrderRepository(OrderRepository):
    async def save(self, order): ...  # detalhes do MySQL

class InMemoryOrderRepository(OrderRepository):
    def __init__(self): self.orders = []
    async def save(self, order): self.orders.append(order)`,void 0)}
${se("Qual é a relação entre DIP e testabilidade?",["Nenhuma — testes são uma preocupação separada","DIP torna o código mais difícil de testar por adicionar mais abstrações","DIP permite substituir implementações reais por mocks/stubs, tornando testes unitários possíveis sem infraestrutura","DIP só beneficia testes de integração"],2,"✅ Exatamente. Com DIP, você pode injetar um InMemoryRepository no lugar de um MySQL durante testes — sem banco de dados, sem rede, sem configuração. Isso é o que torna o TDD viável em sistemas reais.")}
`}]},{id:"principios",title:"Outros Princípios",emoji:"⚖️",color:"#4ADE80",level:"i",sections:[{id:"dry",title:"DRY",level:"i",content:`
<div class="ph"><div class="pic">🌵</div><div class="pm">
<div class="pcat">Princípios · Design</div>
<div class="pname">DRY — Don't Repeat Yourself</div>
<div class="pint">Cada pedaço de conhecimento deve ter uma representação única, inequívoca e autoritativa no sistema.</div>
</div></div>
<div class="pbox"><div class="pbox-name">Definição Original</div><div class="pbox-def">"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system." — The Pragmatic Programmer</div></div>
${ra("⚠️","DRY não é sobre código duplicado em si — é sobre <strong>conhecimento duplicado</strong>. Duas funções com código similar que representam regras de negócio diferentes <em>não devem</em> ser unificadas. Unificar por acidente cria acoplamento desnecessário.","warning")}
<h2>WET: a violação</h2>
<p><strong>WET</strong> = "Write Everything Twice" (ou "We Enjoy Typing"). O sinal é: você muda uma regra em um lugar e precisa lembrar de mudar em 5 outros.</p>
${J(`// ✗ RUIM — validação de email duplicada em 3 lugares
class UserController {
  register(dto: RegisterDto) {
    if (!dto.email.includes('@') || dto.email.length < 5)
      throw new Error('Email inválido'); // regra aqui
    // ...
  }
  updateEmail(dto: UpdateEmailDto) {
    if (!dto.email.includes('@') || dto.email.length < 5)
      throw new Error('Email inválido'); // mesma regra aqui
    // ...
  }
}
class AdminController {
  createUser(dto: CreateUserDto) {
    if (!dto.email.includes('@') || dto.email.length < 5)
      throw new Error('Email inválido'); // e aqui também
  }
}`,`# ✗ WET
def registrar(email):
    if '@' not in email or len(email) < 5:
        raise ValueError('Email inválido')  # duplicado

def atualizar_email(email):
    if '@' not in email or len(email) < 5:  # mesma regra
        raise ValueError('Email inválido')`,void 0)}
${J(`// ✓ BOM — conhecimento centralizado
function isEmailValido(email: string): boolean {
  return email.includes('@') && email.length >= 5;
}

// Value Object (DDD style) — ainda melhor
class Email {
  private readonly value: string;
  constructor(raw: string) {
    if (!raw.includes('@') || raw.length < 5)
      throw new Error('Email inválido');
    this.value = raw.toLowerCase();
  }
  toString() { return this.value; }
}

// Agora a regra vive em UM lugar — mudar aqui muda em todo o sistema
const email = new Email('cesar@aethostech.com.br');`,`# ✓ BOM
class Email:
    def __init__(self, raw: str):
        if '@' not in raw or len(raw) < 5:
            raise ValueError('Email inválido')
        self.value = raw.lower()

    def __str__(self): return self.value`,void 0)}
${se("Qual cenário é uma violação do DRY?",['Dois controllers com métodos chamados "create" que fazem coisas diferentes',"A mesma regra de validação de CPF implementada independentemente em 4 módulos do sistema","Uma função de 50 linhas que poderia ser dividida em 3 funções menores","Usar a mesma biblioteca em dois projetos diferentes"],1,"✅ Quando a regra de validação de CPF muda (ex: nova regra da Receita Federal), você precisaria atualizar 4 lugares — e provavelmente esqueceria de um. Isso é conhecimento duplicado, a essência do problema que o DRY resolve.")}
${Zn(`// DRY na prática — Value Object elimina duplicação
class Email {
  constructor(raw) {
    if (!raw || !raw.includes('@') || raw.length < 5)
      throw new Error('Email inválido: ' + raw);
    this.value = raw.toLowerCase().trim();
  }
  toString() { return this.value; }
  equals(other) { return this.value === other.value; }
}

// Mesma regra, zero duplicação
try {
  const e1 = new Email('CESAR@AETHOSTECH.COM.BR');
  const e2 = new Email('cesar@aethostech.com.br');
  console.log('Email válido:', e1.toString());
  console.log('São iguais?', e1.equals(e2));

  new Email('invalido'); // vai lançar exceção
} catch(e) {
  console.log('Erro capturado:', e.message);
}
`,"Tente criar um Email inválido!")}
`},{id:"kiss",title:"KISS · YAGNI · LoD",level:"i",content:`
<h1>KISS, YAGNI e Lei de Deméter</h1>
<p class="lead">Três princípios que combatem a superengenharia e o acoplamento excessivo.</p>
<h2>KISS — Keep It Simple</h2>
<div class="pbox"><div class="pbox-name">KISS</div><div class="pbox-def">Sistemas funcionam melhor quando são mantidos simples. <strong>Complexidade deve ser evitada sempre que possível.</strong></div></div>
<p>A complexidade tem um custo permanente: cada pessoa que entra no time precisa aprender, cada bug precisa ser rastreado através dela, cada feature nova precisa se encaixar nela.</p>
${gs("Criar uma hierarquia de herança com 4 níveis + 3 interfaces + 2 abstract factories para resolver um problema que um mapa simples de funções resolvia.","Função de 15 linhas que faz exatamente o que precisa, sem abstrações prematuras. Pode ser lida e entendida em 30 segundos.")}
${ra("💡","<strong>Sinal de KISS violado:</strong> você precisa de um diagrama para explicar como resolver um problema simples.","info")}
<h2>YAGNI — You Aren't Gonna Need It</h2>
<div class="pbox"><div class="pbox-name">YAGNI</div><div class="pbox-def">Não implemente algo até que você <strong>realmente precise dele</strong>. — Kent Beck (XP)</div></div>
<p>Cada linha de código que você escreve é código que precisa ser mantido, testado, documentado e entendido. Código "para o futuro" frequentemente nunca é usado — e quando o futuro chega, o requisito real é diferente do que você imaginou.</p>
${gs("Criar um sistema de plugins extensível, configurável e multi-tenant para um MVP que tem 3 clientes e um caso de uso definido.","Escrever o código mais simples que satisfaz o requisito atual. Quando o requisito de extensibilidade surgir, você terá contexto real para projetar bem.")}
<h2>Lei de Deméter (LoD)</h2>
<div class="pbox"><div class="pbox-name">Lei de Deméter — Princípio do Menor Conhecimento</div><div class="pbox-def">Um módulo deve conhecer o mínimo sobre os internos de outros módulos. Fale apenas com seus <strong>amigos imediatos</strong>, não com desconhecidos.</div></div>
<p>Na prática: <code>a.b.c.doSomething()</code> é um sinal vermelho. Você está atravessando camadas que não são suas.</p>
${J(`// ✗ RUIM — train wreck / encadeamento profundo
user.getAddress().getCity().getPostalCode().getPrefix();
order.getCustomer().getProfile().getPreferences().getTheme();

// ✓ BOM — delegue a responsabilidade para o objeto correto
user.getPostalCodePrefix(); // User sabe como delegar internamente
order.getCustomerTheme();`,`# ✗ RUIM
user.get_address().get_city().get_postal_code().get_prefix()

# ✓ BOM
user.get_postal_code_prefix()  # delegação interna`,void 0)}
${se('Qual é o principal risco do "train wreck" (a.b.c.d)?',["O código fica mais lento por criar muitos objetos intermediários","Você acopla sua classe a toda a cadeia de dependências — se Address mudar sua estrutura interna, código em UserController quebra","Dificulta a leitura do código","Causa memory leak"],1,"✅ O acoplamento em cascata é o real problema. Quando você escreve user.getAddress().getCity(), seu código depende não só de User, mas de Address e City. Uma mudança em qualquer um quebra você.")}
`},{id:"cqs",title:"CQS e SoC",level:"m",content:`
<h1>CQS e Separation of Concerns</h1>
<h2>CQS — Command Query Separation</h2>
<div class="pbox"><div class="pbox-name">CQS — Bertrand Meyer</div><div class="pbox-def">Todo método deve ser <strong>Command</strong> (muda estado, não retorna nada) OU <strong>Query</strong> (retorna dados, não muda estado). <strong>Nunca os dois.</strong></div></div>
${J(`// ✗ RUIM — método que muda estado E retorna dado
class Stack<T> {
  pop(): T { // Viola CQS — remove E retorna
    const item = this.items[this.items.length - 1];
    this.items.pop();
    return item;
  }
}

// ✓ BOM — separado
class Stack<T> {
  peek(): T { return this.items[this.items.length - 1]; } // Query
  pop(): void { this.items.pop(); }                        // Command
}

// Outro exemplo — função de save que retorna ID é CQS violado:
// ✗ save(user): string  → salva E retorna ID
// ✓ save(user): void    → só salva (Command)
// ✓ nextId(): string    → só retorna próximo ID (Query)`,`# ✗ RUIM
def pop(self):
    item = self.items[-1]
    self.items.pop()  # muda estado
    return item       # E retorna — ambos!

# ✓ BOM
def peek(self): return self.items[-1]  # só query
def pop(self): self.items.pop()        # só command`,void 0)}
<h2>Separation of Concerns (SoC)</h2>
<div class="pbox"><div class="pbox-name">SoC</div><div class="pbox-def">Partes do sistema que lidam com <strong>preocupações diferentes</strong> devem ser separadas. Cada parte deve endereçar uma, e apenas uma, preocupação.</div></div>
<p>SoC é o princípio que justifica a existência de camadas (UI, lógica, dados), de módulos separados (auth, billing, notification), e de microservices.</p>
<table><tr><th>Concern</th><th>Responsabilidade</th><th>Exemplos</th></tr>
<tr><td>Apresentação</td><td>Como mostrar ao usuário</td><td>React components, views, templates</td></tr>
<tr><td>Negócio</td><td>Regras e workflows do domínio</td><td>Services, use cases, domain objects</td></tr>
<tr><td>Dados</td><td>Persistência e acesso</td><td>Repositories, ORM, queries</td></tr>
<tr><td>Infraestrutura</td><td>Comunicação com mundo externo</td><td>HTTP clients, queues, email, storage</td></tr>
</table>
${se("Qual é a consequência prática do CQS em APIs REST?",["GET não deve ter body; POST não deve ter query params","Endpoints de leitura (GET) não devem ter efeitos colaterais; endpoints de escrita (POST/PUT/DELETE) não precisam retornar o recurso completo","APIs RESTful violam CQS por natureza","CQS não se aplica a APIs — é um princípio apenas para OOP"],1,"✅ No REST, GET requests são Queries: nenhum efeito colateral, idempotentes, cacheáveis. POST/PUT/DELETE são Commands. Quando um POST cria um recurso e retorna o objeto completo, isso é conveniente mas tecnicamente viola CQS puro — a CQRS architectural pattern resolve isso de forma mais elaborada.")}
`}]},{id:"criacionais",title:"Patterns Criacionais",emoji:"🏭",color:"#F87171",level:"m",sections:[{id:"factory",title:"Factory Method",level:"m",content:`
<div class="ph"><div class="pic">🏭</div><div class="pm">
<div class="pcat">GoF Criacional · 1/5</div>
<div class="pname">Factory Method</div>
<div class="pint">Define uma interface para criar objetos, mas deixa as subclasses decidirem qual classe instanciar.</div>
</div></div>
<div class="ptags"><div class="tag">Criacional</div><div class="tag">GoF</div><div class="tag">Polimorfismo</div><div class="tag">OCP</div></div>
<h2>Problema</h2>
<p>Você precisa criar objetos, mas o tipo exato só é conhecido em tempo de execução — ou você quer que subclasses determinem o tipo. Usar <code>new ConcreteClass()</code> diretamente acopla o código ao tipo concreto.</p>
<h2>Estrutura</h2>
${Ta(`  Creator (abstract)
  ├── + factoryMethod(): Product  ← subclasses sobrescrevem
  └── + operation()               ← usa o produto

  ConcreteCreatorA         ConcreteCreatorB
  └── factoryMethod()      └── factoryMethod()
       → ProductA               → ProductB`)}
${J(`// Produto
interface Notificacao {
  enviar(msg: string): void;
}

class NotificacaoEmail implements Notificacao {
  enviar(msg: string) { console.log(\`📧 Email: \${msg}\`); }
}

class NotificacaoSMS implements Notificacao {
  enviar(msg: string) { console.log(\`📱 SMS: \${msg}\`); }
}

class NotificacaoPush implements Notificacao {
  enviar(msg: string) { console.log(\`🔔 Push: \${msg}\`); }
}

// Creator abstrato com factory method
abstract class NotificacaoService {
  abstract criarNotificacao(): Notificacao; // factory method

  notificar(msg: string) { // usa o factory method internamente
    const notif = this.criarNotificacao();
    notif.enviar(msg);
  }
}

// Criadores concretos
class EmailService extends NotificacaoService {
  criarNotificacao() { return new NotificacaoEmail(); }
}

class SMSService extends NotificacaoService {
  criarNotificacao() { return new NotificacaoSMS(); }
}

// Uso
const service: NotificacaoService = new EmailService();
service.notificar('Seu pedido foi aprovado!');`,`from abc import ABC, abstractmethod

class Notificacao(ABC):
    @abstractmethod
    def enviar(self, msg: str): ...

class NotificacaoEmail(Notificacao):
    def enviar(self, msg): print(f'📧 Email: {msg}')

class NotificacaoSMS(Notificacao):
    def enviar(self, msg): print(f'📱 SMS: {msg}')

class NotificacaoService(ABC):
    @abstractmethod
    def criar_notificacao(self) -> Notificacao: ...

    def notificar(self, msg: str):
        notif = self.criar_notificacao()
        notif.enviar(msg)

class EmailService(NotificacaoService):
    def criar_notificacao(self): return NotificacaoEmail()`,void 0)}
<h2>Quando usar</h2>
<ul>
<li>Quando o tipo exato do objeto a criar não é conhecido até runtime</li>
<li>Quando você quer que subclasses decidam qual objeto criar</li>
<li>Quando quer evitar acoplar código a classes concretas</li>
</ul>
<h2>Quando NÃO usar</h2>
<ul>
<li>Para criações simples que não variam — é overengineering</li>
<li>Quando uma função de criação simples já resolve</li>
</ul>
${se("Qual a diferença entre Factory Method e Simple Factory (função que retorna objetos)?",["Não há diferença prática","Factory Method usa polimorfismo e herança — subclasses decidem o que criar. Simple Factory é só uma função de conveniência — sem extensão via herança","Simple Factory é a versão moderna e deve substituir Factory Method","Factory Method só funciona em linguagens estáticas"],1,"✅ Simple Factory é um padrão criacional informal. Factory Method é um padrão GoF formal que usa polimorfismo: adicionar um novo tipo significa criar uma nova subclasse, sem modificar o criador base (OCP).")}
`},{id:"builder",title:"Builder",level:"m",content:`
<div class="ph"><div class="pic">🔨</div><div class="pm">
<div class="pcat">GoF Criacional · 2/5</div>
<div class="pname">Builder</div>
<div class="pint">Separa a construção de um objeto complexo da sua representação, permitindo o mesmo processo criar diferentes representações.</div>
</div></div>
<h2>Problema</h2>
<p>Objetos com muitos parâmetros opcionais geram construtores monstruosos (<em>telescoping constructors</em>) ou objetos inválidos criados em dois passos.</p>
${J(`// ✗ RUIM — telescoping constructor
const pizza = new Pizza('grande', 'calabresa', true, false, true, 'grossa', 'tradicional');
//                      ↑ O que é cada boolean?? 🤷

// ✓ BOM — Builder com fluent interface
const pizza = new PizzaBuilder()
  .tamanho('grande')
  .sabor('calabresa')
  .comQueijo()
  .semCebola()
  .bordaRecheada('catupiry')
  .build();

// Implementação
class Pizza {
  constructor(
    readonly tamanho: string,
    readonly sabor: string,
    readonly queijo: boolean,
    readonly cebola: boolean,
    readonly borda: string | null
  ) {}
}

class PizzaBuilder {
  private _tamanho = 'media';
  private _sabor = 'mussarela';
  private _queijo = true;
  private _cebola = true;
  private _borda: string | null = null;

  tamanho(t: string) { this._tamanho = t; return this; }
  sabor(s: string) { this._sabor = s; return this; }
  comQueijo() { this._queijo = true; return this; }
  semQueijo() { this._queijo = false; return this; }
  semCebola() { this._cebola = false; return this; }
  bordaRecheada(recheio: string) { this._borda = recheio; return this; }

  build(): Pizza {
    return new Pizza(this._tamanho, this._sabor, this._queijo, this._cebola, this._borda);
  }
}`,`class Pizza:
    def __init__(self, tamanho, sabor, queijo, cebola, borda):
        self.tamanho = tamanho
        self.sabor = sabor
        self.queijo = queijo
        self.borda = borda

class PizzaBuilder:
    def __init__(self):
        self._tamanho = 'media'
        self._sabor = 'mussarela'
        self._queijo = True
        self._borda = None

    def tamanho(self, t): self._tamanho = t; return self
    def sabor(self, s): self._sabor = s; return self
    def sem_queijo(self): self._queijo = False; return self
    def borda_recheada(self, r): self._borda = r; return self

    def build(self):
        return Pizza(self._tamanho, self._sabor, self._queijo, True, self._borda)`,void 0)}
${se("Qual é o principal benefício do método build() no final da cadeia Builder?",["Faz a validação e pode lançar exceção se o objeto estiver em estado inválido","Apenas converte o Builder em outro tipo","É necessário por limitações das linguagens OOP","Retorna uma cópia do builder para reuso"],0,'✅ O build() é o momento de validação e criação do objeto final. Ali você pode checar: "um pedido sem itens não pode ser criado", "uma pizza sem sabor é inválida". O Builder garante que o objeto final é sempre válido.')}
${Zn(`// Builder Pattern — experimente construir uma pizza!
class Pizza {
  constructor(t, s, q, b) {
    this.tamanho = t; this.sabor = s;
    this.queijo = q; this.borda = b;
  }
  toString() {
    return \`Pizza \${this.tamanho} de \${this.sabor}\${this.queijo?' com queijo':' sem queijo'}\${this.borda?' borda '+this.borda:''}\`;
  }
}

class PizzaBuilder {
  constructor() { this._t='media'; this._s='mussarela'; this._q=true; this._b=null; }
  tamanho(t) { this._t=t; return this; }
  sabor(s) { this._s=s; return this; }
  semQueijo() { this._q=false; return this; }
  bordaRecheada(r) { this._b=r; return this; }
  build() { return new Pizza(this._t, this._s, this._q, this._b); }
}

const pizza = new PizzaBuilder()
  .tamanho('grande')
  .sabor('calabresa')
  .semQueijo()
  .bordaRecheada('catupiry')
  .build();

console.log(pizza.toString());
console.log('Total de passos: 4 (sem constructor monstruoso!)');
`,"Edite e clique Executar para experimentar")}
`},{id:"singleton",title:"Singleton",level:"i",content:`
<div class="ph"><div class="pic">💎</div><div class="pm">
<div class="pcat">GoF Criacional · 3/5</div>
<div class="pname">Singleton</div>
<div class="pint">Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.</div>
</div></div>
${ra("⚠️","Singleton é o padrão GoF mais controverso e frequentemente <strong>abusado</strong>. Use com cautela — ele é um estado global disfarçado e dificulta testes.","danger")}
${J(`// Implementação thread-safe (Node.js single-thread → simples)
class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private pool: ConnectionPool;

  private constructor() {
    this.pool = new ConnectionPool({ host: process.env.DB_HOST! });
  }

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  query(sql: string) { return this.pool.query(sql); }
}

// Uso
const db = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db === db2); // true — mesma instância`,`class DatabaseConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.pool = ConnectionPool()
        return cls._instance

db1 = DatabaseConnection()
db2 = DatabaseConnection()
print(db1 is db2)  # True`,void 0)}
<h2>Quando usar (raramente)</h2>
<ul><li>Logger global único</li><li>Pool de conexões com banco</li><li>Cache de configuração lida uma vez</li></ul>
<h2>Alternativas melhores</h2>
<ul><li><strong>DI Container</strong> — frameworks gerenciam o ciclo de vida (NestJS, Spring)</li><li><strong>Module-level singleton</strong> — em Node.js, módulos são singletons por natureza</li></ul>
${se("Por que Singleton dificulta testes unitários?",["Porque é difícil importar","Porque o estado global persiste entre testes — um teste pode contaminar o próximo, e você não consegue injetar um mock","Porque usa muito memória","Porque é thread-unsafe"],1,"✅ Quando DatabaseConnection.getInstance() retorna sempre a mesma instância, você não consegue injetar um mock. Cada teste que usa o Singleton compartilha estado — ordem de execução dos testes importa, e isso é um pesadelo. DI resolve isso.")}
`},{id:"prototype-abstract",title:"Prototype & Abstract Factory",level:"m",content:`
<h1>Prototype & Abstract Factory</h1>
<h2>Prototype</h2>
<div class="ph"><div class="pic">🧬</div><div class="pm">
<div class="pcat">GoF Criacional · 4/5</div>
<div class="pname">Prototype</div>
<div class="pint">Cria objetos novos copiando (clonando) um objeto existente — o protótipo.</div>
</div></div>
${J(`interface Clonavel<T> {
  clone(): T;
}

class Personagem implements Clonavel<Personagem> {
  constructor(
    public nome: string,
    public vida: number,
    public habilidades: string[]
  ) {}

  clone(): Personagem {
    return new Personagem(
      this.nome,
      this.vida,
      [...this.habilidades] // deep copy do array
    );
  }
}

const heroi = new Personagem('Arquiteto', 100, ['SOLID', 'DDD', 'TDD']);
const clone = heroi.clone();
clone.nome = 'Arquiteto Clone';
// heroi.nome ainda é 'Arquiteto'`,`import copy

class Personagem:
    def __init__(self, nome, vida, habilidades):
        self.nome = nome
        self.vida = vida
        self.habilidades = habilidades

    def clone(self):
        return copy.deepcopy(self)

heroi = Personagem('Arquiteto', 100, ['SOLID', 'DDD'])
clone = heroi.clone()
clone.nome = 'Clone'  # heroi.nome intocado`,void 0)}
<h2>Abstract Factory</h2>
<div class="ph"><div class="pic">🏗️</div><div class="pm">
<div class="pcat">GoF Criacional · 5/5</div>
<div class="pname">Abstract Factory</div>
<div class="pint">Fornece uma interface para criar famílias de objetos relacionados sem especificar suas classes concretas.</div>
</div></div>
<p>Pense em uma fábrica de UI: no macOS você quer botões, checkboxes e menus com estilo Mac. No Windows, estilo Windows. Abstract Factory garante que você usa sempre a família certa.</p>
${J(`// Família de componentes
interface Button { render(): void; }
interface Checkbox { render(): void; }

// Abstract Factory
interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Família macOS
class MacButton implements Button { render() { console.log('🍎 Mac Button'); } }
class MacCheckbox implements Checkbox { render() { console.log('🍎 Mac Checkbox'); } }
class MacUIFactory implements UIFactory {
  createButton() { return new MacButton(); }
  createCheckbox() { return new MacCheckbox(); }
}

// Família Windows
class WinButton implements Button { render() { console.log('🪟 Win Button'); } }
class WinCheckbox implements Checkbox { render() { console.log('🪟 Win Checkbox'); } }
class WinUIFactory implements UIFactory {
  createButton() { return new WinButton(); }
  createCheckbox() { return new WinCheckbox(); }
}

// App usa a fábrica sem saber qual família está usando
function renderApp(factory: UIFactory) {
  factory.createButton().render();
  factory.createCheckbox().render();
}`,void 0,void 0)}
${se("Qual é a diferença principal entre Factory Method e Abstract Factory?",["Abstract Factory é mais moderno e substitui Factory Method","Factory Method cria um produto usando herança. Abstract Factory cria famílias de produtos relacionados usando composição","Abstract Factory só funciona para criar UI components","Factory Method retorna interface; Abstract Factory retorna classe concreta"],1,"✅ Factory Method: uma operação de criação via herança. Abstract Factory: um objeto inteiro dedicado a criar uma família de objetos relacionados. Use Abstract Factory quando você precisa garantir que os produtos criados são compatíveis entre si.")}
`}]},{id:"estruturais",title:"Patterns Estruturais",emoji:"🔧",color:"#60A5FA",level:"m",sections:[{id:"adapter-facade",title:"Adapter & Facade",level:"m",content:`
<h1>Adapter & Facade</h1>
<h2>Adapter</h2>
<div class="ph"><div class="pic">🔌</div><div class="pm">
<div class="pcat">GoF Estrutural · 1/7</div>
<div class="pname">Adapter</div>
<div class="pint">Converte a interface de uma classe em outra interface esperada pelos clientes. Permite que classes incompatíveis trabalhem juntas.</div>
</div></div>
${J(`// Interface que o sistema espera
interface Logger {
  log(level: string, msg: string): void;
  error(msg: string): void;
}

// Biblioteca externa com interface diferente (Pino, Winston, etc)
class PinoLogger {
  pino_log(data: { level: string; message: string }) { /* ... */ }
  pino_error(data: { err: string }) { /* ... */ }
}

// Adapter — faz Pino se comportar como Logger
class PinoAdapter implements Logger {
  constructor(private pino: PinoLogger) {}

  log(level: string, msg: string) {
    this.pino.pino_log({ level, message: msg });
  }

  error(msg: string) {
    this.pino.pino_error({ err: msg });
  }
}

// Sistema usa Logger (nossa interface) — não sabe que é Pino por baixo
const logger: Logger = new PinoAdapter(new PinoLogger());
logger.log('info', 'Sistema iniciado');`,`class PinoLogger:
    def pino_log(self, data): ...
    def pino_error(self, data): ...

class PinoAdapter:
    def __init__(self, pino: PinoLogger):
        self.pino = pino

    def log(self, level, msg):
        self.pino.pino_log({'level': level, 'message': msg})

    def error(self, msg):
        self.pino.pino_error({'err': msg})`,void 0)}
<h2>Facade</h2>
<div class="ph"><div class="pic">🏛️</div><div class="pm">
<div class="pcat">GoF Estrutural · 2/7</div>
<div class="pname">Facade</div>
<div class="pint">Fornece uma interface simplificada para um subsistema complexo.</div>
</div></div>
${J(`// Subsistema complexo com muitas classes
class VideoDecoder { decode(file: File): RawVideo { /* ... */ return {} as any; } }
class AudioDecoder { decode(file: File): RawAudio { /* ... */ return {} as any; } }
class VideoEncoder { encode(v: RawVideo, format: string): Buffer { /* ... */ return {} as any; } }
class AudioEncoder { encode(a: RawAudio, bitrate: number): Buffer { /* ... */ return {} as any; } }
class FileWriter { write(data: Buffer, path: string) { /* ... */ } }

// Facade — interface simples para o subsistema
class VideoConverter {
  private vd = new VideoDecoder();
  private ad = new AudioDecoder();
  private ve = new VideoEncoder();
  private ae = new AudioEncoder();
  private fw = new FileWriter();

  convert(input: File, format: 'mp4' | 'webm', output: string) {
    const rawVideo = this.vd.decode(input);
    const rawAudio = this.ad.decode(input);
    const video = this.ve.encode(rawVideo, format);
    const audio = this.ae.encode(rawAudio, 128);
    this.fw.write(Buffer.concat([video, audio]), output);
  }
}

// Uso simples — cliente não sabe da complexidade
const converter = new VideoConverter();
converter.convert(file, 'mp4', 'output.mp4');`,void 0,void 0)}
${se("Qual a diferença entre Adapter e Facade?",["Adapter é para bibliotecas externas; Facade é para código interno","Adapter converte uma interface existente em outra esperada. Facade cria uma interface nova e simplificada sobre um subsistema complexo","Facade e Adapter fazem a mesma coisa com nomes diferentes","Adapter requer herança; Facade requer composição"],1,"✅ Adapter resolve incompatibilidade de interfaces — é uma tradução. Facade resolve complexidade — é uma simplificação. Adapter não muda a interface do subsistema; Facade cria uma nova interface que esconde os detalhes.")}
`},{id:"decorator-proxy",title:"Decorator & Proxy",level:"m",content:`
<h1>Decorator & Proxy</h1>
<h2>Decorator</h2>
<div class="ph"><div class="pic">🎀</div><div class="pm">
<div class="pcat">GoF Estrutural · 3/7</div>
<div class="pname">Decorator</div>
<div class="pint">Adiciona comportamentos a objetos dinamicamente, sem alterar sua classe.</div>
</div></div>
<p>Herança é estática — você herda tudo e não pode mudar em runtime. Decorator permite compor comportamentos dinamicamente, como camadas.</p>
${J(`interface DataSource {
  read(): string;
  write(data: string): void;
}

// Componente base
class FileDataSource implements DataSource {
  constructor(private filename: string) {}
  read() { return \`data from \${this.filename}\`; }
  write(data: string) { console.log(\`writing to \${this.filename}\`); }
}

// Base do Decorator
abstract class DataSourceDecorator implements DataSource {
  constructor(protected wrapped: DataSource) {}
  read() { return this.wrapped.read(); }
  write(data: string) { this.wrapped.write(data); }
}

// Decorator de compressão
class CompressionDecorator extends DataSourceDecorator {
  read() { return \`[decompress] \${this.wrapped.read()}\`; }
  write(data: string) { this.wrapped.write(\`[compress] \${data}\`); }
}

// Decorator de encriptação
class EncryptionDecorator extends DataSourceDecorator {
  read() { return \`[decrypt] \${this.wrapped.read()}\`; }
  write(data: string) { this.wrapped.write(\`[encrypt] \${data}\`); }
}

// Composição dinâmica de comportamentos
let source: DataSource = new FileDataSource('data.bin');
source = new CompressionDecorator(source);
source = new EncryptionDecorator(source);

source.write('secret data'); // → [encrypt] [compress] secret data`,`from abc import ABC, abstractmethod

class DataSource(ABC):
    @abstractmethod
    def read(self) -> str: ...
    @abstractmethod
    def write(self, data: str): ...

class FileDataSource(DataSource):
    def read(self): return 'file data'
    def write(self, data): print(f'writing: {data}')

class CompressionDecorator(DataSource):
    def __init__(self, wrapped): self._w = wrapped
    def read(self): return f'[decompress] {self._w.read()}'
    def write(self, data): self._w.write(f'[compress] {data}')`,void 0)}
<h2>Proxy</h2>
<div class="ph"><div class="pic">🪞</div><div class="pm">
<div class="pcat">GoF Estrutural · 4/7</div>
<div class="pname">Proxy</div>
<div class="pint">Fornece um substituto ou ponto de acesso a outro objeto para controlar o acesso a ele.</div>
</div></div>
${J(`interface UserService {
  getUser(id: string): Promise<User>;
}

// Serviço real
class RealUserService implements UserService {
  async getUser(id: string): Promise<User> {
    return fetch(\`/api/users/\${id}\`).then(r => r.json());
  }
}

// Proxy com cache — mesmo contrato, comportamento diferente
class CachedUserService implements UserService {
  private cache = new Map<string, User>();

  constructor(private service: UserService) {}

  async getUser(id: string): Promise<User> {
    if (this.cache.has(id)) {
      console.log('Cache hit!');
      return this.cache.get(id)!;
    }
    const user = await this.service.getUser(id);
    this.cache.set(id, user);
    return user;
  }
}

// Uso transparente — cliente não sabe se é real ou proxy
const service: UserService = new CachedUserService(new RealUserService());`,void 0,void 0)}
${se("Qual a diferença entre Proxy e Decorator?",["São idênticos — apenas nomes diferentes","Proxy controla acesso ao objeto original (lazy loading, cache, auth, logging) sem adicionar funcionalidades. Decorator adiciona comportamentos ao objeto sem alterar o acesso","Proxy sempre usa herança; Decorator sempre usa composição","Proxy é para objetos remotos; Decorator é para objetos locais"],1,"✅ A distinção é de intenção: Proxy gerencia o acesso (quando e se o objeto real é acessado). Decorator enriquece o comportamento (o que acontece quando o objeto é acessado). Na prática, a estrutura é similar, mas o propósito é diferente.")}
`},{id:"composite-bridge",title:"Composite, Bridge & Flyweight",level:"s",content:`
<h1>Composite, Bridge & Flyweight</h1>
<h2>Composite</h2>
<div class="ph"><div class="pic">🌲</div><div class="pm">
<div class="pcat">GoF Estrutural · 5/7</div>
<div class="pname">Composite</div>
<div class="pint">Compõe objetos em estruturas de árvore para representar hierarquias parte-todo. Permite tratar objetos individuais e composições uniformemente.</div>
</div></div>
${J(`interface FileSystemItem {
  getName(): string;
  getSize(): number;
  print(indent?: string): void;
}

class Arquivo implements FileSystemItem {
  constructor(private name: string, private size: number) {}
  getName() { return this.name; }
  getSize() { return this.size; }
  print(indent = '') { console.log(\`\${indent}📄 \${this.name} (\${this.size}kb)\`); }
}

class Pasta implements FileSystemItem {
  private items: FileSystemItem[] = [];
  constructor(private name: string) {}
  add(item: FileSystemItem) { this.items.push(item); }
  getName() { return this.name; }
  getSize() { return this.items.reduce((s, i) => s + i.getSize(), 0); }
  print(indent = '') {
    console.log(\`\${indent}📁 \${this.name}\`);
    this.items.forEach(i => i.print(indent + '  '));
  }
}

const root = new Pasta('projetos');
const front = new Pasta('frontend');
front.add(new Arquivo('App.tsx', 12));
front.add(new Arquivo('index.css', 3));
root.add(front);
root.add(new Arquivo('README.md', 1));
root.print(); // Trata Pasta e Arquivo uniformemente`,void 0,void 0)}
<h2>Bridge</h2>
<div class="ph"><div class="pic">🌉</div><div class="pm">
<div class="pcat">GoF Estrutural · 6/7</div>
<div class="pname">Bridge</div>
<div class="pint">Separa uma abstração de sua implementação para que as duas possam variar independentemente.</div>
</div></div>
${J(`// Implementação (pode variar)
interface Renderer {
  renderCircle(x: number, y: number, r: number): void;
}

class SVGRenderer implements Renderer {
  renderCircle(x, y, r) { console.log(\`<circle cx="\${x}" cy="\${y}" r="\${r}"/>\`); }
}
class CanvasRenderer implements Renderer {
  renderCircle(x, y, r) { console.log(\`ctx.arc(\${x},\${y},\${r},0,2π)\`); }
}

// Abstração usa a implementação via bridge
abstract class Forma {
  constructor(protected renderer: Renderer) {}
  abstract draw(): void;
}

class Circulo extends Forma {
  constructor(renderer: Renderer, private x: number, private y: number, private r: number) {
    super(renderer);
  }
  draw() { this.renderer.renderCircle(this.x, this.y, this.r); }
}

// Abstrações e implementações variam independentemente
const circuloSVG = new Circulo(new SVGRenderer(), 50, 50, 20);
const circuloCanvas = new Circulo(new CanvasRenderer(), 50, 50, 20);`,void 0,void 0)}
${se("Composite é mais adequado quando:",["Você precisa adicionar comportamentos a objetos individualmente","Você precisa tratar objetos individuais e grupos de objetos da mesma forma, como em uma estrutura de árvore","Você precisa separar implementação de abstração","Você quer controlar o acesso a um objeto"],1,"✅ O poder do Composite está na uniformidade: client code não precisa saber se está lidando com um Arquivo ou uma Pasta — ambos são FileSystemItem. Isso simplifica algoritmos que precisam traversar hierarquias.")}
`}]},{id:"comportamentais",title:"Patterns Comportamentais",emoji:"🎭",color:"#A78BFA",level:"m",sections:[{id:"observer-strategy",title:"Observer & Strategy",level:"m",content:`
<h1>Observer & Strategy</h1>
<h2>Observer</h2>
<div class="ph"><div class="pic">👁️</div><div class="pm">
<div class="pcat">GoF Comportamental · 1/11</div>
<div class="pname">Observer</div>
<div class="pint">Define uma dependência um-para-muitos onde, quando um objeto muda de estado, todos os seus dependentes são notificados automaticamente.</div>
</div></div>
${J(`interface Observer<T> {
  update(data: T): void;
}

class EventEmitter<T> {
  private observers: Observer<T>[] = [];

  subscribe(obs: Observer<T>) { this.observers.push(obs); }
  unsubscribe(obs: Observer<T>) {
    this.observers = this.observers.filter(o => o !== obs);
  }
  notify(data: T) { this.observers.forEach(o => o.update(data)); }
}

// Domínio
interface OrderEvent { orderId: string; status: string; }

class OrderService extends EventEmitter<OrderEvent> {
  updateStatus(orderId: string, status: string) {
    // ... atualiza no banco
    this.notify({ orderId, status }); // notifica todos os observers
  }
}

// Observers independentes
class EmailNotifier implements Observer<OrderEvent> {
  update(e: OrderEvent) { console.log(\`📧 Email: pedido \${e.orderId} → \${e.status}\`); }
}

class AuditLogger implements Observer<OrderEvent> {
  update(e: OrderEvent) { console.log(\`📋 Audit: \${JSON.stringify(e)}\`); }
}

const svc = new OrderService();
svc.subscribe(new EmailNotifier());
svc.subscribe(new AuditLogger());
svc.updateStatus('ORD-001', 'shipped'); // ambos são notificados`,`class OrderService:
    def __init__(self):
        self._observers = []

    def subscribe(self, obs): self._observers.append(obs)
    def notify(self, event):
        for obs in self._observers: obs.update(event)

    def update_status(self, order_id, status):
        self.notify({'order_id': order_id, 'status': status})`,void 0)}
<h2>Strategy</h2>
<div class="ph"><div class="pic">♟️</div><div class="pm">
<div class="pcat">GoF Comportamental · 2/11</div>
<div class="pname">Strategy</div>
<div class="pint">Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis em tempo de execução.</div>
</div></div>
${J(`interface SortStrategy<T> {
  sort(data: T[]): T[];
}

class QuickSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] { return [...data].sort(); } // simplificado
}

class BubbleSort<T> implements SortStrategy<T> {
  sort(data: T[]): T[] {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++)
      for (let j = 0; j < arr.length - i - 1; j++)
        if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    return arr;
  }
}

class Sorter<T> {
  constructor(private strategy: SortStrategy<T>) {}

  setStrategy(s: SortStrategy<T>) { this.strategy = s; }
  sort(data: T[]) { return this.strategy.sort(data); }
}

const sorter = new Sorter(new QuickSort());
sorter.sort([3,1,4,1,5,9]);

// Muda estratégia em runtime
sorter.setStrategy(new BubbleSort());
sorter.sort([3,1,4,1,5,9]);`,void 0,void 0)}
${Zn(`// Strategy Pattern — algoritmos intercambiáveis
const strategies = {
  bubble: arr => {
    const a = [...arr];
    for(let i=0;i<a.length;i++)
      for(let j=0;j<a.length-i-1;j++)
        if(a[j]>a[j+1])[a[j],a[j+1]]=[a[j+1],a[j]];
    return a;
  },
  quick: arr => [...arr].sort((a,b)=>a-b),
  reverse: arr => [...arr].sort((a,b)=>b-a),
};

class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  setStrategy(s) { this.strategy = s; }
  sort(data) { return this.strategy(data); }
}

const data = [3,1,4,1,5,9,2,6];
const sorter = new Sorter(strategies.bubble);

console.log('Bubble:', sorter.sort(data).join(', '));
sorter.setStrategy(strategies.quick);
console.log('Quick: ', sorter.sort(data).join(', '));
sorter.setStrategy(strategies.reverse);
console.log('Reverse:', sorter.sort(data).join(', '));
`,"Adicione sua própria strategy!")}
${se("Qual problema Observer pode causar se não for bem gerenciado?",["Performance ruim por usar polimorfismo","Memory leaks — observers subscritos que não são removidos mantêm referências vivas, impedindo o garbage collector de liberar memória","Stack overflow por notificações recursivas (em geral)","Race conditions em JavaScript single-thread"],1,"✅ Memory leak é o problema clássico. Se um componente React, por exemplo, se inscreve em um EventEmitter no mount mas não cancela a subscrição no unmount, a referência ao componente fica viva mesmo após ser destruído. Sempre chame unsubscribe() no cleanup.")}
${Zn(`// Observer Pattern — sistema de eventos
class EventEmitter {
  constructor() { this.observers = {}; }
  on(event, fn) {
    if (!this.observers[event]) this.observers[event] = [];
    this.observers[event].push(fn);
    return () => this.off(event, fn); // retorna unsubscribe
  }
  off(event, fn) {
    this.observers[event] = (this.observers[event]||[]).filter(f=>f!==fn);
  }
  emit(event, data) {
    (this.observers[event]||[]).forEach(fn => fn(data));
  }
}

const bus = new EventEmitter();

// Subscrever
const unsub1 = bus.on('order.created', e => console.log('Email:', e.id));
const unsub2 = bus.on('order.created', e => console.log('Audit:', e.id, e.total));

bus.emit('order.created', { id: 'ORD-001', total: 250 });

// Cancelar subscrição
unsub1();
bus.emit('order.created', { id: 'ORD-002', total: 180 });
// Só o Audit recebe agora
`,"Experimente adicionar mais observers!")}
`},{id:"command-chain",title:"Command & Chain of Responsibility",level:"m",content:`
<h1>Command & Chain of Responsibility</h1>
<h2>Command</h2>
<div class="ph"><div class="pic">📋</div><div class="pm">
<div class="pcat">GoF Comportamental · 3/11</div>
<div class="pname">Command</div>
<div class="pint">Encapsula uma requisição como um objeto, permitindo parametrizar clientes, enfileirar, logar e suportar operações desfazíveis.</div>
</div></div>
${J(`interface Command {
  execute(): void;
  undo(): void;
}

class TextEditor {
  private text = '';
  private history: Command[] = [];

  insert(text: string, pos: number) {
    const cmd = new InsertCommand(this, text, pos);
    cmd.execute();
    this.history.push(cmd);
  }

  undoLast() {
    this.history.pop()?.undo();
  }

  getText() { return this.text; }
  _insert(t: string, pos: number) {
    this.text = this.text.slice(0, pos) + t + this.text.slice(pos);
  }
  _delete(pos: number, len: number) {
    this.text = this.text.slice(0, pos) + this.text.slice(pos + len);
  }
}

class InsertCommand implements Command {
  constructor(
    private editor: TextEditor,
    private text: string,
    private pos: number
  ) {}

  execute() { this.editor._insert(this.text, this.pos); }
  undo() { this.editor._delete(this.pos, this.text.length); }
}

const editor = new TextEditor();
editor.insert('Hello ', 0);
editor.insert('World', 6);
console.log(editor.getText()); // "Hello World"
editor.undoLast();
console.log(editor.getText()); // "Hello "`,void 0,void 0)}
<h2>Chain of Responsibility</h2>
<div class="ph"><div class="pic">⛓️</div><div class="pm">
<div class="pcat">GoF Comportamental · 4/11</div>
<div class="pname">Chain of Responsibility</div>
<div class="pint">Passa a requisição ao longo de uma cadeia de handlers até que um deles trate.</div>
</div></div>
${J(`abstract class Handler<T, R> {
  protected next: Handler<T, R> | null = null;

  setNext(handler: Handler<T, R>): Handler<T, R> {
    this.next = handler;
    return handler; // permite encadeamento fluente
  }

  abstract handle(request: T): R | null;
}

// Middleware HTTP (Express-style)
interface HttpRequest { method: string; path: string; user?: string; body?: any; }

class AuthMiddleware extends Handler<HttpRequest, string> {
  handle(req: HttpRequest) {
    if (!req.user) return '401 Unauthorized';
    return this.next?.handle(req) ?? null;
  }
}

class RateLimitMiddleware extends Handler<HttpRequest, string> {
  private requests = new Map<string, number>();
  handle(req: HttpRequest) {
    const count = (this.requests.get(req.user!) ?? 0) + 1;
    this.requests.set(req.user!, count);
    if (count > 100) return '429 Too Many Requests';
    return this.next?.handle(req) ?? null;
  }
}

class RouteHandler extends Handler<HttpRequest, string> {
  handle(req: HttpRequest) { return \`200 OK: \${req.path}\`; }
}

// Montagem da cadeia
const auth = new AuthMiddleware();
const rateLimit = new RateLimitMiddleware();
const route = new RouteHandler();
auth.setNext(rateLimit).setNext(route);

console.log(auth.handle({ method: 'GET', path: '/api', user: 'cesar' })); // 200 OK
console.log(auth.handle({ method: 'GET', path: '/api' }));                // 401`,void 0,void 0)}
${se("Qual caso de uso real demonstra bem o padrão Chain of Responsibility?",["Banco de dados com réplicas de leitura","Sistema de middleware HTTP onde cada camada (auth, logging, rate limit, validation) decide se passa a requisição adiante ou responde ela mesma","Cache com múltiplas camadas (L1, L2, L3)","Sistema de plugins"],1,"✅ Middleware é o exemplo clássico. Cada middleware em Express/Fastify/Koa é um handler na cadeia: pode processar, transformar, encerrar (responder sem passar adiante) ou chamar next() para continuar a cadeia.")}
`},{id:"state-template",title:"State, Template Method & demais",level:"m",content:`
<h1>State, Template Method e outros padrões comportamentais</h1>
<h2>State</h2>
<div class="ph"><div class="pic">🔀</div><div class="pm">
<div class="pcat">GoF Comportamental · 5/11</div>
<div class="pname">State</div>
<div class="pint">Permite que um objeto altere seu comportamento quando seu estado interno muda — parece que a classe mudou.</div>
</div></div>
${J(`interface OrderState {
  process(order: Order): void;
  cancel(order: Order): void;
  ship(order: Order): void;
}

class PendingState implements OrderState {
  process(o: Order) { o.setState(new ProcessingState()); }
  cancel(o: Order) { o.setState(new CancelledState()); }
  ship(o: Order) { throw new Error('Não pode enviar pedido pendente!'); }
}

class ProcessingState implements OrderState {
  process(o: Order) { throw new Error('Já está processando'); }
  cancel(o: Order) { o.setState(new CancelledState()); }
  ship(o: Order) { o.setState(new ShippedState()); }
}

class ShippedState implements OrderState {
  process(o: Order) { throw new Error('Já enviado'); }
  cancel(o: Order) { throw new Error('Não pode cancelar pedido enviado'); }
  ship(o: Order) { throw new Error('Já enviado'); }
}

class CancelledState implements OrderState {
  process(o: Order) { throw new Error('Pedido cancelado'); }
  cancel(o: Order) { throw new Error('Já cancelado'); }
  ship(o: Order) { throw new Error('Pedido cancelado'); }
}

class Order {
  private state: OrderState = new PendingState();
  setState(s: OrderState) { this.state = s; }
  process() { this.state.process(this); }
  cancel() { this.state.cancel(this); }
  ship() { this.state.ship(this); }
}`,void 0,void 0)}
<h2>Template Method</h2>
<div class="ph"><div class="pic">📄</div><div class="pm">
<div class="pcat">GoF Comportamental · 6/11</div>
<div class="pname">Template Method</div>
<div class="pint">Define o esqueleto de um algoritmo na superclasse, deixando que subclasses sobrescrevam etapas específicas sem alterar a estrutura.</div>
</div></div>
${J(`// Relatório: estrutura fixa, conteúdo variável
abstract class RelatorioGenerator {
  // Template Method — define a estrutura
  final generate(dados: any[]): string {
    const header = this.generateHeader();
    const body = this.generateBody(dados);
    const footer = this.generateFooter();
    return \`\${header}
\${body}
\${footer}\`;
  }

  protected abstract generateHeader(): string;
  protected abstract generateBody(dados: any[]): string;
  protected generateFooter() { return '--- fim do relatório ---'; } // hook opcional
}

class PDFReport extends RelatorioGenerator {
  protected generateHeader() { return '=== RELATÓRIO PDF ==='; }
  protected generateBody(dados: any[]) { return dados.map(d => \`| \${JSON.stringify(d)} |\`).join('
'); }
}

class CSVReport extends RelatorioGenerator {
  protected generateHeader() { return 'id,nome,valor'; }
  protected generateBody(dados: any[]) { return dados.map(d => Object.values(d).join(',')).join('
'); }
  protected generateFooter() { return ''; } // sobrescreve o hook
}`,void 0,void 0)}
<h2>Outros Padrões Comportamentais</h2>
<table><tr><th>Pattern</th><th>Intent</th><th>Uso típico</th></tr>
<tr><td><strong>Iterator</strong></td><td>Percorrer uma coleção sem expor sua estrutura interna</td><td>for...of em JS, iteradores customizados</td></tr>
<tr><td><strong>Mediator</strong></td><td>Reduz dependências entre objetos — comunicação via mediador central</td><td>Event bus, Redux store, MediatR (.NET)</td></tr>
<tr><td><strong>Memento</strong></td><td>Salva e restaura estados anteriores de um objeto</td><td>Undo/redo, autosave, snapshots</td></tr>
<tr><td><strong>Visitor</strong></td><td>Adiciona operações a objetos sem modificar suas classes</td><td>AST walkers, exportadores, relatórios</td></tr>
<tr><td><strong>Interpreter</strong></td><td>Define uma gramática e um interpretador para ela</td><td>Parsers, query builders, regex engines</td></tr>
</table>
${se("Por que State é superior a switch/if para máquinas de estado?",["Porque switch é mais lento que polimorfismo","Cada estado é uma classe separada com suas próprias transições válidas. Adicionar um novo estado não exige modificar os estados existentes — OCP é respeitado","Porque switch não pode modelar estados","Porque polimorfismo é sempre melhor que condicionais"],1,"✅ Com switch, cada novo estado exige modificar o switch central. Com State pattern, um novo estado é uma nova classe. Além disso, transições inválidas lançam exceção — o sistema não pode entrar em estado inconsistente implicitamente.")}
`}]},{id:"arquiteturais",title:"Padrões Arquiteturais",emoji:"🏛️",color:"#F59E0B",level:"s",sections:[{id:"clean-hex",title:"Clean & Hexagonal Architecture",level:"s",content:`
<div class="ph"><div class="pic">🎯</div><div class="pm">
<div class="pcat">Padrões Arquiteturais</div>
<div class="pname">Clean Architecture</div>
<div class="pint">Organiza o sistema em camadas concêntricas onde as dependências apontam para dentro — o domínio nunca sabe que a infra existe.</div>
</div></div>
${Ta(`  ┌──────────────────────────────────────────┐
  │  Frameworks & Drivers (Web, DB, UI)      │
  │  ┌────────────────────────────────────┐  │
  │  │  Interface Adapters                │  │
  │  │  (Controllers, Gateways, Presenters│  │
  │  │  ┌──────────────────────────────┐  │  │
  │  │  │  Application Business Rules  │  │  │
  │  │  │  (Use Cases)                 │  │  │
  │  │  │  ┌────────────────────────┐  │  │  │
  │  │  │  │  Enterprise Business   │  │  │  │
  │  │  │  │  Rules (Entities)      │  │  │  │
  │  │  │  └────────────────────────┘  │  │  │
  │  │  └──────────────────────────────┘  │  │
  │  └────────────────────────────────────┘  │
  └──────────────────────────────────────────┘
  Regra: dependências sempre apontam para dentro ↓`)}
<h2>A Regra de Dependência</h2>
<p>O código fonte só pode depender de círculos mais internos. Nada no círculo interno pode saber nada sobre o círculo externo — nem o nome de uma função, classe, variável ou qualquer entidade de software declarada em um anel externo.</p>
${J(`// ✓ Estrutura de pasta Clean Architecture
// src/
// ├── domain/              ← Entities (sem dependências externas)
// │   ├── order.ts
// │   └── order.errors.ts
// ├── application/         ← Use Cases (depende só de domain)
// │   ├── create-order.usecase.ts
// │   └── ports/
// │       └── order.repository.ts  ← Interface (port)
// ├── infrastructure/      ← Adapters (implementa as ports)
// │   ├── order.prisma.repository.ts
// │   └── order.http.controller.ts
// └── main.ts              ← Composition root (conecta tudo)

// domain/order.ts — zero dependências externas
export class Order {
  private items: OrderItem[] = [];

  addItem(product: Product, qty: number) {
    if (qty <= 0) throw new Error('Quantidade inválida');
    this.items.push(new OrderItem(product, qty));
  }

  get total() {
    return this.items.reduce((sum, i) => sum + i.subtotal, 0);
  }
}

// application/ports/order.repository.ts — interface (port)
export interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: string): Promise<Order | null>;
}

// application/create-order.usecase.ts — depende da interface, não da impl
export class CreateOrderUseCase {
  constructor(private repo: OrderRepository) {} // DIP em ação

  async execute(dto: CreateOrderDto): Promise<Order> {
    const order = new Order(dto.customerId);
    dto.items.forEach(i => order.addItem(i.product, i.qty));
    await this.repo.save(order);
    return order;
  }
}

// infrastructure/order.prisma.repository.ts — implementa o port
export class PrismaOrderRepository implements OrderRepository {
  constructor(private prisma: PrismaClient) {}
  async save(order: Order) { await this.prisma.order.create(/* ... */); }
  async findById(id: string) { /* ... */ return null; }
}`,void 0,void 0)}
<h2>Hexagonal Architecture (Ports & Adapters)</h2>
<div class="ph"><div class="pic">⬡</div><div class="pm">
<div class="pcat">Ports & Adapters — Alistair Cockburn, 2005</div>
<div class="pname">Hexagonal Architecture</div>
<div class="pint">O núcleo da aplicação se comunica com o mundo externo exclusivamente via Ports (interfaces) e Adapters (implementações).</div>
</div></div>
${Ta(`
  [HTTP]    [CLI]    [Tests]
     \\        |        /
   [Adapter][Adapter][Adapter]  ← Adapters primários (driving)
          \\   |   /
    ┌───────────────────┐
    │   Application     │  ← Core / Hexagon
    │   ┌───────────┐   │
    │   │  Domain   │   │
    │   └───────────┘   │
    └───────────────────┘
          /   |   \\
   [Port][Port][Port]          ← Ports secundários (driven)
    /      |      \\
 [DB]  [Email]  [Queue]        ← Adapters secundários`)}
${se("Qual é o principal benefício da Regra de Dependência na Clean Architecture?",["Torna o código mais rápido por eliminar camadas","O núcleo do sistema (Entities + Use Cases) pode ser testado sem banco de dados, sem HTTP, sem qualquer framework — apenas com objetos em memória","Permite usar qualquer linguagem de programação","Elimina a necessidade de testes de integração"],1,"✅ Exatamente. Quando seu domínio não depende de Prisma, Express ou qualquer framework, você pode instanciar e testar suas regras de negócio com objetos simples em memória. Isso torna os testes unitários rápidos e confiáveis — e o sistema resiliente a mudanças de infra.")}
`},{id:"cqrs-eventsourcing",title:"CQRS & Event Sourcing",level:"s",content:`
<h1>CQRS & Event Sourcing</h1>
<h2>CQRS — Command Query Responsibility Segregation</h2>
<div class="ph"><div class="pic">⚡</div><div class="pm">
<div class="pcat">Arquitetural · Greg Young</div>
<div class="pname">CQRS</div>
<div class="pint">Separa o modelo de leitura (Query) do modelo de escrita (Command) em modelos completamente distintos.</div>
</div></div>
${ra("💡","CQRS é a evolução arquitetural do princípio CQS. Enquanto CQS separa métodos, CQRS separa <strong>modelos inteiros</strong> — com bancos de dados, APIs e serviços distintos para reads e writes.","info")}
${Ta(`
  Client
    │
    ├─── Command (write) ──► Command Handler ──► Write DB (normalizado)
    │                              │
    │                         Domain Events
    │                              │
    │                         Event Handler ──► Read DB (desnormalizado)
    │
    └─── Query (read) ──────────────────────────────► Read DB`)}
${J(`// Commands — intenção de mudar estado
interface Command { readonly type: string; }

interface CreateOrderCommand extends Command {
  type: 'CreateOrder';
  customerId: string;
  items: { productId: string; qty: number; price: number }[];
}

// Command Handler — escreve no Write DB, emite eventos
class CreateOrderHandler {
  async handle(cmd: CreateOrderCommand) {
    const order = Order.create(cmd.customerId, cmd.items);
    await this.writeRepo.save(order);
    await this.eventBus.publish(new OrderCreatedEvent(order)); // ← evento
  }
}

// Event Handler — atualiza Read DB com projeção otimizada para leitura
class OrderProjection {
  async on(event: OrderCreatedEvent) {
    await this.readDb.upsert('order_views', {
      id: event.orderId,
      customer_name: await this.customerCache.get(event.customerId),
      total: event.total,
      status: 'pending',
      created_at: event.occurredAt,
      items_count: event.items.length
    });
  }
}

// Query — leitura direta do Read DB (desnormalizado, otimizado)
class GetOrderQuery {
  async execute(orderId: string): Promise<OrderView> {
    return this.readDb.findOne('order_views', { id: orderId });
    // Sem joins, sem ORM, só SQL/NoSQL rápido
  }
}`,void 0,void 0)}
<h2>Event Sourcing</h2>
<div class="ph"><div class="pic">📜</div><div class="pm">
<div class="pcat">Arquitetural — frequentemente combinado com CQRS</div>
<div class="pname">Event Sourcing</div>
<div class="pint">Ao invés de armazenar o estado atual, armazena a sequência de eventos que levaram a esse estado.</div>
</div></div>
${ra("⚠️","Event Sourcing adiciona complexidade real. Use apenas quando você precisa de: audit log completo, time-travel debugging, ou reconstrução de estado em diferentes pontos no tempo.","danger")}
${J(`// Estado atual NÃO é armazenado — apenas eventos
type BankEvent =
  | { type: 'AccountOpened'; owner: string; initialBalance: number }
  | { type: 'MoneyDeposited'; amount: number }
  | { type: 'MoneyWithdrawn'; amount: number }
  | { type: 'AccountClosed'; reason: string };

// Estado é reconstruído aplicando eventos em sequência
function applyEvent(state: Account, event: BankEvent): Account {
  switch (event.type) {
    case 'AccountOpened':
      return { owner: event.owner, balance: event.initialBalance, closed: false };
    case 'MoneyDeposited':
      return { ...state, balance: state.balance + event.amount };
    case 'MoneyWithdrawn':
      if (state.balance < event.amount) throw new Error('Saldo insuficiente');
      return { ...state, balance: state.balance - event.amount };
    case 'AccountClosed':
      return { ...state, closed: true };
  }
}

// Reconstruir estado atual
const events: BankEvent[] = await eventStore.load('account-123');
const currentState = events.reduce(applyEvent, {} as Account);

// Time travel — estado em qualquer ponto no tempo
const stateLastMonth = events
  .filter(e => e.timestamp <= lastMonth)
  .reduce(applyEvent, {} as Account);`,void 0,void 0)}
${se("Qual é o maior desafio de Event Sourcing em produção?",["Performance de escrita, pois gravar eventos é lento","Evolução do schema: quando a estrutura de um evento precisa mudar, você precisa de estratégias de upcasting/versioning porque eventos antigos já estão gravados e imutáveis","Event Sourcing não escala horizontalmente","Falta de suporte em bancos de dados modernos"],1,"✅ Schema evolution é a dor real. Se MoneyWithdrawn muda para incluir um novo campo obrigatório, eventos antigos sem esse campo precisam ser migrados ou tratados com upcasting (converter formato antigo para novo em runtime). Isso exige cuidado e tooling especializado.")}
`},{id:"mvc-layered",title:"MVC, MVP, MVVM & Layered",level:"i",content:`
<h1>MVC, MVP, MVVM e Arquitetura em Camadas</h1>
<h2>Arquitetura em Camadas (Layered/N-Tier)</h2>
<div class="pbox"><div class="pbox-name">Layered Architecture</div><div class="pbox-def">Organiza o sistema em camadas horizontais onde cada camada só pode se comunicar com a camada imediatamente abaixo.</div></div>
${Ta(`  ┌─────────────────────────────┐
  │      Presentation Layer      │  ← UI, Controllers, REST
  ├─────────────────────────────┤
  │      Business Logic Layer    │  ← Services, Use Cases
  ├─────────────────────────────┤
  │      Data Access Layer       │  ← Repositories, ORM
  ├─────────────────────────────┤
  │      Database Layer          │  ← SQL, NoSQL, Cache
  └─────────────────────────────┘`)}
<h2>MVC — Model View Controller</h2>
<table><tr><th>Camada</th><th>Responsabilidade</th></tr>
<tr><td><strong>Model</strong></td><td>Dados e regras de negócio. Não sabe da View.</td></tr>
<tr><td><strong>View</strong></td><td>Exibição. Observa o Model, não contém lógica.</td></tr>
<tr><td><strong>Controller</strong></td><td>Recebe input, atualiza Model, seleciona View.</td></tr>
</table>
<h2>MVP — Model View Presenter</h2>
<p>Evolução do MVC para UIs mais complexas. O Presenter é um intermediário que contém toda a lógica de apresentação — a View é "burra" e apenas delega ao Presenter. Mais testável que MVC.</p>
<h2>MVVM — Model View ViewModel</h2>
<p>Usado em frameworks reativos (React, Angular, Vue). O ViewModel expõe streams/observables de dados que a View consome via data binding. A View reage automaticamente a mudanças de estado.</p>
<table><tr><th>Padrão</th><th>Contexto típico</th><th>Testabilidade</th></tr>
<tr><td>MVC</td><td>Servidores web, Rails, Laravel, ASP.NET</td><td>Média — Controller difícil de isolar</td></tr>
<tr><td>MVP</td><td>Android (legado), desktop apps</td><td>Alta — Presenter é POJO testável</td></tr>
<tr><td>MVVM</td><td>React, Angular, Vue, WPF, iOS SwiftUI</td><td>Alta — ViewModel sem dependência de UI</td></tr>
</table>
${se("Por que MVVM é popular em SPAs (React, Vue, Angular)?",["Porque é o padrão mais moderno e substitui todos os outros","Porque data binding reativo sincroniza automaticamente UI e ViewModel — sem necessidade de código imperativo para atualizar a View quando o dado muda","Porque elimina a necessidade de um servidor","Porque é mais fácil de aprender que MVC"],1,'✅ Em MVVM com frameworks reativos, quando o estado (ViewModel) muda, a UI é atualizada automaticamente. Você descreve "como a UI parece dado o estado" — não "como atualizar a UI". Isso elimina bugs de sincronização e simplifica o código.')}
`}]},{id:"systemdesign",title:"System Design",emoji:"⚡",color:"#34D399",level:"s",sections:[{id:"escalabilidade",title:"Escalabilidade e CAP",level:"s",content:`
<div class="ph"><div class="pic">📈</div><div class="pm">
<div class="pcat">System Design</div>
<div class="pname">Escalabilidade</div>
<div class="pint">Capacidade de um sistema de crescer (usuários, dados, tráfego) sem degradação de performance.</div>
</div></div>
<h2>Vertical vs Horizontal Scaling</h2>
<div class="card-row">
  <div class="card card-info"><div class="card-hd">⬆️ Vertical (Scale Up)</div><p>Adiciona mais CPU/RAM à mesma máquina. Simples, mas tem limite físico. Causa downtime para upgrade. Sem mudança de arquitetura.</p></div>
  <div class="card card-good"><div class="card-hd">➡️ Horizontal (Scale Out)</div><p>Adiciona mais máquinas. Sem limite teórico. Requer stateless design e load balancer. Base para cloud-native.</p></div>
</div>
<h2>Load Balancing</h2>
<table><tr><th>Algoritmo</th><th>Como funciona</th><th>Quando usar</th></tr>
<tr><td>Round Robin</td><td>Distribui sequencialmente entre servidores</td><td>Requests homogêneos, servidores iguais</td></tr>
<tr><td>Least Connections</td><td>Manda para o servidor com menos conexões ativas</td><td>Requests com duração variável</td></tr>
<tr><td>IP Hash</td><td>Mesmo client vai sempre para o mesmo servidor</td><td>Sessões stateful (quando DI não é possível)</td></tr>
<tr><td>Weighted</td><td>Servidores mais potentes recebem mais tráfego</td><td>Hardware heterogêneo</td></tr>
</table>
<h2>CAP Theorem</h2>
${Ta(`         Consistency (C)
              /\\
             /  \\
            /    \\
           / CA   \\  ← Só possível sem partições
          /--------\\
         /    CP    \\  CP = sacrifica Availability
        /     |     \\  AP = sacrifica Consistency
       / AP   |      \\
      └────────────────┘
  Availability (A)    Partition Tolerance (P)
                 ↑
       Em redes reais, P é inevitável
       → Você escolhe entre C e A`)}
<table><tr><th>Tipo</th><th>Sacrifica</th><th>Exemplos</th></tr>
<tr><td>CP</td><td>Disponibilidade sob partição</td><td>MongoDB (modo w:majority), HBase, Zookeeper</td></tr>
<tr><td>AP</td><td>Consistência forte</td><td>Cassandra, DynamoDB, CouchDB</td></tr>
<tr><td>CA</td><td>Tolerância a partições</td><td>RDBMS single-node (MySQL, Postgres sem replicação)</td></tr>
</table>
<h2>Estratégias de Caching</h2>
<table><tr><th>Padrão</th><th>Quando usar</th></tr>
<tr><td>Cache-Aside (Lazy)</td><td>App checa cache → miss → carrega do DB → guarda no cache. Mais comum.</td></tr>
<tr><td>Write-Through</td><td>Toda escrita vai ao cache E ao DB. Cache sempre atualizado. Write mais lento.</td></tr>
<tr><td>Write-Behind</td><td>Escrita no cache primeiro; DB atualizado assincronamente. Performance máxima, risco de perda.</td></tr>
<tr><td>Read-Through</td><td>Cache carrega automaticamente do DB quando há miss. Transparente para o app.</td></tr>
</table>
${ra("⚠️",'Os dois problemas clássicos de cache: <strong>Cache Stampede</strong> (muitos requests simultâneos num miss) e <strong>Cache Invalidation</strong> ("There are only two hard things in Computer Science: cache invalidation and naming things" — Phil Karlton).',"warning")}
${se("Um sistema de e-commerce usa Redis para cache de produtos. Quando um produto tem o preço atualizado, qual é a estratégia mais segura?",["Invalidar (deletar) a entrada do cache — o próximo request vai ao banco e regenera o cache com o dado novo","Atualizar diretamente no Redis com o novo preço","Esperar o TTL expirar naturalmente","Reiniciar o Redis para limpar tudo"],0,"✅ Invalidar é mais seguro que atualizar. Atualizar o cache diretamente cria uma race condition: se dois processos atualizarem ao mesmo tempo, qual prevalece? Ao invalidar, você garante que o próximo request vai ao source of truth (banco) e regenera o cache de forma consistente.")}
`},{id:"databases",title:"Bancos de Dados",level:"s",content:`
<h1>Bancos de Dados — Decisões Arquiteturais</h1>
<h2>SQL vs NoSQL</h2>
<table><tr><th>Critério</th><th>SQL (PostgreSQL, MySQL)</th><th>NoSQL</th></tr>
<tr><td>Modelo de dados</td><td>Tabelas relacionais, schema rígido</td><td>Documentos, key-value, grafo, coluna</td></tr>
<tr><td>ACID</td><td>✅ Garantido por padrão</td><td>⚠️ Varia (Mongo tem transactions, Dynamo tem eventual)</td></tr>
<tr><td>Escalabilidade</td><td>Vertical principalmente; sharding complexo</td><td>Horizontal nativo (Cassandra, Dynamo)</td></tr>
<tr><td>Queries complexas</td><td>✅ JOINs, aggregations, full-text</td><td>⚠️ Limitado; queries simples são mais rápidas</td></tr>
<tr><td>Schema flexibility</td><td>Schema migrations obrigatórias</td><td>Schema-less ou schema flexível</td></tr>
</table>
<h2>Sharding</h2>
<p>Distribuição horizontal de dados entre múltiplos nós. Cada shard contém um subconjunto dos dados.</p>
<div class="card-row">
  <div class="card card-info"><div class="card-hd">Hash Sharding</div><p>Distribui por hash de uma chave (ex: user_id % N). Distribuição uniforme, mas range queries são custosas.</p></div>
  <div class="card card-info"><div class="card-hd">Range Sharding</div><p>Particiona por intervalos (ex: A-M no shard 1, N-Z no shard 2). Range queries eficientes, hot spots possíveis.</p></div>
</div>
<h2>Replicação</h2>
<p><strong>Primary-Replica (Master-Slave):</strong> Todas as escritas vão ao Primary. Replicas sincronizam assincronamente e atendem leituras. Latência de replicação cria janela de inconsistência.</p>
<p><strong>Multi-Primary (Multi-Master):</strong> Qualquer nó aceita escritas. Resolução de conflitos obrigatória. Usado em sistemas geo-distribuídos.</p>
<h2>Indexing</h2>
${ra("💡",'Índices aceleram leituras mas custam escritas e espaço. Todo INSERT/UPDATE precisa atualizar os índices relevantes. Nunca crie índices "preventivamente" — crie baseado em queries reais (EXPLAIN ANALYZE).',"info")}
<table><tr><th>Tipo</th><th>Uso</th><th>Custo</th></tr>
<tr><td>B-Tree (padrão)</td><td>Equality e range queries</td><td>O(log n)</td></tr>
<tr><td>Hash</td><td>Apenas equality (=)</td><td>O(1) mas sem range</td></tr>
<tr><td>GIN</td><td>Arrays, JSONB, full-text (PostgreSQL)</td><td>Alto custo de escrita</td></tr>
<tr><td>Composite</td><td>Queries com múltiplas colunas (ordem importa)</td><td>Selectividade combinada</td></tr>
</table>
${se("Você tem uma query SELECT * FROM orders WHERE status = pending AND created_at > yesterday. Qual índice seria mais eficiente?",["Índice em status separado + índice em created_at separado","Índice composto em (status, created_at) — pelo seletivo primeiro","Índice em created_at apenas — pois reduz mais o conjunto","Nenhum índice — table scan é suficiente para poucos dados"],1,"✅ Índice composto em (status, created_at) é o ideal. O PostgreSQL pode usar o prefixo do índice (status) para filtrar rapidamente e depois aplicar o range em created_at. Índices separados exigem bitmap AND — menos eficiente.")}
`}]},{id:"ddd",title:"DDD — Domain-Driven Design",emoji:"🎯",color:"#F87171",level:"s",sections:[{id:"ddd-core",title:"Conceitos Core do DDD",level:"s",content:`
<div class="ph"><div class="pic">🎯</div><div class="pm">
<div class="pcat">Domain-Driven Design — Eric Evans, 2003</div>
<div class="pname">Domain-Driven Design</div>
<div class="pint">Abordagem ao desenvolvimento de software que prioriza o domínio de negócio e coloca a lógica do domínio no centro do design.</div>
</div></div>
${ra("💡","DDD não é sobre padrões técnicos — é sobre <strong>colaboração entre especialistas do domínio e desenvolvedores</strong> para criar software que realmente reflete o negócio.","info")}
<h2>Linguagem Ubíqua (Ubiquitous Language)</h2>
<p>A fundação do DDD. Uma linguagem comum, compartilhada por desenvolvedores e domain experts, usada no código, nos documentos, nas reuniões. Sem tradução entre "o que o negócio diz" e "o que o código diz".</p>
${gs('O dev usa "user" no código, o negócio fala "cliente", o suporte fala "conta". Cada conversa requer tradução mental → bugs de comunicação.','Todos usam "Cliente", "Pedido", "Fatura" — no código, nos testes, nas reuniões. O código lê como o negócio pensa.')}
<h2>Entities vs Value Objects</h2>
${J(`// Entity — tem identidade única e mutável ao longo do tempo
class Order {
  constructor(
    readonly id: OrderId, // identidade — o que o torna único
    private customerId: CustomerId,
    private items: OrderItem[] = []
  ) {}

  addItem(product: Product, qty: number) {
    // regras de negócio aqui
    if (qty <= 0) throw new OrderError('Quantidade deve ser positiva');
    this.items.push(new OrderItem(product, qty));
  }
  // Dois pedidos com mesmo id são o mesmo pedido — mesmo que tenham itens diferentes
}

// Value Object — sem identidade; definido pelos seus atributos; imutável
class Money {
  constructor(
    readonly amount: number,
    readonly currency: 'BRL' | 'USD' | 'EUR'
  ) {
    if (amount < 0) throw new Error('Valor não pode ser negativo');
    Object.freeze(this); // garante imutabilidade
  }

  add(other: Money): Money {
    if (this.currency !== other.currency) throw new Error('Moedas diferentes');
    return new Money(this.amount + other.amount, this.currency); // novo objeto
  }

  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
  // Dois Money(100, 'BRL') são iguais — sem distinção de identidade
}`,`from dataclasses import dataclass
from typing import Literal

@dataclass(frozen=True)  # imutável — Value Object
class Money:
    amount: float
    currency: Literal['BRL', 'USD']

    def __post_init__(self):
        if self.amount < 0:
            raise ValueError('Valor negativo')

    def add(self, other: 'Money') -> 'Money':
        if self.currency != other.currency:
            raise ValueError('Moedas diferentes')
        return Money(self.amount + other.amount, self.currency)`,void 0)}
<h2>Aggregates & Aggregate Root</h2>
<p>Um <strong>Aggregate</strong> é um cluster de objetos de domínio tratados como uma unidade para fins de mudança de dados. O <strong>Aggregate Root</strong> é a única entidade acessível externamente — toda interação com o aggregate passa por ela.</p>
${Ta(`  ┌─────────────────────────────────────────┐
  │  Order (Aggregate Root)                  │
  │  ├── OrderId                            │
  │  ├── CustomerId                         │
  │  ├── List<OrderItem>  ← só Order acessa │
  │  │   ├── Product                        │
  │  │   ├── Quantity                       │
  │  │   └── Price (Money)                  │
  │  └── Address (Value Object)             │
  └─────────────────────────────────────────┘
  Regra: acesso externo APENAS via Order
  Regras de consistência do aggregate ficam DENTRO do Root`)}
${se("Por que o Aggregate Root é o único ponto de entrada para o aggregate?",["Por limitação técnica dos bancos de dados","Para garantir invariantes do negócio — o Root controla todas as mutações e pode validar consistência global do aggregate. Se qualquer parte pudesse ser modificada externamente, a consistência não seria garantida","Para simplificar a API pública do sistema","Para melhorar performance de acesso"],1,'✅ O Aggregate Root é o guardião da consistência. Quando você adiciona um OrderItem diretamente sem passar pela Order, você pula as validações: "pedido não pode ter mais de 100 itens", "total não pode exceder limite de crédito". O Root garante que essas regras sempre são respeitadas.')}
`},{id:"bounded-contexts",title:"Bounded Contexts & Context Maps",level:"s",content:`
<h1>Bounded Contexts & Context Maps</h1>
<h2>Bounded Context</h2>
<div class="pbox"><div class="pbox-name">Bounded Context</div><div class="pbox-def">Um limite explícito dentro do qual um modelo de domínio particular é definido e aplicável. O mesmo termo pode ter significados diferentes em contexts diferentes.</div></div>
<p>O mesmo conceito "Cliente" pode ter significados completamente diferentes:</p>
<table><tr><th>Bounded Context</th><th>O que "Cliente" significa</th></tr>
<tr><td>Vendas</td><td>Nome, empresa, histórico de compras, potencial de venda</td></tr>
<tr><td>Suporte</td><td>Tickets abertos, SLA, contatos, incidentes</td></tr>
<tr><td>Financeiro</td><td>CNPJ, dados bancários, limite de crédito, inadimplência</td></tr>
<tr><td>Logística</td><td>Endereços de entrega, janelas de recebimento, restrições</td></tr>
</table>
<p>Cada context tem seu próprio modelo, seu próprio banco de dados (idealmente), seu próprio time.</p>
<h2>Context Maps — Relações entre Contexts</h2>
${Ta(`  Shared Kernel (SK):
  ┌──────────┐    ┌──────────┐
  │ Billing  │----│  Sales   │  Compartilham subconjunto do modelo
  └──────────┘    └──────────┘  Ex: tipo de moeda, entidade Product

  Customer-Supplier (C/S):
  ┌──────────┐ upstream  ┌──────────┐
  │  Sales   │──────────►│ Shipping │  Shipping depende de Sales
  └──────────┘           └──────────┘  Sales define o contrato

  Anti-Corruption Layer (ACL):
  ┌──────────┐   [ACL]   ┌──────────┐
  │  Core    │◄─────────│Legacy ERP│  ACL traduz modelo legado
  └──────────┘           └──────────┘  Core não é "corrompido"

  Open Host Service (OHS):
  ┌──────────┐ REST API  ┌──────────┐
  │  Product │──────────►│  Others  │  Protocolo publicado e estável
  └──────────┘           └──────────┘`)}
<h2>Domain Events</h2>
<p>Eventos que representam algo significativo que aconteceu no domínio. São imutáveis, no passado, e podem cruzar Bounded Contexts.</p>
${J(`// Domain Event — algo que aconteceu no domínio
interface DomainEvent {
  readonly occurredOn: Date;
  readonly aggregateId: string;
}

class OrderShipped implements DomainEvent {
  constructor(
    readonly occurredOn: Date,
    readonly aggregateId: string, // orderId
    readonly customerId: string,
    readonly trackingCode: string,
    readonly estimatedDelivery: Date
  ) {}
}

// Aggregate Root emite eventos
class Order {
  private _events: DomainEvent[] = [];

  ship(trackingCode: string) {
    if (this.status !== 'processing') throw new Error('Pedido não está em processamento');
    this.status = 'shipped';
    this._events.push(new OrderShipped(
      new Date(),
      this.id,
      this.customerId,
      trackingCode,
      new Date(Date.now() + 5 * 86400000) // +5 dias
    ));
  }

  get events() { return [...this._events]; }
  clearEvents() { this._events = []; }
}

// Outros BCs reagem aos eventos (via event bus)
// Notification BC → envia email ao cliente
// Analytics BC → atualiza métricas de fulfillment
// Billing BC → marca pedido como faturado`,void 0,void 0)}
${se("Por que usar Anti-Corruption Layer ao integrar com sistemas legados?",["Para melhorar a performance da integração",'Para evitar que os conceitos ruins, naming inconsistente e modelo anêmico do sistema legado "vazem" para o core domain moderno — ACL traduz entre os dois mundos',"Por obrigação técnica dos contratos de API","Para poder usar GraphQL em vez de REST"],1,'✅ Sistemas legados frequentemente têm modelos de dados ruins, naming inconsistente e estruturas que não fazem sentido no domínio atual. Sem ACL, você começa a adaptando seu modelo para se encaixar no legado — "corrupção" do modelo. ACL é o isolamento que permite você evoluir o core domain independentemente.')}
`}]},{id:"microservices",title:"Microservices",emoji:"🔗",color:"#818CF8",level:"s",sections:[{id:"ms-decomposition",title:"Decomposição & Comunicação",level:"s",content:`
<div class="ph"><div class="pic">🔗</div><div class="pm">
<div class="pcat">Arquitetura de Microservices</div>
<div class="pname">Decomposição e Comunicação</div>
<div class="pint">Estruturar um sistema como um conjunto de serviços pequenos, autônomos e deployáveis independentemente.</div>
</div></div>
${ra("⚠️",`Martin Fowler: "Don't start with microservices — start with a modular monolith." Microservices resolvem problemas de escala organizacional e operacional. Para equipes pequenas, um monolito bem estruturado é melhor.`,"danger")}
<h2>Estratégias de Decomposição</h2>
<div class="card-row">
  <div class="card card-info"><div class="card-hd">Por Capacidade de Negócio</div><p>Cada serviço implementa uma capacidade de negócio: Orders Service, Payments Service, Inventory Service. Times são donos de capacidades.</p></div>
  <div class="card card-info"><div class="card-hd">Por Subdomínio DDD</div><p>Cada Bounded Context vira um microservice. Alinhamento perfeito com DDD. Garante que serviços têm limites semânticos claros.</p></div>
</div>
<h2>Comunicação</h2>
<table><tr><th>Estilo</th><th>Quando usar</th><th>Ferramentas</th></tr>
<tr><td><strong>Síncrona (REST)</strong></td><td>Resposta imediata necessária; leitura de dados</td><td>HTTP/REST, OpenAPI</td></tr>
<tr><td><strong>Síncrona (gRPC)</strong></td><td>Alta performance; comunicação interna; streaming</td><td>Protocol Buffers, gRPC</td></tr>
<tr><td><strong>Assíncrona (Mensageria)</strong></td><td>Eventos de domínio; fire-and-forget; alta carga</td><td>Kafka, RabbitMQ, SQS</td></tr>
</table>
${J(`// gRPC Service Definition (proto)
/*
service OrderService {
  rpc CreateOrder (CreateOrderRequest) returns (OrderResponse);
  rpc GetOrder (GetOrderRequest) returns (OrderResponse);
  rpc WatchOrderStatus (GetOrderRequest) returns (stream StatusUpdate);
}
*/

// Comunicação assíncrona com Kafka
class OrderCreatedPublisher {
  constructor(private kafka: KafkaProducer) {}

  async publish(order: Order) {
    await this.kafka.send({
      topic: 'order.created',
      messages: [{
        key: order.id,
        value: JSON.stringify({
          orderId: order.id,
          customerId: order.customerId,
          total: order.total,
          occurredAt: new Date().toISOString()
        })
      }]
    });
  }
}

// Consumer em outro serviço
class ShippingOrderConsumer {
  @KafkaConsumer('order.created')
  async handle(event: OrderCreatedEvent) {
    await this.shippingService.scheduleDelivery(event.orderId, event.customerId);
  }
}`,void 0,void 0)}
<h2>Circuit Breaker</h2>
<p>Previne chamadas em cascata quando um serviço está falhando. Assim como um disjuntor elétrico, "abre" quando detecta falhas consecutivas e "fecha" após período de recuperação.</p>
${Ta(`  Estados do Circuit Breaker:

  CLOSED → chamadas normais → falhas < threshold
     ↓ (falhas >= threshold)
  OPEN → rejeita chamadas imediatamente (fail fast)
     ↓ (após timeout de reset)
  HALF-OPEN → permite uma chamada de teste
     ↓ sucesso           ↓ falha
  CLOSED (reset)    OPEN (mais tempo)`)}
${se("Qual o principal benefício do Circuit Breaker em microservices?",["Reduz latência de rede por pular chamadas lentas","Evita cascata de falhas: se o Payment Service está falhando, o Circuit Breaker no Order Service falha rápido em vez de aguardar timeout e consumir threads/recursos, protegendo todo o sistema","Garante que todas as chamadas são bem-sucedidas","Substitui a necessidade de retry logic"],1,"✅ Sem Circuit Breaker, threads do Order Service ficam bloqueadas esperando timeout do Payment Service. Com 100 threads bloqueadas, o Order Service fica sem resources para atender outros requests — cascata. Circuit Breaker quebra essa cascata retornando erro imediatamente.")}
`},{id:"ms-patterns",title:"Saga & API Gateway",level:"s",content:`
<h1>Saga Pattern & API Gateway</h1>
<h2>Saga Pattern</h2>
<div class="pbox"><div class="pbox-name">Saga</div><div class="pbox-def">Gerencia transações distribuídas através de uma sequência de transações locais. Se uma falha, transações compensatórias desfazem as anteriores.</div></div>
<h2>Choreography vs Orchestration</h2>
${Ta(`  CHOREOGRAPHY (Event-driven):
  Order ──(OrderCreated)──► Payment ──(PaymentDone)──► Inventory ──(Reserved)──► Shipping
         ◄─(PaymentFailed)──          ◄─(OutOfStock)──
  Services se comunicam via eventos. Sem coordenador central.
  Pros: baixo acoplamento. Cons: fluxo difícil de visualizar/debugar.

  ORCHESTRATION (Central coordinator):
  ┌────────────────────────────────────┐
  │         Order Saga Orchestrator    │
  └────────────────────────────────────┘
         │          │          │
    Payment       Inventory  Shipping
    Service       Service    Service
  Pros: fluxo claro, fácil de debugar. Cons: orquestrador vira SPOF.`)}
${J(`// Saga Orchestrator (simplificado)
class CreateOrderSaga {
  async execute(command: CreateOrderCommand) {
    const sagaId = uuid();

    try {
      // 1. Reservar inventário
      await this.inventoryClient.reserve(command.items, sagaId);

      // 2. Processar pagamento
      await this.paymentClient.charge(command.customerId, command.total, sagaId);

      // 3. Confirmar pedido
      await this.orderRepo.confirm(command.orderId);

    } catch (error) {
      // Compensating transactions — desfaz na ordem inversa
      await this.compensate(sagaId, error);
      throw error;
    }
  }

  private async compensate(sagaId: string, error: Error) {
    if (error instanceof PaymentError) {
      // Desfaz apenas a reserva de inventário
      await this.inventoryClient.releaseReservation(sagaId);
    }
    // Se Shipping falhou, desfaz pagamento E inventário
  }
}`,void 0,void 0)}
<h2>API Gateway</h2>
<p>Ponto de entrada único para todos os clientes externos. Responsabilidades: roteamento, autenticação, rate limiting, SSL termination, logging, transformação de protocolo.</p>
${Ta(`  Mobile App ──┐
  Web SPA ─────┼──► [API Gateway] ──► Order Service   :3001
  IoT ─────────┘         │        ──► Payment Service :3002
                         │        ──► User Service    :3003
                Authentication        ──► Product Service :3004
                Rate Limiting
                SSL Termination
                Request Logging`)}
${se("Por que transações compensatórias no Saga são diferentes de ROLLBACK SQL?",["São tecnicamente idênticas","ROLLBACK é atômico e instantâneo. Compensações Saga são novas transações de negócio que desfazem o efeito — podem falhar, levar tempo, e o sistema fica em estado inconsistente temporariamente (eventual consistency)","Saga é mais eficiente que SQL transactions","Compensações são desnecessárias se você usa 2-Phase Commit"],1,'✅ ROLLBACK em SQL é uma operação atômica — ou acontece completamente ou não acontece. No Saga, a "compensação" é um cancelamento real: se você já cobrou o cartão e precisa cancelar, é um estorno — que pode falhar! O sistema precisa lidar com estados intermediários e garantir que a compensação eventualmente se complete (idempotência).')}
`}]}],ys="arch-atlas-done";function mp(){try{const A=localStorage.getItem(ys);return new Set(JSON.parse(A||"[]"))}catch{return new Set}}function vp(){return zt.reduce((A,z)=>A+z.sections.length,0)}function pp(){const[A,z]=Ee.useState(mp),T=Ee.useCallback(j=>{z(L=>{const Y=new Set(L);return Y.has(j)?Y.delete(j):Y.add(j),localStorage.setItem(ys,JSON.stringify([...Y])),Y})},[]),f=Ee.useCallback(j=>{z(L=>{if(L.has(j))return L;const Y=new Set(L);return Y.add(j),localStorage.setItem(ys,JSON.stringify([...Y])),Y})},[]),q=Math.round(A.size/vp()*100);return{completed:A,toggle:T,markDone:f,progressPct:q}}function hp(){return zt.flatMap(A=>A.sections.map(z=>({mid:A.id,sid:z.id})))}function gp(){const[A,z]=Ee.useState(null),[T,f]=Ee.useState(null),q=Ee.useMemo(hp,[]),j=Ee.useCallback((ae,he)=>{z(ae),f(he)},[]),L=Ee.useCallback(()=>{z(null),f(null)},[]),Y=zt.find(ae=>ae.id===A)??null,_=Y?.sections.find(ae=>ae.id===T)??null,y=q.findIndex(ae=>ae.mid===A&&ae.sid===T),R=q[y-1]??null,C=q[y+1]??null,ce={i:1,m:2,s:3}[_?.level??"i"]??1;return{currentModule:A,currentSection:T,currentMod:Y,currentSec:_,currentLevel:ce,prevSection:R,nextSection:C,navigate:j,showHome:L}}const yp={i:"b-i",m:"b-m",s:"b-s"},bp={i:"Init",m:"Mid",s:"Sênior"};function Sp({currentModule:A,currentSection:z,completed:T,progressPct:f,onNavigate:q,onToggle:j,onHome:L}){const[Y,_]=Ee.useState(""),y=Y.trim()?zt.flatMap(R=>R.sections.filter(C=>C.title.toLowerCase().includes(Y.toLowerCase())||R.title.toLowerCase().includes(Y.toLowerCase())).map(C=>({mod:R,sec:C}))):null;return x.jsxs(x.Fragment,{children:[x.jsxs("div",{style:{padding:"18px 16px 14px",borderBottom:"1px solid var(--brd)",cursor:"pointer"},onClick:L,title:"Voltar para o início",children:[x.jsx("div",{className:"logo",children:"◈ Architecture"}),x.jsx("div",{className:"ltitle",children:"Atlas"}),x.jsx("div",{className:"lsub",children:"Guia de Arquitetura de Software"})]}),x.jsxs("div",{className:"prog-wrap",children:[x.jsxs("div",{className:"prog-lbl",children:[x.jsx("span",{children:"Progresso"}),x.jsxs("span",{children:[f,"%"]})]}),x.jsx("div",{className:"prog-bar",children:x.jsx("div",{className:"prog-fill",style:{width:`${f}%`}})})]}),x.jsx("div",{className:"srch-wrap",children:x.jsx("input",{className:"srch",type:"text",placeholder:"🔍  Buscar tópico...",autoComplete:"off",value:Y,onChange:R=>_(R.target.value)})}),x.jsx("div",{style:{flex:1,overflowY:"auto",padding:"6px 0"},role:"navigation","aria-label":"Módulos do curso",children:y?y.length===0?x.jsxs("div",{className:"srch-empty",children:['Nenhum tópico encontrado para "',Y,'"']}):y.map(({mod:R,sec:C})=>x.jsxs("div",{className:"ni",onClick:()=>{_(""),q(R.id,C.id)},children:[x.jsx("div",{className:"ni-ic",children:R.emoji}),x.jsx("div",{className:"ni-lb",children:C.title})]},`${R.id}/${C.id}`)):zt.map(R=>x.jsxs("div",{children:[x.jsxs("div",{className:"ng-hd",children:[R.emoji," ",R.title]}),R.sections.map(C=>{const G=`${R.id}/${C.id}`,ce=T.has(G),ae=A===R.id&&z===C.id;return x.jsxs("div",{className:`ni${ae?" active":""}`,tabIndex:0,onClick:()=>q(R.id,C.id),onKeyDown:he=>{(he.key==="Enter"||he.key===" ")&&(he.preventDefault(),q(R.id,C.id))},children:[x.jsx("div",{className:"ni-ic",children:R.emoji}),x.jsx("div",{className:"ni-lb",children:C.title}),x.jsx("div",{className:`nbadge ${yp[C.level]||"b-i"}`,children:bp[C.level]||"Init"}),x.jsx("div",{className:`nck${ce?" done":""}`,title:ce?"Desmarcar como concluído":"Marcar como concluído",onClick:he=>{he.stopPropagation(),j(G)},children:ce?"✓":""})]},G)})]},R.id))})]})}const Uf=(...A)=>A.filter((z,T,f)=>!!z&&z.trim()!==""&&f.indexOf(z)===T).join(" ").trim();const Ap=A=>A.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Ep=A=>A.replace(/^([A-Z])|[\s-_]+(\w)/g,(z,T,f)=>f?f.toUpperCase():T.toLowerCase());const Rf=A=>{const z=Ep(A);return z.charAt(0).toUpperCase()+z.slice(1)};var Op={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Cp=A=>{for(const z in A)if(z.startsWith("aria-")||z==="role"||z==="title")return!0;return!1};const zp=Ee.forwardRef(({color:A="currentColor",size:z=24,strokeWidth:T=2,absoluteStrokeWidth:f,className:q="",children:j,iconNode:L,...Y},_)=>Ee.createElement("svg",{ref:_,...Op,width:z,height:z,stroke:A,strokeWidth:f?Number(T)*24/Number(z):T,className:Uf("lucide",q),...!j&&!Cp(Y)&&{"aria-hidden":"true"},...Y},[...L.map(([y,R])=>Ee.createElement(y,R)),...Array.isArray(j)?j:[j]]));const Tp=(A,z)=>{const T=Ee.forwardRef(({className:f,...q},j)=>Ee.createElement(zp,{ref:j,iconNode:z,className:Uf(`lucide-${Ap(Rf(A))}`,`lucide-${A}`,f),...q}));return T.displayName=Rf(A),T};const qp=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Dp=Tp("menu",qp);function Mp({currentTitle:A,currentLevel:z,onToggleSidebar:T,onHome:f}){return x.jsxs("div",{id:"topbar",className:"flex items-center px-6 gap-3",children:[x.jsx("button",{className:"md:hidden bg-transparent border-none text-[var(--t1)] cursor-pointer p-1 text-lg leading-none",onClick:T,"aria-label":"Abrir menu",children:x.jsx(Dp,{size:18})}),x.jsxs("div",{className:"bcrumb",children:[x.jsx("button",{type:"button",className:"cursor-pointer transition-colors text-[var(--t2)] hover:text-[var(--gold)] bg-transparent border-none p-0",onClick:f,"aria-label":"Voltar para a tela inicial",children:"Architecture Atlas"}),A&&x.jsxs(x.Fragment,{children:[x.jsx("span",{className:"sep",children:"›"}),x.jsx("span",{children:A})]})]}),x.jsxs("div",{className:"lvl-ind",children:[z>0&&x.jsx("span",{className:"lvl-label",children:z===1?"Iniciante":z===2?"Intermediário":"Sênior"}),[1,2,3].map(q=>x.jsx("div",{className:`lvl-dot${q<=z?" a":""}`},q))]})]})}function _p({onPrev:A,onNext:z,nextLocked:T}){return x.jsxs("div",{className:"nav-btns",children:[x.jsx("button",{className:"nbtn",disabled:!A,onClick:A??void 0,children:"← Anterior"}),x.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px"},children:[T&&x.jsx("span",{className:"next-hint",children:"Responda o quiz para continuar"}),x.jsx("button",{id:"btn-next",className:"nbtn primary",disabled:!z||T,onClick:z??void 0,children:"Próximo →"})]})]})}function xp({section:A,onPrev:z,onNext:T}){const f=Ee.useRef(null),[q,j]=Ee.useState(0),[L,Y]=Ee.useState(0);Ee.useEffect(()=>{window.answerQuiz=(y,R,C)=>{const G=document.getElementById(`${y}-opts`);G&&(G.querySelectorAll(".qo").forEach((ce,ae)=>{ce.classList.add("disabled"),ae===C?ce.classList.add("correct"):ae===R&&R!==C&&ce.classList.add("wrong")}),G.dataset.answered="1",document.getElementById(`${y}-exp`)?.classList.add("v"),j(document.querySelectorAll('#section-content .quiz-opts[data-answered="1"]').length))},window.switchTab=(y,R,C)=>{document.querySelectorAll(`[id^="${y}-"]`).forEach(G=>G.classList.remove("a")),document.getElementById(`${y}-${R}`)?.classList.add("a"),C.parentElement?.querySelectorAll(".ct").forEach(G=>G.classList.remove("a")),C.classList.add("a")},window.runPg=y=>{const R=document.getElementById(`${y}-ed`),C=document.getElementById(`${y}-out`);if(!(!R||!C)){C.classList.remove("err");try{const G=[],ce=console.log;console.log=(...ae)=>{G.push(ae.map(String).join(" ")),ce(...ae)},new Function(R.value)(),console.log=ce,C.textContent=G.join(`
`)||"// Sem output"}catch(G){C.textContent=String(G),C.classList.add("err")}}}},[]),Ee.useEffect(()=>{j(0),f.current?.scrollTo(0,0),window.Prism&&window.Prism.highlightAll();const y=document.querySelectorAll("#section-content .quiz-opts");Y(y.length)},[A.id]);const _=L>0&&q<L;return x.jsxs("div",{id:"section-content",ref:f,className:"flex-1 overflow-y-auto px-9 py-7 w-full section-fade",style:{paddingBottom:"max(80px, env(safe-area-inset-bottom, 0px))"},children:[x.jsx("div",{dangerouslySetInnerHTML:{__html:A.content}}),x.jsx(_p,{onPrev:z,onNext:T,nextLocked:_})]})}function Rp({onNavigate:A,completed:z}){return x.jsxs("div",{id:"content",className:"flex-1 overflow-y-auto w-full",children:[x.jsx("div",{className:"welcome-label",children:"Bem-vindo ao"}),x.jsx("h1",{className:"welcome-title",children:"Architecture Atlas"}),x.jsx("p",{className:"lead",children:"Guia interativo de arquitetura de software — Design Patterns GoF, SOLID, Clean Architecture, DDD, Microservices e System Design."}),x.jsx("button",{className:"start-btn",onClick:()=>A(zt[0].id,zt[0].sections[0].id),children:"Começar →"}),x.jsx("div",{className:"divider"}),x.jsx("div",{className:"hgrid",children:zt.map(T=>{const f=T.sections.filter(L=>z.has(`${T.id}/${L.id}`)).length,q=T.sections.length,j=Math.round(f/q*100);return x.jsxs("div",{className:"hcard",onClick:()=>A(T.id,T.sections[0].id),children:[x.jsx("div",{className:"hcard-ic",children:T.emoji}),x.jsx("div",{className:"hcard-title",children:T.title}),x.jsxs("div",{className:"hcard-desc",children:[q," seções"]}),f>0?x.jsxs("div",{className:"hcard-cnt",children:[f,"/",q," concluídos"]}):null,x.jsx("div",{className:"hcard-prog",children:x.jsx("div",{className:"hcard-prog-fill",style:{width:`${j}%`}})})]},T.id)})})]})}function Up(){const[A,z]=Ee.useState(!1),{completed:T,toggle:f,markDone:q,progressPct:j}=pp(),{currentModule:L,currentSection:Y,currentSec:_,currentLevel:y,prevSection:R,nextSection:C,navigate:G,showHome:ce}=gp();Ee.useEffect(()=>{if(!L||!Y)return;const Ge=`${L}/${Y}`,Ue=setTimeout(()=>q(Ge),3e3);return()=>clearTimeout(Ue)},[L,Y,q]);const ae=(Ge,Ue)=>{G(Ge,Ue),z(!1)},he=()=>{ce(),z(!1)};return x.jsxs("div",{className:"flex overflow-hidden w-full",style:{height:"100vh",background:"var(--bg)",color:"var(--t1)",fontFamily:"var(--fs)"},children:[A&&x.jsx("div",{className:"fixed inset-0 z-40 md:hidden",style:{background:"rgba(0,0,0,0.5)"},onClick:()=>z(!1)}),x.jsx("nav",{id:"sb",className:`flex flex-col overflow-hidden z-50 transition-transform duration-200 ${A?"translate-x-0":"-translate-x-full"} fixed top-0 left-0 h-full md:relative md:translate-x-0`,style:{width:"272px",minWidth:"272px",background:"var(--bgs)",borderRight:"1px solid var(--brd)"},children:x.jsx(Sp,{currentModule:L,currentSection:Y,completed:T,progressPct:j,onNavigate:ae,onToggle:f,onHome:he})}),x.jsxs("main",{className:"flex-1 flex flex-col overflow-hidden",children:[x.jsx(Mp,{currentTitle:_?.title??null,currentLevel:y,onToggleSidebar:()=>z(Ge=>!Ge),onHome:he}),_?x.jsx(xp,{section:_,onPrev:R?()=>G(R.mid,R.sid):null,onNext:C?()=>G(C.mid,C.sid):null},_.id):x.jsx(Rp,{onNavigate:G,completed:T})]})]})}fp.createRoot(document.getElementById("root")).render(x.jsx(Ee.StrictMode,{children:x.jsx(Up,{})}));
