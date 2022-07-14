// An async generator is similar to a regular generator except that its next() method returns a Promise
//To iterate over an async generator, you use the for await...of loop

function* sequence(start = 1, end = Infinity) {
  for(let i = start; i <= end; i++) {
   yield i
  }
}

let seq = sequence(1, 100)

for(const number of seq) {
  console.log('Number: ' + number)
}


async function* asyncSequence(start = 1, end = 30) {
  for(let i = start; i <= end; i++) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i)
      }, 1000);
    })
  }
}

(async () => {
  let seq = asyncSequence(1, 66)

  for await(let number of seq) {
    console.log(`Async number: ${number}`)
  }
})()

// The async generators can be very useful when you access a stream of data and want to report the 
//progress like progress bar
