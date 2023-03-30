// const title = document.createElement('h1');
// title.textContent = 'Aula de DOM';
// document.body.appendChild(title);

// const ul = document.createElement('ul')
// for (let i = 0; i < 4; i += 1) {
//   const li = document.createElement('li')
//   li.textContent = `Item ${ i + 1 }`
//   ul.appendChild(li)
//   title.appendChild(ul)
// }
const element = (a) => document.createElement(a)

const body = document.body

const title = element('h1')
title.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(title);

const main =  element('main')
main.classList = 'main-content'
body.appendChild(main)

const sectionCenter = element('section')
sectionCenter.classList = 'center-content'
main.appendChild(sectionCenter)

const p = element('p')
p.innerText = 'Deu certo a função'
sectionCenter.appendChild(p)

const sectionLeft = element('section')
sectionLeft.classList = 'left-content'
main.appendChild(sectionLeft)

const sectionRight = element('section')
sectionRight.classList = 'right-content'
main.appendChild(sectionRight)

const img = element('img')
img.src = 'https://picsum.photos/200'
img.classList = 'small-image'
sectionLeft.appendChild(img)

for (let i = 0; i < 3; i += 1) {
  const h3 = element('h3')
  h3.innerText = `Item ${i + 1}`
  main.appendChild(h3)
}

const numericList = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",  
  "oito",
  "nove",
  "dez"
];
const list = element('ul')
for (let i = 0; i < numericList.length; i += 1 ) {
  const li = element('li')
  li.innerText = numericList[i]
  list.appendChild(li)
}
sectionRight.appendChild(list)

const numericList2 = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",  
  "oito",
  "nove",
  "dez",
  "onze",
  "doze",
];
const ul = element('ul')
for (let i = 0; i < numericList2.length; i += 1) {
  const ol = element('ol')
  ol.innerText = numericList2[i]
  ul.appendChild(ol)
}
sectionCenter.appendChild(ul)
