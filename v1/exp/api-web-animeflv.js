export default class{static search(e){return new Promise(t=>{function r(e){return Array.isArray(e)?e:[]}function i(e,t){return`${encodeURIComponent(e)}=${encodeURIComponent(t)}`}let n={page:Math.max(1,e.page)||1,genre:r(e.genre),year:r(e.year),type:r(e.type),status:r(e.status),order:"default",search:`${e.search||""}`.trim()},l=["genre","year","type","status"].filter(t=>!e.search&&n[t].length).map(e=>n[e].map(t=>i(`${e}[]`,t)).join("&")).concat(""==n.search?i("order",n.order):i("q",n.search)).concat(i("page",n.page)).join("&"),s=`https://m.animeflv.net/browse?${l}`;fetch(s).then(e=>e.text()).then(e=>{try{let r=document.createElement("html");r.innerHTML=e,Array.from(r.querySelectorAll("img")).forEach(e=>{e.setAttribute("data-img-src",e.getAttribute("src")),e.removeAttribute("src"),e.removeAttribute("srcset")});let i=r.querySelector("ul.ListAnimes, ul.List-Animes");if(i){let n=Array.from(i.children).map(e=>({identifier:e.querySelector("a").getAttribute("href").split("/").pop(),title:e.querySelector(".Title").textContent,poster:`https://animeflv.net/${e.querySelector("img").getAttribute("data-img-src").replace("https://animeflv.net/","")}`,type:e.querySelector(".Type").textContent}));t(n)}t([])}catch(l){t([])}}).catch(()=>t([]))})}static identifier(e,t=null){return new Promise(r=>{t?fetch(`https://m.animeflv.net/ver/${encodeURIComponent(e)}-${encodeURIComponent(t)}`).then(e=>e.text()).then(e=>{try{let t=document.createElement("div");t.innerHTML=e,Array.from(t.querySelectorAll("img")).forEach(e=>{e.setAttribute("data-img-src",e.getAttribute("src")),e.removeAttribute("src"),e.removeAttribute("srcset")}),Array.from(t.querySelectorAll("script")).forEach(e=>{if(e.innerHTML.includes("var anime_id =")){let t=Function([e.innerHTML.slice(0,e.innerHTML.indexOf("$")),"return videos",].join(";"));r(t())}e.innerHTML=""}),r(null)}catch(i){r(null)}}).then(()=>r(null)):fetch(`https://m.animeflv.net/anime/${encodeURIComponent(e)}`).then(e=>e.text()).then(t=>{try{let i=document.createElement("div");i.innerHTML=t,Array.from(i.querySelectorAll("img")).forEach(e=>{e.setAttribute("data-img-src",e.getAttribute("src")),e.removeAttribute("src"),e.removeAttribute("srcset")});let[n,l]=Array.from(i.querySelector("figure.Image").children).map((e,t)=>0==t?`https://m.animeflv.net${e.getAttribute("data-img-src")}`:e.innerText),[s,a,c]=Array.from(i.querySelector("article.Anime header").children).map((e,t)=>{let r=e.innerText;return t>0?r.slice(r.indexOf(":")+1,1/0).trim():r});r({identifier:e,poster:n,type:l,title:s,status:a,overview:c,genres:[...i.querySelectorAll("article.Anime footer a"),].map(e=>e.innerText),nextEpisode:i.querySelector("p.NxtPsd")?.textContent.split(":").at(-1).trim()??null,episodes:i.querySelectorAll("div.List-Episodes li.Episode").length,related:Array.from(i.querySelectorAll("div.Carousel div.item.Anime")).map(e=>{let[t,r]=Array.from(e.querySelector("figure.Image").children).map((e,t)=>0==t?`https://m.animeflv.net${e.getAttribute("src")}`:e.innerText);return{identifier:e.querySelector("a").href.split("/").pop(),title:e.querySelector("h2.Title").textContent,poster:t,type:r}})})}catch(o){r(null)}}).then(()=>r(null))})}static home(){return new Promise(e=>{fetch("https://m.animeflv.net/").then(e=>e.text()).then(t=>{try{let r=document.createElement("div");r.innerHTML=t,Array.from(r.querySelectorAll("img")).forEach(e=>{e.setAttribute("data-img-src",e.getAttribute("src")),e.removeAttribute("src"),e.removeAttribute("srcset")});let i=Array.from(r.querySelectorAll("ul.List-Episodes li.Episode:has(a)")).map(e=>{let t=e.querySelector("img").getAttribute("data-img-src");return{id:parseInt(t.split("/").pop()),identifier:e.querySelector("a").href.split("/").pop(),title:e.querySelector(".Title").textContent,episode:e.querySelector("p span").innerText,poster:`https://animeflv.net${t}`}}),n=Array.from(r.querySelectorAll("ul.List-Animes li.Anime:has(a)")).map(e=>{let t=e.querySelector("img").getAttribute("data-img-src");return{id:parseInt(t.split("/").pop()),identifier:e.querySelector("a").href.split("/").pop(),title:e.querySelector(".Title").textContent,type:e.querySelector(".Type").textContent,poster:`https://animeflv.net${t}`}});e({episodes:i,animes:n})}catch(l){e({animes:[],episodes:[]})}}).catch(()=>e({animes:[],episodes:[]}))})}};