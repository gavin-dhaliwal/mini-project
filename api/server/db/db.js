const mysql = require("mysql");
const key = require("./service/mysql");

const { connectLimit, password, user, database, host, port } = key; //Deconstruct key

const connect = mysql.createConnection({
  connectLimit,
  password,
  user,
  database,
  host,
  port
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
