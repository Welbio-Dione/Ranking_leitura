const Aluno = require("../database/models.js");

// Listar todos os alunos
exports.getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    return res.json(alunos);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar alunos" });
  }
};

// Criar um novo aluno
exports.createAluno = async (req, res) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    return res.status(201).json(aluno);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao salvar aluno" });
  }
};

// Deletar um aluno
exports.deleteAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndDelete(req.params.id);
    if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });
    return res.json(aluno);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar aluno" });
  }
};

// Atualizar um aluno
exports.updateAluno = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });
    return res.json(aluno);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar aluno" });
  }
};
