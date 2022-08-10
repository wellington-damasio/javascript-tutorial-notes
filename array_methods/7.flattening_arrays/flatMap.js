// The flat() method creates a new array with the elements of the subarrays 
//concatenated into it.

// The map() method creates a new array whose elements are the results of a 
//mapping function.

// The flatMap() method is the combination of the map() method followed by the 
//flat() method of depth 1.

// The flatMap() method first maps each element in an array using a mapping 
//function and then flattens the results into a new array.

// let newArray = arrayObject.flatMap(callback,thisArg);

// The callback mapping function
// function callback(currentValue [[,index], array])

// ------------------------------------------------------------
// 		   Creating words from sentences with flatMap()
// ------------------------------------------------------------
let sentences = ["JavaScript Array flatMap()", ' ', "is", ' ', "Awesome"];

let words = sentences.map(s => s.split(" "))
console.log({words})

let flattedWords = words.flat()
console.log({flattedWords})

let realWords = sentences.flatMap(s => s.split(' '))
console.log({realWords})

let filteredRealWords = realWords.filter(w => w)

let string = filteredRealWords.join(' ')
console.log({string})

// ---------------------------------------------------------------
//         Adding and removing elements during  mapping
// ---------------------------------------------------------------
let cart = [{
	name: 'Smartphone',
	qty: 5,
	price: 500,
	freeOfCharge: false
}, {
	name: 'Tablet',
	qty: 1,
	price: 800,
	freeOfCharge: false
}, {
	name: 'Lamborghini',
	qty: 1,
	price: 2300000,
	freeOfCharge: true
}]

// When the customer adds a smartphone to the cart, you can add a screen protector
//to the cart using the flatMap() method as follows:
let newCart = cart.flatMap(item => {
	if(item.name === 'Smartphone') {
		return [item, {
			name: 'Screen Protector',
			qty: item.qty,
			price: 5,
			freeOfCharge: true
		}]
	} else {
		return [item]
	}
})

console.log(newCart)

// The following uses the reduce() method to calculate the total amount from the
// items in the cart. It ignores the free-of-charge items, like screen protectors:
const total = newCart.reduce((sum, item) => {
	if(!item.freeOfCharge) {
		sum += item.price * item.qty
	}

	return sum
}, 0)

console.log({total})