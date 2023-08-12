// var colorSequence = [];
// var colorsChosenByPlayer = [];
// var level = 1;

// function createRandomNumber() {
//   return Math.floor(Math.random() * 4);
// }

// function newColor() {
//   var colors = ["red", "green", "yellow", "blue"];
//   $("#level-title").text(`Level ${level}`);
//   const randomNumber = createRandomNumber();
//   colorSequence.push(colors[randomNumber]);
//   $(`.${colors[randomNumber]}`).fadeOut(200).fadeIn(200);
//   return colors[randomNumber];
// }

// $(".btn").click(function (event) {
//   var currentColor = newColor();
//   colorsChosenByPlayer.push(event.target.id);
//   playSound(event.target.id);
//   pressAnimation(event.target.id);
// });

// $(document).keydown(function () {
//   if ($("#level-title").text() === "Press A Key to Start") {
//     var color = newColor();
//     playSound(color);
//     $("#level-title").text(`Level ${level}`);
//   }
// });

// function playSound(name) {
//   var audio = new Audio(`sounds/${name}.mp3`);
//   audio.play();
// }

// function pressAnimation(name) {
//   $(`.${name}`).toggleClass("pressed");
//   setTimeout(() => {
//     $(`.${name}`).toggleClass("pressed");
//   }, 100);
// }

const colorSequence = [];
var clickedButtonSeq = [];

function randomColor() {
  var colors = ["green", "red", "yellow", "blue"];
  randomNumber = Math.floor(Math.random() * 4);
  var choosenColor = colors[randomNumber];
  colorSequence.push(choosenColor);
  return choosenColor;
}

$(document).keydown(function () {
  if ($("#level-title").text() === "Press A Key to Start") {
    $("#level-title").text("Level 1");
    var color = randomColor();
    $(`.${color}`).fadeOut(200).fadeIn(200);
  }
});

$(".btn").click(function (event) {
  var level = 1;

  var clickedButton = event.target.id;
  clickedButtonSeq.push(clickedButton);
  for (let i = 0; i < colorSequence.length; i++) {
    if (colorSequence[i] !== clickedButtonSeq[i]) {
      $("#level-title").text("Game over");
    }
  }
  var color = randomColor();
  $(`.${color}`).fadeOut(200).fadeIn(200);
  $("#level-title").text(`Level ${level}`);
  level++;
});
