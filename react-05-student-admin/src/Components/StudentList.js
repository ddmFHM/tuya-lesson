import React, { Component } from 'react'

export default class StudentList extends Component {
  render() {
    let averageAge = 0;
    this.props.studentList.forEach(student => {
      averageAge += +student.age    
    })
    return (
      <div className="col-md-6 col-md-offset-1">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>学号</th>
              <th>姓名</th>
              <th>性别</th>
              <th>年龄</th>
              <th>入学时间</th>
              <th>爱好</th>
              <th>所属学院</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.studentList.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{student.number}</td>
                    <td>{student.name}</td>
                    <td>{student.sex}</td>
                    <td>{student.age}</td>
                    <td>2020-08-02</td>
                    <td>
                      {
                        student.hobbies.map((hobby, index) => {
                          return <span key={index}>{hobby}</span>
                        })
                      }
                    </td>
                    <td>{student.college}</td>
                    <td>
                      <span onClick={() => {this.props.onRemove(student.number)}}>删除</span>
                      <span>修改</span>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {
          (this.props.studentList.length > 0 ?
            <>
              <p>总共有 {this.props.studentList.length} 个学生</p>
              <p>学生的平均年龄是 {averageAge / this.props.studentList.length}</p>
            </>
            : <p className="text-center">无学生信息</p>
          )
        }
        
      </div>
    )
  }
}
