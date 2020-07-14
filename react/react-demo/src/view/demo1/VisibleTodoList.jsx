import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

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

const TodoList = ({ todos, onTodoClick }) => (
  	<ul>
	    {todos.map(todo => (
	      	<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
	    ))}
  	</ul>
)

const mapStateToProps = state => {
	return {
	    todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

export default connect({
	mapStateToProps,
  	mapDispatchToProps
})(TodoList);