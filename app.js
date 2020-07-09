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
  score: 0
};

//TEMPLATES ARE COMPLETE
function homePageTemplate() {
  // this function will return the HTML template for the home page
  return `<div class="container">
          <div class="img-container">
          <img class="image" src="images/monkey-title-image.jpg" alt="Capuchin Monkey sticking its tongue out">
          </div>
          <div class="quiz-container">
          <button class="start-quiz">
          <span class="button-label">Start Quiz</span>
          </button>
          </div>
          </div>`;
}

function questionPageTemplate() {
  // this function will return the HTML template for the next question
  const question = answerKey.questions[answerKey.questionNumber];
  return `<div class="quiz-container">
          <div>
          <h2>
          <p>${question.question}</p>
          </h2>
          </div>
          <div>
          <form id="quiz-form">
          <p> What is your answer? </p>
          <input type="radio" name = "ans" value="${question.answers[0]}">${question.answers[0]}</br>
          <input type="radio" name = "ans" value="${question.answers[1]}">${question.answers[1]}</br>
          <input type="radio" name = "ans" value="${question.answers[2]}">${question.answers[2]}</br>
          <input type="radio" name = "ans" value="${question.answers[3]}">${question.answers[3]}</br>
          <button type="submit">Submit!</button>
          </form>
          </div>
          </div>`;
}

function correctAnswerPageTemplate() {
  // this function will return the HTML template for if the user answered
  // the question correctly
  return `<div>
          <div>
          <h2>Hooray! That's the correct answer.</h2>
          <p>Move along to the next question.</p>
          </div>
          <div>
          <button class="next-question">Next Question</button>
          </div>
          </div>`;
}

function wrongAnswerPageTemplate() {
  // this function will return the HTML template for if the user answered
  // the question incorrectly
  return `<div>
          <div class="quiz-container">
          <h2>NOPE!</h2>
          <p>Looks like you don't know your history of the latter months of 2020.</p>
          <p>The correct answer was: d. All of the above.</p>
          </div>
          <div>
          <button class="next-question">Next Question</button>
          </div>
          </div>`;
}

function finalScorePageTemplate() {
  // this function will return the HTML template for the final score page
  // it will return a different monkey image depending on the user's score
  // if score > 3, happy monkey
  // else, angry monkey
  return `<div class="container">
          <div class="img-container">
          <img class="image" src="images/monkey-happy.jpg" alt="Grinning capuchin monkey on black background.">
          </div>
          <div class="quiz-container">
          <h2>Great job! Here are your results.</h2>
          <h3>Score: 3/5</h3>
          </div>
          <div>
          <button>Retake Quiz</button>
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

<<<<<<< HEAD


function renderNextPage(template) {
  // accepts the HTML for the next page and inserts it into the DOM
  $('main').html(template);
}


=======
>>>>>>> 4f8a54d92fdb4781bc076b602e0d9f5d0e7ae37d
/********** EVENT HANDLER FUNCTIONS **********/
const correctCount = 0;
const quizNumberCount = 0;

function handleStartQuiz() {
  $('.quiz-container').on('click', '.start-quiz', event => {
    console.log('`handleStartClicked` ran');
    answerKey.quizStarted = true;
    console.log(answerKey.quizStarted);
    $("main").html(questionPageTemplate);
  });
}

function handleAnswerSubmit() {
  // this function will listen for when the start button is clicked
<<<<<<< HEAD
  $('main').on("submit", function(event) {
    event.preventDefault();
    console.log('`handleAnswerSubmit` ran');
    // find if the user got the question right or wrong
          if($('input[name="ans"]').prop('checked') == `${answerKey.questions.correctAnswer}`){
              alert('Yes!');
              correctCount ++; 
          }else{
              console.log('NOOOOOOOOO!');
          } 
      });
      
  }
    // find the HTML template for the right or wrong answer page depending

    // if the last question, find the template for the final score page
    //const nextPage = correctAnswerPageTemplate();
    // render it to the DOM
    //renderNextPage(nextPage);
  //});
//}
=======
  $('main').on('submit', function(event) {
    event.preventDefault();
    console.log('`handleAnswerSubmit` ran');
    // find if the user got the question right or wrong
    const userAns = $('input[name="ans"]').val();
    const currentQuest = answerKey.questions[answerKey.questionNumber];
    const currentAns = currentQuest.currentAnswer;
    console.log(userAns);
     // find the HTML template for the right or wrong answer page depending
    // if the last question, find the template for the final score page
    if (userAns === currentAns) {
      answerKey.score += 1;
      $('main').html(correctAnswerPageTemplate);
    } else {
      $('main').html(wrongAnswerPageTemplate);
    }
    // render it to the DOM
    $('main').html(correctAnswerPageTemplate);
  });
}

function handleNextQuestionCLicked() {
  // this function will listen for when the next question button is clicked
  $('main').on('click', '.next-question', event => {
    console.log('`handNextQuestionClicked` ran');
    // update question template with next question
    answerKey.questionNumber += 1;
    // render it to the DOM
    $("main").html(questionPageTemplate);
  });
}
>>>>>>> 4f8a54d92fdb4781bc076b602e0d9f5d0e7ae37d

function main() {
  renderQuizPage();
  handleStartQuiz();
  handleAnswerSubmit();
  handleNextQuestionCLicked();

}

$(main);
