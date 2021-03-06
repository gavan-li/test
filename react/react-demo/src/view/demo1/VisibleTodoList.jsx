import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions/todo'

class TodoList extends Component {
	render() {
		const { todos, dispatch } = this.props
		return (
			<ul className="todo-list">
				{todos.map(todo => (
					<li key={todo.id}
						onClick={() => dispatch(toggleTodo(todo.id))}
						style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
						{todo.text}
					</li>
				))}
			</ul>
		)
	}
}

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

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

export default connect(
	mapStateToProps
)(TodoList);