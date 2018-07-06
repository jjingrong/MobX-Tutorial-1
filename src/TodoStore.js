/* TodoStore.js */
import {
  observable,
  action,
  computed,
} from 'mobx';

class TodoStore {
  @observable todos = [];
  @computed get completedTodosCount() {
    return this.todos.filter(
      todo => todo.completed === true
    ).length;
  }
  @computed get uncompletedTodosCount() {
    return this.todos.filter(
      todo => todo.completed !== true
    ).length;
  }
  @action addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}
export default new TodoStore();
