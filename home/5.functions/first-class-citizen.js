// Functions are first-class citizens in JavaScript. In other words, you can treat them like values 
//of other types

// Storing functions in variables
function add(a, b) {
  return a + b
}

let sum = add
console.log(sum(12, 32))

// Passing a function to another function
function average(a, b, fn) {
  return fn(a, b) / 2
}

let result = average(23, 33, sum)
console.log(result)

// Return functions from functions
function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
        y = b[propertyName]

    if(x > y) {
      return 1
    } else if (x < y) {
      return -1
    } else {
      return 0
    }
  }
}

let products  = [
  {name: 'iPhone', price: 900},
  {name: 'Samsung Galaxy', price: 600},
  {name: 'Sony Xperia', price: 750}
]

// You can sort the product objects based on their names by passing a function returned from the
//compareBy() function
console.log('Produts sorted by name:')

products.sort(compareBy('name'))

console.table(products)

products.sort(compareBy('price'))
console.table(products)

// More JavaScript Functions are First-class Citizens Examples
function cmToIn(length) {
  return length / 2.54
}

function inToCm(length) {
  return length * 2.54
}

function convert(fn, length) {
  return fn(length)
}

let inches = convert(cmToIn, 30)
let cm = convert(inToCm, 4)
console.log(`Inches: ${inches}  Centimeter: ${cm}`)




