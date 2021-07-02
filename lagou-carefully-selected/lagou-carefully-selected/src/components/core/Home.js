import React from 'react'
import Layout from './Layout'
import Search from '../core/Search'
import { Row, Col, Typography } from 'antd'
import ProductItem from './ProductItem'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { get_products } from '../../store/actions/products'
const { Title } = Typography

export default function Home() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_products({ sortBy: "sold", limit: 4, order: "desc"}))
    dispatch(get_products({ sortBy: "createdAt", limit: 4, order: "desc"}))
  }, [])

  const { sold, createdAt } = useSelector(state => state.products)

  return (
    <Layout title="拉勾严选首页" subTitle="enjoy it" >
      <Search />

      <Title style={{ marginTop: 10 }} level={5}>最新上架</Title>
      <Row gutter={[16, 16]} >
        {
          createdAt.map(product => (
            <Col span="6" key={product._id}>
              <ProductItem product={product} />
            </Col>
          ))
        }
      </Row>

      <Title style={{ marginTop: 10 }} level={5}>最受欢迎</Title>
      <Row gutter={[16, 16]} >
      {
          sold.map(product => (
            <Col span="6" key={product._id}>
              <ProductItem product={product} />
            </Col>
          ))
        }
      </Row>
    </Layout>
  )
}
