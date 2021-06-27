import React, { Component } from 'react'
import StudentTitle from './Components/StudentTitle'
import StudentList from './Components/StudentList'
import StudentAdd from './Components/StudentAdd'

export default class App extends Component {

  state = {
    studentList: [{
      "number": "01",
      "name": "张三",
      "sex": "男",
      "age": 10,
      "date": "2020-12-04",
      "hobbies": ["足球", "篮球"],
      "college": "大前端"
    }, {
        "number": "02",
        "name": "李四",
        "sex": "男",
        "age": 20,
        "date": "2030-12-05",
        "hobbies": ["足球", "橄榄球"],
        "college": "Java"
    }, {
        "number": "03",
        "name": "王五",
        "sex": "男",
        "age": 30,
        "date": "2040-11-03",
        "hobbies": ["足球", "橄榄球", "篮球"],
        "college": "python"
    }]
  }

  addList = (data) => {
    this.setState({
      studentList: [...this.state.studentList, data]
    })
  }

  removeStudent = (number) => {
    this.setState({
      studentList: this.state.studentList.filter(student => student.number !== number)
    })
  }

  render() {
    return (
      <div className="container">
        <StudentTitle />
        <StudentAdd addList={this.addList} />
        <StudentList studentList={this.state.studentList} onRemove={this.removeStudent} />
      </div>
    )
  }
}
