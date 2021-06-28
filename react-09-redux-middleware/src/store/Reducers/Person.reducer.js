import { PERSON_ADD } from '../ActionTypes/Person.action.types'

const initalState = [
  {
    id: 1,
    name: 'ddm',
    age: 18
  }
]

export default function personReducer(state = initalState, action) {
  switch (action.type) {
    // case PERSON_ADD:
    //   return [
    //     ...state,
    //     ...action.payload
    //   ]
    
    case "loadPersonSuccess":
        return [
          ...state,
          ...action.payload
        ]
  
    default:
      return state
  }
}