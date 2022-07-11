// In browsers, the global object is window (or frames)
// The Web Workers API doesnt have the window object because it has no browsing context. Hence, the
//Web Workers API usese the `self` as a global object

console.log(global)

// To standardize the access of the global object, ES2020 introduces the `globalThis`.
const canFetch = typeof globalThis.fetch === 'function'
console.log(canFetch)

// This same code can be used in Node.js or web browser to check if the current environment can 
//fetch data


