// export var name = 'foo module'

// export function test() {
//   console.log(123)
// }

var name = 'name'

var a = 'default-value'

function test() {
  console.log(123)
}

export { name, test as func, a as default}