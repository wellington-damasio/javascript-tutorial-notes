// The nullish coalescing operator returns the second value (val2) if the first value (val1) is null 
//or undefined
function returnValue(val1 = undefined, val2) {
  let result = val1 ?? val2
  return result
}

console.log(returnValue(2, 3))
console.log(returnValue(null, 4))
console.log(returnValue(undefined, 7))

// Why nullish coalescing operator?
let count
let result = count || 1
console.log(result)
// If you consider 0 or empty strings '' as valid value like this the || operator can confuse you
count = 0
result = count || 1
console.log(result) // expecting 0, but got 1 because Boolean(0) resolves to false and

// Nullish coalescing opeator prevent 0 and '' to confuse you. It only returns the second value if
//the first undefined or null.



