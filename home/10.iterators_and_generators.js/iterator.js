// The for loop issues
// When you have an array of data, you tipically use a for loop to iterate over it's elements
let ranks = ['A', 'B', 'C', 'D', 'E']

for(let i = 0; i < ranks.length; i++) {
  console.log(ranks[i])
}

// The for loop uses the variable i to track the index of the ranks array. The value of i increments 
//each time the lop executes as long as the value of i is less than the number of elements in the 
//ranks array

// The code is straightforward. However, its complexity grows when you nest a loop inside another loop.
//In addition, keeping track of multiple variables inside the loops is error-prone

// ES6 introduced a new loop construct called for...of to eliminate the stardard  loop's complexity and
//avoid errors caused by keeping track of loop indexes.

for(let rank of ranks) {
  console.log('Rank: ' + rank)
}

// Iterators
// Since ES6 provides built-in iterators for the collection types Array, Set, and Map, you don't have
//to create iterators for these objects.[

// The following code creates a Sequence object that returns a list of numbers in a the range of start
//and end with an interval between the subsequent numbers

class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start
    this.end = end
    this.interval = interval
  }

  [Symbol.iterator]() {
    let counter = 0
    let nextIndex = this.start
    return {
      next: () => {
        if(nextIndex <= this.end) {
          let result = {value: nextIndex, done: false}
          nextIndex += this.interval
          counter++
          return result
        }

        return {value: counter, done: true}
      },

      return: () => {
        console.log('cleaning up...')
        return {value: undefined, done: true}
      }
    }
  }
}

// The following code uses the Sequence iterator in a for...of loop
let evenNumbers = new Sequence(2, 30, 2)
let evenNumbersArray = []

console.log(evenNumbers)
for(const num of evenNumbers) {
  console.log('Number: ' + num)
  evenNumbersArray.push(num)
}

console.log(evenNumbersArray)

for(const number of evenNumbers) {
  if(number > 11) {
    break
  }

  console.log(number)
}
