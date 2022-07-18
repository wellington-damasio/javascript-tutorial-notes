// ---------------------------------------------
//      Importing Modules in JavaScript
// ---------------------------------------------
// You can access the exported variables, functions, and classes in another module by using the 
//import keyword.
import {calculateSalary, sayMyName} from './es6_modules.js'
import * as calc from './calc.js'

console.log(calculateSalary('R$', 3500, 13))

let myName = sayMyName('Wellington', 'Damasio', 'Pascoa', 'Junior')
let secondTry =  sayMyName()

console.log(myName)
console.log(secondTry)
console.log(sayMyName('Yago'))

console.log(calc.sum(99, 323, 44, 11, 31))
console.log(calc.divide(33, 1, 21, 44))
console.log(calc.multiply(1, 2, 3, 4, 5, 6, 7))
console.log(calc.multiply(32, 2))
console.log(calc.divide(20 / 2))
