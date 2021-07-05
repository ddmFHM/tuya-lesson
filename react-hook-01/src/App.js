import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import AuthRouteGuard from './guard'
import loadComponent from '@loadable/component'

const Home = loadComponent(() => import('./components/Home'))
const List = loadComponent(() => import('./components/List'))
const Detail = loadComponent(() => import('./components/Detail'))
const NotFound = loadComponent(() => import('./components/NotFound'))

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/home" >Home</Link> |
          <Link to="/list" > List</Link>
        </div>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <AuthRouteGuard path="/list" component={List} />
            <Route path="/detail/:id" component={Detail} exact />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}
