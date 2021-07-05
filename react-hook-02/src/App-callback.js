import React, { useState, memo, useCallback } from 'react'

function Home ({ handler }) {
  console.log('Home 组件渲染')
  return (
    <div>
      Home | 
      <button onClick={handler} > 增加</button>
    </div>
  )
}

function About ({ handler }) {
  console.log('About 组件渲染')
  return (
    <div>
      About | 
      <button onClick={handler} > 减少</button>
    </div>
  )
}

const MemoHome = memo(Home)
const MemoAbout = memo(About)

export default function App() {

  console.log('App 组件渲染')

  const [numState, setNumState] = useState(0)
  const [ageState, setAgeState] = useState(18)

  // const increment = () => {
  //   setNumState(numState + 1)
  // }

  // const decrement = () => {
  //   setAgeState(ageState - 1)
  // }

  const decrement = useCallback(() => {
    setAgeState(ageState - 1)
  }, [ageState])

  const increment = useCallback(() => {
    setNumState(numState + 1)
  }, [numState])

  return (
    <div>
      <p>num数据：{numState}</p>
      {/* <button onClick={ () => { increment() } } >增加</button> */}
      <hr />
      <p>age数据：{ageState}</p>
      {/* <button onClick={ () => { decrement() } } >减少</button> */}
      <hr />
      <hr />
      <MemoHome handler={increment} />
      <MemoAbout handler={decrement} />
    </div>
  )
}
