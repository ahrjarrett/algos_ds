# Day 1: Recursion & Object-Oriented JS


## Pair Programming

One person gets to be the driver while the other navigates.

Use [codeshare.io](codeshare.io) for remote pairing.


## OO Javascript

“Pseudoclasical” language. JS is an OO programming language, but it doesn’t have a “formal” way of creating classical constructors like most languages, hence the name: pseudoclasses.

### Creating a pseudoclass

#### Constructor Properties (per instance)

```javascript
function Building(floors) {
  this.floors = floors
}

var myHouse = new Building(2)
```

#### Methods (for *all* instances)

```javascript
Building.prototype.countFloors = () => this.floors
```

**Note:** The reason we don’t put methods in the constructor is because we’d be creating a new instance of that method for every instance.

This is how we’ll be implementing data structures, for example:

```javascript
function Tree(apples) {
  // ...
}

Tree.prototype.addNodes = function() { /* ... */ }
```

#### Exercise:

Create a constructor that makes a building of your choice using the pseudoclassical pattern.

```javascript
function LinkedList(data) {
  this.data = data
}

var myData = new LinkedList('piece of data', 'other piece of data')

LinkedList.prototype.size = function() {
  if(this.data) return this.data.length
}

myData.size // => 2
```


## Stacks & Queues

<details>
  <summary> Ingredients to Learn Data Structures </summary>

  1. Learn Data Structure Concept
    * Draw it
    * Create the API/operation methods
  2. Build the Data Structure
    * Pseudocode the implementation
    * Code the data structure constructor
  3. Utilize the Data Structure
    * Put your data structure to work!
    * Pair it with an algorithm if needed
  4. Understand Data Structure
    * What is the time complexity?
    * How can you optimize?

</details>


#### Concept: Stacks

**“LIFO”:** LAST item added INTO the stack will be the FIRST one taken OUT of the stack.

-> aka “pushed onto” and “popped off”

Think of a stack of pancakes. You put new pancakes on top, and you have to eat that one first.

A familiar use case is the call stack. Each piece of the stack is called a stack frame, which is basically the instance of the function in the stack.

#### Interface: Stacks

1. Constructor function
  * Storage
2. Methods
  * `push(value) // adds value to the front, returns size of stack`
  * `pop(value) // removes value from front, returns value`
  * `size() // returns size of stack as an integer`

We’re **not** going to implement as an Array!

```javascript
var Stack = function() {
  this.storage = ''
}

Stack.prototype.push = function(val) {
  this.storage.concat(val + '-')
  return this.size()
}

Stack.prototype.pop = function() {
  return this.storage.split('-')[0]
}

Stack.prototype.size = function() {
  return this.storage.split('-').length
}

var myWeeklyMenu = new Stack()

myWeeklyMenu.push('RedBeans')
```

#### Concept: Queues

"FIFO": The FIRST item added IN to the queue will be the FIRST one taken OUT of the queue.

-> aka “enqueued” and “dequeued”

This of a line at a deli. First person in is the first person to get their food and leave.

So a stack is like PANCAKES, and a queue is like a DELI.

Example usage:

```javascript
  myQueue.enque(1)
  myQueue.enque(2)
  myQueue.deque() // 1 is gone now
  myQueue.enque(3)
  myQueue.enque(4)
  myQueue.deque() // 2 is gone now
```

#### Interface: Queues

1. Constructor Function
  * Storage
2. Methods
  * `enqueue(value) // adds value to the back, returns size`
  * `deque() // removes value from the front, returns value`
  * `size() // returns size of the queue as an integer`
