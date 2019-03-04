import {
  NAME_CHANGE,
  changeName
} from './name';

describe('nameChange actions', () => {
  it('can create a name change action', () => {
    const action = changeName('Cari Pizza!');
    expect(action).toEqual({
      type: NAME_CHANGE,
      payload: 'Cari Pizza!'
    });
  });
});
