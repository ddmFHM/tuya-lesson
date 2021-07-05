import React, { Component } from 'react'
import { createHashHistory } from 'history'
import Test from '../components/test'

export default class detai extends Component {
  render() {
    return (
      <div>
        <p>detail - {this.props.match.params.id}</p>
        <button onClick={() => { createHashHistory().push('/home') }} >To Home</button>
        <Test />
      </div>
    )
  }
}
