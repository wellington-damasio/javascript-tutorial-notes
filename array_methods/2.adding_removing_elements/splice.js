// The slice() method allows you to insert new elements into the middle of an
//array. However, you can use this method to delete and replace existing
//elements as well.

// ----------------------------------------------------------
//             Deleting elements using splice()
// ----------------------------------------------------------

// Array.splice(position, num)

let scores = [1, 2, 3, 4, 5, 6, 7]
let deletedScores = scores.splice(2, 3) // 2, 4, 5

console.log({scores})
console.log({deletedScores})

//  ----------------------------------------------------------
//  			Inserting elements using splice()
// ----------------------------------------------------------

// Array.splice(position, 0, newElement1, newElement2, ...)

// Remember, the splice() method changes the original array and, in this case,
//returns an empty array since it  does not  remove any elements

let colors = ['Red', 'Green', 'Blue']

colors.splice(2, 0, 'Purple')

console.log({colors}) // R G P B

colors.splice(1, 0, 'Yellow', 'Pink') // R Y P G P B

console.log({colors})


//  ----------------------------------------------------------
//  			Replacing elements using splice()
// ----------------------------------------------------------

// To do this, you pass at least three arguments with the second one that 
//specifies the number of items to delete and the third indicates the elements
//to insert

let languages = ['C', 'C++', 'Java', 'JavaScript']
console.log({languages})

languages.splice(0, 3, 'Python', 'PHP', 'Flutter')

console.log({languages})

