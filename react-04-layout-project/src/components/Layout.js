import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </>
  )
}
