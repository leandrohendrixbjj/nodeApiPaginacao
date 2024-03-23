import PageNotFound from "../erros/PageNotFound.js"

// eslint-disable-next-line no-unused-vars
function handlerNotFoundError(req, res, next) {
  const error = new PageNotFound()
  next(error)
}
export default handlerNotFoundError