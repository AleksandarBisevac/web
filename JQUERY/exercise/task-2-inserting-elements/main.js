/*
Inserting elements
Start with a blank HTML page
Using just JS (jQuery), create an image gallery
All links to images in the gallery should be elements of the same array!
When the gallery is created and visible on the page, create gallery title and
insert it before the gallery images
Go through gallery images and set a random size to each gallery image
Bonus:
Set a green border around each image whose width is less than 200px up
until the first one that doesn&#39;t meet that requirement (i.e. when you get to
the first img that is more than 200px wide, stop checking and setting green
border).
*/
body = $("body");
body.prepend("<div class='gallery'><div>");
$(".gallery").prepend("<h1>Gallery</h1>");
gallery = $(".gallery");

var galleryArr = [
  "https://i0.wp.com/www.comicsbeat.com/wp-content/uploads/2021/05/batman-the-world-lg.jpg?fit=1200,701&ssl=1",
  "https://variety.com/wp-content/uploads/2021/05/Batman_Caped_Crusader2C_COLOR-e1621372528477.jpg",
  "https://cdn.vox-cdn.com/thumbor/K9MniLtwAnlXnDwxQD3HyU9ifZM=/0x0:2040x1360/1400x933/filters:focal(918x492:1244x818):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67660827/IMG_A8E2311AD39C_1.0.jpeg",
  "https://www.hollywoodreporter.com/wp-content/uploads/2019/09/batman_by_tony_daniel_-_publicity_-_h_2019.jpg",
  "https://sm.ign.com/t/ign_in/feature/w/why-the-fl/why-the-flashs-bloody-teaser-hints-at-a-dark-turn-for-batman_yafx.1200.jpg",
];
function randSize() {
  var rand = Math.round(Math.random() * 400 + 100);
  return rand + "";
}
insertImg();
function insertImg() {
  galleryArr.forEach(function (element) {
    gallery.append("<img src=" + element + ">");
  });
  $("img").each(function (index, element) {
    $(element).css({
      width: randSize(),
      height: randSize(),
    });
  });
}
var images = $("img");

setBorder();
function setBorder() {
  var counter = 0;
  for (var i = 0; i < galleryArr.length; i++) {
    if (images.eq(i).css("width") < "200px") {
      counter++;
      images.eq(i).css({
        border: "2px solid green",
      });
    } else if (images.eq(i).css("width") < "200px" || counter === 0) {
      continue;
    } else {
      break;
    }
  }
}
