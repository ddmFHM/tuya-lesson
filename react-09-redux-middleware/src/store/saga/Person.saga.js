import { takeEvery, put } from 'redux-saga/effects'

export default function* personSaga () {
  yield takeEvery('personAdd', getData)
}

function* getData(timer) {
  console.log('saga 2')
  let res = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 2,
          name: 'ddm2',
          age: 18
        },
        {
          id: 3,
          name: 'ddm3',
          age: 20
        }
      ])
    }, timer)
  })
  yield put({ type: 'loadPersonSuccess', payload: res })
}