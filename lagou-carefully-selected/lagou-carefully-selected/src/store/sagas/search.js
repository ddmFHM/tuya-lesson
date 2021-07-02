import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'
import { search_products, search_products_success } from '../actions/search'

export default function* searchSaga() {
  yield takeEvery(search_products, handleSearchProducts)
}

function* handleSearchProducts(action) {
  console.log('action', action.payload)
  const response = yield axios.get(`${API}/products/search`, {
    params: action.payload
  })
  yield put(search_products_success({ result: response.data }))
}