let words = ('I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'.replace(/\.|\,/g,'')).split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
if(!shoppingCart.includes('Meat'))
{
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)

if(!shoppingCart.includes('Sugar'))
{
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
console.log(shoppingCart)
shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea')
console.log(shoppingCart)

if(countries.includes('Ethiopia'))
{
   console.log('ETHIOPIA') 
}
else
{
    countries.push('Ethiopia')
    countries.sort()
}
console.log(countries)

if(webTechs.includes('Sass'))
{
    console.log('Sass is a CSS prepocess')
}
else
{
    webTechs.push('Sass')
    webTechs.sort()
}
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

