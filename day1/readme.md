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

```
Building.prototype.countFloors = () => this.floors
```

**Note:** The reason we don’t put methods in the constructor is because we’d be creating a new instance of that method for every instance.

This is how we’ll be implementing data structures, for example:

```
function Tree(apples) {
  // ...
}

Tree.prototype.addNodes = function() { /* ... */ }
```

#### Exercise:

Create a constructor that makes a building of your choice using the pseudoclassical pattern.

```
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
