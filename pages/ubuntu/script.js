document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
  
    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        const selectedQuestion = answer.getAttribute('data-question');
        const selectedAnswer = answer.getAttribute('data-answer');
        const correctAnswers = {
          1: 'd', 
          2: 'd', 
          3: 'a', 
          4: 'c', 
          5: 'c', 
          6: 'd', 
          7: 'b', 
          8: 'd', 
          9: 'a', 
          10: 'd', 
        };
  
        if (selectedAnswer === correctAnswers[selectedQuestion]) {
          answer.classList.add('correct');
        } else {
          answer.classList.add('incorrect');
        }
      });
    });
  
    // Evento para limpar conteúdo
    document.getElementById('botao-limpar').addEventListener('click', function() {
      answers.forEach(answer => {
        answer.classList.remove('correct', 'incorrect');
      });
    });
  });