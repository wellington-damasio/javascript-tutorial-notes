// The Object.entries() method accepts an object and returns own enumerable string-keyed property 
//[key, value] pairs of the object

const car = {
  name: 'Civic',
  brand: 'Honda',
  engine: '1.6',
}

const civic = Object.entries(car)

console.log(civic)

