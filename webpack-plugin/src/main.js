import './main.css'
import './a.js'
console.log(123)

module.hot.accept('./a.js',() => {
  console.log('hot')
})