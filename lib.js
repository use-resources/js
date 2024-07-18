window.dataLib = {};

function rand(...params) {
  const [max, min = 0] = params.reverse();
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function createNodeElement(html) {
  const template = document.createElement("div");
  template.innerHTML = html;
  const element = template.children[0] ?? "";
  template.innerHTML = "";

  if (element.tagName == "TEMPLATE") {
    const fragment = document.createDocumentFragment();
    fragment.append(...element.content.children);
    return fragment;
  }

  return element;
}

function createObjectElement(elements, attribute, remove = false) {
  return Array.from(elements).reduce((prev, curr) => {
    prev[curr.getAttribute(attribute)] = curr;
    if (remove) curr.removeAttribute(attribute);

    return prev;
  }, {});
}

function createNodeFragment(...elements) {
  const fragment = document.createDocumentFragment();

  elements.forEach((element) => {
    if (typeof element == "function") fragment.append(element());
    else fragment.append(element);
  });

  return fragment;
}

function replaceNodeChildren(element, children = {}, attribute = false) {
  const isAppend = (element) =>
    element instanceof Text ||
    element instanceof String ||
    element instanceof HTMLElement ||
    element instanceof DocumentFragment ||
    typeof render === "string" ||
    false;

  if (isAppend(element)) {
    element.querySelectorAll("[data-node-children]").forEach((child) => {
      const childObj = children[child.getAttribute("data-node-children")];
      if (isAppend(childObj)) {
        child.removeAttribute("data-node-children");
        child.replaceWith(childObj);

        if (attribute) {
          Array.from(child.attributes).forEach((attribute) =>
            childObj.setAttribute(attribute.name, attribute.value)
          );
        }
      } else {
        child.remove();
      }
    });
  }

  return element;
}

function copyToClipboard(text = "") {
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
}

function trimString(text = "") {
  const left = (symbol = "") => {
    if ((text != "", symbol != "")) {
      while (text.startsWith(symbol)) text = text.slice(1);
    }
    return text;
  };

  const right = (symbol = "") => {
    if ((text != "", symbol != "")) {
      while (text.endsWith(symbol)) text = text.slice(0, -1);
    }
    return text;
  };

  const both = (symbol = "") => {
    if ((text != "", symbol != "")) {
      while (text.startsWith(symbol)) text = text.slice(1);
      while (text.endsWith(symbol)) text = text.slice(0, -1);
    }
    return text;
  };

  return { left, right, both };
}

class RenderRouteHash {
  constructor() {
    this._params = [];
    this._routes = [];
  }
  param(route = "", callback = false) {
    const dinamic = route.includes("/:");
    route = trimString(route).both("/");
    this._routes.push({ route, callback, dinamic });
  }
  render() {
    const params = {};
    this._params = trimString(location.hash.slice(1)).both("/");

    const findRoute = this._routes.find((route) => {
      if (route.dinamic) {
        const splitRoute = route.route.split("/");
        const splitParam = this._params.split("/");

        if (splitRoute.length == splitParam.length) {
          for (let i = 0; i < splitRoute.length; i++) {
            const textRoute = splitRoute[i].trim();
            if (textRoute.startsWith(":"))
              params[textRoute.slice(1)] = splitParam[i];
            else if (textRoute !== splitParam[i]) return false;
          }

          return route;
        }
      } else if (route.route == this._params) {
        return route;
      } else if (route.route == "*") {
        return route;
      }

      return false;
    });

    if (findRoute) {
      sessionStorage.setItem("params", JSON.stringify(params));
      window.dataLib.params = params;
      return findRoute.callback(params);
    }
  }
}

class RenderObjectElement {
  constructor(objectElement = {}) {
    this.savedElement = Object.keys(objectElement).reduce((prev, curr) => {
      prev[curr] = {
        element: objectElement[curr],
        elementText: document.createTextNode(""),
        parent: objectElement[curr].parentElement,
        status: true,
      };
      return prev;
    }, {});
  }

  set(object) {
    Object.keys(object).forEach((key) => {
      const savedElementKey = this.savedElement[key];
      if (savedElementKey) {
        savedElementKey.status = object[key];

        if (savedElementKey.status) {
          if (!savedElementKey.element.parentElement) {
            savedElementKey.elementText.replaceWith(savedElementKey.element);
          }
        } else {
          if (savedElementKey.element.parentElement) {
            savedElementKey.element.replaceWith(savedElementKey.elementText);
          }
        }
      }
    });
  }
}

const encodeInput = (string = "") => {
  if (string.trim() != "") {
    const input = document.createElement("input");
    input.setAttribute("value", string);
    return input.outerHTML.slice(14, -2);
  }

  return string;
};

const encodeTextarea = (string = "") => {
  if (string.trim() != "") {
    const textTarea = document.createElement("textarea");
    textTarea.innerHTML = string;
    return textTarea.innerHTML;
  }

  return string;
};

function defineVal(value) {
  const object = new Object();
  const customEvent = new CustomEvent("_value");
  const nodeVal = document.createTextNode("");
  const unobserves = [];

  const listener = (callback) => {
    const listener = () => callback(object.value);
    const observe = () => nodeVal.addEventListener("_value", listener);
    const unobserve = () => nodeVal.removeEventListener("_value", listener);

    listener();
    observe();

    unobserves.push(unobserve);
    return () => unobserve();
  };

  const listeners = () => {
    unobserves.forEach((unobserve) => unobserve());
  };

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
        nodeVal.dispatchEvent(customEvent);
      }
    },
  });

  Object.defineProperty(object, "observe", {
    value: listener,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(object, "unobserve", {
    value: listeners,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.seal(object);
  return object;
}

function invertSign(num) {
  if (typeof num == "string" || typeof num == "number") {
    num = parseInt(num);
    if (num > 0 || num < 0) return -num;
  }

  return 0;
}

function genereteCode(length = 7) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = upper.toLocaleLowerCase();
  const number = "1234567890";

  const generate = [upper, lower, number].join("");
  return Array(length)
    .fill(null)
    .map(() => generate[rand(generate.length - 1)])
    .join("");
}

function resizeImage(imageUrl, width, height, callback) {
  const img = new Image();
  img.crossOrigin = "Anonymous"; // Necesario si la imagen está en un dominio diferente
  img.src = imageUrl;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Redimensionar el canvas
    canvas.width = width;
    canvas.height = height;

    // Calcular la relación de aspecto de la imagen y del canvas
    const imgAspectRatio = img.width / img.height;
    const canvasAspectRatio = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgAspectRatio > canvasAspectRatio) {
      // La imagen es más ancha que el canvas
      drawWidth = img.height * canvasAspectRatio;
      drawHeight = img.height;
      offsetX = (img.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      // La imagen es más alta que el canvas
      drawWidth = img.width;
      drawHeight = img.width / canvasAspectRatio;
      offsetX = 0;
      offsetY = (img.height - drawHeight) / 2;
    }

    // Dibujar la imagen en el canvas con el ajuste de cover
    ctx.drawImage(
      img,
      offsetX,
      offsetY,
      drawWidth,
      drawHeight,
      0,
      0,
      width,
      height
    );

    // Obtener la imagen redimensionada
    const resizedImageUrl = canvas.toDataURL("image/png");

    //image.get()
    //image.canvas

    // Ejecutar la función de callback con la URL de la imagen redimensionada
    callback(resizedImageUrl);
  };

  img.onerror = () => {
    console.error("Error al cargar la imagen.");
  };
}

async function resizeCanvasImage(url, resizes) {
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
          url: (extension) => canvas.toDataURL(`image/${extension ?? "png"}`),
          canvas,
        };
      });

      resolve({ status: true, images });
    });

    image.addEventListener("error", () => {
      reject({ status: false, images: [] });
    });
  });
}

function convertSecondsToTime(seconds) {
  seconds = parseInt(seconds);

  return {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

function getPercentage(current, total) {
  return Math.floor((parseInt(current) / parseInt(total)) * 100);
}

function storageJSON(storage, name, callback) {
  try {
    storage.setItem(
      name,
      JSON.stringify(callback(JSON.parse(storage.getItem(name) ?? "null")))
    );
  } catch (error) {
    console.log(error);
  }
}

function isObjectValue(object, string) {
  object = { ...object };
  const array = string.split(".");

  return !array.some((string) => {
    object = object[string];
    return object === undefined;
  });
}

function objectValue(object, string, alternative = undefined) {
  object = { ...object };
  const array = string.split(".");

  return !array.some((string) => {
    object = object[string];
    return object === undefined;
  })
    ? object
    : alternative;
}

function findInt(string, range = Infinity) {
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
}

function normalizeString(str) {
  const normalizationMap = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    Ǎ: "A",
    Ǻ: "A",
    Ȁ: "A",
    Ȃ: "A",
    Ḁ: "A",
    Ạ: "A",
    Ả: "A",
    Ấ: "A",
    Ầ: "A",
    Ẩ: "A",
    Ẫ: "A",
    Ậ: "A",
    Ắ: "A",
    Ằ: "A",
    Ẳ: "A",
    Ẵ: "A",
    Ặ: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    ā: "a",
    ă: "a",
    ą: "a",
    ǎ: "a",
    ǻ: "a",
    ȁ: "a",
    ȃ: "a",
    ḁ: "a",
    ạ: "a",
    ả: "a",
    ấ: "a",
    ầ: "a",
    ẩ: "a",
    ẫ: "a",
    ậ: "a",
    ắ: "a",
    ằ: "a",
    ẳ: "a",
    ẵ: "a",
    ặ: "a",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    Ȅ: "E",
    Ȇ: "E",
    Ḕ: "E",
    Ḗ: "E",
    Ẹ: "E",
    Ẻ: "E",
    Ẽ: "E",
    Ế: "E",
    Ề: "E",
    Ể: "E",
    Ễ: "E",
    Ệ: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    ȅ: "e",
    ȇ: "e",
    ḕ: "e",
    ḗ: "e",
    ẹ: "e",
    ẻ: "e",
    ẽ: "e",
    ế: "e",
    ề: "e",
    ể: "e",
    ễ: "e",
    ệ: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    Ǐ: "I",
    Ȉ: "I",
    Ȋ: "I",
    Ḭ: "I",
    Ḯ: "I",
    Ỉ: "I",
    Ị: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    ǐ: "i",
    ȉ: "i",
    ȋ: "i",
    ḭ: "i",
    ḯ: "i",
    ỉ: "i",
    ị: "i",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    Ǒ: "O",
    Ȍ: "O",
    Ȏ: "O",
    Ȫ: "O",
    Ȭ: "O",
    Ȯ: "O",
    Ȱ: "O",
    Ọ: "O",
    Ỏ: "O",
    Ố: "O",
    Ồ: "O",
    Ổ: "O",
    Ỗ: "O",
    Ộ: "O",
    Ớ: "O",
    Ờ: "O",
    Ở: "O",
    Ỡ: "O",
    Ợ: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    ō: "o",
    ŏ: "o",
    ő: "o",
    ǒ: "o",
    ȍ: "o",
    ȏ: "o",
    ȫ: "o",
    ȭ: "o",
    ȯ: "o",
    ȱ: "o",
    ọ: "o",
    ỏ: "o",
    ố: "o",
    ồ: "o",
    ổ: "o",
    ỗ: "o",
    ộ: "o",
    ớ: "o",
    ờ: "o",
    ở: "o",
    ỡ: "o",
    ợ: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    Ǔ: "U",
    Ǖ: "U",
    Ǘ: "U",
    Ǚ: "U",
    Ǜ: "U",
    Ȕ: "U",
    Ȗ: "U",
    Ṳ: "U",
    Ṵ: "U",
    Ṷ: "U",
    Ụ: "U",
    Ủ: "U",
    Ứ: "U",
    Ừ: "U",
    Ử: "U",
    Ữ: "U",
    Ự: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    ǔ: "u",
    ǖ: "u",
    ǘ: "u",
    ǚ: "u",
    ǜ: "u",
    ȕ: "u",
    ȗ: "u",
    ṳ: "u",
    ṵ: "u",
    ṷ: "u",
    ụ: "u",
    ủ: "u",
    ứ: "u",
    ừ: "u",
    ử: "u",
    ữ: "u",
    ự: "u",
    ñ: "n",
  };

  return str
    .split("")
    .map((char) => normalizationMap[char] || char)
    .join("");
}

function styleElement(element, styles) {
  Object.keys(styles ?? {}).forEach(
    (key) => (element.style[key] = styles[key])
  );
  return element;
}

async function getLIP() {
  try {
    const rtcPeerConnection = new RTCPeerConnection({ iceServers: [] });
    const rtcDataChannel = rtcPeerConnection.createDataChannel("ipChannel");

    const connectionPromise = new Promise((resolve) => {
      rtcPeerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          if (event.candidate.address) {
            resolve(event.candidate.address);
          } else {
            const ipRegex = /(?:\d{1,3}\.){3}\d{1,3}/;
            const match = ipRegex.exec(event.candidate.candidate);
            if (match) {
              resolve(match[0]);
            }
          }
        }
      };
    });

    rtcPeerConnection
      .createOffer()
      .then((offer) => rtcPeerConnection.setLocalDescription(offer));

    const ipLocal = await connectionPromise;
    return ipLocal;
  } catch (error) {
    console.error("Error al obtener la IP local:", error);
    return null;
  }
}

function downloadFile(url, name = "") {
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function calculateAspectRatio(currentDimensions, newDimensions) {
  const { width: currentWidth, height: currentHeight } = currentDimensions;
  const { width: newWidth, height: newHeight } = newDimensions;

  if (newWidth && newHeight) {
    const scaleFactor = newWidth / currentWidth;
    return {
      width: newWidth,
      height: currentHeight * scaleFactor,
    };
  } else if (newWidth) {
    const scaleFactor = newWidth / currentWidth;
    return {
      width: newWidth,
      height: currentHeight * scaleFactor,
    };
  } else if (newHeight) {
    const scaleFactor = newHeight / currentHeight;
    return {
      width: currentWidth * scaleFactor,
      height: newHeight,
    };
  } else {
    return {
      width: currentWidth,
      height: currentHeight,
    };
  }
}

function socketIO(url, name = "socketIO", array = []) {
  const socket = io(url);

  Array.from(array).forEach((type) => {
    socket.on(type, (data) => {
      try {
          data = JSON.parse( data )
      } catch (error) {
          //console.log(error);  
      }
      window.dispatchEvent(
        new CustomEvent(name, {
          detail: {
            from: type,
            data: data,
          },
        })
      );
    });
  });

  return socket;
}

function encodeQueryObject(query) {
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
}

class IntersectionObserverImage {
  static intersectionObserver = null;
  static images = [];

  static {
    this.intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            observer.unobserve(image);
            this.__load(image);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
  }

  static __load = (image) => {
    let loop = 0;

    const arEventListerner = (element, type, callback) => {
      element.addEventListener(type, callback);
      return () => element.removeEventListener(type, callback);
    };

    const remove = arEventListerner(image, "error", () => {
      if (++loop > 3) return remove();
      image.setAttribute("src", image.getAttribute("data-src"));
    });

    const add = arEventListerner(image, "load", () => {
      add();
      remove();
      image.style.opacity = 1;
    });

    image.setAttribute("src", image.getAttribute("data-src"));
  };

  static load = (element, observe = true) => {
    if (element.tagName == "IMG") {
      element.style.opacity = 0;
      if (observe) {
        this.images.push(element);
        this.intersectionObserver.observe(element);
        return () => this.intersectionObserver.unobserve(element);
      } else this.__load(element);
    }

    return null;
  };

  static clear = () => {
    this.images.forEach((image) => this.intersectionObserver.unobserve(image));
  };
}

const findElementWithRetry = async (query, limit = 100) => {
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

function isURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function addLeadingZeros(number, totalDigits = 5) {
  return number.toString().padStart(totalDigits, "0");
}

function storageObject(storage, object, replace = true) {
  Object.entries(object).forEach((object) => {
    if (!replace && storage.getItem(object[0])) return;
    storage.setItem(object[0], object[1]);
  });
}

class RouteHashCallback {
  constructor() {
    this._params = {};
    this._set = [];
  }

  __hash = (string) => {
    const array = string.split("/").filter((string) => string);
    array[0] = "#";
    return array;
  };

  get = () => {
    const hash = this.__hash(location.hash || "#/");
    const exists = this._set.find((set) => {
      if (set.all != -1) {
        return (location.hash || "#/").startsWith(
          set.hash.arrayString.slice(0, set.all).join("/")
        );
      }

      if (set.hash.arrayObject.length == hash.length) {
        const valid = hash.every((name, i) => {
          if (set.hash.arrayObject[i].status) {
            this._params[set.hash.arrayObject[i].name] = name;
            return true;
          }

          return name === set.hash.arrayObject[i].name;
        });

        return valid;
      }

      return false;
    });

    if (exists) {
      if (typeof exists.callback == "function") {
        return exists.callback(this._params);
      }
    }

    return null;
  };

  set = (array) => {
    this._set = array.map((object) => {
      const array = this.__hash(`#/${object.hash}`);
      let all = -1;

      return {
        hash: {
          arrayObject: array.map((string, index) => {
            if (all == -1 && string == "*") all = index;

            return {
              status: string.startsWith(":"),
              name: string.startsWith(":") ? string.slice(1) : string,
            };
          }),
          arrayString: array,
        },
        callback: object.callback,
        all,
      };
    });
  };

  params = () => {
    return this._params;
  };
}

