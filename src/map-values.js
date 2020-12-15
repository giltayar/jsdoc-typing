
/**
 * @template {string|number|symbol} K
 * @template T
 * @template W
 * @param {Record<K, T>} object
 * @param {(t: T) => W} mapFunction
 *
 * @returns {Record<K, W>}
 */
function mapValues(object, mapFunction) {
  //@ts-expect-error
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, mapFunction(value)]))
}

module.exports = {
  mapValues
}