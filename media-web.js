class MediaWeb {
  static socket = io("https://l8qn2l7t-5004.brs.devtunnels.ms/");

  static {
    this.socket.on("connect", () => console.log("connect"));
  }

  static __generateUUID = () => {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const uuid = [...bytes]
      .map((byte, index) => {
        const hex = byte.toString(16).padStart(2, "0");
        if (index === 4 || index === 6 || index === 8 || index === 10) {
          return "-" + hex;
        }
        return hex;
      })
      .join("");

    return uuid;
  };

  static __socketon = (name, callback) => {
    this.socket.on(name, callback);
    return () => this.socket.off(name, callback);
  };

  static doodstream = (data) => {
    return new Promise((resolve, reject) => {
      const emit = {
        header: {
          from: "doodstream",
          id: this.__generateUUID(),
        },
        body: {
          url: data.url,
        },
      };

      const __socketon = this.__socketon("setInfo", (data) => {
        const dataJSONParse = JSON.parse(data);

        if (dataJSONParse.header.id == emit.header.id) {
          resolve(JSON.parse(data));
          __socketon();
        }
      });

      this.socket.emit("getInfo", JSON.stringify(emit));
    });
  };

  static streamwish = (data) => {
    return new Promise((resolve, reject) => {
      const emit = {
        header: {
          from: "streamwish",
          id: this.__generateUUID(),
        },
        body: {
          url: data.url,
        },
      };

      const __socketon = this.__socketon("setInfo", (data) => {
        const dataJSONParse = JSON.parse(data);

        if (dataJSONParse.header.id == emit.header.id) {
          resolve(JSON.parse(data));
          __socketon();
        }
      });

      this.socket.emit("getInfo", JSON.stringify(emit));
    });
  };

  static yourupload = (data) => {
    return new Promise((resolve, reject) => {
      const emit = {
        header: {
          from: "yourupload",
          id: this.__generateUUID(),
        },
        body: {
          url: data.url,
        },
      };

      const __socketon = this.__socketon("setInfo", (data) => {
        const dataJSONParse = JSON.parse(data);

        if (dataJSONParse.header.id == emit.header.id) {
          resolve(JSON.parse(data));
          __socketon();
        }
      });

      this.socket.emit("getInfo", JSON.stringify(emit));
    });
  };

  static youtube = (data) => {
    return new Promise((resolve, reject) => {
      const emit = {
        header: {
          from: "youtube",
          id: this.__generateUUID(),
        },
        body: data,
      };

      const __socketon = this.__socketon("setInfo", (data) => {
        const dataJSONParse = JSON.parse(data);

        if (dataJSONParse.header.id == emit.header.id) {
          resolve(JSON.parse(data));
          __socketon();
        }
      });

      this.socket.emit("getInfo", JSON.stringify(emit));
    });
  };
}
