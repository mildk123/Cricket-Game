
// ForOddEven =  Math.floor(Math.random()*2 + 1);
// ForScore =  Math.floor(Math.random()*7 + 1);  // 7 Means Out

// var OE=-1;			//0 odd & 1 even
// var inp
// var callback;
// var userBats=-1;	//if user bats(1) or bowls(0) in first innings
// var userScore=0, cpuScore=0;




var team1 = { Name: "", score: 0 };
var team2 = { Name: "Computer", score: 0 };
var currentTeam = "";
var oppositeTeam = "";

var target = 0;
var counter = 0;
var currentScore = 0;
var score = new Array(12);
var run;

function S(id) {
    return document.getElementById(id);
}

S("firstScreen").style.display = "block";

function nameFunc() {
    team1.Name = S('teamName').value;
    console.log("User's Team Name is " + team1.Name);
    S("firstScreen").style.display = "none";
    S("toss").style.display = "block";
}



function checkToss(value) {
    if (value == 1) {
        var selection = "Odd";
    }
    else {
        var selection = "Even";
    }
    console.log(team1.Name + " selected " + selection);

    var userInput = value;
    var randomNum = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    if (randomNum == userInput) {
        S("tossStatus").innerHTML = "You won the toss.<br> Do you want to Bat or Bowl first?";
        currentTeam = team1.Name;
        oppositeTeam = team2.Name;

        S("toss").style.display = "none";
        S("ask_user_bat").style.display = "block"
    }

    else {
        alert("Computer won the toss, and decided to Bat first.");
        console.log("Computer Chose to BAT first!")
        currentTeam = team2.Name;
        oppositeTeam = team1.Name;

        S("toss").style.display = "none";
        S("mainScreen").style.display = "block"
    }
}

// if I win the toss
function checkMode(value) {
    if (value == 1) {
        var modeSelection = "BAT";
        console.log(currentTeam + " selected to " + modeSelection);

        S("ask_user_bat").style.display = "none";
        S("mainScreen").style.display = "block";
    }
    else {
        var modeSelection = "BALL";
        console.log(currentTeam + " selected to " + modeSelection);

        S("ask_user_bat").style.display = "none";
        S("mainScreen").style.display = "block";
    }
}
function UpdateScores() {

    if (counter < 12) {
        run = Math.floor(Math.random() * 6 + 1);
        console.log(run);
        score[counter] = run;
        counter++
        if (target != 0) {
            currentScore = currentScore + run;
            if (currentScore > target) {
                alert(oppositeTeam + " Wins");
            }
        }
    }
    else {
        console.log("Overs Finished!");
        if (currentScore > target) {
            alert(oppositeTeam + " Wins");
        }
        else if (currentScore < target) {
            alert(currentTeam + " Wins");
        }
        else if (target == 0 || currentScore == 0) {
            for (i = 0; i < 12; i++) {
                target = target + score[i];
            }
            console.log("Target:" + target);
            document.getElementById('totalTarget').innerHTML = target;
            counter = 0;
            alert("Overs Finished! Now next team will bat");
        }
    }

}


