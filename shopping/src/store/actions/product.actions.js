import { createAction } from 'redux-actions'

/* 向服务端发生请求 获取商品列表数据 */
export const loadProducts = createAction('load_products')
/* 将服务端返回的商品列表数据保存到本地的store对象中 */
export const saveProducts = createAction('save_products')