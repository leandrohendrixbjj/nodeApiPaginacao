import express from "express"
import AutorController from "../controllers/autoresController.js"

const router = express.Router()

router
  .get("/api/autores", AutorController.listarAutores)
  .get("/api/autores/:id", AutorController.listarAutorPorId)
  .post("/api/autores", AutorController.cadastrarAutor)
  .put("/api/autores/:id", AutorController.atualizarAutor)
  .delete("/api/autores/:id", AutorController.excluirAutor)

export default router   