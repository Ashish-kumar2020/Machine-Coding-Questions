import { useState } from "react";
import { TodoContext } from "./GenricContext";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todoItems")) || [];
  });


  const createTodo = (todoValue) => {
    if (!todoValue.trim()) return;
    const id = crypto.randomUUID();
    const updatedTodos = [...todos, { todoValue, id }];
    setTodos(updatedTodos);
    localStorage.setItem("todoItems", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((val) => val.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todoItems", JSON.stringify(updatedTodos));
  };

  const editTodo = (id,todoValue) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, todoValue } : todo)),
    );
  };

  const value = {
    createTodo,
    todos,
    setTodos,
    deleteTodo,
    editTodo
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
