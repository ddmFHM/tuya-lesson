console.log(1)

setTimeout(() => {
  console.log(4)
}, 0);

setImmediate(() => {
  console.log(3)
})

process.nextTick(() => {
  console.log(2)
})