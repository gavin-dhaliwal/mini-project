const mysql = require("mysql");

const connect = mysql.createConnection({
  connectLimit: 10,
  password: "admin",
  user: "devuser",
  database: "Pokemons",
  socketPath:
    "/cloudsql/dpduk-developer-gavin-dhaliwal:europe-west2:cloud-sql-instance"
});

let Pokemons_db = {};

Pokemons_db.deleteRecord = name => {
  return new Promise((resolve, reject) => {
    connect.query(
      "DELETE FROM pokemon WHERE pokemon_name = ?",
      name,
      (error, result) => {
        if (error) {
          return reject(error);
        }
        return resolve(result);
      }
    );
  });
};

module.exports = Pokemons_db;
