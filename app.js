'use strict';

const answerKey = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What Disaster happened in August of 2020?',
      answers: [
        'Jello factory explosion',
        'Alien invasion',
        'solar flares',
        'tiny frogs jam up highway trucking systems'
      ],
      correctAnswer: 'tiny frogs jam up highway trucking systems'
    },
    {
      question: 'What Disaster happened in September of 2020?',
      answers: [
        'aliens steal the pyramids',
        'killer bees take over france',
        'world wide coffee shortages',
        'nation wide paper shortage'
      ],
      correctAnswer: 'world wide coffee shortages'
    },
    {
      question: 'What Disaster happened in October of 2020?',
      answers: [
        'timmys mom runs out of coffee',
        'timmys mom yells at timmy',
        'timmy drops icecream on stonehenge',
        'all of the above'
      ],
      correctAnswer: 'all of the above'
    },
    {
      question: 'What Disaster happened in November of 2020?',
      answers: [
        'locusts eat all the cats',
        'chickens stop laying eggs',
        "timmy's icecream opens a wormhole in stonehenge",
        'cows stop producing milk'
      ],
      correctAnswer: "timmy's icecream opens a wormhole in stonehenge"
    },
    {
      question: 'What Disaster happened in December of 2020?',
      answers: [
        'ramen goes out of business',
        'Java finally installs',
        'Jets win the Superbowl early',
        'capuchin monkeys traverse the wormhole and reveal the illuminati'
      ],
      correctAnswer: 'capuchin monkeys traverse the wormhole and reveal the illuminati'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};


function renderQuizPage() {
  $("main").append(
  `<div class="container">
  <div class="img-container">
  <img class="image" src="images/monkey-title-image.jpg" alt="Capuchin Monkey sticking its tongue out">
  </div>
  <div class="quiz-container">
  <button>Start Quiz</button>
  </div>
  </div>`);
}


$(renderQuizPage)