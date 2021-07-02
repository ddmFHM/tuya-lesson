import { handleActions } from 'redux-actions'
import { search_products_success } from '../actions/search'

const initialValues = {
  result: []
}

const searchReducer = handleActions({
  [search_products_success]: (state, action) => ({
    results: action.payload.results
  })
}, initialValues)

export default searchReducer