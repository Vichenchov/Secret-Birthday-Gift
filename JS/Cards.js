var vid = document.getElementById("vid-2");
const video = document.getElementById("vid-3");
var Italy = document.getElementById("vid-5");

function playVid1() {
    vid.play();
}

function playVid2() {
    Italy.play();
}

video.addEventListener("mouseover", function () {
    this.play();
});


$(".btn").click(function () {
    var userClickedButton = $(this).attr("id");
    playSound(userClickedButton);
});

function playSound(btn) {
    var audio = new Audio();
    switch (btn) {
        case "btn-1":
            audio = new Audio("Audio/Iloveyou.mp3");
            audio.play();
            break;
        case "btn-3":
            audio = new Audio("Audio/Shovala.mp3");
            audio.play();
            break;
        case "btn-4":
            audio = new Audio("Audio/RoziNaknik.mp3");
            audio.play();
            break;
        case "btn-6":
            audio = new Audio("Audio/Red.mp3");
            audio.play();
            break;
    }
}