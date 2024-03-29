import { autores } from "../models/index.js"

class AutorController {

  static listarAutores = async (req, res, next) => {
    try {

      const data = autores.find()

      if (!data)
        res.status(404).json({ success: false })

      req.result = data

      next()
    } catch (error) {
      next(error)
    }
  }

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id

      const data = await autores.findById(id)

      if (!data)
        res.status(404).json({ success: false })

      res.status(200).json({ success: true, data })

    } catch (error) {
      next(error)
    }
  }

  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body)
      await autor.save()
      res.status(201).json({ success: true })
    } catch (error) {
      next(error)
    }
  }

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id
      await autores.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).json({ success: true })
    } catch (error) {
      next(error)
    }
  }

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id
      await autores.findByIdAndDelete(id)
      res.status(204).json({ success: true })
    } catch (error) {
      next(error)
    }
  }
}

export default AutorController