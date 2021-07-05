import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
  
class test extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        test
      </div>
    )
  }
}

export default withRouter(test)