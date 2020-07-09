'use strict';

/**
 * Example store structure
 */
const store = {
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

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function homePageTemplate() {
  // // this function will return the HTML template for the home page
}

function generateQuestionPageTemplate() {
  // this function will return the HTML template for the next question
}

function correctAnswerPageTemplate() {
  // this function will return the HTML template for if the user answered  // the question correctly
}

function wrongAnswerPageTemplate() {
  // this function will return the HTML template for if the user answered
  // the question incorrectly
}

function finalScorePageTemplate() {
  // this function will return the HTML template for the final score page
  // it will return a different monkey image depending on the user's score
  // if score > 3, happy monkey
  // else, angry monkey
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuizPage() {
  // find the HTML template and 
  // insert it into the DOM
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartClicked() {
  // this function will listen for when the start button is clicked
  // find the HTML template for the first question
  // and render it to the DOM
}

function handleAnswerSubmit() {
  // this function will listen for when the start button is clicked
  // find if the user got the question right or wrong
  // find the HTML template for the right or wrong answer page depending
  // if the last question, find the template for the final score page
  // render it to the DOM
}

function handleNextQuestionCLicked() {
  // this function will listen for when the next question button is clicked
  // find the template for the next question
  // render it to the DOM
}

function handleRetakeQuizClicked() {
  // this function will listen for when the retake quiz button is clicked
  // find the template for the home page
  // render it to the DOM
}
