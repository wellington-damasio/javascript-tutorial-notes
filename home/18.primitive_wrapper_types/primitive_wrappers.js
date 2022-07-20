// JavaScript provides three primitive wrapper types: Boolean, Number and String

let language = 'JavaScript'
let s = language.substring(4)

console.log(s) // Script

// The code above is similar to doing:
let tmp =  new String(language)
str = tmp.substring(4)
tmp = null

console.log(str)


