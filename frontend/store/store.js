import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';
import thunkMiddleware from '../middleware/thunk';

const configureStore = () => createStore(
  RootReducer,
  applyMiddleware(thunkMiddleware)
);

export default configureStore;
