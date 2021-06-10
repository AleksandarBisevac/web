var container = document.querySelector(".container-fluid");
var interval;

var containerHandler = function () {
  if (container.classList.contains("bg-dark")) {
    container.className = "container-fluid bg-secondary vh-100";
  } else {
    container.className = "container-fluid bg-dark vh-100";
  }
};

function automaticToggle() {
  interval = setInterval(containerHandler, 2000);
}

function toggleOff() {
  clearInterval(interval);
}
