//@ts-check
const {add} = require('./add')
const {breakName} = require('./names')
const slugify = require('@sindresorhus/slugify')
const {map} = require('lodash')
const flowers = require('flowers')
const {Person} = require('./class')
const {mapValues} = require('./map-values')

//@ts-expect-error
if (false) console.log(add('sdfsdf', 5))

console.log(add(4, 5)) // => 9

/**@type {number} */
const addition = add(7, 8)

console.log(addition) // => 15

const anotherAddition = /**@type {number} */(add(7, 8))

console.log(anotherAddition) // => 15

//@ts-expect-error
if (false) console.log(breakName(4))

/**@type {import('./names').BrokenName} */
const brokenName = breakName('Gil Tayar')
console.log(brokenName) // => { firstName: 'Gil', lastName: 'Tayar' }


//@ts-expect-error
if (false) map([1, 2, 3])[0].split('')

console.log(slugify('i ❤️ slugs')) // => i-slugs

/**@type {import('@sindresorhus/slugify').Options} */
const slugifyOptions = {separator: '_'}

console.log(slugify('i ❤️ slugs', slugifyOptions)) // => i_slugs

//@ts-expect-error
slugify('something', {badOption: true})

console.log(flowers.list.length)

const p1 = new Person('Gil', 'Tayar')

console.log(p1.fullName()) // => Gil tayar

//@ts-expect-error
p1.someName
//@ts-expect-error
p1.fullName(4)

const numberOrString = Math.random() < 1 ? "This is a string" : 100;
const typeAssertedString = /** @type {string} */ (numberOrString);
//@ts-expect-error
console.log(numberOrString.toUpperCase())


/**
 * @param {import('./point-type').Point} point
 * @param {number} dx
 * @param {number} dy
 *
 * @returns {import('./point-type').Point}
 */
function move(point, dx, dy) {
  return {x: point.x + dx, y: point.y + dy}
}

console.log(move({x: 2, y: 4}, 1, 1))

module.exports = {
  add
}