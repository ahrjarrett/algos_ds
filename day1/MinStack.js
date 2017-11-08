const Stack = require('./Stack')

function MinStack(capacity) {
  this._capacity = capacity
  this._storage = {}
  this._count = 0
  this._min = new Stack()
}

MinStack.prototype.push = function(value) {
  if (this._count < this._capacity) return 'Max Capacity.'

  if (this._min.peek() < value) {
    this._min.push(this._min.peek())
  } else {
    this._min.push(value)
  }

  this._storage[this._count++] = value
  return this._count
}

MinStack.prototype.pop = function() {
  // pop last value off min stack too, to keep history in sync
  this._min.pop()
  var value = this._storage[--this._count]
  delete this._storage[this._count]
  if (this._count < 0) this._count = 0
  return value
}

MinStack.prototype.peek = function() {
  return this._storage[this._count-1]
}

MinStack.prototype.count = function() { return this._count }

MinStack.prototype.min = function() { return this._min.peek() }

var myMinStack = new MinStack()

myMinStack.push(10)
myMinStack.push(1)
myMinStack.push(5)
myMinStack.push(-10)
myMinStack.push(-100)
myMinStack.push(2)

//console.log(myMinStack.min())
//console.log(myMinStack.pop())
