import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions/todo'

const getVisibleTodos = (todos, filter) => {
  	switch (filter) {
	    case 'SHOW_COMPLETED':
	      return todos.filter(t => t.completed)
	    case 'SHOW_ACTIVE':
	      return todos.filter(t => !t.completed)
	    case 'SHOW_ALL':
	    default:
      		return todos
  	}
}

const TodoList = ({todos, dispatch}) => {
	return (
		<ul>
		  {todos.map(todo => (
			  <li key={todo.id}
				  onClick={() => dispatch(toggleTodo(todo.id))}
				  style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
				  {todo.text}
			  </li>
		  ))}
		</ul>
  	)
}
const mapStateToProps = state => {
	return {
	  todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

export default connect(
	mapStateToProps
)(TodoList);