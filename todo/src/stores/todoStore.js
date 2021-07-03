import { observable, action, configure, makeObservable, computed } from 'mobx'

configure({ enforceActions: "observed" })

class TodoStore {

  constructor() {
    makeObservable(this)
  }

  @observable todos = []
  @observable filter = 'all'

  /* 添加任务 */
  @action.bound todoAdd (taskName) {
    this.todos.push({
      taskName,
      isCompleted: false
    })
  }
  /* 删除任务 */
  @action.bound todoRemove (index) {
    this.todos.splice(index, 1)
  }
  /* 修改任务状态 */
  @action.bound todoStateChange (index, state) {
    this.todos[index].isCompleted = state
  }
  /* 更改筛选条件 */
  @action.bound filterChange (filter) {
    this.filter = filter
  }
  /* 计算未完成任务数量 */
  @computed get getTotalUncompletedTodos() {
    return this.todos.filter(todo => !todo.isCompleted).length
  }
  /* 检测筛选条件 按照条件筛选任务 */
  @computed get filterTodo () {
    switch (this.filter) {
      case 'all': return this.todos
      case 'completed': return this.todos.filter(todo => todo.isCompleted)
      case 'active': return this.todos.filter(todo => !todo.isCompleted)
      default: return this.todos
    }
  }
}

const todo = new TodoStore()

export default todo