import React, { useState } from 'react'

export default function App() {

  const [ageState, setAgeState] = useState(18)
  const [nameState, setNameState] = useState('ddm')

  function incrementAge() {
    // 此处四次操作会合并到最后一次只加10（覆盖）
    // setAgeState(ageState + 10)
    // setAgeState(ageState + 10)
    // setAgeState(ageState + 10)
    // setAgeState(ageState + 10)
    
    setAgeState((pre) => {
      // 此处拿到的就是修改后的
      return pre + 10
    })
    setAgeState((pre) => {
      return pre + 10
    })
    setAgeState((pre) => {
      return pre + 10
    })
    setAgeState((pre) => {
      return pre + 10
    })
  }

  return (
    <div>
      {ageState} - {nameState}
      <hr />
      <button onClick={() => {setAgeState(ageState + 1)}} >+</button>
      <button onClick={() => {setAgeState(ageState - 1)}} >-</button>
      <button onClick={() => {incrementAge()}} >++</button>
    </div>
  )
}
