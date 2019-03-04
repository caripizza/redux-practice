import { NOTE_CREATE } from '../actions/notes';

const initialState = {
  notesList: [
    {
      input1: 'input1',
      input2: 'input2'
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case NOTE_CREATE:
      return {
        notesList: [...state.notesList, action.payload]
      };
    default:
      return state;
  }
}
