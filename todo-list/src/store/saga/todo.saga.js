import { takeEvery, put } from 'redux-saga/effects'
import { load_todo_success, load_todo, 
         add_todo, add_todo_success, 
         remove_todo, remove_todo_success, 
         modify_todo, modify_todo_success,
         clear_todo, clear_todo_success,
         modify_todo_edit, modify_todo_edit_success,
       } from '../actions/todo.actions'

let data = [
  {
    id: 1,
    taskName: 'task1',
    isCompleted: true,
    isEditing: false
  },
  {
    id: 2,
    taskName: 'task2',
    isCompleted: false,
    isEditing: false
  }
]

export default function* todoSaga() {
  // 拦截 load_todo action
  yield takeEvery(load_todo, getTodos)
  yield takeEvery(add_todo, addTodo)
  yield takeEvery(remove_todo, removeTodo)
  yield takeEvery(modify_todo, modifyTodo)
  yield takeEvery(clear_todo, clearTodo)
  yield takeEvery(modify_todo_edit, editTodo)
}

function* getTodos() {
  let res = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 300)
  })
  yield put(load_todo_success(res))
}

function* addTodo(action) {
  let res = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now(),
        taskName: action.payload,
        isCompleted: false,
        isEditing: false
      })
    }, 300);
  })
  yield put(add_todo_success(res))
}

function* removeTodo(action) {
  let res = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve(action.payload)
    }, 300);
  })
  yield put(remove_todo_success(res))
}

function* modifyTodo(action) {
  let res = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve(action.payload)
    }, 1000);
  })
  yield put(modify_todo_success(res))
}

function* clearTodo() {
  yield new Promise((resolve) => {
    resolve()
  })
  yield put(clear_todo_success())
}

function* editTodo(action) {
  let res = yield new Promise((resolve) => {
    resolve(action.payload)
  })
  yield put(modify_todo_edit_success(res))
}