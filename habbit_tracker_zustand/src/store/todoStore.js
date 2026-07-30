import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [
    {
      id: "1",
      text: "Abscdjld",
      completed: false,
    },
  ],

  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ],
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

 markDone: (id) =>
  set((state) => ({
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        return {
            ...todo,
            completed : !(todo.completed)
        }
      }

      return todo;
    }),
  })),

  editTodo: (id,text) =>
    set((state) => ({
        todos: state.todos.map((todo) =>{
            if(todo.id === id){
                return {
                    ...todo,
                    text: text
                }
            }
            return todo
        }),
    }))
}));

export default useTodoStore;
