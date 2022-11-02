const express = require('express')
const app = express();
const cors = require('cors')
const todosRouter = require('./src/todos/routes')


app.use(cors())
app.use(express.json())

app.use('/api/v1/todos', todosRouter)

app.listen(5000, () => {
  console.log("Server is listening to port 5000...")
})