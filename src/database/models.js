const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  turma: { type: String, required: true },
  isRead: { type: Boolean, default: false }
});

module.exports = mongoose.model("Aluno", AlunoSchema);
