import React, { Component } from 'react'

export default class TestFormNoControl extends Component {

  submit = (e) => {
    e.preventDefault()
    console.log(this.refs.userName.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" ref="userName" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
