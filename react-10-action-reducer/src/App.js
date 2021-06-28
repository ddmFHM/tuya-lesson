import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as countActions from './Store/Actions/Count.action'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.increment} >++</button>
        <p>{this.props.count}</p>
        <button onClick={this.props.decrement}>--</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.CountReducer.count
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(countActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)