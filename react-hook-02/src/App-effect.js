import React, { useEffect, useState } from 'react'

function Header() {

  const [strState, setstrState] = useState('ddm')
  const [numState, setNumState] = useState(0)

  useEffect(() => {
    // 事件监听操作
    console.log('事件监听')
  })

  useEffect(() => {
    // 发送网络请求
    console.log('网络请求')
  })

  useEffect(() => {
    // 判断是否登录
  })

  useEffect(() => {
    console.log('挂载与更新操作完成了')
    return () => {
      console.log('卸载时候执行')
    }
  }, [strState])

  return (
    <div>
      <p> {strState} <button onClick={() => { setstrState('hhh') }} >修改字符</button> </p>
      <p> {numState} <button onClick={() => { setNumState(numState + 1 ) }} >修改数值</button> </p>
    </div>
  )
}

export default function App() {

  const [isShow, setIsShow] = useState(true)

  return (
    <div>
      { isShow && <Header /> }
      <hr/>
      <button onClick={() => { setIsShow(!isShow) }} >显示/隐藏</button>
    </div>
  )
}
