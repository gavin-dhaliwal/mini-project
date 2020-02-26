const axios = require("axios");
const cheerio = require("cheerio");

(request = async () => {
  try {
    const result = await axios.get(
      "https://www.futbin.com/20/player/46194/heung-min-son"
    );

    const data = cheerio.load(result.data);
    console.log(data);
  } catch (e) {
    return console.log(e);
  }
})();
