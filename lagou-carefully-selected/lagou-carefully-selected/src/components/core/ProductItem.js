import React from 'react'
import { Button, Card, Typography, Row, Col, Image } from 'antd'
import { Link } from 'react-router-dom'
import { API } from '../../config'
import { addItem } from '../../helpers/cart'
// import dateformat from 'dateformat'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
const { Title, Paragraph } = Typography


export default function ProductItem({ product, imgStyle, showView = true, showCart = true }) {
  product = { _id: 1, name:"1", description:"1", price:"1", sold:"1", category:"1", createdAt:"1" }
  const { _id, name, description, price, sold, category, createdAt } = product
  const dispatch = useDispatch()
  const addToCart = () => {
    addItem(product, () => {
      dispatch(push("/cart"))
    })
  }

  const showButtons = () => {
    const Buttons = []
    if (showView) {
      Buttons.push(
        <Button type="link" ><Link to={`/product/${_id}`} >查看详情</Link></Button>
      )
    }
    if (showCart) {
      Buttons.push(
        <Button type="link" onClick={addToCart} >加入购物车</Button>
      )
    }
    return Buttons
  }

  return (
    <Card
      cover={
        // <Image alt="" src=`${API}/product/photo/${_id}` />
        <Image alt="" style={imgStyle} src="https://www.baidu.com/img/540x258_2179d1243e6c5320a8dcbecd834a025d.png" />
      }
      actions={showButtons()}
    >
      <Title level={5}>{name}</Title>
      <Paragraph ellipsis={{ rows: 2 }} >{description}</Paragraph>
      <Row>
        <Col span="12" >价格：{price}</Col>
        <Col span="12" >销量：{sold}</Col>
      </Row>
      <Row>
        <Col span="12" >所属分类：{category}</Col>
        <Col span="12" >上架事件：{createdAt}</Col>
      </Row>
    </Card>
  )
}
