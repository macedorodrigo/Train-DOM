// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
window.onload = () => {
const main = document.querySelector('.main')
const paragraph = document.querySelectorAll('.paragraph')

  const paintBackGround = (color) => {
    main.style.backgroundColor = color
  } 

  const setFontColor = (color) => {
    main.style.color = color
  }

  const setFontSize = (size) => {
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.fontSize = `${size}px`
    }
  }

  const setLineHeight = (height) => {
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.lineHeight = `${height}`
    }
  }

  const setFamily = (family) => {
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.fontFamily = family
    }
  }

  const backGroundColorButton = document.querySelectorAll('#bg-color>button')
  console.log(backGroundColorButton);

}
