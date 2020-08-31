let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const goodsTodo = data => {
  data.id = nextTodoId++
  return {
    type: 'ADD_GOODS',
    data
  }
}

export const setCars = (flag, id) => {
  return {
    type: 'SET_CARS',
    flag,
    id
  }
}