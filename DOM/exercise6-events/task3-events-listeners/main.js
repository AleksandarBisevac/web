var chatBox = document.querySelector("#chat");
var btnSend = document.querySelector("#send");
var chatInput = document.querySelector("#text-area");

chatBox.style.height = "85vh";
chatBox.style.overflow = "auto";

btnSend.addEventListener("click", function () {
  var input = chatInput.value;
  chatBox.innerHTML += "<p class='lead'>" + input + "</p>";
  chatInput.value = "";
});
