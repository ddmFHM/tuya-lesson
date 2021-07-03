/*
  reducer
  preloadedState: 预存储的store
  enhancer: 对store功能进行增强

  createStore(reducer, preloadedState, enhancer) {
    getState, dispatch, subscribe
  }
*/

function createStore(reducer, preloadedState, enhancer) {
  /* 约束reducer参数类型 */
  if (typeof reducer !== 'function') {
    throw 'reducer muset be a function'
  }
  /* 判断enhancer参数是否传递 */
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('enhancer must be a function')
    }
    return enhancer(createStore)(reducer, preloadedState)
  }
  /* store对象中存储的状态 */
  var currentState = preloadedState
  /* 存放订阅者 */
  var currentListeners = []
  /* 获取状态 */ 
  function getState() {
    return currentState
  }
  /* 触发action 用返回值替换原有的store */
  function dispatch(action) {
    /* 判断action是否是对象 判断对象中是否有type属性 */
    if (!isPlainObject(action)) throw new Error('action must be a object')
    if (typeof action.type === 'undefined') throw new Error('action.type must be a string')
    currentState = reducer(currentState, action)
    /* 循环调用订阅者 */
    for (let i = 0; i < currentListeners.length; i++) {
      var listener = currentListeners[i]
      listener()
    }
  }
  /* 订阅状态 */
  function subscribe(listener) {
    currentListeners.push(listener)
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

/* 判断obj是否是对象 */
function isPlainObject(obj) {
  /* 基本类型 */
  if (typeof obj !== 'object' || obj === null) return false
  /* 数组和对象 */
  var proto = obj
  while (Object.getPrototypeOf(proto) != null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(obj) == proto
}

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadedState) {
      // 创建store
      var store = createStore(reducer, preloadedState)
      var middlewareAPI = {
        getState: store.getState,
        dispatch: store.dispatch
      }
      
      var chain = middlewares.map(middleware => middleware(middlewareAPI))
      var dispatch = compose (...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}

function compose () {
  var funcs = [...arguments]
  return function (dispatch) {
    for (var i = funcs.length - 1; i >= 0; i--) {
      dispatch = funcs[i](dispatch)
    }
    return dispatch
  }
}

function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {}
  for (const key in actionCreators) {
    (function(key) {
      boundActionCreators[key] = function () {
        dispatch(actionCreators[key]())
      }
    })(key)
  }
  return boundActionCreators
}

function combineReducers(reducers) {
  // 检查reducers类型
  var reducerKeys = Object.keys(reducers)
  for (let i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i]
    if (typeof reducers[key] !== 'function') throw new Error('reducer must be a function')
  }

  return function (state, action) {
    var nextState = {}
    for (let i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i]
      var reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
    }
    console.log(nextState)
    return nextState
  }
}