// JavaScript does not provide the multidimensional array natively. However, 
//you can create a multidimensional array by defining an array of elements, 
//where each element is also another array.

// The following example defines a two-dimensional array named activities:
let activities = [
	['Work', 9],
	['Eat', 1],
	['Commute', 2],
	['Play Game', 1],
	['Sleep', 7]
]

// In the activities array, the first dimension represents the activity and 
//the second one shows the number of hours spent per day for each.
console.table(activities)

console.log(activities[0][1]); // 9

// --------------------------------------------------------------------
//      Adding elements to the JavaScript multidimensional array
// --------------------------------------------------------------------
activities.push(['Study', 2])

console.table(activities)

// To insert an element in the middle of the array, you use the splice() method. 
// The following inserts an element in the second position of activities

activities.splice(3, 0, ['Programming', 2])

console.table(activities)

// --------------------------------------------------------------------
//    Calculating the percentage of the hours spent on each activity
// --------------------------------------------------------------------
activities.forEach(activity => {
	let percentage = ((activity[1] / 24) * 100).toFixed()
	activity[2] = percentage + '%'
})

console.table(activities)

// --------------------------------------------------------------------
//     Removing elements from the JavaScript multidimensional array
// --------------------------------------------------------------------
// To remove an element from an array, you use the pop() or splice() method.
activities.pop()

console.table(activities)

// The following example removes the percentage element from the inner arrays 
//of the activities array.
activities.forEach(activity => activity.pop())

console.table(activities)

// --------------------------------------------------------------------
//   Iterating over elements of the JavaScript multidimensional array
// --------------------------------------------------------------------
for(let i = 0; i < activities.length; i++) {
	for(let j = 0; j < activities[i].length; j++) {
		console.log(`[ ${i}, ${j} ] = ${activities[i][j]}`)
	}
}




