var song = document.getElementById("audio");
song.volume = 0.1;
song.currentTime = 67.5;

setTimeout(function(){
    song.play();

    setTimeout(function(){
      song.pause();
      song.currentTime = 67.5;
    }, 2000);
}, 14200);


$(window).on("load", function () {
  $(window).scroll(function () {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity") == 0) {
          $(this).fadeTo(500, 1);
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity") == 1) {
          $(this).fadeTo(500, 0);
        }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


$("button").click(function(){
  window.location.replace("CardsPage.html");
});