import { handleActions as createReducer } from 'redux-actions'
import { addProductToLocalCart, savCarts, deleteProductFromLocalCart, changeLocalProductNumber } from '../actions/cart.actions'
const initialState = []

/* 将商品添加到本地购物车 */
const handleAddProductToLocalCart = (state, action) => {

  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)

  if (product) {
    /* case1: 商品未在购物车，商品添加 */
    product.count += 1
  } else {
    /* case2: 商品已在购物车，数量加一 */
    newState.push(action.payload)
  }
  return newState
}

/* 将请求的购物扯商品同步到本地购物车 */
const handleSavCarts = (state, action) => {
  return action.payload
}

/* 删除本地购物车商品 */
const handleDeleteProductFromLocalCart = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  newState.splice(action.payload, 1)
  return newState
}

/* 修改本地购物车商品数量 */
const handleChangeLocalProductNumber = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const product = newState.find(product => product.id === action.payload.id)
  product.count = action.payload.count
  return newState
}

export default createReducer({
  [addProductToLocalCart]: handleAddProductToLocalCart,
  [savCarts]: handleSavCarts,
  [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
  [changeLocalProductNumber]: handleChangeLocalProductNumber
}, initialState)