const questions = [
  {
    question: "1",
    answers: [
      {text: "1", correct: true},
      {text: "2", correct: false},
      {text: "3", correct: false},
      {text: "4", correct: false},
    ]
  },
  {
    question: "2",
    answers: [
      {text: "1", correct: false},
      {text: "2", correct: true},
      {text: "3", correct: false},
      {text: "4", correct: false},
    ]
  },
  {
    question: "3",
    answers: [
      {text: "1", correct: false},
      {text: "2", correct: false},
      {text: "3", correct: true},
      {text: "4", correct: false},
    ]
  },
  {
    question: "4",
    answers: [
      {text: "1", correct: false},
      {text: "2", correct: false},
      {text: "3", correct: false},
      {text: "4", correct: true},
    ]
  }

]

const questionEl = document.getElementById('question');
const answerButton = document.getElementById('answer-btns');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  // show question 
  let currentQuestion = questions[currentQuestionIndex];
  let currentQuestionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = `${currentQuestionNo}. ${currentQuestion.question}`;

  // create button for each answer
  currentQuestion.answers.forEach(answer=>{
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  })
}

startQuiz();

