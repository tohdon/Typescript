"use strict";
console.log("TodoIt");
const todoList = [];
console.log("todolist", todoList);
function addTodo() {
    var inputElement = document.getElementById('todoInput');
    var todoInput = inputElement['value'];
    console.log(todoInput);
    if (todoInput == null) {
        console.log('The todo input is missing from tje page!');
        return;
    }
    const newTodo = todoInput;
    if ('' !== newTodo.trim()) {
        console.log('Adding todo:', newTodo);
        todoList.push(newTodo);
        console.log('Mew Todo list:', todoList);
        todoInput = '';
        updateTodoList();
        filterTodoList();
    }
}
function updateTodoList() {
    var todoListDiv = document.getElementById('todoListCoantainer');
    console.log("updating the rendered todo list");
    todoListDiv.innerHTML = '';
    todoListDiv.textContent = '';
    const u1 = document.createElement('ul');
    u1.setAttribute('id', 'todoList');
    todoListDiv.appendChild(u1);
    todoList.forEach(item => {
        const li = document.createElement('li');
        li.setAttribute('class', 'todo-list-item');
        li.innerText = item;
        u1.appendChild(li);
    });
}
function filterTodoList() {
    console.log("Filtering the renedered todo list");
    const todoListHtml = document.getElementById('todoList');
    if (todoListHtml === null) {
        console.log("Nothing to filter");
        return;
    }
    const todoListFilter = document.getElementById('todoFilter');
    const todoListFilterText = todoListFilter.value.toUpperCase();
    todoListHtml.childNodes.forEach((item) => {
        let itemText = item.textContent;
        if (itemText !== null) {
            itemText = itemText.toUpperCase();
            if (itemText.startsWith(todoListFilterText)) {
                item.style.display = " list-item";
            }
            else {
                item.style.display = "none";
            }
        }
    });
}
