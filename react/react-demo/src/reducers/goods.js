export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_GOODS':
      return [
        ...state,
        action.data
      ]
    default:
      return state
  }
}