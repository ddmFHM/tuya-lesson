# Nextjs

React 服务端渲染框架，用于构建 SEO 友好的 SPA 应用

1. 支持两种预渲染方式，静态生成和服务端渲染
2. 基于页面的路由系统，路由零配置
3. 自动代码拆分，优化页面加载速度
4. 支持静态导出，可将应用导出为静态网站
5. 内置 CSS-in-Js 库 styled-jsx
6. 方案成熟
7. 部署简单，拥有专属部署环境 Vercel

## 创建项目

创建: npm init next-app next-project
运行：npm run dev
访问：localhost:3000

会临时安装 create-next-app 用于创建 Nextjs 项目

## 基于页面的路由系统

页面放置在 pages 文件夹中的 React 组件
组件需要被默认导出
组件文件中不需要引入 React
页面地址域文件地址对应

- 页面跳转

Link 组件默认使用 JS 进行页面跳转（SPA）
如果浏览器中 JS 被禁用，则使用链接跳转
Link 组件不应添加除 href 属性外的属性，其余属性添加到 a 标签
Link 组件通过预取（在生产中）功能自动优化应用程序以获得最佳性能

- 静态资源、元数据、CSS

1. 应用程序根目录的 public 用于提供静态资源

plugin/xxx/xxx.jpg -> /xxx/xxx.jpg

2. 修改页面元数据

通过 Head 组件修改元数据

3. Css

  - 在 NextJS 中内置了 styled-jsx，它是一个 CSS-in-JS 库，允许在 React 组件中编写 CSS，CSS仅作用域组件内部

    ```js
      <style jsx >{
        .demo {
          color: #abc;
        }
      }</style>
    ```
  - css module: 使用 css module文件（xxx.module.css）

  - 全局样式

    1. 在 pages 文件夹中新建 _app.js 文件并加入如下代码
    2. 在项目根目录下创建 styles 文件夹，并在其中创建 global.css
    3. 在_app.js 中通过 import 引入 global.css
    4. 重启开发服务器
      ```js
        export default function App({ Component, pageProps }) {
          return <Compoent { ...pageProps } />
        }
      ```

## 预渲染

预渲染是指数据和 HTML 的拼接在服务器端提前完成
预渲染可以使 SEO 更加友好
预渲染会带来更好的用户体验，可以无需运行 JS 即可查看应用程序 UI

- 两种形式
  两种形式生成 HTML 的时机不同
  1. 静态生成：静态生成是在构建是生成 HTML，以后的每个请求都共用构建时生成好的 HTML
  2. 服务器端渲染：服务器端渲染是在请求时生成 HTML，每个请求都会重新生成 HTML
- 选择
  大多数页面简易使用静态生成
  - 静态生成
    - 一次构建、反复使用、访问速度块
    - 使用场景：营销页面、博客文章、电子商务产品列表、帮助和文档
  -服务端渲染
    - 烦问速度步入静态生成块，但是每次请求都会重新渲染，所以使用数据频繁更新的页面或页面内容岁请求变化而变化的页面

## 静态生成

- 无数据静态生成

默认即无数据静态生成

- 有数据静态生成

如果组件需要在其他地方获取数据，在构建时 Next.js 会预先获取组件需要的数据，然后在对组件进行静态生成

静态生成 getStaticProps

getStaticProps 方法用于获取组件静态生成需要的数据，并通过props的方式将数据传递给组件
该方法是一个异步函数，需要在组件内部进行导出
在开发模式下，getStaticProps 改为在每个请求上运行

```js
  export default function getStaticProps() {
    // 从文件系统，API，数据库中获取的数据
    const data = ...
    // props 属性的值会传递给组件
    return {
      props: ...
    }
  }
```

- 基于动态路由的静态生成

基于参数为页面组件生成 HTML 页面，有多少参数就生成多少 HTML 页面
在构建应用时，先获取用户可以访问的所有路由参数，再根据路由参数获取具体数据，然后根据数据生成静态 HTML

1. 创建基于动态路由的页面组件文件，命名时再文件名称外面加上 [], 例如 [id].js
2. 导出异步函数 getStaticPaths, 用于获取所有用户可以访问的路由参数

```js
  export async function getStaticPaths () {
    // 此处获取所有用户可以访问的路由参数
    return {
      // 返回固定格式的路由参数
      path: [{ params: { id: 1 } }, { params: {} }],
      // 当用户访问的路由参数没有再当前函数中返回时，是否显示 404 页面 false:显示 true 不显示
      fallback: false
    }
  }
```

3. 导出异步函数 getStaticProps 用于根据路由参数获取具体的数据

```js
  export async function getStaticProps ({ params }) {
    // params => { id: 1 }
    // 此处是根据路由参数获取的具体数据
    return {
      // 将数组传递到组件中进行静态页面的生成
      props: { }
    }
  }
```

> getStaticPath 和 getStaticProps 只会在服务端运行，不会运行到客户端，甚至不会打包到客户端的 JS 中，意味着可以随意写服务端代码，比如查询数据库

- 404 页面

要创建自定义 404 页面，需要在 pages 文件夹中创建 404.js 文件

```js
  export default function Custom404 () {
    return <h1>404 - page not Found </h1>
  }
```

## 服务器端渲染

getServerSideProps

如果采用服务器端渲染，需要在组件中导出 getServerSideProps 方法

```js
  export async function getServerSideProps(content) {
    // content 中会包含特定的请求参数
    return {
      props: {
        // props for your component
      }
    }
  }
```

## API Routes

API Routes 可以理解为接口，客户端向服务器发送请求获取数据的接口

Next.js 应用允许 React 开发者编写服务器端代码创建数据接口

不要在 getStaticPaths 或 getStaticProps 函数中访问 API Routes 因为这两个函数就是在服务器端运行的，可以直接写服务器端代码

