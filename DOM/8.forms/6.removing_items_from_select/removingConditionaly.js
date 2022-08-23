const itemsSelect = document.querySelector('#list')
const removeItemsBtn = document.querySelector('#removeItems')

removeItemsBtn.addEventListener('click', () => {
  for(let i = 0; i < itemsSelect.options.length; i++) {
    const value = itemsSelect.options[i].value
  
    if(value === 'B' || value === 'C') {
      itemsSelect.remove(i)
  
      i-- // decrease the index by one because the list has been reajusted
    }
  }
})

// ---------------------------------------------------
//         Removing all that ends with .js
// ---------------------------------------------------
const removeBtn = document.querySelector('#removeBtn')
const select = document.querySelector('#frameworks-list')

removeBtn.addEventListener('click', () => {
  let options = select.options

  for(let i = 0; i < options.length; i++) {
    let optionText = options[i].text

    if(optionText.endsWith('.js')) {
      select.remove(i)
      i--
    }
  }

})