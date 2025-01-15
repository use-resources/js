class ApiWebCuevana {
  static _resolveJson(text, resolve) {
    try {
      const $text = document.createElement("html");
      $text.innerHTML = text;

      Array.from($text.querySelectorAll("img")).forEach((img) => {
        img.setAttribute("srcset", "");
        img.setAttribute("src", "");
      });

      const $data = $text.querySelector("#__NEXT_DATA__");
      const dataJson = JSON.parse($data?.textContent);

      resolve(dataJson);
    } catch (error) {
      resolve({});
    }
  }

  static pelicula(page = 1, genre = "") {
    return new Promise((resolve) => {
      page = Math.max(1, page);

      fetch(
        !genre
          ? `https://cuevana.biz/peliculas/page/${page}`
          : `https://cuevana.biz/genero/${genre}/page/${page}`
      )
        .then((res) => res.text())
        .then((text) => {
          try {
            const $text = document.createElement("html");
            $text.innerHTML = text;

            Array.from($text.querySelectorAll("img")).forEach((img) => {
              img.setAttribute("srcset", "");
              img.setAttribute("src", "");
            });

            const $data = $text.querySelector("#__NEXT_DATA__");
            const dataJson = JSON.parse($data?.textContent);

            resolve(dataJson);
          } catch (error) {
            resolve({});
          }
        })
        .then(() => resolve({}));
    });
  }

  static peliculaId(id) {
    return new Promise((resolve) => {
      fetch(`https://cuevana.biz/pelicula/${id}/${id}`)
        .then((res) => res.text())
        .then((text) => {
          this._resolveJson(text, resolve);
        })
        .then(() => resolve({}));
    });
  }

  static serie(page = 1) {
    return new Promise((resolve) => {
      page = Math.max(1, page);

      fetch(`https://cuevana.biz/series/page/${page}`)
        .then((res) => res.text())
        .then((text) => {
          this._resolveJson(text, resolve);
        })
        .then(() => resolve({}));
    });
  }

  static serieId(id, season = null, chapter = null) {
    return new Promise((resolve) => {
      let url = `https://cuevana.biz/serie/${id}/${id}`;
      url +=
        season && chapter ? `/temporada/${season}/episodio/${chapter}` : "";

      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          this._resolveJson(text, resolve);
        })
        .then(() => resolve({}));
    });
  }

  static search(search = "") {
    return new Promise((resolve) => {
      fetch(`https://cuevana.biz/search?q=${encodeURIComponent(search)}`)
        .then((res) => res.text())
        .then((text) => {
          this._resolveJson(text, resolve);
        })
        .then(() => resolve({}));
    });
  }

  static serverUrl(url) {
    return new Promise((resolve) => {
      try {
        new URL(url);

        fetch(url)
          .then((res) => res.text())
          .then((text) => {
            try {
              const $text = document.createElement("html");
              $text.innerHTML = text;

              Array.from($text.querySelectorAll("img")).forEach((img) => {
                img.setAttribute("srcset", "");
                img.setAttribute("src", "");
              });

              Array.from($text.querySelectorAll("script")).forEach((script) => {
                if (script.textContent.includes("var url =")) {
                  const callback = [
                    script.textContent.split(";").slice(0, 3).join(";"),
                    "return url",
                  ].join(";");

                  const fnctn = new Function(callback);
                  resolve(fnctn());
                }
              });
              resolve(null);
            } catch (error) {
              resolve(null);
            }
          });
      } catch (error) {
        resolve(null);
      }
    });
  }
}
