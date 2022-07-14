// In JavaScript, a regular function is executed based on the run-to-completion model. It cannot pause
//midway and then continues from where it paused
function foo() {
  console.log('I')
  console.log('cannot')
  console.log('pause')
}

foo()

// The foo() function executes from top to bottom. The only way to exit the foo() is by returning from
//it or throwing an error

// ES6 introduces a new kind of function that is different from a regular function: function generator
// A generator can pause midway and then continues from where it paused

function* generate() {
  console.log('Invoked for the 1st time')
  yield 1
  console.log('Invoked for the 2nd time')
  yield 2
}

// The `yield` statement returns a value and pauses the execution of the function

let gen = generate()
console.log(gen) // The generator returns a Generator object without executing its body when invoked

// The Generator object returns another object with two properties: done and value. In other words,
// a Generator object is iterable

let result = gen.next()
console.log(result) // The yield statement returns 1 and pauses the generator at line 2

result = gen.next()
console.log(result) // Invoked for the segund time 

// Iterating through an generator
let genZ = generate()
for(const g of genZ) {
  console.log(g)
}

// The following example illustrates how to use a generator to generate a never-ending sequence
function* forever() {
  let index = 0
  while(true) {
    yield index++
  }
}

let f = forever()
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)

// Using generators to implement iterators
class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start
    this.end = end
    this.interval = interval
  }

  * [Symbol.iterator]() {
      for( let index = this.start; index <= this.end; index += this.interval) {
        yield index
      }
    }
}

let oddNumbers = new Sequence(1, 20, 2)

for(const number of oddNumbers) {
  console.log('Number: ' + number)
}

// Using generator to implement the Bag data strucuture
class Bag {
  constructor() {
    this.elements = []
  }
  isEmpty() {
    return this.elements.length === 0
  }
  add(element) {
    this.elements.push(element)
  }

  * [Symbol.iterator]() {
      for(let element of this.elements) {
        yield element
      }
    }
}

let bag = new Bag()

bag.add('water')
bag.add('food')
bag.add('potato chips')
bag.add('clothes')

for(let item of bag) {
  console.log('Item: ' + item)
}
