// The getElementsByTagName() method accepts a tag name and returns a live
//HTMLCollection of elements with the matching tag name in the order which
//they appear in the document.

// The return collection of the getElementsByTagName() is live, meaning that 
//it is automatically updated when elements with the matching tag name are 
//added and/or removed from the document.

const countButton = document.getElementById('btnCount')
let headings = document.getElementsByTagName('h2')

countButton.addEventListener('click', () => {
  let numberOfHeadings = headings.length

  alert(`There are ${numberOfHeadings} headings in this page.`)
})