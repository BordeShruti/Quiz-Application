// Quiz Data with 15 questions for each category
const quizData = {
    general: [
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correct: 0 },
        { question: "Which is the smallest country in the world?", options: ["Vatican City", "Monaco", "Nauru", "Malta"], correct: 0 },
        { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"], correct: 0 },
        { question: "What is the largest ocean on Earth?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], correct: 0 },
        { question: "Which element has the chemical symbol 'Au'?", options: ["Gold", "Silver", "Iron", "Lead"], correct: 0 },
        { question: "What is the currency of Japan?", options: ["Yen", "Won", "Dollar", "Euro"], correct: 0 },
        { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correct: 0 },
        { question: "What is the hardest natural substance on Earth?", options: ["Diamond", "Gold", "Iron", "Platinum"], correct: 0 },
        { question: "What is the main ingredient in guacamole?", options: ["Avocado", "Tomato", "Pepper", "Onion"], correct: 0 },
        { question: "Which gas do plants primarily use for photosynthesis?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 0 },
        { question: "Which animal is known as the 'King of the Jungle'?", options: ["Lion", "Tiger", "Elephant", "Leopard"], correct: 0 },
        { question: "What is the capital of Japan?", options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"], correct: 0 },
        { question: "Who was the first president of the United States?", options: ["George Washington", "John Adams", "Thomas Jefferson", "Abraham Lincoln"], correct: 0 },
        { question: "What is the fastest land animal?", options: ["Cheetah", "Lion", "Tiger", "Horse"], correct: 0 },
        { question: "In which year did the Titanic sink?", options: ["1912", "1905", "1920", "1915"], correct: 0 }
    ],
    science: [
        { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "H2"], correct: 0 },
        { question: "What planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], correct: 0 },
        { question: "What is the speed of light?", options: ["299,792,458 m/s", "150,000,000 m/s", "300,000,000 m/s", "3,000,000 m/s"], correct: 0 },
        { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], correct: 0 },
        { question: "What organ is vital for pumping blood throughout the body?", options: ["Heart", "Liver", "Kidney", "Lung"], correct: 0 },
        { question: "What is the process by which plants make their food?", options: ["Photosynthesis", "Respiration", "Digestion", "Transpiration"], correct: 0 },
        { question: "What force keeps us grounded on Earth?", options: ["Gravity", "Magnetism", "Friction", "Inertia"], correct: 0 },
        { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Nitrogen", "Oxygen", "Argon", "Carbon Dioxide"], correct: 0 },
        { question: "What is the basic unit of life?", options: ["Cell", "Atom", "Molecule", "Organ"], correct: 0 },
        { question: "Which planet is known as the 'Giant Red Spot'?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 0 },
        { question: "What is the boiling point of water?", options: ["100°C", "90°C", "110°C", "80°C"], correct: 0 },
        { question: "What type of energy does the sun provide?", options: ["Solar", "Thermal", "Nuclear", "Electrical"], correct: 0 },
        { question: "Which gas do humans breathe out?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 0 },
        { question: "How many bones are in the human body?", options: ["206", "205", "210", "201"], correct: 0 },
        { question: "What is the primary gas responsible for climate change?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"], correct: 0 }
    ],
    history: [
        { question: "Who was the first President of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], correct: 0 },
        { question: "What year did World War II end?", options: ["1945", "1939", "1918", "1965"], correct: 0 },
        { question: "Who was the first man to walk on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], correct: 0 },
        { question: "Who was the famous queen of ancient Egypt?", options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Tutankhamun"], correct: 0 },
        { question: "In which year was the Declaration of Independence signed?", options: ["1776", "1783", "1801", "1820"], correct: 0 },
        { question: "What ancient civilization built the pyramids of Giza?", options: ["Egyptian", "Mayan", "Aztec", "Roman"], correct: 0 },
        { question: "Who was the leader of the Soviet Union during World War II?", options: ["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Leon Trotsky"], correct: 0 },
        { question: "Which empire was known for its extensive road network and engineering feats?", options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "British Empire"], correct: 0 },
        { question: "What was the main cause of the American Civil War?", options: ["Slavery", "Taxes", "Territorial Expansion", "Trade Disputes"], correct: 0 },
        { question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Han Wudi", "Kublai Khan", "Li Shimin"], correct: 0 },
        { question: "In what year did the Berlin Wall fall?", options: ["1989", "1991", "1980", "1985"], correct: 0 },
        { question: "Who discovered America?", options: ["Christopher Columbus", "Leif Erikson", "James Cook", "Ferdinand Magellan"], correct: 0 },
        { question: "What was the name of the ship that brought the Pilgrims to America?", options: ["Mayflower", "Santa Maria", "Pinta", "Nina"], correct: 0 },
        { question: "What event started World War I?", options: ["Assassination of Archduke Ferdinand", "Sinking of the Lusitania", "Invasion of Poland", "Treaty of Versailles"], correct: 0 },
        { question: "Who led the civil rights movement in the USA during the 1960s?", options: ["Martin Luther King Jr.", "Malcolm X", "Jesse Jackson", "Thurgood Marshall"], correct: 0 }
    ]
};

let selectedCategory;
let questions;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
let currentUser;
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

// DOM Elements
const questionElement = document.getElementById("question");
const optionButtons = document.getElementsByClassName("option-btn");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const timeElement = document.getElementById("time");
const nextButton = document.getElementById("next-btn");
const leaderboardElement = document.getElementById("leaderboard");

// Login Functionality
function login() {
    const usernameInput = document.getElementById("username").value;
    if (usernameInput.trim()) {
        currentUser = usernameInput;
        document.getElementById("login-area").classList.add("hidden");
        document.getElementById("quiz-intro").classList.remove("hidden");
    } else {
        alert("Please enter a valid username!");
    }
}

// Start Quiz Functionality
function startQuiz(category) {
    selectedCategory = category;
    const allQuestions = [...quizData[category]];  // Get all 15 questions
    shuffleArray(allQuestions);  // Shuffle them
    questions = allQuestions.slice(0, 10);  // Select the first 10 questions
    document.getElementById("quiz-intro").classList.add("hidden");
    document.getElementById("quiz-area").classList.remove("hidden");
    loadQuestion();
}

// Load Question Functionality
function loadQuestion() {
    resetTimer();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].innerText = currentQuestion.options[i];
        optionButtons[i].style.backgroundColor = "#007bff";
        optionButtons[i].disabled = false;
    }
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    nextButton.disabled = true;
}

// Select Option
function selectOption(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
    }
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].disabled = true;
        if (i === correctIndex) {
            optionButtons[i].style.backgroundColor = "#28a745"; // Green for correct
        } else {
            optionButtons[i].style.backgroundColor = "#dc3545"; // Red for incorrect
        }
    }
    nextButton.disabled = false;
    scoreElement.innerText = `Score: ${score}`;
    clearInterval(timer);
}

// Move to Next Question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// End Quiz
function endQuiz() {
    document.getElementById("quiz-area").classList.add("hidden");
    document.getElementById("quiz-end").classList.remove("hidden");
    document.getElementById("final-score").innerText = `Your final score is: ${score}`;

    // Add to Leaderboard
    leaderboard.push({ user: currentUser, score });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Show Leaderboard
function showLeaderboard() {
    document.getElementById("quiz-end").classList.add("hidden");
    document.getElementById("leaderboard-area").classList.remove("hidden");

    leaderboardElement.innerHTML = '';
    leaderboard.sort((a, b) => b.score - a.score); // Sort by highest score
    leaderboard.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.innerText = `${entry.user}: ${entry.score}`;
        leaderboardElement.appendChild(listItem);
    });
}

// Restart Quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = `Score: ${score}`;
    progressBar.style.width = "0%";
    document.getElementById("quiz-end").classList.add("hidden");
    document.getElementById("quiz-intro").classList.remove("hidden");
}

// Return to Category Selection
function returnToCategories() {
    document.getElementById("leaderboard-area").classList.add("hidden");
    document.getElementById("quiz-intro").classList.remove("hidden");
}

// Timer Functionality
function resetTimer() {
    clearInterval(timer);
    timeLeft = 30;
    timeElement.innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Night Mode Toggle
function toggleNightMode() {
    document.body.classList.toggle("night-mode");
}

// Shuffle Array Function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

