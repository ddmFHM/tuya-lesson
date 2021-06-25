import { createHeading } from './heading.js'
import './main.css'
import hero from './hero.jpg'
import footerHTML from './footer.html'

let head = createHeading()

document.body.appendChild(head)
console.log('hello main')

const img = new Image()
img.src = hero
img.width = 300
img.addEventListener('click', () => {
  alert('hello webpack')
})
document.body.append(img)
console.log(footerHTML)
document.write(footerHTML)