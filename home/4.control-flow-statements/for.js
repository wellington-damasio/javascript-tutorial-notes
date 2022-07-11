// The for loop statement creates a loop with three optional expressions. Ex:

// for(initializer, condition, iterator) {
//   //... code to execute ...
// }

// 1) Initializer
// The for loop executes the initializer only once the loop starts. Tipically is a local variable (let)

// 2) Condition
// A boolean expression that determines whether the for loop should execute the next iteration

// 3) Iterator
// The for statement executes the iterator after each iteration


// Illustration the for loop
//           Start
//             |
//         Initializer
//             |
//      |-- Condition --- (false) End
//      |      | (true)
//      |   Statement
//      |      |
//      |--- Iterator


// A simple for loop in JS
for (let i = 5; i > 0; i--) {
  console.log('Value: ' + i)
}

// Using for loop without the initalizer
let j = 2
for(; j <= 18; j++) {
  if(j % 2 == 0)
    console.log('Pairs: ' + j)
}


// Using for loop withou a conditon
for(let j = 0; ; j += 3) {
  if(j > 17)
    break

  console.log('j: ' + j)
}








