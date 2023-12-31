// alert("Javascript has been successfully integrated.");
// document.querySelector("button").addEventListener("click", btnCl);
// function btnCl() {
//     alert("Clicked the button: ");
// }
var audio = new Audio('sounds/crash.mp3');
for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {                               //in document.querySelectorAll("button .drum")) {
    console.log(i);
    document.querySelectorAll("button.drum")[i].addEventListener("click", function () {
        var btnInnerHTML = this.innerHTML;
        buttonAnimation(btnInnerHTML);
        switch (btnInnerHTML) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kick_bass = new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            default: console.log(btnInnerHTML);
        }
    });
}
document,addEventListener("keydown", function (e) {
    document.querySelector("."+e.key+".drum").click();
});

function buttonAnimation (key) {
    document.querySelector("."+key).classList.toggle("pressed");
    setTimeout(function () {
        document.querySelector("."+key).classList.toggle("pressed");
    },400)
}

// audio.play();
//         alert("Drum "+i+ " has been clicked.");