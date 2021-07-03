import { takeEvery, put } from 'redux-saga/effects'
import { loadProducts, saveProducts } from '../actions/product.actions'
import axios from 'axios'

export default function* productSaga() {
  yield takeEvery(loadProducts, handleLoadProducts)
}

/* 加载商品列表数据 */
function* handleLoadProducts() {
  /* 向服务端发送请求拿到数据 */
  let { data } = yield axios.get('http://localhost:3005/goods')
  /* 将数据保存到本地store对象 */
  yield put(saveProducts(data))
}