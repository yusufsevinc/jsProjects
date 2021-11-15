const quizData = [
    {
        question: "How old is Florian ?",
        a: "23",
        b: "24",
        c: "25",
        d: "26",
        correct: "c"
    }, {
        question: "What is the most used programing language in 2019 ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }, {
        question: "Who is the President of TUERKEY?",
        a: "Mansur Yavaş",
        b: "Kemal Kılıçlaroğlu",
        c: "Recep Tayyip Erdoğan",
        d: "Binali Yıldırım",
        correct: "c"
    }, {
        question: "Who founded the Ottoman state ?",
        a: "Mr. Osman",
        b: "Mr. Kanuni Sultan Süleyman",
        c: "Mr. Recep Tayyip Erdoğan",
        d: "Mr. Ertuğrul",
        correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");


const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Score ${score}/${quizData.length} </h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});