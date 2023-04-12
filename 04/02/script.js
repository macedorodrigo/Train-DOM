const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list')


const insertPhaseInDOM = () => {
  const phrasesList = JSON.parse(localStorage.getItem('phrases'))
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li')
  phrase.innerText = phraseText
  list.appendChild(phrase)
}

const addPhraseToLocalStorage = () => {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList))
  insertPhaseInDOM()
}

const initialRendering = () => {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let i = 0; i <= listLength; i += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[i]
      list.appendChild(listElement)
    }
  }
}

const buttonTwo = document.getElementById('add-button-2');
const inputTwo = document.getElementById('phrases-input-2');
const listTwo = document.getElementById('phrases-list-2')

const insertPhaseInDOMTwo = () => {
  const phrasesList = JSON.parse(sessionStorage.getItem('phrasesTwo'))
  const listLength = phrasesList.length - 1;
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li')
  phrase.innerText = phraseText
  listTwo.appendChild(phrase)
}

const addPhraseToSessionStorageTwo = () => {
  const oldList = JSON.parse(sessionStorage.getItem('phrasesTwo'));
  const phraseText = inputTwo.value;
  oldList.push(phraseText);
  sessionStorage.setItem('phrasesTwo', JSON.stringify(oldList))
  insertPhaseInDOMTwo()
}

const initialRenderingTwo = () => {
  if (sessionStorage.getItem('phrasesTwo') === null) {
    sessionStorage.setItem('phrasesTwo', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(sessionStorage.getItem('phrasesTwo'));
    const listLength = phrasesList.length - 1;
    for (let i = 0; i <= listLength; i += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[i]
      listTwo.appendChild(listElement)
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);
buttonTwo.addEventListener('click', addPhraseToSessionStorageTwo);
window.onload = () => initialRendering();
