// Traverse (Redo Gallery)
// Create a page with two “galleries”
// Each gallery should contain 3 photos and it should be wrapped in a div
// Width of the pictures should be 33%
// One picture in the first gallery should have a red border around it
// Red border should be a result of a class named “selected”
// Create a function that selects the image with red borders and removes
// them, then uses traversing technique to navigate to the second gallery and applies the red borders to the middle picture

var $testBtn = $("button");
var $images = $("img");
var $selected = $(".selected");
var $activeHandler = $selected.parent();
var $gall1 = $(".gallery");
var $gall2 = $gall1.siblings(".gallery").last();

$testBtn.click(selectRed);

function selectRed() {
  $selected.removeClass("selected");
  $gall2.children().odd().addClass("selected");
}
