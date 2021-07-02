import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'
import { get_product_by_id, get_product_by_id_success } from '../actions/product'

export function* productSaga() {
  yield takeEvery(get_product_by_id, handleProductById)
}

function* handleProductById(action) {
  let response = yield axios.get(`${API}/product/${action.payload.productId}`, {
    headers: {
      Authorization: isAuth().token
    }
  })
  yield put(get_product_by_id_success(response.data))
}