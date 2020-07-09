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

function generateQuestionPageTemplate() {
  // this function will return the HTML template for the next question
  return `<div class="quiz-container">
          <div>
          <h2>
          <p>${question.question}</p>
          </h2>
          </div>
          <div>
          <form class ="quiz-form">
          <p> What is your answer? </p>
          <input type="radio" name = "ans" value="">${question.answers[0]}</br>
          <input type="radio" name = "ans" value="">${question.answers[1]}</br>
          <input type="radio" name = "ans" value="">${question.answers[2]}</br>
          <input type="radio" name = "ans" value="">${question.answers[3]}</br>
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
          <button>Next Question</button>
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
          <button>Next Question</button>
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
  $("main").html(homePageTemplate);
  alert("i work")
}

$(renderQuizPage)





