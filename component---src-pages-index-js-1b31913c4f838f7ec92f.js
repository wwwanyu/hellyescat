"use strict";(self.webpackChunkhell_yes_cat=self.webpackChunkhell_yes_cat||[]).push([[678],{3723:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return v},P:function(){return E},S:function(){return q},_:function(){return c},a:function(){return i},b:function(){return o},g:function(){return d},h:function(){return l}});var s=a(7294),n=(a(2369),a(5697)),r=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t.indexOf(a=r[s])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a,s,n){return void 0===n&&(n={}),i({},a,{loading:s,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,s,n,r,c,l){const o={};r&&(o.backgroundColor=r,"fixed"===a?(o.width=s,o.height=n,o.backgroundColor=r,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),c&&(o.objectFit=c),l&&(o.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?s.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?s.createElement("div",{style:{maxWidth:a,display:"block"}},s.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg height='${n}' width='${a}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=c(e,p);return s.createElement(s.Fragment,null,s.createElement(m,i({},a)),t,null)},u=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:r="",shouldLoad:l}=e,o=c(e,u);return s.createElement("img",i({},o,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:r}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,r=c(e,g);const l=r.sizes||(null==t?void 0:t.sizes),o=s.createElement(b,i({},r,t,{sizes:l,shouldLoad:n}));return a.length?s.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:r}=e;return s.createElement("source",{key:`${t}-${r}-${a}`,type:r,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),o):o};var y;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const h=["fallback"],E=function(e){let{fallback:t}=e,a=c(e,h);return t?s.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):s.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(y=w.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const v=function(e){return s.createElement(s.Fragment,null,s.createElement(w,i({},e)),s.createElement("noscript",null,s.createElement(w,i({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=w.propTypes;const x=function(e,t,a){for(var s=arguments.length,n=new Array(s>3?s-3:0),i=3;i<s;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:r().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],S=new Set;let L,_;const O=function(e){let{as:t="div",image:n,style:r,backgroundColor:o,className:d,class:p,onStartLoad:m,onLoad:f,onError:u}=e,g=c(e,k);const{width:b,height:w,layout:y}=n,h=function(e,t,a){const s={};let n="gatsby-image-wrapper";return"fixed"===a?(s.width=e,s.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:s}}(b,w,y),{style:E,className:v}=h,x=c(h,C),N=(0,s.useRef)(),O=(0,s.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const j=function(e,t,a){let s="";return"fullWidth"===e&&(s=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(s=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height='${a}' width='${t}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),s}(y,b,w);return(0,s.useEffect)((()=>{L||(L=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(O);if(_&&S.has(O))return;let t,s;return L.then((e=>{let{renderImageToString:a,swapPlaceholderImage:c}=e;N.current&&(N.current.innerHTML=a(i({isLoading:!0,isLoaded:S.has(O),image:n},g)),S.has(O)||(t=requestAnimationFrame((()=>{N.current&&(s=c(N.current,O,S,r,m,f,u))}))))})),()=>{t&&cancelAnimationFrame(t),s&&s()}}),[n]),(0,s.useLayoutEffect)((()=>{S.has(O)&&_&&(N.current.innerHTML=_(i({isLoading:S.has(O),isLoaded:S.has(O),image:n},g)),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}))}),[n]),(0,s.createElement)(t,i({},x,{style:i({},E,r,{backgroundColor:o}),className:`${v}${d?` ${d}`:""}`,ref:N,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},j=(0,s.memo)((function(e){return e.image?(0,s.createElement)(O,e):null}));j.propTypes=N,j.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],T=function(e,t){for(var a=arguments.length,s=new Array(a>2?a-2:0),n=2;n<a;n++)s[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(s)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},$=new Set(["fixed","fullWidth","constrained"]),I={src:r().string.isRequired,alt:x,width:T,height:T,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!$.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}},q=(A=j,function(e){let{src:t,__imageData:a,__error:n}=e,r=c(e,z);return n&&console.warn(n),a?s.createElement(A,i({image:a},r)):(console.warn("Image not loaded",t),null)});var A;q.displayName="StaticImage",q.propTypes=I},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,s=!1;for(let n=0;n<e.length;n++){const r=e[n];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,s=a,a=!0,n++):a&&s&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,n-1)+"-"+e.slice(n-1),s=a,a=!1,t=!0):(t=r.toLowerCase()===r&&r.toUpperCase()!==r,s=a,a=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},5811:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var s=a(7294),n=a(3723),r="undefined"!=typeof window,i=[],c=function(){r&&!window.splitbee||(o.track=window.splitbee.track,o.user=window.splitbee.user,o.enableCookie=window.splitbee.enableCookie,o.reset=window.splitbee.reset,i.forEach((function(e){"track"===e.type?window.splitbee.track.apply(null,e.payload):"user"===e.type?window.splitbee.user.set.apply(null,e.payload):"enableCookie"===e.type?window.splitbee.enableCookie.apply(null,e.payload):"reset"===e.type&&window.splitbee.reset()})),i=[])},l=function(e){return function(){try{for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return i.push({type:e,payload:a}),r&&window.splitbee&&c(),Promise.resolve()}catch(n){return Promise.reject(n)}}},o={track:l("track"),user:{set:l("user")},init:function(e){if(r&&!window.splitbee){var t=window.document,a=null!=e&&e.scriptUrl?e.scriptUrl:"https://cdn.splitbee.io/sb.js",s=t.querySelector("script[src='"+a+"']");if(s)s.onload=c;else{var n=t.createElement("script");n.src=a,n.async=!0,e&&(e.apiUrl&&(n.dataset.api=e.apiUrl),e.token&&(n.dataset.token=e.token),e.disableCookie&&(n.dataset.noCookie="1")),n.onload=c,t.head.appendChild(n)}}},enableCookie:l("enableCookie"),reset:l("reset")};o.init();const d={color:"#232129",padding:96},p={textAlign:"center"};var m=()=>s.createElement(s.Fragment,null,s.createElement("main",{style:d},s.createElement("div",{style:p},s.createElement(n.S,{alt:"Hell Yes Cas Logotype",src:"../images/hellyes-logotype.svg",__imageData:a(9490)})),s.createElement("div",{style:p},s.createElement("h1",null,"關於黑貓的傳說都是真的"),s.createElement("div",{className:"gate"},s.createElement(n.S,{alt:"黑貓頭形狀的大門",src:"../images/gate-close.jpg",className:"closed",__imageData:a(8866)}),s.createElement(n.S,{alt:"黑貓頭形狀的大門",src:"../images/gate-open.jpg",className:"opened",__imageData:a(6466)})))),s.createElement("div",{className:"d-flex flex-column justify-content-center"},s.createElement("section",{className:"container-lg mb-5"},s.createElement("h1",{className:"fw-bold"},"黑貓跳棺材，死人變殭屍"),s.createElement("span",{className:"fs-2"},s.createElement("p",{className:"my-5"},"黑貓跟女巫被吃巫群眾追著，她們逃到公園爬到樹上，四周安靜了下來。",s.createElement("br",null),"她們在樹上休息，女巫：「那些人也要抓你是因為他們聽說黑貓跳過棺材，死人就會變成殭屍。」黑貓翻黃眼覺得不耐煩。"),s.createElement("p",{className:"my-5"},"「要是真的就好了，我就整天跳棺材，超好玩的！」",s.createElement("br",null),"「那他們為什麼要抓你？」黑貓問。"),s.createElement("p",{className:"my-5"},"突然這棵樹劇烈搖晃，是里長伯帶領著吃巫群眾在鋸樹！女巫跟黑貓跳下樹全力狂奔，女巫對著黑貓大喊：「我知道該怎麼擺脫他們了，跟著我！」黑貓回應了響亮的一聲：「喵！」。"),s.createElement("div",{className:"text-center mb-5"},s.createElement(n.S,{alt:"吃巫群眾追著女巫跟黃眼黑貓",src:"../images/hunting.png",__imageData:a(8186)}),s.createElement("br",null)),s.createElement("p",{className:"my-5"},"她們跑到殯儀館，停在一副棺材前，女巫轉身面向吃巫群眾，這時氣場逆轉，女巫跟黑貓竟然跑到殯儀館停在一具棺材前面！看得出來吃巫者是很膽小的，跟在外圍的早就開溜了，帶頭的里長伯眼也覺得毛毛的，好想回家，但是有支持者跟著，這樣就回家太丟臉了，真希望自己是乖乖在家裡看政論節目。"),s.createElement("p",{className:"my-5"},"黑貓壓低上半身，抬高屁股輕輕的扭動，準備跳躍的動作引發吃巫者第二批逃難潮，只剩下不到十個吃巫仔了。"),s.createElement("p",{className:"my-5"},"吃巫仔逃跑同時，黑貓輕盈跳過棺材，但什麼事都沒發生。",s.createElement("br",null),"黑貓回頭再跳一次，棺材還是沒有動靜。"),s.createElement("p",{className:"my-5"},"吃巫群眾開始嘲笑鼓譟。黑貓又跳到棺材蓋上，走了幾步聞一聞，用爪子撥了幾下，看起來有點無奈，乾脆坐在棺材蓋上。"),s.createElement("p",{className:"my-5"},"黑貓：「現在怎麼辦啦！」",s.createElement("br",null),"女巫：「該不會是空的棺材 ... 試試看跳別的？」"),s.createElement("p",{className:"my-5"},"吃巫群眾佔回上風，他們試著再次包圍女巫跟黑貓。"),s.createElement("p",{className:"my-5"},"突然棺材蓋子被推動了！"),s.createElement("p",{className:"my-5"},"里長伯發出淒厲的叫聲逃跑了，黑貓被人類淒厲的叫聲嚇到，耳朵緊緊貼著後腦勺，模糊黑影像閃電瞬間消失。"),s.createElement("p",{className:"my-5"},"女巫也是第一次遇到這種狀況，出於本能朝著吃巫群眾的反方向逃跑。"),s.createElement("p",{className:"my-5"},"四周恢復平靜。",s.createElement("br",null),"殭屍緩慢爬出棺材，嘴裡念念有詞：",s.createElement("br",null),"「Hello hell world … hell … world, hello? Hello, hell world ... 」"))),s.createElement("div",{role:"hr",className:"text-center mb-5"},s.createElement(n.S,{src:"../images/bone.png",__imageData:a(851)}),s.createElement("br",null),s.createElement(n.S,{src:"../images/bone.png",__imageData:a(851)}),s.createElement("br",null),s.createElement(n.S,{src:"../images/bone.png",__imageData:a(851)})),s.createElement("section",{className:"container-lg"},s.createElement("h1",{className:"fw-bold"},"貓有九條命"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"民間相傳，第一隻死去的貓就是黑色的。"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"那是一隻藍眼睛的黑貓，她經歷死亡過程的混沌，恢復意識時已經坐在 Officeverse，冥王説：「黑貓，現在要開始審判妳，過來跟我一起看這灘水！」"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"黑貓坐起面向冥王，但沒有看著他。不管冥王怎麼努力，黑貓就是不理，還轉過身背對冥王、捲起身體準備睡覺了。"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"黑貓：「為什麼我要接受審判？」",s.createElement("br",null),"冥王：「呃，因為妳死掉了啊，我一直以來都是在審判靈魂啊。」",s.createElement("br",null),"黑貓：「我死掉關你什麼事？」",s.createElement("br",null),"冥王愣住了，從來沒有人質疑過他。",s.createElement("br",null),"黑貓：「接受你的審判對我有什麼好處？」"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"不審判靈魂的話，冥王不知道自己還能做什麼？他想趕快轉移話題。",s.createElement("br",null),"黑貓：「如果能有更多時間，或許我可以理解為什麼要接受審判。」",s.createElement("br",null),"冥王：「什麼意思？」",s.createElement("br",null),"黑貓說明自己發現人類很擅長被審判，而人類活得比較久。"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"「可能因為我們貓太笨了，如果有九條命，讓我們復活回到地球表面，這樣就有時間理解為什麼要接受審判。」黑貓說。"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"冥王心想反正一隻貓才活個三五年，牠們很快就會用完九條命，最後還不是得接受審判！他暗自竊喜：「黑貓說得對，貓真的很笨！」於是開心的答應黑貓的要求。"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"冥王帶著黑貓到會議室，在生死簿見證下，黑貓蓋下肉球，完成「貓有九條命契約」。",s.createElement("br",null),"冥王對第一隻死掉的黑貓說：「那你就好好的去充實妳的腦袋，我們八條命後見囉。」"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"黑貓終於忍不住笑到翻肚說：「我永遠都不會接受什麼笨審判，你花那麼多時間檢討別人的一生，是因為你沒有自己的！哈哈哈雞婆的膽小鬼！」"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"冥王驚覺黑貓只是在裝笨，自己竟然上當了！",s.createElement("br",null),"「可惡的黑貓！我一定會讓妳後悔回到地球表面，我要讓所有的貓都活得非常痛苦！」"),s.createElement("p",{className:"fs-2 my-4 my-sm-5"},"第一隻死去的黑貓，帶領第一批死掉的貓回到了地球表面。復活的貓分頭前往世界各地，傳遞來自地獄的消息，互相提醒要小心冥王的報復。"),s.createElement("div",{className:"text-center mb-5"},s.createElement(n.S,{alt:"第一隻死掉的黑貓跟冥王",src:"../images/first-dead-cat-and-officegod.png",__imageData:a(5461)})))))},851:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/e88dc18151f2f6536451f8385de600c8/80605/bone.png","srcSet":"/static/e88dc18151f2f6536451f8385de600c8/54ec7/bone.png 65w,\\n/static/e88dc18151f2f6536451f8385de600c8/2e81e/bone.png 131w,\\n/static/e88dc18151f2f6536451f8385de600c8/80605/bone.png 261w","sizes":"(min-width: 261px) 261px, 100vw"},"sources":[{"srcSet":"/static/e88dc18151f2f6536451f8385de600c8/abc90/bone.webp 65w,\\n/static/e88dc18151f2f6536451f8385de600c8/f9387/bone.webp 131w,\\n/static/e88dc18151f2f6536451f8385de600c8/6c67f/bone.webp 261w","type":"image/webp","sizes":"(min-width: 261px) 261px, 100vw"}]},"width":261,"height":186}')},9490:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/02770a9fc3844c0750854a1118d8dc1f/a9531/hellyes-logotype.svg","srcSet":"/static/02770a9fc3844c0750854a1118d8dc1f/f4c35/hellyes-logotype.svg 135w,\\n/static/02770a9fc3844c0750854a1118d8dc1f/00317/hellyes-logotype.svg 269w,\\n/static/02770a9fc3844c0750854a1118d8dc1f/a9531/hellyes-logotype.svg 538w","sizes":"(min-width: 538px) 538px, 100vw"},"sources":[{"srcSet":"/static/02770a9fc3844c0750854a1118d8dc1f/15232/hellyes-logotype.webp 135w,\\n/static/02770a9fc3844c0750854a1118d8dc1f/5e878/hellyes-logotype.webp 269w,\\n/static/02770a9fc3844c0750854a1118d8dc1f/04248/hellyes-logotype.webp 538w","type":"image/webp","sizes":"(min-width: 538px) 538px, 100vw"}]},"width":538,"height":120}')},8186:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/d1ba99b1a73204091cfd4016e1131f59/13677/hunting.png","srcSet":"/static/d1ba99b1a73204091cfd4016e1131f59/de391/hunting.png 250w,\\n/static/d1ba99b1a73204091cfd4016e1131f59/82c11/hunting.png 500w,\\n/static/d1ba99b1a73204091cfd4016e1131f59/13677/hunting.png 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/static/d1ba99b1a73204091cfd4016e1131f59/e7160/hunting.webp 250w,\\n/static/d1ba99b1a73204091cfd4016e1131f59/5f169/hunting.webp 500w,\\n/static/d1ba99b1a73204091cfd4016e1131f59/3cd29/hunting.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":1000}')},5461:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b640f412b4a73a8322488a23e7dff405/6b4f4/first-dead-cat-and-officegod.png","srcSet":"/static/b640f412b4a73a8322488a23e7dff405/7eabf/first-dead-cat-and-officegod.png 200w,\\n/static/b640f412b4a73a8322488a23e7dff405/7305e/first-dead-cat-and-officegod.png 400w,\\n/static/b640f412b4a73a8322488a23e7dff405/6b4f4/first-dead-cat-and-officegod.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/b640f412b4a73a8322488a23e7dff405/faf2a/first-dead-cat-and-officegod.webp 200w,\\n/static/b640f412b4a73a8322488a23e7dff405/8cbf0/first-dead-cat-and-officegod.webp 400w,\\n/static/b640f412b4a73a8322488a23e7dff405/bfebe/first-dead-cat-and-officegod.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":744}')},6466:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8d8","images":{"fallback":{"src":"/static/39b1e2580860370bb9af2ca8ddb52093/f88e3/gate-open.jpg","srcSet":"/static/39b1e2580860370bb9af2ca8ddb52093/20fb4/gate-open.jpg 401w,\\n/static/39b1e2580860370bb9af2ca8ddb52093/e9596/gate-open.jpg 803w,\\n/static/39b1e2580860370bb9af2ca8ddb52093/f88e3/gate-open.jpg 1605w","sizes":"(min-width: 1605px) 1605px, 100vw"},"sources":[{"srcSet":"/static/39b1e2580860370bb9af2ca8ddb52093/1ef6e/gate-open.webp 401w,\\n/static/39b1e2580860370bb9af2ca8ddb52093/3f3a0/gate-open.webp 803w,\\n/static/39b1e2580860370bb9af2ca8ddb52093/3a5b5/gate-open.webp 1605w","type":"image/webp","sizes":"(min-width: 1605px) 1605px, 100vw"}]},"width":1605,"height":1143}')},8866:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8f8d8","images":{"fallback":{"src":"/static/50210a62c42b80af7373ca5d55acfdad/0c3f4/gate-close.jpg","srcSet":"/static/50210a62c42b80af7373ca5d55acfdad/87f09/gate-close.jpg 416w,\\n/static/50210a62c42b80af7373ca5d55acfdad/e04fb/gate-close.jpg 833w,\\n/static/50210a62c42b80af7373ca5d55acfdad/0c3f4/gate-close.jpg 1665w","sizes":"(min-width: 1665px) 1665px, 100vw"},"sources":[{"srcSet":"/static/50210a62c42b80af7373ca5d55acfdad/86a56/gate-close.webp 416w,\\n/static/50210a62c42b80af7373ca5d55acfdad/a16fd/gate-close.webp 833w,\\n/static/50210a62c42b80af7373ca5d55acfdad/b248a/gate-close.webp 1665w","type":"image/webp","sizes":"(min-width: 1665px) 1665px, 100vw"}]},"width":1665,"height":1214}')}}]);
//# sourceMappingURL=component---src-pages-index-js-1b31913c4f838f7ec92f.js.map