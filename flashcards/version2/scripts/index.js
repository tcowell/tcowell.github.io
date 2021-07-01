// create a question class
// constructor takes a question and an answer string
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
// function to display the questions to the console
function displayQuestions(i) {
  // only display the question if count is within the length of the array, otherwise return
  if (count < myFlashcards.length) {
    console.log(myFlashcards[i].question + ': ');
    
    //once the question is displayed, wait for a click to call displayAnswer
    document.querySelector('html').onclick = function() {
      displayAnswer(i);
    }
  }
  else {
    return;
  }
}

//function to display the question's answer
function displayAnswer(i) {
  console.log(myFlashcards[i].answer + '\n');
  
  // incremement the count and call displayQuestions again to move on to the next question
  ++count;
  document.querySelector('html').onclick = function() {displayQuestions(count);}
}

// call displayQuestions to start iterating through the flashcards array
document.querySelector('html').onclick = function() {displayQuestions(count);}
