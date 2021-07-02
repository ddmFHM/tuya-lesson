import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { API } from '../../config'
import { filter_products, filter_products_success } from '../actions/filter'

export default function* filterSaga() {
  yield takeEvery(filter_products, handleFilterProducts)
}

function* handleFilterProducts(action) {
  let response = yield axios.get(`${API}/products/filter`, action.payload)
  yield put(filter_products_success({ skip: action.payload.skip, ...response.data }))
}