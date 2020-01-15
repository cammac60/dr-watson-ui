import * as actions from '../actions';

describe('actions', () => {

  it('Should have a type of CREATE_MESSAGE for a createMessage action', () => {
    const mockMessage = {
      message: 'text'
    };
    const expectedAction = {
      type: 'ADD_MESSAGE',
      message: mockMessage
    };
    const result = actions.createMessage(mockMessage);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of REMOVE_MESSAGE for a removeMessage action', () => {
    const expectedAction = {
      type: 'REMOVE_MESSAGE'
    };
    const result = actions.removeMessage();
    expect(result).toEqual(expectedAction);
  });

});
