import ErrorServer from "./ErrorServer.js"

class NaoEncontrado extends ErrorServer {
  constructor() {
    super("Página não encontrada", 404)
  }
}

export default NaoEncontrado