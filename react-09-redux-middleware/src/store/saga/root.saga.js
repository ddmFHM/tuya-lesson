import { all } from 'redux-saga/effects'
import personSaga from './Person.saga'

export default function* rootSaga() {
  yield all([
    personSaga()
  ])
}