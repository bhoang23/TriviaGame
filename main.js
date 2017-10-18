function check (){
  
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

     if (question1 === "1994"){
     	correct++;
     }

     if (question2 === "aBathingApe") {
     	correct++;
     }

     if (question3 === "reiKawakubo") {
     	correct++;
     }

  var messages = ["Good Job!", "OK Job", "Good luck next time lol!"];
  var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];

  var score;

     if (correct < 1) {
      score =2;
     }

     if (correct === 2) {
      score = 1;
     }

     if (correct > 2){
      score = 0;
     }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("messages").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("pictures").src = pictures[score];

  }
}  