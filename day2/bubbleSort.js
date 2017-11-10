// Implement the elementary sorting algorithms
// repo: kuychace/algoClass/tree/master/sorting-algorithms

/*
Bubble SORT
*** Description
Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array
*** Exercises
- Implement bubble sort
- Identify time complexity
Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.
Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)
*/

function bubbleSort(arr) {

//for k, loop through 1 to n-1
//  for i loop 0 to n-2
//  if A[i] is greater than A[i+1]
//    swap A[i] with A[i+1]

  for(let i1 = 0; i1 < arr.length; i1++) {
    for(let i2 = 0; i2 < arr.length - 1; i2++) {
      if(arr[i1] > arr[i2]) {
        swap(arr, i1, i2)
      }
    }
  }

}

function swap(arr, i1, i2) {
  arr[i1] = arr[i1]^arr[i2]
  arr[i2] = arr[i1]^arr[i2]
  arr[i1] = arr[i1]^arr[i2]
  return arr
}

console.log(bubbleSor([2,1,3]))
