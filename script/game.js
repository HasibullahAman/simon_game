var gamePattern = new Array();
var buttonColor = ['red', 'green', 'blue','yellow'];



function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4)
    return randomNumber;
}
var randomChosenColour = buttonColor[nextSequence()];
console.log(randomChosenColour);
gamePattern.push(randomChosenColour);

$('#'+randomChosenColour).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);




function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play()
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play()
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play()
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play()
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play()
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play()
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play()
            break;
        default:console.log(getinner)
            break;
    }
}