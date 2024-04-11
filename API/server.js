const express = require("express");
const bodyParser = require("body-parser");
require("./src/connection");
const cors = require("cors");
const comment = require("./src/Routes/CommentRoute");
const login = require("./src/Routes/LoginRoute");
const user = require("./src/Routes/UserRoute");

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const PORT = 8000;

server.get("/", function (req, res) {
  res.send(
    "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8' /><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>Main Route</title></head><body><h1>Olá, eu sou sua rota principal</h1><p><a href='/comment/comment'>Rota de Comentários</a></p><p><a href='/user/user'>Rota de usuário</a></p><div><label>Digite um número de usuário para acessar a rota de usuário: </label><input type='number' id='userNumber' /><button onclick='findUser()'>Buscar</button></div><script>const findUser = () => {const user = document.getElementById('userNumber').value;window.location.href = `/comment/user-comments/${user}`;};</script></body></html>"
  );
});

server.use("/comment", comment);
server.use("/login", login);
server.use("/user", user);

server.listen(PORT, () => {
  console.log(`O server está rodando em http://localhost:${PORT}`);
});
