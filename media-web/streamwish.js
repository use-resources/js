//https://streamwish.to/e/5lggqran7d5u
(function () {
  const getStreamwish = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const $text = document.createElement("div");
          $text.innerHTML = text;

          Array.from($text.querySelectorAll("img")).forEach((img) =>
            img.removeAttribute("src")
          );

          Array.from($text.querySelectorAll("script")).forEach((script) => {
            const scriptInnerHTML = script.innerHTML;

            if (scriptInnerHTML.includes("var uas=[];")) {
              const scriptFunction = new Function(
                `return ${scriptInnerHTML.slice(
                  scriptInnerHTML.indexOf("{"),
                  scriptInnerHTML.indexOf(");")
                )}`
              );
              const scriptReturn = scriptFunction();
              resolve({ status: true, url: scriptReturn.sources[0].file });
            }
          });
        })
        .catch(reject);
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

      if (dataJSONParse.header.from == "streamwish") {
        getStreamwish(dataJSONParse.body.url).then((res) => {
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
