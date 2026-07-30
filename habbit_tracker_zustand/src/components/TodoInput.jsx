import { useState } from "react"
import useTodoStore from "../store/todoStore";


const TodoInput = () => {

    const [text,setText] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo);
    const handleAddTodo = () => {
        if(!text.trim()) return;
        addTodo(text);
        setText("")
    }
    

  return (
    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAddTodo}>Add</button>
    </div>
  )
}

export default TodoInput