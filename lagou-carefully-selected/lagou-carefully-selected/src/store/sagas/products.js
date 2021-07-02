import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { get_products, get_products_success } from '../actions/products'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'

export default function* productsSaga() {
  yield takeEvery(get_products, handleGetProducts)
}

function* handleGetProducts(action) {
  const { token } = isAuth()
  let response = yield axios.get(`${API}/products`, {
    headers: {
      Authorization: token
    }
  })
  yield put(get_products_success({
    sortBy: action.payload.sortBy,
    products: response.data
  }))
}