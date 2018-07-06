import React from 'react';
import {
  observer,
} from 'mobx-react';

@observer
class TodoView extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <li>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={this.onToggleCompleted}
        />
        {todo.task}
      </li>
    );
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }
}

export default TodoView;
