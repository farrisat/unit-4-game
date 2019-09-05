// Set all variables 
var greenDragon ;
var purpleDragon ;
var redDragon ;
var yellowDragon ;

var targetScore = 0;

var wins =0;
var losses =0;
var totalScore =0;

// Randomizers according to needs. Dragons 1-12 and target 19-120
function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}

function startGame() {
    greenDragon = randomNumber(1,12)
    purpleDragon = randomNumber(1,12)
    redDragon = randomNumber(1,12)
    yellowDragon = randomNumber(1,12)

    targetScore = randomNumber(19,120)
    totalScore = 0
    console.log(redDragon, greenDragon, purpleDragon, yellowDragon, targetScore);

    $("#targetScore").html(targetScore)
    $("#totalScore").html(totalScore)
}

startGame()

function checkWin() {
    if (totalScore>targetScore) {
        alert("Sad you lose!");
        losses++;
        $("#losses").html(losses);

        startGame();
    
    } else if (totalScore===targetScore) {
        alert("Good job!");
        wins++;
        $("#wins").html(wins);

        startGame();

    } 
}

    $("#green-dragon").on("click", function (){
        console.log("you clicked the Green Dragon");
        totalScore += greenDragon;
        $("#totalScore").html(totalScore);
        checkWin();
    })

    $("#purpleDragon").on("click", function (){
        console.log("you clicked the purple Dragon");
        totalScore += purpleDragon;
        $("#totalScore").html(totalScore);
        checkWin();
    })

    $("#redDragon").on("click", function (){
        console.log("you clicked the red Dragon");
        totalScore += redDragon;
        $("#totalScore").html(totalScore);
        checkWin();
    })

    $("#yellowDragon").on("click", function (){
        console.log("you clicked the yellow Dragon");
        totalScore += yellowDragon;
        $("#totalScore").html(totalScore);
        checkWin();
    })

    


