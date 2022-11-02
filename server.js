const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api/v1/todos', (req, res) => {
  res.send("hello world")
})

app.listen(5000, () => {
  console.log("Server is listening to port 5000...")
})