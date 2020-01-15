export const messages = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message]
    case 'REMOVE_MESSAGE':
      return []
    default:
      return state
  }
}
