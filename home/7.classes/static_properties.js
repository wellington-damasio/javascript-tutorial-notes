// Like a static method, a static property is shared by all instances of a class. To define static
//property, you use the static keyword followed by the property name like this

class Item {
  static count = 0

  // Using static properties in a method
  static getCount() {
    return Item.count
  }
}

// Accessing a static property 
console.log(Item.count)

// Changing static property value
Item.count = 3 
console.log(Item.count)

Item.count = 333
console.log(Item.getCount())

// The following example increases the count static property in the class constructor
class Product {
  constructor(name, quantity) {
    this.name = name
    this.quantity = quantity
    this.constructor.count++
  }

  static count = 0
  static getCount() {
    return Product.count
  }
}

console.log(Product)

let phone = new Product('Xperia', 'Motorola')
let pen = new Product('Pen', 'Faber Castel')
let cup = new Product('Cup', 'Some guy')

console.log(Product.getCount())

let keyboard = new Product('Keyboard', 'Redragon')
console.log(Product.getCount())




