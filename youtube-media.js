class YoutubeMedia {
  constructor() {
    this._id = null;
    this._token = null;
    this._credentials = null;
    this._formatList = [];

    this.__token(null);
  }

  async __token() {
    return await fetch(
      `https://api-fetch.victor01sp.com/get.php?url=https://y2meta.app/es29/converter-youtube`
    )
      .then((res) => res.text())
      .then((text) => {
        const $text = document.createElement("div");
        $text.innerHTML = text;

        Array.from($text.querySelectorAll("img")).forEach((img) => {
          img.removeAttribute("src");
        });

        Array.from($text.querySelectorAll("script")).forEach((script) => {
          if (script.innerHTML.includes("var client_token=")) {
            const scriptFunction = new Function(
              [script.innerHTML, "return client_token"].join(";")
            );
            const client_token = scriptFunction();

            this._token = client_token;
          }
        });
        return this._token;
      });
  }

  async __list(token, id) {
    //if (this._credentials != null) return this._formatList;

    const formData = new FormData();
    formData.append("url", `https://www.youtube.com/watch?v=${id}`);
    formData.append("q_auto", "1");
    formData.append("ajax", "1");
    formData.append("token", token);

    return await fetch(
      "https://api-fetch.victor01sp.com/post.php?url=https://y2meta.app/converter/ajax",
      {
        method: "POST",
        headers: {
          headers: JSON.stringify([
            "Content-Type: application/x-www-form-urlencoded",
            "X-Requested-Key: de0cfuirtgf67a",
            "X-Requested-With: XMLHttpRequest",
          ]),
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((json) => {
        const $text = document.createElement("div");
        $text.innerHTML = json.result;
        Array.from($text.querySelectorAll("img")).forEach((img) => {
          img.removeAttribute("src");
        });

        Array.from($text.querySelectorAll("script")).forEach((script) => {
          if (script.innerHTML.includes("k_data_vid")) {
            const $ = (query) => ({
              val: () => $text.querySelector(query).value,
            });

            const scriptString = script.innerHTML
              .split("var")
              .map((a) => (a.trim() ? `a.${a.trim()}` : ""))
              .join("");

            const scriptFunction = new Function(
              "$",
              ["const a = {}", scriptString, "return a"].join(";")
            );
            this._credentials = scriptFunction($);
          }
        });

        this._formatList = Array.from($text.querySelectorAll("tbody")).map(
          (tbody) => {
            return Array.from(tbody.children)
              .filter((tr) => tr.children.length == 3)
              .map((tr) => {
                const childSize = tr.children[1];
                const button = tr.querySelector("button");

                return {
                  title: tr
                    .querySelector("a")
                    .innerText.split(" ")
                    .map((string) => string.trim())
                    .filter((string) => string)
                    .join(" "),
                  size: childSize.textContent,
                  type: button.getAttribute("data-ftype"),
                  quality: button.getAttribute("data-fquality"),
                };
              });
          }
        );

        this._id = id;
        return {
          id: this._id,
          title: this._credentials.k_data_vtitle,
          formats: this._formatList,
        };
      });
  }

  async __convert_1(parameters) {
    const data = this._credentials;
    const formData = new FormData();
    formData.append("v_id", data.k_data_vid);
    formData.append("ftype", parameters.type);
    formData.append("fquality", parameters.quality);
    formData.append("fname", data.k_file_name);
    formData.append("token", data.k__id);
    formData.append("timeExpire", data.k_time);

    return await fetch(
      `https://l8qn2l7t-80.brs.devtunnels.ms/fetch/post.php?url=${data.k_convert_url}`,
      {
        method: "POST",
        headers: {
          headers: JSON.stringify([
            "Content-Type: application/x-www-form-urlencoded",
            "X-Requested-Key: de0cfuirtgf67a",
            "X-Requested-With: XMLHttpRequest",
          ]),
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then(async (res) => {
        if (res.c_status == "ok" && res.d_url) {
          return { status: true, url: res.d_url };
        } else if (res.c_status == "ok" && res.c_server) {
          return await this.__convert_2(formData, res.c_server);
        }
      });
  }

  async __convert_2(formData, url) {
    return await fetch(
      `https://l8qn2l7t-80.brs.devtunnels.ms/fetch/post.php?url=${url}/api/json/convert`,
      {
        method: "POST",
        headers: {
          headers: JSON.stringify([
            "Content-Type: application/x-www-form-urlencoded",
            "X-Requested-Key: de0cfuirtgf67a",
            "X-Requested-With: XMLHttpRequest",
          ]),
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then(async (res) => {
        if (res.statusCode == 200) {
          return { status: true, url: res.result };
        } else if (res.statusCode == 300) {
          return await this.__convert_3(res, url);
        }
      });
  }

  async __convert_3(res, url) {
    return new Promise((resolve, reject) => {
      const r = new URL(url);
      const u = r.protocol == "https:" ? "wss:" : "ws:";

      const f = `${u}//${r.host}/sub/${res.jobId}?fname=Y2meta.app`;
      const socket = new WebSocket(f);
      socket.onmessage = function (n) {
        const data = JSON.parse(n.data);
        if (data.action === "success") {
          resolve({ status: true, url: data.url });
          socket.close();
        }
      };

      socket.onerror = function (error) {
        reject(error);
      };
    });
  }

  async get(parameters) {
    while (this._token === null)
      await new Promise((resolve) => setTimeout(resolve, 50));

    //console.log(parameters.id, this._id);
    //if (parameters.id != this._id) this._credentials = null;

    return await this.__list(this._token, parameters.id).then((list) => {
      return list;
    });
  }

  async set(parameters = {}) {
    await this.get(parameters);
    return await this.__convert_1(parameters);
  }
}
