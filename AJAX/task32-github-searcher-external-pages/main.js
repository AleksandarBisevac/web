let $searchInput = $("#search");
let $resultWrapper = $("#result-wrapper");
let $objects = []; // ubaci response.items!
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
      $objects.forEach((element) => {
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
        let $id = $(this).attr("data-key");
        let obj = $objects.filter((element) => element.id == $id)[0];
        console.log(obj);
        localStorage.setItem("id", `${obj.login}`);
        window.location.replace("response.html");
      });
    });
  }
});
