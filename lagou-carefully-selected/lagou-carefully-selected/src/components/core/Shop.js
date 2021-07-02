import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { Row, Col, Space, Button, Empty } from 'antd'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'
import { useDispatch, useSelector } from 'react-redux'
import { filter_products } from '../../store/actions/filter'
import ProductItem from './ProductItem'
export default function Shop() {
  const [skip, setSkip] = useState(0)
  const [filters, setFilters] = useState({})
  const dispatch = useDispatch()
  const { data, size } = useSelector(state => state.filter)

  const loadMore = () => {
    setSkip(skip + 4)
  }

  useEffect(() => {
    setSkip(0)
  }, [filters])

  useEffect(() => {
    dispatch(filter_products({ filters, skip }))
  }, [filters, skip])

  return (
    <Layout title="拉勾严选商城" subTitle="buy it" >
      <Row>
        <Col span="4">
          <Space size="middle" direction="vertical">
            <FilterByCategory handleFilters={filter => setFilters({...filters, category: filter})} />
            <FilterByPrice handleFilters={filter => setFilters({...filters, price: filter})} />
          </Space>
        </Col>
        <Col span="20">
          <Space size="large" direction="vertical" >
            <Row gutter={[16, 16]} >
              {
                data.map(product => (
                  <Col span="6">
                    <ProductItem product={product} />
                  </Col>
                ))
              }
            </Row>
            <Row>
              { size >=4 ? (<Button onClick={loadMore} >加载更多</Button>) : <Empty /> }
            </Row>
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}
