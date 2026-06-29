const correctAnswer = "10";
const explanation = "6 + 4 means we start with 6 and count 4 more. That gives us 10.";

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
