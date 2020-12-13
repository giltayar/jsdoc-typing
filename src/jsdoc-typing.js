//@ts-check
const {add} = require('./utils')

//@ts-expect-error
console.log(add('sdfsdf', 5))

console.log(add(4, 5)) // => 9

module.exports = {
  add
}