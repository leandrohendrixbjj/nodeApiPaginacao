import mongoose from "mongoose"

mongoose.connect(process.env.STR_CONNECTION_DB);

let db = mongoose.connection;

export default db;