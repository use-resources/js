window.MyResourceFunction = (function (_) {
  _.rand = function (...params) {
    const [max, min = 0] = params.reverse();
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };
  _.createNodeElement = function (html) {
    const template = document.createElement("div");
    template.innerHTML = html;
    const element = template.children[0] || "";
    template.innerHTML = "";
    return element;
  };
  _.createNodeElements = function (html) {
    const template = document.createElement("div");
    template.innerHTML = html;
    const elements = [...template.children];
    template.innerHTML = "";
    return elements;
  };
  _.createObjectElement = function (elements, attribute, remove = false) {
    return Array.from(elements).reduce((prev, curr) => {
      prev[curr.getAttribute(attribute)] = curr;
      if (remove) curr.removeAttribute(attribute);
      return prev;
    }, {});
  };
  _.createNodeFragment = function (html) {
    const template = document.createElement("div");
    const fragment = document.createDocumentFragment();

    template.innerHTML = html;
    fragment.append(...template.children);

    return fragment;
  };
  _.replaceNodeChildren = function (element, children = {}) {
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
  _.fromSecondsToTime = function (seconds) {
    seconds = parseInt(seconds);
    return {
      hours: Math.floor(seconds / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: seconds % 60,
    };
  };
  _.styleElement = function (element, styles) {
    try {
      Object.keys(styles ?? {}).forEach(
        (key) => (element.style[key] = styles[key])
      );
      return element;
    } catch (error) {
      return element;
    }
  };
  _.downloadFile = function (url, name = "") {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  _.calculateAspectRatio = function (currentDimensions, newDimensions) {
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
  _.encodeQueryObject = function (query) {
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
  _.fetchWebElement = function (url) {
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
  _.generateUUID = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  _.observeValue = function (value) {
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
  return _;
})({});
