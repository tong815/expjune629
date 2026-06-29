const topics = [
  {
    name: "Fractions",
    questions: [
      {
        topic: "Fractions",
        text: "What is 3/4 + 1/8?",
        choices: ["4/12", "7/8", "5/8", "1/2"],
        correctAnswer: "7/8",
        explanation: "Change 3/4 into 6/8. Then 6/8 + 1/8 = 7/8."
      },
      {
        topic: "Fractions",
        text: "What is 2/3 of 12?",
        choices: ["6", "8", "10", "18"],
        correctAnswer: "8",
        explanation: "One third of 12 is 4, so two thirds is 4 + 4 = 8."
      },
      {
        topic: "Fractions",
        text: "Which fraction is equal to 1/2?",
        choices: ["2/3", "3/6", "4/6", "5/8"],
        correctAnswer: "3/6",
        explanation: "3/6 simplifies to 1/2 because both numbers divide by 3."
      }
    ]
  },
  {
    name: "Integers",
    questions: [
      {
        topic: "Integers",
        text: "What is -5 + 9?",
        choices: ["-14", "-4", "4", "14"],
        correctAnswer: "4",
        explanation: "Starting at -5 and moving 9 steps right lands on 4."
      },
      {
        topic: "Integers",
        text: "What is -3 x 6?",
        choices: ["-18", "-9", "9", "18"],
        correctAnswer: "-18",
        explanation: "A negative number times a positive number gives a negative answer."
      },
      {
        topic: "Integers",
        text: "What is 7 - 12?",
        choices: ["-19", "-5", "5", "19"],
        correctAnswer: "-5",
        explanation: "Subtracting 12 from 7 moves 12 steps left, which gives -5."
      }
    ]
  },
  {
    name: "Percent",
    questions: [
      {
        topic: "Percent",
        text: "What is 25% of 80?",
        choices: ["10", "20", "25", "40"],
        correctAnswer: "20",
        explanation: "25% means one fourth. One fourth of 80 is 20."
      },
      {
        topic: "Percent",
        text: "A price goes from $50 to $60. What is the increase?",
        choices: ["10%", "15%", "20%", "25%"],
        correctAnswer: "20%",
        explanation: "The increase is $10. Since 10 is 20% of 50, the increase is 20%."
      },
      {
        topic: "Percent",
        text: "Which decimal is equal to 35%?",
        choices: ["0.035", "0.35", "3.5", "35.0"],
        correctAnswer: "0.35",
        explanation: "35% means 35 out of 100, which is 0.35."
      }
    ]
  },
  {
    name: "Algebra",
    questions: [
      {
        topic: "Algebra",
        text: "Solve: x + 6 = 14",
        choices: ["6", "8", "12", "20"],
        correctAnswer: "8",
        explanation: "Subtract 6 from both sides. x = 8."
      },
      {
        topic: "Algebra",
        text: "If 3n = 21, what is n?",
        choices: ["6", "7", "18", "24"],
        correctAnswer: "7",
        explanation: "Divide both sides by 3. n = 7."
      },
      {
        topic: "Algebra",
        text: "Which expression means 5 more than a number y?",
        choices: ["5y", "y - 5", "y + 5", "5 - y"],
        correctAnswer: "y + 5",
        explanation: "5 more than y means add 5 to y."
      }
    ]
  },
  {
    name: "Geometry",
    questions: [
      {
        topic: "Geometry",
        text: "What is the area of a rectangle with length 9 cm and width 4 cm?",
        choices: ["13 cm^2", "26 cm^2", "36 cm^2", "40 cm^2"],
        correctAnswer: "36 cm^2",
        explanation: "Area of a rectangle is length times width. 9 x 4 = 36."
      },
      {
        topic: "Geometry",
        text: "What is the perimeter of a square with side length 6 m?",
        choices: ["12 m", "18 m", "24 m", "36 m"],
        correctAnswer: "24 m",
        explanation: "A square has 4 equal sides. 4 x 6 = 24."
      },
      {
        topic: "Geometry",
        text: "How many degrees are in a straight angle?",
        choices: ["45 degrees", "90 degrees", "180 degrees", "360 degrees"],
        correctAnswer: "180 degrees",
        explanation: "A straight angle forms a straight line, which measures 180 degrees."
      }
    ]
  },
  {
    name: "Ratios",
    questions: [
      {
        topic: "Ratios",
        text: "A recipe uses 2 cups of rice for 5 cups of water. What is the ratio of rice to water?",
        choices: ["2:5", "5:2", "2:7", "7:5"],
        correctAnswer: "2:5",
        explanation: "The ratio compares rice to water, so it is 2 to 5."
      },
      {
        topic: "Ratios",
        text: "Which ratio is equal to 3:4?",
        choices: ["6:8", "6:7", "9:10", "12:18"],
        correctAnswer: "6:8",
        explanation: "Multiplying both parts of 3:4 by 2 gives 6:8."
      },
      {
        topic: "Ratios",
        text: "There are 4 red marbles and 10 blue marbles. What is the ratio of red to blue in simplest form?",
        choices: ["2:5", "4:14", "5:2", "10:4"],
        correctAnswer: "2:5",
        explanation: "The ratio 4:10 simplifies to 2:5 because both numbers divide by 2."
      }
    ]
  }
];

const topicScreen = document.querySelector("#topic-screen");
const questionScreen = document.querySelector("#question-screen");
const topicList = document.querySelector("#topic-list");
const topicName = document.querySelector("#topic-name");
const questionCount = document.querySelector("#question-count");
const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const feedback = document.querySelector("#feedback");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");

let currentTopic = null;
let currentQuestionNumber = 0;
let answered = false;

function showTopics() {
  topicScreen.classList.remove("hidden");
  questionScreen.classList.add("hidden");
  currentTopic = null;
  currentQuestionNumber = 0;
  feedback.innerHTML = "";
}

function showQuestion() {
  const question = currentTopic.questions[currentQuestionNumber];

  topicName.textContent = question.topic;
  questionCount.textContent = `Question ${currentQuestionNumber + 1} of ${currentTopic.questions.length}`;
  questionText.textContent = question.text;
  feedback.innerHTML = "";
  answered = false;
  nextButton.disabled = true;

  answerList.innerHTML = "";

  question.choices.forEach(function(choice) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = choice;
    button.addEventListener("click", function() {
      checkAnswer(button, question);
    });

    answerList.appendChild(button);
  });
}

function chooseTopic(topic) {
  currentTopic = topic;
  currentQuestionNumber = 0;
  topicScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  showQuestion();
}

function checkAnswer(selectedButton, question) {
  if (answered) {
    return;
  }

  const selectedAnswer = selectedButton.textContent;
  const isCorrect = selectedAnswer === question.correctAnswer;
  const answerButtons = document.querySelectorAll(".answer-button");

  answered = true;
  nextButton.disabled = false;

  answerButtons.forEach(function(button) {
    button.disabled = true;

    if (button.textContent === question.correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (!isCorrect) {
    selectedButton.classList.add("wrong");
  }

  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct!" : "Not quite."}</strong>
    The correct answer is ${question.correctAnswer}.<br>
    ${question.explanation}
  `;
}

function showNextQuestion() {
  if (!answered) {
    return;
  }

  currentQuestionNumber += 1;

  if (currentQuestionNumber >= currentTopic.questions.length) {
    questionText.textContent = "You finished this topic! Go back and choose another topic.";
    questionCount.textContent = "";
    answerList.innerHTML = "";
    feedback.innerHTML = "";
    nextButton.disabled = true;
    return;
  }

  showQuestion();
}

topics.forEach(function(topic) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "topic-card";
  button.innerHTML = `
    <strong>${topic.name}</strong>
    <span>${topic.questions.length} questions</span>
  `;
  button.addEventListener("click", function() {
    chooseTopic(topic);
  });

  topicList.appendChild(button);
});

backButton.addEventListener("click", showTopics);
nextButton.addEventListener("click", showNextQuestion);
