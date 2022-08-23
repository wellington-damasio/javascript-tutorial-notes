// The insertAdjacentHTML() is a method of the Element interface so that you can 
//invoke it from any element.

// The insertAdjacentHTML() method parses a piece of HTML text and inserts the 
//resulting nodes into the DOM tree at a specified position:

  // element.insertAdjacentHTML(positionName, text)

// 1) positionName
// The positionName is a string that represents the position relative to the 
//element. The positionName accepts one of the follwing four values:

// - 'beforebegin': before the element
// - 'afterbegin': before the first child of the element
// - 'beforeend': after the last child of the element
// - 'afterend' : after the element

// 2) text
// The text parameter is a string that the insertAdjacentHTML() method parses as 
//HTML or XML. It cannot be Node objects

// Like the innerHTML, if you use the user input to pass into the 
//insertAdjacentHTML() method, you should always escape it to avoid security risk.

// ---------------------------------------------------------
//                 Inserting Items on a List
// ---------------------------------------------------------
let list = document.querySelector('#list')
console.log(list)

list.insertAdjacentHTML('beforebegin', '<h2>This is a language list</h2>')
list.insertAdjacentHTML('afterbegin', '<li>HTML</li>')
list.insertAdjacentHTML('beforeend', '<li>JavaScript</li>')
list.insertAdjacentHTML('afterend', '<hr>')

