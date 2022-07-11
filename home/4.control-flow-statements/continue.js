// The continue statement terminates the execution of the statement in the current iteration of a
//loop and immediately continues to the next iteration

// for(...) {
//   if(condition) {
//     continue
//   }
// }

// The following example uses a continue in a for loop to display only the odd numbers
for(let i = 0; i <= 18; i++) {
  if(i % 2 == 0) { // check if it is a pair value
    continue
  }

  console.log(i)
}

let j = 0
while(j <= 18) {
  j++

  if(j % 2 != 0) { // check if it is a odd number
    continue

  console.log('j: ' + j )
}







