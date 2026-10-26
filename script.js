import questionData from "./questionData.js";

let currentIndex = 0;

const question = document.getElementById("question");
const optionABtn = document.getElementById("option-a");
const optionBBtn = document.getElementById("option-b");
const optionCBtn = document.getElementById("option-c");
const optionDBtn = document.getElementById("option-d");
const feedback = document.getElementById("feedback");
const nextQuestionBtn = document.getElementById("next-question");

nextQuestionBtn.addEventListener('click', () => {
    if (nextQuestionBtn.textContent === 'Start Quiz') {
        nextQuestionBtn.textContent = 'Next Question';
        feedback.textContent = "";
        loadQuestion(currentIndex);
        return;
    }

    currentIndex++

    if (currentIndex < questionData.length) {
        feedback.textContent = "";
        loadQuestion(currentIndex);
    } else {
        feedback.textContent = `You've answered all the questions. Click Start Quiz to start again.` 
        currentIndex = 0;
        nextQuestionBtn.textContent = 'Start Quiz';
    }
})

optionABtn.addEventListener('click', () => {
    checkAnswer(questionData[currentIndex].choices[0])
})

optionBBtn.addEventListener('click', () => {
    checkAnswer(questionData[currentIndex].choices[1])
})

optionCBtn.addEventListener('click', () => {
    checkAnswer(questionData[currentIndex].choices[2])
})

optionDBtn.addEventListener('click', () => {
    checkAnswer(questionData[currentIndex].choices[3])
})

function checkAnswer(selectedChoice) {
    const currentQuestion = questionData[currentIndex];

    if (selectedChoice === currentQuestion.answer) {
        feedback.textContent = `Great job! You got it right!`;
    } else {
        feedback.textContent = `That's not quite right. Try again.`;
    }
}

function loadQuestion (index) {
    const currentQuestion = questionData[index];

    question.textContent = currentQuestion.question;

    optionABtn.textContent = currentQuestion.choices[0];
    optionBBtn.textContent = currentQuestion.choices[1];
    optionCBtn.textContent = currentQuestion.choices[2];
    optionDBtn.textContent = currentQuestion.choices[3];
}