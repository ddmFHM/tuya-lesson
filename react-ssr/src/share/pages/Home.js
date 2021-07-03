import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div onClick={() => { console.log('hello') } }>
      <Link to="/list" >list</Link>
    </div>
  )
}
