// const header = document.createElement('header')
// header.id = 'title'
// document.body.appendChild(header)

//1
const title = document.createElement('h1')
title.innerText = 'TrybeTrip - Agência de Viagens'
document.body.appendChild(title)
//2
const main = document.createElement('main')
main.className = 'main-content'
document.body.appendChild(main)
//3
const section = document.createElement('section')
section.className = 'center-content'
main.appendChild(section)
//4
const paragraph = document.createElement('p')
paragraph.innerHTML = 'Teste exercício Trybe'
section.appendChild(paragraph)
//5
const section2 = document.createElement('section')
section2.className = 'left-content'
main.appendChild(section2)
//6
const section3 = document.createElement('section')
section3.className = 'rigth-content'
main.appendChild(section3)
//7
const img = document.createElement('img')
img.src = 'https://picsum.photos/200'
img.className = 'small-image'
section2.appendChild(img)
//8
const numerosPorExtenso = [
  'um', 'dois', 'três', 'quatro', 'cinco',
  'seis', 'sete', 'oito', 'nove', 'dez'
];
for (let num in numerosPorExtenso) {
  const li = document.createElement('li')
  li.innerText = numerosPorExtenso[num]
  section3.appendChild(li)
}
//9
for (let i = 0; i < 3; i += 1) {
  const h3 = document.createElement('h3')
  h3.innerText = `Título ${i + 1}`
  main.appendChild(h3)
}

// const lista = document.createElement('ul')
// for (let i = 0; i <= 9; i += 1) {
//   const li = document.createElement('li')
//   const valores = numerosPorExtenso[i]
//   li.innerText = `${valores}`
//   lista.appendChild(li)
// }
// section3.appendChild(lista)