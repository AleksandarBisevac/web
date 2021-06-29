let locationDisplay = document.querySelector("#location");
let inputIP = document.querySelector("#ipAddress");
let findBtn = document.querySelector("#find");

findBtn.addEventListener("click", function () {
  let ipValue = inputIP.value;
  const xml = new XMLHttpRequest();

  xml.open("GET", "http://www.geoplugin.net/xml.gp?ip=" + ipValue);
  xml.addEventListener("readystatechange", function () {
    if (xml.readyState === 4 && xml.status === 200) {
      displayLocation();
    }
  });

  xml.send();

  function displayLocation() {
    // preuzimanje podataka i parsovanje istih
    let data = xml.responseText;
    let parser = new DOMParser();
    let root = parser.parseFromString(data, "text/xml");

    //dom manipulacija sa odgovarajućim podacima
    let location = root.querySelector("geoplugin_countryName").textContent;
    locationDisplay.textContent = location;
    locationDisplay.classList.add("location");
  }
});
