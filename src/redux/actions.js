/*
 * action types
 */

export const ADD_RESPONSE = 'ADD_RESPONSE';
export const CHANGE_RESPONSE = 'CHANGE_RESPONSE';
export const SET_LAST_ENTRY_DATE = 'SET_LAST_ENTRY_DATE';

/*
 * action creators
 */

export const addResponse = (response) => ({
  type: ADD_RESPONSE,
  response,
});

export const changeResponse = (response) => ({
  type: CHANGE_RESPONSE,
  response,
});

export const setLastEntryDate = (lastEntryDate) => ({
  type: SET_LAST_ENTRY_DATE,
  lastEntryDate,
});
