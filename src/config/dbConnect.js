import mongoose from "mongoose"

mongoose.connect(process.env.STR_CONNECTION_DB)

export default mongoose.connection