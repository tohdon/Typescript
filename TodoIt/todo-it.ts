console.log("TodoIt");
const todoList: string[] = [];
console.log("todolist", todoList);

function addTodo(): void {
	var inputElement = <HTMLInputElement>document.getElementById('todoInput');
	var todoInput = inputElement['value'];
	console.log(todoInput);
	if(todoInput == null) {
		console.log('The todo input is missing from tje page!');
		return;
	}
	const newTodo: string = todoInput;
	
	if ('' !== newTodo.trim()) {
		console.log('Adding todo:', newTodo);
		todoList.push(newTodo);
		console.log('Mew Todo list:', todoList);
		todoInput = '';
		updateTodoList();
		filterTodoList();
		
	}
}

function updateTodoList(): void {
	var todoListDiv = <HTMLDivElement>document.getElementById('todoListCoantainer');
	
	
	console.log("updating the rendered todo list");
	todoListDiv.innerHTML='';
	todoListDiv.textContent = '';
	
	const u1 = document.createElement('ul');
	u1.setAttribute('id', 'todoList');
	todoListDiv.appendChild(u1);
	
	todoList.forEach(item => {
			const li = document.createElement('li');
			li.setAttribute('class', 'todo-list-item');
			li.innerText=item;
			u1.appendChild(li);
	});
}
function filterTodoList(): void {
	console.log("Filtering the renedered todo list");
	const todoListHtml: HTMLUListElement = document.getElementById('todoList') as HTMLUListElement;
	if(todoListHtml === null) {
		console.log("Nothing to filter");
		return;
	}
	
	const todoListFilter = document.getElementById('todoFilter') as HTMLInputElement;
	const todoListFilterText = todoListFilter.value.toUpperCase();
	todoListHtml.childNodes.forEach( (item) => {
		let itemText: string | null = item.textContent;
			if (itemText !== null ) {
				itemText = itemText.toUpperCase();
				if (itemText.startsWith(todoListFilterText)) {
				(item as HTMLLIElement).style.display = " list-item";
				}
				else {
					(item as HTMLLIElement).style.display = "none";
				}
				
			}
		});
	}