import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
export default function PrivateUser({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
      if (isAuth()) return <Component {...props} />
      return <Redirect to="/signin" />
    }} >
    </Route>
  )
}
