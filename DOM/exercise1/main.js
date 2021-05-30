var ulFirst = document.querySelectorAll("ul")[0];

function setColorToUl() {
  var ulSecond = document.querySelectorAll("ul")[1];
  ulSecond.style.background = "tomato";
}

function getAllLi(selector, className) {
  var allLi = document.querySelectorAll(selector);
  for (var i = 0; i < allLi.length; i++) {
    allLi[i].className = className;
  }
}

function selectLastUl() {
  var lastUlLi = document.querySelectorAll("ul:last-Of-Type>li");
  for (var i = 0; i < lastUlLi.length; i++) {
    lastUlLi[i].className = "color-and-text-li";
  }
}

setColorToUl();
getAllLi("li", "color-li");
selectLastUl();
