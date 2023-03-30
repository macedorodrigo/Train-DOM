const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')

const pai = elementoOndeVoceEsta.parentNode
pai.style.color = 'red'

const firstChild = elementoOndeVoceEsta.previousElementSibling
firstChild.innerText = 'Primeiro filho do filho!!!'

console.log(firstChild);
const primeiroFilho = pai.firstElementChild

const firstTwoChild = elementoOndeVoceEsta.firstElementChild
firstTwoChild.innerText = 'Filho do filho'
