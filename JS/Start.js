// shows hint when hover
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// hide the wrong password massege and the sed emoji
document.querySelector('.wrong-password').style.display = "none";
document.querySelector('.rolling-eyes').style.display = "none";

// checks if the password is correct
document.querySelector("button").addEventListener("click",function(){
  var password = document.querySelector('input').value;
    if(password==="432017"){
      window.location.replace("BirthdayBlessing.html");
    }else{
      document.querySelector('.wrong-password').style.display = "";
      document.querySelector('.rolling-eyes').style.display = "";
    }
});
