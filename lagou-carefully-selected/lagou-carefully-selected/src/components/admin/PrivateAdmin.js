import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
export default function PrivateAdmin({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
      const auth = isAuth()
      if (auth && (auth.user.role === 1)) return <Component />
      return <Redirect to="/signin" />
    }} >
    </Route>
  )
}
