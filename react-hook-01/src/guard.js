import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth'

export default class AuthRouteGuard extends Component {
  
  render() {
    let { component: Component, path, ...rest } = this.props
    return (
      <Route {...rest} render={(props) => {
        if (auth.isAuthorized()) {
          return <Component {...props} />
        } else {
          return <Redirect to="/home" />
        }
      }} />
    )
  }
}
