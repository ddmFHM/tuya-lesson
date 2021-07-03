import { createAction } from 'redux-actions'

/* 向服务端发生请求 提交要添加到购物车的商品 */
export const addProductToCart = createAction('addProductToCart')
/* 将商品添加到本地购物车 */
export const addProductToLocalCart = createAction('addProductToLocalCart')

/* 向服务端发送请求 获取购物车列表数据 */
export const loadCarts = createAction('loadCarts')
/* 将服务端返回的数据 添加到本地购物车 */
export const savCarts = createAction('savCarts')

/* 向服务端发送请求 提交需要删除的商品数据 */
export const deleteProductFromCart = createAction('deleteProductFromCart')
/* 删除本地购物车中的商品 */
export const deleteProductFromLocalCart = createAction('deleteProductFromLocalCart')

/* 向服务端发送请求 修改购物车数量 */
export const changeServiceProductNumber = createAction('changeServiceProductNumber')
/* 修改本地购物车中商品 */
export const changeLocalProductNumber = createAction('changeLocalProductNumber')
