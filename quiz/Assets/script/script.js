function check(){
    console.log('working');

//checking correct answer
var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;

var correct=0;

if(question1 == "Washington DC"){
    correct++;
}
if(question2 == "New Delhi"){
    correct++;
}
if(question3 == "Wellington"){
    correct++;
}

//message arrays depend on correct answers
var messages=['You really need to study more:)','Good job!','That is perfect!'];

var range;
if (correct<1){
    range=0;
}

if (correct>0 && correct<3){
    range=1;
}

if (correct>2){
    range=2;
}


document.getElementById("submitted").style.visibility='visible';

document.getElementById("number_correct").innerHTML='You got '+ correct + " correct!";
document.getElementById('message').innerHTML=messages[range];

}