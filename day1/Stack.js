// Stack, implemented with a string instead of an Array
var stringStack = function() {
  this._storage = ''
}

stringStack.prototype.push = function(val) {
  // SIDE EFFECT:
  this._storage = this._storage.concat('***', val)
  return this.size()
}

stringStack.prototype.pop = function() {
  // naming delimiter for readability, and maybe for optimization
  var delimiter = this._storage.lastIndexOf('***')
  // save the value for return later
  var str = this._storage.slice(delimiter + 3)
  // SIDE EFFECT:
  this._storage = this._storage.substring(0, delimiter)

  return str
}

stringStack.prototype.size = function() {
  var size = this._storage.split('***').length - 1
  console.log(size)

  return size
}

var myWeeklyMenu = new stringStack()

/* TESTS */
console.log(myWeeklyMenu.size())
console.log(myWeeklyMenu.push('RedBeans'))
console.log(myWeeklyMenu)
console.log(myWeeklyMenu.push('Stuff'))
console.log(myWeeklyMenu)
console.log(myWeeklyMenu.push('Pickles'))
console.log(myWeeklyMenu)
console.log(myWeeklyMenu.size())
console.log(myWeeklyMenu.pop())
console.log(myWeeklyMenu)
console.log(myWeeklyMenu.size())
console.log(myWeeklyMenu.pop())
console.log(myWeeklyMenu)
console.log(myWeeklyMenu.size())
console.log(myWeeklyMenu)


// Stack, now implemented as an Object:
function Stack(capacity) {
  this._capacity = capacity || Infinity
  this._storage = {}
  this._count = 0
}

Stack.prototype.push(value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value
    return this._count
  }
  return 'Max capacity.'
}

Stack.prototype.pop = function () {
  var value = this._storage[--this._count]
  delete this._storage[this._count]
}

Stack.prototype.peek = function () {
  return this._storage[this._count - 1]
}

Stack.prototype.count = function () {
  return this._count
}
