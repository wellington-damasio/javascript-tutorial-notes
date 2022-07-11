// JavaScript has the primitive data types:
//  1. null
//  2. undefined
//  3. boolean 
//  4. number
//  5. string
//  6. symbol (available from ES2015)
//  7. bigint (available fomr ES2020)
//
//  1. object (complex data type)

// JavaScript is dinamically typed. Variables casn hold a value of different types.
let counter = 120 // number
counter = false // boolean
counter = 'foo' // string

// To get the current type of a value use `typeof`
console.log(typeof(counter)) // outputs a string with the data-type

// The null data type
let obj = null
console.log(typeof(obj)) // object
// JavaScript defines null is equal to undefined
console.log(null ==  undefined) //true (same value)
console.log(null === undefined) //false (not the same type)

// The number type
// JavaScript uses number to represent both integer and floating-point numbers
let num = 100 //integer
let price = 12.5 //floating
// JavaScript converts floating numbers to integers automatically to use less memory
price = 200.00 // converts to 200

// To get the range of the number type:
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// You can algo use Infinity and -Infinity to represent infinite numbers
console.log(Number.MAX_VALUE + Number.MAX_VALUE) // Inifinity
console.log(Number.MIN_VALUE - Number.MIN_VALUE) // -Infinity

// NaN
// Not a Number. Indicates a invalid number.
console.log('a' * 2) // not a number
console.log('a' + 2) // 'a2' (turns 2 into a string and concatenates with 'a')

// The boolean type
// Can be true or false.
let inProgress = true
let completed = false
console.log(typeof inProgress) // boolean
console.log(typeof completed) // boolean
// To convert a value of another data type into a boolean value, use Boolean() 
// Boolean conversion rules:
// Type       | true                          | false
// string     | non-empty string              | empty  string
// number     | non-zero number and Infinity  | 0, NaN
// object     | non-null object               | null
// undefined  |                               | undefined

// The symbol type
// JavaScript added this type in ES6. symbol does not have a literal form
// To create a symbol use the following function
let s1 = Symbol()
The Symbol function creates a unique value every time you call it.
console.log(Symbol() === Symbol()) //false

// The bigint type
// Represents the whole numbers that are larger than 2^53-1. To form a bigint literal append
//the letter `n` at the end of the number
let pageView = 9007199254462112n
console.log(typeof pageView) //bigint

// The object type
// Object is a collection of properties, where each property is defined as key-value pair.
let emptyObject = {}
let person = {
  firstName = 'Wellington',
  lastName = 'Damasio'
}
// You can use double quotes to form a string for the object property names if you dont want to use
//camelCase
let contact = {
  'first-name': 'John',
  'last-name': 'Doe',
  phone: '(37) 9 9981-8823',
  address: {
    building: '300',
    street: 'North 1st street',
    city: 'San Ternura'
    state 'CA',
    country: 'USA'
  }
}
// To access object propertis you can use (.) or ([])
console.log(contact.phone)
console.log(contact['first-name'])




