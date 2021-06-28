import { createAction } from 'redux-actions'

// 获取 todos 列表 action
export const load_todo = createAction('load_todo')
export const load_todo_success = createAction('load_todo_success')

// 新增 todo 列表 action
export const add_todo = createAction('add_todo')
export const add_todo_success = createAction('add_todo_success')

// 删除 todo 列表 action
export const remove_todo = createAction('remove_todo')
export const remove_todo_success = createAction('remove_todo_success')

// 修改 todo 任务状态 action
export const modify_todo = createAction('modify_todo')
export const modify_todo_success = createAction('modify_todo_success')

// 筛选 todo 列表 action
export const modify_todo_filter = createAction('modify_todo_filter')

// 清除 todo 已完成 action
export const clear_todo = createAction('clear_todo')
export const clear_todo_success = createAction('clear_todo_success')

// 修改 todo 项目 action
export const modify_todo_edit = createAction('modify_todo_edit')
export const modify_todo_edit_success = createAction('modify_todo_edit_success')