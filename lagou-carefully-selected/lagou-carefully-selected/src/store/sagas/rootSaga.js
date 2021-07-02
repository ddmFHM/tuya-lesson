import { all } from 'redux-saga/effects'
import signupSaga from './signup'
import productsSaga from './products'
import searchSaga from './search'
import filterSaga from './filter'
import { productSaga } from './product'

export default function* rootSaga() {
  yield all([
    signupSaga(),
    productsSaga(),
    searchSaga(),
    filterSaga(),
    productSaga()
  ])
}