// Before ES6, we often used an objecet to emulate a map by mapping the key to a value of any type. But
//using an object as a map has some side effects:
//   1. An object always has a default key like the prototype
//   2. A key of an object must be a string or a symbol.
//   3. An object does not have a property that represents the size of the map

// By definition, a Map object holds key-value pairs where values of any type can be used as either 
//keys or values. In addition, a Map object remembers the original insertion orders of the keys

// To create a Map use the following syntax:
  // let map = new Map([iterable])

// Useful JavaScript Map Methods 
// - clear() - Removes all elements from the map object
// - delete(key) - Removes an element specified by the key. It returns if the element is in the map,
//or false if it is not
// - entries() - Returns a new Iterator object that contain an array [key, value] for each element
//in the map object. The order of the objects in the map is the same  as the insertion order
// - forEach(callback[, thisArg]) - Invokes a callback for each key-value pair in the map in the
//insertion order. The optional thisArg parameter sets the `this` value for each callback
// - get(key) - Returns the value associated with the key. If the value does not exist, it returns 
//undefined
// - has(key) - Returns true if a value associated with the key exists, otherwise, return false
// - keys() - Returns a new Iterator that contains the keys for elements in the insertion order
// - set(key, value) - Sets the value for the key in the map object. It returns the map object itself
//therefore you can chain this methods with other methods
// values() - Returns a new iterator object that contains values for each element in insertion order


// -----------------------------------
//       Create a Map Object
// -----------------------------------
let john = {name: 'John'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Parker'}
    foo = {name: 'Foolano de Tal'}

let userRoles = new Map()

console.log(typeof userRoles) // object
console.log(userRoles instanceof Map) // Map

// -----------------------------------
//        Add Elements to a Map
// -----------------------------------
// To assign a role to a user, use the set() method:
userRoles.set(john, 'admin')
  .set(lily, 'secretary')
  .set(peter, 'agent')
  .set(foo, 'de tal')

console.log(userRoles)

// ---------------------------------------------
//   Initialize a Map with an Iterable Object
// ---------------------------------------------
let newUserRoles = new Map([
  [john, 'president'],
  [lily, 'agent'],
  [peter, 'janitor']
])

console.log(newUserRoles)

// ---------------------------------------------
//     Get an element from a map by key
// ---------------------------------------------
console.log(userRoles.get(john)) // admin
console.log(newUserRoles.get(john)) // president

// ---------------------------------------------
//   Check the existence of an element by key
// ---------------------------------------------
console.log(userRoles.has(foo)) // true
console.log(userRoles.has(lily)) // true
console.log(newUserRoles.has(foo)) // false

// ---------------------------------------------
//    Get the number of elements in the map
// ---------------------------------------------
console.log(userRoles.size) // 4
console.log(newUserRoles.size) // 3

// ---------------------------------------------
//           Iterate over map keys
// ---------------------------------------------
for(let user of userRoles.keys()) {
  if(user === foo)  {
    console.log('Ao foolano de tal...')
    break
  }

  console.log(user.name)
}

// ---------------------------------------------
//           Iterate over map values
// ---------------------------------------------
for(let role of newUserRoles.values()) {
  console.log('Role: ' + role)
}

// ---------------------------------------------
//          Iterate over map elements
// ---------------------------------------------
for(const role of userRoles.entries()) {
  console.log(`${role[0].name}: ${role[1]}`)
}

// Using destructuring...
for(const [user, role] of userRoles.entries()) {
  console.log(`${user.name}: ${role}`)
}

// Using forEach()...
newUserRoles.forEach((role, user) => console.log(`${user.name}: ${role}`))

// ---------------------------------------------
//   Convert map keys or values to a array
// ---------------------------------------------
// Sometimes you want to work with an array instead of an iterable object. In this case, you can use 
//the spread operator.
let keys = [...userRoles.keys()]
let values = [...userRoles.values()]

console.log(keys)
console.log(`
  Keys: ${keys}
  Values: ${values}
`)

// ------------------------------------------------
//            Delete an element by key
// ------------------------------------------------
userRoles.delete(john)
console.log(userRoles)

// ----------------------------------------------------
//           Delete all elements in the map 
// ----------------------------------------------------
userRoles.clear()
console.log(userRoles)





   


