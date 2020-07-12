'use strict';
//ANSWER KEY IS FINISHED
const answerKey = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What Disaster happened in August of 2020?',
      answers: [
        'Jello factory explosion.',
        'Alien invasion.',
        'Solar flares.',
        'Tiny frogs jammed up highway trucking systems.'
      ],
      correctAnswer: 'Tiny frogs jammed up highway trucking systems.'
    },
    {
      question: 'What Disaster happened in September of 2020?',
      answers: [
        'Aliens stole the pyramids.',
        'Killer bees took over France.',
        'World-wide coffee shortage.',
        'Nation wide paper shortage.'
      ],
      correctAnswer: 'World-wide coffee shortage.'
    },
    {
      question: 'What Disaster happened in October of 2020?',
      answers: [
        'Timmy\'s mom ran out of coffee.',
        'Timmy\'s mom yelled at timmy.',
        'Timmy dropped icecream on stonehenge.',
        'All of the above.'
      ],
      correctAnswer: 'All of the above.'
    },
    {
      question: 'What Disaster happened in November of 2020?',
      answers: [
        'Locusts ate all the cats.',
        'Chickens stopped laying eggs.',
        'Timmy\'s icecream opened a wormhole in stonehenge.',
        'Cows stopped producing milk.'
      ],
      correctAnswer: 'Timmy\'s icecream opened a wormhole in stonehenge.'
    },
    {
      question: 'What Disaster happened in December of 2020?',
      answers: [
        'Ramen went out of business.',
        'Java finally installed.',
        'Jets win the Superbowl early.',
        'Capuchin monkeys traversed the wormhole and revealed the illuminati.'
      ],
      correctAnswer: 'Capuchin monkeys traversed the wormhole and revealed the illuminati.'
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
                <h2>${question.question}</h2>
              </div>
              <div>
                <form id="quiz-form">
                  <input type="radio" name = "ans" value="${question.answers[0]}" checked>${question.answers[0]}</br>
                  <input type="radio" name = "ans" value="${question.answers[1]}">${question.answers[1]}</br>
                  <input type="radio" name = "ans" value="${question.answers[2]}">${question.answers[2]}</br>
                  <input type="radio" name = "ans" value="${question.answers[3]}">${question.answers[3]}</br>
                  <div class="submit-button">
                    <button type="submit">Submit!</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="score">
              <h3>Current Score: ${answerKey.score}/5</h3>
            </div>
          </div>`
};

function correctAnswerPageTemplate() {
  // this function will return the HTML template for if the user answered
  // the question correctly
  return `<div class="container">
            <div class="quiz-container">
              <div>
                <h2>You really know your stuff, eh?</h2>
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
                <h2>That's not what happened in the latter half of the year 2020!</h2>
                <p>The correct answer was: ${answerKey.questions[answerKey.questionNumber].correctAnswer}</p>
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

function finalScorePageTemplate() {
  return `<div class="container final-container">
            <div class="img-container final-image">
              ${answerKey.finalImage}
            </div>
            <div class="results">
              <h2>Final Score: ${answerKey.score}/5</h2>
              <h3>We had fun in 2020, didn't we?</h3>
            </div>
            <div>
              <button class="retake-quiz">Retake Quiz</button>
            </div>
          </div>`;
}

//********** RENDER FUNCTION(S) **********//

// This function conditionally replaces the contents of the <main> tag based on the state of the store//


function loadQuizPage() {
  // accepts the HTML template and inserts it into the DOM
  $("main").html(homePageTemplate);
  console.log('`loadQuizPage` ran');
}

/********** EVENT HANDLER FUNCTIONS **********/

function beforeStartQuiz() {
  console.log('`beforeStartClicked` ran');
  $('.container').on('click', '.start-quiz', event => {
    answerKey.quizStarted = true;
    console.log(answerKey.quizStarted);
    $("main").html(questionPageTemplate);
  });
}

function beforeAnswerSubmit() {
  // this function will listen for when the start button is clicked
  console.log('`beforeAnswerSubmit` ran');
  $('main').on("submit", function(event) {
    event.preventDefault();
    // find if the user got the question right or wrong    
    const answer = answerKey.questions[answerKey.questionNumber].correctAnswer;
    const selectedAnswer = $('input[name="ans"]:checked').val(); 
    console.log(answer);
    console.log(selectedAnswer);
    let outputFunction = correctAnswerPageTemplate
    if (selectedAnswer === answer){
      answerKey.score ++;
      console.log("correct answer")
    }else{
      outputFunction = wrongAnswerPageTemplate
      console.log('wrong answer');
    } 
    $('main').html(outputFunction());
  });
}

function beforeNextQuestionCLicked() {
  // this function will listen for when the next question button is clicked
  console.log('`beforeNextQuestionClicked` ran');
  $('main').on('click', '.next-question', event => {
    // update question template with next question
    answerKey.questionNumber ++;
    // render it to the DOM
    if (answerKey.questionNumber < 5) {
      $("main").html(questionPageTemplate);
    } else {
      finalImageSwap();
      $("main").html(finalScorePageTemplate);
    }
  });
  console.log("afterNextQuestionCLicked working");
}

function beforeRetakeQuizClicked() {
  // this function will listen for when the retake quiz button is clicked
  $('main').on('click', '.retake-quiz', event => {
    location.reload(true);
    // render it to the DOM
    console.log('`retakeQuizClicked` ran');
    renderQuizPage();
  });
  console.log('`beforeRetakeQuizClicked` ran');
}

function finalImageSwap() {
  const winImage = '<img class="image2" src="images/monkey-happy.jpg" alt="Happy-little-monkey.jpg"></img>';
  if (answerKey.score === 5) {
    console.log("i work!");
    answerKey.finalImage = winImage;
  }
}
 
function onDocumentReady() {
  loadQuizPage();
  beforeStartQuiz();
  beforeAnswerSubmit();
  beforeNextQuestionCLicked();
  beforeRetakeQuizClicked();
  finalImageSwap();
};

$(onDocumentReady);
