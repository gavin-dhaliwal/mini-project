const mysql = require("mysql");

const connect = mysql.createConnection({
  connectLimit: 10,
  password: "admin",
  user: "devuser",
  database: "Pokemons",
  host: "",
  port: ""
});

let Pokemons_db = {};

Pokemons_db.all = () => {
  return new Promise((resolve, reject) => {
    connect.query("SELECT * FROM pokemon", (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
};

module.exports = Pokemons_db;
