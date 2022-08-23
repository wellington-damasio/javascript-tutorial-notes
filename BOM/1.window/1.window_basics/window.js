/* The global object of JavaScript in the browser is the 'window' object. */

/* It means all variables and functions declared globally with the var keyword become properties of */
/*the window object. */

var counter = 1;

var showCounter = () => console.log(counter + 3)

console.log(window.counter)

window.showCounter()

/* If you don’t want to pollute the window object, you can use the let keyword to declare variables and
*functions. */

/* -------------------------------------------------------------------- */
/*      The window object exposes the browser’s functionality */
/* -------------------------------------------------------------------- */

/* 1. Window Size */
/* The window object has four properties related to size of the window: */
/*   - innerWidth and innerHeight properties return the size of the page viewport inside the browser */
/* window (not including borders and toolbars) */
//     -  The outterWidth and outterHeight properties return the size of the browser window
// itself

// Also, document.documentElement.clientWidth and document.documentElement.clientHeight 
//properties indicate the width and height of the page viewport.



// setInterval(() => {
//     var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
//     var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
//     console.log('Width: ' + width) 
//     console.log('Height: ' + height)
// }, 300);

/* -------------------------------------------------------------------- */
/*                            Open a new Window */
/* -------------------------------------------------------------------- */
// To open a new window or tab, you use the window.open method:

// window.open(url, windowName, [windowFeatures])

// The third argument is a command-delimited string of settings specifying displaying 
//information for the new window such as width, height, menubar, and resizable.

// The window.open() method returns a WindowProxy Object, which is a thin wrapper of
//the window Object. In case the new window cannot be opened, it returns null


let button = document.querySelector('button')
    
button.addEventListener('click', ()  => {
    let url = 'localhost:5500/BOM/1.window/window_basics/fallback.html'

    let jsWindow = window.open(url, 'fallback')

    setTimeout(() => {
        jsWindow.resizeTo(500, 700);
    }, 3000);
})

let aboutButton = document.querySelector('.aboutBtn')


aboutButton.addEventListener('click', () => {
    let features = 'height=600, width=800'
    let url = 'localhost:5500/BOM/1.window/window_basics/about.html'

    window.open(url, 'about', features)

    setTimeout(() => {
       window.open('localhost:5500/BOM/1.window/window_basics/contact.html', 'contact') 
    }, 3 * 1000 ); // 3 seconds
})

/* -------------------------------------------------------------------- */
/*                            Resize a Window */
/* -------------------------------------------------------------------- */
// To resize a window you use the resizeTo() method of the window object:

// window.resizeTo(width, height)

const resizeBtn = document.querySelector('.resizeBtn')

resizeBtn.addEventListener('click', () => {
    let url = 'localhost:5500/BOM/1.window/window_basics/resize.html'
    let features = 'width=400, height=550'
    
    let jsWindow = window.open(url, 'resize window', features)

    setTimeout(() => {
        jsWindow.close();
    }, 3000);
})

// The window.resizeBy() method allows you to resize the current window by a 
//specified amount:


