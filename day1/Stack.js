var Stack = function() {
  this.storage = ''
}

Stack.prototype.push = function(val) {
  // SIDE EFFECT:
  this.storage = this.storage.concat('***', val)
  return this.size()
}

Stack.prototype.pop = function() {
  // naming delimiter for readability, and maybe for optimization
  var delimiter = this.storage.lastIndexOf('***')
  // save the value for return later
  var str = this.storage.slice(delimiter + 3)
  // SIDE EFFECT:
  this.storage = this.storage.substring(0, delimiter)

  return str
}

Stack.prototype.size = function() {
  var size = this.storage.split('***').length - 1
  console.log(size)

  return size
}

var myWeeklyMenu = new Stack()

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
