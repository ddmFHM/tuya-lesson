import { combineReducers } from 'redux'
import counterReducer from './Counter.reducer'
import personalReducer from './Person.reducer'

export default combineReducers({
  counter: counterReducer,
  person: personalReducer
})