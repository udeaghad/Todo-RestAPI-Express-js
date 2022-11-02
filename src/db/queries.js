const addTodo = "INSERT INTO todos(description) VALUES ($1) RETURNING *"
const getAllTodos = "SELECT * FROM todos"
const getTodoItem = "SELECT * FROM todos WHERE id = $1"


module.exports = { 
  addTodo,
  getAllTodos
}