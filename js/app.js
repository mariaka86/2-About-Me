/* File: app.js
Date: 06/21/2022
Author: Mary K
*/

function userName () {
     userInput = prompt('What is your name ?');
      console.log('username',userName);
     
   }
    userName ();
//document.write('Hi' + userInput + 'thank you for visiting my page. Enjoy!' )
let greetingSpan= document.getElementById('greetingSpan');
greetingSpan.innerHTML='Hi '+ userInput +' thanks for visiting my page. Enjoy!';
   
   


function favActivities(){
    let activities= prompt("Do I like to run ?");
   // let answer 
    if(activities.toLowerCase()=== "yes") {
   //console.log("Good Job");
   alert( "You are Incorrect");
  }else if(activities.toLowerCase()==="no"){
    //console.log("AMAZING!")
    alert("AMAZING, you know me so well already!");
} else{
    alert("Are you sure you want to know about me?")
}
}
favActivities();

function favFood(){
    let food =prompt("Out of my favorite food is pizza on there?");
    if(food.toLowerCase()==="yes") {
        //console.log (It is?, amazing I love pizza!)
    alert("it is?, amazing I love pizza!");
 }else if(food.toLowerCase()==="no"){
    //console.log(hmmm really? You should go back and take a look again.)
    alert("hmmm really? You should go back and take a look again.");
 }else{
    alert("Go and check, im sure you'll find your answer")
 }
}
favFood();


function nationality(){
    let nationality =prompt("Was I born in the continent of America?");
    if(nationality.toLowerCase()==="yes") {   
    alert("I was made in Africa");
 }else if(nationality.toLowerCase()==="no"){
    alert("you are correct.");
 }else{
    alert("Huh?")
 }
}
nationality();

function degree(){
    let degree= prompt("Did I receive and Applied Associates from Kirkwood?");
    if (degree.toLowerCase()==="yes"){
        alert("It was an associates of applied science");   
    }else if(degree.toLowerCase()==="no"){
        alert("Correct");
    }else{
        alert("I don't know what you said but it was definitely not a degree in that");
    }
}
degree();

function beach(){
    let beach= prompt("Based on what you know about me, would you guess I like the beach?")
    if (beach.toLowerCase()==="yes"){
        alert("of course I love the beach");    
    }else if (beach.toLowerCase()==="no"){
        alert("incorrect");
    }else{
        alert("hmm interesting");
    }
}
beach();