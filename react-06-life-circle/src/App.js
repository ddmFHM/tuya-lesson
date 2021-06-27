import React, { Component } from 'react'
import About from './About'

export default class App extends Component {

  constructor() {
    super()
    console.log('constructor 1')
    this.handler = this.handler.bind(this)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('component did mount 3')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  handler() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('render 2')
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
        <About />
      </div>
    )
  }
}
