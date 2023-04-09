// Bismillah

// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

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
