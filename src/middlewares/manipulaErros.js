import mongoose from "mongoose"
import ServerError from "../erros/ServerError.js"
import ErrorRequest from "../erros/ErrorRequest.js"
import ErrorValidation from "../erros/ErrorValidation.js"
import NaoEncontrado from "../erros/NaoEncontrado.js"

// eslint-disable-next-line no-unused-vars
function manipulaErros(error, req, res, next) {
  console.log(error)
  if (error instanceof mongoose.Error.CastError) {
    new ErrorRequest().enviarResposta(res)
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ErrorValidation(error).enviarResposta(res)
  } else if (error instanceof NaoEncontrado)
    new NaoEncontrado(error).enviarResposta(res)
  else {
    new ServerError().enviarResposta(res)
  }
}

export default manipulaErros