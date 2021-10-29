const todoForm = document.querySelector("#todoForm");
const inputTodo = document.querySelector("#todoForm input");
const ul = document.querySelector("#todoList");

const TODOLIST_KEY = "todo-list";
let todoArray = [];

function todoSubmitHandler(event){
  event.preventDefault();
  const todoObj = {
    id: Date.now(),
    text: inputTodo.value,
  }
  todoArray.push(todoObj);
  saveTodos(todoArray);
  paintTodo(todoObj);
  inputTodo.value = ""; //입력란 초기화
}

function saveTodos(todolist){
  localStorage.setItem(TODOLIST_KEY, JSON.stringify(todolist));
}

function paintTodo(todo){
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = ` ${todo.text}`;
  const button = document.createElement("button");
  button.innerText = "🗑";
  button.addEventListener("click",deleteTodo);

  li.appendChild(button);
  li.appendChild(span);
  ul.appendChild(li);
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  todoArray = todoArray.filter(todo => todo.id !== parseInt(li.id));
  saveTodos(todoArray);
}

const savedTodos = JSON.parse(localStorage.getItem(TODOLIST_KEY));

if(savedTodos !== null){
  todoArray = savedTodos;
  todoArray.forEach(paintTodo);
}

todoForm.addEventListener("submit", todoSubmitHandler);