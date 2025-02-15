window.MyResourceClass = (function (_) {
  _.MyArray = class {
    static range(start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      }

      const result = [];
      for (let i = start; i <= end; i++) {
        result.push(i);
      }

      return result;
    }
    static search(arr, predicate) {
      if (typeof predicate == "function") {
        for (let i = 0; i < arr.length; i++) {
          const predicateResult = predicate(arr[i], i, arr);
          if (predicateResult) {
            return [arr[i], i, predicateResult];
          }
        }
      }

      return [null, -1, null];
    }
    static copy(arr) {
      return [...arr];
    }
    static shuffle(arr) {
      const copy = [...arr];
      const array = [];

      while (copy.length) {
        const rand = Math.floor(Math.random() * copy.length);
        array.push(...copy.splice(rand, 1));
      }

      return array;
    }
    static array(input) {
      if (
        Array.isArray(input) ||
        (input && typeof input[Symbol.iterator] === "function")
      ) {
        return Array.from(input);
      }
      return [];
    }
    static newArray(arr, callback, includeFalsy = true) {
      const result = [];

      for (let i = 0; i < arr.length; i++) {
        const value = callback(arr[i], i, arr);
        if (includeFalsy || value) {
          result.push(value);
        }
      }

      return result;
    }
    static changeIndex(arr, index1, index2) {
      if (
        index1 >= 0 &&
        index1 < arr.length &&
        index2 >= 0 &&
        index2 < arr.length
      ) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
      }
    }
  };
  _.MyInt = class {
    static rand(...params) {
      const [max, min = 0] = params.reverse();
      return Math.floor(Math.random() * (max + 1 - min) + min);
    }

    static find(string, range = Infinity) {
      if (typeof string == "string") {
        return string
          .slice(0, range)
          .split("")
          .map((int) => (isNaN(parseInt(int)) ? "|" : int))
          .join("")
          .split("|")
          .filter((int) => parseInt(int))
          .map((int) => parseInt(int));
      }
      return [];
    }

    static percentage(current, total) {
      return (parseFloat(current) / parseFloat(total)) * 100;
    }
  };
  _.MyString = class {
    static {
      this._input = document.createElement("input");
    }

    static trim(text) {
      return {
        left: (symbol = "") => {
          if (text != "" && symbol != "") {
            while (text.startsWith(symbol)) text = text.slice(1);
          }
          return text;
        },
        right: (symbol = "") => {
          if (text != "" && symbol != "") {
            while (text.endsWith(symbol)) text = text.slice(0, -1);
          }
          return text;
        },
        both: (symbol = "") => {
          if (text != "" && symbol != "") {
            while (text.startsWith(symbol)) text = text.slice(1);
            while (text.endsWith(symbol)) text = text.slice(0, -1);
          }
          return text;
        },
      };
    }

    static encode(string) {
      return {
        toInput: () => {
          this._input.setAttribute("value", string);
          return this._input.outerHTML.slice(14, -2);
        },

        toTextarea: () => {
          const textarea = document.createElement("textarea");
          textarea.innerHTML = string;
          return textarea.innerHTML;
        },
      };
    }

    static uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r = (Math.random() * 16) | 0;
          const v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    }
  };
  _.MyElement = class {
    static create(html) {
      const template = document.createElement("div");
      template.innerHTML = html;

      return {
        one: (callback) => {
          const element = template.children[0] || "";
          template.innerHTML = "";
          callback?.(element);
          return element;
        },

        all: (callback) => {
          const elements = [...template.children];
          template.innerHTML = "";
          callback?.(elements);
          return elements;
        },

        fragment: (callback) => {
          const fragment = document.createDocumentFragment();
          fragment.append(...template.children);
          callback?.(fragment);
          return fragment;
        },
      };
    }
    static event(element, type, callback = null, attributes = {}) {
      element.addEventListener(type, callback, attributes);
      return () => element.removeEventListener(type, callback, attributes);
    }
    static replaceChildren(element, children = {}) {
      const isAppend = (element) => {
        return (
          element instanceof Text ||
          element instanceof String ||
          element instanceof Element ||
          element instanceof HTMLElement ||
          element instanceof DocumentFragment ||
          typeof render === "string" ||
          false
        );
      };

      if (isAppend(element)) {
        if (typeof children == "function") {
          children = children(element);
        }

        Object.entries(children ?? {}).forEach((entries) => {
          const child = element.querySelector(entries[0]);
          if (child) {
            child.replaceWith(entries[1]);
            if (isAppend(entries[1])) {
              Array.from(child.attributes).forEach((attribute) => {
                entries[1].setAttribute?.(
                  attribute.name,
                  `${entries[1].getAttribute(attribute.name) || ""} ${
                    attribute.value
                  }`.trim()
                );
              });
            }
          }
        });
      }

      return element;
    }

    static objectChildren(elements, attribute, remove = false) {
      return Array.from(elements).reduce((prev, curr) => {
        prev[curr.getAttribute(attribute)] = curr;
        if (remove) curr.removeAttribute(attribute);
        return prev;
      }, {});
    }

    static style(element, styles = {}) {
      try {
        Object.keys(styles ?? {}).forEach(
          (key) => (element.style[key] = styles[key])
        );
        return element;
      } catch (error) {
        return element;
      }
    }
  };
  _.MyColor = class {
    static toRgb(object = {}) {
      if (object?.hex) {
        let hex = object.hex;
        hex = hex.replace(/^#/, "");
        hex = hex.slice(0, 6);

        if (hex.length === 3) {
          hex = hex
            .split("")
            .map((char) => char + char)
            .join("");
        }

        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        return {
          string: `rgb(${r}, ${g}, ${b})`,
          array: [r, g, b],
        };
      }

      if (object?.color) {
        const hex = _.MyColor.toHex({ color: object.color });
        return _.MyColor.toRgb({ hex });
      }

      return {
        string: "",
        rgb: [],
      };
    }

    static toHex(object = {}) {
      if (object?.rgb) {
        const [r = 0, g = 0, b = 0] = Array.isArray(object.rgb)
          ? object.rgb
          : [];

        return `#${((1 << 24) | (r << 16) | (g << 8) | b)
          .toString(16)
          .slice(1)
          .toUpperCase()}`;
      }

      if (object?.color) {
        const ctx = document.createElement("canvas").getContext("2d");
        ctx.fillStyle = object.color;
        return ctx.fillStyle.toUpperCase();
      }

      return "";
    }

    static toDark(object = {}, amount = 20) {
      if (object?.hex) {
        const rgb = _.MyColor.toRgb({ hex: object.hex });
        return _.MyColor.toDark({ rgb: rgb.array }, amount);
      }

      if (object?.color) {
        const rgb = _.MyColor.toRgb({ color: object.color });
        return _.MyColor.toDark({ rgb: rgb.array }, amount);
      }

      if (object?.rgb) {
        let [r = 0, g = 0, b = 0] = Array.isArray(object.rgb) ? object.rgb : [];

        r = Math.max(0, r - amount);
        g = Math.max(0, g - amount);
        b = Math.max(0, b - amount);

        return _.MyColor.toHex({ rgb: [r, g, b] });
      }

      return "";
    }
  };
  _.MyImage = class {
    static async canvas(url) {
      return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = image.width;
          canvas.height = image.height;

          ctx.drawImage(image, 0, 0);
          resolve({
            canvas,
            ctx,
            url,
          });
        };

        image.onerror = reject;

        image.crossOrigin = "Anonymous";
        image.src = url;
      });
    }
    static async resize(url, resizes) {
      return new Promise((resolve, reject) => {
        if (!Array.isArray(resizes)) {
          return reject({ status: false, images: [] });
        }

        const image = new Image();

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
              canvas,
            };
          });
          resolve({ status: true, images });
        });

        image.addEventListener("error", () => {
          reject({ status: false, images: [] });
        });

        image.crossOrigin = "Anonymous";
        image.src = url;
      });
    }
    static aspectRatio(currentDimensions, newDimensions) {
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
    }
  };
  _.RouteHashCallback = class {
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
      this._params = {};

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

    params = (key = null) => {
      return typeof key == "string"
        ? this._params[key]
        : JSON.parse(JSON.stringify(this._params));
    };
  };
  _.RenderObjectElement = class {
    constructor(objectElement = {}, mode = "replace") {
      this._mode = mode;
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

    set(object, mode = null) {
      mode = mode || this._mode;

      if (mode == "replace") {
        Object.keys(object).forEach((key) => {
          const savedElementKey = this.savedElement[key];
          if (savedElementKey) {
            savedElementKey.status = object[key];

            if (savedElementKey.status) {
              if (!savedElementKey.element.parentElement) {
                savedElementKey.elementText.replaceWith(
                  savedElementKey.element
                );
              }
            } else {
              if (savedElementKey.element.parentElement) {
                savedElementKey.element.replaceWith(
                  savedElementKey.elementText
                );
              }
            }
          }
        });
      }

      if (mode == "display") {
        Object.entries(object).forEach((entries) => {
          if (this.savedElement[entries[0]]) {
            this.savedElement[entries[0]].element.style.display = entries[1]
              ? ""
              : "none";
          }
        });
      }
    }
  };
  _.Cookie = class {
    static set(name, value, options = {}) {
      let { lifetime = 0, path = "/", domain = "", samesite = "Lax" } = options;

      let expires = "";
      if (lifetime) {
        const date = new Date();
        date.setTime(date.getTime() + lifetime * 1000);
        expires = "; expires=" + date.toUTCString();
      }

      document.cookie = `${name}=${encodeURIComponent(
        value || ""
      )}${expires}; path=${path}; domain=${domain}; samesite=${samesite}`;
    }

    static get(name = "") {
      const cookies = document.cookie.split("; ");
      if (name === "") {
        return cookies.reduce((acc, cookie) => {
          const [key, value] = cookie.split("=");
          acc[key] = decodeURIComponent(value);
          return acc;
        }, {});
      } else {
        const cookie = cookies.find((cookie) => cookie.startsWith(name + "="));
        return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
      }
    }

    static remove(name, options) {
      let { path = "/", domain = "" } = options;

      const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = `${name}=; expires=${expires}; path=${path}; domain=${domain};`;
    }
  };
  _.EncodeTemplateString = class {
    static {
      this._input = document.createElement("input");
    }

    static toInput = (string = "") => {
      this._input.setAttribute("value", string);
      return this._input.outerHTML.slice(14, -2);
    };

    static toTextarea = (string = "") => {
      const textarea = document.createElement("textarea");
      textarea.innerHTML = string;
      return textarea.innerHTML;
    };
  };
  _.TrimString = class {
    static left = (text = "", symbol = "") => {
      if (text != "" && symbol != "") {
        while (text.startsWith(symbol)) text = text.slice(1);
      }
      return text;
    };
    static right = (text = "", symbol = "") => {
      if (text != "" && symbol != "") {
        while (text.endsWith(symbol)) text = text.slice(0, -1);
      }
      return text;
    };
    static both = (text = "", symbol = "") => {
      if (text != "" && symbol != "") {
        while (text.startsWith(symbol)) text = text.slice(1);
        while (text.endsWith(symbol)) text = text.slice(0, -1);
      }
      return text;
    };
  };
  _.StorageSave = class {
    static single = (storage, name, callback, value = null) => {
      if (!storage.getItem(name)) {
        storage.setItem(
          name,
          value instanceof Object ? JSON.stringify(value) : value
        );
      }

      storage.setItem(
        name,
        ((callback) =>
          callback instanceof Object ? JSON.stringify(callback) : callback)(
          callback(storage.getItem(name))
        )
      );

      return storage.getItem(name);
    };

    static group = (storage, object, replace = true) => {
      return Object.entries(object).reduce((prev, curr) => {
        const status = replace || !storage.getItem(curr[0]);

        if (status) {
          storage.setItem(
            curr[0],
            curr[1] instanceof Object ? JSON.stringify(curr[1]) : curr[1]
          );
        }

        prev[curr[0]] = status;
        return prev;
      }, {});
    };
  };
  return _;
})({});
