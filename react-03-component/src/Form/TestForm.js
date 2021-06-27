import React, { Component } from 'react'

export default class TestForm extends Component {

  state = {
    name: 'ddm',
    age: 18,
    subject: '前端',
    sex: '男'
  }

  hobbies = [
    {
      id: 1,
      title: 'vue',
      isChecked: false
    },
    {
      id: 2,
      title: 'React',
      isChecked: true
    },
    {
      id: 3,
      title: 'Angular',
      isChecked: false
    }
  ]

  // handlerChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  onChange = (e, index) => {
    console.log(index)
    this.hobbies[index].isChecked = e.target.checked
    console.log(this.hobbies)
  }

  submit = (e) => {
    e.preventDefault()
    console.log(this.hobbies.filter(item => item.isChecked).map(item => item.id))
  }

  render() {

    let result = this.hobbies.map((hobby, index) => {
      return (
        <label key={hobby.id}>
          <input type="checkbox" defaultChecked={hobby.isChecked} 
          onChange={(e) => this.onChange(e, index)} />{hobby.title}
        </label>
      )
    })

    return (
      <div>
        {/* input */}
        {/* <input type="text" name="name" value={this.state.name} onChange={this.handlerChange} />
        <input type="text" name="age" value={this.state.age} onChange={this.handlerChange} />
        <input type="text" defaultValue={this.state.name} />
        <input type="text" value={this.state.name} readOnly /> */}

        {/* <select name="subject" value={this.state.subject} onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }} > 
          <option value="前端">前端</option>
          <option value="后端">后端</option>
          <option value="服务端">服务端</option>
        </select> */}

        {/* <input type="radio" name="sex" value="男" defaultChecked={this.state.sex === "男"} onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }} />男
        <input type="radio" name="sex" value="女" defaultChecked={this.state.sex === "女"} onChange={(e) => { this.setState({ [e.target.name]: e.target.value }) }} />女 */}

        <form onSubmit={this.submit}>
          {result}
          <hr />
          <input type="submit"/>
        </form>

      </div>
    )
  }
}
