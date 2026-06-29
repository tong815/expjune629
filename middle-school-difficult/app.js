const correctAnswer = "7/8";
const explanation = "To add 3/4 and 1/8, first change 3/4 into 6/8. Then 6/8 + 1/8 = 7/8.";

const answerButtons = document.querySelectorAll(".answer-button");
const feedback = document.querySelector("#feedback");
const resetButton = document.querySelector("#reset-button");

function checkAnswer(event) {
  const selectedButton = event.target;
  const selectedAnswer = selectedButton.dataset.answer;
  const isCorrect = selectedAnswer === correctAnswer;

  answerButtons.forEach(function(button) {
    button.disabled = true;

    if (button.dataset.answer === correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (!isCorrect) {
    selectedButton.classList.add("wrong");
  }

  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct!" : "Not quite."}</strong>
    The correct answer is ${correctAnswer}.<br>
    ${explanation}
  `;
}

function resetQuiz() {
  answerButtons.forEach(function(button) {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });

  feedback.innerHTML = "";
}

answerButtons.forEach(function(button) {
  button.addEventListener("click", checkAnswer);
});

resetButton.addEventListener("click", resetQuiz);
