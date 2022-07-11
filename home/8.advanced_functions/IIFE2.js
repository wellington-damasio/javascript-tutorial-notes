(function () {
  let result = 0
  for(let number of arguments) {
    result += number
  }

  console.log(result)
})(23, 22, 54, 66)
