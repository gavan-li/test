import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { addTodo } from '../../actions/todo'

class AddTodo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}

	inputHandle = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	submitHandle = () => {
		const { value } = this.state
		if (!value.trim()) {
			return
		}
		this.props.addTodo(value)
		this.refs.input.value = ''
	}

	render() {
		return (
			<form onSubmit={() => false}>
				<input ref="input" onInput={this.inputHandle} />
				<button type="button" onClick={this.submitHandle}>Add Todo</button>
			</form>
		)
	}
}

const mapDispatchToProps = {
	addTodo
}

export default connect(null, mapDispatchToProps)(AddTodo)