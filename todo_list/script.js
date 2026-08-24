console.log("Todo List Machine Coding question");

class TodoList {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  init() {
    const userInput = document.querySelector("#userInput");
    const addTodoBtn = document.querySelector("#addTodoBtn");
    addTodoBtn.addEventListener("click", () => {
      const value = userInput.value.trim();
      if (value.length === 0) {
        alert("Todo Can not be empty");
        return;
      }
      this.addTodo(value);
      this.render();
    });
  }

  addTodo(todo) {
    this.todos.push({
      id: this.nextId++,
      isCompleted: false,
      todo: todo,
    });
  }

  createTagElement(elementName) {
    const elementTag = document.createElement(elementName);
    return elementTag;
  }

  render() {
    const todosUL = document.querySelector(".todos");
    todosUL.innerHTML = "";
    this.todos.forEach((todo) => {
      let inputValue = this.createTagElement("li");
      let spanText = this.createTagElement("span");
      let completedEle = this.createTagElement("input");
      let deleteButton = this.createTagElement("button");
      let editButton = this.createTagElement("button");
      completedEle.type = "checkbox";
      spanText.textContent = todo.todo;
      spanText.id = todo.id;
      inputValue.id = todo.id;
      completedEle.dataset.id = todo.id;

      // Delete Button
      deleteButton.textContent = "Delete Todo";
      deleteButton.dataset.id = todo.id;

      // Edit Button
      editButton.textContent = "Edit Todo";
      editButton.dataset.id = todo.id;
      editButton.style.marginLeft = "10px";
      let editInput = this.createTagElement("input");
      editInput.style.display = "none";

      const saveButton = this.createTagElement("button");
      saveButton.textContent = "Save Todo";
      saveButton.style.display = "none";
      saveButton.id = todo.id;
      editButton.addEventListener("click", (e) => {
        const todoId = Number(e.target.dataset.id);
        let selectedTodo = this.todos.find((val) => val.id == todoId);
        console.log(selectedTodo);
        spanText.style.display = "none";
        editButton.style.display = "none";
        saveButton.style.display = "inline";
        editInput.type = "text";
        editInput.style.display = "inline";
        editInput.value = selectedTodo.todo;
        inputValue.append(saveButton);
        inputValue.append(editInput);
      });

      saveButton.addEventListener("click", (e) => {
        const todoId = Number(e.target.id);
        let selectedTodo = this.todos.find((val) => val.id == todoId);
        if (editInput.value.length === 0) {
          alert("Todo cannot be empty");
          return;
        }
        spanText.textContent = editInput.value;
        selectedTodo.todo = editInput.value;
        spanText.style.display = "inline";
        editInput.style.display = "none";
        editButton.style.display = "inline";
        saveButton.style.display = "none";
        this.render();
      });

      deleteButton.addEventListener("click", (e) => {
        console.log(e.target.dataset.id);
        let todoId = Number(e.target.dataset.id);
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
        this.render();
      });
      completedEle.addEventListener("change", (e) => {
        const todoId = e.target.dataset.id;
        let selectedTodo = this.todos.find((val) => val.id == Number(todoId));
        selectedTodo.isCompleted = e.target.checked;
        console.log(this.todos);
      });
      inputValue.append(spanText);
      inputValue.append(completedEle);
      inputValue.append(deleteButton);
      inputValue.append(editButton);
      todosUL.append(inputValue);
    });
  }
}

const todoList = new TodoList();
todoList.init();
todoList.addTodo("Learn JavaScript");
todoList.addTodo("Learn React");
todoList.addTodo("Learn Frontend System Design");
console.log(todoList.todos);
todoList.render();
