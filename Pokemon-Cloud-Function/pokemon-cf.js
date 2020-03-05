const firestore_db = require("./gcp-actions/firebase");
const Pokemons_db = require("./gcp-actions/cloudSQL");
const pokemon_storage = require("./gcp-actions/cloudStorage");

exports.pokemon_cf = async (req, res) => {
  try {
    await firestore_db.DeleteOne(req.query.name);
    await Pokemons_db.deleteRecord(req.query.name);
    await pokemon_storage.deleteInStorage(req.query.name);
    res.sendStatus(200);
  } catch (e) {
    res.send(e).status(500);
  }
};
