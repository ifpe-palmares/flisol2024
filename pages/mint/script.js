document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
  
    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        const selectedQuestion = answer.getAttribute('data-question');
        const selectedAnswer = answer.getAttribute('data-answer');
        const correctAnswers = {
          1: 'a', 
          2: 'c', 
          3: 'a', 
          4: 'a', 
          5: 'c', 
          6: 'b', 
          7: 'd', 
          8: 'c', 
          9: 'b', 
          10: 'a', 
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