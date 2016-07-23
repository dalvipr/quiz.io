/**
 * Created by dalvi on 7/20/2016.
 */


function submitAnswers() {
    var total = 10;
    var score = 0;

    //user input

    var q1 = document.forms["JavaScript-quiz"]["q1"].value;
    var q2 = document.forms["JavaScript-quiz"]["q2"].value;
    var q3 = document.forms["JavaScript-quiz"]["q3"].value;
    var q4 = document.forms["JavaScript-quiz"]["q4"].value;
    var q5 = document.forms["JavaScript-quiz"]["q5"].value;
    var q6 = document.forms["JavaScript-quiz"]["q6"].value;
    var q7 = document.forms["JavaScript-quiz"]["q7"].value;
    var q8 = document.forms["JavaScript-quiz"]["q8"].value;
    var q9 = document.forms["JavaScript-quiz"]["q9"].value;
    var q10 = document.forms["JavaScript-quiz"]["q10"].value;

    //validation
    for(var i=1; i<=total;i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert("Please answer all the Questions!!");
            return false;
        }
    }
    
    //answers
    var answer = ['a','c','c','a','b','b','a','b','a','c'];

    for( i=1; i<=total;i++){
        if(eval('q'+i) == answer[i-1]){
            score++;
        }
    }

    //score display

    var result = document.getElementById('result');
    result.innerHTML = '<p>Your Score is <bold>'+score+'</bold> out of <bold>'+total+'</bold></p>';
    
    return false;
}



//Accordion
var action ="click";
var speed = "100";

$(document).ready(function () {
   $('li.q').on(action, function(){
      $(this).next()
          .slideToggle(speed)
            .siblings('li.a')
                .slideUp();
   });
});
