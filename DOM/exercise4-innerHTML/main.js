var allDivs = document.querySelectorAll("div");
var firstDiv = allDivs[0];
var secondDiv = allDivs[allDivs.length - 1];

function createDropdown(arr, node) {
  var select = "";
  select += "<select id='dropdown' name='dropdown'>";
  select += "<option value='0'>Select from the list: </option>";
  arr.forEach(function (element, index) {
    select += "<option value=" + index + "> " + element + " </option>";
  });
  select += "</select>";
  node.innerHTML = select;
}

createDropdown(["1", "2", "3", "4"], firstDiv);
createDropdown(["Janko", "Marko", "Milica", "Jelena"], secondDiv);
