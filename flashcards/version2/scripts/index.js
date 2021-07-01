//declare a question object
class question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
};

// Declare a new array
let myFlashcards = [];
 
// Create three questions and push them onto the myFlashcards array
myFlashcards.push(new question('How many inches are there in a mile?', '63,360'));
myFlashcards.push(new question('How many ounces are there in a pound?', '16'));
myFlashcards.push(new question('How many pounds are there in a ton?', '2,000'));

let count = 0;

//Function to display the question on the webpage
function displayQuestions(i) {
  //remove the answer from the previous question
  document.getElementById("answer").innerHTML = '';
  
  //if we haven't reached the end of the array...
  if (count < myFlashcards.length) {
    //update the instructions
    document.getElementById("instructions").innerHTML = "Click the question to see the answer!";
    
    //display the question
    document.getElementById("question").innerHTML = myFlashcards[i].question;
  }
  
  //if we have reached the end of the array
  else {
    //update instructions
    document.getElementById("instructions").innerHTML = "All Done!";
    
    //remove question text and exit iteration
    document.getElementById("question").innerHTML = "";
    return;
  }
}

//function to display the answer (called when the user clicks on the text of a question)
function displayAnswer(i) {
  //display the answer and increment the count
  document.getElementById("answer").innerHTML = myFlashcards[i].answer;
  ++count;
  
  //update the instructions and call nextQuestion() - necessary now that the iteration only continues if you click on the text of the question
  document.getElementById("instructions").innerHTML = "Click anywhere to see the next question!";
  document.querySelector('html').onclick = function() {nextQuestion();}
}

//function to call displayQuestion after displaying the answer
function nextQuestion() {
  document.querySelector('html').onclick = function() {displayQuestions(count);}
}

//set instructions when the webpage is opened
document.getElementById("instructions").innerHTML = "Click Anywhere to Begin!";

//display the first question when the user clicks on the page
document.querySelector('html').onclick = function() {displayQuestions(count);}
