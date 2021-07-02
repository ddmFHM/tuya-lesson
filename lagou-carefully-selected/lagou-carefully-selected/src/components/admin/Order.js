import React from 'react'
import Layout from '../core/Layout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'
import { Typography, Divider, Select } from 'antd'
const { Title } = Typography

export default function Order() {
  const [orders, setOrders] = useState([])
  const { user, token } = isAuth()
  const getOrderNumber = () => {
    return orders.length > 0 ? `订单数量是${orders.length}` : "您还没有订单"
  }

  async function loadOrders() {
    return await axios.get(`${API}/order/list/${user._id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  useEffect(() => {
      let data = loadOrders()
      setOrders(data)
  }, [])

  const handleStatus = (orderId) => status => {
    axios.put(`${API}/order/status/${user._id}`, { orderId, status }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => loadOrders())
  }

  const showStatus = status => {
    switch(status) {
      case "Unpaid": return "未付款"
      case "Paid": return "已付款"
      case "Shipped": return "运输中"
      case "Completed": return "已完成"
      case "Cancelled": return "已取消"
      default: break;
    }
  }

  return (
    <Layout title="订单列表">
      <pre>
        {JSON.stringify(orders, null, "")}
      </pre>
      {
        orders.map(order => (
          <>
            <Title>订单ID：{order._id}</Title>
            <table style={{ width: '100%'}} >
              <thead className="ant-table-thead">
                <tr>
                  <th className="ant-table-cell" >订单状态</th>
                  <th className="ant-table-cell" >订单号</th>
                  <th className="ant-table-cell" >总价</th>
                  <th className="ant-table-cell" >创建时间</th>
                  <th className="ant-table-cell" >邮寄地址</th>
                  <th className="ant-table-cell" >客户姓名</th>
                </tr>
              </thead>
              <tbody className="ant-table-tbody" >
                <tr className="ant-table-row" >
                  <th className="ant-table-cell" >
                    {showStatus(order.status)}
                    <Select defaultValue={order.status} onChange={(e) => {handleStatus(order._id)}} >
                      <Select.Option>未付款</Select.Option>
                      <Select.Option>已付款</Select.Option>
                      <Select.Option>运输中</Select.Option>
                      <Select.Option>已完成</Select.Option>
                      <Select.Option>已取消</Select.Option>
                    </Select>
                  </th>
                  <th className="ant-table-cell" >{order.trade_no}</th>
                  <th className="ant-table-cell" >{order.amount}</th>
                  <th className="ant-table-cell" >{order.createAt}</th>
                  <th className="ant-table-cell" >{order.address}</th>
                  <th className="ant-table-cell" >{order.user.name}</th>
                </tr>
              </tbody>
            </table>
            <table style={{ width: '100%'}} >
              <thead className="ant-table-thead">
                <tr>
                  <th className="ant-table-cell" >商品名称</th>
                  <th className="ant-table-cell" >商品价格</th>
                  <th className="ant-table-cell" >商品数量</th>
                  <th className="ant-table-cell" >商品ID</th>
                </tr>
              </thead>
              <tbody className="ant-table-tbody" >
                {
                  order.products.map(product=> (
                    <tr className="ant-table-row" >
                      <th className="ant-table-cell" >{product.product.name}</th>
                      <th className="ant-table-cell" >{product.product.price}</th>
                      <th className="ant-table-cell" >{product.count}</th>
                      <th className="ant-table-cell" >{product.product._id}</th>
                    </tr>
                ))}
              </tbody>
            </table>
            <Divider />
          </>
        ))
      }
    </Layout>
  )
}
