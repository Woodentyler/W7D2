import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  // componentDidUpdate() {
  //   console.log(this.props.errors);
  // }

  render() {
    return(
      <div>
        <p>{this.props.errors}</p>
        <ul>
          {
            this.props.todos.map((todo) => {
              return (
                // <li key = {todo.id}>{todo.body}</li>
                <TodoListItem
                  key = {todo.id}
                  todo = {todo}
                  deleteTodo = {this.props.deleteTodo}
                  updateTodo = {this.props.updateTodo}/>
              );
            })
          }
        </ul>
        <TodoForm createTodo = {this.props.createTodo} clearErrors = {this.props.clearErrors} />
      </div>
    );
  }
}
export default TodoList;
