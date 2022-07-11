let person = {
  firstName: 'Wellington',
  lastName: 'Damasio',
  age: 19,
  gender: 'male',
  bankAccount: 'R$4.000.000,00',
  humor: 'happy'
}

console.log(person)

for(const property in person) {
  Object.defineProperty(person, property,  {
    configurable: false,
    enumerable: false,
    writable: false,
    value: person[property]
  })
}

delete person.firstName
delete person.gender
delete person.bankAccount

console.log(person.firstName)
console.log(person.gender) // Still exists... NICE!
console.log(person.bankAccount)

for(const property in person) {
  console.log(person[property]) // Loop over anything, as anything is enumerable
}

for(const property in person) {
  Object.defineProperty(person, property,  {
    enumerable: false, // Doesn't work cause properties are no configurable
  })
}

for(const property in person) {
  console.log(person[property]) // Still not loop over anything because properties are not configurable
}




