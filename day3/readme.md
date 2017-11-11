###### Day 3: Trees, Searching & Binary Trees

# Intro to Trees and Searching

[Slides](http://slides.com/bgando/trees-and-searching#/)

Used for tons of stuff: Autocomplete, game logic, super useful data structure, also comes up a lot in interviews.

**Binary Tree** — So called because every node can have up to 2 children.

A node that has no children is called a *leaf*, otherwise every node is itself a *subtree*.

### Interface: Trees

Constructor:
* storage
* root

Methods:
* insert(key) : This inserts a new key in the tree
* search(key) : This searches for the key in the tree and returns true if it exists and returns false if the node doesn’t
* min/max : This returns the min or max value/key in the tree
* remove(key) : This removes the key from the tree


### Concept: Linked Lists

A linked list is a simplified tree DS. A LL is a tree structure with only one child per node.

Each node in the list contains:

1. Stored data — a node value
2. Stored reference — a *link* — to the next item in the list

(I thought this part was interesting): A linked list isn't necessarily like an Array — in fact, each element only knows about its node’s value, and a **reference** to the next item in the list — *even if that value is in a completely different data structure*. For this reason, in certain instances, linked lists can be very fast.

Inserting a newNode in between, say, node A and B, happens in **constant time**. This is because we don’t have to change anything besides updating A’s reference to B to point to newNode, and newNode’s pointer to reference node B.

Compared to an array, for example, this same operation (assuming we’re not adding to the end) happens in **linear time** because we need to shift all the elements to accommodate the new one.

### Interface: Linked List

1. Constructor Function
* storage
* head

2. Methods
* `.addToTail(val) // adds node to tail`
* `.remove(node) // removes node from list and returns it`

### Pseudocode: Linked List

```
// Node constructor
  //this.value
  //this.next = null

// Constructor function, takes value
  new Node(value)
  set head, node
  set tail, node

// Add to tail(value)
  create node from value
  set tail’s next to node
  update the LL tail to new node

// Remove node(node)
  set parent to head
  while parent’s next is not null or node
    parent is parent.next
  when found, set parent.next to child’s / node’s next

```

Site note on null vs. undefined: “It’s a best practice to set things to null, and let the computer set things to undefined. That way you know the programmer put it there purposefully.”

See [implementation of a Linked List](https://github.com/ahrjarrett/algos_ds/blob/master/day3/LinkedList.js) in the current directory.


```javascript
// Excerpt from that file:
function Node(value) {
  this.next = null
  this.value = value
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node')
  this.head = new Node(headValue)
  // We initialize tail as head b/c when list contains 1 item,
  // that item is both head and tail.
  this.tail = this.head
}

LinkedList.prototype.forEach = function(callback) {
  var node = this.head
  while(node) {
    callback(node.value)
    node = node.next
  }
}
// Time complexity:
// O(n)

LinkedList.prototype.print = function() {
  var result = []
  this.forEach(function(value) {
    result.push(value)
  })
  return result.join(', ')
}
// Time complexity:
// O(n)

LinkedList.prototype.insertAfter = function(node, value) {
  // get reference to former next
  var oldNext = node.next
  // create new node
  var newNext = new Node(value)
  // store it as the next next
  node.next = newNext
  // set next for the new node to be the old next
  newNext.next = oldNext
  // if reference node is tail, set tail to newNext
  if(this.tail === node) this.tail = newNext
  return newNext
  // alternate solution (i think i like this one better):
  //var newNode = new Node(value)
  //newNode.next = node.next
  //node.next = newNode
  //return newNext
}
// Time complexity:
// O(1)

```

### ...back to trees proper:

A difference between trees and linked lists is that linked lists can be circular. The tail can point back to the head, and that’s perfectly acceptable (reminds me of the circular buffer exercise on exorcism).

Trees, on the other hand, cannot. Trees cannot have a circular loop. That would be an incorrect implementation of a tree.

With a tree we hold references from parent to child (not the other way around), so references flow in one direction. There are also multiple nodes that a single node can reference.

### Pseudocode: Tree

```
// Tree constructor
  //this.value
  //this.children = []

//Constructor function, takes value
  //new Node(value)
  //set root (instead of head), node

//Add node (value)
```
