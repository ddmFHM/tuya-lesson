import { handleActions } from 'redux-actions'
import { get_products_success } from '../actions/products'

const initialValues = {
  sold: [],
  createdAt: []
}

const productsReducer = handleActions({
  [get_products_success]: (state, action) => ({
    ...state,
    [action.payload.sortBy]: action.payload.products
  })
}, initialValues)

export default productsReducer