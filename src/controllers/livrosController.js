import { livros, autores } from "../models/index.js"

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const data = livros.find()
      req.result = data
      next()
    } catch (error) {
      next(error)
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id
      const data = await livros.findById(id).populate("autor", "nome")
      res.status(200).json({ success: true, data })
    } catch (error) {
      next(error)
    }
  }

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body)
      await livro.save()
      res.status(201).json({ success: true })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id
      await livros.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).send({ message: "Livro atualizado com sucesso" })
    } catch (error) {
      next(error)
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id
      await livros.findByIdAndDelete(id)
      res.status(200).send({ message: "Livro removido com sucesso" })
    } catch (error) {
      next(error)
    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = req.query
      const filters = {}

      if (editora) filters.editora = { $regex: editora, $options: "i" }
      if (titulo) filters.titulo = { $regex: titulo, $options: "i" }

      if (Number(minPaginas) > Number(maxPaginas)) {
        res.status(404).json({ success: false, message: "minPagina deve ser menor que maxPagina" })
      }

      if (minPaginas && maxPaginas) {
        filters.numeroPaginas = { $gte: minPaginas, $lte: maxPaginas }
      }

      if (nomeAutor) {
        const autor = await autores.findOne({ "nome": nomeAutor })
        if (!autor) {
          res.status(404).json({ success: false, message: "Autor não possui livros" })
        }
        filters.autor = { $eq: autor._id }
      }

      const data = await livros.find(filters, {}).populate("autor")
      res.status(200).json({ success: true, data })
    } catch (error) {
      next(error)
    }
  }
}


export default LivroController