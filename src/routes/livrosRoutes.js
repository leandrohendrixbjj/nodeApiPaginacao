import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router()

router
  .get("/api/livros", LivroController.listarLivros)
  .get("/api/livros/busca", LivroController.listarLivroPorFiltro)
  .get("/api/livros/:id", LivroController.listarLivroPorFiltro)
  .post("/api/livros", LivroController.cadastrarLivro)
  .put("/api/livros/:id", LivroController.atualizarLivro)
  .delete("/api/livros/:id", LivroController.excluirLivro)

export default router   