import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as personActions from './store/Actions/Person.action'

class App extends Component {

  handler = () => {
    this.props.personAdd()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handler}>获取数据</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.person
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(personActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

