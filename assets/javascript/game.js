$(document).ready(function() {
    //defines target number as random number between 19 and 120
    var target = Math.floor(Math.random()*101+19);
    
    //prints target number to #targetnumber header
    $("#targetnumber").text(target);

    //defines each gem as random number between 1 and 12
    var blueGem = Math.floor(Math.random()*11+1);
    var redGem = Math.floor(Math.random()*11+1);
    var greenGem = Math.floor(Math.random()*11+1);
    var purpleGem = Math.floor(Math.random()*11+1);

    //defines initial variables
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    //prints wins, losses, and user score to respective headers
    $("#userScore").text(userScore);
    $("#gameWins").text(wins);
    $("#gameLosses").text(losses);
    

    //resets variables
    function reset() {
        target = Math.floor(Math.random()*101+19);
        userScore = 0;
        $("#userScore").text(userScore);
        $("#targetnumber").text(target);
        console.log("target number: " + target);
        console.log("user Score: " + userScore);


        blueGem = Math.floor(Math.random()*11+1);
        redGem = Math.floor(Math.random()*11+1);
        greenGem = Math.floor(Math.random()*11+1);
        purpleGem = Math.floor(Math.random()*11+1);
    }

    //win function
    function winner() {
        alert("You're a winner!");
        reset();
        wins++;
        console.log("Wins: " + wins);
        $("#gameWins").text(wins);
        
    }

    //loss function
    function loser() {
        alert("You lose! Try again!");
        reset();
        losses++;
        console.log("Losses: " + losses);
        $("#gameLosses").text(losses);
        
    }

    //click listeners on buttons
    $("#blue").on("click", function(){
        userScore = userScore + blueGem;
        console.log("New user score: " + userScore);
        $("#userScore").text(userScore);
        
        if (userScore == target) {
            winner();
        }
        else if (userScore > target) {
            loser();
        }
    })

    $("#red").on("click", function(){
        userScore = userScore + redGem;
        console.log("New user score: " + userScore);
        $("#userScore").text(userScore);
        
        if (userScore == target) {
            winner();
        }
        else if (userScore > target) {
            loser();
        }
    })

    $("#green").on("click", function(){
        userScore = userScore + greenGem;
        console.log("New user score: " + userScore);
        $("#userScore").text(userScore);
        
        if (userScore == target) {
            winner();
            $("#userScore").text(userScore);

        }
        else if (userScore > target) {
            loser();
            $("#userScore").text(userScore);

        }
    })

    $("#purple").on("click", function(){
        userScore = userScore + purpleGem;
        console.log("New user score: " + userScore);
        $("#userScore").text(userScore);
        
        if (userScore == target) {
         winner();
        }
        else if (userScore > target) {
         loser();
        }
})
})