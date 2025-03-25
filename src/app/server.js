const express = require("express");
const app = express();
const routes = require("../routers/routes.js"); // Corrigido: Importar apenas as rotas

app.use(express.json()); // Adicionado para o req.body funcionar
app.use("/", routes); // Usando as rotas separadamente

module.exports = app;
