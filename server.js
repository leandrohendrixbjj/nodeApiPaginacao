console.clear()
import app from './src/app.js'
import 'dotenv/config.js'

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})