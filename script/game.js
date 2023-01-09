var buttonColor = ['red', 'green', 'blue','yellow'];
function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    // console.log(randomNumber);
    return randomNumber;
}

console.log(nextSequence());
var randomChosenColour = buttonColor[nextSequence];
console.log(randomChosenColour);