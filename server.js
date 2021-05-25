const express = require("express");
const api = require("./routes/pokemonRoute");

const router = express.Router();
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(api);

const server = app.listen(port, () => {
  console.log("Server is running!");
});

module.exports = server;
