// The optional chaining operator (?.) allows you to access the value of a property located deep within
//a chain of objects without explicitly checking if each reference in the chain is null or undefined

function getUser(id) {
  if(id <= 0) {
    return null
  }

  return {
    id: id,
    username: 'admin',
    profile: {
      avatar: '/avatar.png',
      language: 'portuguese'
    }
  }
}

let user = getUser(1)
let profile = user.profile

console.log(profile)

// Before accessing the avatar property, you need to check if the user is not null using the logical
//operator AND

user = getUser(0)
let betterProfile = user && user.profile
console.log(betterProfile) // null (user does not exist)

// In this example, we confirm that the user is not null or undefined before accessing the value of 
//user.profile property. It prevents the error that would occur if you simply access the user.profile

// To access a property of an object using the optional chaining operator, you use the following
//                objectName ?. propertyName
//                objectName ?. [expression]
// The optinal chaining operator implicitly checks if the user is not null or undefined before 
//attempting to access the user.profile

user = getUser(2)
user = getUser(-1)
profile = user ?. profile // undefined if -1, normal if < 0

console.log(profile)

// Stacking the optional chaining operator
let avatar = user ?. profile ?. avatar // Check user, check profile inside user...
console.log(avatar) // undefined

// Combining with nullish coalescing operator
let defaultProfile = {default: '/default.png', language: 'English'}
user = getUser(2)
profile = user ?. profile ?? defaultProfile // case there's not profile in user object, return
// the defaultProfile

// Optional chaining with function calls
let file = {
  read() {
    return 'file content'
  },
  write(content)  {
    console.log(`Writing ${content} to file...`)
    return true
  }
}

let data = file.read()
console.log(data)

// If you call a method that doesnt exist in the file object, you will get a TypeError
// let compressedData = file.compress() // not a function 

// If you use the optional chaining operator with the call method, the expression will return undefined
let compressedData = file.compress?.()
console.log(compressedData) // undefined

// This is useful when you use an API in which a methods might not be available for some reason
// functionName ?. (args)



