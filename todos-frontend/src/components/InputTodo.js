import React, {useState} from "react";

const InputTodo = () => {
 
  const [description, setDescription] = useState("")
 
  const addDescription = (e) => {
    e.preventDefault()
    setDescription(e.target.value)
    
  }
  
  const onSubmit = async(e) => {
    
    e.preventDefault()
    try {
      const body = {description};
    
      const response = await fetch("http://localhost:5000/api/v1/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })

      window.location = "/"
      console.log(response)
      
    } catch (error) {
      console.error(error.message)
    }
    
  }
  

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div class="mb-3 mt-3">
            <input id="input-descr" 
              type="text" 
              placeholder="Description" 
              onChange={(e)=> addDescription(e)}
              className="form-control"
            />
         </div>

          <button 
          className="btn btn-dark"
          >Add Item
          </button>
          
        </form>
        </div>
    </>
  )
}

export default InputTodo