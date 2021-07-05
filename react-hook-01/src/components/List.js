import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import auth from '../auth'
import Inner from './Inner'
import Outer from './Outer'
import { createHashHistory } from 'history'

export default class List extends Component {

  logout = () => {
    auth.logout()
    createHashHistory().push('/home')
  }

  render() {
    return (
      <div>
        <div>
          <p>
            <Link to="/detail/1" >Detail1</Link>
          </p>
          <p>
            <Link to="/detail/2" >Detail2</Link>
          </p>
          <p>
            <Link to="/home?title=来自于detail" >Detail3</Link>
          </p>
        </div>
        <div>
          <Link to={`${this.props.match.url}/inner`} >国内</Link>
          <Link to={`${this.props.match.url}/outer`} >国际</Link>
        </div>
        <Route path={`${this.props.match.path}/inner`} component={Inner} ></Route>
        <Route path={`${this.props.match.path}/outer`} component={Outer} ></Route>
        <hr />
        <button onClick={this.logout} >登出</button>
      </div>
    )
  }
}
