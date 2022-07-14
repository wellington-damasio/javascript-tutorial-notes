// ES6 introduced the iterator interface that allows you to access data sequentially. The iterator is
//well-suited for accessing synchronous data sources like Array, Set, Map

// Besides the synchronous data sources, JavaScript often has to access asynchronous data sources like
//I/O access. For the asynchronous data sources, the value an done state of the iterator is often
//unknown at the time the next() method returns.

// An async iterator is like an iterator except that its next() method returns a promise that resolves
//to the {value, done} object.

class Sequence {
  constructor(start = 0, end = Infinity, interval =1) {
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
          let result = {
            value: nextIndex,
            done: false
          }
          
          nextIndex += this.interval
          counter++
          return result
        }
        
        return {
          value: counter,
          done: true
        }
      }
    }
  }
}

let seq = new Sequence(2, 17, 2)

for(const number of seq) {
  console.log(number)
}

// The following code transforms the Sequence class to the AsyncSequence
class AsyncSequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start
    this.end = end
    this.interval = interval
  }

  [Symbol.asyncIterator]() {
    let counter = 0,
        nextIndex = this.start

    return {
      next: () => {
        if( nextIndex <= this.end ) {
          let result = {
            value: nextIndex,
            done: false
          }

          nextIndex += this.interval
          counter++

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(result)
            }, 1000);
          })
        }

        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              value: counter,
              done: true
            })
          }, 1000);
        })
      }
    }
  }
}

// The for await...of statement
// To iterate over an asynchronous iterable object, ES2018 introduced this statement
//  for await (variable of iterable) {
//    //....
//  }

// Since we can use the await keyword in an async function only, we can create an async IIFE as that uses
//the AsyncSequence class

(async () => {
  let seq = new AsyncSequence(1, 23, 2)

  for await (let value of seq) {
    console.log(value)
  }
})()
