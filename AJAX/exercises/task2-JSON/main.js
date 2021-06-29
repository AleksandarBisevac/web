let imgWrapper = document.querySelector(".img-wrapper");
let dogBtn = document.querySelector("#doggy");
let xml = new XMLHttpRequest();

dogBtn.addEventListener("click", function () {
  xml.open("GET", "https://dog.ceo/api/breeds/image/random");
  xml.addEventListener("readystatechange", function () {
    if (xml.readyState === 4 && xml.status === 200) {
      showImage();
    }
  });
  xml.send();
});

function showImage() {
  imgWrapper.innerHTML = "";
  let data = xml.responseText;
  let parserJSON = JSON.parse(data);
  console.log(parserJSON);
  let img = document.createElement("img");
  img.setAttribute("src", `${parserJSON.message}`);
  console.log(parserJSON.message);
  imgWrapper.appendChild(img);
}
