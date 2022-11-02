const pool = require('../db/db')
const { addTodo, getAllTodos } = require('../db/queries')

const addTodoItem = async (req, res) => {
   try {
    const {description } = req.body
    const newTodo = await pool.query(addTodo, [description])
    res.status(200).json(newTodo.rows[0])
   } catch (err) {
    console.error(err.message)
   }
}

const getAllTodosItems = async (req, res)  => {
  try {
    const allTodos = await pool.query(getAllTodos) 
    res.status(200).json(allTodos.rows)
  } catch (err){
    console.error(err.message)
  }
}

module.exports = {
  addTodoItem,
  getAllTodosItems
}