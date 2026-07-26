import { useContext } from "react";
import { TodoContext } from "../context/GenricContext";

const TodoList = ({ item, setTodoItem, setEditingId }) => {
  const {deleteTodo} = useContext(TodoContext);

  const handleEdit = () => {
    setTodoItem(item.todoValue);
    setEditingId(item.id)
  }
  return (
    <div>
      <span>{item.todoValue}</span>
      <button className="ml-5 mb-4 mt-4 w-[60px] bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-1 rounded-md transition-colors" onClick={() => deleteTodo(item.id)}>
        Delete
      </button>
      <button className="ml-5 mb-4 mt-4 w-[60px] bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-1 rounded-md transition-colors" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};

export default TodoList;
