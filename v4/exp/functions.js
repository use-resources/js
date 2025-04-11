export default(function(e){return e.rand=function(...e){let[t,n=0]=e.reverse();return Math.floor(Math.random()*(t+1-n)+n)},e.createElement=function(e,t){let n=document.createElement("div");n.innerHTML=e;let r=n.children[0]||"";return n.innerHTML="","function"==typeof t&&t(r),r},e.createFragment=function(...e){let t=document.createDocumentFragment();return t.append(...e),t},e.objectElement=function(e,t,n=!1){return Array.from(e).reduce((e,r)=>(e[r.getAttribute(t)]=r,n&&r.removeAttribute(t),e),{})},e.styleElement=function(e,t){let n=Array.isArray(e)?e:[e],r=Object.entries(t??{});return n.forEach(e=>{e instanceof Element&&r.forEach(([t,n])=>{e.style[t]=n})}),n},e.replaceChildren=function(e,t={}){return e instanceof Node&&Object.entries(t??{}).forEach(([t,n])=>{let r=e.querySelector(t);r&&(r.replaceWith(n),n instanceof Element&&(n.append(...r.childNodes),Array.from(r.attributes).forEach(e=>{n.setAttribute?.(e.name,`${n.getAttribute(e.name)||""} ${e.value}`.trim())})))}),e},e.copyToClipboard=function(e=""){if(navigator.clipboard)navigator.clipboard.writeText(e);else{let t=document.createElement("textarea");t.setAttribute("style","position: fixed; top: 100%; left: 100%;"),t.value=e,document.body.append(t),t.select(),document.execCommand("copy"),t.remove()}},e.countdown=function(e,t={}){let n=e=>Boolean(t instanceof Object?t[e]:t),r={day:0,hour:0,minute:0,second:0},o=parseInt(e);return n("day")&&(r.day=Math.floor(o/86400),o%=86400),n("hour")&&(r.hour=Math.floor(o/3600),o%=3600),n("minute")&&(r.minute=Math.floor(o/60),o%=60),n("second")&&(r.second=o),Object.freeze(r)},e.download=function(e="",t=""){let n=document.createElement("a");n.style.display="none",n.href=e,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)},e.getAspectRatio=function(e,t){let{width:n,height:r}=e,{width:o,height:i}=t;return o?{width:o,height:r*(o/n)}:i?{width:n*(i/r),height:i}:{width:n,height:r}},e.getUUID=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},e.signal=function(e){let t={},n=new Map,r=e;return Object.defineProperty(t,"value",{get:()=>r,set(e){e!==r&&(r=e,n.forEach(e=>e()))}}),Object.defineProperty(t,"on",{value(e,r=!0){let o=Symbol(),i=()=>n.delete(o);return n.set(o,()=>{e(t.value,i)}),Boolean(r)&&e(t.value,i),i},writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(t,"off",{value:()=>(n.clear(),n.size),writable:!1,enumerable:!1,configurable:!1}),Object.seal(t),t},e.event=function(e,t,n,r={}){let o=Array.isArray(e)?e:[e],i=()=>{};return o.map(e=>e&&"function"==typeof e.addEventListener?(e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}):i)},e.storage=function(e,t,n=!0){return Object.entries(t).reduce((t,r)=>{let o=n||!e.getItem(r[0]);return o&&e.setItem(r[0],r[1]instanceof Object?JSON.stringify(r[1]):r[1]),t[r[0]]=o,t},{})},e.percentage=function(e,t){return parseFloat(e)/parseFloat(t)*100},e.encodeToParams=function(e){if(e instanceof Object){let t=(e,t)=>{let n=encodeURIComponent(e),r=encodeURIComponent(String(t));return`${n}=${r}`};return Object.entries(e).map(([e,n])=>Array.isArray(n)?n.map(n=>t(e,n)).join("&"):t(e,n)).join("&")}return""},e.encodeToInput=function(e=""){let t=document.createElement("input");return t.setAttribute("value",e),t.outerHTML.slice(14,-2)},e.encodeToTextarea=function(e=""){let t=document.createElement("textarea");return t.innerHTML=e,t.innerHTML},e.callbackTryCatch=function(e=null,t=null,...n){try{if("function"==typeof e)return e(...n);return e}catch(r){if("function"==typeof t)return t(r);return t}},e.callbackInterval=function e(t,n=1e3){let r=0,o=setInterval(()=>{t(++r,o)&&clearInterval(o)},parseInt(n)||1e3);return t(r,o),o},e.callbackTimeout=function(e,t=0){let n=null,r=parseInt(t)||0;return(...t)=>{n&&clearTimeout(n),n=setTimeout(e,r,...t)}},e.formData=function(e){let t=new FormData;return Object.entries(e).forEach(function([e,n]){let r=Array.isArray(n)?n:[n];t.append(e,...r)}),t},e})({});