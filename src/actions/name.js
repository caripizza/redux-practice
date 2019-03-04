// actions
export const NAME_CHANGE = 'NAME_CHANGE';

// action creators
export const changeName = name => ({
  type: NAME_CHANGE,
  payload: name
});
