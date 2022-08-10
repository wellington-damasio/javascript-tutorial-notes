// The Array.prototype.unshift() method adds one more elements to the 
//beginning of an array and returns the array's new length.

// Because the unshift() method need to reindex the existing elements, it is
//slow if the array has many elements

// ---------------------------------------------------------
//   Using unshift() to prepend an element to an array
// ---------------------------------------------------------
let numbers = [30, 40]

const length = numbers.unshift(20)

console.log({length})
console.log({numbers})

// ----------------------------------------------------------------
//    Using unshift() to prepend multiple elements in an  array
// ----------------------------------------------------------------
let numbers2 = [30, 40]
const length2 = numbers2.unshift(30, 40, 500, 1)

console.log({length2})
console.log({numbers2})

// ----------------------------------------------------------------
//     Using unshift() to add elements of an array to another
// ----------------------------------------------------------------
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
let weekends = ['Sat', 'Sun']

days.unshift(...weekends)

console.log(days)

