import { messages } from './messages';

describe('messages', () => {

  it('Should return the current state', () => {
    const result = messages([], {});
    expect(result).toEqual([]);
  });

  it('Should return the messages if the action type is ADD_MESSAGE', () => {
    const mockMessage = {message: 'one'};
    const expectedAction = {
      type: 'ADD_MESSAGE',
      message: mockMessage
    };
    const result = messages([], expectedAction);
    expect(result).toEqual([mockMessage]);
  });

  it('Should return an empty array if the action type is REMOVE_MESSAGE', () => {
    const expectedAction = {
      type: 'REMOVE_MESSAGE'
    };
    const result = messages([], expectedAction);
    expect(result).toEqual([]);
  });

});
