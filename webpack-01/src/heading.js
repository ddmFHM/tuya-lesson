import './heading.css'

export function createHeading() {
  var h1 = document.createElement('h1')
  h1.innerText = "hello webpack"
  h1.classList.add('head')
  return h1
}