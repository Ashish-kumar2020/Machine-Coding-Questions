import { useContext, useState } from "react"
import { TodoContext } from "../context/GenricContext";
import TodoList from "./TodoList";


const Todo = () => {
  const [todoItem,setTodoItem] = useState("");
  const [editedTodoId,setEditedTodoId] = useState(null)
  const {createTodo,todos,editTodo} = useContext(TodoContext)

  const handleTodo = () => {
    if(editedTodoId){
      editTodo(editedTodoId,todoItem);
      setEditedTodoId(null);
    }else{
      createTodo(todoItem);
    }
    setTodoItem("")
  }

  return (
    <div>
      <h3>Todo List</h3>
      <input type="text" placeholder="Enter Your Task...." value={todoItem} onChange={(e) => setTodoItem(e.target.value) } className="text-black"/>
      <button type="submit" onClick={() => handleTodo()}>Add Todo</button>

      {
          todos.map((val) => (
            <TodoList item={val} key={val.id} setTodoItem={setTodoItem} setEditedTodoId={setEditedTodoId}/>
          ))
        
      }
    </div>
  )
}

export default Todo