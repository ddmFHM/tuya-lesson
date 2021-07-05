import React, { useState, memo, useMemo } from 'react'

function Home ({ handler, person }) {
  console.log('Home 组件渲染')
  return (
    <div>
      Home | 
      <p>{person.name} --- {person.age}</p>
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

  const decrement = useMemo(() => {
    return () => {
      setAgeState(ageState - 1)
    }
  }, [ageState])

  const increment = useMemo(() => {
    return () => {
      setNumState(numState + 1)
    }
  }, [numState])

  const person = useMemo(() => {
    return { name: "ddm", age: 18 }
  }, [])

  return (
    <div>
      <p>num数据：{numState}</p>
      {/* <button onClick={ () => { increment() } } >增加</button> */}
      <hr />
      <p>age数据：{ageState}</p>
      {/* <button onClick={ () => { decrement() } } >减少</button> */}
      <hr />
      <hr />
      <MemoHome person={person} handler={increment} />
      <MemoAbout handler={decrement} />
    </div>
  )
}
