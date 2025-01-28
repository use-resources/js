function elementComponentDraw(useParams) {
  const usethis = {
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
    functions: {
      declareVar: (callback, data = {}) => {
        return callback?.(data) ?? "";
      },
    },
  };

  const $element = createNodeElement(
    usethis.functions.declareVar(
      (_) =>
        `<div class="div_j46nnVSnu8tuV8" style="background:${_.background}"><div class="div_ak1IaKv"><div id="canvasBox" class="div_HPp5z9l" style="cursor: crosshair;"><canvas id="img-canvas" style="object-fit:contain"></canvas><canvas id="canvas"></canvas></div></div><div id="container-controls" class="div_Aqa0wxW"><div id="container-controls-bar" class="div_rmjk5xfg86dvogr3jvwy"><div class="div_ykgovoznvjn8f9uocd2q div_en26u61vg0k3ebqqc9f1"><label class="label_tYO6nSf label_rd4e5h0gakv26fgdsngm"><input id="color" type="color" value="${_.inputValue}"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-svg-name="fi fi-rr-fill"><path d="m22.327 18.422c.728 1.034 1.673 2.229 1.673 3.078a2.5 2.5 0 0 1 -5 0c0-.775.961-2.008 1.692-3.069a1 1 0 0 1 1.635-.009zm-.877-4.558-8.672 8.672a5.006 5.006 0 0 1 -7.071 0l-4.242-4.243a5 5 0 0 1 0-7.071l5.709-5.71-2.856-2.89a1 1 0 0 1 1.422-1.406l2.848 2.884 1.548-1.55-.843-.843a1 1 0 0 1 1.414-1.414l13 13a1 1 0 1 1 -1.414 1.414zm-1.414-1.414-8.486-8.486-1.557 1.558 4.718 4.778a1 1 0 1 1 -1.422 1.4l-4.709-4.765-5.7 5.7a3 3 0 0 0 0 4.243l4.242 4.243a3.005 3.005 0 0 0 4.243 0z"></path></svg></label><select id="range" class="select_Z1abqn2">${_.selectInnerHtml}</select><button id="button-toggle-bar" class="label_tYO6nSf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-down"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"></path></svg></button></div><div class="div_ykgovoznvjn8f9uocd2q"><div class="div_KNf6yZy" style="pointer-events:initial;"><button id="undoButton" class="label_tYO6nSf" style="display:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-undo"><path d="M23,24a1,1,0,0,1-1-1,6.006,6.006,0,0,0-6-6H10.17v1.586A2,2,0,0,1,6.756,20L.877,14.121a3,3,0,0,1,0-4.242L6.756,4A2,2,0,0,1,10.17,5.414V7H15a9.01,9.01,0,0,1,9,9v7A1,1,0,0,1,23,24ZM8.17,5.414,2.291,11.293a1,1,0,0,0,0,1.414L8.17,18.586V16a1,1,0,0,1,1-1H16a7.984,7.984,0,0,1,6,2.714V16a7.008,7.008,0,0,0-7-7H9.17a1,1,0,0,1-1-1Z"></path></svg></button><button id="nextButton" class="label_tYO6nSf" style="display:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-redo"><path d="M0,23V16A9.01,9.01,0,0,1,9,7h4.83V5.414A2,2,0,0,1,17.244,4l5.88,5.879a3,3,0,0,1,0,4.242L17.244,20a2,2,0,0,1-3.414-1.414V17H8a6.006,6.006,0,0,0-6,6,1,1,0,0,1-2,0ZM15.83,8a1,1,0,0,1-1,1H9a7.008,7.008,0,0,0-7,7v1.714A7.984,7.984,0,0,1,8,15h6.83a1,1,0,0,1,1,1v2.586l5.879-5.879a1,1,0,0,0,0-1.414L15.83,5.414Z"></path></svg></button><select id="select-number" class="select_02coxcfxh1g7zj4uma0"><option>0/0</option></select><hr class="hr_ZMZWNsx"><button id="button-capas" class="label_tYO6nSf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-layers"><path d="M22.485,10.975,12,17.267,1.515,10.975A1,1,0,1,0,.486,12.69l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"></path><path d="M22.485,15.543,12,21.834,1.515,15.543A1,1,0,1,0,.486,17.258l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z"></path><path d="M12,14.773a2.976,2.976,0,0,1-1.531-.425L.485,8.357a1,1,0,0,1,0-1.714L10.469.652a2.973,2.973,0,0,1,3.062,0l9.984,5.991a1,1,0,0,1,0,1.714l-9.984,5.991A2.976,2.976,0,0,1,12,14.773ZM2.944,7.5,11.5,12.633a.974.974,0,0,0,1,0L21.056,7.5,12.5,2.367a.974.974,0,0,0-1,0h0Z"></path></svg></button></div></div></div></div><div id="div-window-capas" class="div_iu0mg3dwkwmbyoj7291" popover=""><div class="div_U6lIo74rWt4J6POwaZVg" style="pointer-events: none;"><div class="div_8oil7437wu5pwrsop25" style="pointer-events: initial;"><div class="div_glbsedpokowmimbmbd6j"><button data-hide-window=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-left"><path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path></svg></button><h3>Capas</h3><div id="div-button-capas" style="margin-left:auto; display:flex; gap:10px; display:none"><button id="button-download" class="label_tYO6nSf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-download"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"></path><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"></path></svg></button><button id="clearButton" class="label_tYO6nSf"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-trash"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"></path><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"></path><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg></button></div></div><div id="div-list-capas" class="div_cou1gd2qeaa0xl1s90"></div></div></div></div></div>`,
      {
        background: useParams?.style?.background,
        inputValue: useParams?.style?.color ?? "#ffffff",
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
      }
    )
  );

  const $elements = createObjectElement(
    $element.querySelectorAll("[id]"),
    "id",
    true
  );

  const ctx = $elements.canvas.getContext("2d");

  usethis.functions.replaceTextObject = (text, object) => {
    Object.entries(object).forEach((entries) => {
      text = text.replace(...entries);
    });

    return text;
  };

  usethis.functions.copyCanvas = (canvasOriginal) => {
    const canvasCopia = document.createElement("canvas");

    canvasCopia.width = canvasOriginal.width;
    canvasCopia.height = canvasOriginal.height;

    const ctxCopia = canvasCopia.getContext("2d");

    ctxCopia.drawImage(canvasOriginal, 0, 0);

    return canvasCopia;
  };

  usethis.functions.rewriteCanvas = (
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

  usethis.functions.resizeCanvas = () => {
    if (document.body.contains($element)) {
      usethis.values.rect = $elements.canvas.getBoundingClientRect();

      $elements.canvas.width = $elements.canvasBox.clientWidth;
      $elements.canvas.height = $elements.canvasBox.clientHeight;
    }
  };

  usethis.functions.startPosition = (e) => {
    $elements["container-controls"].style.display = "none";

    usethis.values.painting = true;
    usethis.functions.draw(e);
    if (e.type.startsWith("touch")) {
      e.preventDefault();
    }
  };

  usethis.functions.endPosition = (e) => {
    if (usethis.values.painting) {
      $elements["container-controls"].style.display = "";

      const $copia = usethis.functions.copyCanvas($elements.canvas);

      const index = usethis.values.canvas.array.findIndex(
        (canvas) => canvas == usethis.values.canvas.focus
      );

      usethis.values.canvas.array = usethis.values.canvas.array.slice(
        0,
        index + 1
      );

      usethis.values.canvas.array.push($copia);
      usethis.values.canvas.focus = $copia;

      usethis.functions.rewriteCanvas(
        $elements["img-canvas"],
        $elements.canvas,
        usethis.values.canvas.array
      );

      ctx.clearRect(0, 0, $elements.canvas.width, $elements.canvas.height);

      $elements.undoButton.style.display = "";
      $elements.nextButton.style.display = "none";

      $elements["select-number"].innerHTML = usethis.values.canvas.array
        .map((_, index, array) => {
          const option0 =
            index == 0 ? `<option value="-">0/${array.length}</option> ` : "";
          return `
            ${option0}
            <option value="${index}">${index + 1}/${array.length}</option>
          `;
        })
        .join("");

      $elements["select-number"].selectedIndex =
        usethis.values.canvas.array.length;

      if (useParams?.events?.drawn) {
        $element.dispatchEvent(
          new CustomEvent("_drawn", {
            detail: {
              canvas: () => $elements["img-canvas"],
            },
          })
        );
      }

      usethis.values.painting = false;
      ctx.beginPath();

      if (e.type.startsWith("touch")) {
        e.preventDefault();
      }
    }
  };

  usethis.functions.draw = (e) => {
    if (!usethis.values.painting) return;

    ctx.strokeStyle = $elements.color.value;
    ctx.lineWidth = $elements.range.value;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let x, y;
    if (e.type.startsWith("touch")) {
      const touch = e.touches[0] || e.changedTouches[0];
      const rect = usethis.values.rect;

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

    if (useParams?.events?.drawing) {
      if (usethis.values.paintingReady) {
        $element.dispatchEvent(
          new CustomEvent("_drawing", {
            detail: {
              canvas: () => {
                usethis.functions.rewriteCanvas(
                  usethis.elements.canvas,
                  $elements.canvas,
                  [$elements["img-canvas"], $elements.canvas]
                );

                return usethis.elements.canvas;
              },
            },
          })
        );
      }
    }
  };

  usethis.functions.undoLastPath = () => {
    const index = usethis.values.canvas.array.findIndex(
      (canvas) => canvas == usethis.values.canvas.focus
    );

    $elements.nextButton.style.display = "";

    if (index == -1) return;
    if (index == 0) $elements.undoButton.style.display = "none";

    usethis.values.canvas.focus = usethis.values.canvas.array[index - 1];

    ctx.clearRect(0, 0, $elements.canvas.width, $elements.canvas.height);

    if (true) {
      usethis.functions.rewriteCanvas(
        $elements["img-canvas"],
        $elements.canvas,
        usethis.values.canvas.array.slice(0, index)
      );
    }

    $elements["select-number"].selectedIndex = index;

    if (useParams?.events?.change) {
      $element.dispatchEvent(
        new CustomEvent("_change", {
          detail: {
            canvas: () => $elements["img-canvas"],
          },
        })
      );
    }
  };

  usethis.functions.undoNextPath = () => {
    const index = usethis.values.canvas.array.findIndex(
      (canvas) => canvas == usethis.values.canvas.focus
    );

    $elements.undoButton.style.display = "";

    if (index + 2 >= usethis.values.canvas.array.length) {
      $elements.nextButton.style.display = "none";
    }

    usethis.values.canvas.focus =
      usethis.values.canvas.array[
        Math.min(index + 1, usethis.values.canvas.array.length - 1)
      ];

    usethis.functions.rewriteCanvas(
      $elements["img-canvas"],
      $elements.canvas,
      usethis.values.canvas.array.slice(0, index + 2)
    );

    $elements["select-number"].selectedIndex = Math.min(
      usethis.values.canvas.array.length,
      index + 2
    );

    if (useParams?.events?.change) {
      $element.dispatchEvent(
        new CustomEvent("_change", {
          detail: {
            canvas: () => $elements["img-canvas"],
          },
        })
      );
    }
  };

  usethis.functions.clearCanvas = () => {
    if (confirm("¿Borrar todo?")) {
      ctx.clearRect(0, 0, $elements.canvas.width, $elements.canvas.height);
      usethis.values.canvas.array = [];
      paths = [];
      usethis.values.canvas.focus = null;

      $elements["select-number"].innerHTML = "<option>0/0</option>";
      usethis.functions.rewriteCanvas(
        $elements["img-canvas"],
        $elements.canvas,
        []
      );

      $elements["button-capas"].dispatchEvent(new CustomEvent("click"));

      if (useParams?.events?.change) {
        $element.dispatchEvent(
          new CustomEvent("_change", {
            detail: {
              canvas: () => $elements["img-canvas"],
            },
          })
        );
      }
    }
  };

  $elements.canvas.addEventListener(
    "mousedown",
    usethis.functions.startPosition
  );
  $elements.canvas.addEventListener("mouseup", usethis.functions.endPosition);
  $elements.canvas.addEventListener(
    "mouseleave",
    usethis.functions.endPosition
  );
  $elements.canvas.addEventListener("mousemove", usethis.functions.draw);
  $elements.canvas.addEventListener(
    "touchstart",
    usethis.functions.startPosition,
    {
      passive: false,
    }
  );
  $elements.canvas.addEventListener("touchend", usethis.functions.endPosition, {
    passive: false,
  });
  $elements.canvas.addEventListener(
    "touchcancel",
    usethis.functions.endPosition,
    {
      passive: false,
    }
  );
  $elements.canvas.addEventListener("touchmove", usethis.functions.draw, {
    passive: false,
  });
  $elements.undoButton.addEventListener(
    "click",
    usethis.functions.undoLastPath
  );
  $elements.nextButton.addEventListener(
    "click",
    usethis.functions.undoNextPath
  );
  $elements.clearButton.addEventListener(
    "click",
    usethis.functions.clearCanvas
  );
  $elements["select-number"].addEventListener("change", () => {
    usethis.values.canvas.focus =
      usethis.values.canvas.array[parseInt($elements["select-number"].value)];
    usethis.functions.rewriteCanvas(
      $elements["img-canvas"],
      $elements.canvas,
      usethis.values.canvas.array.slice(
        0,
        parseInt($elements["select-number"].value) + 1
      )
    );

    const selectedIndex = $elements["select-number"].selectedIndex;
    $elements.undoButton.style.display = selectedIndex == 0 ? "none" : "";
    $elements.nextButton.style.display =
      selectedIndex == usethis.values.canvas.array.length ? "none" : "";

    if (useParams?.events?.change) {
      $element.dispatchEvent(
        new CustomEvent("_change", {
          detail: {
            canvas: () => $elements["img-canvas"],
          },
        })
      );
    }
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
    const array = usethis.values.canvas.array;
    $elements["div-window-capas"].showPopover();

    $elements["div-list-capas"].innerHTML = "";

    $elements["div-button-capas"].style.display = array.length
      ? "flex"
      : "none";

    $elements["div-list-capas"].append(
      ...array.map((canvas, index) => {
        const $element = createNodeElement(
          `<div class="div_416usus802fqarxzzxp2" data-capa-index="${index}"><div class="img_p8g7bed9c3iqtbqsd4ig"><canvas></canvas></div><div class="div_uk3zuf6p0b3w7d34rprc"><button data-action="up"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-up"><path d="M18,15.5a1,1,0,0,1-.71-.29l-4.58-4.59a1,1,0,0,0-1.42,0L6.71,15.21a1,1,0,0,1-1.42-1.42L9.88,9.21a3.06,3.06,0,0,1,4.24,0l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,18,15.5Z"></path></svg></button><button data-action="down"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-angle-small-down"><path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"></path></svg></button><button data-action="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-svg-name="fi fi-rr-trash"><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"></path><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"></path><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg></button></div></div>`
        );
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

        usethis.values.canvas.array = usethis.values.canvas.array.filter(
          (_, index) => {
            return index != parseInt(capaIndex.getAttribute("data-capa-index"));
          }
        );

        usethis.functions.rewriteCanvas(
          $elements["img-canvas"],
          $elements.canvas,
          usethis.values.canvas.array
        );
      }

      if (action == "up") {
        const index = parseInt(capaIndex.getAttribute("data-capa-index"));
        const indexLimit = index - 1;
        const arrayCanvas = usethis.values.canvas.array;

        if (index == 0) {
          arrayCanvas.push(arrayCanvas.shift());
        } else {
          const canvas_now = arrayCanvas[index];
          const canvas_new = arrayCanvas[indexLimit];
          arrayCanvas[index] = canvas_new;
          arrayCanvas[indexLimit] = canvas_now;
        }

        usethis.functions.rewriteCanvas(
          $elements["img-canvas"],
          $elements.canvas,
          usethis.values.canvas.array
        );
        $elements["button-capas"].dispatchEvent(new CustomEvent("click"));
      }

      if (action == "down") {
        const index = parseInt(capaIndex.getAttribute("data-capa-index"));
        const indexLimit = index + 1;
        const arrayCanvas = usethis.values.canvas.array;

        if (index == arrayCanvas.length - 1) {
          arrayCanvas.unshift(arrayCanvas.pop());
        } else {
          const canvas_now = arrayCanvas[index];
          const canvas_new = arrayCanvas[indexLimit];
          arrayCanvas[index] = canvas_new;
          arrayCanvas[indexLimit] = canvas_now;
        }

        usethis.functions.rewriteCanvas(
          $elements["img-canvas"],
          $elements.canvas,
          usethis.values.canvas.array
        );
        $elements["button-capas"].dispatchEvent(new CustomEvent("click"));
      }

      $elements["select-number"].innerHTML = usethis.values.canvas.array
        .map((_, index, array) => {
          const option0 =
            index == 0 ? `<option value="-">0/${array.length}</option> ` : "";
          return `
            ${option0} 
            <option value="${index}">${index + 1}/${array.length}</option>
          `;
        })
        .join("");

      $elements["select-number"].selectedIndex =
        usethis.values.canvas.array.length;

      [usethis.values.canvas.focus] = usethis.values.canvas.array.slice(-1);

      if (useParams?.events?.change) {
        $element.dispatchEvent(
          new CustomEvent("_change", {
            detail: {
              canvas: () => $elements["img-canvas"],
            },
          })
        );
      }
    }
  });
  $elements["button-download"].addEventListener("click", () => {
    const dataURL = $elements["img-canvas"].toDataURL("image/png");
    const enlace = document.createElement("a");
    enlace.href = dataURL;
    enlace.download = `canvas-${Date.now()}.png`;
    enlace.click();
  });

  setTimeout(usethis.functions.resizeCanvas);
  addEventListener("resize", usethis.functions.resizeCanvas);
  return $element;
}
