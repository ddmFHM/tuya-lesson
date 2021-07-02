import React from 'react'
import Layout from '../core/Layout'
import { Form, Input, Button, message } from 'antd'
import { API } from '../../config'
import { isAuth } from '../../helpers/auth'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AddCategory() {

  const { token, user: { _id } } = isAuth()
  console.log(isAuth())

  const handleOnFinish = value => {
    if (value.name) {
      axios.post(`${API}/category/create/${_id}`, value, {
        headers: {
          Authorization: token
        }
      }).then(response => {
        console.log(console.log('---', response))
        message.success(`${response.data.name}添加成功`)
      }).catch(() => {
        message.warning(`添加失败，名称重复`)
      })
    }
  }

  return (
    <Layout title="添加分类" >
      <Form onFinish={handleOnFinish}>
        <Form.Item  name="name" label="分类名称" >
          <Input />
        </Form.Item>
        <Form.Item label="分类名称" >
          <Button type="primary" htmlType="submit" >添加分类</Button>
        </Form.Item>
      </Form>
      <Button >
        <Link to="/admin/dashboard" >
          返回 Dashboard
        </Link>
      </Button>
    </Layout>
  )
}
