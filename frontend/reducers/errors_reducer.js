import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';
import merge from 'lodash/merge';


const errorsReducer = (state = [], action) => { // current main question: are all state POJOS?
  Object.freeze(state);

  let nextState;

  switch(action.type) {
    case RECEIVE_ERRORS:
      // nextState = merge({}, state);
      nextState = action.errors; // alternatively, nextState.errors = action.errors
      return nextState;
    case CLEAR_ERRORS:
      nextState = [];
      return nextState;
    default:
      return state;
  }
};

export default errorsReducer;
