export default class Todo {
    constructor(data) {
        console.log('[RAW TO DO API DATA]', data);
        this._id = data._id
        this.description = data.description
        this.completed = data.completed

    }
    getTemplate() {
        return `
        <div class="form-check">
                <input class="form-check-input" type="checkbox" ${this.completed ? 'checked': ''} onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" >
                <label class="form-check-label ${this.completed ? 'strikethrough' : ''}">
                    ${this.description}
       </label>
       <span onclick="app.controllers.todoController.removeTodo('${this._id}')">
       <i class="fas fa-ban"></i>
       </span>
            </div>
    
      `
    }
}