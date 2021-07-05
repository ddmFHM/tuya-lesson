import React, { Component } from 'react'
import auth from '../auth'
export default class Home extends Component {

  login = () => {
    auth.login()
  }

  render() {
    return (
      <div>
        Home
        <button onClick={this.login} >登录</button>
      </div>
    )
  }
}
