const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const favoriteTech = document.querySelector('#my-favorite-tech')


const handleClassTech = (event) => {
  const tech = document.querySelector('.tech')
  tech.classList.remove('tech')
  event.target.classList = 'tech'
  input.value = ''
}

firstLi.addEventListener('click', handleClassTech)
secondLi.addEventListener('click', handleClassTech)
thirdLi.addEventListener('click', handleClassTech)

input.addEventListener('input', (event => {
  const tech = document.querySelector('.tech')
  tech.innerText = event.target.value
}))

favoriteTech.addEventListener('dblclick', () => {
  window.open('https://www.github.com/macedorodrigo')
})

favoriteTech.addEventListener('mouseover', (event) => {
  event.target.style.color = 'purple'
})

favoriteTech.addEventListener('mouseout', (event) => {
  event.target.style.color = ''
})

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.