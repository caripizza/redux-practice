import ADD_NOTE from '../reducers/notes';
const shortid = require('shortid');

const id = shortid.generate();

const initialState = {
  [id]: {
    title: 'initial note',
    body: 'initial body'
  }
};

export default function reducer(
  state = initialState,
  { type, payload }
) {
  switch(type) {
    case ADD_NOTE:
      return {
        ...state,
        payload
      };
    default: 
      return state;
  }
}
