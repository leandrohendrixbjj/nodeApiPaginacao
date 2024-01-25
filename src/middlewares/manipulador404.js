import NaoEncontrado from "../erros/NaoEncontrado.js"

// eslint-disable-next-line no-unused-vars
function manipulador404(req, res, next) {
  const error404 = new NaoEncontrado()
  next(error404)
}

export default manipulador404