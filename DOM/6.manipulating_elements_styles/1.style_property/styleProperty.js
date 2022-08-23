// To set the inline style of an element, you use the style property of that 
//element:
  // element.style

// The style property returns the read-only CSSStyleDeclaration object that 
//contains a list of CSS properties. 

  // element.style.color = 'red'

// If the CSS property contains hyphens (-) for example -webkit-text-stroke you 
//can use the array-like notation ([]) to access the property:

  // element.style.['-webkit-text-stock'] = 'unset'

// When accessing/setting the CSS of an Element, you basically type the same 
//property names but with camelCase instead of hyphen between words

// If you do not want to completely overwrite the existing CSS properties, you can
//concatenate the new CSS property to the cssText as follows:
// element.style.cssText += 'color: red; background-color: yellow;'

// -----------------------------------------------------------------------
//          Helper Function to Set Multiple Styles of Inline CSS
// -----------------------------------------------------------------------
function css(element, styles) {
  for(const property in styles ) {
    // element.style.color = 'yellow'
    element.style[property] = styles[property]
  }
}

let body = document.body
let box = document.getElementById('box')

css(body, {color: 'darkblue', 'font-family': 'monospace', 'font-size': '1rem'})
css(box, {'background-color': 'orangered', width: '310px', height: '310px', 'border-radius': '1.2rem'})
