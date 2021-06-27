import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  getArticle = async() => {
    let articles = await axios.get('/api/article.json').then(response => response.data)
    this.setState({
      articles
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getArticle} >获取数据</button>
        <ul>
          {
            this.state.articles.map(article => {
              return (
                <li key={ article.id } >{ article.title }</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
