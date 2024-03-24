import autores from '../models/Autor.js'

export default async (req, res, next) => {
  const filters = {}
  const {
    editora,
    titulo,
    minPaginas,
    maxPaginas,
    nomeAutor
  } = req.query

  if (editora) filters.editora = { $regex: editora, $options: "i" }
  if (titulo) filters.titulo = { $regex: titulo, $options: "i" }
  
  filters.numeroPaginas = setNumeroPaginas(res,minPaginas,maxPaginas)
  filters.autor = await setNomeAutor(res, nomeAutor)

  req.filters = filters
  next()
}

function setNumeroPaginas(res, min, max) {
  const minPaginas = Number(min) || 1
  const maxPaginas = Number(max) || 5000
  const message = "Valores mínimo de páginas deve ser menor que máximo"

  if (minPaginas > maxPaginas) {
    res.status(404).json({ success: false, message })
  }

  if (!minPaginas || !maxPaginas) {
    res.status(404).json({ success: false, message })
  }
  return { $gte: minPaginas, $lte: maxPaginas }  
}

async function setNomeAutor(res, nomeAutor) {
  if (!nomeAutor) return

  const autor = await autores.findOne({ "nome": nomeAutor })

  if (!autor)
    res.status(404).json({ success: false, message: "Autor não possui livros" })

  return { $eq: autor._id }


}