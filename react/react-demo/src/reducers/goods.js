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
          return {...item, number, check: (number === item.stock)}
        } else {
          return item
        }
      })
    case 'TOGGLE_CHECK':
      return state.map(item =>
        (item.id === action.id)
          ? {...item,
              check: !item.check,
              number: !item.check ? item.stock : 0
            }
          : item)
    case 'TOGGLE_ALL_CHECK':
      return state.map(item =>
        ({...item,
          check: !action.flag,
          number: !action.flag ? item.stock : 0
        })
      )
    default:
      return state
  }
}