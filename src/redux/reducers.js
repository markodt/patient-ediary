import { combineReducers } from 'redux';
import { ADD_RESPONSE, CHANGE_RESPONSE } from './actions';

/*
 * responses reducer
 */

const responses = (state = [], action) => {
  switch (action.type) {
    case ADD_RESPONSE:
      return [
        ...state,
        {
          id: action.response.id,
          type: action.response.type,
          value: action.response.value,
        },
      ];
    case CHANGE_RESPONSE:
      return state.map(response =>
        response.id === action.response.id
          ? { ...response, value: action.response.value }
          : response,
      );
    default:
      return state;
  }
};

/*
 * root reducer
 */

export default combineReducers({
  responses,
});
