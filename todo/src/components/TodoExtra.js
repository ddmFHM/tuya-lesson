import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class TodoExtra extends Component {
  render() {

    const { getTotalUncompletedTodos, filter, filterChange } = this.props.todo

    return (
      <footer className="footer">
        <span className="todo-count"><strong>{getTotalUncompletedTodos}</strong> item left</span>
        <ul className="filters">
          <li>
            <button className={filter === "all" ? "selected" : ""} onClick={ () => filterChange('all') } >All</button>
          </li>
          <li>
            <button className={filter === "active" ? "selected" : ""} onClick={ () => filterChange('active') } >Active</button>
          </li>
          <li>
            <button className={filter === "completed" ? "selected" : ""} onClick={ () => filterChange('completed') } >Completed</button>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

export default TodoExtra