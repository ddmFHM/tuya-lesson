# HOOK

特殊的函数

让函数组件也有类组件的特性

- 为什么需要Hook

  1. 数据共享
  2. 多个业务逻辑代码可能会存在于同一个生命周期函数中

## useState

可以在函数组件中保存状态

- 参数：保存状态的初始值
  - 返回值：数组
    1. 第一个元素为当前保存的状态
    2. 第二个元素为修改当前保存状态的方法

```js
  const [state, setState] = useState(0)
```

- tips:
  1. 函数组件中可以多次使用同一个 hook 函数
  2. set操作三异步的，不能直接修改 State 的原始值

## useEffect

挂载 更新 卸载

- 参数
  1. 传入的第一个函数是挂载时候执行
  2. return 返回的函数是更新后执行
  3. 第二个参数是一个数组，内部是依赖的数据

```js
  useEffect(() => {
    console.log('挂载与更新操作完成了')
    return () => {
      console.log('卸载时候执行')
    }
  }, [strState])
```





## useContext

- createContext 不足
  ```js
    const userContext = createContext({})
    const { Provider, Consumer } = userContext
    <Provider value={{ key: value }}>
      <Header />
    </Provider>

    // Header
    <Consumer>
    {
      key
    }
    </Consumer>
  ```


- useContext

## useReducer

替代 useState 抽离公共数据处理逻辑等

## userCallback

保证每次调用的函数不是新的函数，不会重新定义函数

## useMemo

保存 引用类型的 数据引用不变

## useRef

可以获取元素、保存状态

保存的数据除非手动修改否则不会改变

## useImperativeHandle



## useLayoutEffect

## 自定义Hook