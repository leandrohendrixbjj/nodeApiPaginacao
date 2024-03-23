import connection from './dbConnect.js'

connection.on("error", () => {
  console.log("Fail to connect to Database")
})

connection.once("open", () => {
  console.log("Connect to Database successfully")
})

export default connection