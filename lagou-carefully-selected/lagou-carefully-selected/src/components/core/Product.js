import React, { useEffect } from 'react'
import Layout from './Layout'
import { Row, Col } from 'antd'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { get_product_by_id } from '../../store/actions/product'
import ProductItem from './ProductItem'

export default function Product() {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)

  useEffect(() => {
    dispatch(get_product_by_id({ productId }))
  }, [])

  console.log('prod', product)

  return (
    <Layout title="商品详情">
      <Row>
        <Col span="18">
          {
            Object.keys(product).length > 0 && (
              <ProductItem product={product} showView={false} showCart={true} imgStyle={{ width: "50%", margin: "0 auto" }} />
            )
          }
        </Col>
      </Row>
    </Layout>
  )
}
