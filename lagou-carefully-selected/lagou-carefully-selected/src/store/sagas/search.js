import axios from 'axios'
import { takeEvery, put, actionChannel } from 'redux-saga/effects'
import { API } from '../../config'
import { search_products, search_products_success } from '../actions/search'

export default function* searchSaga() {
  yield takeEvery(search_products, handleSearchProducts)
}

function* handleSearchProducts(action) {
  const response = yield axios.get(`${API}/products/search`, {
    params: action.payload
  })
  yield put(search_products_success({ result: response.data }))
}