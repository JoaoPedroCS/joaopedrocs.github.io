const todoform = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = [];

todoform.addEventListener('submit', function(e) {
    e.preventDefault();
    addTodo();
})

function addTodo() {
    const todoText = todoInput.value.trim();
    if(todoText.length > 0) {
        allTodos.push(todoText);
        updateTodoList();
        todoInput.value = '';
    }
}

function updateTodoList() {
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIndex) => {
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })
}

function createTodoItem(todo) {
    const todoLI = document.createElement("li");
    todoLI.innerText = todo;
    return todoLI
}