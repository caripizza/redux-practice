import {
  NOTE_CREATE,
  addNote
} from './notes';

describe('noteCreate actions', () => {
  it('has note create actions', () => {
    const action = addNote({
      input1: 'input1',
      input2: 'input2'
    });
    expect(action).toEqual({
      type: NOTE_CREATE,
      payload: {
        input1: 'input1',
        input2: 'input2'
      }
    });
  });
});
