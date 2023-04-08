// Bismillah

// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


// Event Listeners
todoButton.addEventListener('click', addTodo)

// Functions
function addTodo(event) {
	// Prevent form from submitting
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo')
}
