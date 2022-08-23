// The DocumentFragment interface is a lightweight version of the Document that 
//stores a piece of document structure like a standard document. However, a 
//DocumentFragment isn’t part of the active DOM tree.

// If you make changes to the document fragment, it doesn’t affect the document or 
//incurs any performance.

// Typically, you use the DocumentFragment to compose DOM nodes and append or 
//insert it to the active DOM tree using appendChild() or insertBefore() method.

  // let fragment = new DocumentFragment()
  // let fragment = document.createDocumentFragment();

// ----------------------------------------------------------------
//        Create a list of items and append it to an <ul>
// ----------------------------------------------------------------
let languages = ['JavaScript', 'PHP', 'Go', 'C#', 'C++', 'Java', 'Flutter', 'Cobol', 'Python', 'Lua']
let langList = document.querySelector('#lang-list')
let langsFragment = new DocumentFragment()

languages.forEach(lang => {
  let li = document.createElement('li')
  li.textContent = lang
  li.style = 'color: darkblue; font-family: monospace; font-size: 1.1rem; text-decoration: underline; cursor: pointer;'

  langsFragment.appendChild(li)
})

document.body.append(langsFragment)
