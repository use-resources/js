//https://y2meta.app/es29/converter-youtube
(function () {
  function getYoutube(params) {
    return new Promise((resolve, reject) => {
      const token = () => {
        fetch(`https://y2meta.app/es29/converter-youtube`)
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
                converter(client_token, params.id);
              }
            });
          });
      };

      const converter = (token, id) => {
        const formData = new FormData();
        formData.append("url", `https://www.youtube.com/watch?v=${id}`);
        formData.append("q_auto", "1");
        formData.append("ajax", "1");
        formData.append("token", token);

        fetch("https://y2meta.app/converter/ajax", {
          method: "POST",
          headers: {
            "X-Requested-Key": "de0cfuirtgf67a",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: formData,
        })
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

                __convert_1(
                  { type: params.type, quality: params.quality },
                  scriptFunction($)
                );
              }
            });
          });
      };

      const __convert_1 = (parameters, _credentials) => {
        const data = _credentials;
        const formData = new FormData();
        formData.append("v_id", data.k_data_vid);
        formData.append("ftype", parameters.type);
        formData.append("fquality", parameters.quality);
        formData.append("fname", data.k_file_name);
        formData.append("token", data.k__id);
        formData.append("timeExpire", data.k_time);

        fetch(data.k_convert_url, {
          method: "POST",
          headers: {
            "X-Requested-Key": "de0cfuirtgf67a",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: formData,
        })
          .then((res) => res.json())
          .then(async (res) => {
            if (res.c_status == "ok" && res.d_url) {
              resolve({ status: true, url: res.d_url });
            } else if (res.c_status == "ok" && res.c_server) {
              __convert_2(formData, res.c_server);
            }
          });
      };

      const __convert_2 = (formData, url) => {
        fetch(`${url}/api/json/convert`, {
          method: "POST",
          headers: {
            "X-Requested-Key": "de0cfuirtgf67a",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: formData,
        })
          .then((res) => res.json())
          .then(async (res) => {
            if (res.statusCode == 200) {
              resolve({ status: true, url: res.result });
            } else if (res.statusCode == 300) {
              __convert_3(res, url);
            }
          });
      };

      const __convert_3 = (res, url) => {
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
      };
      token();
    });
  }

  const script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://cdn.jsdelivr.net/npm/socket.io-client@4.3.1/dist/socket.io.js"
  );

  script.addEventListener("load", () => {
    const socket = io("https://l8qn2l7t-5004.brs.devtunnels.ms/");

    socket.on("connect", () => console.log("connect"));

    socket.on("getInfo", (data) => {
      const dataJSONParse = JSON.parse(data);

      if (dataJSONParse.header.from == "youtube") {
        getYoutube(dataJSONParse.body).then((res) => {
          socket.emit(
            "setInfo",
            JSON.stringify({
              header: {
                id: dataJSONParse.header.id,
                socketId: dataJSONParse.header.socketId,
              },
              body: {
                data: res,
              },
            })
          );
        });
      }
    });
  });

  document.head.append(script);
})();
