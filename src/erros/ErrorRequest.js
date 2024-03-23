import ServerError from "./ServerError.js"

class ErrorRequest extends ServerError {
  constructor() {
    super()
    this.message = "Código inválido"
    this.status = 400
  }  
}
export default ErrorRequest