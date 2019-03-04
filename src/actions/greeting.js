// actions
export const GREETING_CHANGE = 'GREETING_CHANGE';

// action creators
export const changeGreeting = greeting => ({
  type: GREETING_CHANGE,
  payload: greeting
});
