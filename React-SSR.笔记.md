# React SSR

- CSR: Client Side Rendering

服务端仅返回JSON数据, Data 和 HTML 在客户端进行渲染

缺点：

  1. 首屏等待时间长，白屏问题
    - 需要先发送页面请求，返回HTML,再请求JS、CSS等资源
  2. 页面结构为空，不利于SEO

- SSR：Server Side Rendering

服务端返回HTML, Data 和 HTML 在服务端进行渲染

- React-SSR 同构

同构指的是代码复用，即实现客户都安和服务端最大程度的代码复用

- 项目结构

-|react
--|src 源文件代码
---|client客户端代码
---|server服务端代码
---|share同构代码

## 实现 React SSR

1. 引入要渲染的 React 组件
2. 通过 renderToString 方法将 React 组件转换为 HTML 字符串
3. 将结果 HTML 字符串响应到客户端

renderToString 方法用于将 React 组件转换为 HTML 字符串，通过 react-dom/server 导入

## webpack 打包配置

Node 不支持 ESModule 模块系统，不支持 JSX 语法，所以需要通过 webapck babel 进行打包

客户端 React 打包配置
1. webpack 配置
  打包目的：转换JSX语法，转换浏览器不识别的高级JS语法
  打包目标位置public文件夹
2. 打包启动命令
  "dev:client-build": "webapck --config webpack.client.js --watch"

## 客户端 React 附加事件

在客户端对组件进行二次"渲染"，为组件元素附加事件
hydrate 方法在实现渲染的时候，会复用原本已存在的 DOM 节点，减少重新生成节点以及删除原本 DOM 节点的开销
通过 react-dom 导入hydrate

## 路由支持

在 React SSR 项目中需要实现两端路由
客户端路由时用于支持用户通过点击链接的形式跳转页面
服务器端路由是用于支持用户直接从浏览器地址栏中访问页面
客户端和服务端公用一套路由规则

## Redux 支持

实现两端 Redux
客户端 Redux 就是通过客户端 JS 管理 Store 中的数据
服务端 Redux 就是在服务端搭建一套 Redux 代码，用于管理组件中的数据
客户端和服务端共用一套 Reducer 代码
创建 Store 的代码由于参数传递不同所以不可共用

- 服务端 store 数据填充

服务端创建的 store 是空的，组件并不能从 Store 中获取到任何数据
解决: 服务器端在渲染组件之前获取到组件所需要的数据

步骤：
  1. 在组件中添加 loadData 方法，用于获取组件所需数据，方法被服务端调用
  2. 将 loadData 方法保存在当前数组的路由信息对象中
  3. 服务器端在接收到请求后，根据请求地址匹配出要渲染的组件的路由信息
  4. 从路由信息中获取组件中的 loadData 方法并调用方法获取组件所需数据
  5. 当数据获取完成后再渲染组件并将结果响应到客户端

## 防止XSS

转义恶意代码