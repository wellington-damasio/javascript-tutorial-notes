const calculator = (function(){
  function add() {
    let result = 0
    for(let value of arguments) {
      result += value
    }

    return result
  }

  function multiply() {
    let result = 1
    for(let value of arguments) {
      result *= value
    }

    return result
  }

  function subtract() {
    let result = 0

    for(let value of arguments) {
      result -= value
    }

    return result
  }

  return {
    add,
    multiply,
    subtract
  }
})()
