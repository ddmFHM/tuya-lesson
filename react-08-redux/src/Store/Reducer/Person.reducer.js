import { ADD_PERSON } from '../Action_types/person.action.types'
const initialState = [
  {
    id: 1,
    name: 'ddm'
  }
]

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        action.payload
      ]
  
    default:
      break;
  }
  return state
}

export default counter