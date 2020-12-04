// shows hint when hover
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



// checks if the password is correct
document.querySelector("button").addEventListener("click", function() {
  var password = document.querySelector('input').value;
  if (password === "432017") {
    // window.location.replace("ConnectionPage.html");
    window.location.replace("BirthdayBlessing.html");
  } else {
    var rndNamber = Math.floor(Math.random() * 3) + 1;
    switch (rndNamber) {
      case 1:
        alert("סיסמא שגויה! איך כך?");
        break;
      case 2:
        alert("תשאלי את רוזי אולי היא יודעת");
        break;
      case 3:
        alert("לא ולא, יש לך רמז שם למטה רק תזכרי שרמזים זה לחלשים");
        break;
    }

  }
});
