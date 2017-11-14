###### Day 4: Binary Search Tree

# Intro to Trees and Searching

[Slides](http://slides.com/bgando/trees-and-searching#/)

Trees, a review:

N-ary Tree
1. Parent/child relations
2. Each node can have n children
3. Sequential access

Binary Tree
1. Same as n-ary, plus:
2. Each node can have a max of 2 children

Binary Search Tree
1. Same as binary tree above, plus:
2. Each node is comparable
3. Each node's Left subtree < parent value and
4. Right subtree > parent value

#### Performance:

Sorted Array
* *Fast*
* Value Lookup by key
* *Slow*
* Inserting new values
* Deleting values

BST:
* Fast (usually)
* Inserting new values
* Deleting values

BSTs are faster at inserting/deleting values because it is a more flexible data structure and we don’t have contiguous usage of memory space (like you might with an array).

With inserting, instead of moving every element, we traverse the tree and find its place in the list. In this case, a **traversal** only takes as long as the tree is levels deep.

*For example*, in the visual below, adding 19 to the BST would only take 4 steps: Is 19 > or < 11? 15? 20? 18? 19 is added as the Right child of 18.

![Binary Search Tree](https://s3.amazonaws.com/media-p.slid.es/uploads/195658/images/2724416/Screen_Shot_2016-06-08_at_10.18.08_AM.png)

What is the time complexity of a BST? In the above example, we’re cutting the tree in half each time, which means the time complexity is `O(logn)`.

### Pseudocoding the BST


Pseudocode for `insert`:

```javascript
// Assuming this code:
var bst = new BST(11)
{value: 11, left: null, right: null}
bst.insert(15)
{v:11, l:null, r: {v:15}}
rst.insert(7)
{v:11, l: {v:7}, r: {v:15}}
bst.insert(5)
{v:11, l: { v:7, l: {v:5} }, r: {v:15}}
bst.insert(17)
{v:11, l: { v:7, l: {v:5} }, r: {v:15, r:17}}

// Pseudocode for INSERT:
// First iteration:
if value < current 5 < 11
  if (left) go left
    insert(value) //5
  else insert on current’s left
  if value > current
    if (right) go right
    else insert new tree w/ value
    add to current’s right
    return??

// Next iteration:
if value < current 5 < 7
  if (left) go left
     this.left.insert(value) //5
  else insert on current’s left
  if value > current
    if (right) go right
    else insert new tree w/ value
    add to current’s right
    return??
```


Pseudocode for `contains`:

```javascript
// Interface:
contains(value) // => true/false
  if(current value === value?)
    return true
  else check if it is >
    if this.right
      // recur:
      "go right" this.right.contains(value)
  check if it is <
    if this.left
      // recur:
      "go left" this.left.contains(value)
  return false
```

See [implementation of BST contains](https://github.com/ahrjarrett/algos_ds/blob/master/day4/binarySearchTree.js).

**Note:** Notice how we’re using `&&` as a *“gate”* when implementing `contains`. We can think of it this way because the second half (the recursive call) won’t even run if the first value (`!!this.left` and `!!this.right`)) evaluates to false.

On the other hand, `||` functions as a *“default”* value if the first half evaluates to false.


## Exploring BSTs

“Exploring” a binary search tree means looking at/touching every node in a tree (looking up every item in an array, going from head to tail on a linked list, etc.).

There are 3 different kinds of traversals:

1. `in-order`
2.`preorder`
3. `post order`

These traversals happen in **linear time**, which makes sense.

### How do we (typically) explore the following data structures?
* Linked List — `while` loop
* Array — `for` loop
* Object — `for in` loop
* Stack/Queue — trick question; you’re not supposed to “explore” these data structures

## In-Order Traversal

Looks like this:

![In-Order Traversal](https://s3.amazonaws.com/media-p.slid.es/uploads/195658/images/2754258/pasted-from-clipboard.png)
