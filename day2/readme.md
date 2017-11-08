# Day 2: Time Complexity, Sorting

## Intro to Time Complexity

[Slides](http://slides.com/bgando/sorting#/)

What makes an algorithm “fast”?

“What is the run time of this algorithm?”

### Complexity

**Space** Complexity:
How much *memory* is used?

**Time** Complexity
How many *comparisons* are made?
How many *swaps* are made?

How does the work increase as our input grows? That is the speed of our algorithm.


| # of Operations     | Algorithm                      |
| ------------------- | --------------------------------
|   n^2               | Compare all numbers            |
|   2n                | Find min and max numbers       |
|   3                 | Sorted List, find 1st and last |


We can represent time as shape using [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation). This is a notation that describes the limiting behavior of a function when the argument tends toward a particular value or infinity. This is known as the Order of the function and is closely related to *o*, Ω, ω, and Θ.

| Big-O, name        | # of Operations     | Algorithm                      |
| ------------------ | ------------------- | ------------------------------ |
| O(n^2), quadratic  |   n^2               | Compare all numbers            |
| O(n), linear       |   2n                | Find min and max numbers       |
| O(1), constant     |   3                 | Sorted List, find 1st and last |


:rabbit2: SUPER fast  ——>  SUPER SLooooooW :turtle:

| Name         | constant | logarithmic | linear | quadratic | exponential |
| ------------ | -------- | ----------- | ------ | --------- | ----------- |
| **Notation** | O(1)     | O(logn)     | O(n)   | O(n^2)    | O(k^n)      |


Anything past linear is considered a bad algorithm. You really don’t want to be in quadratic or exponential time.


### Logarithmic Time

__From Wikipedia on logarithm:__ “In mathematics, the logarithm is the inverse operation to exponentiation, just as division is the inverse of multiplication and vice versa.”

__For visualization:__ It’s helpful to think about what happens if you double the size of the input: for quadratic, if you’ve doubled the input, you’ve quadrupled the number of operations; for lineary, if you’ve doubled the input, you’ve doubled the number of operations; and for constant, the number of operations does not change.

![Big O Graph](https://github.com/ahrjarrett/algos_ds/blob/master/day2/big-oh-graph.jpg)

What are some simple, native JS methods/expressions/operations?

```javascript

arr.push() // O(1) — Constant
arr.pop() // 0(1) - Constant
1+3 // 0(1)
for() {} // O(n) — Linear
arr.unshift() // 0(n) — Linear (Has to move every index over to make room for new value at index 0)

/*
 * Unshift:
 * [1,2,3,4] — size of 4
 * [0,1,2,3,4] — 4 moves
 * [1,2,3,4,5,6,7,8] - size of 8
 * [0,1,2,3,4,5,6,7,8] - 8 moves
 */
```

So even though we have these native methods, we need to be aware that under the hood there are different time complexities. And when we’re calculating time complexity, we need to keep that in mind.

An example of quadratic time is nesting 2 loops. Exponential begins at 3 nested loops. (let i (let j (let k of ... )))

What about sorting? There is no such thing as a linear time sorting function.

And how do we combine them? There’s a rule of thumb:

**Rule of thumb when combining time complexities:** For the most part, you’re going to add something, or you’re going to multiply something.

```javascript
// What do we do if we have multiple expressions/loops/etc?

for (var i...) { // O(n)
  1+1            // O(1)
}
// Notation: O(n)

for (var i...) {  // O(n)
  for(var j...) { // O(n)
    3+3           // O(1)
  }
}
// Notation: O(n^2) | O(n) * O(n)

for (var i...) {  // O(n)
  for(var j...) { // O(n)
    3+3           // O(1)
    5+6           // O(1)
  }
}
// Notation: O(n^2) * O(2)
// Essentially, O(n^2)

```


### What about O(logn)?

Classic example is the telephone book. You could leaf through all the pages of the telephone book to find your entry, or, since it’s sorted, you can open the telephone book to the middle, sort greater or less, then rip the phone book in half. Is it greater or lesser than that?

This computation **(binary search)** is logarithmic.

#### Complexity of Common Operations

| Complexity    | Operation                                      |
| ------------- | ---------------------------------------------- |
| O(1)          | Running a statement                            |
| O(1)          | Value look-up on an array, object, variable    |
| O(logn)       | Loop that cuts problem in half every iteration |
| O(n)          | Looping through the values of an array         |
| O(n^2)        | Double nested loops                            |
| O(n^3)        | Triple nested loops                            |


Given what we’ve discovered about Time Complexity, how can we calculate Space Complexity?

As the data input grows, how do memory requirements grow?

What is the relationship between the size of the input, and the space it takes up in memory?


### Review: Time complexity
Time complexity of an algorithm signifies the total time required by the program to run to completion. The time complexity of algorithms is most commonly expressed using the **big O notation**.

Big O notation gives us an industry-standard language to discuss the performance of algorithms.

[Learn more about it here](http://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/
).


#### What is the time complexity for these operations?

```javascript
function countChars = function(str) {
  return str.length
  // because strings are immutable, computing the length is actually just a property lookup!
}
// O(1) — Constant Time
```

Calculate the time complexity for the native methods separately:

```javascript
var myList = ['hello!', '¡hola!']
myList.push('moin!') // O(1) — Constant Time
myList.unshift() // 0(n) — Linear Time
myList // => ['¡hola!', 'moin!']

```


## Elementary Sorting

### Bubble Sorting
