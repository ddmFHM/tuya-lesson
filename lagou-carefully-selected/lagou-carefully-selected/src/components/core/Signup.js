import React from 'react'
import Layout from './Layout'
import { Form, Input, Button, Spin, Result } from 'antd';
import { useDispatch, useSelector} from 'react-redux'
import { signup, signup_reset } from '../../store/actions/signup';
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Singnup() {
  const dispatch = useDispatch()

  const { loading, loaded, success, message } = useSelector(state => state.signup)

  const [form] = Form.useForm()

  const handleOnFinish = value => {
    dispatch(signup(value))
  }

  const showLoading = () => {
    if (loading) {
      return <Spin />
    }
  }

  useEffect(() => {
    if (loaded && success) form.resetFields()
  }, [loaded, success, form])

  useEffect(() => {
    return () => {
      dispatch(signup_reset())
    }
  }, [])

  const showSuccess = () => {
    if (loaded && success) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary">
              <Link to="/signin">登录</Link>
            </Button>,
          ]}
        />
      )
    }
  }

  const showError = () => {
    if (loaded && !success) {
      return (
        <Result
          status="warning"
          title="注册失败"
          subTitle={message}
        />
      )
    }
  }

  const signupForm = () => {
    return (
      <Form form={form} onFinish={handleOnFinish} >
        <Form.Item name="name" label="昵称" >
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码" >
          <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱" >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >注册</Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <Layout title="注册" subTitle="register" >
      {showLoading()}
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  )
}
