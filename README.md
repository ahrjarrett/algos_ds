# Data Structures & Algorithms

Bookmark: Binary Trees 14 (11/15/17)

* Day 1: Recursions & OO
* Day 2: Time Complexity, Sorting
* Day 3: Trees & Searching Algorithms
* Day 4: Binary Tree Search
* Day 5: Hash Tables & Hashing
* Day 6: Advanced Applications & Optimizations

### Exercises:

* Day 1: Implemented Stack & Queue; there are still exercises at the bottom of Queue.js
* Day 2: Quick Sort works; definitely need to review sorting algorithms
* Day 3: Binary Trees & Linked Lists
* Day 4: TODO: Implement Delete methods (09/#14)


## Time Complexity

Time Complexity of Common Operations:

| Notation    | Name         | Operation                                      |
| ----------- | ------------ | ---------------------------------------------- |
| O(1)        | Constant     | Running a statement                            |
| O(1)        | Constant     | Value look-up on array, obj, var               |
| O(logn)     | Logarithmic  | Loop that cuts problem in half every iteration |
| O(n)        | Linear       | Looping through the values of an subarrays     |
| O(nlogn)    | Linearithmic | Recursion w/ binary split (merge sort)         |
| O(n^2)      | Quadratic    | Double nested loops                            |
| O(n^3)      | Exponential  | Triple nested loops                            |

Check out [Big-O Cheat Sheet](http://bigocheatsheet.com/) for a crazy breakdown and tons of good stuff (and an svg rendered graph, screenshot below):

![Big-O Complexity Chart](https://github.com/ahrjarrett/algos_ds/blob/master/day3/Screen%20Shot%202017-11-10%20at%2010.28.44%20PM.png)


## Sorting

Further study on Sorting Algorithms: **Non-Comparison Sorts**
1. [Radix Sort](https://www.youtube.com/watch?v=YXFI4osELGU)
2. [Counting Sort](https://www.youtube.com/watch?v=TTnvXY82dtM)
3. [Bucket Sort](https://www.youtube.com/watch?v=geVyIsFpxUs)


Common use cases for Stacks (LIFO) & Queues (FIFO):

**Stack**
1. Backtracking in a maze
2. Undo Operations
3. Call Stacks
4. Parsing Expressions
5. *Depth First* Search

**Queue**
1. Pop-up Messages
2. Events
3. HTTP Requests
4. *Breadth First* Search


## Binary Search Trees

See the **[notes here](https://github.com/ahrjarrett/algos_ds/tree/master/day4)** and the **[data structure implementation here](https://github.com/ahrjarrett/algos_ds/blob/master/day4/binarySearchTree.js)**. Writing the BST is easy and elegant with recursion!

![Binary Search Tree GIF](https://github.com/ahrjarrett/algos_ds/blob/master/day4/bst.gif)
