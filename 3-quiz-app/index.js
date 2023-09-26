// set
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

// object
const questionEl = document.getElementById('question');
const answerButtons = document.getElementById('answer-btns');
const nextBtn = document.getElementById('next-btn');

// counter
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  // show question 
  let currentQuestion = questions[currentQuestionIndex];
  let currentQuestionNo = currentQuestionIndex + 1;
  questionEl.innerHTML = `${currentQuestionNo}. ${currentQuestion.question}`;

  // create button for each answer
  currentQuestion.answers.forEach(answer=>{
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    // set correct value
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    // add click event
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  // don't show next button
  nextBtn.style.display = 'none';

  // clear existing buttons 
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// answer is correct or not
function selectAnswer(e) {
  // get the selected button
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach(button=>{
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    // no more clicks
    button.disabled = true;
  });
  // show next button
  nextBtn.style.display = 'block';
}

function handleNextButton(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionEl.innerHTML = `<i>You scored ${score} out of ${questions.length}!</i>`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click',()=>{
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

