import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import testReducer from './test'
import signupReducer from './signup'
import productsReducer from './products'
import searchReducer from './search'
import filterReducer from './filter'
import productReducer from './product'

const createRootReducer = (history) => combineReducers({
  test: testReducer,
  router: connectRouter(history),
  signup: signupReducer,
  products: productsReducer,
  search: searchReducer,
  filter: filterReducer,
  product: productReducer
})

export default createRootReducer