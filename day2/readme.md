###### Day 2: Time Complexity, Sorting

# Intro to Time Complexity

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
  // because strings are immutable, computing the length is actually just a property lookup — cool!
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


# Elementary Sorting

[Awesome interactive visualization comparing different sorting algorithms](http://rebootjeff.github.io/comparisonsort/)

## Bubble Sorting

### Concept: Bubble Sort

Bubble sort is a comparison sort that repeatedly swaps adjacent elements that are out of order

Values “bubble up” to the top of the data structure.

### Interface: Bubble Sort

1. Sorting Function

`bubbleSort(list) —> a sorted list`

* loops through list
* compares adjacent elements
* swaps higher item toward the end

Pseudocode: Bubble Sort

```
// bubbleSort(list)
for k, loop through 1 to n-1
  for i loop 0 to n-2
  if A[i] is greater than A[i+1]
    swap A[i] with A[i+1]
```

We could also easily write this use a while loop.


[What happens if we use a polynomial expander?](https://www.mathportal.org/calculators/polynomials-solvers/polynomials-expanding-calculator.php)

```
F(n) = (n-1) * (n-1) * c
```

Turns in to:

```
F(n) = c(n^2) - 2cn + 1
```

What is the *highest* order of this function? All we really care about is that this implementation of bubbleSort is `n²`.


### Optimize: Bubble Sort

We don’t need to loop all the way to the end every time because the right side of the array becomes sorted every loop.

But for all intents and purposes, this is still O(n^2) *(wait really?)*

Bubble Sort...

**Time Complexity** = O(n^2)
**Space Complexity** = O(1)


### Stability

We’ve only talked about how fast algorithms are. But what about their *stability*?

A sorting algorithm is stable if it preserves the order of *equal* items.

**Note:** Any comparison-based sorting algorithm can be made stable by using position as a criteria when two elements are compared.

Prompt: I want bikes sorted by price (ascending). Given equal prices, I want lighter option to be first.


Bike A $600 20 lbs | Bike B $500 30 lbs
Bike B $500 30 lbs | Bike C $500 35 lbs
Bike C $500 35 lbs | Bike A $600 20 lbs

(I’ve thought about this next part a lot before!)

The list is already sorted by weight (ascending). I just need to sort it by price. But an unstable sort based on price could “unsort” weights.

### Adaptability

A sorting algorithm is “adaptive” if it becomes more efficient (i.e., if its complexity is reduced) when the input is already *nearly* sorted.

That last part is important, but only made sense on the 2nd or 3rd read.


## Selection Sort

Selects the smallest element in an array, pushes it into a new array. (n^2)

## Insertion Sort

Selects the first element in an array, pushes it into a new array. As each new element is added, insert the new element in the correct order.

[1, 6, 8, 2, 5]
[]

## Insertion Sort (in place)

Selects the first element in an array, considers that our sorted list of size 1. As each new element is added, insert the new element in the correct order by swapping in-place.

```javascript
[1, 6, 8, 2, 5]
// becomes:

[1]
// Is 6 greater than 1? Yes.
[1, 6]
// Is 8 greater than 1? Yes. Is 8 greater than 6? Yes.
[1, 6, 8]
// Is two greater than 1? Yes. Is 2 greater than 6? No.
[1, 2, 6, 8]
// Is 5 greater than 1? Yes. Is 5 greater than 2? Yes. Is 5 greater than 6? No.
[1, 2, 5, 6, 8]
```

## Merge Sort

[Slides](http://slides.com/bgando/sorting#/2).

Whenever you think of cutting things in half, you should be thinking “logarithmic”. But in a lot of cases, the notation is actually `n*log(n)`, because you’re still *merging* the two back together, which has a linear time complexity.

#### Divide & Conquer
Recursive calls to a subset of the problem

Steps for Divide & Conquer:
1. Recognize base case
2. Divide: break problem down during each call
3. Conquer: do work on each subset
4. Combine: solutions

**See [mergeSort.js](https://github.com/ahrjarrett/algos_ds/blob/master/day2/mergeSort.js) in this directory for recursive & iterative implementations.**

**[See the solution repo](https://github.com/kuychaco/algoClass/blob/solutions/sorting-algorithms/merge.js)**.


## [Quick Sort]

[Slides](http://slides.com/bgando/sorting#/3).

### Concept: Partition

In Merge Sort, the divide step does little, and the hard work happens in the combine step. Quick Sort is the opposite: **all the work is in the divide step**.

The *partition* is the process in which we select our pivot and rearrange all the elements that are greater than, to the right and all the elements that are less than or equal to on the left.

“In essence what we’re doing is picking a pivot point, usually the first or the last item in an array, and swap out all the elements that are larger and put them to the right, then move all the elements that are smaller to the left”

![Quick sort in action](https://s3.amazonaws.com/media-p.slid.es/uploads/399980/images/1925462/quicksort_2.png)
