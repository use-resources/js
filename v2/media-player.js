class MediaPlayer {
  static {
    const style = document.createElement("style");
    style.innerHTML = `#uuid-019548a2-e462-7276-8741-6e59a397cb7b { position: relative; background: #000000; width: 100%; height: 100%; color: #ffffff; user-select: none; * { margin: 0; padding: 0; font-family: sans-serif; box-sizing: border-box; -webkit-tap-highlight-color: transparent; } svg { width: 15px; height: 15px; fill: #ffffff; } .app-label-input-checkbox { --background-color: #b0bec5; margin: 0 2.5px; position: relative; background: var(--background-color); width: 40px; height: 20px; display: flex; align-items: center; padding: 0; border-radius: 40px; cursor: pointer; transition: none 0.3s ease; transition-property: left, background, outline; &:has(input:checked) { --background-color: #2196f3; } & input { display: none; &:checked + span { left: calc(100% - 20px); background: #ffffff; } } & span { left: 0; position: relative; width: 20px; height: 20px; border-radius: 50%; background: #ffffff; transition: inherit; outline: 2.5px var(--background-color) solid; } } .div_opnxihchj7bt1ph { position: relative; width: 100%; height: 100%; overflow: hidden; & canvas { position: absolute; width: 100%; height: 100%; object-fit: cover; filter: blur(150px); } & video { position: relative; width: 100%; height: 100%; object-fit: contain; } } .label_myh59oz6lsyldmc { position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 1fr 1fr; &:has(input:checked) + .div_9s7jtd1s87x198k { display: flex; } & input { display: none; pointer-events: none; } & div { display: flex; justify-content: center; align-items: center; } & span { font-weight: bold; font-size: 20px; animation: 1s keyframes-0Y7K28nawg1NzgP linear forwards; } } .div_S2OWmrFPAHLAweO { position: absolute; inset: 0; display: flex; justify-content: center; align-items: center; pointer-events: none; } .div_3cpfarn2f85vyoh { position: absolute; inset: 0; } .div_9s7jtd1s87x198k { width: 100%; height: 100%; display: none; flex-direction: column; justify-content: space-between; background: rgb(0 0 0 / 0.3); &:has(.checkbox-toggle-lock:checked) { & .checkbox-lock-hidden { visibility: hidden; } & .checkbox-lock-disable { pointer-events: none; } }} .div_30iEfg1Tp8Z9Sfe { width: 100%; height: 60px; display: flex; overflow: hidden; position: relative; } .div_fqntqCwolU7nS2I { flex: 1; display: flex; justify-content: space-evenly; align-items: center; overflow: hidden; gap: 15px; & button { width: 100px; height: 100px; display: flex; justify-content: center; align-items: center; border-radius: 0%; position: relative; } & svg { fill: #ffffff; width: 20px; height: 20px; } } .button_0Y7K28nawg1NzgP { all: unset; width: 100px; height: 100px; display: flex; justify-content: center; align-items: center; & svg { width: 50px; height: 50px; } } .div_KYTTm4XcCkVvAmy { display: flex; gap: 10px; flex: 1; overflow: hidden; } .div_swkEBnnVsXvSjjL { flex: 1; margin: auto; overflow: hidden; display: grid; color: #ffffff; & p { font-size: 15px; font-weight: bold; } & span { font-size: 13px; } } .div_quGYBx1MHxIWCd6 { position: relative; display: flex; font-size: 14px; font-weight: bold; } .button_dgli7ygzpy8r4o1 { all: unset; position: relative; display: flex; justify-content: center; align-items: center; width: 40px; height: 40px; } .div_iVl4urAy8xQ7zk6 { position: relative; background: rgb(255 255 255 / 0.3); display: flex; justify-content: center; align-items: center; flex: 1; height: 3px; border-radius: 3px; & input { position: relative; width: 100%; height: 20px; opacity: 0; } & span { position: absolute; left: 0; background: #ffffff; width: 0; height: 100%; border: none; border-radius: inherit; display: flex; align-items: center; &::after { content: ""; position: absolute; right: -5px; width: 10px; height: 10px; border-radius: 50%; background: #ffffff; } } } .div_tmIkQJSqwdupw { position: absolute; inset: 0; display: flex; } .div_0wgv7xmg98Vw2IY { margin: auto; position: relative; background: rgb(0 0 0 / 0.5); width: min(100%, 500px); max-height: 100%; overflow: hidden; display: flex; flex-direction: column; pointer-events: initial; border-radius: 15px; } .div_5lgw0Me5IocTECr { margin-bottom: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 125px), 1fr)); width: 100%; padding: 20px; gap: 20px; & button { all: unset; display: grid; justify-items: center; gap: 15px; cursor: pointer; text-align: center; &:hover { opacity: 0.7; } } & small { width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; background: rgb(255 255 255 / 0.3); border-radius: 50%; } & span { font-size: 13px; margin: auto; } } .div_pcg6NWag8XKbP8e { position: absolute; inset: 0; display: flex; } .div_q9MnoHmDRvz1I5g { position: relative; margin: auto; width: min(100%, 450px); background: rgb(0 0 0 / 0.3); padding: 20px; gap: 20px; display: grid; } .div_ccWrXBhzP0hqhl5 { display: flex; align-items: center; width: 100%; height: 40px; padding: 0 20px; gap: 20px; background: rgb(255 255 255 / 0.1); border-radius: 40px; } .div_KoXCFVHsmvOVAj1 { display: grid; grid-template-columns: 40px 1fr; align-items: center; padding-right: 10px; overflow: hidden; & button { width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; } & span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } } .label_Vgul2cCgNhl4gPP { display: flex; justify-content: center; align-items: center; width: 40px; height: 40px; } .div_tAIppFChF7u7CjX { display: grid; grid-template-columns: repeat(4, 1fr); & button { border-radius: 30px; padding: 10px 20px; color: #ffffff; &.focus { background: rgb(255 255 255 / 0.3); } } & label { background: none; font-size: 13px; padding: 10px 20px; text-align: center; border-radius: 30px; &:has(input:checked) { background: #ffffff; background: rgb(255 255 255 / 0.1); color: #ffffff; } } & input { display: none; } } .div_CQM4abRCwN455Mw { --pixel: 45px; --color: #000000; margin: auto; display: flex; justify-content: center; align-items: center; } .div_CQM4abRCwN455Mw::before { content: ""; width: var(--pixel); height: var(--pixel); border-radius: 50%; display: inline-block; border-top: 3px solid var(--color); border-right: 3px solid transparent; box-sizing: border-box; animation: keyframes-7rpbcfm44975x42 1s linear infinite; } .span_RPtji863vU2iJtm { background: rgb(0 0 0 / 0.5); display: flex; align-items: end; padding: 10px 20px; gap: 10px; font-weight: bold; border-radius: 30px; font-size: 20px; } .div_lh6NqXMBMnAkhJ { width: 100%; height: 100%; border: none; background: rgb(255 255 255 / 0.1); backdrop-filter: blur(15px); } .div_M8bQe0N9CPqqIy { width: 100%; height: 100%; display: flex; pointer-events: none; color: #ffffff; padding: 10px; } .span_XGbxfirIjc0LJXf { display: flex; justify-content: center; align-items: center; & svg { width: 40px; height: 40px; } } .div_n7o81w429b8kty7 { display: grid; width: 100%; } .div_4R38EJRezM03FeL { width: 100%; height: 40px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; } .div_s75qw16xjga5pz6 { width: 100%; height: 40px; padding: 0 20px; display: flex; justify-content: center; align-items: center; } .div_y5oh9e1polgfu2m { display: flex; align-items: center; } .label_n7n9k0firocrrig { &:has(input:checked) .checked-off { display: none; } &:has(input:checked) .checked-on { display: flex; } & .checked-off { display: flex; } & .checked-on { display: none; } & input { display: none; } } .div_pvsfzyejk5nfu4l { width: 100%; height: 60px; padding: 10px; gap: 10px; display: flex; align-items: center; } .div_9kll7qq6kw7jki8 { flex: 1; display: flex; overflow-x: hidden; overflow-y: auto; scrollbar-width: none; } .div_s8gvst6gk81pegl { width: 100%; display: grid; padding: 15px; gap: 15px; } .label_0n7nivcq4t84jv9 { display: flex; align-items: center; padding: 15px; border-bottom: 1px solid rgb(255 255 255 / 0.1); } .div_he2n78bbqmcle0e { flex: 1; font-size: 15px; & span { font-weight: bold; } } } @keyframes keyframes-7rpbcfm44975x42 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } @keyframes keyframes-0Y7K28nawg1NzgP { 0% { display: flex; } 99% { display: flex; } 100% { display: none; } }`;
    document.head.append(style);
  }

  constructor(render, storageName = "media-player-id-5l4yI5jyncpJXZfW") {
    const [$element, $elements] = this.__constructor(storageName);

    this._element = $element;
    this._elements = $elements;

    render.append($element);
  }

  __constructor(storageName) {
    if (!localStorage.getItem(storageName)) {
      localStorage.setItem(
        storageName,
        JSON.stringify({
          background: {
            value: 150,
            status: true,
          },
          hideControl: {
            value: 3,
            status: true,
          },
          speed: {
            value: 1,
          },
          jumpTime: {
            value: 10,
          },
          events: {
            dblclickLeft: true,
            dblclickCenter: true,
            dblclickRight: true,
            pinch: true,
            longpress: true,
          },
        })
      );
    }

    const useThis = {
      svgIcon: this.__svgIcon(),
      functions: {
        callbackTryCatch: (
          callbackTry = null,
          callbackCatch = null,
          ...parameters
        ) => {
          try {
            return callbackTry?.(...parameters) ?? callbackTry;
          } catch (error) {
            return callbackCatch?.(error) ?? callbackCatch;
          }
        },
        draw: ($video, $canvas, context) => {
          if (!$video.paused && !$video.ended) {
            context.drawImage($video, 0, 0, $canvas.width, $canvas.height);
            requestAnimationFrame(() => {
              useThis.functions.draw($video, $canvas, context);
            });
          }
        },
        fromSecondsToTime: (seconds) => {
          seconds = parseInt(seconds);

          return {
            hours: Math.floor(seconds / 3600),
            minutes: Math.floor((seconds % 3600) / 60),
            seconds: seconds % 60,
          };
        },
        getPercentage: (current, total) => {
          return (parseFloat(current) / parseFloat(total)) * 100;
        },
        event: (element, type, callback, options = {}) => {
          element.addEventListener(type, callback, options);
          return () => element.removeEventListener(type, callback, options);
        },
      },
      dblclickInfo: {
        now: 0,
        time: 0,
        allow: false,
        type: null,
      },
      setTimeoutHideControls: null,
      values: {
        _touchmove: false,
        _touchend: false,
        _pinch: false,
        pinchZoom: false,
        initialDistance: 0,
        objectFit: null,
      },
      storage: JSON.parse(localStorage.getItem(storageName)),
    };

    const $element = ((html = "") => {
      const $element = document.createElement("div");
      $element.innerHTML = html;
      return $element.firstElementChild;
    })(`<div id="uuid-019548a2-e462-7276-8741-6e59a397cb7b" class="div_vze7xVdMQzHAUh"><div class="div_opnxihchj7bt1ph"><canvas id="canvas"></canvas><video id="video" src="" style="object-fit: contain;"></video></div><div id="control" class="div_3cpfarn2f85vyoh"><div class="div_S2OWmrFPAHLAweO"><span id="spanLoad" style="width: 100px; height: 100px; position: absolute;"><div class="div_CQM4abRCwN455Mw" style="--color:#ffffff; --pixel:100px"></div></span><span id="spanError" class="span_XGbxfirIjc0LJXf" style="position: absolute; display: none;">${useThis.svgIcon("fi fi-rr-exclamation")}</span></div><div id="controlNotification" class="div_S2OWmrFPAHLAweO"><span id="controlNotificationTouch" class="span_RPtji863vU2iJtm" style="display: none;">2x<small>${useThis.svgIcon("fi fi-sr-forward-fast")}</small></span></div><label id="divTap" class="label_myh59oz6lsyldmc" data-status="true"><input id="inputToggleControl" type="checkbox" checked=""><div data-action="event-left"></div><div data-action="event-center"></div><div data-action="event-right"></div></label><div id="controlView" class="div_9s7jtd1s87x198k"><div class="div_30iEfg1Tp8Z9Sfe" data-control="" style="padding: 10px; gap: 10px; margin-bottom: 20px;"><label class="button_dgli7ygzpy8r4o1 label_n7n9k0firocrrig"><input id="inputCheckboxLock" type="checkbox" class="checkbox-toggle-lock" style="display:none"><small class="checked-off">${useThis.svgIcon("fi fi-rr-lock")}</small><small class="checked-on">${useThis.svgIcon("fi fi-rr-unlock")}</small></label><div class="div_KYTTm4XcCkVvAmy" style="text-align: center;"><div class="div_swkEBnnVsXvSjjL"><p id="videoTitle" class="text-ellipsis">Title</p><span id="videoDescription" class="text-ellipsis">Description</span></div></div><button id="openOptions" class="button_dgli7ygzpy8r4o1 checkbox-lock-hidden">${useThis.svgIcon("fi fi-rr-menu-dots-vertical")}</button></div><div class="div_fqntqCwolU7nS2I checkbox-lock-hidden" data-control=""><button style="display:none"></button><button id="seekLeft" style="display:none">${useThis.svgIcon("fi fi-rr-rotate-left")}</button><button id="buttonPlay" class="button_0Y7K28nawg1NzgP">${useThis.svgIcon("fi fi-sr-play")}</button><button id="seekRight" style="display:none">${useThis.svgIcon("fi fi-rr-rotate-right")}</button><button style="display:none"></button></div><div class="div_n7o81w429b8kty7" data-control=""><div class="div_4R38EJRezM03FeL"><div class="div_y5oh9e1polgfu2m"><div id="duration" class="div_quGYBx1MHxIWCd6"><span id="durationText">99:99</span></div><label class="button_dgli7ygzpy8r4o1 label_n7n9k0firocrrig checkbox-lock-hidden"><input type="checkbox" id="inputVolumen"><small class="checked-off">${useThis.svgIcon("fi fi-rr-volume")}</small><small class="checked-on">${useThis.svgIcon("fi fi-rr-volume-mute")}</small></label></div><div class="div_y5oh9e1polgfu2m checkbox-lock-hidden" style="gap:10px"><label id="buttonRotate" class="button_dgli7ygzpy8r4o1 label_n7n9k0firocrrig" style="display:none"><input type="checkbox" id="inputRotate"><small class="checked-off">${useThis.svgIcon("fi fi-rr-refresh")}</small><small class="checked-on">${useThis.svgIcon("fi fi-rr-refresh")}</small></label><button id="buttonPIP" class="button_dgli7ygzpy8r4o1 button_ArxpE8UbBze4uwS" data-object-fit="contain">${useThis.svgIcon("fi fi-rr-resize")}</button><button id="buttonResize" class="button_dgli7ygzpy8r4o1 button_ArxpE8UbBze4uwS" data-object-fit="contain">${useThis.svgIcon("fi fi-rr-tool-crop")}</button><button id="buttonFullscreen" class="button_dgli7ygzpy8r4o1 button_ArxpE8UbBze4uwS">${useThis.svgIcon("fi fi-rr-expand")}</button></div></div><div class="div_s75qw16xjga5pz6"><div class="div_iVl4urAy8xQ7zk6"><span id="durationBar"></span><input id="durationInput" type="range" class="checkbox-lock-disable" data-status="false" min="0" value="0" max="0" style="height: 40px;"></div></div></div></div></div><div id="div-popover" class="div_lh6NqXMBMnAkhJ" popover=""><div class="div_M8bQe0N9CPqqIy"><div class="div_0wgv7xmg98Vw2IY"><div class="div_pvsfzyejk5nfu4l"><button class="button_dgli7ygzpy8r4o1" data-hide-popover="">${useThis.svgIcon("fi fi-rr-angle-left")}</button></div><div class="div_9kll7qq6kw7jki8"><div id="divOptionsButtons" class="div_5lgw0Me5IocTECr"><button data-option-action="background"><small>${useThis.svgIcon("fi fi-rr-background")}</small><span>Fondo</span></button><button data-option-action="speed"><small>${useThis.svgIcon("fi fi-rr-tachometer-fastest")}</small><span>Velocidad</span></button><button data-option-action="jumpTime"><small>${useThis.svgIcon("fi fi-rr-time-forward")}</small><span>Tiempo de salto</span></button><button data-option-action="hideControl"><small>${useThis.svgIcon("fi fi-rr-hourglass-end")}</small><span>Ocultar controles</span></button><button data-option-action="events"><small>${useThis.svgIcon("fi fi-rr-cursor-finger")}</small><span>Eventos</span></button></div></div></div></div></div><div id="div-popover-2" class="div_lh6NqXMBMnAkhJ" popover=""><div class="div_M8bQe0N9CPqqIy"><div id="option-from-background" class="div_0wgv7xmg98Vw2IY" style="display:none"><div class="div_pvsfzyejk5nfu4l" style="justify-content:space-between"><div class="div_pvsfzyejk5nfu4l" style="padding:0"><button class="button_dgli7ygzpy8r4o1" data-hide-popover="">${useThis.svgIcon("fi fi-rr-angle-left")}</button><h3>Fondo</h3></div><label class="app-label-input-checkbox"><input id="background-input-checkbox" type="checkbox"><span></span></label></div><div class="div_9kll7qq6kw7jki8"><div class="div_s8gvst6gk81pegl"><form id="background-form-input" class="div_tAIppFChF7u7CjX"><label><input type="radio" name="key" value="50"><span>50px</span></label><label><input type="radio" name="key" value="100" checked=""><span>100px</span></label><label><input type="radio" name="key" value="150"><span>150px</span></label><label><input type="radio" name="key" value="200"><span>200px</span></label></form><div class="div_ccWrXBhzP0hqhl5"><div class="div_iVl4urAy8xQ7zk6"><span id="background-span-range"></span><input id="background-input-range" type="range" min="0" value="150" max="500"></div><span id="background-span-text" style="width:60px; text-align:center">150px</span></div></div></div></div><div id="option-from-speed" class="div_0wgv7xmg98Vw2IY" style="display:none"><div class="div_pvsfzyejk5nfu4l"><button class="button_dgli7ygzpy8r4o1" data-hide-popover="">${useThis.svgIcon("fi fi-rr-angle-left")}</button><h3>Velocidad</h3></div><div class="div_9kll7qq6kw7jki8"><div class="div_s8gvst6gk81pegl"><form id="speed-form-input" class="div_tAIppFChF7u7CjX"><label><input type="radio" name="key" value="0.5"><span>0.5x</span></label><label><input type="radio" name="key" value="1" checked=""><span>1x</span></label><label><input type="radio" name="key" value="1.5"><span>1.5x</span></label><label><input type="radio" name="key" value="2"><span>2x</span></label></form><div class="div_ccWrXBhzP0hqhl5"><div class="div_iVl4urAy8xQ7zk6"><span id="speed-span-range"></span><input id="speed-input-range" type="range" step="0.1" min="0" value="1" max="15"></div><span id="speed-span-text" style="width:60px; text-align:center">1x</span></div></div></div></div><div id="option-from-jumpTime" class="div_0wgv7xmg98Vw2IY" style="display:none"><div class="div_pvsfzyejk5nfu4l"><button class="button_dgli7ygzpy8r4o1" data-hide-popover="">${useThis.svgIcon("fi fi-rr-angle-left")}</button><h3>Tiempo de salto</h3></div><div class="div_9kll7qq6kw7jki8"><div class="div_s8gvst6gk81pegl"><form id="jumpTime-form-input" class="div_tAIppFChF7u7CjX"><label><input type="radio" name="key" value="5"><span>5s</span></label><label><input type="radio" name="key" value="10" checked=""><span>10s</span></label><label><input type="radio" name="key" value="15"><span>15s</span></label><label><input type="radio" name="key" value="20"><span>20s</span></label></form><div class="div_ccWrXBhzP0hqhl5"><div class="div_iVl4urAy8xQ7zk6"><span id="jumpTime-span-range"></span><input id="jumpTime-input-range" type="range" min="0" value="10" max="300"></div><span id="jumpTime-span-text" style="width:60px; text-align:center">10s</span></div></div></div></div><div id="option-from-hideControl" class="div_0wgv7xmg98Vw2IY"><div class="div_pvsfzyejk5nfu4l" style="justify-content:space-between"><div class="div_pvsfzyejk5nfu4l" style="padding:0"><button class="button_dgli7ygzpy8r4o1" data-hide-popover="">${useThis.svgIcon("fi fi-rr-angle-left")}</button><h3>Ocultar Control</h3></div><label class="app-label-input-checkbox"><input id="hideControl-input-checkbox" type="checkbox" checked=""><span></span></label></div><div class="div_9kll7qq6kw7jki8"><div class="div_s8gvst6gk81pegl"><form id="hideControl-form-input" class="div_tAIppFChF7u7CjX"><label><input type="radio" name="key" value="2"><span>2s</span></label><label><input type="radio" name="key" value="3" checked=""><span>3s</span></label><label><input type="radio" name="key" value="4"><span>4s</span></label><label><input type="radio" name="key" value="5"><span>5s</span></label></form><div class="div_ccWrXBhzP0hqhl5"><div class="div_iVl4urAy8xQ7zk6"><span id="hideControl-span-range"></span><input id="hideControl-input-range" type="range" min="1" value="3" max="30"></div><span id="hideControl-span-text" style="width:60px; text-align:center">3s</span></div></div></div></div><div id="option-from-events" class="div_0wgv7xmg98Vw2IY"><div class="div_pvsfzyejk5nfu4l"><button class="button_dgli7ygzpy8r4o1" data-hide-popover="">${useThis.svgIcon("fi fi-rr-angle-left")}</button><h3>Eventos</h3></div><div class="div_9kll7qq6kw7jki8"><div class="div_s8gvst6gk81pegl" style="gap:0px"><label class="label_0n7nivcq4t84jv9"><div class="div_he2n78bbqmcle0e"><span>doble click izquierdo:</span><p>Retroceder el tiempo en (n segundos)</p></div><div class="app-label-input-checkbox"><input id="input-event-dblclickLeft" type="checkbox" checked=""><span></span></div></label><label class="label_0n7nivcq4t84jv9"><div class="div_he2n78bbqmcle0e"><span>doble click derecho:</span><p>Avanzar el tiempo en (n segundos)</p></div><div class="app-label-input-checkbox"><input id="input-event-dblclickRight" type="checkbox" checked=""><span></span></div></label><label class="label_0n7nivcq4t84jv9"><div class="div_he2n78bbqmcle0e"><span>doble click central:</span><p>Salir/Entrar en pantalla completa</p></div><div class="app-label-input-checkbox"><input id="input-event-dblclickCenter" type="checkbox" checked=""><span></span></div></label><label class="label_0n7nivcq4t84jv9"><div class="div_he2n78bbqmcle0e"><span>mantener presionado:</span><p>Aumentar velocidad en 2x</p></div><div class="app-label-input-checkbox"><input id="input-event-longpress" type="checkbox" checked=""><span></span></div></label><label class="label_0n7nivcq4t84jv9"><div class="div_he2n78bbqmcle0e"><span>pellizcar:</span><p>Ajustar pantalla</p></div><div class="app-label-input-checkbox"><input id="input-event-pinch" type="checkbox" checked=""><span></span></div></label></div></div></div></div></div></div>`);

    const $elements = Array.from($element.querySelectorAll("[id]")).reduce(
      (prev, curr) => {
        prev[curr.getAttribute("id")] = curr;
        curr.removeAttribute("id");
        return prev;
      },
      {}
    );

    useThis.functions.hideControls = (setTimeoutValue, status = true) => {
      if (setTimeoutValue) {
        clearTimeout(setTimeoutValue);
      }

      if (
        !$elements["hideControl-input-checkbox"].checked ||
        !$elements.inputToggleControl.checked ||
        $elements.video.paused ||
        !status
      ) {
        return null;
      }

      const setTimeoutTime =
        Number($elements["hideControl-input-range"].value) * 1000;

      return setTimeout(() => {
        if (!$elements.video.paused) {
          $elements.inputToggleControl.checked = false;
        }
      }, setTimeoutTime);
    };

    useThis.functions.getDistance = (touches) => {
      let dx = touches[0].clientX - touches[1].clientX;
      let dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    /* eventos de video */
    useThis.functions.callbackTryCatch(() => {
      const $video = $elements.video;
      const $canvas = $elements.canvas;
      const context = $canvas.getContext("2d");

      $video.addEventListener("loadedmetadata", () => {
        $elements.spanLoad.style.display = "none";
        $elements.spanError.style.display = "none";

        $canvas.width = $video.videoWidth;
        $canvas.height = $video.videoHeight;

        $video.play().catch(() => {});
      });
      $video.addEventListener("play", () => {
        $elements.buttonPlay.innerHTML = useThis.svgIcon("fi fi-sr-pause");
      });
      $video.addEventListener("pause", () => {
        $elements.buttonPlay.innerHTML = useThis.svgIcon("fi fi-sr-play");
      });
      $video.addEventListener("playing", () => {
        useThis.functions.draw($video, $canvas, context);
        $elements.spanLoad.style.display = "none";
        $elements.buttonPlay.style.visibility = "";
      });
      $video.addEventListener("durationchange", () => {
        const convert = useThis.functions.fromSecondsToTime($video.duration);
        $elements.durationText.textContent = [
          convert.hours || "-",
          convert.minutes,
          convert.seconds,
        ].join(":");
        $elements.durationInput.max = parseInt($video.duration);
      });
      $video.addEventListener("timeupdate", () => {
        if ($elements.durationInput.getAttribute("data-status") == "true")
          return;

        const convert = useThis.functions.fromSecondsToTime(
          $video.duration - $video.currentTime
        );
        $elements.durationText.textContent = [
          convert.hours || "-",
          `0${convert.minutes}`.slice(-2),
          `0${convert.seconds}`.slice(-2),
        ].join(":");

        $elements.durationBar.style.width = `${useThis.functions.getPercentage(
          $video.currentTime,
          $video.duration
        )}%`;

        $elements.durationInput.value = parseInt($video.currentTime);
      });
      $video.addEventListener("waiting", () => {
        $elements.spanLoad.style.display = "flex";
        $elements.buttonPlay.style.visibility = "hidden";
      });
      $video.addEventListener("seeking", () => {
        $elements.spanLoad.style.display = "flex";
        $elements.buttonPlay.style.visibility = "hidden";
      });
      $video.addEventListener("seeked", () => {
        // if ($video.paused) $elements.buttonPlay.innerHTML = icon["fi fi-rr-play"];
        // else $elements.buttonPlay.innerHTML = icon["fi fi-rr-pause"];

        $elements.buttonPlay.innerHTML = useThis.svgIcon(
          $video.paused ? "fi fi-sr-play" : "fi fi-sr-pause"
        );

        $elements.spanLoad.style.display = "none";
        $elements.buttonPlay.style.visibility = "";
      });

      $video.addEventListener("error", (e) => {
        if (e.target.error.code == 4) {
          $elements.spanLoad.style.display = "none";
          $elements.spanError.style.display = "";
          $elements.buttonPlay.style.visibility = "hidden";
        }
      });
    });

    /* eventos de control-video */
    useThis.functions.callbackTryCatch(() => {
      const $video = $elements.video;
      $elements.buttonPlay.addEventListener("click", () => {
        if ($video.readyState > 0) {
          if ($video.paused) $video.play();
          else $video.pause();
        }
      });

      $elements.seekLeft.addEventListener("click", () => {
        // const skiptime =
        //   useThis.storage.mediaPlayer.setting.preferences.skiptime;

        const skiptime = parseInt($elements["jumpTime-input-range"].value);

        $elements.video.currentTime =
          parseInt($elements.video.currentTime) - skiptime;
      });

      $elements.seekRight.addEventListener("click", () => {
        // const skiptime =
        //   useThis.storage.mediaPlayer.setting.preferences.skiptime;

        const skiptime = parseInt($elements["jumpTime-input-range"].value);

        $elements.video.currentTime =
          parseInt($elements.video.currentTime) + skiptime;
      });

      $elements.buttonPIP.addEventListener("click", () => {
        try {
          if (!document.pictureInPictureElement) {
            $elements.video.requestPictureInPicture();
          } else {
            document.exitPictureInPicture();
          }
        } catch (error) {}
      });

      $elements.durationInput.addEventListener("input", () => {
        $elements.durationInput.setAttribute("data-status", true);

        const convert = useThis.functions.fromSecondsToTime(
          $elements.video.duration - $elements.durationInput.value
        );
        $elements.durationText.textContent = [
          convert.hours || "-",
          `0${convert.minutes}`.slice(-2),
          `0${convert.seconds}`.slice(-2),
        ].join(":");

        $elements.durationBar.style.width = `${useThis.functions.getPercentage(
          $elements.durationInput.value,
          $elements.video.duration
        )}%`;

        useThis.setTimeoutHideControls = useThis.functions.hideControls(
          useThis.setTimeoutHideControls,
          false
        );
      });

      $elements.durationInput.addEventListener("change", () => {
        $elements.durationInput.setAttribute("data-status", false);
        $elements.video.currentTime = parseInt($elements.durationInput.value);
        useThis.setTimeoutHideControls = useThis.functions.hideControls(
          useThis.setTimeoutHideControls,
          true
        );
      });

      $elements.buttonFullscreen.addEventListener("click", () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else $element.requestFullscreen();
      });

      $elements.divTap.addEventListener("click", (e) => {
        e.preventDefault();

        $elements.inputToggleControl.checked =
          !$elements.inputToggleControl.checked;

        useThis.dblclickInfo.type = e.pointerType;
        useThis.dblclickInfo.now = Date.now();
        useThis.dblclickInfo.allow =
          useThis.dblclickInfo.now - useThis.dblclickInfo.time;
        useThis.dblclickInfo.time = useThis.dblclickInfo.now;
      });

      $elements.divTap.addEventListener("dblclick", (e) => {
        if ($elements.inputCheckboxLock.checked) return;
        if (useThis.dblclickInfo.allow > 200) return;

        const etargetclosest = e.target.closest("[data-action]");

        if (etargetclosest) {
          const number =
            (Math.abs(etargetclosest.innerText) || 0) +
            parseInt($elements["jumpTime-input-range"].value);

          const action = etargetclosest.getAttribute("data-action");

          if (action == "event-left") {
            if ($elements["input-event-dblclickLeft"].checked) {
              $elements.seekLeft.dispatchEvent(new CustomEvent("click"));
              etargetclosest.innerHTML = `<span>-${number}</span>`;
            }
          } else if (action == "event-center") {
            if ($elements["input-event-dblclickCenter"].checked) {
              $elements.buttonFullscreen.dispatchEvent(
                new CustomEvent("click")
              );
            }
          } else if (action == "event-right") {
            if ($elements["input-event-dblclickRight"].checked) {
              $elements.seekRight.dispatchEvent(new CustomEvent("click"));
              etargetclosest.innerHTML = `<span>+${number}</span>`;
            }
          }
        }
      });

      $elements.divTap.addEventListener("pointerdown", (e) => {
        if ($elements.inputCheckboxLock.checked) return;

        if (
          e.pointerType === "mouse" &&
          $elements["input-event-longpress"].checked &&
          !$elements.video.paused
        ) {
          const timeout = setTimeout(() => {
            mousemove();

            $elements.controlNotificationTouch.style.display = "flex";
            $elements.video.playbackRate = 2;

            $elements.inputToggleControl.checked = false;
            $elements.controlView.style.display = "none";
          }, 350);

          const mousemove = useThis.functions.event(
            $elements.divTap,
            "mousemove",
            () => {
              clearTimeout(timeout);
              mouseup();

              $elements.controlNotificationTouch.style.display = "none";
              $elements.video.playbackRate = 1;

              $elements.controlView.style.display = "";
            },
            {
              once: true,
              passive: true,
            }
          );

          const mouseup = useThis.functions.event(
            $elements.divTap,
            "mouseup",
            () => {
              clearTimeout(timeout);
              mousemove();

              $elements.controlNotificationTouch.style.display = "none";
              $elements.video.playbackRate = 1;

              $elements.controlView.style.display = "";
            },
            {
              once: true,
              passive: true,
            }
          );
        }
      });

      $elements.divTap.addEventListener(
        "touchstart",
        (e) => {
          if ($elements.inputCheckboxLock.checked) return;

          if (e.touches.length === 2) {
            useThis.values.initialDistance = useThis.functions.getDistance(
              e.touches
            );
          }

          if (e.touches.length === 1) {
            if (
              $elements["input-event-longpress"].checked &&
              !$elements.video.paused
            ) {
              const timeout = setTimeout(() => {
                touchmove();

                $elements.controlNotificationTouch.style.display = "flex";
                $elements.video.playbackRate = 2;

                $elements.inputToggleControl.checked = false;
                $elements.controlView.style.display = "none";
              }, 350);

              const touchstart = useThis.functions.event(
                $elements.divTap,
                "touchstart",
                () => {
                  clearTimeout(timeout);
                  touchmove();
                  touchend();

                  $elements.controlNotificationTouch.style.display = "none";
                  $elements.video.playbackRate = 1;

                  $elements.controlView.style.display = "";
                },
                {
                  once: true,
                  passive: true,
                }
              );

              const touchmove = useThis.functions.event(
                $elements.divTap,
                "touchmove",
                () => {
                  clearTimeout(timeout);
                  touchstart();
                  touchend();

                  $elements.controlNotificationTouch.style.display = "none";
                  $elements.video.playbackRate = 1;

                  $elements.controlView.style.display = "";
                },
                {
                  once: true,
                  passive: true,
                }
              );

              const touchend = useThis.functions.event(
                $elements.divTap,
                "touchend",
                (e) => {
                  clearTimeout(timeout);
                  touchstart();
                  touchmove();

                  $elements.controlNotificationTouch.style.display = "none";
                  $elements.video.playbackRate = 1;

                  $elements.controlView.style.display = "";
                },
                {
                  once: true,
                  passive: true,
                }
              );
            }
          }
        },
        { passive: true }
      );

      $elements.divTap.addEventListener(
        "touchmove",
        (e) => {
          if ($elements.inputCheckboxLock.checked) return;

          if (e.touches.length === 2) {
            if ($elements["input-event-pinch"].checked) {
              const currentDistance = useThis.functions.getDistance(e.touches);

              if (currentDistance > useThis.values.initialDistance) {
                useThis.values.objectFit = "cover";
              } else if (currentDistance < useThis.values.initialDistance) {
                useThis.values.objectFit = "contain";
              }

              useThis.values.initialDistance = currentDistance;
            }
          }
        },
        { passive: true }
      );

      $elements.divTap.addEventListener("touchend", () => {
        if ($elements.inputCheckboxLock.checked) return;

        if (useThis.values.objectFit) {
          $elements.video.style.objectFit = useThis.values.objectFit;
          useThis.values.objectFit = null;
        }
      });

      $elements.buttonResize.addEventListener("click", () => {
        const fits = ["contain", "cover", "initial"];

        const index = fits.findIndex(
          (fit) => fit == $elements.video.style.objectFit
        );

        $elements.video.style.objectFit =
          fits[Math.max(0, index + 1)] || fits[0];
      });

      $elements.inputVolumen.addEventListener("change", () => {
        $elements.video.muted = $elements.inputVolumen.checked;
        $elements.inputVolumen.nextElementSibling.innerHTML =
          icon[
            $elements.inputVolumen.checked
              ? "fi fi-rr-volume-slash"
              : "fi fi-rr-volume"
          ];
      });

      $elements.inputRotate.addEventListener("change", () => {
        if ($elements.inputRotate.checked) {
          if (window.screen.orientation && window.screen.orientation.lock) {
            window.screen.orientation.lock("landscape");
          }
        } else {
          if (window.screen.orientation && window.screen.orientation.unlock) {
            window.screen.orientation.unlock();
          }
        }
      });

      $elements.openOptions.addEventListener("click", () => {
        useThis.setTimeoutHideControls = useThis.functions.hideControls(
          useThis.setTimeoutHideControls,
          false
        );

        $elements.inputToggleControl.checked = false;
        $elements["div-popover"].showPopover();
      });

      $elements["div-popover"].addEventListener("click", (e) => {
        if (
          e.target == e.currentTarget ||
          e.target.closest("[data-hide-popover]")
        ) {
          e.currentTarget.hidePopover();
        }
      });

      $elements["div-popover-2"].addEventListener("click", (e) => {
        if (
          e.target == e.currentTarget ||
          e.target.closest("[data-hide-popover]")
        ) {
          e.currentTarget.hidePopover();
        }
      });

      $elements.divOptionsButtons.addEventListener("click", (e) => {
        const button = e.target.closest("button");
        if (button) {
          const action = button.getAttribute("data-option-action");
          $elements["div-popover"].hidePopover();
          $elements["div-popover-2"].showPopover();

          Object.entries({
            background: $elements["option-from-background"],
            speed: $elements["option-from-speed"],
            jumpTime: $elements["option-from-jumpTime"],
            hideControl: $elements["option-from-hideControl"],
            events: $elements["option-from-events"],
          }).filter((entries) => {
            entries[1].style.display = entries[0] == action ? "" : "none";
            return entries[0] == action;
          });
        }
      });

      $elements.control.addEventListener("click", () => {
        useThis.setTimeoutHideControls = useThis.functions.hideControls(
          useThis.setTimeoutHideControls,
          true
        );
      });

      $elements.control.addEventListener("pointermove", (e) => {
        if (e.pointerType === "mouse") {
          if ($elements.durationInput.getAttribute("data-status") === "false") {
            $elements.inputToggleControl.checked = true;
            useThis.setTimeoutHideControls = useThis.functions.hideControls(
              useThis.setTimeoutHideControls,
              true
            );
          }
        }
      });

      $elements.control.addEventListener("mouseleave", () => {
        if (!$elements.video.paused) {
          $elements.inputToggleControl.checked = false;
          useThis.setTimeoutHideControls = useThis.functions.hideControls(
            useThis.setTimeoutHideControls,
            false
          );
        }
      });
    });

    /* eventos de background */
    useThis.functions.callbackTryCatch(() => {
      const formInput = $elements["background-form-input"];

      const inputRange = $elements["background-input-range"];
      const inputCheckbox = $elements["background-input-checkbox"];

      const spanText = $elements["background-span-text"];
      const spanRange = $elements["background-span-range"];

      const radioInput = Array.from(formInput.querySelectorAll("input")).reduce(
        (prev, curr) => {
          prev[curr.value] = curr;
          return prev;
        },
        {}
      );

      const customInput = new CustomEvent("input");

      formInput.addEventListener("change", () => {
        inputRange.value = formInput.key.value;
        inputRange.dispatchEvent(customInput);
      });

      inputRange.addEventListener("input", () => {
        spanText.textContent = `${inputRange.value}px`;
        spanRange.style.width = `${useThis.functions.getPercentage(
          inputRange.value,
          inputRange.max
        )}%`;

        $elements.canvas.style.filter = `blur(${spanText.textContent})`;

        formInput.key[0].checked = true;
        formInput.key[0].checked = false;

        if (radioInput[inputRange.value]) {
          radioInput[inputRange.value].checked = true;
        }

        useThis.storage.background.value = parseInt(inputRange.value);
        localStorage.setItem(storageName, JSON.stringify(useThis.storage));
      });

      inputCheckbox.addEventListener("change", () => {
        $elements.canvas.style.display = inputCheckbox.checked ? "" : "none";

        useThis.storage.background.status = inputCheckbox.checked;
        localStorage.setItem(storageName, JSON.stringify(useThis.storage));
      });

      inputCheckbox.checked = useThis.storage.background.status;
      inputRange.value = useThis.storage.background.value;
      inputRange.dispatchEvent(new CustomEvent("input"));

      $elements.canvas.style.display = inputCheckbox.checked ? "" : "none";
    });

    /* eventos de speed */
    useThis.functions.callbackTryCatch(() => {
      const formInput = $elements["speed-form-input"];

      const inputRange = $elements["speed-input-range"];

      const spanText = $elements["speed-span-text"];
      const spanRange = $elements["speed-span-range"];

      const radioInput = Array.from(formInput.querySelectorAll("input")).reduce(
        (prev, curr) => {
          prev[curr.value] = curr;
          return prev;
        },
        {}
      );

      const customInput = new CustomEvent("input");

      formInput.addEventListener("change", () => {
        inputRange.value = Number(formInput.key.value);
        inputRange.dispatchEvent(customInput);
      });

      inputRange.addEventListener("input", () => {
        spanText.textContent = `${inputRange.value}x`;
        spanRange.style.width = `${useThis.functions.getPercentage(
          inputRange.value,
          inputRange.max
        )}%`;

        formInput.key[0].checked = true;
        formInput.key[0].checked = false;

        if (radioInput[inputRange.value]) {
          radioInput[inputRange.value].checked = true;
        }

        $elements.video.playbackRate = parseFloat(inputRange.value);

        useThis.storage.speed.value = parseFloat(inputRange.value);
        localStorage.setItem(storageName, JSON.stringify(useThis.storage));
      });

      inputRange.value = useThis.storage.speed.value;
      inputRange.dispatchEvent(new CustomEvent("input"));
    });

    /* eventos de jumpTime */
    useThis.functions.callbackTryCatch(() => {
      const formInput = $elements["jumpTime-form-input"];

      const inputRange = $elements["jumpTime-input-range"];

      const spanText = $elements["jumpTime-span-text"];
      const spanRange = $elements["jumpTime-span-range"];

      const radioInput = Array.from(formInput.querySelectorAll("input")).reduce(
        (prev, curr) => {
          prev[curr.value] = curr;
          return prev;
        },
        {}
      );

      const customInput = new CustomEvent("input");

      formInput.addEventListener("change", () => {
        inputRange.value = formInput.key.value;
        inputRange.dispatchEvent(customInput);
      });

      inputRange.addEventListener("input", () => {
        spanText.textContent = `${inputRange.value}s`;
        spanRange.style.width = `${useThis.functions.getPercentage(
          inputRange.value,
          inputRange.max
        )}%`;

        formInput.key[0].checked = true;
        formInput.key[0].checked = false;

        if (radioInput[inputRange.value]) {
          radioInput[inputRange.value].checked = true;
        }

        useThis.storage.jumpTime.value = parseInt(inputRange.value);
        localStorage.setItem(storageName, JSON.stringify(useThis.storage));
      });

      inputRange.value = useThis.storage.jumpTime.value;
      inputRange.dispatchEvent(new CustomEvent("input"));
    });

    /* eventos de hideControl */
    useThis.functions.callbackTryCatch(() => {
      const formInput = $elements["hideControl-form-input"];

      const inputRange = $elements["hideControl-input-range"];
      const inputCheckbox = $elements["hideControl-input-checkbox"];

      const spanText = $elements["hideControl-span-text"];
      const spanRange = $elements["hideControl-span-range"];

      const radioInput = Array.from(formInput.querySelectorAll("input")).reduce(
        (prev, curr) => {
          prev[curr.value] = curr;
          return prev;
        },
        {}
      );

      const customInput = new CustomEvent("input");

      formInput.addEventListener("change", () => {
        inputRange.value = formInput.key.value;
        inputRange.dispatchEvent(customInput);
      });

      inputRange.addEventListener("input", () => {
        spanText.textContent = `${inputRange.value}s`;
        spanRange.style.width = `${useThis.functions.getPercentage(
          inputRange.value,
          inputRange.max
        )}%`;

        formInput.key[0].checked = true;
        formInput.key[0].checked = false;

        if (radioInput[inputRange.value]) {
          radioInput[inputRange.value].checked = true;
        }

        useThis.storage.hideControl.value = parseInt(inputRange.value);
        localStorage.setItem(storageName, JSON.stringify(useThis.storage));
      });

      inputCheckbox.addEventListener("change", () => {
        useThis.storage.hideControl.status = inputCheckbox.checked;
        localStorage.setItem(storageName, JSON.stringify(useThis.storage));
      });

      inputCheckbox.checked = useThis.storage.hideControl.status;
      inputRange.value = useThis.storage.hideControl.value;
      inputRange.dispatchEvent(new CustomEvent("input"));
    });

    /* restore storage events values */
    useThis.functions.callbackTryCatch(() => {
      Object.entries({
        dblclickLeft: $elements["input-event-dblclickLeft"],
        dblclickCenter: $elements["input-event-dblclickCenter"],
        dblclickRight: $elements["input-event-dblclickRight"],
        pinch: $elements["input-event-pinch"],
        longpress: $elements["input-event-longpress"],
      }).forEach((entries) => {
        entries[1].addEventListener("change", () => {
          useThis.storage.events[entries[0]] = entries[1].checked;
          localStorage.setItem(storageName, JSON.stringify(useThis.storage));
        });

        entries[1].checked = useThis.storage.events[entries[0]];
      });
    });

    $element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    $element.addEventListener("fullscreenchange", () => {
      $elements.buttonFullscreen.innerHTML = useThis.svgIcon(
        document.fullscreenElement ? "fi fi-rr-compress" : "fi fi-rr-expand"
      );

      if (document.fullscreenElement) {
        $elements.buttonRotate.style.display = "";

        $elements.inputRotate.checked = true;
        if (window.screen.orientation && window.screen.orientation.lock) {
          window.screen.orientation.lock("landscape");
        }
      } else {
        $elements.buttonRotate.style.display = "none";
        $elements.inputRotate.checked = false;
        if (window.screen.orientation && window.screen.orientation.unlock) {
          window.screen.orientation.unlock();
        }
      }
    });

    return [$element, $elements];
  }

  __svgIcon() {
    const template = document.createElement("div");

    template.innerHTML = [
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-exclamation"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"></path><path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z"></path><rect x="11" y="17" width="2" height="2" rx="1"></rect></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-sr-forward-fast"><path d="m23,1c-.552,0-1,.447-1,1v6.591l-6.184-4.848c-1.157-.851-2.671-.974-3.95-.325-1.284.65-2.056,1.892-2.073,3.326l-3.771-3.001c-1.175-.863-2.651-.984-3.949-.325-1.298.658-2.073,1.92-2.073,3.375v10.421c0,1.455.775,2.717,2.073,3.375,1.278.649,2.79.525,3.98-.348l3.74-2.983c.016,1.437.788,2.68,2.072,3.331.529.269,1.121.411,1.712.411.806,0,1.58-.254,2.263-.755l6.16-4.838v6.593c0,.553.448,1,1,1s1-.447,1-1V2c0-.553-.448-1-1-1Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-forward-fast"><path d="m23,1c-.552,0-1,.447-1,1v6.591l-6.184-4.848c-1.157-.851-2.671-.974-3.95-.325-1.284.65-2.056,1.892-2.073,3.326l-3.771-3.001c-1.175-.863-2.651-.984-3.949-.325-1.298.658-2.073,1.92-2.073,3.375v10.421c0,1.455.775,2.717,2.073,3.375,1.278.649,2.79.525,3.98-.348l3.74-2.983c.016,1.437.788,2.68,2.072,3.331.529.269,1.121.411,1.712.411.806,0,1.58-.254,2.263-.755l6.16-4.838v6.593c0,.553.448,1,1,1s1-.447,1-1V2c0-.553-.448-1-1-1Zm-1.755,12.458l-6.613,5.194c-.542.397-1.264.456-1.861.153-.621-.315-.978-.896-.978-1.593l-.002-2.032c0-.384-.221-.733-.566-.9-.138-.066-.286-.099-.434-.099-.222,0-.443.074-.624.219l-5.33,4.252c-.546.402-1.257.46-1.86.153-.621-.315-.978-.896-.978-1.592V6.793c0-.696.356-1.276.979-1.592.619-.315,1.298-.259,1.829.13l5.362,4.27c.301.239.713.287,1.057.118.346-.166.566-.517.566-.9v-2.025c0-.696.356-1.276.978-1.592.603-.306,1.315-.247,1.835.135l6.664,5.225c.463.341.729.865.729,1.439s-.266,1.099-.755,1.458Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-cursor-finger"><path d="M17.98,9.376,12,8.18V3.107A3.081,3.081,0,0,0,9.5.041,3,3,0,0,0,6,3V9.661L3.211,13.3a5.021,5.021,0,0,0,.249,6.794l2.4,2.425A5.036,5.036,0,0,0,9.414,24H17a5.006,5.006,0,0,0,5-5V14.279A5.013,5.013,0,0,0,17.98,9.376ZM20,19a3,3,0,0,1-3,3H9.414a3.022,3.022,0,0,1-2.134-.891l-2.4-2.428a3.03,3.03,0,0,1-.116-4.123L6,12.945V17a1,1,0,0,0,2,0V3a1,1,0,0,1,1.176-.985A1.082,1.082,0,0,1,10,3.107V9a1,1,0,0,0,.8.98l6.784,1.357A3.01,3.01,0,0,1,20,14.279Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-hourglass-end"><path d="M17,24H7.005a4.014,4.014,0,0,1-3.044-1.4,3.94,3.94,0,0,1-.917-3.158A12.522,12.522,0,0,1,7.445,12a12.522,12.522,0,0,1-4.4-7.444A3.94,3.94,0,0,1,3.961,1.4,4.014,4.014,0,0,1,7.005,0H17a4.017,4.017,0,0,1,3.044,1.4,3.943,3.943,0,0,1,.918,3.155A12.556,12.556,0,0,1,16.551,12a12.557,12.557,0,0,1,4.406,7.448,3.944,3.944,0,0,1-.918,3.156A4.017,4.017,0,0,1,17,24ZM17,2H7.005a2.015,2.015,0,0,0-1.528.7,1.921,1.921,0,0,0-.456,1.556c.376,2.5,1.924,4.84,4.6,6.957a1,1,0,0,1,0,1.568C6.945,14.9,5.4,17.242,5.021,19.741A1.921,1.921,0,0,0,5.477,21.3a2.015,2.015,0,0,0,1.528.7H17a2.014,2.014,0,0,0,1.528-.7,1.917,1.917,0,0,0,.456-1.554c-.373-2.487-1.92-4.829-4.6-6.962a1,1,0,0,1,0-1.564c2.681-2.133,4.228-4.475,4.6-6.963A1.916,1.916,0,0,0,18.523,2.7,2.014,2.014,0,0,0,17,2ZM15.681,20H8.318a1,1,0,0,1-.927-1.374,11.185,11.185,0,0,1,3.471-4.272l.518-.412a1,1,0,0,1,1.245,0l.509.406a11.3,11.3,0,0,1,3.473,4.276A1,1,0,0,1,15.681,20Zm-5.647-2h3.928A11.57,11.57,0,0,0,12,16,11.3,11.3,0,0,0,10.034,18Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-time-forward"><path d="m23 11a1 1 0 0 0 -1 1 10.034 10.034 0 1 1 -2.9-7.021.862.862 0 0 1 -.1.021h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 0 0 -2 0v2.065a11.994 11.994 0 1 0 4 8.935 1 1 0 0 0 -1-1z"></path><path d="m12 6a1 1 0 0 0 -1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414l-2.707-2.707v-4.586a1 1 0 0 0 -1-1z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-tachometer-fastest"><path d="M24,13a11.914,11.914,0,0,1-3.508,8.47,3.037,3.037,0,0,1-4.12.174l-1.026-.887a1,1,0,0,1,1.308-1.514l1.027.888a1.014,1.014,0,0,0,1.395-.075,10.044,10.044,0,0,0-.414-14.513A9.91,9.91,0,0,0,10.84,3.065,9.992,9.992,0,0,0,4.963,20.094a1,1,0,0,0,1.356.038l1.027-.889a1,1,0,1,1,1.308,1.514l-1.026.888a3.014,3.014,0,0,1-4.073-.13A12,12,0,1,1,24,13Zm-5.949,3.748a1,1,0,1,0,.8-1.832L13.988,12.78a2,2,0,1,0-.8,1.832Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-background"><path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,14.59l-7.41,7.41h-4.17l11.59-11.59v4.17Zm-1.71-12.29L2.29,20.29c-.19-.39-.29-.83-.29-1.29v-2.59L16.41,2h2.59c.46,0,.9,.11,1.29,.29ZM2,9.41L9.41,2h4.17L2,13.59v-4.17ZM5,2h1.59L2,6.59v-1.59c0-1.65,1.35-3,3-3Zm-1.29,19.71L21.71,3.71c.19,.39,.29,.83,.29,1.29v2.59L7.59,22h-2.59c-.46,0-.9-.11-1.29-.29Zm15.29,.29h-1.59l4.59-4.59v1.59c0,1.65-1.35,3-3,3Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-left"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-sr-pause"><path d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0Z"></path><path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-sr-play"><path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-rotate-left"><path d="M12,0c-2.991,0-5.813,1.113-8,3.078V1c0-.553-.448-1-1-1s-1,.447-1,1V5c0,1.103,.897,2,2,2h4c.552,0,1-.447,1-1s-.448-1-1-1h-3.13c1.876-1.913,4.422-3,7.13-3,5.514,0,10,4.486,10,10s-4.486,10-10,10c-5.21,0-9.492-3.908-9.959-9.09-.049-.55-.526-.956-1.086-.906C.405,12.054,0,12.54,.049,13.09c.561,6.22,5.699,10.91,11.951,10.91,6.617,0,12-5.383,12-12S18.617,0,12,0Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-rotate-right"><path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-resize"><path d="m19 0h-8a5.006 5.006 0 0 0 -5 5v6h-1a5.006 5.006 0 0 0 -5 5v3a5.006 5.006 0 0 0 5 5h3a5.006 5.006 0 0 0 5-5v-1h6a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0 -5-5zm-8 16a3 3 0 0 1 -3-3 3 3 0 0 1 3 3zm0 3a3 3 0 0 1 -3 3h-3a3 3 0 0 1 -3-3v-3a3 3 0 0 1 3-3h1a5.006 5.006 0 0 0 5 5zm11-6a3 3 0 0 1 -3 3h-6a4.969 4.969 0 0 0 -.833-2.753l5.833-5.833v2.586a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3-3h-3a1 1 0 0 0 0 2h2.586l-5.833 5.833a4.969 4.969 0 0 0 -2.753-.833v-6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-tool-crop"><path d="M23,18H20V9a5.006,5.006,0,0,0-5-5H6V1A1,1,0,0,0,4,1V4H1A1,1,0,0,0,1,6H4v9a5.006,5.006,0,0,0,5,5h9v3a1,1,0,0,0,2,0V20h3a1,1,0,0,0,0-2ZM9,18a3,3,0,0,1-3-3V6h9a3,3,0,0,1,3,3v9Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-compress"><path d="M7,0A1,1,0,0,0,6,1V3A3,3,0,0,1,3,6H1A1,1,0,0,0,1,8H3A5.006,5.006,0,0,0,8,3V1A1,1,0,0,0,7,0Z"></path><path d="M23,16H21a5.006,5.006,0,0,0-5,5v2a1,1,0,0,0,2,0V21a3,3,0,0,1,3-3h2a1,1,0,0,0,0-2Z"></path><path d="M21,8h2a1,1,0,0,0,0-2H21a3,3,0,0,1-3-3V1a1,1,0,0,0-2,0V3A5.006,5.006,0,0,0,21,8Z"></path><path d="M3,16H1a1,1,0,0,0,0,2H3a3,3,0,0,1,3,3v2a1,1,0,0,0,2,0V21A5.006,5.006,0,0,0,3,16Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-expand"><path d="M19,24H17a1,1,0,0,1,0-2h2a3,3,0,0,0,3-3V17a1,1,0,0,1,2,0v2A5.006,5.006,0,0,1,19,24Z"></path><path d="M1,8A1,1,0,0,1,0,7V5A5.006,5.006,0,0,1,5,0H7A1,1,0,0,1,7,2H5A3,3,0,0,0,2,5V7A1,1,0,0,1,1,8Z"></path><path d="M7,24H5a5.006,5.006,0,0,1-5-5V17a1,1,0,0,1,2,0v2a3,3,0,0,0,3,3H7a1,1,0,0,1,0,2Z"></path><path d="M23,8a1,1,0,0,1-1-1V5a3,3,0,0,0-3-3H17a1,1,0,0,1,0-2h2a5.006,5.006,0,0,1,5,5V7A1,1,0,0,1,23,8Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-menu-dots-vertical"><circle cx="12" cy="2" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="22" r="2"></circle></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-refresh"><path d="M12,2a10.032,10.032,0,0,1,7.122,3H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.981,11.981,0,0,0,.05,10.9a1.007,1.007,0,0,0,1,1.1h0a.982.982,0,0,0,.989-.878A10.014,10.014,0,0,1,12,2Z"></path><path d="M22.951,12a.982.982,0,0,0-.989.878A9.986,9.986,0,0,1,4.878,19H8a1,1,0,0,0,1-1H9a1,1,0,0,0-1-1H3.857A1.856,1.856,0,0,0,2,18.857V23a1,1,0,0,0,1,1H3a1,1,0,0,0,1-1V20.922A11.981,11.981,0,0,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-volume-mute"><path d="m13.644.418c-.228-.19-.529-.268-.821-.215-3.001.555-5.754,2.302-7.554,4.794h-.271C2.241,4.998-.002,7.241-.002,9.998v4.005C-.002,16.76,2.241,19.003,4.998,19.003h.271c1.802,2.495,4.555,4.243,7.554,4.794.06.011.121.017.181.017.232,0,.459-.081.64-.231.228-.19.36-.472.36-.769V1.187c0-.297-.131-.579-.36-.769Zm-1.64,21.117c-2.03-.646-3.851-1.954-5.113-3.703l-.299-.415c-.188-.26-.489-.415-.811-.415h-.782c-1.654,0-3-1.346-3-3v-4.005c0-1.654,1.346-3,3-3h.782c.321,0,.623-.154.811-.415l.299-.415c1.261-1.747,3.083-3.054,5.114-3.702v19.068Zm11.729-7.242c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293,2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.293,2.293,2.293-2.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293,2.293,2.293Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-volume"><path d="M20.807,4.29a1,1,0,0,0-1.415,1.415,8.913,8.913,0,0,1,0,12.59,1,1,0,0,0,1.415,1.415A10.916,10.916,0,0,0,20.807,4.29Z"></path><path d="M18.1,7.291A1,1,0,0,0,16.68,8.706a4.662,4.662,0,0,1,0,6.588A1,1,0,0,0,18.1,16.709,6.666,6.666,0,0,0,18.1,7.291Z"></path><path d="M13.82.2A12.054,12.054,0,0,0,6.266,5H5a5.008,5.008,0,0,0-5,5v4a5.008,5.008,0,0,0,5,5H6.266A12.059,12.059,0,0,0,13.82,23.8a.917.917,0,0,0,.181.017,1,1,0,0,0,1-1V1.186A1,1,0,0,0,13.82.2ZM13,21.535a10.083,10.083,0,0,1-5.371-4.08A1,1,0,0,0,6.792,17H5a3,3,0,0,1-3-3V10A3,3,0,0,1,5,7h1.8a1,1,0,0,0,.837-.453A10.079,10.079,0,0,1,13,2.465Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-unlock"><path d="M17,8H7V7a5,5,0,0,1,9.375-2.422,1,1,0,0,0,1.749-.971A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5.006,5.006,0,0,0,17,8Zm3,11a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"></path><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"></path></svg>',
      '<svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-lock"><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"></path><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"></path></svg>',
    ].join("");

    const icons = Array.from(template.children).reduce((prev, curr) => {
      const data_svg_name = curr.getAttribute("data-svg-name");
      curr.removeAttribute("data-svg-name");
      prev[data_svg_name] = curr.outerHTML;
      return prev;
    }, {});

    return (name = "") => icons[name] || "";
  }

  info(data = "") {
    this._elements.videoTitle.textContent = data?.title || "";
    this._elements.videoDescription.textContent = data?.description || "";
  }

  controls(data) {
    return data;
  }

  element = (query = "") => {
    return query != "" ? this._element.querySelector(query) : this._element;
  };

  video(callback) {
    callback?.(this._element.querySelector("video"));
  }
}