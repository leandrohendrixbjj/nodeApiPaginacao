import ServerError from "./ServerError.js"

class NaoEncontrado extends ServerError {
  constructor() {
    super("Página não encontrada", 404)
  }
}

export default NaoEncontrado