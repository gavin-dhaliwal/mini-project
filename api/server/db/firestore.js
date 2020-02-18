const admin = require("firebase-admin");
const serviceAccount = require("./service/firestore.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

let firestore_db = {};

firestore_db.getAll = async () => {
  const result = await db.collection("pokemons").get();
  const array = [];
  const res = result.docs.forEach(doc => {
    const data = doc.data();
    array.push(data);
  });

  return array;
};

firestore_db.getOne = async name => {
  const result = await db
    .collection("pokemons")
    .doc(name)
    .get();

  if (result.exists) {
    const data = result.data();
    return data;
  } else {
    return new Error("No such doc");
  }
};

firestore_db.addOne = async (name, data) => {
  try {
    const result = await db
      .collection("pokemons")
      .doc(name)
      .set(data);
  } catch (e) {
    return console.log(e);
  }
};

module.exports = firestore_db;
