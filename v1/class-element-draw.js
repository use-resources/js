class ClassElementDraw {
  static {
    const style = document.createElement("style");
    style.innerHTML = `#uuid-019567f4-7cd7-7064-bcaf-b6009fd0de87 { user-select: none; font-family: sans-serif; position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: #000; margin: 0; padding: 0; box-sizing: border-box; * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; } svg { width: 15px; height: 15px; } .div_Aqa0wxW { position: absolute; width: 100%; height: 100%; gap: 30px; display: flex; align-items: center; justify-content: center; pointer-events: none; } .label_tYO6nSf { width: 40px; height: 40px; position: relative; display: flex; justify-content: center; align-items: center; border: none; outline: none; background: none; & input { position: absolute; visibility: hidden;} & svg { width: 15px; height: 15px; fill: #fff; } } .div_ak1IaKv { width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden; } .div_HPp5z9l { flex: 1; position: relative; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; overflow: hidden; & canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } & img { width: 100%; height: 100%; } } .select_Z1abqn2 { all: unset; color: #fff; font-weight: bold; height: 40px; display: flex; justify-content: center; align-items: center; text-align: center; padding: 0 10px; & option { background: #000; } } .hr_ZMZWNsx { background: rgb(181 178 178 / 0.5); border: none; width: 1px; height: 50%; } .div_KNf6yZy { display: flex; justify-content: center; align-items: center; background: #313131; border-radius: 40px; } .select_02coxcfxh1g7zj4uma0 { all: unset; flex: 1; padding: 0 10px; text-align: left; color: #fff; & option { background: #000; } } .div_rmjk5xfg86dvogr3jvwy { position: absolute; left: 0; top: 0; width: 100%; height: 60px; padding: 10px; gap: 10px; display: flex; justify-content: space-between; overflow-y: hidden; overflow-x: auto; scrollbar-width: none; &.toggle { top: initial; bottom: 0; } } .div_ykgovoznvjn8f9uocd2q { display: flex; } .div_en26u61vg0k3ebqqc9f1 { position: relative; pointer-events: initial; backdrop-filter: blur(150px); border-radius: 40px; background: #313131; } .div_iu0mg3dwkwmbyoj7291 { width: 100%; height: 100%; border: none; background: none; } .div_U6lIo74rWt4J6POwaZVg { width: 100%; height: 100%; display: flex; padding: 20px; backdrop-filter: blur(7px); } .div_8oil7437wu5pwrsop25 { margin: auto; display: flex; flex-direction: column; width: min(100%, 450px); max-height: 100%; border-radius: 15px; overflow: hidden; background: #000; color: #fff; outline: 1px solid #fff; cursor: initial; } .div_cou1gd2qeaa0xl1s90 { overflow-y: auto; scrollbar-width: thin; scrollbar-color: #fff transparent; } .div_416usus802fqarxzzxp2 { display: flex; align-items: center; justify-content: space-between; padding: 10px; gap: 10px; } .img_p8g7bed9c3iqtbqsd4ig { height: 100px; aspect-ratio: 16/9;outline: 1px solid #fff; & img { width: 100%; height: 100%; object-fit: contain; } & canvas { width: 100%; height: 100%; object-fit: contain; } } .div_uk3zuf6p0b3w7d34rprc { display: flex; gap: 10px; & button { all: unset; background: #313131; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; box-sizing: border-box; border-radius: 15px; } & svg { fill: #fff; } } .div_glbsedpokowmimbmbd6j { height: 60px; width: 100%; padding: 10px; gap: 10px; display: flex; align-items: center; & button { all: unset; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; border-radius: 15px; background: #313131; } & svg { fill: #fff; } } .label_rd4e5h0gakv26fgdsngm { background: #fff; border-radius: 50%; & svg { mix-blend-mode: difference; } } }`;
    document.head.append(style);
  }
  constructor(parentElement) {
    this.__map = new Map();

    this.__element = "";
    this.__elements = {};

    this.__previous = () => {};
    this.__next = () => {};
    this.__clear = () => {};

    this.__constructor();
    parentElement?.append?.(this.__element);
  }
  __constructor() {
    const useThis = {
      values: {
        canvas: {
          array: [],
          focus: null,
        },
        painting: false,
        paintingReady: true,
        rect: null,
      },
      elements: {
        canvas: document.createElement("canvas"),
      },
      functions: {},
    };

    const $element = ((html) => {
      const $element = document.createElement("div");
      $element.innerHTML = html;
      return $element.children[0];
    })(
      ((_) => `
        <div 
            id="uuid-019567f4-7cd7-7064-bcaf-b6009fd0de87"
            style="background:${_.background}">
              <div class="div_ak1IaKv">
                <div id="canvasBox" class="div_HPp5z9l" style="cursor: crosshair;">
                    <canvas id="img-canvas" style="object-fit:contain"></canvas>
                    <canvas id="canvas"></canvas>
                </div>
              </div>
              <div id="container-controls" class="div_Aqa0wxW">
                  <div id="container-controls-bar" class="div_rmjk5xfg86dvogr3jvwy">
  
                      <div class="div_ykgovoznvjn8f9uocd2q div_en26u61vg0k3ebqqc9f1">
                          <label class="label_tYO6nSf label_rd4e5h0gakv26fgdsngm">
                              <input 
                                id="color" 
                                type="color" 
                                value="${_.inputValue}">
                              <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-fill"><path d="m22.327 18.422c.728 1.034 1.673 2.229 1.673 3.078a2.5 2.5 0 0 1 -5 0c0-.775.961-2.008 1.692-3.069a1 1 0 0 1 1.635-.009zm-.877-4.558-8.672 8.672a5.006 5.006 0 0 1 -7.071 0l-4.242-4.243a5 5 0 0 1 0-7.071l5.709-5.71-2.856-2.89a1 1 0 0 1 1.422-1.406l2.848 2.884 1.548-1.55-.843-.843a1 1 0 0 1 1.414-1.414l13 13a1 1 0 1 1 -1.414 1.414zm-1.414-1.414-8.486-8.486-1.557 1.558 4.718 4.778a1 1 0 1 1 -1.422 1.4l-4.709-4.765-5.7 5.7a3 3 0 0 0 0 4.243l4.242 4.243a3.005 3.005 0 0 0 4.243 0z"></path></svg>
                          </label>
                          <select id="range" class="select_Z1abqn2">
                            ${_.selectInnerHtml}
                          </select>
                          
                          <button id="button-toggle-bar" class="label_tYO6nSf">
                              <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-down"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"></path></svg>
                          </button>
                      </div>
  
                      <div class="div_ykgovoznvjn8f9uocd2q">
                          <div class="div_KNf6yZy" style="pointer-events:initial;">
                              <button id="undoButton" class="label_tYO6nSf" style="display:none">
                                  <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-undo"><path d="M23,24a1,1,0,0,1-1-1,6.006,6.006,0,0,0-6-6H10.17v1.586A2,2,0,0,1,6.756,20L.877,14.121a3,3,0,0,1,0-4.242L6.756,4A2,2,0,0,1,10.17,5.414V7H15a9.01,9.01,0,0,1,9,9v7A1,1,0,0,1,23,24ZM8.17,5.414,2.291,11.293a1,1,0,0,0,0,1.414L8.17,18.586V16a1,1,0,0,1,1-1H16a7.984,7.984,0,0,1,6,2.714V16a7.008,7.008,0,0,0-7-7H9.17a1,1,0,0,1-1-1Z"></path></svg>
                              </button>
                              <button id="nextButton" class="label_tYO6nSf" style="display:none">
                                  <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-redo"><path d="M0,23V16A9.01,9.01,0,0,1,9,7h4.83V5.414A2,2,0,0,1,17.244,4l5.88,5.879a3,3,0,0,1,0,4.242L17.244,20a2,2,0,0,1-3.414-1.414V17H8a6.006,6.006,0,0,0-6,6,1,1,0,0,1-2,0ZM15.83,8a1,1,0,0,1-1,1H9a7.008,7.008,0,0,0-7,7v1.714A7.984,7.984,0,0,1,8,15h6.83a1,1,0,0,1,1,1v2.586l5.879-5.879a1,1,0,0,0,0-1.414L15.83,5.414Z"></path></svg>
                              </button>
                              <select id="select-number" class="select_02coxcfxh1g7zj4uma0">
                                  <option>0/0</option>
                              </select>
                              <hr class="hr_ZMZWNsx">
                              
                              <button id="button-capas" class="label_tYO6nSf">
                                  <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-layers"><path d="M22.485,10.975,12,17.267,1.515,10.975A1,1,0,1,0,.486,12.69l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"></path><path d="M22.485,15.543,12,21.834,1.515,15.543A1,1,0,1,0,.486,17.258l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"></path><path d="M12,14.773a2.976,2.976,0,0,1-1.531-.425L.485,8.357a1,1,0,0,1,0-1.714L10.469.652a2.973,2.973,0,0,1,3.062,0l9.984,5.991a1,1,0,0,1,0,1.714l-9.984,5.991A2.976,2.976,0,0,1,12,14.773ZM2.944,7.5,11.5,12.633a.974.974,0,0,0,1,0L21.056,7.5,12.5,2.367a.974.974,0,0,0-1,0h0Z"></path></svg>
                              </button>
                              
                          </div>
                      </div>
                  </div> 
                 
              </div>
                  
              <div id="div-window-capas" class="div_iu0mg3dwkwmbyoj7291" popover>
              
                <div class="div_U6lIo74rWt4J6POwaZVg" style="pointer-events: none;">            
                  <div class="div_8oil7437wu5pwrsop25" style="pointer-events: initial;">
                    <div class="div_glbsedpokowmimbmbd6j">
                    
                      <button data-hide-window> 
                            <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-left"><path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path></svg>
                      </button>
                      <h3>Capas</h3>
                                  
                      <div id="div-button-capas" style="margin-left:auto; display:flex; gap:10px; display:none">
                          <button id="button-download" class="label_tYO6nSf">
                            <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-download"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"></path><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"></path></svg>
                          </button>
                          <button id="clearButton" class="label_tYO6nSf">
                              <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-trash"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"></path><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"></path><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                          </button>
                      </div>
                    
                    </div>
                    <div id="div-list-capas" class="div_cou1gd2qeaa0xl1s90"></div>
                  </div>
                </div>

              </div>
              
        </div>
      `)({
        background: "#000000",
        inputValue: "#ffffff",
        selectInnerHtml: Array(500)
          .fill(null)
          .map((_, index) => {
            const selected = index == 2 ? "selected" : "";
            return `
              <option value="${index + 1}" ${selected}>
                ${index + 1} px
              </option>
            `;
          })
          .join(""),
      })
    );

    const $elements = Array.from($element.querySelectorAll("[id]")).reduce(
      (prev, curr) => {
        prev[curr.getAttribute("id")] = curr;
        curr.removeAttribute("id");
        return prev;
      },
      {}
    );

    const ctx = $elements.canvas.getContext("2d");

    useThis.functions.replaceTextObject = (text, object) => {
      Object.entries(object).forEach((entries) => {
        text = text.replace(...entries);
      });

      return text;
    };

    useThis.functions.copyCanvas = (canvasOriginal) => {
      const canvasCopia = document.createElement("canvas");

      canvasCopia.width = canvasOriginal.width;
      canvasCopia.height = canvasOriginal.height;

      const ctxCopia = canvasCopia.getContext("2d");

      ctxCopia.drawImage(canvasOriginal, 0, 0);

      return canvasCopia;
    };

    useThis.functions.rewriteCanvas = (
      canvasView,
      canvasOriginal,
      array = []
    ) => {
      canvasView.width = canvasOriginal.width;
      canvasView.height = canvasOriginal.height;

      array.forEach((canvas) => {
        if (canvas) {
          const ctxCopia = canvasView.getContext("2d");
          ctxCopia.drawImage(canvas, 0, 0);
        }
      });

      return canvasView;
    };

    useThis.functions.resizeCanvas = () => {
      if (document.body.contains($element)) {
        useThis.values.rect = $elements.canvas.getBoundingClientRect();

        $elements.canvas.width = $elements.canvasBox.clientWidth;
        $elements.canvas.height = $elements.canvasBox.clientHeight;
      }
    };

    useThis.functions.startPosition = (e) => {
      $elements["container-controls"].style.display = "none";

      useThis.values.painting = true;
      useThis.functions.draw(e);
      if (e.type.startsWith("touch")) {
        e.preventDefault();
      }
    };

    useThis.functions.endPosition = (e) => {
      if (useThis.values.painting) {
        $elements["container-controls"].style.display = "";

        const $copia = useThis.functions.copyCanvas($elements.canvas);

        const index = useThis.values.canvas.array.findIndex(
          (canvas) => canvas == useThis.values.canvas.focus
        );

        useThis.values.canvas.array = useThis.values.canvas.array.slice(
          0,
          index + 1
        );

        useThis.values.canvas.array.push($copia);
        useThis.values.canvas.focus = $copia;

        useThis.functions.rewriteCanvas(
          $elements["img-canvas"],
          $elements.canvas,
          useThis.values.canvas.array
        );

        ctx.clearRect(0, 0, $elements.canvas.width, $elements.canvas.height);

        $elements.undoButton.style.display = "";
        $elements.nextButton.style.display = "none";

        $elements["select-number"].innerHTML = useThis.values.canvas.array
          .map((_, index, array) => {
            const option0 =
              index == 0 ? `<option value="-">0/${array.length}</option>` : "";
            return `
            ${option0}
            <option value="${index}">${index + 1}/${array.length}</option>
          `;
          })
          .join("");

        $elements["select-number"].selectedIndex =
          useThis.values.canvas.array.length;

        this.__on("drawn", {
          canvas: () => $elements["img-canvas"],
        });

        useThis.values.painting = false;
        ctx.beginPath();

        if (e.type.startsWith("touch")) {
          e.preventDefault();
        }
      }
    };

    useThis.functions.draw = (e) => {
      if (!useThis.values.painting) return;

      ctx.strokeStyle = $elements.color.value;
      ctx.lineWidth = $elements.range.value;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      let x, y;
      if (e.type.startsWith("touch")) {
        const touch = e.touches[0] || e.changedTouches[0];
        const rect = useThis.values.rect;

        x = touch.clientX - $elements.canvas.offsetLeft - rect.left;
        y = touch.clientY - $elements.canvas.offsetTop - rect.top;
        e.preventDefault();
      } else {
        x = e.offsetX;
        y = e.offsetY;
      }

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);

      this.__on("drawing", {
        canvas: () => {
          useThis.functions.rewriteCanvas(
            useThis.elements.canvas,
            $elements.canvas,
            [$elements["img-canvas"], $elements.canvas]
          );

          return useThis.elements.canvas;
        },
      });
    };

    useThis.functions.undoLastPath = () => {
      const index = useThis.values.canvas.array.findIndex(
        (canvas) => canvas == useThis.values.canvas.focus
      );

      $elements.nextButton.style.display = "";

      if (index == -1) return;
      if (index == 0) $elements.undoButton.style.display = "none";

      useThis.values.canvas.focus = useThis.values.canvas.array[index - 1];

      ctx.clearRect(0, 0, $elements.canvas.width, $elements.canvas.height);

      if (true) {
        useThis.functions.rewriteCanvas(
          $elements["img-canvas"],
          $elements.canvas,
          useThis.values.canvas.array.slice(0, index)
        );
      }

      $elements["select-number"].selectedIndex = index;

      this.__on("change", {
        canvas: () => $elements["img-canvas"],
      });
    };

    useThis.functions.undoNextPath = () => {
      const index = useThis.values.canvas.array.findIndex(
        (canvas) => canvas == useThis.values.canvas.focus
      );

      $elements.undoButton.style.display = "";

      if (index + 2 >= useThis.values.canvas.array.length) {
        $elements.nextButton.style.display = "none";
      }

      useThis.values.canvas.focus =
        useThis.values.canvas.array[
          Math.min(index + 1, useThis.values.canvas.array.length - 1)
        ];

      useThis.functions.rewriteCanvas(
        $elements["img-canvas"],
        $elements.canvas,
        useThis.values.canvas.array.slice(0, index + 2)
      );

      $elements["select-number"].selectedIndex = Math.min(
        useThis.values.canvas.array.length,
        index + 2
      );

      this.__on("change", {
        canvas: () => $elements["img-canvas"],
      });
    };

    useThis.functions.clearCanvas = () => {
      ctx.clearRect(0, 0, $elements.canvas.width, $elements.canvas.height);
      useThis.values.canvas.array = [];

      useThis.values.canvas.focus = null;

      $elements["select-number"].innerHTML = "<option>0/0</option>";
      useThis.functions.rewriteCanvas(
        $elements["img-canvas"],
        $elements.canvas,
        []
      );

      this.__on("change", {
        canvas: () => $elements["img-canvas"],
      });
    };

    $elements.canvas.addEventListener(
      "mousedown",
      useThis.functions.startPosition
    );

    $elements.canvas.addEventListener("mouseup", useThis.functions.endPosition);
    $elements.canvas.addEventListener(
      "mouseleave",
      useThis.functions.endPosition
    );
    $elements.canvas.addEventListener("mousemove", useThis.functions.draw);
    $elements.canvas.addEventListener(
      "touchstart",
      useThis.functions.startPosition,
      {
        passive: false,
      }
    );
    $elements.canvas.addEventListener(
      "touchend",
      useThis.functions.endPosition,
      {
        passive: false,
      }
    );
    $elements.canvas.addEventListener(
      "touchcancel",
      useThis.functions.endPosition,
      {
        passive: false,
      }
    );
    $elements.canvas.addEventListener("touchmove", useThis.functions.draw, {
      passive: false,
    });
    $elements.undoButton.addEventListener(
      "click",
      useThis.functions.undoLastPath
    );
    $elements.nextButton.addEventListener(
      "click",
      useThis.functions.undoNextPath
    );
    $elements.clearButton.addEventListener("click", () => {
      if (confirm("¿Borrar todo?")) {
        useThis.functions.clearCanvas();
        $elements["button-capas"].dispatchEvent(new CustomEvent("click"));
      }
    });
    $elements["select-number"].addEventListener("change", () => {
      useThis.values.canvas.focus =
        useThis.values.canvas.array[parseInt($elements["select-number"].value)];
      useThis.functions.rewriteCanvas(
        $elements["img-canvas"],
        $elements.canvas,
        useThis.values.canvas.array.slice(
          0,
          parseInt($elements["select-number"].value) + 1
        )
      );

      const selectedIndex = $elements["select-number"].selectedIndex;
      $elements.undoButton.style.display = selectedIndex == 0 ? "none" : "";
      $elements.nextButton.style.display =
        selectedIndex == useThis.values.canvas.array.length ? "none" : "";

      this.__on("change", {
        canvas: () => $elements["img-canvas"],
      });
    });
    $elements["div-window-capas"]?.addEventListener("click", (e) => {
      if (
        e.target === e.currentTarget ||
        e.target.closest("[data-hide-window]")
      ) {
        e.currentTarget.hidePopover();
      }
    });
    $elements["button-capas"].addEventListener("click", () => {
      const array = useThis.values.canvas.array;
      $elements["div-window-capas"].showPopover();

      $elements["div-list-capas"].innerHTML = "";

      $elements["div-button-capas"].style.display = array.length
        ? "flex"
        : "none";

      $elements["div-list-capas"].append(
        ...array.map((canvas, index) => {
          const $element = createNodeElement(`
                <div class="div_416usus802fqarxzzxp2" data-capa-index="${index}">
                    <div class="img_p8g7bed9c3iqtbqsd4ig">
                        <canvas></canvas>
                    </div>
                    <div class="div_uk3zuf6p0b3w7d34rprc">
                      <button data-action="up">
                          <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-up"><path d="M18,15.5a1,1,0,0,1-.71-.29l-4.58-4.59a1,1,0,0,0-1.42,0L6.71,15.21a1,1,0,0,1-1.42-1.42L9.88,9.21a3.06,3.06,0,0,1,4.24,0l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,18,15.5Z"></path></svg>
                      </button>
                      <button data-action="down">
                          <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-down"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"></path></svg>
                      </button>
                      <button data-action="delete">
                          <svg viewBox="0 0 24 24" data-svg-name="fi fi-rr-trash"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"></path><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"></path><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                      </button>
                    </div>
                </div>
            `);

          $element.querySelector("canvas").replaceWith(canvas);
          return $element;
        })
      );
    });
    $elements.color.addEventListener("change", (e) => {
      e.target.closest("label").style.background = e.target.value;
    });
    $elements["button-toggle-bar"].addEventListener("click", () => {
      $elements["container-controls-bar"].classList.toggle("toggle");
    });
    $elements["div-list-capas"].addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button) {
        const capaIndex = e.target.closest("[data-capa-index]");
        const action = button.getAttribute("data-action");
        if (action == "delete" && confirm("¿Eliminar esta capa?")) {
          capaIndex.remove();

          useThis.values.canvas.array = useThis.values.canvas.array.filter(
            (_, index) => {
              return (
                index != parseInt(capaIndex.getAttribute("data-capa-index"))
              );
            }
          );

          useThis.functions.rewriteCanvas(
            $elements["img-canvas"],
            $elements.canvas,
            useThis.values.canvas.array
          );
        }

        if (action == "up") {
          const index = parseInt(capaIndex.getAttribute("data-capa-index"));
          const indexLimit = index - 1;
          const arrayCanvas = useThis.values.canvas.array;

          if (index == 0) {
            arrayCanvas.push(arrayCanvas.shift());
          } else {
            const canvas_now = arrayCanvas[index];
            const canvas_new = arrayCanvas[indexLimit];
            arrayCanvas[index] = canvas_new;
            arrayCanvas[indexLimit] = canvas_now;
          }

          useThis.functions.rewriteCanvas(
            $elements["img-canvas"],
            $elements.canvas,
            useThis.values.canvas.array
          );
          $elements["button-capas"].dispatchEvent(new CustomEvent("click"));
        }

        if (action == "down") {
          const index = parseInt(capaIndex.getAttribute("data-capa-index"));
          const indexLimit = index + 1;
          const arrayCanvas = useThis.values.canvas.array;

          if (index == arrayCanvas.length - 1) {
            arrayCanvas.unshift(arrayCanvas.pop());
          } else {
            const canvas_now = arrayCanvas[index];
            const canvas_new = arrayCanvas[indexLimit];
            arrayCanvas[index] = canvas_new;
            arrayCanvas[indexLimit] = canvas_now;
          }

          useThis.functions.rewriteCanvas(
            $elements["img-canvas"],
            $elements.canvas,
            useThis.values.canvas.array
          );
          $elements["button-capas"].dispatchEvent(new CustomEvent("click"));
        }

        $elements["select-number"].innerHTML = useThis.values.canvas.array
          .map((_, index, array) => {
            const option0 =
              index == 0 ? `<option value="-">0/${array.length}</option>` : "";
            return `
            ${option0} 
            <option value="${index}">${index + 1}/${array.length}</option>
          `;
          })
          .join("");

        $elements["select-number"].selectedIndex =
          useThis.values.canvas.array.length;

        [useThis.values.canvas.focus] = useThis.values.canvas.array.slice(-1);

        this.__on("change", {
          canvas: () => $elements["img-canvas"],
        });
      }
    });
    $elements["button-download"].addEventListener("click", () => {
      const dataURL = $elements["img-canvas"].toDataURL("image/png");
      const enlace = document.createElement("a");
      enlace.href = dataURL;
      enlace.download = `canvas-${Date.now()}.png`;
      enlace.click();
    });

    setTimeout(useThis.functions.resizeCanvas);
    addEventListener("resize", useThis.functions.resizeCanvas);

    this.__element = $element;
    this.__elements = $elements;

    this.__previous = useThis.functions.undoLastPath;
    this.__next = useThis.functions.undoNextPath;
    this.__clear = useThis.functions.clearCanvas;

    return $element;
  }
  __on(type, value) {
    const map = this.__map;

    map.forEach((object) => {
      if (object.type == type) {
        object?.callback?.(value, object.off);
      }
    });
  }
  on(type, callback) {
    const symbol = Symbol();
    const map = this.__map;

    const off = () => {
      return map.delete(symbol);
    };

    map.set(symbol, {
      type,
      callback,
      off,
    });

    return off;
  }
  previous() {
    return this.__previous();
  }
  next() {
    return this.__next();
  }
  clear() {
    return this.__clear();
  }
  element() {
    return this.__element;
  }
  style({ background = "#000000", color = "#ffffff" }) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = color;

    this.__element.style.background = background;
    this.__elements.color.value = ctx.fillStyle.toUpperCase();

    return this.__element;
  }
}
