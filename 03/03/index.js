const calendar = document.querySelector('.dayList')

const december = []

for( let i = 1; i <= 31; i += 1) {
  december.push(i)
}
 const holidays = [1, 25]

const decemberList = () => {
   for (let i = 0; i < december.length; i += 1) {
    const dayItem = document.createElement('li')
    dayItem.textContent = december[i]
    dayItem.classList = 'day'

    if (i % 7 === 5 || i % 7 === 6) {
      dayItem.classList.add('weekend')
    }

    if (holidays.includes(december[i])) {
      dayItem.classList.add('holiday')
    }

    calendar.appendChild(dayItem)
  }
}

decemberList()
