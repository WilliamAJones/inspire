import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	console.log('drawing the todos', _todoService.Todo)
	let todos = _todoService.Todo
	let incompleted = 0
	let template = ''
	todos.forEach(t => {
		if (!t.completed) {
			incompleted++
		}
	})
		template += `<h3>${incompleted} : Items left to complete</h3>`

	todos.forEach(t => {
		template += t.getTemplate()
	}),
		document.getElementById('todolistl').innerHTML = template
}



function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.description.value
		}
		form.reset()
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// let todo = _state.todo
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(id) {
		_todoService.removeTodo(id)
	}



}
