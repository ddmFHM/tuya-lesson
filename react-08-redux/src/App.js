import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as contentActions from './Store/Actions/Content.action'
class App extends Component {

  constructor() {
    super()
    this.myRef = React.createRef()
  }

  handler = () => {
    let content = this.myRef.current.value
    this.props.addContent(content)
    this.myRef.current.value = ""
  }

  render() {
    console.log(this.props)
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
  content: state.content.content
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(contentActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
