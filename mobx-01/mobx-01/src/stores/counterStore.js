import { makeObservable, observable, action, configure, runInAction, flow, computed, autorun } from 'mobx'
import axios from 'axios'

/* 通过配置强制程序使用action函数更改应用程序中的状态: 即mobx严格模式 */
configure({ enforceActions: 'observed' })

class CounterStore {


  constructor() {
    makeObservable(this)

    autorun(() => {
      try {
        uniqueUsername(this.username)
        console.log('用户名可用')
      } catch (e) {
        console.log(e.message)
      }
    }, {
      delay: 1500
    })

  }

  @observable count = 0
  @observable users = []
  @observable username = ''

  // @action increment = () => {
  //   this.count = this.count + 1;
  // }

  // @action decrement = () => {
  //   this.count = this.count - 1;
  // }

  @action.bound increment() {
    this.count = this.count + 1;
  }

  @action.bound decrement() {
    this.count = this.count - 1;
  }

  /* 异步方法1 */
  // @action.bound async getData () {
  //   let { data } = await axios.get('https://api.github.com/users')
  //   runInAction(() => {
  //     this.users = data
  //   })
  // }

  /* 异步方法2 */
  // getData = flow(function* () {
  //   let { data } = yield axios.get('https://api.github.com/users', {
  //     headers: {
  //       Authorization: 'token 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'
  //     }
  //   })
  //   this.users = data
  // }).bind(this)

  @computed get getResult() {
    return this.count * 10
  }

  @action.bound changeUsername(username) {
    this.username = username
  }

}

const counter = new CounterStore();

function uniqueUsername (username) {
  return new Promise((resolve, reject) => {
    if (username !== 'admin') {
      resolve()
    } else {
      reject('用户名已存在')
    }
  })
}

export default counter;