// The URL hash is everything that follows the pound sign (#) in the URL.

// https://www.javascripttutorial.net/javascript-dom/javascript-hashchange/#header

// The hashchange event fires when the URL hash changes from one to another.

// To attach an event listener to the hashchange event, you call the 
//addEventListener() method on the window object:
window.addEventListener('haschange', () => {
  console.log('The URL hash has changed')
})

// To get the current URL hash, you access the hash property of the location 
//object:
window.addEventListener('hashchange',() => {
  console.log(`The current URL hash is ${location.hash}`);
});