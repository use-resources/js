window.MyResourceFunction=function(e){return e.rand=function(...e){let[t,n=0]=e.reverse();return Math.floor(Math.random()*(t+1-n)+n)},e.createNodeElement=function(e){let t=document.createElement("div");t.innerHTML=e;let n=t.children[0]||"";return t.innerHTML="",n},e.createNodeElements=function(e){let t=document.createElement("div");t.innerHTML=e;let n=[...t.children];return t.innerHTML="",n},e.createObjectElement=function(e,t,n=!1){return Array.from(e).reduce((e,r)=>(e[r.getAttribute(t)]=r,n&&r.removeAttribute(t),e),{})},e.createNodeFragment=function(e){let t=document.createElement("div"),n=document.createDocumentFragment();return t.innerHTML=e,n.append(...t.children),n},e.replaceNodeChildren=function(e,t={}){let n=e=>e instanceof Text||e instanceof String||e instanceof Element||e instanceof HTMLElement||e instanceof DocumentFragment||"string"==typeof render;return n(e)&&("function"==typeof t&&(t=t(e)),Object.entries(t??{}).forEach(t=>{let r=e.querySelector(t[0]);r&&(r.replaceWith(t[1]),n(t[1])&&Array.from(r.attributes).forEach(e=>{t[1].setAttribute?.(e.name,`${t[1].getAttribute(e.name)||""} ${e.value}`.trim())}))})),e},e.copyToClipboard=function(e=""){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.setAttribute("style","position: fixed; top: 100%; left: 100%;"),t.value=e,document.body.append(t),t.select(),document.execCommand("copy"),t.remove()}},e.fromSecondsToTime=function(e){return{hours:Math.floor((e=parseInt(e))/3600),minutes:Math.floor(e%3600/60),seconds:e%60}},e.styleElement=function(e,t){try{return Object.keys(t??{}).forEach(n=>e.style[n]=t[n]),e}catch(n){return e}},e.downloadFile=function(e,t=""){let n=document.createElement("a");n.style.display="none",n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)},e.calculateAspectRatio=function(e,t){let{width:n,height:r}=e,{width:i,height:o}=t;return i&&o||i?{width:i,height:r*(i/n)}:o?{width:n*(o/r),height:o}:{width:n,height:r}},e.encodeQueryObject=function(e){return e instanceof Object?Array.from([e]).flat().map(e=>Object.entries(e).map(e=>[encodeURIComponent(e[0]),encodeURIComponent(e[1]),].join("=")).join("&")).join("&"):""},e.fetchWebElement=function(e){return new Promise((t,n)=>{fetch(e).then(e=>e.text()).then(e=>{let n=document.createElement("div");n.innerHTML=e,t(n)}).catch(n)})},e.generateUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},e.observeValue=function(e){let t={},n=new Map;return Object.defineProperty(t,"_value",{value:e,writable:!0,enumerable:!1,configurable:!1}),Object.defineProperty(t,"value",{get:function(){return this._value},set:function(e){this._value!==e&&(this._value=e,n.forEach(e=>e()))}}),Object.defineProperty(t,"observe",{value(e){let r=Symbol(),i=()=>n.delete(r);return n.set(r,()=>{e(t.value,i)}),e(t.value,i),i},writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(t,"unobserve",{value:()=>(n.clear(),n.size),writable:!1,enumerable:!1,configurable:!1}),Object.seal(t),t},e.callbackInterval=function e(t,n=1e3){let r=0,i=setInterval(()=>{t(++r,i)&&clearInterval(i)},parseInt(n)||1e3);return t(r,i),i},e.callbackTryCatch=function(e=null,t=null,...n){try{if("function"==typeof e)return e(...n);return e}catch(r){if("function"==typeof t)return t(r);return t}},e}({});