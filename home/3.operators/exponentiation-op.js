// ECMAScript 2016 introduced an alternative way (from Math.pow()) to get a base to the exponent power
//by using the exponentiation operator(**)
let x = 2
console.log(x**3) // 2^3
console.log(Math.pow(2, 3))

// The (**) also accepts the numbers of biint type
let result = 2n ** 3n
console.log(result)

// You can use the (**) in the infix notation
let y = 2
y **= 4
console.log(y)

// If you're goingo to exponentiate negative numbers, remember to put the base in parenthesis ()
let exponent = (-3)**3 // not -3**3
console.log(exponent)


