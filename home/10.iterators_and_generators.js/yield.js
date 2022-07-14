// The yield keyword allows you to pause and resume a generator function

// Returning a value
function* foo() {
  yield 1
  yield 2
  yield 3
}

let f = foo()

console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)

// The value of the yield is added to the value property of the returned object

// Returning undefined
function* bar() {
  yield
}

let b = bar()
console.log(b.next()) // value == undefined

// Passing a value to the next() method
function* generate() {
  let result = yield

  console.log('Result is ' + result)
}

let g = generate()

console.log(g.next())
console.log(g.next(20320))

// Using yield in an array
function* baz() {
  let arr = [yield, yield]
  console.log(arr)
}

var z = baz()

console.log(z.next())
console.log(z.next(2))
console.log(z.next(5))

// Using yield to return an array
function* yieldArray() {
  yield 'bolinho'
  yield [23, 12, 344, 121]
}

let y = yieldArray()

console.log(y.next())
console.log(y.next())
console.log(y.next()) // value undefined

// Using the yield to return individual elements of an array
function* yieldArrayElements() {
  yield 1
  yield* [23, 44, 12, 12, 'bolinho']
}

let a = yieldArrayElements()

console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())

// The yield* expression is used to delegate to another object or generator, as result the expression
//returns the individual elements of the array
