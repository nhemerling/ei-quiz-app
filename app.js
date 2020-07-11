'use strict';
//ANSWER KEY IS FINISHED
const answerKey = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What Disaster happened in August of 2020?',
      answers: [
        'Jello factory explosion',
        'Alien invasion',
        'Solar flares',
        'Tiny frogs jam up highway trucking systems'
      ],
      correctAnswer: 'Tiny frogs jam up highway trucking systems'
    },
    {
      question: 'What Disaster happened in September of 2020?',
      answers: [
        'Aliens steal the pyramids',
        'Killer bees take over france',
        'World wide coffee shortages',
        'Nation wide paper shortage'
      ],
      correctAnswer: 'World wide coffee shortages'
    },
    {
      question: 'What Disaster happened in October of 2020?',
      answers: [
        'Timmys mom runs out of coffee',
        'Timmys mom yells at timmy',
        'Timmy drops icecream on stonehenge',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      question: 'What Disaster happened in November of 2020?',
      answers: [
        'Locusts eat all the cats',
        'Chickens stop laying eggs',
        'Timmys icecream opens a wormhole in stonehenge',
        'Cows stop producing milk'
      ],
      correctAnswer: 'Timmys icecream opens a wormhole in stonehenge'
    },
    {
      question: 'What Disaster happened in December of 2020?',
      answers: [
        'Ramen goes out of business',
        'Java finally installs',
        'Jets win the Superbowl early',
        'Capuchin monkeys traverse the wormhole and reveal the illuminati'
      ],
      correctAnswer: 'Capuchin monkeys traverse the wormhole and reveal the illuminati'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  finalImage: '<img class="image2" src="images/monkey-angry.jpg" alt="Angry-little-monkey.jpg"></img>'
};

//TEMPLATES ARE COMPLETE
function homePageTemplate() {
  // this function will return the HTML template for the home page
  return `<div class="container">
            <div class="img-container">
            <img class="image" src="images/monkey-title-image.jpg" alt="Capuchin Monkey sticking its tongue out">
            </div>
            <div>
            <button class="start-quiz">Start Quiz</button>
            </div>
          </div>`;
}

function questionPageTemplate() {
  // this function will return the HTML template for the next question
  const question = answerKey.questions[answerKey.questionNumber];
  return `<div class ="container">
            <div class="quiz-container">
              <div>
              <h2>
              <p>${question.question}</p>
              </h2>
              </div>
              <div>
              <form id="quiz-form">
<<<<<<< HEAD
              <p> What is your answer? </p>
              <input type="radio" name = "ans" value="${question.answers[0]}" checked> ${question.answers[0]}</br>
              <input type="radio" name = "ans" value="${question.answers[1]}">  ${question.answers[1]}</br>
              <input type="radio" name = "ans" value="${question.answers[2]}">  ${question.answers[2]}</br>
              <input type="radio" name = "ans" value="${question.answers[3]}">  ${question.answers[3]}</br>
              <button type="submit">Submit!</button>
=======
              <input type="radio" name = "ans" value="${question.answers[0]}" checked>${question.answers[0]}</br>
              <input type="radio" name = "ans" value="${question.answers[1]}">${question.answers[1]}</br>
              <input type="radio" name = "ans" value="${question.answers[2]}">${question.answers[2]}</br>
              <input type="radio" name = "ans" value="${question.answers[3]}">${question.answers[3]}</br>
              <div><button type="submit">Submit!</button></div>
>>>>>>> 498a711748f7bcc46328ad331fbed84658dec8b4
              </form>
              </div>
            </div>
            <div class="score">
              <h3>Current Score: ${answerKey.score}/5<h3>
            </div>
          </div>`
};



function correctAnswerPageTemplate() {
  // this function will return the HTML template for if the user answered
  // the question correctly
  return `<div class="container">
              <div class="quiz-container">
              <div>
              <h2>Hooray! That's the correct answer.</h2>
              <p>Move along to the next question.</p>
              </div>
              <div>
              <button class="next-question">Next</button>
              </div>
            </div>
            <div class="score">
              <h3>Current Score: ${answerKey.score}/5<h3>
              </div>
          </div>`;
}

function wrongAnswerPageTemplate() {
  // this function will return the HTML template for if the user answered
  // the question incorrectly
  return `<div class="container">
            <div class="quiz-container">
              <div>
              <h2>NOPE!</h2>
              <p>Looks like you don't know your history of the latter months of 2020.</p>
              <p>The correct answer was: ${answerKey.questions[answerKey.questionNumber].correctAnswer}</p>
              </div>
              <div>
              <button class="next-question">Next</button>
              </div>
            </div>
            <div>
              <h3>Current Score: ${answerKey.score}/5<h3>
              </div>
          </div>`;
}

function finalScorePageTemplate() {
  return `<div class="container">
            <div class="img-container final-image">
            ${answerKey.finalImage}
            </div>
            <div class="results">
            <h2>Great job! Here are your results.</h2>
            <h3>Final Score: ${answerKey.score}/5</h3>
            </div>
            <div>
            <button class="retake-quiz">Retake Quiz</button>
            </div>
          </div>`;
}

//********** RENDER FUNCTION(S) **********//

// This function conditionally replaces the contents of the <main> tag based on the state of the store//


function renderQuizPage() {
  // accepts the HTML template and inserts it into the DOM
  $("main").html(homePageTemplate);
  console.log('`renderQuizPage` ran');
}

/********** EVENT HANDLER FUNCTIONS **********/

function handleStartQuiz() {
  $('.container').on('click', '.start-quiz', event => {
    console.log('`handleStartClicked` ran');
    answerKey.quizStarted = true;
    console.log(answerKey.quizStarted);
    $("main").html(questionPageTemplate);
  });
}

function handleAnswerSubmit() {
  // this function will listen for when the start button is clicked
  $('main').on("submit", function(event) {
    event.preventDefault();
    console.log('`handleAnswerSubmit` ran');
    // find if the user got the question right or wrong
          
      const answer = answerKey.questions[answerKey.questionNumber].correctAnswer;
      const selectedAnswer = $('input[name="ans"]:checked').val();
      
      console.log(answer);
      console.log(selectedAnswer);
      
      if (selectedAnswer === answer){
              answerKey.score ++;
              $('main').html(correctAnswerPageTemplate);
              console.log("correct answer")
          }else{
            $('main').html(wrongAnswerPageTemplate);  
            console.log('wrong answer');
          } 
      });
  }

function handleNextQuestionCLicked() {
  // this function will listen for when the next question button is clicked
  $('main').on('click', '.next-question', event => {
    console.log('`handNextQuestionClicked` ran');
    // update question template with next question
    answerKey.questionNumber ++;
    // render it to the DOM
    if (answerKey.questionNumber < 5) {
      $("main").html(questionPageTemplate);
    } else {
      console.log("andleNextQuestionCLicked working");
      finalImageSwap();
      $("main").html(finalScorePageTemplate);
    }
  });
}

function handleRetakeQuizClicked() {
  // this function will listen for when the retake quiz button is clicked
  $('main').on('click', '.retake-quiz', event => {
    console.log('`handleRetakeQuizClicked` ran');
    location.reload(true);
    // render it to the DOM
    $(renderQuizPage);
  });
}

function finalImageSwap() {
  const winImage = '<img class="image2" src="images/monkey-happy.jpg" alt="Happy-little-monkey.jpg"></img>';
  if (answerKey.score === 5) {
    console.log("i work!");
    answerKey.finalImage = winImage;
  }
}

function main() {
  renderQuizPage();
  handleStartQuiz();
  handleAnswerSubmit();
  handleNextQuestionCLicked();
  handleRetakeQuizClicked();
  finalImageSwap();
}

$(main);
