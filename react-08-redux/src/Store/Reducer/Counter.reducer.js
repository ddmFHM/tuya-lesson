import { INCREMENT, DECREMENT, INCREMENT_N } from '../Action_types/counter.action.types'
const initialState = {
  count: 10
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    
    case DECREMENT:
      return {
        count: state.count - 1
      }

    case INCREMENT_N:
      return {
        count: state.count + action.payload
      }
  
    default:
      break;
  }
  return state
}

export default counter