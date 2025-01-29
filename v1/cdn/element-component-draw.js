function elementComponentDraw(a){let e={values:{canvas:{array:[],focus:null},painting:!1,paintingReady:!0,rect:null},elements:{canvas:document.createElement("canvas")},functions:{declareVar:(a,e={})=>a?.(e)??""}},t=createNodeElement(e.functions.declareVar(a=>`
  <div class="div_j46nnVSnu8tuV8" style="background:${a.background}"><div class="div_ak1IaKv"><div id="canvasBox" class="div_HPp5z9l" style="cursor: crosshair;"><canvas id="img-canvas" style="object-fit:contain"></canvas><canvas id="canvas"></canvas></div></div><div id="container-controls" class="div_Aqa0wxW"><div id="container-controls-bar" class="div_rmjk5xfg86dvogr3jvwy"><div class="div_ykgovoznvjn8f9uocd2q div_en26u61vg0k3ebqqc9f1"><label class="label_tYO6nSf label_rd4e5h0gakv26fgdsngm"><input id="color" type="color" value="${a.inputValue}"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-svg-name="fi fi-rr-fill"><path d="m22.327 18.422c.728 1.034 1.673 2.229 1.673 3.078a2.5 2.5 0 0 1 -5 0c0-.775.961-2.008 1.692-3.069a1 1 0 0 1 1.635-.009zm-.877-4.558-8.672 8.672a5.006 5.006 0 0 1 -7.071 0l-4.242-4.243a5 5 0 0 1 0-7.071l5.709-5.71-2.856-2.89a1 1 0 0 1 1.422-1.406l2.848 2.884 1.548-1.55-.843-.843a1 1 0 0 1 1.414-1.414l13 13a1 1 0 1 1 -1.414 1.414zm-1.414-1.414-8.486-8.486-1.557 1.558 4.718 4.778a1 1 0 1 1 -1.422 1.4l-4.709-4.765-5.7 5.7a3 3 0 0 0 0 4.243l4.242 4.243a3.005 3.005 0 0 0 4.243 0z"></path></svg></label><select id="range" class="select_Z1abqn2">${a.selectInnerHtml}</select><button id="button-toggle-bar" class="label_tYO6nSf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-down"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"></path></svg></button></div><div class="div_ykgovoznvjn8f9uocd2q"><div class="div_KNf6yZy" style="pointer-events:initial;"><button id="undoButton" class="label_tYO6nSf" style="display:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-undo"><path d="M23,24a1,1,0,0,1-1-1,6.006,6.006,0,0,0-6-6H10.17v1.586A2,2,0,0,1,6.756,20L.877,14.121a3,3,0,0,1,0-4.242L6.756,4A2,2,0,0,1,10.17,5.414V7H15a9.01,9.01,0,0,1,9,9v7A1,1,0,0,1,23,24ZM8.17,5.414,2.291,11.293a1,1,0,0,0,0,1.414L8.17,18.586V16a1,1,0,0,1,1-1H16a7.984,7.984,0,0,1,6,2.714V16a7.008,7.008,0,0,0-7-7H9.17a1,1,0,0,1-1-1Z"></path></svg></button><button id="nextButton" class="label_tYO6nSf" style="display:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-redo"><path d="M0,23V16A9.01,9.01,0,0,1,9,7h4.83V5.414A2,2,0,0,1,17.244,4l5.88,5.879a3,3,0,0,1,0,4.242L17.244,20a2,2,0,0,1-3.414-1.414V17H8a6.006,6.006,0,0,0-6,6,1,1,0,0,1-2,0ZM15.83,8a1,1,0,0,1-1,1H9a7.008,7.008,0,0,0-7,7v1.714A7.984,7.984,0,0,1,8,15h6.83a1,1,0,0,1,1,1v2.586l5.879-5.879a1,1,0,0,0,0-1.414L15.83,5.414Z"></path></svg></button><select id="select-number" class="select_02coxcfxh1g7zj4uma0"><option>0/0</option></select><hr class="hr_ZMZWNsx"><button id="button-capas" class="label_tYO6nSf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-layers"><path d="M22.485,10.975,12,17.267,1.515,10.975A1,1,0,1,0,.486,12.69l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"></path><path d="M22.485,15.543,12,21.834,1.515,15.543A1,1,0,1,0,.486,17.258l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"></path><path d="M12,14.773a2.976,2.976,0,0,1-1.531-.425L.485,8.357a1,1,0,0,1,0-1.714L10.469.652a2.973,2.973,0,0,1,3.062,0l9.984,5.991a1,1,0,0,1,0,1.714l-9.984,5.991A2.976,2.976,0,0,1,12,14.773ZM2.944,7.5,11.5,12.633a.974.974,0,0,0,1,0L21.056,7.5,12.5,2.367a.974.974,0,0,0-1,0h0Z"></path></svg></button></div></div></div></div><div id="div-window-capas" class="div_iu0mg3dwkwmbyoj7291" popover=""><div class="div_U6lIo74rWt4J6POwaZVg" style="pointer-events: none;"><div class="div_8oil7437wu5pwrsop25" style="pointer-events: initial;"><div class="div_glbsedpokowmimbmbd6j"><button data-hide-window=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-left"><path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path></svg></button><h3>Capas</h3><div id="div-button-capas" style="margin-left:auto; display:flex; gap:10px; display:none"><button id="button-download" class="label_tYO6nSf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-download"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"></path><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"></path></svg></button><button id="clearButton" class="label_tYO6nSf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-trash"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"></path><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"></path><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg></button></div></div><div id="div-list-capas" class="div_cou1gd2qeaa0xl1s90"></div></div></div></div></div>
`,{background:a?.style?.background,inputValue:a?.style?.color??"#ffffff",selectInnerHtml:Array(500).fill(null).map((a,e)=>`
        <option value="${e+1}" ${2==e?"selected":""}>
          ${e+1} px
        </option>
      `).join("")})),n=createObjectElement(t.querySelectorAll("[id]"),"id",!0),$=n.canvas.getContext("2d");e.functions.replaceTextObject=(a,e)=>(Object.entries(e).forEach(e=>{a=a.replace(...e)}),a),e.functions.copyCanvas=a=>{let e=document.createElement("canvas");e.width=a.width,e.height=a.height;let t=e.getContext("2d");return t.drawImage(a,0,0),e},e.functions.rewriteCanvas=(a,e,t=[])=>(a.width=e.width,a.height=e.height,t.forEach(e=>{if(e){let t=a.getContext("2d");t.drawImage(e,0,0)}}),a),e.functions.resizeCanvas=()=>{document.body.contains(t)&&(e.values.rect=n.canvas.getBoundingClientRect(),n.canvas.width=n.canvasBox.clientWidth,n.canvas.height=n.canvasBox.clientHeight)},e.functions.startPosition=a=>{n["container-controls"].style.display="none",e.values.painting=!0,e.functions.draw(a),a.type.startsWith("touch")&&a.preventDefault()},e.functions.endPosition=s=>{if(e.values.painting){n["container-controls"].style.display="";let i=e.functions.copyCanvas(n.canvas),_=e.values.canvas.array.findIndex(a=>a==e.values.canvas.focus);e.values.canvas.array=e.values.canvas.array.slice(0,_+1),e.values.canvas.array.push(i),e.values.canvas.focus=i,e.functions.rewriteCanvas(n["img-canvas"],n.canvas,e.values.canvas.array),$.clearRect(0,0,n.canvas.width,n.canvas.height),n.undoButton.style.display="",n.nextButton.style.display="none",n["select-number"].innerHTML=e.values.canvas.array.map((a,e,t)=>{let n=0==e?`<option value="-">0/${t.length}</option>`:"";return`
      ${n}
      <option value="${e}">${e+1}/${t.length}</option>
    `}).join(""),n["select-number"].selectedIndex=e.values.canvas.array.length,a?.events?.drawn&&t.dispatchEvent(new CustomEvent("_drawn",{detail:{canvas:()=>n["img-canvas"]}})),e.values.painting=!1,$.beginPath(),s.type.startsWith("touch")&&s.preventDefault()}},e.functions.draw=s=>{if(!e.values.painting)return;$.strokeStyle=n.color.value,$.lineWidth=n.range.value,$.lineCap="round",$.lineJoin="round";let i,_;if(s.type.startsWith("touch")){let l=s.touches[0]||s.changedTouches[0],o=e.values.rect;i=l.clientX-n.canvas.offsetLeft-o.left,_=l.clientY-n.canvas.offsetTop-o.top,s.preventDefault()}else i=s.offsetX,_=s.offsetY;$.lineTo(i,_),$.stroke(),$.beginPath(),$.moveTo(i,_),a?.events?.drawing&&e.values.paintingReady&&t.dispatchEvent(new CustomEvent("_drawing",{detail:{canvas:()=>(e.functions.rewriteCanvas(e.elements.canvas,n.canvas,[n["img-canvas"],n.canvas]),e.elements.canvas)}}))},e.functions.undoLastPath=()=>{let s=e.values.canvas.array.findIndex(a=>a==e.values.canvas.focus);n.nextButton.style.display="",-1!=s&&(0==s&&(n.undoButton.style.display="none"),e.values.canvas.focus=e.values.canvas.array[s-1],$.clearRect(0,0,n.canvas.width,n.canvas.height),e.functions.rewriteCanvas(n["img-canvas"],n.canvas,e.values.canvas.array.slice(0,s)),n["select-number"].selectedIndex=s,a?.events?.change&&t.dispatchEvent(new CustomEvent("_change",{detail:{canvas:()=>n["img-canvas"]}})))},e.functions.undoNextPath=()=>{let $=e.values.canvas.array.findIndex(a=>a==e.values.canvas.focus);n.undoButton.style.display="",$+2>=e.values.canvas.array.length&&(n.nextButton.style.display="none"),e.values.canvas.focus=e.values.canvas.array[Math.min($+1,e.values.canvas.array.length-1)],e.functions.rewriteCanvas(n["img-canvas"],n.canvas,e.values.canvas.array.slice(0,$+2)),n["select-number"].selectedIndex=Math.min(e.values.canvas.array.length,$+2),a?.events?.change&&t.dispatchEvent(new CustomEvent("_change",{detail:{canvas:()=>n["img-canvas"]}}))},e.functions.clearCanvas=()=>{confirm("\xbfBorrar todo?")&&($.clearRect(0,0,n.canvas.width,n.canvas.height),e.values.canvas.array=[],paths=[],e.values.canvas.focus=null,n["select-number"].innerHTML="<option>0/0</option>",e.functions.rewriteCanvas(n["img-canvas"],n.canvas,[]),n["button-capas"].dispatchEvent(new CustomEvent("click")),a?.events?.change&&t.dispatchEvent(new CustomEvent("_change",{detail:{canvas:()=>n["img-canvas"]}})))},n.canvas.addEventListener("mousedown",e.functions.startPosition),n.canvas.addEventListener("mouseup",e.functions.endPosition),n.canvas.addEventListener("mouseleave",e.functions.endPosition),n.canvas.addEventListener("mousemove",e.functions.draw),n.canvas.addEventListener("touchstart",e.functions.startPosition,{passive:!1}),n.canvas.addEventListener("touchend",e.functions.endPosition,{passive:!1}),n.canvas.addEventListener("touchcancel",e.functions.endPosition,{passive:!1}),n.canvas.addEventListener("touchmove",e.functions.draw,{passive:!1}),n.undoButton.addEventListener("click",e.functions.undoLastPath),n.nextButton.addEventListener("click",e.functions.undoNextPath),n.clearButton.addEventListener("click",e.functions.clearCanvas),n["select-number"].addEventListener("change",()=>{e.values.canvas.focus=e.values.canvas.array[parseInt(n["select-number"].value)],e.functions.rewriteCanvas(n["img-canvas"],n.canvas,e.values.canvas.array.slice(0,parseInt(n["select-number"].value)+1));let $=n["select-number"].selectedIndex;n.undoButton.style.display=0==$?"none":"",n.nextButton.style.display=$==e.values.canvas.array.length?"none":"",a?.events?.change&&t.dispatchEvent(new CustomEvent("_change",{detail:{canvas:()=>n["img-canvas"]}}))}),n["div-window-capas"]?.addEventListener("click",a=>{(a.target===a.currentTarget||a.target.closest("[data-hide-window]"))&&a.currentTarget.hidePopover()}),n["button-capas"].addEventListener("click",()=>{let a=e.values.canvas.array;n["div-window-capas"].showPopover(),n["div-list-capas"].innerHTML="",n["div-button-capas"].style.display=a.length?"flex":"none",n["div-list-capas"].append(...a.map((a,e)=>{let t=createNodeElement(`
    <div class="div_416usus802fqarxzzxp2" data-capa-index="${e}"><div class="img_p8g7bed9c3iqtbqsd4ig"><canvas></canvas></div><div class="div_uk3zuf6p0b3w7d34rprc"><button data-action="up"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-up"><path d="M18,15.5a1,1,0,0,1-.71-.29l-4.58-4.59a1,1,0,0,0-1.42,0L6.71,15.21a1,1,0,0,1-1.42-1.42L9.88,9.21a3.06,3.06,0,0,1,4.24,0l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,18,15.5Z"></path></svg></button><button data-action="down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-down"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"></path></svg></button><button data-action="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-trash"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"></path><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"></path><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg></button></div></div>
  `);return t.querySelector("canvas").replaceWith(a),t}))}),n.color.addEventListener("change",a=>{a.target.closest("label").style.background=a.target.value}),n["button-toggle-bar"].addEventListener("click",()=>{n["container-controls-bar"].classList.toggle("toggle")}),n["div-list-capas"].addEventListener("click",$=>{let s=$.target.closest("button");if(s){let i=$.target.closest("[data-capa-index]"),_=s.getAttribute("data-action");if("delete"==_&&confirm("\xbfEliminar esta capa?")&&(i.remove(),e.values.canvas.array=e.values.canvas.array.filter((a,e)=>e!=parseInt(i.getAttribute("data-capa-index"))),e.functions.rewriteCanvas(n["img-canvas"],n.canvas,e.values.canvas.array)),"up"==_){let l=parseInt(i.getAttribute("data-capa-index")),o=l-1,c=e.values.canvas.array;if(0==l)c.push(c.shift());else{let d=c[l],v=c[o];c[l]=v,c[o]=d}e.functions.rewriteCanvas(n["img-canvas"],n.canvas,e.values.canvas.array),n["button-capas"].dispatchEvent(new CustomEvent("click"))}if("down"==_){let r=parseInt(i.getAttribute("data-capa-index")),u=r+1,p=e.values.canvas.array;if(r==p.length-1)p.unshift(p.pop());else{let g=p[r],h=p[u];p[r]=h,p[u]=g}e.functions.rewriteCanvas(n["img-canvas"],n.canvas,e.values.canvas.array),n["button-capas"].dispatchEvent(new CustomEvent("click"))}n["select-number"].innerHTML=e.values.canvas.array.map((a,e,t)=>{let n=0==e?`<option value="-">0/${t.length}</option>`:"";return`
      ${n} 
      <option value="${e}">${e+1}/${t.length}</option>
    `}).join(""),n["select-number"].selectedIndex=e.values.canvas.array.length,[e.values.canvas.focus]=e.values.canvas.array.slice(-1),a?.events?.change&&t.dispatchEvent(new CustomEvent("_change",{detail:{canvas:()=>n["img-canvas"]}}))}}),n["button-download"].addEventListener("click",()=>{let a=n["img-canvas"].toDataURL("image/png"),e=document.createElement("a");e.href=a,e.download=`canvas-${Date.now()}.png`,e.click()});let s=document.createElement("style");return s.innerHTML=".div_j46nnVSnu8tuV8 { user-select: none; font-family: sans-serif; position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: #000; margin: 0; padding: 0; box-sizing: border-box; * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; } svg { width: 15px; height: 15px; } .div_Aqa0wxW { position: absolute; width: 100%; height: 100%; gap: 30px; display: flex; align-items: center; justify-content: center; pointer-events: none; } .label_tYO6nSf { width: 40px; height: 40px; position: relative; display: flex; justify-content: center; align-items: center; border: none; outline: none; background: none; & input { position: absolute; visibility: hidden;} & svg { width: 15px; height: 15px; fill: #fff; } } .div_ak1IaKv { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden; } .div_HPp5z9l { flex: 1; position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden; & canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } & img { width: 100%; height: 100%; } } .select_Z1abqn2 { all: unset; color: #fff; font-weight: bold; height: 40px; display: flex; justify-content: center; align-items: center; text-align: center; padding: 0 10px; & option { background: #000; } } .hr_ZMZWNsx { background: rgb(181 178 178 / 0.5); border: none; width: 1px; height: 50%; } .div_KNf6yZy { display: flex; justify-content: center; align-items: center; background: #313131; border-radius: 40px; } .select_02coxcfxh1g7zj4uma0 { all: unset; flex: 1; padding: 0 10px; text-align: left; color: #fff; & option { background: #000; } } .div_rmjk5xfg86dvogr3jvwy { position: absolute; left: 0; top: 0; width: 100%; height: 60px; padding: 10px; gap: 10px; display: flex; justify-content: space-between; overflow-y: hidden; overflow-x: auto; scrollbar-width: none; &.toggle { top: initial; bottom: 0; } } .div_ykgovoznvjn8f9uocd2q { display: flex; } .div_en26u61vg0k3ebqqc9f1 { position: relative; pointer-events: initial; backdrop-filter: blur(150px); border-radius: 40px; background: #313131; } .div_iu0mg3dwkwmbyoj7291 { width: 100%; height: 100%; border: none; background: none; } .div_U6lIo74rWt4J6POwaZVg { width: 100%; height: 100%; display: flex; padding: 20px; backdrop-filter: blur(7px); } .div_8oil7437wu5pwrsop25 { margin: auto; display: flex; flex-direction: column; width: min(100%, 450px); max-height: 100%; border-radius: 15px; overflow: hidden; background: #000; color: #fff; outline: 1px solid #fff; cursor: initial; } .div_cou1gd2qeaa0xl1s90 { overflow-y: auto; scrollbar-width: thin; scrollbar-color: #fff transparent; } .div_416usus802fqarxzzxp2 { display: flex; align-items: center; justify-content: space-between; padding: 10px; gap: 10px; } .img_p8g7bed9c3iqtbqsd4ig { height: 100px; aspect-ratio: 16/9;outline: 1px solid #fff; & img { width: 100%; height: 100%; object-fit: contain; } & canvas { width: 100%; height: 100%; object-fit: contain; } } .div_uk3zuf6p0b3w7d34rprc { display: flex; gap: 10px; & button { all: unset; background: #313131; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; box-sizing: border-box; border-radius: 15px; } & svg { fill: #fff; } } .div_glbsedpokowmimbmbd6j { height: 60px; width: 100%; padding: 10px; gap: 10px; display: flex; align-items: center; & button { all: unset; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; border-radius: 15px; background: #313131; } & svg { fill: #fff; } } .label_rd4e5h0gakv26fgdsngm { background: #fff; border-radius: 50%; & svg { mix-blend-mode: difference; } } }",setTimeout(e.functions.resizeCanvas),addEventListener("resize",e.functions.resizeCanvas),t.prepend(s),t}