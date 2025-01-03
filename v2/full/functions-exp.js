export default (function () {
  const w = {};
  w.rand = function (...params) {
    const [max, min = 0] = params.reverse();
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };
  w.createNodeElement = function (html) {
    const template = document.createElement("div");
    template.innerHTML = html;
    const element = template.children[0] || "";
    template.innerHTML = "";
    return element;
  };
  w.createNodeElements = function (html) {
    const template = document.createElement("div");
    template.innerHTML = html;
    const elements = [...template.children];
    template.innerHTML = "";
    return elements;
  };
  w.createObjectElement = function (elements, attribute, remove = false) {
    return Array.from(elements).reduce((prev, curr) => {
      prev[curr.getAttribute(attribute)] = curr;
      if (remove) curr.removeAttribute(attribute);
      return prev;
    }, {});
  };
  w.createNodeFragment = function (html) {
    const template = document.createElement("div");
    const fragment = document.createDocumentFragment();

    template.innerHTML = html;
    fragment.append(...template.children);

    return fragment;
  };
  w.replaceNodeChildren = function (element, children = {}) {
    const isAppend = (element) =>
      element instanceof Text ||
      element instanceof String ||
      element instanceof HTMLElement ||
      element instanceof DocumentFragment ||
      typeof render === "string" ||
      false;
    if (isAppend(element)) {
      element.querySelectorAll("[replace-node-children]").forEach((child) => {
        const childObj = children[child.getAttribute("replace-node-children")];
        if (isAppend(childObj)) {
          child.removeAttribute("replace-node-children");
          child.replaceWith(childObj);
          Array.from(child.attributes).forEach((attribute) => {
            childObj.setAttribute(
              attribute.name,
              `${childObj.getAttribute(attribute.name) || ""} ${
                attribute.value
              }`.trim()
            );
          });
        } else {
          child.remove();
        }
      });
    }
    return element;
  };
  w.copyToClipboard = function (text = "") {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.setAttribute(
        "style",
        "position: fixed; top: 0; left: 0; transform: translate(-100%);"
      );
      textarea.value = text;
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
  };
  w.resizeCanvasImage = async function (url, resizes) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(resizes)) return reject({ status: false, images: [] });
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.src = url;
      image.addEventListener("load", () => {
        const images = resizes.map((resize) => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const width = resize.both ?? resize.width;
          const height = resize.both ?? resize.height;
          canvas.width = width;
          canvas.height = height;
          const imgAspectRatio = image.width / image.height;
          const canvasAspectRatio = width / height;
          let drawWidth, drawHeight, offsetX, offsetY;
          if (imgAspectRatio > canvasAspectRatio) {
            drawWidth = image.height * canvasAspectRatio;
            drawHeight = image.height;
            offsetX = (image.width - drawWidth) / 2;
            offsetY = 0;
          } else {
            drawWidth = image.width;
            drawHeight = image.width / canvasAspectRatio;
            offsetX = 0;
            offsetY = (image.height - drawHeight) / 2;
          }
          ctx.drawImage(
            image,
            offsetX,
            offsetY,
            drawWidth,
            drawHeight,
            0,
            0,
            width,
            height
          );
          return {
            width: width,
            height: height,
            url: (type) => canvas.toDataURL(type || "image/png"),
            canvas,
          };
        });
        resolve({ status: true, images });
      });
      image.addEventListener("error", () => {
        reject({ status: false, images: [] });
      });
    });
  };
  w.convertSecondsToTime = function (seconds) {
    seconds = parseInt(seconds);
    return {
      hours: Math.floor(seconds / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: seconds % 60,
    };
  };
  w.getPercentage = function (current, total) {
    return Math.floor((parseInt(current) / parseInt(total)) * 100);
  };
  w.findInt = function (string, range = Infinity) {
    if (typeof string == "string") {
      string = range === Infinity ? string : string.slice(0, range);
      const number = parseInt(
        string
          .split("")
          .filter((int) => !isNaN(parseInt(int)))
          .join("")
      );
      return isNaN(number) ? "" : number;
    }
    return "";
  };
  w.styleElement = function (element, styles) {
    try {
      Object.keys(styles ?? {}).forEach(
        (key) => (element.style[key] = styles[key])
      );
      return element;
    } catch (error) {
      return element;
    }
  };
  w.downloadFile = function (url, name = "") {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  w.calculateAspectRatio = function (currentDimensions, newDimensions) {
    const { width: currentWidth, height: currentHeight } = currentDimensions;
    const { width: newWidth, height: newHeight } = newDimensions;
    if (newWidth && newHeight) {
      const scaleFactor = newWidth / currentWidth;
      return { width: newWidth, height: currentHeight * scaleFactor };
    } else if (newWidth) {
      const scaleFactor = newWidth / currentWidth;
      return { width: newWidth, height: currentHeight * scaleFactor };
    } else if (newHeight) {
      const scaleFactor = newHeight / currentHeight;
      return { width: currentWidth * scaleFactor, height: newHeight };
    } else {
      return { width: currentWidth, height: currentHeight };
    }
  };
  w.socketIO = function (url, name = "socketIO", array = []) {
    if (window.io) {
      const socket = io(url);
      Array.from(array).forEach((type) => {
        socket.on(type, (data) => {
          window.dispatchEvent(
            new CustomEvent(name, { detail: { from: type, data: data } })
          );
        });
      });
      return socket;
    }
    return null;
  };
  w.encodeQueryObject = function (query) {
    if (query instanceof Object) {
      return Array.from([query])
        .flat()
        .map((query) => {
          return Object.entries(query)
            .map((query) => {
              return [
                encodeURIComponent(query[0]),
                encodeURIComponent(query[1]),
              ].join("=");
            })
            .join("&");
        })
        .join("&");
    }
    return "";
  };
  w.findElementWithRetry = async function (query, limit = 100) {
    return new Promise((resolve, reject) => {
      let intervalLimit = 0;
      const interval = setInterval(() => {
        const requestDisableCors = document.querySelector(query);
        if (requestDisableCors || ++intervalLimit > limit) {
          clearInterval(interval);
          resolve(requestDisableCors);
        }
      });
    });
  };
  w.isURL = function (url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  w.getBase64Size = function (base64String) {
    const base64Data = base64String.replace(/^data:[a-z]+\/[a-z]+;base64,/, "");
    const base64Length = base64Data.length;
    const sizeInBytes =
      (base64Length * 3) / 4 -
      (base64Data.endsWith("==") ? 2 : base64Data.endsWith("=") ? 1 : 0);
    return sizeInBytes;
  };
  w.imageUrlToCanvas = function (url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas);
      };
      img.onerror = (err) => {
        reject(new Error("Failed to load image: " + err.message));
      };
      img.src = url;
    });
  };
  w.getFileNameWithoutExtension = function (filePath) {
    const fileNameWithExtension = filePath.split("/").pop();
    const fileNameParts = fileNameWithExtension.split(".");
    if (fileNameParts.length > 1) {
      fileNameParts.pop();
    }
    return fileNameParts.join(".");
  };
  w.toggleOptions = function (option = "", options = []) {
    const index = options.findIndex((_option) => _option == option);
    return options[index + 1] || options[0];
  };
  w.fetchWebElement = function (url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const $text = document.createElement("div");
          $text.innerHTML = text;
          resolve($text);
        })
        .catch(reject);
    });
  };
  w.getDominantColor = function (imgElement) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.src = imgElement.src;

      image.onload = function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        const imageData = context.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const pixels = imageData.data;
        const pixelCount = pixels.length / 4;

        let r = 0,
          g = 0,
          b = 0;

        for (let i = 0; i < pixels.length; i += 4) {
          r += pixels[i];
          g += pixels[i + 1];
          b += pixels[i + 2];
        }

        r = Math.round(r / pixelCount);
        g = Math.round(g / pixelCount);
        b = Math.round(b / pixelCount);

        const rgbToHex = (r, g, b) => {
          const toHex = (c) => c.toString(16).padStart(2, "0");
          return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        };

        const dominantColorHex = rgbToHex(r, g, b);
        resolve(dominantColorHex);
      };

      image.onerror = reject;
    });
  };
  w.getTextColorBasedOnBackground = function (hexColor) {
    const hexToRgb = (hex) => {
      let hexCleaned = hex.replace("#", "");
      if (hexCleaned.length === 3) {
        hexCleaned = hexCleaned
          .split("")
          .map((h) => h + h)
          .join("");
      }
      const r = parseInt(hexCleaned.substring(0, 2), 16);
      const g = parseInt(hexCleaned.substring(2, 4), 16);
      const b = parseInt(hexCleaned.substring(4, 6), 16);
      return { r, g, b };
    };

    const getBrightness = ({ r, g, b }) => {
      return r * 0.299 + g * 0.587 + b * 0.114;
    };

    const rgb = hexToRgb(hexColor);
    const brightness = getBrightness(rgb);

    return brightness > 128 ? "#000000" : "#FFFFFF";
  };
  w.isBackgroundTooLightForWhiteText = function (hexColor) {
    const hexToRgb = (hex) => {
      let hexCleaned = hex.replace("#", "");
      if (hexCleaned.length === 3) {
        hexCleaned = hexCleaned
          .split("")
          .map((h) => h + h)
          .join("");
      }
      const r = parseInt(hexCleaned.substring(0, 2), 16);
      const g = parseInt(hexCleaned.substring(2, 4), 16);
      const b = parseInt(hexCleaned.substring(4, 6), 16);
      return { r, g, b };
    };

    const getBrightness = ({ r, g, b }) => {
      return r * 0.299 + g * 0.587 + b * 0.114;
    };

    const rgb = hexToRgb(hexColor);
    const brightness = getBrightness(rgb);

    return brightness < 240;
  };
  w.darkenHexColor = function (hex, amount = 20) {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.max(0, r - amount);
    g = Math.max(0, g - amount);
    b = Math.max(0, b - amount);

    const newHex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;

    return newHex;
  };
  w.generateUUID = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  w.callbackTryCatch = function (
    callbackTry = null,
    callbackCatch = null,
    ...parameters
  ) {
    try {
      if (typeof callbackTry == "function") return callbackTry(...parameters);
      return callbackTry;
    } catch (error) {
      if (typeof callbackCatch == "function") return callbackCatch(error);
      return callbackCatch;
    }
  };
  w.shuffleArray = function (array = []) {
    const arrayCopy = array.slice();
    const output = [];

    while (arrayCopy.length) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      output.push(arrayCopy.splice(randomIndex, 1)[0]);
    }

    return output;
  };
  w.generateRandomStringFromArray = function (array = [], length = null) {
    return Array(parseInt(length) || 0)
      .fill(null)
      .map(() => array[rand(array.length - 1)])
      .join("");
  };
  w.observeValue = function (value) {
    const object = new Object();
    const unobserves = new Map();

    Object.defineProperty(object, "_value", {
      value: value,
      writable: true,
      enumerable: false,
      configurable: false,
    });
    Object.defineProperty(object, "value", {
      get: function () {
        return this._value;
      },
      set: function (value) {
        if (this._value !== value) {
          this._value = value;
          unobserves.forEach((callback) => callback());
        }
      },
    });
    Object.defineProperty(object, "observe", {
      value: (callback) => {
        const symbol = Symbol();

        const unobserve = () => {
          return unobserves.delete(symbol);
        };

        unobserves.set(symbol, () => {
          callback(object.value, unobserve);
        });

        callback(object.value, unobserve);

        return unobserve;
      },
      writable: false,
      enumerable: false,
      configurable: false,
    });
    Object.defineProperty(object, "unobserve", {
      value: () => {
        unobserves.clear();
        return unobserves.size;
      },
      writable: false,
      enumerable: false,
      configurable: false,
    });
    Object.seal(object);
    return object;
  };
  return w;
})();
