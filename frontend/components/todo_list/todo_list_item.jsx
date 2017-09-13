import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {

  // componentDidUpdate() {
  //   console.log(this.props.todo);
  // }

// this.props.updateTodo.bind(this, this.props.todo)

  toggleTodo (event) {
    event.preventDefault();
    const toggledTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );
    this.props.updateTodo(toggledTodo);
  }

  render() {
    return(
      <li>{this.props.todo.title}
        <button onClick = { this.props.deleteTodo.bind(this, this.props.todo) }>Delete</button>
        <button onClick = { this.toggleTodo.bind(this) }>{
            this.props.todo.done === false ? 'Done' : 'Undo'
          }</button>
      </li>
    );
  }
}

export default TodoListItem;
