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


:rabbit2: SUPER fast  ————————————----------——––––––––> SUPER SLooooooW :turtle:

| Name         | constant | logarithmic | linear | quadratic | exponential |
| ------------ | -------- | ----------- | ------ | --------- | ----------- |
| **Notation** | O(1)     | O(logn)     | O(n)   | O(n^2)    | O(k^n)      |


Anything past linear is considered a bad algorithm. You really don’t want to be in quadratic or exponential time.


### Logarithmic Time

__From Wikipedia on logarithm:__ “In mathematics, the logarithm is the inverse operation to exponentiation, just as division is the inverse of multiplication and vice versa.”

For visualization: It’s helpful to think about what happens if you double the size of the input: for quadratic, if you’ve doubled the input, you’ve quadrupled the number of operations; for lineary, if you’ve doubled the input, you’ve doubled the number of operations; and for constant, the number of operations does not change.

![Big O Graph](https://github.com/ahrjarrett/algos_ds/blob/master/day2/big-oh-graph.jpg)
