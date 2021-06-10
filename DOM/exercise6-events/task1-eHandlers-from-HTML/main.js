function toogle() {
  var container = document.querySelector(".container-fluid");
  if (container.classList.contains("bg-dark")) {
    container.className =
      "container-fluid d-flex justify-content-center vh-100 bg-light";
  } else {
    container.className =
      "container-fluid d-flex justify-content-center vh-100 bg-dark";
  }
}
