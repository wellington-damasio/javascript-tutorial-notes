// An arrow function doesn't have its own `this` value and arguments object. Therefore, you should not
//use it as an event handler, a method of an object literal, a prototype method, or when you have a 
//function that uses the argument object;

// To summarize, do not use arrow function:
//  1) as an event handler
//  2) as a method of an object literal
//  3) as a prototype method
//  4) when you have a function that uses the arguments object


// 1) EVENT HANDLERS

const greeting =  document.querySelector('#greeting')
const username = document.querySelector('#username')

username.addEventListener('keyup', () => {
  greeting.textContext = 'Hello ' + this.value // Hello undefined
})

// In the browser, the global object is window. The window object doesn't have the value property. 
//Therefore the JavaScript engine adds the value property to the window object and sets its value to
//undefined. 
// This happens because the arrow function doesn't have its own `this` value, so it references the 
//globalThis in that case

// To fix this issue, you need to use a regular function instead. The `this` value will be bound to the
//document element that triggers the event

username.addEventListener('keyup', function() {
  input.textContext = 'Hello ' + this.value
})


