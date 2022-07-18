// --------------------------------------
//           Creating symbols
// --------------------------------------
// ES6 added Symbol as new primitive type. Unlike other primitive types, such as number, boolean, null,
//undefined, and string, the symbol type doesn't have a literal form

// To create a new symbol, use the global Symbol() function
let s = Symbol('foo')
console.log(s)

// The Symbol() functyion creates a new unique value each time you call it
console.log(Symbol() === Symbol()) // false

// Since symbols are primitive values, you can use the typeof operator to check whether a variable is 
//a symbol

let firstname = Symbol('first name')
console.log(firstname)
console.log(typeof firstname) // symbol

// --------------------------------------
//            Sharing Symbols
// --------------------------------------
// ES6 provides you with the global symbol registry that allows you to share symbols globally. If you
//want to create a symbol that will be shared, you use the Symbol.for() method instead of calling the
//symbol function

let ssn = Symbol.for('ssn')
// The Symol.for() method searches for the symbol with the ssn key in the global Symbol registry. It
//returns the exisiting symbol if there is one. Otherwise, the Symbol.for() methods creates a new 
//symbol, registers it to the global symbol registry with the specified key, and returns the symbol

let citizenID = Symbol.for('ssn')
console.log(ssn === citizenID) // true

// To get the key associated with a symbol, you use the Symbol.keyFor() method as shown in the 
//following example
console.log(Symbol.keyFor(citizenID)) // ssn

// --------------------------------------------
//                Symbol Usages
// --------------------------------------------

// A) Using symbols as unique values
// Whenever you use a string or a number in your code, you should use symbols instead. For example,
//you have to manage the status in the task management application. Before ES6, you would use strings
//such as `open`, `in progress`, `completed`, `canceled`, and `on hold` to represent different status
//of a task. In ES6, you can use symbols as follows:

  let statuses = {
    OPEN: Symbol('OPEN'),
    IN_PROGRESS: Symbol('In Progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On Hold'),
    CANCELED: Symbol('Canceled')
  }

  // task.setStatus(statuses.COMPLETED)

// B) Using Symbol as the computed property name of an object
let status = Symbol('status')
let task = {
  [status]: statuses.OPEN,
  description: 'Learn ES6 Symbol'
}

console.log(task)

// To get all enumerable properties of an object, you use the Object.keys() method
console.log(Object.keys(task))

// To get all properties of an object whether the properties are enumerable or not, you use the
//Object.getOwnPropertyNames() method
console.log(Object.getOwnPropertyNames(task))

// To get all property symbols of an object, you use the Object.getOwnPropertySymbols() method
console.log(Object.getOwnPropertySymbols(task))





