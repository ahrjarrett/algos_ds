// merge sort:

// Recursive top-down approach:
// Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

// Iterative bottom-up approach:
// Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.


// looks like they both use the MERGE fn at bottom:

// O(n*log(n))
function mergeSortRecursive(arr) {
  if(arr.length <= 1) return arr

  // Divide & Conquer!
  var leftHalf = arr.slice(0, arr.length / 2)
  var rightHalf = arr.slice(arr.length / 2)
  var leftSorted = mergeSortRecursive(leftHalf)
  var rightSorted = mergeSortRecursive(rightHalf)

  // Merge Subarrays!
  return merge(leftSorted, rightSorted)
}

// O(n^2) ??
function mergeSortIterative(arr) {
  var splitArr = arr.map(function(element) { return [element] })

  // While there is more than 1 subarray:
  while(splitArr.length > 1) {
    var result = []
    // merge adjacent
    for(var i = 0; i < splitArr.length; i += 2) {
      // for pairs merge
      if(splitArr[i+1]) result.push(merge(splitArr[i], splitArr[i+1]))
      // for last odd element, just add to results
      else result.push(splitArr[i])
    }
    // overwrite old splitArr
    splitArr = result
  }

  return splitArr[0]
}

function merge(left, right) {
  var result = [], iLeft = 0, iRight = 0
  while(result.length < (left.length + right.length)) {
    if(iLeft === left.length) result = result.concat(right.slice(iRight))
    else if (iRight === right.length) result = result.concat(left.slice(iLeft))
    else if (left[iLeft] <= right[iRight]) result.push(left[iLeft++])
    else result.push(right[iRight++])
  }
  return result
}


/* Looks like the recursive solution is ~4x slower than the iterative
 * at ~60 repetitions (probably not an accurate benchmark at all,
 * just getting a feel for each:
 */

console.time('recursive solution')
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortRecursive([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
console.timeEnd('recursive solution') // => 4.004ms

console.time('iterative solution')
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
mergeSortIterative([3,4,5,1,2,3,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2])
console.timeEnd('iterative solution') // => 0.922ms

//console.log(mergeSortIterative([3,4,5,1,2,3]))
