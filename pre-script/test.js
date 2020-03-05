const mysql = require("mysql");
const axios = require("axios");

const connect = mysql.createConnection({
  connectLimit: 10,
  password: "admin",
  user: "devuser",
  database: "Pokemons"
});

const getData = async () => {
  const res = await axios.get(
    "https://dpduk-developer-gavin-dhaliwal.appspot.com/api/all"
  );

  const updatePromise = res.data.map(ele => {
    const name = ele.pokemon_name;
    const url = ele.pokemon_image;

    try {
      //updateSQL(`https://storage.googleapis.com/pokemon-images/images/${name}.png`,name);
    } catch (e) {
      return console.log(e);
    }
  });

  const result = await Promise.all(updatePromise);

  console.log("updated");
};

const updateSQL = (url, name) => {
  const updateData =
    "UPDATE pokemon SET pokemon_image = ? WHERE pokemon_name = ?";
  return new Promise((resolve, reject) => {
    connect.query(updateData, [url, name], (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
};

getData();
