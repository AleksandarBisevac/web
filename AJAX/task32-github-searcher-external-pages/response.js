// let $showProfile = $("#show-profile");
let $repInfo = $("#rep-info");
let $userImg = $(".img-user");
let $userName = $("header h4");
let $btnBack = $("#back");
let $repository; // ubaci sve repozitorijume od user-a!
/*
 * Radimo novi poziv ka repozitorijumima od našeg usera!
 */
$.ajax({
  url: `https://api.github.com/users/${localStorage.getItem("id")}/repos`,
  type: "GET",
  dataType: "json",
}).done(function (response) {
  $repositories = response.map((x) => x);
  // ponovo pravimo kopiju odgovora u novi niz
  $repInfo.html("");
  // za svaki element unutar $repositories stvaramo novi DIV i ubacujemo potrebne podatke i prikazujemo ih
  $repositories.forEach((element) => {
    let $repItem = $("<div>");
    $repItem.html(`
    <div class="rep-img">
      <img src="github.png">
    </div>
    <a href="${element.html_url}" target="_blank">
      <h4 class="rep-name">${element.name}</h4>
    </a>
    <div class="rep-description">
      <p>${element.description}</p>
    </div>
    <div class="stars">
      &#11088; ${element.stargazers_count}
    </div>`);
    $repInfo.append($repItem);
    $repItem.addClass("rep-item");
  });
  //info usera za header, u prozoru za prikaz direktorijuma
  $userImg.html(`<img src="${$repositories[0].owner.avatar_url}">`);
  $userName.text($repositories[0].owner.login);
});
$btnBack.click(function () {
  window.location.replace("index.html");
  localStorage.setItem("id", "");
});
