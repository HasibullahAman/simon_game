var gamePattern = new Array();
var buttonColor = ['red', 'green', 'blue','yellow'];
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    return randomNumber;
}

var randomChosenColour = buttonColor[nextSequence()];
console.log(randomChosenColour);
gamePattern.push(randomChosenColour);

$('#randomChosenColour').fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);
