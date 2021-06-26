import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class About extends Component {

  static defaultProps = {
    age: 20
  }

  static propTypes = {
    name: PropTypes.string
  }

  render() {
    console.log(this.props.name)
    return (
      <div>
        About 组件 - {this.props.name} - {this.props.age}
      </div>
    )
  }
}
