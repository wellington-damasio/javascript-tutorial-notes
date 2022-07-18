  export function sum() {
  let result = 0
  for(let value of arguments) {
    if(typeof value === 'number')
      result += value
  }

  return result
}

export function subtract() {
  let result = arguments[0]

  for(let value of arguments) {
    if(typeof value === 'number' && value != arguments[0])
      result -= value
  }

  return result
}

export function multiply() {
  let result = arguments[0]

  for(let value of arguments) {
    if(typeof value === 'number'  && value != arguments[0])
      result *= value
  }

  return result
}

export function divide() {
  let result = arguments[0]

  for(let value of arguments) {
    if(typeof value === 'number' && value != arguments[0] && value != 0)
      result /= value
  }

  return result
}
