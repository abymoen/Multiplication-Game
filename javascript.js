var playing = false;
var score;
var action;
var time;
var x;
var y;
var product;

document.getElementById("start").onclick = function () {
    
    if(playing) {
        location.reload();
    } else {
        playing = true;
        score = 0;
        time = 60;
        
        document.getElementById("timeremaining").innerHTML = time;
        document.getElementById("value").innerHTML = score;
        show("timer");
        hide("gameover");
        document.getElementById("start").innerHTML = "RESTART";
        
        startCountdown();
        
        generateQA();
    }
};

for (i=1; i<5; i++) {
    document.getElementById("box1").onclick = function() {
        if(playing) {
            var right = checkAnswer("box1");
            if (right) {
                show("correct")
                setTimeout(function() {
                    hide("correct")
                }, 1000)
                score++;
                document.getElementById("value").innerHTML = score;
                generateQA();
            } else{
                show("wrong")
                setTimeout(function() {
                    hide("wrong")
                }, 1000)
            }
        } else {

        }
    }
}

document.getElementById("box2").onclick = function() {
    if(playing) {
        var right = checkAnswer("box2");
        if (right) {
            show("correct")
            setTimeout(function() {
                hide("correct")
            }, 1000)
            score++;
            document.getElementById("value").innerHTML = score;
            generateQA();
        } else {
            show("wrong")
            setTimeout(function() {
                hide("wrong")
            }, 1000)
        } 
    } else {
        
    }
}

document.getElementById("box3").onclick = function() {
    if(playing) {
        var right = checkAnswer("box3");
        if (right) {
            show("correct")
            setTimeout(function() {
                hide("correct")
            }, 1000)
            score++;
            document.getElementById("value").innerHTML = score;
            generateQA();
        } else {
            show("wrong")
            setTimeout(function() {
                hide("wrong")
            }, 1000)
        }
    } else {
        
    }
}

document.getElementById("box4").onclick = function() {
    if(playing) {
        var right = checkAnswer("box4");
        if (right) {
            show("correct")
            setTimeout(function() {
                hide("correct")
            }, 1000)
            score++;
            document.getElementById("value").innerHTML = score;
            generateQA();
        } else {
            show("wrong")
            setTimeout(function() {
                hide("wrong")
            }, 1000)
        }
    } else {

    }
}

function startCountdown() {
    action = setInterval(function() {
        time -= 1;
        document.getElementById("timeremaining").innerHTML = time;
        if(time<=0) {
            stopCountdown();
            gameOver();
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(action);
}

function gameOver() {
    document.getElementById("finalvalue").innerHTML = score;
    document.getElementById("start").innerHTML = "START"
    show("gameover");
    hide("timer");
    playing = false;
}

function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
}

function show(id) {
    document.getElementById(id).style.visibility = "visible";
}

function generateQA() {
    x = Math.round((Math.random()*9) + 1);
    y = Math.round((Math.random()*9) + 1);
    product = x*y;
    
    document.getElementById("question").innerHTML = x + "x" + y
    
    var correctpos = 1+Math.round(3*Math.random());
    
    document.getElementById("box"+correctpos).innerHTML = product;
    
    var answers = [];
    answers[0] = product;
    var j = 1;
    
    for(i=1; i<5; i++) {
        if(i != correctpos) {
            var wrongAnswer = Math.round(Math.random()*100);
            
            while (wrongAnswer == product) {
                wrongAnswer = Math.round(Math.random()*100);
            }
            
            answers[j] = wrongAnswer;
            for(k=1; k<j; k++) {
                while (answers[k] == answers[j]) {
                    wrongAnswer= Math.round(Math.random()*100);
                }
            }
            
            j++;
            answers[j] = wrongAnswer;
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            
        }
    } 
}

function checkAnswer(id) {
    var guess = document.getElementById(id).innerHTML
    if (guess == product) {
        return true;
    } else {
        return false;
    }
}