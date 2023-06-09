const questions = document.querySelectorAll('.questions')


questions.forEach(question => {
  const btn = question.querySelector('.question-btn')
btn.addEventListener("click", function() {
   questions.forEach(item => {
     if(item !== question) {
       item.classList.remove('show-text')
     }
   })
   question.classList.toggle('show-text')
  })
})
