//https://www.yourupload.com/


(function () {
  const __get__ = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const $text = document.createElement("div");
          $text.innerHTML = text;

          Array.from($text.querySelectorAll("img")).forEach((img) =>
            img.removeAttribute("src")
          );

          const image = $text
            .querySelector('meta[property="og:image"]')
            .getAttribute("content");
          const url = $text
            .querySelector('meta[property="og:video"]')
            .getAttribute("content");

          fetch(url, { method: "HEAD" })
            .then((res) => {
              resolve({
                status: true,
                url: res.url,
                image: image,
              });
            })
            .catch(reject);
        });
    });
  };

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

      if (dataJSONParse.header.from == "yourupload") {
        __get__(dataJSONParse.body.url).then((res) => {
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
