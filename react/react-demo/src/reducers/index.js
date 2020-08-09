import { combineReducers } from 'redux'
import goods from './goods'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
	goods,
	todos,
	visibilityFilter
})