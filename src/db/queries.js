const addTodo = "INSERT INTO todos(description) VALUES ($1) RETURNING *"
const getAllTodos = "SELECT * FROM todos"
const getTodoItem = "SELECT * FROM todos WHERE id = $1"
const updateItem = "UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *"


module.exports = { 
  addTodo,
  getAllTodos,
  getTodoItem,
  updateItem
}