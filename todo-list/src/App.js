import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

export default class App extends Component {

  render() {

    return (
      <div className="todoapp">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
