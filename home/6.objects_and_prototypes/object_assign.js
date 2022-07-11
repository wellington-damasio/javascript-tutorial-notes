// The Object.assign() method copies all enumerable and own properties from the source objects to the
//target. It assigns properties only, not copying or defining new properties

// The Object.assign() invoke the getters on the source objects and setters on the target. It assigns
//properties only, not copying or defining new properties

let widget = {
  name: 'Glasses',
  color: 'black'
}

let clonedWidget = Object.assign(widget)

console.log(clonedWidget)

widget.price = 'R$49,99'

console.log(clonedWidget)

// USING OBJECT.ASSIGN() TO MERGE OBJECTS
let box = {
  height: 10,
  width: 20
}

let style = {
  color: 'red',
  borderStyle: 'solid',
  borderWidth: '2px'
}

let styleBox = Object.assign({}, box, style)

console.log(styleBox)
