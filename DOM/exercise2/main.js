/*
Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One &lt;li&gt; element in the second list should have a class “active”, which sets its
background color.
Create a function that selects the &lt;li&gt; element with class “active”.
Remove the class from that element, and then select the first &lt;li&gt; element in the
first unordered list using node relations.
Apply class to that newly selected &lt;li&gt; element
*/

var lastUl =
  document.querySelectorAll("ul")[document.querySelectorAll("ul").length - 1];

var firstLi =
  document.children[0].children[1].children[0].children[0].children[0];

function selectLi(num) {
  var selectedLi = lastUl.children[num - 1];
  selectedLi.setAttribute("class", "active");
  return selectedLi;
}

function removeActiveAndSetFirst(arg) {
  if (arg.className === "active") {
    arg.className = "";
    firstLi.className = "active";
  }
}

var activeLi = selectLi(1);
removeActiveAndSetFirst(activeLi);
