class Person {
  /**@type {string}*/
  firstName
  /**@type {string}*/
  lastName

  /**
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  /**
   * @returns {string}
   */
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

module.exports = {Person}