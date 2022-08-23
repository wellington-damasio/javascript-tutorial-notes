// Go www.google, search something and type the following to see how to get
//string query params

const urlParams = new URLSearchParams(location.search)

console.log(urlParams)

for(const [key, value] of urlParams) {
  console.log(`${key}: ${value}`)
}

// Results
// q : amazon
// oq:
// aqs: chrome.1.sei_la_oq
// sourceid: chrome
// ie: UTF-8

// ---------------------------------------------------------
//                      urlParams.keys()
// ---------------------------------------------------------
for(const key of urlParams.keys()) {
  console.log(`${key}`)
}

// Results:
// q
// oq
// aqs
// sourceid
// ie

// ---------------------------------------------------------
//                    urlParams.values()
// ---------------------------------------------------------
for(const value of urlParams.values()) {
  console.log(`${value}`)
}

// Results:
// amazon
// 
// chrome.1.35.sei_la_oq
// chrome
// UTF-8

// ---------------------------------------------------------
//                    urlParams.entries()
// ---------------------------------------------------------
for(const entry of urlParams.entries()) {
  console.log(`${entry}`)
}

// Results:
// q,amazon
// oq,
// aqs,chrome.1.35i39i362l8.135047695j0j7
// sourceid,chrome
// ie,UTF-8

// ---------------------------------------------------------
//        Check if a query string parameter exists
// ---------------------------------------------------------
console.log(urlParams.has('type')) // false
console.log(urlParams.has('q')) // true
