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
2. `preorder`
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

### Pseudocode for In-Order Traversal

```
traverse(fn):
  this.value // === 11
  when !!this.left && !!this.right return
  traverse(this.left) // === 7
  // =========== // this is where we pause, and will resume after traversing down the left:
  fn(this.value)
  traverse(this.right)
  //...
  //...
```
But there is a bug in the above code: we’re not handling the base case properly. The `fn` arg is never called on the leaf nodes.

We can solve the problem by rewriting our pseudocode like this:

```javascript
inOrderTraverse(fn)
  this.value // === 11
  if(!!this.left)
    inOrderTraverse(this.left)
  // Side effects:
  fn(this.value)

  if(!!this.right)
    inOrderTraverse(this.right)

  return undefined
```

> At first, the control flow confused me: Why are we only calling the `fn` after traversing `this.left`? Wouldn’t we need to mutate the result of traversing `this.right`, too?

> The reason we only call the function on `this.value` is because we also reach this point in the function call at the end of calling `this.right`, because *every invocation of `traverse` will also check `if(!!this.left)`*, and when that statement finally returns false, we know we have reached a leaf. When that call is popped off the stack, **we then back up to call the function on every value of the node**.


## Pre-Order Traversal

[Slides](http://slides.com/bgando/bst#/2/4)

![Pre-Order Traversal](https://s3.amazonaws.com/media-p.slid.es/uploads/195658/images/2754261/pasted-from-clipboard.png)

*Talking it out:* For an In-Order traversal, our order was something like: Go left, call `fn` on self, go right. If we think of it that way, then the Pre-Order traversal is more like: **Call `fn` on self, then go left, then go right**.

### Pseudocode for Pre-Order Traversal

```
Pattern: Self, Left, Right
preOrderTraverse(fn)
  fn(this.value)

  if(!!this.left)
    preOrderTraverse(this.left)

  if(!!this.right)
    preOrderTraverse(this.right)   

```


## Post-Order Traversal

[Slides](http://slides.com/bgando/bst#/2/5)

![Post-Order Traversal](https://s3.amazonaws.com/media-p.slid.es/uploads/195658/images/2754262/pasted-from-clipboard.png)

What is Post-Order? The pattern is **Left, Right, Self**.

### Pseudocode for Post-Order Traversal:

```
postOrderTraverse(fn)
  if(!!this.left)
    postOrderTraverse(this.left)

  if(!!this.right)
    postOrderTraverse(this.right)


  fn(this.value)
```

> *Note:* All of these functions are considered **depth-first** traversals, and only specify where the transformation occurs. Also note, the pseudocode for these implementations assumes side-effects; the name only informs us *where* the transformation takes place.


Please see the [implementation of Binary Search Tree](https://github.com/ahrjarrett/algos_ds/blob/master/day4/binarySearchTree.js) to see how these recursive searches work under the hood!


## Deleting Nodes from a BST

[Slides](http://slides.com/bgando/bst#/3)

Talking Min/Max deletion: At first glance, it would seem like just going left and deleting the leftmost node would work; but what about after we delete the 3 in the diagram above? At that point, *5 is the smallest value* even though it has no `this.left`. Also, keep in mind that if we remove the 5, we need to reassign the value of 7 to take its place in order for the tree to remain sorted.

In order to do this, **we have to pass the parent down for recursive calls**.

### Pseudocode for Delete Min:

```
deleteMin(parent)
  if(!this.left && !this.right)
    parent.left = null
  if(!this.left && this.right)
    parent.left = this.right
  // remember, the `this` we pass deleteMin becomes the parent in the next call:
  if(this.left) this.left.deleteMin(this)

tree.deleteMin()
```

#### Edge Cases for Delete Min/Max

1. But are we solving for when the minimum value is also the root node? What if we had a BST of this structure:

```
bst =
{ val: 7, left: null, right:
  { val: 8, left: null, right:
    { val: 9, left: null, right:
      // ... ...
    }
  }
}
```

In this case, we need to check to see if there is no parent, since the root node by definition has no parent.

`if(!this.parent) /* ... */ `

In this case, how do we update the tree to reflect this transformation? *One way to solve this is by setting the value of the tree to this.right.* How would this look in code? From the outside, this transformation looks like this:

```
bst = bst.right
```

But how do we do this from inside the fn call? The answer: **By mutating the value of `this` to be `this.right`** from within the function itself.

```javascript
deleteMin(parent)
  if(!this.parent && !this.left) this = this.right
  // ...
```

The actual implementation of this might be different, depending on how you structure the control flow for the rest of the function.

2. What if the minimum element is also the only element?

This is simple enough; we could simply set the value of `this` to be null. This is a good solution for if we don’t care about thie BST anymore, and want it to be garbage collected. But what if we still want to add nodes/leaves later on? In this case, we need to preserve the structure of `this.left` and `this.right`, so we can set these values later. The final shape of the BST might then be:

```javascript
bst = { val: null, left: null, right: null }
```

So in the end, a quick-and-dirty `deleteMin` might look like this:

```javascript
BinarySearchTree.prototype.deleteMin = function(parent) {
  if (!this.left && !this.right) {
    if (parent) parent.left = null
    else this.value = null
  }
  else if (!this.left && this.right) {
    if (parent) parent.left = this.right
    else {
      this.value = this.right.value
      this.right = this.right.right
    }
  }
  if (this.left) this.left.deleteMin(this)
}
```

Talking through the control flow:

* If there is no left and there is no right, and there *is* a parent, then nullify the left tree; otherwise, nullify the current value (the root node). This preserves the tree structure, in case we want to add to it later.

* Else if there is no left but there is a right, and there *is* a parent, then update the parent’s left to reference the current node’s right; otherwise, you’re at the root node and *the root is the minimum*, so update this’s value (the root node) to the value of the tree’s right branch, which is now the new root node. Don’t forget to reassign the new root’s right to reference the rest of the right branch).

* No matter which branch runs, we still enter another conditional, which states: If there is a left, recursively call this function on the left branch, passing **this** *(which in this case, represents the left branch)* as the argument. This is how we approach our base case.
