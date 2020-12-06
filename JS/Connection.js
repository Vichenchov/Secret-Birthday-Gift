var imgNum = document.querySelectorAll("img").length;

// for (var i = 0; i < imgNum; i++) {
//   document.querySelectorAll("img")[i].classList.add("hide");
// }

var y = 0;
if ($(window).width() > 689) {
  setInterval(function show() {
    document.querySelectorAll("img")[y].classList.remove("hide");
    y++;
    if (y === 7) {
      clearInterval(show);
      window.location.replace("BirthdayBlessing.html");
    }
  }, 400);
}

if ($(window).width() > 576 && ($(window).width() < 689)) { 
  setInterval(function show() {
    document.querySelectorAll("img")[y].classList.add("show");
    y++;
    if (y === 7) {
      clearInterval(show);
      window.location.replace("BirthdayBlessing.html");
    }
  }, 400);
}

y = 0;
if ($(window).width() <= 576) {
  setInterval(function show() {
    if (y > 0) {
      document.querySelectorAll("img")[y - 1].classList.add("hide");
    }
    document.querySelectorAll("img")[y].classList.remove("hide");
    y++;
    if (y === 7) {
      clearInterval(show);
      window.location.replace("BirthdayBlessing.html");
    }
  }, 400);
}