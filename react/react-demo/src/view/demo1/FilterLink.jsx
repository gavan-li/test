import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/todo'

class Link extends Component {
  constructor(props) {
    super(props)
    this.state={}
  }

  toggleFilter = (e) => {
    const { dispatch, filter } = this.props
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
  }

  render() {
    const { children, active } = this.props
    if (active) {
      return <span>{children}</span>
    }
    return (
      <a href="eval(javascript:;)" onClick={this.toggleFilter}
      >
        {children}
      </a>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

export default connect(
  mapStateToProps
)(Link)