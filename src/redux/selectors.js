/*
 * responses selectors
 */

export const getResponses = state => state.responses;

export const getResponseById = (state, id) =>
  state.responses ? state.responses.find(response => response.id === id) : null;
