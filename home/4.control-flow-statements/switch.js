// The switch statement evaluates an expression, compares its result with case, and executes the
//statement associated with the matching case value
let expression

// switch(expression) {
//   case value1:
//     //code...
//     break
//
//   case value2:
//     //code...
//     break
//
//   case value3:
//     //code...
//     break
//
//   case value4:
//     //code...
//     break
//
//   default:
//     //code...
// }
//
// How it works.
// - First, evaluate the expression inside the parentheses after the switch keyword.
//
// - Second, compare the result of the expression with the value1, value2, … in the case branches 
//from top to bottom. The switch statement uses the strict comparison (===).
//
// - Third, execute the statement in the case branch where the result of the expression equals the 
//value that follows the case keyword. The break statement exits the switch statement. If you skip 
//the break statement, the code execution falls through the original case branch into the next one. 
//If the result of the expression does not strictly equal to any value, the switch statement will 
//execute the statement in the default branch.

// In practice, you often use a switch statement to replace a complex if... else... if statement

// Using switch to get the day of the week
let day = 3
let dayName

switch(day) {
  case 1:
    dayName = 'Sunday'
    break

  case 2:
    dayName = 'Monday'
    break

  case 3:
    dayName = 'Tuesday'
    break

  case 4:
    breakName = 'Wednesday'
    break

  case 5:
    dayName = 'Thursday'
    break

  case 6:
    dayName = 'Friday'
    break

  case 7:
    dayName = 'Saturday'
    break

  default:
    dayName = 'Invalid day number inserted'
}

console.log(dayName)

// Using JavaScript switch statement to get the day count based of a month

let year = 2016
let month = 3
let dayCount

switch(month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31
    break

  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30

  case 2: // checking bissext your for counting february days
    if( (year % 4 == 0 && !(year % 100 == 0)) || (year % 400 == 0) ) { // case bissext year
      dayCount = 29
    } else {
      dayCount = 28
    }
    break

  default:
    dayCount = -1 //invalid Month

}

console.log(dayCount)


