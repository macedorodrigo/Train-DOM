const title = document.createElement('h1')
title.innerText = 'Começando teste'
document.body.appendChild(title)

const main = document.createElement('main')
main.id = 'main'
document.body.appendChild(main)

const p = document.createElement('p')
p.id = 'paragraph'
main.appendChild(p)

const maisInfos = () => {
  const a = document.getElementById('paragraph')
  a.innerText = 'Text here'
}

const button = document.createElement('button')
button.innerText = 'Click here!!!!'
button.name = 'Click here!!!'
button.value = 'Click here'
button.onclick = maisInfos;
main.appendChild(button)

const newCall = () => {
  alert('Página pronta')
  alert('Página carregada')
}

window.onload = newCall

alert('Isso')