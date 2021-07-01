class question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
};
// Declare a new array
let myFlashcards = [];
 
// Create three questions and push them onto the quiz array
myFlashcards.push(new question('How many inches are there in a mile?', '63,360'));
myFlashcards.push(new question('How many ounces are there in a pound?', '16'));
myFlashcards.push(new question('How many pounds are there in a ton?', '2,000'));

// Loop through the array printing out the question and the answer
let count = 0;
function displayQuestions(i) {
  document.getElementById("answer").innerHTML = '';
  if (count < myFlashcards.length) {
    document.getElementById("instructions").innerHTML = "Hover over the question to see the answer!";
    document.getElementById("question").innerHTML = myFlashcards[i].question;
  }
  else {
    document.getElementById("instructions").innerHTML = "All Done!";
    document.getElementById("question").innerHTML = "";
    return;
  }
}
function displayAnswer(i) {
  document.getElementById("answer").innerHTML = myFlashcards[i].answer;
  ++count;
  document.getElementById("instructions").innerHTML = "Click anywhere to see the next question!";
  nextQuestion();
}

function nextQuestion() {
  document.querySelector('html').onclick = function() {displayQuestions(count);}
}

document.getElementById("instructions").innerHTML = "Click to Begin!";
document.querySelector('html').onclick = function() {displayQuestions(count);}
