import ServerError from "./ServerError.js"

class ErrorRequest extends ServerError {
  constructor(message = "Código inválido", status = 400) {
    super()
    this.message = message
    this.status = status
  }

  enviarResposta(res) {
    res.status(this.status)
      .send({ success: false, mesage: this.message })
  }
}

export default ErrorRequest