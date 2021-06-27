import React, { PureComponent } from 'react'

export default class About extends PureComponent {

  constructor() {
    super()
    this.handler = this.handler.bind(this)
    this.state = {
      count: 0
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count === this.state.count) return false
  //   return true
  // }

  handler() {
    this.setState({
      count: this.state.count + 3
    })
  }

  render() {
    console.log('About render')
    return (
      <div>
        <hr />
        About -
        {this.state.count}-
        <button onClick={this.handler}>点击</button>
      </div>
    )
  }
}
