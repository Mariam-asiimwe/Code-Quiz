let choicesEl = document.querySelector("#choices")
let questions = [{question1: "In what year was penicillin discovered?", answers:["1914", "1930", "1941", "1928"], correctAnswer:4 },
{question2: "____ discovered penicillin.", answers:["Alexander Fleming", "Howard Florey", "Ernst Boris Chain", "Albert Einstein"], correctAnswer: 1},
{question3: "What percentage of the population are allergic to penicillin?", answers:["ans1", "ans2", "ans3", "ans4"], correctAnswer: 3},
{question4: "Fun question", answers:["ans1", "ans2", "ans3", "ans4"], correctAnswer:2},

]

let currentQuestion = 1;

document.querySelector("#question-title").textContent = questions[1].question1

console.log(questions[currentQuestion].answers[0])
console.log(questions[currentQuestion].answers[1])
console.log(questions[currentQuestion].answers[2])
console.log(questions[currentQuestion].answers[3])

choicesEl.addEventListener("click", function(event){
if(event.target.matches("button")){
console.log(event.target.getAttribute("data-index"))

}




})
