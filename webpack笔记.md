# webpack

## 无配置（默认配置）

- `src/index.js` -> `dist/main.js`

## 配置文件

- webpack.config.js

- entry: 入口文件
- output: 输出
  - filename: 输出文件名称
  - path: 输出路径（绝对路径）

- mode: 工作模式
  - 命令行输入（cli 参数） --mode development / none / production
  - 配置文件：mode 属性


## 资源模块加载

webpack 从后往前使用 loader

webpack默认解析js文件

- css 文件

配置 css-loader 解析css代码

使用 style-loader 将样式文件加入到head的style标签

### 文件资源加载器

- file-loader

- url-loader (base64)
  - 协议：[媒体类型][编码],<文件内容>
  - data:[<mediatype>][;base64],<data...>

- 使用场景
  
  - 小文件：url-loader, 减少请求次数
  - 大文件：单独存放，提升加载速度

## 常用加载器

- 编译转换类型

css-loader

- 文件操作类型

导出文件路径

file-loader

- 代码检查类

eslint-loader

## webpack & es2015

babel-loader

```json
{
  "loader": "babel-loader",
  "options": {
    "presets": ["@babel/preset-env"]
  }
}
```

## 模块加载方式

- import (ES Module)

- require(CommonJs)
  - require 导入 ES6 模块时需要使用default
  - `const xxx = require('./xxx.js').default`

- 非JS触发加载

  - 样式代码中的 @import 和 url() 函数
  - HTML 代码中图片 src


## webpack 核心工作原理

## loader 工作原理

> 负责资源文件从输入到输出的转换

> 类似管道，一个资源可以使用多个loader

- markdown-loader （编写loader）


## webpack 插件机制 （plugin）

- clean-webpack-plugin: 输出目录清理

- html-webpack-plugin: 自动生成HTML插件

- copy-weboack-plugin: 静态文件拷贝

相较于Loader，Plugin 拥有更宽的能力范围

plugin 通过钩子机制实现

> 插件必须是一个函数或者是一个包含apply方法的对象

通过在生命周期的钩子中挂载函数实现扩展

## webpack监听

--watch

## 实现自动刷新浏览器

- webpack Dev Server

提供开发服务器，自动编译/自动刷新浏览器

- Cli 启动 yarn webpack server

打包结果放在内存中，不生成dist目录，减少磁盘读写次数

## 代理Api

- proxy

## source map 源码地图

运行代码与开发代码不一致

错误无法定位

- eval: 不生成source map 只能定位错误出现文件

- eval-source-map: 定位错误出现文件，错误行列信息

- cheap-eval-source-map: 生成source-map 只有行信息，没有列的错误信息 （错误信息行数是在babel转换后的行数）

- cheap-module-eval-map:  生成source-map 只有行信息，没有列的错误信息 错误信息在原本代码的行

- inline-source-map: base64(data url)形式嵌入到代码中

- hidden-source-map: 生成了source map，不在代码中引用（需要时，需要在代码底部添加引用source-map的注释）

- nosources-source-map: 能看到错误出现的位置（行），点击错误信息看不到源代码（用于保护源代码不暴露）


选择source-map模式

(推荐)

开发环境下：cheap-module-eval-source-map

生产模式：none (source map 会暴露源码)

## HMR

Hot Module Replacement

热替换只将修改的模块实时替换至应用中

cli: --hot

配置文件：`hot:true`

HMR代码打包之后会移除

## 生产环境优化

### 不同环境下的配置

两种做法

1. 配置文件根据环境不同导出不同配置

```js
module.exports = (env, argv) => {
  // 若cli参数传入 --env production 则接收到的 env内production为true，development同理
  // env: { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, production: true } 
  // argv为其他参数

  const config = {
    output: {
      filename: 'bundle.js',
      publicPath: 'dist/'
    }
    // ...
  }

  if (env.production) {
    config.mode = "production"
    // ...
  }

  return config
}
```

2. 一个环境对应一个配置文件

建议大项目使用

使用 webpack-merge 合并

merge函数需要解构出来

## DefinePlugin

为代码注入全局成员

process.env.NODE_ENV


## Tree-shaking

生产模式下自动开启

## 合并模块

concatenateModules

尽可能将所有模块合并输出到一个函数中

提升运行效率，减少代码体积

scope hoisting 作用域提升

## tree-shaking & babel

支持ES Module导入导出的情况

commonjs不生效

## sideEffects

可以自主标识代码是否有副作用

副作用：模块执行时除了导出成员之外所作的事情

一般用于npm包标记是否有副作用

## 代码分割

所有代码被打包到一起

bundle体积过大

并不是所有模块在启动时都是必要的

分包、按需加载

code Splitting (代码分包/代码分割)

两种方法

1. 多入口打包

适用于多页应用程序

单独打包公共模块（不同入口中有的公共模块）

2. 动态导入

需要某个模块时才加载

动态导入的模块会被自动分包

使用 import() 导入模块

## 魔法注释

`import(/* webpackChunkName: 'xxx' */, './xxx/xxx)`

给动态导入的模块模块资源名称（若两个设置相同的，则会被合并到一个）

## MiniCssExtractPlugin

提取CSS到单个文件

## optimize-css-assets-webpack-plugin

压缩样式文件

## 输出文件名 Hash

生产模式下，文件名使用hash

（客户端会缓存文件）