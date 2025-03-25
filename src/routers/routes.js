const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/alunoController.js");

// Definir as rotas utilizando os controllers
router.get("/", alunoController.getAlunos);
router.post("/", alunoController.createAluno);
router.delete("/:id", alunoController.deleteAluno);
router.put("/:id", alunoController.updateAluno);

module.exports = router;