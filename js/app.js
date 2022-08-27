/*  File: app.js
    Date: 2022-06-21
    Author: Mary K
*/
'Use strict';


function initialize(){
  console.log ('in initialize()');
  userName();

}

let increaseScore=0;

function playGame() {
  let questions=[
    ['Do I like to run ?', 'no'],
    ['Out of my favorite food is pizza on there?', 'yes'],
    ['Was I born in the continent of America?', 'no'],
    ['Did I receive and Applied Associates from Kirkwood?', 'no'],
    ['Based on what you know about me, would you guess I like the beach?', 'yes']
  ];
  let score=0;
  for(let i = 0; i < questions.length; i++) {
    let userAnswer=prompt(questions[i][0]).toLowerCase();
    if(userAnswer === questions[i][1]) {
      increaseScore++;
      alert('Correct!, ' + increaseScore);

      console.log('Good Job!');
    } else {
      alert('ehh wrong!');
      //console.log('Nope,sorry');
    }
  }


}







function userName () {
  let userInput = prompt('What is your name ?');
  //console.log('username',userName);
  let greetingSpan= document.getElementById('greetingSpan');
  greetingSpan.innerHTML='Hi '+ userInput +' thanks for visiting my page. Enjoy!';

}



function demoArrays() {
  let question='Guess a number between 1 and 10?';
  let actualAnswer = 8;
  let finished = false;
  let maxAttempts= 4;
  let currentAttempts=0;
  while(currentAttempts < maxAttempts && !finished){
    currentAttempts++;
    let answer = prompt(question);
    let realAnswer = parseInt(answer);
    let output = 'Good Job';
    if (realAnswer > actualAnswer){
      output = 'Too high';
    }else if (realAnswer < actualAnswer){
      output= 'Too low';
    }else{
      output='Correct!';
      finished = true;
    }
    alert(output);
  }
}
