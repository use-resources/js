class MediaWebUrl {
  static doodstream = ({ url }) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const $text = document.createElement("div");
          $text.innerHTML = text;

          const exist = Array.from($text.querySelectorAll("script")).some(
            (script) => {
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
                    resolve({ status: true, url: text + makePlay() });
                  });

                return true;
              }

              return false;
            }
          );

          if (!exist) resolve({ status: false, url: null });
        })
        .catch(() => resolve({ status: false, url: null }));
    });
  };
  static streamwish = ({ url }) => {
    return new Promise((resolve) => {
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          const $text = document.createElement("div");
          $text.innerHTML = text;

          const script = Array.from($text.querySelectorAll("script")).slice(
            -2
          )[0];
          const script2 = script.innerHTML.slice(
            script.innerHTML.indexOf("}('") + 2,
            script.innerHTML.lastIndexOf("))")
          );

          const final = new Function(
            `const fn = (...p) => p; return fn(${script2})`
          );

          const validate = (p, a, c, k, e, d) => {
            while (c--)
              if (k[c]) {
                p = p.replace(
                  new RegExp("\\b" + c.toString(a) + "\\b", "g"),
                  k[c]
                );
              }

            const scriptFunction = new Function(
              `return ${p.slice(p.indexOf("{"), p.indexOf(");"))}`
            );
            return scriptFunction();
          };

          resolve({ status: true, url: validate(...final()).sources[0].file });
        })
        .catch(() => resolve({ status: false, url: null }));
    });
  };
  static yourupload = ({ url }) => {
    return new Promise((resolve) => {
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
              console.log(res);
              resolve({
                status: true,
                url: res.url,
                image: image,
              });
            })
            .catch(() => {
              resolve({
                status: false,
                url: null,
              });
            });
        })
        .catch(() => resolve({ status: false, url: null }));
    });
  };
}
