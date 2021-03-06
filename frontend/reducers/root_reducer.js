import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import errorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  todos: todosReducer,
  errors: errorsReducer
});

export default RootReducer;
