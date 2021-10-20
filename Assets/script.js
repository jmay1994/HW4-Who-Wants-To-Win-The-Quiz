var quizStart = document.querySelector("#quizStart");


var useranswer = document.querySelector("#user-answer");
var q1InputTrue = document.querySelector("#q1true");
var q1InputFalse = document.querySelector("#q1false");
var q2InputTrue = document.querySelector("#q2true");
var q2InputFalse = document.querySelector("#q2false");
var inputtedInitials = document.querySelector("#initials");
var timerEl = document.querySelector("#timer");
//need to add losses and wins queryselectors
var totalpoints = 0;
var totalseconds = 75;
var totalwins = 0;
var totallosses = 0;
var highscores = [];
const answerkeyarray = ["True", "False", "False"];
const questionarray = [
  "Does 2+2=4?",
  "Does 4*5=16?",
  "Are you a math teacher?",
];

var questions = [{
    question: "Does 2+2=4?",
    choices: ["True","False"],
    correctAnswer: 0,
},
{question: "Does 4*5=16?",
choices: ["True","False"],
correctAnswer: 1,}];
function quizInitiate() {
  if (quizStart === "YES!" || "Yes" || "YES" || "yes") {
    startTimer() {
      for (let i = 0; i < 3; i++) {
        //4 in line of code above is the count of questions. must be updated to match question count for game to properly end when not time based
        if questions[i].correctAnswer === points
      }


function namescore() {
  highscores.push(inputtedInitials);
  //need to work on localStorage
  localStorage.setItem(highscores);
  localStorage.getItem(highscores);
  highscores.sort;
}

function startTimer() {
  var seconds = 1000;
  var secondsLeft = 10;
  var internval = setInterval(function () {
    if (secondsLeft > 0) {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
    } else {
      clearInterval(interval);
      lose();
    }
  }, 1 * seconds);
}
function lose() {
  totallosses++;
  namescore();
}
function win() {
  totalwins++;
  namescore();
}

function daQuiz (){
    const finaloutput = [];
    myQuestions.forEach(
        
    )
}