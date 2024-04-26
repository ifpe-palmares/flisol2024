document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
  
    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        const selectedQuestion = answer.getAttribute('data-question');
        const selectedAnswer = answer.getAttribute('data-answer');
        const correctAnswers = {
          1: 'b', 
          2: 'b', 
          3: 'c', 
          4: 'b', 
          5: 'd', 
          6: 'c', 
          7: 'd', 
          8: 'a', 
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