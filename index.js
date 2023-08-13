const colorSequence = [];
const clickedButtonSeq = [];
var level = 1;
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
  if (
    $("#level-title").text() !== "Game Over Refresh The Page" &&
    $("#level-title").text() !== "Press A Key to Start"
  ) {
    var level = 1;
    var clickedButton = event.target.id;
    clickedButtonSeq.push(clickedButton);
    if (clickedButtonSeq.length === colorSequence.length) {
      for (let i = 0; i < colorSequence.length; i++) {
        if (colorSequence[i] !== clickedButtonSeq[i]) {
          $("#level-title").text("Game Over Refresh The Page");
        }
      }
      var color = randomColor();
      $(`.${color}`).fadeOut(200).fadeIn(200);

      clickedButtonSeq = [];
    }
  }
});
