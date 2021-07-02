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
  const { _id, name, description, price, categoryId, photo, createdAt } = product
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
        <Image alt="" style={imgStyle} src={`http://localhost/public/upload/${photo}`} />
      }
      actions={showButtons()}
    >
      <Title level={5}>{name}</Title>
      <Paragraph ellipsis={{ rows: 2 }} >{description}</Paragraph>
      <Row>
        <Col span="12" >价格：{price}</Col>
        {/* <Col span="12" >销量：{sold}</Col> */}
      </Row>
      <Row>
        <Col span="12" >所属分类：{categoryId}</Col>
        <Col span="12" >上架时间：{createdAt}</Col>
      </Row>
    </Card>
  )
}
