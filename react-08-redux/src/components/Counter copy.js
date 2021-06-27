import React from 'react'
import { connect } from 'react-redux'

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
  increment () {
    dispatch({ type: "increment" })
  },
  increment_n (n) {
    dispatch({ type: "increment_n", payload: n })
  },
  decrement () {
    dispatch({ type: "decrement" })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)