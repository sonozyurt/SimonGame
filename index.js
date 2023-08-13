var colorSequence = [];
var clickedButtonSeq = [];
var level = 1;

$(document).keydown(function () {
  if (
    $("#level-title").text() === "Press A Key to Start" ||
    $("#level-title").text() === "Game Over, Press Any Key to Restart"
  ) {
    $("#level-title").text(`Level ${level}`);
    clickedButtonSeq = [];
    colorSequence = [];
    var color = randomColor();
  }
});

$(".btn").click(function (event) {
  var clickedButton = event.target.id;
  if (
    $("#level-title").text() !== "Game Over, Press Any Key to Restart" &&
    $("#level-title").text() !== "Press A Key to Start"
  ) {
    clickedButtonSeq.push(clickedButton);
    playSound(clickedButton);
    pressAnimation(clickedButton);
    checkAnswer(clickedButtonSeq.length - 1);
  }
});

function randomColor() {
  var colors = ["green", "red", "yellow", "blue"];
  randomNumber = Math.floor(Math.random() * 4);
  var choosenColor = colors[randomNumber];
  colorSequence.push(choosenColor);
  nextStepAnimation(choosenColor);
  playSound(choosenColor);
  return choosenColor;
}

function nextStepAnimation(color) {
  $(`.${color}`).fadeOut(200).fadeIn(200);
}

function checkAnswer(currentLevel) {
  if (clickedButtonSeq[currentLevel] === colorSequence[currentLevel]) {
    if (clickedButtonSeq.length === colorSequence.length) {
      setTimeout(() => {
        level++;
        $("#level-title").text(`Level ${level}`);

        randomColor();
      }, 1000);
      clickedButtonSeq = [];
    }
  } else {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
    gameOver();
  }
}

function playSound(name) {
  var audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

function pressAnimation(name) {
  $(`.${name}`).toggleClass("pressed");
  setTimeout(() => {
    $(`.${name}`).toggleClass("pressed");
  }, 100);
}

function gameOver() {
  $("body").toggleClass("game-over");
  setTimeout(() => {
    $("body").toggleClass("game-over");
  }, 100);
}
