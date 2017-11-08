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


We can represent time as shape using Big O Notation.

| Big-O, name        | # of Operations     | Algorithm                      |
| ------------------ | ------------------- | ------------------------------ |
| O(n^2), quadratic  |   n^2               | Compare all numbers            |
| O(n), linear       |   2n                | Find min and max numbers       |
| O(1), constant     |   3                 | Sorted List, find 1st and last |


SUPER fast                                                   SUPER SLooooooW

| Name         | constant | logarithmic | linear | quadratic | exponential |
| ------------ | -------- | ----------- | ------ | --------- | ----------- |
| **Notation** | O(1)     | O(logn)     | O(n)   | O(n^2)    | O(k^n)      |


__From Wikipedia on logarithm:__ “In mathematics, the logarithm is the inverse operation to exponentiation, just as division is the inverse of multiplication and vice versa.”
