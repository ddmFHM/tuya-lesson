import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { addProductToCart, addProductToLocalCart, changeLocalProductNumber, changeServiceProductNumber, deleteProductFromCart, deleteProductFromLocalCart, loadCarts, savCarts } from '../actions/cart.actions'

export default function* cartSaga() {
  yield takeEvery(addProductToCart, handleAddProductToCart)
  yield takeEvery(loadCarts, handleLoadCarts)
  yield takeEvery(deleteProductFromCart, handleDeleteProductFromCart)
  yield takeEvery(changeServiceProductNumber, handleChangeServiceProductNumber)
}

/* 将商品添加到购物车 */
function* handleAddProductToCart(action) {
  let { data } = yield axios.post('http://localhost:3005/cart/add', { gid: action.payload })
  yield put(addProductToLocalCart(data))
}

/* 请求购物车数据 */
function* handleLoadCarts() {
  let { data } = yield axios.get('http://localhost:3005/cart')
  yield put(savCarts(data))
}

/* 请求购物车数据 */
function* handleDeleteProductFromCart(action) {
  let { index } = yield axios.delete('http://localhost:3005/cart/delete', {
    params: {
      cid: action.payload
    }
  })
  yield put(deleteProductFromLocalCart(index))
}

function* handleChangeServiceProductNumber(action) {
  let { data } = yield axios.put('http://localhost:3005/cart', action.payload)
  yield put(changeLocalProductNumber(data))
}