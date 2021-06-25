const arr1 = [1, 2, 3]
const arr2 = [<p>item1</p>, <p>item2</p>, <p>item3</p>]
const arr3 = [
  {
    name: 'ddm1',
    age: 18,
    salary: 100000
  },
  {
    name: 'ddm2',
    age: 20,
    salary: 100000
  },
  {
    name: 'ddm3',
    age: 22,
    salary: 100000
  }
]

function App() {
  const result = arr3.map(item => {
    return <li key={item.name}>
      <span>{item.name}</span>--|--
      <span>{item.age}</span>--|--
      <span>{item.salary}</span>
    </li>
  })
  return (
    <div>
      {arr1}
      {arr2}
      {result}
    </div>
  );
}

export default App;
