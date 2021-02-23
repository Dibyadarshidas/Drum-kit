var numOfDrums = document.querySelectorAll(".drum").length
// For Mouse Touch
for (i = 0; i < numOfDrums; i++) {
  document.querySelectorAll("button.drum")[i].addEventListener("click", function() {
    var drumKey = this.innerHTML;
    makeSound(drumKey);
    makeAnimation(drumKey);
  });
}
// For Keyword Press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});
// Sound
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      console.log(key);
      break;
    case "a":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log(event.key);
  }
}
// Animation
function makeAnimation(key){
  var dkey = "." + key;
  document.querySelector(dkey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector(dkey).classList.remove("pressed");
  },100);
}
