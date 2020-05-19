/*
 * action types
 */

export const ADD_RESPONSE = 'ADD_RESPONSE';
export const CHANGE_RESPONSE = 'CHANGE_RESPONSE';

/*
 * action creators
 */

export const addResponse = response => ({
  type: ADD_RESPONSE,
  response,
});

export const changeResponse = response => ({
  type: CHANGE_RESPONSE,
  response,
});
