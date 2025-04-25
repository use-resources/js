window.myResourceClass = (function (_) {
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
    static array(array = []) {
      if (
        Array.isArray(array) ||
        (array && typeof array[Symbol.iterator] === "function")
      ) {
        return Array.from(array);
      }
      return [];
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
    static split(string, initialArray = []) {
      const array = Array.from(initialArray);

      const reduce = array.reduce((prev, curr) => {
        string.replaceAll(curr, (match, index, indexMatch, stringMatch) => {
          const key = stringMatch ? indexMatch : index;
          const value = stringMatch
            ? indexMatch + index.length
            : index + match.length;

          prev[key] = value;

          return "";
        });

        return prev;
      }, {});

      return Array.from(string).reduce(
        (prev, curr, index, arr) => {
          prev.some = Object.entries(reduce).some(([key, value]) => {
            return parseInt(key) <= index && index < value;
          });

          if (!prev.some) {
            prev.string += curr;
            prev.add = true;
          }

          if ((prev.add && prev.some) || !arr[index + 1]) {
            prev.array.push(prev.string);
            prev.string = "";
            prev.add = false;
          }

          return prev;
        },
        {
          string: "",
          array: [],
          some: false,
          add: false,
        }
      ).array;
    }
    static map(arr, callback, includeFalsy = true) {
      const result = [];

      for (let i = 0; i < arr.length; i++) {
        const value = callback(arr[i], i, arr);
        if (includeFalsy || value) {
          result.push(value);
        }
      }

      return result;
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
        const hex = this.toHex({ color: object.color });
        return this.toRgb({ hex });
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
        const rgb = this.toRgb({ hex: object.hex });
        return this.toDark({ rgb: rgb.array }, amount);
      }

      if (object?.color) {
        const rgb = this.toRgb({ color: object.color });
        return this.toDark({ rgb: rgb.array }, amount);
      }

      if (object?.rgb) {
        let [r = 0, g = 0, b = 0] = Array.isArray(object.rgb) ? object.rgb : [];

        r = Math.max(0, r - amount);
        g = Math.max(0, g - amount);
        b = Math.max(0, b - amount);

        return this.toHex({ rgb: [r, g, b] });
      }

      return "";
    }
  };
  _.MyImage = class {
    static async canvas(url) {
      return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
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
  };
  _.Signal = class {
    constructor() {
      this._map = new Map();
    }

    on(type, callback) {
      if (typeof type != "string") {
        return null;
      }

      const map = this._map;
      const symbol = Symbol();

      const off = () => {
        return map.delete(symbol);
      };

      map.set(symbol, {
        type,
        symbol,
        callback: (value) => {
          callback(value, off);
        },
      });

      return off;
    }

    off(type) {
      const map = this._map;

      if (typeof type != "string") {
        map.clear();
        return;
      }

      Array.from(map.keys()).forEach((key) => {
        const object = map.get(key);

        if (object.type === type) {
          map.delete(key);
        }
      });
    }

    dispatch(type, value) {
      if (typeof type != "string") {
        return false;
      }

      const map = this._map;

      map.forEach((object) => {
        if (object.type === type) {
          object.callback(value);
        }
      });

      return true;
    }
  };
  _.Trim = class {
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
  _.MatchPath = class {
    constructor() {
      this._params = {};
      this._set = [];
    }

    _path = (string) => {
      if (!string) {
        return [""];
      }

      const array = string.split("/").filter(Boolean);

      if (!array.length) {
        return [""];
      }

      return array;
    };

    get = (match = "") => {
      this._params = {};

      const path = this._path(match);
      const exists = this._set.find((set) => {
        if (set.all != -1) {
          const stringFirst = path.join("/").concat("/");
          const stringSecond = set.path.arrayString
            .slice(0, set.all)
            .join("/")
            .concat("/");

          return stringFirst.startsWith(stringSecond) || stringSecond == "/";
        }

        if (set.path.arrayObject.length == path.length) {
          const valid = path.every((name, i) => {
            if (set.path.arrayObject[i].status) {
              this._params[set.path.arrayObject[i].name] = name;
              return true;
            }

            return name === set.path.arrayObject[i].name;
          });

          return valid;
        }

        return false;
      });

      return {
        status: Boolean(exists),
        data: exists?.data ?? null,
        params: this.params(),
      };
    };

    set = (key, array = []) => {
      this._set = array.map((object) => {
        const array = this._path(object[key]);
        let all = -1;

        return {
          data: object,
          path: {
            arrayObject: array.map((string, index) => {
              if (all == -1 && string == "*") all = index;

              return {
                status: string.startsWith(":"),
                name: string.startsWith(":") ? string.slice(1) : string,
              };
            }),
            arrayString: array,
          },
          all,
        };
      });
    };

    params = () => {
      return { ...this._params };
    };
  };
  return _;
})({});
