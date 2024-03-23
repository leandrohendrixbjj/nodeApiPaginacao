import express from "express"
import LivroController from "../controllers/livrosController.js"
import handlerFilters from "../middlewares/handlerFilters.js"
import filters from "../middlewares/filters.js"

const router = express.Router()

router
  .get("/api/livros", LivroController.listarLivros, handlerFilters, filters)
  .get("/api/livros/busca", LivroController.listarLivroPorFiltro)
  .get("/api/livros/:id", LivroController.listarLivroPorFiltro)
  .post("/api/livros", LivroController.cadastrarLivro)
  .put("/api/livros/:id", LivroController.atualizarLivro)
  .delete("/api/livros/:id", LivroController.excluirLivro)

export default router   