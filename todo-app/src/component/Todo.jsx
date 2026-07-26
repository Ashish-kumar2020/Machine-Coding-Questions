import { useContext, useState } from "react"
import { TodoContext } from "../context/GenricContext";
import TodoList from "./TodoList";


const Todo = () => {
  const [todoItem,setTodoItem] = useState("");
  const {createTodo,todos} = useContext(TodoContext)
 

  const handleTodo = () => {
    createTodo(todoItem);
    setTodoItem("")
  }

  return (
    <div>
      <h3>Todo List</h3>
      <input type="text" placeholder="Enter Your Task...." value={todoItem} onChange={(e) => setTodoItem(e.target.value) } className="text-black"/>
      <button type="submit" onClick={() => handleTodo()}>Add Todo</button>

      {
          todos.map((val) => (
            <TodoList item={val} key={val.id}/>
          ))
        
      }
    </div>
  )
}

export default Todo