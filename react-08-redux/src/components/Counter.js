import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../Store/Actions/Counter.action'

function Counter(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.increment} >+ +</button>
      <button onClick={() => { props.increment_n(3) }} >+ n</button>
      <button onClick={props.decrement} >- -</button>
    </div>
  )
}


const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(counterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)