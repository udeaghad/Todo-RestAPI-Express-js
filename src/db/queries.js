const addTodo = "INSERT INTO todos(description) VALUES ($1) RETURNING *"
const getAllTodos = "SELECT * FROM todos"


module.exports = { 
  addTodo,
  getAllTodos
}