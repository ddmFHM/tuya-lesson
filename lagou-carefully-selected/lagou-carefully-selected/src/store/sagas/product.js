import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { API } from '../../config'
import { get_product_by_id, get_product_by_id_success } from '../actions/product'

export function* productSaga() {
  yield takeEvery(get_product_by_id, handleProductById)
}

function* handleProductById(action) {
  let response = yield axios.get(`${API}/product/:productId/${action.payload.productId}`)
  yield put(get_product_by_id_success(response.data))
}