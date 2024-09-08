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
