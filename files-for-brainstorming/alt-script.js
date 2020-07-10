function renderQuizPage(nextTemplate) {
    // accepts the HTML template and inserts it into the DOM
    console.log('`renderQuizPage` ran');
    $('#main').html(nextTemplate);
  }
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)
  
  function handleStartQuiz() {
    // this function will listen for when the start button is clicked
    //and load the form page for the questions, starting with the first question
    $('.quiz-container').on('click', '.start-quiz' (event => {
      console.log('`handleStartClicked` ran');
      $(#"main").html(generateQuestionPageTemplate)
      // find the HTML template for the first question
      // and render it to the DOM
    }));
  }
  
  function handleAnswerSubmit() {
    // this function will listen for when the start button is clicked
    $('.quiz-form').submit(function(event) {
      event.preventDefault();
      console.log('`handleAnswerSubmit` ran');
      // find if the user got the question right or wrong
  
      // find the HTML template for the right or wrong answer page depending
  
      // if the last question, find the template for the final score page
  
      // render it to the DOM
      renderQuizPage();
    });
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

  function main() {
    renderQuizPage();
    handleStartClicked();
  }
  
  $(main());
  