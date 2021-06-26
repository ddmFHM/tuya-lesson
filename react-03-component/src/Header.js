import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    <div>
      Header 组件 - {props.name} - {props.age}
      {props.children}
    </div>
  )
}

Header.defaultProps = {
  age: 18
}

Header.propTypes = {
  name: PropTypes.string
}