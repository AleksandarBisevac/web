/*
Access/Update Text Node
Create an unordered list containing &lt;li&gt; items that represent navigation.
Create a function that takes text from one of the &lt;li&gt; elements and presents it on
screen using alert.

Create one more function.
The function should take some text as an argument.
The function should select the last &lt;li&gt; element in the list and replace its text with
text passed as the function argument.
*/

function alertLiText(num) {
  var allLi = document.querySelectorAll("ul>li");
  if (num <= allLi.length) {
    var selectedLi = allLi[num - 1];
    selectedLi.className = "selectedLi";
    alert(selectedLi.textContent);
    return selectedLi;
  } else {
    return alert("Unesite broj od 1 - 6");
  }
}

function inputText(arg) {
  var lastLi = document.querySelector("ul>li:last-of-type");
  lastLi.textContent = arg;
}

alertLiText(2);
inputText("Abrakadabra");
