console.log(localStorage.length);
localStorage.setItem('firstname', 'Rodrigo')
localStorage.setItem('lastname', 'Macedo')
console.log(localStorage.getItem('lastname'));
console.log(localStorage.getItem('firstname'));
console.log(localStorage.length);
localStorage.removeItem('lastname')
console.log(localStorage.length);
localStorage.clear()
console.log(localStorage.length);

console.log(sessionStorage.length);
sessionStorage.setItem('firstname', 'Rodrigo')
sessionStorage.setItem('lastname', 'Macedo')
console.log(sessionStorage.getItem('lastname'));
console.log(sessionStorage.getItem('firstname'));
console.log(sessionStorage.length);
sessionStorage.removeItem('lastname')
console.log(sessionStorage.length);
sessionStorage.clear()
console.log(sessionStorage.length);

