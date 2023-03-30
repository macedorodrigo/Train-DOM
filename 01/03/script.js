const noUrgency = document.querySelectorAll(".no-emergency-tasks")
for (let i= 0; i < noUrgency.length; i += 1 ) {
  noUrgency[i].style.background = 'yellow'
}

const urgency =  document.querySelectorAll(".emergency-tasks")
  for (let i = 0; i < urgency.length; i += 1 ) {
    urgency[i].style.background ='#ffc9c9'
}

const noUrgencyTitle = document.querySelectorAll(".no-emergency-tasks h3")
for (let i= 0; i < noUrgencyTitle.length; i += 1 ) {
  noUrgencyTitle[i].style.background ='black'
}

const urgencyTitle = document.querySelectorAll(".emergency-tasks h3")
for (let i = 0; i < urgencyTitle.length; i += 1) {
  urgencyTitle[i].style.background = 'purple'
}
