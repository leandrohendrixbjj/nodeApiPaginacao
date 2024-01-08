import autores from "../models/Autor.js"

class AutorController {

  static listarAutores = async (req, res) => {
    try {
      const data = await autores.find() || null

      if (!data)
        res.status(404).json({ success: false })

      res.status(200).json({ success: true, data })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: "Falha na lista de autores" })
    }
  }

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id
      const data = await autores.findById(id) || null

      if (!data)
        res.status(404).json({ success: false })

      res.status(200).json({ success: true, data })

    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: "Falha na busca de autor" })
    }
  }

  static cadastrarAutor = async (req, res) => {
    try {
      let autor = new autores(req.body)
      await autor.save()
      res.status(201).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: "Falha em cadastrar um Autor" })
    }
  }

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id
      await autores.findByIdAndUpdate(id, { $set: req.body })
      res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: "Falha em atualizar um Autor" })
    }
  }

  static excluirAutor = async (req, res) => {
    try {
      const id = req.params.id
      await autores.findByIdAndDelete(id)
      res.status(204).json({ success: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: "Falha na exclusão do Autor" })
    }
  }
}

export default AutorController