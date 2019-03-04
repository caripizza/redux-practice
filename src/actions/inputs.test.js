import {
  UPDATE_INPUT1,
  updateInput1,
  UPDATE_INPUT2,
  updateInput2
} from './inputs';

describe('inputUpdate actions', () => {
  it('has update input actions', () => {
    const action1 = updateInput1('test1');
    const action2 = updateInput2('test2');
    expect(action1).toEqual({
      type: UPDATE_INPUT1,
      payload: 'test1'
    });
    expect(action2).toEqual({
      type: UPDATE_INPUT2,
      payload: 'test2'
    });
  });
});
