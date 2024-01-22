import ErrorUser from "./ErrorRequest.js"

class ErrorValidation extends ErrorUser {
  constructor(error) {
    super()
    this.message = Object.values(error.errors).map(error => error.message).join(";")
    this.status = 400
  }

  enviarResposta(res) {
    res.status(this.status)
      .send({ success: false, mesage: this.message })
  }
}

export default ErrorValidation