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
              resolve({ status: true, url: scriptReturn.sources[0].file });
            }
          });
        })
        .catch(reject);
    });
  };
}
