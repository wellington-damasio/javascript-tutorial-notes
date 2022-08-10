// The Array.prototype allows you to reduce an array to a single value using the
//reduce() method

// reduce(callbackFn [, initalValue])

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = numbers.reduce((pNumber, cNumber) => pNumber + cNumber)

console.log({numbers, sum})

// -------------------------------------------------------
//            reduce() callbackFn in detail...
// -------------------------------------------------------
// function callbackFn(previousValue, currentValue, currentIndex, array)

// - previousValue
// 	The value returned from the previous call of the callbackFn. On the first call,
// the initalValue is the previousValue if you passed it. Otherwise, its value is
// the array[0]

// - currentValue
// 	The value of the current array element. It is array[0] if you passed an 
// initialValue. Otherwise, its array[1]

// -------------------------------------------------------------------
// 			Progress of reduce() with an initialValue as 100
// -------------------------------------------------------------------
function getOrdinalSuffix(i) {
	let j = i % 10, k = i % 100

	if(j == 1 && k != 11) return i + 'st'
	if(j == 2 && k != 12) return i + 'nd'
	if(j == 3 && k != 13) return i + 'rd'

	return i + 'th'
}

let call = 1

let newSum = numbers.reduce((pValue, cValue, cIndex, array) => {
	let result = pValue + cValue

	console.log(`${getOrdinalSuffix(call)} call`)
	call++

	console.table({pValue, cValue, cIndex, result})

	return result
}, 100)

console.log(`Result: ${newSum}`)

// ----------------------------------------------------------------------
//   Using reduce() to calculate the sum for a shopping cart buying
// ----------------------------------------------------------------------
let shoppingCart = [
 {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
]

let total = shoppingCart.reduce((pValue, cValue) => {
	return pValue + cValue.price * cValue.qty
}, 0)

console.log({total}) // 550