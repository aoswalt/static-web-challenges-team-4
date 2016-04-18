var turn = 0;
var gameOver = false;

var boxes = document.getElementsByTagName("td");

for(var i = 0; i < boxes.length; ++i) {
  boxes[i].onclick = function() {
    if(!gameOver && this.className.length === 0) { play.call(this); }
  }
}

function play() {
  var activePlayer = (turn % 2 === 0) ? "x" : "o";
  this.className = activePlayer;

  if(isWin()) {
    alert(activePlayer + " wins!");
    gameOver = true;
  } else {
    ++turn;
    if(turn >= 9) {
      alert("Draw...");
      gameOver = true;
    }
  }
}

function isWin() {
  var boxes = document.getElementsByTagName("td");

  //NOTE(adam): rows
  if(isMatch(boxes[0], boxes[1], boxes[2])) { return true; }
  if(isMatch(boxes[3], boxes[4], boxes[5])) { return true; }
  if(isMatch(boxes[6], boxes[7], boxes[8])) { return true; }
  //NOTE(adam): cols
  if(isMatch(boxes[0], boxes[3], boxes[6])) { return true; }
  if(isMatch(boxes[1], boxes[4], boxes[7])) { return true; }
  if(isMatch(boxes[2], boxes[5], boxes[8])) { return true; }
  //NOTE(adam): diag
  if(isMatch(boxes[0], boxes[4], boxes[8])) { return true; }
  if(isMatch(boxes[2], boxes[4], boxes[6])) { return true; }

  return false;
}

function isMatch(box1, box2, box3) {
  if(box1.className == "" || box2.className == "" || box3.className == "") { return false; }
  return (box1.className == box2.className && box2.className == box3.className);
}
