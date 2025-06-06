document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ການອ່ານປື້ມມີຜົນປະໂຫຍດຫຍັງແດ່?",
            options: [
                "ພຽງແຕ່ເຮັດໃຫ້ເສຍເວລາ",
                "ເພີ່ມພູນຄວາມຮູ້ ແລະ ພັດທະນາທັກສະການຄິດ",
                "ເຮັດໃຫ້ເມື່ອຍລ້າ",
                "ບໍ່ມີຜົນປະໂຫຍດ"
            ],
            answer: "ເພີ່ມພູນຄວາມຮູ້ ແລະ ພັດທະນາທັກສະການຄິດ",
            explanation: "ການອ່ານປື້ມຊ່ວຍເພີ່ມພູນຄວາມຮູ້, ພັດທະນາທັກສະການຄິດວິເຄາະ ແລະ ການແກ້ໄຂບັນຫາ."
        },
        {
            question: "ການອ່ານສາມາດຊ່ວຍຫຼຸດຜ່ອນຫຍັງໄດ້?",
            options: [
                "ນ້ຳໜັກ",
                "ຄວາມຄຽດ",
                "ອາຍຸ",
                "ຄວາມສູງ"
            ],
            answer: "ຄວາມຄຽດ",
            explanation: "ການອ່ານປື້ມດີໆ ສາມາດເປັນການພັກຜ່ອນທີ່ດີເລີດ ແລະ ຊ່ວຍຫຼຸດຜ່ອນຄວາມຕຶງຄຽດ."
        },
        {
            question: "ຫ້ອງສະໝຸດແຫ່ງຊາດລາວ ຈັດເປັນແຫຼ່ງປື້ມປະເພດໃດ?",
            options: [
                "ຮ້ານຂາຍເຄື່ອງກິນ",
                "ຮ້ານຂາຍປື້ມອອນລາຍ",
                "ຫ້ອງສະໝຸດ",
                "ຕະຫຼາດ"
            ],
            answer: "ຫ້ອງສະໝຸດ",
            explanation: "ຫ້ອງສະໝຸດແຫ່ງຊາດລາວ ແມ່ນແຫຼ່ງປື້ມທີ່ສຳຄັນ."
        },
        {
            question: "ການຊອກຫາປື້ມຜ່ານ Facebook Page ຈັດເປັນຊ່ອງທາງໃດ?",
            options: [
                "ຫ້ອງສະໝຸດເຄື່ອນທີ່",
                "ຮ້ານຂາຍປື້ມອອນລາຍ/ສື່ສັງຄົມອອນລາຍ",
                "ຮ້ານຂາຍປື້ມທຳມະດາ",
                "ການແລກປ່ຽນປື້ມ"
            ],
            answer: "ຮ້ານຂາຍປື້ມອອນລາຍ/ສື່ສັງຄົມອອນລາຍ",
            explanation: "ຮ້ານຂາຍປື້ມຫຼາຍແຫ່ງໄດ້ຂາຍຜ່ານສື່ສັງຄົມອອນລາຍ."
        },
        {
            question: "ປື້ມທີ່ຂຽນໂດຍ ພຣະອາຈານ ປຕ. ບຸນຊົງ ອ່ອນມະນີຈັນ ຄວນຊອກຫາໄດ້ຈາກໃສ?",
            options: [
                "ຮ້ານຂາຍເຄື່ອງໄຟຟ້າ",
                "ສຳນັກພິມ, ຮ້ານປື້ມທຳມະ, ຫຼື ສອບຖາມຈາກວັດ",
                "ຕະຫຼາດສົດ",
                "ຮ້ານອາຫານ"
            ],
            answer: "ສຳນັກພິມ, ຮ້ານປື້ມທຳມະ, ຫຼື ສອບຖາມຈາກວັດ",
            explanation: "ປື້ມທຳມະມັກຈະຫາໄດ້ຈາກສຳນັກພິມ, ຮ້ານປື້ມທຳມະ, ຫຼື ສອບຖາມຂໍ້ມູນຈາກວັດທີ່ເພິ່ນສອນ."
        },
        {
            question: "ຂໍ້ໃດແມ່ນຄຳແນະນຳທີ່ດີສຳລັບຜູ້ເລີ່ມຕົ້ນການອ່ານ?",
            options: [
                "ເລືອກປື້ມທີ່ສັບສົນທີ່ສຸດ",
                "ເລີ່ມຕົ້ນດ້ວຍປື້ມທີ່ທ່ານມັກ",
                "ອ່ານສະເພາະປື້ມວິທະຍາສາດເທົ່ານັ້ນ",
                "ອ່ານແບບບໍ່ມີການຢຸດພັກ"
            ],
            answer: "ເລີ່ມຕົ້ນດ້ວຍປື້ມທີ່ທ່ານມັກ",
            explanation: "ການເລືອກປື້ມທີ່ກົງກັບຄວາມສົນໃຈຈະຊ່ວຍສ້າງແຮງບັນດານໃຈໃນການອ່ານ."
        },
        {
            question: "ການຈົດບັນທຶກໃນຂະນະທີ່ອ່ານມີຜົນດີແນວໃດ?",
            options: [
                "ເຮັດໃຫ້ປື້ມເປື້ອນ",
                "ຊ່ວຍໃຫ້ຈື່ຈຳ ແລະ ເຂົ້າໃຈເນື້ອໃນໄດ້ດີຂຶ້ນ",
                "ເຮັດໃຫ້ການອ່ານຊ້າລົງ",
                "ບໍ່ມີປະໂຫຍດ"
            ],
            answer: "ຊ່ວຍໃຫ້ຈື່ຈຳ ແລະ ເຂົ້າໃຈເນື້ອໃນໄດ້ດີຂຶ້ນ",
            explanation: "ການຈົດບັນທຶກຊ່ວຍໃນການຮຽນຮູ້ ແລະ ທົບທວນ."
        },
        {
            question: "ເປັນຫຍັງຈຶ່ງຄວນອ່ານປື້ມໃຫ້ຫຼາກຫຼາຍປະເພດ?",
            options: [
                "ເພື່ອເຮັດໃຫ້ສັບສົນ",
                "ເພື່ອເປີດໂລກທັດ ແລະ ໄດ້ຮັບຄວາມຮູ້ທີ່ກວ້າງຂວາງ",
                "ເພື່ອອ່ານໃຫ້ໝົດໄວໆ",
                "ບໍ່ມີເຫດຜົນ"
            ],
            answer: "ເພື່ອເປີດໂລກທັດ ແລະ ໄດ້ຮັບຄວາມຮູ້ທີ່ກວ້າງຂວາງ",
            explanation: "ການອ່ານປື້ມຫຼາກຫຼາຍປະເພດຈະຊ່ວຍຂະຫຍາຍຄວາມຮູ້ ແລະ ມຸມມອງ."
        },
        {
            question: "ຂໍ້ໃດບໍ່ແມ່ນຜົນປະໂຫຍດຂອງການອ່ານປື້ມ?",
            options: [
                "ປັບປຸງຄຳສັບ ແລະ ພາສາ",
                "ເສີມສ້າງຄວາມເຂົ້າໃຈ ແລະ ອາລົມຮ່ວມ",
                "ເຮັດໃຫ້ຫິວເຂົ້າ",
                "ພັດທະນາຈິດໃຈໃຫ້ມີສະຕິປັນຍາ"
            ],
            answer: "ເຮັດໃຫ້ຫິວເຂົ້າ",
            explanation: "ການອ່ານບໍ່ໄດ້ເຮັດໃຫ້ຫິວເຂົ້າໂດຍກົງ; ຜົນປະໂຫຍດສ່ວນໃຫຍ່ແມ່ນທາງດ້ານສະຕິປັນຍາ ແລະ ຈິດໃຈ."
        },
        {
            question: "ຫ້ອງສະໝຸດເຄື່ອນທີ່ ຫຼື ໂຄງການສົ່ງເສີມການອ່ານມັກຈະຈັດຕັ້ງໂດຍໃຜ?",
            options: [
                "ບໍລິສັດເກມ",
                "ອົງກອນບໍ່ຫວັງຜົນກຳໄລ ແລະ ໂຄງການຕ່າງໆ",
                "ຮ້ານອາຫານ",
                "ບໍລິສັດຂົນສົ່ງ"
            ],
            answer: "ອົງກອນບໍ່ຫວັງຜົນກຳໄລ ແລະ ໂຄງການຕ່າງໆ",
            explanation: "ອົງກອນບໍ່ຫວັງຜົນກຳໄລມັກຈະຈັດຕັ້ງໂຄງການສົ່ງເສີມການອ່ານເພື່ອໃຫ້ຄົນເຂົ້າເຖິງປື້ມໄດ້."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions[currentQuestionIndex];
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    quizContainer.innerHTML = `
        <p>ກົດປຸ່ມ "ເລີ່ມທົດສອບ" ເພື່ອເລີ່ມຕົ້ນ!</p>
        <button id="start-quiz-btn">ເລີ່ມທົດສອບ</button>
    `;
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
