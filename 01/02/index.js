console.log("Funcionando");

const p = document.getElementsByClassName("paragraph");

for (let i = 0; i < p.length; i++) {
  p[i].innerText = "Isso ae"
}

p[0].style.color = 'blue'

const tag = document.getElementsByTagName("h4")
tag[0].innerText = "Deu certo"