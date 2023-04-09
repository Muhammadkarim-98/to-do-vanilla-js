// Bismillah

// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

// Functions
function addTodo(event) {
	// Prevent form from submitting
	event.preventDefault();
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item')
	todoDiv.appendChild(newTodo);
	// ADD TO LOCALSTORAGE
	saveLocalTodos(todoInput.value)
	// MARK BUTTON
	const completeButton = document.createElement("button");
	completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
	completeButton.classList.add("complete-btn");
	todoDiv.appendChild(completeButton);
	// TRASH BUTTON
	const trashButton = document.createElement("button");
	trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
	// APPEND TODO LIST
	todoList.appendChild(todoDiv);
	// Clearing input
	todoInput.value = ''
}

//////////////////
//delete check
function deleteCheck(e) {
	const item = e.target;
	// delete todo
	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		todo.classList.add('fall')
		removeLocalTodos(todo)
		todo.addEventListener('transitionend', function () {
			todo.remove()
		})
	}
	/// Check mark
	if (item.classList[0] === 'complete-btn') {
		let todo = item.parentElement;
		todo.classList.toggle('completed')
	}
}

function filterTodo(e) {
	const todos = todoList.childNodes;
	todos.forEach(function (todo) {
		switch (e.target.value) {
			case "all":
				todo.style.display = 'flex';
				break;
			case "completed":
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex'
				} else { todo.style.display = 'none' }
				break;
			case "uncompleted":
				if (!todo.classList.contains('completed')) {
					todo.style.display = 'flex'
				} else { todo.style.display = 'none' }
				break;
		}
	})
}
// SAVE TO LOCAL
function saveLocalTodos(todo) {
	// CHECKING
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = []
	} else { todos = JSON.parse(localStorage.getItem('todos')) }

	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos))

}
//// GET TODOS
function getTodos() {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = []
	} else { todos = JSON.parse(localStorage.getItem('todos')) }
	todos.forEach(function (todo) {
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo");
		const newTodo = document.createElement("li");
		newTodo.innerText = todo;
		newTodo.classList.add('todo-item')

		// MARK BUTTON
		const completeButton = document.createElement("button");
		completeButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
		completeButton.classList.add("complete-btn");
		todoDiv.appendChild(completeButton);
		// TRASH BUTTON
		const trashButton = document.createElement("button");
		trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
		trashButton.classList.add("trash-btn");
		todoDiv.appendChild(trashButton);
		// APPEND TODO LIST
		todoList.appendChild(todoDiv);

	})
}
/// REMOVE
function removeLocalTodos(todo) {
	// CHECKING
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = []
	} else { todos = JSON.parse(localStorage.getItem('todos')) }

	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1)
	localStorage.setItem('todos', JSON.stringify(todos))
}
