import React, { Component } from 'react'

export default class state extends Component {

  state = {
    name: 'componet-ddm',
    age: 20
  }

  handler1 = () => {
    this.setState({
      age: this.state.age - 1
    }, () => {
      console.log('cb--', this.state.age) 
    })
    console.log(this.state.age)
  }

  handler2 = () => {
    this.setState((state) => ({ age: state.age + 1 }))
  }

  handler3 = () => {
    this.setState((state) => ({ age: state.age + 1 }))
    this.setState((state) => ({ age: state.age + 2 }))
    // 传入两次执行两次
  }

  handler4 = () => {
    this.setState({
      age: this.state.age + 1
    })

    this.setState({
      age: this.state.age + 2
    })

    // 合并到最后依次，只 + 2
  }

  render() {
    return (
      <div>
        {this.props.name}
        {this.props.age}
        <hr />
        {this.state.name}
        {this.state.age}
        <button onClick={this.handler1} >点击 - 1</button>
        <button onClick={this.handler2} >点击 + 1</button>
        <button onClick={this.handler3} >点击 多次函数 ++</button>
        <button onClick={this.handler4} >点击 多次对象 ++</button>
      </div>
    )
  }
}
