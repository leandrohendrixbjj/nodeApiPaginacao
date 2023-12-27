console.clear()
import 'dotenv/config.js'
import app from './src/app.js'

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})