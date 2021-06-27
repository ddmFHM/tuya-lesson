import React, { Component } from 'react'
import C1 from './C1'
export default class TestC extends Component {

  state = {
    name: "ddm",
    age: 18
  }

  handler = (target) => {
    this.setState({
      ...target
    })
  }

  render() {
    return (
      <div>
        <C1 {...this.state} change={this.handler} />
      </div>
    )
  }
}
