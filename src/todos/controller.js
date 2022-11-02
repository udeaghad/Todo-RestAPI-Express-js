const pool = require('../db/db')
const { addTodo, getAllTodos, getTodoItem, updateItem, deleteItem } = require('../db/queries')

const addTodoItem = async (req, res) => {
   try {
    const {description } = req.body
    const newTodo = await pool.query(addTodo, [description])
    res.status(201).json({data:newTodo.rows[0], message:"Item created successfully"})
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

const getTodoItemDetails = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const item = await pool.query(getTodoItem, [id])
    res.status(200).json(item.rows[0])

  } catch (err){
    console.error(err.message)
  }
}

const updatedCompletedItem = async (req, res) => {
  try {
    const {id} = req.params;
    const {completed} = req.body;
    const updatedItem = await pool.query(updateItem, [completed, id])
    res.status(200).json({ data:updatedItem.rows[0], message:"Item updated successfully"})
    
  } catch (error) {
    console.error(error.message)
  }
}

const deleteTodoItem = async (req, res) => {
  try {
    const {id} = req.params

    await pool.query(deleteItem, [id])

    res.status(200).json({message: "Item deleted successfully"})

    
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = {
  addTodoItem,
  getAllTodosItems,
  getTodoItemDetails,
  updatedCompletedItem,
  deleteTodoItem
}