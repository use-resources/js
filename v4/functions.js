window.myResourceFunction = (function (_) {
  _.rand = function (...params) {
    const [max, min = 0] = params.reverse();
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };
  _.createElement = function (html, callback) {
    const template = document.createElement("div");
    template.innerHTML = html;
    const element = template.children[0] || "";
    template.innerHTML = "";

    if (typeof callback == "function") {
      callback(element);
    }

    return element;
  };
  _.createFragment = function (...childNodes) {
    const fragment = document.createDocumentFragment();
    fragment.append(...childNodes);
    return fragment;
  };
  _.objectElement = function (elements, attribute, remove = false) {
    return Array.from(elements).reduce((prev, curr) => {
      prev[curr.getAttribute(attribute)] = curr;
      if (remove) curr.removeAttribute(attribute);
      return prev;
    }, {});
  };
  _.styleElement = function (array, styles) {
    const elements = Array.isArray(array) ? array : [array];
    const entries = Object.entries(styles ?? {});

    elements.forEach((element) => {
      if (element instanceof Element) {
        entries.forEach(([key, value]) => {
          element.style[key] = value;
        });
      }
    });

    return elements;
  };
  _.replaceChildren = function (element, children = {}) {
    if (element instanceof Node) {
      Object.entries(children ?? {}).forEach(([key, value]) => {
        const query = element.querySelector(key);
        if (query) {
          query.replaceWith(value);
          if (value instanceof Element) {
            value.append(...query.childNodes);

            Array.from(query.attributes).forEach((attribute) => {
              value.setAttribute?.(
                attribute.name,
                `${value.getAttribute(attribute.name) || ""} ${
                  attribute.value
                }`.trim()
              );
            });
          }
        }
      });
    }

    return element;
  };
  _.copyToClipboard = function (text = "") {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.setAttribute("style", "position: fixed; top: 100%; left: 100%;");
      textarea.value = text;
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
  };
  _.countdown = function (number, object = {}) {
    const condition = (type) => {
      return Boolean(object instanceof Object ? object[type] : object);
    };

    const data = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };

    let seconds = parseInt(number);

    if (condition("day")) {
      data.day = Math.floor(seconds / (3600 * 24));
      seconds %= 3600 * 24;
    }

    if (condition("hour")) {
      data.hour = Math.floor(seconds / 3600);
      seconds %= 3600;
    }

    if (condition("minute")) {
      data.minute = Math.floor(seconds / 60);
      seconds %= 60;
    }

    if (condition("second")) {
      data.second = seconds;
    }

    return Object.freeze(data);
  };
  _.download = function (href = "", name = "") {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = href;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  _.getAspectRatio = function (currentDimensions, newDimensions) {
    const { width: currentWidth, height: currentHeight } = currentDimensions;
    const { width: newWidth, height: newHeight } = newDimensions;

    if (newWidth) {
      const scaleFactor = newWidth / currentWidth;
      return { width: newWidth, height: currentHeight * scaleFactor };
    } else if (newHeight) {
      const scaleFactor = newHeight / currentHeight;
      return { width: currentWidth * scaleFactor, height: newHeight };
    } else {
      return { width: currentWidth, height: currentHeight };
    }
  };
  _.getUUID = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  _.signal = function (initialValue) {
    const object = new Object();
    const map = new Map();
    let value = initialValue;

    Object.defineProperty(object, "value", {
      get: () => {
        return value;
      },
      set: (newValue) => {
        if (newValue !== value) {
          value = newValue;
          map.forEach((callback) => callback());
        }
      },
    });

    Object.defineProperty(object, "on", {
      value: (callback, immediate = true) => {
        const symbol = Symbol();

        const off = () => {
          return map.delete(symbol);
        };

        map.set(symbol, () => {
          callback(object.value, off);
        });

        if (Boolean(immediate)) {
          callback(object.value, off);
        }

        return off;
      },
      writable: false,
      enumerable: false,
      configurable: false,
    });

    Object.defineProperty(object, "off", {
      value: () => {
        map.clear();
        return map.size;
      },
      writable: false,
      enumerable: false,
      configurable: false,
    });

    Object.seal(object);
    return object;
  };
  _.event = function (array, type, callback, options = {}) {
    const elements = Array.isArray(array) ? array : [array];
    const callbackNull = () => {};

    return elements.map((element) => {
      if (element && typeof element.addEventListener === "function") {
        element.addEventListener(type, callback, options);
        return () => {
          element.removeEventListener(type, callback, options);
        };
      }

      return callbackNull;
    });
  };
  _.storage = function (storage, object, replace = true) {
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
  _.percentage = function (current, total) {
    return (parseFloat(current) / parseFloat(total)) * 100;
  };
  _.encodeToParams = function (query) {
    if (query instanceof Object) {
      const encodeKeyValue = (key, value) => {
        const encodeKey = encodeURIComponent(key);
        const encodeValue = encodeURIComponent(String(value));

        return `${encodeKey}=${encodeValue}`;
      };

      return Object.entries(query)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return value
              .map((value) => {
                return encodeKeyValue(key, value);
              })
              .join("&");
          }
          return encodeKeyValue(key, value);
        })
        .join("&");
    }

    return "";
  };
  _.encodeToInput = function (string = "") {
    const input = document.createElement("input");
    input.setAttribute("value", string);
    return input.outerHTML.slice(14, -2);
  };
  _.encodeToTextarea = function (string = "") {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = string;
    return textarea.innerHTML;
  };
  _.callbackTryCatch = function (
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
  _.callbackInterval = function callbackInterval(callback, time = 1000) {
    let i = 0;
    const interval = setInterval(() => {
      if (callback(++i, interval)) {
        clearInterval(interval);
      }
    }, parseInt(time) || 1000);
    callback(i, interval);
    return interval;
  };
  _.callbackTimeout = function (callback, initialTime = 0) {
    let timeout = null;
    const time = parseInt(initialTime) || 0;

    return (...parameters) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(callback, time, ...parameters);
    };
  };
  _.formData = function (object) {
    const formData = new FormData();
    Object.entries(object).forEach(function ([key, value]) {
      const array = Array.isArray(value) ? value : [value];
      formData.append(key, ...array);
    });
    return formData;
  };
  return _;
})({});
