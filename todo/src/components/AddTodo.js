import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class AddTodo extends Component {

  addTodo = (e) => {
    const { todoAdd } = this.props.todo
    if (e.keyCode === 13) {
      const taskName = e.target.value
      if (taskName.trim().length === 0) return
      todoAdd(taskName)
      e.target.value = ""
    }
  }
  
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onKeyUp={(e) => { this.addTodo(e) }}
        />
      </header>
    )
  }
}

export default AddTodo

