import { combineReducers } from 'redux'
import personReducer from './Person.reducer'

export default combineReducers({
  person: personReducer
})