import { useState } from "react";
import useTodoStore from "../store/todoStore";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const markDone = useTodoStore((state) => state.markDone);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleSave = () => {
    const trimmedText = editedText.trim();

    if (!trimmedText) return;

    editTodo(todo.id, trimmedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => markDone(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            autoFocus
          />

          <button onClick={handleSave}>Save</button>

          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;