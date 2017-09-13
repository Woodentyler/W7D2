import { fetchRequest, postRequest, updateRequest, deleteRequest } from '../util/todo_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

// export const updateTodo = todo => ({ // old, legacy
//   type: UPDATE_TODO,
//   todo
// });

export const updateTodo = todo => dispatch => (
  updateRequest(todo).then(
    response => (dispatch(receiveTodo(response))),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const fetchTodos = () => dispatch => (
  fetchRequest().then(response => (
    dispatch(receiveTodos(response))
  ))
);

export const createTodo = todo => dispatch => (
  postRequest(todo).then(
    response => (dispatch(receiveTodo(response))),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const deleteTodo = todo => dispatch => (
  deleteRequest(todo).then(
    response => (dispatch(removeTodo(response))),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.updateTodo = updateTodo;
window.fetchTodos = fetchTodos;
window.createTodo = createTodo;
