function submitAnswers(){
    var total = 10;
    var score = 0;
//Get user input
    var q1 = document.forms["quizForm"] ["q1"].value;
    var q2 = document.forms["quizForm"] ["q2"].value;
    var q3 = document.forms["quizForm"] ["q3"].value;
    var q4 = document.forms["quizForm"] ["q4"].value;
    var q5 = document.forms["quizForm"] ["q5"].value;
    var q6 = document.forms["quizForm"] ["q6"].value;
	var q7 = document.forms["quizForm"] ["q7"].value;
	var q8 = document.forms["quizForm"] ["q8"].value;
	var q9 = document.forms["quizForm"] ["q9"].value;
    var q10 = document.forms["quizForm"] ["q10"].value;
// Validation
  for(var i = 1; i<= total; i++){
          if( eval('q' + i) == null || eval('q' + i) == ''){
        alert("Please Answer The Question " + i);
        return false;
    }
  }
    
    // correct answers
    var answers = ["a", "c", "c", "d", "c", "b", "b","b","c","c"]
    console.log()
    //check answer
    for(var i = 1; i<= total; i++){
        if(eval('q' + i) == answers [i - 1]){
            score++;
        }
    }
      alert('You scored ' + score + " out of " + total);
    //display results
    var results = document.getElementById('results');
    resutls.innerHTML= '<h3> You scored <span' + score + '</span> out of <span>' + total + '</span></h3>';
    
  
    
    return false;
}

var JSON = [{"question":"HTML stands for?","options":["Hyper Text Markup Language","High Text Markup Language","Hyper Tabular Markup Language"," None of these"],"answer":"Hyper Text Markup Language"},
					{"question":" which of the following tag is used to mark a begining of paragraph ?","options":["td","br","tr","p"],"answer":"p"},
					{"question":"From which tag descriptive list starts ?","options":["LL","DL","DS","DD"],"answer":"DL"},
					{"question":"Correct HTML tag for the largest heading is","options":["head","h6","heading","h1"],"answer":"h1"},
					{"question":"The attribute of form tag","options":["Method","Action","Both (a)&(b)","none of the above"],"answer":"Both (a)&(b)"},
					{"question":"Markup tags tell the web browser","options":["How to organise the page","How to display the page","How to display message box on page","None of these"],"answer":"How to display the page"},
					{"question":"www is based on which model?","options":["Local-server","Client-server","3-tier","None of these"],"answer":"Client-server"},
					{"question":"What are Empty elements and is it valid?","options":["No, there is no such terms as Empty Element","Empty elements are element with no data","No, it is not valid to use Empty Element","None of these"],"answer":" Empty elements are element with no data"},
					{"question":"Which of the following attributes of text box control allow to limit the maximum character?","options":["size","len","max length","all of these"],"answer":"max length"},
					{"question":"Web pages starts with which of the following tag?","options":["Body","Title","Html","Form"],"answer":"Html"}];
					console.log(JSON)

function muyh() {
 document.getElementById('qui').style.display='block';
 document.getElementById('hello').style.display='none';
 myTimer = setInterval(myCounter, 1000);
var fiveMinutes = 01 * 60,
       display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
 }
 var c = 0;
function myCounter() {
    document.getElementById("do").innerHTML = ++c;
}
function nextscore50() {
document.getElementById('finalcoop').style.display='block';
document.getElementById('qui').style.display='none';
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("TIME EXPIRED");
document.getElementById('qui').style.display='none';
document.getElementById('timeuppage').style.display='block';
        }
    }, 1000);
}
function tryagain() {
location.reload();
}