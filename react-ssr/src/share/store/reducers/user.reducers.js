import { SAVE_USER } from '../actions/user.actions'

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_USER: return action.payload.data
    default: return state
  }
}