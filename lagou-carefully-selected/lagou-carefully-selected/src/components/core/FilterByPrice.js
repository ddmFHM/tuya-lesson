import React from 'react'
import { Typography, List, Radio } from 'antd'
const { Title } = Typography

const prices = [
  { id: 0, name: "不限价格", array: [] },
  { id: 1, name: "1 - 50", array: [1, 50] },
  { id: 2, name: "51 -100", array: [51, 100] },
  { id: 3, name: "101 - 150", array: [101, 150] },
]

export default function FilterByPrice({ handleFilters }) {

  const onChange = event => {
    handleFilters(event.target.value)
  }

  return (
    <>
      <Title level={5} >按照价格筛选</Title>
      <Radio.Group onChange={onChange}>
        <List
          dataSource={prices}
          renderItem={price => (
            <List.Item key={price.id}>
              <Radio value={price.array} >
                {price.name}
              </Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  )
}
