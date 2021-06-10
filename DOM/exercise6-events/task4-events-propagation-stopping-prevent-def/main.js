var player = document.querySelector("#player");
var wrappDiv = document.querySelector(".wrapp");
var btnStop = document.querySelector("#stop");
var btnMove = document.querySelector("#move");

wrappDiv.addEventListener("click", setPosition);
btnStop.addEventListener("click", stopMoving);
btnMove.addEventListener("click", startMoving);

function setPosition(e) {
  if (player.className !== "inactive") {
    player.style.top = e.y - this.offsetTop - 100 + "px";
    player.style.left = e.x - this.offsetLeft - 50 + "px";
  } else {
    e.preventDefault();
  }
}

function stopMoving() {
  player.className = "inactive";
  //or removeEventListener from wrappDiv
}
function startMoving(e) {
  e.stopPropagation();
  player.className = "active";
  //or addEventListener to wrappDiv
}
