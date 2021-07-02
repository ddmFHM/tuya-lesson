import { takeEvery, put } from 'redux-saga/effects'
import { signup, signup_fail, signup_success } from '../actions/signup'
import { API } from '../../config'
import axios from 'axios'

export default function* signupSaga() {
  yield takeEvery(signup, handleSignup)
}

function* handleSignup(action) {
  try {
    yield axios.post(`${API}/user/signup`, action.payload)
    yield put(signup_success())
  } catch (error) {
    yield put(signup_fail({
      message: "注册失败"
    }))
  }
}