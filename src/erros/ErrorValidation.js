import ErrorUser from "./ErrorRequest.js"

class ErrorValidation extends ErrorUser {
  constructor(error) {
    super()
    this.message = Object.values(error.errors).map(error => error.message).join(";")
    this.status = 400
  }  
}
export default ErrorValidation