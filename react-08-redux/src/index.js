import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'

const initialState = {
  content: ['默认数据']
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case "addContent":
      return {
        content: [
          ...state.content,
          action.payload
        ]
      }
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <>
    <Provider store={store} ><App /></Provider>
  </>,
  document.getElementById('root')
);

