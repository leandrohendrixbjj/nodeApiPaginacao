import mongoose from "mongoose"

function manipulaErros(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({ success: false, message: "Código inválido" })
  }
  res.status(500).json({ success: false, message: "Erro no Servidor" })
}

export default manipulaErros