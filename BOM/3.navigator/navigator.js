// The JavaScript Navigator provides information about the web browser and its 
//capabilities. You can reference the Navigator object via the read-only 
//window.navigator property.


// The Navigator object has properties that convey the browser’s information. 
//For example, the userAgent is a property of the window.navigator object. It is a 
//long string that identifies the web browser.

// window.navigator.userAgent

// The different web browser provides specific capabilities which are not standardized. 
//It’s better not to use the userAgent to identify the web browser because some web 
//browsers allow users to modify the userAgent to pretend they are using a different 
//browser.

// --------------------------------------------------------------
//         Detecting if the browser is Internet Explorer
// --------------------------------------------------------------
if(window.navigator.userAgent.includes('MSIE')) {
  console.log('Is Internet Explorer')
} else {
  console.log('Is not Internet Explorer')
}

// --------------------------------------------------------------
//                Some Useful Navigator Properties
// --------------------------------------------------------------
let winNav = window.navigator
// - cookieEnabled: Rerturns if cookies  are enabled
console.log({'Cookie Enabled: ' : winNav.cookieEnabled})

// - deviceMemory: Returns the amount of memory in gigabytes
console.log({'Device Memory: ' : winNav.deviceMemory})

// - doNotTrack: Returns the user's preferences of do-not-track
console.log({'Do not track: ' : winNav.doNotTrack})

// - geolocalization: Returns a Geolocalization object to interact with the 
//Geolocalization API
console.log({'Geolocalization: ' : winNav.geolocation})

// - hardwareConcurrency: Returns the number of processor cores of the device
console.log({'Processor Cores: ' : winNav.hardwareConcurrency})

// - language: Returns the browser's primary language
console.log({'Language: ' : winNav.language})

// - languages: Returns an array of all browser's prefered languages
console.log({'Prefered Languages: ' : winNav.languages})

// - onLine: Specifies if the browser is connected to the internet
console.log({'Is Online: ' : winNav.onLine})

// - permissions: Returns the Permissions object to interact with it's API
console.log({'Permissions: ' : winNav.permissions})

// - plugins: Returns an array of installed browser plugins
console.log({'Plugins: ' : winNav.plugins}) // deprecated

// - storage: Returns the Storage Manager object to interact with the Storage API
console.log({'Storage: ' : winNav.storage})

// - userAgent: Represents the user-agent string of the browser
console.log({'User Agent: ' : winNav.userAgent})

