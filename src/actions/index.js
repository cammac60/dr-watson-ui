export const createUser = user => ({
  type: 'CREATE_USER',
  user
});

export const removeUser = () => ({
  type: 'REMOVE_USER'
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});

export const createMessage = message => ({
  type: 'ADD_MESSAGE',
  message
});

export const removeMessage = () => ({
  type: 'REMOVE_MESSAGE',
});
