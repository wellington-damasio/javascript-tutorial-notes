// import {show} from './dialog.js'

let btn = document.querySelector('#show')

btn.addEventListener('click', () => {
  import('./dialog.js')
    .then(dialog => {
      dialog.show('Hi, Wellington!!')
    })
    .catch(error => {
      console.log(error)
    })
})

// ---------------------------------------------
//   Some Practical Use Cases for import()
// ---------------------------------------------
// 1) Loading module on demand
// Some functionalities may not need to be available when applications start. To decrease the loading
//time, you can place such functionality in modules and use the import() to load them on demand

  // function eventHandler() {
  //   import('./module1.js')
  //     .then(ns => {
  //       ns.func()
  //     })
  //     .catch(err => console.log(err))
  // }

// 2) Loading modules based on conditions
// When placing the import() inside the conditional statement such if-else, you can load modules 
//based on a specific condition.

  // if(isSpecificPlataform(plataform)) {
  //   import('./platform.js')
  //     .then(ns => ns.f())
  //     .catch(err => console.log(err))
  // }

// 3) Computed module specifiers
// You can load a module based on the user's locale to show the message in the user's specific language

  // let lang = `mesagge_${getUserLocale()}.js`
  //
  // import(lang)
  //  .then(...)

// -------------------------------------
//   More on the JavaScript import()
// -------------------------------------

// USING OBJECT DESTRUCTURING
// If a module has multiple exports, you can use the object destructuring to receive the exporting 
//objects

export function show(message) {
  alert(message)
}

export function hide(message) {
  console.log('Hide it...')
}

// In the app.js, you can use the object destructuring as follows:

  // let btn = document.querySelector('#show')
  //
  // btn.addEventListener('click', function() {
  //   (async () => {
  //     try {
  //       let {show, hide} = await import('./dialog.js')
  //
  //       show('Hi')
  //       hide()
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   })()
  // })

// DINAMICALLY LOADING MULTIPLE MODULES

  // Promise.all([
  //   import(module1),
  //   import(module2),
  //   ...
  // ])
  //   .then(([mod1, mod2, mod3]) => {
  //     // use modules...
  //   })





