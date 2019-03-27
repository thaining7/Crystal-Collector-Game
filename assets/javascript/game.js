

$(document).ready(function() {

// =============global variables=============
var startValue = generateRandomBtwn(19, 120);
var crystalValueArray = [
    generateRandomBtwn(1, 12), generateRandomBtwn(1, 12), generateRandomBtwn(1, 12), generateRandomBtwn(1, 12)
];
var wins = 0;
var losses = 0;
var totalScore = 0;


console.log("----------Game Target----------");
console.log("---------"+ startValue +"-----------");

console.log("---------Crystals-----------");
console.log("--------"+ crystalValueArray +"------------");
// =============end global variables=============

// =============functions=============

// start reset game function

function resetGame() {
    startValue = generateRandomBtwn(19, 120);
    crystalValueArray = [
    generateRandomBtwn(1, 12), generateRandomBtwn(1, 12), generateRandomBtwn(1, 12), generateRandomBtwn(1, 12)
];
    totalScore = 0;
    $("#total-score").text(totalScore);
    $("#start-value").text(startValue);
}

// end reset function

// start generateRandomBtwn
function generateRandomBtwn(minNum, maxNum) {
    var randomNumber = 0;
 
    randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

    return randomNumber;

}// end generateRandomBtwn


// =============end functions=============

// =============main process=============
resetGame();


$(".crystal-display").on("click", function() {
   
    if ($(this).attr('id') == "crystal1") {
        totalScore += crystalValueArray[0];
    }
    else if ($(this).attr('id') == "crystal2") {
        totalScore += crystalValueArray[1];
        }
    else if ($(this).attr('id') == "crystal3") {
        totalScore += crystalValueArray[2];
    }
    else if ($(this).attr('id') == "crystal4") {
        totalScore += crystalValueArray[3];
    }
    $("#total-score").text(totalScore);
    console.log("total score= " + totalScore);
    if (totalScore == startValue) {
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#winorloss").text("You Win! ");
        resetGame();
    }
    else if (totalScore > startValue) {
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#winorloss").text("You Lose! ");
        resetGame();
    }
});







// =============end main process=============
});