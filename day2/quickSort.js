
function quickSort(arr, lo, hi) {
  if(lo === undefined) lo = 0
  if(hi === undefined) hi = arr.length - 1

  if(lo < hi) {
    var p = partition(arr, lo, hi)

    quickSort(arr, lo, p-1)
    quickSort(arr, p+1, hi)
  }

  if(hi - lo === arr.length - 1) return arr
}

function partition(arr, lo, hi) {
  var pivot = arr[hi]
  var pivotLoc = lo
  for(var i = lo; i < hi; i++) {
    if(arr[i] <= pivot) {
      swap(arr, pivotLoc, i)
      pivotLoc++
    }
  }
  swap(arr, pivotLoc, hi)
  return pivotLoc
}

function swap(arr, i1, i2) {
  if(i1 === i2) return
  // Ah, using a TEMP var seems like a decent pattern
  var temp = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = temp
  console.log('swapped', arr[i1], arr[i2], 'in', arr)
  return arr
}

console.log(quickSort([1,3,5,2,4,6]))
console.log(quickSort([1,3,5,2,4,6,1,3,5]))
