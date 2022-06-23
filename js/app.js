/*  File: app.js
    Date: 2022-06-21
    Author: Mary K
*/
"Use strict";

// var userInput;
// var foodsILike

function initialize(){
console.log ("in initialize()");
// userName();
// favActivities();
// favFood();
// nationality();
// degree();
// beach();
    }

var increaseScore=0

function playGame() {
    let questions=[
        ["Do I like to run ?", "no"],
        ["Out of my favorite food is pizza on there?", "yes"],
        ["Was I born in the continent of America?", "no"],
        ["Did I receive and Applied Associates from Kirkwood?", "no"],
        ["Based on what you know about me, would you guess I like the beach?", "yes"] 
    ] 
    let score=0;
    for(let i = 0; i < questions.length; i++) {
        let userAnswer=prompt(questions[i][0]).toLowerCase();
        if(userAnswer === questions[i][1]) {
            increaseScore++;
            alert('Correct!, ' + increaseScore);

            console.log('correct')
            } else {
            alert('InCorrect!');
            console.log('incorrect');
           }
        }
    

        }




       


// function userName () {
//      userInput = prompt('What is your name ?');
//       console.log('username',userName);
     
//    }
//    // userName ();
// //document.write('Hi' + userInput + 'thank you for visiting my page. Enjoy!' )
// let greetingSpan= document.getElementById('greetingSpan');
// greetingSpan.innerHTML='Hi '+ userInput +' thanks for visiting my page. Enjoy!';
   
   


// function favActivities(){
//     let activities= prompt("Do I like to run ?");
//    // let answer 
//     if(activities.toLowerCase()=== "yes") {
//    //console.log("Good Job");
//    alert( "You are Incorrect");
//   }else if(activities.toLowerCase()==="no"){
//     //console.log("AMAZING!")
//     alert("AMAZING, you know me so well already!");
// } else{
//     alert("Are you sure you want to know about me?")
// }
// }
// //favActivities();

// function favFood(){
//     let food =prompt("Out of my favorite food is pizza on there?");
//     if(food.toLowerCase()==="yes") {
//         //console.log (It is?, amazing I love pizza!)
//     alert("it is?, amazing I love pizza!");
//  }else if(food.toLowerCase()==="no"){
//     //console.log(hmmm really? You should go back and take a look again.)
//     alert("hmmm really? You should go back and take a look again.");
//  }else{
//     alert("Go and check, im sure you'll find your answer")
//  }
// }
// //favFood();


// function nationality(){
//     let nationality =prompt("Was I born in the continent of America?");
//     if(nationality.toLowerCase()==="yes") {   
//     alert("I was made in Africa");
//  }else if(nationality.toLowerCase()==="no"){
//     alert("you are correct.");
//  }else{
//     alert("Huh?")
//  }
// }
// // nationality();

// function degree(){
//     let degree= prompt("Did I receive and Applied Associates from Kirkwood?");
//     if (degree.toLowerCase()==="yes"){
//         alert("It was an associates of applied science");   
//     }else if(degree.toLowerCase()==="no"){
//         alert("Correct");
//     }else{
//         alert("I don't know what you said but it was definitely not a degree in that");
//     }
// }
// // degree();

// function beach(){
//     let beach= prompt("Based on what you know about me, would you guess I like the beach?")
//     if (beach.toLowerCase()==="yes"){
//         alert("of course I love the beach");    
//     }else if (beach.toLowerCase()==="no"){
//         alert("incorrect");
//     }else{
//         alert("hmm interesting");
//     }
// }
// //#2 
// /*let question ="How Many?";// define question
// let goalAnswer= 10;//arbitrary correct answer
// let finished = false; //success flag
// let maxAttempts = 4;//maximum number of attempts
// let currentAttempts= 0;//initialize the loop variable
// currentAttempts++; //increment the loop condiion variable
// while(currentAttempts < maxAttempts && !finished){
// let answer= prompt(question);
// let realAnswer= parseInt(answer);//how to convert string to number is parseInt
// // indicating through alert if guess is too high or low
// let goalAnswer=10; //arbitrary correct answer
// let output="";
// if (realAnswer > goalAnswer) {
//  output="Too high"; // so you only have to do an alert once(bottom of function alert(output);)
// } else if (realAnswer < goalAnswer){

// }else {
//     output= "Correct!;"
//     finished = true; //completion flag
// }
// alert(output);
// }
// */
// let question= "Guess a number between 1 and 10?";
// let actualAnswer = 8;
// let finished = false;
// let maxAttempts= 4;
// let currentAttempts=0;
// while(currentAttempts < maxAttempts && !finished){
//     currentAttempts++
//     let answer = prompt(question);
//     let realAnswer = parseInt(answer);
//     let output = "Good Job";
//     if (realAnswer > actualAnswer){
//         output = "Too high";
//     }else if (realAnswer < actualAnswer){
//         output= "Too low";
//     }else{
//         output="Correct!";
//         finished = true;    
//     }
//     alert(output);
// }
// //Add a 7th question that has multiple possible correct answers that are stored in an array.
// let ask =("Name a couple of my favorite foods")
// let Arrayfood=["Frenchfries", "Pizza","Popcorn"];
// let correctAnswer= [0,1];
// let maxiAttempts =6;
// let Currattempts = 0;
// done = false
// //Give the user 6 attempts to guess the correct answer.
// for(let i=0; i < maxiAttempts && !done; i++){
//      answer = prompt (ask)
//     answer= answertoLowerCase
//     alert(" try again")
//     if (Arrayfood.includes(correctAnswer)){
//         alert("correct")
//         done = true      
//     }
//     alert(response)
// }
// alert("Here is your score!")
// alert ("My favorite:"+ foodsILike.toString ())
        /*prompt("Correct " + foodQuestion[i][1]);
        correctAnswer++;
    }
    else {
      /  prompt ("Incorrect, the correct answer was "+ foodQuestion[0,1]);
    }
}

//The guesses will end once the user guesses a correct answer or they run out of attempts.
//Display all the possible correct answers to the user.
/*Consider using a loop of some sort for this question.*/