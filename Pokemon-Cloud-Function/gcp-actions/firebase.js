const admin = require("firebase-admin");
const serviceAccount = require("./keys/firestore.json");

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

let firestore_db = {};

firestore_db.DeleteOne = async name => {
  try {
    const deleteDoc = await db
      .collection("pokemonsV2")
      .doc(name)
      .delete();
  } catch (e) {
    throw e;
  }
};

module.exports = firestore_db;
