import { combineReducers } from 'redux';
import { ADD_RESPONSE, CHANGE_RESPONSE, SET_LAST_ENTRY_DATE } from './actions';

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
      return state.map((response) =>
        response.id === action.response.id
          ? { ...response, value: action.response.value }
          : response,
      );
    default:
      return state;
  }
};

/*
 * lastEntryDate reducer
 */

const lastEntryDate = (state = null, action) => {
  switch (action.type) {
    case SET_LAST_ENTRY_DATE:
      return action.lastEntryDate;
    default:
      return state;
  }
};

/*
 * root reducer
 */

export default combineReducers({
  responses,
  lastEntryDate,
});
