import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('counter')
@observer
class App extends Component {

  componentDidMount () {
    // const { getData } = this.props.counter
    // getData()
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <button onClick={ counter.increment } >increment</button>
        <span>{ counter.count }</span>
        <button onClick={ counter.decrement } >decrement</button>
        <span>{ counter.getResult }</span>
        <hr />
        <input type="text" value={ counter.username } onChange={ (e) => { counter.changeUsername(e.target.value) } } />
        { counter.username }
        <div>
          {/* {
            counter.users.map(user => (
              <div key={user.id} >
                <span>{ user.id } -- </span>
                <span>{ user.login }</span>
              </div>
            ))
          } */}
        </div>
      </div>
    )
  }
}

export default App
