import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/todo'

const Link = ({ children, active, dispatch, filter }) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="eval(javascript:;)" onClick={e => {
      e.preventDefault()
      dispatch(setVisibilityFilter(filter))
    }}
    >
      {children}
    </a>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

export default connect(
  mapStateToProps
)(Link)