document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
  
    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        const selectedQuestion = answer.getAttribute('data-question');
        const selectedAnswer = answer.getAttribute('data-answer');
        const correctAnswers = {
          1: 'd', 
          2: 'a', 
          3: 'b', 
          4: 'a', 
          5: 'a', 
          6: 'b', 
          7: 'c', 
          8: 'd', 
          9: 'c', 
          10: 'b', 
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