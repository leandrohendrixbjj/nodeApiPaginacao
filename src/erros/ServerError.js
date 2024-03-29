class ServerError extends Error {
  constructor(message = "Erro no Servidor", status = 500) {
    super()
    this.message = message
    this.status = status
  }

  sendRequest(res) {
    res.status(this.status).send({ success: false, message: this.message })
  }
}
export default ServerError