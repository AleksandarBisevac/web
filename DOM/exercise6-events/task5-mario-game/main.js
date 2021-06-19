var container = document.querySelector(".container");
var imgWrapper = document.querySelector(".img-wrapper");
var mario = document.querySelector("#mario");
var marioRun = document.querySelector("#marioRun");
var bg1 = document.querySelector("#bg1");
var bg2 = document.querySelector("#bg2");
//ismariorunning false ako ne trci
document.addEventListener("keydown", play);

function play(e) {
  console.log(name);
  var name = e.key;
  var code = e.code;
  if (code === "ArrowRight") {
    run();
  } else if (code === "ArrowUp") {
    jump();
  } else if (code === "ArrowDown") {
    still();
  }
}
function run() {
  mario.style.display = "none";
  marioRun.style.display = "block";
  runBackground();
}

function jump() {
  mario.style.display = "block";
  marioRun.style.display = "none";
  mario.style.top = "350px";
  setTimeout(still, 1000);
}

function still() {
  mario.style.display = "block";
  marioRun.style.display = "none";
  mario.style.top = "480px";
}

function runBackground() {
  var integral = 0;
  var loop = setInterval(function () {
    integral++;
    if (integral !== 10) {
      bg1.style.left = 0 - integral + "%";
      bg2.style.left = 100 - integral + "%";
    } else {
      clearInterval(loop);
      bg1.style.left = "0";
      bg2.style.left = "100%";
      still();
    }
  }, 50);
}
