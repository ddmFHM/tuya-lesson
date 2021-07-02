import React from 'react'
import { Typography, List, Checkbox } from 'antd'
import useGetCategories from '../../helpers/getCategories'
import Item from 'antd/lib/list/Item'
const { Title } = Typography


export default function FilterByCategory({ handleFilters }) {
  const categories = useGetCategories()

  const onChange = checkedValue => {
    handleFilters(checkedValue)
  }

  return (
    <>
      <Title level={5} >按照分类筛选</Title>
      <Checkbox.Group onChange={onChange} >
        <List
          dataSource={categories}
          renderItem={category => (
            <List.Item>
              <Checkbox value={category._id} >
                {category.name}
              </Checkbox>
            </List.Item>
          )}
        />
      </Checkbox.Group>
    </>
  )
}
