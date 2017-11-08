const head = L => L[0]
const tail = L => L.slice(1)

const recursiveMultiplier = (arr, num) => {
  const result = []

  const _recur = (arr) => {
    if (!arr.length) return result
    result.push(head(arr) * num)
    return _recur(tail(arr))
  }
  _recur(arr)

  return result
}

console.log(recursiveMultiplier([12,24,36], 3)) // => [36, 72, 108]


// interesting alternative solution (really forces me to visualize the stack frames):

/* NOTE: This is only good for visualization, as it is mutative as hell! */
const recurMult = (arr, num) => {
  if(!arr.length) return arr
  let last = arr.pop()
  // we haven’t returned anything yet, so the unravel happens in an unusual place here:
  recurMult(arr, num)
  arr.push(last * num)
  return arr
}
