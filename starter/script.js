var body = document.body;
var h1El = document.createElement("h1");
//getElementById?
var tag = document.createElement("div");
var h2El = document.createElement ("h2");
//var buttonEl = document.createElement("div");
var favoriteEl = document.createElement("div");
var timerbox = document.getElementById("time");
h1El.textContent = "Coding Quiz Challenge";
h2El.textContent = "All done!"

var startScreen = document.getElementById("start-screen")
var questionsLog = document.getElementById("questions")


tag.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
//buttonEl.textContent = "Start", Start Quiz. (This is a display element)
var btn = document.getElementById("start")
btn.addEventListener("click", function Start() {
  // let Start = document.getElementById("Start Quiz");
  // btn.innerHTML = "Start Quiz"
  startScreen.classList.add("hide");
  questionsLog.classList.remove("hide");
  timer()
  questionsReveal()

  endScreen.classList.add("hide")

})




let choicesEl = document.getElementById("choices")

let questions = [{ question: "In what year was penicillin discovered?", answers: ["1914", "1930", "1941", "1928"], correctAnswer: 4 },
{ question: "____ discovered penicillin.", answers: ["Alexander Fleming", "Howard Florey", "Ernst Boris Chain", "Albert Einstein"], correctAnswer: 1 },
{ question: "What percentage of the population are allergic to penicillin?", answers: ["20%", "50%", "up to 10%", "Less than 1%"], correctAnswer: 3 },
{ question: "Penicillin belongs to a group of drugs known as...", answers: ["Antifungals", "Antibiotics", "Pain killers", "Anti-aging"], correctAnswer: 2 },

]

let currentQuestion = 0;
//render
let btnchoice1 = document.getElementById("next1");
let btnchoice2 = document.getElementById("next2");
let btnchoice3 = document.getElementById("next3")
let btnchoice4 = document.getElementById("next4");

function questionsReveal() {

  document.querySelector("#question-title").textContent = questions[currentQuestion].question

  console.log(questions[currentQuestion].answers[0]);
  console.log(questions[currentQuestion].answers[1]);
  console.log(questions[currentQuestion].answers[2]);
  console.log(questions[currentQuestion].answers[3]);

  btnchoice1.textContent = questions[currentQuestion].answers[0]
  btnchoice2.textContent = questions[currentQuestion].answers[1]
  btnchoice3.textContent = questions[currentQuestion].answers[2]
  btnchoice4.textContent = questions[currentQuestion].answers[3]
}


choicesEl.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    console.log(event.target.getAttribute("data-index"))

  }

})

function timer() {
  let time = 120;
  let interval = setInterval(function (event) {
    time--
    console.log(time);

    timerbox.textContent = time;
    if (time === 0) {
      clearInterval(interval)
    }


  }, 1000);

}

let endScreen = document.getElementById("end-screen")

