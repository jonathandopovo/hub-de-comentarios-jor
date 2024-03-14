const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(bodyParser.json());

const PORT = 8000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Conectado com sucesso!");
});

server.get("/comment", (req, res) => {
  db.query("SELECT * FROM comment", (err, result) => {
    if (err) {
      res.status(500).json({ success: false, error: err });
    }

    res.json({ success: true, comment: result });
  });
});

server.listen(PORT, () => {
  console.log(`O server está rodando em https://localhost:${PORT}`);
});
