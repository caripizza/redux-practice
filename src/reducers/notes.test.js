import reducer from './notes';
import { NOTE_CREATE } from '../actions/notes';

describe('noteCreate reducer', () => {
  it('handles the create note action', () => {
    const state = {
      notesList: []
    };
    const updatedState = reducer(state, {
      type: NOTE_CREATE,
      payload: {
        input1: 'input1',
        input2: 'input2'
      },
    });
    expect(updatedState).toEqual({
      notesList: [{
        input1: 'input1',
        input2: 'input2'
      }]
    });
    updatedState.notesList.push({
      input1: 'another input1',
      input2: 'another input2'
    });
    expect(updatedState.notesList).toHaveLength(2);
  });
});
