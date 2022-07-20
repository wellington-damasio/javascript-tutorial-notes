// A JavaScript Proxy is an object that wraps another object (target) and intercepts the fundamental
//operations of the target object

// The fundamental operations can be the property lookup, assignment, enumeration, and function 
//invocations

// ------------------------------------------------
//            Creating a Proxy Object
// ------------------------------------------------
  // let proxy = new Proxy(target, handler);

// - target: is an object to be wrapped
// - handler: is an object that contains methods to control the behaviors of the target. The methods 
//inside the handler object are called traps

// ------------------------------------------------
//                A Proxy Example
// ------------------------------------------------
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com'
}

const handler = {
  get(target, property) {
    console.log(`Property ${property} has been read`)
    return target[property]
  }
}

const proxyUser = new Proxy(user, handler)

console.log(proxyUser.firstName) // uses the get method of the handler to acces the target
console.log(proxyUser.email) // uses the get method of the handler to acces the target

// ------------------------------------------------
//    You can still change the object (taget)
// ------------------------------------------------
user.firstName = 'Michael'
proxyUser.lastName = 'Jackson'

console.log(proxyUser.firstName + ' ' + proxyUser.lastName)

// ------------------------------------------------
//           Improving the get() trap
// ------------------------------------------------
const diffUser = {
  firstName: 'Wellington',
  lastName: 'Damasio',
  email: 'damasiowellington7@gmail.com'
}


const diffHandler = {
  get(target, property) {
    return property === 'fullName' ? 
      `${target.firstName} ${target.lastName}` :
      target[property]
  }
}

const diffProxyUser = new Proxy(diffUser, diffHandler)

console.log(diffProxyUser.fullName)

// ------------------------------------------------
//                 The set() trap 
// ------------------------------------------------
const thirdUser = {
  fistName: 'Leonardo',
  lastName: 'DaVinci',
  email: 'leodavinci@gmail.com'
}

const thirdHandler = {
  set(target, property, value) {
    if(property === 'age') {
      if(typeof value !== 'number')
        throw new Error('Age must be a number', 'Age value', 80)
      if(value < 18) 
        throw new Error('The user must be 18 or older', 'Age value', 82)
    }

    target[property] = value
  },

  get(target, property) {
    console.log('Property ' + property + ' being read...')
    return target[property]
  }
}

const thirdProxy = new Proxy(thirdUser, thirdHandler)

thirdProxy.age = 19

console.log(thirdProxy.age)
console.log(thirdProxy.email)

try {
  thirdProxy.age = 17
} catch(error) {
  console.log({Name: error.name, Message: error.message})
}




