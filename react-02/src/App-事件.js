const handler = () => {
  console.log('点击了')
}

const handler2 = (a, b, e) => {
  console.log(a, b, e)
}

const handler3 = (e) => {
  console.log(e)
}

function App() {
  return (
    <div>
      <button onClick={handler} >点击</button>
      <button onClick={() => { handler2(1, 2) }} >点击</button>
      <button onClick={handler2.bind(null, 1, 2)} >点击</button>

      {/* 获取事件对象 */}
      <button onClick={handler3} >点击</button>
      <button onClick={(e) => {handler3(e) }} >点击</button>
      <button onClick={handler2.bind(null, 1, 2)} >点击</button>
    </div>
  );
}

export default App;
