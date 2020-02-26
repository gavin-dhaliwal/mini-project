const express = require("express");
const db = require("../db/db");
const axios = require("axios");
const firestore_db = require("../db/firestore");

const router = express.Router();

router.get("/", (_, res) => {
  res.send("Server is active").status(200);
});

//main page of frontend api call
router.get("/api/all", async (_, res) => {
  try {
    const result = await db.all();
    res.json(result);
  } catch (e) {
    return console.log(e);
  }
});

// use to add item into firestore
router.get("/api/add/:id", async (req, res) => {
  try {
    const request = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${req.params.id}`
    );

    const results = request.data;
    const filtered = Object.keys(results)
      .filter(key => {
        allowed.includes(key);
      })
      .reduce((obj, key) => {
        return { ...obj, [key]: results[key] };
      }, {});

    const write = await firestore_db.addOne(req.params.id, filtered);
    res.send(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

//gets all documents from the firestore database
router.get("/api/firestore/all", async (req, res) => {
  const request = await firestore_db.getAll();
  res.json(request);
});

//get one doc from the firstore db used for the modal on the frontend
router.get("/api/firestore/one/:id", async (req, res) => {
  const request = await firestore_db.getOne(req.params.id);

  res.json(request);
});

module.exports = router;
