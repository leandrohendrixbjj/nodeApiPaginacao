import express from "express"
import AutorController from "../controllers/autoresController.js"
import handlerPaginacao from "../middlewares/handlerPaginacao.js"
import paginacao from "../middlewares/paginacao.js"

const router = express.Router()

router
  .get("/api/autores", AutorController.listarAutores, handlerPaginacao, paginacao)
  .get("/api/autores/:id", AutorController.listarAutorPorId)
  .post("/api/autores", AutorController.cadastrarAutor)
  .put("/api/autores/:id", AutorController.atualizarAutor)
  .delete("/api/autores/:id", AutorController.excluirAutor)

export default router   