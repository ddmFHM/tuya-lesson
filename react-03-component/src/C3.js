import React from 'react'

export default function C3(props) {
  console.log(props)
  return (
    <div>
      <p>C3 - {props.name}</p>
      <button onClick={() => {
        props.change({
          name: 'ddm1'
        })
      }}>点击</button>
    </div>
  )
}
