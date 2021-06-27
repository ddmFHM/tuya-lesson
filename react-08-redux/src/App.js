import React, { Component } from 'react'
import { connect } from 'react-redux'
class App extends Component {

  constructor() {
    super()
    this.myRef = React.createRef()
  }

  handler = () => {
    let content = this.myRef.current.value
    this.props.dispatch({ type: "addContent", payload: content})
    this.myRef.current.value = ""
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="输入标题" ref={this.myRef} />
        <button onClick={this.handler} >新增</button>
        <ul>
          {
            this.props.content.map((item, index) => <li key={index} >{item}</li>)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  content: state.content
})

export default connect(mapStateToProps)(App)
