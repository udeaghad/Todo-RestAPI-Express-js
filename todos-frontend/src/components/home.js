import React, {useState, useEffect} from 'react'
import InputTodo from './InputTodo';

const HomePage = () => {

  const [todos, setTodos] = useState([]) 

  const getTodos = async() => {
    try {
      const todos = await fetch("http://localhost:5000/api/v1/todos")
     const response = await todos.json() 
    //  console.log(response)
      setTodos(response)
    } catch (error) {
      console.error(error.message)      
    }
    
  }

  useEffect(() => {
    getTodos()
  }, []) 
  
  const deleteTodo = async(todo_id) => {
    try {
      const deleteItem = await fetch(`http://localhost:5000/api/v1/todos/${todo_id}`, {
        method: "DELETE"
      })

      let newTodos = todos.filter(todo => todo.id !== todo_id)
      setTodos(newTodos)
      console.log(deleteItem)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleClick = async(e) => {
    console.log(e.target.id, e.target.checked)
    try {
      await fetch(`http://localhost:5000/api/v1/todos/${e.target.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({completed:e.target.checked})
      })
      window.location = "/"
    } catch (error) {
      console.error(error.message)
    }

  }
  
 

  return (
    <> 
    <div className='container-lg d-flex flex-wrap align-items-center justify-content-center flex-column py-5'>

      
    <h1 className ="h4">Todo Items</h1>
    <ul >
    <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Completed</th>
        <th>Description</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
    
    {todos && todos.map((todo, index) => {
       const {id, completed} = todo
    return ( 
      
       <tr key={id}>
        <td>
          <input 
          id ={id}
          type="checkbox" 
          checked={completed}
        onChange = {(e) => handleClick(e) } 
        className="form-check-input"             
        />
</td>
          <td>{todo.description}</td>
          <td>
             <button
               onClick={() => deleteTodo(id)}
               type="button" 
               className ="btn btn-danger"
             >
               Delete
            </button>
          </td>
         </tr> 
         
    )  
})}
</tbody>
 </table>
 </ul>    
    <InputTodo/>
    </div>
    </>
  )
}

export default HomePage;