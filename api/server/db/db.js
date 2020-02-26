const mysql = require("mysql");
const key = require("./service/mysql");

const { connectLimit, password, user, database, host, port } = key; //Deconstruct key

const connect = mysql.createConnection({
  password,
  user,
  database,
  socketPath:
    "/cloudsql/dpduk-developer-gavin-dhaliwal:europe-west2:cloud-sql-instance"
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
