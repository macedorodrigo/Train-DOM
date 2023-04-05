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

const gitHub = () => {
    window.location.replace('https://www.github.com/macedorodrigo')
}
favoriteTech.addEventListener('dblclick', gitHub)
// redirecione para alguma página.
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.

// Segue abaixo um exemplo de uso do event.target.

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