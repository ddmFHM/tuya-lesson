import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../store/actions/todo.actions'

class Main extends Component {

  componentDidMount() {
    this.props.load_todo()
  }

  removeTask = (id) => {
    if (window.confirm('确定删除？')) {
      this.props.remove_todo(id)
    }
  }

  render() {
    return (
      <section className="main">
        <input type="checkbox" className="toggle-all" />
        <ul className="todo-list">
          {
            this.props.todos.map(todo => {
              let classes = []
              if (todo.isCompleted) classes.push('completed')
              if (todo.isEditing) classes.push('editing')
              classes = classes.join(" ")
              return (
                <li className={classes} key={todo.id}>
                  <div className="view">
                    <input type="checkbox" defaultChecked={todo.isCompleted} className="toggle" onChange={() => { this.props.modify_todo(todo.id) }} />
                    <label onDoubleClick={() => { this.props.modify_todo_edit(todo.id) }} >{todo.taskName}</label>
                    <button onClick={() => { this.removeTask(todo.id) }} className="destroy"></button>
                  </div>
                  <input className="edit" defaultValue={todo.taskName} />
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todoReducer.todos, state.todoReducer.filter),
  filter: state.todoReducer.filter
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions, dispatch)
})

function filterTodos(todos, filter) {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(todo => !todo.isCompleted)
    case 'completed':
      return todos.filter(todo => todo.isCompleted)
    default:
      break;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
