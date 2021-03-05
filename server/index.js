
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("../server/databaseConnect/databaseConnection")
console.log(db);
app.use(bodyParser.json())
const adminSignupLogin=require("./router/Auth")
const blog = require('./router/blog')

app.use("/",adminSignupLogin)
app.use("/",blog)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` server is listening at http://localhost:${port}`)
})