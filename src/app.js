console.clear()
import express from "express"
import routes from "./routes/index.js"
import showErrors from "./middlewares/showErrors.js"
import handlerNotFoundError from "./middlewares/handlerNotFoundError.js"

const app = express()
app.use(express.json())
routes(app)
app.use(handlerNotFoundError)
app.use(showErrors)

export default app