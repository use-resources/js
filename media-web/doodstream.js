//https://d000d.com/e/
(function () {
  const getDoodstream = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const $text = document.createElement("div");
          $text.innerHTML = text;

          Array.from($text.querySelectorAll("script")).forEach((script) => {
            const scriptInnerHTML = script.innerHTML;

            if (scriptInnerHTML.includes("/pass_md5/")) {
              function makePlay() {
                for (
                  var a = "",
                    t =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    n = t.length,
                    o = 0;
                  10 > o;
                  o++
                )
                  a += t.charAt(Math.floor(Math.random() * n));
                return (
                  a + "?token=toqwl60pcjzfgur6cxqym5fz&expiry=" + Date.now()
                );
              }

              let innerHTML = scriptInnerHTML.slice(
                scriptInnerHTML.indexOf("/pass_md5/"),
                Infinity
              );
              innerHTML = innerHTML.slice(0, innerHTML.indexOf("'"));

              fetch("https://d000d.com/" + innerHTML)
                .then((res) => res.text())
                .then((text) => {
                  resolve(text + makePlay());
                });
            }
          });
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

      if (dataJSONParse.header.from == "doodstream") {
        const url = dataJSONParse.body.url.replace(
          "doodstream.com",
          "d000d.com"
        );

        getDoodstream(url).then((res) => {
          socket.emit(
            "setInfo",
            JSON.stringify({
              header: {
                id: dataJSONParse.header.id,
                socketId: dataJSONParse.header.socketId,
              },
              body: {
                data: {
                  status: true,
                  url: res,
                },
              },
            })
          );
        });
      }
    });
  });

  document.head.append(script);
})();
