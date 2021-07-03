# Mobx

## 简介

可扩展的状态管理库

## 浏览器支持

Mobx5: 任何支持 ES6 proxy 的浏览器，不支持 IE11、Nodejs8

Mobx4: 任何支持 ES5 的浏览器

Mobx4和Mobx5 API 是相同的

## 准备

1. 底层配置: npm run eject
2. 下载装饰器语法babel插件: npm install @babel/plugin-proposal-decorators
3. 在 package.json 文件中加入配置

- 启用装饰器语法支持

  - 方法1
    ```json
      "babel": {
        "plugins": [
          [
            "@babel/plugin-proposal-decorators",
            {
              "legacy": true
            }
          ]
        ]
      }
    ```

  - 方法2
    ```
      create-react-app mobx-proj && cd mobx-proj
      yarn add react-app-rewired customize-cra @babel/plugin-proposal-decorators
    ```
    根目录下创建 config-overrides.js
    ```js
      const { override, addDecoratorsLegacy } = require("customize-cra")
      module.exports = override(addDecoratorsLegacy())
    ```
    package.json配置
    ```json
      "scripts": {
          "start": "react-app-rewired start",
          "build": "react-app-rewired build",
          "test": "react-app-rewired test",
          "eject": "react-scripts eject"
        }
    ```

- 编辑器防止报错

`javascript:implicitProjectConfig.experimentalDecorators: true`

## 使用

mobx mobx-react

1. 创建 store 对象 存储默认状态
  ```jsx
    class CounterStore {
      count = 0
    }
    const counter = new CounterStore()
    export default counter;
  ```

2. 将 store 对象放在一个全局的嘴贱可以访问的地方 (Provider组件内传递store对象)
  ```jsx
    import { Provider } from 'mobx-react'
    <Provider storename={store} >
      <Component>
    </Provider>
  ```

3. 让组件获取 store 对象中的状态 并将状态显示在组件中
  ```jsx
    import { inject } from 'mobx-react'  
    @inject('counter')
  ```

## mobx 6 

mobx6 中需要在store仓库中添加 makeObservable

```js
  import { makeObservable } from 'mobx'
  class CounterStore {
    constructor() {
      makeObservable(this)
    }
  }
```

## Mobx 数据监测

computed 计算值

```js
 @computed get getResult () {
    return this.count * 10
  }
```

## 禁止普通函数更改程序状态

`configure({ enforceActions: 'observed' })`
强制程序使用 action 函数更改应用程序中的状态
即修改状态函数需要 @action 开头

## MobX 数据检测

autorun

当监测的状态发生变化是，根据状态产生某种效果，可以使用 autorun
autorun 会在初始化时候执行依次，会在每次状态发生变化时执行
第二个参数可以传一个配置对象 包含 delay 属性，可定义延时执行函数