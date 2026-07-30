import useTodoStore from "../store/todoStore"
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";


const TodoList = () => {

    const todos = useTodoStore((state) => state.todos);
  return (
    <div>
        <TodoInput/>
        {
            todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            })
        }
    </div>
  )
}

export default TodoList