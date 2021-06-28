import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'


function reducer(state, action) {
  console.log(action, 'reducer')
  return state
}

// 定义一个中间件函数
function middle({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      // 此处可以进行异步操作
      setTimeout(() => {
        console.log(action)
        // 此处如果我们需要操作一些数据，然后往后面传递，那就可以通过属性交给 action
        action.payload = 100
        // 异步操作执行完成后，需要将 action 还给 store 继续往后传递
        return  next(action)
      }, 3000)
      console.log('action 被触发时执行')
    }
  }
}

const store = createStore(reducer, applyMiddleware(middle))

store.dispatch({ type: "test" })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
