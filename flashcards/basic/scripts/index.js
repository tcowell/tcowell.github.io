
class question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}
// Declare a new array
let myFlashcards = [];
 
// Create three questions and push them onto the quiz array
myFlashcards.push(new question('How many inches are there in a mile?', '63,360'));
myFlashcards.push(new question('How many ounces are there in a pound?', '16'));
myFlashcards.push(new question('How many pounds are there in a ton?', '2,000'));

// Loop through the array printing out the question and the answer
let i = 0;
txt = "";
while (i < myFlashcards.length)  {
  console.log(myFlashcards[i].question + ': ');
  let a = myFlashcards[i].answer;
  document.querySelector('html').onclick = function() {
    console.log(a + '\n');
  }
  ++i;
}

};
