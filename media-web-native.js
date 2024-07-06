class MediaWebNative {
  static streamwish = ({ url }) => {
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
              resolve({
                status: true,
                data: { url: scriptReturn.sources[0].file },
              });
            }
          });
        })
        .catch(reject);
    });
  };

  static doodstream = ({ url }) => {
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
                  resolve({ status: true, data: { url: text + makePlay() } });
                });
            }
          });
        });
    });
  };

  static yourupload = ({ url }) => {
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
                data: {
                  url: res.url,
                  image: image,
                },
              });
            })
            .catch(reject);
        });
    });
  };
}
