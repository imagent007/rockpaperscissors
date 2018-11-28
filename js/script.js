// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
var computerChoice=Math.random();
var winner;


// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
    $("#userChoice").text($("#input").val());
    
    if (computerChoice <= .3) {
        $("#computerChoice").text("rock");
    } else if (computerChoice <=.6) {
        $("#computerChoice").text("paper");
    } else {
        $("#computerChoice").text("scissors");
    }
    
    if (userChoice=== "rock" && computerChoice=== "rock"){
        console.log("tie")
    } 
    

});