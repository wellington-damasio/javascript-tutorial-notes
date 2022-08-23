// To get the value of an attribute on a specified element, you call the 
//getAttribute() method of the element:
  // let value = element.getAttribute(name)

let link = document.querySelector('#js')

let target = link.getAttribute('target')

console.log(link, target) // _blank

if(link) {
  let title = link.getAttribute('title')
  console.log(title) // null
}

