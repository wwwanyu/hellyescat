(self.webpackChunkhell_yes_cat=self.webpackChunkhell_yes_cat||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},8559:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var r,o,i,a,c=n(7294),u=n(8945),s="undefined"!=typeof window,l=[],f=function(){s&&!window.splitbee||(d.track=window.splitbee.track,d.user=window.splitbee.user,d.enableCookie=window.splitbee.enableCookie,d.reset=window.splitbee.reset,l.forEach((function(e){"track"===e.type?window.splitbee.track.apply(null,e.payload):"user"===e.type?window.splitbee.user.set.apply(null,e.payload):"enableCookie"===e.type?window.splitbee.enableCookie.apply(null,e.payload):"reset"===e.type&&window.splitbee.reset()})),l=[])},p=function(e){return function(){try{for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return l.push({type:e,payload:n}),s&&window.splitbee&&f(),Promise.resolve()}catch(o){return Promise.reject(o)}}},d={track:p("track"),user:{set:p("user")},init:function(e){if(s&&!window.splitbee){var t=window.document,n=null!=e&&e.scriptUrl?e.scriptUrl:"https://cdn.splitbee.io/sb.js",r=t.querySelector("script[src='"+n+"']");if(r)r.onload=f;else{var o=t.createElement("script");o.src=n,o.async=!0,e&&(e.apiUrl&&(o.dataset.api=e.apiUrl),e.token&&(o.dataset.token=e.token),e.disableCookie&&(o.dataset.noCookie="1")),o.onload=f,t.head.appendChild(o)}}},enableCookie:p("enableCookie"),reset:p("reset")},y=d,b=n(5697),h=n.n(b),m=n(4839),w=n.n(m),g=n(2993),T=n.n(g),v=n(6494),C=n.n(v),A="bodyAttributes",O="htmlAttributes",E="titleAttributes",S={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(S).map((function(e){return S[e]})),"charset"),j="cssText",P="href",x="http-equiv",L="innerHTML",I="itemprop",M="name",N="property",_="rel",R="src",H="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},q="defaultTitle",B="defer",U="encodeSpecialCharacters",Y="onChangeClientState",F="titleTemplate",z=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),K=[S.NOSCRIPT,S.SCRIPT,S.STYLE],V="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ee=function(e){var t=ie(e,S.TITLE),n=ie(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ie(e,q);return t||r||void 0},te=function(e){return ie(e,Y)||function(){}},ne=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return G({},e,t)}),{})},re=function(e,t){return t.filter((function(e){return void 0!==e[S.BASE]})).map((function(e){return e[S.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},oe=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&le("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===_&&"canonical"===e[n].toLowerCase()||u===_&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==L&&c!==j&&c!==I||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=C()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ie=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ae=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ae(e)}),0)}),ce=function(e){return clearTimeout(e)},ue="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae:n.g.requestAnimationFrame||ae,se="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ce:n.g.cancelAnimationFrame||ce,le=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},fe=null,pe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;be(S.BODY,r),be(S.HTML,o),ye(f,p);var d={baseTag:he(S.BASE,n),linkTags:he(S.LINK,i),metaTags:he(S.META,a),noscriptTags:he(S.NOSCRIPT,c),scriptTags:he(S.SCRIPT,s),styleTags:he(S.STYLE,l)},y={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),u(e,y,b)},de=function(e){return Array.isArray(e)?e.join(""):e},ye=function(e,t){void 0!==e&&document.title!==e&&(document.title=de(e)),be(S.TITLE,t)},be=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(V),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(V):n.getAttribute(V)!==a.join(",")&&n.setAttribute(V,a.join(","))}},he=function(e,t){var n=document.head||document.querySelector(S.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(V,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},we=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},ge=function(e,t,n){switch(e){case S.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[V]=!0,o=we(n,r),[c.createElement(S.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=me(n),i=de(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case A:case O:return{toComponent:function(){return we(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[V]=!0,r);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===L||n===j){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===L||e===j)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Te=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ge(S.BASE,t,r),bodyAttributes:ge(A,n,r),htmlAttributes:ge(O,o,r),link:ge(S.LINK,i,r),meta:ge(S.META,a,r),noscript:ge(S.NOSCRIPT,c,r),script:ge(S.SCRIPT,u,r),style:ge(S.STYLE,s,r),title:ge(S.TITLE,{title:f,titleAttributes:p},r)}},ve=w()((function(e){return{baseTag:re([P,H],e),bodyAttributes:ne(A,e),defer:ie(e,B),encode:ie(e,U),htmlAttributes:ne(O,e),linkTags:oe(S.LINK,[_,P],e),metaTags:oe(S.META,[M,k,x,N,I],e),noscriptTags:oe(S.NOSCRIPT,[L],e),onChangeClientState:te(e),scriptTags:oe(S.SCRIPT,[R,L],e),styleTags:oe(S.STYLE,[j],e),title:ee(e),titleAttributes:ne(E,e)}}),(function(e){fe&&se(fe),e.defer?fe=ue((function(){pe(e,(function(){fe=null}))})):(pe(e),fe=null)}),Te)((function(){return null})),Ce=(o=ve,a=i=function(e){function t(){return $(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.SCRIPT:case S.NOSCRIPT:return{innerHTML:t};case S.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return G({},r,((t={})[n.type]=[].concat(r[n.type]||[],[G({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case S.TITLE:return G({},o,((t={})[r.type]=a,t.titleAttributes=G({},i),t));case S.BODY:return G({},o,{bodyAttributes:G({},i)});case S.HTML:return G({},o,{htmlAttributes:G({},i)})}return G({},o,((n={})[r.type]=G({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=G({},t);return Object.keys(e).forEach((function(t){var r;n=G({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case S.LINK:case S.META:case S.NOSCRIPT:case S.SCRIPT:case S.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=G({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},J(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:h().object,bodyAttributes:h().object,children:h().oneOfType([h().arrayOf(h().node),h().node]),defaultTitle:h().string,defer:h().bool,encodeSpecialCharacters:h().bool,htmlAttributes:h().object,link:h().arrayOf(h().object),meta:h().arrayOf(h().object),noscript:h().arrayOf(h().object),onChangeClientState:h().func,script:h().arrayOf(h().object),style:h().arrayOf(h().object),title:h().string,titleAttributes:h().object,titleTemplate:h().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=Te({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Ce.renderStatic=Ce.rewind;y.init();var Ae={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"},Oe={color:"#322C25"},Ee=function(){return c.createElement("main",{style:Ae},c.createElement(Ce,null,c.createElement("meta",{charSet:"utf-8"}),c.createElement("title",null,"Hell Yes Cat"),c.createElement("link",{rel:"canonical",href:"https://hellyes.cat"})),c.createElement(u.S,{alt:"Hell Yes Cas Logotype",src:"../images/logotype.svg",__imageData:n(4845)}),c.createElement("h1",{style:Oe},"coming ...slow",c.createElement("span",{role:"img","aria-label":"猴子遮臉"},"🙈")),c.createElement("p",null,"不過，關於黑貓的傳說都是真的！"))}},4845:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/4ea5a2f5ae0ab356dd534352c716db7c/d638b/logotype.svg","srcSet":"/static/4ea5a2f5ae0ab356dd534352c716db7c/d558b/logotype.svg 200w,\\n/static/4ea5a2f5ae0ab356dd534352c716db7c/441d7/logotype.svg 401w,\\n/static/4ea5a2f5ae0ab356dd534352c716db7c/d638b/logotype.svg 801w","sizes":"(min-width: 801px) 801px, 100vw"},"sources":[{"srcSet":"/static/4ea5a2f5ae0ab356dd534352c716db7c/68c1b/logotype.webp 200w,\\n/static/4ea5a2f5ae0ab356dd534352c716db7c/fa292/logotype.webp 401w,\\n/static/4ea5a2f5ae0ab356dd534352c716db7c/96f24/logotype.webp 801w","type":"image/webp","sizes":"(min-width: 801px) 801px, 100vw"}]},"width":801,"height":123.00000000000001}')}}]);
//# sourceMappingURL=component---src-pages-index-js-48373aea0ab06969ccae.js.map