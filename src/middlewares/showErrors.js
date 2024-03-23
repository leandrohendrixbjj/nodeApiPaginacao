import mongoose from "mongoose"
import ServerError from "../erros/ServerError.js"
import ErrorRequest from "../erros/ErrorRequest.js"
import ErrorValidation from "../erros/ErrorValidation.js"
import PageNotFound from "../erros/PageNotFound.js"

// eslint-disable-next-line no-unused-vars
export default (error, req, res, next) => {
  console.log(error)
  if (error instanceof mongoose.Error.CastError) {
    new ErrorRequest().enviarResposta(res)
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ErrorValidation(error).enviarResposta(res)
  } else if (error instanceof PageNotFound)
    new PageNotFound(error).enviarResposta(res)
  else {
    new ServerError().enviarResposta(res)
  }
}

