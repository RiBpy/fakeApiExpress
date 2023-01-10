const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT||7000
const {readdirSync}=require("fs")
//console.log(readdirSync("./routes")); to get all routes from routes folder
readdirSync("./routes").map(file=>app.use("/",require("./routes/"+file)))

app.get('/', (req, res) => {
  res.send('Home Page')
})
app.listen(port, () => {
  console.log(`Fake API store running on port ${port}`)
})