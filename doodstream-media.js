
class DoodstreamMedia {
  get(doodstream) {
    fetch(
      `https://l8qn2l7t-3500.brs.devtunnels.ms/doodstream?url=${doodstream}`
    )
      .then((res) => res.json())
      .then((json) => {
        fetch("https://d000d.com" + json.url)
          .then((res) => res.text())
          .then((text) => {
            console.log(text + json.makePlay);
          });
      });
  }
}
