// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte (Font family).
window.onload = () => {
  const main = document.querySelector('.main')
  const paragraph = document.querySelectorAll('.paragraph')

  const setBackGround = color => {
    main.style.backgroundColor = color
  }

  const setFontColor = color => {
    main.style.color = color
  }

  const setFontSize = size => {
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.fontSize = size
    }
  }

  const setLineHeight = height => {
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.lineHeight = `${height}`
    }
  }

  const setFamily = family => {
    for (let i = 0; i < paragraph.length; i += 1) {
      paragraph[i].style.fontFamily = family
    }
  }

  const backGroundColorButton = document.querySelectorAll('#bg-color>button')
  for (let i = 0; i < backGroundColorButton.length; i += 1) {
    backGroundColorButton[i].addEventListener('click', event => {
      setBackGround(event.target.innerHTML)
    })
  }

  const fontColor = document.querySelectorAll('#font-color>button')
  for (let i = 0; i < fontColor.length; i += 1) {
    fontColor[i].addEventListener('click', event => {
      setFontColor(event.target.innerHTML)
    })
  }

  const fontSize = document.querySelectorAll('#font-size>button')
  for (let i = 0; i < fontSize.length; i += 1) {
    fontSize[i].addEventListener('click', event => {
      setFontSize(event.target.innerHTML)
    })
  }

  const lineHeight = document.querySelectorAll('#line-height>button')
  for (let i = 0; i < lineHeight.length; i += 1) {
    lineHeight[i].addEventListener('click', (event) => {
      setLineHeight(event.target.innerHTML)
    })
  }

  const fontFamily = document.querySelectorAll('#font-family>button')
  for (let i = 0; i < fontFamily.length; i += 1) {
    fontFamily[i].addEventListener('click', (event) => {
      setFamily(event.target.innerHTML)
    })
  }

}
