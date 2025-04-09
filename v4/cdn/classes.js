window.myResourceClass=function(t){return t.MyArray=class{static range(t,r){void 0===r&&(r=t,t=0);let e=[];for(let a=t;a<=r;a++)e.push(a);return e}static search(t,r){if("function"==typeof r)for(let e=0;e<t.length;e++){let a=r(t[e],e,t);if(a)return[t[e],e,a]}return[null,-1,null]}static copy(t){return[...t]}static shuffle(t){let r=[...t],e=[];for(;r.length;){let a=Math.floor(Math.random()*r.length);e.push(...r.splice(a,1))}return e}static array(t=[]){return Array.isArray(t)||t&&"function"==typeof t[Symbol.iterator]?Array.from(t):[]}static changeIndex(t,r,e){if(r>=0&&r<t.length&&e>=0&&e<t.length){let a=t[r];t[r]=t[e],t[e]=a}}static split(t,r=[]){let e=Array.from(r),a=e.reduce((r,e)=>(t.replaceAll(e,(t,e,a,s)=>{let i=s?a:e,n=s?a+e.length:e+t.length;return r[i]=n,""}),r),{});return Array.from(t).reduce((t,r,e,s)=>(t.some=Object.entries(a).some(([t,r])=>parseInt(t)<=e&&e<r),t.some||(t.string+=r,t.add=!0),(t.add&&t.some||!s[e+1])&&(t.array.push(t.string),t.string="",t.add=!1),t),{string:"",array:[],some:!1,add:!1}).array}static map(t,r,e=!0){let a=[];for(let s=0;s<t.length;s++){let i=r(t[s],s,t);(e||i)&&a.push(i)}return a}},t.MyColor=class{static toRgb(t={}){if(t?.hex){let r=t.hex;3===(r=(r=r.replace(/^#/,"")).slice(0,6)).length&&(r=r.split("").map(t=>t+t).join(""));let e=parseInt(r,16),a=e>>16&255,s=e>>8&255,i=255&e;return{string:`rgb(${a}, ${s}, ${i})`,array:[a,s,i]}}if(t?.color){let n=this.toHex({color:t.color});return this.toRgb({hex:n})}return{string:"",rgb:[]}}static toHex(t={}){if(t?.rgb){let[r=0,e=0,a=0]=Array.isArray(t.rgb)?t.rgb:[];return`#${(16777216|r<<16|e<<8|a).toString(16).slice(1).toUpperCase()}`}if(t?.color){let s=document.createElement("canvas").getContext("2d");return s.fillStyle=t.color,s.fillStyle.toUpperCase()}return""}static toDark(t={},r=20){if(t?.hex){let e=this.toRgb({hex:t.hex});return this.toDark({rgb:e.array},r)}if(t?.color){let a=this.toRgb({color:t.color});return this.toDark({rgb:a.array},r)}if(t?.rgb){let[s=0,i=0,n=0]=Array.isArray(t.rgb)?t.rgb:[];return s=Math.max(0,s-r),i=Math.max(0,i-r),n=Math.max(0,n-r),this.toHex({rgb:[s,i,n]})}return""}},t.MyImage=class{static async canvas(t){return new Promise((r,e)=>{let a=new Image;a.onload=()=>{let e=document.createElement("canvas"),s=e.getContext("2d");e.width=a.width,e.height=a.height,s.drawImage(a,0,0),r({canvas:e,ctx:s,url:t})},a.onerror=e,a.crossOrigin="Anonymous",a.src=t})}static async resize(t,r){return new Promise((e,a)=>{if(!Array.isArray(r))return a({status:!1,images:[]});let s=new Image;s.addEventListener("load",()=>{let t=r.map(t=>{let r=document.createElement("canvas"),e=r.getContext("2d"),a=t.both??t.width,i=t.both??t.height;r.width=a,r.height=i;let n=s.width/s.height,l=a/i,h,o,c,g;return n>l?(h=s.height*l,o=s.height,c=(s.width-h)/2,g=0):(h=s.width,o=s.width/l,c=0,g=(s.height-o)/2),e.drawImage(s,c,g,h,o,0,0,a,i),{width:a,height:i,canvas:r}});e({status:!0,images:t})}),s.addEventListener("error",()=>{a({status:!1,images:[]})}),s.crossOrigin="Anonymous",s.src=t})}},t.Trigger=class{constructor(){this._map=new Map}on(t,r){if("string"!=typeof t)return null;let e=this._map,a=Symbol(),s=()=>e.delete(a);return e.set(a,{type:t,symbol:a,callback(t){r(t,s)}}),s}off(t){let r=this._map;if("string"!=typeof t){r.clear();return}Array.from(r.keys()).forEach(e=>{let a=r.get(e);a.type===t&&r.delete(e)})}dispatch(t,r){if("string"!=typeof t)return!1;let e=this._map;return e.forEach(e=>{e.type===t&&e.callback(r)}),!0}},t.Trim=class{static left=(t="",r="")=>{if(""!=t&&""!=r)for(;t.startsWith(r);)t=t.slice(1);return t};static right=(t="",r="")=>{if(""!=t&&""!=r)for(;t.endsWith(r);)t=t.slice(0,-1);return t};static both=(t="",r="")=>{if(""!=t&&""!=r){for(;t.startsWith(r);)t=t.slice(1);for(;t.endsWith(r);)t=t.slice(0,-1)}return t}},t.MatchPath=class{constructor(){this._params={},this._set=[]}_path=t=>{if(!t)return[""];let r=t.split("/").filter(Boolean);return r.length?r:[""]};get=(t="")=>{this._params={};let r=this._path(t),e=this._set.find(t=>{if(-1!=t.all){let e=r.join("/").concat("/"),a=t.path.arrayString.slice(0,t.all).join("/").concat("/");return e.startsWith(a)||"/"==a}if(t.path.arrayObject.length==r.length){let s=r.every((r,e)=>t.path.arrayObject[e].status?(this._params[t.path.arrayObject[e].name]=r,!0):r===t.path.arrayObject[e].name);return s}return!1});return{status:Boolean(e),data:e?.data??null,params:this.params()}};set=(t,r=[])=>{this._set=r.map(r=>{let e=this._path(r[t]),a=-1;return{data:r,path:{arrayObject:e.map((t,r)=>(-1==a&&"*"==t&&(a=r),{status:t.startsWith(":"),name:t.startsWith(":")?t.slice(1):t})),arrayString:e},all:a}})};params=()=>({...this._params})},t}({});