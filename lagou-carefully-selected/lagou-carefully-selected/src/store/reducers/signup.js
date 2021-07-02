import { handleActions as createReducer } from 'redux-actions'
import { signup, signup_success, signup_fail, signup_reset } from '../actions/signup'

const initalState = {
  loading: false,
  loaded: false,
  success: false,
  message: ''
}

const signupReducer = createReducer({
  [signup]: () => ({
    loading: true,
    loaded: false,
    success: false,
    message: ""
  }),
  [signup_success]: () => ({
    loading: false,
    loaded: true,
    success: true,
    message: ""
  }),
  [signup_fail]: (state, action) => ({
    loading: false,
    loaded: true,
    success: false,
    message: action.payload.message
  }),
  [signup_reset]: () => ({
    loading: false,
    loaded: false,
    success: false,
    message: ''
  })
}, initalState)

export default signupReducer