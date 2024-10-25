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

class Cookie {
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
}

class ElementMakeMovable {
  constructor(element) {
    this._element = element;
    this._events = {};
  }

  on = (type, callback) => {
    this._events[type] = callback;
  };

  start = () => {
    const start = (element) => {
      var draggable = element;
      var initialX, initialY, currentX, currentY;

      const startDragging = (e) => {
        if (e.type === "touchstart") {
          initialX = e.touches[0].clientX - draggable.offsetLeft;
          initialY = e.touches[0].clientY - draggable.offsetTop;
        } else {
          initialX = e.clientX - draggable.offsetLeft;
          initialY = e.clientY - draggable.offsetTop;
        }

        if (typeof this._events.start == "function") {
          this._events.start({
            e,
            xy: {
              initial: {
                x: initialX,
                y: initialY,
              },
              current: {
                x: currentX,
                y: currentY,
              },
            },
            target: draggable,
          });
        }

        if (e.type === "mousedown") {
          e.preventDefault();
        }

        element.addEventListener("touchmove", drag, { passive: false });
        element.addEventListener("touchend", stopDragging);
        element.addEventListener("mousemove", drag);
        element.addEventListener("mouseup", stopDragging);
        element.addEventListener("mouseleave", stopDragging);
      };

      const drag = (e) => {
        e.preventDefault();

        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        if (typeof this._events.move == "function") {
          this._events.move({
            e,
            xy: {
              initial: {
                x: initialX,
                y: initialY,
              },
              current: {
                x: currentX,
                y: currentY,
              },
            },
            target: draggable,
          });
        }
      };

      const stopDragging = (e) => {
        if (typeof this._events.end == "function") {
          this._events.end({
            e,
            xy: {
              initial: {
                x: initialX,
                y: initialY,
              },
              current: {
                x: currentX,
                y: currentY,
              },
            },
            target: draggable,
          });
        }

        if (e.touches && e.touches.length > 0) return;
        element.removeEventListener("touchmove", drag, { passive: false });
        element.removeEventListener("touchend", stopDragging);
        element.removeEventListener("mousemove", drag);
        element.removeEventListener("mouseup", stopDragging);
        element.removeEventListener("mouseleave", stopDragging);
      };

      draggable.addEventListener("touchstart", startDragging, {
        passive: false,
      });
      draggable.addEventListener("mousedown", startDragging);
    };

    start(this._element);
  };
}

class EncodeTemplateString {
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
}
