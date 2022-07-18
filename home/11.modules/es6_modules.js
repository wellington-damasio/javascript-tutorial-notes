// An ES6 modules is a JavaScript file that executes in strict mode only. It means that any variables 
//or functions declared in the module won't be added automatically to the global scope

// ------------------------------------------
//    Executing modules in web browsers
// ------------------------------------------
// Check the message.js, app.js and test.html files to see how importing an using modules in the
//browser works

// ------------------------------------------
//                 Exporting 
// ------------------------------------------
// To export a variable, a function, or a class, you place the export keyword in front of it as follows

export function calculateSalary(currency = 'R$', salary, taxesToPay, yearly = false) {
  let salaryAfterTaxes = salary - (salary * (taxesToPay / 100))
  let yearlySalary = salaryAfterTaxes * 12

  if(yearly) {
    let monthlySalary = salaryAfterTaxes / 12

    return `
  Your yearly salary is ${currency}${salaryAfterTaxes},
  Your monthly salary is ${currency}${monthlySalary}
    `
  } 

  return `
  Your yearly is ${currency}${yearlySalary}
  Your monthlySalary is ${currency}${salaryAfterTaxes}
  `
} 

console.log(calculateSalary('U$', 8000, 12))

export function sayMyName() {
  let name = arguments[0]

  if(arguments.length <= 0) {
    return 'Name cannot be empty'
  }

  for(let surname of arguments) {
    if(surname != arguments[0]) // if not the first argument
      name += ' ' + surname
  }

  return name
}

