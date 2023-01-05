
// 46. Quiz App

// Important concepts for the project

// 1. array
// 2. getElementById()
// 3. querySelectorAll()
// 4. forEach()
// 5. if...else
// 6. addEventListener('click')
// 7. innerText
// 8. template literals

// question bank
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// variables

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// default question number is first one
let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {

    // clear previously selected answer
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    // get the question from question bank
    questionEl.innerText = currentQuizData.question;

    // get the answer from question bank
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// function to deselect
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// function to get the selected answer
function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// event listener on submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    // action on any answer
    if(answer) {
        // increase the score if answer correctly
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        // increase question serial number
        currentQuiz++;

        if(currentQuiz < quizData.length) {
            // move to the next question
            loadQuiz();
        } else {
            // display score of current attempt and a reload button
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})