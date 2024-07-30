//https://www.yourupload.com/
(function () {
  const scripts = [
    {
      element: document.createElement("script"),
      url: "https://cdn.jsdelivr.net/npm/socket.io-client@4.3.1/dist/socket.io.js",
    },
    {
      element: document.createElement("script"),
      url: "https://use-resources.github.io/js/media-web-url.js",
    },
  ];

  Promise.all(
    scripts.map((script) => {
      return new Promise((resolve, reject) => {
        script.element.setAttribute("src", script.url);
        script.element.onload = resolve;
        script.element.onerror = reject;
        document.head.append(script.element);
      });
    })
  ).then((responses) => {
    const socket = io("https://l8qn2l7t-5004.brs.devtunnels.ms/");

    socket.on("connect", () => console.log("connect"));

    socket.on("getInfo", (data) => {
      const dataJSONParse = JSON.parse(data);

      if (dataJSONParse.header.from == "yourupload") {
        MediaWebUrl.yourupload({ url: dataJSONParse.body.url }).then(
          (response) => {
            socket.emit(
              "setInfo",
              JSON.stringify({
                header: {
                  id: dataJSONParse.header.id,
                  socketId: dataJSONParse.header.socketId,
                },
                body: response,
              })
            );
          }
        );
      }
    });
  });
})();
