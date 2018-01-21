// Go back to 3.11 for implementation details!

// Solution:
// https://github.com/kuychaco/algoClass/blob/solutions/data-structures/queue.js

/* Alternative Solution that uses `apply` to do some interesting things:
 * https://gist.github.com/alexhawkins/d92704d937e1dd9c1771 */

const Stack = require('.Stack')

function Queue_TwoStacks() {
  this._inStack = new Stack()
  this._outStack = new Stack()
}

Queue_TwoStacks.prototype.enqueue = function(value) {
  this._inStack.push(value)
}

Queue_TwoStacks.prototype.transferStacks = function() {
  while(this._inStack.count() > 0) {
    this._outStack.push(this._inStack.pop())
  }
}

Queue_TwoStacks.prototype.dequeue = function() {
  if(this._outStack.count() === 0) this.transferStacks()
  return this._outStack.pop()
}

Queue_TwoStacks.prototype.count = function() {
  return this._inStack.count() + this._outStack.count()
}

// I haven't run any tests on this yet, so there might be a typo!
