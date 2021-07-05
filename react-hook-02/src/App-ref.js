import React, { createRef, PureComponent, useState, useRef } from 'react'

class Home extends PureComponent {
  render () {
    return (
      <div>Home 组件</div>
    )
  }
}

export default function App() {
  const [numState, setNumState] = useState(100)
  const obj = useRef(numState)

  return (
    <div>
      <p>obj = {obj.current}</p>
      <p>{numState}</p>
      <button onClick={() => { setNumState(numState + 1) }} >点击</button>
    </div>
  )
}
