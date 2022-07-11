// The bind() method returns a new function, when invoked, has its `this` set to a specific value
//          fn.bind(thisArg[, arg1[, arg2, [, ...]]])

// Unlike the call() and apply() methods, the bind() method doesn't immediately execute the function.
//It returns a new version of the function whose `this` sets to thisArg argument

let person = {
  name: 'Wellington Damasio',
  getName() {
    console.log(this.name)
  }
}

person.getName()

setTimeout(person.getName, 1000); // undefined because the function is being called out of the scope
//of the person object.

setTimeout(person.getName.bind(person), 1000); // rebound the function to the person object

// Using bind() to borrow methods from a different object
let runner = {
  name: 'Runner',
  run: function(speed) {
    console.log(`${this.name} runs at ${speed} mph`)
  }
}

let flyer = {
  name: 'Flyer',
  fly: function(speed) {
    console.log(`${this.name} flies at ${speed} mph`)
  }
}

runner.run(20)
flyer.fly(30)

runner.run.bind(flyer, 30)()
flyer.fly.bind(runner, 40)()


