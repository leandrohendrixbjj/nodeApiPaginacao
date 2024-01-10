import livros from "../models/Livro.js"

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const data = await livros.find().sort({ "_id": -1 })
      res.status(200).json({ success: true, data })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id
      const data = await livros.findById(id).populate('autor', 'nome')
      res.status(200).json({ success: true, data })
    } catch (error) {
      console.log(error)
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
      console.log(error)
    }
  }

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id
      await livros.findByIdAndDelete(id)
      res.status(200).send({ message: "Livro removido com sucesso" })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora
      const data = await livros.find({ "editora": editora }, {})
      res.status(200).json({ success: true, data })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

export default LivroController