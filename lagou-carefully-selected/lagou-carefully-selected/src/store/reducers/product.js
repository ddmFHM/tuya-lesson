import { handleActions } from 'redux-actions'
import { get_product_by_id_success } from '../actions/product'

const initialValues = {

}

const productReducer = handleActions({
  [get_product_by_id_success]: (state, action) => (action.payload)
}, initialValues)

export default productReducer