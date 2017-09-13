import  { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors.js';
import { receiveTodos, receiveTodo, removeTodo,
         updateTodo, fetchTodos, createTodo, deleteTodo } from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
