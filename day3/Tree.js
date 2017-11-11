// N-ary Tree (any number of children)
function Tree(value) {
  this.value = value
  this.children = []
}

// Adds child to tree or subtree bound to `this` keyword
Tree.prototype.addChild = function(value) {
  var child = new Tree(value)
  this.children.push(child)
  // returning the child is necessary to preserve chaining functionality!
  return child
}

var tree = new Tree(1) // { this.value: 1, this.children: [] }
var branch1 = tree.addChild(2)
var branch2 = tree.addChild(3)
var branch3 = tree.addChild(4)
branch1.addChild(5)
branch1.addChild(6)
branch2.addChild(7)
branch3.addChild(8)
branch3.addChild(9)

// Produces this structure:
{ value: 1, children: [
  { value: 2, children: [
    { value: 5, children: [] },
    { value: 6, children: [] }
  ]},
  { value: 3, children: [
    { value: 7, children: [] }
  ]},
  { value: 4, children: [
    { value: 8, children: [] },
    { value: 9, children: [] }
  ]}
]}


// We can also chain these:
branch4 = tree.addChild(10).addChild(11)

// In this case, the new add child is added to the node
// containing the value of 10.

/**** The reason we can do this is because we return `child`
 * at the end of `Tree.prototype.addChild` ****/

















 
