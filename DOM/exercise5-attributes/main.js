var submitBtn = document.getElementById("btn-submit");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var formInputs = document.querySelectorAll("form input");
  formInputs.forEach(function (element) {
    if (element.value === "") {
      element.className = "red-border";
      element.parentElement.innerHTML += "<p>obavezno polje</p>";
    }
  });
});
