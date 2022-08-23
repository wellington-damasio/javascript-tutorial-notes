// The setInterval() is a method of the window object. The setInterval() repeatedly 
//calls a function with a fixed delay between each call.

// let intervalID = setInterval(callback, delay, [arg1, arg2, ...])

let intervalId

function toggleColor() {
  let text = document.getElementById('flashText')
  text.style.color = text.style.color == 'orangered' ? 'skyblue' : 'orangered'
}

function start() {
  intervalId = setInterval(toggleColor, 1000)
}

function stop() {
  clearInterval(intervalId)
}


let startButton = document.getElementById('startBtn')
let stopButton = document.getElementById('stopBtn')

console.log(startButton, stopButton)

startButton.addEventListener('click', start)
stopButton.addEventListener('click', stop)