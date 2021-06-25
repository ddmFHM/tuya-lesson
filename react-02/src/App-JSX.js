
const name = "ddm"
const cname = "test"
const jsxValue = <p>JSX value</p>

function sayHello() {
  return "大家好"
}

function App() {
  return (
    <div>
      <p className={cname} >{name}</p>
      <p>name</p>
      <p>{sayHello()}</p>
      {jsxValue}
    </div>
  );
}

export default App;
