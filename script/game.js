var gamePattern = new Array();
var buttonColor = ['red', 'green', 'blue','yellow'];
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    // console.log(randomNumber);
    return randomNumber;
}

var randomChosenColour = buttonColor[nextSequence()];
gamePattern.push(randomChosenColour);

$(randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
