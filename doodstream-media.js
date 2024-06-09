class DoodstreamMedia {
  async get(doodstream) {
    return await fetch(
      `https://l8qn2l7t-3500.brs.devtunnels.ms/doodstream?url=${doodstream}`
    )
      .then((res) => res.json())
      .then(async (json) => {
        return await fetch("https://d000d.com" + json.url)
          .then((res) => res.text())
          .then((text) => {
            return text + json.makePlay;
          });
      });
  }
}
