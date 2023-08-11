var colorSequence = [];

function createRandomNumber() {
  return Math.floor(Math.random() * 4);
}

function newColor() {
  var colors = ["red", "green", "yellow", "blue"];
  colorSequence.push(colors[createRandomNumber]);
}

$(document).keydown(function (event) {
  $("#level-title").text("Game started");
  $(".btn").toggleClass("pressed");
});
