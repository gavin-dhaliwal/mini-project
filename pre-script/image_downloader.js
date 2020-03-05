const axios = require("axios");
const fs = require("fs");

const download_image = (url, image_path) =>
  axios({
    url,
    responseType: "stream"
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on("finish", () => resolve())
          .on("error", e => reject(e));
      })
  );

const get_urls = async () => {
  const res = await axios.get("http://localhost:3000/api/all");
  const data = res.data;

  const imagePromises = data.map(poke =>
    download_image(
      poke.pokemon_image,
      `pokemon_images/${poke.pokemon_name}.png`
    )
  );

  //await download_image(url, `pokemon_images/${res.data[0].pokemon_name}.png`);
};

get_urls();
