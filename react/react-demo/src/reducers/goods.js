export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_GOODS':
      return [
        ...state,
        {...action.data}
      ]
    case 'SET_CARS':
      return state.map(item => {
        if (item.id === action.id) {
          let number = action.flag ? ++item.number : --item.number
          number = number >= item.stock ? item.stock : number
          number = number <= 0 ? 0 : number
          return {...item, number}
        } else {
          return item
        }
      })
    default:
      return state
  }
}