import { handleActions as createReducer } from 'redux-actions'
import { increment, decrement } from '../Actions/Count.action'

const initialState = {
  count: 10
}

export default createReducer({
  [increment]: (state, action) => ({ count: state.count + 1 }),
  [decrement]: (state, action) => ({ count: state.count - 1 })
}, initialState)
