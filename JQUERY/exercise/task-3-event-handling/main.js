$(document).ready(function () {
  var $player = $("#player");
  $(".wrapp").on("click", function (event) {
    var positionX = event.clientX - this.offsetLeft - 50;
    var positionY = event.clientY - this.offsetTop - 100;
    if (!$player.hasClass("inactive")) {
      $player
        .fadeOut(500, function () {
          $player.css({
            top: positionY + "px",
            left: positionX + "px",
          });
        })
        .fadeIn(500);
    }
  });

  $("#move").click(function (e) {
    e.stopPropagation();
    $player.toggleClass("inactive");
  });
});
