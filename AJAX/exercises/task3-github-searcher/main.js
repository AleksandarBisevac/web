let $searchInput = $("#search");
let $resultWrapper = $("#result-wrapper");
let $showProfile = $("#show-profile");
let $btnHideProfile = $("#x");
let $repInfo = $("#rep-info");
let $userImg = $(".img-user");
let $userName = $("header h4");
let $objects = []; // ubaci response.items!
let $repositories = []; // ubaci sve repozitorijume od user-a!
$searchInput.keydown(function (e) {
  if (e.keyCode == 13) {
    let $subject = $searchInput.val();
    // šaljemo zahtev serveru za pretragu user-a na GitHub-u
    $.ajax({
      url: `https://api.github.com/search/users?q=${$subject}+in:user`,
      type: "GET",
      dataType: "json",
    }).done(function (response) {
      // dobijeni rezultat kopiramo u novi niz &objects
      $objects = response.items.map((x) => x);
      $resultWrapper.html("");
      // za svaki element unutar $objects stvaramo novi DIV i ubacujemo potrebne podatke i prikazujemo ih
      $objects.forEach((element, index) => {
        let $responseBox = $("<div>");
        $responseBox.html(
          `<div class="img-handler">
            <img src="${element.avatar_url}">
          </div>
          <h3 data-key=${element.id}>${element.login}</h3>`
        );
        $resultWrapper.append($responseBox);
        $responseBox.addClass("response-box");
      });

      /* dajemo event listener za svaki h3 */
      $(".response-box h3").click(function (e) {
        // prikazujemo DIV sa našim rezultatima i dodeljujemo dva osluškivača za ESC i klik, koji sakrivaju naš DIV
        $showProfile.removeClass("show-hide");
        $("body").keydown(function (e) {
          if (e.keyCode == 27) {
            $showProfile.addClass("show-hide");
          }
        });
        $btnHideProfile.click(function () {
          $showProfile.addClass("show-hide");
        });
        let $id = $(this).attr("data-key");
        let obj = $objects.filter((element) => element.id == $id)[0];
        /*
         * Radimo novi poziv ka repozitorijumima od našeg usera!
         */
        $.ajax({
          url: `https://api.github.com/users/${obj.login}/repos`,
          type: "GET",
          dataType: "json",
        }).done(function (response) {
          // ponovo pravimo kopiju odgovora u novi niz
          $repositories = response.map((x) => x);
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
          $userImg.html(`<img src="${obj.avatar_url}">`);
          $userName.text(obj.login);
        });
      });
    });
  }
});
