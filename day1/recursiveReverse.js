const head = L => L[0]
const tail = L => L.slice(1)

const recursiveReverse = (arr) => {
  let newArr = []

  const _recur = (arr) => {
    if(!arr.length) return newArr
    newArr[arr.length-1] = head(arr)
    return _recur(tail(arr))
  }

  _recur(arr)

  return newArr
}

console.log(recursiveReverse([3,2,1]))
