import React from 'react';
import Footer from './Footer.jsx'
import AddTodo from './AddTodo.jsx'
import VisibleTodoList from './VisibleTodoList.jsx'

export default () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)