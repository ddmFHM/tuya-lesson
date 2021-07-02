import React from 'react'
import { isAuth } from '../../helpers/auth'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API } from '../../config'
export default function PayButton({ address, cart, totalPrice }) {

  const handlePay = () => {
    axios.post(`${API}/alipay`, {
      totoalAmount: totalPrice,
      subject: "测试订单标题",
      products: cart.map(product => ({ product: product.id, count: product.count })),
      address,
      userId: isAuth().user._id
    }).then(response => {
      window.location.href = response.data.url
    })
  }

  const showButton = () => {
    return isAuth() ? <Button onClick={handlePay()} >提交</Button> : <Button><Link to="/signin" >登录</Link></Button>
  }

  return (
    <div>
      {showButton()}
    </div>
  )
}
