import { createAction } from 'redux-actions'

// export const increment = () => ({ type: 'increment' })

export const increment = createAction('increment')
export const decrement = createAction('decrement')