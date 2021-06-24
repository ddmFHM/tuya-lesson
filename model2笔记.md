# 模块化开发

## CommonJs 规范

- 一个文件就是一个模块
- 每个模块都有单独的作用域
- 通过`module.exports`导出成员
- 通过`require`函数载入模块

CommonJS是以同步模式加载模块

## AMD

绝大多数第三方库都支持AMD规范

- AMD相对复杂
- 模块JS文件请求频繁

## 模块化标准规范

> 模块化的最佳实践

## ES Module

- 给 script 添加 type = module 属性，就可以在 ES Module 标准下执行JS代码
- ESM 自动采用严格模式，忽略`use strict`
- 每个 ES Module 都是运行再单独的私有作用域中
- ESM 是通过 CORS 方式请求外部 JS 模块
- ESM 的 script 标签会延迟执行脚本 （defer）网页渲染完成才会执行

### import

要以 ./ 或 / 等开头

若直接写模块，会认为是读取第三方模块

动态导入模块

```js
  import('./module.js').then(function (module) {
    console.log(module)
  })
```

## ESM in JS
node --experimental-modules index.mjs


- ES Modules 中可以导入 CommonJS 模块
- CommonJS 中不能导入 ES Modules 模块
- CommonJS 始终只会导出一个默认成员
- import 不是解构导出对象

## ES Modules 与 CommonJS 模块的差异

