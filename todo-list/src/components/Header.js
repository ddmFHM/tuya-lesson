import React, { Component } from 'react'
import * as todoActions from '../store/actions/todo.actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Header extends Component {

  addTodo = (e) => {
    if (e.keyCode === 13) {
      let taskName = e.target.value

      if (taskName.trim().length === 0) {
        alert('输入任务内容，再单击回车')
        return
      }
      this.props.add_todo(taskName)
      e.target.value = ""
    }
  }

  render() {

    return (
      <header className="header">
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="还有什么任务没完成？"
          onKeyUp={this.addTodo} />
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)