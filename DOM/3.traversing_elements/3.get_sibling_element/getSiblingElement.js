// --------------------------------------------------------
//                  Get the next siblings
// --------------------------------------------------------
let current = document.querySelector('.current')
let nextSibling = current.nextElementSibling

console.log(current)
console.log(nextSibling)


// --------------------------------------------------------
//                Get the previous siblings
// --------------------------------------------------------
let previousSibling = current.previousElementSibling
console.log(previousSibling)

// -----------------------------------------------------------
//               Get all the previous siblings
// -----------------------------------------------------------
while(previousSibling) {
  console.log(previousSibling)

  previousSibling = previousSibling.previousElementSibling
}

// -----------------------------------------------------------
//                    Get all next siblings
// -----------------------------------------------------------
while(nextSibling) {
  console.log(nextSibling)

  nextSibling = nextSibling.nextElementSibling
}

// -----------------------------------------------------------
//               Get all siblings of an element
// -----------------------------------------------------------
function getSibligns(element) {
  let siblings = []

  if(!element.parentNode) {
    return siblings
  }

  let sibling = element.parentNode.firstChild

  while(sibling) {
    if(sibling.nodeType === 1 && sibling !== element) 
      siblings.push(sibling)

    sibling = sibling.nextElementSibling
  }

  return siblings
}

let currentSiblings = getSibligns(current)
let textSiblings = currentSiblings.map(element => element.innerText)

console.log(currentSiblings)
console.log(textSiblings)
