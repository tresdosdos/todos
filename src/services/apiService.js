import { LocalStorage } from 'quasar';

export class ApiService {
  constructor() {
    this.localStorage = LocalStorage;
  }

  get() {
    return this.localStorage.getItem('todos') || [];
  }

  post(todo) {
    const todos = this.get() || [];
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;

    this.localStorage.set('todos', [...todos, { ...todo, id }]);
  }

  update(todo) {
    const todos = this.get() || [];
    const foundTodo = todos.find(td => td.id === todo.id);
    foundTodo.header = todo.header;
    foundTodo.text = todo.text;

    this.localStorage.set('todos', todos);
  }

  delete(id) {
    const todos = this.get() || [];
    const filteredTodos = todos.filter(td => td.id !== id);

    this.localStorage.set('todos', filteredTodos);
  }
}
