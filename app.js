'use strict';

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
  alert("i work")
}

$(renderQuizPage)
