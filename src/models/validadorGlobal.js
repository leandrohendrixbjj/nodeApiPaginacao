import mongoose from "mongoose"

const validadorGlobal = mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  message: ({ path }) => `O campo: ${path} foi fornecido em branco`
})

export default validadorGlobal