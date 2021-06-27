import React from 'react'
import C2 from './C2'
export default function C1(props) {
  console.log(props)
  return (
    <div>
      <p>C1 - {props.name}</p>
      <C2 {...props} />
    </div>
  )
}
