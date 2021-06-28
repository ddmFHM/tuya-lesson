import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../store/actions/todo.actions'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.props.todos.filter(todo => !todo.isCompleted).length}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <span style={this.props.filter === "all" ? ({color: "#f40"}) : {}} onClick={() => {this.props.modify_todo_filter('all')}}>All</span>
            </li>
            <li>
              <span style={this.props.filter === "active" ? ({color: "#f40"}) : {}} onClick={() => {this.props.modify_todo_filter('active')}}>Active</span>
            </li>
            <li>
              <span style={this.props.filter === "completed" ? ({color: "#f40"}) : {}} onClick={() => {this.props.modify_todo_filter('completed')}}>Completed</span>
            </li>
          </ul>
          <button onClick={() => { this.props.clear_todo() }} className="clear-completed">Clear completed</button>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos,
  filter: state.todoReducer.filter
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)