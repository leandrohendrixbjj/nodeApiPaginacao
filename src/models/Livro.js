import mongoose from "mongoose"

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { type: String, required: [true, "O titulo do livro é obrigatório"] },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O Autor(a) é obrigatório."]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatório"],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      min: [2, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"],
      max: [10, "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"]
    }
    // numeroPaginas: {
    //   type: Number,
    //   validate: {
    //     validator: function (v) {
    //       return /^([0-9]\s?){1,3}$/g.test(v)
    //     },
    //     message: props => `${props.value} Informar três de 1 a 3 digitos `
    //   }
    // }
    // numeroPaginas: {
    //   type: Number,
    //   validate: {
    //     validator: (valor) => {
    //       return valor >= 10 && valor <= 100
    //     },
    //     message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
    //   }
    // }
  }
)

const livros = mongoose.model("livros", livroSchema)

export default livros