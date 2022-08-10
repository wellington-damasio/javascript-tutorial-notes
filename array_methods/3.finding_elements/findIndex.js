// The Array.prototype.findIndex() method allows you to find the first element
//that satisfies a provided testing function

// The findIndex() method returns the index of the element that satisfies that 
//function or -1 if no elements passed the test

// findIndex(testFn(element[,index[, array]])[, thisArg])

// --------------------------------------------------------------------
//                Using findIndex() with a simple array
// --------------------------------------------------------------------
let ranks = [1, 5, 7, 8, 10, 12, 7, 9, 88]
let index = ranks.findIndex(rank => rank === 7)
console.log({index}) // 2

// --------------------------------------------------------------------
//          Using findIndex() with a more complex condition
// --------------------------------------------------------------------
let complexIndex = ranks.findIndex((rank, index) => {
	return rank === 7 && index > 2
})

console.log({complexIndex}) // 6

// --------------------------------------------------------------------
//             Using findIndex() with an array of objects
// --------------------------------------------------------------------
const products = [
  { name: 'Phone', price: 999 },
  { name: 'Computer', price: 1999 },
  { name: 'Tablet', price: 995 },
  { name: 'Refrigerator', price: 3000 }
]

const productIndex = products.findIndex(product => product.price > 1000)
console.log({productIndex}) // 1 => Computer

