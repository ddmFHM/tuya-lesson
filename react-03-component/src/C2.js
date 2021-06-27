import React from 'react'
import C3 from './C3'
export default function C2(props) {
  console.log(props)
  return (
    <div>
      <p>C2 - {props.name}</p>
      <C3 {...props} />
    </div>
  )
}
