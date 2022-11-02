const pool = require('../db/db')
const { addTodo } = require('../db/queries')

const addTodoItem = async (req, res) => {
   try {
    const {description } = req.body
    const newTodo = await pool.query(addTodo, [description])
    res.json(newTodo)
   } catch (err) {
    console.error(err.message)
   }
}

module.exports = {
  addTodoItem
}