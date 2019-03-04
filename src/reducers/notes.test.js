import reducer from './notes';
import { NOTE_CREATE } from '../actions/notes';

describe('noteCreate reducer', () => {
  it('should handle initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({ notesList: [{
      input1: 'input1',
      input2: 'input2'
    }] });
  });

  it('handles the create note action', () => {
    const state = {
      notesList: [{
        input1: 'test1',
        input2: 'test2'
      }]
    };
    const updatedState = reducer(state, {
      type: NOTE_CREATE,
      payload: {
        input1: 'input1',
        input2: 'input2'
      },
    });
    expect(updatedState).toEqual({
      notesList: [
        {
          input1: 'test1',
          input2: 'test2'
        },
        {
          input1: 'input1',
          input2: 'input2'
        }]
    });
    updatedState.notesList.push({
      input1: 'another input1',
      input2: 'another input2'
    });
    expect(updatedState.notesList).toHaveLength(3);
  });
});
