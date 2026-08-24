console.log("Todo List Machine Coding question");

class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }


  init() {
    const userInput = document.querySelector("#userInput");
    const addTodoBtn = document.querySelector("#addTodoBtn");
    const todosUL = document.querySelector(".todos");

    // Add Todo
    addTodoBtn.addEventListener("click", () => {
      const value = userInput.value.trim();

      if (!value) {
        alert("Todo cannot be empty");
        return;
      }

      this.addTodo(value);

      userInput.value = "";

      this.render();
    });


    todosUL.addEventListener("click", (e) => {
      const action = e.target.dataset.action;

      if (!action) return;

      const todoId = Number(e.target.dataset.id);

     
      if (action === "delete") {
        this.deleteTodo(todoId);
      }

  
      if (action === "edit") {
        const li = e.target.closest("li");

        const editButton = li.querySelector('[data-action="edit"]');
        const saveButton = li.querySelector('[data-action="save"]');
        const spanText = li.querySelector(".todo-text");
        const editInput = li.querySelector(".edit-input");

        spanText.style.display = "none";
        editButton.style.display = "none";

        editInput.style.display = "inline";
        saveButton.style.display = "inline";

        editInput.focus();
      }

      if (action === "save") {
        const li = e.target.closest("li");

        const editInput = li.querySelector(".edit-input");

        this.editTodo(todoId, editInput.value);
      }
    });

  
    todosUL.addEventListener("change", (e) => {
      const action = e.target.dataset.action;

      if (action !== "toggle") return;

      const todoId = Number(e.target.dataset.id);

      this.toggleTodo(todoId, e.target.checked);
    });
  }

  addTodo(todo) {
    this.todos.push({
      id: this.nextId++,
      todo,
      isCompleted: false,
    });
  }


  deleteTodo(todoId) {
    this.todos = this.todos.filter(
      (todo) => todo.id !== todoId
    );

    this.render();
  }


  editTodo(todoId, newValue) {
    const todo = this.todos.find(
      (todo) => todo.id === todoId
    );

    if (!todo) return;

    const value = newValue.trim();

    if (!value) {
      alert("Todo cannot be empty");
      return;
    }

    todo.todo = value;

    this.render();
  }

  toggleTodo(todoId, isCompleted) {
    const todo = this.todos.find(
      (todo) => todo.id === todoId
    );

    if (!todo) return;

    todo.isCompleted = isCompleted;
  }

  createTagElement(elementName) {
    return document.createElement(elementName);
  }

  render() {
    const todosUL = document.querySelector(".todos");

    todosUL.innerHTML = "";

    this.todos.forEach((todo) => {
      const li = this.createTagElement("li");


      const spanText = this.createTagElement("span");
      spanText.className = "todo-text";
      spanText.textContent = todo.todo;


      const completedEle =
        this.createTagElement("input");

      completedEle.type = "checkbox";
      completedEle.checked = todo.isCompleted;

      completedEle.dataset.id = todo.id;
      completedEle.dataset.action = "toggle";

      const editInput =
        this.createTagElement("input");

      editInput.type = "text";
      editInput.className = "edit-input";
      editInput.value = todo.todo;
      editInput.style.display = "none";

      editInput.dataset.id = todo.id;


      const editButton =
        this.createTagElement("button");

      editButton.textContent = "Edit Todo";

      editButton.dataset.id = todo.id;
      editButton.dataset.action = "edit";

      const saveButton =
        this.createTagElement("button");

      saveButton.textContent = "Save Todo";

      saveButton.dataset.id = todo.id;
      saveButton.dataset.action = "save";

      saveButton.style.display = "none";


      const deleteButton =
        this.createTagElement("button");

      deleteButton.textContent = "Delete Todo";

      deleteButton.dataset.id = todo.id;
      deleteButton.dataset.action = "delete";

  
      li.append(
        completedEle,
        spanText,
        editInput,
        editButton,
        saveButton,
        deleteButton
      );


      todosUL.append(li);
    });
  }
}



const todoList = new TodoList();

todoList.init();

todoList.addTodo("Learn JavaScript");
todoList.addTodo("Learn React");
todoList.addTodo("Learn Frontend System Design");


todoList.render();