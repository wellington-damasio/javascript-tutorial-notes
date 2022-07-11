// A callback is a function that you pass to  another functions as an argument for executing later
function filter(number) {
  let results = []
  for(const number of numbers) {
    if(number % 2 != 0) {
      results.push(number)
    }
  }

  return results
}

let numbers = [1, 2, 4, 7, 3, 5, 6]
console.log(filter(numbers))

// We could make this function more customizable, by using a callback
function customFilter(numbers, fn) {
  let results = []

  for(const number of numbers) {
    if(fn(number))
      results.push(number)
  }

  return results
}

let otherNumbers = [23, 44, 21, 12, 22, 41, 51]

function isEven(number) {
  return number % 2 == 0
}

console.log(customFilter(otherNumbers, isEven))

console.log(customFilter(otherNumbers, (number) => {
  return number % 3 == 0
}))

// Handling errors 
function download(url, success, failure) {
  setTimeout(() => {
    console.log(`Downloading the picture from ${url}`)
  }, 1000);
}

download(
  'https://www.picture.com/pic-233.jpg',
  url => console.log('Processing the picture...'),
  url => console.log('Error on processing picture')
)




