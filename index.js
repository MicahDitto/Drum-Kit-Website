// var numDrumBtns = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numDrumBtns; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("Button clicked!");}
//   );
// }

//Detecting Button Press
var numDrumBtns = document.querySelectorAll(".drum").length;
for (var i = 0; i < numDrumBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", btnClicked);
}

function btnClicked() {
  
  var btnInnerHTML = this.innerHTML;
  makeSound(btnInnerHTML);
  
  btnAnimation(btnInnerHTML);
  // alert("Button clicked!");
  //   this.style.color = "white";
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
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

    default:
      console.log(btnInnerHTML);
  }
}

function btnAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    // activeButton.setAttribute("class", ".pressed");
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
    
}
