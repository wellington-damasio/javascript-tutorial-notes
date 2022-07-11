// 2) Object methods

const counter = {
  count: 0,
  next: () => ++this.count,
  current: () => this.count,
  previous: () => --this.count
}

console.log(counter.next()) // NaN

// When you user the arrow function inside the object, it inherits the `this` from the enclosing scope
//which is the global scope
// The `this` inside the next() methods is equivalent to window.count

// To fix this, you use regular functions as the method of an object literal as follows
const counter2 = {
  count: 0,
  next() {
    return ++this.count
  },
  current() {
    return this.count
  }
}

console.log(counter2.current())
console.log(counter2.next())
counter2.next()
console.log(counter2.current())

// 3) Prototype methods

function Counter() {
  this.count = 0
}

Counter.prototype.next = () => {
  return ++this.count
}

Counter.prototype.current = () => {
  return this.count
}

let megaCount = new Counter()
console.log(megaCount.count)
// console.log(megaCount.current()) // undefined, the this in the arrow function points to the global 
//object and JavaScript engine created those variables and assigned undefined to them

function betterCounter() {
  this.count = 0
}

betterCounter.prototype.next = function() {
  return ++this.count
}

betterCounter.prototype.current = function () {
  return this.count
}

let betterCount = new betterCounter()

console.log(betterCount.count)
console.log(betterCount.next())




