const mongoose = require("mongoose");
require("dotenv").config(); // Adicionado para carregar variáveis de ambiente
const app = require("./src/app/server.js");

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB conectado!"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err));

app.listen(3000, () => {
  console.log("Aplicação rodando na porta 3000...");
});
