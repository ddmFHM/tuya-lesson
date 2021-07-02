import React from 'react'
import Layout from '../core/Layout'
import { Form, Upload, Button, Input, Select, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { API } from '../../config'
import axios from 'axios'
import { isAuth } from '../../helpers/auth'
import { useHistory } from 'react-router-dom'
import useGetCategories from '../../helpers/getCategories'
export default function AddProduct() {

  const props = {
    beforeUpload (file) {
      setFile(file)
      return false
    }
  }

  const history = useHistory()

  const [form] = Form.useForm()

  const { user, token } = isAuth()

  const [file, setFile] = useState([])

  const categories = useGetCategories()

  const onFinish = value => {
    // const formData = new FormData()
    // for (let attr in value) {
    //   formData.append(attr, value[attr])
    // }
    // formData.append('photo', file)
    value.photo = "https://img0.baidu.com/it/u=3101694723,748884042&fm=26&fmt=auto&gp=0.jpg"
    console.log(value)
    axios.post(`${API}/product/create/${user._id}`, value, {
      headers: {
        Authorization: token
      }
    }).then(() => {
      message.success('商品添加成功')
      form.resetFields()
      history.push('/admin/dashboard')
    })
  }

  return (
    <Layout title="添加商品">
      <Form form={form} onFinish={onFinish} initialValues={{categories: "-1"}}>
        <Form.Item>
          <Upload {...props} >
            <Button icon={<UploadOutlined />}>
              上传商品封面
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item label="商品名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="商品描述" name="description">
          <Input />
        </Form.Item>
        <Form.Item label="商品价格" name="price">
          <Input />
        </Form.Item>
        <Form.Item label="商品分类" name="category">
          <Select>
            <Select.Option value="-1" >请选择分类</Select.Option>
            {
              categories.map(({ name, _id }) => 
                (<Select.Option key={_id} value={_id} >{name}</Select.Option>)
              )
            }
          </Select>
        </Form.Item>
        <Form.Item label="商品熟练" name="quantity">
          <Input />
        </Form.Item>
        <Form.Item label="是否需要运输" name="shipping">
          <Select>
            <Select.Option value={true} >是</Select.Option>
            <Select.Option value={false} >否</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            添加商品
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}
