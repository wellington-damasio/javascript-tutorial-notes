// The setTimeout()  sets a timer and executes a callback function after the timer 
//expires.

// let timeoutID = setTimeout(cb, [,delay], arg1, arg2...);

// - cb is a callback function to be executed after the timer expires.

// - delay is the time in milliseconds that the timer should wait before executing 
//the callback function. If you omit it, the delay defaults to 0.

// arg1, arg2, … are arguments passed to the cb callback function.

let timeoutID

function showAlert() {
  timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!')
  console.log('Em 3 segundos um alert será disposto na tela...')
}

function clearAlert() {
  clearTimeout(timeoutID)
  console.log('Alert cancelado...')
}
