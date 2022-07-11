// The object literal is one of the most popular patterns for creating objects in JavaScript because of
//it's simplicity. ES6 makes object literal more succint  and powerful by extending the syntax in 
//some ways

// Object property initializer shorthand
// ES6 allows you to eliminate the duplication when a property is the same as the local variable name
//by including the name without a colon and value
function createMachine(name, status) {
  return {
    name: name,
    status: status
  }
}

function createPerson(name, gender, hobbie) {
  return {
    name,
    gender,
    hobbie
  }
} 

let welly = createPerson('Wellington', 'male', 'F1')
console.log(welly)

