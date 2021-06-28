import { ADD_CONTENT } from '../Action_types/content.action.types'

const initialState = {
  content: ['默认数据']
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        content: [
          ...state.content,
          action.payload
        ]
      }
    default:
      return state
  }
}