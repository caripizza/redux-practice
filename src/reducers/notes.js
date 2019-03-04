import { NOTE_CREATE } from '../actions/notes';

const initialState = {
  notesList: []
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
