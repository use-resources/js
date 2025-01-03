window.useResourceClass = (function () {
  const w = {};
  w.RouteHashCallback = class {
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
  w.IntersectionObserverImage = class {
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
        image.setAttribute("src", image.getAttribute("data-src-observer"));
      });

      const add = arEventListerner(image, "load", () => {
        add();
        remove();
        image.style.opacity = 1;
      });

      image.setAttribute("src", image.getAttribute("data-src-observer"));
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
      this.images.forEach((image) =>
        this.intersectionObserver.unobserve(image)
      );
    };
  };
  w.RenderObjectElement = class {
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
  w.Cookie = class {
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
  w.EncodeTemplateString = class {
    static {
      this._input = document.createElement("input");
      this._textarea = document.createElement("textarea");
    }

    static toInput = (string = "") => {
      this._input.setAttribute("value", string);
      return this._input.outerHTML.slice(14, -2);
    };

    static toTextarea = (string = "") => {
      this._textarea.innerHTML = string;
      return this._textarea.innerHTML;
    };
  };
  w.TrimString = class {
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
  w.StorageSave = class {
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
  return w;
})();
