import React, { Component } from 'react'

export default class StudentAdd extends Component {

  constructor() {
    super()
    this.stateHandler = this.stateHandler.bind(null)
  }

  state = {
    number: '',
    name: '',
    sex: '女',
    age: '',
    college: '大前端',
    hobbies: [
      {
        id: 1,
        title: "篮球",
        isChecked: false
      },
      {
        id: 2,
        title: "代码",
        isChecked: false
      },
      {
        id: 3,
        title: "跑步",
        isChecked: false
      }
    ]
  }

  origin = JSON.parse(JSON.stringify(this.state))

  stateHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  hobbyHandler = (index, e) => {
    let temp = [...this.state.hobbies]
    temp[index].isChecked = e.target.checked
    this.setState({
      hobbies: temp
    })
  }

  submit = (e) => {
    e.preventDefault()
    // 筛选出爱好
    let hobbies = this.state.hobbies.filter(item => item.isChecked).map(item => item.title)
    let data = {
      ...this.state,
      hobbies
    }
    this.props.addList(data)
    console.log(this.origin)
    this.setState({
      ...this.origin
    })
  }

  render() {
    return (
      <div className="col-md-5">
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>学号</label>
            <input name="number" value={this.state.number} onChange={this.stateHandler} type="number" className="form-control" placeholder="请输入学号" />
          </div>
          <div className="form-group">
            <label>姓名</label>
            <input name="name" value={this.state.name} onChange={this.stateHandler} type="text" className="form-control" placeholder="请输入姓名" />
          </div>
          <div className="form-group">
            <label>性别&nbsp;&nbsp;</label>
            <label className="checkbox-inline">
              <input name="sex" checked={this.state.sex === "男"} onChange={this.stateHandler} type="radio" value="男" /> 男
            </label>
            <label className="checkbox-inline">
              <input name="sex" checked={this.state.sex === "女"} onChange={this.stateHandler} type="radio" value="女" /> 女
            </label>
          </div>
          <div className="form-group">
            <label>年龄</label>
            <input name="age" value={this.state.age} onChange={this.stateHandler} type="text" className="form-control" placeholder="请输入姓名" />
          </div>
          {/* <div className="form-group">
            <label>入学时间</label>
            <input className="form-control" type="date" />
          </div> */}
          <div className="form-group">
            <label>爱好</label>
            {
              this.state.hobbies.map((hobby, index) => {
                return (
                  <div className="checkbox" key={hobby.id}>
                    <label>
                      <input type="checkbox" checked={hobby.isChecked} value={hobby.title} onChange={this.hobbyHandler.bind(null, index)} /> {hobby.title}
                    </label>
                  </div>
                )
              })
            }
          </div>
          <div className="form-group">
            <label>所属学院</label>
            <select name="college" value={this.state.college} onChange={this.stateHandler} className="form-control">
              <option value="大前端">大前端</option>
              <option value="Java">Java</option>
              <option value="python">python</option>
            </select>
          </div>
          <button type="submit" className="btn btn-default">添加</button>
        </form>
      </div>
    )
  }
}
