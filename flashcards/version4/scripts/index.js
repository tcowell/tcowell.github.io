//question class, takes question, answer, and filepath for associated image
class question {
  constructor(question, answer, filepath) {
    this.question = question;
    this.answer = answer;
    this.picture = filepath;
  }
};
// Declare a new array
let myFlashcards = [];
 
// Create three questions and push them onto the myFlashcards array
myFlashcards.push(new question('How many inches are there in a mile?', '63,360', 'images/mile.jpg'));
myFlashcards.push(new question('How many ounces are there in a pound?', '16', 'images/pound.png'));
myFlashcards.push(new question('How many pounds are there in a ton?', '2,000', 'images/ton.jpg'));

//globally define a count for iteration
let count = 0;

//function to display the question
function displayQuestions(i) {
  //reset 'answer' to be blank
  document.getElementById("answer").innerHTML = '';
  
  //remove image from previous question
  if (i > 0) {
    img.parentNode.removeChild(img);
  }
  
  //if we are not at the end of the myFlashcards array
  if (count < myFlashcards.length) {
    //update the on-screen instructions and display the question
    document.getElementById("instructions").innerHTML = "Hover over the question to see the answer!";
    document.getElementById("question").innerHTML = myFlashcards[i].question;
  }
  //if we are at the end of the myFlashcards array
  else {
    //update instructions and reset 'question' to be blank
    document.getElementById("instructions").innerHTML = "All Done!";
    document.getElementById("question").innerHTML = "";
    return;
  }
}

//define a global image object with size 300x300
var img = document.createElement('img');
img.style.width = '300px';
img.style.height = '300px';

//function to display the answer
function displayAnswer(i) {
  //display the answer for the given question
  document.getElementById("answer").innerHTML = myFlashcards[i].answer;
  
  //display the image associated with the answer
  img.src = myFlashcards[i].picture;
  document.getElementById('body').appendChild(img);
  
  //update the instructions
  document.getElementById("instructions").innerHTML = "Click anywhere to see the next question!";
  
  //increase the count and call nextQuestion
  ++count;
  nextQuestion();
}

//function to display the next question on click
function nextQuestion() {
  document.querySelector('html').onclick = function() {displayQuestions(count);}
}

//set the instructions for the start of the 'quiz'
document.getElementById("instructions").innerHTML = "Click to Begin!";

//call displayQuestions on the first click
document.querySelector('html').onclick = function() {displayQuestions(count);}
