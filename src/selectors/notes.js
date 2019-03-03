export const getNotes = state => {
  return Object.keys(state).map(id => {
    return {
      ...state[id],
      id 
    };
  });
};
