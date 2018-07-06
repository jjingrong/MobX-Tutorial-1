import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoStore from './TodoStore'
import TodoView from './TodoView'
import {
  observer,
} from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <ul>
            {TodoStore.todos.map(
              (todo, idx) => <TodoView todo={todo} key={idx} />
            )}
          </ul>
          <button onClick={this.onNewTodo}>New Todo</button>
        </div>
        <div>
          <p>
            Total items done: {TodoStore.completedTodosCount}
          </p>
          <p>Total items not done: {TodoStore.uncompletedTodosCount}</p>
        </div>
      </div>
    );
  }

  onNewTodo = () => {
    TodoStore.addTodo(prompt('Enter a new todo:', 'Learn MobX'));
  }
}

export default App;
