import ServerError from "./ServerError.js"

class PageNotFound extends ServerError {
  constructor() {
    super("Página não encontrada", 404)
  }
}
export default PageNotFound