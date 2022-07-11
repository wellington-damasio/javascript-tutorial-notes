// A recursive function is a function that calls itself until it doesn't. 
// A recursive function calls itself inside its body until it doesn't
function recurse() {
  // ...
  recurse()
  // ...
}

// A recursive function always has a condition to stop calling itself. Otherwise, it will call itself
// indefinately. So a recursive function is like this
function recurse2() {
  if(condition) {
    // stop calling itself
    // ...
  } else {
    recurse2()
  }
}

// Generally, you use recursive functions to break down a big problem into smaller ones. Like in 
//binary trees, graphs and algorithms such as binary search and quicksort

// A simple JavaScript recursive function example
function countDown(fromNumber) {
  console.log(fromNumber)
  
  let nextNumber = fromNumber - 1

  if(nextNumber > 0) {
    countDown(nextNumber)
  }
}

countDown(5)

// Calculate the sum of n natural numbers
function sum(n) {
  if(n >= 1) { // while n not 0
    return n  + sum(n - 1) // sum n + (n - 1)
  }

  return n
}

console.log(sum(10))






