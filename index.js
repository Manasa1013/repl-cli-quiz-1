//ex_07 functions
var readLineSync =require("readline-sync")


//arrays 
// var groceryList = ['veggies', 'wheatpasta', 'spoons', 'masaala', "sauce"];
// for(var i=0;i<groceryList.length;i++)
  // console.log(groceryList[i])
// console.log(typeof(groceryList[2]) === typeof(groceryList[4]))
// console.log(groceryList[1] === groceryList[4])
 var score = 0;
 //ex_11 objects
 //first getting know question 
 console.log(("Welcome to short quiz\nDO YOU KNOW MANASA\nBefore we start, a small question :\n"));
 var userAnswerZero = readLineSync.question("What's Manasa's full name?\n")
 var name = "MANASA MANDALREDDY"
 if(userAnswerZero.toUpperCase() === name)
 console.log("You answered right :"+userAnswerZero)
 else{
   console.log("Manasa full name is: "+name)
 }
 console.log("Let's dive into Do You know Manasa!!!\n-----------------------")



//function play takes question and compares with set answer(an arg) 
//  and modifies score accordingly
function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right\n:) ");
    score++;
  }
  else{
    console.log("Oops!! you didn't get it right\n");
  }
  console.log("Score now is: "+score);
  console.log("---------------------");
}
var chooseQuestionOne = {
  question: {
    que: "3)Which food is most liked by Manasa?\na) jalebi\nb) chicken\nc) noodles\nd) everything and anything\n",
    an : "everything and anything"},
  answer : "d",
}

var chooseQuestionTwo = {
  question: {
    que: "4)Which tourist spot does Manasa like?\na)MOuntains\nb) Beach\nc)Hill station\nd)Everything\n",
    an : "Everything"},
  
  answer : "d"
}

var chooseQuestionThree = {
  question: {
    que : "5)What kind of games does Manasa like?\na) Hockey\nb) Cricket\nc)Tennis\nd)Not specific\n",
    an : "Not specific"},
  
  answer : "d"
}
var chooseQuestionFour = {
  question : {
    que : "6)Which super power Manasa wish to have?\na)super power to pour vaccine on humans similar to pesticides spraying\nb) improve  hair thickness\nc)power to control minds\nd)Become like gulliver and travel the circuits in the phone \ne)none",
    an : "none"
  },
  answer : "e"
}

//straight quesns
var questionOne = {
	question: 
		'1) Can you guess Manasa\'s age?\n'
	,
	answer: '22'
};
var questionTwo = {
	question: '2)Where does Manasa live ?\n',
	answer: 'Hyderabad'
};
//choose is for giving options and take correct answer
function choose(question,answer){
  var userAnswer = readLineSync.question(question.que+"\n")

  if(userAnswer.toLowerCase() === answer.toLowerCase() || userAnswer.toLowerCase() ===  question.an.toLowerCase()){
    console.log("You are right\n:) ");
    score++;
  }
  else{
    console.log("Oops!! you didn't get it right");
  }
  console.log("Score now is: "+score);
  console.log("---------------------------")

   
}
//calling play(x,y) 5 times with above questions, with two args 

//LETS PUT IT RANDOMLY SELECTING questions
//SEE VIDEO AGAIN ...LAST ENDING,HOW TO PUT INTO arrays
//SEE HOW TO SHARE EVEN IN THE VIDEO
//
var questionListArray = [questionOne,questionTwo]
var chooseListArray = [chooseQuestionOne,chooseQuestionTwo,chooseQuestionThree,chooseQuestionFour]
for(var i=0;i<questionListArray.length;i++){
    (play(questionListArray[i].question,questionListArray[i].answer))
}
for(var i=0;i<chooseListArray.length;i++){
  (choose(chooseListArray[i].question,chooseListArray[i].answer))
}
