import { questions } from './questions.js';

let shuffledQuestions = shuffle(questions);
let currentQuestionIndex = 0;
let userAnswers = [];

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');

    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', nextOrCheck);
});

function startQuiz() {
    const startButton = document.getElementById('start-btn');
    const nextButton = document.getElementById('next-btn');
    startButton.classList.add('hide');
    nextButton.textContent = 'Check';
    nextButton.classList.remove('hide');
    displayQuestion();
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = shuffledQuestions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${currentQuestionIndex + 1}. ${question.question}</p>`;

    question.options.forEach((option, optionIndex) => {
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');
        answerElement.innerHTML = `<label><input type="radio" name="question${currentQuestionIndex}" value="${optionIndex}" required>${option}</label>`;
        questionElement.appendChild(answerElement);
    });

    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    questionElement.appendChild(messageElement); // Append message element below the options

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
}

function nextQuestion() {
    const answerElements = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]:checked`);
    if (answerElements.length === 0) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Please select an option before proceeding.';
        return; // Prevents moving to the next question if no option is selected
    }

    // Clear any previous message when proceeding to the next question
    const messageElement = document.getElementById('message');
    messageElement.textContent = '';

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        displayQuestion();
    } else {
        const nextButton = document.getElementById('next-btn');
        nextButton.textContent = 'Restart Quiz';
        nextButton.removeEventListener('click', nextOrCheck);
        nextButton.addEventListener('click', restartQuiz);
    }
    const nextButton = document.getElementById('next-btn');
    nextButton.textContent = 'Check';
}


function nextOrCheck() {
    const nextButton = document.getElementById('next-btn');
    if (nextButton.textContent === 'Check') {
        checkAnswer();
    } else {
        const answerElements = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]:checked`);
        if (answerElements.length === 0) {
            const messageElement = document.getElementById('message');
            messageElement.textContent = 'Please select an option before proceeding.';
            return; // Prevents moving to the next question if no option is selected
        }

        // Clear any previous message when proceeding to the next question
        const messageElement = document.getElementById('message');
        messageElement.textContent = '';

        nextQuestion();
    }
}


// Remaining functions remain unchanged


function checkAnswer() {
    const selectedRadioButton = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (!selectedRadioButton) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Please select an option before checking the answer.';
        return;
    }

    const userAnswerIndex = parseInt(selectedRadioButton.value);
    const correctAnswerIndex = questions[currentQuestionIndex].answer;
    const questionElement = document.querySelector('.question');

    const answerFeedback = document.createElement('div');
    answerFeedback.classList.add('answer-feedback');
    if (userAnswerIndex === correctAnswerIndex) {
        answerFeedback.textContent = 'Your answer is correct!';
    } else {
        const correctAnswer = questions[currentQuestionIndex].options[correctAnswerIndex];
        answerFeedback.textContent = `Wrong. The correct answer is: ${correctAnswer}`;
    }
    questionElement.appendChild(answerFeedback);

    const nextButton = document.getElementById('next-btn');
    nextButton.textContent = 'Next';

    // Remove the message after clicking "Check"
    const messageElement = document.getElementById('message');
    messageElement.textContent = '';
}


function restartQuiz() {
    // Reset variables and start the quiz again
    currentQuestionIndex = 0;
    shuffledQuestions = shuffle(questions);
    userAnswers = [];
    startQuiz();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
