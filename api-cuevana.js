class ApiCuevana {
  static inicio = () => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api-fetch.victor01sp.com/get.php?url=${"https://cuevana.biz/_next/data/npsUg335OXnW9LSY_6Esg/es/inicio.json"}`
      )
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  };

  static search = (search = "") => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api-fetch.victor01sp.com/get.php?url=${encodeURIComponent(
          `https://cuevana.biz/_next/data/npsUg335OXnW9LSY_6Esg/es/search.json?q=${encodeURIComponent(
            search
          )}`
        )}`
      )
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  };

  static peliculas = (parameters = {}) => {
    return new Promise((resolve, reject) => {
      const url = ((parameters) => {
        if (parameters.id)
          return `https://cuevana.biz/_next/data/npsUg335OXnW9LSY_6Esg/es/pelicula/${parameters.id}/data.json`;
        if (parameters.page)
          return `https://cuevana.biz/_next/data/npsUg335OXnW9LSY_6Esg/es/peliculas/page/${parameters.page}.json`;
        return "";
      })(parameters);

      fetch(
        `https://api-fetch.victor01sp.com/get.php?url=${encodeURIComponent(
          url
        )}`
      )
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  };

  static series = (parameters = {}) => {
    return new Promise((resolve, reject) => {
      const url = ((parameters) => {
        if (parameters.id && parameters.season && parameters.episode)
          return `https://cuevana.biz/_next/data/npsUg335OXnW9LSY_6Esg/es/serie/${parameters.id}/${parameters.id}/temporada/${parameters.season}/episodio/${parameters.episode}.json`;
        if (parameters.id)
          return `https://cuevana.biz/_next/data/npsUg335OXnW9LSY_6Esg/es/serie/${parameters.id}/data.json`;
        if (parameters.page)
          return `https://cuevana.biz/_next/data/npsUg335OXnW9LSY_6Esg/es/series/page/${parameters.page}.json`;

        return "";
      })(parameters);
      fetch(
        `https://api-fetch.victor01sp.com/get.php?url=${encodeURIComponent(
          url
        )}`
      )
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  };

  static gender = (gender) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api-fetch.victor01sp.com/get.php?url=${encodeURIComponent(
          `https://cuevana.biz/_next/data/npsUg335OXnW9LSY_6Esg/es/genero/${gender
            .split(" ")
            .filter((string) => string)
            .join("-")
            .toLowerCase()}.json`
        )}`
      )
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    });
  };
}
