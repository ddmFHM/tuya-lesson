import app from './http'
import renderer from './renderer'
import createStore from './createStore'
import routes from '../share/routes'
import { matchRoutes } from 'react-router-config'

app.get('*', (req, res) => {
  // 请求地址 req.path
  // 获取到路由配置信息
  // 根据请求地址匹配出要渲染的组件的路由对象信息
  const store = createStore()
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    if (route.loadData) return route.loadData(store)
  })
  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})