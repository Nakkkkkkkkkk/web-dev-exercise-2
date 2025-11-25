document.addEventListener("DOMContentLoaded", function () {
    const question = document.getElementById("question");
    const choices = document.getElementById("choices");
    const btnnext = document.getElementById("btnnext");
    const result = document.getElementById("result");

    function loadQuiz() {
        btnnext.classList.add("hidden");
        choices.innerHTML = "";
        const currentData = quizData[currentQuiz];
        question.textContent = currentData.question;

        const choicesArr = currentData.choices
        choicesArr.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", selectAnswer);
            choices.appendChild(button);
        });
    }

    function selectAnswer(e) {
        const selectedAnswer = e.target.textContent;
        const correctAnswer = quizData[currentQuiz].answer;

        if (selectedAnswer === correctAnswer) {
            e.target.style.backgroundColor = "lightgreen";
            score++;
        } else {
            e.target.style.backgroundColor = "salmon";
        }

        Array.from(choices.children).forEach(btn => btn.disabled = true);

        btnnext.classList.remove("hidden");
    }

    function showResult() {
        document.getElementById("quiz").classList.add("hidden");
        result.classList.remove("hidden");
        result.textContent = `Your Score is ${score} / ${quizData.length} !`
    }

    const quizData = [
        {
            question: "1. What do you get if you mix RED + BLUE?",
            choices: ["1. Green", "2. Orange", "3. Purple", "4. Brown"],
            answer: "3. Purple"
        },
        {
            question: "2. What do you get if you mix BLUE + ORANGE?",
            choices: ["1. Green", "2. Yellow", "3. Purple", "4. Brown"],
            answer: "4. Brown"
        },
        {
            question: "3. What do you get if you mix RED + GREEN?",
            choices: ["1. Gray", "2. Yellow", "3. Purple", "4. Brown"],
            answer: "4. Brown"
        }
    ];

    let currentQuiz = 0;
    let score = 0;

    btnnext.addEventListener("click", function (event) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResult();
        }
    });
    loadQuiz();
});