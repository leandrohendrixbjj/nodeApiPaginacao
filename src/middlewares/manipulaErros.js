import mongoose from "mongoose"

// eslint-disable-next-line no-unused-vars
function manipulaErros(error, req, res, next) {
  console.log(error)
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({ success: false, message: "Código inválido" })
  } else if (error instanceof mongoose.Error.ValidationError) {
    const msgError = Object.values(error.errors).map(error => error.message).join(";")
    res.status(400).send({ success: false, message: `Erros apresentados: ${msgError}` })
  } else {
    res.status(500).json({ success: false, message: "Erro no Servidor" })
  }
}

export default manipulaErros